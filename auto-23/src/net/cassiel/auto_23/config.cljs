(ns net.cassiel.auto-23.config)

;; For development, bring up a local Flask server, perhaps with a test database; CS/JS code is immaterial.

(def endpoints {:dev "http://localhost:5000/exchange"
                :prod "/exchange"})

(def endpoint (:prod endpoints))

(def tame-randoms true)
