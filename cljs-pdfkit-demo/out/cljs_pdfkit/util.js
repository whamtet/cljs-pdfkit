// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('cljs_pdfkit.util');
goog.require('cljs.core');
cljs_pdfkit.util.capitalize = (function cljs_pdfkit$util$capitalize(s){
return [cljs.core.str(s.substring((0),(1)).toUpperCase()),cljs.core.str(s.substring((1)))].join('');
});
cljs_pdfkit.util.camelize = (function cljs_pdfkit$util$camelize(kw){
var vec__3005 = cljs.core.name.call(null,kw).split("-");
var a = cljs.core.nth.call(null,vec__3005,(0),null);
var b = cljs.core.nthnext.call(null,vec__3005,(1));
var b__$1 = cljs.core.map.call(null,cljs_pdfkit.util.capitalize,b);
return cljs.core.symbol.call(null,cljs.core.apply.call(null,cljs.core.str,a,b__$1));
});
cljs_pdfkit.util.key_map = (function cljs_pdfkit$util$key_map(f,m){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,f,cljs.core.keys.call(null,m)),cljs.core.vals.call(null,m));
});
cljs_pdfkit.util.camelize_js = (function cljs_pdfkit$util$camelize_js(m){
return cljs.core.clj__GT_js.call(null,cljs_pdfkit.util.key_map.call(null,cljs_pdfkit.util.camelize,m));
});
cljs_pdfkit.util.capitalize_map = (function cljs_pdfkit$util$capitalize_map(m){
return cljs_pdfkit.util.key_map.call(null,(function (p1__3006_SHARP_){
return cljs_pdfkit.util.capitalize.call(null,cljs.core.name.call(null,p1__3006_SHARP_));
}),m);
});

//# sourceMappingURL=util.js.map