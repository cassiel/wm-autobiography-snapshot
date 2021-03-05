(ns net.cassiel.auto-23.components.reagent-base
  (:require [com.stuartsierra.component :as component]
            [net.cassiel.lifecycle :refer [starting stopping]]
            [reagent.core :as r]
            [cljs.core.async :as async :refer [<! >! chan close!]]
            [goog.string :as gstring]
            [goog.string.format]
            [net.cassiel.auto-23.components.exchange :as exchange]
            [net.cassiel.auto-23.patterns :as patterns])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defrecord REAGENT-BASE [exchange local-ch state installed?]
  Object
  (toString [this] "REAGENT-BASE")

  component/Lifecycle
  (start [this]
    (starting this
              :on installed?
              :action (fn [] (let [ch (chan)
                                   s (r/atom {:this 0 :legend "" :next 1})
                                   atom-input (fn [v]
                                                [:input {:type "text"
                                                         :value (:next @v)
                                                         :on-change
                                                         #(swap! v assoc
                                                                 :next (int (-> % .-target .-value)))}])

                                   app (fn []
                                         (println "Seeing exchange as " exchange)
                                         [:div
                                          [:div.svg-host [:svg#app]]
                                          [:div.controls-host
                                           [:div.this-host [:button (:this @s)]]
                                           [:div.legend-host [:span (:legend @s)]]
                                           [:div.next-host [:div
                                                            [atom-input s]
                                                            [:button.btn.btn-default
                                                             {:on-click (fn [] (let [new-v (:next (swap! s #(update % :next inc)))]
                                                                                 (exchange/submit exchange (dec new-v))))}
                                                             "Next"]]]]])]

                               (r/render [app] (js/document.getElementById "container"))

                               (go (loop []
                                     (when-let [v (<! ch)]
                                       (println "REAGENT: subscribed data: " v)
                                       (swap! s assoc
                                              :legend (patterns/flatten-legend (-> v :data :legend))
                                              :this (:index v))
                                       (recur))))

                               (async/sub (:publication exchange)
                                          "ANY"
                                          ch)

                               (assoc this
                                      :state s
                                      :local-ch ch
                                      :installed? true)))))

  (stop [this]
    (stopping this
              :on installed?
              :action #(do #_ (xxxxx)  ;; renderer appears to be idempotent...
                           (async/unsub (:publication exchange)
                                        "ANY"
                                        local-ch)
                           (close! local-ch)
                           (assoc this
                                  :local-ch nil
                                  :installed? false)))))
