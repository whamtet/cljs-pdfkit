// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('redlobster.promise');
goog.require('cljs.core');
goog.require('redlobster.events');

redlobster.promise.IPromise = {};

redlobster.promise.realised_QMARK_ = (function redlobster$promise$realised_QMARK_(this$){
if((!((this$ == null))) && (!((this$.redlobster$promise$IPromise$realised_QMARK_$arity$1 == null)))){
return this$.redlobster$promise$IPromise$realised_QMARK_$arity$1(this$);
} else {
var x__866__auto__ = (((this$ == null))?null:this$);
var m__867__auto__ = (redlobster.promise.realised_QMARK_[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,this$);
} else {
var m__867__auto____$1 = (redlobster.promise.realised_QMARK_["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.realised?",this$);
}
}
}
});

redlobster.promise.failed_QMARK_ = (function redlobster$promise$failed_QMARK_(this$){
if((!((this$ == null))) && (!((this$.redlobster$promise$IPromise$failed_QMARK_$arity$1 == null)))){
return this$.redlobster$promise$IPromise$failed_QMARK_$arity$1(this$);
} else {
var x__866__auto__ = (((this$ == null))?null:this$);
var m__867__auto__ = (redlobster.promise.failed_QMARK_[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,this$);
} else {
var m__867__auto____$1 = (redlobster.promise.failed_QMARK_["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.failed?",this$);
}
}
}
});

redlobster.promise.realise = (function redlobster$promise$realise(this$,value){
if((!((this$ == null))) && (!((this$.redlobster$promise$IPromise$realise$arity$2 == null)))){
return this$.redlobster$promise$IPromise$realise$arity$2(this$,value);
} else {
var x__866__auto__ = (((this$ == null))?null:this$);
var m__867__auto__ = (redlobster.promise.realise[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,this$,value);
} else {
var m__867__auto____$1 = (redlobster.promise.realise["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.realise",this$);
}
}
}
});

redlobster.promise.realise_error = (function redlobster$promise$realise_error(this$,value){
if((!((this$ == null))) && (!((this$.redlobster$promise$IPromise$realise_error$arity$2 == null)))){
return this$.redlobster$promise$IPromise$realise_error$arity$2(this$,value);
} else {
var x__866__auto__ = (((this$ == null))?null:this$);
var m__867__auto__ = (redlobster.promise.realise_error[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,this$,value);
} else {
var m__867__auto____$1 = (redlobster.promise.realise_error["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.realise-error",this$);
}
}
}
});

redlobster.promise.on_realised = (function redlobster$promise$on_realised(this$,on_success,on_error){
if((!((this$ == null))) && (!((this$.redlobster$promise$IPromise$on_realised$arity$3 == null)))){
return this$.redlobster$promise$IPromise$on_realised$arity$3(this$,on_success,on_error);
} else {
var x__866__auto__ = (((this$ == null))?null:this$);
var m__867__auto__ = (redlobster.promise.on_realised[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,this$,on_success,on_error);
} else {
var m__867__auto____$1 = (redlobster.promise.on_realised["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,this$,on_success,on_error);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.on-realised",this$);
}
}
}
});

redlobster.promise.promise_QMARK_ = (function redlobster$promise$promise_QMARK_(v){
if(!((v == null))){
if((false) || (v.redlobster$promise$IPromise$)){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,redlobster.promise.IPromise,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,redlobster.promise.IPromise,v);
}
});

/**
* @constructor
*/
redlobster.promise.Promise = (function (ee){
this.ee = ee;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redlobster.promise.Promise.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var realised = self__.ee.__realised;
var value = self__.ee.__value;
if(cljs.core.not.call(null,realised)){
return new cljs.core.Keyword("redlobster.promise","not-realised","redlobster.promise/not-realised",332544846);
} else {
return value;

}
});

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$ = true;

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$realised_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.ee.__realised == null)){
return false;
} else {
return true;
}
});

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$failed_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var and__218__auto__ = redlobster.promise.realised_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__218__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),self__.ee.__realised);
} else {
return and__218__auto__;
}
});

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$realise$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(redlobster.promise.realised_QMARK_.call(null,this$__$1))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("redlobster.promise","timeout","redlobster.promise/timeout",-1857733661),cljs.core.deref.call(null,this$__$1))){
return null;
} else {
throw new cljs.core.Keyword("redlobster.promise","already-realised","redlobster.promise/already-realised",-1081920201);
}
} else {
if(cljs.core.truth_(redlobster.promise.promise_QMARK_.call(null,value))){
return redlobster.promise.on_realised.call(null,value,((function (this$__$1){
return (function (p1__2416_SHARP_){
return redlobster.promise.realise.call(null,this$__$1,p1__2416_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__2417_SHARP_){
return redlobster.promise.realise_error.call(null,this$__$1,p1__2417_SHARP_);
});})(this$__$1))
);
} else {
self__.ee.__realised = new cljs.core.Keyword(null,"success","success",1890645906);

self__.ee.__value = value;

return redlobster.events.emit.call(null,self__.ee,new cljs.core.Keyword(null,"realise-success","realise-success",-1942827085),value);
}
}
});

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$realise_error$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(redlobster.promise.realised_QMARK_.call(null,this$__$1))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("redlobster.promise","timeout","redlobster.promise/timeout",-1857733661),cljs.core.deref.call(null,this$__$1))){
return null;
} else {
throw new cljs.core.Keyword("redlobster.promise","already-realised","redlobster.promise/already-realised",-1081920201);
}
} else {
if(cljs.core.truth_(redlobster.promise.promise_QMARK_.call(null,value))){
return redlobster.promise.on_realised.call(null,value,((function (this$__$1){
return (function (p1__2418_SHARP_){
return redlobster.promise.realise.call(null,this$__$1,p1__2418_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__2419_SHARP_){
return redlobster.promise.realise_error.call(null,this$__$1,p1__2419_SHARP_);
});})(this$__$1))
);
} else {
self__.ee.__realised = new cljs.core.Keyword(null,"error","error",-978969032);

self__.ee.__value = value;

return redlobster.events.emit.call(null,self__.ee,new cljs.core.Keyword(null,"realise-error","realise-error",402975089),value);
}
}
});

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$on_realised$arity$3 = (function (this$,on_success,on_error){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(redlobster.promise.realised_QMARK_.call(null,this$__$1))){
if(cljs.core.truth_(redlobster.promise.failed_QMARK_.call(null,this$__$1))){
return on_error.call(null,cljs.core.deref.call(null,this$__$1));
} else {
return on_success.call(null,cljs.core.deref.call(null,this$__$1));
}
} else {
var G__2420 = self__.ee;
redlobster.events.on.call(null,G__2420,new cljs.core.Keyword(null,"realise-success","realise-success",-1942827085),on_success);

redlobster.events.on.call(null,G__2420,new cljs.core.Keyword(null,"realise-error","realise-error",402975089),on_error);

return G__2420;
}
});

redlobster.promise.Promise.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ee","ee",-2011118369,null)], null);
});

redlobster.promise.Promise.cljs$lang$type = true;

redlobster.promise.Promise.cljs$lang$ctorStr = "redlobster.promise/Promise";

redlobster.promise.Promise.cljs$lang$ctorPrWriter = (function (this__809__auto__,writer__810__auto__,opt__811__auto__){
return cljs.core._write.call(null,writer__810__auto__,"redlobster.promise/Promise");
});

redlobster.promise.__GT_Promise = (function redlobster$promise$__GT_Promise(ee){
return (new redlobster.promise.Promise(ee));
});

redlobster.promise.promise = (function redlobster$promise$promise(){
var args2421 = [];
var len__1269__auto___2425 = arguments.length;
var i__1270__auto___2426 = (0);
while(true){
if((i__1270__auto___2426 < len__1269__auto___2425)){
args2421.push((arguments[i__1270__auto___2426]));

var G__2427 = (i__1270__auto___2426 + (1));
i__1270__auto___2426 = G__2427;
continue;
} else {
}
break;
}

var G__2423 = args2421.length;
switch (G__2423) {
case 0:
return redlobster.promise.promise.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return redlobster.promise.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2421.length)].join('')));

}
});

redlobster.promise.promise.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new redlobster.promise.Promise((function (){var ee = redlobster.events.event_emitter.call(null);
ee.__realised = null;

ee.__value = null;

return ee;
})()));
});

redlobster.promise.promise.cljs$core$IFn$_invoke$arity$1 = (function (success_value){
var G__2424 = redlobster.promise.promise.call(null);
redlobster.promise.realise.call(null,G__2424,success_value);

return G__2424;
});

redlobster.promise.promise.cljs$lang$maxFixedArity = 1;
redlobster.promise.promise_fail = (function redlobster$promise$promise_fail(error_value){
var G__2430 = redlobster.promise.promise.call(null);
redlobster.promise.realise_error.call(null,G__2430,error_value);

return G__2430;
});
/**
 * Takes a list of promises, and creates a promise that will realise as
 * `:redlobster.promise/realised` when each promise has successfully realised,
 * or if one or more of the promises fail, fail with the value of the first
 * failing promise.
 * 
 * If the first argument is the keyword `:all`, then instead of failing when
 * one of the promises fails, it will just wait for all promises to realise
 * and realise itself with `:redlobster.promise/realised` regardless of the
 * success or failure of any promise.
 */
redlobster.promise.await = (function redlobster$promise$await(){
var args__1276__auto__ = [];
var len__1269__auto___2436 = arguments.length;
var i__1270__auto___2437 = (0);
while(true){
if((i__1270__auto___2437 < len__1269__auto___2436)){
args__1276__auto__.push((arguments[i__1270__auto___2437]));

var G__2438 = (i__1270__auto___2437 + (1));
i__1270__auto___2437 = G__2438;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((0) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((0)),(0))):null);
return redlobster.promise.await.cljs$core$IFn$_invoke$arity$variadic(argseq__1277__auto__);
});

redlobster.promise.await.cljs$core$IFn$_invoke$arity$variadic = (function (promises){
var await_all = cljs.core._EQ_.call(null,cljs.core.first.call(null,promises),new cljs.core.Keyword(null,"all","all",892129742));
var promises__$1 = ((await_all)?cljs.core.rest.call(null,promises):promises);
var p = redlobster.promise.promise.call(null);
var total = cljs.core.count.call(null,promises__$1);
var count = cljs.core.atom.call(null,(0));
var done = cljs.core.atom.call(null,false);
var seq__2432_2439 = cljs.core.seq.call(null,promises__$1);
var chunk__2433_2440 = null;
var count__2434_2441 = (0);
var i__2435_2442 = (0);
while(true){
if((i__2435_2442 < count__2434_2441)){
var subp_2443 = cljs.core._nth.call(null,chunk__2433_2440,i__2435_2442);
var succ_2444 = ((function (seq__2432_2439,chunk__2433_2440,count__2434_2441,i__2435_2442,subp_2443,await_all,promises__$1,p,total,count,done){
return (function (_){
if(cljs.core.not.call(null,cljs.core.deref.call(null,done))){
cljs.core.swap_BANG_.call(null,count,cljs.core.inc);

if(cljs.core._EQ_.call(null,total,cljs.core.deref.call(null,count))){
cljs.core.reset_BANG_.call(null,done,true);

return redlobster.promise.realise.call(null,p,new cljs.core.Keyword("redlobster.promise","realised","redlobster.promise/realised",-398894750));
} else {
return null;
}
} else {
return null;
}
});})(seq__2432_2439,chunk__2433_2440,count__2434_2441,i__2435_2442,subp_2443,await_all,promises__$1,p,total,count,done))
;
var fail_2445 = ((await_all)?succ_2444:((function (seq__2432_2439,chunk__2433_2440,count__2434_2441,i__2435_2442,succ_2444,subp_2443,await_all,promises__$1,p,total,count,done){
return (function (err){
if(cljs.core.not.call(null,cljs.core.deref.call(null,done))){
cljs.core.reset_BANG_.call(null,done,true);

return redlobster.promise.realise_error.call(null,p,err);
} else {
return null;
}
});})(seq__2432_2439,chunk__2433_2440,count__2434_2441,i__2435_2442,succ_2444,subp_2443,await_all,promises__$1,p,total,count,done))
);
redlobster.promise.on_realised.call(null,subp_2443,succ_2444,fail_2445);

var G__2446 = seq__2432_2439;
var G__2447 = chunk__2433_2440;
var G__2448 = count__2434_2441;
var G__2449 = (i__2435_2442 + (1));
seq__2432_2439 = G__2446;
chunk__2433_2440 = G__2447;
count__2434_2441 = G__2448;
i__2435_2442 = G__2449;
continue;
} else {
var temp__4425__auto___2450 = cljs.core.seq.call(null,seq__2432_2439);
if(temp__4425__auto___2450){
var seq__2432_2451__$1 = temp__4425__auto___2450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2432_2451__$1)){
var c__1014__auto___2452 = cljs.core.chunk_first.call(null,seq__2432_2451__$1);
var G__2453 = cljs.core.chunk_rest.call(null,seq__2432_2451__$1);
var G__2454 = c__1014__auto___2452;
var G__2455 = cljs.core.count.call(null,c__1014__auto___2452);
var G__2456 = (0);
seq__2432_2439 = G__2453;
chunk__2433_2440 = G__2454;
count__2434_2441 = G__2455;
i__2435_2442 = G__2456;
continue;
} else {
var subp_2457 = cljs.core.first.call(null,seq__2432_2451__$1);
var succ_2458 = ((function (seq__2432_2439,chunk__2433_2440,count__2434_2441,i__2435_2442,subp_2457,seq__2432_2451__$1,temp__4425__auto___2450,await_all,promises__$1,p,total,count,done){
return (function (_){
if(cljs.core.not.call(null,cljs.core.deref.call(null,done))){
cljs.core.swap_BANG_.call(null,count,cljs.core.inc);

if(cljs.core._EQ_.call(null,total,cljs.core.deref.call(null,count))){
cljs.core.reset_BANG_.call(null,done,true);

return redlobster.promise.realise.call(null,p,new cljs.core.Keyword("redlobster.promise","realised","redlobster.promise/realised",-398894750));
} else {
return null;
}
} else {
return null;
}
});})(seq__2432_2439,chunk__2433_2440,count__2434_2441,i__2435_2442,subp_2457,seq__2432_2451__$1,temp__4425__auto___2450,await_all,promises__$1,p,total,count,done))
;
var fail_2459 = ((await_all)?succ_2458:((function (seq__2432_2439,chunk__2433_2440,count__2434_2441,i__2435_2442,succ_2458,subp_2457,seq__2432_2451__$1,temp__4425__auto___2450,await_all,promises__$1,p,total,count,done){
return (function (err){
if(cljs.core.not.call(null,cljs.core.deref.call(null,done))){
cljs.core.reset_BANG_.call(null,done,true);

return redlobster.promise.realise_error.call(null,p,err);
} else {
return null;
}
});})(seq__2432_2439,chunk__2433_2440,count__2434_2441,i__2435_2442,succ_2458,subp_2457,seq__2432_2451__$1,temp__4425__auto___2450,await_all,promises__$1,p,total,count,done))
);
redlobster.promise.on_realised.call(null,subp_2457,succ_2458,fail_2459);

var G__2460 = cljs.core.next.call(null,seq__2432_2451__$1);
var G__2461 = null;
var G__2462 = (0);
var G__2463 = (0);
seq__2432_2439 = G__2460;
chunk__2433_2440 = G__2461;
count__2434_2441 = G__2462;
i__2435_2442 = G__2463;
continue;
}
} else {
}
}
break;
}

return p;
});

redlobster.promise.await.cljs$lang$maxFixedArity = (0);

redlobster.promise.await.cljs$lang$applyTo = (function (seq2431){
return redlobster.promise.await.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2431));
});
redlobster.promise.defer_until_realised = (function redlobster$promise$defer_until_realised(promises,callback){
var p = redlobster.promise.promise.call(null);
redlobster.promise.on_realised.call(null,cljs.core.apply.call(null,redlobster.promise.await,promises),((function (p){
return (function (_){
return redlobster.promise.realise.call(null,p,callback.call(null));
});})(p))
,((function (p){
return (function (error){
return redlobster.promise.realise_error.call(null,p,error);
});})(p))
);

return p;
});
/**
 * Creates a promise that fulfills with an event object when the matching
 * event is triggered on the EventEmitter. This promise cannot fail; it will
 * either succeed or never realise.
 */
redlobster.promise.on_event = (function redlobster$promise$on_event(ee,type){
var p = redlobster.promise.promise.call(null);
redlobster.events.once.call(null,ee,type,((function (p){
return (function (event){
return redlobster.promise.realise.call(null,p,event);
});})(p))
);

return p;
});
/**
 * Sets a promise to fail with `:redlobster.promise/timeout` after a
 * specified number of milliseconds.
 * 
 * A promise that has timed out will not throw an error when you try to
 * realise it, but the realised value will remain
 * `:redlobster.promise/timeout`.
 */
redlobster.promise.timeout = (function redlobster$promise$timeout(promise,timeout__$1){
var timeout_func = (function (){
if(cljs.core.truth_(redlobster.promise.realised_QMARK_.call(null,promise))){
return null;
} else {
return redlobster.promise.realise_error.call(null,promise,new cljs.core.Keyword("redlobster.promise","timeout","redlobster.promise/timeout",-1857733661));
}
});
return setTimeout(timeout_func,timeout__$1);
});

//# sourceMappingURL=promise.js.map