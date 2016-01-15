(ns cljs-pdfkit.optimize-dom
  (:require
   [clojure.set :as set]
   ))

;;here we rearrange the dom to increase efficiency
;;and correctly apply fonts etc

(defn unravel-vector [v]
  (vec (mapcat #(remove (fn [x] (or (seq? x) (not x))) (tree-seq seq? identity %)) v)))

(defn element-tag? [v]
  (and (vector? v) (keyword? (first v))))

(defn postwalk
  "transforms tree by applying f to vector elements"
  [f m]
  (cond
   (vector? m) (if (some element-tag? m) (f (mapv #(postwalk f %) m)) m)
   :default m))

(defn complete-postwalk
  [f m]
  (cond
   (element-tag? m) (f (mapv #(complete-postwalk f %) (unravel-vector m)))
   :default m))

(defn prewalk
  [f m]
  (cond
   (vector? m) (if (some element-tag? m) (mapv #(prewalk f %) (f m)) m)
   :default m))

(defn add-style
  "adds style map if not present
  enables style elements to propagate up from children"
  [[tag style & children :as v]]
  (cond
   (map? style) v
   (not style) (vec (list* tag {} children))
   :default (vec (list* tag {} style children))))

(defn refactor-group
  "insert style ancestor to elements with identical styles"
  [group]
  (if (= 1 (count group))
    group
    [(vec (list* :style {} group))]))

(defn refactor-tag
  "inserts style ancestors to reduce stack operations when generating pdf"
  [[tag style & children :as v]]
  (let [
        groups (partition-by second children)
        ]
    (if (< (count groups) 2)
      v
      (vec (list* tag style (mapcat refactor-group groups))))))

(defn map-intersection
  [maps]
  (into {} (apply set/intersection (map set maps))))

(defn map-difference [m1 m2]
  (apply dissoc m1 (keys m2)))

(def leaf-properties #{:line-break :width
                       :height :ellipsis :columns :column-gap
                       :indent :paragraph-gap :word-spacing
                       :character-spacing :link :underline
                       :strike
                       :align
                       :fill :fill-and-stroke :linear-gradient :radial-gradient
                       :continued
                       }) ;these must be transferred down into children

(def static-properties #{:translate :rotate :scale}) ;do not shift these ones

(def root-properties #{:line-width :line-cap :line-join :miter-limit :fill-color
                       :stroke-color :opacity :fill-opacity :stroke-opacity
                       })

(def root-properties2 #{:font :font-size})

(defn percolate-up [[tag style & children :as v]]
  (let [
        common-map (select-keys (map-intersection (map second children)) (concat root-properties root-properties2))
        ]
    (if (empty? common-map)
      v
      (vec (list* tag
                  (merge style common-map)
                  (map #(update-in % [1] map-difference common-map) children))))))

(defn percolate-down [[tag style & children :as v]]
  (let [
        godown (select-keys style leaf-properties)
        ]
    (if (empty? godown)
      v
      (vec (list* tag
                  (map-difference style godown)
                  (map #(update-in % [1] (fn [child-opts] (merge godown child-opts))) children))))))

(defn optimize-dom [m]
  (->> m (complete-postwalk add-style) (postwalk refactor-tag) (postwalk percolate-up) (prewalk percolate-down)))
