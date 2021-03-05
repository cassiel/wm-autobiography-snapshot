(ns net.cassiel.auto-23.tame-randoms
  "'Tame' (and not very good) randomisation that we can feed with our not-very-good
   generator from the DNA data."
  (:require [net.cassiel.auto-23.config :as cx]
            [net.cassiel.auto-23.data :as data]))

;; Really bad random number generator: we cycle around our genotype list.

(def all-genotypes (vec (set data/genotypes)))

;; Start somewhere random in our chromosome:

(def A (atom (drop (rand-int (count data/genotypes))
                   data/genotypes)))

(defn step []
  (first
   (swap! A #(if %
               (next %)
               data/genotypes))))


(defn tame-rand []
  (if cx/tame-randoms
    (/ (.indexOf all-genotypes (step))
       (count all-genotypes))
    (rand)))

(defn tame-rand-nth [ll]
  (if cx/tame-randoms
    (when (seq ll)
      (nth ll (int (* (count ll) (tame-rand)))))
    (rand-nth ll)))

(defn tame-shuffle [ll]
  (if cx/tame-randoms
    (letfn [(shuffle' [result items]
              (if (seq items)
                (let [x (tame-rand-nth items)
                      items' (remove #{x} items)]
                  (recur (cons x result) items'))
                result))]
      (shuffle' nil ll))
    (shuffle ll)))
