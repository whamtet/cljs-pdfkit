(ns cljs-pdfkit.util)

(defn capitalize [s]
  (str (.toUpperCase (.substring s 0 1)) (.substring s 1)))

(defn camelize [kw]
  (let [
        [a & b] (.split (name kw) "-")
        b (map capitalize b)
        ]
    (symbol (apply str a b))))

(defn key-map [f m]
  (zipmap (map f (keys m)) (vals m)))

#?(:cljs
   (defn camelize-js [m]
     (clj->js (key-map camelize m))))

(defn capitalize-map [m]
  (key-map #(-> % name capitalize) m))

(defn cumul
  "cumulation of seq"
  [s]
  (reduce
   (fn [[sum done] new]
     (conj done (+ sum new)))
   [0 []] s))
