// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.util.request');
goog.require('cljs.core');
goog.require('dogfort.util.parsing');
/**
 * Return the full URL of the request.
 */
dogfort.util.request.request_url = (function dogfort$util$request$request_url(request){
return [cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(request))),cljs.core.str("://"),cljs.core.str(cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"host"], null))),cljs.core.str(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request)),cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"query-string","query-string",-1018845061).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var query = temp__4423__auto__;
return [cljs.core.str("?"),cljs.core.str(query)].join('');
} else {
return null;
}
})())].join('');
});
/**
 * Return the content-type of the request, or nil if no content-type is set.
 */
dogfort.util.request.content_type = (function dogfort$util$request$content_type(request){
var temp__4423__auto__ = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null));
if(cljs.core.truth_(temp__4423__auto__)){
var type = temp__4423__auto__;
return cljs.core.second.call(null,cljs.core.re_find.call(null,/^(.*?)(?:;|$)/,type));
} else {
return null;
}
});
/**
 * Return the content-length of the request, or nil no content-length is set.
 */
dogfort.util.request.content_length = (function dogfort$util$request$content_length(request){
var temp__4423__auto__ = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-length"], null));
if(cljs.core.truth_(temp__4423__auto__)){
var length = temp__4423__auto__;
return (new dogfort.util.request.Long(length));
} else {
return null;
}
});
/**
 * Return the character encoding for the request, or nil if it is not set.
 */
dogfort.util.request.character_encoding = (function dogfort$util$request$character_encoding(request){
var temp__4423__auto__ = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null));
if(cljs.core.truth_(temp__4423__auto__)){
var type = temp__4423__auto__;
return cljs.core.second.call(null,type.split("charset="));
} else {
return null;
}
});
/**
 * True if a request contains a urlencoded form in the body.
 */
dogfort.util.request.urlencoded_form_QMARK_ = (function dogfort$util$request$urlencoded_form_QMARK_(request){
var temp__4423__auto__ = dogfort.util.request.content_type.call(null,request);
if(cljs.core.truth_(temp__4423__auto__)){
var type = temp__4423__auto__;
return type.startsWith("application/x-www-form-urlencoded");
} else {
return null;
}
});
if(typeof dogfort.util.request.body_string !== 'undefined'){
} else {
/**
 * Return the request body as a string.
 */
dogfort.util.request.body_string = (function (){var method_table__1124__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__1125__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__1126__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__1127__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__1128__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dogfort.util.request","body-string"),cljs.core.comp.call(null,dogfort.util.request.class$,new cljs.core.Keyword(null,"body","body",-2049205669)),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__1128__auto__,method_table__1124__auto__,prefer_table__1125__auto__,method_cache__1126__auto__,cached_hierarchy__1127__auto__));
})();
}
/**
 * Returns the relative path of the request.
 */
dogfort.util.request.path_info = (function dogfort$util$request$path_info(request){
var or__230__auto__ = new cljs.core.Keyword(null,"path-info","path-info",-1932254250).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request);
}
});
/**
 * Returns true if the URI of the request is a subpath of the supplied context.
 */
dogfort.util.request.in_context_QMARK_ = (function dogfort$util$request$in_context_QMARK_(request,context){
return new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request).startsWith(context);
});
/**
 * Associate a context and path-info with the  request. The request URI must be
 * a subpath of the supplied context.
 */
dogfort.util.request.set_context = (function dogfort$util$request$set_context(request,context){
if(cljs.core.truth_(dogfort.util.request.in_context_QMARK_.call(null,request,context))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"in-context?","in-context?",1394813887,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"context","context",810340414,null))))].join('')));
}

return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"path-info","path-info",-1932254250),cljs.core.subs.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request),context.length()));
});

//# sourceMappingURL=request.js.map