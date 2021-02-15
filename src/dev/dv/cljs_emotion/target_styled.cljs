(ns dv.cljs-emotion.target-styled
  (:require
    [devcards.core :as dc :refer (defcard)]
    [sablono.core :refer [html]]
    ["polished" :as p :refer [darken lighten]]
    ["react" :as react]
    ["react-dom" :as react-dom]
    [dv.cljs-emotion :as em :refer [defstyled keyframes global-style]]))

(defcard
  "These examples show some more emotion API examples.")

(defstyled prop-fn :div {:padding 20 :outline "1px solid"})

(defstyled prop-fn2 :div
  {:padding 20
   :outline "1px solid"
   "& > a"  {:color "hotpink"}})

(defcard
  "## Using :as
  You can change the DOM element at render time by passing `:as`.
```clojure
(defstyled prop-fn :div {:padding 20 :outline \"1px solid\"})
(prop-fn {:as \"button\"} \"HERE\")\n
```
  "
  (prop-fn {:as "button"} "HERE"))

(defcard prop-fn
  "
  An & will be replaced by the current styled-component's class name - so you can
  use it how you wish - override styles by repeating it \"&&&\" for example, or in this case target
  a child element:
```clojure
(defstyled prop-fn2 :div\n  {:padding 20 \n   :outline \"1px solid\"\n  \"& > a\"  {:color \"hotpink\"} } )\n

(prop-fn2 (html [:a {:href \"localhost:9001\"} \"hi here\"]))\n
```
"
  (prop-fn2 (html [:a {:href "localhost:9001"} "hi here"]))
  )

(defstyled hover-example prop-fn
  {":hover,:focus" {:background "hotpink"}})

(defcard
  "You can combine multiple selectors using the CSS comma operator.

```clojure
(defstyled hover-example prop-fn\n  {\":hover,:focus\" {:background \"hotpink\"}})\n
```"
  (hover-example "HELLLO")
  )

(defstyled a-child :div
  {:color "deepSKYBlue"})

(defstyled a-parent :div
  {:color  "red"
   a-child {:color "darkorchid"}})

(defn nested-child-ex []
  (html
    [:div
     (a-child "child should be deepSkyBlue")
     (a-parent "parent should be red")
     (a-parent
       (a-child "nested child should be darkorchid"))]))

(dc/defcard-doc
  "# Target another defstyled component
  If you use a component created with `defstyled` in the key position of a styles map
  the generated CSS uses a class selector in its place that is a hash of its fully qualified
  symbol name.

  This works inside media queries and functions (see the next example)."
  (dc/mkdn-pprint-source a-child)
  (dc/mkdn-pprint-source a-parent)
  (dc/mkdn-pprint-source nested-child-ex))

(defn use-current-width []
  (let [use-width (react/useState js/innerWidth)
        width     (aget use-width 0)
        set-width (aget use-width 1)]
    (react/useEffect
      (fn []
        (let [on-resize
              (fn [timeout-id]
                (js/clearTimeout timeout-id)
                (js/setTimeout (fn [] (set-width js/innerWidth)) 150))]
          (js/addEventListener "resize" on-resize)
          (fn [] (js/removeEventListener "resize" on-resize)))))
    width))

(defstyled a-parent2 :div
  (fn [{:keys [color]}]
    {:color  "red"
     a-child {:color (or color "darkorchid")}
     "@media (min-width: 1024px)"
             {a-child {:color "black"}}}))

(defn my-component []
  (let [width (use-current-width)]
    (html
      [:div
       (a-parent2 {:color "blue"} "parent should be red")
       (a-child "child should be deepSkyBlue")
       (a-parent2 {:color "steelblue"}
         (a-child
           (str "nested child should be "
             (if (>= width 1024) "black" "darkorchid"))))])))

(dc/defcard-doc
  "# Target another defstyled component in nested position
  Here we change the child element conditionally based on a media query -
  resize the page over and under 1024 pixels to see the effect."
  (dc/mkdn-pprint-source a-parent2)
  (dc/mkdn-pprint-source my-component))

(defcard
  (dc/dom-node
    (fn [data-atom node]
      (react-dom/render (react/createElement my-component) node))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; styled component in selector string
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defstyled a-parent3 :div
  (fn [_]
    {:color  "red"
     (str a-child " + " a-child)
             {:color            "#eee"
              :background-color "hsl(0, 0%, 48%)"
              :padding          "1em"
              :border-top       "1px solid"}
     a-child {:color            "darkorchid"
              :background-color "paleVIOLETRed"}
     "@media (min-width: 1024px)"
             {a-child {:color "black"}
              (str a-child " + " a-child)
                      {:background-color (lighten 0.2 "hsl(0, 0%, 48%)")}}}))

(dc/defcard-doc
  "# Target another defstyled component in a combinator selector"
  (dc/mkdn-pprint-source a-parent3)
  "Here we are using a styled component as part of a larger CSS Selector expression.
  This works by implementing `toString` for styled components, returning their class selector."
  "
 ```clojure
   (a-parent3
    \"HELLLO\"
    (a-child \"first\")
    (a-child \"second\")
    (a-child \"third\")
    (a-child \"fourth\")
    (a-child \"fifth\"))
 ```")

(defcard
  (a-parent3
    "HELLLO"
    (a-child "first")
    (a-child "second")
    (a-child "third")
    (a-child "fourth")
    (a-child "fifth")))
