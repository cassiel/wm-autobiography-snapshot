(ns net.cassiel.lifecycle
    (:require [clojure.string :as string]))

(defn pad [x]
  (string/join (conj (vec (repeat (- 20 (count x)) " ")) x " ")))

(defn starting [component & {:keys [on action]}]
  (if on
    (do
      (js/console.info (pad "already running") (.toString component))
      component)
    (do
      (js/console.info (pad "+>>") (.toString component))
      (action))))

(defn stopping [component & {:keys [on action]}]
  (if on
    (do
      (js/console.info (pad "<<-") (.toString component))
      (action))
    (do
      (js/console.info (pad "already stopped") (.toString component))
      component)))
