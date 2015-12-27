// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.middleware.session');
goog.require('cljs.core');
goog.require('dogfort.middleware.cookies');
goog.require('dogfort.middleware.session.store');
goog.require('dogfort.middleware.session.memory');
goog.require('redlobster.promise');
dogfort.middleware.session.session_options = (function dogfort$middleware$session$session_options(options){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$2(options,dogfort.middleware.session.memory.memory_store.call(null)),new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745),new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745).cljs$core$IFn$_invoke$arity$2(options,"ring-session"),new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/",new cljs.core.Keyword(null,"http-only","http-only",-825379555),true], null),new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946).cljs$core$IFn$_invoke$arity$1(options),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__4423__auto__)){
var root = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),root], null);
} else {
return null;
}
})())], null);
});
dogfort.middleware.session.bare_session_request = (function dogfort$middleware$session$bare_session_request(){
var args__1276__auto__ = [];
var len__1269__auto___2046 = arguments.length;
var i__1270__auto___2047 = (0);
while(true){
if((i__1270__auto___2047 < len__1269__auto___2046)){
args__1276__auto__.push((arguments[i__1270__auto___2047]));

var G__2048 = (i__1270__auto___2047 + (1));
i__1270__auto___2047 = G__2048;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic = (function (request,p__2042){
var vec__2043 = p__2042;
var map__2044 = cljs.core.nth.call(null,vec__2043,(0),null);
var map__2044__$1 = ((((!((map__2044 == null)))?((((map__2044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2044):map__2044);
var store = cljs.core.get.call(null,map__2044__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var cookie_name = cljs.core.get.call(null,map__2044__$1,new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745));
var req_key = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cookies","cookies",1839416329),cookie_name,new cljs.core.Keyword(null,"value","value",305978217)], null));
var session = dogfort.middleware.session.store.read_session.call(null,store,req_key);
var session_key = (cljs.core.truth_(session)?req_key:null);
return cljs.core.merge.call(null,request,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"session","session",1008279103),(function (){var or__230__auto__ = session;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("session","key","session/key",756123603),session_key], null));
});

dogfort.middleware.session.bare_session_request.cljs$lang$maxFixedArity = (1);

dogfort.middleware.session.bare_session_request.cljs$lang$applyTo = (function (seq2040){
var G__2041 = cljs.core.first.call(null,seq2040);
var seq2040__$1 = cljs.core.next.call(null,seq2040);
return dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic(G__2041,seq2040__$1);
});
/**
 * Reads current HTTP session map and adds it to :session key of the request.
 * See: wrap-session.
 */
dogfort.middleware.session.session_request = (function dogfort$middleware$session$session_request(){
var args__1276__auto__ = [];
var len__1269__auto___2053 = arguments.length;
var i__1270__auto___2054 = (0);
while(true){
if((i__1270__auto___2054 < len__1269__auto___2053)){
args__1276__auto__.push((arguments[i__1270__auto___2054]));

var G__2055 = (i__1270__auto___2054 + (1));
i__1270__auto___2054 = G__2055;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic = (function (request,p__2051){
var vec__2052 = p__2051;
var options = cljs.core.nth.call(null,vec__2052,(0),null);
return dogfort.middleware.session.bare_session_request.call(null,dogfort.middleware.cookies.cookies_request.call(null,request),options);
});

dogfort.middleware.session.session_request.cljs$lang$maxFixedArity = (1);

dogfort.middleware.session.session_request.cljs$lang$applyTo = (function (seq2049){
var G__2050 = cljs.core.first.call(null,seq2049);
var seq2049__$1 = cljs.core.next.call(null,seq2049);
return dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic(G__2050,seq2049__$1);
});
dogfort.middleware.session.bare_session_response = (function dogfort$middleware$session$bare_session_response(){
var args__1276__auto__ = [];
var len__1269__auto___2066 = arguments.length;
var i__1270__auto___2067 = (0);
while(true){
if((i__1270__auto___2067 < len__1269__auto___2066)){
args__1276__auto__.push((arguments[i__1270__auto___2067]));

var G__2068 = (i__1270__auto___2067 + (1));
i__1270__auto___2067 = G__2068;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((2) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((2)),(0))):null);
return dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__1277__auto__);
});

dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic = (function (response,p__2059,p__2060){
var map__2061 = p__2059;
var map__2061__$1 = ((((!((map__2061 == null)))?((((map__2061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2061):map__2061);
var session_key = cljs.core.get.call(null,map__2061__$1,new cljs.core.Keyword("session","key","session/key",756123603));
var vec__2062 = p__2060;
var map__2063 = cljs.core.nth.call(null,vec__2062,(0),null);
var map__2063__$1 = ((((!((map__2063 == null)))?((((map__2063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2063):map__2063);
var store = cljs.core.get.call(null,map__2063__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var cookie_name = cljs.core.get.call(null,map__2063__$1,new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745));
var cookie_attrs = cljs.core.get.call(null,map__2063__$1,new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946));
var new_session_key = ((cljs.core.contains_QMARK_.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103)))?(function (){var temp__4423__auto__ = response.call(null,new cljs.core.Keyword(null,"session","session",1008279103));
if(cljs.core.truth_(temp__4423__auto__)){
var session = temp__4423__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"recreate","recreate",706397197).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,session)))){
dogfort.middleware.session.store.delete_session.call(null,store,session_key);

return dogfort.middleware.session.store.write_session.call(null,store,null,session);
} else {
return dogfort.middleware.session.store.write_session.call(null,store,session_key,session);
}
} else {
if(cljs.core.truth_(session_key)){
return dogfort.middleware.session.store.delete_session.call(null,store,session_key);
} else {
return null;
}
}
})():null);
var session_attrs = new cljs.core.Keyword(null,"session-cookie-attrs","session-cookie-attrs",-680857706).cljs$core$IFn$_invoke$arity$1(response);
var cookie = new cljs.core.PersistentArrayMap.fromArray([cookie_name,cljs.core.merge.call(null,cookie_attrs,session_attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__230__auto__ = new_session_key;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return session_key;
}
})()], null))], true, false);
var response__$1 = cljs.core.dissoc.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"session-cookie-attrs","session-cookie-attrs",-680857706));
if(cljs.core.truth_((function (){var or__230__auto__ = (function (){var and__218__auto__ = new_session_key;
if(cljs.core.truth_(and__218__auto__)){
return cljs.core.not_EQ_.call(null,session_key,new_session_key);
} else {
return and__218__auto__;
}
})();
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
var and__218__auto__ = session_attrs;
if(cljs.core.truth_(and__218__auto__)){
var or__230__auto____$1 = new_session_key;
if(cljs.core.truth_(or__230__auto____$1)){
return or__230__auto____$1;
} else {
return session_key;
}
} else {
return and__218__auto__;
}
}
})())){
return cljs.core.assoc.call(null,response__$1,new cljs.core.Keyword(null,"cookies","cookies",1839416329),cljs.core.merge.call(null,response__$1.call(null,new cljs.core.Keyword(null,"cookies","cookies",1839416329)),cookie));
} else {
return response__$1;
}
});

dogfort.middleware.session.bare_session_response.cljs$lang$maxFixedArity = (2);

dogfort.middleware.session.bare_session_response.cljs$lang$applyTo = (function (seq2056){
var G__2057 = cljs.core.first.call(null,seq2056);
var seq2056__$1 = cljs.core.next.call(null,seq2056);
var G__2058 = cljs.core.first.call(null,seq2056__$1);
var seq2056__$2 = cljs.core.next.call(null,seq2056__$1);
return dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic(G__2057,G__2058,seq2056__$2);
});
/**
 * Updates session based on :session key in response. See: wrap-session.
 */
dogfort.middleware.session.session_response = (function dogfort$middleware$session$session_response(){
var args__1276__auto__ = [];
var len__1269__auto___2075 = arguments.length;
var i__1270__auto___2076 = (0);
while(true){
if((i__1270__auto___2076 < len__1269__auto___2075)){
args__1276__auto__.push((arguments[i__1270__auto___2076]));

var G__2077 = (i__1270__auto___2076 + (1));
i__1270__auto___2076 = G__2077;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((2) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((2)),(0))):null);
return dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__1277__auto__);
});

dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic = (function (response,request,p__2073){
var vec__2074 = p__2073;
var options = cljs.core.nth.call(null,vec__2074,(0),null);
if(cljs.core.truth_(response)){
return dogfort.middleware.cookies.cookies_response.call(null,(function (){var promise__1372__auto__ = redlobster.promise.promise.call(null);
var realise__1373__auto__ = ((function (promise__1372__auto__,vec__2074,options){
return (function (promise__1372__auto____$1,value__1374__auto__){
return redlobster.promise.realise.call(null,promise__1372__auto____$1,value__1374__auto__);
});})(promise__1372__auto__,vec__2074,options))
;
var realise_error__1375__auto__ = ((function (promise__1372__auto__,realise__1373__auto__,vec__2074,options){
return (function (promise__1372__auto____$1,value__1374__auto__){
return redlobster.promise.realise_error.call(null,promise__1372__auto____$1,value__1374__auto__);
});})(promise__1372__auto__,realise__1373__auto__,vec__2074,options))
;
var realise = cljs.core.partial.call(null,realise__1373__auto__,promise__1372__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__1375__auto__,promise__1372__auto__);
redlobster.promise.on_realised.call(null,response,((function (promise__1372__auto__,realise__1373__auto__,realise_error__1375__auto__,realise,realise_error,vec__2074,options){
return (function (p1__2069_SHARP_){
return realise.call(null,dogfort.middleware.session.bare_session_response.call(null,p1__2069_SHARP_,request,options));
});})(promise__1372__auto__,realise__1373__auto__,realise_error__1375__auto__,realise,realise_error,vec__2074,options))
,((function (promise__1372__auto__,realise__1373__auto__,realise_error__1375__auto__,realise,realise_error,vec__2074,options){
return (function (){
return cljs.core.List.EMPTY;
});})(promise__1372__auto__,realise__1373__auto__,realise_error__1375__auto__,realise,realise_error,vec__2074,options))
);

return promise__1372__auto__;
})());
} else {
return null;
}
});

dogfort.middleware.session.session_response.cljs$lang$maxFixedArity = (2);

dogfort.middleware.session.session_response.cljs$lang$applyTo = (function (seq2070){
var G__2071 = cljs.core.first.call(null,seq2070);
var seq2070__$1 = cljs.core.next.call(null,seq2070);
var G__2072 = cljs.core.first.call(null,seq2070__$1);
var seq2070__$2 = cljs.core.next.call(null,seq2070__$1);
return dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic(G__2071,G__2072,seq2070__$2);
});
/**
 * Reads in the current HTTP session map, and adds it to the :session key on
 * the request. If a :session key is added to the response by the handler, the
 * session is updated with the new value. If the value is nil, the session is
 * deleted.
 * 
 * Accepts the following options:
 * 
 * :store        - An implementation of the SessionStore protocol in the
 * dogfort.middleware.session.store namespace. This determines how
 * the session is stored. Defaults to in-memory storage using
 * dogfort.middleware.session.store/memory-store.
 * 
 * :root         - The root path of the session. Any path above this will not be
 * able to see this session. Equivalent to setting the cookie's
 * path attribute. Defaults to "/".
 * 
 * :cookie-name  - The name of the cookie that holds the session key. Defaults to
 * "ring-session"
 * 
 * :cookie-attrs - A map of attributes to associate with the session cookie.
 * Defaults to {:http-only true}.
 */
dogfort.middleware.session.wrap_session = (function dogfort$middleware$session$wrap_session(){
var args2078 = [];
var len__1269__auto___2081 = arguments.length;
var i__1270__auto___2082 = (0);
while(true){
if((i__1270__auto___2082 < len__1269__auto___2081)){
args2078.push((arguments[i__1270__auto___2082]));

var G__2083 = (i__1270__auto___2082 + (1));
i__1270__auto___2082 = G__2083;
continue;
} else {
}
break;
}

var G__2080 = args2078.length;
switch (G__2080) {
case 1:
return dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2078.length)].join('')));

}
});

dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return dogfort.middleware.session.wrap_session.call(null,handler,cljs.core.PersistentArrayMap.EMPTY);
});

dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$2 = (function (handler,options){
var options__$1 = dogfort.middleware.session.session_options.call(null,options);
return ((function (options__$1){
return (function (request){
var new_request = dogfort.middleware.session.session_request.call(null,request,options__$1);
return dogfort.middleware.session.session_response.call(null,handler.call(null,new_request),new_request,options__$1);
});
;})(options__$1))
});

dogfort.middleware.session.wrap_session.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=session.js.map