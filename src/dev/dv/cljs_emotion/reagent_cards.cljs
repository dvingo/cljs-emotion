(ns dv.cljs-emotion.reagent-cards
  (:require
    [devcards.core :as dc :refer (defcard)]
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

