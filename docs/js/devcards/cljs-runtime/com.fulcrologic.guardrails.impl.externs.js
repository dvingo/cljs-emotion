goog.provide('com.fulcrologic.guardrails.impl.externs');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.impl !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs.externs_registry !== 'undefined')){
} else {
com.fulcrologic.guardrails.impl.externs.externs_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.impl !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs.spec_registry !== 'undefined')){
} else {
com.fulcrologic.guardrails.impl.externs.spec_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.impl !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs.function_registry !== 'undefined')){
} else {
com.fulcrologic.guardrails.impl.externs.function_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.impl !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs !== 'undefined') && (typeof com.fulcrologic.guardrails.impl.externs.external_function_registry !== 'undefined')){
} else {
com.fulcrologic.guardrails.impl.externs.external_function_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
com.fulcrologic.guardrails.impl.externs.register_externs_BANG_ = (function com$fulcrologic$guardrails$impl$externs$register_externs_BANG_(NS,fn_name,externs){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.guardrails.impl.externs.externs_registry,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [NS,fn_name], null),externs);
});
com.fulcrologic.guardrails.impl.externs.register_specs_BANG_ = (function com$fulcrologic$guardrails$impl$externs$register_specs_BANG_(function$){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.guardrails.impl.externs.spec_registry,cljs.core.merge,new cljs.core.Keyword("com.fulcrologic.guardrails.registry","spec-registry","com.fulcrologic.guardrails.registry/spec-registry",1477479211).cljs$core$IFn$_invoke$arity$1(function$));
});
com.fulcrologic.guardrails.impl.externs.clean_function = (function com$fulcrologic$guardrails$impl$externs$clean_function(function$){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(function$,new cljs.core.Keyword("com.fulcrologic.guardrails.registry","arities","com.fulcrologic.guardrails.registry/arities",1446074922),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.utils.map_vals,(function (p1__55860_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55860_SHARP_,new cljs.core.Keyword("com.fulcrologic.guardrails.registry","body","com.fulcrologic.guardrails.registry/body",1170523854));
}))),new cljs.core.Keyword("com.fulcrologic.guardrails.registry","spec-registry","com.fulcrologic.guardrails.registry/spec-registry",1477479211));
});
com.fulcrologic.guardrails.impl.externs.register_function_BANG_ = (function com$fulcrologic$guardrails$impl$externs$register_function_BANG_(NS,fn_name,function$){
com.fulcrologic.guardrails.impl.externs.register_specs_BANG_(function$);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.guardrails.impl.externs.function_registry,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [NS,fn_name], null),com.fulcrologic.guardrails.impl.externs.clean_function(function$));
});
com.fulcrologic.guardrails.impl.externs.record_defn_BANG_ = (function com$fulcrologic$guardrails$impl$externs$record_defn_BANG_(NS,p__55866,externs){
var map__55867 = p__55866;
var map__55867__$1 = cljs.core.__destructure_map(map__55867);
var function$ = map__55867__$1;
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55867__$1,new cljs.core.Keyword("com.fulcrologic.guardrails.registry","fn-name","com.fulcrologic.guardrails.registry/fn-name",-1837692103));
com.fulcrologic.guardrails.impl.externs.register_externs_BANG_(NS,fn_name,externs);

return com.fulcrologic.guardrails.impl.externs.register_function_BANG_(NS,fn_name,function$);
});
com.fulcrologic.guardrails.impl.externs.register_external_function_BANG_ = (function com$fulcrologic$guardrails$impl$externs$register_external_function_BANG_(p__55872){
var map__55873 = p__55872;
var map__55873__$1 = cljs.core.__destructure_map(map__55873);
var external_function = map__55873__$1;
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55873__$1,new cljs.core.Keyword("com.fulcrologic.guardrails.registry","var-name","com.fulcrologic.guardrails.registry/var-name",502701799));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.guardrails.impl.externs.external_function_registry,cljs.core.assoc,var_name,com.fulcrologic.guardrails.impl.externs.clean_function(external_function));
});
com.fulcrologic.guardrails.impl.externs.record_fdef_BANG_ = (function com$fulcrologic$guardrails$impl$externs$record_fdef_BANG_(external_function){
com.fulcrologic.guardrails.impl.externs.register_specs_BANG_(external_function);

return com.fulcrologic.guardrails.impl.externs.register_external_function_BANG_(external_function);
});
/**
 * Returns the information known about the given qualified symbol (if it was declared with >defn in
 *   copilot mode, or has register a gspec on an external function) .
 */
com.fulcrologic.guardrails.impl.externs.function_info = (function com$fulcrologic$guardrails$impl$externs$function_info(qualified_symbol){
var spc = cljs.core.namespace(qualified_symbol);
var simple_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(qualified_symbol));
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.guardrails.impl.externs.external_function_registry),qualified_symbol);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.guardrails.impl.externs.function_registry),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spc,simple_name], null));
}
});
/**
 * Returns true if the given fully-qualified symbol was declared with >defn and the arity (which is a number
 * or :n) is marked as pure.
 */
com.fulcrologic.guardrails.impl.externs.pure_QMARK_ = (function com$fulcrologic$guardrails$impl$externs$pure_QMARK_(qualified_symbol,arity){
return cljs.core.boolean$((function (){var info = com.fulcrologic.guardrails.impl.externs.function_info(qualified_symbol);
var has_arity_QMARK_ = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.guardrails.registry","arities","com.fulcrologic.guardrails.registry/arities",1446074922),arity], null)));
var map__55879 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(info,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.guardrails.registry","arities","com.fulcrologic.guardrails.registry/arities",1446074922),((has_arity_QMARK_)?arity:new cljs.core.Keyword(null,"n","n",562130025)),new cljs.core.Keyword("com.fulcrologic.guardrails.registry","gspec","com.fulcrologic.guardrails.registry/gspec",207045467),new cljs.core.Keyword("com.fulcrologic.guardrails.registry","metadata","com.fulcrologic.guardrails.registry/metadata",-1389979282)], null));
var map__55879__$1 = cljs.core.__destructure_map(map__55879);
var pure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55879__$1,new cljs.core.Keyword(null,"pure","pure",1433370394));
var pure_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55879__$1,new cljs.core.Keyword(null,"pure?","pure?",350862691));
var or__4253__auto__ = pure;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return pure_QMARK_;
}
})());
});
/**
 * Returns the function spec system that was used in the type signature of the given symbol, or nil if that
 * function isn't registered with guardrails.
 */
com.fulcrologic.guardrails.impl.externs.spec_system = (function com$fulcrologic$guardrails$impl$externs$spec_system(qualified_symbol){
var map__55891 = com.fulcrologic.guardrails.impl.externs.function_info(qualified_symbol);
var map__55891__$1 = cljs.core.__destructure_map(map__55891);
var info = map__55891__$1;
var spec_system = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55891__$1,new cljs.core.Keyword("com.fulcrologic.guardrails.registry","spec-system","com.fulcrologic.guardrails.registry/spec-system",-484591590));
if(cljs.core.truth_(info)){
var or__4253__auto__ = spec_system;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("org.clojure","spec1","org.clojure/spec1",-2090493001);
}
} else {
return null;
}
});

//# sourceMappingURL=com.fulcrologic.guardrails.impl.externs.js.map
