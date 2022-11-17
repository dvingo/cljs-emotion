(ns dv.cljs-emotion.fulcro-cards
  (:require
    [com.fulcrologic.fulcro.rendering.multiple-roots-renderer :as fr]
    [devcards.core :as dc :refer (defcard)]
    [dv.cljs-emotion.target-styled]
    [dv.cljs-emotion.reagent-cards]
    [dv.devcards-fulcro3 :as f3]
    [com.fulcrologic.fulcro.dom :as dom]
    [com.fulcrologic.fulcro.components :as fc :refer [defsc]]
    [sablono.core :as sab :refer [html]]
    ["polished" :as p :refer [darken]]
    [dv.cljs-emotion :as em :refer [defstyled keyframes global-style theme-provider]]))

(defsc Button [this {:keys [className text] :as props}]
  {:query         [:className :text]
   :ident         (fn [_] [::id :button])
   :initial-state (fn [_] {:text "Hello world"})}
  (dom/div
    (dom/button {:className className} text)))

(def ui-button (fc/computed-factory Button))

(defonce app-id (random-uuid))

(def fulcro-app
  (f3/upsert-app
    {::f3/root                   Button
     ::f3/root-state             {}
     ::f3/wrap-root?             true
     ::f3/persistence-key        app-id
     ::f3/app                    {}
     :fulcro.inspect.core/app-id app-id}))

(comment
  (println "HI")

  (fr/with-app-context
    fulcro-app
    (ui-button {:className "TEST CLS"})))

(defcard dv-test-fulcro-styled-button
  (dc/dom-node
    (fn [_ dom-node]
      (f3/mount-at fulcro-app
        {::f3/root            Button
         ::f3/wrap-root?      true
         ::f3/persistence-key app-id}
        dom-node))))

;(f3/make-card Button)

;; the thought is to do this:
;(defstyled ui-fulcro-btn Button {:color "red"})

; and then figure out the best way to pass the className to the returned react-element before rendering -
;; probably in render middleware?
; and have this pass the className to fulcro
