# ClojureScript wrapper for emotion

https://emotion.sh/docs/introduction

To use this library

Include it in your deps.edn

dv/cljs-emotion {:mvn/version "2020-06-21"}

And install emotion:

```bash
yarn add @emotion/core @emotion/styled
```

Documentation and examples are here:

https://dvingo.github.io/cljs-emotion


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
