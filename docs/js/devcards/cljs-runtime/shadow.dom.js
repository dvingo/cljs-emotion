goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_51953 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_51953(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51959 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_51959(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__50810 = coll;
var G__50811 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__50810,G__50811) : shadow.dom.lazy_native_coll_seq.call(null,G__50810,G__50811));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__50852 = arguments.length;
switch (G__50852) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__50860 = arguments.length;
switch (G__50860) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__50879 = arguments.length;
switch (G__50879) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__50897 = arguments.length;
switch (G__50897) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__50917 = arguments.length;
switch (G__50917) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__50933 = arguments.length;
switch (G__50933) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e50958){if((e50958 instanceof Object)){
var e = e50958;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50958;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__50968 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50969 = null;
var count__50970 = (0);
var i__50971 = (0);
while(true){
if((i__50971 < count__50970)){
var el = chunk__50969.cljs$core$IIndexed$_nth$arity$2(null,i__50971);
var handler_52032__$1 = ((function (seq__50968,chunk__50969,count__50970,i__50971,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50968,chunk__50969,count__50970,i__50971,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_52032__$1);


var G__52033 = seq__50968;
var G__52034 = chunk__50969;
var G__52035 = count__50970;
var G__52036 = (i__50971 + (1));
seq__50968 = G__52033;
chunk__50969 = G__52034;
count__50970 = G__52035;
i__50971 = G__52036;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50968);
if(temp__5753__auto__){
var seq__50968__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50968__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50968__$1);
var G__52037 = cljs.core.chunk_rest(seq__50968__$1);
var G__52038 = c__4679__auto__;
var G__52039 = cljs.core.count(c__4679__auto__);
var G__52040 = (0);
seq__50968 = G__52037;
chunk__50969 = G__52038;
count__50970 = G__52039;
i__50971 = G__52040;
continue;
} else {
var el = cljs.core.first(seq__50968__$1);
var handler_52042__$1 = ((function (seq__50968,chunk__50969,count__50970,i__50971,el,seq__50968__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50968,chunk__50969,count__50970,i__50971,el,seq__50968__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_52042__$1);


var G__52046 = cljs.core.next(seq__50968__$1);
var G__52047 = null;
var G__52048 = (0);
var G__52049 = (0);
seq__50968 = G__52046;
chunk__50969 = G__52047;
count__50970 = G__52048;
i__50971 = G__52049;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__51006 = arguments.length;
switch (G__51006) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__51034 = cljs.core.seq(events);
var chunk__51035 = null;
var count__51036 = (0);
var i__51037 = (0);
while(true){
if((i__51037 < count__51036)){
var vec__51052 = chunk__51035.cljs$core$IIndexed$_nth$arity$2(null,i__51037);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51052,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51052,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__52062 = seq__51034;
var G__52063 = chunk__51035;
var G__52064 = count__51036;
var G__52065 = (i__51037 + (1));
seq__51034 = G__52062;
chunk__51035 = G__52063;
count__51036 = G__52064;
i__51037 = G__52065;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51034);
if(temp__5753__auto__){
var seq__51034__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51034__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51034__$1);
var G__52066 = cljs.core.chunk_rest(seq__51034__$1);
var G__52067 = c__4679__auto__;
var G__52068 = cljs.core.count(c__4679__auto__);
var G__52069 = (0);
seq__51034 = G__52066;
chunk__51035 = G__52067;
count__51036 = G__52068;
i__51037 = G__52069;
continue;
} else {
var vec__51059 = cljs.core.first(seq__51034__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51059,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51059,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__52071 = cljs.core.next(seq__51034__$1);
var G__52072 = null;
var G__52073 = (0);
var G__52074 = (0);
seq__51034 = G__52071;
chunk__51035 = G__52072;
count__51036 = G__52073;
i__51037 = G__52074;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__51064 = cljs.core.seq(styles);
var chunk__51065 = null;
var count__51066 = (0);
var i__51067 = (0);
while(true){
if((i__51067 < count__51066)){
var vec__51077 = chunk__51065.cljs$core$IIndexed$_nth$arity$2(null,i__51067);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51077,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__52085 = seq__51064;
var G__52086 = chunk__51065;
var G__52087 = count__51066;
var G__52088 = (i__51067 + (1));
seq__51064 = G__52085;
chunk__51065 = G__52086;
count__51066 = G__52087;
i__51067 = G__52088;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51064);
if(temp__5753__auto__){
var seq__51064__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51064__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51064__$1);
var G__52089 = cljs.core.chunk_rest(seq__51064__$1);
var G__52090 = c__4679__auto__;
var G__52091 = cljs.core.count(c__4679__auto__);
var G__52092 = (0);
seq__51064 = G__52089;
chunk__51065 = G__52090;
count__51066 = G__52091;
i__51067 = G__52092;
continue;
} else {
var vec__51084 = cljs.core.first(seq__51064__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51084,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51084,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__52097 = cljs.core.next(seq__51064__$1);
var G__52098 = null;
var G__52099 = (0);
var G__52100 = (0);
seq__51064 = G__52097;
chunk__51065 = G__52098;
count__51066 = G__52099;
i__51067 = G__52100;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__51103_52102 = key;
var G__51103_52103__$1 = (((G__51103_52102 instanceof cljs.core.Keyword))?G__51103_52102.fqn:null);
switch (G__51103_52103__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_52114 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_52114,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_52114,"aria-");
}
})())){
el.setAttribute(ks_52114,value);
} else {
(el[ks_52114] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__51140){
var map__51141 = p__51140;
var map__51141__$1 = cljs.core.__destructure_map(map__51141);
var props = map__51141__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51141__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__51142 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51142,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51142,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51142,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__51145 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__51145,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__51145;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__51149 = arguments.length;
switch (G__51149) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__51165){
var vec__51166 = p__51165;
var seq__51167 = cljs.core.seq(vec__51166);
var first__51168 = cljs.core.first(seq__51167);
var seq__51167__$1 = cljs.core.next(seq__51167);
var nn = first__51168;
var first__51168__$1 = cljs.core.first(seq__51167__$1);
var seq__51167__$2 = cljs.core.next(seq__51167__$1);
var np = first__51168__$1;
var nc = seq__51167__$2;
var node = vec__51166;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51172 = nn;
var G__51173 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51172,G__51173) : create_fn.call(null,G__51172,G__51173));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51174 = nn;
var G__51175 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51174,G__51175) : create_fn.call(null,G__51174,G__51175));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__51178 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51178,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51178,(1),null);
var seq__51182_52177 = cljs.core.seq(node_children);
var chunk__51183_52178 = null;
var count__51184_52179 = (0);
var i__51185_52180 = (0);
while(true){
if((i__51185_52180 < count__51184_52179)){
var child_struct_52182 = chunk__51183_52178.cljs$core$IIndexed$_nth$arity$2(null,i__51185_52180);
var children_52183 = shadow.dom.dom_node(child_struct_52182);
if(cljs.core.seq_QMARK_(children_52183)){
var seq__51222_52184 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52183));
var chunk__51224_52185 = null;
var count__51225_52186 = (0);
var i__51226_52187 = (0);
while(true){
if((i__51226_52187 < count__51225_52186)){
var child_52193 = chunk__51224_52185.cljs$core$IIndexed$_nth$arity$2(null,i__51226_52187);
if(cljs.core.truth_(child_52193)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52193);


var G__52194 = seq__51222_52184;
var G__52195 = chunk__51224_52185;
var G__52196 = count__51225_52186;
var G__52197 = (i__51226_52187 + (1));
seq__51222_52184 = G__52194;
chunk__51224_52185 = G__52195;
count__51225_52186 = G__52196;
i__51226_52187 = G__52197;
continue;
} else {
var G__52198 = seq__51222_52184;
var G__52199 = chunk__51224_52185;
var G__52200 = count__51225_52186;
var G__52201 = (i__51226_52187 + (1));
seq__51222_52184 = G__52198;
chunk__51224_52185 = G__52199;
count__51225_52186 = G__52200;
i__51226_52187 = G__52201;
continue;
}
} else {
var temp__5753__auto___52203 = cljs.core.seq(seq__51222_52184);
if(temp__5753__auto___52203){
var seq__51222_52204__$1 = temp__5753__auto___52203;
if(cljs.core.chunked_seq_QMARK_(seq__51222_52204__$1)){
var c__4679__auto___52205 = cljs.core.chunk_first(seq__51222_52204__$1);
var G__52206 = cljs.core.chunk_rest(seq__51222_52204__$1);
var G__52207 = c__4679__auto___52205;
var G__52208 = cljs.core.count(c__4679__auto___52205);
var G__52209 = (0);
seq__51222_52184 = G__52206;
chunk__51224_52185 = G__52207;
count__51225_52186 = G__52208;
i__51226_52187 = G__52209;
continue;
} else {
var child_52210 = cljs.core.first(seq__51222_52204__$1);
if(cljs.core.truth_(child_52210)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52210);


var G__52216 = cljs.core.next(seq__51222_52204__$1);
var G__52217 = null;
var G__52218 = (0);
var G__52219 = (0);
seq__51222_52184 = G__52216;
chunk__51224_52185 = G__52217;
count__51225_52186 = G__52218;
i__51226_52187 = G__52219;
continue;
} else {
var G__52220 = cljs.core.next(seq__51222_52204__$1);
var G__52221 = null;
var G__52222 = (0);
var G__52223 = (0);
seq__51222_52184 = G__52220;
chunk__51224_52185 = G__52221;
count__51225_52186 = G__52222;
i__51226_52187 = G__52223;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52183);
}


var G__52225 = seq__51182_52177;
var G__52226 = chunk__51183_52178;
var G__52227 = count__51184_52179;
var G__52228 = (i__51185_52180 + (1));
seq__51182_52177 = G__52225;
chunk__51183_52178 = G__52226;
count__51184_52179 = G__52227;
i__51185_52180 = G__52228;
continue;
} else {
var temp__5753__auto___52229 = cljs.core.seq(seq__51182_52177);
if(temp__5753__auto___52229){
var seq__51182_52230__$1 = temp__5753__auto___52229;
if(cljs.core.chunked_seq_QMARK_(seq__51182_52230__$1)){
var c__4679__auto___52231 = cljs.core.chunk_first(seq__51182_52230__$1);
var G__52232 = cljs.core.chunk_rest(seq__51182_52230__$1);
var G__52233 = c__4679__auto___52231;
var G__52234 = cljs.core.count(c__4679__auto___52231);
var G__52235 = (0);
seq__51182_52177 = G__52232;
chunk__51183_52178 = G__52233;
count__51184_52179 = G__52234;
i__51185_52180 = G__52235;
continue;
} else {
var child_struct_52236 = cljs.core.first(seq__51182_52230__$1);
var children_52237 = shadow.dom.dom_node(child_struct_52236);
if(cljs.core.seq_QMARK_(children_52237)){
var seq__51243_52238 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52237));
var chunk__51245_52239 = null;
var count__51246_52240 = (0);
var i__51247_52241 = (0);
while(true){
if((i__51247_52241 < count__51246_52240)){
var child_52243 = chunk__51245_52239.cljs$core$IIndexed$_nth$arity$2(null,i__51247_52241);
if(cljs.core.truth_(child_52243)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52243);


var G__52245 = seq__51243_52238;
var G__52246 = chunk__51245_52239;
var G__52247 = count__51246_52240;
var G__52248 = (i__51247_52241 + (1));
seq__51243_52238 = G__52245;
chunk__51245_52239 = G__52246;
count__51246_52240 = G__52247;
i__51247_52241 = G__52248;
continue;
} else {
var G__52249 = seq__51243_52238;
var G__52250 = chunk__51245_52239;
var G__52251 = count__51246_52240;
var G__52252 = (i__51247_52241 + (1));
seq__51243_52238 = G__52249;
chunk__51245_52239 = G__52250;
count__51246_52240 = G__52251;
i__51247_52241 = G__52252;
continue;
}
} else {
var temp__5753__auto___52254__$1 = cljs.core.seq(seq__51243_52238);
if(temp__5753__auto___52254__$1){
var seq__51243_52256__$1 = temp__5753__auto___52254__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51243_52256__$1)){
var c__4679__auto___52258 = cljs.core.chunk_first(seq__51243_52256__$1);
var G__52262 = cljs.core.chunk_rest(seq__51243_52256__$1);
var G__52263 = c__4679__auto___52258;
var G__52264 = cljs.core.count(c__4679__auto___52258);
var G__52265 = (0);
seq__51243_52238 = G__52262;
chunk__51245_52239 = G__52263;
count__51246_52240 = G__52264;
i__51247_52241 = G__52265;
continue;
} else {
var child_52266 = cljs.core.first(seq__51243_52256__$1);
if(cljs.core.truth_(child_52266)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52266);


var G__52268 = cljs.core.next(seq__51243_52256__$1);
var G__52269 = null;
var G__52270 = (0);
var G__52271 = (0);
seq__51243_52238 = G__52268;
chunk__51245_52239 = G__52269;
count__51246_52240 = G__52270;
i__51247_52241 = G__52271;
continue;
} else {
var G__52273 = cljs.core.next(seq__51243_52256__$1);
var G__52274 = null;
var G__52275 = (0);
var G__52276 = (0);
seq__51243_52238 = G__52273;
chunk__51245_52239 = G__52274;
count__51246_52240 = G__52275;
i__51247_52241 = G__52276;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52237);
}


var G__52277 = cljs.core.next(seq__51182_52230__$1);
var G__52278 = null;
var G__52279 = (0);
var G__52280 = (0);
seq__51182_52177 = G__52277;
chunk__51183_52178 = G__52278;
count__51184_52179 = G__52279;
i__51185_52180 = G__52280;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__51276 = cljs.core.seq(node);
var chunk__51277 = null;
var count__51278 = (0);
var i__51279 = (0);
while(true){
if((i__51279 < count__51278)){
var n = chunk__51277.cljs$core$IIndexed$_nth$arity$2(null,i__51279);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52288 = seq__51276;
var G__52289 = chunk__51277;
var G__52290 = count__51278;
var G__52291 = (i__51279 + (1));
seq__51276 = G__52288;
chunk__51277 = G__52289;
count__51278 = G__52290;
i__51279 = G__52291;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51276);
if(temp__5753__auto__){
var seq__51276__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51276__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51276__$1);
var G__52294 = cljs.core.chunk_rest(seq__51276__$1);
var G__52295 = c__4679__auto__;
var G__52296 = cljs.core.count(c__4679__auto__);
var G__52297 = (0);
seq__51276 = G__52294;
chunk__51277 = G__52295;
count__51278 = G__52296;
i__51279 = G__52297;
continue;
} else {
var n = cljs.core.first(seq__51276__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52299 = cljs.core.next(seq__51276__$1);
var G__52300 = null;
var G__52301 = (0);
var G__52302 = (0);
seq__51276 = G__52299;
chunk__51277 = G__52300;
count__51278 = G__52301;
i__51279 = G__52302;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__51302 = arguments.length;
switch (G__51302) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__51308 = arguments.length;
switch (G__51308) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__51320 = arguments.length;
switch (G__51320) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52350 = arguments.length;
var i__4865__auto___52351 = (0);
while(true){
if((i__4865__auto___52351 < len__4864__auto___52350)){
args__4870__auto__.push((arguments[i__4865__auto___52351]));

var G__52352 = (i__4865__auto___52351 + (1));
i__4865__auto___52351 = G__52352;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__51344_52356 = cljs.core.seq(nodes);
var chunk__51345_52357 = null;
var count__51346_52358 = (0);
var i__51347_52359 = (0);
while(true){
if((i__51347_52359 < count__51346_52358)){
var node_52360 = chunk__51345_52357.cljs$core$IIndexed$_nth$arity$2(null,i__51347_52359);
fragment.appendChild(shadow.dom._to_dom(node_52360));


var G__52362 = seq__51344_52356;
var G__52363 = chunk__51345_52357;
var G__52364 = count__51346_52358;
var G__52365 = (i__51347_52359 + (1));
seq__51344_52356 = G__52362;
chunk__51345_52357 = G__52363;
count__51346_52358 = G__52364;
i__51347_52359 = G__52365;
continue;
} else {
var temp__5753__auto___52366 = cljs.core.seq(seq__51344_52356);
if(temp__5753__auto___52366){
var seq__51344_52367__$1 = temp__5753__auto___52366;
if(cljs.core.chunked_seq_QMARK_(seq__51344_52367__$1)){
var c__4679__auto___52368 = cljs.core.chunk_first(seq__51344_52367__$1);
var G__52369 = cljs.core.chunk_rest(seq__51344_52367__$1);
var G__52370 = c__4679__auto___52368;
var G__52371 = cljs.core.count(c__4679__auto___52368);
var G__52372 = (0);
seq__51344_52356 = G__52369;
chunk__51345_52357 = G__52370;
count__51346_52358 = G__52371;
i__51347_52359 = G__52372;
continue;
} else {
var node_52373 = cljs.core.first(seq__51344_52367__$1);
fragment.appendChild(shadow.dom._to_dom(node_52373));


var G__52374 = cljs.core.next(seq__51344_52367__$1);
var G__52375 = null;
var G__52376 = (0);
var G__52377 = (0);
seq__51344_52356 = G__52374;
chunk__51345_52357 = G__52375;
count__51346_52358 = G__52376;
i__51347_52359 = G__52377;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq51341){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51341));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__51356_52380 = cljs.core.seq(scripts);
var chunk__51357_52381 = null;
var count__51358_52382 = (0);
var i__51359_52383 = (0);
while(true){
if((i__51359_52383 < count__51358_52382)){
var vec__51369_52384 = chunk__51357_52381.cljs$core$IIndexed$_nth$arity$2(null,i__51359_52383);
var script_tag_52385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51369_52384,(0),null);
var script_body_52386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51369_52384,(1),null);
eval(script_body_52386);


var G__52387 = seq__51356_52380;
var G__52388 = chunk__51357_52381;
var G__52389 = count__51358_52382;
var G__52390 = (i__51359_52383 + (1));
seq__51356_52380 = G__52387;
chunk__51357_52381 = G__52388;
count__51358_52382 = G__52389;
i__51359_52383 = G__52390;
continue;
} else {
var temp__5753__auto___52392 = cljs.core.seq(seq__51356_52380);
if(temp__5753__auto___52392){
var seq__51356_52394__$1 = temp__5753__auto___52392;
if(cljs.core.chunked_seq_QMARK_(seq__51356_52394__$1)){
var c__4679__auto___52395 = cljs.core.chunk_first(seq__51356_52394__$1);
var G__52396 = cljs.core.chunk_rest(seq__51356_52394__$1);
var G__52397 = c__4679__auto___52395;
var G__52398 = cljs.core.count(c__4679__auto___52395);
var G__52399 = (0);
seq__51356_52380 = G__52396;
chunk__51357_52381 = G__52397;
count__51358_52382 = G__52398;
i__51359_52383 = G__52399;
continue;
} else {
var vec__51374_52402 = cljs.core.first(seq__51356_52394__$1);
var script_tag_52403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51374_52402,(0),null);
var script_body_52404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51374_52402,(1),null);
eval(script_body_52404);


var G__52407 = cljs.core.next(seq__51356_52394__$1);
var G__52408 = null;
var G__52409 = (0);
var G__52410 = (0);
seq__51356_52380 = G__52407;
chunk__51357_52381 = G__52408;
count__51358_52382 = G__52409;
i__51359_52383 = G__52410;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__51381){
var vec__51382 = p__51381;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51382,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51382,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__51402 = arguments.length;
switch (G__51402) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__51434 = cljs.core.seq(style_keys);
var chunk__51436 = null;
var count__51437 = (0);
var i__51438 = (0);
while(true){
if((i__51438 < count__51437)){
var it = chunk__51436.cljs$core$IIndexed$_nth$arity$2(null,i__51438);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52438 = seq__51434;
var G__52439 = chunk__51436;
var G__52440 = count__51437;
var G__52441 = (i__51438 + (1));
seq__51434 = G__52438;
chunk__51436 = G__52439;
count__51437 = G__52440;
i__51438 = G__52441;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51434);
if(temp__5753__auto__){
var seq__51434__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51434__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51434__$1);
var G__52446 = cljs.core.chunk_rest(seq__51434__$1);
var G__52447 = c__4679__auto__;
var G__52448 = cljs.core.count(c__4679__auto__);
var G__52449 = (0);
seq__51434 = G__52446;
chunk__51436 = G__52447;
count__51437 = G__52448;
i__51438 = G__52449;
continue;
} else {
var it = cljs.core.first(seq__51434__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52450 = cljs.core.next(seq__51434__$1);
var G__52451 = null;
var G__52452 = (0);
var G__52453 = (0);
seq__51434 = G__52450;
chunk__51436 = G__52451;
count__51437 = G__52452;
i__51438 = G__52453;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k51454,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__51473 = k51454;
var G__51473__$1 = (((G__51473 instanceof cljs.core.Keyword))?G__51473.fqn:null);
switch (G__51473__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51454,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__51475){
var vec__51482 = p__51475;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51482,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51482,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51453){
var self__ = this;
var G__51453__$1 = this;
return (new cljs.core.RecordIter((0),G__51453__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51456,other51457){
var self__ = this;
var this51456__$1 = this;
return (((!((other51457 == null)))) && ((((this51456__$1.constructor === other51457.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51456__$1.x,other51457.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51456__$1.y,other51457.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51456__$1.__extmap,other51457.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k51454){
var self__ = this;
var this__4509__auto____$1 = this;
var G__51518 = k51454;
var G__51518__$1 = (((G__51518 instanceof cljs.core.Keyword))?G__51518.fqn:null);
switch (G__51518__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51454);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__51453){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__51520 = cljs.core.keyword_identical_QMARK_;
var expr__51521 = k__4511__auto__;
if(cljs.core.truth_((pred__51520.cljs$core$IFn$_invoke$arity$2 ? pred__51520.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__51521) : pred__51520.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__51521)))){
return (new shadow.dom.Coordinate(G__51453,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51520.cljs$core$IFn$_invoke$arity$2 ? pred__51520.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__51521) : pred__51520.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__51521)))){
return (new shadow.dom.Coordinate(self__.x,G__51453,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__51453),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__51453){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__51453,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__51465){
var extmap__4542__auto__ = (function (){var G__51550 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51465,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__51465)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51550);
} else {
return G__51550;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__51465),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__51465),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k51562,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__51572 = k51562;
var G__51572__$1 = (((G__51572 instanceof cljs.core.Keyword))?G__51572.fqn:null);
switch (G__51572__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51562,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__51577){
var vec__51578 = p__51577;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51578,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51578,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51561){
var self__ = this;
var G__51561__$1 = this;
return (new cljs.core.RecordIter((0),G__51561__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51564,other51565){
var self__ = this;
var this51564__$1 = this;
return (((!((other51565 == null)))) && ((((this51564__$1.constructor === other51565.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51564__$1.w,other51565.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51564__$1.h,other51565.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51564__$1.__extmap,other51565.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k51562){
var self__ = this;
var this__4509__auto____$1 = this;
var G__51594 = k51562;
var G__51594__$1 = (((G__51594 instanceof cljs.core.Keyword))?G__51594.fqn:null);
switch (G__51594__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51562);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__51561){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__51595 = cljs.core.keyword_identical_QMARK_;
var expr__51596 = k__4511__auto__;
if(cljs.core.truth_((pred__51595.cljs$core$IFn$_invoke$arity$2 ? pred__51595.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__51596) : pred__51595.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__51596)))){
return (new shadow.dom.Size(G__51561,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51595.cljs$core$IFn$_invoke$arity$2 ? pred__51595.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__51596) : pred__51595.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__51596)))){
return (new shadow.dom.Size(self__.w,G__51561,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__51561),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__51561){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__51561,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__51566){
var extmap__4542__auto__ = (function (){var G__51613 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51566,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__51566)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51613);
} else {
return G__51613;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__51566),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__51566),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__52525 = (i + (1));
var G__52526 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__52525;
ret = G__52526;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51639){
var vec__51640 = p__51639;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51640,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51640,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__51646 = arguments.length;
switch (G__51646) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__52540 = ps;
var G__52541 = (i + (1));
el__$1 = G__52540;
i = G__52541;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__51682 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51682,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51682,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51682,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__51685_52553 = cljs.core.seq(props);
var chunk__51686_52554 = null;
var count__51687_52555 = (0);
var i__51688_52556 = (0);
while(true){
if((i__51688_52556 < count__51687_52555)){
var vec__51697_52557 = chunk__51686_52554.cljs$core$IIndexed$_nth$arity$2(null,i__51688_52556);
var k_52558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51697_52557,(0),null);
var v_52559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51697_52557,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_52558);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52558),v_52559);


var G__52564 = seq__51685_52553;
var G__52565 = chunk__51686_52554;
var G__52566 = count__51687_52555;
var G__52567 = (i__51688_52556 + (1));
seq__51685_52553 = G__52564;
chunk__51686_52554 = G__52565;
count__51687_52555 = G__52566;
i__51688_52556 = G__52567;
continue;
} else {
var temp__5753__auto___52568 = cljs.core.seq(seq__51685_52553);
if(temp__5753__auto___52568){
var seq__51685_52570__$1 = temp__5753__auto___52568;
if(cljs.core.chunked_seq_QMARK_(seq__51685_52570__$1)){
var c__4679__auto___52571 = cljs.core.chunk_first(seq__51685_52570__$1);
var G__52572 = cljs.core.chunk_rest(seq__51685_52570__$1);
var G__52573 = c__4679__auto___52571;
var G__52574 = cljs.core.count(c__4679__auto___52571);
var G__52575 = (0);
seq__51685_52553 = G__52572;
chunk__51686_52554 = G__52573;
count__51687_52555 = G__52574;
i__51688_52556 = G__52575;
continue;
} else {
var vec__51701_52577 = cljs.core.first(seq__51685_52570__$1);
var k_52578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51701_52577,(0),null);
var v_52579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51701_52577,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_52578);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52578),v_52579);


var G__52580 = cljs.core.next(seq__51685_52570__$1);
var G__52581 = null;
var G__52582 = (0);
var G__52583 = (0);
seq__51685_52553 = G__52580;
chunk__51686_52554 = G__52581;
count__51687_52555 = G__52582;
i__51688_52556 = G__52583;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__51706 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51706,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51706,(1),null);
var seq__51712_52586 = cljs.core.seq(node_children);
var chunk__51714_52587 = null;
var count__51715_52588 = (0);
var i__51716_52589 = (0);
while(true){
if((i__51716_52589 < count__51715_52588)){
var child_struct_52590 = chunk__51714_52587.cljs$core$IIndexed$_nth$arity$2(null,i__51716_52589);
if((!((child_struct_52590 == null)))){
if(typeof child_struct_52590 === 'string'){
var text_52592 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52592),child_struct_52590].join(''));
} else {
var children_52594 = shadow.dom.svg_node(child_struct_52590);
if(cljs.core.seq_QMARK_(children_52594)){
var seq__51764_52596 = cljs.core.seq(children_52594);
var chunk__51766_52597 = null;
var count__51767_52598 = (0);
var i__51768_52599 = (0);
while(true){
if((i__51768_52599 < count__51767_52598)){
var child_52600 = chunk__51766_52597.cljs$core$IIndexed$_nth$arity$2(null,i__51768_52599);
if(cljs.core.truth_(child_52600)){
node.appendChild(child_52600);


var G__52603 = seq__51764_52596;
var G__52604 = chunk__51766_52597;
var G__52605 = count__51767_52598;
var G__52606 = (i__51768_52599 + (1));
seq__51764_52596 = G__52603;
chunk__51766_52597 = G__52604;
count__51767_52598 = G__52605;
i__51768_52599 = G__52606;
continue;
} else {
var G__52607 = seq__51764_52596;
var G__52608 = chunk__51766_52597;
var G__52609 = count__51767_52598;
var G__52610 = (i__51768_52599 + (1));
seq__51764_52596 = G__52607;
chunk__51766_52597 = G__52608;
count__51767_52598 = G__52609;
i__51768_52599 = G__52610;
continue;
}
} else {
var temp__5753__auto___52612 = cljs.core.seq(seq__51764_52596);
if(temp__5753__auto___52612){
var seq__51764_52613__$1 = temp__5753__auto___52612;
if(cljs.core.chunked_seq_QMARK_(seq__51764_52613__$1)){
var c__4679__auto___52614 = cljs.core.chunk_first(seq__51764_52613__$1);
var G__52615 = cljs.core.chunk_rest(seq__51764_52613__$1);
var G__52616 = c__4679__auto___52614;
var G__52617 = cljs.core.count(c__4679__auto___52614);
var G__52618 = (0);
seq__51764_52596 = G__52615;
chunk__51766_52597 = G__52616;
count__51767_52598 = G__52617;
i__51768_52599 = G__52618;
continue;
} else {
var child_52619 = cljs.core.first(seq__51764_52613__$1);
if(cljs.core.truth_(child_52619)){
node.appendChild(child_52619);


var G__52620 = cljs.core.next(seq__51764_52613__$1);
var G__52621 = null;
var G__52622 = (0);
var G__52623 = (0);
seq__51764_52596 = G__52620;
chunk__51766_52597 = G__52621;
count__51767_52598 = G__52622;
i__51768_52599 = G__52623;
continue;
} else {
var G__52625 = cljs.core.next(seq__51764_52613__$1);
var G__52626 = null;
var G__52627 = (0);
var G__52628 = (0);
seq__51764_52596 = G__52625;
chunk__51766_52597 = G__52626;
count__51767_52598 = G__52627;
i__51768_52599 = G__52628;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52594);
}
}


var G__52629 = seq__51712_52586;
var G__52630 = chunk__51714_52587;
var G__52631 = count__51715_52588;
var G__52632 = (i__51716_52589 + (1));
seq__51712_52586 = G__52629;
chunk__51714_52587 = G__52630;
count__51715_52588 = G__52631;
i__51716_52589 = G__52632;
continue;
} else {
var G__52633 = seq__51712_52586;
var G__52634 = chunk__51714_52587;
var G__52635 = count__51715_52588;
var G__52636 = (i__51716_52589 + (1));
seq__51712_52586 = G__52633;
chunk__51714_52587 = G__52634;
count__51715_52588 = G__52635;
i__51716_52589 = G__52636;
continue;
}
} else {
var temp__5753__auto___52637 = cljs.core.seq(seq__51712_52586);
if(temp__5753__auto___52637){
var seq__51712_52638__$1 = temp__5753__auto___52637;
if(cljs.core.chunked_seq_QMARK_(seq__51712_52638__$1)){
var c__4679__auto___52642 = cljs.core.chunk_first(seq__51712_52638__$1);
var G__52643 = cljs.core.chunk_rest(seq__51712_52638__$1);
var G__52644 = c__4679__auto___52642;
var G__52645 = cljs.core.count(c__4679__auto___52642);
var G__52646 = (0);
seq__51712_52586 = G__52643;
chunk__51714_52587 = G__52644;
count__51715_52588 = G__52645;
i__51716_52589 = G__52646;
continue;
} else {
var child_struct_52647 = cljs.core.first(seq__51712_52638__$1);
if((!((child_struct_52647 == null)))){
if(typeof child_struct_52647 === 'string'){
var text_52654 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52654),child_struct_52647].join(''));
} else {
var children_52655 = shadow.dom.svg_node(child_struct_52647);
if(cljs.core.seq_QMARK_(children_52655)){
var seq__51790_52656 = cljs.core.seq(children_52655);
var chunk__51793_52657 = null;
var count__51794_52658 = (0);
var i__51795_52659 = (0);
while(true){
if((i__51795_52659 < count__51794_52658)){
var child_52660 = chunk__51793_52657.cljs$core$IIndexed$_nth$arity$2(null,i__51795_52659);
if(cljs.core.truth_(child_52660)){
node.appendChild(child_52660);


var G__52662 = seq__51790_52656;
var G__52663 = chunk__51793_52657;
var G__52664 = count__51794_52658;
var G__52665 = (i__51795_52659 + (1));
seq__51790_52656 = G__52662;
chunk__51793_52657 = G__52663;
count__51794_52658 = G__52664;
i__51795_52659 = G__52665;
continue;
} else {
var G__52666 = seq__51790_52656;
var G__52667 = chunk__51793_52657;
var G__52668 = count__51794_52658;
var G__52669 = (i__51795_52659 + (1));
seq__51790_52656 = G__52666;
chunk__51793_52657 = G__52667;
count__51794_52658 = G__52668;
i__51795_52659 = G__52669;
continue;
}
} else {
var temp__5753__auto___52670__$1 = cljs.core.seq(seq__51790_52656);
if(temp__5753__auto___52670__$1){
var seq__51790_52671__$1 = temp__5753__auto___52670__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51790_52671__$1)){
var c__4679__auto___52672 = cljs.core.chunk_first(seq__51790_52671__$1);
var G__52673 = cljs.core.chunk_rest(seq__51790_52671__$1);
var G__52674 = c__4679__auto___52672;
var G__52675 = cljs.core.count(c__4679__auto___52672);
var G__52676 = (0);
seq__51790_52656 = G__52673;
chunk__51793_52657 = G__52674;
count__51794_52658 = G__52675;
i__51795_52659 = G__52676;
continue;
} else {
var child_52679 = cljs.core.first(seq__51790_52671__$1);
if(cljs.core.truth_(child_52679)){
node.appendChild(child_52679);


var G__52682 = cljs.core.next(seq__51790_52671__$1);
var G__52683 = null;
var G__52684 = (0);
var G__52685 = (0);
seq__51790_52656 = G__52682;
chunk__51793_52657 = G__52683;
count__51794_52658 = G__52684;
i__51795_52659 = G__52685;
continue;
} else {
var G__52687 = cljs.core.next(seq__51790_52671__$1);
var G__52688 = null;
var G__52689 = (0);
var G__52690 = (0);
seq__51790_52656 = G__52687;
chunk__51793_52657 = G__52688;
count__51794_52658 = G__52689;
i__51795_52659 = G__52690;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52655);
}
}


var G__52696 = cljs.core.next(seq__51712_52638__$1);
var G__52697 = null;
var G__52698 = (0);
var G__52699 = (0);
seq__51712_52586 = G__52696;
chunk__51714_52587 = G__52697;
count__51715_52588 = G__52698;
i__51716_52589 = G__52699;
continue;
} else {
var G__52700 = cljs.core.next(seq__51712_52638__$1);
var G__52701 = null;
var G__52702 = (0);
var G__52703 = (0);
seq__51712_52586 = G__52700;
chunk__51714_52587 = G__52701;
count__51715_52588 = G__52702;
i__51716_52589 = G__52703;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52707 = arguments.length;
var i__4865__auto___52708 = (0);
while(true){
if((i__4865__auto___52708 < len__4864__auto___52707)){
args__4870__auto__.push((arguments[i__4865__auto___52708]));

var G__52709 = (i__4865__auto___52708 + (1));
i__4865__auto___52708 = G__52709;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq51812){
var G__51813 = cljs.core.first(seq51812);
var seq51812__$1 = cljs.core.next(seq51812);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51813,seq51812__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__51834 = arguments.length;
switch (G__51834) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__45178__auto___52719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_51854){
var state_val_51855 = (state_51854[(1)]);
if((state_val_51855 === (1))){
var state_51854__$1 = state_51854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51854__$1,(2),once_or_cleanup);
} else {
if((state_val_51855 === (2))){
var inst_51851 = (state_51854[(2)]);
var inst_51852 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51854__$1 = (function (){var statearr_51858 = state_51854;
(statearr_51858[(7)] = inst_51851);

return statearr_51858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51854__$1,inst_51852);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45093__auto__ = null;
var shadow$dom$state_machine__45093__auto____0 = (function (){
var statearr_51861 = [null,null,null,null,null,null,null,null];
(statearr_51861[(0)] = shadow$dom$state_machine__45093__auto__);

(statearr_51861[(1)] = (1));

return statearr_51861;
});
var shadow$dom$state_machine__45093__auto____1 = (function (state_51854){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_51854);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e51862){var ex__45096__auto__ = e51862;
var statearr_51865_52727 = state_51854;
(statearr_51865_52727[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_51854[(4)]))){
var statearr_51866_52728 = state_51854;
(statearr_51866_52728[(1)] = cljs.core.first((state_51854[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52730 = state_51854;
state_51854 = G__52730;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
shadow$dom$state_machine__45093__auto__ = function(state_51854){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45093__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45093__auto____1.call(this,state_51854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45093__auto____0;
shadow$dom$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45093__auto____1;
return shadow$dom$state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_51871 = f__45179__auto__();
(statearr_51871[(6)] = c__45178__auto___52719);

return statearr_51871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
