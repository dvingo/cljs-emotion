(ns dv.cljs-emotion-reagent
  (:require
    #?@(:cljs [["react" :as react]
               ["@emotion/hash" :as emotion-hash*]
               ["@emotion/styled" :as styled*]
               ["@emotion/react" :as styled-core :refer [Global ThemeProvider]]])
    #?@(:cljs
        [[goog.object :as g]
         [reagent.core :as r]
         [reagent.impl.template :as rt]
         [reagent.impl.util :as rutil]])
    [camel-snake-kebab.core :as csk]
    [clojure.walk :as walk]
    [clojure.string :as str]
    [com.fulcrologic.guardrails.core :refer [>defn =>]])
  #?(:cljs (:require-macros [dv.cljs-emotion-reagent :refer [defstyled css]])))

;; Support plain cljs compiler and shadow.
#?(:cljs (def emotion-hash (g/get emotion-hash* "default")))
#?(:cljs (def styled (g/get styled* "default")))
#?(:cljs (def jsx styled-core/jsx))

#?(:cljs
   (defn relement?
     "Is it a reagent vector? (or a best effort guess at least.)"
     [el]
     (and
       (vector? el)
       (let [item (first el)]
         (or
           (keyword? item)
           (symbol? item)
           (fn? item))))))

;; from fulcro
#?(:cljs
   (defn force-children
     "Utility function that will force a lazy sequence of children (recursively) into realized
     vectors (React cannot deal with lazy seqs in production mode)"
     [x]
     (if (seq? x)
       (to-array (mapv force-children x))
       (if (relement? x)
         (r/as-element x)
         x))))

#?(:cljs
   (>defn kebab->camel
     [prop]
     [string? => string?]
     (if (str/starts-with? prop ".")
       prop

       (if (str/includes? prop "-")
         (let [words (->> (re-seq #"[a-zA-Z]+" prop)
                       (mapv str/capitalize))]
           (-> words
             (update 0 str/lower-case)
             str/join))
         prop))))

#?(:cljs
   (defn camelize-keys
     "Also replaces styled components with their css classname is key position."
     [style-map]
     (walk/postwalk
       (fn [v]
         (cond
           (keyword? v)
           (-> v name kebab->camel)

           (and (meta v) (contains? (meta v) ::hashed-name))
           (str "." (-> v meta ::hashed-name))

           :else v))
       style-map)))

(defn map->kebab
  "Convert all keys in the map to kebab case keywords."
  [m]
  (into {}
    (map (fn [[k v]] [(csk/->kebab-case k) v]) m)))

(comment (map->kebab {:backgroundColor "blue"}))

#?(:cljs
   (defn keyframes [anim-map]
     (styled-core/keyframes (clj->js (camelize-keys anim-map)))))

#?(:clj
   ;; todo rename bc it also camelizes
   (defn wrap-call-style-fn []
     `(fn [x#]
        (cond

          ;; Another emotion styled component created with this lib.
          (and (meta x#) (contains? (meta x#) ::hashed-name))
          (str "." (-> x# meta ::hashed-name))

          (cljs.core/fn? x#)
          (cljs.core/fn [arg#]
            (js/console.log "IN FN: " arg#)
            ;; arg# is js props passed at runtime, we ship it back and forth js -> cljs -> js

            ;; js->clj is resulting in an infinite recur when children contains another styled component, so we remove it.
            (cljs.core/js-delete arg# "children")

            (cljs.core/clj->js
              ;; pass clj data to the passed fn, invoke it and camelize the keys for emotion js consumption
              (camelize-keys (x# (map->kebab (cljs.core/js->clj arg# :keywordize-keys true))))))

          ;; maps come up in value position for nested selectors
          (map? x#)
          (camelize-keys (cljs.core/js->clj x# :keywordize-keys true))

          :else x#))))

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
         (g/set "className"
           (->> [class-name (g/get props "className")]
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
   (defn massage-props
     "Allows using kebab-case prop names."
     [props class-name]
     (let [clss  (:class props)
           props (cond-> props clss (assoc :class (rutil/class-names clss)))
           ;; converts properties for JS call as expected by react class->className, on-click->onClick etc.
           props (rt/convert-prop-value props)]
       (clj->js (set-class-name props class-name)))))

#?(:cljs
   (defn react-factory
     [el class-name]
     (fn
       ([]
        (react/createElement el (clj->js (set-class-name {} class-name))))
       ([props]
        (try
          (cond
            (or (react/isValidElement props) (string? props))
            (react/createElement el (set-class-name #js{} class-name) props)

            (map? props)
            (let [props (massage-props props class-name)]
              (react/createElement el props))

            (object? props)
            (react/createElement el (set-class-name props class-name))

            (relement? props)
            (react/createElement el (set-class-name #js{} class-name) (r/as-element props))

            (seq? props)
            (react/createElement el (set-class-name #js{} class-name) (force-children props))

            (array? props)
            (react/createElement el (set-class-name #js{} class-name) props)

            :else
            (react/createElement el (set-class-name #js{} class-name)))

          (catch js/Object e
            (js/console.error "Error invoking an emotion styled component: " e))))

       ([props & children]
        (if (or (and (object? props) (not (react/isValidElement props))) (map? props))
          (let [props (massage-props props class-name)]
            (if (seq children)
              (apply react/createElement el props (force-children children))
              (react/createElement el props)))
          (apply react/createElement el (set-class-name #js{} class-name) (force-children (list* props children))))))))

#?(:clj
   (defn get-type
     [styled-arg tag-name]
     (cond
       ;; if literals, don't need to determine type at runtime
       (string? tag-name) `(goog.object/get ~styled-arg ~tag-name)
       (keyword? tag-name) `(goog.object/get ~styled-arg ~(name tag-name))
       :else
       `(cond
          ;; a dom element like :div, same as styled.div``
          (string? ~tag-name)
          (goog.object/get ~styled-arg ~tag-name)

          (keyword? ~tag-name)
          (goog.object/get ~styled-arg ~(name tag-name))

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
                 ~(wrap-call-style-fn)
                 ~(vec children))
               ;; pass js structures to the lib
               ~children* (cljs.core/clj->js ~children*)
               ~component-type ~(get-type `styled el)
               ~clss (.apply ~component-type ~component-type ~children*)]
           (goog.object/set ~clss "displayName" ~(str (-> &env :ns :name) "/" component-name))

           (def ~component-name
             (with-meta (react-factory ~clss ~class-name)
               {::styled      ~clss
                ::hashed-name (hashit ~full-class-name)}))

           (cljs.core/specify! ~component-name
             ;~'IPrintWithWriter
             ;(~'-pr-writer [this# writer# _#]
             ;  (~'-write writer# (cljs.core/str this#)))
             ~'Object
             (~'toString [this#]
               (cljs.core/str "." (::hashed-name (meta ~component-name))))))))))

#?(:cljs
   (def ^:private global* (react-factory Global nil)))

;; emotion doesn't allow functions in nested position, only
;; objects and arrays of objects
;; but they do allow one function as a child
;; you can always wrap the call in a fn if you want dynamism like below
;https://github.com/emotion-js/emotion/blob/188dc0e785cfc9b10b3f9a6ead62b56ddd38e039/packages/core/src/global.js#L16

#?(:cljs
   (defn global-style [props]
     (global* {:styles (camelize-keys props)})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Theme support
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

#?(:cljs
   (defn theme-provider
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
   (defn css-body [props]
     `(do
        (assert (contains? ~props :css) "Props must contain :css key")
        (cljs.core/clj->js
          (assoc ~props :css
                        (walk/postwalk
                          ;; todo here you can do props validation also
                          ;; should not allow anything that's not a symbol, map, vector, js-obj, js-array, fn
                          ~(wrap-call-style-fn)
                          (:css ~props)))))))
#?(:clj
   (defmacro css
     ([el props]
      (let [el        (cond-> el (keyword? el) name)
            css-props (css-body props)]
        `(jsx ~el ~css-props)))

     ([el props children]
      (let [el        (cond-> el (keyword? el) name)
            css-props (css-body props)]
        `(jsx ~el ~css-props (reagent.core/as-element ~children))))))

(comment
  (macroexpand-1 '(defstyled n :div {:background-color "blue"}))
  (macroexpand-1 '(css3 "div"
                    {:css
                     [(fn [theme] {:color (:fg theme)})
                      {:background-color "blue"}]}
                    "HI")))
