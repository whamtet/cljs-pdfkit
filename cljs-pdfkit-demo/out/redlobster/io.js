// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('redlobster.io');
goog.require('cljs.core');
goog.require('redlobster.promise');
goog.require('redlobster.stream');
goog.require('redlobster.http');
goog.require('cljs.node');
redlobster.io.url = require("url");
redlobster.io.parse_url = (function redlobster$io$parse_url(path){
return redlobster.io.url.parse(path);
});
redlobster.io.http_url_QMARK_ = (function redlobster$io$http_url_QMARK_(path){
return cljs.core._EQ_.call(null,"http:",redlobster.io.parse_url.call(null,path).protocol);
});
redlobster.io.file_url_QMARK_ = (function redlobster$io$file_url_QMARK_(path){
var p = redlobster.io.parse_url.call(null,path);
return ((cljs.core._EQ_.call(null,"file:",p.protocol)) || (cljs.core.not.call(null,p.protocol))) && ((cljs.core._EQ_.call(null,"",p.host)) || (cljs.core.not.call(null,p.host)));
});
redlobster.io.slurp_http = (function redlobster$io$slurp_http(path){
var res = redlobster.http.request.call(null,redlobster.io.url);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null),((function (res){
return (function (){
return redlobster.stream.read_stream.call(null,cljs.core.deref.call(null,res));
});})(res))
);
});
redlobster.io.slurp_file = (function redlobster$io$slurp_file(path){
return redlobster.stream.read_stream.call(null,redlobster.stream.read_file.call(null,path));
});
redlobster.io.slurp = (function redlobster$io$slurp(path){
if(cljs.core.truth_(redlobster.io.http_url_QMARK_.call(null,path))){
return redlobster.io.slurp_http.call(null,path);
} else {
if(cljs.core.truth_(redlobster.io.file_url_QMARK_.call(null,path))){
return redlobster.io.slurp_file.call(null,path);
} else {
return redlobster.promise.promise_fail.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("redlobster.io","unknown-path","redlobster.io/unknown-path",1472127458),path], null));

}
}
});
redlobster.io.binary_slurp_http = (function redlobster$io$binary_slurp_http(path){
var res = redlobster.http.request.call(null,redlobster.io.url);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null),((function (res){
return (function (){
return redlobster.stream.read_binary_stream.call(null,cljs.core.deref.call(null,res));
});})(res))
);
});
redlobster.io.binary_slurp_file = (function redlobster$io$binary_slurp_file(path){
return redlobster.stream.read_binary_stream.call(null,redlobster.stream.read_file.call(null,path));
});
redlobster.io.binary_slurp = (function redlobster$io$binary_slurp(path){
if(cljs.core.truth_(redlobster.io.http_url_QMARK_.call(null,path))){
return redlobster.io.binary_slurp_http.call(null,path);
} else {
if(cljs.core.truth_(redlobster.io.file_url_QMARK_.call(null,path))){
return redlobster.io.binary_slurp_file.call(null,path);
} else {
return redlobster.promise.promise_fail.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("redlobster.io","unknown-path","redlobster.io/unknown-path",1472127458),path], null));

}
}
});
redlobster.io.http_success_QMARK_ = (function redlobster$io$http_success_QMARK_(res){
var status = res.statusCode;
return ((status >= (200))) && ((status < (300)));
});
redlobster.io.spit_http = (function redlobster$io$spit_http(path,data){
var o = redlobster.io.parse_url.call(null,path);
path.method = "PUT";

var promise__1408__auto__ = redlobster.promise.promise.call(null);
var realise__1409__auto__ = ((function (promise__1408__auto__,o){
return (function (promise__1408__auto____$1,value__1410__auto__){
return redlobster.promise.realise.call(null,promise__1408__auto____$1,value__1410__auto__);
});})(promise__1408__auto__,o))
;
var realise_error__1411__auto__ = ((function (promise__1408__auto__,realise__1409__auto__,o){
return (function (promise__1408__auto____$1,value__1410__auto__){
return redlobster.promise.realise_error.call(null,promise__1408__auto____$1,value__1410__auto__);
});})(promise__1408__auto__,realise__1409__auto__,o))
;
var realise = cljs.core.partial.call(null,realise__1409__auto__,promise__1408__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__1411__auto__,promise__1408__auto__);
redlobster.promise.on_realised.call(null,redlobster.http.request.call(null,o,data),((function (promise__1408__auto__,realise__1409__auto__,realise_error__1411__auto__,realise,realise_error,o){
return (function (p1__3037_SHARP_){
if(cljs.core.truth_(redlobster.io.http_success_QMARK_.call(null,p1__3037_SHARP_))){
return realise.call(null,null);
} else {
return realise_error.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("redlobster.http","status-code","redlobster.http/status-code",-1286523828),p1__3037_SHARP_.statusCode], null));
}
});})(promise__1408__auto__,realise__1409__auto__,realise_error__1411__auto__,realise,realise_error,o))
,((function (promise__1408__auto__,realise__1409__auto__,realise_error__1411__auto__,realise,realise_error,o){
return (function (p1__3038_SHARP_){
return realise_error.call(null,p1__3038_SHARP_);
});})(promise__1408__auto__,realise__1409__auto__,realise_error__1411__auto__,realise,realise_error,o))
);

return promise__1408__auto__;
});
redlobster.io.spit_file = (function redlobster$io$spit_file(path,data){
return redlobster.stream.write_stream.call(null,redlobster.stream.write_file.call(null,path),data);
});
redlobster.io.spit = (function redlobster$io$spit(path,data){
if(cljs.core.truth_(redlobster.io.http_url_QMARK_.call(null,path))){
return redlobster.io.spit_http.call(null,path,data);
} else {
if(cljs.core.truth_(redlobster.io.file_url_QMARK_.call(null,path))){
return redlobster.io.spit_file.call(null,path,data);
} else {
return redlobster.promise.promise_fail.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("redlobster.io","unknown-path","redlobster.io/unknown-path",1472127458),path], null));

}
}
});

//# sourceMappingURL=io.js.map