goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
com.fulcrologic.guardrails.core.global_context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
/**
 * Push a global context, accessible from all threads, onto a stack.
 * Used to add information to what guardrails will report when a function failed a check.
 */
com.fulcrologic.guardrails.core.enter_global_context_BANG_ = (function com$fulcrologic$guardrails$core$enter_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cons,ctx));
});
/**
 * Pops a global context (see `enter-global-context!`).
 * Should be passed the same context that was pushed, although is not enforced, as it's only to be easily compatible with fulcro-spec's hooks API.
 */
com.fulcrologic.guardrails.core.leave_global_context_BANG_ = (function com$fulcrologic$guardrails$core$leave_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.rest);
});
com.fulcrologic.guardrails.core.get_global_context = (function com$fulcrologic$guardrails$core$get_global_context(){
return cljs.core.first(cljs.core.deref(com.fulcrologic.guardrails.core.global_context));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__45178__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_59753){
var state_val_59755 = (state_59753[(1)]);
if((state_val_59755 === (7))){
var inst_59747 = (state_59753[(2)]);
var state_59753__$1 = state_59753;
var statearr_59757_59883 = state_59753__$1;
(statearr_59757_59883[(2)] = inst_59747);

(statearr_59757_59883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59755 === (1))){
var state_59753__$1 = state_59753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59753__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_59755 === (4))){
var inst_59749 = (state_59753[(2)]);
var state_59753__$1 = state_59753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59753__$1,inst_59749);
} else {
if((state_val_59755 === (6))){
var inst_59745 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_59753__$1 = state_59753;
var statearr_59766_59884 = state_59753__$1;
(statearr_59766_59884[(2)] = inst_59745);

(statearr_59766_59884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59755 === (3))){
var inst_59728 = (state_59753[(7)]);
var state_59753__$1 = state_59753;
if(cljs.core.truth_(inst_59728)){
var statearr_59767_59886 = state_59753__$1;
(statearr_59767_59886[(1)] = (5));

} else {
var statearr_59768_59887 = state_59753__$1;
(statearr_59768_59887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59755 === (12))){
var inst_59742 = (state_59753[(2)]);
var inst_59728 = inst_59742;
var state_59753__$1 = (function (){var statearr_59770 = state_59753;
(statearr_59770[(7)] = inst_59728);

return statearr_59770;
})();
var statearr_59771_59888 = state_59753__$1;
(statearr_59771_59888[(2)] = null);

(statearr_59771_59888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59755 === (2))){
var inst_59727 = (state_59753[(2)]);
var inst_59728 = inst_59727;
var state_59753__$1 = (function (){var statearr_59777 = state_59753;
(statearr_59777[(7)] = inst_59728);

return statearr_59777;
})();
var statearr_59778_59889 = state_59753__$1;
(statearr_59778_59889[(2)] = null);

(statearr_59778_59889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59755 === (11))){
var _ = (function (){var statearr_59779 = state_59753;
(statearr_59779[(4)] = cljs.core.rest((state_59753[(4)])));

return statearr_59779;
})();
var state_59753__$1 = state_59753;
var ex59769 = (state_59753__$1[(2)]);
var statearr_59780_59891 = state_59753__$1;
(statearr_59780_59891[(5)] = ex59769);


var statearr_59781_59892 = state_59753__$1;
(statearr_59781_59892[(1)] = (10));

(statearr_59781_59892[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59755 === (9))){
var inst_59740 = (state_59753[(2)]);
var state_59753__$1 = (function (){var statearr_59782 = state_59753;
(statearr_59782[(8)] = inst_59740);

return statearr_59782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59753__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_59755 === (5))){
var state_59753__$1 = state_59753;
var statearr_59786_59893 = state_59753__$1;
(statearr_59786_59893[(2)] = null);

(statearr_59786_59893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59755 === (10))){
var inst_59731 = (state_59753[(2)]);
var state_59753__$1 = (function (){var statearr_59790 = state_59753;
(statearr_59790[(9)] = inst_59731);

return statearr_59790;
})();
var statearr_59791_59895 = state_59753__$1;
(statearr_59791_59895[(2)] = null);

(statearr_59791_59895[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59755 === (8))){
var inst_59728 = (state_59753[(7)]);
var _ = (function (){var statearr_59792 = state_59753;
(statearr_59792[(4)] = cljs.core.cons((11),(state_59753[(4)])));

return statearr_59792;
})();
var inst_59737 = (inst_59728.cljs$core$IFn$_invoke$arity$0 ? inst_59728.cljs$core$IFn$_invoke$arity$0() : inst_59728.call(null));
var ___$1 = (function (){var statearr_59793 = state_59753;
(statearr_59793[(4)] = cljs.core.rest((state_59753[(4)])));

return statearr_59793;
})();
var state_59753__$1 = state_59753;
var statearr_59798_59896 = state_59753__$1;
(statearr_59798_59896[(2)] = inst_59737);

(statearr_59798_59896[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__45093__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__45093__auto____0 = (function (){
var statearr_59802 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59802[(0)] = com$fulcrologic$guardrails$core$state_machine__45093__auto__);

(statearr_59802[(1)] = (1));

return statearr_59802;
});
var com$fulcrologic$guardrails$core$state_machine__45093__auto____1 = (function (state_59753){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_59753);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e59803){var ex__45096__auto__ = e59803;
var statearr_59804_59898 = state_59753;
(statearr_59804_59898[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_59753[(4)]))){
var statearr_59806_59899 = state_59753;
(statearr_59806_59899[(1)] = cljs.core.first((state_59753[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59900 = state_59753;
state_59753 = G__59900;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__45093__auto__ = function(state_59753){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__45093__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__45093__auto____1.call(this,state_59753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__45093__auto____0;
com$fulcrologic$guardrails$core$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__45093__auto____1;
return com$fulcrologic$guardrails$core$state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_59809 = f__45179__auto__();
(statearr_59809[(6)] = c__45178__auto__);

return statearr_59809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));

return c__45178__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__59813 = data;
var map__59813__$1 = cljs.core.__destructure_map(map__59813);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59813__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59813__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59813__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59813__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59813__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59813__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59813__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59813__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5753__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5753__auto__)){
var err = temp__5753__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.tap = (((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.tap_GT_ !== 'undefined'))?(new cljs.core.Var((function (){
return cljs.core.tap_GT_;
}),cljs.core.with_meta(new cljs.core.Symbol("cljs.core","tap>","cljs.core/tap>",895722640,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"tap>","tap>",1822490677,null),"cljs/core.cljs",20,1,11716,11716,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Sends x to any taps. Returns the result of *exec-tap-fn*, a Boolean value.",((cljs.core.tap_GT_)?cljs.core.tap_GT_.cljs$lang$test:null)]))):null);
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__59828,spec,value){
var map__59829 = p__59828;
var map__59829__$1 = cljs.core.__destructure_map(map__59829);
var tap_GT__QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59829__$1,new cljs.core.Keyword(null,"tap>?","tap>?",212454486));
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59829__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59829__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59829__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59829__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59829__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59829__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_59905 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__59906 = (function (){var and__4251__auto__ = args_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return vararg_QMARK_;
} else {
return and__4251__auto__;
}
})();
var varg_59907 = (cljs.core.truth_(vargs_QMARK__59906)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_59908 = (cljs.core.truth_(vargs_QMARK__59906)?((cljs.core.map_QMARK_(varg_59907))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_59907))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_59907))):value);
var valid_exception_59909 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_59908)){
} else {
var problem_59911 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_59908,expound_opts);
var description_59912 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_59911)].join('');
var context_59913 = com.fulcrologic.guardrails.core.get_global_context();
if(cljs.core.truth_((function (){var and__4251__auto__ = com.fulcrologic.guardrails.core.tap;
if(cljs.core.truth_(and__4251__auto__)){
return tap_GT__QMARK_;
} else {
return and__4251__auto__;
}
})())){
var G__59837_59914 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","explain-data","com.fulcrologic.guardrails/explain-data",-1120944464),cljs.spec.alpha.explain_data(spec,specable_args_59908)], null);
(com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1(G__59837_59914) : com.fulcrologic.guardrails.core.tap.call(null,G__59837_59914));
} else {
}

if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_59909,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var G__59839 = description_59912;
if(cljs.core.truth_(context_59913)){
return ["\nContext: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context_59913),G__59839].join('');
} else {
return G__59839;
}
})(),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","context","com.fulcrologic.guardrails/context",-834538901),context_59913], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_59908], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_59912,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = callsite;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e59832){var e_59918 = e59832;
com.fulcrologic.guardrails.utils.report_exception(e_59918,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_59919 = (com.fulcrologic.guardrails.core.now_ms() - start_59905);
if((duration_59919 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_59919),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_59909))){
throw cljs.core.deref(valid_exception_59909);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
