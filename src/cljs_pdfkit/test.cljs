(ns cljs-pdfkit.test
  (:require
   [cljs-pdfkit.core :as core]
;   [redlobster.stream :as stream]
   [cljs-pdfkit.optimize-dom :as optimize-dom]
   [clojure.string :as string]
   ))

;;generate test pdf

(defn main []
  (println "in main"))

(set! *main-cli-fn* main)

;;needed for testing
#_(defn test-pdf [form]
  (let [doc (core/pdf form)]
    (.pipe doc (stream/write-file "test.pdf"))
    (.end doc)))

#_(defn write-doc [doc]
  (.pipe doc (stream/write-file "test.pdf"))
  (.end doc))

(test-pdf
 [:pdf {:title "Fred"
        :author "Ok"
        :subject "Mrr"
        :keywords "Wump"}
  [:page
   [:path {:translate [10 0]} "M 0,20 L 100,160 Q 130,200 150,120 C 190,-40 200,200 300,150 L 400,90"]]
  [:page
   [:circle {:dash [5 {:space 10}]} 100 100 50]]
  [:page
   [:style {:line-width 25 :translate [0 50]}
    [:line {:line-cap "butt"} 50 20 100 20]
    [:line {:line-cap "round"} 150 20 200 20]
    [:circle {:line-cap "square"} 275 30 15]
    [:rect {:line-join "miter"} 50 100 50 50]
    [:rect {:line-join "round"} 150 100 50 50]
    [:rect {:line-join "bevel"} 250 100 50 50]]
   ]
  [:page
   [:circle {:line-width 3 :fill-opacity 0.8 :fill-and-stroke ["red" "#900"]} 100 100 50]
   ]
  [:page
   [:style {:translate [50 50]}
    [:rect {:linear-gradient {:points [50 0 150 100] :stops [[0 "green"] [1 "red"]]}}
     50 0 100 100]
    [:circle {:radial-gradient {:points [300 50 0 300 50 50] :stops [[0 "orange" 0] [1 "orange" 1]]}}
     300 50 50]]]
  [:page
   [:style {:fill-color "red" :translate [-100 -50]}
    [:style {:scale 0.8}
     [:path {:fill "non-zero"}
      "M 250,75 L 323,301 131,161 369,161 177,301 z"]
     [:path {:translate [280 0] :fill "even-odd"}
      "M 250,75 L 323,301 131,161 369,161 177,301 z"]]]]
  [:page
   [:rect {:fill "gray" :rotate [20 {:origin [150 70]}]} 100 20 100 100]]
  [:page
   [:style {:translate [50 50]}
    [:clip {} [:circle 100 100 100]
     (for [row (range 10) col (range 10)]
       [:rect {:fill (if (zero? (- (mod row 2) (mod col 2))) "#eee" "#4183C4")}
        (* row 20) (* col 20) 20 20])]]]
  (let [
        lorem "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipitpurus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuerecubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia.Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl."
        text #(vector :text {:font-size 8 :width 410 :align %1 :move-down true} (str %2 lorem))
        ]
    [:page
     (map text
          ["left" "center" "right" "justify"]
          ["This text is left aligned. "
           "This text is centered. "
           "This text is right aligned. "
           "This text is justified. "]
          )])
  (let [
        lorem "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit
        purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia.
        Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl. Suspendisse rhoncus
        nisl posuere tortor tempus et dapibus elit porta. Cras leo neque, elementum a rhoncus
        ut, vestibulum non nibh. Phasellus pretium justo turpis. Etiam vulputate, odio vitae
        tincidunt ultricies, eros odio dapibus nisi, ut tincidunt lacus arcu eu elit. Aenean
        velit erat, vehicula eget lacinia ut, dignissim non tellus. Aliquam nec lacus mi, sed
        vestibulum nunc. Suspendisse potenti. Curabitur vitae sem turpis. Vestibulum sed
        neque eget dolor dapibus porttitor at sit amet sem. Fusce a turpis lorem. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;"
        lorem (apply str (map #(.trim %) (.split lorem "\n")))
        ]
    (list
     [:page
      [:text {:columns 3 :column-gap 15 :height 100 :width 465 :align "justify" :font-size 8}
       lorem]]
     [:page
      [:text {:fill-color "green" :width 465 :continued true}
       (.substring lorem 0 500)]
      [:text {:fill-color "red" :width 465}
       (.substring lorem 500)]]))

  [:page
   [:style {:font-size 20}
    [:text {:fill-color "blue"
            :link "http://www.example.com"
            :underline true
            :continued true
            }
     "My Link"]
    [:text {:underline false} " Click it please!"]]]
  [:page
   [:style {:font-size 18}
    [:text {:move-down 0.5 :font "Times-Roman"} "Hello from Times Roman"]
    [:text {:move-down 0.5 :font "fonts/GoodDog.ttf"} "This is Good Dog!"]
    [:text {:move-down 0.5 :font ["fonts/Chalkboard.ttc" "Chalkboard-Bold"]} "Chalkboard"]]
   ]
  [:page
   [:style {:translate [50 50]}
    [:image "images/test.jpeg" 0 15 {:width 300}]
    [:text "Proprotional to width" 0 0]
    [:image "images/test.jpeg" 320 15 {:fit [100 100]}]
    [:rect 320 15 100 100]
    [:text "Fit" 320 0]
    [:image "images/test.jpeg" 320 145 {:width 200 :height 100}]
    [:text "Stretch" 320 130]
    [:image "images/test.jpeg" 320 280 {:scale 0.25}]
    ]]
  [:page
   [:text {:font-size 20 :fill-color "red" :link "http://apple.com/" :underline true}
    "Another link!"]
   ]
  ])
