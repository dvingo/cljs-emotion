(ns dv.cljs-emotion.devcards
  (:require
    [devcards.core :as dc :refer (defcard)]
    [sablono.core :as sab]
    ;[reagent.core :as r]
    ))

(defcard
  example-counter
  (fn [data-atom owner]
    (sab/html
      [:h3
       "Example Counter"
       (:count @data-atom)])) {} )

(defn ^:export main
  []
  (js/console.log "HIII")
  (dc/start-devcard-ui!))
