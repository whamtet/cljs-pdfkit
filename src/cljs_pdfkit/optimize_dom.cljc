(ns cljs-pdfkit.optimize-dom
  (:require
;   [clojure.walk :as walk]
   [clojure.set :as set]
   ))

(defn postwalk
  "transforms tree by applying f to vector elements"
  [f m]
  (cond
   (vector? m) (if (some vector? m) (f (mapv #(postwalk f %) m)) m)
   (seq? m) (throw (Exception. "Seqs not supported in dom"))
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

(defn percolate [[tag style & children :as v]]
  (let [
        common-map (map-intersection (map second children))
        ]
    (if (empty? common-map)
      v
      (vec (list* tag
                  (merge style common-map)
                  (map #(update-in % [1] map-difference common-map) children))))))

(defn optimize-dom [m]
  (reduce (fn [m f] (postwalk f m)) m [add-style refactor-tag percolate]))
