(ns dv.cljs-emotion.reagent-cards
  (:require
    ["polished" :as p :refer [darken lighten]]
    [devcards.core :as dc :refer (defcard defcard-rg)]
    [reagent.core :as r]
    [dv.cljs-emotion-reagent :refer [defstyled keyframes global-style theme-provider]]))

(defcard
  "These examples demonstrate reagent use.")

(defstyled basic :div
  {:background "palevioletred"})

(defcard basic-card
  "
```clojure
(defstyled basic :div\n  {:background \"palevioletred\"})\n
[basic \"Simple usage example\"]) \n
```
  "
  (dc/reagent [basic "Simple usage example"]))

(defcard basic-card2
  "
```clojure
  (defstyled basic :div
    {:background \"palevioletred\"})

[basic [:h2 \"Child \"]])

```
  "
  (dc/reagent [basic [:h2 "Child "]]))

(defcard basic-card3
  "With props

```clojure
 [basic {:onClick #(js/console.log \"CLICK\")} [:h2 \"Child \"]]
```
"
  (dc/reagent [basic {:onClick #(js/console.log "CLICK")} [:h2 "Child "]]))
(defcard basic-card4
  "With props and multiple children

  ```clojure
  [basic {:onClick #(js/console.log \"CLICK\")}\n    [:h2 \"Child \"]\n    [:h3 \"another child\"]]
  ```
  "
  (dc/reagent [basic {:onClick #(js/console.log "CLICK")}
               [:h2 "Child "]
               [:h3 "another child"]]))

(defstyled test-theme :div
  (fn [{:keys [theme]}]
    {:background (or (:bg theme) "blue")}))

(defcard theme-provider-card
  "Theme use is straight forward.

  It wraps emotion's ThemeProvider calling clj->js first on the props.
  Wrap your application with `theme-provider` passing it
  a map or JS object of theme data.

```clojure
(defstyled test-theme :div\n  (fn [{:keys [theme]}]\n    {:background (or (:bg theme) \"blue\")}))

[:div\n  (theme-provider {:theme {:bg \"yellow\"}}\n   [test-theme \"Hello there theme\"])\n  [test-theme \"no theme\"]]
```
"
  (dc/reagent
    [:div
     (theme-provider {:theme {:bg "yellow"}}
       [test-theme "Hello there theme"])
     [test-theme "no theme"]]))

(defstyled test-fn :div
  (fn [{:keys [text-case background-color] :as props}]
    (js/console.log "in defstyled fn props: " props)
    {:text-transform   text-case
     :background-color background-color}))

(defcard test-props-card
  "Testing the camel case logic"
  (dc/reagent
    [test-fn {:text-case        "uppercase"
              :background-color "chartreuse"} "hi"]))

(defstyled a-child :div
  {:color "deepSKYBlue"})

(defstyled a-parent :div
  {:color  "red"
   a-child {:color "darkorchid"}})

(defcard-rg a-thing
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
  [:div
   [a-child "child should be deepSkyBlue"]
   [a-parent "parent should be red"]
   [a-parent
    [a-child "nested child should be darkorchid"]]])

(defstyled a-parent2 :div
  (fn [{:keys [color]}]
    {:color  "red"
     a-child {:color (or color "darkorchid")}
     "@media (min-width: 1024px)"
             {a-child {:color "black"}}}))

(defcard-rg a-thing2
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
  [:div
   [a-child "child should be deepSkyBlue"]
   [a-parent2 "parent should be red"]
   [a-parent2 {:color "steelblue"}
    [a-child "nested child should be darkorchid"]]])

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
  [:div
   [a-parent3
    \"HELLLO\"
    (a-child \"first\")
    (a-child \"second\")
    (a-child \"third\")
    (a-child \"fourth\")
    (a-child \"fifth\")]]
 ```")

(defcard
  (dc/reagent
    [:div
     [a-parent3
      "HELLLO"
      (a-child "first")
      (a-child "second")
      (a-child "third")
      (a-child "fourth")
      (a-child "fifth")]]))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Animation
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defstyled with-anim :div
  (fn animation-styles [{:keys [time]}]
    {:animation (str
                  (keyframes {:from {:background-color "transparent"}
                              :to   {:background-color "grey"}})
                  " " time "s ease-in-out infinite")}))

(defn animation-card [a _]
  [:div
   [:p "animation time: " (:time @a) " seconds"]
   [:button {:on-click #(swap! a update :time inc)} "inc"]
   [:button {:on-click #(swap! a update :time dec)} "dec"]
   (with-anim {:time (:time @a)} "Some text here")])

(dc/defcard-doc
  "Keyframe animations are supported - this is built into emotion. "
  (dc/mkdn-pprint-source with-anim)
  (dc/mkdn-pprint-source animation-card))

(def animation-state (r/atom {:time 1}))

(defcard-rg keyframes
  [animation-card animation-state]
  animation-state)
