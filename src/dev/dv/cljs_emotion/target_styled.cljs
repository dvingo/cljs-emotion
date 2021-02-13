(ns dv.cljs-emotion.target-styled
  (:require
    [devcards.core :refer (defcard)]
    [sablono.core :refer [html]]
    ["polished" :as p :refer [darken]]
    [dv.cljs-emotion :as em :refer [defstyled keyframes global-style]]))

(defcard
  "These examples show some more emotion API examples.")

(defstyled prop-fn :div {:padding 20 :outline "1px solid"})

(defstyled prop-fn2 :div
  {:padding 20
   :outline "1px solid"
   "& > a"  {:color "hotpink"}})

;(js/console.log (.withComponent (-> prop-fn meta ::em/styled) "button"))
;(set! js/my_thing (-> prop-fn meta ::em/styled))
;(js/console.log "calss: " (-> prop-fn meta ::em/styled) "button")
(defcard
  "## Using :as
  You can change the DOM element at render time by passing `:as`.
```clojure
(defstyled prop-fn :div {:padding 20 :outline \"1px solid\"})
(prop-fn {:as \"button\"} \"HERE\")\n
```
  "
  (prop-fn {:as "button"} "HERE")
  )

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
  {:color "red"
   a-child {:color "darkorchid"}})

(defstyled a-parent2 :div
  (fn [{:keys [color]}]
    (js/console.log "COLOR: " color)

    {:color  "red"
     a-child {:color (or color "darkorchid")}
     "@media (min-width: 1024px)"
             {a-child {:color "black"}}}))

(defcard a-thing
  "# Target another defstyled component
  If you use a `defstyled` in key position in the styles map a CSS classname is used in its place that is a hash of its fully qualified
  symbol name.

  This works inside media queries and functions (see the next example).

  ```clojure
  (defstyled a-child :div
   {:color \"deepSKYBlue\"})

  (defstyled a-parent :div
    {:color \"red\"
     a-child {:color \"darkorchid\"}})

  [:div
   [a-child \"child should be deepSkyBlue\"]
   [a-parent \"parent should be red\"]
   [a-parent
     [a-child \"nested child should be darkorchid\"]]]
  ```
  "
  (html
    [:div
     (a-child "child should be deepSkyBlue")
     (a-parent "parent should be red")
     (a-parent
       (a-child "nested child should be darkorchid"))]))

(defcard a-card
  "# Target another defstyled component (continued)
  ```clojure
  (defstyled a-child :div
   {:color \"deepSKYBlue\"})

  (defstyled a-parent2 :div
    (fn [{:keys [color]}]
      {:color  \"red\"
       a-child {:color (or color \"darkorchid\")}
       \"@media (min-width: 1024px)\"
       {a-child {:color \"black\"}}}))

  [:div
   [a-child \"child should be deepSkyBlue\"]
   [a-parent \"parent should be red\"]
   [a-parent
     [a-child \"nested child should be darkorchid, or black if window is >= 1024px\"]]]
  ```
  "
  (html
    [:div
     (a-parent2 {:color "blue"} "parent should be red")
     (a-parent2 {:color "steelblue"}
       (a-child "nested child should be darkorchid"))]))

(defcard a-card2
  "# Target another defstyled component 123
  ```clojure
   (defstyled a-child :div
    {:color \"deepSKYBlue\"})

  (defstyled a-parent :div
    {:color \"red\"
     a-child {:color \"darkorchid\"}})

  [:div
   (a-child \"child should be deepSkyBlue\")
   (a-parent \"parent should be red\")
   (a-parent
     (a-child \"nested child should be darkorchid\"))]
  ```
  "
  (html
    [:div
     (a-child "child should be deepSkyBlue")
     (a-parent "parent should be red")
     (a-parent
       (a-child "nested child should be darkorchid"))]))

