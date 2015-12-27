// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('cljs_pdfkit.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('redlobster.stream');
goog.require('cljs_pdfkit.optimize_dom');
goog.require('cljs_pdfkit.util');
cljs_pdfkit.core.PDFDocument = require("pdfkit");
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_pdfkit.core.default_stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font","font",-1506159249),"Helvetica",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], null);
cljs_pdfkit.core.page = (function cljs_pdfkit$core$page(doc,page__$1){
var vec__1661 = cljs_pdfkit.optimize_dom.add_style.call(null,page__$1);
var page_tag = cljs.core.nth.call(null,vec__1661,(0),null);
var opts = cljs.core.nth.call(null,vec__1661,(1),null);
var children = cljs.core.nthnext.call(null,vec__1661,(2));
var _ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397),page_tag))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Symbol(null,"page-tag","page-tag",-403138499,null))))].join('')))})());
var opts__$1 = cljs.core.clj__GT_js.call(null,opts);
doc.addPage(opts__$1);

return cljs_pdfkit.core.handle_tag.call(null,doc,cljs_pdfkit.core.default_stack,cljs_pdfkit.optimize_dom.optimize_dom.call(null,cljs.core.vec.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY,children))));
});
/**
 * Create a pdf with a vector of the form
 * 
 * [:pdf opts & pages]
 * 
 * opts takes the form
 * 
 * {:title "Title of the Document"
 * :author "Author"
 * :subject - "Subject"
 * :keywords - "Keywords"}
 * 
 */
cljs_pdfkit.core.pdf = (function cljs_pdfkit$core$pdf(dom){
var vec__1667 = cljs_pdfkit.optimize_dom.add_style.call(null,dom);
var pdf_tag = cljs.core.nth.call(null,vec__1667,(0),null);
var opts = cljs.core.nth.call(null,vec__1667,(1),null);
var children = cljs.core.nthnext.call(null,vec__1667,(2));
var _ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pdf","pdf",1586765132),pdf_tag))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Symbol(null,"pdf-tag","pdf-tag",1229214313,null))))].join('')))})());
var opts__$1 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"info","info",-317069002),cljs_pdfkit.util.capitalize_map.call(null,opts),new cljs.core.Keyword(null,"autoFirstPage","autoFirstPage",1771180266),false], null));
var doc = (new cljs_pdfkit.core.PDFDocument(opts__$1));
var seq__1668_1672 = cljs.core.seq.call(null,children);
var chunk__1669_1673 = null;
var count__1670_1674 = (0);
var i__1671_1675 = (0);
while(true){
if((i__1671_1675 < count__1670_1674)){
var child_1676 = cljs.core._nth.call(null,chunk__1669_1673,i__1671_1675);
cljs_pdfkit.core.page.call(null,doc,child_1676);

var G__1677 = seq__1668_1672;
var G__1678 = chunk__1669_1673;
var G__1679 = count__1670_1674;
var G__1680 = (i__1671_1675 + (1));
seq__1668_1672 = G__1677;
chunk__1669_1673 = G__1678;
count__1670_1674 = G__1679;
i__1671_1675 = G__1680;
continue;
} else {
var temp__4425__auto___1681 = cljs.core.seq.call(null,seq__1668_1672);
if(temp__4425__auto___1681){
var seq__1668_1682__$1 = temp__4425__auto___1681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1668_1682__$1)){
var c__1014__auto___1683 = cljs.core.chunk_first.call(null,seq__1668_1682__$1);
var G__1684 = cljs.core.chunk_rest.call(null,seq__1668_1682__$1);
var G__1685 = c__1014__auto___1683;
var G__1686 = cljs.core.count.call(null,c__1014__auto___1683);
var G__1687 = (0);
seq__1668_1672 = G__1684;
chunk__1669_1673 = G__1685;
count__1670_1674 = G__1686;
i__1671_1675 = G__1687;
continue;
} else {
var child_1688 = cljs.core.first.call(null,seq__1668_1682__$1);
cljs_pdfkit.core.page.call(null,doc,child_1688);

var G__1689 = cljs.core.next.call(null,seq__1668_1682__$1);
var G__1690 = null;
var G__1691 = (0);
var G__1692 = (0);
seq__1668_1672 = G__1689;
chunk__1669_1673 = G__1690;
count__1670_1674 = G__1691;
i__1671_1675 = G__1692;
continue;
}
} else {
}
}
break;
}

return doc;
});
cljs_pdfkit.core.make_linear_gradient = (function cljs_pdfkit$core$make_linear_gradient(doc,p__1693){
var map__1703 = p__1693;
var map__1703__$1 = ((((!((map__1703 == null)))?((((map__1703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1703):map__1703);
var vec__1704 = cljs.core.get.call(null,map__1703__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var x1 = cljs.core.nth.call(null,vec__1704,(0),null);
var y1 = cljs.core.nth.call(null,vec__1704,(1),null);
var x2 = cljs.core.nth.call(null,vec__1704,(2),null);
var y2 = cljs.core.nth.call(null,vec__1704,(3),null);
var stops = cljs.core.get.call(null,map__1703__$1,new cljs.core.Keyword(null,"stops","stops",-1205459005));
var grad = doc.linearGradient(x1,y1,x2,y2);
var seq__1706_1712 = cljs.core.seq.call(null,stops);
var chunk__1707_1713 = null;
var count__1708_1714 = (0);
var i__1709_1715 = (0);
while(true){
if((i__1709_1715 < count__1708_1714)){
var vec__1710_1716 = cljs.core._nth.call(null,chunk__1707_1713,i__1709_1715);
var point_1717 = cljs.core.nth.call(null,vec__1710_1716,(0),null);
var color_1718 = cljs.core.nth.call(null,vec__1710_1716,(1),null);
grad.stop(point_1717,color_1718);

var G__1719 = seq__1706_1712;
var G__1720 = chunk__1707_1713;
var G__1721 = count__1708_1714;
var G__1722 = (i__1709_1715 + (1));
seq__1706_1712 = G__1719;
chunk__1707_1713 = G__1720;
count__1708_1714 = G__1721;
i__1709_1715 = G__1722;
continue;
} else {
var temp__4425__auto___1723 = cljs.core.seq.call(null,seq__1706_1712);
if(temp__4425__auto___1723){
var seq__1706_1724__$1 = temp__4425__auto___1723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1706_1724__$1)){
var c__1014__auto___1725 = cljs.core.chunk_first.call(null,seq__1706_1724__$1);
var G__1726 = cljs.core.chunk_rest.call(null,seq__1706_1724__$1);
var G__1727 = c__1014__auto___1725;
var G__1728 = cljs.core.count.call(null,c__1014__auto___1725);
var G__1729 = (0);
seq__1706_1712 = G__1726;
chunk__1707_1713 = G__1727;
count__1708_1714 = G__1728;
i__1709_1715 = G__1729;
continue;
} else {
var vec__1711_1730 = cljs.core.first.call(null,seq__1706_1724__$1);
var point_1731 = cljs.core.nth.call(null,vec__1711_1730,(0),null);
var color_1732 = cljs.core.nth.call(null,vec__1711_1730,(1),null);
grad.stop(point_1731,color_1732);

var G__1733 = cljs.core.next.call(null,seq__1706_1724__$1);
var G__1734 = null;
var G__1735 = (0);
var G__1736 = (0);
seq__1706_1712 = G__1733;
chunk__1707_1713 = G__1734;
count__1708_1714 = G__1735;
i__1709_1715 = G__1736;
continue;
}
} else {
}
}
break;
}

return grad;
});
cljs_pdfkit.core.make_radial_gradient = (function cljs_pdfkit$core$make_radial_gradient(doc,p__1737){
var map__1747 = p__1737;
var map__1747__$1 = ((((!((map__1747 == null)))?((((map__1747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1747):map__1747);
var vec__1748 = cljs.core.get.call(null,map__1747__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var x1 = cljs.core.nth.call(null,vec__1748,(0),null);
var y1 = cljs.core.nth.call(null,vec__1748,(1),null);
var r1 = cljs.core.nth.call(null,vec__1748,(2),null);
var x2 = cljs.core.nth.call(null,vec__1748,(3),null);
var y2 = cljs.core.nth.call(null,vec__1748,(4),null);
var r2 = cljs.core.nth.call(null,vec__1748,(5),null);
var stops = cljs.core.get.call(null,map__1747__$1,new cljs.core.Keyword(null,"stops","stops",-1205459005));
var grad = doc.radialGradient(x1,y1,r1,x2,y2,r2);
var seq__1750_1756 = cljs.core.seq.call(null,stops);
var chunk__1751_1757 = null;
var count__1752_1758 = (0);
var i__1753_1759 = (0);
while(true){
if((i__1753_1759 < count__1752_1758)){
var vec__1754_1760 = cljs.core._nth.call(null,chunk__1751_1757,i__1753_1759);
var a_1761 = cljs.core.nth.call(null,vec__1754_1760,(0),null);
var color_1762 = cljs.core.nth.call(null,vec__1754_1760,(1),null);
var b_1763 = cljs.core.nth.call(null,vec__1754_1760,(2),null);
grad.stop(a_1761,color_1762,b_1763);

var G__1764 = seq__1750_1756;
var G__1765 = chunk__1751_1757;
var G__1766 = count__1752_1758;
var G__1767 = (i__1753_1759 + (1));
seq__1750_1756 = G__1764;
chunk__1751_1757 = G__1765;
count__1752_1758 = G__1766;
i__1753_1759 = G__1767;
continue;
} else {
var temp__4425__auto___1768 = cljs.core.seq.call(null,seq__1750_1756);
if(temp__4425__auto___1768){
var seq__1750_1769__$1 = temp__4425__auto___1768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1750_1769__$1)){
var c__1014__auto___1770 = cljs.core.chunk_first.call(null,seq__1750_1769__$1);
var G__1771 = cljs.core.chunk_rest.call(null,seq__1750_1769__$1);
var G__1772 = c__1014__auto___1770;
var G__1773 = cljs.core.count.call(null,c__1014__auto___1770);
var G__1774 = (0);
seq__1750_1756 = G__1771;
chunk__1751_1757 = G__1772;
count__1752_1758 = G__1773;
i__1753_1759 = G__1774;
continue;
} else {
var vec__1755_1775 = cljs.core.first.call(null,seq__1750_1769__$1);
var a_1776 = cljs.core.nth.call(null,vec__1755_1775,(0),null);
var color_1777 = cljs.core.nth.call(null,vec__1755_1775,(1),null);
var b_1778 = cljs.core.nth.call(null,vec__1755_1775,(2),null);
grad.stop(a_1776,color_1777,b_1778);

var G__1779 = cljs.core.next.call(null,seq__1750_1769__$1);
var G__1780 = null;
var G__1781 = (0);
var G__1782 = (0);
seq__1750_1756 = G__1779;
chunk__1751_1757 = G__1780;
count__1752_1758 = G__1781;
i__1753_1759 = G__1782;
continue;
}
} else {
}
}
break;
}

return grad;
});
cljs_pdfkit.core.apply_state = (function cljs_pdfkit$core$apply_state(doc,opts){
if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903)))){
doc.fillColor(opts.call(null,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"line-join","line-join",-1560936092)))){
doc.lineJoin(opts.call(null,new cljs.core.Keyword(null,"line-join","line-join",-1560936092)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937)))){
doc.strokeColor(opts.call(null,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159)))){
doc.strokeOpacity(opts.call(null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"miter-limit","miter-limit",-1242625357)))){
doc.miterLimit(opts.call(null,new cljs.core.Keyword(null,"miter-limit","miter-limit",-1242625357)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"line-width","line-width",-906934988)))){
doc.lineWidth(opts.call(null,new cljs.core.Keyword(null,"line-width","line-width",-906934988)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"opacity","opacity",397153780)))){
doc.opacity(opts.call(null,new cljs.core.Keyword(null,"opacity","opacity",397153780)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"line-cap","line-cap",448406012)))){
doc.lineCap(opts.call(null,new cljs.core.Keyword(null,"line-cap","line-cap",448406012)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170)))){
return doc.fillOpacity(opts.call(null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170)));
} else {
return null;
}
});
cljs_pdfkit.core.apply_stack_frame = (function cljs_pdfkit$core$apply_stack_frame(doc,p__1783,save_QMARK_){
var map__1786 = p__1783;
var map__1786__$1 = ((((!((map__1786 == null)))?((((map__1786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1786):map__1786);
var font = cljs.core.get.call(null,map__1786__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var font_size = cljs.core.get.call(null,map__1786__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
if(cljs.core.truth_(save_QMARK_)){
doc.save();
} else {
doc.restore();
}

if(cljs.core.truth_(font)){
if(typeof font === 'string'){
doc.font(font);
} else {
doc.font(cljs.core.first.call(null,font),cljs.core.second.call(null,font));
}
} else {
}

if(cljs.core.truth_(font_size)){
return doc.fontSize(font_size);
} else {
return null;
}
});
cljs_pdfkit.core.handle_tag = (function cljs_pdfkit$core$handle_tag(doc,stack,p__1788){
var vec__1793 = p__1788;
var tag = cljs.core.nth.call(null,vec__1793,(0),null);
var tag_opts = cljs.core.nth.call(null,vec__1793,(1),null);
var children = cljs.core.nthnext.call(null,vec__1793,(2));
var v = vec__1793;
var state_opts = cljs.core.select_keys.call(null,tag_opts,cljs_pdfkit.optimize_dom.root_properties);
var map__1794 = tag_opts;
var map__1794__$1 = ((((!((map__1794 == null)))?((((map__1794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1794):map__1794);
var font_size = cljs.core.get.call(null,map__1794__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var linear_gradient = cljs.core.get.call(null,map__1794__$1,new cljs.core.Keyword(null,"linear-gradient","linear-gradient",1752751047));
var fill_and_stroke = cljs.core.get.call(null,map__1794__$1,new cljs.core.Keyword(null,"fill-and-stroke","fill-and-stroke",1756742695));
var scale = cljs.core.get.call(null,map__1794__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var fill = cljs.core.get.call(null,map__1794__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var dash = cljs.core.get.call(null,map__1794__$1,new cljs.core.Keyword(null,"dash","dash",23821356));
var radial_gradient = cljs.core.get.call(null,map__1794__$1,new cljs.core.Keyword(null,"radial-gradient","radial-gradient",-635026259));
var font = cljs.core.get.call(null,map__1794__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var rotate = cljs.core.get.call(null,map__1794__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var translate = cljs.core.get.call(null,map__1794__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
var stack_frame = cljs.core.select_keys.call(null,tag_opts,cljs_pdfkit.optimize_dom.root_properties2);
var new_stack = cljs.core.conj.call(null,stack,cljs.core.merge.call(null,cljs.core.peek.call(null,stack),stack_frame));
var save_stack_QMARK_ = (function (){var or__230__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"clip","clip",830998499),tag);
if(or__230__auto__){
return or__230__auto__;
} else {
return cljs.core.not_empty.call(null,tag_opts);
}
})();
if(cljs.core.truth_(save_stack_QMARK_)){
cljs_pdfkit.core.apply_stack_frame.call(null,doc,stack_frame,true);
} else {
}

cljs_pdfkit.core.apply_state.call(null,doc,state_opts);

if(cljs.core.truth_(dash)){
doc.dash(cljs.core.first.call(null,dash),cljs.core.clj__GT_js.call(null,cljs.core.second.call(null,dash)));
} else {
}

if(cljs.core.truth_(translate)){
doc.translate(cljs.core.first.call(null,translate),cljs.core.second.call(null,translate));
} else {
}

if(cljs.core.truth_(rotate)){
doc.rotate(cljs.core.first.call(null,rotate),cljs.core.clj__GT_js.call(null,cljs.core.second.call(null,rotate)));
} else {
}

if(cljs.core.truth_(scale)){
var vec__1796_1797 = ((typeof scale === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,scale], null):scale);
var x_1798 = cljs.core.nth.call(null,vec__1796_1797,(0),null);
var y_1799 = cljs.core.nth.call(null,vec__1796_1797,(1),null);
doc.scale(x_1798,y_1799);
} else {
}

cljs_pdfkit.core.draw_tag.call(null,tag,doc,new_stack,tag_opts,children);

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clip","clip",830998499),null,new cljs.core.Keyword(null,"do","do",46310725),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null).call(null,tag))){
} else {
if(cljs.core.truth_(fill_and_stroke)){
doc.fillAndStroke(cljs.core.first.call(null,fill_and_stroke),cljs.core.second.call(null,fill_and_stroke));
} else {
if(cljs.core.truth_(linear_gradient)){
doc.fill(cljs_pdfkit.core.make_linear_gradient.call(null,doc,linear_gradient));
} else {
if(cljs.core.truth_(radial_gradient)){
doc.fill(cljs_pdfkit.core.make_radial_gradient.call(null,doc,radial_gradient));
} else {
if(cljs.core.truth_(fill)){
if(cljs.core.coll_QMARK_.call(null,fill)){
doc.fill.apply(doc,cljs.core.clj__GT_js.call(null,fill));
} else {
doc.fill(fill);
}
} else {
doc.stroke();

}
}
}
}
}

if(cljs.core.truth_(save_stack_QMARK_)){
return cljs_pdfkit.core.apply_stack_frame.call(null,doc,cljs.core.peek.call(null,stack),false);
} else {
return null;
}
});
if(typeof cljs_pdfkit.core.draw_tag !== 'undefined'){
} else {
cljs_pdfkit.core.draw_tag = (function (){var method_table__1124__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__1125__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__1126__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__1127__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__1128__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs-pdfkit.core","draw-tag"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__1128__auto__,method_table__1124__auto__,prefer_table__1125__auto__,method_cache__1126__auto__,cached_hierarchy__1127__auto__));
})();
}
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"note","note",1426297904),(function (tag__1499__auto__,doc__1500__auto__,stack__1501__auto__,opts__1502__auto__,p__1800){
var vec__1801 = p__1800;
var x = cljs.core.nth.call(null,vec__1801,(0),null);
var y = cljs.core.nth.call(null,vec__1801,(1),null);
var width = cljs.core.nth.call(null,vec__1801,(2),null);
var height = cljs.core.nth.call(null,vec__1801,(3),null);
var contents = cljs.core.nth.call(null,vec__1801,(4),null);
var options = cljs.core.nth.call(null,vec__1801,(5),null);
return doc__1500__auto__.note(x,y,width,height,contents,cljs.core.clj__GT_js.call(null,options));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"link","link",-1769163468),(function (tag__1499__auto__,doc__1500__auto__,stack__1501__auto__,opts__1502__auto__,p__1802){
var vec__1803 = p__1802;
var x = cljs.core.nth.call(null,vec__1803,(0),null);
var y = cljs.core.nth.call(null,vec__1803,(1),null);
var width = cljs.core.nth.call(null,vec__1803,(2),null);
var height = cljs.core.nth.call(null,vec__1803,(3),null);
var url = cljs.core.nth.call(null,vec__1803,(4),null);
var options = cljs.core.nth.call(null,vec__1803,(5),null);
return doc__1500__auto__.link(x,y,width,height,url,cljs.core.clj__GT_js.call(null,options));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"highlight","highlight",-800930873),(function (tag__1499__auto__,doc__1500__auto__,stack__1501__auto__,opts__1502__auto__,p__1804){
var vec__1805 = p__1804;
var x = cljs.core.nth.call(null,vec__1805,(0),null);
var y = cljs.core.nth.call(null,vec__1805,(1),null);
var width = cljs.core.nth.call(null,vec__1805,(2),null);
var height = cljs.core.nth.call(null,vec__1805,(3),null);
var options = cljs.core.nth.call(null,vec__1805,(4),null);
return doc__1500__auto__.highlight(x,y,width,height,cljs.core.clj__GT_js.call(null,options));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"underline","underline",2018066703),(function (tag__1499__auto__,doc__1500__auto__,stack__1501__auto__,opts__1502__auto__,p__1806){
var vec__1807 = p__1806;
var x = cljs.core.nth.call(null,vec__1807,(0),null);
var y = cljs.core.nth.call(null,vec__1807,(1),null);
var width = cljs.core.nth.call(null,vec__1807,(2),null);
var height = cljs.core.nth.call(null,vec__1807,(3),null);
var options = cljs.core.nth.call(null,vec__1807,(4),null);
return doc__1500__auto__.underline(x,y,width,height,cljs.core.clj__GT_js.call(null,options));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"strike","strike",-1173815471),(function (tag__1499__auto__,doc__1500__auto__,stack__1501__auto__,opts__1502__auto__,p__1808){
var vec__1809 = p__1808;
var x = cljs.core.nth.call(null,vec__1809,(0),null);
var y = cljs.core.nth.call(null,vec__1809,(1),null);
var width = cljs.core.nth.call(null,vec__1809,(2),null);
var height = cljs.core.nth.call(null,vec__1809,(3),null);
var options = cljs.core.nth.call(null,vec__1809,(4),null);
return doc__1500__auto__.strike(x,y,width,height,cljs.core.clj__GT_js.call(null,options));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"lineAnnotation","lineAnnotation",-1656470988),(function (tag__1499__auto__,doc__1500__auto__,stack__1501__auto__,opts__1502__auto__,p__1810){
var vec__1811 = p__1810;
var x1 = cljs.core.nth.call(null,vec__1811,(0),null);
var y1 = cljs.core.nth.call(null,vec__1811,(1),null);
var x2 = cljs.core.nth.call(null,vec__1811,(2),null);
var y2 = cljs.core.nth.call(null,vec__1811,(3),null);
var options = cljs.core.nth.call(null,vec__1811,(4),null);
return doc__1500__auto__.lineAnnotation(x1,y1,x2,y2,cljs.core.clj__GT_js.call(null,options));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"rectAnnotation","rectAnnotation",-1860365626),(function (tag__1499__auto__,doc__1500__auto__,stack__1501__auto__,opts__1502__auto__,p__1812){
var vec__1813 = p__1812;
var x = cljs.core.nth.call(null,vec__1813,(0),null);
var y = cljs.core.nth.call(null,vec__1813,(1),null);
var width = cljs.core.nth.call(null,vec__1813,(2),null);
var height = cljs.core.nth.call(null,vec__1813,(3),null);
var options = cljs.core.nth.call(null,vec__1813,(4),null);
return doc__1500__auto__.rectAnnotation(x,y,width,height,cljs.core.clj__GT_js.call(null,options));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"ellipseAnnotation","ellipseAnnotation",-578264907),(function (tag__1499__auto__,doc__1500__auto__,stack__1501__auto__,opts__1502__auto__,p__1814){
var vec__1815 = p__1814;
var x = cljs.core.nth.call(null,vec__1815,(0),null);
var y = cljs.core.nth.call(null,vec__1815,(1),null);
var width = cljs.core.nth.call(null,vec__1815,(2),null);
var height = cljs.core.nth.call(null,vec__1815,(3),null);
var options = cljs.core.nth.call(null,vec__1815,(4),null);
return doc__1500__auto__.ellipseAnnotation(x,y,width,height,cljs.core.clj__GT_js.call(null,options));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"textAnnotation","textAnnotation",-1223996839),(function (tag__1499__auto__,doc__1500__auto__,stack__1501__auto__,opts__1502__auto__,p__1816){
var vec__1817 = p__1816;
var x = cljs.core.nth.call(null,vec__1817,(0),null);
var y = cljs.core.nth.call(null,vec__1817,(1),null);
var width = cljs.core.nth.call(null,vec__1817,(2),null);
var height = cljs.core.nth.call(null,vec__1817,(3),null);
var text = cljs.core.nth.call(null,vec__1817,(4),null);
var options = cljs.core.nth.call(null,vec__1817,(5),null);
return doc__1500__auto__.textAnnotation(x,y,width,height,text,cljs.core.clj__GT_js.call(null,options));
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"image","image",-58725096),(function (tag,doc,stack,opts,p__1818){
var vec__1819 = p__1818;
var source = cljs.core.nth.call(null,vec__1819,(0),null);
var x = cljs.core.nth.call(null,vec__1819,(1),null);
var y = cljs.core.nth.call(null,vec__1819,(2),null);
var opts__$1 = cljs.core.nth.call(null,vec__1819,(3),null);
return doc.image(source,x,y,cljs.core.clj__GT_js.call(null,opts__$1));
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"text","text",-1790561697),(function (tag,doc,stack,p__1820,p__1821){
var map__1822 = p__1820;
var map__1822__$1 = ((((!((map__1822 == null)))?((((map__1822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1822):map__1822);
var opts = map__1822__$1;
var move_down = cljs.core.get.call(null,map__1822__$1,new cljs.core.Keyword(null,"move-down","move-down",-1149356017));
var vec__1823 = p__1821;
var text = cljs.core.nth.call(null,vec__1823,(0),null);
var x = cljs.core.nth.call(null,vec__1823,(1),null);
var y = cljs.core.nth.call(null,vec__1823,(2),null);
if(cljs.core.truth_(x)){
doc.text(text,x,y,cljs_pdfkit.util.camelize_js.call(null,opts));
} else {
doc.text(text,cljs_pdfkit.util.camelize_js.call(null,opts));
}

if(cljs.core.truth_(move_down)){
return doc.moveDown(move_down);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"clip","clip",830998499),(function (tag,doc,stack,opts,p__1825){
var vec__1826 = p__1825;
var vec__1827 = cljs.core.nth.call(null,vec__1826,(0),null);
var clip_tag = cljs.core.nth.call(null,vec__1827,(0),null);
var clip_opts = cljs.core.nth.call(null,vec__1827,(1),null);
var clip_children = cljs.core.nthnext.call(null,vec__1827,(2));
var children = cljs.core.nthnext.call(null,vec__1826,(1));
cljs_pdfkit.core.draw_tag.call(null,clip_tag,doc,stack,opts,clip_children).clip();

var seq__1828 = cljs.core.seq.call(null,children);
var chunk__1829 = null;
var count__1830 = (0);
var i__1831 = (0);
while(true){
if((i__1831 < count__1830)){
var child = cljs.core._nth.call(null,chunk__1829,i__1831);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__1832 = seq__1828;
var G__1833 = chunk__1829;
var G__1834 = count__1830;
var G__1835 = (i__1831 + (1));
seq__1828 = G__1832;
chunk__1829 = G__1833;
count__1830 = G__1834;
i__1831 = G__1835;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__1828);
if(temp__4425__auto__){
var seq__1828__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1828__$1)){
var c__1014__auto__ = cljs.core.chunk_first.call(null,seq__1828__$1);
var G__1836 = cljs.core.chunk_rest.call(null,seq__1828__$1);
var G__1837 = c__1014__auto__;
var G__1838 = cljs.core.count.call(null,c__1014__auto__);
var G__1839 = (0);
seq__1828 = G__1836;
chunk__1829 = G__1837;
count__1830 = G__1838;
i__1831 = G__1839;
continue;
} else {
var child = cljs.core.first.call(null,seq__1828__$1);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__1840 = cljs.core.next.call(null,seq__1828__$1);
var G__1841 = null;
var G__1842 = (0);
var G__1843 = (0);
seq__1828 = G__1840;
chunk__1829 = G__1841;
count__1830 = G__1842;
i__1831 = G__1843;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"do","do",46310725),(function (tag,doc,stack,opts,p__1844){
var vec__1845 = p__1844;
var child = cljs.core.nth.call(null,vec__1845,(0),null);
return eval(child);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (tag,doc,stack,opts,p__1846){
var vec__1847 = p__1846;
var x = cljs.core.nth.call(null,vec__1847,(0),null);
var y = cljs.core.nth.call(null,vec__1847,(1),null);
var width = cljs.core.nth.call(null,vec__1847,(2),null);
var height = cljs.core.nth.call(null,vec__1847,(3),null);
return doc.rect(x,y,width,height);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"rounded-rect","rounded-rect",-1655760547),(function (tag,doc,stack,opts,p__1848){
var vec__1849 = p__1848;
var x = cljs.core.nth.call(null,vec__1849,(0),null);
var y = cljs.core.nth.call(null,vec__1849,(1),null);
var width = cljs.core.nth.call(null,vec__1849,(2),null);
var height = cljs.core.nth.call(null,vec__1849,(3),null);
var corner_radius = cljs.core.nth.call(null,vec__1849,(4),null);
return doc.roundedRect(x,y,width,height,corner_radius);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (tag,doc,stack,opts,p__1850){
var vec__1851 = p__1850;
var x = cljs.core.nth.call(null,vec__1851,(0),null);
var y = cljs.core.nth.call(null,vec__1851,(1),null);
var radius_x = cljs.core.nth.call(null,vec__1851,(2),null);
var radius_y = cljs.core.nth.call(null,vec__1851,(3),null);
return doc.ellipse(x,y,radius_x,radius_y);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"circle","circle",1903212362),(function (tag,doc,stack,opts,p__1852){
var vec__1853 = p__1852;
var x = cljs.core.nth.call(null,vec__1853,(0),null);
var y = cljs.core.nth.call(null,vec__1853,(1),null);
var radius = cljs.core.nth.call(null,vec__1853,(2),null);
return doc.circle(x,y,radius);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"polygon","polygon",837053759),(function (tag,doc,stack,opts,points){
return doc.polygon.apply(doc,cljs.core.clj__GT_js.call(null,points));
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"path","path",-188191168),(function (tag,doc,stack,opts,p__1854){
var vec__1855 = p__1854;
var path = cljs.core.nth.call(null,vec__1855,(0),null);
return doc.path(path);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"style","style",-496642736),(function (tag,doc,stack,opts,children){
var seq__1856 = cljs.core.seq.call(null,children);
var chunk__1857 = null;
var count__1858 = (0);
var i__1859 = (0);
while(true){
if((i__1859 < count__1858)){
var child = cljs.core._nth.call(null,chunk__1857,i__1859);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__1860 = seq__1856;
var G__1861 = chunk__1857;
var G__1862 = count__1858;
var G__1863 = (i__1859 + (1));
seq__1856 = G__1860;
chunk__1857 = G__1861;
count__1858 = G__1862;
i__1859 = G__1863;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__1856);
if(temp__4425__auto__){
var seq__1856__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1856__$1)){
var c__1014__auto__ = cljs.core.chunk_first.call(null,seq__1856__$1);
var G__1864 = cljs.core.chunk_rest.call(null,seq__1856__$1);
var G__1865 = c__1014__auto__;
var G__1866 = cljs.core.count.call(null,c__1014__auto__);
var G__1867 = (0);
seq__1856 = G__1864;
chunk__1857 = G__1865;
count__1858 = G__1866;
i__1859 = G__1867;
continue;
} else {
var child = cljs.core.first.call(null,seq__1856__$1);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__1868 = cljs.core.next.call(null,seq__1856__$1);
var G__1869 = null;
var G__1870 = (0);
var G__1871 = (0);
seq__1856 = G__1868;
chunk__1857 = G__1869;
count__1858 = G__1870;
i__1859 = G__1871;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"line","line",212345235),(function (tag,doc,stack,opts,p__1872){
var vec__1873 = p__1872;
var x1 = cljs.core.nth.call(null,vec__1873,(0),null);
var y1 = cljs.core.nth.call(null,vec__1873,(1),null);
var x2 = cljs.core.nth.call(null,vec__1873,(2),null);
var y2 = cljs.core.nth.call(null,vec__1873,(3),null);
doc.moveTo(x1,y1);

return doc.lineTo(x2,y2);
}));

//# sourceMappingURL=core.js.map