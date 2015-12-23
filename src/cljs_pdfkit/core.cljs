(ns cljs-pdfkit.core
  (:require
   [cljs.nodejs :as nodejs]
   [redlobster.stream :as stream])
  (:require-macros [cljs-pdfkit.core :as core])
  )

(def PDFDocument (js/require "pdfkit"))

(nodejs/enable-util-print!)

(declare handle-tag)

(defn page
  [doc [page-tag opts & children]]
  (assert (= :page page-tag))
  (let [
        [opts children]
        (if (map? opts)
          [opts children]
          [{} (if opts (conj children opts))])
        opts (clj->js opts)
        ]
    (doseq [child children]
      (handle-tag doc child))))

(defn pdf
  "Create a pdf with a vector of the form

  [:pdf opts & pages]

  opts takes the form

  {:Title \"Title of the Document\"
  :Author \"Author\"
  :Subject - \"Subject\"
  :Keywords - \"Keywords\"}
  "
  [[pdf-tag opts & children]]
  (assert (= :pdf pdf-tag))
  (let [
        [opts children]
        (if (map? opts)
          [opts children]
          [{} (if opts (conj children opts))])
        opts (clj->js {:info opts})
        _ (prn opts)
        doc (PDFDocument. opts)
        ]
    (doseq [child (butlast children)]
      (page doc child)
      (.addPage doc))
    (page doc (last children))
    doc))

(defn opts-children [[_ opts & children]]
  (if (map? opts)
    [opts children]
    [{} (if opts (conj children opts))]))

(defn linear-gradient [doc {[x1 y1 x2 y2] :points stops :stops}]
  (let [
        grad (.linearGradient doc x1 y1 x2 y2)
        ]
    (doseq [[point color] stops]
      (.stop grad point color))
    grad))

(defn radial-gradient [doc {[x1 y1 r1 x2 y2 r2] :points stops :stops}]
  (let [
        grad (.radialGradient doc x1 y1 r1 x2 y2 r2)
        ]
    (doseq [[a color b] stops]
      (.stop grad a color b))
    grad))

(core/gen-set-style
 {:line-width lineWidth
  :line-cap lineCap
  :line-join lineJoin
  :miter-limit miterLimit
  :dash dash
  :fill-color fillColor
  :stroke-color strokeColor
  :opacity opacity
  :fill-opacity fillOpacity
  :stroke-opacity strokeOpacity})

(defmulti handle-tag (fn [_ [tag]] tag))

(core/defhandle :rect [x y width height]
  (.rect doc x y width height))
(core/defhandle :rounded-rect [x y width height corner-radius]
  (.roundedRect doc x y width height corner-radius))
(core/defhandle :ellipse [x y radius-x radius-y]
  (.ellipse doc x y radius-x radius-y))
(core/defhandle :circle [x y radius]
  (.circle doc x y radius))
(defmethod handle-tag :polygon [doc [_ & points]]
  (.apply (.-polygon doc) nil (clj->js points))
  (.stroke doc))

(defn main []
  (println "in main"))

(set! *main-cli-fn* main)

(println "writing file")

(defn test-pdf [form]
  (let [doc (pdf form)]
    (.pipe doc (stream/write-file "test.pdf"))
    (.end doc)))

(test-pdf
 [:pdf {:Title "Fred"
        :Author "Ok"
        :Subject "Mrr"
        :Keywords "Wump"}
  [:page
   #_[:polygon [100 0] [50 100] [150 100]]]])

