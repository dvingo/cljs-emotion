(ns dv.cljs-emotion.devcards
  (:require
    [devcards.core :as dc :refer (defcard)]
    [cljs.reader :as edn]
    [sablono.core :as sab :refer [html]]
    ["polished" :as p :refer [darken]]
    ;[reagent.core :as r]
    [dv.cljs-emotion :refer [defstyled keyframes global-style]]))
(enable-console-print!)

(def global-data (atom {:on? false}))

(def btn-styles
  {"button"
   {:background-color "#f2f2f2"
    :background-image "linear-gradient(to bottom, #f2f2f2, #f2f2f2)"
    :border           "1px solid #bfbfbf"
    :text-shadow      "0 1px 0 rgba(255, 255, 255, 0.5)"
    :border-radius    3
    :cursor           "pointer"
    :color            "#8c8c8c"
    :font-family      "sans-serif"
    :line-height      "1rem"
    :font-weight      700
    :margin           "16px 0 0 16px"
    :padding          "9px 16px 9px"
    :transition       "all 20ms ease-out"
    :vertical-align   "top"
    :box-shadow       (str "inset 0 1px 0 white, inset 0 -1px 0 #d9d9d9,"
                        " inset    0 0 0 1px #f2f2f2, 0 2px 4px rgba(0, 0, 0, 0.2)")
    ":active"         {:box-shadow "inset 0 2px 3px rgba(0, 0, 0, 0.2)"}
    ":hover"          {:background   "#f2f2f2"
                       :border-color "#8c8c8c"
                       :box-shadow   "inset 0 1px 0 white, inset 0 -1px 0 #d9d9d9, inset 0 0 0 1px #f2f2f2"}}})

(def button-styles
  {"button"
   {:padding       "1rem 2rem"
    :border-radius "4px"
    :transition    "all .5s"
    ":hover"       {:box-shadow " 0px 10px 10px rgba(0,0,0,0.2)"
                    :transform  "translateY(-3px)"
                    "::after"   {:transform "scaleX(1.4) scaleY(1.6)"
                                 :opacity   0
                                 }}


    "::after"      {:content         "''"
                    :text-decoration "none"
                    :text-transform  "uppercase"
                    :position        "absolute"
                    :width           "100 %"
                    :height          "100 %"
                    :top             0
                    :left            0
                    :border-radius   100
                    :display         "inline-block"
                    :z-index         -1
                    :transition      "all .5s"
                    }

    }})

(defcard
  (fn [data _]
    (let [on? (:on? @data)]
      (html
        [:div
         [:h2 "Click here to style the buttons on this page"]
         [:button {:on-click #(swap! global-data update :on? not)} "Do it."]
         (when on? (global-style btn-styles))])))
  global-data)

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
           {:body      {:background "#cce" "@media (min-width:700px)" {:background "#ccc"}}
            :.my-thing {:background "navy" :color "#cce" mw-700 {:background "black"}}})]))

(def animation
  (keyframes {:from {:background "transparent"}
              :to   {:background "grey"}}))

(defn test-body [{:keys [time]}]
  {:animation (str animation " " time "s ease-in-out infinite")}
  )

;(defstyled with-anim :div
;  (fn [{:keys [time]}]
;    {:animation (str animation " " time "s ease-in-out infinite")}))

(defstyled with-anim :div
  test-body)

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

(defstyled flex :div
  {:display         "flex"
   :flex-wrap       "wrap"
   :justify-content "space-evenly"})

(defstyled box :div
  {:width           "20%"
   :padding         "1rem 0"
   :display         "flex"
   :margin          "1rem"
   :justify-content "center"
   :background      "palEvIoletrEd"})

(defstyled box2 box
  {:border-radius "4px"
   :user-select   "none"
   :background    (p/lighten 0.2 "palevioletred")
   :cursor        "pointer"
   ":hover"       {:background (darken 0.2 "palevioletred")}
   ":active"      {:background (darken 0.4 "palevioletred")
                   :box-shadow "4px 4px lightgrey"}})

(defcard flex-card
  "
```clojure
(defstyled flex :div\n  {:display         \"flex\"\n   :flex-wrap       \"wrap\"\n   :justify-content \"space-evenly\"})

(defstyled box :div\n  {:width           \"20%\"\n   :padding         \"1rem 0\"\n   :display         \"flex\"\n   :margin          \"1rem\"\n   :justify-content \"center\"\n   :background      \"palEvIoletrEd\"})\n

(defstyled box2 box\n  {:border-radius \"4px\"\n   :user-select   \"none\"\n   :background    (p/lighten 0.2 \"palevioletred\")\n   :cursor        \"pointer\"\n   \":hover\"       {:background (darken 0.2 \"palevioletred\")}\n   \":active\"      {:background (darken 0.4 \"palevioletred\")\n                   :box-shadow \"4px 4px lightgrey\"}})

(flex (box \"box\") (box \"box\") (box \"box\") (box2 \"box2\") (box2 \"box2\") (box \"box\") (box \"box\") (box2 \"box2\") (box \"box\")))\n```
"
  (flex (box "box")
    (box "box") (box "box") (box2 "box2") (box2 "box2") (box "box")
    (box "box") (box2 "box2") (box "box")))



(defstyled with-anim2 :div
  (fn [{:keys [amt] :or {amt 20}}]
    {:animation
     (str
       (keyframes {:from {:background (p/adjustHue amt "yellow")}
                   :to   {:background "yellow"}})
       " 2s ease-in-out infinite")}))

;; keyframes
(defcard keyframes2
  "
```clojure
(defstyled with-anim2 :div
  (fn [{:keys [amt] :or {amt 20}}]
    {:animation
      (str (keyframes
        {:from {:background (p/adjustHue amt \"yellow\")}
         :to   {:background \"yellow\"}})
          \" 2s ease-in-out infinite\")}))
  ```"
  (fn [a o]
    (html
      [:div
       [:p "hue: " (p/adjustHue (:amt @a) "yellow")]
       [:button {:on-click #(swap! a update :amt (partial + 10))} "inc"]
       [:button {:on-click #(swap! a update :amt (partial - 10))} "dec"]
       (with-anim2 {:amt     (:amt @a)
                    :onClick #(js/console.log "ON CLICK")} "Some text here")]))
  {:amt 20})


;; change global

(defcard update-global-styles
  "
  This example changes the body background color.
  ```clojure
   ```"
  (fn [a _]
    (let [{:keys [bg]} @a]
      (println "bg: " bg)
      (html
        [:div
         [:label "Input a color for the background color:"]
         [:input {:value bg :on-change #(swap! a assoc :bg (-> % .-target .-value))}]
         (global-style {:body {:background bg}})])))
  {:bg "#cce"})



(def start-bg "rgb(239, 237, 237)")

(defcard update-card-bg-styles
  "
  This example changes the body background color.
  ```clojure
   ```"
  (fn [a _]
    (let [{:keys [bg]} @a
          ;cls :.com-rigsomelight-devcards-panel-heading
          cls :.my-card
          ]
      (html
        [:div
         [:label "Input a color for the background color:"]
         [:input {:value bg :on-change #(swap! a assoc :bg (-> % .-target .-value))}]
         [:button {:on-click #(swap! a assoc :bg start-bg)} "reset"]
         [:button
          {:on-click
           #(swap! a assoc :bg (p/lighten 0.08 bg))} "lighten"]

         [:button
          {:on-click
           #(swap! a assoc :bg (p/darken 0.08 bg))} "darken"]
         (global-style {cls {:background bg}})])))
  {:bg start-bg}
  {:classname "my-card"})




(defn ^:export main
  []
  (js/console.log "HIII")
  (dc/start-devcard-ui!))

