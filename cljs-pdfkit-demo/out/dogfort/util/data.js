// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.util.data');
goog.require('cljs.core');
/**
 * Associate a key with a value in a map. If the key already exists in the map,
 * a vector of values is associated with the key.
 */
dogfort.util.data.assoc_conj = (function dogfort$util$data$assoc_conj(map,key,val){
return cljs.core.assoc.call(null,map,key,(function (){var temp__4423__auto__ = cljs.core.get.call(null,map,key);
if(cljs.core.truth_(temp__4423__auto__)){
var cur = temp__4423__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,val);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,val], null);
}
} else {
return val;
}
})());
});

//# sourceMappingURL=data.js.map