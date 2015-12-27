// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('redlobster.events');
goog.require('cljs.core');

redlobster.events.IEventEmitter = {};

redlobster.events.on = (function redlobster$events$on(emitter,event,listener){
if((!((emitter == null))) && (!((emitter.redlobster$events$IEventEmitter$on$arity$3 == null)))){
return emitter.redlobster$events$IEventEmitter$on$arity$3(emitter,event,listener);
} else {
var x__866__auto__ = (((emitter == null))?null:emitter);
var m__867__auto__ = (redlobster.events.on[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,emitter,event,listener);
} else {
var m__867__auto____$1 = (redlobster.events.on["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,emitter,event,listener);
} else {
throw cljs.core.missing_protocol.call(null,"IEventEmitter.on",emitter);
}
}
}
});

redlobster.events.once = (function redlobster$events$once(emitter,event,listener){
if((!((emitter == null))) && (!((emitter.redlobster$events$IEventEmitter$once$arity$3 == null)))){
return emitter.redlobster$events$IEventEmitter$once$arity$3(emitter,event,listener);
} else {
var x__866__auto__ = (((emitter == null))?null:emitter);
var m__867__auto__ = (redlobster.events.once[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,emitter,event,listener);
} else {
var m__867__auto____$1 = (redlobster.events.once["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,emitter,event,listener);
} else {
throw cljs.core.missing_protocol.call(null,"IEventEmitter.once",emitter);
}
}
}
});

redlobster.events.remove_listener = (function redlobster$events$remove_listener(emitter,event,listener){
if((!((emitter == null))) && (!((emitter.redlobster$events$IEventEmitter$remove_listener$arity$3 == null)))){
return emitter.redlobster$events$IEventEmitter$remove_listener$arity$3(emitter,event,listener);
} else {
var x__866__auto__ = (((emitter == null))?null:emitter);
var m__867__auto__ = (redlobster.events.remove_listener[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,emitter,event,listener);
} else {
var m__867__auto____$1 = (redlobster.events.remove_listener["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,emitter,event,listener);
} else {
throw cljs.core.missing_protocol.call(null,"IEventEmitter.remove-listener",emitter);
}
}
}
});

redlobster.events.remove_all_listeners = (function redlobster$events$remove_all_listeners(emitter){
if((!((emitter == null))) && (!((emitter.redlobster$events$IEventEmitter$remove_all_listeners$arity$1 == null)))){
return emitter.redlobster$events$IEventEmitter$remove_all_listeners$arity$1(emitter);
} else {
var x__866__auto__ = (((emitter == null))?null:emitter);
var m__867__auto__ = (redlobster.events.remove_all_listeners[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,emitter);
} else {
var m__867__auto____$1 = (redlobster.events.remove_all_listeners["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,emitter);
} else {
throw cljs.core.missing_protocol.call(null,"IEventEmitter.remove-all-listeners",emitter);
}
}
}
});

redlobster.events.remove_all_listeners = (function redlobster$events$remove_all_listeners(emitter,event){
if((!((emitter == null))) && (!((emitter.redlobster$events$IEventEmitter$remove_all_listeners$arity$2 == null)))){
return emitter.redlobster$events$IEventEmitter$remove_all_listeners$arity$2(emitter,event);
} else {
var x__866__auto__ = (((emitter == null))?null:emitter);
var m__867__auto__ = (redlobster.events.remove_all_listeners[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,emitter,event);
} else {
var m__867__auto____$1 = (redlobster.events.remove_all_listeners["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,emitter,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventEmitter.remove-all-listeners",emitter);
}
}
}
});

redlobster.events.listeners = (function redlobster$events$listeners(emitter,event){
if((!((emitter == null))) && (!((emitter.redlobster$events$IEventEmitter$listeners$arity$2 == null)))){
return emitter.redlobster$events$IEventEmitter$listeners$arity$2(emitter,event);
} else {
var x__866__auto__ = (((emitter == null))?null:emitter);
var m__867__auto__ = (redlobster.events.listeners[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,emitter,event);
} else {
var m__867__auto____$1 = (redlobster.events.listeners["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,emitter,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventEmitter.listeners",emitter);
}
}
}
});

redlobster.events.emit = (function redlobster$events$emit(emitter,event,data){
if((!((emitter == null))) && (!((emitter.redlobster$events$IEventEmitter$emit$arity$3 == null)))){
return emitter.redlobster$events$IEventEmitter$emit$arity$3(emitter,event,data);
} else {
var x__866__auto__ = (((emitter == null))?null:emitter);
var m__867__auto__ = (redlobster.events.emit[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,emitter,event,data);
} else {
var m__867__auto____$1 = (redlobster.events.emit["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,emitter,event,data);
} else {
throw cljs.core.missing_protocol.call(null,"IEventEmitter.emit",emitter);
}
}
}
});

redlobster.events.unpack_event = (function redlobster$events$unpack_event(event){
if((event instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,event);
} else {
return event;
}
});
redlobster.events.wrap_once = (function redlobster$events$wrap_once(emitter,event,listener){
return (function redlobster$events$wrap_once_$_once_off(x){
listener.call(null,x);

return redlobster.events.remove_listener.call(null,emitter,event,redlobster$events$wrap_once_$_once_off);
});
});
redlobster.events.def_add_listener = (function redlobster$events$def_add_listener(type,listener){
return (function (this$){
var listeners = (function (){var or__230__auto__ = cljs.core.get.call(null,this$,type);
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
return cljs.core.assoc.call(null,this$,type,cljs.core.conj.call(null,listeners,listener));
});
});
redlobster.events.def_rem_listener = (function redlobster$events$def_rem_listener(type,listener){
return (function (this$){
var listeners = (function (){var or__230__auto__ = cljs.core.get.call(null,this$,type);
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
return cljs.core.assoc.call(null,this$,type,cljs.core.disj.call(null,listeners,listener));
});
});

/**
* @constructor
*/
redlobster.events.DefaultEventEmitter = (function (events){
this.events = events;
})
redlobster.events.DefaultEventEmitter.prototype.redlobster$events$IEventEmitter$ = true;

redlobster.events.DefaultEventEmitter.prototype.redlobster$events$IEventEmitter$on$arity$3 = (function (this$,event,listener){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.events,redlobster.events.def_add_listener.call(null,event,listener));
});

redlobster.events.DefaultEventEmitter.prototype.redlobster$events$IEventEmitter$once$arity$3 = (function (this$,event,listener){
var self__ = this;
var this$__$1 = this;
listener.__redlobster_event_once = true;

return cljs.core.swap_BANG_.call(null,self__.events,redlobster.events.def_add_listener.call(null,event,listener));
});

redlobster.events.DefaultEventEmitter.prototype.redlobster$events$IEventEmitter$remove_listener$arity$3 = (function (this$,event,listener){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.events,redlobster.events.def_rem_listener.call(null,event,listener));
});

redlobster.events.DefaultEventEmitter.prototype.redlobster$events$IEventEmitter$remove_all_listeners$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,self__.events,cljs.core.PersistentArrayMap.EMPTY);
});

redlobster.events.DefaultEventEmitter.prototype.redlobster$events$IEventEmitter$remove_all_listeners$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.events,((function (this$__$1){
return (function (p1__2228_SHARP_){
return cljs.core.dissoc.call(null,p1__2228_SHARP_,event);
});})(this$__$1))
);
});

redlobster.events.DefaultEventEmitter.prototype.redlobster$events$IEventEmitter$listeners$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,cljs.core.deref.call(null,self__.events),event);
});

redlobster.events.DefaultEventEmitter.prototype.redlobster$events$IEventEmitter$emit$arity$3 = (function (this$,event,data){
var self__ = this;
var this$__$1 = this;
var seq__2229 = cljs.core.seq.call(null,redlobster.events.listeners.call(null,this$__$1,event));
var chunk__2230 = null;
var count__2231 = (0);
var i__2232 = (0);
while(true){
if((i__2232 < count__2231)){
var listener = cljs.core._nth.call(null,chunk__2230,i__2232);
listener.call(null,data);

if(cljs.core.truth_(listener.__redlobster_event_once)){
redlobster.events.remove_listener.call(null,this$__$1,event,listener);
} else {
}

var G__2233 = seq__2229;
var G__2234 = chunk__2230;
var G__2235 = count__2231;
var G__2236 = (i__2232 + (1));
seq__2229 = G__2233;
chunk__2230 = G__2234;
count__2231 = G__2235;
i__2232 = G__2236;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__2229);
if(temp__4425__auto__){
var seq__2229__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2229__$1)){
var c__1014__auto__ = cljs.core.chunk_first.call(null,seq__2229__$1);
var G__2237 = cljs.core.chunk_rest.call(null,seq__2229__$1);
var G__2238 = c__1014__auto__;
var G__2239 = cljs.core.count.call(null,c__1014__auto__);
var G__2240 = (0);
seq__2229 = G__2237;
chunk__2230 = G__2238;
count__2231 = G__2239;
i__2232 = G__2240;
continue;
} else {
var listener = cljs.core.first.call(null,seq__2229__$1);
listener.call(null,data);

if(cljs.core.truth_(listener.__redlobster_event_once)){
redlobster.events.remove_listener.call(null,this$__$1,event,listener);
} else {
}

var G__2241 = cljs.core.next.call(null,seq__2229__$1);
var G__2242 = null;
var G__2243 = (0);
var G__2244 = (0);
seq__2229 = G__2241;
chunk__2230 = G__2242;
count__2231 = G__2243;
i__2232 = G__2244;
continue;
}
} else {
return null;
}
}
break;
}
});

redlobster.events.DefaultEventEmitter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"events","events",-861883568,null)], null);
});

redlobster.events.DefaultEventEmitter.cljs$lang$type = true;

redlobster.events.DefaultEventEmitter.cljs$lang$ctorStr = "redlobster.events/DefaultEventEmitter";

redlobster.events.DefaultEventEmitter.cljs$lang$ctorPrWriter = (function (this__809__auto__,writer__810__auto__,opt__811__auto__){
return cljs.core._write.call(null,writer__810__auto__,"redlobster.events/DefaultEventEmitter");
});

redlobster.events.__GT_DefaultEventEmitter = (function redlobster$events$__GT_DefaultEventEmitter(events){
return (new redlobster.events.DefaultEventEmitter(events));
});

redlobster.events.implementations = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function redlobster$events$impl_node(){
try{var EventEmitter = require("events").EventEmitter;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constructor","constructor",-1953928811),((function (EventEmitter){
return (function (){
return (new EventEmitter());
});})(EventEmitter))
,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"init","init",-1875481434),((function (EventEmitter){
return (function (){
EventEmitter.prototype.redlobster$events$IEventEmitter$ = true;

EventEmitter.prototype.redlobster$events$IEventEmitter$on$arity$3 = ((function (EventEmitter){
return (function (emitter,event,listener){
var emitter__$1 = this;
return emitter__$1.on(redlobster.events.unpack_event.call(null,event),listener);
});})(EventEmitter))
;

EventEmitter.prototype.redlobster$events$IEventEmitter$once$arity$3 = ((function (EventEmitter){
return (function (emitter,event,listener){
var emitter__$1 = this;
return emitter__$1.once(redlobster.events.unpack_event.call(null,event),listener);
});})(EventEmitter))
;

EventEmitter.prototype.redlobster$events$IEventEmitter$remove_listener$arity$3 = ((function (EventEmitter){
return (function (emitter,event,listener){
var emitter__$1 = this;
return emitter__$1.removeListener(redlobster.events.unpack_event.call(null,event),listener);
});})(EventEmitter))
;

EventEmitter.prototype.redlobster$events$IEventEmitter$remove_all_listeners$arity$1 = ((function (EventEmitter){
return (function (emitter){
var emitter__$1 = this;
return emitter__$1.removeAllListeners();
});})(EventEmitter))
;

EventEmitter.prototype.redlobster$events$IEventEmitter$remove_all_listeners$arity$2 = ((function (EventEmitter){
return (function (emitter,event){
var emitter__$1 = this;
return emitter__$1.removeAllListeners(redlobster.events.unpack_event.call(null,event));
});})(EventEmitter))
;

EventEmitter.prototype.redlobster$events$IEventEmitter$listeners$arity$2 = ((function (EventEmitter){
return (function (emitter,event){
var emitter__$1 = this;
return cljs.core.js__GT_clj.call(null,emitter__$1.listeners(redlobster.events.unpack_event.call(null,event)));
});})(EventEmitter))
;

return EventEmitter.prototype.redlobster$events$IEventEmitter$emit$arity$3 = ((function (EventEmitter){
return (function (emitter,event,data){
var emitter__$1 = this;
return emitter__$1.emit(redlobster.events.unpack_event.call(null,event),data);
});})(EventEmitter))
;
});})(EventEmitter))
], null);
}catch (e2246){if((e2246 instanceof Error)){
var e = e2246;
return null;
} else {
throw e2246;

}
}}),(function redlobster$events$impl_default(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constructor","constructor",-1953928811),(function (){
return (new redlobster.events.DefaultEventEmitter(cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"init","init",-1875481434),(function (){
return null;
})], null);
})], null);
var emitter_2248 = cljs.core.some.call(null,(function (p1__2247_SHARP_){
return p1__2247_SHARP_.call(null);
}),redlobster.events.implementations);
if((emitter_2248 == null)){
throw (new Error("No supported EventEmitter found"));
} else {
redlobster.events.event_emitter = new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(emitter_2248);

redlobster.events.emitter_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(emitter_2248);

new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(emitter_2248).call(null);
}

//# sourceMappingURL=events.js.map