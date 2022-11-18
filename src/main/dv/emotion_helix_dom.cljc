;; copied from https://github.com/lilactown/helix/blob/ddfa2de50804f84bb6e8100ed278cbe05cff128e/src/helix/dom.cljc
(ns dv.emotion-helix-dom
  #?(:cljs (:require-macros [dv.emotion-helix-dom]))
  (:refer-clojure :exclude [map meta time])
  (:require
    #?(:cljs ["@emotion/react" :as em.react])
    [borkdude.dynaload :refer [dynaload]]
    [clojure.walk :as walk]
    [dv.cljs-emotion :as dv.em]))

#?(:cljs (def jsx em.react/jsx))

(declare
  input textarea option select a abbr address area article aside audio b base bdi
  bdo big blockquote body br button canvas caption cite code col colgroup data datalist
  dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form
  h1 h2 h3 h4 h5 h6 head header hr html i iframe img ins kbd keygen label legend li link
  main map mark menu menuitem meta meter nav noscript object ol optgroup output p param
  picture pre progress q rp rt ruby s samp script section small source span strong style
  sub summary sup table tbody td tfoot th thead time title tr track u ul var video wbr
  circle clipPath ellipse g line mask path pattern polyline rect svg text defs
  linearGradient polygon radialGradient stop tspan)

(def tags
  '[input textarea option select
    a
    abbr
    address
    area
    article
    aside
    audio
    b
    base
    bdi
    bdo
    big
    blockquote
    body
    br
    button
    canvas
    caption
    cite
    code
    col
    colgroup
    data
    datalist
    dd
    del
    details
    dfn
    dialog
    div
    dl
    dt
    em
    embed
    fieldset
    figcaption
    figure
    footer
    form
    h1
    h2
    h3
    h4
    h5
    h6
    head
    header
    hr
    html
    i
    iframe
    img
    ins
    kbd
    keygen
    label
    legend
    li
    link
    main
    map
    mark
    menu
    menuitem
    meta
    meter
    nav
    noscript
    object
    ol
    optgroup
    output
    p
    param
    picture
    pre
    progress
    q
    rp
    rt
    ruby
    s
    samp
    script
    section
    small
    source
    span
    strong
    style
    sub
    summary
    sup
    table
    tbody
    td
    tfoot
    th
    thead
    time
    title
    tr
    track
    u
    ul
    var
    video
    wbr

    ;; svg
    circle
    clipPath
    ellipse
    g
    line
    marker
    mask
    path
    pattern
    polyline
    rect
    svg
    text
    defs
    linearGradient
    polygon
    radialGradient
    stop
    tspan])

(def hx-merge-obj (dynaload 'helix.impl.props/merge-obj))
(def hx-primitive-obj (dynaload 'helix.impl.props/primitive-obj))
(def hx-set-obj (dynaload 'helix.impl.props/set-obj))
(def hx-kw->str (dynaload 'helix.impl.props/kw->str))
(def hx-camel-case (dynaload 'helix.impl.props/camel-case))
(def hx-or-undefined (dynaload 'helix.impl.props/or-undefined))
(def hx-normalize-class (dynaload 'helix.impl.props/normalize-class))
(def hx-dom-style (dynaload 'helix.impl.props/dom-style))

(defn -dom-props
  ([m] #?(:clj  (if-let [spread-sym (cond
                                      (contains? m '&) '&
                                      (contains? m :&) :&)]
                  `(@hx-merge-obj ~(-dom-props (dissoc m spread-sym) (@hx-primitive-obj))
                     (-dom-props ~(get m spread-sym)))
                  (-dom-props m (@hx-primitive-obj)))
          :cljs (if (map? m)
                  (-dom-props m (@hx-primitive-obj))
                  ;; assume JS obj
                  m)))
  ([m o]
   (if (seq m)
     (recur (rest m)
       (let [entry (first m)
             k     (key entry)
             v     (val entry)]
         (case k
           :css (@hx-set-obj o "css" #?(:clj `(dv.em/convert-css ~v) :cljs (dv.em/convert-css v)))
           :class (@hx-set-obj o "className" (@hx-normalize-class v))
           :for (@hx-set-obj o "htmlFor" v)
           :style (@hx-set-obj o "style" (@hx-dom-style v))
           :value (@hx-set-obj o "value" #?(:clj `(@hx-or-undefined ~v) :cljs (@hx-or-undefined v)))
           (@hx-set-obj o (@hx-camel-case (@hx-kw->str k)) v))))
     #?(:clj  (list* o)
        :cljs o))))

(defmacro dom-props [m] (-dom-props m))

(defmacro $d
  "Creates a new React DOM element. \"type\" ought to be a string like \"span\",
  \"div\",etc.

  When a map of props are passed as the second argument, will statically convert
  to a JS object, specially handling things like converting kebab-case props to
  camelCase and other transformations.

  Use the special & or :& prop to merge dynamic props in."
  [type & args]
  (if (map? (first args))
    `^js/React.Element (jsx ~type (dom-props ~(first args)) ~@(rest args))
    `^js/React.Element (jsx ~type nil ~@args)))

#?(:clj (defn gen-tag [tag] `(defmacro ~tag [& args#] `($d ~(str '~tag) ~@args#))))
#?(:clj (defmacro gen-tags [] `(do ~@(for [tag tags] (gen-tag tag)))))
#?(:clj (gen-tags))
