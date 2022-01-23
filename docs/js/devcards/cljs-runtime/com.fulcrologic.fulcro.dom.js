goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return React.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__52595){
var vec__52596 = p__52595;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52596,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52596,(1),null);
var pair = vec__52596;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__52603){
var vec__52612 = p__52603;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52612,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52612,(1),null);
var pair = vec__52612;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__52620){
var vec__52621 = p__52620;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52621,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52621,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__52624 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52624,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__52624;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__52641 = arguments.length;
switch (G__52641) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__52643 = component.refs;
var G__52643__$1 = (((G__52643 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__52643,name));
if((G__52643__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__52643__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5751__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5751__auto__)){
var ref = temp__5751__auto__;
var G__52655 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__52660 = (function (){var G__52661 = r;
if((G__52661 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__52661);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__52660) : ref.call(null,G__52660));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__52655) : factory.call(null,G__52655));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__52666 = arguments.length;
switch (G__52666) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___55787 = arguments.length;
var i__4865__auto___55789 = (0);
while(true){
if((i__4865__auto___55789 < len__4864__auto___55787)){
args_arr__4885__auto__.push((arguments[i__4865__auto___55789]));

var G__55792 = (i__4865__auto___55789 + (1));
i__4865__auto___55789 = G__55792;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq52663){
var G__52664 = cljs.core.first(seq52663);
var seq52663__$1 = cljs.core.next(seq52663);
var G__52665 = cljs.core.first(seq52663__$1);
var seq52663__$2 = cljs.core.next(seq52663__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52664,G__52665,seq52663__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4251__auto__ = tag;
if(cljs.core.truth_(and__4251__auto__)){
var G__52686 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__52686) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__52686));
} else {
return and__4251__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return React.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,React.Component);

var x52705_55809 = ctor.prototype;
(x52705_55809.onChange = (function (event){
var this$ = this;
var temp__5753__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5753__auto__)){
var handler = temp__5753__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x52705_55809.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__52689_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__52689_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4251__auto__ = state_value;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = element_value;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,-974248066,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x52705_55809.render = (function (){
var this$ = this;
return React.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__55812__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.createElement,ctor,args);
};
var G__55812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55813__i = 0, G__55813__a = new Array(arguments.length -  0);
while (G__55813__i < G__55813__a.length) {G__55813__a[G__55813__i] = arguments[G__55813__i + 0]; ++G__55813__i;}
  args = new cljs.core.IndexedSeq(G__55813__a,0,null);
} 
return G__55812__delegate.call(this,args);};
G__55812.cljs$lang$maxFixedArity = 0;
G__55812.cljs$lang$applyTo = (function (arglist__55814){
var args = cljs.core.seq(arglist__55814);
return G__55812__delegate(args);
});
G__55812.cljs$core$IFn$_invoke$arity$variadic = G__55812__delegate;
return G__55812;
})()
;
return (function() { 
var G__55815__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"input",props,children);
} else {
var temp__5751__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__55815 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__55822__i = 0, G__55822__a = new Array(arguments.length -  1);
while (G__55822__i < G__55822__a.length) {G__55822__a[G__55822__i] = arguments[G__55822__i + 1]; ++G__55822__i;}
  children = new cljs.core.IndexedSeq(G__55822__a,0,null);
} 
return G__55815__delegate.call(this,props,children);};
G__55815.cljs$lang$maxFixedArity = 1;
G__55815.cljs$lang$applyTo = (function (arglist__55824){
var props = cljs.core.first(arglist__55824);
var children = cljs.core.rest(arglist__55824);
return G__55815__delegate(props,children);
});
G__55815.cljs$core$IFn$_invoke$arity$variadic = G__55815__delegate;
return G__55815;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__52755 = tag;
switch (G__52755) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52755)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__52763 = arguments.length;
switch (G__52763) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__52774 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__52775 = cljs.core.seq(vec__52774);
var first__52776 = cljs.core.first(seq__52775);
var seq__52775__$1 = cljs.core.next(seq__52775);
var head = first__52776;
var tail = seq__52775__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__52778 = (function (){var G__52779 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52779,tail);

return G__52779;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52778) : f.call(null,G__52778));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__52780 = (function (){var G__52781 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52781,args);

return G__52781;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52780) : f.call(null,G__52780));
} else {
if(cljs.core.object_QMARK_(head)){
var G__52782 = (function (){var G__52783 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52783,tail);

return G__52783;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52782) : f.call(null,G__52782));
} else {
if(cljs.core.map_QMARK_(head)){
var G__52786 = (function (){var G__52788 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__52788,tail);

return G__52788;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52786) : f.call(null,G__52786));
} else {
var G__52789 = (function (){var G__52790 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52790,args);

return G__52790;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52789) : f.call(null,G__52789));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__52796 = arguments.length;
switch (G__52796) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__52808 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__52809 = cljs.core.seq(vec__52808);
var first__52810 = cljs.core.first(seq__52809);
var seq__52809__$1 = cljs.core.next(seq__52809);
var head = first__52810;
var tail = seq__52809__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__52815 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52815,tail);

return G__52815;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__52817 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52817,args);

return G__52817;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__52819 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52819,tail);

return G__52819;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__52824 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__52824,tail);

return G__52824;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__52828 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52828,args);

return G__52828;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55847 = arguments.length;
var i__4865__auto___55848 = (0);
while(true){
if((i__4865__auto___55848 < len__4864__auto___55847)){
args__4870__auto__.push((arguments[i__4865__auto___55848]));

var G__55849 = (i__4865__auto___55848 + (1));
i__4865__auto___55848 = G__55849;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52854 = conformed_args__51178__auto__;
var map__52854__$1 = cljs.core.__destructure_map(map__52854);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52854__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52854__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52854__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq52851){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52851));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55854 = arguments.length;
var i__4865__auto___55855 = (0);
while(true){
if((i__4865__auto___55855 < len__4864__auto___55854)){
args__4870__auto__.push((arguments[i__4865__auto___55855]));

var G__55857 = (i__4865__auto___55855 + (1));
i__4865__auto___55855 = G__55857;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52871 = conformed_args__51178__auto__;
var map__52871__$1 = cljs.core.__destructure_map(map__52871);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52871__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52871__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52871__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq52861){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52861));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55859 = arguments.length;
var i__4865__auto___55860 = (0);
while(true){
if((i__4865__auto___55860 < len__4864__auto___55859)){
args__4870__auto__.push((arguments[i__4865__auto___55860]));

var G__55863 = (i__4865__auto___55860 + (1));
i__4865__auto___55860 = G__55863;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52888 = conformed_args__51178__auto__;
var map__52888__$1 = cljs.core.__destructure_map(map__52888);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52888__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52888__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52888__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq52879){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52879));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55868 = arguments.length;
var i__4865__auto___55869 = (0);
while(true){
if((i__4865__auto___55869 < len__4864__auto___55868)){
args__4870__auto__.push((arguments[i__4865__auto___55869]));

var G__55871 = (i__4865__auto___55869 + (1));
i__4865__auto___55869 = G__55871;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52901 = conformed_args__51178__auto__;
var map__52901__$1 = cljs.core.__destructure_map(map__52901);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52901__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52901__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52901__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq52896){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52896));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55887 = arguments.length;
var i__4865__auto___55889 = (0);
while(true){
if((i__4865__auto___55889 < len__4864__auto___55887)){
args__4870__auto__.push((arguments[i__4865__auto___55889]));

var G__55890 = (i__4865__auto___55889 + (1));
i__4865__auto___55889 = G__55890;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52912 = conformed_args__51178__auto__;
var map__52912__$1 = cljs.core.__destructure_map(map__52912);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52912__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52912__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52912__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq52908){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52908));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55900 = arguments.length;
var i__4865__auto___55901 = (0);
while(true){
if((i__4865__auto___55901 < len__4864__auto___55900)){
args__4870__auto__.push((arguments[i__4865__auto___55901]));

var G__55904 = (i__4865__auto___55901 + (1));
i__4865__auto___55901 = G__55904;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52921 = conformed_args__51178__auto__;
var map__52921__$1 = cljs.core.__destructure_map(map__52921);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52921__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52921__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52921__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq52918){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52918));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55910 = arguments.length;
var i__4865__auto___55911 = (0);
while(true){
if((i__4865__auto___55911 < len__4864__auto___55910)){
args__4870__auto__.push((arguments[i__4865__auto___55911]));

var G__55913 = (i__4865__auto___55911 + (1));
i__4865__auto___55911 = G__55913;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52933 = conformed_args__51178__auto__;
var map__52933__$1 = cljs.core.__destructure_map(map__52933);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52933__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52933__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52933__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq52929){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52929));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55937 = arguments.length;
var i__4865__auto___55939 = (0);
while(true){
if((i__4865__auto___55939 < len__4864__auto___55937)){
args__4870__auto__.push((arguments[i__4865__auto___55939]));

var G__55941 = (i__4865__auto___55939 + (1));
i__4865__auto___55939 = G__55941;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52948 = conformed_args__51178__auto__;
var map__52948__$1 = cljs.core.__destructure_map(map__52948);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52948__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52948__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52948__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq52945){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52945));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55947 = arguments.length;
var i__4865__auto___55948 = (0);
while(true){
if((i__4865__auto___55948 < len__4864__auto___55947)){
args__4870__auto__.push((arguments[i__4865__auto___55948]));

var G__55949 = (i__4865__auto___55948 + (1));
i__4865__auto___55948 = G__55949;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52956 = conformed_args__51178__auto__;
var map__52956__$1 = cljs.core.__destructure_map(map__52956);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52956__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52956__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52956__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq52951){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52951));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55952 = arguments.length;
var i__4865__auto___55953 = (0);
while(true){
if((i__4865__auto___55953 < len__4864__auto___55952)){
args__4870__auto__.push((arguments[i__4865__auto___55953]));

var G__55954 = (i__4865__auto___55953 + (1));
i__4865__auto___55953 = G__55954;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52975 = conformed_args__51178__auto__;
var map__52975__$1 = cljs.core.__destructure_map(map__52975);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52975__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52975__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52975__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq52966){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52966));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55957 = arguments.length;
var i__4865__auto___55958 = (0);
while(true){
if((i__4865__auto___55958 < len__4864__auto___55957)){
args__4870__auto__.push((arguments[i__4865__auto___55958]));

var G__55959 = (i__4865__auto___55958 + (1));
i__4865__auto___55958 = G__55959;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52978 = conformed_args__51178__auto__;
var map__52978__$1 = cljs.core.__destructure_map(map__52978);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52978__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52978__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52978__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq52976){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52976));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55966 = arguments.length;
var i__4865__auto___55967 = (0);
while(true){
if((i__4865__auto___55967 < len__4864__auto___55966)){
args__4870__auto__.push((arguments[i__4865__auto___55967]));

var G__55968 = (i__4865__auto___55967 + (1));
i__4865__auto___55967 = G__55968;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52990 = conformed_args__51178__auto__;
var map__52990__$1 = cljs.core.__destructure_map(map__52990);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52990__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52990__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52990__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq52984){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52984));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55973 = arguments.length;
var i__4865__auto___55974 = (0);
while(true){
if((i__4865__auto___55974 < len__4864__auto___55973)){
args__4870__auto__.push((arguments[i__4865__auto___55974]));

var G__55975 = (i__4865__auto___55974 + (1));
i__4865__auto___55974 = G__55975;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53006 = conformed_args__51178__auto__;
var map__53006__$1 = cljs.core.__destructure_map(map__53006);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53006__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53006__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53006__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq53002){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53002));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55981 = arguments.length;
var i__4865__auto___55982 = (0);
while(true){
if((i__4865__auto___55982 < len__4864__auto___55981)){
args__4870__auto__.push((arguments[i__4865__auto___55982]));

var G__55983 = (i__4865__auto___55982 + (1));
i__4865__auto___55982 = G__55983;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53025 = conformed_args__51178__auto__;
var map__53025__$1 = cljs.core.__destructure_map(map__53025);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53025__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53025__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53025__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq53015){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53015));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55985 = arguments.length;
var i__4865__auto___55986 = (0);
while(true){
if((i__4865__auto___55986 < len__4864__auto___55985)){
args__4870__auto__.push((arguments[i__4865__auto___55986]));

var G__55991 = (i__4865__auto___55986 + (1));
i__4865__auto___55986 = G__55991;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53037 = conformed_args__51178__auto__;
var map__53037__$1 = cljs.core.__destructure_map(map__53037);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53037__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53037__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53037__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq53028){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53028));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56022 = arguments.length;
var i__4865__auto___56023 = (0);
while(true){
if((i__4865__auto___56023 < len__4864__auto___56022)){
args__4870__auto__.push((arguments[i__4865__auto___56023]));

var G__56029 = (i__4865__auto___56023 + (1));
i__4865__auto___56023 = G__56029;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53044 = conformed_args__51178__auto__;
var map__53044__$1 = cljs.core.__destructure_map(map__53044);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53044__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53044__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53044__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq53040){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53040));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56052 = arguments.length;
var i__4865__auto___56053 = (0);
while(true){
if((i__4865__auto___56053 < len__4864__auto___56052)){
args__4870__auto__.push((arguments[i__4865__auto___56053]));

var G__56059 = (i__4865__auto___56053 + (1));
i__4865__auto___56053 = G__56059;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53058 = conformed_args__51178__auto__;
var map__53058__$1 = cljs.core.__destructure_map(map__53058);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53058__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53058__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53058__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq53050){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53050));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56081 = arguments.length;
var i__4865__auto___56083 = (0);
while(true){
if((i__4865__auto___56083 < len__4864__auto___56081)){
args__4870__auto__.push((arguments[i__4865__auto___56083]));

var G__56084 = (i__4865__auto___56083 + (1));
i__4865__auto___56083 = G__56084;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53078 = conformed_args__51178__auto__;
var map__53078__$1 = cljs.core.__destructure_map(map__53078);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53078__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53078__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53078__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq53066){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53066));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56102 = arguments.length;
var i__4865__auto___56103 = (0);
while(true){
if((i__4865__auto___56103 < len__4864__auto___56102)){
args__4870__auto__.push((arguments[i__4865__auto___56103]));

var G__56105 = (i__4865__auto___56103 + (1));
i__4865__auto___56103 = G__56105;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53083 = conformed_args__51178__auto__;
var map__53083__$1 = cljs.core.__destructure_map(map__53083);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53083__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53083__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53083__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq53080){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53080));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56107 = arguments.length;
var i__4865__auto___56108 = (0);
while(true){
if((i__4865__auto___56108 < len__4864__auto___56107)){
args__4870__auto__.push((arguments[i__4865__auto___56108]));

var G__56109 = (i__4865__auto___56108 + (1));
i__4865__auto___56108 = G__56109;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53091 = conformed_args__51178__auto__;
var map__53091__$1 = cljs.core.__destructure_map(map__53091);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53091__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53091__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq53087){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53087));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56116 = arguments.length;
var i__4865__auto___56117 = (0);
while(true){
if((i__4865__auto___56117 < len__4864__auto___56116)){
args__4870__auto__.push((arguments[i__4865__auto___56117]));

var G__56120 = (i__4865__auto___56117 + (1));
i__4865__auto___56117 = G__56120;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53099 = conformed_args__51178__auto__;
var map__53099__$1 = cljs.core.__destructure_map(map__53099);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53099__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53099__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53099__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq53096){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53096));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56131 = arguments.length;
var i__4865__auto___56132 = (0);
while(true){
if((i__4865__auto___56132 < len__4864__auto___56131)){
args__4870__auto__.push((arguments[i__4865__auto___56132]));

var G__56133 = (i__4865__auto___56132 + (1));
i__4865__auto___56132 = G__56133;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53109 = conformed_args__51178__auto__;
var map__53109__$1 = cljs.core.__destructure_map(map__53109);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53109__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53109__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53109__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq53103){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53103));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56138 = arguments.length;
var i__4865__auto___56139 = (0);
while(true){
if((i__4865__auto___56139 < len__4864__auto___56138)){
args__4870__auto__.push((arguments[i__4865__auto___56139]));

var G__56141 = (i__4865__auto___56139 + (1));
i__4865__auto___56139 = G__56141;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53125 = conformed_args__51178__auto__;
var map__53125__$1 = cljs.core.__destructure_map(map__53125);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53125__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53125__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53125__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq53121){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53121));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56147 = arguments.length;
var i__4865__auto___56148 = (0);
while(true){
if((i__4865__auto___56148 < len__4864__auto___56147)){
args__4870__auto__.push((arguments[i__4865__auto___56148]));

var G__56150 = (i__4865__auto___56148 + (1));
i__4865__auto___56148 = G__56150;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53137 = conformed_args__51178__auto__;
var map__53137__$1 = cljs.core.__destructure_map(map__53137);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53137__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53137__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53137__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq53131){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53131));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56153 = arguments.length;
var i__4865__auto___56155 = (0);
while(true){
if((i__4865__auto___56155 < len__4864__auto___56153)){
args__4870__auto__.push((arguments[i__4865__auto___56155]));

var G__56156 = (i__4865__auto___56155 + (1));
i__4865__auto___56155 = G__56156;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53147 = conformed_args__51178__auto__;
var map__53147__$1 = cljs.core.__destructure_map(map__53147);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53147__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53147__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53147__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq53142){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53142));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56163 = arguments.length;
var i__4865__auto___56165 = (0);
while(true){
if((i__4865__auto___56165 < len__4864__auto___56163)){
args__4870__auto__.push((arguments[i__4865__auto___56165]));

var G__56167 = (i__4865__auto___56165 + (1));
i__4865__auto___56165 = G__56167;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53165 = conformed_args__51178__auto__;
var map__53165__$1 = cljs.core.__destructure_map(map__53165);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53165__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53165__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53165__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq53153){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53153));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56170 = arguments.length;
var i__4865__auto___56172 = (0);
while(true){
if((i__4865__auto___56172 < len__4864__auto___56170)){
args__4870__auto__.push((arguments[i__4865__auto___56172]));

var G__56173 = (i__4865__auto___56172 + (1));
i__4865__auto___56172 = G__56173;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53176 = conformed_args__51178__auto__;
var map__53176__$1 = cljs.core.__destructure_map(map__53176);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53176__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53176__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq53170){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53170));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56179 = arguments.length;
var i__4865__auto___56181 = (0);
while(true){
if((i__4865__auto___56181 < len__4864__auto___56179)){
args__4870__auto__.push((arguments[i__4865__auto___56181]));

var G__56182 = (i__4865__auto___56181 + (1));
i__4865__auto___56181 = G__56182;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53192 = conformed_args__51178__auto__;
var map__53192__$1 = cljs.core.__destructure_map(map__53192);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53192__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53192__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53192__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq53186){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53186));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56188 = arguments.length;
var i__4865__auto___56189 = (0);
while(true){
if((i__4865__auto___56189 < len__4864__auto___56188)){
args__4870__auto__.push((arguments[i__4865__auto___56189]));

var G__56190 = (i__4865__auto___56189 + (1));
i__4865__auto___56189 = G__56190;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53213 = conformed_args__51178__auto__;
var map__53213__$1 = cljs.core.__destructure_map(map__53213);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53213__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53213__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53213__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq53204){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53204));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56193 = arguments.length;
var i__4865__auto___56194 = (0);
while(true){
if((i__4865__auto___56194 < len__4864__auto___56193)){
args__4870__auto__.push((arguments[i__4865__auto___56194]));

var G__56195 = (i__4865__auto___56194 + (1));
i__4865__auto___56194 = G__56195;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53232 = conformed_args__51178__auto__;
var map__53232__$1 = cljs.core.__destructure_map(map__53232);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53232__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53232__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53232__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq53228){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53228));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56201 = arguments.length;
var i__4865__auto___56202 = (0);
while(true){
if((i__4865__auto___56202 < len__4864__auto___56201)){
args__4870__auto__.push((arguments[i__4865__auto___56202]));

var G__56205 = (i__4865__auto___56202 + (1));
i__4865__auto___56202 = G__56205;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53249 = conformed_args__51178__auto__;
var map__53249__$1 = cljs.core.__destructure_map(map__53249);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq53242){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53242));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56211 = arguments.length;
var i__4865__auto___56212 = (0);
while(true){
if((i__4865__auto___56212 < len__4864__auto___56211)){
args__4870__auto__.push((arguments[i__4865__auto___56212]));

var G__56213 = (i__4865__auto___56212 + (1));
i__4865__auto___56212 = G__56213;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53263 = conformed_args__51178__auto__;
var map__53263__$1 = cljs.core.__destructure_map(map__53263);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53263__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53263__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq53255){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53255));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56218 = arguments.length;
var i__4865__auto___56219 = (0);
while(true){
if((i__4865__auto___56219 < len__4864__auto___56218)){
args__4870__auto__.push((arguments[i__4865__auto___56219]));

var G__56221 = (i__4865__auto___56219 + (1));
i__4865__auto___56219 = G__56221;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53278 = conformed_args__51178__auto__;
var map__53278__$1 = cljs.core.__destructure_map(map__53278);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53278__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53278__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53278__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq53270){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53270));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56228 = arguments.length;
var i__4865__auto___56230 = (0);
while(true){
if((i__4865__auto___56230 < len__4864__auto___56228)){
args__4870__auto__.push((arguments[i__4865__auto___56230]));

var G__56231 = (i__4865__auto___56230 + (1));
i__4865__auto___56230 = G__56231;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53290 = conformed_args__51178__auto__;
var map__53290__$1 = cljs.core.__destructure_map(map__53290);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53290__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53290__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq53281){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53281));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56236 = arguments.length;
var i__4865__auto___56237 = (0);
while(true){
if((i__4865__auto___56237 < len__4864__auto___56236)){
args__4870__auto__.push((arguments[i__4865__auto___56237]));

var G__56238 = (i__4865__auto___56237 + (1));
i__4865__auto___56237 = G__56238;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53304 = conformed_args__51178__auto__;
var map__53304__$1 = cljs.core.__destructure_map(map__53304);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53304__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53304__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53304__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq53299){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53299));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56244 = arguments.length;
var i__4865__auto___56245 = (0);
while(true){
if((i__4865__auto___56245 < len__4864__auto___56244)){
args__4870__auto__.push((arguments[i__4865__auto___56245]));

var G__56246 = (i__4865__auto___56245 + (1));
i__4865__auto___56245 = G__56246;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53310 = conformed_args__51178__auto__;
var map__53310__$1 = cljs.core.__destructure_map(map__53310);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53310__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53310__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53310__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq53307){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53307));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56253 = arguments.length;
var i__4865__auto___56254 = (0);
while(true){
if((i__4865__auto___56254 < len__4864__auto___56253)){
args__4870__auto__.push((arguments[i__4865__auto___56254]));

var G__56256 = (i__4865__auto___56254 + (1));
i__4865__auto___56254 = G__56256;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53325 = conformed_args__51178__auto__;
var map__53325__$1 = cljs.core.__destructure_map(map__53325);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53325__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53325__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53325__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq53315){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53315));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56261 = arguments.length;
var i__4865__auto___56262 = (0);
while(true){
if((i__4865__auto___56262 < len__4864__auto___56261)){
args__4870__auto__.push((arguments[i__4865__auto___56262]));

var G__56263 = (i__4865__auto___56262 + (1));
i__4865__auto___56262 = G__56263;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53332 = conformed_args__51178__auto__;
var map__53332__$1 = cljs.core.__destructure_map(map__53332);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53332__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53332__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53332__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq53330){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53330));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56265 = arguments.length;
var i__4865__auto___56266 = (0);
while(true){
if((i__4865__auto___56266 < len__4864__auto___56265)){
args__4870__auto__.push((arguments[i__4865__auto___56266]));

var G__56267 = (i__4865__auto___56266 + (1));
i__4865__auto___56266 = G__56267;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53342 = conformed_args__51178__auto__;
var map__53342__$1 = cljs.core.__destructure_map(map__53342);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53342__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53342__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53342__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq53338){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53338));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56269 = arguments.length;
var i__4865__auto___56270 = (0);
while(true){
if((i__4865__auto___56270 < len__4864__auto___56269)){
args__4870__auto__.push((arguments[i__4865__auto___56270]));

var G__56271 = (i__4865__auto___56270 + (1));
i__4865__auto___56270 = G__56271;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53355 = conformed_args__51178__auto__;
var map__53355__$1 = cljs.core.__destructure_map(map__53355);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53355__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53355__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53355__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq53347){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53347));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56275 = arguments.length;
var i__4865__auto___56276 = (0);
while(true){
if((i__4865__auto___56276 < len__4864__auto___56275)){
args__4870__auto__.push((arguments[i__4865__auto___56276]));

var G__56277 = (i__4865__auto___56276 + (1));
i__4865__auto___56276 = G__56277;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53376 = conformed_args__51178__auto__;
var map__53376__$1 = cljs.core.__destructure_map(map__53376);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53376__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53376__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53376__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq53371){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53371));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56280 = arguments.length;
var i__4865__auto___56281 = (0);
while(true){
if((i__4865__auto___56281 < len__4864__auto___56280)){
args__4870__auto__.push((arguments[i__4865__auto___56281]));

var G__56282 = (i__4865__auto___56281 + (1));
i__4865__auto___56281 = G__56282;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53391 = conformed_args__51178__auto__;
var map__53391__$1 = cljs.core.__destructure_map(map__53391);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53391__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53391__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53391__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq53385){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53385));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56285 = arguments.length;
var i__4865__auto___56286 = (0);
while(true){
if((i__4865__auto___56286 < len__4864__auto___56285)){
args__4870__auto__.push((arguments[i__4865__auto___56286]));

var G__56287 = (i__4865__auto___56286 + (1));
i__4865__auto___56286 = G__56287;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53400 = conformed_args__51178__auto__;
var map__53400__$1 = cljs.core.__destructure_map(map__53400);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq53397){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53397));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56290 = arguments.length;
var i__4865__auto___56291 = (0);
while(true){
if((i__4865__auto___56291 < len__4864__auto___56290)){
args__4870__auto__.push((arguments[i__4865__auto___56291]));

var G__56292 = (i__4865__auto___56291 + (1));
i__4865__auto___56291 = G__56292;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53407 = conformed_args__51178__auto__;
var map__53407__$1 = cljs.core.__destructure_map(map__53407);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53407__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53407__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53407__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq53403){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53403));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56294 = arguments.length;
var i__4865__auto___56295 = (0);
while(true){
if((i__4865__auto___56295 < len__4864__auto___56294)){
args__4870__auto__.push((arguments[i__4865__auto___56295]));

var G__56296 = (i__4865__auto___56295 + (1));
i__4865__auto___56295 = G__56296;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53418 = conformed_args__51178__auto__;
var map__53418__$1 = cljs.core.__destructure_map(map__53418);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53418__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53418__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53418__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq53414){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53414));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56300 = arguments.length;
var i__4865__auto___56301 = (0);
while(true){
if((i__4865__auto___56301 < len__4864__auto___56300)){
args__4870__auto__.push((arguments[i__4865__auto___56301]));

var G__56303 = (i__4865__auto___56301 + (1));
i__4865__auto___56301 = G__56303;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53434 = conformed_args__51178__auto__;
var map__53434__$1 = cljs.core.__destructure_map(map__53434);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq53426){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53426));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56305 = arguments.length;
var i__4865__auto___56306 = (0);
while(true){
if((i__4865__auto___56306 < len__4864__auto___56305)){
args__4870__auto__.push((arguments[i__4865__auto___56306]));

var G__56307 = (i__4865__auto___56306 + (1));
i__4865__auto___56306 = G__56307;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53450 = conformed_args__51178__auto__;
var map__53450__$1 = cljs.core.__destructure_map(map__53450);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53450__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53450__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53450__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq53446){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53446));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56308 = arguments.length;
var i__4865__auto___56309 = (0);
while(true){
if((i__4865__auto___56309 < len__4864__auto___56308)){
args__4870__auto__.push((arguments[i__4865__auto___56309]));

var G__56310 = (i__4865__auto___56309 + (1));
i__4865__auto___56309 = G__56310;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53468 = conformed_args__51178__auto__;
var map__53468__$1 = cljs.core.__destructure_map(map__53468);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq53465){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53465));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56311 = arguments.length;
var i__4865__auto___56312 = (0);
while(true){
if((i__4865__auto___56312 < len__4864__auto___56311)){
args__4870__auto__.push((arguments[i__4865__auto___56312]));

var G__56313 = (i__4865__auto___56312 + (1));
i__4865__auto___56312 = G__56313;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53483 = conformed_args__51178__auto__;
var map__53483__$1 = cljs.core.__destructure_map(map__53483);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53483__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53483__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53483__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq53475){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53475));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56316 = arguments.length;
var i__4865__auto___56317 = (0);
while(true){
if((i__4865__auto___56317 < len__4864__auto___56316)){
args__4870__auto__.push((arguments[i__4865__auto___56317]));

var G__56318 = (i__4865__auto___56317 + (1));
i__4865__auto___56317 = G__56318;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53501 = conformed_args__51178__auto__;
var map__53501__$1 = cljs.core.__destructure_map(map__53501);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53501__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53501__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53501__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq53490){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53490));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56320 = arguments.length;
var i__4865__auto___56321 = (0);
while(true){
if((i__4865__auto___56321 < len__4864__auto___56320)){
args__4870__auto__.push((arguments[i__4865__auto___56321]));

var G__56322 = (i__4865__auto___56321 + (1));
i__4865__auto___56321 = G__56322;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53515 = conformed_args__51178__auto__;
var map__53515__$1 = cljs.core.__destructure_map(map__53515);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53515__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53515__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53515__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq53511){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53511));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56324 = arguments.length;
var i__4865__auto___56325 = (0);
while(true){
if((i__4865__auto___56325 < len__4864__auto___56324)){
args__4870__auto__.push((arguments[i__4865__auto___56325]));

var G__56326 = (i__4865__auto___56325 + (1));
i__4865__auto___56325 = G__56326;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53534 = conformed_args__51178__auto__;
var map__53534__$1 = cljs.core.__destructure_map(map__53534);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53534__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53534__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53534__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq53523){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53523));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56328 = arguments.length;
var i__4865__auto___56329 = (0);
while(true){
if((i__4865__auto___56329 < len__4864__auto___56328)){
args__4870__auto__.push((arguments[i__4865__auto___56329]));

var G__56330 = (i__4865__auto___56329 + (1));
i__4865__auto___56329 = G__56330;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53546 = conformed_args__51178__auto__;
var map__53546__$1 = cljs.core.__destructure_map(map__53546);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq53539){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53539));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56333 = arguments.length;
var i__4865__auto___56334 = (0);
while(true){
if((i__4865__auto___56334 < len__4864__auto___56333)){
args__4870__auto__.push((arguments[i__4865__auto___56334]));

var G__56335 = (i__4865__auto___56334 + (1));
i__4865__auto___56334 = G__56335;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53557 = conformed_args__51178__auto__;
var map__53557__$1 = cljs.core.__destructure_map(map__53557);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53557__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53557__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53557__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq53552){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53552));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56336 = arguments.length;
var i__4865__auto___56337 = (0);
while(true){
if((i__4865__auto___56337 < len__4864__auto___56336)){
args__4870__auto__.push((arguments[i__4865__auto___56337]));

var G__56338 = (i__4865__auto___56337 + (1));
i__4865__auto___56337 = G__56338;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53571 = conformed_args__51178__auto__;
var map__53571__$1 = cljs.core.__destructure_map(map__53571);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53571__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53571__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53571__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq53564){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53564));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56341 = arguments.length;
var i__4865__auto___56342 = (0);
while(true){
if((i__4865__auto___56342 < len__4864__auto___56341)){
args__4870__auto__.push((arguments[i__4865__auto___56342]));

var G__56343 = (i__4865__auto___56342 + (1));
i__4865__auto___56342 = G__56343;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53580 = conformed_args__51178__auto__;
var map__53580__$1 = cljs.core.__destructure_map(map__53580);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53580__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53580__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53580__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq53577){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53577));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56348 = arguments.length;
var i__4865__auto___56349 = (0);
while(true){
if((i__4865__auto___56349 < len__4864__auto___56348)){
args__4870__auto__.push((arguments[i__4865__auto___56349]));

var G__56351 = (i__4865__auto___56349 + (1));
i__4865__auto___56349 = G__56351;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53636 = conformed_args__51178__auto__;
var map__53636__$1 = cljs.core.__destructure_map(map__53636);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53636__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53636__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53636__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq53612){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53612));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56355 = arguments.length;
var i__4865__auto___56357 = (0);
while(true){
if((i__4865__auto___56357 < len__4864__auto___56355)){
args__4870__auto__.push((arguments[i__4865__auto___56357]));

var G__56359 = (i__4865__auto___56357 + (1));
i__4865__auto___56357 = G__56359;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53650 = conformed_args__51178__auto__;
var map__53650__$1 = cljs.core.__destructure_map(map__53650);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53650__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53650__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53650__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq53647){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53647));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56367 = arguments.length;
var i__4865__auto___56369 = (0);
while(true){
if((i__4865__auto___56369 < len__4864__auto___56367)){
args__4870__auto__.push((arguments[i__4865__auto___56369]));

var G__56370 = (i__4865__auto___56369 + (1));
i__4865__auto___56369 = G__56370;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53661 = conformed_args__51178__auto__;
var map__53661__$1 = cljs.core.__destructure_map(map__53661);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53661__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53661__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53661__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq53659){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53659));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56372 = arguments.length;
var i__4865__auto___56373 = (0);
while(true){
if((i__4865__auto___56373 < len__4864__auto___56372)){
args__4870__auto__.push((arguments[i__4865__auto___56373]));

var G__56374 = (i__4865__auto___56373 + (1));
i__4865__auto___56373 = G__56374;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53691 = conformed_args__51178__auto__;
var map__53691__$1 = cljs.core.__destructure_map(map__53691);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53691__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53691__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53691__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq53673){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53673));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56380 = arguments.length;
var i__4865__auto___56381 = (0);
while(true){
if((i__4865__auto___56381 < len__4864__auto___56380)){
args__4870__auto__.push((arguments[i__4865__auto___56381]));

var G__56382 = (i__4865__auto___56381 + (1));
i__4865__auto___56381 = G__56382;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53713 = conformed_args__51178__auto__;
var map__53713__$1 = cljs.core.__destructure_map(map__53713);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53713__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53713__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53713__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq53710){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53710));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56385 = arguments.length;
var i__4865__auto___56386 = (0);
while(true){
if((i__4865__auto___56386 < len__4864__auto___56385)){
args__4870__auto__.push((arguments[i__4865__auto___56386]));

var G__56389 = (i__4865__auto___56386 + (1));
i__4865__auto___56386 = G__56389;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53719 = conformed_args__51178__auto__;
var map__53719__$1 = cljs.core.__destructure_map(map__53719);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53719__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53719__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53719__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq53715){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53715));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56391 = arguments.length;
var i__4865__auto___56392 = (0);
while(true){
if((i__4865__auto___56392 < len__4864__auto___56391)){
args__4870__auto__.push((arguments[i__4865__auto___56392]));

var G__56393 = (i__4865__auto___56392 + (1));
i__4865__auto___56392 = G__56393;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53732 = conformed_args__51178__auto__;
var map__53732__$1 = cljs.core.__destructure_map(map__53732);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53732__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53732__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53732__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq53724){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53724));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56400 = arguments.length;
var i__4865__auto___56401 = (0);
while(true){
if((i__4865__auto___56401 < len__4864__auto___56400)){
args__4870__auto__.push((arguments[i__4865__auto___56401]));

var G__56402 = (i__4865__auto___56401 + (1));
i__4865__auto___56401 = G__56402;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53745 = conformed_args__51178__auto__;
var map__53745__$1 = cljs.core.__destructure_map(map__53745);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53745__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53745__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53745__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq53741){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53741));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56406 = arguments.length;
var i__4865__auto___56407 = (0);
while(true){
if((i__4865__auto___56407 < len__4864__auto___56406)){
args__4870__auto__.push((arguments[i__4865__auto___56407]));

var G__56408 = (i__4865__auto___56407 + (1));
i__4865__auto___56407 = G__56408;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53760 = conformed_args__51178__auto__;
var map__53760__$1 = cljs.core.__destructure_map(map__53760);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq53752){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53752));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56410 = arguments.length;
var i__4865__auto___56411 = (0);
while(true){
if((i__4865__auto___56411 < len__4864__auto___56410)){
args__4870__auto__.push((arguments[i__4865__auto___56411]));

var G__56412 = (i__4865__auto___56411 + (1));
i__4865__auto___56411 = G__56412;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53774 = conformed_args__51178__auto__;
var map__53774__$1 = cljs.core.__destructure_map(map__53774);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53774__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53774__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53774__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq53766){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53766));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56414 = arguments.length;
var i__4865__auto___56415 = (0);
while(true){
if((i__4865__auto___56415 < len__4864__auto___56414)){
args__4870__auto__.push((arguments[i__4865__auto___56415]));

var G__56416 = (i__4865__auto___56415 + (1));
i__4865__auto___56415 = G__56416;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53783 = conformed_args__51178__auto__;
var map__53783__$1 = cljs.core.__destructure_map(map__53783);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53783__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53783__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53783__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq53780){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53780));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56424 = arguments.length;
var i__4865__auto___56427 = (0);
while(true){
if((i__4865__auto___56427 < len__4864__auto___56424)){
args__4870__auto__.push((arguments[i__4865__auto___56427]));

var G__56428 = (i__4865__auto___56427 + (1));
i__4865__auto___56427 = G__56428;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53789 = conformed_args__51178__auto__;
var map__53789__$1 = cljs.core.__destructure_map(map__53789);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq53786){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53786));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56432 = arguments.length;
var i__4865__auto___56433 = (0);
while(true){
if((i__4865__auto___56433 < len__4864__auto___56432)){
args__4870__auto__.push((arguments[i__4865__auto___56433]));

var G__56434 = (i__4865__auto___56433 + (1));
i__4865__auto___56433 = G__56434;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53794 = conformed_args__51178__auto__;
var map__53794__$1 = cljs.core.__destructure_map(map__53794);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53794__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53794__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53794__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq53791){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53791));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56436 = arguments.length;
var i__4865__auto___56437 = (0);
while(true){
if((i__4865__auto___56437 < len__4864__auto___56436)){
args__4870__auto__.push((arguments[i__4865__auto___56437]));

var G__56438 = (i__4865__auto___56437 + (1));
i__4865__auto___56437 = G__56438;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53798 = conformed_args__51178__auto__;
var map__53798__$1 = cljs.core.__destructure_map(map__53798);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53798__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53798__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53798__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq53796){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53796));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56449 = arguments.length;
var i__4865__auto___56450 = (0);
while(true){
if((i__4865__auto___56450 < len__4864__auto___56449)){
args__4870__auto__.push((arguments[i__4865__auto___56450]));

var G__56454 = (i__4865__auto___56450 + (1));
i__4865__auto___56450 = G__56454;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53802 = conformed_args__51178__auto__;
var map__53802__$1 = cljs.core.__destructure_map(map__53802);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53802__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53802__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53802__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq53800){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53800));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56464 = arguments.length;
var i__4865__auto___56465 = (0);
while(true){
if((i__4865__auto___56465 < len__4864__auto___56464)){
args__4870__auto__.push((arguments[i__4865__auto___56465]));

var G__56466 = (i__4865__auto___56465 + (1));
i__4865__auto___56465 = G__56466;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53816 = conformed_args__51178__auto__;
var map__53816__$1 = cljs.core.__destructure_map(map__53816);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53816__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53816__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53816__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq53812){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53812));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56477 = arguments.length;
var i__4865__auto___56478 = (0);
while(true){
if((i__4865__auto___56478 < len__4864__auto___56477)){
args__4870__auto__.push((arguments[i__4865__auto___56478]));

var G__56480 = (i__4865__auto___56478 + (1));
i__4865__auto___56478 = G__56480;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53835 = conformed_args__51178__auto__;
var map__53835__$1 = cljs.core.__destructure_map(map__53835);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53835__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53835__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53835__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq53824){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53824));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56490 = arguments.length;
var i__4865__auto___56491 = (0);
while(true){
if((i__4865__auto___56491 < len__4864__auto___56490)){
args__4870__auto__.push((arguments[i__4865__auto___56491]));

var G__56492 = (i__4865__auto___56491 + (1));
i__4865__auto___56491 = G__56492;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53863 = conformed_args__51178__auto__;
var map__53863__$1 = cljs.core.__destructure_map(map__53863);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq53860){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53860));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56505 = arguments.length;
var i__4865__auto___56506 = (0);
while(true){
if((i__4865__auto___56506 < len__4864__auto___56505)){
args__4870__auto__.push((arguments[i__4865__auto___56506]));

var G__56507 = (i__4865__auto___56506 + (1));
i__4865__auto___56506 = G__56507;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53867 = conformed_args__51178__auto__;
var map__53867__$1 = cljs.core.__destructure_map(map__53867);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53867__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53867__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53867__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq53865){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53865));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56510 = arguments.length;
var i__4865__auto___56511 = (0);
while(true){
if((i__4865__auto___56511 < len__4864__auto___56510)){
args__4870__auto__.push((arguments[i__4865__auto___56511]));

var G__56512 = (i__4865__auto___56511 + (1));
i__4865__auto___56511 = G__56512;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53878 = conformed_args__51178__auto__;
var map__53878__$1 = cljs.core.__destructure_map(map__53878);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53878__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53878__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53878__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq53872){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53872));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56514 = arguments.length;
var i__4865__auto___56515 = (0);
while(true){
if((i__4865__auto___56515 < len__4864__auto___56514)){
args__4870__auto__.push((arguments[i__4865__auto___56515]));

var G__56516 = (i__4865__auto___56515 + (1));
i__4865__auto___56515 = G__56516;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53884 = conformed_args__51178__auto__;
var map__53884__$1 = cljs.core.__destructure_map(map__53884);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53884__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53884__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53884__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq53882){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53882));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56517 = arguments.length;
var i__4865__auto___56518 = (0);
while(true){
if((i__4865__auto___56518 < len__4864__auto___56517)){
args__4870__auto__.push((arguments[i__4865__auto___56518]));

var G__56519 = (i__4865__auto___56518 + (1));
i__4865__auto___56518 = G__56519;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53898 = conformed_args__51178__auto__;
var map__53898__$1 = cljs.core.__destructure_map(map__53898);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53898__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53898__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53898__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq53886){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53886));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56521 = arguments.length;
var i__4865__auto___56522 = (0);
while(true){
if((i__4865__auto___56522 < len__4864__auto___56521)){
args__4870__auto__.push((arguments[i__4865__auto___56522]));

var G__56523 = (i__4865__auto___56522 + (1));
i__4865__auto___56522 = G__56523;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53907 = conformed_args__51178__auto__;
var map__53907__$1 = cljs.core.__destructure_map(map__53907);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53907__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53907__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53907__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq53900){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53900));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56526 = arguments.length;
var i__4865__auto___56527 = (0);
while(true){
if((i__4865__auto___56527 < len__4864__auto___56526)){
args__4870__auto__.push((arguments[i__4865__auto___56527]));

var G__56528 = (i__4865__auto___56527 + (1));
i__4865__auto___56527 = G__56528;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53937 = conformed_args__51178__auto__;
var map__53937__$1 = cljs.core.__destructure_map(map__53937);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq53924){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53924));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56529 = arguments.length;
var i__4865__auto___56530 = (0);
while(true){
if((i__4865__auto___56530 < len__4864__auto___56529)){
args__4870__auto__.push((arguments[i__4865__auto___56530]));

var G__56533 = (i__4865__auto___56530 + (1));
i__4865__auto___56530 = G__56533;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53970 = conformed_args__51178__auto__;
var map__53970__$1 = cljs.core.__destructure_map(map__53970);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53970__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53970__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53970__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq53953){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53953));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56537 = arguments.length;
var i__4865__auto___56538 = (0);
while(true){
if((i__4865__auto___56538 < len__4864__auto___56537)){
args__4870__auto__.push((arguments[i__4865__auto___56538]));

var G__56539 = (i__4865__auto___56538 + (1));
i__4865__auto___56538 = G__56539;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53988 = conformed_args__51178__auto__;
var map__53988__$1 = cljs.core.__destructure_map(map__53988);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53988__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53988__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53988__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq53986){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53986));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56540 = arguments.length;
var i__4865__auto___56541 = (0);
while(true){
if((i__4865__auto___56541 < len__4864__auto___56540)){
args__4870__auto__.push((arguments[i__4865__auto___56541]));

var G__56543 = (i__4865__auto___56541 + (1));
i__4865__auto___56541 = G__56543;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53999 = conformed_args__51178__auto__;
var map__53999__$1 = cljs.core.__destructure_map(map__53999);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53999__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53999__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53999__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq53996){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53996));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56545 = arguments.length;
var i__4865__auto___56546 = (0);
while(true){
if((i__4865__auto___56546 < len__4864__auto___56545)){
args__4870__auto__.push((arguments[i__4865__auto___56546]));

var G__56547 = (i__4865__auto___56546 + (1));
i__4865__auto___56546 = G__56547;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54007 = conformed_args__51178__auto__;
var map__54007__$1 = cljs.core.__destructure_map(map__54007);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54007__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54007__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54007__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq54004){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54004));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56548 = arguments.length;
var i__4865__auto___56549 = (0);
while(true){
if((i__4865__auto___56549 < len__4864__auto___56548)){
args__4870__auto__.push((arguments[i__4865__auto___56549]));

var G__56550 = (i__4865__auto___56549 + (1));
i__4865__auto___56549 = G__56550;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54013 = conformed_args__51178__auto__;
var map__54013__$1 = cljs.core.__destructure_map(map__54013);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54013__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54013__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54013__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq54009){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54009));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56552 = arguments.length;
var i__4865__auto___56553 = (0);
while(true){
if((i__4865__auto___56553 < len__4864__auto___56552)){
args__4870__auto__.push((arguments[i__4865__auto___56553]));

var G__56554 = (i__4865__auto___56553 + (1));
i__4865__auto___56553 = G__56554;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54020 = conformed_args__51178__auto__;
var map__54020__$1 = cljs.core.__destructure_map(map__54020);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54020__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54020__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54020__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq54014){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54014));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56557 = arguments.length;
var i__4865__auto___56558 = (0);
while(true){
if((i__4865__auto___56558 < len__4864__auto___56557)){
args__4870__auto__.push((arguments[i__4865__auto___56558]));

var G__56559 = (i__4865__auto___56558 + (1));
i__4865__auto___56558 = G__56559;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54032 = conformed_args__51178__auto__;
var map__54032__$1 = cljs.core.__destructure_map(map__54032);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54032__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54032__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54032__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq54026){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54026));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56561 = arguments.length;
var i__4865__auto___56562 = (0);
while(true){
if((i__4865__auto___56562 < len__4864__auto___56561)){
args__4870__auto__.push((arguments[i__4865__auto___56562]));

var G__56563 = (i__4865__auto___56562 + (1));
i__4865__auto___56562 = G__56563;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54041 = conformed_args__51178__auto__;
var map__54041__$1 = cljs.core.__destructure_map(map__54041);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54041__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54041__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54041__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq54037){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54037));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56564 = arguments.length;
var i__4865__auto___56565 = (0);
while(true){
if((i__4865__auto___56565 < len__4864__auto___56564)){
args__4870__auto__.push((arguments[i__4865__auto___56565]));

var G__56566 = (i__4865__auto___56565 + (1));
i__4865__auto___56565 = G__56566;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54054 = conformed_args__51178__auto__;
var map__54054__$1 = cljs.core.__destructure_map(map__54054);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54054__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54054__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54054__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq54047){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54047));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56567 = arguments.length;
var i__4865__auto___56568 = (0);
while(true){
if((i__4865__auto___56568 < len__4864__auto___56567)){
args__4870__auto__.push((arguments[i__4865__auto___56568]));

var G__56569 = (i__4865__auto___56568 + (1));
i__4865__auto___56568 = G__56569;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54064 = conformed_args__51178__auto__;
var map__54064__$1 = cljs.core.__destructure_map(map__54064);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54064__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54064__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54064__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq54058){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54058));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56571 = arguments.length;
var i__4865__auto___56572 = (0);
while(true){
if((i__4865__auto___56572 < len__4864__auto___56571)){
args__4870__auto__.push((arguments[i__4865__auto___56572]));

var G__56574 = (i__4865__auto___56572 + (1));
i__4865__auto___56572 = G__56574;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54077 = conformed_args__51178__auto__;
var map__54077__$1 = cljs.core.__destructure_map(map__54077);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54077__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54077__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54077__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq54069){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54069));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56575 = arguments.length;
var i__4865__auto___56576 = (0);
while(true){
if((i__4865__auto___56576 < len__4864__auto___56575)){
args__4870__auto__.push((arguments[i__4865__auto___56576]));

var G__56577 = (i__4865__auto___56576 + (1));
i__4865__auto___56576 = G__56577;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54085 = conformed_args__51178__auto__;
var map__54085__$1 = cljs.core.__destructure_map(map__54085);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54085__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54085__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54085__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq54083){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54083));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56581 = arguments.length;
var i__4865__auto___56582 = (0);
while(true){
if((i__4865__auto___56582 < len__4864__auto___56581)){
args__4870__auto__.push((arguments[i__4865__auto___56582]));

var G__56584 = (i__4865__auto___56582 + (1));
i__4865__auto___56582 = G__56584;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54094 = conformed_args__51178__auto__;
var map__54094__$1 = cljs.core.__destructure_map(map__54094);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54094__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54094__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54094__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq54088){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54088));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56585 = arguments.length;
var i__4865__auto___56586 = (0);
while(true){
if((i__4865__auto___56586 < len__4864__auto___56585)){
args__4870__auto__.push((arguments[i__4865__auto___56586]));

var G__56591 = (i__4865__auto___56586 + (1));
i__4865__auto___56586 = G__56591;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54104 = conformed_args__51178__auto__;
var map__54104__$1 = cljs.core.__destructure_map(map__54104);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54104__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54104__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54104__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq54097){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54097));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56592 = arguments.length;
var i__4865__auto___56593 = (0);
while(true){
if((i__4865__auto___56593 < len__4864__auto___56592)){
args__4870__auto__.push((arguments[i__4865__auto___56593]));

var G__56594 = (i__4865__auto___56593 + (1));
i__4865__auto___56593 = G__56594;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54117 = conformed_args__51178__auto__;
var map__54117__$1 = cljs.core.__destructure_map(map__54117);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54117__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54117__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54117__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq54115){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54115));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56595 = arguments.length;
var i__4865__auto___56596 = (0);
while(true){
if((i__4865__auto___56596 < len__4864__auto___56595)){
args__4870__auto__.push((arguments[i__4865__auto___56596]));

var G__56597 = (i__4865__auto___56596 + (1));
i__4865__auto___56596 = G__56597;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54128 = conformed_args__51178__auto__;
var map__54128__$1 = cljs.core.__destructure_map(map__54128);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54128__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54128__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54128__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq54121){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54121));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56598 = arguments.length;
var i__4865__auto___56599 = (0);
while(true){
if((i__4865__auto___56599 < len__4864__auto___56598)){
args__4870__auto__.push((arguments[i__4865__auto___56599]));

var G__56600 = (i__4865__auto___56599 + (1));
i__4865__auto___56599 = G__56600;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54141 = conformed_args__51178__auto__;
var map__54141__$1 = cljs.core.__destructure_map(map__54141);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54141__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54141__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54141__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq54134){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54134));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56603 = arguments.length;
var i__4865__auto___56604 = (0);
while(true){
if((i__4865__auto___56604 < len__4864__auto___56603)){
args__4870__auto__.push((arguments[i__4865__auto___56604]));

var G__56605 = (i__4865__auto___56604 + (1));
i__4865__auto___56604 = G__56605;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54145 = conformed_args__51178__auto__;
var map__54145__$1 = cljs.core.__destructure_map(map__54145);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54145__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54145__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54145__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq54143){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54143));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56606 = arguments.length;
var i__4865__auto___56607 = (0);
while(true){
if((i__4865__auto___56607 < len__4864__auto___56606)){
args__4870__auto__.push((arguments[i__4865__auto___56607]));

var G__56608 = (i__4865__auto___56607 + (1));
i__4865__auto___56607 = G__56608;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54163 = conformed_args__51178__auto__;
var map__54163__$1 = cljs.core.__destructure_map(map__54163);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54163__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54163__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54163__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq54153){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54153));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56615 = arguments.length;
var i__4865__auto___56616 = (0);
while(true){
if((i__4865__auto___56616 < len__4864__auto___56615)){
args__4870__auto__.push((arguments[i__4865__auto___56616]));

var G__56617 = (i__4865__auto___56616 + (1));
i__4865__auto___56616 = G__56617;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54172 = conformed_args__51178__auto__;
var map__54172__$1 = cljs.core.__destructure_map(map__54172);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq54167){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54167));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56620 = arguments.length;
var i__4865__auto___56621 = (0);
while(true){
if((i__4865__auto___56621 < len__4864__auto___56620)){
args__4870__auto__.push((arguments[i__4865__auto___56621]));

var G__56622 = (i__4865__auto___56621 + (1));
i__4865__auto___56621 = G__56622;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54190 = conformed_args__51178__auto__;
var map__54190__$1 = cljs.core.__destructure_map(map__54190);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54190__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54190__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54190__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq54185){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54185));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56623 = arguments.length;
var i__4865__auto___56624 = (0);
while(true){
if((i__4865__auto___56624 < len__4864__auto___56623)){
args__4870__auto__.push((arguments[i__4865__auto___56624]));

var G__56625 = (i__4865__auto___56624 + (1));
i__4865__auto___56624 = G__56625;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54201 = conformed_args__51178__auto__;
var map__54201__$1 = cljs.core.__destructure_map(map__54201);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54201__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54201__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54201__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq54198){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54198));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56634 = arguments.length;
var i__4865__auto___56635 = (0);
while(true){
if((i__4865__auto___56635 < len__4864__auto___56634)){
args__4870__auto__.push((arguments[i__4865__auto___56635]));

var G__56636 = (i__4865__auto___56635 + (1));
i__4865__auto___56635 = G__56636;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54215 = conformed_args__51178__auto__;
var map__54215__$1 = cljs.core.__destructure_map(map__54215);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq54211){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54211));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56639 = arguments.length;
var i__4865__auto___56640 = (0);
while(true){
if((i__4865__auto___56640 < len__4864__auto___56639)){
args__4870__auto__.push((arguments[i__4865__auto___56640]));

var G__56641 = (i__4865__auto___56640 + (1));
i__4865__auto___56640 = G__56641;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54246 = conformed_args__51178__auto__;
var map__54246__$1 = cljs.core.__destructure_map(map__54246);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54246__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54246__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq54230){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54230));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56642 = arguments.length;
var i__4865__auto___56643 = (0);
while(true){
if((i__4865__auto___56643 < len__4864__auto___56642)){
args__4870__auto__.push((arguments[i__4865__auto___56643]));

var G__56644 = (i__4865__auto___56643 + (1));
i__4865__auto___56643 = G__56644;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54259 = conformed_args__51178__auto__;
var map__54259__$1 = cljs.core.__destructure_map(map__54259);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54259__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54259__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54259__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq54257){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54257));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56647 = arguments.length;
var i__4865__auto___56648 = (0);
while(true){
if((i__4865__auto___56648 < len__4864__auto___56647)){
args__4870__auto__.push((arguments[i__4865__auto___56648]));

var G__56649 = (i__4865__auto___56648 + (1));
i__4865__auto___56648 = G__56649;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54275 = conformed_args__51178__auto__;
var map__54275__$1 = cljs.core.__destructure_map(map__54275);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54275__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54275__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54275__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq54268){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54268));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56653 = arguments.length;
var i__4865__auto___56654 = (0);
while(true){
if((i__4865__auto___56654 < len__4864__auto___56653)){
args__4870__auto__.push((arguments[i__4865__auto___56654]));

var G__56655 = (i__4865__auto___56654 + (1));
i__4865__auto___56654 = G__56655;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54295 = conformed_args__51178__auto__;
var map__54295__$1 = cljs.core.__destructure_map(map__54295);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54295__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54295__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq54288){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54288));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56657 = arguments.length;
var i__4865__auto___56658 = (0);
while(true){
if((i__4865__auto___56658 < len__4864__auto___56657)){
args__4870__auto__.push((arguments[i__4865__auto___56658]));

var G__56659 = (i__4865__auto___56658 + (1));
i__4865__auto___56658 = G__56659;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54309 = conformed_args__51178__auto__;
var map__54309__$1 = cljs.core.__destructure_map(map__54309);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq54308){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54308));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56660 = arguments.length;
var i__4865__auto___56661 = (0);
while(true){
if((i__4865__auto___56661 < len__4864__auto___56660)){
args__4870__auto__.push((arguments[i__4865__auto___56661]));

var G__56662 = (i__4865__auto___56661 + (1));
i__4865__auto___56661 = G__56662;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54323 = conformed_args__51178__auto__;
var map__54323__$1 = cljs.core.__destructure_map(map__54323);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54323__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54323__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54323__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq54318){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54318));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56663 = arguments.length;
var i__4865__auto___56664 = (0);
while(true){
if((i__4865__auto___56664 < len__4864__auto___56663)){
args__4870__auto__.push((arguments[i__4865__auto___56664]));

var G__56666 = (i__4865__auto___56664 + (1));
i__4865__auto___56664 = G__56666;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54340 = conformed_args__51178__auto__;
var map__54340__$1 = cljs.core.__destructure_map(map__54340);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq54333){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54333));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56670 = arguments.length;
var i__4865__auto___56671 = (0);
while(true){
if((i__4865__auto___56671 < len__4864__auto___56670)){
args__4870__auto__.push((arguments[i__4865__auto___56671]));

var G__56672 = (i__4865__auto___56671 + (1));
i__4865__auto___56671 = G__56672;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54362 = conformed_args__51178__auto__;
var map__54362__$1 = cljs.core.__destructure_map(map__54362);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54362__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54362__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54362__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq54353){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54353));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56677 = arguments.length;
var i__4865__auto___56678 = (0);
while(true){
if((i__4865__auto___56678 < len__4864__auto___56677)){
args__4870__auto__.push((arguments[i__4865__auto___56678]));

var G__56679 = (i__4865__auto___56678 + (1));
i__4865__auto___56678 = G__56679;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54387 = conformed_args__51178__auto__;
var map__54387__$1 = cljs.core.__destructure_map(map__54387);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54387__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54387__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54387__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq54384){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54384));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56683 = arguments.length;
var i__4865__auto___56684 = (0);
while(true){
if((i__4865__auto___56684 < len__4864__auto___56683)){
args__4870__auto__.push((arguments[i__4865__auto___56684]));

var G__56685 = (i__4865__auto___56684 + (1));
i__4865__auto___56684 = G__56685;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54414 = conformed_args__51178__auto__;
var map__54414__$1 = cljs.core.__destructure_map(map__54414);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54414__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54414__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54414__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq54399){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54399));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56686 = arguments.length;
var i__4865__auto___56687 = (0);
while(true){
if((i__4865__auto___56687 < len__4864__auto___56686)){
args__4870__auto__.push((arguments[i__4865__auto___56687]));

var G__56688 = (i__4865__auto___56687 + (1));
i__4865__auto___56687 = G__56688;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54444 = conformed_args__51178__auto__;
var map__54444__$1 = cljs.core.__destructure_map(map__54444);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54444__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54444__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54444__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq54435){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54435));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56689 = arguments.length;
var i__4865__auto___56690 = (0);
while(true){
if((i__4865__auto___56690 < len__4864__auto___56689)){
args__4870__auto__.push((arguments[i__4865__auto___56690]));

var G__56691 = (i__4865__auto___56690 + (1));
i__4865__auto___56690 = G__56691;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54463 = conformed_args__51178__auto__;
var map__54463__$1 = cljs.core.__destructure_map(map__54463);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54463__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54463__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54463__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq54458){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54458));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56700 = arguments.length;
var i__4865__auto___56701 = (0);
while(true){
if((i__4865__auto___56701 < len__4864__auto___56700)){
args__4870__auto__.push((arguments[i__4865__auto___56701]));

var G__56702 = (i__4865__auto___56701 + (1));
i__4865__auto___56701 = G__56702;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54488 = conformed_args__51178__auto__;
var map__54488__$1 = cljs.core.__destructure_map(map__54488);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54488__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54488__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54488__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq54477){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54477));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56707 = arguments.length;
var i__4865__auto___56708 = (0);
while(true){
if((i__4865__auto___56708 < len__4864__auto___56707)){
args__4870__auto__.push((arguments[i__4865__auto___56708]));

var G__56709 = (i__4865__auto___56708 + (1));
i__4865__auto___56708 = G__56709;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54519 = conformed_args__51178__auto__;
var map__54519__$1 = cljs.core.__destructure_map(map__54519);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54519__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54519__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54519__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq54501){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54501));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56710 = arguments.length;
var i__4865__auto___56712 = (0);
while(true){
if((i__4865__auto___56712 < len__4864__auto___56710)){
args__4870__auto__.push((arguments[i__4865__auto___56712]));

var G__56713 = (i__4865__auto___56712 + (1));
i__4865__auto___56712 = G__56713;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54560 = conformed_args__51178__auto__;
var map__54560__$1 = cljs.core.__destructure_map(map__54560);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54560__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54560__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54560__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq54540){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54540));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56719 = arguments.length;
var i__4865__auto___56721 = (0);
while(true){
if((i__4865__auto___56721 < len__4864__auto___56719)){
args__4870__auto__.push((arguments[i__4865__auto___56721]));

var G__56726 = (i__4865__auto___56721 + (1));
i__4865__auto___56721 = G__56726;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54584 = conformed_args__51178__auto__;
var map__54584__$1 = cljs.core.__destructure_map(map__54584);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54584__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54584__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54584__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq54569){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54569));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56734 = arguments.length;
var i__4865__auto___56735 = (0);
while(true){
if((i__4865__auto___56735 < len__4864__auto___56734)){
args__4870__auto__.push((arguments[i__4865__auto___56735]));

var G__56737 = (i__4865__auto___56735 + (1));
i__4865__auto___56735 = G__56737;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54613 = conformed_args__51178__auto__;
var map__54613__$1 = cljs.core.__destructure_map(map__54613);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54613__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54613__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54613__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq54605){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54605));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56746 = arguments.length;
var i__4865__auto___56747 = (0);
while(true){
if((i__4865__auto___56747 < len__4864__auto___56746)){
args__4870__auto__.push((arguments[i__4865__auto___56747]));

var G__56748 = (i__4865__auto___56747 + (1));
i__4865__auto___56747 = G__56748;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54633 = conformed_args__51178__auto__;
var map__54633__$1 = cljs.core.__destructure_map(map__54633);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54633__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54633__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54633__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq54627){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54627));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56752 = arguments.length;
var i__4865__auto___56753 = (0);
while(true){
if((i__4865__auto___56753 < len__4864__auto___56752)){
args__4870__auto__.push((arguments[i__4865__auto___56753]));

var G__56754 = (i__4865__auto___56753 + (1));
i__4865__auto___56753 = G__56754;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54646 = conformed_args__51178__auto__;
var map__54646__$1 = cljs.core.__destructure_map(map__54646);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54646__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54646__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54646__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq54636){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54636));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56759 = arguments.length;
var i__4865__auto___56760 = (0);
while(true){
if((i__4865__auto___56760 < len__4864__auto___56759)){
args__4870__auto__.push((arguments[i__4865__auto___56760]));

var G__56761 = (i__4865__auto___56760 + (1));
i__4865__auto___56760 = G__56761;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54655 = conformed_args__51178__auto__;
var map__54655__$1 = cljs.core.__destructure_map(map__54655);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54655__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54655__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54655__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq54648){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54648));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56764 = arguments.length;
var i__4865__auto___56765 = (0);
while(true){
if((i__4865__auto___56765 < len__4864__auto___56764)){
args__4870__auto__.push((arguments[i__4865__auto___56765]));

var G__56768 = (i__4865__auto___56765 + (1));
i__4865__auto___56765 = G__56768;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54672 = conformed_args__51178__auto__;
var map__54672__$1 = cljs.core.__destructure_map(map__54672);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54672__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54672__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54672__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq54663){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54663));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56770 = arguments.length;
var i__4865__auto___56771 = (0);
while(true){
if((i__4865__auto___56771 < len__4864__auto___56770)){
args__4870__auto__.push((arguments[i__4865__auto___56771]));

var G__56772 = (i__4865__auto___56771 + (1));
i__4865__auto___56771 = G__56772;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54684 = conformed_args__51178__auto__;
var map__54684__$1 = cljs.core.__destructure_map(map__54684);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54684__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54684__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54684__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq54677){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54677));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56775 = arguments.length;
var i__4865__auto___56777 = (0);
while(true){
if((i__4865__auto___56777 < len__4864__auto___56775)){
args__4870__auto__.push((arguments[i__4865__auto___56777]));

var G__56778 = (i__4865__auto___56777 + (1));
i__4865__auto___56777 = G__56778;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54706 = conformed_args__51178__auto__;
var map__54706__$1 = cljs.core.__destructure_map(map__54706);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq54700){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54700));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56782 = arguments.length;
var i__4865__auto___56784 = (0);
while(true){
if((i__4865__auto___56784 < len__4864__auto___56782)){
args__4870__auto__.push((arguments[i__4865__auto___56784]));

var G__56785 = (i__4865__auto___56784 + (1));
i__4865__auto___56784 = G__56785;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54730 = conformed_args__51178__auto__;
var map__54730__$1 = cljs.core.__destructure_map(map__54730);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq54719){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54719));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56791 = arguments.length;
var i__4865__auto___56792 = (0);
while(true){
if((i__4865__auto___56792 < len__4864__auto___56791)){
args__4870__auto__.push((arguments[i__4865__auto___56792]));

var G__56794 = (i__4865__auto___56792 + (1));
i__4865__auto___56792 = G__56794;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54737 = conformed_args__51178__auto__;
var map__54737__$1 = cljs.core.__destructure_map(map__54737);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54737__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54737__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54737__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq54736){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54736));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56796 = arguments.length;
var i__4865__auto___56797 = (0);
while(true){
if((i__4865__auto___56797 < len__4864__auto___56796)){
args__4870__auto__.push((arguments[i__4865__auto___56797]));

var G__56798 = (i__4865__auto___56797 + (1));
i__4865__auto___56797 = G__56798;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54753 = conformed_args__51178__auto__;
var map__54753__$1 = cljs.core.__destructure_map(map__54753);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54753__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54753__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54753__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq54744){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54744));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56802 = arguments.length;
var i__4865__auto___56804 = (0);
while(true){
if((i__4865__auto___56804 < len__4864__auto___56802)){
args__4870__auto__.push((arguments[i__4865__auto___56804]));

var G__56805 = (i__4865__auto___56804 + (1));
i__4865__auto___56804 = G__56805;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54779 = conformed_args__51178__auto__;
var map__54779__$1 = cljs.core.__destructure_map(map__54779);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54779__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54779__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54779__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq54770){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54770));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56807 = arguments.length;
var i__4865__auto___56808 = (0);
while(true){
if((i__4865__auto___56808 < len__4864__auto___56807)){
args__4870__auto__.push((arguments[i__4865__auto___56808]));

var G__56811 = (i__4865__auto___56808 + (1));
i__4865__auto___56808 = G__56811;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54792 = conformed_args__51178__auto__;
var map__54792__$1 = cljs.core.__destructure_map(map__54792);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq54789){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54789));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56813 = arguments.length;
var i__4865__auto___56814 = (0);
while(true){
if((i__4865__auto___56814 < len__4864__auto___56813)){
args__4870__auto__.push((arguments[i__4865__auto___56814]));

var G__56815 = (i__4865__auto___56814 + (1));
i__4865__auto___56814 = G__56815;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54805 = conformed_args__51178__auto__;
var map__54805__$1 = cljs.core.__destructure_map(map__54805);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54805__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54805__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54805__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq54797){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54797));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56818 = arguments.length;
var i__4865__auto___56819 = (0);
while(true){
if((i__4865__auto___56819 < len__4864__auto___56818)){
args__4870__auto__.push((arguments[i__4865__auto___56819]));

var G__56820 = (i__4865__auto___56819 + (1));
i__4865__auto___56819 = G__56820;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54818 = conformed_args__51178__auto__;
var map__54818__$1 = cljs.core.__destructure_map(map__54818);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54818__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54818__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54818__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq54810){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54810));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56823 = arguments.length;
var i__4865__auto___56824 = (0);
while(true){
if((i__4865__auto___56824 < len__4864__auto___56823)){
args__4870__auto__.push((arguments[i__4865__auto___56824]));

var G__56825 = (i__4865__auto___56824 + (1));
i__4865__auto___56824 = G__56825;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54835 = conformed_args__51178__auto__;
var map__54835__$1 = cljs.core.__destructure_map(map__54835);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54835__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54835__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54835__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq54825){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54825));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56830 = arguments.length;
var i__4865__auto___56831 = (0);
while(true){
if((i__4865__auto___56831 < len__4864__auto___56830)){
args__4870__auto__.push((arguments[i__4865__auto___56831]));

var G__56834 = (i__4865__auto___56831 + (1));
i__4865__auto___56831 = G__56834;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54852 = conformed_args__51178__auto__;
var map__54852__$1 = cljs.core.__destructure_map(map__54852);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54852__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54852__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54852__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq54847){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54847));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56842 = arguments.length;
var i__4865__auto___56843 = (0);
while(true){
if((i__4865__auto___56843 < len__4864__auto___56842)){
args__4870__auto__.push((arguments[i__4865__auto___56843]));

var G__56844 = (i__4865__auto___56843 + (1));
i__4865__auto___56843 = G__56844;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54858 = conformed_args__51178__auto__;
var map__54858__$1 = cljs.core.__destructure_map(map__54858);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq54855){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54855));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56846 = arguments.length;
var i__4865__auto___56847 = (0);
while(true){
if((i__4865__auto___56847 < len__4864__auto___56846)){
args__4870__auto__.push((arguments[i__4865__auto___56847]));

var G__56848 = (i__4865__auto___56847 + (1));
i__4865__auto___56847 = G__56848;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54876 = conformed_args__51178__auto__;
var map__54876__$1 = cljs.core.__destructure_map(map__54876);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54876__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54876__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54876__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq54866){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54866));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56851 = arguments.length;
var i__4865__auto___56852 = (0);
while(true){
if((i__4865__auto___56852 < len__4864__auto___56851)){
args__4870__auto__.push((arguments[i__4865__auto___56852]));

var G__56853 = (i__4865__auto___56852 + (1));
i__4865__auto___56852 = G__56853;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54887 = conformed_args__51178__auto__;
var map__54887__$1 = cljs.core.__destructure_map(map__54887);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54887__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54887__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54887__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq54879){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54879));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56855 = arguments.length;
var i__4865__auto___56856 = (0);
while(true){
if((i__4865__auto___56856 < len__4864__auto___56855)){
args__4870__auto__.push((arguments[i__4865__auto___56856]));

var G__56857 = (i__4865__auto___56856 + (1));
i__4865__auto___56856 = G__56857;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54900 = conformed_args__51178__auto__;
var map__54900__$1 = cljs.core.__destructure_map(map__54900);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54900__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54900__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54900__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq54892){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54892));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56869 = arguments.length;
var i__4865__auto___56870 = (0);
while(true){
if((i__4865__auto___56870 < len__4864__auto___56869)){
args__4870__auto__.push((arguments[i__4865__auto___56870]));

var G__56873 = (i__4865__auto___56870 + (1));
i__4865__auto___56870 = G__56873;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54916 = conformed_args__51178__auto__;
var map__54916__$1 = cljs.core.__destructure_map(map__54916);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54916__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54916__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54916__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq54907){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54907));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56874 = arguments.length;
var i__4865__auto___56875 = (0);
while(true){
if((i__4865__auto___56875 < len__4864__auto___56874)){
args__4870__auto__.push((arguments[i__4865__auto___56875]));

var G__56876 = (i__4865__auto___56875 + (1));
i__4865__auto___56875 = G__56876;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54932 = conformed_args__51178__auto__;
var map__54932__$1 = cljs.core.__destructure_map(map__54932);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54932__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54932__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54932__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq54923){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54923));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56879 = arguments.length;
var i__4865__auto___56880 = (0);
while(true){
if((i__4865__auto___56880 < len__4864__auto___56879)){
args__4870__auto__.push((arguments[i__4865__auto___56880]));

var G__56882 = (i__4865__auto___56880 + (1));
i__4865__auto___56880 = G__56882;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54949 = conformed_args__51178__auto__;
var map__54949__$1 = cljs.core.__destructure_map(map__54949);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54949__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54949__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54949__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq54938){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54938));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56888 = arguments.length;
var i__4865__auto___56889 = (0);
while(true){
if((i__4865__auto___56889 < len__4864__auto___56888)){
args__4870__auto__.push((arguments[i__4865__auto___56889]));

var G__56890 = (i__4865__auto___56889 + (1));
i__4865__auto___56889 = G__56890;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54961 = conformed_args__51178__auto__;
var map__54961__$1 = cljs.core.__destructure_map(map__54961);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54961__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54961__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54961__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq54951){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54951));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56896 = arguments.length;
var i__4865__auto___56897 = (0);
while(true){
if((i__4865__auto___56897 < len__4864__auto___56896)){
args__4870__auto__.push((arguments[i__4865__auto___56897]));

var G__56899 = (i__4865__auto___56897 + (1));
i__4865__auto___56897 = G__56899;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54971 = conformed_args__51178__auto__;
var map__54971__$1 = cljs.core.__destructure_map(map__54971);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54971__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54971__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54971__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq54963){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54963));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56902 = arguments.length;
var i__4865__auto___56904 = (0);
while(true){
if((i__4865__auto___56904 < len__4864__auto___56902)){
args__4870__auto__.push((arguments[i__4865__auto___56904]));

var G__56908 = (i__4865__auto___56904 + (1));
i__4865__auto___56904 = G__56908;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54983 = conformed_args__51178__auto__;
var map__54983__$1 = cljs.core.__destructure_map(map__54983);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54983__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54983__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54983__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq54978){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54978));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56915 = arguments.length;
var i__4865__auto___56916 = (0);
while(true){
if((i__4865__auto___56916 < len__4864__auto___56915)){
args__4870__auto__.push((arguments[i__4865__auto___56916]));

var G__56919 = (i__4865__auto___56916 + (1));
i__4865__auto___56916 = G__56919;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__54991 = conformed_args__51178__auto__;
var map__54991__$1 = cljs.core.__destructure_map(map__54991);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54991__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54991__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54991__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq54987){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54987));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56928 = arguments.length;
var i__4865__auto___56929 = (0);
while(true){
if((i__4865__auto___56929 < len__4864__auto___56928)){
args__4870__auto__.push((arguments[i__4865__auto___56929]));

var G__56933 = (i__4865__auto___56929 + (1));
i__4865__auto___56929 = G__56933;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55003 = conformed_args__51178__auto__;
var map__55003__$1 = cljs.core.__destructure_map(map__55003);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55003__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55003__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq54995){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54995));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56938 = arguments.length;
var i__4865__auto___56939 = (0);
while(true){
if((i__4865__auto___56939 < len__4864__auto___56938)){
args__4870__auto__.push((arguments[i__4865__auto___56939]));

var G__56941 = (i__4865__auto___56939 + (1));
i__4865__auto___56939 = G__56941;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55012 = conformed_args__51178__auto__;
var map__55012__$1 = cljs.core.__destructure_map(map__55012);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55012__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55012__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55012__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq55006){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55006));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56947 = arguments.length;
var i__4865__auto___56948 = (0);
while(true){
if((i__4865__auto___56948 < len__4864__auto___56947)){
args__4870__auto__.push((arguments[i__4865__auto___56948]));

var G__56949 = (i__4865__auto___56948 + (1));
i__4865__auto___56948 = G__56949;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55024 = conformed_args__51178__auto__;
var map__55024__$1 = cljs.core.__destructure_map(map__55024);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55024__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55024__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55024__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq55016){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55016));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56958 = arguments.length;
var i__4865__auto___56959 = (0);
while(true){
if((i__4865__auto___56959 < len__4864__auto___56958)){
args__4870__auto__.push((arguments[i__4865__auto___56959]));

var G__56960 = (i__4865__auto___56959 + (1));
i__4865__auto___56959 = G__56960;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55047 = conformed_args__51178__auto__;
var map__55047__$1 = cljs.core.__destructure_map(map__55047);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55047__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55047__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55047__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq55036){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55036));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56969 = arguments.length;
var i__4865__auto___56970 = (0);
while(true){
if((i__4865__auto___56970 < len__4864__auto___56969)){
args__4870__auto__.push((arguments[i__4865__auto___56970]));

var G__56973 = (i__4865__auto___56970 + (1));
i__4865__auto___56970 = G__56973;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55054 = conformed_args__51178__auto__;
var map__55054__$1 = cljs.core.__destructure_map(map__55054);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55054__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55054__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55054__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq55051){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55051));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56977 = arguments.length;
var i__4865__auto___56978 = (0);
while(true){
if((i__4865__auto___56978 < len__4864__auto___56977)){
args__4870__auto__.push((arguments[i__4865__auto___56978]));

var G__56979 = (i__4865__auto___56978 + (1));
i__4865__auto___56978 = G__56979;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55067 = conformed_args__51178__auto__;
var map__55067__$1 = cljs.core.__destructure_map(map__55067);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55067__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55067__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55067__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq55062){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55062));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56984 = arguments.length;
var i__4865__auto___56985 = (0);
while(true){
if((i__4865__auto___56985 < len__4864__auto___56984)){
args__4870__auto__.push((arguments[i__4865__auto___56985]));

var G__56987 = (i__4865__auto___56985 + (1));
i__4865__auto___56985 = G__56987;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55079 = conformed_args__51178__auto__;
var map__55079__$1 = cljs.core.__destructure_map(map__55079);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55079__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55079__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55079__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq55075){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55075));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56992 = arguments.length;
var i__4865__auto___56993 = (0);
while(true){
if((i__4865__auto___56993 < len__4864__auto___56992)){
args__4870__auto__.push((arguments[i__4865__auto___56993]));

var G__56994 = (i__4865__auto___56993 + (1));
i__4865__auto___56993 = G__56994;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55090 = conformed_args__51178__auto__;
var map__55090__$1 = cljs.core.__destructure_map(map__55090);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55090__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55090__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55090__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq55087){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55087));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56996 = arguments.length;
var i__4865__auto___56997 = (0);
while(true){
if((i__4865__auto___56997 < len__4864__auto___56996)){
args__4870__auto__.push((arguments[i__4865__auto___56997]));

var G__56998 = (i__4865__auto___56997 + (1));
i__4865__auto___56997 = G__56998;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55104 = conformed_args__51178__auto__;
var map__55104__$1 = cljs.core.__destructure_map(map__55104);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55104__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55104__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55104__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq55098){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55098));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57004 = arguments.length;
var i__4865__auto___57005 = (0);
while(true){
if((i__4865__auto___57005 < len__4864__auto___57004)){
args__4870__auto__.push((arguments[i__4865__auto___57005]));

var G__57006 = (i__4865__auto___57005 + (1));
i__4865__auto___57005 = G__57006;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55115 = conformed_args__51178__auto__;
var map__55115__$1 = cljs.core.__destructure_map(map__55115);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55115__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55115__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55115__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq55106){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55106));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57008 = arguments.length;
var i__4865__auto___57009 = (0);
while(true){
if((i__4865__auto___57009 < len__4864__auto___57008)){
args__4870__auto__.push((arguments[i__4865__auto___57009]));

var G__57010 = (i__4865__auto___57009 + (1));
i__4865__auto___57009 = G__57010;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55126 = conformed_args__51178__auto__;
var map__55126__$1 = cljs.core.__destructure_map(map__55126);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55126__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55126__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55126__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq55125){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55125));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57011 = arguments.length;
var i__4865__auto___57012 = (0);
while(true){
if((i__4865__auto___57012 < len__4864__auto___57011)){
args__4870__auto__.push((arguments[i__4865__auto___57012]));

var G__57013 = (i__4865__auto___57012 + (1));
i__4865__auto___57012 = G__57013;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55138 = conformed_args__51178__auto__;
var map__55138__$1 = cljs.core.__destructure_map(map__55138);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55138__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55138__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55138__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq55132){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55132));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57014 = arguments.length;
var i__4865__auto___57015 = (0);
while(true){
if((i__4865__auto___57015 < len__4864__auto___57014)){
args__4870__auto__.push((arguments[i__4865__auto___57015]));

var G__57016 = (i__4865__auto___57015 + (1));
i__4865__auto___57015 = G__57016;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55145 = conformed_args__51178__auto__;
var map__55145__$1 = cljs.core.__destructure_map(map__55145);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55145__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq55142){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55142));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57021 = arguments.length;
var i__4865__auto___57022 = (0);
while(true){
if((i__4865__auto___57022 < len__4864__auto___57021)){
args__4870__auto__.push((arguments[i__4865__auto___57022]));

var G__57023 = (i__4865__auto___57022 + (1));
i__4865__auto___57022 = G__57023;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55168 = conformed_args__51178__auto__;
var map__55168__$1 = cljs.core.__destructure_map(map__55168);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55168__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55168__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55168__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq55162){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55162));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57026 = arguments.length;
var i__4865__auto___57027 = (0);
while(true){
if((i__4865__auto___57027 < len__4864__auto___57026)){
args__4870__auto__.push((arguments[i__4865__auto___57027]));

var G__57028 = (i__4865__auto___57027 + (1));
i__4865__auto___57027 = G__57028;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55183 = conformed_args__51178__auto__;
var map__55183__$1 = cljs.core.__destructure_map(map__55183);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55183__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55183__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55183__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq55176){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55176));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57029 = arguments.length;
var i__4865__auto___57030 = (0);
while(true){
if((i__4865__auto___57030 < len__4864__auto___57029)){
args__4870__auto__.push((arguments[i__4865__auto___57030]));

var G__57032 = (i__4865__auto___57030 + (1));
i__4865__auto___57030 = G__57032;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55200 = conformed_args__51178__auto__;
var map__55200__$1 = cljs.core.__destructure_map(map__55200);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55200__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55200__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55200__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq55194){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55194));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57033 = arguments.length;
var i__4865__auto___57035 = (0);
while(true){
if((i__4865__auto___57035 < len__4864__auto___57033)){
args__4870__auto__.push((arguments[i__4865__auto___57035]));

var G__57036 = (i__4865__auto___57035 + (1));
i__4865__auto___57035 = G__57036;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55210 = conformed_args__51178__auto__;
var map__55210__$1 = cljs.core.__destructure_map(map__55210);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55210__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55210__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55210__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq55205){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55205));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57040 = arguments.length;
var i__4865__auto___57041 = (0);
while(true){
if((i__4865__auto___57041 < len__4864__auto___57040)){
args__4870__auto__.push((arguments[i__4865__auto___57041]));

var G__57044 = (i__4865__auto___57041 + (1));
i__4865__auto___57041 = G__57044;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55220 = conformed_args__51178__auto__;
var map__55220__$1 = cljs.core.__destructure_map(map__55220);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55220__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55220__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55220__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq55216){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55216));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57049 = arguments.length;
var i__4865__auto___57050 = (0);
while(true){
if((i__4865__auto___57050 < len__4864__auto___57049)){
args__4870__auto__.push((arguments[i__4865__auto___57050]));

var G__57052 = (i__4865__auto___57050 + (1));
i__4865__auto___57050 = G__57052;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55227 = conformed_args__51178__auto__;
var map__55227__$1 = cljs.core.__destructure_map(map__55227);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq55223){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55223));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57053 = arguments.length;
var i__4865__auto___57054 = (0);
while(true){
if((i__4865__auto___57054 < len__4864__auto___57053)){
args__4870__auto__.push((arguments[i__4865__auto___57054]));

var G__57055 = (i__4865__auto___57054 + (1));
i__4865__auto___57054 = G__57055;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55232 = conformed_args__51178__auto__;
var map__55232__$1 = cljs.core.__destructure_map(map__55232);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55232__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55232__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55232__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq55230){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55230));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57061 = arguments.length;
var i__4865__auto___57062 = (0);
while(true){
if((i__4865__auto___57062 < len__4864__auto___57061)){
args__4870__auto__.push((arguments[i__4865__auto___57062]));

var G__57063 = (i__4865__auto___57062 + (1));
i__4865__auto___57062 = G__57063;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55238 = conformed_args__51178__auto__;
var map__55238__$1 = cljs.core.__destructure_map(map__55238);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55238__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55238__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55238__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq55235){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55235));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57064 = arguments.length;
var i__4865__auto___57066 = (0);
while(true){
if((i__4865__auto___57066 < len__4864__auto___57064)){
args__4870__auto__.push((arguments[i__4865__auto___57066]));

var G__57068 = (i__4865__auto___57066 + (1));
i__4865__auto___57066 = G__57068;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55250 = conformed_args__51178__auto__;
var map__55250__$1 = cljs.core.__destructure_map(map__55250);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55250__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55250__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55250__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq55241){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55241));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57073 = arguments.length;
var i__4865__auto___57075 = (0);
while(true){
if((i__4865__auto___57075 < len__4864__auto___57073)){
args__4870__auto__.push((arguments[i__4865__auto___57075]));

var G__57076 = (i__4865__auto___57075 + (1));
i__4865__auto___57075 = G__57076;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55263 = conformed_args__51178__auto__;
var map__55263__$1 = cljs.core.__destructure_map(map__55263);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55263__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55263__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq55259){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55259));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57081 = arguments.length;
var i__4865__auto___57082 = (0);
while(true){
if((i__4865__auto___57082 < len__4864__auto___57081)){
args__4870__auto__.push((arguments[i__4865__auto___57082]));

var G__57084 = (i__4865__auto___57082 + (1));
i__4865__auto___57082 = G__57084;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55276 = conformed_args__51178__auto__;
var map__55276__$1 = cljs.core.__destructure_map(map__55276);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55276__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55276__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55276__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq55269){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55269));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57085 = arguments.length;
var i__4865__auto___57086 = (0);
while(true){
if((i__4865__auto___57086 < len__4864__auto___57085)){
args__4870__auto__.push((arguments[i__4865__auto___57086]));

var G__57088 = (i__4865__auto___57086 + (1));
i__4865__auto___57086 = G__57088;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55284 = conformed_args__51178__auto__;
var map__55284__$1 = cljs.core.__destructure_map(map__55284);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55284__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55284__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55284__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq55280){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55280));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57091 = arguments.length;
var i__4865__auto___57092 = (0);
while(true){
if((i__4865__auto___57092 < len__4864__auto___57091)){
args__4870__auto__.push((arguments[i__4865__auto___57092]));

var G__57093 = (i__4865__auto___57092 + (1));
i__4865__auto___57092 = G__57093;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55295 = conformed_args__51178__auto__;
var map__55295__$1 = cljs.core.__destructure_map(map__55295);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55295__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55295__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq55291){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55291));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57097 = arguments.length;
var i__4865__auto___57098 = (0);
while(true){
if((i__4865__auto___57098 < len__4864__auto___57097)){
args__4870__auto__.push((arguments[i__4865__auto___57098]));

var G__57099 = (i__4865__auto___57098 + (1));
i__4865__auto___57098 = G__57099;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55305 = conformed_args__51178__auto__;
var map__55305__$1 = cljs.core.__destructure_map(map__55305);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55305__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55305__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55305__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq55300){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55300));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57106 = arguments.length;
var i__4865__auto___57107 = (0);
while(true){
if((i__4865__auto___57107 < len__4864__auto___57106)){
args__4870__auto__.push((arguments[i__4865__auto___57107]));

var G__57109 = (i__4865__auto___57107 + (1));
i__4865__auto___57107 = G__57109;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55317 = conformed_args__51178__auto__;
var map__55317__$1 = cljs.core.__destructure_map(map__55317);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55317__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55317__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55317__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq55310){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55310));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57110 = arguments.length;
var i__4865__auto___57111 = (0);
while(true){
if((i__4865__auto___57111 < len__4864__auto___57110)){
args__4870__auto__.push((arguments[i__4865__auto___57111]));

var G__57112 = (i__4865__auto___57111 + (1));
i__4865__auto___57111 = G__57112;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55329 = conformed_args__51178__auto__;
var map__55329__$1 = cljs.core.__destructure_map(map__55329);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55329__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55329__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55329__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq55323){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55323));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57116 = arguments.length;
var i__4865__auto___57117 = (0);
while(true){
if((i__4865__auto___57117 < len__4864__auto___57116)){
args__4870__auto__.push((arguments[i__4865__auto___57117]));

var G__57118 = (i__4865__auto___57117 + (1));
i__4865__auto___57117 = G__57118;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55339 = conformed_args__51178__auto__;
var map__55339__$1 = cljs.core.__destructure_map(map__55339);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55339__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55339__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55339__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq55332){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55332));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57126 = arguments.length;
var i__4865__auto___57127 = (0);
while(true){
if((i__4865__auto___57127 < len__4864__auto___57126)){
args__4870__auto__.push((arguments[i__4865__auto___57127]));

var G__57128 = (i__4865__auto___57127 + (1));
i__4865__auto___57127 = G__57128;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55358 = conformed_args__51178__auto__;
var map__55358__$1 = cljs.core.__destructure_map(map__55358);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55358__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55358__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55358__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq55346){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55346));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57131 = arguments.length;
var i__4865__auto___57132 = (0);
while(true){
if((i__4865__auto___57132 < len__4864__auto___57131)){
args__4870__auto__.push((arguments[i__4865__auto___57132]));

var G__57133 = (i__4865__auto___57132 + (1));
i__4865__auto___57132 = G__57133;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55381 = conformed_args__51178__auto__;
var map__55381__$1 = cljs.core.__destructure_map(map__55381);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55381__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55381__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55381__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq55371){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55371));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57135 = arguments.length;
var i__4865__auto___57136 = (0);
while(true){
if((i__4865__auto___57136 < len__4864__auto___57135)){
args__4870__auto__.push((arguments[i__4865__auto___57136]));

var G__57139 = (i__4865__auto___57136 + (1));
i__4865__auto___57136 = G__57139;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55392 = conformed_args__51178__auto__;
var map__55392__$1 = cljs.core.__destructure_map(map__55392);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55392__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55392__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55392__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq55391){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55391));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57145 = arguments.length;
var i__4865__auto___57146 = (0);
while(true){
if((i__4865__auto___57146 < len__4864__auto___57145)){
args__4870__auto__.push((arguments[i__4865__auto___57146]));

var G__57148 = (i__4865__auto___57146 + (1));
i__4865__auto___57146 = G__57148;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55404 = conformed_args__51178__auto__;
var map__55404__$1 = cljs.core.__destructure_map(map__55404);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55404__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55404__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55404__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq55400){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55400));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57158 = arguments.length;
var i__4865__auto___57159 = (0);
while(true){
if((i__4865__auto___57159 < len__4864__auto___57158)){
args__4870__auto__.push((arguments[i__4865__auto___57159]));

var G__57160 = (i__4865__auto___57159 + (1));
i__4865__auto___57159 = G__57160;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55416 = conformed_args__51178__auto__;
var map__55416__$1 = cljs.core.__destructure_map(map__55416);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55416__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55416__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55416__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq55410){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55410));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57166 = arguments.length;
var i__4865__auto___57167 = (0);
while(true){
if((i__4865__auto___57167 < len__4864__auto___57166)){
args__4870__auto__.push((arguments[i__4865__auto___57167]));

var G__57168 = (i__4865__auto___57167 + (1));
i__4865__auto___57167 = G__57168;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55425 = conformed_args__51178__auto__;
var map__55425__$1 = cljs.core.__destructure_map(map__55425);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55425__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55425__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55425__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq55420){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55420));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57173 = arguments.length;
var i__4865__auto___57174 = (0);
while(true){
if((i__4865__auto___57174 < len__4864__auto___57173)){
args__4870__auto__.push((arguments[i__4865__auto___57174]));

var G__57176 = (i__4865__auto___57174 + (1));
i__4865__auto___57174 = G__57176;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55441 = conformed_args__51178__auto__;
var map__55441__$1 = cljs.core.__destructure_map(map__55441);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55441__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55441__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55441__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq55432){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55432));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57178 = arguments.length;
var i__4865__auto___57179 = (0);
while(true){
if((i__4865__auto___57179 < len__4864__auto___57178)){
args__4870__auto__.push((arguments[i__4865__auto___57179]));

var G__57180 = (i__4865__auto___57179 + (1));
i__4865__auto___57179 = G__57180;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55448 = conformed_args__51178__auto__;
var map__55448__$1 = cljs.core.__destructure_map(map__55448);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55448__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55448__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55448__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq55444){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55444));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57183 = arguments.length;
var i__4865__auto___57185 = (0);
while(true){
if((i__4865__auto___57185 < len__4864__auto___57183)){
args__4870__auto__.push((arguments[i__4865__auto___57185]));

var G__57186 = (i__4865__auto___57185 + (1));
i__4865__auto___57185 = G__57186;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55457 = conformed_args__51178__auto__;
var map__55457__$1 = cljs.core.__destructure_map(map__55457);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55457__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55457__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55457__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq55449){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55449));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57191 = arguments.length;
var i__4865__auto___57192 = (0);
while(true){
if((i__4865__auto___57192 < len__4864__auto___57191)){
args__4870__auto__.push((arguments[i__4865__auto___57192]));

var G__57193 = (i__4865__auto___57192 + (1));
i__4865__auto___57192 = G__57193;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55473 = conformed_args__51178__auto__;
var map__55473__$1 = cljs.core.__destructure_map(map__55473);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55473__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55473__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55473__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq55465){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55465));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57196 = arguments.length;
var i__4865__auto___57197 = (0);
while(true){
if((i__4865__auto___57197 < len__4864__auto___57196)){
args__4870__auto__.push((arguments[i__4865__auto___57197]));

var G__57198 = (i__4865__auto___57197 + (1));
i__4865__auto___57197 = G__57198;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55481 = conformed_args__51178__auto__;
var map__55481__$1 = cljs.core.__destructure_map(map__55481);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55481__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq55474){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55474));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57200 = arguments.length;
var i__4865__auto___57201 = (0);
while(true){
if((i__4865__auto___57201 < len__4864__auto___57200)){
args__4870__auto__.push((arguments[i__4865__auto___57201]));

var G__57202 = (i__4865__auto___57201 + (1));
i__4865__auto___57201 = G__57202;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55489 = conformed_args__51178__auto__;
var map__55489__$1 = cljs.core.__destructure_map(map__55489);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55489__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55489__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55489__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq55488){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55488));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57208 = arguments.length;
var i__4865__auto___57211 = (0);
while(true){
if((i__4865__auto___57211 < len__4864__auto___57208)){
args__4870__auto__.push((arguments[i__4865__auto___57211]));

var G__57215 = (i__4865__auto___57211 + (1));
i__4865__auto___57211 = G__57215;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55500 = conformed_args__51178__auto__;
var map__55500__$1 = cljs.core.__destructure_map(map__55500);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55500__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55500__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55500__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq55499){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55499));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57220 = arguments.length;
var i__4865__auto___57221 = (0);
while(true){
if((i__4865__auto___57221 < len__4864__auto___57220)){
args__4870__auto__.push((arguments[i__4865__auto___57221]));

var G__57225 = (i__4865__auto___57221 + (1));
i__4865__auto___57221 = G__57225;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55509 = conformed_args__51178__auto__;
var map__55509__$1 = cljs.core.__destructure_map(map__55509);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55509__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55509__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55509__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq55505){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55505));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57232 = arguments.length;
var i__4865__auto___57233 = (0);
while(true){
if((i__4865__auto___57233 < len__4864__auto___57232)){
args__4870__auto__.push((arguments[i__4865__auto___57233]));

var G__57234 = (i__4865__auto___57233 + (1));
i__4865__auto___57233 = G__57234;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55526 = conformed_args__51178__auto__;
var map__55526__$1 = cljs.core.__destructure_map(map__55526);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55526__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55526__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55526__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq55517){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55517));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57240 = arguments.length;
var i__4865__auto___57241 = (0);
while(true){
if((i__4865__auto___57241 < len__4864__auto___57240)){
args__4870__auto__.push((arguments[i__4865__auto___57241]));

var G__57244 = (i__4865__auto___57241 + (1));
i__4865__auto___57241 = G__57244;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55542 = conformed_args__51178__auto__;
var map__55542__$1 = cljs.core.__destructure_map(map__55542);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55542__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55542__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55542__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq55532){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55532));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57248 = arguments.length;
var i__4865__auto___57250 = (0);
while(true){
if((i__4865__auto___57250 < len__4864__auto___57248)){
args__4870__auto__.push((arguments[i__4865__auto___57250]));

var G__57251 = (i__4865__auto___57250 + (1));
i__4865__auto___57250 = G__57251;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55556 = conformed_args__51178__auto__;
var map__55556__$1 = cljs.core.__destructure_map(map__55556);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55556__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55556__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq55548){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55548));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57257 = arguments.length;
var i__4865__auto___57258 = (0);
while(true){
if((i__4865__auto___57258 < len__4864__auto___57257)){
args__4870__auto__.push((arguments[i__4865__auto___57258]));

var G__57260 = (i__4865__auto___57258 + (1));
i__4865__auto___57258 = G__57260;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55568 = conformed_args__51178__auto__;
var map__55568__$1 = cljs.core.__destructure_map(map__55568);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55568__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55568__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55568__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq55560){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55560));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57268 = arguments.length;
var i__4865__auto___57269 = (0);
while(true){
if((i__4865__auto___57269 < len__4864__auto___57268)){
args__4870__auto__.push((arguments[i__4865__auto___57269]));

var G__57270 = (i__4865__auto___57269 + (1));
i__4865__auto___57269 = G__57270;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55591 = conformed_args__51178__auto__;
var map__55591__$1 = cljs.core.__destructure_map(map__55591);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55591__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55591__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55591__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq55577){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55577));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57272 = arguments.length;
var i__4865__auto___57273 = (0);
while(true){
if((i__4865__auto___57273 < len__4864__auto___57272)){
args__4870__auto__.push((arguments[i__4865__auto___57273]));

var G__57274 = (i__4865__auto___57273 + (1));
i__4865__auto___57273 = G__57274;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55604 = conformed_args__51178__auto__;
var map__55604__$1 = cljs.core.__destructure_map(map__55604);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq55599){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55599));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57277 = arguments.length;
var i__4865__auto___57278 = (0);
while(true){
if((i__4865__auto___57278 < len__4864__auto___57277)){
args__4870__auto__.push((arguments[i__4865__auto___57278]));

var G__57279 = (i__4865__auto___57278 + (1));
i__4865__auto___57278 = G__57279;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55624 = conformed_args__51178__auto__;
var map__55624__$1 = cljs.core.__destructure_map(map__55624);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55624__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55624__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55624__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq55615){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55615));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57286 = arguments.length;
var i__4865__auto___57287 = (0);
while(true){
if((i__4865__auto___57287 < len__4864__auto___57286)){
args__4870__auto__.push((arguments[i__4865__auto___57287]));

var G__57289 = (i__4865__auto___57287 + (1));
i__4865__auto___57287 = G__57289;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__55635 = conformed_args__51178__auto__;
var map__55635__$1 = cljs.core.__destructure_map(map__55635);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55635__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55635__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55635__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq55628){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55628));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
