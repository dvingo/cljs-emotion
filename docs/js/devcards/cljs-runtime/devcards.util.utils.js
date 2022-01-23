goog.provide('devcards.util.utils');
goog.scope(function(){
  devcards.util.utils.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
devcards.util.utils.react_holder = module$node_modules$react$index;
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5751__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5751__auto__)){
var doc = temp__5751__auto__;
return devcards.util.utils.goog$module$goog$object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50871_50898 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50872_50899 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50873_50900 = true;
var _STAR_print_fn_STAR__temp_val__50874_50901 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50873_50900);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50874_50901);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50872_50899);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50871_50898);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
}catch (e50861){if((e50861 instanceof Error)){
var e1 = e50861;
try{return obj.toString();
}catch (e50864){if((e50864 instanceof Error)){
var e2 = e50864;
return "<<Un-printable Type>>";
} else {
throw e50864;

}
}} else {
throw e50861;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__50883 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__50884 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__50884);

try{return devcards.util.utils.pprint_str(code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__50883);
}});

//# sourceMappingURL=devcards.util.utils.js.map
