(ns dv.cljs-emotion
  (:require
    #?@(:cljs [["react" :as react]
               ["@emotion/styled" :refer [default] :rename {default styled}]
               ["@emotion/core" :as styled-core :refer [Global]]])
    [clojure.spec.alpha :as s]
    #?(:cljs [goog.object :as g])
    [clojure.string :as str]
    [clojure.walk :as walk]
    [taoensso.timbre :as log]
    [com.fulcrologic.guardrails.core :refer [>defn =>]])
  #?(:cljs (:require-macros [dv.cljs-emotion :refer [defstyled]])))

#?(:cljs
   (defn keyframes [anim-map]
     (styled-core/keyframes (clj->js anim-map))))

#?(:cljs
   (>defn kebab->camel
     [prop]
     [string? => string?]
     (if (str/includes? prop "-")
       (let [words (->> (re-seq #"[a-zA-Z]+" prop)
                     (mapv str/capitalize))]
         (-> words
           (update 0 str/lower-case)
           str/join))
       prop)))

#?(:cljs
   (defn camelize-keys
     [style-map]
     (walk/postwalk #(cond-> % (keyword? %) (-> name kebab->camel))
       style-map)))

(comment
  (kebab->camel (name :border-radius))
  (kebab->camel (name :borderRadius))

  (walk/postwalk
    (fn [item]
      (println "item: " item " map entyr: " (map-entry? item))
      (cond
        (keyword? item)
        (do
          (println "found keyword")
          (keyword (kebab->camel (name item))))
        (map-entry?)
        :elsee item)
      )
    {:background    "lightblue"
     :font-size     20
     :border-radius "10px"})
  )

#?(:clj
   ;; todo rename bc it also camelizes
   (defn wrap-call-style-fn []
     `(fn [x#]
        (cond

          (cljs.core/fn? x#)
          (cljs.core/fn [arg#]
            ;; arg# is js props passed at runtime, we ship it back and forth js -> cljs -> js
            (cljs.core/clj->js
              ;; pass clj data to the passed fn, invoke it and camelize the keys for emotion js consumption
              (camelize-keys (x# (cljs.core/js->clj arg# :keywordize-keys true)))))

          ;; maps come up in value position for nested selectors
          (map? x#)
          (camelize-keys (cljs.core/js->clj x# :keywordize-keys true))

          :else x#))))

#?(:cljs (goog-define ADD_CLASSNAMES true))

;; update: just do fqn only and only allow enable/disable toggle.
;; i don't think there's a point in unqualified classnames
;; you should be able to pass a className to the component anyway - you can wrap a react component that
;; sets the classname plus combines with the passed in one.

#?(:cljs
   (defn set-class-name [props class-name]
     (cond (and ADD_CLASSNAMES (object? props))
           (let [clsname (g/get props "className")]
             (doto props (g/set "className" (str class-name " " clsname))))

           (and ADD_CLASSNAMES class-name)
           (update props :className #(if (nil? %) class-name (str class-name " " %)))

           :else props)))

#?(:cljs
   (defn set-js-classname [clsname props]
     (let [curr (g/get props "className")]
       (doto props
         (g/set "className" (if curr (str clsname " " curr) clsname))))))

#?(:cljs
   (defn react-factory [el class-name]
     (fn
       ([]
        (react/createElement el (clj->js (set-class-name {} class-name))))
       ([props]
        ;(log/info "in props only  " class-name " props " props)
        (try
          (cond
            (or (react/isValidElement props) (string? props))
            (do
              ;(log/info class-name " GOT A react element: " props)
              (react/createElement el (set-js-classname class-name #js{}) props))

            (map? props)
            (do
              ;(log/info "got a map")
              (let [props (clj->js (set-class-name props class-name))]
                (react/createElement el props)))

            (object? props)
            (do
              ;(log/info "got an object")
              ;; todo js support for set-class-name so you don't need to shuttle datatypes
              (react/createElement el (clj->js (js->clj (set-class-name props class-name)))))

            (or (array? props) (seq? props))
            (do
              ;(log/info class-name " GOT A SEQ: " props)
              (react/createElement el #js{} (to-array props)))

            :else
            (do (log/info "ELSE CLAUSE")
             (react/createElement el #js{})))

          (catch js/Object e (log/info "CAUGHT ERROR" e))))

       ([props & children]
        ;(log/info class-name " in props & children ")
        (let [props (clj->js (set-class-name props class-name))]
          (if (seq children)
            (apply react/createElement el props (to-array children))
            (react/createElement el props)))))))

#?(:clj
   (defn get-type
     [styled tag-name]
     (cond
       ;; if literals, don't need to determine type at runtime
       (string? tag-name) `(goog.object/get ~styled ~tag-name)
       (keyword? tag-name) `(goog.object/get ~styled ~(name tag-name))
       :else
       `(cond
          ;; a dom element like :div, same as styled.div``
          (string? ~tag-name)
          (goog.object/get ~styled ~tag-name)

          (keyword? ~tag-name)
          (goog.object/get ~styled ~(name tag-name))

          ;; Another styled component
          (::styled (meta ~tag-name))
          (~styled (::styled (meta ~tag-name)))

          ;; A React component
          :else
          (~styled ~tag-name)))))

#?(:cljs (def styled* styled))
;; todo if only one arg is passed

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

#?(:clj (defmacro defstyled
          ([component-name el & children]
           (let [component-type (gensym "component-type")
                 clss           (gensym "clss")
                 class-name     (gensym "className")
                 children*      (gensym "children")]
             `(let [~class-name ~(get-cls-name-from-meta (-> &env :ns :name) component-name)
                    ~children*
                    (walk/postwalk
                      ;; todo here you can do props validation also
                      ;; should not allow anything that's not a symbol, map, vector, js-obj, js-array, fn
                      ~(wrap-call-style-fn)
                      ~(vec children))
                    ;; pass js structures to the lib
                    ~children* (cljs.core/clj->js ~children*)
                    ~component-type ~(get-type `styled* el)
                    ~clss (.apply ~component-type ~component-type ~children*)]
                (goog.object/set ~clss "displayName" ~(str component-name))
                (def ~component-name
                  (with-meta (react-factory ~clss ~class-name)
                    {::styled ~clss})))))))

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
      (println "item: " item " map entyr: " (map-entry? item) " vec? " (vector? item))
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
   (def global* (react-factory Global nil)))

;; emotion doesn't allow functions in nested position, only
;; objects and arrays of objects
;; but they do allow one function as a child
;; you can always wrap the call in a fn if you want dynamism like below
;https://github.com/emotion-js/emotion/blob/188dc0e785cfc9b10b3f9a6ead62b56ddd38e039/packages/core/src/global.js#L16

#?(:cljs
   (defn global [props]
     (global* {:styles (camelize-keys props)})))

;; can use like so:
(comment
  (cu/global {:body {:background "#cce" "@media (min-width:700px)" {:background "white"}}})
  (cu/global
    [(clj->js {:body {:font-family "serif"}}) {:body {:border "2px solid yellOW"}} {:body {:background-color "#ecccee"}}])

  ;; to adapt based on props:
  (defn my-globals [props]
    (cu/global
      {:body {:background-color "red"}}))
  )
