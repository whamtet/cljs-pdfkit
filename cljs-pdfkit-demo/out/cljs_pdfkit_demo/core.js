// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('cljs_pdfkit_demo.core');
goog.require('cljs.core');
goog.require('redlobster.promise');
goog.require('cljs_pdfkit.core');
goog.require('dogfort.middleware.defaults');
goog.require('redlobster.stream');
goog.require('dogfort.middleware.routes');
goog.require('cljs.nodejs');
goog.require('dogfort.http');
goog.require('cljs.reader');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_pdfkit_demo.core.redirect = (function cljs_pdfkit_demo$core$redirect(location){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(302),new cljs.core.Keyword(null,"body","body",-2049205669),"",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Location",location], null)], null);
});
cljs_pdfkit_demo.core.waiting_pdfs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs_pdfkit_demo.core.add_waiting_pdf = (function cljs_pdfkit_demo$core$add_waiting_pdf(pdf){
var sym = [cljs.core.str(cljs.core.gensym.call(null)),cljs.core.str(","),cljs.core.str(cljs.core.count.call(null,cljs.core.deref.call(null,cljs_pdfkit_demo.core.waiting_pdfs)))].join('');
cljs.core.swap_BANG_.call(null,cljs_pdfkit_demo.core.waiting_pdfs,cljs.core.assoc,sym,pdf);

setTimeout(((function (sym){
return (function (){
return cljs.core.swap_BANG_.call(null,cljs_pdfkit_demo.core.waiting_pdfs,cljs.core.dissoc,sym);
});})(sym))
,(10000));

return sym;
});
cljs_pdfkit_demo.core.get_waiting_pdf = (function cljs_pdfkit_demo$core$get_waiting_pdf(sym){
var pdf = cljs.core.deref.call(null,cljs_pdfkit_demo.core.waiting_pdfs).call(null,sym,"empty");
cljs.core.swap_BANG_.call(null,cljs_pdfkit_demo.core.waiting_pdfs,cljs.core.dissoc,sym);

return pdf;
});
cljs_pdfkit_demo.core.handler = dogfort.middleware.routes.routes.call(null,(function (request__1587__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__1587__auto__,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null),(function (request__1587__auto____$1){
var req = request__1587__auto____$1;
return cljs_pdfkit_demo.core.redirect.call(null,"/index.html");
}));
}),(function (request__1587__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__1587__auto__,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/get-pdf"], null),(function (request__1587__auto____$1){
var edn = cljs.core.get_in.call(null,request__1587__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"edn","edn",1317840885)], null),cljs.core.get_in.call(null,request__1587__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"edn"], null)));
var promise__1363__auto__ = redlobster.promise.promise.call(null);
var realise__1364__auto__ = ((function (promise__1363__auto__,edn){
return (function (promise__1363__auto____$1,value__1365__auto__){
return redlobster.promise.realise.call(null,promise__1363__auto____$1,value__1365__auto__);
});})(promise__1363__auto__,edn))
;
var realise_error__1366__auto__ = ((function (promise__1363__auto__,realise__1364__auto__,edn){
return (function (promise__1363__auto____$1,value__1365__auto__){
return redlobster.promise.realise_error.call(null,promise__1363__auto____$1,value__1365__auto__);
});})(promise__1363__auto__,realise__1364__auto__,edn))
;
var realise = cljs.core.partial.call(null,realise__1364__auto__,promise__1363__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__1366__auto__,promise__1363__auto__);
try{realise.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_pdfkit_demo.core.add_waiting_pdf.call(null,cljs_pdfkit.core.pdf.call(null,cljs.reader.read_string.call(null,edn)))], null));
}catch (e1636){var e_1637 = e1636;
cljs.core.prn.call(null,"error",e_1637);

realise.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,e_1637)], null));
}
return promise__1363__auto__;
}));
}),(function (request__1587__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__1587__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/get-pdf2"], null),(function (request__1587__auto____$1){
var sym = cljs.core.get_in.call(null,request__1587__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),cljs.core.get_in.call(null,request__1587__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"sym"], null)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_pdfkit_demo.core.get_waiting_pdf.call(null,sym),new cljs.core.Keyword(null,"end-stream?","end-stream?",-166958884),true], null);
}));
}));
cljs_pdfkit_demo.core.main = (function cljs_pdfkit_demo$core$main(){
var args__1276__auto__ = [];
var len__1269__auto___1639 = arguments.length;
var i__1270__auto___1640 = (0);
while(true){
if((i__1270__auto___1640 < len__1269__auto___1639)){
args__1276__auto__.push((arguments[i__1270__auto___1640]));

var G__1641 = (i__1270__auto___1640 + (1));
i__1270__auto___1640 = G__1641;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((0) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((0)),(0))):null);
return cljs_pdfkit_demo.core.main.cljs$core$IFn$_invoke$arity$variadic(argseq__1277__auto__);
});

cljs_pdfkit_demo.core.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.println.call(null,"starting");

return dogfort.http.run_http.call(null,dogfort.middleware.defaults.wrap_defaults.call(null,cljs_pdfkit_demo.core.handler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-file","wrap-file",-1438240540),"static"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port","port",1534937262),(function (){var or__230__auto__ = process.env.PORT;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return (5000);
}
})()], null));
});

cljs_pdfkit_demo.core.main.cljs$lang$maxFixedArity = (0);

cljs_pdfkit_demo.core.main.cljs$lang$applyTo = (function (seq1638){
return cljs_pdfkit_demo.core.main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1638));
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_pdfkit_demo.core.main;

//# sourceMappingURL=core.js.map