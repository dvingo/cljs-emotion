goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56973 = arguments.length;
var i__4865__auto___56974 = (0);
while(true){
if((i__4865__auto___56974 < len__4864__auto___56973)){
args__4870__auto__.push((arguments[i__4865__auto___56974]));

var G__56975 = (i__4865__auto___56974 + (1));
i__4865__auto___56974 = G__56975;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq56434){
var G__56435 = cljs.core.first(seq56434);
var seq56434__$1 = cljs.core.next(seq56434);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56435,seq56434__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__56448 = cljs.core.seq(sources);
var chunk__56449 = null;
var count__56450 = (0);
var i__56451 = (0);
while(true){
if((i__56451 < count__56450)){
var map__56471 = chunk__56449.cljs$core$IIndexed$_nth$arity$2(null,i__56451);
var map__56471__$1 = cljs.core.__destructure_map(map__56471);
var src = map__56471__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56471__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56471__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56471__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56471__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e56474){var e_56976 = e56474;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_56976);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_56976.message)].join('')));
}

var G__56977 = seq__56448;
var G__56978 = chunk__56449;
var G__56979 = count__56450;
var G__56980 = (i__56451 + (1));
seq__56448 = G__56977;
chunk__56449 = G__56978;
count__56450 = G__56979;
i__56451 = G__56980;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56448);
if(temp__5753__auto__){
var seq__56448__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56448__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56448__$1);
var G__56981 = cljs.core.chunk_rest(seq__56448__$1);
var G__56982 = c__4679__auto__;
var G__56983 = cljs.core.count(c__4679__auto__);
var G__56984 = (0);
seq__56448 = G__56981;
chunk__56449 = G__56982;
count__56450 = G__56983;
i__56451 = G__56984;
continue;
} else {
var map__56480 = cljs.core.first(seq__56448__$1);
var map__56480__$1 = cljs.core.__destructure_map(map__56480);
var src = map__56480__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56480__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56480__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56480__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56480__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e56484){var e_56987 = e56484;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_56987);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_56987.message)].join('')));
}

var G__56988 = cljs.core.next(seq__56448__$1);
var G__56989 = null;
var G__56990 = (0);
var G__56991 = (0);
seq__56448 = G__56988;
chunk__56449 = G__56989;
count__56450 = G__56990;
i__56451 = G__56991;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__56494 = cljs.core.seq(js_requires);
var chunk__56495 = null;
var count__56496 = (0);
var i__56497 = (0);
while(true){
if((i__56497 < count__56496)){
var js_ns = chunk__56495.cljs$core$IIndexed$_nth$arity$2(null,i__56497);
var require_str_56992 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56992);


var G__56993 = seq__56494;
var G__56994 = chunk__56495;
var G__56995 = count__56496;
var G__56996 = (i__56497 + (1));
seq__56494 = G__56993;
chunk__56495 = G__56994;
count__56496 = G__56995;
i__56497 = G__56996;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56494);
if(temp__5753__auto__){
var seq__56494__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56494__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56494__$1);
var G__56997 = cljs.core.chunk_rest(seq__56494__$1);
var G__56998 = c__4679__auto__;
var G__56999 = cljs.core.count(c__4679__auto__);
var G__57000 = (0);
seq__56494 = G__56997;
chunk__56495 = G__56998;
count__56496 = G__56999;
i__56497 = G__57000;
continue;
} else {
var js_ns = cljs.core.first(seq__56494__$1);
var require_str_57001 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_57001);


var G__57002 = cljs.core.next(seq__56494__$1);
var G__57003 = null;
var G__57004 = (0);
var G__57005 = (0);
seq__56494 = G__57002;
chunk__56495 = G__57003;
count__56496 = G__57004;
i__56497 = G__57005;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__56504){
var map__56505 = p__56504;
var map__56505__$1 = cljs.core.__destructure_map(map__56505);
var msg = map__56505__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56505__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56505__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56511(s__56512){
return (new cljs.core.LazySeq(null,(function (){
var s__56512__$1 = s__56512;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56512__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__56518 = cljs.core.first(xs__6308__auto__);
var map__56518__$1 = cljs.core.__destructure_map(map__56518);
var src = map__56518__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56518__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56518__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__56512__$1,map__56518,map__56518__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__56505,map__56505__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56511_$_iter__56513(s__56514){
return (new cljs.core.LazySeq(null,((function (s__56512__$1,map__56518,map__56518__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__56505,map__56505__$1,msg,info,reload_info){
return (function (){
var s__56514__$1 = s__56514;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__56514__$1);
if(temp__5753__auto____$1){
var s__56514__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56514__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__56514__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__56516 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__56515 = (0);
while(true){
if((i__56515 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__56515);
cljs.core.chunk_append(b__56516,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__57006 = (i__56515 + (1));
i__56515 = G__57006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56516),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56511_$_iter__56513(cljs.core.chunk_rest(s__56514__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56516),null);
}
} else {
var warning = cljs.core.first(s__56514__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56511_$_iter__56513(cljs.core.rest(s__56514__$2)));
}
} else {
return null;
}
break;
}
});})(s__56512__$1,map__56518,map__56518__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__56505,map__56505__$1,msg,info,reload_info))
,null,null));
});})(s__56512__$1,map__56518,map__56518__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__56505,map__56505__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56511(cljs.core.rest(s__56512__$1)));
} else {
var G__57007 = cljs.core.rest(s__56512__$1);
s__56512__$1 = G__57007;
continue;
}
} else {
var G__57008 = cljs.core.rest(s__56512__$1);
s__56512__$1 = G__57008;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__56521_57009 = cljs.core.seq(warnings);
var chunk__56522_57010 = null;
var count__56523_57011 = (0);
var i__56524_57012 = (0);
while(true){
if((i__56524_57012 < count__56523_57011)){
var map__56535_57013 = chunk__56522_57010.cljs$core$IIndexed$_nth$arity$2(null,i__56524_57012);
var map__56535_57014__$1 = cljs.core.__destructure_map(map__56535_57013);
var w_57015 = map__56535_57014__$1;
var msg_57016__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56535_57014__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_57017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56535_57014__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_57018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56535_57014__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_57019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56535_57014__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_57019)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_57017),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_57018),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_57016__$1)].join(''));


var G__57020 = seq__56521_57009;
var G__57021 = chunk__56522_57010;
var G__57022 = count__56523_57011;
var G__57023 = (i__56524_57012 + (1));
seq__56521_57009 = G__57020;
chunk__56522_57010 = G__57021;
count__56523_57011 = G__57022;
i__56524_57012 = G__57023;
continue;
} else {
var temp__5753__auto___57024 = cljs.core.seq(seq__56521_57009);
if(temp__5753__auto___57024){
var seq__56521_57025__$1 = temp__5753__auto___57024;
if(cljs.core.chunked_seq_QMARK_(seq__56521_57025__$1)){
var c__4679__auto___57026 = cljs.core.chunk_first(seq__56521_57025__$1);
var G__57027 = cljs.core.chunk_rest(seq__56521_57025__$1);
var G__57028 = c__4679__auto___57026;
var G__57029 = cljs.core.count(c__4679__auto___57026);
var G__57030 = (0);
seq__56521_57009 = G__57027;
chunk__56522_57010 = G__57028;
count__56523_57011 = G__57029;
i__56524_57012 = G__57030;
continue;
} else {
var map__56537_57031 = cljs.core.first(seq__56521_57025__$1);
var map__56537_57032__$1 = cljs.core.__destructure_map(map__56537_57031);
var w_57033 = map__56537_57032__$1;
var msg_57034__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56537_57032__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_57035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56537_57032__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_57036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56537_57032__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_57037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56537_57032__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_57037)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_57035),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_57036),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_57034__$1)].join(''));


var G__57038 = cljs.core.next(seq__56521_57025__$1);
var G__57039 = null;
var G__57040 = (0);
var G__57041 = (0);
seq__56521_57009 = G__57038;
chunk__56522_57010 = G__57039;
count__56523_57011 = G__57040;
i__56524_57012 = G__57041;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__56502_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__56502_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__56547){
var map__56548 = p__56547;
var map__56548__$1 = cljs.core.__destructure_map(map__56548);
var msg = map__56548__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56548__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56548__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__56549 = cljs.core.seq(updates);
var chunk__56551 = null;
var count__56552 = (0);
var i__56553 = (0);
while(true){
if((i__56553 < count__56552)){
var path = chunk__56551.cljs$core$IIndexed$_nth$arity$2(null,i__56553);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56766_57042 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56770_57043 = null;
var count__56771_57044 = (0);
var i__56772_57045 = (0);
while(true){
if((i__56772_57045 < count__56771_57044)){
var node_57046 = chunk__56770_57043.cljs$core$IIndexed$_nth$arity$2(null,i__56772_57045);
if(cljs.core.not(node_57046.shadow$old)){
var path_match_57047 = shadow.cljs.devtools.client.browser.match_paths(node_57046.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57047)){
var new_link_57048 = (function (){var G__56806 = node_57046.cloneNode(true);
G__56806.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57047),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56806;
})();
(node_57046.shadow$old = true);

(new_link_57048.onload = ((function (seq__56766_57042,chunk__56770_57043,count__56771_57044,i__56772_57045,seq__56549,chunk__56551,count__56552,i__56553,new_link_57048,path_match_57047,node_57046,path,map__56548,map__56548__$1,msg,updates,reload_info){
return (function (e){
var seq__56807_57050 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__56809_57051 = null;
var count__56810_57052 = (0);
var i__56811_57053 = (0);
while(true){
if((i__56811_57053 < count__56810_57052)){
var map__56822_57054 = chunk__56809_57051.cljs$core$IIndexed$_nth$arity$2(null,i__56811_57053);
var map__56822_57055__$1 = cljs.core.__destructure_map(map__56822_57054);
var task_57056 = map__56822_57055__$1;
var fn_str_57057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56822_57055__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56822_57055__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57060 = goog.getObjectByName(fn_str_57057,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57058)].join(''));

(fn_obj_57060.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57060.cljs$core$IFn$_invoke$arity$2(path,new_link_57048) : fn_obj_57060.call(null,path,new_link_57048));


var G__57061 = seq__56807_57050;
var G__57062 = chunk__56809_57051;
var G__57063 = count__56810_57052;
var G__57064 = (i__56811_57053 + (1));
seq__56807_57050 = G__57061;
chunk__56809_57051 = G__57062;
count__56810_57052 = G__57063;
i__56811_57053 = G__57064;
continue;
} else {
var temp__5753__auto___57065 = cljs.core.seq(seq__56807_57050);
if(temp__5753__auto___57065){
var seq__56807_57066__$1 = temp__5753__auto___57065;
if(cljs.core.chunked_seq_QMARK_(seq__56807_57066__$1)){
var c__4679__auto___57067 = cljs.core.chunk_first(seq__56807_57066__$1);
var G__57068 = cljs.core.chunk_rest(seq__56807_57066__$1);
var G__57069 = c__4679__auto___57067;
var G__57070 = cljs.core.count(c__4679__auto___57067);
var G__57071 = (0);
seq__56807_57050 = G__57068;
chunk__56809_57051 = G__57069;
count__56810_57052 = G__57070;
i__56811_57053 = G__57071;
continue;
} else {
var map__56826_57072 = cljs.core.first(seq__56807_57066__$1);
var map__56826_57073__$1 = cljs.core.__destructure_map(map__56826_57072);
var task_57074 = map__56826_57073__$1;
var fn_str_57075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56826_57073__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56826_57073__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57077 = goog.getObjectByName(fn_str_57075,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57076)].join(''));

(fn_obj_57077.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57077.cljs$core$IFn$_invoke$arity$2(path,new_link_57048) : fn_obj_57077.call(null,path,new_link_57048));


var G__57078 = cljs.core.next(seq__56807_57066__$1);
var G__57079 = null;
var G__57080 = (0);
var G__57081 = (0);
seq__56807_57050 = G__57078;
chunk__56809_57051 = G__57079;
count__56810_57052 = G__57080;
i__56811_57053 = G__57081;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_57046);
});})(seq__56766_57042,chunk__56770_57043,count__56771_57044,i__56772_57045,seq__56549,chunk__56551,count__56552,i__56553,new_link_57048,path_match_57047,node_57046,path,map__56548,map__56548__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57047], 0));

goog.dom.insertSiblingAfter(new_link_57048,node_57046);


var G__57082 = seq__56766_57042;
var G__57083 = chunk__56770_57043;
var G__57084 = count__56771_57044;
var G__57085 = (i__56772_57045 + (1));
seq__56766_57042 = G__57082;
chunk__56770_57043 = G__57083;
count__56771_57044 = G__57084;
i__56772_57045 = G__57085;
continue;
} else {
var G__57086 = seq__56766_57042;
var G__57087 = chunk__56770_57043;
var G__57088 = count__56771_57044;
var G__57089 = (i__56772_57045 + (1));
seq__56766_57042 = G__57086;
chunk__56770_57043 = G__57087;
count__56771_57044 = G__57088;
i__56772_57045 = G__57089;
continue;
}
} else {
var G__57090 = seq__56766_57042;
var G__57091 = chunk__56770_57043;
var G__57092 = count__56771_57044;
var G__57093 = (i__56772_57045 + (1));
seq__56766_57042 = G__57090;
chunk__56770_57043 = G__57091;
count__56771_57044 = G__57092;
i__56772_57045 = G__57093;
continue;
}
} else {
var temp__5753__auto___57094 = cljs.core.seq(seq__56766_57042);
if(temp__5753__auto___57094){
var seq__56766_57095__$1 = temp__5753__auto___57094;
if(cljs.core.chunked_seq_QMARK_(seq__56766_57095__$1)){
var c__4679__auto___57096 = cljs.core.chunk_first(seq__56766_57095__$1);
var G__57097 = cljs.core.chunk_rest(seq__56766_57095__$1);
var G__57098 = c__4679__auto___57096;
var G__57099 = cljs.core.count(c__4679__auto___57096);
var G__57100 = (0);
seq__56766_57042 = G__57097;
chunk__56770_57043 = G__57098;
count__56771_57044 = G__57099;
i__56772_57045 = G__57100;
continue;
} else {
var node_57101 = cljs.core.first(seq__56766_57095__$1);
if(cljs.core.not(node_57101.shadow$old)){
var path_match_57102 = shadow.cljs.devtools.client.browser.match_paths(node_57101.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57102)){
var new_link_57103 = (function (){var G__56829 = node_57101.cloneNode(true);
G__56829.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57102),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56829;
})();
(node_57101.shadow$old = true);

(new_link_57103.onload = ((function (seq__56766_57042,chunk__56770_57043,count__56771_57044,i__56772_57045,seq__56549,chunk__56551,count__56552,i__56553,new_link_57103,path_match_57102,node_57101,seq__56766_57095__$1,temp__5753__auto___57094,path,map__56548,map__56548__$1,msg,updates,reload_info){
return (function (e){
var seq__56830_57104 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__56832_57105 = null;
var count__56833_57106 = (0);
var i__56834_57107 = (0);
while(true){
if((i__56834_57107 < count__56833_57106)){
var map__56841_57108 = chunk__56832_57105.cljs$core$IIndexed$_nth$arity$2(null,i__56834_57107);
var map__56841_57109__$1 = cljs.core.__destructure_map(map__56841_57108);
var task_57110 = map__56841_57109__$1;
var fn_str_57111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56841_57109__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56841_57109__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57113 = goog.getObjectByName(fn_str_57111,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57112)].join(''));

(fn_obj_57113.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57113.cljs$core$IFn$_invoke$arity$2(path,new_link_57103) : fn_obj_57113.call(null,path,new_link_57103));


var G__57114 = seq__56830_57104;
var G__57115 = chunk__56832_57105;
var G__57116 = count__56833_57106;
var G__57117 = (i__56834_57107 + (1));
seq__56830_57104 = G__57114;
chunk__56832_57105 = G__57115;
count__56833_57106 = G__57116;
i__56834_57107 = G__57117;
continue;
} else {
var temp__5753__auto___57119__$1 = cljs.core.seq(seq__56830_57104);
if(temp__5753__auto___57119__$1){
var seq__56830_57120__$1 = temp__5753__auto___57119__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56830_57120__$1)){
var c__4679__auto___57121 = cljs.core.chunk_first(seq__56830_57120__$1);
var G__57122 = cljs.core.chunk_rest(seq__56830_57120__$1);
var G__57123 = c__4679__auto___57121;
var G__57124 = cljs.core.count(c__4679__auto___57121);
var G__57125 = (0);
seq__56830_57104 = G__57122;
chunk__56832_57105 = G__57123;
count__56833_57106 = G__57124;
i__56834_57107 = G__57125;
continue;
} else {
var map__56846_57126 = cljs.core.first(seq__56830_57120__$1);
var map__56846_57127__$1 = cljs.core.__destructure_map(map__56846_57126);
var task_57128 = map__56846_57127__$1;
var fn_str_57129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56846_57127__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56846_57127__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57131 = goog.getObjectByName(fn_str_57129,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57130)].join(''));

(fn_obj_57131.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57131.cljs$core$IFn$_invoke$arity$2(path,new_link_57103) : fn_obj_57131.call(null,path,new_link_57103));


var G__57133 = cljs.core.next(seq__56830_57120__$1);
var G__57134 = null;
var G__57135 = (0);
var G__57136 = (0);
seq__56830_57104 = G__57133;
chunk__56832_57105 = G__57134;
count__56833_57106 = G__57135;
i__56834_57107 = G__57136;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_57101);
});})(seq__56766_57042,chunk__56770_57043,count__56771_57044,i__56772_57045,seq__56549,chunk__56551,count__56552,i__56553,new_link_57103,path_match_57102,node_57101,seq__56766_57095__$1,temp__5753__auto___57094,path,map__56548,map__56548__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57102], 0));

goog.dom.insertSiblingAfter(new_link_57103,node_57101);


var G__57138 = cljs.core.next(seq__56766_57095__$1);
var G__57139 = null;
var G__57140 = (0);
var G__57141 = (0);
seq__56766_57042 = G__57138;
chunk__56770_57043 = G__57139;
count__56771_57044 = G__57140;
i__56772_57045 = G__57141;
continue;
} else {
var G__57142 = cljs.core.next(seq__56766_57095__$1);
var G__57143 = null;
var G__57144 = (0);
var G__57145 = (0);
seq__56766_57042 = G__57142;
chunk__56770_57043 = G__57143;
count__56771_57044 = G__57144;
i__56772_57045 = G__57145;
continue;
}
} else {
var G__57147 = cljs.core.next(seq__56766_57095__$1);
var G__57148 = null;
var G__57149 = (0);
var G__57150 = (0);
seq__56766_57042 = G__57147;
chunk__56770_57043 = G__57148;
count__56771_57044 = G__57149;
i__56772_57045 = G__57150;
continue;
}
}
} else {
}
}
break;
}


var G__57151 = seq__56549;
var G__57152 = chunk__56551;
var G__57153 = count__56552;
var G__57154 = (i__56553 + (1));
seq__56549 = G__57151;
chunk__56551 = G__57152;
count__56552 = G__57153;
i__56553 = G__57154;
continue;
} else {
var G__57155 = seq__56549;
var G__57156 = chunk__56551;
var G__57157 = count__56552;
var G__57158 = (i__56553 + (1));
seq__56549 = G__57155;
chunk__56551 = G__57156;
count__56552 = G__57157;
i__56553 = G__57158;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56549);
if(temp__5753__auto__){
var seq__56549__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56549__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56549__$1);
var G__57159 = cljs.core.chunk_rest(seq__56549__$1);
var G__57160 = c__4679__auto__;
var G__57161 = cljs.core.count(c__4679__auto__);
var G__57162 = (0);
seq__56549 = G__57159;
chunk__56551 = G__57160;
count__56552 = G__57161;
i__56553 = G__57162;
continue;
} else {
var path = cljs.core.first(seq__56549__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56847_57163 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56851_57164 = null;
var count__56852_57165 = (0);
var i__56853_57166 = (0);
while(true){
if((i__56853_57166 < count__56852_57165)){
var node_57167 = chunk__56851_57164.cljs$core$IIndexed$_nth$arity$2(null,i__56853_57166);
if(cljs.core.not(node_57167.shadow$old)){
var path_match_57168 = shadow.cljs.devtools.client.browser.match_paths(node_57167.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57168)){
var new_link_57169 = (function (){var G__56893 = node_57167.cloneNode(true);
G__56893.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57168),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56893;
})();
(node_57167.shadow$old = true);

(new_link_57169.onload = ((function (seq__56847_57163,chunk__56851_57164,count__56852_57165,i__56853_57166,seq__56549,chunk__56551,count__56552,i__56553,new_link_57169,path_match_57168,node_57167,path,seq__56549__$1,temp__5753__auto__,map__56548,map__56548__$1,msg,updates,reload_info){
return (function (e){
var seq__56894_57170 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__56896_57171 = null;
var count__56897_57172 = (0);
var i__56898_57173 = (0);
while(true){
if((i__56898_57173 < count__56897_57172)){
var map__56904_57174 = chunk__56896_57171.cljs$core$IIndexed$_nth$arity$2(null,i__56898_57173);
var map__56904_57175__$1 = cljs.core.__destructure_map(map__56904_57174);
var task_57176 = map__56904_57175__$1;
var fn_str_57177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56904_57175__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56904_57175__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57179 = goog.getObjectByName(fn_str_57177,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57178)].join(''));

(fn_obj_57179.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57179.cljs$core$IFn$_invoke$arity$2(path,new_link_57169) : fn_obj_57179.call(null,path,new_link_57169));


var G__57180 = seq__56894_57170;
var G__57181 = chunk__56896_57171;
var G__57182 = count__56897_57172;
var G__57183 = (i__56898_57173 + (1));
seq__56894_57170 = G__57180;
chunk__56896_57171 = G__57181;
count__56897_57172 = G__57182;
i__56898_57173 = G__57183;
continue;
} else {
var temp__5753__auto___57184__$1 = cljs.core.seq(seq__56894_57170);
if(temp__5753__auto___57184__$1){
var seq__56894_57185__$1 = temp__5753__auto___57184__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56894_57185__$1)){
var c__4679__auto___57186 = cljs.core.chunk_first(seq__56894_57185__$1);
var G__57188 = cljs.core.chunk_rest(seq__56894_57185__$1);
var G__57189 = c__4679__auto___57186;
var G__57190 = cljs.core.count(c__4679__auto___57186);
var G__57191 = (0);
seq__56894_57170 = G__57188;
chunk__56896_57171 = G__57189;
count__56897_57172 = G__57190;
i__56898_57173 = G__57191;
continue;
} else {
var map__56911_57192 = cljs.core.first(seq__56894_57185__$1);
var map__56911_57193__$1 = cljs.core.__destructure_map(map__56911_57192);
var task_57194 = map__56911_57193__$1;
var fn_str_57195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56911_57193__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56911_57193__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57197 = goog.getObjectByName(fn_str_57195,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57196)].join(''));

(fn_obj_57197.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57197.cljs$core$IFn$_invoke$arity$2(path,new_link_57169) : fn_obj_57197.call(null,path,new_link_57169));


var G__57198 = cljs.core.next(seq__56894_57185__$1);
var G__57199 = null;
var G__57200 = (0);
var G__57201 = (0);
seq__56894_57170 = G__57198;
chunk__56896_57171 = G__57199;
count__56897_57172 = G__57200;
i__56898_57173 = G__57201;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_57167);
});})(seq__56847_57163,chunk__56851_57164,count__56852_57165,i__56853_57166,seq__56549,chunk__56551,count__56552,i__56553,new_link_57169,path_match_57168,node_57167,path,seq__56549__$1,temp__5753__auto__,map__56548,map__56548__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57168], 0));

goog.dom.insertSiblingAfter(new_link_57169,node_57167);


var G__57202 = seq__56847_57163;
var G__57203 = chunk__56851_57164;
var G__57204 = count__56852_57165;
var G__57205 = (i__56853_57166 + (1));
seq__56847_57163 = G__57202;
chunk__56851_57164 = G__57203;
count__56852_57165 = G__57204;
i__56853_57166 = G__57205;
continue;
} else {
var G__57206 = seq__56847_57163;
var G__57207 = chunk__56851_57164;
var G__57208 = count__56852_57165;
var G__57209 = (i__56853_57166 + (1));
seq__56847_57163 = G__57206;
chunk__56851_57164 = G__57207;
count__56852_57165 = G__57208;
i__56853_57166 = G__57209;
continue;
}
} else {
var G__57210 = seq__56847_57163;
var G__57211 = chunk__56851_57164;
var G__57212 = count__56852_57165;
var G__57213 = (i__56853_57166 + (1));
seq__56847_57163 = G__57210;
chunk__56851_57164 = G__57211;
count__56852_57165 = G__57212;
i__56853_57166 = G__57213;
continue;
}
} else {
var temp__5753__auto___57214__$1 = cljs.core.seq(seq__56847_57163);
if(temp__5753__auto___57214__$1){
var seq__56847_57215__$1 = temp__5753__auto___57214__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56847_57215__$1)){
var c__4679__auto___57216 = cljs.core.chunk_first(seq__56847_57215__$1);
var G__57217 = cljs.core.chunk_rest(seq__56847_57215__$1);
var G__57218 = c__4679__auto___57216;
var G__57219 = cljs.core.count(c__4679__auto___57216);
var G__57220 = (0);
seq__56847_57163 = G__57217;
chunk__56851_57164 = G__57218;
count__56852_57165 = G__57219;
i__56853_57166 = G__57220;
continue;
} else {
var node_57221 = cljs.core.first(seq__56847_57215__$1);
if(cljs.core.not(node_57221.shadow$old)){
var path_match_57222 = shadow.cljs.devtools.client.browser.match_paths(node_57221.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57222)){
var new_link_57223 = (function (){var G__56913 = node_57221.cloneNode(true);
G__56913.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57222),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56913;
})();
(node_57221.shadow$old = true);

(new_link_57223.onload = ((function (seq__56847_57163,chunk__56851_57164,count__56852_57165,i__56853_57166,seq__56549,chunk__56551,count__56552,i__56553,new_link_57223,path_match_57222,node_57221,seq__56847_57215__$1,temp__5753__auto___57214__$1,path,seq__56549__$1,temp__5753__auto__,map__56548,map__56548__$1,msg,updates,reload_info){
return (function (e){
var seq__56915_57224 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__56917_57225 = null;
var count__56918_57226 = (0);
var i__56919_57227 = (0);
while(true){
if((i__56919_57227 < count__56918_57226)){
var map__56929_57228 = chunk__56917_57225.cljs$core$IIndexed$_nth$arity$2(null,i__56919_57227);
var map__56929_57229__$1 = cljs.core.__destructure_map(map__56929_57228);
var task_57230 = map__56929_57229__$1;
var fn_str_57231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56929_57229__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56929_57229__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57233 = goog.getObjectByName(fn_str_57231,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57232)].join(''));

(fn_obj_57233.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57233.cljs$core$IFn$_invoke$arity$2(path,new_link_57223) : fn_obj_57233.call(null,path,new_link_57223));


var G__57234 = seq__56915_57224;
var G__57235 = chunk__56917_57225;
var G__57236 = count__56918_57226;
var G__57237 = (i__56919_57227 + (1));
seq__56915_57224 = G__57234;
chunk__56917_57225 = G__57235;
count__56918_57226 = G__57236;
i__56919_57227 = G__57237;
continue;
} else {
var temp__5753__auto___57238__$2 = cljs.core.seq(seq__56915_57224);
if(temp__5753__auto___57238__$2){
var seq__56915_57239__$1 = temp__5753__auto___57238__$2;
if(cljs.core.chunked_seq_QMARK_(seq__56915_57239__$1)){
var c__4679__auto___57240 = cljs.core.chunk_first(seq__56915_57239__$1);
var G__57241 = cljs.core.chunk_rest(seq__56915_57239__$1);
var G__57242 = c__4679__auto___57240;
var G__57243 = cljs.core.count(c__4679__auto___57240);
var G__57244 = (0);
seq__56915_57224 = G__57241;
chunk__56917_57225 = G__57242;
count__56918_57226 = G__57243;
i__56919_57227 = G__57244;
continue;
} else {
var map__56930_57245 = cljs.core.first(seq__56915_57239__$1);
var map__56930_57246__$1 = cljs.core.__destructure_map(map__56930_57245);
var task_57247 = map__56930_57246__$1;
var fn_str_57248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930_57246__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930_57246__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57250 = goog.getObjectByName(fn_str_57248,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57249)].join(''));

(fn_obj_57250.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57250.cljs$core$IFn$_invoke$arity$2(path,new_link_57223) : fn_obj_57250.call(null,path,new_link_57223));


var G__57251 = cljs.core.next(seq__56915_57239__$1);
var G__57252 = null;
var G__57253 = (0);
var G__57254 = (0);
seq__56915_57224 = G__57251;
chunk__56917_57225 = G__57252;
count__56918_57226 = G__57253;
i__56919_57227 = G__57254;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_57221);
});})(seq__56847_57163,chunk__56851_57164,count__56852_57165,i__56853_57166,seq__56549,chunk__56551,count__56552,i__56553,new_link_57223,path_match_57222,node_57221,seq__56847_57215__$1,temp__5753__auto___57214__$1,path,seq__56549__$1,temp__5753__auto__,map__56548,map__56548__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57222], 0));

goog.dom.insertSiblingAfter(new_link_57223,node_57221);


var G__57255 = cljs.core.next(seq__56847_57215__$1);
var G__57256 = null;
var G__57257 = (0);
var G__57258 = (0);
seq__56847_57163 = G__57255;
chunk__56851_57164 = G__57256;
count__56852_57165 = G__57257;
i__56853_57166 = G__57258;
continue;
} else {
var G__57259 = cljs.core.next(seq__56847_57215__$1);
var G__57260 = null;
var G__57261 = (0);
var G__57262 = (0);
seq__56847_57163 = G__57259;
chunk__56851_57164 = G__57260;
count__56852_57165 = G__57261;
i__56853_57166 = G__57262;
continue;
}
} else {
var G__57263 = cljs.core.next(seq__56847_57215__$1);
var G__57264 = null;
var G__57265 = (0);
var G__57266 = (0);
seq__56847_57163 = G__57263;
chunk__56851_57164 = G__57264;
count__56852_57165 = G__57265;
i__56853_57166 = G__57266;
continue;
}
}
} else {
}
}
break;
}


var G__57267 = cljs.core.next(seq__56549__$1);
var G__57268 = null;
var G__57269 = (0);
var G__57270 = (0);
seq__56549 = G__57267;
chunk__56551 = G__57268;
count__56552 = G__57269;
i__56553 = G__57270;
continue;
} else {
var G__57271 = cljs.core.next(seq__56549__$1);
var G__57272 = null;
var G__57273 = (0);
var G__57274 = (0);
seq__56549 = G__57271;
chunk__56551 = G__57272;
count__56552 = G__57273;
i__56553 = G__57274;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__56937){
var map__56938 = p__56937;
var map__56938__$1 = cljs.core.__destructure_map(map__56938);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56938__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__56943){
var map__56944 = p__56943;
var map__56944__$1 = cljs.core.__destructure_map(map__56944);
var _ = map__56944__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56944__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__56947,done,error){
var map__56948 = p__56947;
var map__56948__$1 = cljs.core.__destructure_map(map__56948);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56948__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__56949,done,error){
var map__56950 = p__56949;
var map__56950__$1 = cljs.core.__destructure_map(map__56950);
var msg = map__56950__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56950__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56950__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56950__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__56951){
var map__56952 = p__56951;
var map__56952__$1 = cljs.core.__destructure_map(map__56952);
var src = map__56952__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56952__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__56953 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__56953) : done.call(null,G__56953));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__56956){
var map__56957 = p__56956;
var map__56957__$1 = cljs.core.__destructure_map(map__56957);
var msg__$1 = map__56957__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56957__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e56958){var ex = e56958;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__56960){
var map__56961 = p__56960;
var map__56961__$1 = cljs.core.__destructure_map(map__56961);
var env = map__56961__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56961__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__56962){
var map__56963 = p__56962;
var map__56963__$1 = cljs.core.__destructure_map(map__56963);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56963__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56963__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__56964){
var map__56965 = p__56964;
var map__56965__$1 = cljs.core.__destructure_map(map__56965);
var svc = map__56965__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56965__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
