// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.util.time');
goog.require('cljs.core');
dogfort.util.time.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], null);
dogfort.util.time.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"], null);
dogfort.util.time.pad_with_zero = (function dogfort$util$time$pad_with_zero(val){
if((parseInt(val,(10)) < (10))){
return [cljs.core.str("0"),cljs.core.str(val)].join('');
} else {
return val;
}
});
dogfort.util.time.get_tzo_string = (function dogfort$util$time$get_tzo_string(tzo){
var hours = Math.floor((tzo / (60)));
var mod_min = Math.abs(cljs.core.rem.call(null,tzo,(60)));
var abs_hours = Math.abs(hours);
var sign = (((hours > (0)))?"-":"+");
return [cljs.core.str(sign),cljs.core.str(dogfort.util.time.pad_with_zero.call(null,abs_hours)),cljs.core.str(dogfort.util.time.pad_with_zero.call(null,mod_min))].join('');
});
dogfort.util.time.rfc822_date = (function dogfort$util$time$rfc822_date(date){
return [cljs.core.str(dogfort.util.time.days.call(null,date.getDay())),cljs.core.str(", "),cljs.core.str(dogfort.util.time.pad_with_zero.call(null,date.getDate())),cljs.core.str(" "),cljs.core.str(dogfort.util.time.months.call(null,date.getMonth())),cljs.core.str(" "),cljs.core.str(date.getFullYear()),cljs.core.str(" "),cljs.core.str(dogfort.util.time.pad_with_zero.call(null,date.getHours())),cljs.core.str(":"),cljs.core.str(dogfort.util.time.pad_with_zero.call(null,date.getMinutes())),cljs.core.str(":"),cljs.core.str(dogfort.util.time.pad_with_zero.call(null,date.getSeconds())),cljs.core.str(" "),cljs.core.str(dogfort.util.time.get_tzo_string.call(null,date.getTimezoneOffset()))].join('');
});

//# sourceMappingURL=time.js.map