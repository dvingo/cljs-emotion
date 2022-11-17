(ns dv.cljs-emotion.helix-cards
  (:require
    [devcards.core :as dc :refer (defcard)]
    [dv.cljs-emotion.fulcro-cards]
    [dv.cljs-emotion.reagent-cards]
    [dv.cljs-emotion.reagent-debug]
    [dv.cljs-emotion.debug]
    [dv.cljs-emotion.target-styled]
    [dv.emotion-helix-dom :as d]
    [dv.cljs-emotion :as em]
    [helix.core :refer [$ defnc]]
    [dv.cljs-emotion :as em :refer [defstyled keyframes global-style theme-provider]]))

(defcard "# Helix dom support for :css prop.

The namespace `dv.emotion-helix-dom` is a copy of the `helix.dom` namespace with added support for emotion's `:css` property.


If a component does not include the `:css` property and it does not include the dynamic property symbols `:&` and `&`,
then helix's `dom-props` macro is expanded on the props, so there is no performance cost on top of helix for components
that don't use styles. For any components using dynamic props the code is the same as that in helix with the addition
of the `:css` property being wrapped to deal with cljs->js datatype conversion.")

(defnc a-component []
  (d/div {:css (fn [{:keys [bg]}]
                 {:color            "yellow"
                  :background-color (or bg "black")})}
    "Here is some text in a div"))

(defnc a-table []
  (let [dyn-props {:class "TESTING"
                   :style {:background-color "red"}}]
    (d/table {:css {:background-color             "blue"
                    "tbody > tr:nth-of-type(odd)" {:background-color "purple"}
                    :border                       "2px solid yellow"}
              :&   dyn-props}
      (d/tbody
        (d/tr (d/td "hello"))
        (d/tr (d/td "hello1"))
        (d/tr (d/td "hello2"))
        (d/tr (d/td "hello2"))
        (d/tr (d/td "hello2"))
        (d/tr (d/td "hello2"))
        (d/tr (d/td "hello2"))
        (d/tr (d/td "hello2"))
        (d/tr (d/td "hello2"))))))

(defnc vector-of-styles []
  (d/div {:css [{:color "black"} {:background-color "#efefef"} #js {:borderRadius "4px"} {:border "1px solid"}]}
    "This text should be black on #efefef"))

(defcard helix-css
  (d/div
    (d/h1 "This is a helix table with the :css prop targeting the children rows")
    ($ a-table)
    ($ vector-of-styles)))

(dc/defcard-doc "In the above example we're using nested selectors with both static props and dynamic
(you can inspect this page to see the `TESTING` css class is applied).

In the second example we're using a
vector of styles which are merged together by emotion."
  (dc/mkdn-pprint-source a-table)
  (dc/mkdn-pprint-source vector-of-styles))

(defnc theme-component []
  (d/div
    (em/theme-provider {:theme {:bg "cadetblue"}}
      (d/h2 "With theme, bg should be cadetblue")
      ($ a-component))
    (d/h2 "With no theme, bg should be black")
    ($ a-component)))

(defcard theme-support
  ($ theme-component))

(dc/defcard-doc
  "This example demonstrates using a theme and function as the value for `:css` to read the theme data."
  (dc/mkdn-pprint-source theme-component)
  (dc/mkdn-pprint-source a-component))

(def some-css
  {:self  (em/css #js {:backgroundColor "#aefefe"
                       :border          "2px solid #eee"
                       :borderRadius    "0.5rem"
                       :padding         "1rem"})
   :title (em/css {:font-size "1.25rem"
                   :color     "red"}
            #js{:border     "1px dashed"
                "> div > p" {:color "blue"}})
   :more  (em/css {:border "2px solid"})})

(def merged-css
  (em/css
    {:background-color "black"}
    (:title some-css)
    (:more some-css)))

(defn object-styles []
  (d/div {:css (:self some-css)}
    (d/h2 {:css (:title some-css)} "here we have a title")
    (d/h2 {:css merged-css} "here we have a title")
    (d/p {:css (em/css merged-css {:color "white"})}
      "And overwrite inline")))

(defcard object-styles-card
  (object-styles))

(dc/defcard-doc
  "We can use object styles as described here [https://emotion.sh/docs/object-styles](https://emotion.sh/docs/object-styles)
  and here [https://emotion.sh/docs/composition](https://emotion.sh/docs/composition)

  We have the `css` function which lets us mix cljs datatypes with javascript ones.

  This is very flexible and allows creating a library of reusable styles which can be combined per component as needed."
  (dc/mkdn-pprint-source some-css)
  (dc/mkdn-pprint-source merged-css)
  (dc/mkdn-pprint-source object-styles))


