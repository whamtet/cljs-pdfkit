// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.http');
goog.require('cljs.core');
goog.require('redlobster.promise');
goog.require('cljs.node');
goog.require('dogfort.util.response');
goog.require('redlobster.stream');
goog.require('redlobster.events');
dogfort.http.http = require("http");
dogfort.http.url = require("url");
dogfort.http.Stream = require("stream");
dogfort.http.ws = require("ws");

dogfort.http.IHTTPResponseWriter = {};

/**
 * Write data to a http.ServerResponse
 */
dogfort.http._write_response = (function dogfort$http$_write_response(data,res){
if((!((data == null))) && (!((data.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 == null)))){
return data.dogfort$http$IHTTPResponseWriter$_write_response$arity$2(data,res);
} else {
var x__866__auto__ = (((data == null))?null:data);
var m__867__auto__ = (dogfort.http._write_response[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,data,res);
} else {
var m__867__auto____$1 = (dogfort.http._write_response["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,data,res);
} else {
throw cljs.core.missing_protocol.call(null,"IHTTPResponseWriter.-write-response",data);
}
}
}
});

dogfort.http.send_result = (function dogfort$http$send_result(res,ring_result){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"keep-alive","keep-alive",-47515827).cljs$core$IFn$_invoke$arity$1(ring_result))){
if(cljs.core.truth_(ring_result)){
var map__2476 = ring_result;
var map__2476__$1 = ((((!((map__2476 == null)))?((((map__2476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2476):map__2476);
var status = cljs.core.get.call(null,map__2476__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var headers = cljs.core.get.call(null,map__2476__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__2476__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var end_stream_QMARK_ = cljs.core.get.call(null,map__2476__$1,new cljs.core.Keyword(null,"end-stream?","end-stream?",-166958884));
res.statusCode = status;

var seq__2478_2484 = cljs.core.seq.call(null,headers);
var chunk__2479_2485 = null;
var count__2480_2486 = (0);
var i__2481_2487 = (0);
while(true){
if((i__2481_2487 < count__2480_2486)){
var vec__2482_2488 = cljs.core._nth.call(null,chunk__2479_2485,i__2481_2487);
var header_2489 = cljs.core.nth.call(null,vec__2482_2488,(0),null);
var value_2490 = cljs.core.nth.call(null,vec__2482_2488,(1),null);
res.setHeader(cljs.core.clj__GT_js.call(null,header_2489),cljs.core.clj__GT_js.call(null,value_2490));

var G__2491 = seq__2478_2484;
var G__2492 = chunk__2479_2485;
var G__2493 = count__2480_2486;
var G__2494 = (i__2481_2487 + (1));
seq__2478_2484 = G__2491;
chunk__2479_2485 = G__2492;
count__2480_2486 = G__2493;
i__2481_2487 = G__2494;
continue;
} else {
var temp__4425__auto___2495 = cljs.core.seq.call(null,seq__2478_2484);
if(temp__4425__auto___2495){
var seq__2478_2496__$1 = temp__4425__auto___2495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2478_2496__$1)){
var c__1014__auto___2497 = cljs.core.chunk_first.call(null,seq__2478_2496__$1);
var G__2498 = cljs.core.chunk_rest.call(null,seq__2478_2496__$1);
var G__2499 = c__1014__auto___2497;
var G__2500 = cljs.core.count.call(null,c__1014__auto___2497);
var G__2501 = (0);
seq__2478_2484 = G__2498;
chunk__2479_2485 = G__2499;
count__2480_2486 = G__2500;
i__2481_2487 = G__2501;
continue;
} else {
var vec__2483_2502 = cljs.core.first.call(null,seq__2478_2496__$1);
var header_2503 = cljs.core.nth.call(null,vec__2483_2502,(0),null);
var value_2504 = cljs.core.nth.call(null,vec__2483_2502,(1),null);
res.setHeader(cljs.core.clj__GT_js.call(null,header_2503),cljs.core.clj__GT_js.call(null,value_2504));

var G__2505 = cljs.core.next.call(null,seq__2478_2496__$1);
var G__2506 = null;
var G__2507 = (0);
var G__2508 = (0);
seq__2478_2484 = G__2505;
chunk__2479_2485 = G__2506;
count__2480_2486 = G__2507;
i__2481_2487 = G__2508;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(dogfort.http._write_response.call(null,body,res))){
res.end();
} else {
}

if(cljs.core.truth_((function (){var and__218__auto__ = redlobster.stream.stream_QMARK_.call(null,body);
if(cljs.core.truth_(and__218__auto__)){
return end_stream_QMARK_;
} else {
return and__218__auto__;
}
})())){
return body.end();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
dogfort.http.send_error_page = (function dogfort$http$send_error_page(res,status,err){
cljs.core.println.call(null,"error page");

return dogfort.util.response.default_response.call(null,(500));
});
(dogfort.http.IHTTPResponseWriter["null"] = true);

(dogfort.http._write_response["null"] = (function (data,res){
return true;
}));

(dogfort.http.IHTTPResponseWriter["string"] = true);

(dogfort.http._write_response["string"] = (function (data,res){
res.write(data);

return true;
}));

cljs.core.PersistentVector.prototype.dogfort$http$IHTTPResponseWriter$ = true;

cljs.core.PersistentVector.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
var seq__2510_2522 = cljs.core.seq.call(null,data__$1);
var chunk__2511_2523 = null;
var count__2512_2524 = (0);
var i__2513_2525 = (0);
while(true){
if((i__2513_2525 < count__2512_2524)){
var i_2526 = cljs.core._nth.call(null,chunk__2511_2523,i__2513_2525);
dogfort.http._write_response.call(null,i_2526,res);

var G__2527 = seq__2510_2522;
var G__2528 = chunk__2511_2523;
var G__2529 = count__2512_2524;
var G__2530 = (i__2513_2525 + (1));
seq__2510_2522 = G__2527;
chunk__2511_2523 = G__2528;
count__2512_2524 = G__2529;
i__2513_2525 = G__2530;
continue;
} else {
var temp__4425__auto___2531 = cljs.core.seq.call(null,seq__2510_2522);
if(temp__4425__auto___2531){
var seq__2510_2532__$1 = temp__4425__auto___2531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2510_2532__$1)){
var c__1014__auto___2533 = cljs.core.chunk_first.call(null,seq__2510_2532__$1);
var G__2534 = cljs.core.chunk_rest.call(null,seq__2510_2532__$1);
var G__2535 = c__1014__auto___2533;
var G__2536 = cljs.core.count.call(null,c__1014__auto___2533);
var G__2537 = (0);
seq__2510_2522 = G__2534;
chunk__2511_2523 = G__2535;
count__2512_2524 = G__2536;
i__2513_2525 = G__2537;
continue;
} else {
var i_2538 = cljs.core.first.call(null,seq__2510_2532__$1);
dogfort.http._write_response.call(null,i_2538,res);

var G__2539 = cljs.core.next.call(null,seq__2510_2532__$1);
var G__2540 = null;
var G__2541 = (0);
var G__2542 = (0);
seq__2510_2522 = G__2539;
chunk__2511_2523 = G__2540;
count__2512_2524 = G__2541;
i__2513_2525 = G__2542;
continue;
}
} else {
}
}
break;
}

return true;
});

cljs.core.List.prototype.dogfort$http$IHTTPResponseWriter$ = true;

cljs.core.List.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
var seq__2514_2543 = cljs.core.seq.call(null,data__$1);
var chunk__2515_2544 = null;
var count__2516_2545 = (0);
var i__2517_2546 = (0);
while(true){
if((i__2517_2546 < count__2516_2545)){
var i_2547 = cljs.core._nth.call(null,chunk__2515_2544,i__2517_2546);
dogfort.http._write_response.call(null,i_2547,res);

var G__2548 = seq__2514_2543;
var G__2549 = chunk__2515_2544;
var G__2550 = count__2516_2545;
var G__2551 = (i__2517_2546 + (1));
seq__2514_2543 = G__2548;
chunk__2515_2544 = G__2549;
count__2516_2545 = G__2550;
i__2517_2546 = G__2551;
continue;
} else {
var temp__4425__auto___2552 = cljs.core.seq.call(null,seq__2514_2543);
if(temp__4425__auto___2552){
var seq__2514_2553__$1 = temp__4425__auto___2552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2514_2553__$1)){
var c__1014__auto___2554 = cljs.core.chunk_first.call(null,seq__2514_2553__$1);
var G__2555 = cljs.core.chunk_rest.call(null,seq__2514_2553__$1);
var G__2556 = c__1014__auto___2554;
var G__2557 = cljs.core.count.call(null,c__1014__auto___2554);
var G__2558 = (0);
seq__2514_2543 = G__2555;
chunk__2515_2544 = G__2556;
count__2516_2545 = G__2557;
i__2517_2546 = G__2558;
continue;
} else {
var i_2559 = cljs.core.first.call(null,seq__2514_2553__$1);
dogfort.http._write_response.call(null,i_2559,res);

var G__2560 = cljs.core.next.call(null,seq__2514_2553__$1);
var G__2561 = null;
var G__2562 = (0);
var G__2563 = (0);
seq__2514_2543 = G__2560;
chunk__2515_2544 = G__2561;
count__2516_2545 = G__2562;
i__2517_2546 = G__2563;
continue;
}
} else {
}
}
break;
}

return true;
});

cljs.core.LazySeq.prototype.dogfort$http$IHTTPResponseWriter$ = true;

cljs.core.LazySeq.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
var seq__2518_2564 = cljs.core.seq.call(null,data__$1);
var chunk__2519_2565 = null;
var count__2520_2566 = (0);
var i__2521_2567 = (0);
while(true){
if((i__2521_2567 < count__2520_2566)){
var i_2568 = cljs.core._nth.call(null,chunk__2519_2565,i__2521_2567);
dogfort.http._write_response.call(null,i_2568,res);

var G__2569 = seq__2518_2564;
var G__2570 = chunk__2519_2565;
var G__2571 = count__2520_2566;
var G__2572 = (i__2521_2567 + (1));
seq__2518_2564 = G__2569;
chunk__2519_2565 = G__2570;
count__2520_2566 = G__2571;
i__2521_2567 = G__2572;
continue;
} else {
var temp__4425__auto___2573 = cljs.core.seq.call(null,seq__2518_2564);
if(temp__4425__auto___2573){
var seq__2518_2574__$1 = temp__4425__auto___2573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2518_2574__$1)){
var c__1014__auto___2575 = cljs.core.chunk_first.call(null,seq__2518_2574__$1);
var G__2576 = cljs.core.chunk_rest.call(null,seq__2518_2574__$1);
var G__2577 = c__1014__auto___2575;
var G__2578 = cljs.core.count.call(null,c__1014__auto___2575);
var G__2579 = (0);
seq__2518_2564 = G__2576;
chunk__2519_2565 = G__2577;
count__2520_2566 = G__2578;
i__2521_2567 = G__2579;
continue;
} else {
var i_2580 = cljs.core.first.call(null,seq__2518_2574__$1);
dogfort.http._write_response.call(null,i_2580,res);

var G__2581 = cljs.core.next.call(null,seq__2518_2574__$1);
var G__2582 = null;
var G__2583 = (0);
var G__2584 = (0);
seq__2518_2564 = G__2581;
chunk__2519_2565 = G__2582;
count__2520_2566 = G__2583;
i__2521_2567 = G__2584;
continue;
}
} else {
}
}
break;
}

return true;
});

Buffer.prototype.dogfort$http$IHTTPResponseWriter$ = true;

Buffer.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
res.write(data__$1);

return true;
});

dogfort.http.Stream.prototype.dogfort$http$IHTTPResponseWriter$ = true;

dogfort.http.Stream.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
redlobster.events.on.call(null,data__$1,new cljs.core.Keyword(null,"error","error",-978969032),((function (data__$1){
return (function (p1__2509_SHARP_){
return dogfort.http.send_error_page.call(null,res,(500),p1__2509_SHARP_);
});})(data__$1))
);

data__$1.pipe(res);

return false;
});
dogfort.http.build_listener = (function dogfort$http$build_listener(handler,options){
return (function (req,res){
var url = dogfort.http.url.parse(req.url);
var uri = url.pathname;
var query = url.search;
var query__$1 = (cljs.core.truth_(query)?query.substring((1)):null);
var headers = cljs.core.js__GT_clj.call(null,req.headers);
var conn = req.connection;
var address = cljs.core.js__GT_clj.call(null,conn.address());
var peer_cert_fn = conn.getPeerCertificate;
var ring_req = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"ssl-client-cert","ssl-client-cert",661784516),new cljs.core.Keyword(null,"remote-addr","remote-addr",815723977),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"server-port","server-port",663745648),new cljs.core.Keyword(null,"content-length","content-length",441319507),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"character-encoding","character-encoding",-1946080777),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"request-method","request-method",1764796830)],[res,(cljs.core.truth_(peer_cert_fn)?peer_cert_fn.call(null):null),conn.remoteAddress,headers,address.call(null,"port"),headers.call(null,"content-length"),headers.call(null,"content-type"),null,uri,address.call(null,"address"),query__$1,req,"http",cljs.core.keyword.call(null,req.method.toLowerCase())]);
var result = handler.call(null,ring_req);
return redlobster.promise.on_realised.call(null,result,((function (url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result){
return (function (p1__2585_SHARP_){
return dogfort.http.send_result.call(null,res,p1__2585_SHARP_);
});})(url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result))
,((function (url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result){
return (function (p1__2586_SHARP_){
return dogfort.http.send_error_page.call(null,res,(500),p1__2586_SHARP_);
});})(url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result))
);
});
});
dogfort.http.ws_handler = (function dogfort$http$ws_handler(handler,websocket){
var upgrade_req = websocket.upgradeReq;
var url = dogfort.http.url.parse(upgrade_req.url);
var uri = url.pathname;
var query = url.search;
var query__$1 = (cljs.core.truth_(query)?query.substring((1)):null);
var headers = cljs.core.js__GT_clj.call(null,upgrade_req.headers);
var conn = upgrade_req.connection;
var address = cljs.core.js__GT_clj.call(null,conn.address());
return handler.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"server-port","server-port",663745648),address.call(null,"port"),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),address.call(null,"address"),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"query-string","query-string",-1018845061),query__$1,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket,new cljs.core.Keyword(null,"websocket?","websocket?",1552493139),true,new cljs.core.Keyword(null,"request-method","request-method",1764796830),new cljs.core.Keyword(null,"get","get",1683182755)], null));
});
dogfort.http.run_http = (function dogfort$http$run_http(handler,options){
var server = dogfort.http.http.createServer(dogfort.http.build_listener.call(null,handler,options));
var wss = (new dogfort.http.ws.Server({"server": server}));
wss.on("connection",((function (server,wss){
return (function (p1__2587_SHARP_){
return dogfort.http.ws_handler.call(null,handler,p1__2587_SHARP_);
});})(server,wss))
);

return server.listen(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(options));
});

//# sourceMappingURL=http.js.map