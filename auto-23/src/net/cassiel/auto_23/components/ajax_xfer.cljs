(ns net.cassiel.auto-23.components.ajax-xfer
  "Component for doing data transfers with server."
  (:require [net.cassiel.auto-23.config :as cx]
            [com.stuartsierra.component :as component]
            [net.cassiel.lifecycle :refer [starting stopping]]
            [cljs.core.async :as async :refer [chan <! >! close!]]
            [ajax.core :refer [POST]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn handler [ajax-xfer response]
  (println "RESPONSE: " (str response))
  (go
    (>! (:return-ch ajax-xfer) response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn fire [ajax-xfer sample]
  (println "POSTING... with ajax-xfer " ajax-xfer)
  (POST cx/endpoint
        {:params sample
         :format :json
         :response-format :json
         :keywords? true
         :handler (partial handler ajax-xfer)
         :error-handler error-handler}))

(defrecord AJAX-XFER [return-ch installed?]
  Object
  (toString [this] "AJAX-XFER")

  component/Lifecycle
  (start [this]
    (starting this
              :on installed?
              :action #(assoc this
                              :return-ch (chan)
                              :installed? true)))

  (stop [this]
    (stopping this
              :on installed?
              :action #(do
                         (close! (:return-ch this))
                         (assoc this
                                :return-ch nil
                                :installed? false)))))
