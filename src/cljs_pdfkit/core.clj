(ns cljs-pdfkit.core)

(defmacro gen-process-opts [m]
  `(defn ~'process-opts [~'doc ~'opts]
     ~@(for [[k v] m]
         `(if (~'opts ~k) (. ~'doc ~v (~'opts ~k))))
     (when-let [[width# opts#] (~'opts :dash)]
       (.dash ~'doc width# (~'clj->js opts#)))
     (when-let [[x# y#] (~'opts :translate)]
       (.translate ~'doc x# y#))
     (when-let [[x# y#] (~'opts :rotate)]
       (.rotate ~'doc x# (clj->js y#)))
     (when-let [scale# (~'opts :scale)]
       (let [
             [x# y#] (if (number? scale#) [scale# scale#] scale#)
             ]
         (.scale ~'doc x# y#)))
     (merge (select-keys ~'opts [:fill :dash :fill-and-stroke])
            {
             :linear-gradient (if-let [x# (~'opts :linear-gradient)] (linear-gradient ~'doc x#))
             :radial-gradient (if-let [x# (~'opts :radial-gradient)] (radial-gradient ~'doc x#))
             }
            )))
