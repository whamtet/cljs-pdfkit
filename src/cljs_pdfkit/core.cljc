(ns cljs-pdfkit.core
  (:require
   #?(:cljs [cljs.nodejs :as nodejs]))
   #?(:cljs (:require-macros [cljs-pdfkit.core :as core]))
  )

#?(:cljs
   (def PDFDocument (js/require "pdfkit")))

#?(:cljs
   (nodejs/enable-util-print!))

(declare handle-tag)

(defn page
  [doc [page-tag opts & children]]
  (assert (= :page page-tag))
  (let [
        [opts children]
        (if (map? opts)
          [opts children]
          [{} (conj children opts)])
        opts (clj->js opts)
        ]
    (.addPage doc opts)
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
        opts (clj->js opts)
        doc (PDFDocument. opts)
        ]
    (doseq [child children]
      (page doc child))
    doc))

(defn opts-children [[_ opts & children]]
  (if (map? opts)
    [opts children]
    [{} (if (opts (conj children opts)))]))

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

#?(:clj
   (defmacro gen-set-style [m]
     `(defn set-style [~'doc ~'opts]
        ~@(for [[k v] m]
            `(if (~'opts ~k) (. ~'doc ~v (~'opts ~k)))))))

#?(:cljs
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
     :stroke-opacity strokeOpacity}))

#?(:clj
   (defmacro defhandle [tag destructuring & body]
     `(defmethod ~'handle-tag ~tag [~'doc l#]
        (let [
              [opts# ~destructuring] (opts-children l#)
              [fill# stroke#] (opts# :fill-and-stroke)
              linear-gradient# (if (opts# :linear-gradient) (linear-gradient ~'doc (opts# :linear-gradient)))
              radial-gradient# (if (opts# :radial-gradient) (radial-gradient ~'doc (opts# :radial-gradient)))
              ]
          (set-style ~'doc opts#)
          ~@body
          (cond
           fill# (.fillAndStroke ~'doc fill# stroke#)
           linear-gradient# (.fill doc linear-gradient#)
           radial-gradient# (.fill doc radial-gradient#)
           :default (.stroke ~'doc))))))

(defmulti handle-tag (fn [_ [tag]] tag))

(defhandle :rect [x y width height]
  (.rect doc x y width height))
(defhandle :rounded-rect [x y width height corner-radius]
  (.roundedRect doc x y width height corner-radius))
(defhandle :ellipse [x y radius-x radius-y]
  (.ellipse doc x y radius-x radius-y))
(defhandle :circle [x y radius]
  (.circle doc x y radius))
(defmethod handle-tag :polygon [doc [_ & points]]
  (.apply doc nil (clj->js points))
  (.stroke doc))

(defn main []
  (println "in main"))

(set! *main-cli-fn* main)
