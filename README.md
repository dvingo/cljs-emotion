# ClojureScript wrapper for emotion

[![Clojars Project](https://img.shields.io/clojars/v/dv/cljs-emotion.svg)](https://clojars.org/dv/cljs-emotion)

[![cljdoc badge](https://cljdoc.org/badge/dv/cljs-emotion)](https://cljdoc.org/d/dv/cljs-emotion)


Documentation and example usage are hosted in devcards here:

https://dvingo.github.io/cljs-emotion/#!/dv.cljs_emotion.devcards

https://dvingo.github.io/cljs-emotion

For info about emotion itself, see:

https://emotion.sh/docs/introduction

# To use this library

Include it in your clojure project dependency list (see most recent version on Clojars).

And install emotion:

```bash
npm install @emotion/react @emotion/styled
```
The main namespaces are:

`dv.cljs-emotion` - Plain React components/elements

With API: `defstyled`, `jsx`, `css`, `global-style`, `theme-provider`, `keyframes`

`dv.cljs-emotion-reagent` - Reagent components

With API: `defstyled`, `jsx`, `css`, `global-style`, `theme-provider`, `keyframes`

`dv.emotion-helix-dom`

DOM elements for use with helix that support the `:css` prop, with the same API as the components in the `helix.dom` namespace.

## Use with plain react components

```clojure 
(require [dv.cljs-emotion :refer [jsx css defstyled keyframes global-style theme-provider]])

(defstyled sample1 :div
  {:background-color "RebeccaPurple"})

(react/createElement sample1 nil "hello")
```

See the devcards for lots more details

https://dvingo.github.io/cljs-emotion/#!/dv.cljs_emotion.devcards

## Use with helix

https://github.com/lilactown/helix

The namespace `dv.emotion-helix-dom` is a drop in replacement for `helix.dom`, and supports all the props that helix
supports in addition to supporting the `:css` property of emotion. Here is an example:

```clojure
(:require
  [dv.emotion-helix-dom :as d]
  [helix.core :refer [$ defnc]]
  [dv.cljs-emotion :as em :refer [css defstyled keyframes global-style theme-provider]]

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
```

You can of course use the `defstyled` API as well if you wish as that outputs React components.

More examples in the devcards:

https://dvingo.github.io/cljs-emotion/#!/dv.cljs_emotion.helix_cards

## Use with reagent

There is a separate namespace for reagent support:

```clojure
(:require
  [dv.cljs-emotion-reagent :refer [jsx css defstyled keyframes global-style theme-provider]])

(defstyled a-child :div {:color "deepSKYBlue"})

(defstyled a-parent2 :div
  (fn [{:keys [color]}]
    {:color  "red"
     a-child {:color (or color "darkorchid")}
     "@media (min-width: 1024px)"
     {a-child {:color "black"}}}))

(def black-bg {:background-color "black"})

;; in your component's render function:

[:div
 [a-parent2 "parent should be red"]
 (jsx {:css (em/css black-bg {:color "white"})})
 [a-parent2 {:color "steelblue"}
  [a-child "nested child should be darkorchid"]]]
```

The component output by `defstyled` supports passing reagent vectors as children and will convert them to React Elements
for you.

If you want to use the `:css` property you have to use the `jsx` helper or create a component with `defstyled`

```clojure
(em/defstyled div :div {})

;; in your render function:
[div {:css [{:background "blue"} {:color "#eff"}]} "Some text"]
```

A cool future development would be to plug into the Reagent compiler and add support for `:css` on all elements.

Pull requests welcome if that interests you!

More examples in the devcards:

https://dvingo.github.io/cljs-emotion/#!/dv.cljs_emotion.reagent_cards

# Development

```bash
make dev
```

This starts the shadow-cljs server and watch process for the devcards build.

Open the shadow-cljs devtools webpage and then click on the webserver that hosts the devcards.

## Deploy

Notes for deploy:

- update pom.xml version
- commit

Build a deployable jar of this library:

    clojure -X:jar

Install it locally:

    clojure -M:install

Deploy it to Clojars -- needs `CLOJARS_USERNAME` and `CLOJARS_PASSWORD` environment variables:

    clojure -M:deploy

## Publish github pages

See `Makefile`

```bash
git checkout gh-pages
git merge master
make gh-pages
git add -A
git commit -m
git push github HEAD -f
```
