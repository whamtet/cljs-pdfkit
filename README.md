# cljs-pdfkit

Clojurescript wrapper around [pdfkit](http://pdfkit.org/) to generate pdfs in the browser or on node.

## Demo

[View Demo](https://cljs-pdfkit.herokuapp.com/index.html)

## Usage

```clojure
(let [
      document
      (cljs-pdfkit.core/pdf
       [:pdf {:title "My Document"
              :author "Me"
              :subject "Important Things"
              :keywords "Wump"}
        [:page ...]
        [:page ...]])]

  (cond

   save-to-file?
   (.pipe doc (js/fs.createWriteStream "/path/to/file.pdf"))

   write-to-http-response?
   (.pipe doc res)

   write-to-in-browser-blob?
   (.pipe doc (js/blobStream)))

  (.end doc) ;don't forget this one
  )
  ```



## License

Copyright © 2015 Matthew Molloy

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
