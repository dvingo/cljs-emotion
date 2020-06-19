(ns dv.cljs-emotion.reagent-cards
  (:require
    [devcards.core :as dc :refer (defcard)]
    [dv.cljs-emotion-reagent :refer [defstyled keyframes global-style]]))

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
