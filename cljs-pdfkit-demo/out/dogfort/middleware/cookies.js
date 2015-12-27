// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.middleware.cookies');
goog.require('cljs.core');
goog.require('dogfort.util.codec');
goog.require('clojure.string');
goog.require('redlobster.promise');
/**
 * HTTP token: 1*<any CHAR except CTLs or tspecials>. See RFC2068
 */
dogfort.middleware.cookies.re_token = /[!#$%&'*\-+.0-9A-Z\^_`a-z\|~]+/;
/**
 * RFC6265 cookie-octet
 */
dogfort.middleware.cookies.re_cookie_octet = /[!#$%&'()*+\-.\/0-9:<=>?@A-Z\[\]\^_`a-z\{\|\}~]/;
/**
 * RFC6265 cookie-value
 */
dogfort.middleware.cookies.re_cookie_value = cljs.core.re_pattern.call(null,[cljs.core.str("\""),cljs.core.str(dogfort.middleware.cookies.re_cookie_octet.source),cljs.core.str("*\"|"),cljs.core.str(dogfort.middleware.cookies.re_cookie_octet.source),cljs.core.str("*")].join(''));
/**
 * RFC6265 set-cookie-string
 */
dogfort.middleware.cookies.re_cookie = cljs.core.re_pattern.call(null,[cljs.core.str("\\s*("),cljs.core.str(dogfort.middleware.cookies.re_token.source),cljs.core.str(")=("),cljs.core.str(dogfort.middleware.cookies.re_cookie_value.source),cljs.core.str(")\\s*[;,]?")].join(''));
/**
 * Attributes defined by RFC6265 that apply to the Set-Cookie header.
 */
dogfort.middleware.cookies.set_cookie_attrs = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"domain","domain",1847214937),"Domain",new cljs.core.Keyword(null,"max-age","max-age",-270129271),"Max-Age",new cljs.core.Keyword(null,"path","path",-188191168),"Path",new cljs.core.Keyword(null,"secure","secure",176883900),"Secure",new cljs.core.Keyword(null,"expires","expires",1393008816),"Expires",new cljs.core.Keyword(null,"http-only","http-only",-825379555),"HttpOnly"], null);
/**
 * Turn a HTTP Cookie header into a list of name/value pairs.
 */
dogfort.middleware.cookies.parse_cookie_header = (function dogfort$middleware$cookies$parse_cookie_header(header){
var iter__983__auto__ = (function dogfort$middleware$cookies$parse_cookie_header_$_iter__1940(s__1941){
return (new cljs.core.LazySeq(null,(function (){
var s__1941__$1 = s__1941;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1941__$1);
if(temp__4425__auto__){
var s__1941__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1941__$2)){
var c__981__auto__ = cljs.core.chunk_first.call(null,s__1941__$2);
var size__982__auto__ = cljs.core.count.call(null,c__981__auto__);
var b__1943 = cljs.core.chunk_buffer.call(null,size__982__auto__);
if((function (){var i__1942 = (0);
while(true){
if((i__1942 < size__982__auto__)){
var vec__1946 = cljs.core._nth.call(null,c__981__auto__,i__1942);
var _ = cljs.core.nth.call(null,vec__1946,(0),null);
var name = cljs.core.nth.call(null,vec__1946,(1),null);
var value = cljs.core.nth.call(null,vec__1946,(2),null);
cljs.core.chunk_append.call(null,b__1943,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null));

var G__1948 = (i__1942 + (1));
i__1942 = G__1948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1943),dogfort$middleware$cookies$parse_cookie_header_$_iter__1940.call(null,cljs.core.chunk_rest.call(null,s__1941__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1943),null);
}
} else {
var vec__1947 = cljs.core.first.call(null,s__1941__$2);
var _ = cljs.core.nth.call(null,vec__1947,(0),null);
var name = cljs.core.nth.call(null,vec__1947,(1),null);
var value = cljs.core.nth.call(null,vec__1947,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null),dogfort$middleware$cookies$parse_cookie_header_$_iter__1940.call(null,cljs.core.rest.call(null,s__1941__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__983__auto__.call(null,cljs.core.re_seq.call(null,dogfort.middleware.cookies.re_cookie,header));
});
/**
 * Strip quotes from a cookie value.
 */
dogfort.middleware.cookies.strip_quotes = (function dogfort$middleware$cookies$strip_quotes(value){
return clojure.string.replace.call(null,value,/^\"|\"$/,"");
});
dogfort.middleware.cookies.decode_values = (function dogfort$middleware$cookies$decode_values(cookies,decoder){
var iter__983__auto__ = (function dogfort$middleware$cookies$decode_values_$_iter__1957(s__1958){
return (new cljs.core.LazySeq(null,(function (){
var s__1958__$1 = s__1958;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1958__$1);
if(temp__4425__auto__){
var s__1958__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1958__$2)){
var c__981__auto__ = cljs.core.chunk_first.call(null,s__1958__$2);
var size__982__auto__ = cljs.core.count.call(null,c__981__auto__);
var b__1960 = cljs.core.chunk_buffer.call(null,size__982__auto__);
if((function (){var i__1959 = (0);
while(true){
if((i__1959 < size__982__auto__)){
var vec__1963 = cljs.core._nth.call(null,c__981__auto__,i__1959);
var name = cljs.core.nth.call(null,vec__1963,(0),null);
var value = cljs.core.nth.call(null,vec__1963,(1),null);
cljs.core.chunk_append.call(null,b__1960,(function (){var temp__4423__auto__ = decoder.call(null,dogfort.middleware.cookies.strip_quotes.call(null,value));
if(cljs.core.truth_(temp__4423__auto__)){
var value__$1 = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value__$1], null)], null);
} else {
return null;
}
})());

var G__1965 = (i__1959 + (1));
i__1959 = G__1965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1960),dogfort$middleware$cookies$decode_values_$_iter__1957.call(null,cljs.core.chunk_rest.call(null,s__1958__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1960),null);
}
} else {
var vec__1964 = cljs.core.first.call(null,s__1958__$2);
var name = cljs.core.nth.call(null,vec__1964,(0),null);
var value = cljs.core.nth.call(null,vec__1964,(1),null);
return cljs.core.cons.call(null,(function (){var temp__4423__auto__ = decoder.call(null,dogfort.middleware.cookies.strip_quotes.call(null,value));
if(cljs.core.truth_(temp__4423__auto__)){
var value__$1 = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value__$1], null)], null);
} else {
return null;
}
})(),dogfort$middleware$cookies$decode_values_$_iter__1957.call(null,cljs.core.rest.call(null,s__1958__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__983__auto__.call(null,cookies);
});
/**
 * Parse the cookies from a request map.
 */
dogfort.middleware.cookies.parse_cookies = (function dogfort$middleware$cookies$parse_cookies(request,encoder){
var temp__4423__auto__ = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"cookie"], null));
if(cljs.core.truth_(temp__4423__auto__)){
var cookie = temp__4423__auto__;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,((function (cookie,temp__4423__auto__){
return (function (c){
return dogfort.middleware.cookies.decode_values.call(null,c,encoder);
});})(cookie,temp__4423__auto__))
.call(null,dogfort.middleware.cookies.parse_cookie_header.call(null,cookie))));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Write the main cookie value.
 */
dogfort.middleware.cookies.write_value = (function dogfort$middleware$cookies$write_value(key,value,encoder){
return encoder.call(null,new cljs.core.PersistentArrayMap.fromArray([key,value], true, false));
});
/**
 * Is the attribute valid?
 */
dogfort.middleware.cookies.valid_attr_QMARK_ = (function dogfort$middleware$cookies$valid_attr_QMARK_(p__1966){
var vec__1971 = p__1966;
var key = cljs.core.nth.call(null,vec__1971,(0),null);
var value = cljs.core.nth.call(null,vec__1971,(1),null);
var and__218__auto__ = cljs.core.contains_QMARK_.call(null,dogfort.middleware.cookies.set_cookie_attrs,key);
if(and__218__auto__){
var and__218__auto____$1 = cljs.core._EQ_.call(null,(-1),[cljs.core.str(value)].join('').indexOf(";"));
if(and__218__auto____$1){
var G__1974 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__1974) {
case "max-age":
return cljs.core.integer_QMARK_.call(null,value);

break;
case "expires":
return ((value instanceof Date)) || (typeof value === 'string');

break;
default:
return true;

}
} else {
return and__218__auto____$1;
}
} else {
return and__218__auto__;
}
});
/**
 * Write a map of cookie attributes to a string.
 */
dogfort.middleware.cookies.write_attr_map = (function dogfort$middleware$cookies$write_attr_map(attrs){
if(cljs.core.every_QMARK_.call(null,dogfort.middleware.cookies.valid_attr_QMARK_,attrs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"valid-attr?","valid-attr?",657119621,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null))))].join('')));
}

var iter__983__auto__ = (function dogfort$middleware$cookies$write_attr_map_$_iter__1984(s__1985){
return (new cljs.core.LazySeq(null,(function (){
var s__1985__$1 = s__1985;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__1985__$1);
if(temp__4425__auto__){
var s__1985__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1985__$2)){
var c__981__auto__ = cljs.core.chunk_first.call(null,s__1985__$2);
var size__982__auto__ = cljs.core.count.call(null,c__981__auto__);
var b__1987 = cljs.core.chunk_buffer.call(null,size__982__auto__);
if((function (){var i__1986 = (0);
while(true){
if((i__1986 < size__982__auto__)){
var vec__1990 = cljs.core._nth.call(null,c__981__auto__,i__1986);
var key = cljs.core.nth.call(null,vec__1990,(0),null);
var value = cljs.core.nth.call(null,vec__1990,(1),null);
cljs.core.chunk_append.call(null,b__1987,(function (){var attr_name = cljs.core.name.call(null,dogfort.middleware.cookies.set_cookie_attrs.call(null,key));
if(value === true){
return [cljs.core.str(";"),cljs.core.str(attr_name)].join('');
} else {
if(value === false){
return "";
} else {
return [cljs.core.str(";"),cljs.core.str(attr_name),cljs.core.str("="),cljs.core.str(value)].join('');

}
}
})());

var G__1992 = (i__1986 + (1));
i__1986 = G__1992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1987),dogfort$middleware$cookies$write_attr_map_$_iter__1984.call(null,cljs.core.chunk_rest.call(null,s__1985__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1987),null);
}
} else {
var vec__1991 = cljs.core.first.call(null,s__1985__$2);
var key = cljs.core.nth.call(null,vec__1991,(0),null);
var value = cljs.core.nth.call(null,vec__1991,(1),null);
return cljs.core.cons.call(null,(function (){var attr_name = cljs.core.name.call(null,dogfort.middleware.cookies.set_cookie_attrs.call(null,key));
if(value === true){
return [cljs.core.str(";"),cljs.core.str(attr_name)].join('');
} else {
if(value === false){
return "";
} else {
return [cljs.core.str(";"),cljs.core.str(attr_name),cljs.core.str("="),cljs.core.str(value)].join('');

}
}
})(),dogfort$middleware$cookies$write_attr_map_$_iter__1984.call(null,cljs.core.rest.call(null,s__1985__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__983__auto__.call(null,attrs);
});
/**
 * Turn a map of cookies into a seq of strings for a Set-Cookie header.
 */
dogfort.middleware.cookies.write_cookies = (function dogfort$middleware$cookies$write_cookies(cookies,encoder){
var iter__983__auto__ = (function dogfort$middleware$cookies$write_cookies_$_iter__2001(s__2002){
return (new cljs.core.LazySeq(null,(function (){
var s__2002__$1 = s__2002;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__2002__$1);
if(temp__4425__auto__){
var s__2002__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2002__$2)){
var c__981__auto__ = cljs.core.chunk_first.call(null,s__2002__$2);
var size__982__auto__ = cljs.core.count.call(null,c__981__auto__);
var b__2004 = cljs.core.chunk_buffer.call(null,size__982__auto__);
if((function (){var i__2003 = (0);
while(true){
if((i__2003 < size__982__auto__)){
var vec__2007 = cljs.core._nth.call(null,c__981__auto__,i__2003);
var key = cljs.core.nth.call(null,vec__2007,(0),null);
var value = cljs.core.nth.call(null,vec__2007,(1),null);
cljs.core.chunk_append.call(null,b__2004,((cljs.core.map_QMARK_.call(null,value))?cljs.core.apply.call(null,cljs.core.str,dogfort.middleware.cookies.write_value.call(null,key,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),encoder),dogfort.middleware.cookies.write_attr_map.call(null,cljs.core.dissoc.call(null,value,new cljs.core.Keyword(null,"value","value",305978217)))):dogfort.middleware.cookies.write_value.call(null,key,value,encoder)));

var G__2009 = (i__2003 + (1));
i__2003 = G__2009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2004),dogfort$middleware$cookies$write_cookies_$_iter__2001.call(null,cljs.core.chunk_rest.call(null,s__2002__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2004),null);
}
} else {
var vec__2008 = cljs.core.first.call(null,s__2002__$2);
var key = cljs.core.nth.call(null,vec__2008,(0),null);
var value = cljs.core.nth.call(null,vec__2008,(1),null);
return cljs.core.cons.call(null,((cljs.core.map_QMARK_.call(null,value))?cljs.core.apply.call(null,cljs.core.str,dogfort.middleware.cookies.write_value.call(null,key,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),encoder),dogfort.middleware.cookies.write_attr_map.call(null,cljs.core.dissoc.call(null,value,new cljs.core.Keyword(null,"value","value",305978217)))):dogfort.middleware.cookies.write_value.call(null,key,value,encoder)),dogfort$middleware$cookies$write_cookies_$_iter__2001.call(null,cljs.core.rest.call(null,s__2002__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__983__auto__.call(null,cookies);
});
/**
 * Add a Set-Cookie header to a response if there is a :cookies key.
 */
dogfort.middleware.cookies.set_cookies = (function dogfort$middleware$cookies$set_cookies(response,encoder){
var temp__4423__auto__ = new cljs.core.Keyword(null,"cookies","cookies",1839416329).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(temp__4423__auto__)){
var cookies = temp__4423__auto__;
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Set-Cookie"], null),cljs.core.concat,cljs.core.doall.call(null,dogfort.middleware.cookies.write_cookies.call(null,cookies,encoder)));
} else {
return response;
}
});
/**
 * Parses cookies in the request map. See: wrap-cookies.
 */
dogfort.middleware.cookies.cookies_request = (function dogfort$middleware$cookies$cookies_request(){
var args__1276__auto__ = [];
var len__1269__auto___2016 = arguments.length;
var i__1270__auto___2017 = (0);
while(true){
if((i__1270__auto___2017 < len__1269__auto___2016)){
args__1276__auto__.push((arguments[i__1270__auto___2017]));

var G__2018 = (i__1270__auto___2017 + (1));
i__1270__auto___2017 = G__2018;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.middleware.cookies.cookies_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.middleware.cookies.cookies_request.cljs$core$IFn$_invoke$arity$variadic = (function (request,p__2012){
var vec__2013 = p__2012;
var map__2014 = cljs.core.nth.call(null,vec__2013,(0),null);
var map__2014__$1 = ((((!((map__2014 == null)))?((((map__2014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2014):map__2014);
var decoder = cljs.core.get.call(null,map__2014__$1,new cljs.core.Keyword(null,"decoder","decoder",1169558843),dogfort.util.codec.form_decode_str);
if(cljs.core.truth_(request.call(null,new cljs.core.Keyword(null,"cookies","cookies",1839416329)))){
return request;
} else {
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"cookies","cookies",1839416329),dogfort.middleware.cookies.parse_cookies.call(null,request,decoder));
}
});

dogfort.middleware.cookies.cookies_request.cljs$lang$maxFixedArity = (1);

dogfort.middleware.cookies.cookies_request.cljs$lang$applyTo = (function (seq2010){
var G__2011 = cljs.core.first.call(null,seq2010);
var seq2010__$1 = cljs.core.next.call(null,seq2010);
return dogfort.middleware.cookies.cookies_request.cljs$core$IFn$_invoke$arity$variadic(G__2011,seq2010__$1);
});
/**
 * For responses with :cookies, adds Set-Cookie header and returns response
 * without :cookies. See: wrap-cookies.
 */
dogfort.middleware.cookies.cookies_response = (function dogfort$middleware$cookies$cookies_response(){
var args__1276__auto__ = [];
var len__1269__auto___2026 = arguments.length;
var i__1270__auto___2027 = (0);
while(true){
if((i__1270__auto___2027 < len__1269__auto___2026)){
args__1276__auto__.push((arguments[i__1270__auto___2027]));

var G__2028 = (i__1270__auto___2027 + (1));
i__1270__auto___2027 = G__2028;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.middleware.cookies.cookies_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.middleware.cookies.cookies_response.cljs$core$IFn$_invoke$arity$variadic = (function (response,p__2022){
var vec__2023 = p__2022;
var map__2024 = cljs.core.nth.call(null,vec__2023,(0),null);
var map__2024__$1 = ((((!((map__2024 == null)))?((((map__2024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2024):map__2024);
var encoder = cljs.core.get.call(null,map__2024__$1,new cljs.core.Keyword(null,"encoder","encoder",-1113127834),dogfort.util.codec.form_encode);
var promise__1372__auto__ = redlobster.promise.promise.call(null);
var realise__1373__auto__ = ((function (promise__1372__auto__,vec__2023,map__2024,map__2024__$1,encoder){
return (function (promise__1372__auto____$1,value__1374__auto__){
return redlobster.promise.realise.call(null,promise__1372__auto____$1,value__1374__auto__);
});})(promise__1372__auto__,vec__2023,map__2024,map__2024__$1,encoder))
;
var realise_error__1375__auto__ = ((function (promise__1372__auto__,realise__1373__auto__,vec__2023,map__2024,map__2024__$1,encoder){
return (function (promise__1372__auto____$1,value__1374__auto__){
return redlobster.promise.realise_error.call(null,promise__1372__auto____$1,value__1374__auto__);
});})(promise__1372__auto__,realise__1373__auto__,vec__2023,map__2024,map__2024__$1,encoder))
;
var realise = cljs.core.partial.call(null,realise__1373__auto__,promise__1372__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__1375__auto__,promise__1372__auto__);
redlobster.promise.on_realised.call(null,response,((function (promise__1372__auto__,realise__1373__auto__,realise_error__1375__auto__,realise,realise_error,vec__2023,map__2024,map__2024__$1,encoder){
return (function (p1__2019_SHARP_){
return realise.call(null,cljs.core.dissoc.call(null,dogfort.middleware.cookies.set_cookies.call(null,p1__2019_SHARP_,encoder),new cljs.core.Keyword(null,"cookies","cookies",1839416329)));
});})(promise__1372__auto__,realise__1373__auto__,realise_error__1375__auto__,realise,realise_error,vec__2023,map__2024,map__2024__$1,encoder))
,((function (promise__1372__auto__,realise__1373__auto__,realise_error__1375__auto__,realise,realise_error,vec__2023,map__2024,map__2024__$1,encoder){
return (function (){
return cljs.core.List.EMPTY;
});})(promise__1372__auto__,realise__1373__auto__,realise_error__1375__auto__,realise,realise_error,vec__2023,map__2024,map__2024__$1,encoder))
);

return promise__1372__auto__;
});

dogfort.middleware.cookies.cookies_response.cljs$lang$maxFixedArity = (1);

dogfort.middleware.cookies.cookies_response.cljs$lang$applyTo = (function (seq2020){
var G__2021 = cljs.core.first.call(null,seq2020);
var seq2020__$1 = cljs.core.next.call(null,seq2020);
return dogfort.middleware.cookies.cookies_response.cljs$core$IFn$_invoke$arity$variadic(G__2021,seq2020__$1);
});
/**
 * Parses the cookies in the request map, then assocs the resulting map
 * to the :cookies key on the request.
 * 
 * Accepts the following options:
 * 
 * :decoder - a function to decode the cookie value. Expects a function that
 * takes a string and returns a string. Defaults to URL-decoding.
 * 
 * :encoder - a function to encode the cookie name and value. Expects a
 * function that takes a name/value map and returns a string.
 * Defaults to URL-encoding.
 * 
 * Each cookie is represented as a map, with its value being held in the
 * :value key. A cookie may optionally contain a :path, :domain or :port
 * attribute.
 * 
 * To set cookies, add a map to the :cookies key on the response. The values
 * of the cookie map can either be strings, or maps containing the following
 * keys:
 * 
 * :value     - the new value of the cookie
 * :path      - the subpath the cookie is valid for
 * :domain    - the domain the cookie is valid for
 * :max-age   - the maximum age in seconds of the cookie
 * :expires   - a date string at which the cookie will expire
 * :secure    - set to true if the cookie requires HTTPS, prevent HTTP access
 * :http-only - set to true if the cookie is valid for HTTP and HTTPS only
 * (ie. prevent JavaScript access)
 */
dogfort.middleware.cookies.wrap_cookies = (function dogfort$middleware$cookies$wrap_cookies(){
var args__1276__auto__ = [];
var len__1269__auto___2035 = arguments.length;
var i__1270__auto___2036 = (0);
while(true){
if((i__1270__auto___2036 < len__1269__auto___2035)){
args__1276__auto__.push((arguments[i__1270__auto___2036]));

var G__2037 = (i__1270__auto___2036 + (1));
i__1270__auto___2036 = G__2037;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.middleware.cookies.wrap_cookies.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.middleware.cookies.wrap_cookies.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__2031){
var vec__2032 = p__2031;
var map__2033 = cljs.core.nth.call(null,vec__2032,(0),null);
var map__2033__$1 = ((((!((map__2033 == null)))?((((map__2033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2033):map__2033);
var decoder = cljs.core.get.call(null,map__2033__$1,new cljs.core.Keyword(null,"decoder","decoder",1169558843),dogfort.util.codec.form_decode_str);
var encoder = cljs.core.get.call(null,map__2033__$1,new cljs.core.Keyword(null,"encoder","encoder",-1113127834),dogfort.util.codec.form_encode);
return ((function (vec__2032,map__2033,map__2033__$1,decoder,encoder){
return (function (request){
return dogfort.middleware.cookies.cookies_response.call(null,handler.call(null,dogfort.middleware.cookies.cookies_request.call(null,request,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"decoder","decoder",1169558843),decoder], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encoder","encoder",-1113127834),encoder], null));
});
;})(vec__2032,map__2033,map__2033__$1,decoder,encoder))
});

dogfort.middleware.cookies.wrap_cookies.cljs$lang$maxFixedArity = (1);

dogfort.middleware.cookies.wrap_cookies.cljs$lang$applyTo = (function (seq2029){
var G__2030 = cljs.core.first.call(null,seq2029);
var seq2029__$1 = cljs.core.next.call(null,seq2029);
return dogfort.middleware.cookies.wrap_cookies.cljs$core$IFn$_invoke$arity$variadic(G__2030,seq2029__$1);
});

//# sourceMappingURL=cookies.js.map