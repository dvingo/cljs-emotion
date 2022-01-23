goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__51584,p__51585){
var map__51586 = p__51584;
var map__51586__$1 = cljs.core.__destructure_map(map__51586);
var svc = map__51586__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51586__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51586__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51586__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51587 = p__51585;
var map__51587__$1 = cljs.core.__destructure_map(map__51587);
var msg = map__51587__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51587__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51587__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51587__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51587__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__51602,p__51603){
var map__51604 = p__51602;
var map__51604__$1 = cljs.core.__destructure_map(map__51604);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51604__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__51605 = p__51603;
var map__51605__$1 = cljs.core.__destructure_map(map__51605);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51605__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__51609,p__51610){
var map__51611 = p__51609;
var map__51611__$1 = cljs.core.__destructure_map(map__51611);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51611__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51611__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51612 = p__51610;
var map__51612__$1 = cljs.core.__destructure_map(map__51612);
var msg = map__51612__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51612__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__51621,tid){
var map__51622 = p__51621;
var map__51622__$1 = cljs.core.__destructure_map(map__51622);
var svc = map__51622__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51622__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__51627 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__51628 = null;
var count__51629 = (0);
var i__51630 = (0);
while(true){
if((i__51630 < count__51629)){
var vec__51661 = chunk__51628.cljs$core$IIndexed$_nth$arity$2(null,i__51630);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51661,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51661,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51748 = seq__51627;
var G__51749 = chunk__51628;
var G__51750 = count__51629;
var G__51751 = (i__51630 + (1));
seq__51627 = G__51748;
chunk__51628 = G__51749;
count__51629 = G__51750;
i__51630 = G__51751;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51627);
if(temp__5753__auto__){
var seq__51627__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51627__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51627__$1);
var G__51752 = cljs.core.chunk_rest(seq__51627__$1);
var G__51753 = c__4679__auto__;
var G__51754 = cljs.core.count(c__4679__auto__);
var G__51755 = (0);
seq__51627 = G__51752;
chunk__51628 = G__51753;
count__51629 = G__51754;
i__51630 = G__51755;
continue;
} else {
var vec__51669 = cljs.core.first(seq__51627__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51669,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51669,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51759 = cljs.core.next(seq__51627__$1);
var G__51760 = null;
var G__51761 = (0);
var G__51762 = (0);
seq__51627 = G__51759;
chunk__51628 = G__51760;
count__51629 = G__51761;
i__51630 = G__51762;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__51623_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__51623_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__51624_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__51624_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__51625_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__51625_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__51626_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__51626_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__51680){
var map__51681 = p__51680;
var map__51681__$1 = cljs.core.__destructure_map(map__51681);
var svc = map__51681__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51681__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51681__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
