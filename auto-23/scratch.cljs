(ns user
  (:require [net.cassiel.auto-23.tame-randoms :as tame]
            [net.cassiel.auto-23.data :as data]))

(net.cassiel.auto-23.components.svg-base/fill-colour-for 20 0)

(-> (nth thi.ng.color.presets.categories.cat20 0)
    (.toString 16))

(map #(.toString % 16) thi.ng.color.presets.categories.cat20)

(map #(net.cassiel.auto-23.components.svg-base/fill-colour-for % 0)
     (range 23))

(-> (net.cassiel.auto-23.components.svg-base/level
     (nth thi.ng.color.presets.categories.cat20 0) -0.3)
    (.toString 16))

;; ---

(tame/tame-rand-nth [1 2 3])

(tame/tame-shuffle (range 10))


(tame/tame-rand)

(count data/genotypes)

(set data/genotypes)

(tame/step)
