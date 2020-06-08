#!/bin/bash -

set -euo pipefail


echo clojure -Spom 
clojure -Spom -Ajar

echo clojure -Ajar
clojure -Ajar
