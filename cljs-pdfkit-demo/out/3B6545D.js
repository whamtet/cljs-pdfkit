goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__3274__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__3274 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3275__i = 0, G__3275__a = new Array(arguments.length -  0);
while (G__3275__i < G__3275__a.length) {G__3275__a[G__3275__i] = arguments[G__3275__i + 0]; ++G__3275__i;}
  args = new cljs.core.IndexedSeq(G__3275__a,0);
} 
return G__3274__delegate.call(this,args);};
G__3274.cljs$lang$maxFixedArity = 0;
G__3274.cljs$lang$applyTo = (function (arglist__3276){
var args = cljs.core.seq(arglist__3276);
return G__3274__delegate(args);
});
G__3274.cljs$core$IFn$_invoke$arity$variadic = G__3274__delegate;
return G__3274;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__3277__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__3277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3278__i = 0, G__3278__a = new Array(arguments.length -  0);
while (G__3278__i < G__3278__a.length) {G__3278__a[G__3278__i] = arguments[G__3278__i + 0]; ++G__3278__i;}
  args = new cljs.core.IndexedSeq(G__3278__a,0);
} 
return G__3277__delegate.call(this,args);};
G__3277.cljs$lang$maxFixedArity = 0;
G__3277.cljs$lang$applyTo = (function (arglist__3279){
var args = cljs.core.seq(arglist__3279);
return G__3277__delegate(args);
});
G__3277.cljs$core$IFn$_invoke$arity$variadic = G__3277__delegate;
return G__3277;
})()
;

return null;
});
