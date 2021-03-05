(ns net.cassiel.auto-23.checker
  (:require [clojure.spec.alpha :as s]))

(defn debug [tag x]
  ;;(js/console.log tag (str x))
  x)

(s/def ::key (s/and integer? pos?))
(s/def ::label string?)
(s/def ::pos (s/and integer? #(not (neg? %))))
(s/def ::opacity (s/and number? #(>= % 0.0) #(<= % 1.0)))
(s/def ::num_discs (s/and integer? pos?))
(s/def ::radius (s/and number? #(>= % 0.0) #(<= % 1.0)))

(s/def ::item (s/keys :req-un [::label ::pos ::opacity ::num_discs ::radius]))
(s/def ::items (s/coll-of ::item))
(s/def ::incl (s/coll-of ::key))
(s/def ::excl (s/coll-of ::key))
(s/def ::key-sets (s/keys :req-un [::incl ::excl]))

;; TODO how to test for a set here?:
(s/def ::wired-positions (s/and (s/coll-of ::pos) set?))
(s/def ::working-state (s/keys :req-un [::key-sets ::wired-positions]))

(defn conformer
  "This is a bit of a hack."
  [key x]
  (let [attempt (s/conform key x)]
    (if (= attempt ::s/invalid)
      (throw (js/Error. (s/explain key x)))
      (debug "conformed" attempt))))
