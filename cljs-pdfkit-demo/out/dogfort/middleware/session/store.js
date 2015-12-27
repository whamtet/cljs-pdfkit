// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.middleware.session.store');
goog.require('cljs.core');

/**
 * An interface to a session storage engine. Implementing this protocol allows
 * Ring session data to be stored in different places.
 * 
 * Session keys are exposed to end users via a cookie, and therefore must be
 * unguessable. A random UUID is a good choice for a session key.
 * 
 * Session stores should come with a mechanism for expiring old session data.
 */
dogfort.middleware.session.store.SessionStore = {};

/**
 * Read a session map from the store. If the key is not found, nil
 * is returned.
 */
dogfort.middleware.session.store.read_session = (function dogfort$middleware$session$store$read_session(store,key){
if((!((store == null))) && (!((store.dogfort$middleware$session$store$SessionStore$read_session$arity$2 == null)))){
return store.dogfort$middleware$session$store$SessionStore$read_session$arity$2(store,key);
} else {
var x__866__auto__ = (((store == null))?null:store);
var m__867__auto__ = (dogfort.middleware.session.store.read_session[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,store,key);
} else {
var m__867__auto____$1 = (dogfort.middleware.session.store.read_session["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,store,key);
} else {
throw cljs.core.missing_protocol.call(null,"SessionStore.read-session",store);
}
}
}
});

/**
 * Write a session map to the store. Returns the (possibly changed) key under
 * which the data was stored. If the key is nil, the session is considered
 * to be new, and a fresh key should be generated.
 */
dogfort.middleware.session.store.write_session = (function dogfort$middleware$session$store$write_session(store,key,data){
if((!((store == null))) && (!((store.dogfort$middleware$session$store$SessionStore$write_session$arity$3 == null)))){
return store.dogfort$middleware$session$store$SessionStore$write_session$arity$3(store,key,data);
} else {
var x__866__auto__ = (((store == null))?null:store);
var m__867__auto__ = (dogfort.middleware.session.store.write_session[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,store,key,data);
} else {
var m__867__auto____$1 = (dogfort.middleware.session.store.write_session["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,store,key,data);
} else {
throw cljs.core.missing_protocol.call(null,"SessionStore.write-session",store);
}
}
}
});

/**
 * Delete a session map from the store, and returns the session key. If the
 * returned key is nil, the session cookie will be removed.
 */
dogfort.middleware.session.store.delete_session = (function dogfort$middleware$session$store$delete_session(store,key){
if((!((store == null))) && (!((store.dogfort$middleware$session$store$SessionStore$delete_session$arity$2 == null)))){
return store.dogfort$middleware$session$store$SessionStore$delete_session$arity$2(store,key);
} else {
var x__866__auto__ = (((store == null))?null:store);
var m__867__auto__ = (dogfort.middleware.session.store.delete_session[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,store,key);
} else {
var m__867__auto____$1 = (dogfort.middleware.session.store.delete_session["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,store,key);
} else {
throw cljs.core.missing_protocol.call(null,"SessionStore.delete-session",store);
}
}
}
});


//# sourceMappingURL=store.js.map