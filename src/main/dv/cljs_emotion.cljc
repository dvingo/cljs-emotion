(ns dv.cljs-emotion
  (:require
    #?@(:cljs [["react" :as react]
               ["@emotion/hash" :as emotion-hash*]
               ["@emotion/styled" :as styled*]
               ["@emotion/react" :as styled-core :refer [Global ThemeProvider]]
               [goog.object :as g]])
    [clojure.string :as str]
    [clojure.walk :as walk])
  #?(:cljs (:require-macros [dv.cljs-emotion :refer [defstyled]])))

;; Support plain cljs compiler and shadow.
#?(:cljs (def emotion-hash (g/get emotion-hash* "default")))
#?(:cljs (def styled (g/get styled* "default")))
#?(:cljs (def jsx* styled-core/jsx))

;; Used to prevent generated code from needing to require goog.object
(defn obj-set [o k v]
  #?(:cljs (g/set o k v)
     :clj  nil))

(defn obj-get [o k]
  #?(:cljs (g/get o k)
     :clj  nil))

;; from fulcro
#?(:cljs
   (defn force-children
     "Utility function that will force a lazy sequence of children (recursively) into realized
     vectors (React cannot deal with lazy seqs in production mode)"
     [x]
     (if (seq? x)
       (to-array (mapv force-children x))
       x)))

#?(:cljs
   (defn kebab->camel
     [prop]
     (if (str/starts-with? prop ".")
       prop

       (if (str/includes? prop "-")
         (let [words (->> (re-seq #"[a-zA-Z]+" prop)
                       (mapv str/capitalize))]
           (-> words
             (update 0 str/lower-case)
             str/join))
         prop))))

;; todo use the caching strategy seen in reagent.impl.template

#?(:cljs
   (defn camelize-keys
     "Also replaces styled components with their css classname is key position."
     [style-map]
     (walk/postwalk
       (fn in-walk [v]
         (cond
           (keyword? v)
           (-> v name kebab->camel)

           (and (meta v) (contains? (meta v) ::hashed-name))
           (str "." (-> v meta ::hashed-name))

           :else v))
       style-map)))

#?(:cljs
   (defn keyframes [anim-map]
     (styled-core/keyframes (clj->js (camelize-keys anim-map)))))

(def cljs-props-key "dv.cljs-emotion/props")

#?(:cljs
   (defn wrap-call-style-fn [anon-styles?]
     (fn [x]
       (cond

         ;; Another emotion styled component created with this lib.
         (and (meta x) (contains? (meta x) ::hashed-name))
         (str "." (-> x meta ::hashed-name))

         (fn? x)
         (fn [arg]
           ;; arg# is js props passed at runtime, we ship it back and forth js -> cljs -> js

           ;; js->clj is resulting in an infinite recur when children contains another styled component, so we remove it.
           (js-delete arg "children")

           (if anon-styles?
             ;; with anonymous styles there can be no props - so the theme is passed as the only argument
             (clj->js (camelize-keys (x (js->clj arg :keywordize-keys true))))
             (let [cljs-args (assoc (obj-get arg cljs-props-key)
                               :theme (js->clj (obj-get arg "theme") :keywordize-keys true))]
               ;; invoke the user-supplied function which returns style data - convert whatever they return to js data structures.
               (clj->js (camelize-keys (x cljs-args))))))

         ;; maps come up in value position for nested selectors
         (map? x)
         (camelize-keys x)

         :else x))))

#?(:cljs (goog-define ADD_CLASSNAMES "INITIAL"))

#?(:cljs
   (defn add-class-names? []
     (if (boolean? ADD_CLASSNAMES)
       ADD_CLASSNAMES
       goog.DEBUG)))

#?(:cljs
   (defn add-class-name [props class-name]
     (if (object? props)
       (doto props
         (goog.object/set "className"
           (->> [class-name (goog.object/get props "className")]
             (str/join " ")
             (str/trim))))
       (update props :className #(if (nil? %) class-name (str class-name " " %))))))

#?(:cljs (defn hashit [string] (str "dvcss-" (emotion-hash string))))

#?(:cljs
   (defn set-class-name [props class-name]
     (if class-name
       (let [hashed-name (hashit class-name)
             props       (add-class-name props hashed-name)]
         (if (add-class-names?)
           (add-class-name props class-name)
           props))
       props)))

#?(:cljs
   (defn map->obj [m]
     (reduce-kv (fn [o k v]
                  ;; convert keywords to string only in key position
                  (let [new-k (cond-> k (implements? INamed k) name)
                        new-v (cond-> v (map? v) map->obj)]
                    (doto o (obj-set new-k new-v))))
       #js{} m)))

#?(:cljs
   (defn make-js-props [props class-name]
     (if (object? props)
       props
       (let [clj-props (set-class-name props class-name)
             js-props  (map->obj clj-props)]
         (doto js-props (obj-set cljs-props-key clj-props))))))

#?(:cljs
   (defn react-factory [el class-name]
     (fn
       ([]
        (jsx* el (clj->js (set-class-name {} class-name))))
       ([props]
        (try
          (cond
            (or (react/isValidElement props) (string? props))
            (jsx* el (set-class-name #js{} class-name) props)

            (map? props)
            ;; Do not use clj->js in order to preserve clojure data types like keywords that would not
            ;; survive a round-trip clj->js js->clj
            (jsx* el (make-js-props props class-name))

            (object? props)
            (jsx* el (set-class-name props class-name))

            (or (array? props) (coll? props))
            (jsx* el (set-class-name #js{} class-name) (force-children props))

            :else
            (jsx* el (set-class-name #js{} class-name)))

          (catch js/Object e
            (js/console.error "Error invoking an emotion styled component: " e))))

       ([props & children]
        ;; if props are a mapping type and not a react child
        (if (or (and (object? props) (not (react/isValidElement props))) (map? props))
          (let [js-props (make-js-props props class-name)]
            (if (seq children)
              (apply jsx* el js-props (force-children children))
              (jsx* el js-props)))
          (apply jsx* el (set-class-name #js{} class-name) (force-children (list* props children))))))))

#?(:clj
   (defn get-type
     [styled-arg tag-name]
     (cond
       ;; if literals, don't need to determine type at runtime
       ;; a dom element like :div, same as styled.div``
       (string? tag-name) `(obj-get ~styled-arg ~tag-name)
       (keyword? tag-name) `(obj-get ~styled-arg ~(name tag-name))
       :else
       `(cond
          (string? ~tag-name)
          (obj-get ~styled-arg ~tag-name)

          (keyword? ~tag-name)
          (obj-get ~styled-arg ~(name tag-name))

          ;; Another styled component
          (::styled (meta ~tag-name))
          (.call ~styled-arg ~styled-arg (::styled (meta ~tag-name)))

          ;; A React component
          :else
          (.call ~styled-arg ~styled-arg ~tag-name)))))

#?(:clj
   (defn get-cls-name
     [namespace-name print-style component-sym]
     (case print-style
       :full (str namespace-name "/" component-sym)
       :short (str component-sym)
       :nil nil)))

#?(:clj (def default-classname-style :full))

#?(:clj
   (defn get-cls-name-from-meta
     "Returns string or nil for the classname"
     [namespace-name component-sym]
     (if (contains? (meta component-sym) :styled/classname)
       (let [print-config (:styled/classname (meta component-sym))]
         (if (#{:full :short :nil} print-config)
           (get-cls-name namespace-name print-config component-sym)
           (throw (Exception. (str "Unknown option for class-name style in metadata passed to component: " component-sym)))))
       (get-cls-name namespace-name default-classname-style component-sym))))

#?(:clj
   (defmacro defstyled
     ([component-name el & children]
      (let [component-type  (gensym "component-type")
            clss            (gensym "clss")
            class-name      (gensym "className")
            full-class-name (gensym "fullClassName")
            children*       (gensym "children")]
        `(let [~class-name ~(get-cls-name-from-meta (-> &env :ns :name) component-name)
               ~full-class-name ~(str (-> &env :ns :name) "/" component-name)

               ~children*
               (walk/postwalk
                 ;; todo here you can do props validation also
                 ;; should not allow anything that's not a symbol, map, vector, js-obj, js-array, fn
                 (wrap-call-style-fn false)
                 ~(vec children))

               ;; pass js structures to the lib
               ~children* (cljs.core/clj->js ~children*)
               ~component-type ~(get-type `styled el)
               ~clss (.apply ~component-type ~component-type ~children*)]
           (obj-set ~clss "displayName" ~(str (-> &env :ns :name) "/" component-name))

           (def ~component-name
             (with-meta (react-factory ~clss ~class-name)
               {::styled      ~clss
                ::hashed-name (hashit ~full-class-name)}))
           (cljs.core/specify! ~component-name
             ~'Object
             (~'toString [this#]
               (cljs.core/str "." (::hashed-name (meta ~component-name))))))))))

#?(:clj
   (comment
     (macroexpand-1 '(defstyled button4 button3 {:fontSize "20em"}))
     (macroexpand '(defstyled button3 :button
                     {:background "lightblue" :color "green"}))

     (macroexpand-1
       '(defstyled button3 :button
          {:background "lightblue"
           button1     {:color "green"}}
          (fn [jsprops cp]
            {:color (or (:color cp) "white")})))

     ;; postwalk doesn't continue expanding replaced values, like the fn call here:
     (walk/postwalk
       (fn [i]
         (cond
           (fn? i) (i)
           (keyword? i) (kebab->camel (name i))
           :else i))
       [{:background-color "blue"}
        (fn [] {:border-radius 5})])))

(comment
  (camelize-keys
    [{:background    "lightblue"
      :font-size     20
      :border-radius "10px"}
     {:background-image "url(xyz.com/my-image)"}])
  (camelize-keys
    {:background                "lightblue"
     :font-size                 20
     "@media(min-width: 200px)" {:font-size 33}
     :border-radius             "10px"})

  (walk/postwalk
    (fn [item]
      (println "item: " item " map entry: " (map-entry? item) " vec? " (vector? item))
      (cond
        (keyword? item)
        (do
          (println "found keyword")
          (keyword (kebab->camel (name item))))
        :elseeeee item)
      )
    {:background    "lightblue"
     :font-size     20
     "@media(min-width: 200px)"
     [{:font-size 33}
      {:background-color "purple"}]
     :border-radius "10px"}))

#?(:cljs
   (def ^:private global* (react-factory Global nil)))

;; emotion doesn't allow functions in nested position, only
;; objects and arrays of objects
;; but they do allow one function as a child
;; you can always wrap the call in a fn if you want dynamism like below
;https://github.com/emotion-js/emotion/blob/188dc0e785cfc9b10b3f9a6ead62b56ddd38e039/packages/core/src/global.js#L16

#?(:cljs
   (defn global-style
     "Takes a cljs vector or hashmap of styles and converts to JS types before calling emotion's Global function.
     Inserts styles into the DOM that target global elements and classes."
     [props]
     (global* {:styles (camelize-keys props)})))

;; can use like so:
(comment
  (global-style {:body {:background "#cce" "@media (min-width:700px)" {:background "white"}}})
  (global-style
    [(clj->js {:body {:font-family "serif"}}) {:body {:border "2px solid yellOW"}} {:body {:background-color "#ecccee"}}])

  ;; to adapt based on props, wrap in a fn:
  (defn my-globals [props]
    (global-style
      {:body {:background-color "red"}})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Theme support
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

#?(:cljs
   (defn theme-provider
     "Takes a hashmap of a style theme and react children to render with that theme in the React Context
     using emotion's ThemeProvider."
     [props & children]
     (when-not (contains? props :theme)
       (throw (js/Error. "You must pass a :theme to the theme-provider.")))
     (apply react/createElement ThemeProvider
       (clj->js props)
       (force-children children))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; CSS prop support
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

#?(:clj
   (defn ^:private css-body [props]
     `(do
        ;(assert (contains? ~props :css) "Props must contain :css key")
        (cljs.core/clj->js
          (assoc ~props :css
                        (walk/postwalk
                          ;; todo here you can do props validation also
                          ;; should not allow anything that's not a symbol, map, vector, js-obj, js-array, fn
                          (wrap-call-style-fn true)
                          (:css ~props)))))))
#?(:clj
   (defmacro jsx
     ([el props]
      (let [el        (cond-> el (keyword? el) name)
            css-props (css-body props)]
        `(jsx* ~el ~css-props)))

     ([el props & children]
      (let [el        (cond-> el (keyword? el) name)
            css-props (css-body props)]
        `(jsx* ~el ~css-props ~@children)))))

#?(:cljs
   (defn convert-css
     "Takes a hashmap or vector of styles and converts to JS types, will pass any functions cljs data structures."
     [css]
     (clj->js (walk/postwalk (wrap-call-style-fn true) css))))

#?(:cljs
   (defn css [& css]
     (styled-core/css (clj->js (walk/postwalk (wrap-call-style-fn true) css)))))
