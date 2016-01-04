(ns cljs-pdfkit.core
  (:require
   [cljs-pdfkit.optimize-dom :as optimize-dom]
   [cljs-pdfkit.util :as util]
   )
  (:require-macros [cljs-pdfkit.core :as core])
  )

(def PDFDocument (js/require "pdfkit"))

(declare handle-tag)
(declare draw-tag)
(def default-stack [{:font "Helvetica" :font-size 12}])

(defn print-through [x] (println x) x)

(defn page
  [doc page pdf-opts]
  (let [
        [page-tag opts & children] (optimize-dom/add-style page)
        _ (assert (= :page page-tag))
        opts (merge opts (select-keys pdf-opts [:layout]))
        opts (clj->js opts)
        ]
    (.addPage doc opts)
    (handle-tag doc default-stack (optimize-dom/optimize-dom (vec (list* :style {} children))))))

(defn pdf
  "Create a pdf with a vector of the form

  [:pdf opts & pages]

  opts takes the form
  {:info
    {:title \"Title of the Document\"
     :author \"Author\"
     :subject - \"Subject\"
     :keywords - \"Keywords\"}
   :layout \"landscape\"}
  "
  [dom]
  (let [
        [pdf-tag opts & children] (optimize-dom/add-style dom)
        _ (assert (= :pdf pdf-tag))
        opts (assoc (update-in opts [:info] util/capitalize-map) :autoFirstPage false)
        doc (PDFDocument. (clj->js opts))
        children (remove seq? (tree-seq seq? identity children))
        ]
    (doseq [child children] (page doc child opts))
    doc))

(defn make-linear-gradient [doc {[x1 y1 x2 y2] :points stops :stops}]
  (let [
        grad (.linearGradient doc x1 y1 x2 y2)
        ]
    (doseq [[point color] stops]
      (.stop grad point color))
    grad))

(defn make-radial-gradient [doc {[x1 y1 r1 x2 y2 r2] :points stops :stops}]
  (let [
        grad (.radialGradient doc x1 y1 r1 x2 y2 r2)
        ]
    (doseq [[a color b] stops]
      (.stop grad a color b))
    grad))

(core/gen-apply-state)

(defn apply-stack-frame [doc {:keys [font font-size]} save?]
  (if save? (.save doc) (.restore doc))
  (when font
      (if (string? font)
        (.font doc font)
        (.font doc (first font) (second font))))
  (when font-size (.fontSize doc font-size)))

(defn handle-tag [doc stack [tag tag-opts & children :as v]]
  (let [
        {:keys [fill-and-stroke linear-gradient radial-gradient fill dash translate rotate scale font font-size]} tag-opts
        stack-frame (select-keys tag-opts optimize-dom/root-properties2)
        new-stack (conj stack (merge (peek stack) stack-frame))
        save-stack? (or (= :clip tag) (not-empty tag-opts))
        ]
    ;;apply state
    (when save-stack? (apply-stack-frame doc stack-frame true))
    (apply-state doc tag-opts)

    ;;apply transformations
    (when dash (.dash doc (first dash) (clj->js (second dash))))
    (when translate (.translate doc (first translate) (second translate)))
    (when rotate (.rotate doc (first rotate) (clj->js (second rotate))))
    (when scale
      (let [[x y] (if (number? scale) [scale scale] scale)]
        (.scale doc x y)))

    ;;draw tag
    (draw-tag tag doc new-stack tag-opts children)

    ;;close tag if necessary
    (cond
     (#{:style :do :clip :text} tag) nil ;don't need to close figure
     fill-and-stroke (.fillAndStroke doc (first fill-and-stroke) (second fill-and-stroke))
     linear-gradient (.fill doc (make-linear-gradient doc linear-gradient))
     radial-gradient (.fill doc (make-radial-gradient doc radial-gradient))
     fill (if (coll? fill) (.apply (.-fill doc) doc (clj->js fill)) (.fill doc fill))
     :default (.stroke doc)
     )

    ;;restore state
    (when save-stack? (apply-stack-frame doc (peek stack) false))
    ))

(defmulti draw-tag identity)

(core/gen-multimethods "note(x, y, width, height, contents, options)
link(x, y, width, height, url, options)
highlight(x, y, width, height, options)
underline(x, y, width, height, options)
strike(x, y, width, height, options)
lineAnnotation(x1, y1, x2, y2, options)
rectAnnotation(x, y, width, height, options)
ellipseAnnotation(x, y, width, height, options)
textAnnotation(x, y, width, height, text, options)")

(defmethod draw-tag :image [tag doc stack opts [source x y opts]]
  (.image doc source x y (clj->js opts)))
(defmethod draw-tag :text [tag doc stack {:keys [move-down] :as opts} [text x y]]
  (if x
    (.text doc text x y (util/camelize-js opts))
    (.text doc text (util/camelize-js opts)))
  (if move-down (.moveDown doc move-down)))
(defmethod draw-tag :clip [tag doc stack opts [[clip-tag clip-opts & clip-children] & children]]
  (.clip (draw-tag clip-tag doc stack opts clip-children))
  (doseq [child children]
    (handle-tag doc stack child)))
(defmethod draw-tag :do [tag doc stack opts [child]]
  (js/eval child))
(defmethod draw-tag :rect [tag doc stack opts [x y width height]]
  (.rect doc x y width height))
(defmethod draw-tag :rounded-rect [tag doc stack opts [x y width height corner-radius]]
  (.roundedRect doc x y width height corner-radius))
(defmethod draw-tag :ellipse [tag doc stack opts [x y radius-x radius-y]]
  (.ellipse doc x y radius-x (or radius-y radius-x)))
(defmethod draw-tag :circle [tag doc stack opts [x y radius]]
  (.circle doc x y radius))
(defmethod draw-tag :polygon [tag doc stack opts points]
  (.apply (.-polygon doc) doc (clj->js points)))
(defmethod draw-tag :path [tag doc stack opts [path]]
  (.path doc path))
(defmethod draw-tag :style [tag doc stack opts children]
  (doseq [child children]
    (handle-tag doc stack child)))

(defmethod draw-tag :line [tag doc stack opts [x1 y1 x2 y2]]
  (.moveTo doc x1 y1)
  (.lineTo doc x2 y2))

(defmethod draw-tag :quadratic-curve [tag doc stack opts [x1 y1 x2 y2 x3 y3]]
  (.moveTo doc x1 y1)
  (.quadraticCurveTo doc x2 y2 x3 y3))

(defmethod draw-tag :bezier-curve [tag doc stack opts [x1 y1 x2 y2 x3 y3 x4 y4]]
  (.moveTo doc x1 y1)
  (.bezierCurveTo doc x2 y2 x3 y3 x4 y4))

(defmethod draw-tag :default [tag]
  (throw (js/Error. (str tag " tag not supported"))))
