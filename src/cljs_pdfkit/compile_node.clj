(ns cljs-pdfkit.compile-node)

(require 'cljs.build.api)

(defn -main [& [main]]
  (println "compiling node")
  (cljs.build.api/watch
   "src"
   {:main (symbol main)
    :output-to "main.js"
    :target :nodejs}))
