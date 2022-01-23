goog.provide('com.fulcrologic.fulcro_css.css_implementation');
/**
 * Replaces slashes and dots with underscore.
 */
com.fulcrologic.fulcro_css.css_implementation.cssify = (function com$fulcrologic$fulcro_css$css_implementation$cssify(str){
if(cljs.core.truth_(str)){
return clojure.string.replace(str,/[.\/]/,"_");
} else {
return null;
}
});
com.fulcrologic.fulcro_css.css_implementation.fqname = (function com$fulcrologic$fulcro_css$css_implementation$fqname(comp_class){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(comp_class) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,comp_class))),/^:/,"");
});
/**
 * Generates a string name of a localized CSS class. This function combines the fully-qualified name of the given class
 *   with the (optional) specified name.
 */
com.fulcrologic.fulcro_css.css_implementation.local_class = (function com$fulcrologic$fulcro_css$css_implementation$local_class(var_args){
var G__56323 = arguments.length;
switch (G__56323) {
case 1:
return com.fulcrologic.fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$1 = (function (comp_class){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro_css.css_implementation.cssify(com.fulcrologic.fulcro_css.css_implementation.fqname(comp_class)));
}));

(com.fulcrologic.fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$2 = (function (comp_class,nm){
return [com.fulcrologic.fulcro_css.css_implementation.cssify(com.fulcrologic.fulcro_css.css_implementation.fqname(comp_class)),"__",cljs.core.name(nm)].join('');
}));

(com.fulcrologic.fulcro_css.css_implementation.local_class.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro_css.css_implementation.set_classname = (function com$fulcrologic$fulcro_css$css_implementation$set_classname(m,subclasses){
return cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"className","className",-1983287057),subclasses),new cljs.core.Keyword(null,"class","class",-2030961996)));
});
/**
 * Returns true if the given component has css
 */
com.fulcrologic.fulcro_css.css_implementation.CSS_QMARK_ = (function com$fulcrologic$fulcro_css$css_implementation$CSS_QMARK_(x){
return cljs.core.boolean$((function (){var G__56339 = x;
var G__56339__$1 = (((G__56339 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__56339) : com.fulcrologic.fulcro.components.component_options.call(null,G__56339)));
if((G__56339__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"css","css",1135045163).cljs$core$IFn$_invoke$arity$1(G__56339__$1);
}
})());
});
/**
 * Get the *raw* value from the local-rules of a component.
 */
com.fulcrologic.fulcro_css.css_implementation.get_local_rules = (function com$fulcrologic$fulcro_css$css_implementation$get_local_rules(component){
var temp__5751__auto__ = (function (){var G__56345 = component;
var G__56345__$1 = (((G__56345 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__56345) : com.fulcrologic.fulcro.components.component_options.call(null,G__56345)));
if((G__56345__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"css","css",1135045163).cljs$core$IFn$_invoke$arity$1(G__56345__$1);
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var entry = temp__5751__auto__;
if(cljs.core.fn_QMARK_(entry)){
return (entry.cljs$core$IFn$_invoke$arity$0 ? entry.cljs$core$IFn$_invoke$arity$0() : entry.call(null));
} else {
if(cljs.core.vector_QMARK_(entry)){
return entry;
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid :css on ",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.component_name.call(null,component))], 0));

return entry;

}
}
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Get the *raw* value from the global-rules of a component.
 */
com.fulcrologic.fulcro_css.css_implementation.get_global_rules = (function com$fulcrologic$fulcro_css$css_implementation$get_global_rules(component){
var temp__5751__auto__ = (function (){var G__56356 = component;
var G__56356__$1 = (((G__56356 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__56356) : com.fulcrologic.fulcro.components.component_options.call(null,G__56356)));
if((G__56356__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"css-global","css-global",-943240719).cljs$core$IFn$_invoke$arity$1(G__56356__$1);
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var entry = temp__5751__auto__;
if(cljs.core.fn_QMARK_(entry)){
return (entry.cljs$core$IFn$_invoke$arity$0 ? entry.cljs$core$IFn$_invoke$arity$0() : entry.call(null));
} else {
if(cljs.core.vector_QMARK_(entry)){
return entry;
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid :css-global on ",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.component_name.call(null,component))], 0));

return entry;

}
}
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Returns true if the given string starts with one of [. $ &$ &.]
 */
com.fulcrologic.fulcro_css.css_implementation.prefixed_name_QMARK_ = (function com$fulcrologic$fulcro_css$css_implementation$prefixed_name_QMARK_(nm){
return (!((cljs.core.re_matches(/(\.|\$|&\.|&\$).*/,nm) == null)));
});
/**
 * Returns the prefix of a string. [. $ &$ &.]
 */
com.fulcrologic.fulcro_css.css_implementation.get_prefix = (function com$fulcrologic$fulcro_css$css_implementation$get_prefix(nm){
var vec__56377 = cljs.core.re_matches(/(\.|\$|&\.|&\$).*/,nm);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56377,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56377,(1),null);
return prefix;
});
/**
 * Returns true if the given keyword starts with one of [. $ &$ &.]
 */
com.fulcrologic.fulcro_css.css_implementation.prefixed_keyword_QMARK_ = (function com$fulcrologic$fulcro_css$css_implementation$prefixed_keyword_QMARK_(kw){
return (((kw instanceof cljs.core.Keyword)) && (com.fulcrologic.fulcro_css.css_implementation.prefixed_name_QMARK_(cljs.core.name(kw))));
});
/**
 * Removes the prefix of a string.
 */
com.fulcrologic.fulcro_css.css_implementation.remove_prefix = (function com$fulcrologic$fulcro_css$css_implementation$remove_prefix(nm){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nm,cljs.core.count(com.fulcrologic.fulcro_css.css_implementation.get_prefix(nm)));
});
/**
 * Removes the prefix of a keyword.
 */
com.fulcrologic.fulcro_css.css_implementation.remove_prefix_kw = (function com$fulcrologic$fulcro_css$css_implementation$remove_prefix_kw(kw){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro_css.css_implementation.remove_prefix(cljs.core.name(kw)));
});
/**
 * Returns the list of components from the include-children method of a component
 */
com.fulcrologic.fulcro_css.css_implementation.get_includes = (function com$fulcrologic$fulcro_css$css_implementation$get_includes(component){
var includes = (function (){var G__56417 = component;
var G__56417__$1 = (((G__56417 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__56417) : com.fulcrologic.fulcro.components.component_options.call(null,G__56417)));
if((G__56417__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"css-include","css-include",559023012).cljs$core$IFn$_invoke$arity$1(G__56417__$1);
}
})();
if(cljs.core.fn_QMARK_(includes)){
return (includes.cljs$core$IFn$_invoke$arity$0 ? includes.cljs$core$IFn$_invoke$arity$0() : includes.call(null));
} else {
var or__4253__auto__ = includes;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
});
/**
 * Recursively finds all includes starting at the given component.
 */
com.fulcrologic.fulcro_css.css_implementation.get_nested_includes = (function com$fulcrologic$fulcro_css$css_implementation$get_nested_includes(component){
var direct_children = com.fulcrologic.fulcro_css.css_implementation.get_includes(component);
if(cljs.core.empty_QMARK_(direct_children)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(direct_children,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__56430_SHARP_,p2__56431_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__56430_SHARP_,(com.fulcrologic.fulcro_css.css_implementation.get_nested_includes.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.css_implementation.get_nested_includes.cljs$core$IFn$_invoke$arity$1(p2__56431_SHARP_) : com.fulcrologic.fulcro_css.css_implementation.get_nested_includes.call(null,p2__56431_SHARP_)));
}),cljs.core.PersistentVector.EMPTY,direct_children));
}
});
com.fulcrologic.fulcro_css.css_implementation.localize_name = (function com$fulcrologic$fulcro_css$css_implementation$localize_name(nm,comp){
var no_prefix = com.fulcrologic.fulcro_css.css_implementation.remove_prefix(nm);
var prefix = com.fulcrologic.fulcro_css.css_implementation.get_prefix(nm);
var G__56441 = prefix;
switch (G__56441) {
case ".":
case "&.":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),com.fulcrologic.fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$2(comp,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no_prefix))].join('');

break;
case "$":
return [".",no_prefix].join('');

break;
case "&$":
return ["&.",no_prefix].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56441)].join('')));

}
});
com.fulcrologic.fulcro_css.css_implementation.localize_kw = (function com$fulcrologic$fulcro_css$css_implementation$localize_kw(kw,comp){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro_css.css_implementation.localize_name(cljs.core.name(kw),comp));
});
/**
 * Gives the localized classname for the given keyword.
 */
com.fulcrologic.fulcro_css.css_implementation.kw__GT_localized_classname = (function com$fulcrologic$fulcro_css$css_implementation$kw__GT_localized_classname(comp,kw){
var nm = cljs.core.name(kw);
var prefix = com.fulcrologic.fulcro_css.css_implementation.get_prefix(nm);
var no_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nm,cljs.core.count(prefix));
var G__56475 = prefix;
switch (G__56475) {
case "$":
case "&$":
return no_prefix;

break;
case ".":
case "&.":
return com.fulcrologic.fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$2(comp,no_prefix);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56475)].join('')));

}
});
com.fulcrologic.fulcro_css.css_implementation.selector_QMARK_ = (function com$fulcrologic$fulcro_css$css_implementation$selector_QMARK_(x){
try{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(garden.selectors.CSSSelector,cljs.core.type(x));
}catch (e56489){var e = e56489;
return false;
}});
/**
 * Gets all the keywords that are present in a selector
 */
com.fulcrologic.fulcro_css.css_implementation.get_selector_keywords = (function com$fulcrologic$fulcro_css$css_implementation$get_selector_keywords(selector){
var val = garden.selectors.css_selector(selector);
var classnames = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56493_SHARP_){
return cljs.core.re_matches(/[.$].*/,p1__56493_SHARP_);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(val,/ /));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,classnames);
});
/**
 * Gets all used classnames in from the given rules as keywords
 */
com.fulcrologic.fulcro_css.css_implementation.get_class_keys = (function com$fulcrologic$fulcro_css$css_implementation$get_class_keys(rules){
var flattened_rules = cljs.core.flatten(rules);
var selectors = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro_css.css_implementation.selector_QMARK_,flattened_rules);
var prefixed_kws = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro_css.css_implementation.prefixed_keyword_QMARK_,flattened_rules);
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro_css.css_implementation.get_selector_keywords,selectors)),prefixed_kws));
});
/**
 * Returns a map from user-given CSS rule names to localized names of the given component.
 */
com.fulcrologic.fulcro_css.css_implementation.get_classnames = (function com$fulcrologic$fulcro_css$css_implementation$get_classnames(comp){
var local_class_keys = com.fulcrologic.fulcro_css.css_implementation.get_class_keys(com.fulcrologic.fulcro_css.css_implementation.get_local_rules(comp));
var global_class_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro_css.css_implementation.remove_prefix_kw,com.fulcrologic.fulcro_css.css_implementation.get_class_keys(com.fulcrologic.fulcro_css.css_implementation.get_global_rules(comp)));
var local_classnames = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro_css.css_implementation.remove_prefix_kw,local_class_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56513_SHARP_){
return com.fulcrologic.fulcro_css.css_implementation.kw__GT_localized_classname(comp,p1__56513_SHARP_);
}),local_class_keys));
var global_classnames = cljs.core.zipmap(global_class_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,global_class_keys));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([local_classnames,global_classnames], 0));
});

//# sourceMappingURL=com.fulcrologic.fulcro_css.css_implementation.js.map
