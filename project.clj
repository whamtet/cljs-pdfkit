(defproject cljs-pdfkit "0.1.0-SNAPSHOT"
  :description "Clojurescript wrapper for PDFKit"
  :url "https://github.com/whamtet/cljs-pdfkit"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170" :classifier "aot"
                  :exclusion [org.clojure/data.json]]
                 [org.clojure/data.json "0.2.6" :classifier "aot"]
                 [redlobster "0.2.2-SNAPSHOT"]
                 ]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.1"]]
  :npm {:dependencies [[source-map-support "0.3.2"]
                       [pdfkit "0.7.2"]
                       [brfs "1.4.1"]
                       [blob-stream "0.1.3"]
                       ]}
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "release"]
  :target-path "target"
  :aliases {"build" ["trampoline" "run" "-m" "cljs-pdfkit.compile-node" "cljs-pdfkit.test"]}
  )
