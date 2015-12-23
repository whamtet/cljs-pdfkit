(ns cljs-pdfkit.core)

(defmacro gen-set-style [m]
     `(defn ~'set-style [~'doc ~'opts]
        ~@(for [[k v] m]
            `(if (~'opts ~k) (. ~'doc ~v (~'opts ~k))))))

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
           :default (.stroke ~'doc)))))
