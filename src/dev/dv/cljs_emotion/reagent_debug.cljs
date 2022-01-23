(ns dv.cljs-emotion.reagent-debug
  (:require
    [devcards.core :as dc :refer [defcard-rg defcard]]
    ["polished" :as p :refer [darken]]
    [dv.cljs-emotion-reagent :as em :refer [css defstyled keyframes global-style theme-provider]]))

(defstyled full-height :div
  {:height     "100%"
   :background "pink"}
  (fn [props]
    (.log js/console "PROPS: " props)
    (:styles props)))

(defn nested-fn []
  [:div
   (full-height
     {:styles {:width "70%" "@media (min-width: 700px)" {:background "skyBLUE" :width "100%"}}}
     [:p "hello body"])])

(dc/defcard-doc "Cljs properties should be passed to callbacks untouched." (dc/mkdn-pprint-source full-height))

(defcard breakpoint-debug (dc/mkdn-pprint-source nested-fn))

(defcard (dc/reagent [nested-fn]))

(defcard
  "Testing 1-arity test."
  (dc/reagent
    [:div
     [full-height
      {:styles {":before"
                {:content                    "'HELLO'"
                 "@media (min-width: 700px)" {:content "'LARGE SCREEN'"}}
                :width "70%" "@media (min-width: 700px)" {:background "skyBLUE" :width "100%"}}}]]))

(defstyled switch-case :div
  (fn [{:keys [status] :as args}]
    ;(.log js/console "ARGS: " args)
    {:background
     (case status
       :active "seagreen"
       :offline "grey"
       :away "blue"
       "white")}))

(defcard "Test keywords - you should get keywords as values when passed as keywords."
  (dc/reagent
    [:div
     [:div "Active" [switch-case {:status :active} "Should be green"]]
     [:div "Offline" [switch-case {:status :offline} "Should be grey"]]
     [:div "Away" [switch-case {:status :away} "Should be blue"]]
     [:div "Missing" [switch-case "Should be white"]]]))
