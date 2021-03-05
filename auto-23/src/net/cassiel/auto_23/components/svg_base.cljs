(ns net.cassiel.auto-23.components.svg-base
  (:require [com.stuartsierra.component :as component]
            [net.cassiel.lifecycle :refer [starting stopping]]
            [cljs.core.async :as async :refer [chan <! >! close!]]
            [net.cassiel.auto-23.patterns :as patterns]
            [thi.ng.color.core :as c]
            [thi.ng.color.presets.brewer :as b]
            [thi.ng.color.presets.categories :as cp]
            [goog.string :as gstring]
            [goog.string.format])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def radius (/ 720 2))
(def disc-radius 40)

(def margin 5)
(def wrap 20)

(defn level [c amt]
  (-> (str "#" (.toString c 16))
      c/css
      (c/adjust-brightness amt)
      (c/adjust-saturation (- amt))
      c/as-int24
      deref))

(defn pad-to-six-digits [s]
  (if (< (count s) 6)
    (pad-to-six-digits (str "0" s))
    s)
  )

(defn fill-colour-for [idx offset]
  (let [base (nth cp/cat20 (mod idx wrap))
        #_ (nth (b/brewer-scheme-int :set3 12) (mod idx wrap))]
    (str "#"
         (-> (if (< idx wrap)
               (level base (+ offset 0.15))
               (level base (- offset 0.15)))
             (.toString 16)
             (pad-to-six-digits)))))

(defn text-colour-for [idx]
  (if (< idx wrap) "black" "white"))

(defn d3-stop []
  (-> (.select js/d3 "#app")
      (.selectAll "g.node")
      (.data #js [])
      (.exit)
      (.remove)))

(defn refresh [group t]
  (-> group
      ;; Move the entire disc:
      (.transition)
      (.delay (fn [d i] (* i t (/ 100))))
      (.duration t)
      (.attr "transform" (fn [d i] (let [pos (.-pos d)
                                         num-discs (.-num_discs d)
                                         angle (* js/Math.PI 2 (/ pos num-discs))
                                         dist (* (- radius disc-radius margin)
                                                 (.-radius d))
                                         x (+ radius (* dist (js/Math.sin angle)))
                                         y (- radius (* dist (js/Math.cos angle)))]
                                     (gstring/format "translate(%f, %f)" x y))))
      (.style "opacity" (fn [d] (.-opacity d)))
      ;; Change the label:
      (.select "text.label")
      (.delay 500)
      (.text (fn [d i] (.-label d))))
  group)

(defn d3-load [data]
  ;; (println "d3-load on " data)
  (let [app (-> (.select js/d3 "#app")
                        (.selectAll "g.node")
                        (.data (clj->js data)))
        _ (-> app (refresh 1000))
        node (-> app
                 (.enter)
                 (.append "g")
                 (.attr "class" "node")
                 (refresh 0))]

    (-> app (.exit) (.remove))

    (-> node
        (.append "circle")
        (.attr "r" disc-radius)
        (.style "fill" (fn [d i]
                         (fill-colour-for i 0)))
        (.style "stroke-width" 1)
        (.style "stroke" (fn [d i] (fill-colour-for i -0.3))))

    (-> node
        (.append "text")
        (.attr "class", "index")
        (.attr "dy" "0.3em")
        (.style "text-anchor" "middle")
        (.style "fill" (fn [d i] (text-colour-for i)))
        (.text (fn [d i] (str (inc i)))))

    #_ (-> node
        (.append "text")
        (.attr "class", "label")
        (.attr "dy" "1em")
        (.style "text-anchor" "middle")
        (.style "fill" (fn [d i] (text-colour-for i)))
        (.text (fn [d i] (.-label d))))))

(defrecord SVG-BASE [exchange local-ch installed?]
  Object
  (toString [this] "SVG-BASE")

  component/Lifecycle
  (start [this]
    (starting this
              :on installed?
              :action #(let [ch (chan)]
                         (d3-load patterns/data)
                         ;; Subscription:
                         (go (loop []
                               (when-let [v (<! ch)]
                                 ;;(println "SVG: subscribed data: " v)
                                 (d3-load (-> v :data :discs))
                                 (recur))))
                         (async/sub (:publication exchange)
                                    "ANY"
                                    ch)

                         (assoc this
                                :local-ch ch
                                :installed? true))))

  (stop [this]
    (stopping this
              :on installed?
              :action #(do (async/unsub (:publication exchange)
                                        "ANY"
                                        local-ch)
                           (close! local-ch)
                           (d3-load [])
                           (assoc this
                                  :local-ch nil
                                  :installed? false)))))
