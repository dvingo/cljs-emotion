goog.provide('dv.cljs_emotion_reagent');
goog.scope(function(){
  dv.cljs_emotion_reagent.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$emotion$hash$dist$hash_browser_cjs=shadow.js.require("module$node_modules$$emotion$hash$dist$hash_browser_cjs", {});
var module$node_modules$$emotion$styled$dist$emotion_styled_browser_cjs=shadow.js.require("module$node_modules$$emotion$styled$dist$emotion_styled_browser_cjs", {});
var module$node_modules$$emotion$react$dist$emotion_react_browser_cjs=shadow.js.require("module$node_modules$$emotion$react$dist$emotion_react_browser_cjs", {});
dv.cljs_emotion_reagent.r_as_element = (new borkdude.dynaload.LazyVar((function (){
if((typeof reagent !== 'undefined') && (typeof reagent.core !== 'undefined') && (typeof reagent.core.as_element !== 'undefined')){
return reagent.core.as_element;
} else {
var temp__5751__auto__ = cljs.core.find(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"default","default",-1987822328));
if(cljs.core.truth_(temp__5751__auto__)){
var e__46726__auto__ = temp__5751__auto__;
return cljs.core.val(e__46726__auto__);
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("reagent.core","as-element","reagent.core/as-element",-1369748434,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("reagent.core","as-element","reagent.core/as-element",-1369748434,null))," never required"].join('')));
}
}
}),null));
dv.cljs_emotion_reagent.r_convert_prop_value = (new borkdude.dynaload.LazyVar((function (){
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.template !== 'undefined') && (typeof reagent.impl.template.convert_prop_value !== 'undefined')){
return reagent.impl.template.convert_prop_value;
} else {
var temp__5751__auto__ = cljs.core.find(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"default","default",-1987822328));
if(cljs.core.truth_(temp__5751__auto__)){
var e__46726__auto__ = temp__5751__auto__;
return cljs.core.val(e__46726__auto__);
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("reagent.impl.template","convert-prop-value","reagent.impl.template/convert-prop-value",-1656332442,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("reagent.impl.template","convert-prop-value","reagent.impl.template/convert-prop-value",-1656332442,null))," never required"].join('')));
}
}
}),null));
dv.cljs_emotion_reagent.r_class_names = (new borkdude.dynaload.LazyVar((function (){
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.util !== 'undefined') && (typeof reagent.impl.util.class_names !== 'undefined')){
return reagent.impl.util.class_names;
} else {
var temp__5751__auto__ = cljs.core.find(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"default","default",-1987822328));
if(cljs.core.truth_(temp__5751__auto__)){
var e__46726__auto__ = temp__5751__auto__;
return cljs.core.val(e__46726__auto__);
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("reagent.impl.util","class-names","reagent.impl.util/class-names",714492372,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("reagent.impl.util","class-names","reagent.impl.util/class-names",714492372,null))," never required"].join('')));
}
}
}),null));
dv.cljs_emotion_reagent.emotion_hash = dv.cljs_emotion_reagent.goog$module$goog$object.get(module$node_modules$$emotion$hash$dist$hash_browser_cjs,"default");
dv.cljs_emotion_reagent.styled = dv.cljs_emotion_reagent.goog$module$goog$object.get(module$node_modules$$emotion$styled$dist$emotion_styled_browser_cjs,"default");
dv.cljs_emotion_reagent.jsx = module$node_modules$$emotion$react$dist$emotion_react_browser_cjs.jsx;
dv.cljs_emotion_reagent.obj_set = (function dv$cljs_emotion_reagent$obj_set(o,k,v){
return dv.cljs_emotion_reagent.goog$module$goog$object.set(o,k,v);
});
dv.cljs_emotion_reagent.obj_get = (function dv$cljs_emotion_reagent$obj_get(o,k){
return dv.cljs_emotion_reagent.goog$module$goog$object.get(o,k);
});
/**
 * Is it a reagent vector? (or a best effort guess at least.)
 */
dv.cljs_emotion_reagent.relement_QMARK_ = (function dv$cljs_emotion_reagent$relement_QMARK_(el){
var and__4251__auto__ = cljs.core.vector_QMARK_(el);
if(and__4251__auto__){
var item = cljs.core.first(el);
return (((item instanceof cljs.core.Keyword)) || ((((item instanceof cljs.core.Symbol)) || (cljs.core.fn_QMARK_(item)))));
} else {
return and__4251__auto__;
}
});
/**
 * Utility function that will force a lazy sequence of children (recursively) into realized
 *   vectors (React cannot deal with lazy seqs in production mode)
 */
dv.cljs_emotion_reagent.force_children = (function dv$cljs_emotion_reagent$force_children(x){
if(cljs.core.seq_QMARK_(x)){
return cljs.core.to_array(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(dv.cljs_emotion_reagent.force_children,x));
} else {
if(dv.cljs_emotion_reagent.relement_QMARK_(x)){
var fexpr__82346 = cljs.core.deref(dv.cljs_emotion_reagent.r_as_element);
return (fexpr__82346.cljs$core$IFn$_invoke$arity$1 ? fexpr__82346.cljs$core$IFn$_invoke$arity$1(x) : fexpr__82346.call(null,x));
} else {
return x;
}
}
});
dv.cljs_emotion_reagent.kebab__GT_camel = (function dv$cljs_emotion_reagent$kebab__GT_camel(prop){
if(clojure.string.starts_with_QMARK_(prop,".")){
return prop;
} else {
if(clojure.string.includes_QMARK_(prop,"-")){
var words = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,cljs.core.re_seq(/[a-zA-Z]+/,prop));
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.update.cljs$core$IFn$_invoke$arity$3(words,(0),clojure.string.lower_case));
} else {
return prop;
}
}
});
/**
 * Takes a clj map and returns that map modified.
 *   Postwalk replaces kebab keywords with camel case version as is expected by React.
 * 
 *   Also replaces styled components with their CSS classname when they appear in key position.
 */
dv.cljs_emotion_reagent.camelize_keys = (function dv$cljs_emotion_reagent$camelize_keys(style_map){
return clojure.walk.postwalk((function (v){
if((v instanceof cljs.core.Keyword)){
return dv.cljs_emotion_reagent.kebab__GT_camel(cljs.core.name(v));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(v);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(v),new cljs.core.Keyword("dv.cljs-emotion-reagent","hashed-name","dv.cljs-emotion-reagent/hashed-name",-314507080));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion-reagent","hashed-name","dv.cljs-emotion-reagent/hashed-name",-314507080).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))].join('');
} else {
return v;

}
}
}),style_map);
});
dv.cljs_emotion_reagent.keyframes = (function dv$cljs_emotion_reagent$keyframes(anim_map){
return module$node_modules$$emotion$react$dist$emotion_react_browser_cjs.keyframes(cljs.core.clj__GT_js(dv.cljs_emotion_reagent.camelize_keys(anim_map)));
});
dv.cljs_emotion_reagent.cljs_props_key = "dv.cljs-emotion/props";
/**
 * @define {string}
 */
dv.cljs_emotion_reagent.ADD_CLASSNAMES = goog.define("dv.cljs_emotion_reagent.ADD_CLASSNAMES","INITIAL");
dv.cljs_emotion_reagent.add_class_names_QMARK_ = (function dv$cljs_emotion_reagent$add_class_names_QMARK_(){
if(cljs.core.boolean_QMARK_(dv.cljs_emotion_reagent.ADD_CLASSNAMES)){
return dv.cljs_emotion_reagent.ADD_CLASSNAMES;
} else {
return goog.DEBUG;
}
});
dv.cljs_emotion_reagent.add_class_name = (function dv$cljs_emotion_reagent$add_class_name(props,class_name){
if(cljs.core.object_QMARK_(props)){
var G__82354 = props;
dv.cljs_emotion_reagent.obj_set(G__82354,"className",clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name,dv.cljs_emotion_reagent.obj_get(props,"className")], null))));

return G__82354;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"className","className",-1983287057),(function (p1__82353_SHARP_){
if((p1__82353_SHARP_ == null)){
return class_name;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__82353_SHARP_)].join('');
}
}));
}
});
dv.cljs_emotion_reagent.hashit = (function dv$cljs_emotion_reagent$hashit(string){
return ["dvcss-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((dv.cljs_emotion_reagent.emotion_hash.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion_reagent.emotion_hash.cljs$core$IFn$_invoke$arity$1(string) : dv.cljs_emotion_reagent.emotion_hash.call(null,string)))].join('');
});
dv.cljs_emotion_reagent.set_class_name = (function dv$cljs_emotion_reagent$set_class_name(props,class_name){
if(cljs.core.truth_(class_name)){
var hashed_name = dv.cljs_emotion_reagent.hashit(class_name);
var props__$1 = dv.cljs_emotion_reagent.add_class_name(props,hashed_name);
if(cljs.core.truth_(dv.cljs_emotion_reagent.add_class_names_QMARK_())){
return dv.cljs_emotion_reagent.add_class_name(props__$1,class_name);
} else {
return props__$1;
}
} else {
return props;
}
});
dv.cljs_emotion_reagent.map__GT_obj = (function dv$cljs_emotion_reagent$map__GT_obj(m){
return cljs.core.reduce_kv((function (o,k,v){
var new_k = (function (){var G__82357 = k;
if((((!((k == null))))?(((((k.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === k.cljs$core$INamed$))))?true:false):false)){
return cljs.core.name(G__82357);
} else {
return G__82357;
}
})();
var new_v = (function (){var G__82359 = v;
if(cljs.core.map_QMARK_(v)){
return (dv.cljs_emotion_reagent.map__GT_obj.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion_reagent.map__GT_obj.cljs$core$IFn$_invoke$arity$1(G__82359) : dv.cljs_emotion_reagent.map__GT_obj.call(null,G__82359));
} else {
return G__82359;
}
})();
var G__82360 = o;
dv.cljs_emotion_reagent.obj_set(G__82360,new_k,new_v);

return G__82360;
}),({}),m);
});
/**
 * Allows using kebab-case prop names.
 */
dv.cljs_emotion_reagent.make_js_props = (function dv$cljs_emotion_reagent$make_js_props(props,class_name){
var clss = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = (function (){var G__82361 = props;
if(cljs.core.truth_(clss)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82361,new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var fexpr__82362 = cljs.core.deref(dv.cljs_emotion_reagent.r_class_names);
return (fexpr__82362.cljs$core$IFn$_invoke$arity$1 ? fexpr__82362.cljs$core$IFn$_invoke$arity$1(clss) : fexpr__82362.call(null,clss));
})());
} else {
return G__82361;
}
})();
var clj_props = dv.cljs_emotion_reagent.set_class_name(props__$1,class_name);
var js_props = (function (){var fexpr__82363 = cljs.core.deref(dv.cljs_emotion_reagent.r_convert_prop_value);
return (fexpr__82363.cljs$core$IFn$_invoke$arity$1 ? fexpr__82363.cljs$core$IFn$_invoke$arity$1(props__$1) : fexpr__82363.call(null,props__$1));
})();
var js_props__$1 = dv.cljs_emotion_reagent.set_class_name(js_props,class_name);
var G__82364 = js_props__$1;
dv.cljs_emotion_reagent.obj_set(G__82364,dv.cljs_emotion_reagent.cljs_props_key,clj_props);

return G__82364;
});
dv.cljs_emotion_reagent.react_factory = (function dv$cljs_emotion_reagent$react_factory(el,class_name){
return (function() {
var G__82390 = null;
var G__82390__0 = (function (){
return module$node_modules$react$index.createElement(el,cljs.core.clj__GT_js(dv.cljs_emotion_reagent.set_class_name(cljs.core.PersistentArrayMap.EMPTY,class_name)));
});
var G__82390__1 = (function (props){
try{if(cljs.core.truth_((function (){var or__4253__auto__ = module$node_modules$react$index.isValidElement(props);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return typeof props === 'string';
}
})())){
return module$node_modules$react$index.createElement(el,dv.cljs_emotion_reagent.set_class_name(({}),class_name),props);
} else {
if(cljs.core.map_QMARK_(props)){
var props__$1 = dv.cljs_emotion_reagent.make_js_props(props,class_name);
return module$node_modules$react$index.createElement(el,props__$1);
} else {
if(cljs.core.object_QMARK_(props)){
return module$node_modules$react$index.createElement(el,dv.cljs_emotion_reagent.set_class_name(props,class_name));
} else {
if(dv.cljs_emotion_reagent.relement_QMARK_(props)){
return module$node_modules$react$index.createElement(el,dv.cljs_emotion_reagent.set_class_name(({}),class_name),(function (){var fexpr__82369 = cljs.core.deref(dv.cljs_emotion_reagent.r_as_element);
return (fexpr__82369.cljs$core$IFn$_invoke$arity$1 ? fexpr__82369.cljs$core$IFn$_invoke$arity$1(props) : fexpr__82369.call(null,props));
})());
} else {
if(cljs.core.seq_QMARK_(props)){
return module$node_modules$react$index.createElement(el,dv.cljs_emotion_reagent.set_class_name(({}),class_name),dv.cljs_emotion_reagent.force_children(props));
} else {
if(cljs.core.array_QMARK_(props)){
return module$node_modules$react$index.createElement(el,dv.cljs_emotion_reagent.set_class_name(({}),class_name),props);
} else {
return module$node_modules$react$index.createElement(el,dv.cljs_emotion_reagent.set_class_name(({}),class_name));

}
}
}
}
}
}
}catch (e82367){if((e82367 instanceof Object)){
var e = e82367;
return console.error("Error invoking an emotion styled component: ",e);
} else {
throw e82367;

}
}});
var G__82390__2 = (function() { 
var G__82392__delegate = function (props,children){
if(((((cljs.core.object_QMARK_(props)) && (cljs.core.not(module$node_modules$react$index.isValidElement(props))))) || (cljs.core.map_QMARK_(props)))){
var js_props = dv.cljs_emotion_reagent.make_js_props(props,class_name);
if(cljs.core.seq(children)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,el,js_props,dv.cljs_emotion_reagent.force_children(children));
} else {
return module$node_modules$react$index.createElement(el,js_props);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,el,dv.cljs_emotion_reagent.set_class_name(({}),class_name),dv.cljs_emotion_reagent.force_children(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(props,children)));
}
};
var G__82392 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__82394__i = 0, G__82394__a = new Array(arguments.length -  1);
while (G__82394__i < G__82394__a.length) {G__82394__a[G__82394__i] = arguments[G__82394__i + 1]; ++G__82394__i;}
  children = new cljs.core.IndexedSeq(G__82394__a,0,null);
} 
return G__82392__delegate.call(this,props,children);};
G__82392.cljs$lang$maxFixedArity = 1;
G__82392.cljs$lang$applyTo = (function (arglist__82395){
var props = cljs.core.first(arglist__82395);
var children = cljs.core.rest(arglist__82395);
return G__82392__delegate(props,children);
});
G__82392.cljs$core$IFn$_invoke$arity$variadic = G__82392__delegate;
return G__82392;
})()
;
G__82390 = function(props,var_args){
var children = var_args;
switch(arguments.length){
case 0:
return G__82390__0.call(this);
case 1:
return G__82390__1.call(this,props);
default:
var G__82396 = null;
if (arguments.length > 1) {
var G__82397__i = 0, G__82397__a = new Array(arguments.length -  1);
while (G__82397__i < G__82397__a.length) {G__82397__a[G__82397__i] = arguments[G__82397__i + 1]; ++G__82397__i;}
G__82396 = new cljs.core.IndexedSeq(G__82397__a,0,null);
}
return G__82390__2.cljs$core$IFn$_invoke$arity$variadic(props, G__82396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82390.cljs$lang$maxFixedArity = 1;
G__82390.cljs$lang$applyTo = G__82390__2.cljs$lang$applyTo;
G__82390.cljs$core$IFn$_invoke$arity$0 = G__82390__0;
G__82390.cljs$core$IFn$_invoke$arity$1 = G__82390__1;
G__82390.cljs$core$IFn$_invoke$arity$variadic = G__82390__2.cljs$core$IFn$_invoke$arity$variadic;
return G__82390;
})()
});
dv.cljs_emotion_reagent.global_STAR_ = dv.cljs_emotion_reagent.react_factory(module$node_modules$$emotion$react$dist$emotion_react_browser_cjs.Global,null);
dv.cljs_emotion_reagent.global_style = (function dv$cljs_emotion_reagent$global_style(props){
return dv.cljs_emotion_reagent.global_STAR_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"styles","styles",1954480375),dv.cljs_emotion_reagent.camelize_keys(props)], null));
});
dv.cljs_emotion_reagent.theme_provider = (function dv$cljs_emotion_reagent$theme_provider(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82398 = arguments.length;
var i__4865__auto___82401 = (0);
while(true){
if((i__4865__auto___82401 < len__4864__auto___82398)){
args__4870__auto__.push((arguments[i__4865__auto___82401]));

var G__82402 = (i__4865__auto___82401 + (1));
i__4865__auto___82401 = G__82402;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return dv.cljs_emotion_reagent.theme_provider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(dv.cljs_emotion_reagent.theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
if(cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"theme","theme",-1247880880))){
} else {
throw (new Error("You must pass a :theme to the theme-provider."));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,module$node_modules$$emotion$react$dist$emotion_react_browser_cjs.ThemeProvider,cljs.core.clj__GT_js(props),dv.cljs_emotion_reagent.force_children(children));
}));

(dv.cljs_emotion_reagent.theme_provider.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dv.cljs_emotion_reagent.theme_provider.cljs$lang$applyTo = (function (seq82374){
var G__82375 = cljs.core.first(seq82374);
var seq82374__$1 = cljs.core.next(seq82374);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82375,seq82374__$1);
}));


//# sourceMappingURL=dv.cljs_emotion_reagent.js.map
