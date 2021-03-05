(ns net.cassiel.auto-23.core
  (:require [com.stuartsierra.component :as component]
            [net.cassiel.auto-23.components.svg-base :as svg-base]
            [net.cassiel.auto-23.components.reagent-base :as reagent-base]
            [net.cassiel.auto-23.components.ajax-xfer :as ajax-xfer]
            [net.cassiel.auto-23.components.exchange :as exchange]))

(enable-console-print!)

(defn system []
  (component/system-map :ajax-xfer (ajax-xfer/map->AJAX-XFER {})
                        :exchange (-> (exchange/map->EXCHANGE {})
                                      (component/using [:ajax-xfer]))
                        :reagent-base (-> (reagent-base/map->REAGENT-BASE {})
                                          (component/using [:exchange]))
                        :svg-base (-> (svg-base/map->SVG-BASE {})
                                      (component/using [:exchange]))))

(defonce S (atom (system)))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn start []
  (swap! S component/start))

(defn stop []
  (swap! S component/stop))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (stop)
  (start))

(stop)

;; We might need access to some CS/JS code in pages other than the main one,
;; so let's make the launch optional.

#_ (start)
