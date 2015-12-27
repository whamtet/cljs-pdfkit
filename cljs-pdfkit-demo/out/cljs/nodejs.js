// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1652__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1653__i = 0, G__1653__a = new Array(arguments.length -  0);
while (G__1653__i < G__1653__a.length) {G__1653__a[G__1653__i] = arguments[G__1653__i + 0]; ++G__1653__i;}
  args = new cljs.core.IndexedSeq(G__1653__a,0);
} 
return G__1652__delegate.call(this,args);};
G__1652.cljs$lang$maxFixedArity = 0;
G__1652.cljs$lang$applyTo = (function (arglist__1654){
var args = cljs.core.seq(arglist__1654);
return G__1652__delegate(args);
});
G__1652.cljs$core$IFn$_invoke$arity$variadic = G__1652__delegate;
return G__1652;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1655__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1656__i = 0, G__1656__a = new Array(arguments.length -  0);
while (G__1656__i < G__1656__a.length) {G__1656__a[G__1656__i] = arguments[G__1656__i + 0]; ++G__1656__i;}
  args = new cljs.core.IndexedSeq(G__1656__a,0);
} 
return G__1655__delegate.call(this,args);};
G__1655.cljs$lang$maxFixedArity = 0;
G__1655.cljs$lang$applyTo = (function (arglist__1657){
var args = cljs.core.seq(arglist__1657);
return G__1655__delegate(args);
});
G__1655.cljs$core$IFn$_invoke$arity$variadic = G__1655__delegate;
return G__1655;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map