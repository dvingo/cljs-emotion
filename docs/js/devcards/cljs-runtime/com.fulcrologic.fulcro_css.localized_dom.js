goog.provide('com.fulcrologic.fulcro_css.localized_dom');





































































































































































































com.fulcrologic.fulcro_css.localized_dom.node = com.fulcrologic.fulcro.dom.node;
com.fulcrologic.fulcro_css.localized_dom.render_to_str = com.fulcrologic.fulcro.dom.render_to_str;
com.fulcrologic.fulcro_css.localized_dom.create_element = com.fulcrologic.fulcro.dom.create_element;
var arr_append_STAR_ = (function com$fulcrologic$fulcro_css$localized_dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
var arr_append = (function com$fulcrologic$fulcro_css$localized_dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(arr_append_STAR_,arr,com.fulcrologic.fulcro.components.force_children(tail));
});
com.fulcrologic.fulcro_css.localized_dom.macro_create_element = (function com$fulcrologic$fulcro_css$localized_dom$macro_create_element(var_args){
var G__58073 = arguments.length;
switch (G__58073) {
case 2:
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__58076 = args;
var seq__58077 = cljs.core.seq(vec__58076);
var first__58078 = cljs.core.first(seq__58077);
var seq__58077__$1 = cljs.core.next(seq__58077);
var head = first__58078;
var tail = seq__58077__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__58079 = (function (){var G__58081 = [type,com.fulcrologic.fulcro_css.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__58081,tail);

return G__58081;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58079) : f.call(null,G__58079));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__58082 = (function (){var G__58083 = [type,com.fulcrologic.fulcro_css.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__58083,args);

return G__58083;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58082) : f.call(null,G__58082));
} else {
if(cljs.core.object_QMARK_(head)){
var G__58084 = (function (){var G__58085 = [type,com.fulcrologic.fulcro_css.localized_dom_common.add_kwprops_to_props(head,csskw)];
arr_append(G__58085,tail);

return G__58085;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58084) : f.call(null,G__58084));
} else {
if(cljs.core.map_QMARK_(head)){
var G__58086 = (function (){var G__58087 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro_css.localized_dom_common.add_kwprops_to_props(head,csskw))];
arr_append(G__58087,tail);

return G__58087;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58086) : f.call(null,G__58086));
} else {
var G__58088 = (function (){var G__58090 = [type,com.fulcrologic.fulcro_css.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__58090,args);

return G__58090;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58088) : f.call(null,G__58088));

}
}
}
}
}));

(com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$lang$maxFixedArity = 3);

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
com.fulcrologic.fulcro_css.localized_dom.form = (function com$fulcrologic$fulcro_css$localized_dom$form(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59006 = arguments.length;
var i__4865__auto___59007 = (0);
while(true){
if((i__4865__auto___59007 < len__4864__auto___59006)){
args__4870__auto__.push((arguments[i__4865__auto___59007]));

var G__59008 = (i__4865__auto___59007 + (1));
i__4865__auto___59007 = G__59008;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58094 = conformed_args__51178__auto__;
var map__58094__$1 = cljs.core.__destructure_map(map__58094);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58094__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.form.cljs$lang$applyTo = (function (seq58093){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58093));
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
com.fulcrologic.fulcro_css.localized_dom.audio = (function com$fulcrologic$fulcro_css$localized_dom$audio(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59014 = arguments.length;
var i__4865__auto___59015 = (0);
while(true){
if((i__4865__auto___59015 < len__4864__auto___59014)){
args__4870__auto__.push((arguments[i__4865__auto___59015]));

var G__59016 = (i__4865__auto___59015 + (1));
i__4865__auto___59015 = G__59016;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58097 = conformed_args__51178__auto__;
var map__58097__$1 = cljs.core.__destructure_map(map__58097);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58097__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58097__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58097__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.audio.cljs$lang$applyTo = (function (seq58096){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58096));
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
com.fulcrologic.fulcro_css.localized_dom.input = (function com$fulcrologic$fulcro_css$localized_dom$input(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59022 = arguments.length;
var i__4865__auto___59023 = (0);
while(true){
if((i__4865__auto___59023 < len__4864__auto___59022)){
args__4870__auto__.push((arguments[i__4865__auto___59023]));

var G__59024 = (i__4865__auto___59023 + (1));
i__4865__auto___59023 = G__59024;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58103 = conformed_args__51178__auto__;
var map__58103__$1 = cljs.core.__destructure_map(map__58103);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58103__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58103__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58103__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.input.cljs$lang$applyTo = (function (seq58100){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58100));
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
com.fulcrologic.fulcro_css.localized_dom.menuitem = (function com$fulcrologic$fulcro_css$localized_dom$menuitem(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59034 = arguments.length;
var i__4865__auto___59035 = (0);
while(true){
if((i__4865__auto___59035 < len__4864__auto___59034)){
args__4870__auto__.push((arguments[i__4865__auto___59035]));

var G__59038 = (i__4865__auto___59035 + (1));
i__4865__auto___59035 = G__59038;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58114 = conformed_args__51178__auto__;
var map__58114__$1 = cljs.core.__destructure_map(map__58114);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58114__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58114__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58114__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.menuitem.cljs$lang$applyTo = (function (seq58107){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58107));
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
com.fulcrologic.fulcro_css.localized_dom.radialGradient = (function com$fulcrologic$fulcro_css$localized_dom$radialGradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59040 = arguments.length;
var i__4865__auto___59041 = (0);
while(true){
if((i__4865__auto___59041 < len__4864__auto___59040)){
args__4870__auto__.push((arguments[i__4865__auto___59041]));

var G__59042 = (i__4865__auto___59041 + (1));
i__4865__auto___59041 = G__59042;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58127 = conformed_args__51178__auto__;
var map__58127__$1 = cljs.core.__destructure_map(map__58127);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.radialGradient.cljs$lang$applyTo = (function (seq58121){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58121));
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
com.fulcrologic.fulcro_css.localized_dom.feMerge = (function com$fulcrologic$fulcro_css$localized_dom$feMerge(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59045 = arguments.length;
var i__4865__auto___59046 = (0);
while(true){
if((i__4865__auto___59046 < len__4864__auto___59045)){
args__4870__auto__.push((arguments[i__4865__auto___59046]));

var G__59047 = (i__4865__auto___59046 + (1));
i__4865__auto___59046 = G__59047;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58133 = conformed_args__51178__auto__;
var map__58133__$1 = cljs.core.__destructure_map(map__58133);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58133__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feMerge.cljs$lang$applyTo = (function (seq58130){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58130));
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
com.fulcrologic.fulcro_css.localized_dom.set = (function com$fulcrologic$fulcro_css$localized_dom$set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59054 = arguments.length;
var i__4865__auto___59055 = (0);
while(true){
if((i__4865__auto___59055 < len__4864__auto___59054)){
args__4870__auto__.push((arguments[i__4865__auto___59055]));

var G__59056 = (i__4865__auto___59055 + (1));
i__4865__auto___59055 = G__59056;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58143 = conformed_args__51178__auto__;
var map__58143__$1 = cljs.core.__destructure_map(map__58143);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58143__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.set.cljs$lang$applyTo = (function (seq58136){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58136));
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
com.fulcrologic.fulcro_css.localized_dom.feSpecularLighting = (function com$fulcrologic$fulcro_css$localized_dom$feSpecularLighting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59061 = arguments.length;
var i__4865__auto___59062 = (0);
while(true){
if((i__4865__auto___59062 < len__4864__auto___59061)){
args__4870__auto__.push((arguments[i__4865__auto___59062]));

var G__59064 = (i__4865__auto___59062 + (1));
i__4865__auto___59062 = G__59064;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58147 = conformed_args__51178__auto__;
var map__58147__$1 = cljs.core.__destructure_map(map__58147);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58147__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58147__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58147__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feSpecularLighting.cljs$lang$applyTo = (function (seq58146){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58146));
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
com.fulcrologic.fulcro_css.localized_dom.base = (function com$fulcrologic$fulcro_css$localized_dom$base(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59069 = arguments.length;
var i__4865__auto___59070 = (0);
while(true){
if((i__4865__auto___59070 < len__4864__auto___59069)){
args__4870__auto__.push((arguments[i__4865__auto___59070]));

var G__59071 = (i__4865__auto___59070 + (1));
i__4865__auto___59070 = G__59071;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58162 = conformed_args__51178__auto__;
var map__58162__$1 = cljs.core.__destructure_map(map__58162);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58162__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58162__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58162__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.base.cljs$lang$applyTo = (function (seq58159){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58159));
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
com.fulcrologic.fulcro_css.localized_dom.h1 = (function com$fulcrologic$fulcro_css$localized_dom$h1(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59080 = arguments.length;
var i__4865__auto___59081 = (0);
while(true){
if((i__4865__auto___59081 < len__4864__auto___59080)){
args__4870__auto__.push((arguments[i__4865__auto___59081]));

var G__59082 = (i__4865__auto___59081 + (1));
i__4865__auto___59081 = G__59082;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58169 = conformed_args__51178__auto__;
var map__58169__$1 = cljs.core.__destructure_map(map__58169);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58169__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58169__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58169__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.h1.cljs$lang$applyTo = (function (seq58166){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58166));
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
com.fulcrologic.fulcro_css.localized_dom.feOffset = (function com$fulcrologic$fulcro_css$localized_dom$feOffset(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59093 = arguments.length;
var i__4865__auto___59094 = (0);
while(true){
if((i__4865__auto___59094 < len__4864__auto___59093)){
args__4870__auto__.push((arguments[i__4865__auto___59094]));

var G__59095 = (i__4865__auto___59094 + (1));
i__4865__auto___59094 = G__59095;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58176 = conformed_args__51178__auto__;
var map__58176__$1 = cljs.core.__destructure_map(map__58176);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58176__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58176__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feOffset.cljs$lang$applyTo = (function (seq58172){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58172));
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
com.fulcrologic.fulcro_css.localized_dom.embed = (function com$fulcrologic$fulcro_css$localized_dom$embed(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59096 = arguments.length;
var i__4865__auto___59097 = (0);
while(true){
if((i__4865__auto___59097 < len__4864__auto___59096)){
args__4870__auto__.push((arguments[i__4865__auto___59097]));

var G__59098 = (i__4865__auto___59097 + (1));
i__4865__auto___59097 = G__59098;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58183 = conformed_args__51178__auto__;
var map__58183__$1 = cljs.core.__destructure_map(map__58183);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58183__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.embed.cljs$lang$applyTo = (function (seq58179){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58179));
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
com.fulcrologic.fulcro_css.localized_dom.animateMotion = (function com$fulcrologic$fulcro_css$localized_dom$animateMotion(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59100 = arguments.length;
var i__4865__auto___59101 = (0);
while(true){
if((i__4865__auto___59101 < len__4864__auto___59100)){
args__4870__auto__.push((arguments[i__4865__auto___59101]));

var G__59102 = (i__4865__auto___59101 + (1));
i__4865__auto___59101 = G__59102;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58189 = conformed_args__51178__auto__;
var map__58189__$1 = cljs.core.__destructure_map(map__58189);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58189__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58189__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58189__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.animateMotion.cljs$lang$applyTo = (function (seq58186){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58186));
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
com.fulcrologic.fulcro_css.localized_dom.h3 = (function com$fulcrologic$fulcro_css$localized_dom$h3(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59104 = arguments.length;
var i__4865__auto___59105 = (0);
while(true){
if((i__4865__auto___59105 < len__4864__auto___59104)){
args__4870__auto__.push((arguments[i__4865__auto___59105]));

var G__59106 = (i__4865__auto___59105 + (1));
i__4865__auto___59105 = G__59106;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58194 = conformed_args__51178__auto__;
var map__58194__$1 = cljs.core.__destructure_map(map__58194);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58194__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58194__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58194__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.h3.cljs$lang$applyTo = (function (seq58193){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58193));
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
com.fulcrologic.fulcro_css.localized_dom.body = (function com$fulcrologic$fulcro_css$localized_dom$body(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59108 = arguments.length;
var i__4865__auto___59109 = (0);
while(true){
if((i__4865__auto___59109 < len__4864__auto___59108)){
args__4870__auto__.push((arguments[i__4865__auto___59109]));

var G__59110 = (i__4865__auto___59109 + (1));
i__4865__auto___59109 = G__59110;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58198 = conformed_args__51178__auto__;
var map__58198__$1 = cljs.core.__destructure_map(map__58198);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.body.cljs$lang$applyTo = (function (seq58197){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58197));
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
com.fulcrologic.fulcro_css.localized_dom.hkern = (function com$fulcrologic$fulcro_css$localized_dom$hkern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59111 = arguments.length;
var i__4865__auto___59112 = (0);
while(true){
if((i__4865__auto___59112 < len__4864__auto___59111)){
args__4870__auto__.push((arguments[i__4865__auto___59112]));

var G__59113 = (i__4865__auto___59112 + (1));
i__4865__auto___59112 = G__59113;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58205 = conformed_args__51178__auto__;
var map__58205__$1 = cljs.core.__destructure_map(map__58205);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.hkern.cljs$lang$applyTo = (function (seq58199){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58199));
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
com.fulcrologic.fulcro_css.localized_dom.keygen = (function com$fulcrologic$fulcro_css$localized_dom$keygen(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59118 = arguments.length;
var i__4865__auto___59119 = (0);
while(true){
if((i__4865__auto___59119 < len__4864__auto___59118)){
args__4870__auto__.push((arguments[i__4865__auto___59119]));

var G__59120 = (i__4865__auto___59119 + (1));
i__4865__auto___59119 = G__59120;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58210 = conformed_args__51178__auto__;
var map__58210__$1 = cljs.core.__destructure_map(map__58210);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.keygen.cljs$lang$applyTo = (function (seq58206){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58206));
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
com.fulcrologic.fulcro_css.localized_dom.font_face_format = (function com$fulcrologic$fulcro_css$localized_dom$font_face_format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59121 = arguments.length;
var i__4865__auto___59122 = (0);
while(true){
if((i__4865__auto___59122 < len__4864__auto___59121)){
args__4870__auto__.push((arguments[i__4865__auto___59122]));

var G__59123 = (i__4865__auto___59122 + (1));
i__4865__auto___59122 = G__59123;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58217 = conformed_args__51178__auto__;
var map__58217__$1 = cljs.core.__destructure_map(map__58217);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.font_face_format.cljs$lang$applyTo = (function (seq58213){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58213));
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
com.fulcrologic.fulcro_css.localized_dom.feFuncA = (function com$fulcrologic$fulcro_css$localized_dom$feFuncA(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59127 = arguments.length;
var i__4865__auto___59128 = (0);
while(true){
if((i__4865__auto___59128 < len__4864__auto___59127)){
args__4870__auto__.push((arguments[i__4865__auto___59128]));

var G__59130 = (i__4865__auto___59128 + (1));
i__4865__auto___59128 = G__59130;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58224 = conformed_args__51178__auto__;
var map__58224__$1 = cljs.core.__destructure_map(map__58224);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58224__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58224__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58224__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feFuncA.cljs$lang$applyTo = (function (seq58221){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58221));
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
com.fulcrologic.fulcro_css.localized_dom.progress = (function com$fulcrologic$fulcro_css$localized_dom$progress(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59132 = arguments.length;
var i__4865__auto___59133 = (0);
while(true){
if((i__4865__auto___59133 < len__4864__auto___59132)){
args__4870__auto__.push((arguments[i__4865__auto___59133]));

var G__59134 = (i__4865__auto___59133 + (1));
i__4865__auto___59133 = G__59134;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58235 = conformed_args__51178__auto__;
var map__58235__$1 = cljs.core.__destructure_map(map__58235);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58235__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.progress.cljs$lang$applyTo = (function (seq58228){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58228));
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
com.fulcrologic.fulcro_css.localized_dom.main = (function com$fulcrologic$fulcro_css$localized_dom$main(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59137 = arguments.length;
var i__4865__auto___59138 = (0);
while(true){
if((i__4865__auto___59138 < len__4864__auto___59137)){
args__4870__auto__.push((arguments[i__4865__auto___59138]));

var G__59139 = (i__4865__auto___59138 + (1));
i__4865__auto___59138 = G__59139;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58248 = conformed_args__51178__auto__;
var map__58248__$1 = cljs.core.__destructure_map(map__58248);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58248__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58248__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58248__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.main.cljs$lang$applyTo = (function (seq58236){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58236));
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
com.fulcrologic.fulcro_css.localized_dom.cite = (function com$fulcrologic$fulcro_css$localized_dom$cite(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59140 = arguments.length;
var i__4865__auto___59141 = (0);
while(true){
if((i__4865__auto___59141 < len__4864__auto___59140)){
args__4870__auto__.push((arguments[i__4865__auto___59141]));

var G__59142 = (i__4865__auto___59141 + (1));
i__4865__auto___59141 = G__59142;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58257 = conformed_args__51178__auto__;
var map__58257__$1 = cljs.core.__destructure_map(map__58257);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58257__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58257__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58257__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.cite.cljs$lang$applyTo = (function (seq58255){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58255));
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
com.fulcrologic.fulcro_css.localized_dom.rect = (function com$fulcrologic$fulcro_css$localized_dom$rect(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59145 = arguments.length;
var i__4865__auto___59146 = (0);
while(true){
if((i__4865__auto___59146 < len__4864__auto___59145)){
args__4870__auto__.push((arguments[i__4865__auto___59146]));

var G__59147 = (i__4865__auto___59146 + (1));
i__4865__auto___59146 = G__59147;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58269 = conformed_args__51178__auto__;
var map__58269__$1 = cljs.core.__destructure_map(map__58269);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58269__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58269__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58269__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.rect.cljs$lang$applyTo = (function (seq58259){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58259));
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
com.fulcrologic.fulcro_css.localized_dom.tref = (function com$fulcrologic$fulcro_css$localized_dom$tref(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59151 = arguments.length;
var i__4865__auto___59152 = (0);
while(true){
if((i__4865__auto___59152 < len__4864__auto___59151)){
args__4870__auto__.push((arguments[i__4865__auto___59152]));

var G__59153 = (i__4865__auto___59152 + (1));
i__4865__auto___59152 = G__59153;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58282 = conformed_args__51178__auto__;
var map__58282__$1 = cljs.core.__destructure_map(map__58282);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58282__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58282__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58282__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.tref.cljs$lang$applyTo = (function (seq58281){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58281));
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
com.fulcrologic.fulcro_css.localized_dom.meshpatch = (function com$fulcrologic$fulcro_css$localized_dom$meshpatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59155 = arguments.length;
var i__4865__auto___59156 = (0);
while(true){
if((i__4865__auto___59156 < len__4864__auto___59155)){
args__4870__auto__.push((arguments[i__4865__auto___59156]));

var G__59157 = (i__4865__auto___59156 + (1));
i__4865__auto___59156 = G__59157;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58286 = conformed_args__51178__auto__;
var map__58286__$1 = cljs.core.__destructure_map(map__58286);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.meshpatch.cljs$lang$applyTo = (function (seq58284){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58284));
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
com.fulcrologic.fulcro_css.localized_dom.polyline = (function com$fulcrologic$fulcro_css$localized_dom$polyline(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59162 = arguments.length;
var i__4865__auto___59163 = (0);
while(true){
if((i__4865__auto___59163 < len__4864__auto___59162)){
args__4870__auto__.push((arguments[i__4865__auto___59163]));

var G__59164 = (i__4865__auto___59163 + (1));
i__4865__auto___59163 = G__59164;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58290 = conformed_args__51178__auto__;
var map__58290__$1 = cljs.core.__destructure_map(map__58290);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58290__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58290__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.polyline.cljs$lang$applyTo = (function (seq58289){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58289));
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
com.fulcrologic.fulcro_css.localized_dom.metadata = (function com$fulcrologic$fulcro_css$localized_dom$metadata(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59168 = arguments.length;
var i__4865__auto___59169 = (0);
while(true){
if((i__4865__auto___59169 < len__4864__auto___59168)){
args__4870__auto__.push((arguments[i__4865__auto___59169]));

var G__59170 = (i__4865__auto___59169 + (1));
i__4865__auto___59169 = G__59170;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58295 = conformed_args__51178__auto__;
var map__58295__$1 = cljs.core.__destructure_map(map__58295);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58295__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58295__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.metadata.cljs$lang$applyTo = (function (seq58291){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58291));
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
com.fulcrologic.fulcro_css.localized_dom.map = (function com$fulcrologic$fulcro_css$localized_dom$map(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59171 = arguments.length;
var i__4865__auto___59172 = (0);
while(true){
if((i__4865__auto___59172 < len__4864__auto___59171)){
args__4870__auto__.push((arguments[i__4865__auto___59172]));

var G__59173 = (i__4865__auto___59172 + (1));
i__4865__auto___59172 = G__59173;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58299 = conformed_args__51178__auto__;
var map__58299__$1 = cljs.core.__destructure_map(map__58299);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58299__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58299__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58299__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.map.cljs$lang$applyTo = (function (seq58296){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58296));
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
com.fulcrologic.fulcro_css.localized_dom.object = (function com$fulcrologic$fulcro_css$localized_dom$object(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59175 = arguments.length;
var i__4865__auto___59176 = (0);
while(true){
if((i__4865__auto___59176 < len__4864__auto___59175)){
args__4870__auto__.push((arguments[i__4865__auto___59176]));

var G__59177 = (i__4865__auto___59176 + (1));
i__4865__auto___59176 = G__59177;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58302 = conformed_args__51178__auto__;
var map__58302__$1 = cljs.core.__destructure_map(map__58302);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58302__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58302__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58302__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.object.cljs$lang$applyTo = (function (seq58301){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58301));
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
com.fulcrologic.fulcro_css.localized_dom.i = (function com$fulcrologic$fulcro_css$localized_dom$i(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59179 = arguments.length;
var i__4865__auto___59180 = (0);
while(true){
if((i__4865__auto___59180 < len__4864__auto___59179)){
args__4870__auto__.push((arguments[i__4865__auto___59180]));

var G__59181 = (i__4865__auto___59180 + (1));
i__4865__auto___59180 = G__59181;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58309 = conformed_args__51178__auto__;
var map__58309__$1 = cljs.core.__destructure_map(map__58309);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.i.cljs$lang$applyTo = (function (seq58304){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58304));
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
com.fulcrologic.fulcro_css.localized_dom.font_face_name = (function com$fulcrologic$fulcro_css$localized_dom$font_face_name(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59184 = arguments.length;
var i__4865__auto___59185 = (0);
while(true){
if((i__4865__auto___59185 < len__4864__auto___59184)){
args__4870__auto__.push((arguments[i__4865__auto___59185]));

var G__59187 = (i__4865__auto___59185 + (1));
i__4865__auto___59185 = G__59187;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58312 = conformed_args__51178__auto__;
var map__58312__$1 = cljs.core.__destructure_map(map__58312);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58312__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58312__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58312__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.font_face_name.cljs$lang$applyTo = (function (seq58311){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58311));
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
com.fulcrologic.fulcro_css.localized_dom.p = (function com$fulcrologic$fulcro_css$localized_dom$p(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59189 = arguments.length;
var i__4865__auto___59190 = (0);
while(true){
if((i__4865__auto___59190 < len__4864__auto___59189)){
args__4870__auto__.push((arguments[i__4865__auto___59190]));

var G__59191 = (i__4865__auto___59190 + (1));
i__4865__auto___59190 = G__59191;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58322 = conformed_args__51178__auto__;
var map__58322__$1 = cljs.core.__destructure_map(map__58322);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58322__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58322__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.p.cljs$lang$applyTo = (function (seq58314){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58314));
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
com.fulcrologic.fulcro_css.localized_dom.feFuncR = (function com$fulcrologic$fulcro_css$localized_dom$feFuncR(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59196 = arguments.length;
var i__4865__auto___59197 = (0);
while(true){
if((i__4865__auto___59197 < len__4864__auto___59196)){
args__4870__auto__.push((arguments[i__4865__auto___59197]));

var G__59198 = (i__4865__auto___59197 + (1));
i__4865__auto___59197 = G__59198;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58325 = conformed_args__51178__auto__;
var map__58325__$1 = cljs.core.__destructure_map(map__58325);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58325__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58325__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58325__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feFuncR.cljs$lang$applyTo = (function (seq58324){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58324));
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
com.fulcrologic.fulcro_css.localized_dom.hatchpath = (function com$fulcrologic$fulcro_css$localized_dom$hatchpath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59201 = arguments.length;
var i__4865__auto___59202 = (0);
while(true){
if((i__4865__auto___59202 < len__4864__auto___59201)){
args__4870__auto__.push((arguments[i__4865__auto___59202]));

var G__59203 = (i__4865__auto___59202 + (1));
i__4865__auto___59202 = G__59203;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58327 = conformed_args__51178__auto__;
var map__58327__$1 = cljs.core.__destructure_map(map__58327);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.hatchpath.cljs$lang$applyTo = (function (seq58326){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58326));
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
com.fulcrologic.fulcro_css.localized_dom.altGlyphItem = (function com$fulcrologic$fulcro_css$localized_dom$altGlyphItem(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59205 = arguments.length;
var i__4865__auto___59207 = (0);
while(true){
if((i__4865__auto___59207 < len__4864__auto___59205)){
args__4870__auto__.push((arguments[i__4865__auto___59207]));

var G__59208 = (i__4865__auto___59207 + (1));
i__4865__auto___59207 = G__59208;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58338 = conformed_args__51178__auto__;
var map__58338__$1 = cljs.core.__destructure_map(map__58338);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58338__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58338__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58338__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.altGlyphItem.cljs$lang$applyTo = (function (seq58337){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58337));
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
com.fulcrologic.fulcro_css.localized_dom.nav = (function com$fulcrologic$fulcro_css$localized_dom$nav(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59209 = arguments.length;
var i__4865__auto___59210 = (0);
while(true){
if((i__4865__auto___59210 < len__4864__auto___59209)){
args__4870__auto__.push((arguments[i__4865__auto___59210]));

var G__59211 = (i__4865__auto___59210 + (1));
i__4865__auto___59210 = G__59211;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58350 = conformed_args__51178__auto__;
var map__58350__$1 = cljs.core.__destructure_map(map__58350);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58350__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58350__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58350__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.nav.cljs$lang$applyTo = (function (seq58342){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58342));
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
com.fulcrologic.fulcro_css.localized_dom.ruby = (function com$fulcrologic$fulcro_css$localized_dom$ruby(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59212 = arguments.length;
var i__4865__auto___59213 = (0);
while(true){
if((i__4865__auto___59213 < len__4864__auto___59212)){
args__4870__auto__.push((arguments[i__4865__auto___59213]));

var G__59214 = (i__4865__auto___59213 + (1));
i__4865__auto___59213 = G__59214;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58353 = conformed_args__51178__auto__;
var map__58353__$1 = cljs.core.__destructure_map(map__58353);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58353__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58353__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58353__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.ruby.cljs$lang$applyTo = (function (seq58351){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58351));
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
com.fulcrologic.fulcro_css.localized_dom.switch$ = (function com$fulcrologic$fulcro_css$localized_dom$switch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59215 = arguments.length;
var i__4865__auto___59216 = (0);
while(true){
if((i__4865__auto___59216 < len__4864__auto___59215)){
args__4870__auto__.push((arguments[i__4865__auto___59216]));

var G__59217 = (i__4865__auto___59216 + (1));
i__4865__auto___59216 = G__59217;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58362 = conformed_args__51178__auto__;
var map__58362__$1 = cljs.core.__destructure_map(map__58362);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58362__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58362__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58362__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.switch$.cljs$lang$applyTo = (function (seq58359){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58359));
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
com.fulcrologic.fulcro_css.localized_dom.a = (function com$fulcrologic$fulcro_css$localized_dom$a(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59218 = arguments.length;
var i__4865__auto___59219 = (0);
while(true){
if((i__4865__auto___59219 < len__4864__auto___59218)){
args__4870__auto__.push((arguments[i__4865__auto___59219]));

var G__59220 = (i__4865__auto___59219 + (1));
i__4865__auto___59219 = G__59220;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58366 = conformed_args__51178__auto__;
var map__58366__$1 = cljs.core.__destructure_map(map__58366);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58366__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58366__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58366__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.a.cljs$lang$applyTo = (function (seq58363){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58363));
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
com.fulcrologic.fulcro_css.localized_dom.view = (function com$fulcrologic$fulcro_css$localized_dom$view(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59221 = arguments.length;
var i__4865__auto___59222 = (0);
while(true){
if((i__4865__auto___59222 < len__4864__auto___59221)){
args__4870__auto__.push((arguments[i__4865__auto___59222]));

var G__59223 = (i__4865__auto___59222 + (1));
i__4865__auto___59222 = G__59223;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58375 = conformed_args__51178__auto__;
var map__58375__$1 = cljs.core.__destructure_map(map__58375);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58375__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58375__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58375__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.view.cljs$lang$applyTo = (function (seq58370){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58370));
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
com.fulcrologic.fulcro_css.localized_dom.menu = (function com$fulcrologic$fulcro_css$localized_dom$menu(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59224 = arguments.length;
var i__4865__auto___59225 = (0);
while(true){
if((i__4865__auto___59225 < len__4864__auto___59224)){
args__4870__auto__.push((arguments[i__4865__auto___59225]));

var G__59226 = (i__4865__auto___59225 + (1));
i__4865__auto___59225 = G__59226;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58379 = conformed_args__51178__auto__;
var map__58379__$1 = cljs.core.__destructure_map(map__58379);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.menu.cljs$lang$applyTo = (function (seq58377){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58377));
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
com.fulcrologic.fulcro_css.localized_dom.blockquote = (function com$fulcrologic$fulcro_css$localized_dom$blockquote(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59227 = arguments.length;
var i__4865__auto___59228 = (0);
while(true){
if((i__4865__auto___59228 < len__4864__auto___59227)){
args__4870__auto__.push((arguments[i__4865__auto___59228]));

var G__59229 = (i__4865__auto___59228 + (1));
i__4865__auto___59228 = G__59229;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58387 = conformed_args__51178__auto__;
var map__58387__$1 = cljs.core.__destructure_map(map__58387);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58387__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58387__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58387__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.blockquote.cljs$lang$applyTo = (function (seq58380){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58380));
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
com.fulcrologic.fulcro_css.localized_dom.img = (function com$fulcrologic$fulcro_css$localized_dom$img(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59232 = arguments.length;
var i__4865__auto___59233 = (0);
while(true){
if((i__4865__auto___59233 < len__4864__auto___59232)){
args__4870__auto__.push((arguments[i__4865__auto___59233]));

var G__59234 = (i__4865__auto___59233 + (1));
i__4865__auto___59233 = G__59234;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58392 = conformed_args__51178__auto__;
var map__58392__$1 = cljs.core.__destructure_map(map__58392);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58392__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58392__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58392__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.img.cljs$lang$applyTo = (function (seq58389){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58389));
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
com.fulcrologic.fulcro_css.localized_dom.feFuncG = (function com$fulcrologic$fulcro_css$localized_dom$feFuncG(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59236 = arguments.length;
var i__4865__auto___59237 = (0);
while(true){
if((i__4865__auto___59237 < len__4864__auto___59236)){
args__4870__auto__.push((arguments[i__4865__auto___59237]));

var G__59238 = (i__4865__auto___59237 + (1));
i__4865__auto___59237 = G__59238;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58401 = conformed_args__51178__auto__;
var map__58401__$1 = cljs.core.__destructure_map(map__58401);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58401__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58401__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58401__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feFuncG.cljs$lang$applyTo = (function (seq58394){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58394));
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
com.fulcrologic.fulcro_css.localized_dom.text = (function com$fulcrologic$fulcro_css$localized_dom$text(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59239 = arguments.length;
var i__4865__auto___59240 = (0);
while(true){
if((i__4865__auto___59240 < len__4864__auto___59239)){
args__4870__auto__.push((arguments[i__4865__auto___59240]));

var G__59241 = (i__4865__auto___59240 + (1));
i__4865__auto___59240 = G__59241;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58406 = conformed_args__51178__auto__;
var map__58406__$1 = cljs.core.__destructure_map(map__58406);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58406__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58406__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58406__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.text.cljs$lang$applyTo = (function (seq58404){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58404));
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
com.fulcrologic.fulcro_css.localized_dom.span = (function com$fulcrologic$fulcro_css$localized_dom$span(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59242 = arguments.length;
var i__4865__auto___59243 = (0);
while(true){
if((i__4865__auto___59243 < len__4864__auto___59242)){
args__4870__auto__.push((arguments[i__4865__auto___59243]));

var G__59244 = (i__4865__auto___59243 + (1));
i__4865__auto___59243 = G__59244;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58408 = conformed_args__51178__auto__;
var map__58408__$1 = cljs.core.__destructure_map(map__58408);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58408__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58408__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58408__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.span.cljs$lang$applyTo = (function (seq58407){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58407));
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
com.fulcrologic.fulcro_css.localized_dom.track = (function com$fulcrologic$fulcro_css$localized_dom$track(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59245 = arguments.length;
var i__4865__auto___59246 = (0);
while(true){
if((i__4865__auto___59246 < len__4864__auto___59245)){
args__4870__auto__.push((arguments[i__4865__auto___59246]));

var G__59247 = (i__4865__auto___59246 + (1));
i__4865__auto___59246 = G__59247;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58412 = conformed_args__51178__auto__;
var map__58412__$1 = cljs.core.__destructure_map(map__58412);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.track.cljs$lang$applyTo = (function (seq58409){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58409));
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
com.fulcrologic.fulcro_css.localized_dom.data = (function com$fulcrologic$fulcro_css$localized_dom$data(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59250 = arguments.length;
var i__4865__auto___59251 = (0);
while(true){
if((i__4865__auto___59251 < len__4864__auto___59250)){
args__4870__auto__.push((arguments[i__4865__auto___59251]));

var G__59254 = (i__4865__auto___59251 + (1));
i__4865__auto___59251 = G__59254;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58418 = conformed_args__51178__auto__;
var map__58418__$1 = cljs.core.__destructure_map(map__58418);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58418__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58418__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58418__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.data.cljs$lang$applyTo = (function (seq58415){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58415));
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
com.fulcrologic.fulcro_css.localized_dom.u = (function com$fulcrologic$fulcro_css$localized_dom$u(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59258 = arguments.length;
var i__4865__auto___59259 = (0);
while(true){
if((i__4865__auto___59259 < len__4864__auto___59258)){
args__4870__auto__.push((arguments[i__4865__auto___59259]));

var G__59260 = (i__4865__auto___59259 + (1));
i__4865__auto___59259 = G__59260;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58426 = conformed_args__51178__auto__;
var map__58426__$1 = cljs.core.__destructure_map(map__58426);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58426__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58426__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58426__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.u.cljs$lang$applyTo = (function (seq58425){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58425));
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
com.fulcrologic.fulcro_css.localized_dom.dl = (function com$fulcrologic$fulcro_css$localized_dom$dl(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59261 = arguments.length;
var i__4865__auto___59262 = (0);
while(true){
if((i__4865__auto___59262 < len__4864__auto___59261)){
args__4870__auto__.push((arguments[i__4865__auto___59262]));

var G__59263 = (i__4865__auto___59262 + (1));
i__4865__auto___59262 = G__59263;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58434 = conformed_args__51178__auto__;
var map__58434__$1 = cljs.core.__destructure_map(map__58434);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.dl.cljs$lang$applyTo = (function (seq58432){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58432));
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
com.fulcrologic.fulcro_css.localized_dom.select = (function com$fulcrologic$fulcro_css$localized_dom$select(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59268 = arguments.length;
var i__4865__auto___59269 = (0);
while(true){
if((i__4865__auto___59269 < len__4864__auto___59268)){
args__4870__auto__.push((arguments[i__4865__auto___59269]));

var G__59272 = (i__4865__auto___59269 + (1));
i__4865__auto___59269 = G__59272;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58438 = conformed_args__51178__auto__;
var map__58438__$1 = cljs.core.__destructure_map(map__58438);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58438__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58438__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58438__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.select.cljs$lang$applyTo = (function (seq58436){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58436));
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
com.fulcrologic.fulcro_css.localized_dom.polygon = (function com$fulcrologic$fulcro_css$localized_dom$polygon(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59273 = arguments.length;
var i__4865__auto___59274 = (0);
while(true){
if((i__4865__auto___59274 < len__4864__auto___59273)){
args__4870__auto__.push((arguments[i__4865__auto___59274]));

var G__59275 = (i__4865__auto___59274 + (1));
i__4865__auto___59274 = G__59275;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58444 = conformed_args__51178__auto__;
var map__58444__$1 = cljs.core.__destructure_map(map__58444);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58444__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58444__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58444__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.polygon.cljs$lang$applyTo = (function (seq58441){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58441));
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
com.fulcrologic.fulcro_css.localized_dom.pattern = (function com$fulcrologic$fulcro_css$localized_dom$pattern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59276 = arguments.length;
var i__4865__auto___59277 = (0);
while(true){
if((i__4865__auto___59277 < len__4864__auto___59276)){
args__4870__auto__.push((arguments[i__4865__auto___59277]));

var G__59278 = (i__4865__auto___59277 + (1));
i__4865__auto___59277 = G__59278;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58449 = conformed_args__51178__auto__;
var map__58449__$1 = cljs.core.__destructure_map(map__58449);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58449__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58449__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58449__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.pattern.cljs$lang$applyTo = (function (seq58447){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58447));
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
com.fulcrologic.fulcro_css.localized_dom.html = (function com$fulcrologic$fulcro_css$localized_dom$html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59279 = arguments.length;
var i__4865__auto___59280 = (0);
while(true){
if((i__4865__auto___59280 < len__4864__auto___59279)){
args__4870__auto__.push((arguments[i__4865__auto___59280]));

var G__59281 = (i__4865__auto___59280 + (1));
i__4865__auto___59280 = G__59281;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58452 = conformed_args__51178__auto__;
var map__58452__$1 = cljs.core.__destructure_map(map__58452);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.html.cljs$lang$applyTo = (function (seq58450){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58450));
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
com.fulcrologic.fulcro_css.localized_dom.foreignObject = (function com$fulcrologic$fulcro_css$localized_dom$foreignObject(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59282 = arguments.length;
var i__4865__auto___59283 = (0);
while(true){
if((i__4865__auto___59283 < len__4864__auto___59282)){
args__4870__auto__.push((arguments[i__4865__auto___59283]));

var G__59284 = (i__4865__auto___59283 + (1));
i__4865__auto___59283 = G__59284;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58456 = conformed_args__51178__auto__;
var map__58456__$1 = cljs.core.__destructure_map(map__58456);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58456__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58456__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58456__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.foreignObject.cljs$lang$applyTo = (function (seq58455){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58455));
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
com.fulcrologic.fulcro_css.localized_dom.thead = (function com$fulcrologic$fulcro_css$localized_dom$thead(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59285 = arguments.length;
var i__4865__auto___59286 = (0);
while(true){
if((i__4865__auto___59286 < len__4864__auto___59285)){
args__4870__auto__.push((arguments[i__4865__auto___59286]));

var G__59287 = (i__4865__auto___59286 + (1));
i__4865__auto___59286 = G__59287;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58460 = conformed_args__51178__auto__;
var map__58460__$1 = cljs.core.__destructure_map(map__58460);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58460__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58460__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58460__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.thead.cljs$lang$applyTo = (function (seq58458){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58458));
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
com.fulcrologic.fulcro_css.localized_dom.path = (function com$fulcrologic$fulcro_css$localized_dom$path(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59288 = arguments.length;
var i__4865__auto___59289 = (0);
while(true){
if((i__4865__auto___59289 < len__4864__auto___59288)){
args__4870__auto__.push((arguments[i__4865__auto___59289]));

var G__59290 = (i__4865__auto___59289 + (1));
i__4865__auto___59289 = G__59290;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58464 = conformed_args__51178__auto__;
var map__58464__$1 = cljs.core.__destructure_map(map__58464);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58464__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58464__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58464__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.path.cljs$lang$applyTo = (function (seq58462){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58462));
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
com.fulcrologic.fulcro_css.localized_dom.del = (function com$fulcrologic$fulcro_css$localized_dom$del(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59293 = arguments.length;
var i__4865__auto___59299 = (0);
while(true){
if((i__4865__auto___59299 < len__4864__auto___59293)){
args__4870__auto__.push((arguments[i__4865__auto___59299]));

var G__59300 = (i__4865__auto___59299 + (1));
i__4865__auto___59299 = G__59300;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58469 = conformed_args__51178__auto__;
var map__58469__$1 = cljs.core.__destructure_map(map__58469);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58469__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58469__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58469__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.del.cljs$lang$applyTo = (function (seq58465){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58465));
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
com.fulcrologic.fulcro_css.localized_dom.altGlyph = (function com$fulcrologic$fulcro_css$localized_dom$altGlyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59302 = arguments.length;
var i__4865__auto___59303 = (0);
while(true){
if((i__4865__auto___59303 < len__4864__auto___59302)){
args__4870__auto__.push((arguments[i__4865__auto___59303]));

var G__59304 = (i__4865__auto___59303 + (1));
i__4865__auto___59303 = G__59304;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58471 = conformed_args__51178__auto__;
var map__58471__$1 = cljs.core.__destructure_map(map__58471);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58471__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58471__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58471__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.altGlyph.cljs$lang$applyTo = (function (seq58470){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58470));
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
com.fulcrologic.fulcro_css.localized_dom.fieldset = (function com$fulcrologic$fulcro_css$localized_dom$fieldset(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59307 = arguments.length;
var i__4865__auto___59308 = (0);
while(true){
if((i__4865__auto___59308 < len__4864__auto___59307)){
args__4870__auto__.push((arguments[i__4865__auto___59308]));

var G__59309 = (i__4865__auto___59308 + (1));
i__4865__auto___59308 = G__59309;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58474 = conformed_args__51178__auto__;
var map__58474__$1 = cljs.core.__destructure_map(map__58474);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58474__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58474__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58474__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.fieldset.cljs$lang$applyTo = (function (seq58473){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58473));
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
com.fulcrologic.fulcro_css.localized_dom.aside = (function com$fulcrologic$fulcro_css$localized_dom$aside(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59310 = arguments.length;
var i__4865__auto___59311 = (0);
while(true){
if((i__4865__auto___59311 < len__4864__auto___59310)){
args__4870__auto__.push((arguments[i__4865__auto___59311]));

var G__59312 = (i__4865__auto___59311 + (1));
i__4865__auto___59311 = G__59312;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58477 = conformed_args__51178__auto__;
var map__58477__$1 = cljs.core.__destructure_map(map__58477);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58477__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58477__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58477__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.aside.cljs$lang$applyTo = (function (seq58476){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58476));
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
com.fulcrologic.fulcro_css.localized_dom.feBlend = (function com$fulcrologic$fulcro_css$localized_dom$feBlend(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59314 = arguments.length;
var i__4865__auto___59315 = (0);
while(true){
if((i__4865__auto___59315 < len__4864__auto___59314)){
args__4870__auto__.push((arguments[i__4865__auto___59315]));

var G__59316 = (i__4865__auto___59315 + (1));
i__4865__auto___59315 = G__59316;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58479 = conformed_args__51178__auto__;
var map__58479__$1 = cljs.core.__destructure_map(map__58479);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58479__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58479__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58479__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feBlend.cljs$lang$applyTo = (function (seq58478){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58478));
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
com.fulcrologic.fulcro_css.localized_dom.figure = (function com$fulcrologic$fulcro_css$localized_dom$figure(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59321 = arguments.length;
var i__4865__auto___59322 = (0);
while(true){
if((i__4865__auto___59322 < len__4864__auto___59321)){
args__4870__auto__.push((arguments[i__4865__auto___59322]));

var G__59324 = (i__4865__auto___59322 + (1));
i__4865__auto___59322 = G__59324;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58481 = conformed_args__51178__auto__;
var map__58481__$1 = cljs.core.__destructure_map(map__58481);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58481__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.figure.cljs$lang$applyTo = (function (seq58480){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58480));
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
com.fulcrologic.fulcro_css.localized_dom.textPath = (function com$fulcrologic$fulcro_css$localized_dom$textPath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59326 = arguments.length;
var i__4865__auto___59327 = (0);
while(true){
if((i__4865__auto___59327 < len__4864__auto___59326)){
args__4870__auto__.push((arguments[i__4865__auto___59327]));

var G__59328 = (i__4865__auto___59327 + (1));
i__4865__auto___59327 = G__59328;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58488 = conformed_args__51178__auto__;
var map__58488__$1 = cljs.core.__destructure_map(map__58488);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58488__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58488__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58488__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.textPath.cljs$lang$applyTo = (function (seq58486){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58486));
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
com.fulcrologic.fulcro_css.localized_dom.figcaption = (function com$fulcrologic$fulcro_css$localized_dom$figcaption(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59330 = arguments.length;
var i__4865__auto___59331 = (0);
while(true){
if((i__4865__auto___59331 < len__4864__auto___59330)){
args__4870__auto__.push((arguments[i__4865__auto___59331]));

var G__59333 = (i__4865__auto___59331 + (1));
i__4865__auto___59331 = G__59333;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58493 = conformed_args__51178__auto__;
var map__58493__$1 = cljs.core.__destructure_map(map__58493);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.figcaption.cljs$lang$applyTo = (function (seq58492){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58492));
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
com.fulcrologic.fulcro_css.localized_dom.mask = (function com$fulcrologic$fulcro_css$localized_dom$mask(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59334 = arguments.length;
var i__4865__auto___59335 = (0);
while(true){
if((i__4865__auto___59335 < len__4864__auto___59334)){
args__4870__auto__.push((arguments[i__4865__auto___59335]));

var G__59337 = (i__4865__auto___59335 + (1));
i__4865__auto___59335 = G__59337;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58497 = conformed_args__51178__auto__;
var map__58497__$1 = cljs.core.__destructure_map(map__58497);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58497__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58497__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58497__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.mask.cljs$lang$applyTo = (function (seq58496){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58496));
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
com.fulcrologic.fulcro_css.localized_dom.q = (function com$fulcrologic$fulcro_css$localized_dom$q(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59339 = arguments.length;
var i__4865__auto___59340 = (0);
while(true){
if((i__4865__auto___59340 < len__4864__auto___59339)){
args__4870__auto__.push((arguments[i__4865__auto___59340]));

var G__59341 = (i__4865__auto___59340 + (1));
i__4865__auto___59340 = G__59341;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58501 = conformed_args__51178__auto__;
var map__58501__$1 = cljs.core.__destructure_map(map__58501);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58501__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58501__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58501__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.q.cljs$lang$applyTo = (function (seq58499){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58499));
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
com.fulcrologic.fulcro_css.localized_dom.bdi = (function com$fulcrologic$fulcro_css$localized_dom$bdi(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59346 = arguments.length;
var i__4865__auto___59347 = (0);
while(true){
if((i__4865__auto___59347 < len__4864__auto___59346)){
args__4870__auto__.push((arguments[i__4865__auto___59347]));

var G__59352 = (i__4865__auto___59347 + (1));
i__4865__auto___59347 = G__59352;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58510 = conformed_args__51178__auto__;
var map__58510__$1 = cljs.core.__destructure_map(map__58510);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58510__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58510__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58510__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.bdi.cljs$lang$applyTo = (function (seq58507){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58507));
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
com.fulcrologic.fulcro_css.localized_dom.feDistantLight = (function com$fulcrologic$fulcro_css$localized_dom$feDistantLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59354 = arguments.length;
var i__4865__auto___59355 = (0);
while(true){
if((i__4865__auto___59355 < len__4864__auto___59354)){
args__4870__auto__.push((arguments[i__4865__auto___59355]));

var G__59356 = (i__4865__auto___59355 + (1));
i__4865__auto___59355 = G__59356;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58516 = conformed_args__51178__auto__;
var map__58516__$1 = cljs.core.__destructure_map(map__58516);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feDistantLight.cljs$lang$applyTo = (function (seq58515){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58515));
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
com.fulcrologic.fulcro_css.localized_dom.video = (function com$fulcrologic$fulcro_css$localized_dom$video(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59362 = arguments.length;
var i__4865__auto___59363 = (0);
while(true){
if((i__4865__auto___59363 < len__4864__auto___59362)){
args__4870__auto__.push((arguments[i__4865__auto___59363]));

var G__59364 = (i__4865__auto___59363 + (1));
i__4865__auto___59363 = G__59364;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58522 = conformed_args__51178__auto__;
var map__58522__$1 = cljs.core.__destructure_map(map__58522);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58522__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58522__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.video.cljs$lang$applyTo = (function (seq58521){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58521));
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
com.fulcrologic.fulcro_css.localized_dom.address = (function com$fulcrologic$fulcro_css$localized_dom$address(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59371 = arguments.length;
var i__4865__auto___59372 = (0);
while(true){
if((i__4865__auto___59372 < len__4864__auto___59371)){
args__4870__auto__.push((arguments[i__4865__auto___59372]));

var G__59374 = (i__4865__auto___59372 + (1));
i__4865__auto___59372 = G__59374;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58527 = conformed_args__51178__auto__;
var map__58527__$1 = cljs.core.__destructure_map(map__58527);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58527__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58527__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58527__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.address.cljs$lang$applyTo = (function (seq58525){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58525));
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
com.fulcrologic.fulcro_css.localized_dom.caption = (function com$fulcrologic$fulcro_css$localized_dom$caption(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59375 = arguments.length;
var i__4865__auto___59376 = (0);
while(true){
if((i__4865__auto___59376 < len__4864__auto___59375)){
args__4870__auto__.push((arguments[i__4865__auto___59376]));

var G__59377 = (i__4865__auto___59376 + (1));
i__4865__auto___59376 = G__59377;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58529 = conformed_args__51178__auto__;
var map__58529__$1 = cljs.core.__destructure_map(map__58529);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58529__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58529__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58529__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.caption.cljs$lang$applyTo = (function (seq58528){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58528));
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
com.fulcrologic.fulcro_css.localized_dom.dd = (function com$fulcrologic$fulcro_css$localized_dom$dd(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59383 = arguments.length;
var i__4865__auto___59384 = (0);
while(true){
if((i__4865__auto___59384 < len__4864__auto___59383)){
args__4870__auto__.push((arguments[i__4865__auto___59384]));

var G__59389 = (i__4865__auto___59384 + (1));
i__4865__auto___59384 = G__59389;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58532 = conformed_args__51178__auto__;
var map__58532__$1 = cljs.core.__destructure_map(map__58532);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58532__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58532__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58532__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.dd.cljs$lang$applyTo = (function (seq58531){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58531));
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
com.fulcrologic.fulcro_css.localized_dom.rp = (function com$fulcrologic$fulcro_css$localized_dom$rp(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59390 = arguments.length;
var i__4865__auto___59391 = (0);
while(true){
if((i__4865__auto___59391 < len__4864__auto___59390)){
args__4870__auto__.push((arguments[i__4865__auto___59391]));

var G__59392 = (i__4865__auto___59391 + (1));
i__4865__auto___59391 = G__59392;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58534 = conformed_args__51178__auto__;
var map__58534__$1 = cljs.core.__destructure_map(map__58534);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58534__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58534__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58534__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.rp.cljs$lang$applyTo = (function (seq58533){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58533));
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
com.fulcrologic.fulcro_css.localized_dom.hr = (function com$fulcrologic$fulcro_css$localized_dom$hr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59393 = arguments.length;
var i__4865__auto___59394 = (0);
while(true){
if((i__4865__auto___59394 < len__4864__auto___59393)){
args__4870__auto__.push((arguments[i__4865__auto___59394]));

var G__59395 = (i__4865__auto___59394 + (1));
i__4865__auto___59394 = G__59395;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58537 = conformed_args__51178__auto__;
var map__58537__$1 = cljs.core.__destructure_map(map__58537);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58537__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58537__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58537__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.hr.cljs$lang$applyTo = (function (seq58535){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58535));
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
com.fulcrologic.fulcro_css.localized_dom.meta = (function com$fulcrologic$fulcro_css$localized_dom$meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59396 = arguments.length;
var i__4865__auto___59397 = (0);
while(true){
if((i__4865__auto___59397 < len__4864__auto___59396)){
args__4870__auto__.push((arguments[i__4865__auto___59397]));

var G__59398 = (i__4865__auto___59397 + (1));
i__4865__auto___59397 = G__59398;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58541 = conformed_args__51178__auto__;
var map__58541__$1 = cljs.core.__destructure_map(map__58541);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58541__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58541__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58541__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.meta.cljs$lang$applyTo = (function (seq58540){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58540));
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
com.fulcrologic.fulcro_css.localized_dom.tbody = (function com$fulcrologic$fulcro_css$localized_dom$tbody(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59399 = arguments.length;
var i__4865__auto___59400 = (0);
while(true){
if((i__4865__auto___59400 < len__4864__auto___59399)){
args__4870__auto__.push((arguments[i__4865__auto___59400]));

var G__59401 = (i__4865__auto___59400 + (1));
i__4865__auto___59400 = G__59401;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58549 = conformed_args__51178__auto__;
var map__58549__$1 = cljs.core.__destructure_map(map__58549);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.tbody.cljs$lang$applyTo = (function (seq58544){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58544));
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
com.fulcrologic.fulcro_css.localized_dom.desc = (function com$fulcrologic$fulcro_css$localized_dom$desc(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59402 = arguments.length;
var i__4865__auto___59403 = (0);
while(true){
if((i__4865__auto___59403 < len__4864__auto___59402)){
args__4870__auto__.push((arguments[i__4865__auto___59403]));

var G__59404 = (i__4865__auto___59403 + (1));
i__4865__auto___59403 = G__59404;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58552 = conformed_args__51178__auto__;
var map__58552__$1 = cljs.core.__destructure_map(map__58552);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58552__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58552__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58552__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.desc.cljs$lang$applyTo = (function (seq58551){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58551));
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
com.fulcrologic.fulcro_css.localized_dom.table = (function com$fulcrologic$fulcro_css$localized_dom$table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59405 = arguments.length;
var i__4865__auto___59406 = (0);
while(true){
if((i__4865__auto___59406 < len__4864__auto___59405)){
args__4870__auto__.push((arguments[i__4865__auto___59406]));

var G__59407 = (i__4865__auto___59406 + (1));
i__4865__auto___59406 = G__59407;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58555 = conformed_args__51178__auto__;
var map__58555__$1 = cljs.core.__destructure_map(map__58555);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58555__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58555__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58555__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.table.cljs$lang$applyTo = (function (seq58553){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58553));
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
com.fulcrologic.fulcro_css.localized_dom.pre = (function com$fulcrologic$fulcro_css$localized_dom$pre(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59409 = arguments.length;
var i__4865__auto___59410 = (0);
while(true){
if((i__4865__auto___59410 < len__4864__auto___59409)){
args__4870__auto__.push((arguments[i__4865__auto___59410]));

var G__59411 = (i__4865__auto___59410 + (1));
i__4865__auto___59410 = G__59411;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58558 = conformed_args__51178__auto__;
var map__58558__$1 = cljs.core.__destructure_map(map__58558);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58558__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58558__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58558__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.pre.cljs$lang$applyTo = (function (seq58557){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58557));
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
com.fulcrologic.fulcro_css.localized_dom.ul = (function com$fulcrologic$fulcro_css$localized_dom$ul(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59415 = arguments.length;
var i__4865__auto___59416 = (0);
while(true){
if((i__4865__auto___59416 < len__4864__auto___59415)){
args__4870__auto__.push((arguments[i__4865__auto___59416]));

var G__59417 = (i__4865__auto___59416 + (1));
i__4865__auto___59416 = G__59417;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58561 = conformed_args__51178__auto__;
var map__58561__$1 = cljs.core.__destructure_map(map__58561);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58561__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58561__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58561__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.ul.cljs$lang$applyTo = (function (seq58560){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58560));
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
com.fulcrologic.fulcro_css.localized_dom.feConvolveMatrix = (function com$fulcrologic$fulcro_css$localized_dom$feConvolveMatrix(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59418 = arguments.length;
var i__4865__auto___59419 = (0);
while(true){
if((i__4865__auto___59419 < len__4864__auto___59418)){
args__4870__auto__.push((arguments[i__4865__auto___59419]));

var G__59421 = (i__4865__auto___59419 + (1));
i__4865__auto___59419 = G__59421;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58567 = conformed_args__51178__auto__;
var map__58567__$1 = cljs.core.__destructure_map(map__58567);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58567__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58567__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58567__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq58566){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58566));
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
com.fulcrologic.fulcro_css.localized_dom.sup = (function com$fulcrologic$fulcro_css$localized_dom$sup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59423 = arguments.length;
var i__4865__auto___59424 = (0);
while(true){
if((i__4865__auto___59424 < len__4864__auto___59423)){
args__4870__auto__.push((arguments[i__4865__auto___59424]));

var G__59425 = (i__4865__auto___59424 + (1));
i__4865__auto___59424 = G__59425;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58571 = conformed_args__51178__auto__;
var map__58571__$1 = cljs.core.__destructure_map(map__58571);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58571__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58571__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58571__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.sup.cljs$lang$applyTo = (function (seq58569){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58569));
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
com.fulcrologic.fulcro_css.localized_dom.dfn = (function com$fulcrologic$fulcro_css$localized_dom$dfn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59426 = arguments.length;
var i__4865__auto___59427 = (0);
while(true){
if((i__4865__auto___59427 < len__4864__auto___59426)){
args__4870__auto__.push((arguments[i__4865__auto___59427]));

var G__59428 = (i__4865__auto___59427 + (1));
i__4865__auto___59427 = G__59428;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58576 = conformed_args__51178__auto__;
var map__58576__$1 = cljs.core.__destructure_map(map__58576);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58576__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58576__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58576__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.dfn.cljs$lang$applyTo = (function (seq58573){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58573));
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
com.fulcrologic.fulcro_css.localized_dom.sub = (function com$fulcrologic$fulcro_css$localized_dom$sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59431 = arguments.length;
var i__4865__auto___59432 = (0);
while(true){
if((i__4865__auto___59432 < len__4864__auto___59431)){
args__4870__auto__.push((arguments[i__4865__auto___59432]));

var G__59433 = (i__4865__auto___59432 + (1));
i__4865__auto___59432 = G__59433;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58584 = conformed_args__51178__auto__;
var map__58584__$1 = cljs.core.__destructure_map(map__58584);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58584__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58584__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58584__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.sub.cljs$lang$applyTo = (function (seq58579){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58579));
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
com.fulcrologic.fulcro_css.localized_dom.mark = (function com$fulcrologic$fulcro_css$localized_dom$mark(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59436 = arguments.length;
var i__4865__auto___59437 = (0);
while(true){
if((i__4865__auto___59437 < len__4864__auto___59436)){
args__4870__auto__.push((arguments[i__4865__auto___59437]));

var G__59438 = (i__4865__auto___59437 + (1));
i__4865__auto___59437 = G__59438;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58586 = conformed_args__51178__auto__;
var map__58586__$1 = cljs.core.__destructure_map(map__58586);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58586__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.mark.cljs$lang$applyTo = (function (seq58585){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58585));
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
com.fulcrologic.fulcro_css.localized_dom.feDisplacementMap = (function com$fulcrologic$fulcro_css$localized_dom$feDisplacementMap(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59439 = arguments.length;
var i__4865__auto___59440 = (0);
while(true){
if((i__4865__auto___59440 < len__4864__auto___59439)){
args__4870__auto__.push((arguments[i__4865__auto___59440]));

var G__59442 = (i__4865__auto___59440 + (1));
i__4865__auto___59440 = G__59442;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58590 = conformed_args__51178__auto__;
var map__58590__$1 = cljs.core.__destructure_map(map__58590);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58590__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58590__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58590__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feDisplacementMap.cljs$lang$applyTo = (function (seq58589){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58589));
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
com.fulcrologic.fulcro_css.localized_dom.unknown = (function com$fulcrologic$fulcro_css$localized_dom$unknown(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59446 = arguments.length;
var i__4865__auto___59447 = (0);
while(true){
if((i__4865__auto___59447 < len__4864__auto___59446)){
args__4870__auto__.push((arguments[i__4865__auto___59447]));

var G__59448 = (i__4865__auto___59447 + (1));
i__4865__auto___59447 = G__59448;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58595 = conformed_args__51178__auto__;
var map__58595__$1 = cljs.core.__destructure_map(map__58595);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58595__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58595__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58595__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.unknown.cljs$lang$applyTo = (function (seq58593){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58593));
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
com.fulcrologic.fulcro_css.localized_dom.script = (function com$fulcrologic$fulcro_css$localized_dom$script(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59453 = arguments.length;
var i__4865__auto___59454 = (0);
while(true){
if((i__4865__auto___59454 < len__4864__auto___59453)){
args__4870__auto__.push((arguments[i__4865__auto___59454]));

var G__59455 = (i__4865__auto___59454 + (1));
i__4865__auto___59454 = G__59455;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58597 = conformed_args__51178__auto__;
var map__58597__$1 = cljs.core.__destructure_map(map__58597);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58597__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58597__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58597__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.script.cljs$lang$applyTo = (function (seq58596){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58596));
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
com.fulcrologic.fulcro_css.localized_dom.feTurbulence = (function com$fulcrologic$fulcro_css$localized_dom$feTurbulence(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59456 = arguments.length;
var i__4865__auto___59457 = (0);
while(true){
if((i__4865__auto___59457 < len__4864__auto___59456)){
args__4870__auto__.push((arguments[i__4865__auto___59457]));

var G__59458 = (i__4865__auto___59457 + (1));
i__4865__auto___59457 = G__59458;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58601 = conformed_args__51178__auto__;
var map__58601__$1 = cljs.core.__destructure_map(map__58601);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58601__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58601__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58601__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feTurbulence.cljs$lang$applyTo = (function (seq58598){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58598));
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
com.fulcrologic.fulcro_css.localized_dom.big = (function com$fulcrologic$fulcro_css$localized_dom$big(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59459 = arguments.length;
var i__4865__auto___59460 = (0);
while(true){
if((i__4865__auto___59460 < len__4864__auto___59459)){
args__4870__auto__.push((arguments[i__4865__auto___59460]));

var G__59461 = (i__4865__auto___59460 + (1));
i__4865__auto___59460 = G__59461;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58603 = conformed_args__51178__auto__;
var map__58603__$1 = cljs.core.__destructure_map(map__58603);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58603__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58603__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58603__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.big.cljs$lang$applyTo = (function (seq58602){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58602));
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
com.fulcrologic.fulcro_css.localized_dom.button = (function com$fulcrologic$fulcro_css$localized_dom$button(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59464 = arguments.length;
var i__4865__auto___59465 = (0);
while(true){
if((i__4865__auto___59465 < len__4864__auto___59464)){
args__4870__auto__.push((arguments[i__4865__auto___59465]));

var G__59466 = (i__4865__auto___59465 + (1));
i__4865__auto___59465 = G__59466;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58605 = conformed_args__51178__auto__;
var map__58605__$1 = cljs.core.__destructure_map(map__58605);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58605__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58605__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58605__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.button.cljs$lang$applyTo = (function (seq58604){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58604));
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
com.fulcrologic.fulcro_css.localized_dom.font_face_uri = (function com$fulcrologic$fulcro_css$localized_dom$font_face_uri(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59467 = arguments.length;
var i__4865__auto___59468 = (0);
while(true){
if((i__4865__auto___59468 < len__4864__auto___59467)){
args__4870__auto__.push((arguments[i__4865__auto___59468]));

var G__59469 = (i__4865__auto___59468 + (1));
i__4865__auto___59468 = G__59469;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58607 = conformed_args__51178__auto__;
var map__58607__$1 = cljs.core.__destructure_map(map__58607);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58607__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58607__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58607__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.font_face_uri.cljs$lang$applyTo = (function (seq58606){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58606));
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
com.fulcrologic.fulcro_css.localized_dom.wbr = (function com$fulcrologic$fulcro_css$localized_dom$wbr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59471 = arguments.length;
var i__4865__auto___59472 = (0);
while(true){
if((i__4865__auto___59472 < len__4864__auto___59471)){
args__4870__auto__.push((arguments[i__4865__auto___59472]));

var G__59474 = (i__4865__auto___59472 + (1));
i__4865__auto___59472 = G__59474;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58609 = conformed_args__51178__auto__;
var map__58609__$1 = cljs.core.__destructure_map(map__58609);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58609__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58609__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58609__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.wbr.cljs$lang$applyTo = (function (seq58608){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58608));
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
com.fulcrologic.fulcro_css.localized_dom.symbol = (function com$fulcrologic$fulcro_css$localized_dom$symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59479 = arguments.length;
var i__4865__auto___59480 = (0);
while(true){
if((i__4865__auto___59480 < len__4864__auto___59479)){
args__4870__auto__.push((arguments[i__4865__auto___59480]));

var G__59481 = (i__4865__auto___59480 + (1));
i__4865__auto___59480 = G__59481;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58611 = conformed_args__51178__auto__;
var map__58611__$1 = cljs.core.__destructure_map(map__58611);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58611__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58611__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58611__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.symbol.cljs$lang$applyTo = (function (seq58610){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58610));
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
com.fulcrologic.fulcro_css.localized_dom.strong = (function com$fulcrologic$fulcro_css$localized_dom$strong(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59484 = arguments.length;
var i__4865__auto___59485 = (0);
while(true){
if((i__4865__auto___59485 < len__4864__auto___59484)){
args__4870__auto__.push((arguments[i__4865__auto___59485]));

var G__59486 = (i__4865__auto___59485 + (1));
i__4865__auto___59485 = G__59486;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58613 = conformed_args__51178__auto__;
var map__58613__$1 = cljs.core.__destructure_map(map__58613);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58613__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58613__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58613__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.strong.cljs$lang$applyTo = (function (seq58612){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58612));
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
com.fulcrologic.fulcro_css.localized_dom.use = (function com$fulcrologic$fulcro_css$localized_dom$use(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59487 = arguments.length;
var i__4865__auto___59488 = (0);
while(true){
if((i__4865__auto___59488 < len__4864__auto___59487)){
args__4870__auto__.push((arguments[i__4865__auto___59488]));

var G__59489 = (i__4865__auto___59488 + (1));
i__4865__auto___59488 = G__59489;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58615 = conformed_args__51178__auto__;
var map__58615__$1 = cljs.core.__destructure_map(map__58615);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.use.cljs$lang$applyTo = (function (seq58614){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58614));
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
com.fulcrologic.fulcro_css.localized_dom.solidcolor = (function com$fulcrologic$fulcro_css$localized_dom$solidcolor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59491 = arguments.length;
var i__4865__auto___59492 = (0);
while(true){
if((i__4865__auto___59492 < len__4864__auto___59491)){
args__4870__auto__.push((arguments[i__4865__auto___59492]));

var G__59493 = (i__4865__auto___59492 + (1));
i__4865__auto___59492 = G__59493;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58617 = conformed_args__51178__auto__;
var map__58617__$1 = cljs.core.__destructure_map(map__58617);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58617__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58617__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58617__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.solidcolor.cljs$lang$applyTo = (function (seq58616){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58616));
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
com.fulcrologic.fulcro_css.localized_dom.fePointLight = (function com$fulcrologic$fulcro_css$localized_dom$fePointLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59494 = arguments.length;
var i__4865__auto___59495 = (0);
while(true){
if((i__4865__auto___59495 < len__4864__auto___59494)){
args__4870__auto__.push((arguments[i__4865__auto___59495]));

var G__59496 = (i__4865__auto___59495 + (1));
i__4865__auto___59495 = G__59496;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58619 = conformed_args__51178__auto__;
var map__58619__$1 = cljs.core.__destructure_map(map__58619);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58619__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58619__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58619__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.fePointLight.cljs$lang$applyTo = (function (seq58618){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58618));
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
com.fulcrologic.fulcro_css.localized_dom.li = (function com$fulcrologic$fulcro_css$localized_dom$li(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59499 = arguments.length;
var i__4865__auto___59500 = (0);
while(true){
if((i__4865__auto___59500 < len__4864__auto___59499)){
args__4870__auto__.push((arguments[i__4865__auto___59500]));

var G__59501 = (i__4865__auto___59500 + (1));
i__4865__auto___59500 = G__59501;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58621 = conformed_args__51178__auto__;
var map__58621__$1 = cljs.core.__destructure_map(map__58621);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.li.cljs$lang$applyTo = (function (seq58620){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58620));
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
com.fulcrologic.fulcro_css.localized_dom.dt = (function com$fulcrologic$fulcro_css$localized_dom$dt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59503 = arguments.length;
var i__4865__auto___59504 = (0);
while(true){
if((i__4865__auto___59504 < len__4864__auto___59503)){
args__4870__auto__.push((arguments[i__4865__auto___59504]));

var G__59506 = (i__4865__auto___59504 + (1));
i__4865__auto___59504 = G__59506;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58623 = conformed_args__51178__auto__;
var map__58623__$1 = cljs.core.__destructure_map(map__58623);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58623__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.dt.cljs$lang$applyTo = (function (seq58622){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58622));
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
com.fulcrologic.fulcro_css.localized_dom.feFuncB = (function com$fulcrologic$fulcro_css$localized_dom$feFuncB(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59507 = arguments.length;
var i__4865__auto___59508 = (0);
while(true){
if((i__4865__auto___59508 < len__4864__auto___59507)){
args__4870__auto__.push((arguments[i__4865__auto___59508]));

var G__59509 = (i__4865__auto___59508 + (1));
i__4865__auto___59508 = G__59509;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58625 = conformed_args__51178__auto__;
var map__58625__$1 = cljs.core.__destructure_map(map__58625);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feFuncB.cljs$lang$applyTo = (function (seq58624){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58624));
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
com.fulcrologic.fulcro_css.localized_dom.marker = (function com$fulcrologic$fulcro_css$localized_dom$marker(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59512 = arguments.length;
var i__4865__auto___59513 = (0);
while(true){
if((i__4865__auto___59513 < len__4864__auto___59512)){
args__4870__auto__.push((arguments[i__4865__auto___59513]));

var G__59514 = (i__4865__auto___59513 + (1));
i__4865__auto___59513 = G__59514;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58632 = conformed_args__51178__auto__;
var map__58632__$1 = cljs.core.__destructure_map(map__58632);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.marker.cljs$lang$applyTo = (function (seq58626){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58626));
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
com.fulcrologic.fulcro_css.localized_dom.feComponentTransfer = (function com$fulcrologic$fulcro_css$localized_dom$feComponentTransfer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59519 = arguments.length;
var i__4865__auto___59520 = (0);
while(true){
if((i__4865__auto___59520 < len__4864__auto___59519)){
args__4870__auto__.push((arguments[i__4865__auto___59520]));

var G__59521 = (i__4865__auto___59520 + (1));
i__4865__auto___59520 = G__59521;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58637 = conformed_args__51178__auto__;
var map__58637__$1 = cljs.core.__destructure_map(map__58637);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feComponentTransfer.cljs$lang$applyTo = (function (seq58634){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58634));
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
com.fulcrologic.fulcro_css.localized_dom.td = (function com$fulcrologic$fulcro_css$localized_dom$td(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59522 = arguments.length;
var i__4865__auto___59523 = (0);
while(true){
if((i__4865__auto___59523 < len__4864__auto___59522)){
args__4870__auto__.push((arguments[i__4865__auto___59523]));

var G__59524 = (i__4865__auto___59523 + (1));
i__4865__auto___59523 = G__59524;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58639 = conformed_args__51178__auto__;
var map__58639__$1 = cljs.core.__destructure_map(map__58639);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.td.cljs$lang$applyTo = (function (seq58638){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58638));
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
com.fulcrologic.fulcro_css.localized_dom.tr = (function com$fulcrologic$fulcro_css$localized_dom$tr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59526 = arguments.length;
var i__4865__auto___59527 = (0);
while(true){
if((i__4865__auto___59527 < len__4864__auto___59526)){
args__4870__auto__.push((arguments[i__4865__auto___59527]));

var G__59528 = (i__4865__auto___59527 + (1));
i__4865__auto___59527 = G__59528;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58642 = conformed_args__51178__auto__;
var map__58642__$1 = cljs.core.__destructure_map(map__58642);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.tr.cljs$lang$applyTo = (function (seq58640){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58640));
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
com.fulcrologic.fulcro_css.localized_dom.circle = (function com$fulcrologic$fulcro_css$localized_dom$circle(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59529 = arguments.length;
var i__4865__auto___59530 = (0);
while(true){
if((i__4865__auto___59530 < len__4864__auto___59529)){
args__4870__auto__.push((arguments[i__4865__auto___59530]));

var G__59531 = (i__4865__auto___59530 + (1));
i__4865__auto___59530 = G__59531;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58646 = conformed_args__51178__auto__;
var map__58646__$1 = cljs.core.__destructure_map(map__58646);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58646__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58646__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58646__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.circle.cljs$lang$applyTo = (function (seq58644){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58644));
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
com.fulcrologic.fulcro_css.localized_dom.section = (function com$fulcrologic$fulcro_css$localized_dom$section(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59532 = arguments.length;
var i__4865__auto___59533 = (0);
while(true){
if((i__4865__auto___59533 < len__4864__auto___59532)){
args__4870__auto__.push((arguments[i__4865__auto___59533]));

var G__59534 = (i__4865__auto___59533 + (1));
i__4865__auto___59533 = G__59534;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58654 = conformed_args__51178__auto__;
var map__58654__$1 = cljs.core.__destructure_map(map__58654);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.section.cljs$lang$applyTo = (function (seq58652){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58652));
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
com.fulcrologic.fulcro_css.localized_dom.feDropShadow = (function com$fulcrologic$fulcro_css$localized_dom$feDropShadow(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59535 = arguments.length;
var i__4865__auto___59536 = (0);
while(true){
if((i__4865__auto___59536 < len__4864__auto___59535)){
args__4870__auto__.push((arguments[i__4865__auto___59536]));

var G__59537 = (i__4865__auto___59536 + (1));
i__4865__auto___59536 = G__59537;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58658 = conformed_args__51178__auto__;
var map__58658__$1 = cljs.core.__destructure_map(map__58658);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feDropShadow.cljs$lang$applyTo = (function (seq58656){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58656));
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
com.fulcrologic.fulcro_css.localized_dom.th = (function com$fulcrologic$fulcro_css$localized_dom$th(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59538 = arguments.length;
var i__4865__auto___59539 = (0);
while(true){
if((i__4865__auto___59539 < len__4864__auto___59538)){
args__4870__auto__.push((arguments[i__4865__auto___59539]));

var G__59540 = (i__4865__auto___59539 + (1));
i__4865__auto___59539 = G__59540;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58660 = conformed_args__51178__auto__;
var map__58660__$1 = cljs.core.__destructure_map(map__58660);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.th.cljs$lang$applyTo = (function (seq58659){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58659));
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
com.fulcrologic.fulcro_css.localized_dom.time = (function com$fulcrologic$fulcro_css$localized_dom$time(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59541 = arguments.length;
var i__4865__auto___59542 = (0);
while(true){
if((i__4865__auto___59542 < len__4864__auto___59541)){
args__4870__auto__.push((arguments[i__4865__auto___59542]));

var G__59543 = (i__4865__auto___59542 + (1));
i__4865__auto___59542 = G__59543;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58670 = conformed_args__51178__auto__;
var map__58670__$1 = cljs.core.__destructure_map(map__58670);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58670__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58670__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58670__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.time.cljs$lang$applyTo = (function (seq58665){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58665));
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
com.fulcrologic.fulcro_css.localized_dom.optgroup = (function com$fulcrologic$fulcro_css$localized_dom$optgroup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59544 = arguments.length;
var i__4865__auto___59545 = (0);
while(true){
if((i__4865__auto___59545 < len__4864__auto___59544)){
args__4870__auto__.push((arguments[i__4865__auto___59545]));

var G__59547 = (i__4865__auto___59545 + (1));
i__4865__auto___59545 = G__59547;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58675 = conformed_args__51178__auto__;
var map__58675__$1 = cljs.core.__destructure_map(map__58675);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58675__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58675__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58675__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.optgroup.cljs$lang$applyTo = (function (seq58671){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58671));
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
com.fulcrologic.fulcro_css.localized_dom.iframe = (function com$fulcrologic$fulcro_css$localized_dom$iframe(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59549 = arguments.length;
var i__4865__auto___59550 = (0);
while(true){
if((i__4865__auto___59550 < len__4864__auto___59549)){
args__4870__auto__.push((arguments[i__4865__auto___59550]));

var G__59551 = (i__4865__auto___59550 + (1));
i__4865__auto___59550 = G__59551;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58685 = conformed_args__51178__auto__;
var map__58685__$1 = cljs.core.__destructure_map(map__58685);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.iframe.cljs$lang$applyTo = (function (seq58680){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58680));
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
com.fulcrologic.fulcro_css.localized_dom.color_profile = (function com$fulcrologic$fulcro_css$localized_dom$color_profile(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59554 = arguments.length;
var i__4865__auto___59555 = (0);
while(true){
if((i__4865__auto___59555 < len__4864__auto___59554)){
args__4870__auto__.push((arguments[i__4865__auto___59555]));

var G__59556 = (i__4865__auto___59555 + (1));
i__4865__auto___59555 = G__59556;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58697 = conformed_args__51178__auto__;
var map__58697__$1 = cljs.core.__destructure_map(map__58697);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58697__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58697__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.color_profile.cljs$lang$applyTo = (function (seq58686){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58686));
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
com.fulcrologic.fulcro_css.localized_dom.legend = (function com$fulcrologic$fulcro_css$localized_dom$legend(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59559 = arguments.length;
var i__4865__auto___59560 = (0);
while(true){
if((i__4865__auto___59560 < len__4864__auto___59559)){
args__4870__auto__.push((arguments[i__4865__auto___59560]));

var G__59561 = (i__4865__auto___59560 + (1));
i__4865__auto___59560 = G__59561;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58739 = conformed_args__51178__auto__;
var map__58739__$1 = cljs.core.__destructure_map(map__58739);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58739__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58739__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58739__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.legend.cljs$lang$applyTo = (function (seq58719){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58719));
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
com.fulcrologic.fulcro_css.localized_dom.em = (function com$fulcrologic$fulcro_css$localized_dom$em(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59564 = arguments.length;
var i__4865__auto___59565 = (0);
while(true){
if((i__4865__auto___59565 < len__4864__auto___59564)){
args__4870__auto__.push((arguments[i__4865__auto___59565]));

var G__59568 = (i__4865__auto___59565 + (1));
i__4865__auto___59565 = G__59568;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58741 = conformed_args__51178__auto__;
var map__58741__$1 = cljs.core.__destructure_map(map__58741);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58741__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58741__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58741__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.em.cljs$lang$applyTo = (function (seq58740){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58740));
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
com.fulcrologic.fulcro_css.localized_dom.kbd = (function com$fulcrologic$fulcro_css$localized_dom$kbd(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59574 = arguments.length;
var i__4865__auto___59575 = (0);
while(true){
if((i__4865__auto___59575 < len__4864__auto___59574)){
args__4870__auto__.push((arguments[i__4865__auto___59575]));

var G__59576 = (i__4865__auto___59575 + (1));
i__4865__auto___59575 = G__59576;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58778 = conformed_args__51178__auto__;
var map__58778__$1 = cljs.core.__destructure_map(map__58778);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58778__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58778__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58778__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.kbd.cljs$lang$applyTo = (function (seq58755){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58755));
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
com.fulcrologic.fulcro_css.localized_dom.article = (function com$fulcrologic$fulcro_css$localized_dom$article(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59577 = arguments.length;
var i__4865__auto___59578 = (0);
while(true){
if((i__4865__auto___59578 < len__4864__auto___59577)){
args__4870__auto__.push((arguments[i__4865__auto___59578]));

var G__59579 = (i__4865__auto___59578 + (1));
i__4865__auto___59578 = G__59579;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58783 = conformed_args__51178__auto__;
var map__58783__$1 = cljs.core.__destructure_map(map__58783);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58783__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58783__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58783__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.article.cljs$lang$applyTo = (function (seq58782){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58782));
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
com.fulcrologic.fulcro_css.localized_dom.animateColor = (function com$fulcrologic$fulcro_css$localized_dom$animateColor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59583 = arguments.length;
var i__4865__auto___59584 = (0);
while(true){
if((i__4865__auto___59584 < len__4864__auto___59583)){
args__4870__auto__.push((arguments[i__4865__auto___59584]));

var G__59589 = (i__4865__auto___59584 + (1));
i__4865__auto___59584 = G__59589;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58785 = conformed_args__51178__auto__;
var map__58785__$1 = cljs.core.__destructure_map(map__58785);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58785__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58785__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58785__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.animateColor.cljs$lang$applyTo = (function (seq58784){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58784));
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
com.fulcrologic.fulcro_css.localized_dom.clipPath = (function com$fulcrologic$fulcro_css$localized_dom$clipPath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59590 = arguments.length;
var i__4865__auto___59591 = (0);
while(true){
if((i__4865__auto___59591 < len__4864__auto___59590)){
args__4870__auto__.push((arguments[i__4865__auto___59591]));

var G__59592 = (i__4865__auto___59591 + (1));
i__4865__auto___59591 = G__59592;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58787 = conformed_args__51178__auto__;
var map__58787__$1 = cljs.core.__destructure_map(map__58787);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58787__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58787__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58787__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.clipPath.cljs$lang$applyTo = (function (seq58786){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58786));
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
com.fulcrologic.fulcro_css.localized_dom.abbr = (function com$fulcrologic$fulcro_css$localized_dom$abbr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59594 = arguments.length;
var i__4865__auto___59596 = (0);
while(true){
if((i__4865__auto___59596 < len__4864__auto___59594)){
args__4870__auto__.push((arguments[i__4865__auto___59596]));

var G__59599 = (i__4865__auto___59596 + (1));
i__4865__auto___59596 = G__59599;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58789 = conformed_args__51178__auto__;
var map__58789__$1 = cljs.core.__destructure_map(map__58789);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.abbr.cljs$lang$applyTo = (function (seq58788){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58788));
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
com.fulcrologic.fulcro_css.localized_dom.altGlyphDef = (function com$fulcrologic$fulcro_css$localized_dom$altGlyphDef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59602 = arguments.length;
var i__4865__auto___59603 = (0);
while(true){
if((i__4865__auto___59603 < len__4864__auto___59602)){
args__4870__auto__.push((arguments[i__4865__auto___59603]));

var G__59604 = (i__4865__auto___59603 + (1));
i__4865__auto___59603 = G__59604;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58792 = conformed_args__51178__auto__;
var map__58792__$1 = cljs.core.__destructure_map(map__58792);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.altGlyphDef.cljs$lang$applyTo = (function (seq58790){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58790));
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
com.fulcrologic.fulcro_css.localized_dom.meshrow = (function com$fulcrologic$fulcro_css$localized_dom$meshrow(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59605 = arguments.length;
var i__4865__auto___59606 = (0);
while(true){
if((i__4865__auto___59606 < len__4864__auto___59605)){
args__4870__auto__.push((arguments[i__4865__auto___59606]));

var G__59607 = (i__4865__auto___59606 + (1));
i__4865__auto___59606 = G__59607;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58794 = conformed_args__51178__auto__;
var map__58794__$1 = cljs.core.__destructure_map(map__58794);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58794__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58794__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58794__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.meshrow.cljs$lang$applyTo = (function (seq58793){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58793));
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
com.fulcrologic.fulcro_css.localized_dom.cursor = (function com$fulcrologic$fulcro_css$localized_dom$cursor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59610 = arguments.length;
var i__4865__auto___59611 = (0);
while(true){
if((i__4865__auto___59611 < len__4864__auto___59610)){
args__4870__auto__.push((arguments[i__4865__auto___59611]));

var G__59612 = (i__4865__auto___59611 + (1));
i__4865__auto___59611 = G__59612;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58798 = conformed_args__51178__auto__;
var map__58798__$1 = cljs.core.__destructure_map(map__58798);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58798__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58798__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58798__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.cursor.cljs$lang$applyTo = (function (seq58797){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58797));
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
com.fulcrologic.fulcro_css.localized_dom.animate = (function com$fulcrologic$fulcro_css$localized_dom$animate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59619 = arguments.length;
var i__4865__auto___59620 = (0);
while(true){
if((i__4865__auto___59620 < len__4864__auto___59619)){
args__4870__auto__.push((arguments[i__4865__auto___59620]));

var G__59621 = (i__4865__auto___59620 + (1));
i__4865__auto___59620 = G__59621;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58801 = conformed_args__51178__auto__;
var map__58801__$1 = cljs.core.__destructure_map(map__58801);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58801__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58801__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58801__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.animate.cljs$lang$applyTo = (function (seq58800){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58800));
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
com.fulcrologic.fulcro_css.localized_dom.source = (function com$fulcrologic$fulcro_css$localized_dom$source(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59622 = arguments.length;
var i__4865__auto___59623 = (0);
while(true){
if((i__4865__auto___59623 < len__4864__auto___59622)){
args__4870__auto__.push((arguments[i__4865__auto___59623]));

var G__59624 = (i__4865__auto___59623 + (1));
i__4865__auto___59623 = G__59624;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58803 = conformed_args__51178__auto__;
var map__58803__$1 = cljs.core.__destructure_map(map__58803);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58803__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58803__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58803__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.source.cljs$lang$applyTo = (function (seq58802){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58802));
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
com.fulcrologic.fulcro_css.localized_dom.output = (function com$fulcrologic$fulcro_css$localized_dom$output(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59625 = arguments.length;
var i__4865__auto___59626 = (0);
while(true){
if((i__4865__auto___59626 < len__4864__auto___59625)){
args__4870__auto__.push((arguments[i__4865__auto___59626]));

var G__59627 = (i__4865__auto___59626 + (1));
i__4865__auto___59626 = G__59627;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58806 = conformed_args__51178__auto__;
var map__58806__$1 = cljs.core.__destructure_map(map__58806);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58806__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58806__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58806__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.output.cljs$lang$applyTo = (function (seq58805){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58805));
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
com.fulcrologic.fulcro_css.localized_dom.font_face = (function com$fulcrologic$fulcro_css$localized_dom$font_face(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59628 = arguments.length;
var i__4865__auto___59629 = (0);
while(true){
if((i__4865__auto___59629 < len__4864__auto___59628)){
args__4870__auto__.push((arguments[i__4865__auto___59629]));

var G__59630 = (i__4865__auto___59629 + (1));
i__4865__auto___59629 = G__59630;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58808 = conformed_args__51178__auto__;
var map__58808__$1 = cljs.core.__destructure_map(map__58808);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58808__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58808__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.font_face.cljs$lang$applyTo = (function (seq58807){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58807));
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
com.fulcrologic.fulcro_css.localized_dom.feMergeNode = (function com$fulcrologic$fulcro_css$localized_dom$feMergeNode(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59632 = arguments.length;
var i__4865__auto___59633 = (0);
while(true){
if((i__4865__auto___59633 < len__4864__auto___59632)){
args__4870__auto__.push((arguments[i__4865__auto___59633]));

var G__59634 = (i__4865__auto___59633 + (1));
i__4865__auto___59633 = G__59634;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58810 = conformed_args__51178__auto__;
var map__58810__$1 = cljs.core.__destructure_map(map__58810);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58810__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58810__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58810__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feMergeNode.cljs$lang$applyTo = (function (seq58809){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58809));
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
com.fulcrologic.fulcro_css.localized_dom.feSpotLight = (function com$fulcrologic$fulcro_css$localized_dom$feSpotLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59643 = arguments.length;
var i__4865__auto___59644 = (0);
while(true){
if((i__4865__auto___59644 < len__4864__auto___59643)){
args__4870__auto__.push((arguments[i__4865__auto___59644]));

var G__59645 = (i__4865__auto___59644 + (1));
i__4865__auto___59644 = G__59645;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58814 = conformed_args__51178__auto__;
var map__58814__$1 = cljs.core.__destructure_map(map__58814);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feSpotLight.cljs$lang$applyTo = (function (seq58812){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58812));
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
com.fulcrologic.fulcro_css.localized_dom.header = (function com$fulcrologic$fulcro_css$localized_dom$header(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59646 = arguments.length;
var i__4865__auto___59647 = (0);
while(true){
if((i__4865__auto___59647 < len__4864__auto___59646)){
args__4870__auto__.push((arguments[i__4865__auto___59647]));

var G__59648 = (i__4865__auto___59647 + (1));
i__4865__auto___59647 = G__59648;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58819 = conformed_args__51178__auto__;
var map__58819__$1 = cljs.core.__destructure_map(map__58819);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58819__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58819__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58819__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.header.cljs$lang$applyTo = (function (seq58818){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58818));
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
com.fulcrologic.fulcro_css.localized_dom.datalist = (function com$fulcrologic$fulcro_css$localized_dom$datalist(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59649 = arguments.length;
var i__4865__auto___59650 = (0);
while(true){
if((i__4865__auto___59650 < len__4864__auto___59649)){
args__4870__auto__.push((arguments[i__4865__auto___59650]));

var G__59651 = (i__4865__auto___59650 + (1));
i__4865__auto___59650 = G__59651;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58826 = conformed_args__51178__auto__;
var map__58826__$1 = cljs.core.__destructure_map(map__58826);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58826__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58826__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58826__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.datalist.cljs$lang$applyTo = (function (seq58823){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58823));
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
com.fulcrologic.fulcro_css.localized_dom.tfoot = (function com$fulcrologic$fulcro_css$localized_dom$tfoot(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59652 = arguments.length;
var i__4865__auto___59653 = (0);
while(true){
if((i__4865__auto___59653 < len__4864__auto___59652)){
args__4870__auto__.push((arguments[i__4865__auto___59653]));

var G__59654 = (i__4865__auto___59653 + (1));
i__4865__auto___59653 = G__59654;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58829 = conformed_args__51178__auto__;
var map__58829__$1 = cljs.core.__destructure_map(map__58829);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58829__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58829__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58829__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.tfoot.cljs$lang$applyTo = (function (seq58828){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58828));
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
com.fulcrologic.fulcro_css.localized_dom.s = (function com$fulcrologic$fulcro_css$localized_dom$s(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59655 = arguments.length;
var i__4865__auto___59656 = (0);
while(true){
if((i__4865__auto___59656 < len__4864__auto___59655)){
args__4870__auto__.push((arguments[i__4865__auto___59656]));

var G__59657 = (i__4865__auto___59656 + (1));
i__4865__auto___59656 = G__59657;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58831 = conformed_args__51178__auto__;
var map__58831__$1 = cljs.core.__destructure_map(map__58831);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58831__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58831__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58831__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.s.cljs$lang$applyTo = (function (seq58830){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58830));
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
com.fulcrologic.fulcro_css.localized_dom.hatch = (function com$fulcrologic$fulcro_css$localized_dom$hatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59660 = arguments.length;
var i__4865__auto___59661 = (0);
while(true){
if((i__4865__auto___59661 < len__4864__auto___59660)){
args__4870__auto__.push((arguments[i__4865__auto___59661]));

var G__59662 = (i__4865__auto___59661 + (1));
i__4865__auto___59661 = G__59662;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58833 = conformed_args__51178__auto__;
var map__58833__$1 = cljs.core.__destructure_map(map__58833);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.hatch.cljs$lang$applyTo = (function (seq58832){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58832));
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
com.fulcrologic.fulcro_css.localized_dom.ins = (function com$fulcrologic$fulcro_css$localized_dom$ins(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59663 = arguments.length;
var i__4865__auto___59664 = (0);
while(true){
if((i__4865__auto___59664 < len__4864__auto___59663)){
args__4870__auto__.push((arguments[i__4865__auto___59664]));

var G__59665 = (i__4865__auto___59664 + (1));
i__4865__auto___59664 = G__59665;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58835 = conformed_args__51178__auto__;
var map__58835__$1 = cljs.core.__destructure_map(map__58835);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58835__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58835__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58835__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.ins.cljs$lang$applyTo = (function (seq58834){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58834));
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
com.fulcrologic.fulcro_css.localized_dom.footer = (function com$fulcrologic$fulcro_css$localized_dom$footer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59666 = arguments.length;
var i__4865__auto___59667 = (0);
while(true){
if((i__4865__auto___59667 < len__4864__auto___59666)){
args__4870__auto__.push((arguments[i__4865__auto___59667]));

var G__59668 = (i__4865__auto___59667 + (1));
i__4865__auto___59667 = G__59668;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58837 = conformed_args__51178__auto__;
var map__58837__$1 = cljs.core.__destructure_map(map__58837);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58837__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58837__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58837__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.footer.cljs$lang$applyTo = (function (seq58836){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58836));
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
com.fulcrologic.fulcro_css.localized_dom.mpath = (function com$fulcrologic$fulcro_css$localized_dom$mpath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59669 = arguments.length;
var i__4865__auto___59670 = (0);
while(true){
if((i__4865__auto___59670 < len__4864__auto___59669)){
args__4870__auto__.push((arguments[i__4865__auto___59670]));

var G__59671 = (i__4865__auto___59670 + (1));
i__4865__auto___59670 = G__59671;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58839 = conformed_args__51178__auto__;
var map__58839__$1 = cljs.core.__destructure_map(map__58839);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58839__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58839__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.mpath.cljs$lang$applyTo = (function (seq58838){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58838));
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
com.fulcrologic.fulcro_css.localized_dom.title = (function com$fulcrologic$fulcro_css$localized_dom$title(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59675 = arguments.length;
var i__4865__auto___59676 = (0);
while(true){
if((i__4865__auto___59676 < len__4864__auto___59675)){
args__4870__auto__.push((arguments[i__4865__auto___59676]));

var G__59677 = (i__4865__auto___59676 + (1));
i__4865__auto___59676 = G__59677;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58841 = conformed_args__51178__auto__;
var map__58841__$1 = cljs.core.__destructure_map(map__58841);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58841__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58841__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58841__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.title.cljs$lang$applyTo = (function (seq58840){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58840));
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
com.fulcrologic.fulcro_css.localized_dom.h5 = (function com$fulcrologic$fulcro_css$localized_dom$h5(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59680 = arguments.length;
var i__4865__auto___59681 = (0);
while(true){
if((i__4865__auto___59681 < len__4864__auto___59680)){
args__4870__auto__.push((arguments[i__4865__auto___59681]));

var G__59682 = (i__4865__auto___59681 + (1));
i__4865__auto___59681 = G__59682;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58843 = conformed_args__51178__auto__;
var map__58843__$1 = cljs.core.__destructure_map(map__58843);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58843__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58843__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58843__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.h5.cljs$lang$applyTo = (function (seq58842){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58842));
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
com.fulcrologic.fulcro_css.localized_dom.meshgradient = (function com$fulcrologic$fulcro_css$localized_dom$meshgradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59687 = arguments.length;
var i__4865__auto___59688 = (0);
while(true){
if((i__4865__auto___59688 < len__4864__auto___59687)){
args__4870__auto__.push((arguments[i__4865__auto___59688]));

var G__59689 = (i__4865__auto___59688 + (1));
i__4865__auto___59688 = G__59689;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58845 = conformed_args__51178__auto__;
var map__58845__$1 = cljs.core.__destructure_map(map__58845);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58845__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58845__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58845__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.meshgradient.cljs$lang$applyTo = (function (seq58844){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58844));
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
com.fulcrologic.fulcro_css.localized_dom.canvas = (function com$fulcrologic$fulcro_css$localized_dom$canvas(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59690 = arguments.length;
var i__4865__auto___59691 = (0);
while(true){
if((i__4865__auto___59691 < len__4864__auto___59690)){
args__4870__auto__.push((arguments[i__4865__auto___59691]));

var G__59692 = (i__4865__auto___59691 + (1));
i__4865__auto___59691 = G__59692;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58847 = conformed_args__51178__auto__;
var map__58847__$1 = cljs.core.__destructure_map(map__58847);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58847__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58847__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58847__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.canvas.cljs$lang$applyTo = (function (seq58846){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58846));
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
com.fulcrologic.fulcro_css.localized_dom.param = (function com$fulcrologic$fulcro_css$localized_dom$param(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59695 = arguments.length;
var i__4865__auto___59696 = (0);
while(true){
if((i__4865__auto___59696 < len__4864__auto___59695)){
args__4870__auto__.push((arguments[i__4865__auto___59696]));

var G__59697 = (i__4865__auto___59696 + (1));
i__4865__auto___59696 = G__59697;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58849 = conformed_args__51178__auto__;
var map__58849__$1 = cljs.core.__destructure_map(map__58849);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.param.cljs$lang$applyTo = (function (seq58848){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58848));
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
com.fulcrologic.fulcro_css.localized_dom.font = (function com$fulcrologic$fulcro_css$localized_dom$font(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59698 = arguments.length;
var i__4865__auto___59699 = (0);
while(true){
if((i__4865__auto___59699 < len__4864__auto___59698)){
args__4870__auto__.push((arguments[i__4865__auto___59699]));

var G__59700 = (i__4865__auto___59699 + (1));
i__4865__auto___59699 = G__59700;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58851 = conformed_args__51178__auto__;
var map__58851__$1 = cljs.core.__destructure_map(map__58851);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58851__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58851__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58851__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.font.cljs$lang$applyTo = (function (seq58850){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58850));
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
com.fulcrologic.fulcro_css.localized_dom.div = (function com$fulcrologic$fulcro_css$localized_dom$div(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59701 = arguments.length;
var i__4865__auto___59702 = (0);
while(true){
if((i__4865__auto___59702 < len__4864__auto___59701)){
args__4870__auto__.push((arguments[i__4865__auto___59702]));

var G__59703 = (i__4865__auto___59702 + (1));
i__4865__auto___59702 = G__59703;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58853 = conformed_args__51178__auto__;
var map__58853__$1 = cljs.core.__destructure_map(map__58853);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58853__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58853__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58853__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.div.cljs$lang$applyTo = (function (seq58852){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58852));
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
com.fulcrologic.fulcro_css.localized_dom.option = (function com$fulcrologic$fulcro_css$localized_dom$option(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59705 = arguments.length;
var i__4865__auto___59706 = (0);
while(true){
if((i__4865__auto___59706 < len__4864__auto___59705)){
args__4870__auto__.push((arguments[i__4865__auto___59706]));

var G__59708 = (i__4865__auto___59706 + (1));
i__4865__auto___59706 = G__59708;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58855 = conformed_args__51178__auto__;
var map__58855__$1 = cljs.core.__destructure_map(map__58855);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.option.cljs$lang$applyTo = (function (seq58854){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58854));
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
com.fulcrologic.fulcro_css.localized_dom.feFlood = (function com$fulcrologic$fulcro_css$localized_dom$feFlood(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59712 = arguments.length;
var i__4865__auto___59713 = (0);
while(true){
if((i__4865__auto___59713 < len__4864__auto___59712)){
args__4870__auto__.push((arguments[i__4865__auto___59713]));

var G__59714 = (i__4865__auto___59713 + (1));
i__4865__auto___59713 = G__59714;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58857 = conformed_args__51178__auto__;
var map__58857__$1 = cljs.core.__destructure_map(map__58857);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58857__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58857__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58857__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feFlood.cljs$lang$applyTo = (function (seq58856){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58856));
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
com.fulcrologic.fulcro_css.localized_dom.summary = (function com$fulcrologic$fulcro_css$localized_dom$summary(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59717 = arguments.length;
var i__4865__auto___59718 = (0);
while(true){
if((i__4865__auto___59718 < len__4864__auto___59717)){
args__4870__auto__.push((arguments[i__4865__auto___59718]));

var G__59719 = (i__4865__auto___59718 + (1));
i__4865__auto___59718 = G__59719;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58859 = conformed_args__51178__auto__;
var map__58859__$1 = cljs.core.__destructure_map(map__58859);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58859__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58859__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58859__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.summary.cljs$lang$applyTo = (function (seq58858){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58858));
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
com.fulcrologic.fulcro_css.localized_dom.feMorphology = (function com$fulcrologic$fulcro_css$localized_dom$feMorphology(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59720 = arguments.length;
var i__4865__auto___59721 = (0);
while(true){
if((i__4865__auto___59721 < len__4864__auto___59720)){
args__4870__auto__.push((arguments[i__4865__auto___59721]));

var G__59722 = (i__4865__auto___59721 + (1));
i__4865__auto___59721 = G__59722;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58861 = conformed_args__51178__auto__;
var map__58861__$1 = cljs.core.__destructure_map(map__58861);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58861__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58861__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58861__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feMorphology.cljs$lang$applyTo = (function (seq58860){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58860));
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
com.fulcrologic.fulcro_css.localized_dom.samp = (function com$fulcrologic$fulcro_css$localized_dom$samp(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59724 = arguments.length;
var i__4865__auto___59725 = (0);
while(true){
if((i__4865__auto___59725 < len__4864__auto___59724)){
args__4870__auto__.push((arguments[i__4865__auto___59725]));

var G__59726 = (i__4865__auto___59725 + (1));
i__4865__auto___59725 = G__59726;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58863 = conformed_args__51178__auto__;
var map__58863__$1 = cljs.core.__destructure_map(map__58863);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.samp.cljs$lang$applyTo = (function (seq58862){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58862));
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
com.fulcrologic.fulcro_css.localized_dom.glyphRef = (function com$fulcrologic$fulcro_css$localized_dom$glyphRef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59731 = arguments.length;
var i__4865__auto___59732 = (0);
while(true){
if((i__4865__auto___59732 < len__4864__auto___59731)){
args__4870__auto__.push((arguments[i__4865__auto___59732]));

var G__59733 = (i__4865__auto___59732 + (1));
i__4865__auto___59732 = G__59733;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58865 = conformed_args__51178__auto__;
var map__58865__$1 = cljs.core.__destructure_map(map__58865);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.glyphRef.cljs$lang$applyTo = (function (seq58864){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58864));
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
com.fulcrologic.fulcro_css.localized_dom.small = (function com$fulcrologic$fulcro_css$localized_dom$small(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59736 = arguments.length;
var i__4865__auto___59737 = (0);
while(true){
if((i__4865__auto___59737 < len__4864__auto___59736)){
args__4870__auto__.push((arguments[i__4865__auto___59737]));

var G__59738 = (i__4865__auto___59737 + (1));
i__4865__auto___59737 = G__59738;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58867 = conformed_args__51178__auto__;
var map__58867__$1 = cljs.core.__destructure_map(map__58867);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58867__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58867__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58867__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.small.cljs$lang$applyTo = (function (seq58866){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58866));
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
com.fulcrologic.fulcro_css.localized_dom.style = (function com$fulcrologic$fulcro_css$localized_dom$style(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59743 = arguments.length;
var i__4865__auto___59744 = (0);
while(true){
if((i__4865__auto___59744 < len__4864__auto___59743)){
args__4870__auto__.push((arguments[i__4865__auto___59744]));

var G__59745 = (i__4865__auto___59744 + (1));
i__4865__auto___59744 = G__59745;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58869 = conformed_args__51178__auto__;
var map__58869__$1 = cljs.core.__destructure_map(map__58869);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58869__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58869__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58869__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.style.cljs$lang$applyTo = (function (seq58868){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58868));
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
com.fulcrologic.fulcro_css.localized_dom.textarea = (function com$fulcrologic$fulcro_css$localized_dom$textarea(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59747 = arguments.length;
var i__4865__auto___59748 = (0);
while(true){
if((i__4865__auto___59748 < len__4864__auto___59747)){
args__4870__auto__.push((arguments[i__4865__auto___59748]));

var G__59749 = (i__4865__auto___59748 + (1));
i__4865__auto___59748 = G__59749;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58871 = conformed_args__51178__auto__;
var map__58871__$1 = cljs.core.__destructure_map(map__58871);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58871__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58871__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58871__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.textarea.cljs$lang$applyTo = (function (seq58870){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58870));
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
com.fulcrologic.fulcro_css.localized_dom.feGaussianBlur = (function com$fulcrologic$fulcro_css$localized_dom$feGaussianBlur(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59752 = arguments.length;
var i__4865__auto___59753 = (0);
while(true){
if((i__4865__auto___59753 < len__4864__auto___59752)){
args__4870__auto__.push((arguments[i__4865__auto___59753]));

var G__59754 = (i__4865__auto___59753 + (1));
i__4865__auto___59753 = G__59754;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58873 = conformed_args__51178__auto__;
var map__58873__$1 = cljs.core.__destructure_map(map__58873);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58873__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58873__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58873__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feGaussianBlur.cljs$lang$applyTo = (function (seq58872){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58872));
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
com.fulcrologic.fulcro_css.localized_dom.h4 = (function com$fulcrologic$fulcro_css$localized_dom$h4(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59755 = arguments.length;
var i__4865__auto___59756 = (0);
while(true){
if((i__4865__auto___59756 < len__4864__auto___59755)){
args__4870__auto__.push((arguments[i__4865__auto___59756]));

var G__59758 = (i__4865__auto___59756 + (1));
i__4865__auto___59756 = G__59758;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58875 = conformed_args__51178__auto__;
var map__58875__$1 = cljs.core.__destructure_map(map__58875);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58875__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58875__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58875__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.h4.cljs$lang$applyTo = (function (seq58874){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58874));
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
com.fulcrologic.fulcro_css.localized_dom.head = (function com$fulcrologic$fulcro_css$localized_dom$head(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59763 = arguments.length;
var i__4865__auto___59764 = (0);
while(true){
if((i__4865__auto___59764 < len__4864__auto___59763)){
args__4870__auto__.push((arguments[i__4865__auto___59764]));

var G__59765 = (i__4865__auto___59764 + (1));
i__4865__auto___59764 = G__59765;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58877 = conformed_args__51178__auto__;
var map__58877__$1 = cljs.core.__destructure_map(map__58877);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58877__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58877__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.head.cljs$lang$applyTo = (function (seq58876){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58876));
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
com.fulcrologic.fulcro_css.localized_dom.g = (function com$fulcrologic$fulcro_css$localized_dom$g(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59768 = arguments.length;
var i__4865__auto___59769 = (0);
while(true){
if((i__4865__auto___59769 < len__4864__auto___59768)){
args__4870__auto__.push((arguments[i__4865__auto___59769]));

var G__59770 = (i__4865__auto___59769 + (1));
i__4865__auto___59769 = G__59770;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58879 = conformed_args__51178__auto__;
var map__58879__$1 = cljs.core.__destructure_map(map__58879);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58879__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58879__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58879__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.g.cljs$lang$applyTo = (function (seq58878){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58878));
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
com.fulcrologic.fulcro_css.localized_dom.missing_glyph = (function com$fulcrologic$fulcro_css$localized_dom$missing_glyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59771 = arguments.length;
var i__4865__auto___59772 = (0);
while(true){
if((i__4865__auto___59772 < len__4864__auto___59771)){
args__4870__auto__.push((arguments[i__4865__auto___59772]));

var G__59773 = (i__4865__auto___59772 + (1));
i__4865__auto___59772 = G__59773;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58881 = conformed_args__51178__auto__;
var map__58881__$1 = cljs.core.__destructure_map(map__58881);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58881__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58881__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58881__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.missing_glyph.cljs$lang$applyTo = (function (seq58880){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58880));
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
com.fulcrologic.fulcro_css.localized_dom.stop = (function com$fulcrologic$fulcro_css$localized_dom$stop(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59774 = arguments.length;
var i__4865__auto___59775 = (0);
while(true){
if((i__4865__auto___59775 < len__4864__auto___59774)){
args__4870__auto__.push((arguments[i__4865__auto___59775]));

var G__59776 = (i__4865__auto___59775 + (1));
i__4865__auto___59775 = G__59776;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58883 = conformed_args__51178__auto__;
var map__58883__$1 = cljs.core.__destructure_map(map__58883);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58883__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58883__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58883__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.stop.cljs$lang$applyTo = (function (seq58882){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58882));
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
com.fulcrologic.fulcro_css.localized_dom.feDiffuseLighting = (function com$fulcrologic$fulcro_css$localized_dom$feDiffuseLighting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59780 = arguments.length;
var i__4865__auto___59781 = (0);
while(true){
if((i__4865__auto___59781 < len__4864__auto___59780)){
args__4870__auto__.push((arguments[i__4865__auto___59781]));

var G__59782 = (i__4865__auto___59781 + (1));
i__4865__auto___59781 = G__59782;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58885 = conformed_args__51178__auto__;
var map__58885__$1 = cljs.core.__destructure_map(map__58885);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58885__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58885__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58885__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq58884){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58884));
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
com.fulcrologic.fulcro_css.localized_dom.filter = (function com$fulcrologic$fulcro_css$localized_dom$filter(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59785 = arguments.length;
var i__4865__auto___59787 = (0);
while(true){
if((i__4865__auto___59787 < len__4864__auto___59785)){
args__4870__auto__.push((arguments[i__4865__auto___59787]));

var G__59788 = (i__4865__auto___59787 + (1));
i__4865__auto___59787 = G__59788;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58887 = conformed_args__51178__auto__;
var map__58887__$1 = cljs.core.__destructure_map(map__58887);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58887__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58887__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58887__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.filter.cljs$lang$applyTo = (function (seq58886){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58886));
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
com.fulcrologic.fulcro_css.localized_dom.feComposite = (function com$fulcrologic$fulcro_css$localized_dom$feComposite(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59791 = arguments.length;
var i__4865__auto___59792 = (0);
while(true){
if((i__4865__auto___59792 < len__4864__auto___59791)){
args__4870__auto__.push((arguments[i__4865__auto___59792]));

var G__59793 = (i__4865__auto___59792 + (1));
i__4865__auto___59792 = G__59793;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58889 = conformed_args__51178__auto__;
var map__58889__$1 = cljs.core.__destructure_map(map__58889);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58889__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58889__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58889__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feComposite.cljs$lang$applyTo = (function (seq58888){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58888));
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
com.fulcrologic.fulcro_css.localized_dom.mesh = (function com$fulcrologic$fulcro_css$localized_dom$mesh(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59794 = arguments.length;
var i__4865__auto___59795 = (0);
while(true){
if((i__4865__auto___59795 < len__4864__auto___59794)){
args__4870__auto__.push((arguments[i__4865__auto___59795]));

var G__59798 = (i__4865__auto___59795 + (1));
i__4865__auto___59795 = G__59798;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58891 = conformed_args__51178__auto__;
var map__58891__$1 = cljs.core.__destructure_map(map__58891);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58891__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58891__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58891__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.mesh.cljs$lang$applyTo = (function (seq58890){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58890));
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
com.fulcrologic.fulcro_css.localized_dom.var$ = (function com$fulcrologic$fulcro_css$localized_dom$var(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59800 = arguments.length;
var i__4865__auto___59801 = (0);
while(true){
if((i__4865__auto___59801 < len__4864__auto___59800)){
args__4870__auto__.push((arguments[i__4865__auto___59801]));

var G__59802 = (i__4865__auto___59801 + (1));
i__4865__auto___59801 = G__59802;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58893 = conformed_args__51178__auto__;
var map__58893__$1 = cljs.core.__destructure_map(map__58893);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58893__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58893__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58893__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.var$.cljs$lang$applyTo = (function (seq58892){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58892));
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
com.fulcrologic.fulcro_css.localized_dom.tspan = (function com$fulcrologic$fulcro_css$localized_dom$tspan(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59804 = arguments.length;
var i__4865__auto___59805 = (0);
while(true){
if((i__4865__auto___59805 < len__4864__auto___59804)){
args__4870__auto__.push((arguments[i__4865__auto___59805]));

var G__59808 = (i__4865__auto___59805 + (1));
i__4865__auto___59805 = G__59808;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58895 = conformed_args__51178__auto__;
var map__58895__$1 = cljs.core.__destructure_map(map__58895);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58895__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58895__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58895__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.tspan.cljs$lang$applyTo = (function (seq58894){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58894));
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
com.fulcrologic.fulcro_css.localized_dom.ol = (function com$fulcrologic$fulcro_css$localized_dom$ol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59811 = arguments.length;
var i__4865__auto___59812 = (0);
while(true){
if((i__4865__auto___59812 < len__4864__auto___59811)){
args__4870__auto__.push((arguments[i__4865__auto___59812]));

var G__59813 = (i__4865__auto___59812 + (1));
i__4865__auto___59812 = G__59813;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58897 = conformed_args__51178__auto__;
var map__58897__$1 = cljs.core.__destructure_map(map__58897);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58897__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58897__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58897__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.ol.cljs$lang$applyTo = (function (seq58896){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58896));
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
com.fulcrologic.fulcro_css.localized_dom.details = (function com$fulcrologic$fulcro_css$localized_dom$details(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59816 = arguments.length;
var i__4865__auto___59817 = (0);
while(true){
if((i__4865__auto___59817 < len__4864__auto___59816)){
args__4870__auto__.push((arguments[i__4865__auto___59817]));

var G__59818 = (i__4865__auto___59817 + (1));
i__4865__auto___59817 = G__59818;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58899 = conformed_args__51178__auto__;
var map__58899__$1 = cljs.core.__destructure_map(map__58899);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.details.cljs$lang$applyTo = (function (seq58898){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58898));
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
com.fulcrologic.fulcro_css.localized_dom.line = (function com$fulcrologic$fulcro_css$localized_dom$line(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59821 = arguments.length;
var i__4865__auto___59822 = (0);
while(true){
if((i__4865__auto___59822 < len__4864__auto___59821)){
args__4870__auto__.push((arguments[i__4865__auto___59822]));

var G__59825 = (i__4865__auto___59822 + (1));
i__4865__auto___59822 = G__59825;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58901 = conformed_args__51178__auto__;
var map__58901__$1 = cljs.core.__destructure_map(map__58901);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58901__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58901__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58901__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.line.cljs$lang$applyTo = (function (seq58900){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58900));
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
com.fulcrologic.fulcro_css.localized_dom.col = (function com$fulcrologic$fulcro_css$localized_dom$col(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59827 = arguments.length;
var i__4865__auto___59828 = (0);
while(true){
if((i__4865__auto___59828 < len__4864__auto___59827)){
args__4870__auto__.push((arguments[i__4865__auto___59828]));

var G__59829 = (i__4865__auto___59828 + (1));
i__4865__auto___59828 = G__59829;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58903 = conformed_args__51178__auto__;
var map__58903__$1 = cljs.core.__destructure_map(map__58903);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58903__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58903__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58903__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.col.cljs$lang$applyTo = (function (seq58902){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58902));
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
com.fulcrologic.fulcro_css.localized_dom.label = (function com$fulcrologic$fulcro_css$localized_dom$label(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59832 = arguments.length;
var i__4865__auto___59833 = (0);
while(true){
if((i__4865__auto___59833 < len__4864__auto___59832)){
args__4870__auto__.push((arguments[i__4865__auto___59833]));

var G__59834 = (i__4865__auto___59833 + (1));
i__4865__auto___59833 = G__59834;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58905 = conformed_args__51178__auto__;
var map__58905__$1 = cljs.core.__destructure_map(map__58905);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58905__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58905__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58905__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.label.cljs$lang$applyTo = (function (seq58904){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58904));
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
com.fulcrologic.fulcro_css.localized_dom.picture = (function com$fulcrologic$fulcro_css$localized_dom$picture(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59838 = arguments.length;
var i__4865__auto___59839 = (0);
while(true){
if((i__4865__auto___59839 < len__4864__auto___59838)){
args__4870__auto__.push((arguments[i__4865__auto___59839]));

var G__59842 = (i__4865__auto___59839 + (1));
i__4865__auto___59839 = G__59842;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58907 = conformed_args__51178__auto__;
var map__58907__$1 = cljs.core.__destructure_map(map__58907);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58907__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58907__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58907__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.picture.cljs$lang$applyTo = (function (seq58906){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58906));
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
com.fulcrologic.fulcro_css.localized_dom.rt = (function com$fulcrologic$fulcro_css$localized_dom$rt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59846 = arguments.length;
var i__4865__auto___59847 = (0);
while(true){
if((i__4865__auto___59847 < len__4864__auto___59846)){
args__4870__auto__.push((arguments[i__4865__auto___59847]));

var G__59848 = (i__4865__auto___59847 + (1));
i__4865__auto___59847 = G__59848;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58909 = conformed_args__51178__auto__;
var map__58909__$1 = cljs.core.__destructure_map(map__58909);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58909__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58909__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58909__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.rt.cljs$lang$applyTo = (function (seq58908){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58908));
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
com.fulcrologic.fulcro_css.localized_dom.h6 = (function com$fulcrologic$fulcro_css$localized_dom$h6(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59850 = arguments.length;
var i__4865__auto___59851 = (0);
while(true){
if((i__4865__auto___59851 < len__4864__auto___59850)){
args__4870__auto__.push((arguments[i__4865__auto___59851]));

var G__59854 = (i__4865__auto___59851 + (1));
i__4865__auto___59851 = G__59854;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58911 = conformed_args__51178__auto__;
var map__58911__$1 = cljs.core.__destructure_map(map__58911);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58911__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58911__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58911__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.h6.cljs$lang$applyTo = (function (seq58910){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58910));
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
com.fulcrologic.fulcro_css.localized_dom.vkern = (function com$fulcrologic$fulcro_css$localized_dom$vkern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59855 = arguments.length;
var i__4865__auto___59856 = (0);
while(true){
if((i__4865__auto___59856 < len__4864__auto___59855)){
args__4870__auto__.push((arguments[i__4865__auto___59856]));

var G__59857 = (i__4865__auto___59856 + (1));
i__4865__auto___59856 = G__59857;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58913 = conformed_args__51178__auto__;
var map__58913__$1 = cljs.core.__destructure_map(map__58913);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58913__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58913__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58913__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.vkern.cljs$lang$applyTo = (function (seq58912){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58912));
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
com.fulcrologic.fulcro_css.localized_dom.link = (function com$fulcrologic$fulcro_css$localized_dom$link(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59859 = arguments.length;
var i__4865__auto___59860 = (0);
while(true){
if((i__4865__auto___59860 < len__4864__auto___59859)){
args__4870__auto__.push((arguments[i__4865__auto___59860]));

var G__59861 = (i__4865__auto___59860 + (1));
i__4865__auto___59860 = G__59861;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58915 = conformed_args__51178__auto__;
var map__58915__$1 = cljs.core.__destructure_map(map__58915);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58915__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58915__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58915__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.link.cljs$lang$applyTo = (function (seq58914){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58914));
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
com.fulcrologic.fulcro_css.localized_dom.defs = (function com$fulcrologic$fulcro_css$localized_dom$defs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59862 = arguments.length;
var i__4865__auto___59863 = (0);
while(true){
if((i__4865__auto___59863 < len__4864__auto___59862)){
args__4870__auto__.push((arguments[i__4865__auto___59863]));

var G__59864 = (i__4865__auto___59863 + (1));
i__4865__auto___59863 = G__59864;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58917 = conformed_args__51178__auto__;
var map__58917__$1 = cljs.core.__destructure_map(map__58917);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58917__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58917__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58917__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.defs.cljs$lang$applyTo = (function (seq58916){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58916));
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
com.fulcrologic.fulcro_css.localized_dom.glyph = (function com$fulcrologic$fulcro_css$localized_dom$glyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59867 = arguments.length;
var i__4865__auto___59868 = (0);
while(true){
if((i__4865__auto___59868 < len__4864__auto___59867)){
args__4870__auto__.push((arguments[i__4865__auto___59868]));

var G__59869 = (i__4865__auto___59868 + (1));
i__4865__auto___59868 = G__59869;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58919 = conformed_args__51178__auto__;
var map__58919__$1 = cljs.core.__destructure_map(map__58919);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58919__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58919__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58919__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.glyph.cljs$lang$applyTo = (function (seq58918){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58918));
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
com.fulcrologic.fulcro_css.localized_dom.colgroup = (function com$fulcrologic$fulcro_css$localized_dom$colgroup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59871 = arguments.length;
var i__4865__auto___59872 = (0);
while(true){
if((i__4865__auto___59872 < len__4864__auto___59871)){
args__4870__auto__.push((arguments[i__4865__auto___59872]));

var G__59873 = (i__4865__auto___59872 + (1));
i__4865__auto___59872 = G__59873;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58921 = conformed_args__51178__auto__;
var map__58921__$1 = cljs.core.__destructure_map(map__58921);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58921__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58921__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58921__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.colgroup.cljs$lang$applyTo = (function (seq58920){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58920));
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
com.fulcrologic.fulcro_css.localized_dom.meter = (function com$fulcrologic$fulcro_css$localized_dom$meter(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59874 = arguments.length;
var i__4865__auto___59875 = (0);
while(true){
if((i__4865__auto___59875 < len__4864__auto___59874)){
args__4870__auto__.push((arguments[i__4865__auto___59875]));

var G__59876 = (i__4865__auto___59875 + (1));
i__4865__auto___59875 = G__59876;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58923 = conformed_args__51178__auto__;
var map__58923__$1 = cljs.core.__destructure_map(map__58923);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58923__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58923__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58923__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.meter.cljs$lang$applyTo = (function (seq58922){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58922));
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
com.fulcrologic.fulcro_css.localized_dom.bdo = (function com$fulcrologic$fulcro_css$localized_dom$bdo(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59877 = arguments.length;
var i__4865__auto___59878 = (0);
while(true){
if((i__4865__auto___59878 < len__4864__auto___59877)){
args__4870__auto__.push((arguments[i__4865__auto___59878]));

var G__59879 = (i__4865__auto___59878 + (1));
i__4865__auto___59878 = G__59879;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58925 = conformed_args__51178__auto__;
var map__58925__$1 = cljs.core.__destructure_map(map__58925);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58925__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58925__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58925__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.bdo.cljs$lang$applyTo = (function (seq58924){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58924));
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
com.fulcrologic.fulcro_css.localized_dom.feImage = (function com$fulcrologic$fulcro_css$localized_dom$feImage(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59882 = arguments.length;
var i__4865__auto___59883 = (0);
while(true){
if((i__4865__auto___59883 < len__4864__auto___59882)){
args__4870__auto__.push((arguments[i__4865__auto___59883]));

var G__59884 = (i__4865__auto___59883 + (1));
i__4865__auto___59883 = G__59884;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58927 = conformed_args__51178__auto__;
var map__58927__$1 = cljs.core.__destructure_map(map__58927);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58927__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58927__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58927__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feImage.cljs$lang$applyTo = (function (seq58926){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58926));
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
com.fulcrologic.fulcro_css.localized_dom.b = (function com$fulcrologic$fulcro_css$localized_dom$b(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59885 = arguments.length;
var i__4865__auto___59890 = (0);
while(true){
if((i__4865__auto___59890 < len__4864__auto___59885)){
args__4870__auto__.push((arguments[i__4865__auto___59890]));

var G__59891 = (i__4865__auto___59890 + (1));
i__4865__auto___59890 = G__59891;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58929 = conformed_args__51178__auto__;
var map__58929__$1 = cljs.core.__destructure_map(map__58929);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58929__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58929__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58929__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.b.cljs$lang$applyTo = (function (seq58928){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58928));
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
com.fulcrologic.fulcro_css.localized_dom.svg = (function com$fulcrologic$fulcro_css$localized_dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59892 = arguments.length;
var i__4865__auto___59893 = (0);
while(true){
if((i__4865__auto___59893 < len__4864__auto___59892)){
args__4870__auto__.push((arguments[i__4865__auto___59893]));

var G__59895 = (i__4865__auto___59893 + (1));
i__4865__auto___59893 = G__59895;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58931 = conformed_args__51178__auto__;
var map__58931__$1 = cljs.core.__destructure_map(map__58931);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58931__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58931__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58931__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.svg.cljs$lang$applyTo = (function (seq58930){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58930));
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
com.fulcrologic.fulcro_css.localized_dom.feTile = (function com$fulcrologic$fulcro_css$localized_dom$feTile(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59897 = arguments.length;
var i__4865__auto___59898 = (0);
while(true){
if((i__4865__auto___59898 < len__4864__auto___59897)){
args__4870__auto__.push((arguments[i__4865__auto___59898]));

var G__59899 = (i__4865__auto___59898 + (1));
i__4865__auto___59898 = G__59899;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58933 = conformed_args__51178__auto__;
var map__58933__$1 = cljs.core.__destructure_map(map__58933);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58933__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58933__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58933__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feTile.cljs$lang$applyTo = (function (seq58932){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58932));
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
com.fulcrologic.fulcro_css.localized_dom.ellipse = (function com$fulcrologic$fulcro_css$localized_dom$ellipse(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59904 = arguments.length;
var i__4865__auto___59905 = (0);
while(true){
if((i__4865__auto___59905 < len__4864__auto___59904)){
args__4870__auto__.push((arguments[i__4865__auto___59905]));

var G__59906 = (i__4865__auto___59905 + (1));
i__4865__auto___59905 = G__59906;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58935 = conformed_args__51178__auto__;
var map__58935__$1 = cljs.core.__destructure_map(map__58935);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58935__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58935__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58935__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.ellipse.cljs$lang$applyTo = (function (seq58934){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58934));
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
com.fulcrologic.fulcro_css.localized_dom.code = (function com$fulcrologic$fulcro_css$localized_dom$code(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59911 = arguments.length;
var i__4865__auto___59912 = (0);
while(true){
if((i__4865__auto___59912 < len__4864__auto___59911)){
args__4870__auto__.push((arguments[i__4865__auto___59912]));

var G__59913 = (i__4865__auto___59912 + (1));
i__4865__auto___59912 = G__59913;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58937 = conformed_args__51178__auto__;
var map__58937__$1 = cljs.core.__destructure_map(map__58937);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.code.cljs$lang$applyTo = (function (seq58936){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58936));
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
com.fulcrologic.fulcro_css.localized_dom.dialog = (function com$fulcrologic$fulcro_css$localized_dom$dialog(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59916 = arguments.length;
var i__4865__auto___59917 = (0);
while(true){
if((i__4865__auto___59917 < len__4864__auto___59916)){
args__4870__auto__.push((arguments[i__4865__auto___59917]));

var G__59918 = (i__4865__auto___59917 + (1));
i__4865__auto___59917 = G__59918;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58939 = conformed_args__51178__auto__;
var map__58939__$1 = cljs.core.__destructure_map(map__58939);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58939__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58939__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58939__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.dialog.cljs$lang$applyTo = (function (seq58938){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58938));
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
com.fulcrologic.fulcro_css.localized_dom.linearGradient = (function com$fulcrologic$fulcro_css$localized_dom$linearGradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59922 = arguments.length;
var i__4865__auto___59923 = (0);
while(true){
if((i__4865__auto___59923 < len__4864__auto___59922)){
args__4870__auto__.push((arguments[i__4865__auto___59923]));

var G__59924 = (i__4865__auto___59923 + (1));
i__4865__auto___59923 = G__59924;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58941 = conformed_args__51178__auto__;
var map__58941__$1 = cljs.core.__destructure_map(map__58941);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58941__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58941__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58941__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.linearGradient.cljs$lang$applyTo = (function (seq58940){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58940));
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
com.fulcrologic.fulcro_css.localized_dom.discard = (function com$fulcrologic$fulcro_css$localized_dom$discard(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59926 = arguments.length;
var i__4865__auto___59927 = (0);
while(true){
if((i__4865__auto___59927 < len__4864__auto___59926)){
args__4870__auto__.push((arguments[i__4865__auto___59927]));

var G__59931 = (i__4865__auto___59927 + (1));
i__4865__auto___59927 = G__59931;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58943 = conformed_args__51178__auto__;
var map__58943__$1 = cljs.core.__destructure_map(map__58943);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.discard.cljs$lang$applyTo = (function (seq58942){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58942));
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
com.fulcrologic.fulcro_css.localized_dom.font_face_src = (function com$fulcrologic$fulcro_css$localized_dom$font_face_src(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59932 = arguments.length;
var i__4865__auto___59933 = (0);
while(true){
if((i__4865__auto___59933 < len__4864__auto___59932)){
args__4870__auto__.push((arguments[i__4865__auto___59933]));

var G__59938 = (i__4865__auto___59933 + (1));
i__4865__auto___59933 = G__59938;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58945 = conformed_args__51178__auto__;
var map__58945__$1 = cljs.core.__destructure_map(map__58945);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58945__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58945__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58945__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.font_face_src.cljs$lang$applyTo = (function (seq58944){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58944));
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
com.fulcrologic.fulcro_css.localized_dom.noscript = (function com$fulcrologic$fulcro_css$localized_dom$noscript(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59939 = arguments.length;
var i__4865__auto___59940 = (0);
while(true){
if((i__4865__auto___59940 < len__4864__auto___59939)){
args__4870__auto__.push((arguments[i__4865__auto___59940]));

var G__59941 = (i__4865__auto___59940 + (1));
i__4865__auto___59940 = G__59941;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58947 = conformed_args__51178__auto__;
var map__58947__$1 = cljs.core.__destructure_map(map__58947);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58947__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58947__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58947__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.noscript.cljs$lang$applyTo = (function (seq58946){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58946));
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
com.fulcrologic.fulcro_css.localized_dom.animateTransform = (function com$fulcrologic$fulcro_css$localized_dom$animateTransform(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59946 = arguments.length;
var i__4865__auto___59947 = (0);
while(true){
if((i__4865__auto___59947 < len__4864__auto___59946)){
args__4870__auto__.push((arguments[i__4865__auto___59947]));

var G__59948 = (i__4865__auto___59947 + (1));
i__4865__auto___59947 = G__59948;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58949 = conformed_args__51178__auto__;
var map__58949__$1 = cljs.core.__destructure_map(map__58949);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58949__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58949__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58949__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.animateTransform.cljs$lang$applyTo = (function (seq58948){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58948));
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
com.fulcrologic.fulcro_css.localized_dom.feColorMatrix = (function com$fulcrologic$fulcro_css$localized_dom$feColorMatrix(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59951 = arguments.length;
var i__4865__auto___59952 = (0);
while(true){
if((i__4865__auto___59952 < len__4864__auto___59951)){
args__4870__auto__.push((arguments[i__4865__auto___59952]));

var G__59953 = (i__4865__auto___59952 + (1));
i__4865__auto___59952 = G__59953;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58951 = conformed_args__51178__auto__;
var map__58951__$1 = cljs.core.__destructure_map(map__58951);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58951__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58951__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58951__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.feColorMatrix.cljs$lang$applyTo = (function (seq58950){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58950));
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
com.fulcrologic.fulcro_css.localized_dom.h2 = (function com$fulcrologic$fulcro_css$localized_dom$h2(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59956 = arguments.length;
var i__4865__auto___59957 = (0);
while(true){
if((i__4865__auto___59957 < len__4864__auto___59956)){
args__4870__auto__.push((arguments[i__4865__auto___59957]));

var G__59958 = (i__4865__auto___59957 + (1));
i__4865__auto___59957 = G__59958;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58953 = conformed_args__51178__auto__;
var map__58953__$1 = cljs.core.__destructure_map(map__58953);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58953__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58953__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58953__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.h2.cljs$lang$applyTo = (function (seq58952){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58952));
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
com.fulcrologic.fulcro_css.localized_dom.area = (function com$fulcrologic$fulcro_css$localized_dom$area(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59959 = arguments.length;
var i__4865__auto___59960 = (0);
while(true){
if((i__4865__auto___59960 < len__4864__auto___59959)){
args__4870__auto__.push((arguments[i__4865__auto___59960]));

var G__59963 = (i__4865__auto___59960 + (1));
i__4865__auto___59960 = G__59963;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58955 = conformed_args__51178__auto__;
var map__58955__$1 = cljs.core.__destructure_map(map__58955);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58955__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58955__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58955__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.area.cljs$lang$applyTo = (function (seq58954){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58954));
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
com.fulcrologic.fulcro_css.localized_dom.br = (function com$fulcrologic$fulcro_css$localized_dom$br(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59968 = arguments.length;
var i__4865__auto___59969 = (0);
while(true){
if((i__4865__auto___59969 < len__4864__auto___59968)){
args__4870__auto__.push((arguments[i__4865__auto___59969]));

var G__59970 = (i__4865__auto___59969 + (1));
i__4865__auto___59969 = G__59970;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58957 = conformed_args__51178__auto__;
var map__58957__$1 = cljs.core.__destructure_map(map__58957);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58957__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58957__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58957__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.br.cljs$lang$applyTo = (function (seq58956){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58956));
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
com.fulcrologic.fulcro_css.localized_dom.image = (function com$fulcrologic$fulcro_css$localized_dom$image(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59971 = arguments.length;
var i__4865__auto___59972 = (0);
while(true){
if((i__4865__auto___59972 < len__4864__auto___59971)){
args__4870__auto__.push((arguments[i__4865__auto___59972]));

var G__59973 = (i__4865__auto___59972 + (1));
i__4865__auto___59972 = G__59973;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro_css.localized_dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro_css.localized_dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51178__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58959 = conformed_args__51178__auto__;
var map__58959__$1 = cljs.core.__destructure_map(map__58959);
var children__51180__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58959__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__51181__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58959__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51179__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58959__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51180__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51180__auto__);
var attrs_value__51182__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__51179__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro_css.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51182__auto__], null),children__51180__auto____$1),css__51181__auto__);
}));

(com.fulcrologic.fulcro_css.localized_dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro_css.localized_dom.image.cljs$lang$applyTo = (function (seq58958){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58958));
}));


//# sourceMappingURL=com.fulcrologic.fulcro_css.localized_dom.js.map
