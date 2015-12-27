// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.util.codec');
goog.require('cljs.core');
goog.require('dogfort.util.data');
goog.require('clojure.string');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
dogfort.util.codec.double_escape = (function dogfort$util$codec$double_escape(x){
return x.replace("\\","\\\\").replace("$","\\$");
});
dogfort.util.codec.number__GT_hex = (function dogfort$util$codec$number__GT_hex(num){
return num.toString((16)).toUpperCase();
});
/**
 * Percent-encode every character in the given string using either the specified
 * encoding, or UTF-8 by default.
 */
dogfort.util.codec.percent_encode = (function dogfort$util$codec$percent_encode(){
var args__1276__auto__ = [];
var len__1269__auto___2301 = arguments.length;
var i__1270__auto___2302 = (0);
while(true){
if((i__1270__auto___2302 < len__1269__auto___2301)){
args__1276__auto__.push((arguments[i__1270__auto___2302]));

var G__2303 = (i__1270__auto___2302 + (1));
i__1270__auto___2302 = G__2303;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__2299){
var vec__2300 = p__2299;
var encoding = cljs.core.nth.call(null,vec__2300,(0),null);
var buf = (new Buffer(unencoded,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()));
var bytes = cljs.core.map.call(null,((function (buf,vec__2300,encoding){
return (function (p1__2296_SHARP_){
return [cljs.core.str("%"),cljs.core.str(dogfort.util.codec.number__GT_hex.call(null,(buf[p1__2296_SHARP_])))].join('');
});})(buf,vec__2300,encoding))
,cljs.core.range.call(null,buf.length));
return clojure.string.join.call(null,bytes);
});

dogfort.util.codec.percent_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_encode.cljs$lang$applyTo = (function (seq2297){
var G__2298 = cljs.core.first.call(null,seq2297);
var seq2297__$1 = cljs.core.next.call(null,seq2297);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic(G__2298,seq2297__$1);
});
dogfort.util.codec.parse_bytes = (function dogfort$util$codec$parse_bytes(encoded_bytes){
return (new Buffer(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__2305_SHARP_){
return parseInt(p1__2305_SHARP_,(16));
}),cljs.core.map.call(null,(function (p1__2304_SHARP_){
return cljs.core.subs.call(null,p1__2304_SHARP_,(1));
}),cljs.core.re_seq.call(null,/%../,encoded_bytes))))));
});
/**
 * Decode every percent-encoded character in the given string using the
 * specified encoding, or UTF-8 by default.
 */
dogfort.util.codec.percent_decode = (function dogfort$util$codec$percent_decode(){
var args__1276__auto__ = [];
var len__1269__auto___2310 = arguments.length;
var i__1270__auto___2311 = (0);
while(true){
if((i__1270__auto___2311 < len__1269__auto___2310)){
args__1276__auto__.push((arguments[i__1270__auto___2311]));

var G__2312 = (i__1270__auto___2311 + (1));
i__1270__auto___2311 = G__2312;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__2308){
var vec__2309 = p__2308;
var encoding = cljs.core.nth.call(null,vec__2309,(0),null);
return clojure.string.replace.call(null,encoded,/(?:%..)+/,((function (vec__2309,encoding){
return (function (chars){
return dogfort.util.codec.parse_bytes.call(null,chars).toString((function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()).replace("\\","\\\\");
});})(vec__2309,encoding))
);
});

dogfort.util.codec.percent_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_decode.cljs$lang$applyTo = (function (seq2306){
var G__2307 = cljs.core.first.call(null,seq2306);
var seq2306__$1 = cljs.core.next.call(null,seq2306);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic(G__2307,seq2306__$1);
});
/**
 * Returns the url-encoded version of the given string, using either a specified
 * encoding or UTF-8 by default.
 */
dogfort.util.codec.url_encode = (function dogfort$util$codec$url_encode(){
var args__1276__auto__ = [];
var len__1269__auto___2318 = arguments.length;
var i__1270__auto___2319 = (0);
while(true){
if((i__1270__auto___2319 < len__1269__auto___2318)){
args__1276__auto__.push((arguments[i__1270__auto___2319]));

var G__2320 = (i__1270__auto___2319 + (1));
i__1270__auto___2319 = G__2320;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__2316){
var vec__2317 = p__2316;
var encoding = cljs.core.nth.call(null,vec__2317,(0),null);
return clojure.string.replace.call(null,unencoded,/[^A-Za-z0-9_~.+-]+/,((function (vec__2317,encoding){
return (function (p1__2313_SHARP_){
return dogfort.util.codec.double_escape.call(null,dogfort.util.codec.percent_encode.call(null,p1__2313_SHARP_,encoding));
});})(vec__2317,encoding))
);
});

dogfort.util.codec.url_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_encode.cljs$lang$applyTo = (function (seq2314){
var G__2315 = cljs.core.first.call(null,seq2314);
var seq2314__$1 = cljs.core.next.call(null,seq2314);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic(G__2315,seq2314__$1);
});
/**
 * Returns the url-decoded version of the given string, using either a specified
 * encoding or UTF-8 by default. If the encoding is invalid, nil is returned.
 */
dogfort.util.codec.url_decode = (function dogfort$util$codec$url_decode(){
var args__1276__auto__ = [];
var len__1269__auto___2325 = arguments.length;
var i__1270__auto___2326 = (0);
while(true){
if((i__1270__auto___2326 < len__1269__auto___2325)){
args__1276__auto__.push((arguments[i__1270__auto___2326]));

var G__2327 = (i__1270__auto___2326 + (1));
i__1270__auto___2326 = G__2327;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__2323){
var vec__2324 = p__2323;
var encoding = cljs.core.nth.call(null,vec__2324,(0),null);
return dogfort.util.codec.percent_decode.call(null,clojure.string.replace.call(null,encoded,/[+]/," "),encoding);
});

dogfort.util.codec.url_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_decode.cljs$lang$applyTo = (function (seq2321){
var G__2322 = cljs.core.first.call(null,seq2321);
var seq2321__$1 = cljs.core.next.call(null,seq2321);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__2322,seq2321__$1);
});
/**
 * Encode a Buffer into a base64 encoded string.
 */
dogfort.util.codec.base64_encode = (function dogfort$util$codec$base64_encode(unencoded){
return unencoded.toString("base64");
});
/**
 * Decode a base64 encoded string into a Buffer.
 */
dogfort.util.codec.base64_decode = (function dogfort$util$codec$base64_decode(encoded){
return (new Buffer(encoded,"base64"));
});
dogfort.util.codec.form_encode_STAR_ = (function dogfort$util$codec$form_encode_STAR_(params,encoding){
if(cljs.core.map_QMARK_.call(null,params)){
var encode = (function dogfort$util$codec$form_encode_STAR__$_encode(x){
return dogfort$util$codec$form_encode_STAR_.call(null,x,encoding);
});
var encode_param = (function dogfort$util$codec$form_encode_STAR__$_encode_param(p__2341){
var vec__2343 = p__2341;
var k = cljs.core.nth.call(null,vec__2343,(0),null);
var v = cljs.core.nth.call(null,vec__2343,(1),null);
return [cljs.core.str(encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(encode.call(null,v))].join('');
});
return clojure.string.join.call(null,"&",cljs.core.mapcat.call(null,(function (p__2344){
var vec__2345 = p__2344;
var k = cljs.core.nth.call(null,vec__2345,(0),null);
var v = cljs.core.nth.call(null,vec__2345,(1),null);
if((cljs.core.seq_QMARK_.call(null,v)) || (cljs.core.sequential_QMARK_.call(null,v))){
return cljs.core.map.call(null,((function (vec__2345,k,v){
return (function (p1__2329_SHARP_){
return encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p1__2329_SHARP_], null));
});})(vec__2345,k,v))
,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null))], null);
}
}),params));
} else {
return dogfort.util.codec.url_encode.call(null,[cljs.core.str(params)].join(''),encoding);
}
});
/**
 * Encode the supplied value into www-form-urlencoded format, often used in
 * URL query strings and POST request bodies, using the specified encoding.
 * If the encoding is not specified, it defaults to UTF-8
 */
dogfort.util.codec.form_encode = (function dogfort$util$codec$form_encode(){
var args__1276__auto__ = [];
var len__1269__auto___2350 = arguments.length;
var i__1270__auto___2351 = (0);
while(true){
if((i__1270__auto___2351 < len__1269__auto___2350)){
args__1276__auto__.push((arguments[i__1270__auto___2351]));

var G__2352 = (i__1270__auto___2351 + (1));
i__1270__auto___2351 = G__2352;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__2348){
var vec__2349 = p__2348;
var encoding = cljs.core.nth.call(null,vec__2349,(0),null);
return clojure.string.replace.call(null,clojure.string.replace.call(null,dogfort.util.codec.form_encode_STAR_.call(null,x,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()),/\+/,"%2B"),/%20/,"+");
});

dogfort.util.codec.form_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_encode.cljs$lang$applyTo = (function (seq2346){
var G__2347 = cljs.core.first.call(null,seq2346);
var seq2346__$1 = cljs.core.next.call(null,seq2346);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic(G__2347,seq2346__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 * or UTF-8 by default.
 */
dogfort.util.codec.form_decode_str = (function dogfort$util$codec$form_decode_str(){
var args__1276__auto__ = [];
var len__1269__auto___2357 = arguments.length;
var i__1270__auto___2358 = (0);
while(true){
if((i__1270__auto___2358 < len__1269__auto___2357)){
args__1276__auto__.push((arguments[i__1270__auto___2358]));

var G__2359 = (i__1270__auto___2358 + (1));
i__1270__auto___2358 = G__2359;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__2355){
var vec__2356 = p__2355;
var encoding = cljs.core.nth.call(null,vec__2356,(0),null);
return dogfort.util.codec.url_decode.call(null,encoded,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})());
});

dogfort.util.codec.form_decode_str.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode_str.cljs$lang$applyTo = (function (seq2353){
var G__2354 = cljs.core.first.call(null,seq2353);
var seq2353__$1 = cljs.core.next.call(null,seq2353);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic(G__2354,seq2353__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 * or UTF-8 by default. If the encoded value is a string, a string is returned.
 * If the encoded value is a map of parameters, a map is returned.
 */
dogfort.util.codec.form_decode = (function dogfort$util$codec$form_decode(){
var args__1276__auto__ = [];
var len__1269__auto___2365 = arguments.length;
var i__1270__auto___2366 = (0);
while(true){
if((i__1270__auto___2366 < len__1269__auto___2365)){
args__1276__auto__.push((arguments[i__1270__auto___2366]));

var G__2367 = (i__1270__auto___2366 + (1));
i__1270__auto___2366 = G__2367;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__2362){
var vec__2363 = p__2362;
var encoding = cljs.core.nth.call(null,vec__2363,(0),null);
if((encoded.indexOf("=") < (0))){
return dogfort.util.codec.form_decode_str.call(null,encoded,encoding);
} else {
return cljs.core.reduce.call(null,((function (vec__2363,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__2364 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__2364,(0),null);
var v = cljs.core.nth.call(null,vec__2364,(1),null);
return dogfort.util.data.assoc_conj.call(null,m,dogfort.util.codec.form_decode_str.call(null,k,encoding),dogfort.util.codec.form_decode_str.call(null,v,encoding));
} else {
return m;
}
});})(vec__2363,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,encoded,/&/));
}
});

dogfort.util.codec.form_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode.cljs$lang$applyTo = (function (seq2360){
var G__2361 = cljs.core.first.call(null,seq2360);
var seq2360__$1 = cljs.core.next.call(null,seq2360);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic(G__2361,seq2360__$1);
});

//# sourceMappingURL=codec.js.map