#!/bin/bash -

set -euo pipefail


echo clojure -Spom -Ajar
clojure -Spom -Ajar
