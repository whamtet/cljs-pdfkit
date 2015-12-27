// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('cljs_pdfkit.optimize_dom');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('clojure.set');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_pdfkit.optimize_dom.unravel_vector = (function cljs_pdfkit$optimize_dom$unravel_vector(v){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (p1__1876_SHARP_){
return cljs.core.remove.call(null,cljs.core.seq_QMARK_,cljs.core.tree_seq.call(null,cljs.core.seq_QMARK_,cljs.core.identity,p1__1876_SHARP_));
}),v));
});
cljs_pdfkit.optimize_dom.element_tag_QMARK_ = (function cljs_pdfkit$optimize_dom$element_tag_QMARK_(v){
return (cljs.core.vector_QMARK_.call(null,v)) && ((cljs.core.first.call(null,v) instanceof cljs.core.Keyword));
});
/**
 * transforms tree by applying f to vector elements
 */
cljs_pdfkit.optimize_dom.postwalk = (function cljs_pdfkit$optimize_dom$postwalk(f,m){
if(cljs.core.vector_QMARK_.call(null,m)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs_pdfkit.optimize_dom.element_tag_QMARK_,m))){
return f.call(null,cljs.core.mapv.call(null,(function (p1__1877_SHARP_){
return cljs_pdfkit$optimize_dom$postwalk.call(null,f,p1__1877_SHARP_);
}),m));
} else {
return m;
}
} else {
return m;

}
});
cljs_pdfkit.optimize_dom.complete_postwalk = (function cljs_pdfkit$optimize_dom$complete_postwalk(f,m){
if(cljs.core.truth_(cljs_pdfkit.optimize_dom.element_tag_QMARK_.call(null,m))){
return f.call(null,cljs.core.mapv.call(null,(function (p1__1878_SHARP_){
return cljs_pdfkit$optimize_dom$complete_postwalk.call(null,f,p1__1878_SHARP_);
}),cljs_pdfkit.optimize_dom.unravel_vector.call(null,m)));
} else {
return m;

}
});
cljs_pdfkit.optimize_dom.prewalk = (function cljs_pdfkit$optimize_dom$prewalk(f,m){
if(cljs.core.vector_QMARK_.call(null,m)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs_pdfkit.optimize_dom.element_tag_QMARK_,m))){
return cljs.core.mapv.call(null,(function (p1__1879_SHARP_){
return cljs_pdfkit$optimize_dom$prewalk.call(null,f,p1__1879_SHARP_);
}),f.call(null,m));
} else {
return m;
}
} else {
return m;

}
});
/**
 * adds style map if not present
 * enables style elements to propagate up from children
 */
cljs_pdfkit.optimize_dom.add_style = (function cljs_pdfkit$optimize_dom$add_style(p__1880){
var vec__1882 = p__1880;
var tag = cljs.core.nth.call(null,vec__1882,(0),null);
var style = cljs.core.nth.call(null,vec__1882,(1),null);
var children = cljs.core.nthnext.call(null,vec__1882,(2));
var v = vec__1882;
if(cljs.core.map_QMARK_.call(null,style)){
return v;
} else {
if(cljs.core.not.call(null,style)){
return cljs.core.vec.call(null,cljs.core.list_STAR_.call(null,tag,cljs.core.PersistentArrayMap.EMPTY,children));
} else {
return cljs.core.vec.call(null,cljs.core.list_STAR_.call(null,tag,cljs.core.PersistentArrayMap.EMPTY,style,children));

}
}
});
/**
 * insert style ancestor to elements with identical styles
 */
cljs_pdfkit.optimize_dom.refactor_group = (function cljs_pdfkit$optimize_dom$refactor_group(group){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,group))){
return group;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY,group))], null);
}
});
/**
 * inserts style ancestors to reduce stack operations when generating pdf
 */
cljs_pdfkit.optimize_dom.refactor_tag = (function cljs_pdfkit$optimize_dom$refactor_tag(p__1883){
var vec__1885 = p__1883;
var tag = cljs.core.nth.call(null,vec__1885,(0),null);
var style = cljs.core.nth.call(null,vec__1885,(1),null);
var children = cljs.core.nthnext.call(null,vec__1885,(2));
var v = vec__1885;
var groups = cljs.core.partition_by.call(null,cljs.core.second,children);
if((cljs.core.count.call(null,groups) < (2))){
return v;
} else {
return cljs.core.vec.call(null,cljs.core.list_STAR_.call(null,tag,style,cljs.core.mapcat.call(null,cljs_pdfkit.optimize_dom.refactor_group,groups)));
}
});
cljs_pdfkit.optimize_dom.map_intersection = (function cljs_pdfkit$optimize_dom$map_intersection(maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,clojure.set.intersection,cljs.core.map.call(null,cljs.core.set,maps)));
});
cljs_pdfkit.optimize_dom.map_difference = (function cljs_pdfkit$optimize_dom$map_difference(m1,m2){
return cljs.core.apply.call(null,cljs.core.dissoc,m1,cljs.core.keys.call(null,m2));
});
cljs_pdfkit.optimize_dom.leaf_properties = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"align","align",1964212802),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"line-break","line-break",908969510),null,new cljs.core.Keyword(null,"fill-and-stroke","fill-and-stroke",1756742695),null,new cljs.core.Keyword(null,"linear-gradient","linear-gradient",1752751047),null,new cljs.core.Keyword(null,"columns","columns",1998437288),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"radial-gradient","radial-gradient",-635026259),null,new cljs.core.Keyword(null,"character-spacing","character-spacing",-346919538),null,new cljs.core.Keyword(null,"word-spacing","word-spacing",-1211711602),null,new cljs.core.Keyword(null,"underline","underline",2018066703),null,new cljs.core.Keyword(null,"column-gap","column-gap",384822863),null,new cljs.core.Keyword(null,"strike","strike",-1173815471),null,new cljs.core.Keyword(null,"link","link",-1769163468),null,new cljs.core.Keyword(null,"paragraph-gap","paragraph-gap",-724232898),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null);
cljs_pdfkit.optimize_dom.static_properties = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"translate","translate",1336199447),null,new cljs.core.Keyword(null,"rotate","rotate",152705015),null], null), null);
cljs_pdfkit.optimize_dom.root_properties = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),null,new cljs.core.Keyword(null,"line-join","line-join",-1560936092),null,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),null,new cljs.core.Keyword(null,"miter-limit","miter-limit",-1242625357),null,new cljs.core.Keyword(null,"line-width","line-width",-906934988),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"line-cap","line-cap",448406012),null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),null], null), null);
cljs_pdfkit.optimize_dom.root_properties2 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),null,new cljs.core.Keyword(null,"font","font",-1506159249),null], null), null);
cljs_pdfkit.optimize_dom.percolate_up = (function cljs_pdfkit$optimize_dom$percolate_up(p__1887){
var vec__1889 = p__1887;
var tag = cljs.core.nth.call(null,vec__1889,(0),null);
var style = cljs.core.nth.call(null,vec__1889,(1),null);
var children = cljs.core.nthnext.call(null,vec__1889,(2));
var v = vec__1889;
var common_map = cljs.core.select_keys.call(null,cljs_pdfkit.optimize_dom.map_intersection.call(null,cljs.core.map.call(null,cljs.core.second,children)),cljs.core.concat.call(null,cljs_pdfkit.optimize_dom.root_properties,cljs_pdfkit.optimize_dom.root_properties2));
if(cljs.core.empty_QMARK_.call(null,common_map)){
return v;
} else {
return cljs.core.vec.call(null,cljs.core.list_STAR_.call(null,tag,cljs.core.merge.call(null,style,common_map),cljs.core.map.call(null,((function (common_map,vec__1889,tag,style,children,v){
return (function (p1__1886_SHARP_){
return cljs.core.update_in.call(null,p1__1886_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs_pdfkit.optimize_dom.map_difference,common_map);
});})(common_map,vec__1889,tag,style,children,v))
,children)));
}
});
cljs_pdfkit.optimize_dom.percolate_down = (function cljs_pdfkit$optimize_dom$percolate_down(p__1891){
var vec__1893 = p__1891;
var tag = cljs.core.nth.call(null,vec__1893,(0),null);
var style = cljs.core.nth.call(null,vec__1893,(1),null);
var children = cljs.core.nthnext.call(null,vec__1893,(2));
var v = vec__1893;
var godown = cljs.core.select_keys.call(null,style,cljs_pdfkit.optimize_dom.leaf_properties);
if(cljs.core.empty_QMARK_.call(null,godown)){
return v;
} else {
return cljs.core.vec.call(null,cljs.core.list_STAR_.call(null,tag,cljs_pdfkit.optimize_dom.map_difference.call(null,style,godown),cljs.core.map.call(null,((function (godown,vec__1893,tag,style,children,v){
return (function (p1__1890_SHARP_){
return cljs.core.update_in.call(null,p1__1890_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),((function (godown,vec__1893,tag,style,children,v){
return (function (child_opts){
return cljs.core.merge.call(null,godown,child_opts);
});})(godown,vec__1893,tag,style,children,v))
);
});})(godown,vec__1893,tag,style,children,v))
,children)));
}
});
cljs_pdfkit.optimize_dom.optimize_dom = (function cljs_pdfkit$optimize_dom$optimize_dom(m){
return cljs_pdfkit.optimize_dom.prewalk.call(null,cljs_pdfkit.optimize_dom.percolate_down,cljs_pdfkit.optimize_dom.postwalk.call(null,cljs_pdfkit.optimize_dom.percolate_up,cljs_pdfkit.optimize_dom.postwalk.call(null,cljs_pdfkit.optimize_dom.refactor_tag,cljs_pdfkit.optimize_dom.complete_postwalk.call(null,cljs_pdfkit.optimize_dom.add_style,m))));
});

//# sourceMappingURL=optimize_dom.js.map