goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__45847,res){
var map__45850 = p__45847;
var map__45850__$1 = cljs.core.__destructure_map(map__45850);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45850__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45850__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__45851 = res;
var G__45851__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45851,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__45851);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45851__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__45851__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__45859 = arguments.length;
switch (G__45859) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__45870,msg,handlers,timeout_after_ms){
var map__45871 = p__45870;
var map__45871__$1 = cljs.core.__destructure_map(map__45871);
var runtime = map__45871__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45871__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46057 = arguments.length;
var i__4865__auto___46058 = (0);
while(true){
if((i__4865__auto___46058 < len__4864__auto___46057)){
args__4870__auto__.push((arguments[i__4865__auto___46058]));

var G__46059 = (i__4865__auto___46058 + (1));
i__4865__auto___46058 = G__46059;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__45888,ev,args){
var map__45889 = p__45888;
var map__45889__$1 = cljs.core.__destructure_map(map__45889);
var runtime = map__45889__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45889__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__45890 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45893 = null;
var count__45894 = (0);
var i__45895 = (0);
while(true){
if((i__45895 < count__45894)){
var ext = chunk__45893.cljs$core$IIndexed$_nth$arity$2(null,i__45895);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46066 = seq__45890;
var G__46067 = chunk__45893;
var G__46068 = count__45894;
var G__46069 = (i__45895 + (1));
seq__45890 = G__46066;
chunk__45893 = G__46067;
count__45894 = G__46068;
i__45895 = G__46069;
continue;
} else {
var G__46070 = seq__45890;
var G__46071 = chunk__45893;
var G__46072 = count__45894;
var G__46073 = (i__45895 + (1));
seq__45890 = G__46070;
chunk__45893 = G__46071;
count__45894 = G__46072;
i__45895 = G__46073;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45890);
if(temp__5753__auto__){
var seq__45890__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45890__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45890__$1);
var G__46074 = cljs.core.chunk_rest(seq__45890__$1);
var G__46075 = c__4679__auto__;
var G__46076 = cljs.core.count(c__4679__auto__);
var G__46077 = (0);
seq__45890 = G__46074;
chunk__45893 = G__46075;
count__45894 = G__46076;
i__45895 = G__46077;
continue;
} else {
var ext = cljs.core.first(seq__45890__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46080 = cljs.core.next(seq__45890__$1);
var G__46081 = null;
var G__46082 = (0);
var G__46083 = (0);
seq__45890 = G__46080;
chunk__45893 = G__46081;
count__45894 = G__46082;
i__45895 = G__46083;
continue;
} else {
var G__46084 = cljs.core.next(seq__45890__$1);
var G__46085 = null;
var G__46086 = (0);
var G__46087 = (0);
seq__45890 = G__46084;
chunk__45893 = G__46085;
count__45894 = G__46086;
i__45895 = G__46087;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq45879){
var G__45880 = cljs.core.first(seq45879);
var seq45879__$1 = cljs.core.next(seq45879);
var G__45881 = cljs.core.first(seq45879__$1);
var seq45879__$2 = cljs.core.next(seq45879__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45880,G__45881,seq45879__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__45911,p__45912){
var map__45913 = p__45911;
var map__45913__$1 = cljs.core.__destructure_map(map__45913);
var runtime = map__45913__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45913__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45914 = p__45912;
var map__45914__$1 = cljs.core.__destructure_map(map__45914);
var msg = map__45914__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45914__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__45919 = cljs.core.deref(state_ref);
var map__45919__$1 = cljs.core.__destructure_map(map__45919);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45919__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45919__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__45924){
var map__45925 = p__45924;
var map__45925__$1 = cljs.core.__destructure_map(map__45925);
var runtime = map__45925__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45925__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__45926,msg){
var map__45927 = p__45926;
var map__45927__$1 = cljs.core.__destructure_map(map__45927);
var runtime = map__45927__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45927__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__45933,key,p__45934){
var map__45935 = p__45933;
var map__45935__$1 = cljs.core.__destructure_map(map__45935);
var state = map__45935__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45935__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__45936 = p__45934;
var map__45936__$1 = cljs.core.__destructure_map(map__45936);
var spec = map__45936__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45936__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__45946,key,spec){
var map__45950 = p__45946;
var map__45950__$1 = cljs.core.__destructure_map(map__45950);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45950__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__45967_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__45967_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__45968_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__45968_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__45969_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__45969_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__45970_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__45970_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__45971_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__45971_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__45985,key){
var map__45987 = p__45985;
var map__45987__$1 = cljs.core.__destructure_map(map__45987);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45987__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__45990,msg){
var map__45992 = p__45990;
var map__45992__$1 = cljs.core.__destructure_map(map__45992);
var runtime = map__45992__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45992__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__45994,p__45995){
var map__45996 = p__45994;
var map__45996__$1 = cljs.core.__destructure_map(map__45996);
var runtime = map__45996__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45996__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45997 = p__45995;
var map__45997__$1 = cljs.core.__destructure_map(map__45997);
var msg = map__45997__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45997__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45997__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__46008 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46010 = null;
var count__46011 = (0);
var i__46012 = (0);
while(true){
if((i__46012 < count__46011)){
var map__46023 = chunk__46010.cljs$core$IIndexed$_nth$arity$2(null,i__46012);
var map__46023__$1 = cljs.core.__destructure_map(map__46023);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46023__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46150 = seq__46008;
var G__46151 = chunk__46010;
var G__46152 = count__46011;
var G__46153 = (i__46012 + (1));
seq__46008 = G__46150;
chunk__46010 = G__46151;
count__46011 = G__46152;
i__46012 = G__46153;
continue;
} else {
var G__46154 = seq__46008;
var G__46155 = chunk__46010;
var G__46156 = count__46011;
var G__46157 = (i__46012 + (1));
seq__46008 = G__46154;
chunk__46010 = G__46155;
count__46011 = G__46156;
i__46012 = G__46157;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46008);
if(temp__5753__auto__){
var seq__46008__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46008__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46008__$1);
var G__46158 = cljs.core.chunk_rest(seq__46008__$1);
var G__46159 = c__4679__auto__;
var G__46160 = cljs.core.count(c__4679__auto__);
var G__46161 = (0);
seq__46008 = G__46158;
chunk__46010 = G__46159;
count__46011 = G__46160;
i__46012 = G__46161;
continue;
} else {
var map__46024 = cljs.core.first(seq__46008__$1);
var map__46024__$1 = cljs.core.__destructure_map(map__46024);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46024__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46162 = cljs.core.next(seq__46008__$1);
var G__46163 = null;
var G__46164 = (0);
var G__46165 = (0);
seq__46008 = G__46162;
chunk__46010 = G__46163;
count__46011 = G__46164;
i__46012 = G__46165;
continue;
} else {
var G__46166 = cljs.core.next(seq__46008__$1);
var G__46167 = null;
var G__46168 = (0);
var G__46169 = (0);
seq__46008 = G__46166;
chunk__46010 = G__46167;
count__46011 = G__46168;
i__46012 = G__46169;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
