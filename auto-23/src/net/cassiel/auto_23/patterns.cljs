(ns net.cassiel.auto-23.patterns
  (:require [net.cassiel.auto-23.checker :as cx]
            [net.cassiel.auto-23.tame-randoms :as tame]))

(def ^:private exclusions
  "Exclusion groups for the 23 items. They should constitute a set such
   that applying them results in 15 items, and includes #1, #12 and #23.
   Numbering starts from #1."
  [[1] [2 3] [4 5] [6] [7] [8 9] [10 11] [12] [13] [14] [15]
   [16 17] [18 19 20] [21 22] [23]])

;; These get referenced by other JS (for the listing page):
(def total-num-discs 23)
(def display-num-discs (count exclusions))

(defn- select-by-exclusion
  "Apply exclusions to get a list of numbers to include, and those to exclude."
  []
  (cx/conformer ::cx/key-sets
                (reduce (fn [result item]
                          ;; RANDOM: arbitrary selection of which item to apply in each exclusion:
                          (let [x (tame/tame-rand-nth item)
                                xs (remove (partial = x) item)]
                            (-> result
                                (update :incl conj x)
                                (update :excl concat xs))))
                        {:incl [] :excl []}
                        exclusions)))

(defn- starting-shuffle []
  ;; RANDOM: initial starting shuffled state, after applying exclusions:
  (let [{:keys [incl excl]} (select-by-exclusion)
        incl' (tame/tame-shuffle incl)]
    (->> {:key-sets {:incl incl' :excl excl}
          :wired-positions #{ }}
         (cx/conformer ::cx/working-state))))

(defn- into-position
  "Put a particular item in a particular position, swapping with the
   value already there. The item must be in the inclusion list."
  [working-state & {:keys [pos key]}]
  (let [keys (get-in working-state [:key-sets :incl])
        curr-pos (.indexOf keys key)
        curr-val (nth keys pos)]
    (as-> (vec keys) X
      (assoc X curr-pos curr-val)
      (assoc X pos key)
      (assoc-in working-state [:key-sets :incl] X)
      (update-in X [:wired-positions] conj pos)
      (cx/conformer ::cx/working-state X))))

(defn- maybe-swap
  "If `old` is in `items`, replace it with `new`."
  [items old new]
  (let [p (.indexOf items old)]
    (if (not (neg? p))
      (assoc (vec items) p new)
      items)))

(defn- pairing
  "If `if_` is in the include set, then swap to make sure `use_` is
   in the set and `not_` is not."
  [working-state & {if_ :if use_ :use not_ :not}]
  (let [{:keys [key-sets]} working-state
        {:keys [incl excl]} key-sets]
    (if (neg? (.indexOf incl if_))
      working-state
      (cx/conformer ::cx/working-state
                    (-> working-state
                        (update-in [:key-sets :incl] maybe-swap not_ use_)
                        (update-in [:key-sets :excl] maybe-swap use_ not_))))))

(defn- any-unwired-pos-in-range [wired-positions min max]
  (let [positions (range min (inc max))
        candidates (filter #(not (wired-positions %)) positions)]
    ;; RANDOM: pick any position that isn't wired down (so we can swap it out)
    (tame/tame-rand-nth candidates)))

(defn- into-region
  "Pull a key, if present, into a region (position `min`-`max` inclusive)."
  [working-state & {:keys [key min max]}]
  (let [incl (get-in working-state [:key-sets :incl])
        pos (.indexOf incl key)]
    (if (not (neg? pos))
      ;; We move unconditionally - not really necessary.
      (let [pos' (any-unwired-pos-in-range (:wired-positions working-state) min max)
            key' (nth incl pos')
            incl' (assoc (vec incl)
                         pos key'
                         pos' key)]
        (cx/conformer ::cx/working-state
                      (-> working-state
                          (assoc-in [:key-sets :incl] incl')
                          (update :wired-positions conj pos'))))
      working-state)))

(defn- distant?
  "If both these keys present, must have some separation."
  [working-state k1 k2]
  (let [incl (get-in working-state [:key-sets :incl])
        p1 (.indexOf incl k1)
        p2 (.indexOf incl k2)]
    (or (< p1 0)
        (< p2 0)
        (> (js/Math.abs (- p1 p2)) 1))))

(defn- well-spaced
  "The final condition (spacing between #2/#3, #6, #13, #15) we will
   impose as an iterative filter - easier than trying to apply a
   corrective function. After N iterations we'll give up."
  [working-state]
  (reduce (fn [result [k1 k2]]
            (and result (distant? working-state k1 k2)))
          true
          [[2 6] [3 6] [2 13] [3 13] [2 15] [3 15]
           [6 13] [6 15]
           [13 15]]))

(defn- full-shuffle
  ([] (full-shuffle 10))

  ([tries]
   (let [candidate
         (-> (starting-shuffle)
             ;; #1 must be first:
             (into-position :pos 0 :key 1)
             ;; #23 must be last:
             (into-position :pos (dec display-num-discs) :key total-num-discs)
             ;; #12 must be half way:
             (into-position :pos 7 :key 12)
             ;; If #4 is present, require #8 not #9:
             (pairing :if 4 :use 8 :not 9)
             ;; If #5 is present, require #9 not #8:
             (pairing :if 5 :use 9 :not 8)
             ;; (#16 or #17) must be in first half, but not directly after #1:
             (into-region :key 16 :min 2 :max 7)
             (into-region :key 17 :min 2 :max 7)
             ;; #6 must be in second half:
             (into-region :key 6 :min 8 :max 13)
             ;; #14 must be in second half:
             (into-region :key 14 :min 8 :max 13))]
     (if (or (well-spaced candidate) (zero? tries))
       candidate
       (do
         (println "shuffle rejection, retry at " (dec tries) "...")
         (recur (dec tries)))))))

(defn shuffle-all-keys-as-positions
  "TODO: shuffle into a well-formed set. #1 should be at pos 0, #23 should be
   at pos (dec display-num-discs), then apply exclusion rules, moving all
   excluded items to give them positions from display-num-discs upwards.

   (That's a slight hack - we should do proper enter()/exit() processing
   instead - but I quite like the overall effect.)"
  []
  (let [{:keys [incl excl]} (:key-sets (full-shuffle))
        all-positions (concat incl excl)]
    (map #(.indexOf all-positions (inc %)) (range total-num-discs))))

(def data (cx/conformer ::cx/items (map (fn [i] {:label "-"
                                                 :pos i
                                                 :opacity 1
                                                 :num_discs total-num-discs
                                                 :radius 1.0})
                                        (range total-num-discs))))

(defn plug-positions-in-data [positions]
  (cx/conformer ::cx/items (map-indexed
                            (fn [i x] (let [p (nth positions i)
                                            op (if (>= p display-num-discs) 0.0 1.0)
                                            r (if (>= p display-num-discs) 0.0 1.0)]
                                        (assoc x
                                               :pos p
                                               :opacity op
                                               :radius r
                                               :num_discs display-num-discs)))
                                        data)))


(def initial-legend ["A" "B" "C" "D" "E" "F" "G" "H" "I" "J"])

(defn flatten-legend [items]
  (reduce str "" items))

;; RANDOM: simple shuffle of the scene 13 cues.
(defn make-legend []
  (->> initial-legend
       tame/tame-shuffle
       (take 7)))
