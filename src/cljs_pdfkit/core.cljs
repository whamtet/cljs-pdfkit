(ns cljs-pdfkit.core
  (:require
   [cljs.nodejs :as nodejs]
   [redlobster.stream :as stream]
   [cljs-pdfkit.optimize-dom :as optimize-dom])
  (:require-macros [cljs-pdfkit.core :as core])
  )

(def PDFDocument (js/require "pdfkit"))

(nodejs/enable-util-print!)

(declare handle-tag)
(declare draw-tag)

(defn page
  [doc page]
  (let [
        [page-tag opts & children] (optimize-dom/add-style page)
        _ (assert (= :page page-tag))
        opts (clj->js opts)
        ]
    (.addPage doc opts)
    (handle-tag doc {} (optimize-dom/optimize-dom (vec (list* :style {} children))))))

(defn pdf
  "Create a pdf with a vector of the form

  [:pdf opts & pages]

  opts takes the form

  {:Title \"Title of the Document\"
  :Author \"Author\"
  :Subject - \"Subject\"
  :Keywords - \"Keywords\"}
  "
  [dom]
  (let [
        [pdf-tag opts & children] (optimize-dom/add-style dom)
        _ (assert (= :pdf pdf-tag))
        opts (clj->js {:info (assoc opts :autoFirstPage false) :autoFirstPage false})
        doc (PDFDocument. opts)
        ]
    (doseq [child children] (page doc child))
    doc))

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

(core/gen-process-opts
 {:line-width lineWidth
  :line-cap lineCap
  :line-join lineJoin
  :miter-limit miterLimit
  :fill-color fillColor
  :stroke-color strokeColor
  :opacity opacity
  :fill-opacity fillOpacity
  :stroke-opacity strokeOpacity})

(defn handle-tag [doc fill-opts [tag tag-opts & children :as v]]
  (if (not-empty tag-opts) (.save doc))
  (let [
        fill-opts (merge-with #(or %1 %2) fill-opts (process-opts doc tag-opts))
        {:keys [fill-and-stroke linear-gradient radial-gradient dash fill]} fill-opts
        ]
    (prn tag fill)
    (draw-tag tag doc fill-opts children)
    (cond
     (#{:style :do} tag) nil ;don't need to close figure
     fill-and-stroke (.fillAndStroke doc (first fill-and-stroke) (second fill-and-stroke))
     linear-gradient (.fill doc linear-gradient)
     radial-gradient (.fill doc radial-gradient)
     fill (.fill doc fill)
     :default (.stroke doc)
     )
    (if (not-empty tag-opts) (.restore doc))))

(defmulti draw-tag identity)

(defmethod draw-tag :do [tag doc fill-opts [child]]
  (js/eval child))
(defmethod draw-tag :rect [tag doc fill-opts [x y width height]]
  (.rect doc x y width height))
(defmethod draw-tag :rounded-rect [tag doc fill-opts [x y width height corner-radius]]
  (.roundedRect doc x y width height corner-radius))
(defmethod draw-tag :ellipse [tag doc fill-opts [x y radius-x radius-y]]
  (.ellipse doc x y radius-x radius-y))
(defmethod draw-tag :circle [tag doc fill-opts [x y radius]]
  (.circle doc x y radius))
(defmethod draw-tag :polygon [tag doc fill-opts points]
  (.apply (.-polygon doc) doc (clj->js points)))
(defmethod draw-tag :path [tag doc fill-opts [path]]
  (.path doc path))
(defmethod draw-tag :style [tag doc fill-opts children]
  (doseq [child children]
    (handle-tag doc fill-opts child)))
(defmethod draw-tag :line [tag doc fill-opts [x1 y1 x2 y2]]
  (.moveTo doc x1 y1)
  (.lineTo doc x2 y2))

