// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.util.parsing');
goog.require('cljs.core');
/**
 * HTTP token: 1*<any CHAR except CTLs or tspecials>. See RFC2068
 */
dogfort.util.parsing.re_token = /[!#$%&'*\-+.0-9A-Z\^_`a-z\|~]+/;
/**
 * HTTP quoted-string: <"> *<any TEXT except "> <">. See RFC2068.
 */
dogfort.util.parsing.re_quoted = /\"(\\\"|[^\"])*\"/;
/**
 * HTTP value: token | quoted-string. See RFC2109
 */
dogfort.util.parsing.re_value = [cljs.core.str(dogfort.util.parsing.re_token.source),cljs.core.str("|"),cljs.core.str(dogfort.util.parsing.re_quoted.source)].join('');

//# sourceMappingURL=parsing.js.map