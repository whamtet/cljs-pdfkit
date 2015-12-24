(ns cljs-pdfkit.test
  (:require
   [cljs-pdfkit.core :as core]
   [redlobster.stream :as stream]
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

;; doc.lineWidth(25)
;; # line cap settings
;; doc.lineCap('butt')
;; .moveTo(50, 20)
;; .lineTo(100, 20)
;; .stroke()
;; doc.lineCap('round')
;; .moveTo(150, 20)
;; .lineTo(200, 20)
;; .stroke()
;; # square line cap shown with a circle instead of a line so you can see it
;; doc.lineCap('square')
;; .moveTo(250, 20)
;; .circle(275, 30, 15)
;; .stroke()
;; # line join settings
;; doc.lineJoin('miter')
;; .rect(50, 100, 50, 50)
;; .stroke()
;; doc.lineJoin('round')
;; .rect(150, 100, 50, 50)
;; .stroke()
;; doc.lineJoin('bevel')
;; .rect(250, 100, 50, 50)
;; .stroke()

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
    [:rect {:line-join "bevel"} 250 100 50 50]]]])
