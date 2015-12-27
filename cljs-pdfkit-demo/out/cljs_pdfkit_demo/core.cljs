(ns cljs-pdfkit-demo.core
  (:use-macros [dogfort.middleware.routes-macros :only [defroutes GET POST ANY]])
  (:require-macros
   [redlobster.macros :refer [let-realised promise]]
   )
  (:use [dogfort.http :only [run-http]])
  (:require [cljs.nodejs]
            [dogfort.middleware.defaults :as defaults]
            [cljs-pdfkit.core :as cljs-pdfkit]
            [redlobster.stream :as stream]
            [redlobster.promise :as promise]
            [dogfort.middleware.routes]
            cljs.reader
            ))

(cljs.nodejs/enable-util-print!)

(defn redirect [location]
  {:status 302
   :body ""
   :headers {"Location" location}})

(def waiting-pdfs (atom {}))
(defn add-waiting-pdf [pdf]
  (let [
        sym (str (gensym) "," (count @waiting-pdfs))
        ]
    (swap! waiting-pdfs assoc sym pdf)
    (js/setTimeout #(swap! waiting-pdfs dissoc sym) 10000)
    sym))
(defn get-waiting-pdf [sym]
  (let [
        pdf (@waiting-pdfs sym "empty")
        ]
    (swap! waiting-pdfs dissoc sym)
    pdf))

(defroutes handler
  (ANY "/" req
       (redirect "/index.html"))
  (ANY "/get-pdf" [edn]
       (promise
        (try
          (realise
           {:status 200
            :body (add-waiting-pdf (cljs-pdfkit/pdf (cljs.reader/read-string edn)))
            })
          (catch :default e
            (prn "error" e)
            (realise
             {:status 500
              :body (pr-str e)})))))

  (GET "/get-pdf2" [sym]
       {:status 200
        :body (get-waiting-pdf sym)
        :end-stream? true})
  )

(defn main [& args]
  (println "starting")
  (-> handler
      (defaults/wrap-defaults {:wrap-file "static"})
      (run-http {:port (or (.-PORT (.-env js/process)) 5000)})))

(set! *main-cli-fn* main)
