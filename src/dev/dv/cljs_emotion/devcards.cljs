(ns dv.cljs-emotion.devcards
  (:require
    [devcards.core :as dc :refer (defcard)]
    [sablono.core :as sab :refer [html]]
    ;[reagent.core :as r]
    [dv.cljs-emotion :refer [defstyled keyframes global-style]]
    ))

(defcard
  example-counter
  (fn [data-atom owner]
    (sab/html
      [:h3
       "Example Counter"
       (:count @data-atom)])) {} )


(defcard another
  (fn [data-atom owner]
    (sab/html
      [:div
       [:h3 "Example Counter: " (:count @data-atom)]
       [:button
        {:onClick (fn [] (swap! data-atom update-in [:count] inc))}
        "inc"]]))
  {:count 100})

(defcard
  "
  Hello this should be markdown
  ```clojure
  (fn [data-atom owner]\n    (sab/html\n      [:div\n       [:h3 \"Example Counter: \" (:count @data-atom)]\n       [:button\n        {:onClick (fn [] (swap! data-atom update-in [:count] inc))}\n        \"inc\"]]))

  ```
  ")

(defstyled sample1 :div
  {:background-color "rebeCCApurple"})

(defcard basic
  "```clojure
  (defstyled sample1 :div
    {:background-color \"RebeccaPurple\"})
  ```"
  (html (sample1 "Some text here")))

(defcard basic
  "```clojure
  (defstyled sample1 :div
    {:background-color \"RebeccaPurple\"})
  (sample1 {:className \"TEST\"} \"Some text here\")
  ```"
  (sample1 {:className "TEST"} "Some text here"))

(def mw-700 "@media (min-width:700px)")
(defcard global-styles
  "```clojure
   (def mw-700 \"@media (min-width:700px)\")
   [:div
     [:.my-thing \"Some content\"]
      (global-style
        {:body {:background \"#cce\"
          \"@media (min-width:700px)\" {:background \"#ccc\"}}
         :.my-thing {:background \"navy\" :color \"#cce\"
                     mw-700 {:background \"black\"}}})]

   ```"
  (html [:div
         [:.my-thing "Some content"]
         (global-style
           {:body {:background "#cce" "@media (min-width:700px)" {:background "#ccc"}}
            :.my-thing {:background "navy" :color "#cce" mw-700 {:background "black"}}})]))

(def animation
  (keyframes {:from {:background "transparent"}
              :to {:background "grey"} } ))

(defn test-body [{:keys [time]}]
  {:animation (str animation " " time "s ease-in-out infinite")}
  )

;(defstyled with-anim :div
;  (fn [{:keys [time]}]
;    {:animation (str animation " " time "s ease-in-out infinite")}))

(defstyled with-anim :div
  test-body
  )

;; keyframes
(defcard keyframes
  "```clojure
(def animation\n  (keyframes {:from {:background \"transparent\"}\n              :to {:background \"grey\"} } ))\n\n(defstyled with-anim :div\n  (fn [{:keys [time]}]\n    {:animation (str animation \" \" time \"s ease-in-out infinite\")}))\n
  (with-anim {:time (:time @a)} \"Some text here\")]
  ```"
  (fn [a o]
    (html
      [:div
       [:p "animation time: " (:time @a) " seconds"]
       [:button {:on-click #(swap! a update :time inc)} "inc"]
       [:button {:on-click #(swap! a update :time dec)} "dec"]
       (with-anim {:time (:time @a)} "Some text here")]))
  {:time 1})

(defn ^:export main
  []
  (js/console.log "HIII")
  (dc/start-devcard-ui!))
