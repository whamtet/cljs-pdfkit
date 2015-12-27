// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.middleware.file');
goog.require('cljs.core');
goog.require('redlobster.io');
goog.require('redlobster.promise');
goog.require('cljs.node');
goog.require('dogfort.util.time');
goog.require('dogfort.util.codec');
goog.require('dogfort.util.mime_type');
dogfort.middleware.file.fs = require("fs");
dogfort.middleware.file.path = require("path");
dogfort.middleware.file.crypto = require("crypto");
dogfort.middleware.file.normalise_path = (function dogfort$middleware$file$normalise_path(file,root){
var file__$1 = dogfort.middleware.file.path.join(root,file);
if(((cljs.core.count.call(null,file__$1) > cljs.core.count.call(null,root))) && (cljs.core._EQ_.call(null,root,file__$1.slice((0),cljs.core.count.call(null,root))))){
return file__$1;
} else {
return null;
}
});
dogfort.middleware.file.stat_file = (function dogfort$middleware$file$stat_file(file,opts){
var promise__1363__auto__ = redlobster.promise.promise.call(null);
var realise__1364__auto__ = ((function (promise__1363__auto__){
return (function (promise__1363__auto____$1,value__1365__auto__){
return redlobster.promise.realise.call(null,promise__1363__auto____$1,value__1365__auto__);
});})(promise__1363__auto__))
;
var realise_error__1366__auto__ = ((function (promise__1363__auto__,realise__1364__auto__){
return (function (promise__1363__auto____$1,value__1365__auto__){
return redlobster.promise.realise_error.call(null,promise__1363__auto____$1,value__1365__auto__);
});})(promise__1363__auto__,realise__1364__auto__))
;
var realise = cljs.core.partial.call(null,realise__1364__auto__,promise__1363__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__1366__auto__,promise__1363__auto__);
var temp__4423__auto___1898 = dogfort.middleware.file.normalise_path.call(null,file,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__4423__auto___1898)){
var file_1899__$1 = temp__4423__auto___1898;
dogfort.middleware.file.fs.stat(file_1899__$1,((function (file_1899__$1,temp__4423__auto___1898,promise__1363__auto__,realise__1364__auto__,realise_error__1366__auto__,realise,realise_error){
return (function (err,stats){
if(cljs.core.truth_(err)){
return realise_error.call(null,err);
} else {
(stats["path"] = file_1899__$1);

return realise.call(null,stats);
}
});})(file_1899__$1,temp__4423__auto___1898,promise__1363__auto__,realise__1364__auto__,realise_error__1366__auto__,realise,realise_error))
);
} else {
realise_error.call(null,null);
}

return promise__1363__auto__;
});
dogfort.middleware.file.etag = (function dogfort$middleware$file$etag(stats){
return dogfort.middleware.file.crypto.createHash("md5").update([cljs.core.str(stats.ino),cljs.core.str("/"),cljs.core.str(stats.mtime),cljs.core.str("/"),cljs.core.str(stats.size)].join('')).digest("hex");
});
dogfort.middleware.file.last_modified = (function dogfort$middleware$file$last_modified(stats){
return dogfort.util.time.rfc822_date.call(null,stats.mtime);
});
dogfort.middleware.file.expand_dir = (function dogfort$middleware$file$expand_dir(path){
try{return dogfort.middleware.file.fs.realpathSync(path);
}catch (e1901){var e = e1901;
throw [cljs.core.str("Directory does not exist: "),cljs.core.str(path)].join('');
}});
dogfort.middleware.file.file_response = (function dogfort$middleware$file$file_response(stats){
var file = stats.path;
var s = redlobster.io.binary_slurp.call(null,file);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),((function (s,file){
return (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),dogfort.util.mime_type.ext_mime_type.call(null,file),new cljs.core.Keyword(null,"content-length","content-length",441319507),stats.size,new cljs.core.Keyword(null,"last-modified","last-modified",1593411791),dogfort.middleware.file.last_modified.call(null,stats),new cljs.core.Keyword(null,"etag","etag",-329255476),dogfort.middleware.file.etag.call(null,stats)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.deref.call(null,s)], null);
});})(s,file))
);
});
dogfort.middleware.file.wrap_file = (function dogfort$middleware$file$wrap_file(){
var args__1276__auto__ = [];
var len__1269__auto___1908 = arguments.length;
var i__1270__auto___1909 = (0);
while(true){
if((i__1270__auto___1909 < len__1269__auto___1908)){
args__1276__auto__.push((arguments[i__1270__auto___1909]));

var G__1910 = (i__1270__auto___1909 + (1));
i__1270__auto___1909 = G__1910;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((2) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((2)),(0))):null);
return dogfort.middleware.file.wrap_file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__1277__auto__);
});

dogfort.middleware.file.wrap_file.cljs$core$IFn$_invoke$arity$variadic = (function (app,root_path,p__1906){
var vec__1907 = p__1906;
var opts = cljs.core.nth.call(null,vec__1907,(0),null);
var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"root","root",-448657453),dogfort.middleware.file.expand_dir.call(null,root_path),new cljs.core.Keyword(null,"index-files?","index-files?",1158816198),true,new cljs.core.Keyword(null,"allow-symlinks?","allow-symlinks?",885237804),false], null),opts);
return ((function (opts__$1,vec__1907,opts){
return (function (req){
if(!((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(req))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(req))))){
return app.call(null,req);
} else {
var file = dogfort.util.codec.url_decode.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(req)).slice((1));
var stat_p = dogfort.middleware.file.stat_file.call(null,file,opts__$1);
var promise__1372__auto__ = redlobster.promise.promise.call(null);
var realise__1373__auto__ = ((function (promise__1372__auto__,file,stat_p,opts__$1,vec__1907,opts){
return (function (promise__1372__auto____$1,value__1374__auto__){
return redlobster.promise.realise.call(null,promise__1372__auto____$1,value__1374__auto__);
});})(promise__1372__auto__,file,stat_p,opts__$1,vec__1907,opts))
;
var realise_error__1375__auto__ = ((function (promise__1372__auto__,realise__1373__auto__,file,stat_p,opts__$1,vec__1907,opts){
return (function (promise__1372__auto____$1,value__1374__auto__){
return redlobster.promise.realise_error.call(null,promise__1372__auto____$1,value__1374__auto__);
});})(promise__1372__auto__,realise__1373__auto__,file,stat_p,opts__$1,vec__1907,opts))
;
var realise = cljs.core.partial.call(null,realise__1373__auto__,promise__1372__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__1375__auto__,promise__1372__auto__);
redlobster.promise.on_realised.call(null,stat_p,((function (promise__1372__auto__,realise__1373__auto__,realise_error__1375__auto__,realise,realise_error,file,stat_p,opts__$1,vec__1907,opts){
return (function (p1__1902_SHARP_){
return realise.call(null,dogfort.middleware.file.file_response.call(null,p1__1902_SHARP_));
});})(promise__1372__auto__,realise__1373__auto__,realise_error__1375__auto__,realise,realise_error,file,stat_p,opts__$1,vec__1907,opts))
,((function (promise__1372__auto__,realise__1373__auto__,realise_error__1375__auto__,realise,realise_error,file,stat_p,opts__$1,vec__1907,opts){
return (function (){
return realise.call(null,app.call(null,req));
});})(promise__1372__auto__,realise__1373__auto__,realise_error__1375__auto__,realise,realise_error,file,stat_p,opts__$1,vec__1907,opts))
);

return promise__1372__auto__;
}
});
;})(opts__$1,vec__1907,opts))
});

dogfort.middleware.file.wrap_file.cljs$lang$maxFixedArity = (2);

dogfort.middleware.file.wrap_file.cljs$lang$applyTo = (function (seq1903){
var G__1904 = cljs.core.first.call(null,seq1903);
var seq1903__$1 = cljs.core.next.call(null,seq1903);
var G__1905 = cljs.core.first.call(null,seq1903__$1);
var seq1903__$2 = cljs.core.next.call(null,seq1903__$1);
return dogfort.middleware.file.wrap_file.cljs$core$IFn$_invoke$arity$variadic(G__1904,G__1905,seq1903__$2);
});

//# sourceMappingURL=file.js.map