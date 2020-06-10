#!/bin/bash -

set -euo pipefail


echo clojure -Spom 
clojure -Spom

echo clojure -Ajar
clojure -Ajar
