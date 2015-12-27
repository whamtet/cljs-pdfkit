(ns cljs-pdfkit.test
  (:require
   [cljs-pdfkit.core :as core]
   [redlobster.stream :as stream]
   [cljs-pdfkit.optimize-dom :as optimize-dom]
   [clojure.string :as string]
   ))

;;generate test pdf

(defn main []
  (println "in main"))

(set! *main-cli-fn* main)


(defn test-pdf [form]
  (let [doc (core/pdf form)]
    (.pipe doc (stream/write-file "test.pdf"))
    (.end doc)))

(defn write-doc [doc]
  (.pipe doc (stream/write-file "test.pdf"))
  (.end doc))

#_(test-pdf
   [:pdf {:title "Fred"
          :author "Ok"
          :subject "Mrr"
          :keywords "Wump"}
    [:page
     [:polygon #_{:fill "#FF3300"} [100 150] [100 250] [200 250]]]
    [:page
     [:style {:line-width 25}
      [:line {:line-cap "butt"} 50 20 100 20]
      [:line {:line-cap "round"} 150 20 200 20]
      [:circle {:line-cap "square"} 275 30 15]
      [:rect {:line-join "miter"} 50 100 50 50]
      [:rect {:line-join "round"} 150 100 50 50]
      [:rect {:line-join "bevel"} 250 100 50 50]]
     ]
    [:page
     [:circle {:line-width 3 :fill-opacity 0.8 :fill-and-stroke ["red" "#900"]} 100 50 50]
     ]
    [:page
     [:rect {:linear-gradient {:points [50 0 150 100] :stops [[0 "green"] [1 "red"]]}}
      50 0 100 100]
     [:circle {:radial-gradient {:points [300 50 0 300 50 50] :stops [[0 "orange" 0] [1 "orange" 1]]}}
      300 50 50]]
    [:page
     [:style {:fill-color "red" :translate [-100 -50] :scale 0.8}
      [:path {:fill "non-zero"}
       "M 250,75 L 323,301 131,161 369,161 177,301 z"]
      [:path {:translate [280 0] :fill "even-odd"}
       "M 250,75 L 323,301 131,161 369,161 177,301 z"]]]
    [:page
     [:rect {:fill "gray" :rotate [20 {:origin [150 70]}]} 100 20 100 100]]
    [:page
     [:clip {} [:circle 100 100 100]
      (for [row (range 10) col (range 10)]
        [:rect {:fill (if (zero? (- (mod row 2) (mod col 2))) "#eee" "#4183C4")}
         (* row 20) (* col 20) 20 20])]]
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
          lorem (string/replace lorem "\n" "")
          ]
      [:page
       [:text {:columns 3 :column-gap 15 :height 100 :width 465 :align "justify" :font-size 8}
        lorem]])
    [:page
     [:text "Default Font"]
     [:style {:font-size 18}
      [:text {:move-down 0.5 :font "Times-Roman"} "Hello from Times Roman"]
      [:text {:move-down 0.5 :font "fonts/GoodDog.ttf"} "This is Good Dog!"]
      [:text {:move-down 0.5 :font ["fonts/Chalkboard.ttc" "Chalkboard-Bold"]} "Chalkboard"]]
     [:text "Back to dfault"]
     ]
    [:page
     [:image "images/test.jpeg" 0 15 {:width 300}]
     [:text "Proprotional to width" 0 0]
     [:image "images/test.jpeg" 320 15 {:fit [100 100]}]
     [:rect 320 15 100 100]
     [:text "Fit" 320 0]
     [:image "images/test.jpeg" 320 145 {:width 200 :height 100}]
     [:text "Stretch" 320 130]
     [:image "images/test.jpeg" 320 280 {:scale 0.25}]
     ]
    [:page
     [:text {:font-size 20 :fill-color "red" :link "http://apple.com/" :underline true}
      "Another link!"]
     ]
    ])

;; // draw some text
;; doc.fontSize(25)
;;    .text('Here is some vector graphics...', 100, 80);

;; // some vector graphics
;; doc.save()
;;    .moveTo(100, 150)
;;    .lineTo(100, 250)
;;    .lineTo(200, 250)
;;    .fill("#FF3300");

;; doc.circle(280, 200, 50)
;;    .fill("#6600FF");

;; // an SVG path
;; doc.scale(0.6)
;;    .translate(470, 130)
;;    .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
;;    .fill('red', 'even-odd')
;;    .restore();

;; // and some justified text wrapped into columns
;; doc.text('And here is some wrapped text...', 100, 300)
;;    .font('Times-Roman', 13)
;;    .moveDown()
;;    .text(lorem, {
;;      width: 412,
;;      align: 'justify',
;;      indent: 30,
;;      columns: 2,
;;      height: 300,
;;      ellipsis: true
;;    });
