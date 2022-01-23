goog.provide('com.fulcrologic.fulcro_css.css_injection');
com.fulcrologic.fulcro_css.css_injection.error = (function com$fulcrologic$fulcro_css$css_injection$error(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58173 = arguments.length;
var i__4865__auto___58174 = (0);
while(true){
if((i__4865__auto___58174 < len__4864__auto___58173)){
args__4870__auto__.push((arguments[i__4865__auto___58174]));

var G__58175 = (i__4865__auto___58174 + (1));
i__4865__auto___58174 = G__58175;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.css_injection.error.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.css_injection.error.cljs$core$IFn$_invoke$arity$variadic = (function (msg){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.log,msg);
}));

(com.fulcrologic.fulcro_css.css_injection.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.css_injection.error.cljs$lang$applyTo = (function (seq58099){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58099));
}));

com.fulcrologic.fulcro_css.css_injection.component_css_includes_with_depth = (function com$fulcrologic$fulcro_css$css_injection$component_css_includes_with_depth(component,breadth,depth){
var includes = (com.fulcrologic.fulcro_css.css.get_includes.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.css.get_includes.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro_css.css.get_includes.call(null,component));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__58104_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","depth","com.fulcrologic.fulcro-css.css-injection/depth",-1616141168),new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","breadth","com.fulcrologic.fulcro-css.css-injection/breadth",2102094438),new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","component","com.fulcrologic.fulcro-css.css-injection/component",-2105696298)],[(depth + (1)),breadth,p1__58104_SHARP_]);
})),includes),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58105_SHARP_){
var G__58108 = p1__58105_SHARP_;
var G__58109 = breadth;
var G__58110 = (depth + (1));
return (com.fulcrologic.fulcro_css.css_injection.component_css_includes_with_depth.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro_css.css_injection.component_css_includes_with_depth.cljs$core$IFn$_invoke$arity$3(G__58108,G__58109,G__58110) : com.fulcrologic.fulcro_css.css_injection.component_css_includes_with_depth.call(null,G__58108,G__58109,G__58110));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([includes], 0)));
});
/**
 * Scan the given component and return an ordered vector of the css rules in depth-first order.
 *   `order` can be :depth-first (default) or :breadth-first
 */
com.fulcrologic.fulcro_css.css_injection.find_css_nodes = (function com$fulcrologic$fulcro_css$css_injection$find_css_nodes(p__58115){
var map__58116 = p__58115;
var map__58116__$1 = cljs.core.__destructure_map(map__58116);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58116__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58116__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58116__$1,new cljs.core.Keyword(null,"state-map","state-map",-1313872128));
var query = ((cljs.core.map_QMARK_(state_map))?com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map):com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(component));
var ast = edn_query_language.core.query__GT_ast(query);
var breadth = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var traverse = (function com$fulcrologic$fulcro_css$css_injection$find_css_nodes_$_traverse_STAR_(p__58120,depth){
var map__58122 = p__58120;
var map__58122__$1 = cljs.core.__destructure_map(map__58122);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58122__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58122__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__58123 = cljs.core.PersistentVector.EMPTY;
var G__58123__$1 = (cljs.core.truth_((function (){var and__4251__auto__ = component__$1;
if(cljs.core.truth_(and__4251__auto__)){
return (com.fulcrologic.fulcro_css.css.CSS_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.css.CSS_QMARK_.cljs$core$IFn$_invoke$arity$1(component__$1) : com.fulcrologic.fulcro_css.css.CSS_QMARK_.call(null,component__$1));
} else {
return and__4251__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58123,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","depth","com.fulcrologic.fulcro-css.css-injection/depth",-1616141168),depth,new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","breadth","com.fulcrologic.fulcro-css.css-injection/breadth",2102094438),cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(breadth,cljs.core.inc),new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","component","com.fulcrologic.fulcro-css.css-injection/component",-2105696298),component__$1], null)):G__58123);
if(cljs.core.truth_(component__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__58123__$1,com.fulcrologic.fulcro_css.css_injection.component_css_includes_with_depth(component__$1,cljs.core.deref(breadth),depth));
} else {
return G__58123__$1;
}
})(),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58111_SHARP_){
return com$fulcrologic$fulcro_css$css_injection$find_css_nodes_$_traverse_STAR_(p1__58111_SHARP_,(depth + (1)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(children)], 0)));
});
var nodes = traverse(ast,(0));
var ordered_nodes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(order,new cljs.core.Keyword(null,"breadth-first","breadth-first",141527627)))?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","breadth","com.fulcrologic.fulcro-css.css-injection/breadth",2102094438),nodes):cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__58113_SHARP_){
return (- new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","depth","com.fulcrologic.fulcro-css.css-injection/depth",-1616141168).cljs$core$IFn$_invoke$arity$1(p1__58113_SHARP_));
}),nodes));
var unique_nodes = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","component","com.fulcrologic.fulcro-css.css-injection/component",-2105696298),ordered_nodes));
if(cljs.core.truth_(query)){
} else {
com.fulcrologic.fulcro_css.css_injection.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Auto-include was used for CSS, but the component had no query! No CSS Found."], 0));
}

return unique_nodes;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro-css.css-injection","find-css-nodes","com.fulcrologic.fulcro-css.css-injection/find-css-nodes",-1064274841,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),cljs.core.seq_QMARK_,null,null),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),null,null,null));
var get_rules_58184 = (function (components){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__58131_SHARP_,p2__58132_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__58131_SHARP_,com.fulcrologic.fulcro_css.css.get_css_rules(p2__58132_SHARP_));
}),cljs.core.PersistentVector.EMPTY,components);
});
/**
 * Compute the stringified CSS based on the given props. This can be used to generate a
 *  server-side version of CSS for the initial DOM, and is used the other injection functions to compute
 *  the CSS.
 * 
 *  Props are as described in `style-element`.
 *  
 */
com.fulcrologic.fulcro_css.css_injection.compute_css = (function com$fulcrologic$fulcro_css$css_injection$compute_css(props){
if(((cljs.core.map_QMARK_(props)) && (cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"component","component",1555936782))))){
} else {
throw (new Error(["Assert failed: ","Argument must be a map that contains the key :component","\n","(and (map? props) (contains? props :component))"].join('')));
}

var map__58134 = props;
var map__58134__$1 = cljs.core.__destructure_map(map__58134);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58134__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var auto_include_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58134__$1,new cljs.core.Keyword(null,"auto-include?","auto-include?",-351901260));
var garden_flags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58134__$1,new cljs.core.Keyword(null,"garden-flags","garden-flags",1977044577),cljs.core.PersistentArrayMap.EMPTY);
var rules = ((auto_include_QMARK_ === false)?(function (){var G__58137 = component;
if((G__58137 == null)){
return null;
} else {
return com.fulcrologic.fulcro_css.css.get_css(G__58137);
}
})():(function (){var G__58138 = com.fulcrologic.fulcro_css.css_injection.find_css_nodes(props);
if((G__58138 == null)){
return null;
} else {
return get_rules_58184(G__58138);
}
})());
var css = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_flags,rules], 0));
return css;
});

var options__48885__auto___58185 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var css = com.fulcrologic.fulcro_css.css_injection.compute_css((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$)));
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),css], null));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$fulcro_css$css_injection$render_StyleElement(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__58144 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__58144__$1 = cljs.core.__destructure_map(map__58144);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58144__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58144__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"css","css",1135045163))], null)], null)], null),null);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro_css !== 'undefined') && (typeof com.fulcrologic.fulcro_css.css_injection !== 'undefined') && (typeof com.fulcrologic.fulcro_css.css_injection.StyleElement !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.fulcro_css.css_injection.StyleElement = (function com$fulcrologic$fulcro_css$css_injection$StyleElement(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___58187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___58185,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___58187)){
var init_state__48888__auto___58188 = temp__5751__auto___58187;
(this__48887__auto__.state = (function (){var obj58150 = ({"fulcro$state":(function (){var G__58151 = this__48887__auto__;
var G__58152 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___58188.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___58188.cljs$core$IFn$_invoke$arity$2(G__58151,G__58152) : init_state__48888__auto___58188.call(null,G__58151,G__58152));
})()});
return obj58150;
})());
} else {
(this__48887__auto__.state = (function (){var obj58155 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj58155;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.fulcro_css.css_injection.StyleElement,new cljs.core.Keyword("com.fulcrologic.fulcro-css.css-injection","StyleElement","com.fulcrologic.fulcro-css.css-injection/StyleElement",-907012031),options__48885__auto___58185);
var factory_58190 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro_css.css_injection.StyleElement);
/**
 * Renders a style element. Valid props are:
 * 
 *   - `:component`: (REQUIRED) The UI component to pull CSS from. Class or instance allowed.
 *   - `:order`: (optional)  `:depth-first` (default) or `:breadth-first` (legacy order)
 *   - `:react-key` : (optional) A React key. Changing the key will force it to update the CSS (which is otherwise caches for performance)
 *   - `:auto-include?`: (optional) When set to true (default) it will use the component query to recursively scan for
 *     CSS instead of explicit includes. When set to (exactly) `false` then it ONLY uses the user-declared inclusions on
 *     the component.
 *   - `:garden-flags`: (optional) A map with [garden compiler flags](https://github.com/noprompt/garden/wiki/Compiler#flags)
 * 
 *  The resulting React style element avoids re-rendering unless the props change, and the CSS is cached at component mount; therefore
 *  this element will avoid all overhead on refresh. In development you may wish to have the CSS change on hot code reload, in which case
 *  you can simply change the `:react-key` on the props to force a re-mount (which will recompute the CSS).
 *  
 */
com.fulcrologic.fulcro_css.css_injection.style_element = (function com$fulcrologic$fulcro_css$css_injection$style_element(props){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = (function (){var G__58161 = props;
if(cljs.core.truth_((com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,component)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58161,new cljs.core.Keyword(null,"state-map","state-map",-1313872128),(function (){var G__58163 = component;
var G__58163__$1 = (((G__58163 == null))?null:com.fulcrologic.fulcro.components.any__GT_app(G__58163));
if((G__58163__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(G__58163__$1);
}
})()),new cljs.core.Keyword(null,"component","component",1555936782),com.fulcrologic.fulcro.components.react_type);
} else {
return G__58161;
}
})();
return (factory_58190.cljs$core$IFn$_invoke$arity$1 ? factory_58190.cljs$core$IFn$_invoke$arity$1(props__$1) : factory_58190.call(null,props__$1));
});
/**
 * Remove the given element from the DOM by ID
 */
com.fulcrologic.fulcro_css.css_injection.remove_from_dom = (function com$fulcrologic$fulcro_css$css_injection$remove_from_dom(id){
var temp__5751__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5751__auto__)){
var old_element = temp__5751__auto__;
var parent = old_element.parentNode;
return parent.removeChild(old_element);
} else {
return null;
}
});
/**
 * (Re)place the STYLE element with the provided ID on the document's low-level DOM with the co-located CSS of
 *   the specified component.
 * 
 *   The `options` is the same as passed to `style-element`:
 * 
 *   - `:component`: (REQUIRED) The UI component to pull CSS from. Class or instance allowed.
 *   - `:order`: (optional)  `:depth-first` (default) or `:breadth-first` (legacy order)
 *   - `:react-key` : (optional) A React key. Changing the key will force it to update the CSS (which is otherwise caches for performance)
 *   - `:auto-include?`: (optional) When set to true (default) it will use the component query to recursively scan for
 *     CSS instead of explicit includes. When set to (exactly) `false` then it ONLY uses the user-declared inclusions on
 *     the component.
 *   - `:garden-flags`: (optional) A map with [garden compiler flags](https://github.com/noprompt/garden/wiki/Compiler#flags)
 * 
 *   ONLY WORKS FOR CLJS, since otherwise there is no DOM to change.
 */
com.fulcrologic.fulcro_css.css_injection.upsert_css = (function com$fulcrologic$fulcro_css$css_injection$upsert_css(id,options){
if(((cljs.core.map_QMARK_(options)) && (cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"component","component",1555936782))))){
} else {
throw (new Error(["Assert failed: ","Argument must be a map that contains the key :component","\n","(and (map? options) (contains? options :component))"].join('')));
}

com.fulcrologic.fulcro_css.css_injection.remove_from_dom(id);

var style_ele = document.createElement("style");
var css = com.fulcrologic.fulcro_css.css_injection.compute_css(options);
(style_ele.innerHTML = css);

style_ele.setAttribute("id",id);

return document.body.appendChild(style_ele);
});

//# sourceMappingURL=com.fulcrologic.fulcro_css.css_injection.js.map
