(ns cljs-pdfkit.core)

(defmacro gen-process-opts [m]
     `(defn ~'process-opts [~'doc ~'opts]
        ~@(for [[k v] m]
            `(if (~'opts ~k) (. ~'doc ~v (~'opts ~k))))
        {
         :fill-and-stroke (~m :fill-and-stroke)
         :linear-gradient (if-let [x# (~m :linear-gradient)] (linear-gradient x#))
         :radial-gradient (if-let [x# (~m :radial-gradient)] (radial-gradient x#))
         }
        ))
