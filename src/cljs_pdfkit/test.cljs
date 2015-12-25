(ns cljs-pdfkit.test
  (:require
   [cljs-pdfkit.core :as core]
   [redlobster.stream :as stream]
   [cljs-pdfkit.optimize-dom :as optimize-dom]
   ))

;;generate test pdf

(defn main []
  (println "in main"))

(set! *main-cli-fn* main)

(println "writing file")

(defn test-pdf [form]
  (let [doc (core/pdf form)]
    (.pipe doc (stream/write-file "test.pdf"))
    (.end doc)))

(test-pdf
   [:pdf {:Title "Fred"
          :Author "Ok"
          :Subject "Mrr"
          :Keywords "Wump"}
    [:page
     [:style {:line-width 25}
      [:line {:line-cap "butt"} 50 20 100 20]
      [:line {:line-cap "round"} 150 20 200 20]
      [:circle {:line-cap "square"} 275 30 15]
      [:rect {:line-join "miter"} 50 100 50 50]
      [:rect {:line-join "round"} 150 100 50 50]
      [:rect {:line-join "bevel"} 250 100 50 50]]]
    [:page
     [:circle {:line-width 3 :fill-opacity 0.8 :fill-and-stroke ["red" "#900"]} 100 50 50]
     ]
    [:page
     [:rect {:linear-gradient {:points [50 0 150 100] :stops [[0 "green"] [1 "red"]]}}
      50 0 100 100]
     [:circle {:radial-gradient {:points [300 50 0 300 50 50] :stops [[0 "orange" 0] [1 "orange" 1]]}}
      300 50 50]]
    [:page
     [:style {:fill-color "red" :translate [-100 -50] :scale 0.8}
      [:path {:fill "non-zero"} "M 250,75 L 323,301 131,161 369,161 177,301 z"]
      [:path {:translate [280 0] :fill "even-odd"}
       "M 250,75 L 323,301 131,161 369,161 177,301 z"]]]
    ])
