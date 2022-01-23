goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50731){
var map__50733 = p__50731;
var map__50733__$1 = cljs.core.__destructure_map(map__50733);
var m = map__50733__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50733__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50733__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50744_50983 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50745_50984 = null;
var count__50746_50985 = (0);
var i__50747_50986 = (0);
while(true){
if((i__50747_50986 < count__50746_50985)){
var f_50987 = chunk__50745_50984.cljs$core$IIndexed$_nth$arity$2(null,i__50747_50986);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50987], 0));


var G__50988 = seq__50744_50983;
var G__50989 = chunk__50745_50984;
var G__50990 = count__50746_50985;
var G__50991 = (i__50747_50986 + (1));
seq__50744_50983 = G__50988;
chunk__50745_50984 = G__50989;
count__50746_50985 = G__50990;
i__50747_50986 = G__50991;
continue;
} else {
var temp__5753__auto___50992 = cljs.core.seq(seq__50744_50983);
if(temp__5753__auto___50992){
var seq__50744_50993__$1 = temp__5753__auto___50992;
if(cljs.core.chunked_seq_QMARK_(seq__50744_50993__$1)){
var c__4679__auto___50994 = cljs.core.chunk_first(seq__50744_50993__$1);
var G__50995 = cljs.core.chunk_rest(seq__50744_50993__$1);
var G__50996 = c__4679__auto___50994;
var G__50997 = cljs.core.count(c__4679__auto___50994);
var G__50998 = (0);
seq__50744_50983 = G__50995;
chunk__50745_50984 = G__50996;
count__50746_50985 = G__50997;
i__50747_50986 = G__50998;
continue;
} else {
var f_50999 = cljs.core.first(seq__50744_50993__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50999], 0));


var G__51000 = cljs.core.next(seq__50744_50993__$1);
var G__51001 = null;
var G__51002 = (0);
var G__51003 = (0);
seq__50744_50983 = G__51000;
chunk__50745_50984 = G__51001;
count__50746_50985 = G__51002;
i__50747_50986 = G__51003;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51004 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51004], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51004)))?cljs.core.second(arglists_51004):arglists_51004)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50766_51008 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50767_51009 = null;
var count__50768_51010 = (0);
var i__50769_51011 = (0);
while(true){
if((i__50769_51011 < count__50768_51010)){
var vec__50784_51012 = chunk__50767_51009.cljs$core$IIndexed$_nth$arity$2(null,i__50769_51011);
var name_51013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50784_51012,(0),null);
var map__50787_51014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50784_51012,(1),null);
var map__50787_51015__$1 = cljs.core.__destructure_map(map__50787_51014);
var doc_51016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50787_51015__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50787_51015__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51013], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51017], 0));

if(cljs.core.truth_(doc_51016)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51016], 0));
} else {
}


var G__51020 = seq__50766_51008;
var G__51021 = chunk__50767_51009;
var G__51022 = count__50768_51010;
var G__51023 = (i__50769_51011 + (1));
seq__50766_51008 = G__51020;
chunk__50767_51009 = G__51021;
count__50768_51010 = G__51022;
i__50769_51011 = G__51023;
continue;
} else {
var temp__5753__auto___51068 = cljs.core.seq(seq__50766_51008);
if(temp__5753__auto___51068){
var seq__50766_51073__$1 = temp__5753__auto___51068;
if(cljs.core.chunked_seq_QMARK_(seq__50766_51073__$1)){
var c__4679__auto___51087 = cljs.core.chunk_first(seq__50766_51073__$1);
var G__51089 = cljs.core.chunk_rest(seq__50766_51073__$1);
var G__51090 = c__4679__auto___51087;
var G__51091 = cljs.core.count(c__4679__auto___51087);
var G__51092 = (0);
seq__50766_51008 = G__51089;
chunk__50767_51009 = G__51090;
count__50768_51010 = G__51091;
i__50769_51011 = G__51092;
continue;
} else {
var vec__50793_51093 = cljs.core.first(seq__50766_51073__$1);
var name_51094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50793_51093,(0),null);
var map__50796_51095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50793_51093,(1),null);
var map__50796_51096__$1 = cljs.core.__destructure_map(map__50796_51095);
var doc_51097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50796_51096__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50796_51096__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51094], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51098], 0));

if(cljs.core.truth_(doc_51097)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51097], 0));
} else {
}


var G__51099 = cljs.core.next(seq__50766_51073__$1);
var G__51100 = null;
var G__51101 = (0);
var G__51102 = (0);
seq__50766_51008 = G__51099;
chunk__50767_51009 = G__51100;
count__50768_51010 = G__51101;
i__50769_51011 = G__51102;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50800 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50801 = null;
var count__50802 = (0);
var i__50803 = (0);
while(true){
if((i__50803 < count__50802)){
var role = chunk__50801.cljs$core$IIndexed$_nth$arity$2(null,i__50803);
var temp__5753__auto___51104__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___51104__$1)){
var spec_51105 = temp__5753__auto___51104__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51105)], 0));
} else {
}


var G__51106 = seq__50800;
var G__51107 = chunk__50801;
var G__51108 = count__50802;
var G__51109 = (i__50803 + (1));
seq__50800 = G__51106;
chunk__50801 = G__51107;
count__50802 = G__51108;
i__50803 = G__51109;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__50800);
if(temp__5753__auto____$1){
var seq__50800__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50800__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50800__$1);
var G__51111 = cljs.core.chunk_rest(seq__50800__$1);
var G__51112 = c__4679__auto__;
var G__51113 = cljs.core.count(c__4679__auto__);
var G__51114 = (0);
seq__50800 = G__51111;
chunk__50801 = G__51112;
count__50802 = G__51113;
i__50803 = G__51114;
continue;
} else {
var role = cljs.core.first(seq__50800__$1);
var temp__5753__auto___51116__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___51116__$2)){
var spec_51117 = temp__5753__auto___51116__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51117)], 0));
} else {
}


var G__51118 = cljs.core.next(seq__50800__$1);
var G__51119 = null;
var G__51120 = (0);
var G__51121 = (0);
seq__50800 = G__51118;
chunk__50801 = G__51119;
count__50802 = G__51120;
i__50803 = G__51121;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__51127 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51128 = cljs.core.ex_cause(t);
via = G__51127;
t = G__51128;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50855 = datafied_throwable;
var map__50855__$1 = cljs.core.__destructure_map(map__50855);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50855__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50855__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50855__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50856 = cljs.core.last(via);
var map__50856__$1 = cljs.core.__destructure_map(map__50856);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50856__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50856__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50856__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50857 = data;
var map__50857__$1 = cljs.core.__destructure_map(map__50857);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50857__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50857__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50857__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50858 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50858__$1 = cljs.core.__destructure_map(map__50858);
var top_data = map__50858__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50858__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50863 = phase;
var G__50863__$1 = (((G__50863 instanceof cljs.core.Keyword))?G__50863.fqn:null);
switch (G__50863__$1) {
case "read-source":
var map__50869 = data;
var map__50869__$1 = cljs.core.__destructure_map(map__50869);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50869__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50869__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50870 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50870__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50870,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50870);
var G__50870__$2 = (cljs.core.truth_((function (){var fexpr__50875 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50875.cljs$core$IFn$_invoke$arity$1 ? fexpr__50875.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50875.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50870__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50870__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50870__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50870__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50876 = top_data;
var G__50876__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50876,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50876);
var G__50876__$2 = (cljs.core.truth_((function (){var fexpr__50878 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50878.cljs$core$IFn$_invoke$arity$1 ? fexpr__50878.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50878.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50876__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50876__$1);
var G__50876__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50876__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50876__$2);
var G__50876__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50876__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50876__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50876__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50876__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50880 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50880,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50880,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50880,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50880,(3),null);
var G__50885 = top_data;
var G__50885__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50885,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50885);
var G__50885__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50885__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50885__$1);
var G__50885__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50885__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50885__$2);
var G__50885__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50885__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50885__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50885__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50885__$4;
}

break;
case "execution":
var vec__50893 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50893,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50893,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50893,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50893,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50854_SHARP_){
var or__4253__auto__ = (p1__50854_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__50903 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50903.cljs$core$IFn$_invoke$arity$1 ? fexpr__50903.cljs$core$IFn$_invoke$arity$1(p1__50854_SHARP_) : fexpr__50903.call(null,p1__50854_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__50906 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50906__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50906,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50906);
var G__50906__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50906__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50906__$1);
var G__50906__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50906__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50906__$2);
var G__50906__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50906__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50906__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50906__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50906__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50863__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50919){
var map__50920 = p__50919;
var map__50920__$1 = cljs.core.__destructure_map(map__50920);
var triage_data = map__50920__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50920__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50920__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50920__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50920__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50920__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50920__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50920__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50920__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50927 = phase;
var G__50927__$1 = (((G__50927 instanceof cljs.core.Keyword))?G__50927.fqn:null);
switch (G__50927__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50929 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50930 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50931 = loc;
var G__50932 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50935_51152 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50936_51153 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50937_51154 = true;
var _STAR_print_fn_STAR__temp_val__50938_51155 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50937_51154);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50938_51155);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50916_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50916_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50936_51153);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50935_51152);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50929,G__50930,G__50931,G__50932) : format.call(null,G__50929,G__50930,G__50931,G__50932));

break;
case "macroexpansion":
var G__50941 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50942 = cause_type;
var G__50943 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50944 = loc;
var G__50945 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50941,G__50942,G__50943,G__50944,G__50945) : format.call(null,G__50941,G__50942,G__50943,G__50944,G__50945));

break;
case "compile-syntax-check":
var G__50946 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50947 = cause_type;
var G__50948 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50949 = loc;
var G__50950 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50946,G__50947,G__50948,G__50949,G__50950) : format.call(null,G__50946,G__50947,G__50948,G__50949,G__50950));

break;
case "compilation":
var G__50952 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50953 = cause_type;
var G__50954 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50955 = loc;
var G__50956 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50952,G__50953,G__50954,G__50955,G__50956) : format.call(null,G__50952,G__50953,G__50954,G__50955,G__50956));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50960 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50961 = symbol;
var G__50962 = loc;
var G__50963 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50964_51160 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50965_51161 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50966_51162 = true;
var _STAR_print_fn_STAR__temp_val__50967_51163 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50966_51162);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50967_51163);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50918_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50918_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50965_51161);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50964_51160);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50960,G__50961,G__50962,G__50963) : format.call(null,G__50960,G__50961,G__50962,G__50963));
} else {
var G__50972 = "Execution error%s at %s(%s).\n%s\n";
var G__50973 = cause_type;
var G__50974 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50975 = loc;
var G__50976 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50972,G__50973,G__50974,G__50975,G__50976) : format.call(null,G__50972,G__50973,G__50974,G__50975,G__50976));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50927__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
