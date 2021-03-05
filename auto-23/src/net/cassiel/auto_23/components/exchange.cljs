(ns net.cassiel.auto-23.components.exchange
  "Main data exchange."
  (:require [com.stuartsierra.component :as component]
            [net.cassiel.lifecycle :refer [starting stopping]]
            [cljs.core.async :as async :refer [chan <! >! close!]]
            [net.cassiel.auto-23.components.ajax-xfer :as ajax-xfer]
            [net.cassiel.auto-23.patterns :as patterns])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn submit
  "Iterate a layout: create a pattern, send it to the server."
  [exchange n]
  (println "SUBMIT with " exchange)
  (let [discs (patterns/plug-positions-in-data
               (patterns/shuffle-all-keys-as-positions))]
    (ajax-xfer/fire (:ajax-xfer exchange) {:index n
                                           :type "ANY"
                                           :data {:discs discs
                                                  :legend (patterns/make-legend)}})))

(defrecord EXCHANGE [ajax-xfer publication installed?]
  Object
  (toString [this] "EXCHANGE")

  component/Lifecycle
  (start [this]
    (starting this
              :on installed?
              ;; Attach a publication directly to the AJAX return channel:
              :action #(let [ch (:return-ch ajax-xfer)]
                         (assoc this
                                :publication (async/pub ch :type)
                                :installed? true))))

  (stop [this]
    (stopping this
              :on installed?
              :action #(do (assoc this
                                  :publication nil
                                  :installed? false)))))
