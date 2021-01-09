# ClojureScript wrapper for emotion

[![Clojars Project](https://img.shields.io/clojars/v/dv/cljs-emotion.svg)](https://clojars.org/dv/cljs-emotion)

https://emotion.sh/docs/introduction

To use this library

Include it in your deps.edn

```clojure
dv/cljs-emotion {:mvn/version "2020-10-13"}
```

And install emotion:

```bash
yarn add @emotion/react @emotion/styled
```

Documentation and examples are here:

https://dvingo.github.io/cljs-emotion


---- 

Notes for deploy:

Build a deployable jar of this library:

    $ clojure -A:jar

Install it locally:

    $ clojure -A:install

Deploy it to Clojars -- needs `CLOJARS_USERNAME` and `CLOJARS_PASSWORD` environment variables:

    $ clojure -A:deploy

# development

```bash
make dev
```
