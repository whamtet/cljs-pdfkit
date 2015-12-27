goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1644__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1645__i = 0, G__1645__a = new Array(arguments.length -  0);
while (G__1645__i < G__1645__a.length) {G__1645__a[G__1645__i] = arguments[G__1645__i + 0]; ++G__1645__i;}
  args = new cljs.core.IndexedSeq(G__1645__a,0);
} 
return G__1644__delegate.call(this,args);};
G__1644.cljs$lang$maxFixedArity = 0;
G__1644.cljs$lang$applyTo = (function (arglist__1646){
var args = cljs.core.seq(arglist__1646);
return G__1644__delegate(args);
});
G__1644.cljs$core$IFn$_invoke$arity$variadic = G__1644__delegate;
return G__1644;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1647__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1648__i = 0, G__1648__a = new Array(arguments.length -  0);
while (G__1648__i < G__1648__a.length) {G__1648__a[G__1648__i] = arguments[G__1648__i + 0]; ++G__1648__i;}
  args = new cljs.core.IndexedSeq(G__1648__a,0);
} 
return G__1647__delegate.call(this,args);};
G__1647.cljs$lang$maxFixedArity = 0;
G__1647.cljs$lang$applyTo = (function (arglist__1649){
var args = cljs.core.seq(arglist__1649);
return G__1647__delegate(args);
});
G__1647.cljs$core$IFn$_invoke$arity$variadic = G__1647__delegate;
return G__1647;
})()
;

return null;
});
