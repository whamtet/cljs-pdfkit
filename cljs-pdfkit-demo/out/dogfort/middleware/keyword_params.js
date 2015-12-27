// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.middleware.keyword_params');
goog.require('cljs.core');
dogfort.middleware.keyword_params.keyword_syntax_QMARK_ = (function dogfort$middleware$keyword_params$keyword_syntax_QMARK_(s){
return cljs.core.re_matches.call(null,/[A-Za-z*+!_?-][A-Za-z0-9*+!_?-]*/,s);
});
dogfort.middleware.keyword_params.keyify_params = (function dogfort$middleware$keyword_params$keyify_params(target){
if(cljs.core.map_QMARK_.call(null,target)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__983__auto__ = (function dogfort$middleware$keyword_params$keyify_params_$_iter__3192(s__3193){
return (new cljs.core.LazySeq(null,(function (){
var s__3193__$1 = s__3193;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__3193__$1);
if(temp__4425__auto__){
var s__3193__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3193__$2)){
var c__981__auto__ = cljs.core.chunk_first.call(null,s__3193__$2);
var size__982__auto__ = cljs.core.count.call(null,c__981__auto__);
var b__3195 = cljs.core.chunk_buffer.call(null,size__982__auto__);
if((function (){var i__3194 = (0);
while(true){
if((i__3194 < size__982__auto__)){
var vec__3198 = cljs.core._nth.call(null,c__981__auto__,i__3194);
var k = cljs.core.nth.call(null,vec__3198,(0),null);
var v = cljs.core.nth.call(null,vec__3198,(1),null);
cljs.core.chunk_append.call(null,b__3195,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__218__auto__ = typeof k === 'string';
if(and__218__auto__){
return dogfort.middleware.keyword_params.keyword_syntax_QMARK_.call(null,k);
} else {
return and__218__auto__;
}
})())?cljs.core.keyword.call(null,k):k),dogfort$middleware$keyword_params$keyify_params.call(null,v)], null));

var G__3200 = (i__3194 + (1));
i__3194 = G__3200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3195),dogfort$middleware$keyword_params$keyify_params_$_iter__3192.call(null,cljs.core.chunk_rest.call(null,s__3193__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3195),null);
}
} else {
var vec__3199 = cljs.core.first.call(null,s__3193__$2);
var k = cljs.core.nth.call(null,vec__3199,(0),null);
var v = cljs.core.nth.call(null,vec__3199,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__218__auto__ = typeof k === 'string';
if(and__218__auto__){
return dogfort.middleware.keyword_params.keyword_syntax_QMARK_.call(null,k);
} else {
return and__218__auto__;
}
})())?cljs.core.keyword.call(null,k):k),dogfort$middleware$keyword_params$keyify_params.call(null,v)], null),dogfort$middleware$keyword_params$keyify_params_$_iter__3192.call(null,cljs.core.rest.call(null,s__3193__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__983__auto__.call(null,target);
})());
} else {
if(cljs.core.vector_QMARK_.call(null,target)){
return cljs.core.vec.call(null,cljs.core.map.call(null,dogfort$middleware$keyword_params$keyify_params,target));
} else {
return target;

}
}
});
/**
 * Converts string keys in :params map to keywords. See: wrap-keyword-params.
 */
dogfort.middleware.keyword_params.keyword_params_request = (function dogfort$middleware$keyword_params$keyword_params_request(request){
return cljs.core.update_in.call(null,request,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),dogfort.middleware.keyword_params.keyify_params);
});
/**
 * Middleware that converts the any string keys in the :params map to keywords.
 * Only keys that can be turned into valid keywords are converted.
 * 
 * This middleware does not alter the maps under :*-params keys. These are left
 * as strings.
 */
dogfort.middleware.keyword_params.wrap_keyword_params = (function dogfort$middleware$keyword_params$wrap_keyword_params(handler){
return (function (request){
return handler.call(null,dogfort.middleware.keyword_params.keyword_params_request.call(null,request));
});
});

//# sourceMappingURL=keyword_params.js.map