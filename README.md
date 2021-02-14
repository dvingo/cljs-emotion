# ClojureScript wrapper for emotion

[![Clojars Project](https://img.shields.io/clojars/v/dv/cljs-emotion.svg)](https://clojars.org/dv/cljs-emotion)

Documentation and example usage are hosted in devcards here:

https://dvingo.github.io/cljs-emotion/#!/dv.cljs_emotion.devcards

https://dvingo.github.io/cljs-emotion

For info about emotion itself, see:

https://emotion.sh/docs/introduction

## To use this library

Include it in your clojure project dependency list (see most recent version on Clojars).

And install emotion:

```bash
npm install @emotion/react @emotion/styled
```

---- 

Notes for deploy:

Build a deployable jar of this library:

    clojure -M:jar

Install it locally:

    clojure -M:install

Deploy it to Clojars -- needs `CLOJARS_USERNAME` and `CLOJARS_PASSWORD` environment variables:

    clojure -M:deploy

# development

```bash
make dev
```
