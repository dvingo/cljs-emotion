(ns dv.cljs-emotion.target-styled
  (:require
    [devcards.core :as dc :refer (defcard)]
    [cljs.reader :as edn]
    [sablono.core :as sab :refer [html]]
    ["polished" :as p :refer [darken]]
    ;[reagent.core :as r]
    [dv.cljs-emotion :as em :refer [defstyled keyframes global-style]]))
(defstyled prop-fn :div {:padding 20 :outline "1px solid"} )

(defstyled prop-fn2 :div
  {:padding 20
   :outline "1px solid"
  "& > a"  {:color "hotpink"} } )

;(defstyled prop-fn2 :div
;  {(-> prop-fn meta ::em/styled)
;   {:background "blue"}})

;(js/console.log (meta prop-fn ))
(js/console.log "HERE IT IS")
(js/console.log (-> prop-fn meta ::em/styled))


;(js/console.log (.withComponent (-> prop-fn meta ::em/styled) "button"))
(set! js/my_thing (-> prop-fn meta ::em/styled))
;(js/console.log "calss: " (-> prop-fn meta ::em/styled) "button")
(defcard
  "## Using :as
```clojure
(defstyled prop-fn :div {:padding 20 :outline \"1px solid\"})
(prop-fn {:as \"button\"} \"HERE\")\n
```
  "
  (prop-fn {:as "button"} "HERE")
  )

(defcard prop-fn
  "
```clojure
(defstyled prop-fn2 :div\n  {:padding 20 \n   :outline \"1px solid\"\n  \"& > a\"  {:color \"hotpink\"} } )\n

(prop-fn2 (html [:a {:href \"localhost:9001\"} \"hi here\"]))\n
```
"
  (prop-fn2 (html [:a {:href "localhost:9001"} "hi here"]))
  )

(defstyled hover-example prop-fn
  {"&:hover,&:focus" {:background "hotpink"}})

(defcard
  "hover"
  (hover-example "HELLLO")
  )


