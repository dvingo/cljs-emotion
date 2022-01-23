goog.provide('dv.cljs_emotion');
goog.scope(function(){
  dv.cljs_emotion.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$emotion$hash$dist$hash_browser_cjs=shadow.js.require("module$node_modules$$emotion$hash$dist$hash_browser_cjs", {});
var module$node_modules$$emotion$styled$dist$emotion_styled_browser_cjs=shadow.js.require("module$node_modules$$emotion$styled$dist$emotion_styled_browser_cjs", {});
var module$node_modules$$emotion$react$dist$emotion_react_browser_cjs=shadow.js.require("module$node_modules$$emotion$react$dist$emotion_react_browser_cjs", {});
dv.cljs_emotion.emotion_hash = dv.cljs_emotion.goog$module$goog$object.get(module$node_modules$$emotion$hash$dist$hash_browser_cjs,"default");
dv.cljs_emotion.styled = dv.cljs_emotion.goog$module$goog$object.get(module$node_modules$$emotion$styled$dist$emotion_styled_browser_cjs,"default");
dv.cljs_emotion.jsx = module$node_modules$$emotion$react$dist$emotion_react_browser_cjs.jsx;
dv.cljs_emotion.obj_set = (function dv$cljs_emotion$obj_set(o,k,v){
return dv.cljs_emotion.goog$module$goog$object.set(o,k,v);
});
dv.cljs_emotion.obj_get = (function dv$cljs_emotion$obj_get(o,k){
return dv.cljs_emotion.goog$module$goog$object.get(o,k);
});
/**
 * Utility function that will force a lazy sequence of children (recursively) into realized
 *   vectors (React cannot deal with lazy seqs in production mode)
 */
dv.cljs_emotion.force_children = (function dv$cljs_emotion$force_children(x){
if(cljs.core.seq_QMARK_(x)){
return cljs.core.to_array(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(dv.cljs_emotion.force_children,x));
} else {
return x;
}
});
dv.cljs_emotion.kebab__GT_camel = (function dv$cljs_emotion$kebab__GT_camel(prop){
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
 * Also replaces styled components with their css classname is key position.
 */
dv.cljs_emotion.camelize_keys = (function dv$cljs_emotion$camelize_keys(style_map){
return clojure.walk.postwalk((function dv$cljs_emotion$camelize_keys_$_in_walk(v){
if((v instanceof cljs.core.Keyword)){
return dv.cljs_emotion.kebab__GT_camel(cljs.core.name(v));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(v);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(v),new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))].join('');
} else {
return v;

}
}
}),style_map);
});
dv.cljs_emotion.keyframes = (function dv$cljs_emotion$keyframes(anim_map){
return module$node_modules$$emotion$react$dist$emotion_react_browser_cjs.keyframes(cljs.core.clj__GT_js(dv.cljs_emotion.camelize_keys(anim_map)));
});
dv.cljs_emotion.cljs_props_key = "dv.cljs-emotion/props";
/**
 * @define {string}
 */
dv.cljs_emotion.ADD_CLASSNAMES = goog.define("dv.cljs_emotion.ADD_CLASSNAMES","INITIAL");
dv.cljs_emotion.add_class_names_QMARK_ = (function dv$cljs_emotion$add_class_names_QMARK_(){
if(cljs.core.boolean_QMARK_(dv.cljs_emotion.ADD_CLASSNAMES)){
return dv.cljs_emotion.ADD_CLASSNAMES;
} else {
return goog.DEBUG;
}
});
dv.cljs_emotion.add_class_name = (function dv$cljs_emotion$add_class_name(props,class_name){
if(cljs.core.object_QMARK_(props)){
var G__82356 = props;
dv.cljs_emotion.goog$module$goog$object.set(G__82356,"className",clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name,dv.cljs_emotion.goog$module$goog$object.get(props,"className")], null))));

return G__82356;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"className","className",-1983287057),(function (p1__82355_SHARP_){
if((p1__82355_SHARP_ == null)){
return class_name;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__82355_SHARP_)].join('');
}
}));
}
});
dv.cljs_emotion.hashit = (function dv$cljs_emotion$hashit(string){
return ["dvcss-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((dv.cljs_emotion.emotion_hash.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.emotion_hash.cljs$core$IFn$_invoke$arity$1(string) : dv.cljs_emotion.emotion_hash.call(null,string)))].join('');
});
dv.cljs_emotion.set_class_name = (function dv$cljs_emotion$set_class_name(props,class_name){
if(cljs.core.truth_(class_name)){
var hashed_name = dv.cljs_emotion.hashit(class_name);
var props__$1 = dv.cljs_emotion.add_class_name(props,hashed_name);
if(cljs.core.truth_(dv.cljs_emotion.add_class_names_QMARK_())){
return dv.cljs_emotion.add_class_name(props__$1,class_name);
} else {
return props__$1;
}
} else {
return props;
}
});
dv.cljs_emotion.map__GT_obj = (function dv$cljs_emotion$map__GT_obj(m){
return cljs.core.reduce_kv((function (o,k,v){
var new_k = (function (){var G__82365 = k;
if((((!((k == null))))?(((((k.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === k.cljs$core$INamed$))))?true:false):false)){
return cljs.core.name(G__82365);
} else {
return G__82365;
}
})();
var new_v = (function (){var G__82368 = v;
if(cljs.core.map_QMARK_(v)){
return (dv.cljs_emotion.map__GT_obj.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.map__GT_obj.cljs$core$IFn$_invoke$arity$1(G__82368) : dv.cljs_emotion.map__GT_obj.call(null,G__82368));
} else {
return G__82368;
}
})();
var G__82370 = o;
dv.cljs_emotion.obj_set(G__82370,new_k,new_v);

return G__82370;
}),({}),m);
});
dv.cljs_emotion.make_js_props = (function dv$cljs_emotion$make_js_props(props,class_name){
var clj_props = dv.cljs_emotion.set_class_name(props,class_name);
var js_props = dv.cljs_emotion.map__GT_obj(clj_props);
var G__82371 = js_props;
dv.cljs_emotion.obj_set(G__82371,dv.cljs_emotion.cljs_props_key,clj_props);

return G__82371;
});
dv.cljs_emotion.react_factory = (function dv$cljs_emotion$react_factory(el,class_name){
return (function() {
var G__82421 = null;
var G__82421__0 = (function (){
return module$node_modules$react$index.createElement(el,cljs.core.clj__GT_js(dv.cljs_emotion.set_class_name(cljs.core.PersistentArrayMap.EMPTY,class_name)));
});
var G__82421__1 = (function (props){
try{if(cljs.core.truth_((function (){var or__4253__auto__ = module$node_modules$react$index.isValidElement(props);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return typeof props === 'string';
}
})())){
return module$node_modules$react$index.createElement(el,dv.cljs_emotion.set_class_name(({}),class_name),props);
} else {
if(cljs.core.map_QMARK_(props)){
return module$node_modules$react$index.createElement(el,dv.cljs_emotion.make_js_props(props,class_name));
} else {
if(cljs.core.object_QMARK_(props)){
return module$node_modules$react$index.createElement(el,dv.cljs_emotion.set_class_name(props,class_name));
} else {
if(((cljs.core.array_QMARK_(props)) || (cljs.core.coll_QMARK_(props)))){
return module$node_modules$react$index.createElement(el,dv.cljs_emotion.set_class_name(({}),class_name),dv.cljs_emotion.force_children(props));
} else {
return module$node_modules$react$index.createElement(el,dv.cljs_emotion.set_class_name(({}),class_name));

}
}
}
}
}catch (e82373){if((e82373 instanceof Object)){
var e = e82373;
return console.error("Error invoking an emotion styled component: ",e);
} else {
throw e82373;

}
}});
var G__82421__2 = (function() { 
var G__82424__delegate = function (props,children){
if(((((cljs.core.object_QMARK_(props)) && (cljs.core.not(module$node_modules$react$index.isValidElement(props))))) || (cljs.core.map_QMARK_(props)))){
var js_props = dv.cljs_emotion.make_js_props(props,class_name);
if(cljs.core.seq(children)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,el,js_props,dv.cljs_emotion.force_children(children));
} else {
return module$node_modules$react$index.createElement(el,js_props);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,el,dv.cljs_emotion.set_class_name(({}),class_name),dv.cljs_emotion.force_children(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(props,children)));
}
};
var G__82424 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__82430__i = 0, G__82430__a = new Array(arguments.length -  1);
while (G__82430__i < G__82430__a.length) {G__82430__a[G__82430__i] = arguments[G__82430__i + 1]; ++G__82430__i;}
  children = new cljs.core.IndexedSeq(G__82430__a,0,null);
} 
return G__82424__delegate.call(this,props,children);};
G__82424.cljs$lang$maxFixedArity = 1;
G__82424.cljs$lang$applyTo = (function (arglist__82431){
var props = cljs.core.first(arglist__82431);
var children = cljs.core.rest(arglist__82431);
return G__82424__delegate(props,children);
});
G__82424.cljs$core$IFn$_invoke$arity$variadic = G__82424__delegate;
return G__82424;
})()
;
G__82421 = function(props,var_args){
var children = var_args;
switch(arguments.length){
case 0:
return G__82421__0.call(this);
case 1:
return G__82421__1.call(this,props);
default:
var G__82432 = null;
if (arguments.length > 1) {
var G__82433__i = 0, G__82433__a = new Array(arguments.length -  1);
while (G__82433__i < G__82433__a.length) {G__82433__a[G__82433__i] = arguments[G__82433__i + 1]; ++G__82433__i;}
G__82432 = new cljs.core.IndexedSeq(G__82433__a,0,null);
}
return G__82421__2.cljs$core$IFn$_invoke$arity$variadic(props, G__82432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82421.cljs$lang$maxFixedArity = 1;
G__82421.cljs$lang$applyTo = G__82421__2.cljs$lang$applyTo;
G__82421.cljs$core$IFn$_invoke$arity$0 = G__82421__0;
G__82421.cljs$core$IFn$_invoke$arity$1 = G__82421__1;
G__82421.cljs$core$IFn$_invoke$arity$variadic = G__82421__2.cljs$core$IFn$_invoke$arity$variadic;
return G__82421;
})()
});
dv.cljs_emotion.global_STAR_ = dv.cljs_emotion.react_factory(module$node_modules$$emotion$react$dist$emotion_react_browser_cjs.Global,null);
dv.cljs_emotion.global_style = (function dv$cljs_emotion$global_style(props){
return dv.cljs_emotion.global_STAR_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"styles","styles",1954480375),dv.cljs_emotion.camelize_keys(props)], null));
});
dv.cljs_emotion.theme_provider = (function dv$cljs_emotion$theme_provider(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82435 = arguments.length;
var i__4865__auto___82436 = (0);
while(true){
if((i__4865__auto___82436 < len__4864__auto___82435)){
args__4870__auto__.push((arguments[i__4865__auto___82436]));

var G__82437 = (i__4865__auto___82436 + (1));
i__4865__auto___82436 = G__82437;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return dv.cljs_emotion.theme_provider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(dv.cljs_emotion.theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
if(cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"theme","theme",-1247880880))){
} else {
throw (new Error("You must pass a :theme to the theme-provider."));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,module$node_modules$$emotion$react$dist$emotion_react_browser_cjs.ThemeProvider,cljs.core.clj__GT_js(props),dv.cljs_emotion.force_children(children));
}));

(dv.cljs_emotion.theme_provider.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dv.cljs_emotion.theme_provider.cljs$lang$applyTo = (function (seq82382){
var G__82383 = cljs.core.first(seq82382);
var seq82382__$1 = cljs.core.next(seq82382);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82383,seq82382__$1);
}));


//# sourceMappingURL=dv.cljs_emotion.js.map
