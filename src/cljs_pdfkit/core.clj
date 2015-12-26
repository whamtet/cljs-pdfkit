(ns cljs-pdfkit.core
  (:require [cljs-pdfkit.util :as util]
            [cljs-pdfkit.optimize-dom :as optimize-dom]
            ))

(defmacro gen-apply-state []
  `(defn ~'apply-state [~'doc ~'opts]
     ~@(for [k optimize-dom/root-properties]
         `(if (~'opts ~k) (. ~'doc ~(util/camelize k) (~'opts ~k))))))

(defmacro gen-multimethods [s]
  `(do
     ~@(for [line (.split (.trim s) "\n")
             :let [
                   [_ func args] (re-find #"^([a-zA-Z]+)\(([a-z0-9, ]*)\)$" (.trim line))
                   _ (assert (and func args) (pr-str line func args))
                   args (mapv symbol (.split args ", "))
                   ]
             ]
         `(defmethod ~'draw-tag ~(keyword func) [tag# doc# stack# opts# ~args]
            (. doc# ~(util/camelize func) ~@(butlast args) (~'clj->js ~(last args)))))))
