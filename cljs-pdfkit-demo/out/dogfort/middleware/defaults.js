// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.middleware.defaults');
goog.require('cljs.core');
goog.require('dogfort.middleware.session');
goog.require('dogfort.middleware.cookies');
goog.require('dogfort.middleware.file');
goog.require('dogfort.middleware.params');
goog.require('dogfort.middleware.keyword_params');
dogfort.middleware.defaults.wrap_defaults = (function dogfort$middleware$defaults$wrap_defaults(handler,options){
return dogfort.middleware.params.wrap_params.call(null,dogfort.middleware.keyword_params.wrap_keyword_params.call(null,dogfort.middleware.cookies.wrap_cookies.call(null,dogfort.middleware.session.wrap_session.call(null,dogfort.middleware.file.wrap_file.call(null,handler,new cljs.core.Keyword(null,"wrap-file","wrap-file",-1438240540).cljs$core$IFn$_invoke$arity$2(options,"static")),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"wrap-session","wrap-session",524993076))),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"wrap-cookies","wrap-cookies",-2058169753))),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"wrap-keyword-params","wrap-keyword-params",2128920355))),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"wrap-params","wrap-params",2107756639)));
});

//# sourceMappingURL=defaults.js.map