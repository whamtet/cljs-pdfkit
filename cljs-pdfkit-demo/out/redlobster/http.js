// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('redlobster.http');
goog.require('cljs.core');
goog.require('redlobster.events');
goog.require('redlobster.promise');
goog.require('redlobster.stream');
goog.require('cljs.node');
redlobster.http.http = require("http");
redlobster.http.request = (function redlobster$http$request(){
var args3043 = [];
var len__1269__auto___3046 = arguments.length;
var i__1270__auto___3047 = (0);
while(true){
if((i__1270__auto___3047 < len__1269__auto___3046)){
args3043.push((arguments[i__1270__auto___3047]));

var G__3048 = (i__1270__auto___3047 + (1));
i__1270__auto___3047 = G__3048;
continue;
} else {
}
break;
}

var G__3045 = args3043.length;
switch (G__3045) {
case 2:
return redlobster.http.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return redlobster.http.request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args3043.length)].join('')));

}
});

redlobster.http.request.cljs$core$IFn$_invoke$arity$2 = (function (options,body){
var promise__1399__auto__ = redlobster.promise.promise.call(null);
var realise__1400__auto__ = ((function (promise__1399__auto__){
return (function (promise__1399__auto____$1,value__1401__auto__){
return redlobster.promise.realise.call(null,promise__1399__auto____$1,value__1401__auto__);
});})(promise__1399__auto__))
;
var realise_error__1402__auto__ = ((function (promise__1399__auto__,realise__1400__auto__){
return (function (promise__1399__auto____$1,value__1401__auto__){
return redlobster.promise.realise_error.call(null,promise__1399__auto____$1,value__1401__auto__);
});})(promise__1399__auto__,realise__1400__auto__))
;
var realise = cljs.core.partial.call(null,realise__1400__auto__,promise__1399__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__1402__auto__,promise__1399__auto__);
var req_3050 = redlobster.http.http.request(cljs.core.clj__GT_js.call(null,options),((function (promise__1399__auto__,realise__1400__auto__,realise_error__1402__auto__,realise,realise_error){
return (function (p1__3041_SHARP_){
return realise.call(null,p1__3041_SHARP_);
});})(promise__1399__auto__,realise__1400__auto__,realise_error__1402__auto__,realise,realise_error))
);
redlobster.events.on.call(null,req_3050,"error",((function (req_3050,promise__1399__auto__,realise__1400__auto__,realise_error__1402__auto__,realise,realise_error){
return (function (p1__3042_SHARP_){
return realise_error.call(null,p1__3042_SHARP_);
});})(req_3050,promise__1399__auto__,realise__1400__auto__,realise_error__1402__auto__,realise,realise_error))
);

if(cljs.core.truth_(body)){
redlobster.stream.write_stream.call(null,req_3050,body);
} else {
req_3050.end();
}

return promise__1399__auto__;
});

redlobster.http.request.cljs$core$IFn$_invoke$arity$1 = (function (options){
return redlobster.http.request.call(null,options,null);
});

redlobster.http.request.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=http.js.map