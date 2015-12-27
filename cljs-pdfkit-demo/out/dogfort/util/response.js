// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.util.response');
goog.require('cljs.core');
dogfort.util.response.status_codes = cljs.core.PersistentHashMap.fromArrays([(410),(205),(416),(101),(206),(415),(300),(204),(405),(504),(505),(502),(307),(402),(407),(305),(304),(401),(412),(417),(500),(501),(303),(100),(413),(301),(408),(411),(201),(302),(202),(200),(503),(414),(404),(203),(409),(400),(403),(406)],["Gone","Reset Content","Requested Range Not Satisfiable","Switching Protocols","Partial Content","Unsupported Media Type","Multiple Choices","No Content","Method Not Allowed","Gateway Timeout","HTTP Version Not Supported","Bad Gateway","Temporary Redirect","Payment Required","Proxy Authentication Required","Use Proxy","Not Modified","Unauthorized","Precondition Failed","Expectation Failed","Internal Server Error","Not Implemented","See Other","Continue","Request Entity Too Large","Moved Permanently","Request Timeout","Length Required","Created","Found","Accepted","OK","Service Unavailable","Request-URI Too Long","Not Found","Non-Authoritative Information","Conflict","Bad Request","Forbidden","Not Acceptable"]);
dogfort.util.response.status_cats = cljs.core.PersistentHashMap.fromArrays([(410),(416),(101),(206),(508),(300),(204),(405),(450),(502),(307),(402),(429),(506),(305),(418),(304),(401),(417),(500),(599),(303),(100),(426),(413),(301),(424),(408),(411),(507),(201),(444),(302),(202),(200),(431),(503),(414),(404),(422),(423),(409),(400),(509),(207),(403),(425),(406)],["http://25.media.tumblr.com/tumblr_lwjgd4GlG21qzhbl2o7_1280.jpg","http://24.media.tumblr.com/tumblr_lwjgd4GlG21qzhbl2o3_1280.jpg","http://24.media.tumblr.com/tumblr_lwjgzc5VCs1qzhbl2o2_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgxg7jrJ1qzhbl2o5_1280.jpg","http://24.media.tumblr.com/tumblr_lwjfwtx7P81qzhbl2o4_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgtfRJGj1qzhbl2o2_1280.jpg","http://24.media.tumblr.com/tumblr_lwjgxg7jrJ1qzhbl2o4_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgmsfFs31qzhbl2o6_1280.jpg","http://25.media.tumblr.com/tumblr_lwjg4pjFFI1qzhbl2o9_1280.jpg","http://24.media.tumblr.com/tumblr_lwjfwtx7P81qzhbl2o2_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgtfRJGj1qzhbl2o7_1280.jpg","http://24.media.tumblr.com/tumblr_lwjgmsfFs31qzhbl2o3_1280.jpg","http://25.media.tumblr.com/tumblr_lwjg4pjFFI1qzhbl2o6_1280.jpg","http://25.media.tumblr.com/tumblr_lwjfwtx7P81qzhbl2o12_1280.jpg","http://24.media.tumblr.com/tumblr_lwjgtfRJGj1qzhbl2o6_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgd4GlG21qzhbl2o1_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgtfRJGj1qzhbl2o5_1280.jpg","http://24.media.tumblr.com/tumblr_lwjgmsfFs31qzhbl2o2_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgd4GlG21qzhbl2o2_1280.jpg","http://25.media.tumblr.com/tumblr_lwjfwtx7P81qzhbl2o1_1280.jpg","http://25.media.tumblr.com/tumblr_lwjfwtx7P81qzhbl2o6_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgtfRJGj1qzhbl2o4_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgzc5VCs1qzhbl2o1_1280.jpg","http://25.media.tumblr.com/tumblr_lwjg4pjFFI1qzhbl2o5_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgd4GlG21qzhbl2o5_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgtfRJGj1qzhbl2o3_1280.jpg","http://24.media.tumblr.com/tumblr_lwjg4pjFFI1qzhbl2o3_1280.jpg","http://24.media.tumblr.com/tumblr_lwjgmsfFs31qzhbl2o8_1280.jpg","http://24.media.tumblr.com/tumblr_lwjgd4GlG21qzhbl2o6_1280.jpg","http://25.media.tumblr.com/tumblr_lwjfwtx7P81qzhbl2o3_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgxg7jrJ1qzhbl2o2_1280.jpg","http://24.media.tumblr.com/tumblr_lwjg4pjFFI1qzhbl2o8_1280.jpg","http://24.media.tumblr.com/tumblr_lwjgtfRJGj1qzhbl2o1_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgxg7jrJ1qzhbl2o3_1280.jpg","http://24.media.tumblr.com/tumblr_lwjgxg7jrJ1qzhbl2o1_1280.jpg","http://24.media.tumblr.com/tumblr_lwjg4pjFFI1qzhbl2o7_1280.jpg","http://24.media.tumblr.com/tumblr_lwjfwtx7P81qzhbl2o11_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgd4GlG21qzhbl2o4_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgmsfFs31qzhbl2o5_1280.jpg","http://24.media.tumblr.com/tumblr_lwjg4pjFFI1qzhbl2o1_1280.jpg","http://24.media.tumblr.com/tumblr_lwjg4pjFFI1qzhbl2o2_1280.jpg","http://24.media.tumblr.com/tumblr_lwjgmsfFs31qzhbl2o9_1280.jpg","http://24.media.tumblr.com/tumblr_lwjgmsfFs31qzhbl2o1_1280.jpg","http://24.media.tumblr.com/tumblr_lwjfwtx7P81qzhbl2o5_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgxg7jrJ1qzhbl2o6_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgmsfFs31qzhbl2o4_1280.jpg","http://24.media.tumblr.com/tumblr_lwjg4pjFFI1qzhbl2o4_1280.jpg","http://25.media.tumblr.com/tumblr_lwjgmsfFs31qzhbl2o7_1280.jpg"]);
dogfort.util.response.response = (function dogfort$util$response$response(){
var args__1276__auto__ = [];
var len__1269__auto___2291 = arguments.length;
var i__1270__auto___2292 = (0);
while(true){
if((i__1270__auto___2292 < len__1269__auto___2291)){
args__1276__auto__.push((arguments[i__1270__auto___2292]));

var G__2293 = (i__1270__auto___2292 + (1));
i__1270__auto___2292 = G__2293;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((2) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((2)),(0))):null);
return dogfort.util.response.response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__1277__auto__);
});

dogfort.util.response.response.cljs$core$IFn$_invoke$arity$variadic = (function (status,body,p__2289){
var vec__2290 = p__2289;
var content_type = cljs.core.nth.call(null,vec__2290,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),content_type], null):cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});

dogfort.util.response.response.cljs$lang$maxFixedArity = (2);

dogfort.util.response.response.cljs$lang$applyTo = (function (seq2286){
var G__2287 = cljs.core.first.call(null,seq2286);
var seq2286__$1 = cljs.core.next.call(null,seq2286);
var G__2288 = cljs.core.first.call(null,seq2286__$1);
var seq2286__$2 = cljs.core.next.call(null,seq2286__$1);
return dogfort.util.response.response.cljs$core$IFn$_invoke$arity$variadic(G__2287,G__2288,seq2286__$2);
});
dogfort.util.response.default_response = (function dogfort$util$response$default_response(status){
return dogfort.util.response.response.call(null,status,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<html><head>","<style>","body { text-align: center; }","img { box-shadow: 0px 8px 32px black; }","</style>",(function (){var label = [cljs.core.str(status),cljs.core.str(" "),cljs.core.str(dogfort.util.response.status_codes.call(null,status))].join('');
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<title>",label,"</title></head><body>",(function (){var temp__4423__auto__ = dogfort.util.response.status_cats.call(null,status);
if(cljs.core.truth_(temp__4423__auto__)){
var cat = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<h1><img src=\"",cat,"\" alt=\"",label,"\"></h1>"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<h1>",label,"</h1>"], null);
}
})(),"</body></html>"], null);
})()], null)),"text/html");
});
dogfort.util.response.redirect = (function dogfort$util$response$redirect(url){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(302),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),url], null),new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});
dogfort.util.response.redirect_after_post = (function dogfort$util$response$redirect_after_post(url){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(303),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),url], null),new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
});

//# sourceMappingURL=response.js.map