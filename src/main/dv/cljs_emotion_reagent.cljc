(ns dv.cljs-emotion-reagent
  (:require
    #?@(:cljs [["react" :as react]
               ["@emotion/styled" :default styled]
               ["@emotion/core" :as styled-core :refer [Global]]])
    #?(:cljs [goog.object :as g])
    [reagent.core :as r]
    [clojure.string :as str]
    [clojure.walk :as walk]
    [com.fulcrologic.guardrails.core :refer [>defn =>]]
    [clojure.string :as str])
  #?(:cljs (:require-macros [dv.cljs-emotion-reagent :refer [defstyled]])))

#?(:cljs
   (defn relement?
     "Is it a reagent vector? (or a best effort guess at least.)"
     [el]
     (and (vector? el)
       (let [item (first el)]
         (or
           (keyword? item)
           (symbol? item)
           (fn? item))))))

;; Figure out what children were passed
#?(:cljs
   (defn parse-children [ch]
     (cond
       (relement? ch)
       [(r/as-element ch)]

       (vector? ch)
       (mapv (fn [el]
               (if (relement? el)
                 (r/as-element el)
                 el))
         ch)
       :else [ch])))

#?(:cljs
   (defn keyframes [anim-map]
     (styled-core/keyframes (clj->js anim-map))))

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
     [style-map]
     (walk/postwalk #(cond-> % (keyword? %) (-> name kebab->camel))
       style-map)))

#?(:clj
   ;; todo rename bc it also camelizes
   (defn wrap-call-style-fn []
     `(fn [x#]
        ;(js/console.log "Wrapping value: " x#)
        (cond

          (cljs.core/fn? x#)
          (do (js/console.log "got function")
              (js/console.log x#)

              (cljs.core/fn [arg#]
                ;; arg# is js props passed at runtime, we ship it back and forth js -> cljs -> js
                (cljs.core/clj->js
                  ;; pass clj data to the passed fn, invoke it and camelize the keys for emotion js consumption
                  (camelize-keys (x# (cljs.core/js->clj arg# :keywordize-keys true))))))

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
   (defn set-class-name [props class-name]
     (cond (and (add-class-names?) (object? props))
           (doto props
             (g/set "className"
               (->> [class-name (g/get props "className")]
                 (str/join " ")
                 (str/trim))))

           (and (add-class-names?) class-name)
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

        (try
          (cond
            (or (react/isValidElement props) (string? props))
            (do
              (react/createElement el (set-js-classname class-name #js{}) props))

            (map? props)
            (do
              (let [props (clj->js (set-class-name props class-name))]
                (react/createElement el props)))

            (object? props)
            (do
              ;(log/info "got an object")
              ;; todo js support for set-class-name so you don't need to shuttle datatypes
              (react/createElement el (set-class-name props class-name)))

            (relement? props)
            (do
              (println "HAve a relement for props")
              (react/createElement el (set-js-classname class-name #js{}) (r/as-element props)))

            (vector? props)
            (do
              (println "HAve a vector for props")
              (mapv (fn [el]
                      (if (relement? el)
                        (r/as-element el)
                        el))
                props))

            (array? props)
            (react/createElement el #js{} (to-array props))

            :else
            (react/createElement el #js{}))

          (catch js/Object e
            (js/console.error "Error invoking an emotion styled component: " (.getMessage e)))))

       ;; TODO  should probably add support for no props and just a collection of children
       ;; (cond (map? props) -> branch
       ;;       (object? props)
       ;;       :else -> prepend to children
       ([props & children]
        (let [props (clj->js (set-class-name props class-name))]
          (if (seq children)
            (apply react/createElement el props
              (to-array (mapv (fn [el] (cond-> el (relement? el) r/as-element)) children)))
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

#?(:clj
   (defmacro defstyled
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
           (goog.object/set ~clss "displayName" ~(str (-> &env :ns :name) "/" component-name))
           (def ~component-name
             (with-meta (react-factory ~clss ~class-name)
               {::styled ~clss})))))))

#?(:cljs
   (def global* (react-factory Global nil)))

;; emotion doesn't allow functions in nested position, only
;; objects and arrays of objects
;; but they do allow one function as a child
;; you can always wrap the call in a fn if you want dynamism like below
;https://github.com/emotion-js/emotion/blob/188dc0e785cfc9b10b3f9a6ead62b56ddd38e039/packages/core/src/global.js#L16

#?(:cljs
   (defn global-style [props]
     (global* {:styles (camelize-keys props)})))