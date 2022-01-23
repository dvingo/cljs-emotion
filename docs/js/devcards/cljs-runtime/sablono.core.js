goog.provide('sablono.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * The React.js create element function.
 */
sablono.core.create_element = module$node_modules$react$index.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = module$node_modules$react$index.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__51373__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__50734 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__50735 = cljs.core.seq(vec__50734);
var first__50736 = cljs.core.first(seq__50735);
var seq__50735__$1 = cljs.core.next(seq__50735);
var tag = first__50736;
var body = seq__50735__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__51373 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51379__i = 0, G__51379__a = new Array(arguments.length -  0);
while (G__51379__i < G__51379__a.length) {G__51379__a[G__51379__i] = arguments[G__51379__i + 0]; ++G__51379__i;}
  args = new cljs.core.IndexedSeq(G__51379__a,0,null);
} 
return G__51373__delegate.call(this,args);};
G__51373.cljs$lang$maxFixedArity = 0;
G__51373.cljs$lang$applyTo = (function (arglist__51380){
var args = cljs.core.seq(arglist__51380);
return G__51373__delegate(args);
});
G__51373.cljs$core$IFn$_invoke$arity$variadic = G__51373__delegate;
return G__51373;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4652__auto__ = (function sablono$core$update_arglists_$_iter__50740(s__50741){
return (new cljs.core.LazySeq(null,(function (){
var s__50741__$1 = s__50741;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50741__$1);
if(temp__5753__auto__){
var s__50741__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50741__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50741__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50743 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50742 = (0);
while(true){
if((i__50742 < size__4651__auto__)){
var args = cljs.core._nth(c__4650__auto__,i__50742);
cljs.core.chunk_append(b__50743,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__51390 = (i__50742 + (1));
i__50742 = G__51390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50743),sablono$core$update_arglists_$_iter__50740(cljs.core.chunk_rest(s__50741__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50743),null);
}
} else {
var args = cljs.core.first(s__50741__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__50740(cljs.core.rest(s__50741__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51391 = arguments.length;
var i__4865__auto___51392 = (0);
while(true){
if((i__4865__auto___51392 < len__4864__auto___51391)){
args__4870__auto__.push((arguments[i__4865__auto___51392]));

var G__51393 = (i__4865__auto___51392 + (1));
i__4865__auto___51392 = G__51393;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4652__auto__ = (function sablono$core$iter__50762(s__50763){
return (new cljs.core.LazySeq(null,(function (){
var s__50763__$1 = s__50763;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50763__$1);
if(temp__5753__auto__){
var s__50763__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50763__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50763__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50765 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50764 = (0);
while(true){
if((i__50764 < size__4651__auto__)){
var style = cljs.core._nth(c__4650__auto__,i__50764);
cljs.core.chunk_append(b__50765,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__51403 = (i__50764 + (1));
i__50764 = G__51403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50765),sablono$core$iter__50762(cljs.core.chunk_rest(s__50763__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50765),null);
}
} else {
var style = cljs.core.first(s__50763__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__50762(cljs.core.rest(s__50763__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq50755){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50755));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to50792 = (function sablono$core$link_to50792(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51413 = arguments.length;
var i__4865__auto___51414 = (0);
while(true){
if((i__4865__auto___51414 < len__4864__auto___51413)){
args__4870__auto__.push((arguments[i__4865__auto___51414]));

var G__51415 = (i__4865__auto___51414 + (1));
i__4865__auto___51414 = G__51415;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to50792.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sablono.core.link_to50792.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to50792.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to50792.cljs$lang$applyTo = (function (seq50797){
var G__50798 = cljs.core.first(seq50797);
var seq50797__$1 = cljs.core.next(seq50797);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50798,seq50797__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to50792);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to50823 = (function sablono$core$mail_to50823(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51422 = arguments.length;
var i__4865__auto___51423 = (0);
while(true){
if((i__4865__auto___51423 < len__4864__auto___51422)){
args__4870__auto__.push((arguments[i__4865__auto___51423]));

var G__51425 = (i__4865__auto___51423 + (1));
i__4865__auto___51423 = G__51425;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to50823.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sablono.core.mail_to50823.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__50834){
var vec__50837 = p__50834;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50837,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4253__auto__ = content;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to50823.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to50823.cljs$lang$applyTo = (function (seq50827){
var G__50828 = cljs.core.first(seq50827);
var seq50827__$1 = cljs.core.next(seq50827);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50828,seq50827__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to50823);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list50844 = (function sablono$core$unordered_list50844(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4652__auto__ = (function sablono$core$unordered_list50844_$_iter__50847(s__50848){
return (new cljs.core.LazySeq(null,(function (){
var s__50848__$1 = s__50848;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50848__$1);
if(temp__5753__auto__){
var s__50848__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50848__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50848__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50850 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50849 = (0);
while(true){
if((i__50849 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__50849);
cljs.core.chunk_append(b__50850,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__51433 = (i__50849 + (1));
i__50849 = G__51433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50850),sablono$core$unordered_list50844_$_iter__50847(cljs.core.chunk_rest(s__50848__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50850),null);
}
} else {
var x = cljs.core.first(s__50848__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list50844_$_iter__50847(cljs.core.rest(s__50848__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list50844);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list50862 = (function sablono$core$ordered_list50862(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4652__auto__ = (function sablono$core$ordered_list50862_$_iter__50865(s__50866){
return (new cljs.core.LazySeq(null,(function (){
var s__50866__$1 = s__50866;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50866__$1);
if(temp__5753__auto__){
var s__50866__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50866__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50866__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50868 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50867 = (0);
while(true){
if((i__50867 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__50867);
cljs.core.chunk_append(b__50868,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__51451 = (i__50867 + (1));
i__50867 = G__51451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50868),sablono$core$ordered_list50862_$_iter__50865(cljs.core.chunk_rest(s__50866__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50868),null);
}
} else {
var x = cljs.core.first(s__50866__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list50862_$_iter__50865(cljs.core.rest(s__50866__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list50862);
/**
 * Create an image element.
 */
sablono.core.image50886 = (function sablono$core$image50886(var_args){
var G__50890 = arguments.length;
switch (G__50890) {
case 1:
return sablono.core.image50886.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image50886.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image50886.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image50886.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image50886.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image50886);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__50907_SHARP_,p2__50908_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50907_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__50908_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__50911_SHARP_,p2__50912_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50911_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__50912_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__50923 = arguments.length;
switch (G__50923) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4253__auto__ = value;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field50934 = (function sablono$core$color_field50934(var_args){
var G__50940 = arguments.length;
switch (G__50940) {
case 1:
return sablono.core.color_field50934.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field50934.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field50934.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__50721__auto__);
}));

(sablono.core.color_field50934.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.color_field50934.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field50934);

/**
 * Creates a date input field.
 */
sablono.core.date_field50951 = (function sablono$core$date_field50951(var_args){
var G__50959 = arguments.length;
switch (G__50959) {
case 1:
return sablono.core.date_field50951.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field50951.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field50951.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__50721__auto__);
}));

(sablono.core.date_field50951.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.date_field50951.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field50951);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field50977 = (function sablono$core$datetime_field50977(var_args){
var G__50979 = arguments.length;
switch (G__50979) {
case 1:
return sablono.core.datetime_field50977.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field50977.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field50977.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__50721__auto__);
}));

(sablono.core.datetime_field50977.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.datetime_field50977.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field50977);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field50980 = (function sablono$core$datetime_local_field50980(var_args){
var G__50982 = arguments.length;
switch (G__50982) {
case 1:
return sablono.core.datetime_local_field50980.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field50980.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field50980.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__50721__auto__);
}));

(sablono.core.datetime_local_field50980.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.datetime_local_field50980.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field50980);

/**
 * Creates a email input field.
 */
sablono.core.email_field51007 = (function sablono$core$email_field51007(var_args){
var G__51019 = arguments.length;
switch (G__51019) {
case 1:
return sablono.core.email_field51007.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field51007.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field51007.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__50721__auto__);
}));

(sablono.core.email_field51007.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.email_field51007.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field51007);

/**
 * Creates a file input field.
 */
sablono.core.file_field51026 = (function sablono$core$file_field51026(var_args){
var G__51032 = arguments.length;
switch (G__51032) {
case 1:
return sablono.core.file_field51026.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field51026.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field51026.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__50721__auto__);
}));

(sablono.core.file_field51026.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.file_field51026.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field51026);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field51042 = (function sablono$core$hidden_field51042(var_args){
var G__51048 = arguments.length;
switch (G__51048) {
case 1:
return sablono.core.hidden_field51042.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field51042.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field51042.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__50721__auto__);
}));

(sablono.core.hidden_field51042.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.hidden_field51042.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field51042);

/**
 * Creates a month input field.
 */
sablono.core.month_field51062 = (function sablono$core$month_field51062(var_args){
var G__51069 = arguments.length;
switch (G__51069) {
case 1:
return sablono.core.month_field51062.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field51062.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field51062.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__50721__auto__);
}));

(sablono.core.month_field51062.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.month_field51062.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field51062);

/**
 * Creates a number input field.
 */
sablono.core.number_field51080 = (function sablono$core$number_field51080(var_args){
var G__51083 = arguments.length;
switch (G__51083) {
case 1:
return sablono.core.number_field51080.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field51080.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field51080.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__50721__auto__);
}));

(sablono.core.number_field51080.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.number_field51080.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field51080);

/**
 * Creates a password input field.
 */
sablono.core.password_field51115 = (function sablono$core$password_field51115(var_args){
var G__51126 = arguments.length;
switch (G__51126) {
case 1:
return sablono.core.password_field51115.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field51115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field51115.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__50721__auto__);
}));

(sablono.core.password_field51115.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.password_field51115.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field51115);

/**
 * Creates a range input field.
 */
sablono.core.range_field51129 = (function sablono$core$range_field51129(var_args){
var G__51133 = arguments.length;
switch (G__51133) {
case 1:
return sablono.core.range_field51129.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field51129.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field51129.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__50721__auto__);
}));

(sablono.core.range_field51129.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.range_field51129.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field51129);

/**
 * Creates a search input field.
 */
sablono.core.search_field51135 = (function sablono$core$search_field51135(var_args){
var G__51138 = arguments.length;
switch (G__51138) {
case 1:
return sablono.core.search_field51135.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field51135.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field51135.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__50721__auto__);
}));

(sablono.core.search_field51135.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.search_field51135.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field51135);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field51146 = (function sablono$core$tel_field51146(var_args){
var G__51150 = arguments.length;
switch (G__51150) {
case 1:
return sablono.core.tel_field51146.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field51146.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field51146.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__50721__auto__);
}));

(sablono.core.tel_field51146.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.tel_field51146.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field51146);

/**
 * Creates a text input field.
 */
sablono.core.text_field51158 = (function sablono$core$text_field51158(var_args){
var G__51169 = arguments.length;
switch (G__51169) {
case 1:
return sablono.core.text_field51158.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field51158.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field51158.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__50721__auto__);
}));

(sablono.core.text_field51158.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.text_field51158.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field51158);

/**
 * Creates a time input field.
 */
sablono.core.time_field51177 = (function sablono$core$time_field51177(var_args){
var G__51187 = arguments.length;
switch (G__51187) {
case 1:
return sablono.core.time_field51177.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field51177.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field51177.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__50721__auto__);
}));

(sablono.core.time_field51177.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.time_field51177.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field51177);

/**
 * Creates a url input field.
 */
sablono.core.url_field51197 = (function sablono$core$url_field51197(var_args){
var G__51199 = arguments.length;
switch (G__51199) {
case 1:
return sablono.core.url_field51197.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field51197.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field51197.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__50721__auto__);
}));

(sablono.core.url_field51197.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.url_field51197.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field51197);

/**
 * Creates a week input field.
 */
sablono.core.week_field51200 = (function sablono$core$week_field51200(var_args){
var G__51202 = arguments.length;
switch (G__51202) {
case 1:
return sablono.core.week_field51200.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field51200.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field51200.cljs$core$IFn$_invoke$arity$1 = (function (name__50721__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__50721__auto__);
}));

(sablono.core.week_field51200.cljs$core$IFn$_invoke$arity$2 = (function (name__50721__auto__,value__50722__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__50721__auto__,value__50722__auto__);
}));

(sablono.core.week_field51200.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field51200);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box51211 = (function sablono$core$check_box51211(var_args){
var G__51220 = arguments.length;
switch (G__51220) {
case 1:
return sablono.core.check_box51211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box51211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box51211.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box51211.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box51211.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box51211.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box51211.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box51211);
/**
 * Creates a radio button.
 */
sablono.core.radio_button51232 = (function sablono$core$radio_button51232(var_args){
var G__51236 = arguments.length;
switch (G__51236) {
case 1:
return sablono.core.radio_button51232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button51232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button51232.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button51232.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button51232.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button51232.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button51232.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button51232);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options51253 = (function sablono$core$select_options51253(coll){
var iter__4652__auto__ = (function sablono$core$select_options51253_$_iter__51257(s__51258){
return (new cljs.core.LazySeq(null,(function (){
var s__51258__$1 = s__51258;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51258__$1);
if(temp__5753__auto__){
var s__51258__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51258__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51258__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51260 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51259 = (0);
while(true){
if((i__51259 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__51259);
cljs.core.chunk_append(b__51260,((cljs.core.sequential_QMARK_(x))?(function (){var vec__51263 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51263,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51263,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51263,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options51253.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options51253.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options51253.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__51583 = (i__51259 + (1));
i__51259 = G__51583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51260),sablono$core$select_options51253_$_iter__51257(cljs.core.chunk_rest(s__51258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51260),null);
}
} else {
var x = cljs.core.first(s__51258__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__51272 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51272,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51272,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51272,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options51253.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options51253.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options51253.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options51253_$_iter__51257(cljs.core.rest(s__51258__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options51253);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down51287 = (function sablono$core$drop_down51287(var_args){
var G__51293 = arguments.length;
switch (G__51293) {
case 2:
return sablono.core.drop_down51287.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down51287.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down51287.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down51287.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down51287.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down51287.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down51287);
/**
 * Creates a text area element.
 */
sablono.core.text_area51303 = (function sablono$core$text_area51303(var_args){
var G__51306 = arguments.length;
switch (G__51306) {
case 1:
return sablono.core.text_area51303.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area51303.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area51303.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area51303.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4253__auto__ = value;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area51303.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area51303);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label51314 = (function sablono$core$label51314(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label51314);
/**
 * Creates a submit button.
 */
sablono.core.submit_button51318 = (function sablono$core$submit_button51318(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button51318);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button51321 = (function sablono$core$reset_button51321(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button51321);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to51326 = (function sablono$core$form_to51326(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51591 = arguments.length;
var i__4865__auto___51592 = (0);
while(true){
if((i__4865__auto___51592 < len__4864__auto___51591)){
args__4870__auto__.push((arguments[i__4865__auto___51592]));

var G__51593 = (i__4865__auto___51592 + (1));
i__4865__auto___51592 = G__51593;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to51326.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sablono.core.form_to51326.cljs$core$IFn$_invoke$arity$variadic = (function (p__51336,body){
var vec__51338 = p__51336;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51338,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51338,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to51326.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to51326.cljs$lang$applyTo = (function (seq51328){
var G__51329 = cljs.core.first(seq51328);
var seq51328__$1 = cljs.core.next(seq51328);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51329,seq51328__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to51326);

//# sourceMappingURL=sablono.core.js.map
