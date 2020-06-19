(ns dv.cljs-emotion.devcards
  (:require
    [devcards.core :as dc :refer (defcard)]
    [dv.cljs-emotion.target-styled]
    [dv.cljs-emotion.reagent-cards]
    [cljs.reader :as edn]
    [sablono.core :as sab :refer [html]]
    ["polished" :as p :refer [darken]]
    ;[reagent.core :as r]
    [dv.cljs-emotion :as em :refer [defstyled keyframes global-style]]))
(enable-console-print!)

(defcard
  "
  Hi there. This page uses devcards to demonstrate usage of the dv.cljs-emotion library.
  This library is a small wrapper around the emotion css-in-js JavaScript library that
  makes it easy to use all of CSS within a react application.

  The main API of this library is: `[defstyled keyframes global-style]`

  defstyled is a wrapper around `@emotion/styled`
  Styled is multi-arity and supports passing functions that return maps of styles, a vector of styles that
  will be merged top down (first to last) and a map, you can also pass JavaScript objects and arrays.

  This library converts between cljs and js structures, but the multi-arity capability is built into emotion already.
  ")

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
                                 :opacity   0}}
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
                    :transition      "all .5s"}}})

(defcard
  "For a quick demonstration we will change some global styles on this page.

  In this example we add some styles to `<button>` elements on this page using
  global styles.

  If global styles are rendered and the on subsequent render they are not, emotion will remove those global styles
  from the page so you can dynamically include global styles.
```clojure
(html\n  [:div\n  [:h2 \"Click the button to style all the <button>s on this page\"]\n  [:button {:on-click #(swap! global-data update :on? not)} \"Do it.\"]\n (when on? (global-style btn-styles))])
```
  "
  (fn [data _]
    (let [on? (:on? @data)]
      (html
        [:div
         [:h2 "Click the button to style all the <button>s on this page"]
         [:button {:on-click #(swap! global-data update :on? not)} "Do it."]
         (when on? (global-style btn-styles))])))
  global-data)

(defstyled sample1 :div
  {:background-color "rebeCCApurple"})

(defcard
"The main api is defstyled which will return react element factory - a function that accepts props and children.

```clojure
(defstyled sample1 :div
  {:background-color \"RebeccaPurple\"})

(sample1 \"Some text here\")
```"
  (sample1 "Some text here"))

(defcard
  "You find it useful to know that the `className` property is passed through to the rendered element.

```clojure
  (defstyled sample1 :div
    {:background-color \"RebeccaPurple\"})
  (sample1 {:className \"TEST\"} \"Some text here\")
```"
  (sample1 {:className "TEST"} "Some text here"))

(def mw-700 "@media (min-width:700px)")
(defcard global-styles
  "Nested styles are supported - as these are part of the emotion API. Here we are applying different styles
  for screen widths greater than 699 pixels using a breakpoint.

  We also target a global class \"my-thing\" - using the :.classname notation is handled by this library and passes
  \".my-thing\" to emotion.

  Resize the width of the page to see the effect.

```clojure
(def mw-700 \"@media (min-width:700px)\")
[:div\n [:.my-thing \"Some content\"]\n  (global-style\n    {:.my-thing {:background \"navy\" :color \"#cce\" mw-700 {:background \"black\"}}})])
```"
(html [:div
    [:.my-thing "Some content"]
     (global-style
      {:.my-thing {:background "navy" :color "#cce" mw-700 {:background "black"}}})]))

(def animation
  (keyframes {:from {:background "transparent"}
              :to   {:background "grey"}}))

(defn test-body [{:keys [time]}]
  {:animation (str animation " " time "s ease-in-out infinite")}
  )

(defstyled with-anim :div
  test-body)

;; keyframes
(defcard keyframes
  "Keyframe animations are supported - this is built into emotion.
```clojure
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
  "Here is a somewhat larger example, showing the extension feature of emotion to override styles.

  This example using the polished library as well.

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
"Animation can be defined dynamically as well - in the render.

This example also shows how you can pass any props to the underlying component - in this case onClick.

```clojure
(defstyled with-anim2 :div
  (fn [{:keys [amt] :or {amt 20}}]
    {:animation
      (str (keyframes
        {:from {:background (p/adjustHue amt \"yellow\")}
         :to   {:background \"yellow\"}})
          \" 2s ease-in-out infinite\")}))

(html\n  [:div\n    [:p \"hue: \" (p/adjustHue (:amt @a) \"yellow\")]\n    [:button {:on-click #(swap! a update :amt (partial + 10))} \"inc\"]\n    [:button {:on-click #(swap! a update :amt (partial - 10))} \"dec\"]\n    (with-anim2 {:amt     (:amt @a)\n                 :onClick #(js/console.log \"ON CLICK\")} \"Some text here\")])
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
  This example changes the body background of this page's body color.
  ```clojure
  [:div\n         [:label \"Input a color for the background color:\"]\n         [:input {:value bg :on-change #(swap! a assoc :bg (-> % .-target .-value))}]\n         (global-style {:body {:background bg}})]
   ```"
  (fn [a _]
    (let [{:keys [bg]} @a]
      (html
        [:div
         [:label "Input a color for the background color:"]
         [:input {:value bg :on-change #(swap! a assoc :bg (-> % .-target .-value))}]
         (global-style {:body {:background bg}})])))
  {:bg "#cce"})


(def start-bg "#eeaabb")

(defcard update-card-bg-styles
  "
  This example changes the background color of this card.
  ```clojure
  (let [{:keys [bg]} @a\n          cls :.my-card]\n      (html\n        [:div\n         [:label \"Input a color for the background:\"]\n         [:input {:value bg :on-change #(swap! a assoc :bg (-> % .-target .-value))}]\n         [:button {:on-click #(swap! a assoc :bg start-bg)} \"reset\"]\n         [:button\n          {:on-click\n           #(swap! a assoc :bg (p/lighten 0.08 bg))} \"lighten\"]\n\n         [:button\n          {:on-click\n           #(swap! a assoc :bg (p/darken 0.08 bg))} \"darken\"]\n         (global-style {cls {:background bg}})]))
   ```"
  (fn [a _]
    (let [{:keys [bg]} @a
          cls :.my-card]
      (html
        [:div
         [:label "Input a color for the background:"]
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

(defn ^:export main [] (dc/start-devcard-ui!))

