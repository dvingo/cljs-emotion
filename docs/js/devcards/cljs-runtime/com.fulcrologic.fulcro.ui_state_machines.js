goog.provide('com.fulcrologic.fulcro.ui_state_machines');


com.fulcrologic.fulcro.ui_state_machines.mutation_delegate = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","mutation-delegate","com.fulcrologic.fulcro.ui-state-machines/mutation-delegate",-2068639436,null));
com.fulcrologic.fulcro.ui_state_machines.set_js_timeout_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$set_js_timeout_BANG_(f,tm){
return com.fulcrologic.fulcro.algorithms.scheduling.defer(f,tm);
});
com.fulcrologic.fulcro.ui_state_machines.clear_js_timeout_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$clear_js_timeout_BANG_(timer){
return clearTimeout(timer);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","atom","com.fulcrologic.fulcro.ui-state-machines/atom",1971230309),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.do-not-use","atom?","com.fulcrologic.fulcro.algorithms.do-not-use/atom?",1966872138,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.list(new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null),"null",cljs.core.list(new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),cljs.core.PersistentArrayMap.EMPTY),"null",cljs.core.list(new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),cljs.core.PersistentHashSet.EMPTY),"null"], null), null)))),cljs.spec.alpha.with_gen(com.fulcrologic.fulcro.algorithms.do_not_use.atom_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","refresh-vector","com.fulcrologic.fulcro.ui-state-machines/refresh-vector",1069152424),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"tab","tab",-559583621)], null)], null)))),cljs.spec.alpha.with_gen(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("eql","ident?","eql/ident?",-2061479468,null),edn_query_language.core.ident_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__57996){
return cljs.core.vector_QMARK_(G__57996);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"tab","tab",-559583621)], null)], null));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279),new cljs.core.Symbol("com.fulcrologic.fulcro.raw.application","fulcro-app?","com.fulcrologic.fulcro.raw.application/fulcro-app?",-1100918776,null),com.fulcrologic.fulcro.raw.application.fulcro_app_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","source-actor-ident","com.fulcrologic.fulcro.ui-state-machines/source-actor-ident",1906012799),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null),edn_query_language.core.ident_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),cljs.core.keyword_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__57997){
return cljs.core.map_QMARK_(G__57997);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13468__auto__,v__13469__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13469__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("eql","ident?","eql/ident?",-2061479468,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),edn_query_language.core.ident_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__57998){
return cljs.core.map_QMARK_(G__57998);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13468__auto__,v__13469__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13469__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol("eql","ident?","eql/ident?",-2061479468,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn_query_language.core.ident_QMARK_,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__57999){
return cljs.core.map_QMARK_(G__57999);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13468__auto__,v__13469__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13469__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"the-state-machine","the-state-machine",923612868,null)),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.core.symbol_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"the-state-machine","the-state-machine",923612868,null),null], null), null));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58004){
return cljs.core.map_QMARK_(G__58004);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13468__auto__,v__13469__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13469__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer-1","timer-1",549442173),"null",(42),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.core.any_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer-1","timer-1",549442173),null,(42),null], null), null));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-fn","com.fulcrologic.fulcro.ui-state-machines/cancel-fn",1576439332),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"other!","other!",696342595),"null",new cljs.core.Keyword(null,"event!","event!",-361570295),"null"], null), null),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"s","s",1705939918)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.set_QMARK_], null),null),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"other!","other!",696342595),null,new cljs.core.Keyword(null,"event!","event!",-361570295),null], null), null)]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.Symbol(null,"fn-or-set*","fn-or-set*",-424275748,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.list(new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),new cljs.core.Keyword(null,"cancel-on","cancel-on",-479584301))], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Symbol(null,"f","f",43394975,null))))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cancel-on","cancel-on",-479584301),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),true)], null)),"null"], null), null)))),cljs.spec.alpha.with_gen((function com$fulcrologic$fulcro$ui_state_machines$fn_or_set_STAR_(i){
var f = new cljs.core.Keyword(null,"cancel-on","cancel-on",-479584301).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(i));
return ((cljs.core.fn_QMARK_(f)) || (cljs.core.set_QMARK_(f)));
}),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cancel-on","cancel-on",-479584301),(function (e){
return true;
})], null))]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58009#","p1__58009#",-897989025,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),new cljs.core.Symbol(null,"p1__58009#","p1__58009#",-897989025,null),new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Symbol("cljs.core","boolean","cljs.core/boolean",-1222483266,null))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timer","timer",-1266967739),cljs.core.PersistentArrayMap.EMPTY], null)),"null"], null), null)))),cljs.spec.alpha.with_gen((function (p1__58009_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__58009_SHARP_)));
}),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timer","timer",-1266967739),cljs.core.PersistentArrayMap.EMPTY], null))]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58010){
return cljs.core.map_QMARK_(G__58010);
}),(function (G__58010){
return cljs.core.contains_QMARK_(G__58010,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544));
}),(function (G__58010){
return cljs.core.contains_QMARK_(G__58010,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248));
}),(function (G__58010){
return cljs.core.contains_QMARK_(G__58010,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
}),(function (G__58010){
return cljs.core.contains_QMARK_(G__58010,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271));
}),(function (G__58010){
return cljs.core.contains_QMARK_(G__58010,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833));
})], null),(function (G__58010){
return ((cljs.core.map_QMARK_(G__58010)) && (((cljs.core.contains_QMARK_(G__58010,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544))) && (((cljs.core.contains_QMARK_(G__58010,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248))) && (((cljs.core.contains_QMARK_(G__58010,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868))) && (((cljs.core.contains_QMARK_(G__58010,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271))) && (cljs.core.contains_QMARK_(G__58010,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833))))))))))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-timeouts","com.fulcrologic.fulcro.ui-state-machines/queued-timeouts",1249273499),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58019){
return cljs.core.coll_QMARK_(G__58019);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58020){
return cljs.core.map_QMARK_(G__58020);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13468__auto__,v__13469__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13469__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout-descriptor","com.fulcrologic.fulcro.ui-state-machines/timeout-descriptor",761762782))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm","com.fulcrologic.fulcro.ui-state-machines/asm",1736921645),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58023){
return cljs.core.map_QMARK_(G__58023);
}),(function (G__58023){
return cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
}),(function (G__58023){
return cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583));
}),(function (G__58023){
return cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193));
}),(function (G__58023){
return cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928));
}),(function (G__58023){
return cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446));
}),(function (G__58023){
return cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340));
}),(function (G__58023){
return cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193));
}),(function (G__58023){
return cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206));
})], null),(function (G__58023){
return ((cljs.core.map_QMARK_(G__58023)) && (((cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394))) && (((cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583))) && (((cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193))) && (((cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928))) && (((cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446))) && (((cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340))) && (((cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193))) && (cljs.core.contains_QMARK_(G__58023,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206))))))))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","trigger-descriptor","com.fulcrologic.fulcro.ui-state-machines/trigger-descriptor",-1500671927),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58053){
return cljs.core.map_QMARK_(G__58053);
}),(function (G__58053){
return cljs.core.contains_QMARK_(G__58053,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
}),(function (G__58053){
return cljs.core.contains_QMARK_(G__58053,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
})], null),(function (G__58053){
return ((cljs.core.map_QMARK_(G__58053)) && (((cljs.core.contains_QMARK_(G__58053,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394))) && (cljs.core.contains_QMARK_(G__58053,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868))))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-triggers","com.fulcrologic.fulcro.ui-state-machines/queued-triggers",1577632329),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","trigger-descriptor","com.fulcrologic.fulcro.ui-state-machines/trigger-descriptor",-1500671927)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","trigger-descriptor","com.fulcrologic.fulcro.ui-state-machines/trigger-descriptor",-1500671927),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","trigger-descriptor","com.fulcrologic.fulcro.ui-state-machines/trigger-descriptor",-1500671927),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58058){
return cljs.core.coll_QMARK_(G__58058);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","trigger-descriptor","com.fulcrologic.fulcro.ui-state-machines/trigger-descriptor",-1500671927))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-transactions","com.fulcrologic.fulcro.ui-state-machines/queued-transactions",-998495741),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.map_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58059){
return cljs.core.coll_QMARK_(G__58059);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","source-actor-ident","com.fulcrologic.fulcro.ui-state-machines/source-actor-ident",1906012799),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-triggers","com.fulcrologic.fulcro.ui-state-machines/queued-triggers",1577632329),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-mutations","com.fulcrologic.fulcro.ui-state-machines/queued-mutations",-652604760),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-timeouts","com.fulcrologic.fulcro.ui-state-machines/queued-timeouts",1249273499),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-transactions","com.fulcrologic.fulcro.ui-state-machines/queued-transactions",-998495741)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58060){
return cljs.core.map_QMARK_(G__58060);
}),(function (G__58060){
return cljs.core.contains_QMARK_(G__58060,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
}),(function (G__58060){
return cljs.core.contains_QMARK_(G__58060,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
})], null),(function (G__58060){
return ((cljs.core.map_QMARK_(G__58060)) && (((cljs.core.contains_QMARK_(G__58060,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138))) && (cljs.core.contains_QMARK_(G__58060,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394))))));
}),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","source-actor-ident","com.fulcrologic.fulcro.ui-state-machines/source-actor-ident",1906012799),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-triggers","com.fulcrologic.fulcro.ui-state-machines/queued-triggers",1577632329),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-mutations","com.fulcrologic.fulcro.ui-state-machines/queued-mutations",-652604760),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-timeouts","com.fulcrologic.fulcro.ui-state-machines/queued-timeouts",1249273499),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-transactions","com.fulcrologic.fulcro.ui-state-machines/queued-transactions",-998495741)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","source-actor-ident","com.fulcrologic.fulcro.ui-state-machines/source-actor-ident",1906012799),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-triggers","com.fulcrologic.fulcro.ui-state-machines/queued-triggers",1577632329),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-mutations","com.fulcrologic.fulcro.ui-state-machines/queued-mutations",-652604760),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-timeouts","com.fulcrologic.fulcro.ui-state-machines/queued-timeouts",1249273499),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-transactions","com.fulcrologic.fulcro.ui-state-machines/queued-transactions",-998495741)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394)))], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","source-actor-ident","com.fulcrologic.fulcro.ui-state-machines/source-actor-ident",1906012799),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-triggers","com.fulcrologic.fulcro.ui-state-machines/queued-triggers",1577632329),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-mutations","com.fulcrologic.fulcro.ui-state-machines/queued-mutations",-652604760),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-timeouts","com.fulcrologic.fulcro.ui-state-machines/queued-timeouts",1249273499),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-transactions","com.fulcrologic.fulcro.ui-state-machines/queued-transactions",-998495741)], null)])));
com.fulcrologic.fulcro.ui_state_machines.fake_handler = (function com$fulcrologic$fulcro$ui_state_machines$fake_handler(env){
return env;
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-names","com.fulcrologic.fulcro.ui-state-machines/actor-names",-672395334),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58065){
return cljs.core.set_QMARK_(G__58065);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-predicate","com.fulcrologic.fulcro.ui-state-machines/event-predicate",620527987),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),true),"null",cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),false),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.core.fn_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([(function (_){
return true;
}),(function (_){
return false;
})]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","fake-handler","com.fulcrologic.fulcro.ui-state-machines/fake-handler",2029910922,null),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.core.fn_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([com.fulcrologic.fulcro.ui_state_machines.fake_handler]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-processing","com.fulcrologic.fulcro.ui-state-machines/event-processing",1901553910),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-predicate","com.fulcrologic.fulcro.ui-state-machines/event-predicate",620527987),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58068){
return cljs.core.map_QMARK_(G__58068);
})], null),(function (G__58068){
return cljs.core.map_QMARK_(G__58068);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-predicate","com.fulcrologic.fulcro.ui-state-machines/event-predicate",620527987),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-predicate","com.fulcrologic.fulcro.ui-state-machines/event-predicate",620527987),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-predicate","com.fulcrologic.fulcro.ui-state-machines/event-predicate",620527987),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-processing","com.fulcrologic.fulcro.ui-state-machines/event-processing",1901553910)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-processing","com.fulcrologic.fulcro.ui-state-machines/event-processing",1901553910)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-processing","com.fulcrologic.fulcro.ui-state-machines/event-processing",1901553910)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-processing","com.fulcrologic.fulcro.ui-state-machines/event-processing",1901553910)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58072){
return cljs.core.map_QMARK_(G__58072);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13468__auto__,v__13469__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13469__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-processing","com.fulcrologic.fulcro.ui-state-machines/event-processing",1901553910))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state","com.fulcrologic.fulcro.ui-state-machines/state",-148827517),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182)], null)),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363)], null))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","fake-handler","com.fulcrologic.fulcro.ui-state-machines/fake-handler",2029910922,null)], null),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"events","events",1792552201)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182)], null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58080){
return cljs.core.map_QMARK_(G__58080);
}),(function (G__58080){
return cljs.core.contains_QMARK_(G__58080,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182));
})], null),(function (G__58080){
return ((cljs.core.map_QMARK_(G__58080)) && (cljs.core.contains_QMARK_(G__58080,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182)))], null),null])),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58092){
return cljs.core.map_QMARK_(G__58092);
}),(function (G__58092){
return cljs.core.contains_QMARK_(G__58092,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363));
})], null),(function (G__58092){
return ((cljs.core.map_QMARK_(G__58092)) && (cljs.core.contains_QMARK_(G__58092,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363)))], null),null]))], null),null),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.ui_state_machines.fake_handler], null)]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state","com.fulcrologic.fulcro.ui-state-machines/state",-148827517)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","fake-handler","com.fulcrologic.fulcro.ui-state-machines/fake-handler",2029910922,null)], null)], null),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state","com.fulcrologic.fulcro.ui-state-machines/state",-148827517)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state","com.fulcrologic.fulcro.ui-state-machines/state",-148827517)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state","com.fulcrologic.fulcro.ui-state-machines/state",-148827517)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58098){
return cljs.core.map_QMARK_(G__58098);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13468__auto__,v__13469__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13469__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-id","com.fulcrologic.fulcro.ui-state-machines/state-id",-1747313730),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state","com.fulcrologic.fulcro.ui-state-machines/state",-148827517))], null),null),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.ui_state_machines.fake_handler], null)], null)]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","alias","com.fulcrologic.fulcro.ui-state-machines/alias",466933196),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.list(new cljs.core.Symbol("s","every","s/every",-419764428,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58102){
return ((cljs.core.vector_QMARK_(G__58102)) && (((((function (){var or__4253__auto__ = (1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((1)
,G__58102))) && ((cljs.core.bounded_count((1)
,G__58102) <= (function (){var or__4253__auto__ = null;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58101){
return cljs.core.map_QMARK_(G__58101);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13468__auto__,v__13469__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13469__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugin","com.fulcrologic.fulcro.ui-state-machines/plugin",270487339),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_aliases","_aliases",896000603,null)], null),null),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.core.any_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([(function (_aliases){
return null;
})]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugins","com.fulcrologic.fulcro.ui-state-machines/plugins",-304622321),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugin","com.fulcrologic.fulcro.ui-state-machines/plugin",270487339)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugin","com.fulcrologic.fulcro.ui-state-machines/plugin",270487339)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugin","com.fulcrologic.fulcro.ui-state-machines/plugin",270487339)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugin","com.fulcrologic.fulcro.ui-state-machines/plugin",270487339)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58112){
return cljs.core.map_QMARK_(G__58112);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13468__auto__,v__13469__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13469__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugin","com.fulcrologic.fulcro.ui-state-machines/plugin",270487339))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-names","com.fulcrologic.fulcro.ui-state-machines/event-names",-271643382),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58117){
return cljs.core.set_QMARK_(G__58117);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-definition","com.fulcrologic.fulcro.ui-state-machines/state-machine-definition",2134883152),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-names","com.fulcrologic.fulcro.ui-state-machines/actor-names",-672395334),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugins","com.fulcrologic.fulcro.ui-state-machines/plugins",-304622321),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-names","com.fulcrologic.fulcro.ui-state-machines/event-names",-271643382)], null)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-names","com.fulcrologic.fulcro.ui-state-machines/actor-names",-672395334),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"null"], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",-175281708,null)], null),new cljs.core.Symbol(null,"env","env",-175281708,null))], null)], null)], null),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58125){
return cljs.core.map_QMARK_(G__58125);
}),(function (G__58125){
return cljs.core.contains_QMARK_(G__58125,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308));
})], null),(function (G__58125){
return ((cljs.core.map_QMARK_(G__58125)) && (cljs.core.contains_QMARK_(G__58125,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308))));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-names","com.fulcrologic.fulcro.ui-state-machines/actor-names",-672395334),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugins","com.fulcrologic.fulcro.ui-state-machines/plugins",-304622321),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-names","com.fulcrologic.fulcro.ui-state-machines/event-names",-271643382)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-names","com.fulcrologic.fulcro.ui-state-machines/actor-names",-672395334),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugins","com.fulcrologic.fulcro.ui-state-machines/plugins",-304622321),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-names","com.fulcrologic.fulcro.ui-state-machines/event-names",-271643382)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-names","com.fulcrologic.fulcro.ui-state-machines/actor-names",-672395334),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugins","com.fulcrologic.fulcro.ui-state-machines/plugins",-304622321),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-names","com.fulcrologic.fulcro.ui-state-machines/event-names",-271643382)], null)])),(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-names","com.fulcrologic.fulcro.ui-state-machines/actor-names",-672395334),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return env;
})], null)], null)], null)]));
})));
com.fulcrologic.fulcro.ui_state_machines.registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$register_state_machine_BANG_(id,definition){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.ui_state_machines.registry,cljs.core.assoc,id,definition);
});
com.fulcrologic.fulcro.ui_state_machines.get_state_machine = (function com$fulcrologic$fulcro$ui_state_machines$get_state_machine(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.ui_state_machines.registry),id);
});
com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine = (function com$fulcrologic$fulcro$ui_state_machines$lookup_state_machine(env){
var G__58140 = (function (){var G__58141 = env;
var G__58142 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583)], null);
return (com.fulcrologic.fulcro.ui_state_machines.asm_value.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.ui_state_machines.asm_value.cljs$core$IFn$_invoke$arity$2(G__58141,G__58142) : com.fulcrologic.fulcro.ui_state_machines.asm_value.call(null,G__58141,G__58142));
})();
if((G__58140 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.fulcro.ui_state_machines.registry),G__58140);
}
});
com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine_field = (function com$fulcrologic$fulcro$ui_state_machines$lookup_state_machine_field(env,ks){
if(cljs.core.vector_QMARK_(ks)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine(env),ks);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine(env),ks);
}
});
/**
 * Mutation: Trigger an event on an active state machine
 */
com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","trigger-state-machine-event","com.fulcrologic.fulcro.ui-state-machines/trigger-state-machine-event",717825464,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","trigger-state-machine-event","com.fulcrologic.fulcro.ui-state-machines/trigger-state-machine-event",717825464,null),(function (fulcro_mutation_env_symbol){
var map__58148 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__58148__$1 = cljs.core.__destructure_map(map__58148);
var params = map__58148__$1;
var event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58148__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58148__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58148__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$ui_state_machines$action(p__58153){
var map__58156 = p__58153;
var map__58156__$1 = cljs.core.__destructure_map(map__58156);
var env = map__58156__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58156__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__58157_58627 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__58158_58628 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__58158_58628);

try{var map__58160_58629 = event_data;
var map__58160_58630__$1 = cljs.core.__destructure_map(map__58160_58629);
var transact_options_58631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160_58630__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","transact-options","com.fulcrologic.fulcro.ui-state-machines/transact-options",-1902859465));
if((event_id == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,134,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Invalid (nil) event ID. See https://book.fulcrologic.com/#err-uism-invalid-eventid"], null);
}),null)),null,-183026518,null);
} else {
}

(com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_.cljs$core$IFn$_invoke$arity$2(env,params) : com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_.call(null,env,params));

com.fulcrologic.fulcro.raw.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(app,(function (){var or__4253__auto__ = transact_options_58631;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__58157_58627);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__58164 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__58165 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__58165);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__58164);
}})], null);
}));
/**
 * Trigger an event on an active state machine. Safe to use in mutation bodies. The special key ::uism/transact-options can
 *   be used in `extra-data` to indicate a map of options to send to fulcro's `transact!` and rendering sublayer (for example
 *   to control rendering refresh).
 */
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$trigger_BANG_(var_args){
var G__58168 = arguments.length;
switch (G__58168) {
case 3:
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,active_state_machine_id,event_id){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,active_state_machine_id,event_id,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,active_state_machine_id,event_id,extra_data){
var map__58170 = extra_data;
var map__58170__$1 = cljs.core.__destructure_map(map__58170);
var transact_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58170__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","transact-options","com.fulcrologic.fulcro.ui-state-machines/transact-options",-1902859465));
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58171 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),active_state_machine_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),event_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),extra_data], null);
return (com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1(G__58171) : com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.call(null,G__58171));
})()], null),(function (){var or__4253__auto__ = transact_options;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
}));

(com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$lang$maxFixedArity = 4);

var debounced_BANG__58635 = goog.functions.debounce((function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),(200));
/**
 * Just like `trigger!`, but does optimistic actions synchronously so that events that change data rendered in
 *   form fields will be updated synchronously.
 */
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$trigger_BANG__BANG_(var_args){
var G__58178 = arguments.length;
switch (G__58178) {
case 3:
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,active_state_machine_id,event_id){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$core$IFn$_invoke$arity$4(this$,active_state_machine_id,event_id,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,active_state_machine_id,event_id,extra_data){
var map__58180 = extra_data;
var map__58180__$1 = cljs.core.__destructure_map(map__58180);
var transact_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58180__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","transact-options","com.fulcrologic.fulcro.ui-state-machines/transact-options",-1902859465));
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(this$);
com.fulcrologic.fulcro.raw.components.transact_BANG__BANG_.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58181 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),active_state_machine_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),event_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),extra_data], null);
return (com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1(G__58181) : com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.call(null,G__58181));
})()], null),(function (){var or__4253__auto__ = transact_options;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

var G__58182 = (function (){
return com.fulcrologic.fulcro.raw.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(app);
});
return (debounced_BANG__58635.cljs$core$IFn$_invoke$arity$1 ? debounced_BANG__58635.cljs$core$IFn$_invoke$arity$1(G__58182) : debounced_BANG__58635.call(null,G__58182));
}));

(com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Returns the ident of the active state machine with the given ID
 */
com.fulcrologic.fulcro.ui_state_machines.asm_ident = (function com$fulcrologic$fulcro$ui_state_machines$asm_ident(asm_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null);
});
/**
 * Returns the active state machine ID from the state machine env.
 */
com.fulcrologic.fulcro.ui_state_machines.asm_id = (function com$fulcrologic$fulcro$ui_state_machines$asm_id(env){
return new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394).cljs$core$IFn$_invoke$arity$1(env);
});
/**
 * Create the runtime state for the given state machine in it's initial state.
 * 
 *   - `::asm-id` is the globally unique key of for a state machine definition.
 *   - `::asm-id` is a user-generated unique ID for the instance of the asm. This allows more than one
 *  instance of the same state machine definition to be active at the same time on the UI.
 *   - `::actor->ident` is a map from actor name to an ident.
 * 
 *   Returns an active state machine that can be stored in Fulcro state for a specific
 *   state machine definition.
 */
com.fulcrologic.fulcro.ui_state_machines.new_asm = (function com$fulcrologic$fulcro$ui_state_machines$new_asm(p__58191){
var map__58192 = p__58191;
var map__58192__$1 = cljs.core.__destructure_map(map__58192);
var state_machine_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583));
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
var actor__GT_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928));
var actor__GT_component_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446));
var i__GT_a = clojure.set.map_invert(actor__GT_ident);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),state_machine_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340),i__GT_a,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),actor__GT_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446),(function (){var or__4253__auto__ = actor__GT_component_name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206),cljs.core.PersistentArrayMap.EMPTY], null);
});
com.fulcrologic.fulcro.ui_state_machines.asm_active_QMARK_ = (function com$fulcrologic$fulcro$ui_state_machines$asm_active_QMARK_(app_ish,id){
var state_map = com.fulcrologic.fulcro.raw.application.current_state(app_ish);
return cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),id], null)));
});
/**
 * Returns the path to an asm elements in an asm `env`.
 */
com.fulcrologic.fulcro.ui_state_machines.asm_path = (function com$fulcrologic$fulcro$ui_state_machines$asm_path(p__58195,ks){
var map__58196 = p__58195;
var map__58196__$1 = cljs.core.__destructure_map(map__58196);
var env = map__58196__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
var path = ((cljs.core.vector_QMARK_(ks))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null),ks):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,ks], null));
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.ui-state-machines",null,214,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY),"Attempt to get an ASM path",ks,"for a state machine that is not in Fulcro state. ASM ID: ",asm_id,"See https://book.fulcrologic.com/#warn-uism-sm-not-in-state"], null);
}),null)),null,295565748,null);
} else {
}

return path;
});
/**
 * Get the value of an ASM based on keyword OR key-path `ks`.
 */
com.fulcrologic.fulcro.ui_state_machines.asm_value = (function com$fulcrologic$fulcro$ui_state_machines$asm_value(env,ks){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,com.fulcrologic.fulcro.ui_state_machines.asm_path(env,ks));
});
com.fulcrologic.fulcro.ui_state_machines.valid_state_QMARK_ = (function com$fulcrologic$fulcro$ui_state_machines$valid_state_QMARK_(env,state_id){
var states = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","exit","com.fulcrologic.fulcro.ui-state-machines/exit",600820288),null,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","started","com.fulcrologic.fulcro.ui-state-machines/started",-1306384334),null], null), null),cljs.core.set(cljs.core.keys(com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine_field(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308)))));
return cljs.core.contains_QMARK_(states,state_id);
});
/**
 * Move to the given state. Returns a new env.
 */
com.fulcrologic.fulcro.ui_state_machines.activate = (function com$fulcrologic$fulcro$ui_state_machines$activate(env,state_id){
if(com.fulcrologic.fulcro.ui_state_machines.valid_state_QMARK_(env,state_id)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,235,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Activating state ",state_id,"on",com.fulcrologic.fulcro.ui_state_machines.asm_id(env)], null);
}),null)),null,481985373,null);

return cljs.core.assoc_in(env,com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193)),state_id);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,238,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Activate called for invalid state: ",state_id,"on",com.fulcrologic.fulcro.ui_state_machines.asm_id(env),"See https://book.fulcrologic.com/#err-uism-activate-invalid-state"], null);
}),null)),null,1851758646,null);

return env;
}
});
/**
 * Store a k/v pair with the active state machine (will only exist as long as it is active)
 */
com.fulcrologic.fulcro.ui_state_machines.store = (function com$fulcrologic$fulcro$ui_state_machines$store(env,k,v){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(env,com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206)),cljs.core.assoc,k,v);
});
/**
 * Retrieve the value for a k from the active state machine. See `store`.
 */
com.fulcrologic.fulcro.ui_state_machines.retrieve = (function com$fulcrologic$fulcro$ui_state_machines$retrieve(var_args){
var G__58209 = arguments.length;
switch (G__58209) {
case 2:
return com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2 = (function (env,k){
return com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$3(env,k,null);
}));

(com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$3 = (function (env,k,dflt){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(env,com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206),k], null)),dflt);
}));

(com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident = (function com$fulcrologic$fulcro$ui_state_machines$actor__GT_ident(env,actor_name){
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928)));
if(cljs.core.truth_(temp__5753__auto__)){
var lookup = temp__5753__auto__;
return (lookup.cljs$core$IFn$_invoke$arity$1 ? lookup.cljs$core$IFn$_invoke$arity$1(actor_name) : lookup.call(null,actor_name));
} else {
return null;
}
});
/**
 * Looks up the given alias in the alias map and returns the real Fulcro state path or nil if no such path exists.
 */
com.fulcrologic.fulcro.ui_state_machines.resolve_alias = (function com$fulcrologic$fulcro$ui_state_machines$resolve_alias(env,alias){
var temp__5753__auto__ = com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine_field(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),alias], null));
if(cljs.core.truth_(temp__5753__auto__)){
var resolution_path = temp__5753__auto__;
var vec__58218 = resolution_path;
var seq__58219 = cljs.core.seq(vec__58218);
var first__58220 = cljs.core.first(seq__58219);
var seq__58219__$1 = cljs.core.next(seq__58219);
var actor = first__58220;
var subpath = seq__58219__$1;
var base_path = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,actor);
var real_path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(base_path,subpath);
return real_path;
} else {
return null;
}
});
/**
 * Get the real Fulcro state-path for the entity of the given actor.
 */
com.fulcrologic.fulcro.ui_state_machines.actor_path = (function com$fulcrologic$fulcro$ui_state_machines$actor_path(var_args){
var G__58223 = arguments.length;
switch (G__58223) {
case 2:
return com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$core$IFn$_invoke$arity$2 = (function (env,actor_name){
return com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$core$IFn$_invoke$arity$3(env,actor_name,null);
}));

(com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$core$IFn$_invoke$arity$3 = (function (env,actor_name,k){
var temp__5751__auto__ = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,actor_name);
if(cljs.core.truth_(temp__5751__auto__)){
var ident = temp__5751__auto__;
var G__58229 = ident;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58229,k);
} else {
return G__58229;
}
} else {
return null;
}
}));

(com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$lang$maxFixedArity = 3);

/**
 * Set a value in the actor's Fulcro entity. Only the actor is resolved. The k is not processed as an alias. 
 */
com.fulcrologic.fulcro.ui_state_machines.set_actor_value = (function com$fulcrologic$fulcro$ui_state_machines$set_actor_value(env,actor_name,k,v){
var temp__5751__auto__ = com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$core$IFn$_invoke$arity$3(env,actor_name,k);
if(cljs.core.truth_(temp__5751__auto__)){
var path = temp__5751__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),cljs.core.assoc_in,path,v);
} else {
return env;
}
});
/**
 * Get the value of a particular key in the given actor's entity. If follow-idents? is true (which is the default),
 *   then it will recursively follow idents until it finds a non-ident value.
 */
com.fulcrologic.fulcro.ui_state_machines.actor_value = (function com$fulcrologic$fulcro$ui_state_machines$actor_value(var_args){
var G__58238 = arguments.length;
switch (G__58238) {
case 4:
return com.fulcrologic.fulcro.ui_state_machines.actor_value.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return com.fulcrologic.fulcro.ui_state_machines.actor_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.actor_value.cljs$core$IFn$_invoke$arity$4 = (function (p__58246,actor_name,k,follow_idents_QMARK_){
var map__58247 = p__58246;
var map__58247__$1 = cljs.core.__destructure_map(map__58247);
var env = map__58247__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58247__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var temp__5753__auto__ = com.fulcrologic.fulcro.ui_state_machines.actor_path.cljs$core$IFn$_invoke$arity$3(env,actor_name,k);
if(cljs.core.truth_(temp__5753__auto__)){
var path = temp__5753__auto__;
var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,path);
var depth = (100);
while(true){
if(cljs.core.truth_((function (){var and__4251__auto__ = follow_idents_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return ((edn_query_language.core.ident_QMARK_(v)) && (cljs.core.pos_int_QMARK_(depth)));
} else {
return and__4251__auto__;
}
})())){
var G__58647 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,v);
var G__58648 = (depth - (1));
v = G__58647;
depth = G__58648;
continue;
} else {
return v;
}
break;
}
} else {
return null;
}
}));

(com.fulcrologic.fulcro.ui_state_machines.actor_value.cljs$core$IFn$_invoke$arity$3 = (function (env,actor_name,k){
return com.fulcrologic.fulcro.ui_state_machines.actor_value.cljs$core$IFn$_invoke$arity$4(env,actor_name,k,true);
}));

(com.fulcrologic.fulcro.ui_state_machines.actor_value.cljs$lang$maxFixedArity = 4);

/**
 * Get a Fulcro state value by state machine data alias.
 */
com.fulcrologic.fulcro.ui_state_machines.alias_value = (function com$fulcrologic$fulcro$ui_state_machines$alias_value(p__58256,alias){
var map__58258 = p__58256;
var map__58258__$1 = cljs.core.__destructure_map(map__58258);
var env = map__58258__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58258__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var temp__5751__auto__ = com.fulcrologic.fulcro.ui_state_machines.resolve_alias(env,alias);
if(cljs.core.truth_(temp__5751__auto__)){
var real_path = temp__5751__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,real_path);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,313,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find alias in state machine:",alias,"See https://book.fulcrologic.com/#err-uism-unknown-alias"], null);
}),null)),null,866378722,null);

return null;
}
});
/**
 * Deprecated. Use assoc-aliased.
 */
com.fulcrologic.fulcro.ui_state_machines.set_aliased_value = (function com$fulcrologic$fulcro$ui_state_machines$set_aliased_value(var_args){
var G__58267 = arguments.length;
switch (G__58267) {
case 3:
return com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___58650 = arguments.length;
var i__4865__auto___58651 = (0);
while(true){
if((i__4865__auto___58651 < len__4864__auto___58650)){
args_arr__4885__auto__.push((arguments[i__4865__auto___58651]));

var G__58653 = (i__4865__auto___58651 + (1));
i__4865__auto___58651 = G__58653;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((5)),(0),null));
return com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4886__auto__);

}
});

(com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$variadic = (function (env,alias,new_value,alias_2,value_2,kv_pairs){
var kvs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,new_value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_2,value_2], null)], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kv_pairs));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (e,p__58271){
var vec__58272 = p__58271;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58272,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58272,(1),null);
return com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$3(e,k,v);
}),env,kvs);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$lang$applyTo = (function (seq58261){
var G__58262 = cljs.core.first(seq58261);
var seq58261__$1 = cljs.core.next(seq58261);
var G__58263 = cljs.core.first(seq58261__$1);
var seq58261__$2 = cljs.core.next(seq58261__$1);
var G__58264 = cljs.core.first(seq58261__$2);
var seq58261__$3 = cljs.core.next(seq58261__$2);
var G__58265 = cljs.core.first(seq58261__$3);
var seq58261__$4 = cljs.core.next(seq58261__$3);
var G__58266 = cljs.core.first(seq58261__$4);
var seq58261__$5 = cljs.core.next(seq58261__$4);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58262,G__58263,G__58264,G__58265,G__58266,seq58261__$5);
}));

(com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$3 = (function (env,alias,new_value){
var temp__5751__auto__ = com.fulcrologic.fulcro.ui_state_machines.resolve_alias(env,alias);
if(cljs.core.truth_(temp__5751__auto__)){
var real_path = temp__5751__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),cljs.core.assoc_in,real_path,new_value);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,331,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attempt to set a value on an invalid alias:",alias], null);
}),null)),null,461660515,null);

return env;
}
}));

(com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$lang$maxFixedArity = (5));

/**
 * Extracts aliased data from Fulcro state to construct arguments. If explicit-args is supplied,
 * then that is merged with aliased data, passed to the named plugin.  The return of the plugin is
 * the result of this function
 */
com.fulcrologic.fulcro.ui_state_machines.aliased_data = (function com$fulcrologic$fulcro$ui_state_machines$aliased_data(env){
var alias_keys = (function (){var G__58285 = com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine_field(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324));
if((G__58285 == null)){
return null;
} else {
return cljs.core.keys(G__58285);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,com.fulcrologic.fulcro.ui_state_machines.alias_value(env,k));
}),cljs.core.PersistentArrayMap.EMPTY,alias_keys);
});
/**
 * Run a state-machine plugin. Extracts aliased data from Fulcro state to construct arguments. If explicit-args is supplied,
 * then that is merged with aliased data, passed to the named plugin.  The return of the plugin is
 * the result of this function. Plugins cannot side-effect, and are meant for providing external computation algorithms
 * that the state machine logic might need. For example, an actor representing a form might need to provide validation
 * logic.
 * 
 * If explicit-args are passed, then they will take *precedence* over the auto-extracted aliased data that is passed to
 * the plugin.
 */
com.fulcrologic.fulcro.ui_state_machines.run = (function com$fulcrologic$fulcro$ui_state_machines$run(var_args){
var G__58288 = arguments.length;
switch (G__58288) {
case 2:
return com.fulcrologic.fulcro.ui_state_machines.run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.ui_state_machines.run.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.run.cljs$core$IFn$_invoke$arity$2 = (function (env,plugin_name){
return com.fulcrologic.fulcro.ui_state_machines.run.cljs$core$IFn$_invoke$arity$3(env,plugin_name,null);
}));

(com.fulcrologic.fulcro.ui_state_machines.run.cljs$core$IFn$_invoke$arity$3 = (function (env,plugin_name,explicit_args){
var temp__5753__auto__ = com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine_field(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","plugins","com.fulcrologic.fulcro.ui-state-machines/plugins",-304622321),plugin_name], null));
if(cljs.core.truth_(temp__5753__auto__)){
var plugin = temp__5753__auto__;
var params = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.ui_state_machines.aliased_data(env),explicit_args], 0));
return (plugin.cljs$core$IFn$_invoke$arity$1 ? plugin.cljs$core$IFn$_invoke$arity$1(params) : plugin.call(null,params));
} else {
return null;
}
}));

(com.fulcrologic.fulcro.ui_state_machines.run.cljs$lang$maxFixedArity = 3);

/**
 * Indicate that the state machine is done.
 */
com.fulcrologic.fulcro.ui_state_machines.exit = (function com$fulcrologic$fulcro$ui_state_machines$exit(env){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,368,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exiting state machine",com.fulcrologic.fulcro.ui_state_machines.asm_id(env)], null);
}),null)),null,-913621958,null);

return com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","exit","com.fulcrologic.fulcro.ui-state-machines/exit",600820288));
});
com.fulcrologic.fulcro.ui_state_machines.apply_event_value = (function com$fulcrologic$fulcro$ui_state_machines$apply_event_value(env,p__58292){
var map__58293 = p__58292;
var map__58293__$1 = cljs.core.__destructure_map(map__58293);
var event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var alias = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","alias","com.fulcrologic.fulcro.ui-state-machines/alias",466933196).cljs$core$IFn$_invoke$arity$1(event_data);
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(event_data);
var G__58294 = env;
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","value-changed","com.fulcrologic.fulcro.ui-state-machines/value-changed",-292687479),event_id);
if(and__4251__auto__){
return alias;
} else {
return and__4251__auto__;
}
})())){
return com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$3(G__58294,alias,value);
} else {
return G__58294;
}
});
/**
 * Create an env for use with other functions. Used internally, but may be used as a helper .
 */
com.fulcrologic.fulcro.ui_state_machines.state_machine_env = (function com$fulcrologic$fulcro$ui_state_machines$state_machine_env(var_args){
var G__58298 = arguments.length;
switch (G__58298) {
case 2:
return com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$2 = (function (state_map,asm_id){
return com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5(state_map,null,asm_id,null,null);
}));

(com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5 = (function (state_map,ref,asm_id,event_id,event_data){
return com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$6(state_map,ref,asm_id,event_id,event_data,null);
}));

(com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$6 = (function (state_map,ref,asm_id,event_id,event_data,app){
var G__58300 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),state_map,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null);
var G__58300__$1 = (cljs.core.truth_(event_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58300,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),event_id):G__58300);
var G__58300__$2 = (cljs.core.truth_(app)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58300__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489),app):G__58300__$1);
var G__58300__$3 = ((cljs.core.seq(event_data))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58300__$2,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),event_data):G__58300__$2);
if(cljs.core.truth_(ref)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58300__$3,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","source-actor-ident","com.fulcrologic.fulcro.ui-state-machines/source-actor-ident",1906012799),ref);
} else {
return G__58300__$3;
}
}));

(com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$lang$maxFixedArity = 6);

/**
 * Associate a given component UI Fulcro class with an ident.  This is used with `begin!` in your actor map if the
 *   actor in question is going to be used with loads or mutations that return a value of that type. The actor's class
 *   can be retrieved for use in a handler using `(uism/actor-class env)`.
 * 
 *   ```
 *   (begin! ... {:person (uism/with-actor-class [:person/by-id 1] Person)})
 *   ```
 *   
 */
com.fulcrologic.fulcro.ui_state_machines.with_actor_class = (function com$fulcrologic$fulcro$ui_state_machines$with_actor_class(ident,class$){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(ident,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","class","com.fulcrologic.fulcro.ui-state-machines/class",438107210),class$);
});
/**
 * Convert one of the possible inputs for an actor into an actor component registry key.
 * 
 *   v can be an ident with actor metadata (see `with-actor-class`), a Fulcro runtime instance whose `get-ident` returns
 *   a valid ident, or a Fulcro component class with a singleton ident.
 * 
 *   Returns the Fulcro component registry key (a keyword) that will be able to find the real Fulcro
 *   component for `v`.
 */
com.fulcrologic.fulcro.ui_state_machines.any__GT_actor_component_registry_key = (function com$fulcrologic$fulcro$ui_state_machines$any__GT_actor_component_registry_key(v){
var temp__5753__auto__ = ((((edn_query_language.core.ident_QMARK_(v)) && (com.fulcrologic.fulcro.raw.components.component_class_QMARK_((function (){var G__58303 = v;
var G__58303__$1 = (((G__58303 == null))?null:cljs.core.meta(G__58303));
if((G__58303__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","class","com.fulcrologic.fulcro.ui-state-machines/class",438107210).cljs$core$IFn$_invoke$arity$1(G__58303__$1);
}
})()))))?(function (){var G__58305 = v;
var G__58305__$1 = (((G__58305 == null))?null:cljs.core.meta(G__58305));
if((G__58305__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","class","com.fulcrologic.fulcro.ui-state-machines/class",438107210).cljs$core$IFn$_invoke$arity$1(G__58305__$1);
}
})():(cljs.core.truth_((function (){var and__4251__auto__ = com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(v);
if(and__4251__auto__){
return cljs.core.second(com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$1(v));
} else {
return and__4251__auto__;
}
})())?com.fulcrologic.fulcro.raw.components.component_type(v):(cljs.core.truth_((function (){var and__4251__auto__ = com.fulcrologic.fulcro.raw.components.component_class_QMARK_(v);
if(and__4251__auto__){
return cljs.core.second(com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(v,cljs.core.PersistentArrayMap.EMPTY));
} else {
return and__4251__auto__;
}
})())?v:null
)));
if(cljs.core.truth_(temp__5753__auto__)){
var cls = temp__5753__auto__;
var str_name = com.fulcrologic.fulcro.raw.components.component_name(cls);
var vec__58306 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(str_name,/\//);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58306,(0),null);
var nm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58306,(1),null);
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,nm);
return k;
} else {
return null;
}
});
/**
 * Returns the Fulcro component class that for the given actor, if set.
 */
com.fulcrologic.fulcro.ui_state_machines.actor_class = (function com$fulcrologic$fulcro$ui_state_machines$actor_class(env,actor_name){
var actor__GT_component_name = com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446));
var cls = (function (){var G__58310 = actor_name;
var G__58310__$1 = (((G__58310 == null))?null:(actor__GT_component_name.cljs$core$IFn$_invoke$arity$1 ? actor__GT_component_name.cljs$core$IFn$_invoke$arity$1(G__58310) : actor__GT_component_name.call(null,G__58310)));
if((G__58310__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.raw.components.registry_key__GT_class(G__58310__$1);
}
})();
return cls;
});
/**
 * Safely changes the ident of an actor.
 * 
 *   Makes sure ident is consistently reset and updates the actor class (if one is specified
 *   using `with-actor-class`).
 */
com.fulcrologic.fulcro.ui_state_machines.reset_actor_ident = (function com$fulcrologic$fulcro$ui_state_machines$reset_actor_ident(env,actor,ident){
var new_actor = com.fulcrologic.fulcro.ui_state_machines.any__GT_actor_component_registry_key(ident);
var actor__GT_ident = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928)),actor,ident);
var ident__GT_actor = clojure.set.map_invert(actor__GT_ident);
var actor__GT_ident_path = com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928));
var actor__GT_component_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446)),actor);
var ident__GT_actor_path = com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ident->actor","com.fulcrologic.fulcro.ui-state-machines/ident->actor",491940340));
var G__58313 = cljs.core.assoc_in(cljs.core.assoc_in(env,actor__GT_ident_path,actor__GT_ident),ident__GT_actor_path,ident__GT_actor);
if(cljs.core.truth_(new_actor)){
return cljs.core.assoc_in(G__58313,actor__GT_component_path,new_actor);
} else {
return G__58313;
}
});
/**
 * Similar to clojure.core/assoc but works on UISM env and aliases.
 */
com.fulcrologic.fulcro.ui_state_machines.assoc_aliased = (function com$fulcrologic$fulcro$ui_state_machines$assoc_aliased(var_args){
var G__58323 = arguments.length;
switch (G__58323) {
case 3:
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___58662 = arguments.length;
var i__4865__auto___58663 = (0);
while(true){
if((i__4865__auto___58663 < len__4864__auto___58662)){
args_arr__4885__auto__.push((arguments[i__4865__auto___58663]));

var G__58664 = (i__4865__auto___58663 + (1));
i__4865__auto___58663 = G__58664;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((5)),(0),null));
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4886__auto__);

}
});

(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$variadic = (function (env,alias,new_value,alias_2,value_2,kv_pairs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.set_aliased_value,env,alias,new_value,alias_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value_2,kv_pairs], 0));
}));

/** @this {Function} */
(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$lang$applyTo = (function (seq58316){
var G__58317 = cljs.core.first(seq58316);
var seq58316__$1 = cljs.core.next(seq58316);
var G__58318 = cljs.core.first(seq58316__$1);
var seq58316__$2 = cljs.core.next(seq58316__$1);
var G__58319 = cljs.core.first(seq58316__$2);
var seq58316__$3 = cljs.core.next(seq58316__$2);
var G__58320 = cljs.core.first(seq58316__$3);
var seq58316__$4 = cljs.core.next(seq58316__$3);
var G__58321 = cljs.core.first(seq58316__$4);
var seq58316__$5 = cljs.core.next(seq58316__$4);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58317,G__58318,G__58319,G__58320,G__58321,seq58316__$5);
}));

(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3 = (function (env,alias,new_value){
return com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$3(env,alias,new_value);
}));

(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$lang$maxFixedArity = (5));

/**
 * Similar to clojure.core/update but works on UISM env and aliases.
 */
com.fulcrologic.fulcro.ui_state_machines.update_aliased = (function com$fulcrologic$fulcro$ui_state_machines$update_aliased(var_args){
var G__58336 = arguments.length;
switch (G__58336) {
case 3:
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___58667 = arguments.length;
var i__4865__auto___58668 = (0);
while(true){
if((i__4865__auto___58668 < len__4864__auto___58667)){
args_arr__4885__auto__.push((arguments[i__4865__auto___58668]));

var G__58669 = (i__4865__auto___58668 + (1));
i__4865__auto___58668 = G__58669;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((6)),(0),null));
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4886__auto__);

}
});

(com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$3 = (function (env,k,f){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,k,(function (){var G__58339 = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58339) : f.call(null,G__58339));
})());
}));

(com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$4 = (function (env,k,f,x){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,k,(function (){var G__58340 = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,k);
var G__58341 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__58340,G__58341) : f.call(null,G__58340,G__58341));
})());
}));

(com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$5 = (function (env,k,f,x,y){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,k,(function (){var G__58343 = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,k);
var G__58344 = x;
var G__58345 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__58343,G__58344,G__58345) : f.call(null,G__58343,G__58344,G__58345));
})());
}));

(com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$6 = (function (env,k,f,x,y,z){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,k,(function (){var G__58346 = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,k);
var G__58347 = x;
var G__58348 = y;
var G__58349 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__58346,G__58347,G__58348,G__58349) : f.call(null,G__58346,G__58347,G__58348,G__58349));
})());
}));

(com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$variadic = (function (env,k,f,x,y,z,more){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,com.fulcrologic.fulcro.ui_state_machines.alias_value(env,k),x,y,z,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)));
}));

/** @this {Function} */
(com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$lang$applyTo = (function (seq58329){
var G__58330 = cljs.core.first(seq58329);
var seq58329__$1 = cljs.core.next(seq58329);
var G__58331 = cljs.core.first(seq58329__$1);
var seq58329__$2 = cljs.core.next(seq58329__$1);
var G__58332 = cljs.core.first(seq58329__$2);
var seq58329__$3 = cljs.core.next(seq58329__$2);
var G__58333 = cljs.core.first(seq58329__$3);
var seq58329__$4 = cljs.core.next(seq58329__$3);
var G__58334 = cljs.core.first(seq58329__$4);
var seq58329__$5 = cljs.core.next(seq58329__$4);
var G__58335 = cljs.core.first(seq58329__$5);
var seq58329__$6 = cljs.core.next(seq58329__$5);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58330,G__58331,G__58332,G__58333,G__58334,G__58335,seq58329__$6);
}));

(com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$lang$maxFixedArity = (6));

/**
 * Similar to clojure.core/dissoc but works on UISM env and aliases.
 */
com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased = (function com$fulcrologic$fulcro$ui_state_machines$dissoc_aliased(var_args){
var G__58358 = arguments.length;
switch (G__58358) {
case 1:
return com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___58673 = arguments.length;
var i__4865__auto___58674 = (0);
while(true){
if((i__4865__auto___58674 < len__4864__auto___58673)){
args_arr__4885__auto__.push((arguments[i__4865__auto___58674]));

var G__58676 = (i__4865__auto___58674 + (1));
i__4865__auto___58674 = G__58676;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$1 = (function (env){
return env;
}));

(com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$2 = (function (env,alias){
if((env == null)){
return null;
} else {
var path = com.fulcrologic.fulcro.ui_state_machines.resolve_alias(env,alias);
var sub_path = cljs.core.butlast(path);
var k = cljs.core.last(path);
var G__58360 = env;
var G__58361 = (function (p1__58352_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__58352_SHARP_,sub_path,cljs.core.dissoc,k);
});
return (com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$2(G__58360,G__58361) : com.fulcrologic.fulcro.ui_state_machines.apply_action.call(null,G__58360,G__58361));
}
}));

(com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$variadic = (function (env,k,ks){
while(true){
if((env == null)){
return null;
} else {
var ret = com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$2(env,k);
if(cljs.core.truth_(ks)){
var G__58677 = ret;
var G__58678 = cljs.core.first(ks);
var G__58679 = cljs.core.next(ks);
env = G__58677;
k = G__58678;
ks = G__58679;
continue;
} else {
return ret;
}
}
break;
}
}));

/** @this {Function} */
(com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$lang$applyTo = (function (seq58355){
var G__58356 = cljs.core.first(seq58355);
var seq58355__$1 = cljs.core.next(seq58355);
var G__58357 = cljs.core.first(seq58355__$1);
var seq58355__$2 = cljs.core.next(seq58355__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58356,G__58357,seq58355__$2);
}));

(com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$lang$maxFixedArity = (2));

/**
 * Integrate an ident into any number of aliases in the state machine.
 *   Aliases must point to a list of idents.
 * 
 *   The named parameters can be specified any number of times. They are:
 * 
 *   - append:  A keyword (alias) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A keyword (alias) to a list in your app state where this new object's ident should be prepended. Will not append
 *   the ident if that ident is already in the list.
 */
com.fulcrologic.fulcro.ui_state_machines.integrate_ident = (function com$fulcrologic$fulcro$ui_state_machines$integrate_ident(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58681 = arguments.length;
var i__4865__auto___58682 = (0);
while(true){
if((i__4865__auto___58682 < len__4864__auto___58681)){
args__4870__auto__.push((arguments[i__4865__auto___58682]));

var G__58683 = (i__4865__auto___58682 + (1));
i__4865__auto___58682 = G__58683;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.ui_state_machines.integrate_ident.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(com.fulcrologic.fulcro.ui_state_machines.integrate_ident.cljs$core$IFn$_invoke$arity$variadic = (function (env,ident,named_parameters){
var actions = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,p__58371){
var vec__58372 = p__58371;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58372,(0),null);
var alias_to_idents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58372,(1),null);
var alias_value = com.fulcrologic.fulcro.ui_state_machines.alias_value(env__$1,alias_to_idents);
var already_has_ident_at_alias_QMARK_ = cljs.core.some((function (p1__58364_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__58364_SHARP_,ident);
}),alias_value);
var G__58376 = command;
var G__58376__$1 = (((G__58376 instanceof cljs.core.Keyword))?G__58376.fqn:null);
switch (G__58376__$1) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_alias_QMARK_)){
return env__$1;
} else {
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$3(env__$1,alias_to_idents,(function (p1__58365_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__58365_SHARP_);
}));
}

break;
case "append":
if(cljs.core.truth_(already_has_ident_at_alias_QMARK_)){
return env__$1;
} else {
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$4(env__$1,alias_to_idents,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),ident);
}

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown operation for integrate-ident: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"arg","arg",-1747261837),alias_to_idents], null));

}
}),env,actions);
}));

(com.fulcrologic.fulcro.ui_state_machines.integrate_ident.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.ui_state_machines.integrate_ident.cljs$lang$applyTo = (function (seq58367){
var G__58368 = cljs.core.first(seq58367);
var seq58367__$1 = cljs.core.next(seq58367);
var G__58369 = cljs.core.first(seq58367__$1);
var seq58367__$2 = cljs.core.next(seq58367__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58368,G__58369,seq58367__$2);
}));

/**
 * Removes an ident, if it exists, from an alias that points to a list of idents.
 */
com.fulcrologic.fulcro.ui_state_machines.remove_ident = (function com$fulcrologic$fulcro$ui_state_machines$remove_ident(env,ident,alias_to_idents){
var new_list = (function (old_list){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58378_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident,p1__58378_SHARP_);
}),old_list));
});
return com.fulcrologic.fulcro.ui_state_machines.update_aliased.cljs$core$IFn$_invoke$arity$3(env,alias_to_idents,new_list);
});
com.fulcrologic.fulcro.ui_state_machines.queue_mutations_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$queue_mutations_BANG_(app,env){
var queued_mutations = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-mutations","com.fulcrologic.fulcro.ui-state-machines/queued-mutations",-652604760).cljs$core$IFn$_invoke$arity$1(env);
var seq__58381_58687 = cljs.core.seq(queued_mutations);
var chunk__58383_58688 = null;
var count__58384_58689 = (0);
var i__58385_58690 = (0);
while(true){
if((i__58385_58690 < count__58384_58689)){
var mutation_params_58691 = chunk__58383_58688.cljs$core$IIndexed$_nth$arity$2(null,i__58385_58690);
var abort_id_58692 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(mutation_params_58691);
com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.ui_state_machines.mutation_delegate.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.mutation_delegate.cljs$core$IFn$_invoke$arity$1(mutation_params_58691) : com.fulcrologic.fulcro.ui_state_machines.mutation_delegate.call(null,mutation_params_58691))], null),(function (){var G__58391 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(abort_id_58692)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58391,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_58692);
} else {
return G__58391;
}
})());


var G__58693 = seq__58381_58687;
var G__58694 = chunk__58383_58688;
var G__58695 = count__58384_58689;
var G__58696 = (i__58385_58690 + (1));
seq__58381_58687 = G__58693;
chunk__58383_58688 = G__58694;
count__58384_58689 = G__58695;
i__58385_58690 = G__58696;
continue;
} else {
var temp__5753__auto___58698 = cljs.core.seq(seq__58381_58687);
if(temp__5753__auto___58698){
var seq__58381_58699__$1 = temp__5753__auto___58698;
if(cljs.core.chunked_seq_QMARK_(seq__58381_58699__$1)){
var c__4679__auto___58700 = cljs.core.chunk_first(seq__58381_58699__$1);
var G__58701 = cljs.core.chunk_rest(seq__58381_58699__$1);
var G__58702 = c__4679__auto___58700;
var G__58703 = cljs.core.count(c__4679__auto___58700);
var G__58704 = (0);
seq__58381_58687 = G__58701;
chunk__58383_58688 = G__58702;
count__58384_58689 = G__58703;
i__58385_58690 = G__58704;
continue;
} else {
var mutation_params_58705 = cljs.core.first(seq__58381_58699__$1);
var abort_id_58706 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(mutation_params_58705);
com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.ui_state_machines.mutation_delegate.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.mutation_delegate.cljs$core$IFn$_invoke$arity$1(mutation_params_58705) : com.fulcrologic.fulcro.ui_state_machines.mutation_delegate.call(null,mutation_params_58705))], null),(function (){var G__58393 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(abort_id_58706)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58393,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),abort_id_58706);
} else {
return G__58393;
}
})());


var G__58707 = cljs.core.next(seq__58381_58699__$1);
var G__58708 = null;
var G__58709 = (0);
var G__58710 = (0);
seq__58381_58687 = G__58707;
chunk__58383_58688 = G__58708;
count__58384_58689 = G__58709;
i__58385_58690 = G__58710;
continue;
}
} else {
}
}
break;
}

return null;
});
com.fulcrologic.fulcro.ui_state_machines.queue_transactions_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$queue_transactions_BANG_(app,env){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.nil_QMARK_], null);

var map__58395 = env;
var map__58395__$1 = cljs.core.__destructure_map(map__58395);
var queued_transactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58395__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-transactions","com.fulcrologic.fulcro.ui-state-machines/queued-transactions",-998495741));
var seq__58396_58711 = cljs.core.seq(queued_transactions);
var chunk__58397_58712 = null;
var count__58398_58713 = (0);
var i__58399_58714 = (0);
while(true){
if((i__58399_58714 < count__58398_58713)){
var map__58403_58715 = chunk__58397_58712.cljs$core$IIndexed$_nth$arity$2(null,i__58399_58714);
var map__58403_58716__$1 = cljs.core.__destructure_map(map__58403_58715);
var txn_58717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58403_58716__$1,new cljs.core.Keyword(null,"txn","txn",-469204789));
var options_58718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58403_58716__$1,new cljs.core.Keyword(null,"options","options",99638489));
com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,txn_58717,options_58718);


var G__58720 = seq__58396_58711;
var G__58721 = chunk__58397_58712;
var G__58722 = count__58398_58713;
var G__58723 = (i__58399_58714 + (1));
seq__58396_58711 = G__58720;
chunk__58397_58712 = G__58721;
count__58398_58713 = G__58722;
i__58399_58714 = G__58723;
continue;
} else {
var temp__5753__auto___58724 = cljs.core.seq(seq__58396_58711);
if(temp__5753__auto___58724){
var seq__58396_58725__$1 = temp__5753__auto___58724;
if(cljs.core.chunked_seq_QMARK_(seq__58396_58725__$1)){
var c__4679__auto___58726 = cljs.core.chunk_first(seq__58396_58725__$1);
var G__58727 = cljs.core.chunk_rest(seq__58396_58725__$1);
var G__58728 = c__4679__auto___58726;
var G__58729 = cljs.core.count(c__4679__auto___58726);
var G__58730 = (0);
seq__58396_58711 = G__58727;
chunk__58397_58712 = G__58728;
count__58398_58713 = G__58729;
i__58399_58714 = G__58730;
continue;
} else {
var map__58405_58731 = cljs.core.first(seq__58396_58725__$1);
var map__58405_58732__$1 = cljs.core.__destructure_map(map__58405_58731);
var txn_58733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58405_58732__$1,new cljs.core.Keyword(null,"txn","txn",-469204789));
var options_58734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58405_58732__$1,new cljs.core.Keyword(null,"options","options",99638489));
com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,txn_58733,options_58734);


var G__58735 = cljs.core.next(seq__58396_58725__$1);
var G__58736 = null;
var G__58737 = (0);
var G__58738 = (0);
seq__58396_58711 = G__58735;
chunk__58397_58712 = G__58736;
count__58398_58713 = G__58737;
i__58399_58714 = G__58738;
continue;
}
} else {
}
}
break;
}

return null;
});
/**
 * Internal implementation. Queue a load of an actor.
 */
com.fulcrologic.fulcro.ui_state_machines.queue_actor_load_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$queue_actor_load_BANG_(app,env,actor_name,component_class,load_options){
var actor_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,actor_name);
var cls = (function (){var or__4253__auto__ = component_class;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return com.fulcrologic.fulcro.ui_state_machines.actor_class(env,actor_name);
}
})();
if((cls == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,569,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot run load. Counld not derive Fulcro class (and none was configured) for ",actor_name,"See https://book.fulcrologic.com/#err-uism-load-cant-find-fulcro-class"], null);
}),null)),null,17965846,null);
} else {
com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(app,actor_ident,cls,load_options);
}

return null;
});
/**
 * Internal implementation. Queue a load.
 */
com.fulcrologic.fulcro.ui_state_machines.queue_normal_load_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$queue_normal_load_BANG_(app,query_key,component_class,load_options){
if((query_key == null)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,578,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot run load. query-key cannot be nil. See https://book.fulcrologic.com/#err-uism-load-nil-query-key"], null);
}),null)),null,1085176916,null);
} else {
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(app,query_key,component_class,load_options);
}
});
com.fulcrologic.fulcro.ui_state_machines.handle_load_error_STAR_ = (function com$fulcrologic$fulcro$ui_state_machines$handle_load_error_STAR_(app,load_request){
var map__58410 = (function (){var G__58411 = load_request;
if((G__58411 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897).cljs$core$IFn$_invoke$arity$1(G__58411);
}
})();
var map__58410__$1 = cljs.core.__destructure_map(map__58410);
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58410__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
var error_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58410__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384));
var error_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58410__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624));
if(cljs.core.truth_((function (){var and__4251__auto__ = asm_id;
if(cljs.core.truth_(and__4251__auto__)){
return error_event;
} else {
return and__4251__auto__;
}
})())){
com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58413 = (function (){var G__58414 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),error_event], null);
if(cljs.core.truth_(error_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58414,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),error_data);
} else {
return G__58414;
}
})();
return (com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1(G__58413) : com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.call(null,G__58413));
})()], null));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.ui-state-machines",null,590,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A fallback occurred, but no event was defined by the client. Sending generic ::uism/load-error event. See https://book.fulcrologic.com/#warn-uism-fallback-missing-event"], null);
}),null)),null,1177215357,null);

com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58416 = (function (){var G__58417 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-error","com.fulcrologic.fulcro.ui-state-machines/load-error",1046994541)], null);
return G__58417;
})();
return (com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1(G__58416) : com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.call(null,G__58416));
})()], null));
}

return null;
});
/**
 * 
 */
com.fulcrologic.fulcro.ui_state_machines.handle_load_error = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","handle-load-error","com.fulcrologic.fulcro.ui-state-machines/handle-load-error",145527222,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","handle-load-error","com.fulcrologic.fulcro.ui-state-machines/handle-load-error",145527222,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$ui_state_machines$action(p__58419){
var map__58420 = p__58419;
var map__58420__$1 = cljs.core.__destructure_map(map__58420);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58420__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__58421_58742 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__58422_58743 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__58422_58743);

try{com.fulcrologic.fulcro.ui_state_machines.handle_load_error_STAR_(app,new cljs.core.Keyword(null,"load-params","load-params",38753949).cljs$core$IFn$_invoke$arity$1(params));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__58421_58742);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__58423 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__58424 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__58424);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__58423);
}})], null);
}));
com.fulcrologic.fulcro.ui_state_machines.queue_loads_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$queue_loads_BANG_(app,env){
var queued_loads = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533).cljs$core$IFn$_invoke$arity$1(env);
var seq__58427_58744 = cljs.core.seq(queued_loads);
var chunk__58428_58745 = null;
var count__58429_58746 = (0);
var i__58430_58747 = (0);
while(true){
if((i__58430_58747 < count__58429_58746)){
var map__58435_58748 = chunk__58428_58745.cljs$core$IIndexed$_nth$arity$2(null,i__58430_58747);
var map__58435_58749__$1 = cljs.core.__destructure_map(map__58435_58748);
var load_params_58750 = map__58435_58749__$1;
var component_class_58751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58435_58749__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369));
var actor_name_58752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58435_58749__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310));
var query_key_58753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58435_58749__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423));
var load_options_58754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58435_58749__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091));
if(cljs.core.truth_(actor_name_58752)){
com.fulcrologic.fulcro.ui_state_machines.queue_actor_load_BANG_(app,env,actor_name_58752,component_class_58751,load_options_58754);
} else {
com.fulcrologic.fulcro.ui_state_machines.queue_normal_load_BANG_(app,query_key_58753,component_class_58751,load_options_58754);
}


var G__58756 = seq__58427_58744;
var G__58757 = chunk__58428_58745;
var G__58758 = count__58429_58746;
var G__58759 = (i__58430_58747 + (1));
seq__58427_58744 = G__58756;
chunk__58428_58745 = G__58757;
count__58429_58746 = G__58758;
i__58430_58747 = G__58759;
continue;
} else {
var temp__5753__auto___58760 = cljs.core.seq(seq__58427_58744);
if(temp__5753__auto___58760){
var seq__58427_58761__$1 = temp__5753__auto___58760;
if(cljs.core.chunked_seq_QMARK_(seq__58427_58761__$1)){
var c__4679__auto___58762 = cljs.core.chunk_first(seq__58427_58761__$1);
var G__58763 = cljs.core.chunk_rest(seq__58427_58761__$1);
var G__58764 = c__4679__auto___58762;
var G__58765 = cljs.core.count(c__4679__auto___58762);
var G__58766 = (0);
seq__58427_58744 = G__58763;
chunk__58428_58745 = G__58764;
count__58429_58746 = G__58765;
i__58430_58747 = G__58766;
continue;
} else {
var map__58437_58767 = cljs.core.first(seq__58427_58761__$1);
var map__58437_58768__$1 = cljs.core.__destructure_map(map__58437_58767);
var load_params_58769 = map__58437_58768__$1;
var component_class_58770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58437_58768__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369));
var actor_name_58771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58437_58768__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310));
var query_key_58772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58437_58768__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423));
var load_options_58773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58437_58768__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091));
if(cljs.core.truth_(actor_name_58771)){
com.fulcrologic.fulcro.ui_state_machines.queue_actor_load_BANG_(app,env,actor_name_58771,component_class_58770,load_options_58773);
} else {
com.fulcrologic.fulcro.ui_state_machines.queue_normal_load_BANG_(app,query_key_58772,component_class_58770,load_options_58773);
}


var G__58774 = cljs.core.next(seq__58427_58761__$1);
var G__58775 = null;
var G__58776 = (0);
var G__58777 = (0);
seq__58427_58744 = G__58774;
chunk__58428_58745 = G__58775;
count__58429_58746 = G__58776;
i__58430_58747 = G__58777;
continue;
}
} else {
}
}
break;
}

return null;
});
/**
 * Put the evolved state-map from an env into a (Fulcro) state-atom
 */
com.fulcrologic.fulcro.ui_state_machines.update_fulcro_state_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$update_fulcro_state_BANG_(p__58439,state_atom){
var map__58440 = p__58439;
var map__58440__$1 = cljs.core.__destructure_map(map__58440);
var env = map__58440__$1;
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58440__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
var next_state = (cljs.core.truth_(env)?com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193)):null);
var temp__5753__auto___58779 = (function (){var G__58442 = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138).cljs$core$IFn$_invoke$arity$1(env);
if((G__58442 == null)){
return null;
} else {
var G__58443 = G__58442;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","exit","com.fulcrologic.fulcro.ui-state-machines/exit",600820288),next_state)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__58443,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),cljs.core.dissoc,asm_id);
} else {
return G__58443;
}
}
})();
if(cljs.core.truth_(temp__5753__auto___58779)){
var new_fulcro_state_58780 = temp__5753__auto___58779;
cljs.core.reset_BANG_(state_atom,new_fulcro_state_58780);
} else {
}

return null;
});
/**
 * Add a timeout named `timer-id` to the `env` that will send `event-id` with `event-data` event
 * after `timeout` (in milliseconds) unless an event (i.e. some-event-id) occurs where a call
 * to `(cancel-on-events some-event-id)` returns true.
 * 
 * Setting a timeout on an existing timer-id will cancel the current one and start the new one.
 * 
 * `cancel-on-events` is a predicate that will be passed an event ID on events. If it returns true
 *  on an event before the timeout fires, then the timeout will be auto-cancelled. If not specified, then
 *  it defaults to `(constantly false)`.
 */
com.fulcrologic.fulcro.ui_state_machines.set_timeout = (function com$fulcrologic$fulcro$ui_state_machines$set_timeout(var_args){
var G__58446 = arguments.length;
switch (G__58446) {
case 5:
return com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$5 = (function (env,timer_id,event_id,event_data,timeout){
return com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6(env,timer_id,event_id,event_data,timeout,cljs.core.constantly(false));
}));

(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6 = (function (env,timer_id,event_id,event_data,timeout,cancel_on_events){
var descriptor = (function (){var G__58448 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248),timeout,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271),timer_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timer","timer",-1266967739),true], null)),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),event_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cancel-on","cancel-on",-479584301),cancel_on_events], null))], null);
if(cljs.core.truth_(event_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58448,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),event_data);
} else {
return G__58448;
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-timeouts","com.fulcrologic.fulcro.ui-state-machines/queued-timeouts",1249273499),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),descriptor);
}));

(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$lang$maxFixedArity = 6);

/**
 * Clear a scheduled timeout (if it has yet to fire).  Harmless to call if the timeout is gone. This call takes
 *   effect immediately (in terms of making sure the timeout does not fire).
 */
com.fulcrologic.fulcro.ui_state_machines.clear_timeout_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$clear_timeout_BANG_(env,timer_id){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,649,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clearing timeout ",com.fulcrologic.fulcro.ui_state_machines.asm_id(env),":",timer_id], null);
}),null)),null,146228773,null);

var map__58451 = com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),timer_id], null));
var map__58451__$1 = cljs.core.__destructure_map(map__58451);
var js_timer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58451__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544));
var real_js_timer = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(js_timer));
if(cljs.core.truth_(real_js_timer)){
com.fulcrologic.fulcro.ui_state_machines.clear_js_timeout_BANG_(real_js_timer);
} else {
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193)], null)),cljs.core.dissoc,timer_id);
});
/**
 * Returns an event handler that can process events according to a state machine
 *   ::uism/events definition of the current event/state in `env`.
 *   If a definition cannot be found then it returns nil.
 */
com.fulcrologic.fulcro.ui_state_machines.generic_event_handler = (function com$fulcrologic$fulcro$ui_state_machines$generic_event_handler(original_env){
var smdef = com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine(original_env);
var current_state_id = com.fulcrologic.fulcro.ui_state_machines.asm_value(original_env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193));
var current_event = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868).cljs$core$IFn$_invoke$arity$1(original_env);
var map__58453 = (function (){var G__58454 = smdef;
var G__58454__$1 = (((G__58454 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308).cljs$core$IFn$_invoke$arity$1(G__58454));
var G__58454__$2 = (((G__58454__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__58454__$1,current_state_id));
var G__58454__$3 = (((G__58454__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363).cljs$core$IFn$_invoke$arity$1(G__58454__$2));
if((G__58454__$3 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__58454__$3,current_event);
}
})();
var map__58453__$1 = cljs.core.__destructure_map(map__58453);
var event_def = map__58453__$1;
var event_predicate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58453__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-predicate","com.fulcrologic.fulcro.ui-state-machines/event-predicate",620527987));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58453__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182));
var target_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58453__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947));
if(cljs.core.truth_(event_def)){
return (function (env){
if(cljs.core.truth_((function (){var or__4253__auto__ = (event_predicate == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = event_predicate;
if(cljs.core.truth_(and__4251__auto__)){
return (event_predicate.cljs$core$IFn$_invoke$arity$1 ? event_predicate.cljs$core$IFn$_invoke$arity$1(env) : event_predicate.call(null,env));
} else {
return and__4251__auto__;
}
}
})())){
var env__$1 = (cljs.core.truth_(handler)?(function (){var or__4253__auto__ = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(env) : handler.call(null,env));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return env;
}
})():env);
var post_handler_state = com.fulcrologic.fulcro.ui_state_machines.asm_value(env__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193));
var state_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(post_handler_state,current_state_id);
var G__58457 = env__$1;
if(cljs.core.truth_((function (){var and__4251__auto__ = (!(state_changed_QMARK_));
if(and__4251__auto__){
return target_state;
} else {
return and__4251__auto__;
}
})())){
return com.fulcrologic.fulcro.ui_state_machines.activate(G__58457,target_state);
} else {
return G__58457;
}
} else {
return original_env;
}
});
} else {
return null;
}
});
/**
 * Find the handler for the active state in the current env.
 */
com.fulcrologic.fulcro.ui_state_machines.active_state_handler = (function com$fulcrologic$fulcro$ui_state_machines$active_state_handler(env){
var smdef = com.fulcrologic.fulcro.ui_state_machines.lookup_state_machine(env);
var current_state = com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193));
var handler = (function (){var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(smdef,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),current_state,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return com.fulcrologic.fulcro.ui_state_machines.generic_event_handler(env);
}
})();
if(cljs.core.truth_(handler)){
return handler;
} else {
var map__58459 = env;
var map__58459__$1 = cljs.core.__destructure_map(map__58459);
var event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58459__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.ui-state-machines",null,691,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UNEXPECTED EVENT: Did not find a way to handle event",event_id,"in the current active state:",current_state,"See https://book.fulcrologic.com/#warn-uism-unexpected-event"], null);
}),null)),null,-97181627,null);

return cljs.core.identity;
}
});
/**
 * Returns a vector of things to refresh in Fulcro based on the final state of an active SM env.
 */
com.fulcrologic.fulcro.ui_state_machines.ui_refresh_list = (function com$fulcrologic$fulcro$ui_state_machines$ui_refresh_list(env){
var actor_idents = (function (){var or__4253__auto__ = (function (){var G__58461 = env;
var G__58461__$1 = (((G__58461 == null))?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__58461,com.fulcrologic.fulcro.ui_state_machines.asm_path(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928))));
var G__58461__$2 = (((G__58461__$1 == null))?null:cljs.core.vals(G__58461__$1));
if((G__58461__$2 == null)){
return null;
} else {
return cljs.core.vec(G__58461__$2);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return actor_idents;
});
com.fulcrologic.fulcro.ui_state_machines.get_js_timer = (function com$fulcrologic$fulcro$ui_state_machines$get_js_timer(env,timer_id){
var G__58463 = com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),timer_id], null));
var G__58463__$1 = (((G__58463 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544).cljs$core$IFn$_invoke$arity$1(G__58463));
var G__58463__$2 = (((G__58463__$1 == null))?null:cljs.core.meta(G__58463__$1));
if((G__58463__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(G__58463__$2);
}
});
/**
 * INTERNAL: actually schedule the timers that were submitted during the event handler.
 */
com.fulcrologic.fulcro.ui_state_machines.schedule_timeouts_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$schedule_timeouts_BANG_(app,env){
var map__58466 = env;
var map__58466__$1 = cljs.core.__destructure_map(map__58466);
var queued_timeouts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-timeouts","com.fulcrologic.fulcro.ui-state-machines/queued-timeouts",1249273499));
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,p__58467){
var map__58468 = p__58467;
var map__58468__$1 = cljs.core.__destructure_map(map__58468);
var descriptor = map__58468__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58468__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timeout","com.fulcrologic.fulcro.ui-state-machines/timeout",2023435248));
var event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58468__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58468__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var timer_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58468__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","timer-id","com.fulcrologic.fulcro.ui-state-machines/timer-id",-720883271));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,712,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Setting timeout",timer_id,"on",asm_id,"to send",event_id,"in",timeout,"ms"], null);
}),null)),null,-1454886354,null);

var current_timer = com.fulcrologic.fulcro.ui_state_machines.get_js_timer(env__$1,timer_id);
var js_timer = com.fulcrologic.fulcro.ui_state_machines.set_js_timeout_BANG_((function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,715,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TIMEOUT on",asm_id,"due to timer",timer_id,"after",timeout,"ms"], null);
}),null)),null,1247447759,null);

return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,asm_id,event_id,(function (){var or__4253__auto__ = event_data;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
}),timeout);
var descriptor__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(descriptor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","js-timer","com.fulcrologic.fulcro.ui-state-machines/js-timer",1529432544)], null),cljs.core.vary_meta,cljs.core.assoc,new cljs.core.Keyword(null,"timer","timer",-1266967739),js_timer);
if(cljs.core.truth_(current_timer)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,719,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clearing old timer (new timer supercedes)"], null);
}),null)),null,-261081407,null);

com.fulcrologic.fulcro.ui_state_machines.clear_js_timeout_BANG_(current_timer);
} else {
}

return cljs.core.assoc_in(env__$1,com.fulcrologic.fulcro.ui_state_machines.asm_path(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193),timer_id], null)),descriptor__$1);
}),env,queued_timeouts);
});
/**
 * Processes the auto-cancel of events. This is a normal part of the internals, but can be used in handlers
 *   to simulate a *different* event than acutally occured for the purpose of clearing sets of timers that
 *   auto-cancel on other events than what occurred.
 */
com.fulcrologic.fulcro.ui_state_machines.clear_timeouts_on_event_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$clear_timeouts_on_event_BANG_(env,event_id){
var active_timers = com.fulcrologic.fulcro.ui_state_machines.asm_value(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-timers","com.fulcrologic.fulcro.ui-state-machines/active-timers",2018369193));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,timer_id){
var cancel_predicate = (function (){var G__58472 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(active_timers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [timer_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","cancel-on","com.fulcrologic.fulcro.ui-state-machines/cancel-on",1719737833)], null));
var G__58472__$1 = (((G__58472 == null))?null:cljs.core.meta(G__58472));
if((G__58472__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"cancel-on","cancel-on",-479584301).cljs$core$IFn$_invoke$arity$1(G__58472__$1);
}
})();
if(cljs.core.truth_(cancel_predicate)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,736,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["INTERNAL ERROR: Cancel predicate was nil for timer ",timer_id,"See https://book.fulcrologic.com/#err-uism-cancel-pred-nil"], null);
}),null)),null,1427735082,null);
}

if(cljs.core.truth_((function (){var and__4251__auto__ = cancel_predicate;
if(cljs.core.truth_(and__4251__auto__)){
return (cancel_predicate.cljs$core$IFn$_invoke$arity$1 ? cancel_predicate.cljs$core$IFn$_invoke$arity$1(event_id) : cancel_predicate.call(null,event_id));
} else {
return and__4251__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,739,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cancelling timer ",timer_id,"on",com.fulcrologic.fulcro.ui_state_machines.asm_id(env__$1),"due to event",event_id], null);
}),null)),null,-247414747,null);

return com.fulcrologic.fulcro.ui_state_machines.clear_timeout_BANG_(env__$1,timer_id);
} else {
return env__$1;
}
}),env,cljs.core.keys(active_timers));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro","app","fulcro/app",1396752010),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro","state","fulcro/state",1036558546),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","atom","com.fulcrologic.fulcro.ui-state-machines/atom",1971230309),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","atom","com.fulcrologic.fulcro.ui-state-machines/atom",1971230309));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-env","com.fulcrologic.fulcro.ui-state-machines/mutation-env",-350046782),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro","state","fulcro/state",1036558546),new cljs.core.Keyword("fulcro","app","fulcro/app",1396752010)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro","state","fulcro/state",1036558546),new cljs.core.Keyword("fulcro","app","fulcro/app",1396752010)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58475){
return cljs.core.map_QMARK_(G__58475);
}),(function (G__58475){
return cljs.core.contains_QMARK_(G__58475,new cljs.core.Keyword(null,"state","state",-1988618099));
}),(function (G__58475){
return cljs.core.contains_QMARK_(G__58475,new cljs.core.Keyword(null,"app","app",-560961707));
})], null),(function (G__58475){
return ((cljs.core.map_QMARK_(G__58475)) && (((cljs.core.contains_QMARK_(G__58475,new cljs.core.Keyword(null,"state","state",-1988618099))) && (cljs.core.contains_QMARK_(G__58475,new cljs.core.Keyword(null,"app","app",-560961707))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro","state","fulcro/state",1036558546),new cljs.core.Keyword("fulcro","app","fulcro/app",1396752010)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"app","app",-560961707)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"state","state",-1988618099))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"app","app",-560961707)))], null),null])));
com.fulcrologic.fulcro.ui_state_machines.trigger_queued_events_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$trigger_queued_events_BANG_(mutation_env,queued_triggers,refresh_list){
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (refresh_list__$1,event){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(refresh_list__$1,(com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_.cljs$core$IFn$_invoke$arity$2(mutation_env,event) : com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_.call(null,mutation_env,event)));
}),refresh_list,queued_triggers);
return result;
});
/**
 * IMPLEMENTATION DETAIL. Low-level implementation of triggering a state machine event. Does no direct interaction with
 *   Fulcro UI refresh.  Use `trigger!` instead.
 * 
 *   - `env` - A fulcro mutation env, containing at least the state atom and optionally the ref of the
 *  component that was the source of the event.
 *   - params - The parameters for the event
 * 
 *   Returns a vector of actor idents that should be refreshed.
 */
com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$trigger_state_machine_event_BANG_(p__58482,p__58483){
var map__58484 = p__58482;
var map__58484__$1 = cljs.core.__destructure_map(map__58484);
var mutation_env = map__58484__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58484__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58484__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58484__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__58485 = p__58483;
var map__58485__$1 = cljs.core.__destructure_map(map__58485);
var params = map__58485__$1;
var event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58485__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58485__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58485__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.ui-state-machines",null,770,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Trigger",asm_id,event_id], null);
}),null)),null,-1560200952,null);

if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null)))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,772,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attempted to trigger event ",event_id,"on state machine",asm_id,", but that state machine has not been started (call begin! first). See https://book.fulcrologic.com/#err-uism-trigger-not-started-machine"], null);
}),null)),null,742886276,null);
}

var sm_env = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$6(cljs.core.deref(state),ref,asm_id,event_id,event_data,app);
var handler = com.fulcrologic.fulcro.ui_state_machines.active_state_handler(sm_env);
var valued_env = com.fulcrologic.fulcro.ui_state_machines.apply_event_value(sm_env,params);
var handled_env = (function (){try{var _STAR_after_render_STAR__orig_val__58489 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__58490 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__58490);

try{var G__58491 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(valued_env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279),app);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__58491) : handler.call(null,G__58491));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__58489);
}}catch (e58487){var e = e58487;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,780,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Handler for event",event_id,"threw an exception for ASM ID",asm_id,"See https://book.fulcrologic.com/#err-uism-evt-handler-exc"], null);
}),null)),null,-1374815926,null);

return null;
}})();
var final_env = (function (){var e = (function (){var or__4253__auto__ = handled_env;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return valued_env;
}
})();
var e__$1 = com.fulcrologic.fulcro.ui_state_machines.clear_timeouts_on_event_BANG_(e,event_id);
return com.fulcrologic.fulcro.ui_state_machines.schedule_timeouts_BANG_(app,e__$1);
})();
var refresh_list = com.fulcrologic.fulcro.ui_state_machines.ui_refresh_list(final_env);
com.fulcrologic.fulcro.ui_state_machines.queue_transactions_BANG_(app,final_env);

com.fulcrologic.fulcro.ui_state_machines.queue_mutations_BANG_(app,final_env);

com.fulcrologic.fulcro.ui_state_machines.queue_loads_BANG_(app,final_env);

com.fulcrologic.fulcro.ui_state_machines.update_fulcro_state_BANG_(final_env,state);

return com.fulcrologic.fulcro.ui_state_machines.trigger_queued_events_BANG_(mutation_env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-triggers","com.fulcrologic.fulcro.ui-state-machines/queued-triggers",1577632329).cljs$core$IFn$_invoke$arity$1(final_env),refresh_list);
});
/**
 * Trigger an event on a state machine. Events sent this way will be processed immediately (synchronously) after
 * the handler for the calling handler completes. If you prefer that a trigger happens as a separate transaction
 * then use `trigger!`.
 * 
 *   `env` - is the env in a state machine handler
 *   `asm-id` - The ID of the state machine you want to trigger an event on.
 *   `event` - The event ID you want to send.
 *   `event-data` - A map of data to send with the event
 * 
 *   Returns the updated env.  The actual event will not be sent until this handler finishes.
 */
com.fulcrologic.fulcro.ui_state_machines.trigger = (function com$fulcrologic$fulcro$ui_state_machines$trigger(var_args){
var G__58495 = arguments.length;
switch (G__58495) {
case 3:
return com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$3 = (function (env,asm_id,event){
return com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$4(env,asm_id,event,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$4 = (function (env,asm_id,event,event_data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-triggers","com.fulcrologic.fulcro.ui-state-machines/queued-triggers",1577632329),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),event,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),event_data], null));
}));

(com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$lang$maxFixedArity = 4);

/**
 * Similar to Fulcro's set-string, but it sets the string on an active state machine's data alias.
 *   event-or-string can be a string or a React DOM onChange event.
 * 
 *   The incoming `event-data` to your handler will include `::uism/alias` and `:value` (if you care to do anything
 *   with the value change event).
 * 
 *   NOTE: Generates a ::uism/value-changed event. If you're state machine is implemented with the events
 *   structure that allows an event-predicate, then this set will be ignored if the current state's event-predicate
 *   returns false.
 */
com.fulcrologic.fulcro.ui_state_machines.set_string_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$set_string_BANG_(this$,active_state_machine_id,alias,event_or_string){
var value = ((typeof event_or_string === 'string')?event_or_string:(function (){var or__4253__auto__ = (function (){var G__58498 = event_or_string;
var G__58498__$1 = (((G__58498 == null))?null:G__58498.target);
if((G__58498__$1 == null)){
return null;
} else {
return G__58498__$1.value;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,active_state_machine_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","value-changed","com.fulcrologic.fulcro.ui-state-machines/value-changed",-292687479),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","alias","com.fulcrologic.fulcro.ui-state-machines/alias",466933196),alias,new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
/**
 * Similar to Fulcro's set-value, but it sets the raw value on an active state machine's data alias.
 * 
 *   The incoming `event-data` to your handler will include `::uism/alias` and `:value` (if you care to do anything
 *   with the value change event).
 * 
 *   NOTE: Generates a ::uism/value-changed event. If you're state machine is implemented with the events
 *   structure that allows an event-predicate, then this set will be ignored if the current state's event-predicate
 *   returns false.
 */
com.fulcrologic.fulcro.ui_state_machines.set_value_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$set_value_BANG_(this$,active_state_machine_id,alias,value){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,active_state_machine_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","value-changed","com.fulcrologic.fulcro.ui-state-machines/value-changed",-292687479),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","alias","com.fulcrologic.fulcro.ui-state-machines/alias",466933196),alias,new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
/**
 * Mutation to begin a state machine. Use `begin!` instead.
 */
com.fulcrologic.fulcro.ui_state_machines.begin = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","begin","com.fulcrologic.fulcro.ui-state-machines/begin",-751995886,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","begin","com.fulcrologic.fulcro.ui-state-machines/begin",-751995886,null),(function (fulcro_mutation_env_symbol){
var map__58500 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__58500__$1 = cljs.core.__destructure_map(map__58500);
var params = map__58500__$1;
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58500__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58500__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$ui_state_machines$action(p__58502){
var map__58503 = p__58502;
var map__58503__$1 = cljs.core.__destructure_map(map__58503);
var env = map__58503__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58503__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58503__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__58504_58795 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__58505_58796 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__58505_58796);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
return cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null),com.fulcrologic.fulcro.ui_state_machines.new_asm(params));
}));

com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event_BANG_(env,(function (){var G__58506 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","started","com.fulcrologic.fulcro.ui-state-machines/started",-1306384334),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),cljs.core.PersistentArrayMap.EMPTY], null);
if(cljs.core.truth_(event_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58506,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),event_data);
} else {
return G__58506;
}
})());

com.fulcrologic.fulcro.raw.application.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(app);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__58504_58795);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__58508 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__58509 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__58509);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__58508);
}})], null);
}));
/**
 * Generate an actor->ident map.
 */
com.fulcrologic.fulcro.ui_state_machines.derive_actor_idents = (function com$fulcrologic$fulcro$ui_state_machines$derive_actor_idents(actors){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__58511){
var vec__58512 = p__58511;
var actor_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58512,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58512,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(v);
if(and__4251__auto__){
return cljs.core.second(com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$1(v));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [actor_id,com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$1(v)], null);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = com.fulcrologic.fulcro.raw.components.component_class_QMARK_(v);
if(and__4251__auto__){
return cljs.core.second(com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(v,cljs.core.PersistentArrayMap.EMPTY));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [actor_id,com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(v,cljs.core.PersistentArrayMap.EMPTY)], null);
} else {
if(edn_query_language.core.ident_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [actor_id,v], null);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,874,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The value given for actor",actor_id,"had (or was) an invalid ident:",v,"See https://book.fulcrologic.com/#err-uism-actor-invalid-ident"], null);
}),null)),null,-1098691699,null);

return null;

}
}
}
})),actors);
});
/**
 * Calculate the map from actor names to the Fulcro component registry names that represent those actors.
 */
com.fulcrologic.fulcro.ui_state_machines.derive_actor_components = (function com$fulcrologic$fulcro$ui_state_machines$derive_actor_components(actors){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__58517){
var vec__58518 = p__58517;
var actor_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58518,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58518,(1),null);
var temp__5753__auto__ = com.fulcrologic.fulcro.ui_state_machines.any__GT_actor_component_registry_key(v);
if(cljs.core.truth_(temp__5753__auto__)){
var k = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [actor_id,k], null);
} else {
return null;
}
})),actors);
});
/**
 * Install and start a state machine.
 * 
 *   this - A UI component or app
 *   machine - A state machine defined with defstatemachine
 *   instance-id - An ID by which you will refer to this active instance.
 *   actors - A map of actor-names -> The ident, class, or react instance that represent them in the UI. Raw idents do not support SM loads.
 *   started-event-data - Data that will be sent with the ::uism/started event as ::uism/event-data
 */
com.fulcrologic.fulcro.ui_state_machines.begin_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$begin_BANG_(var_args){
var G__58524 = arguments.length;
switch (G__58524) {
case 4:
return com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,machine,instance_id,actors){
return com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(this$,machine,instance_id,actors,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (this$,machine,instance_id,actors,started_event_data){
var actors__GT_idents = com.fulcrologic.fulcro.ui_state_machines.derive_actor_idents(actors);
var actors__GT_component_names = com.fulcrologic.fulcro.ui_state_machines.derive_actor_components(actors);
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58526 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),instance_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583).cljs$core$IFn$_invoke$arity$1(machine),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),started_event_data,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446),actors__GT_component_names,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),actors__GT_idents], null);
return (com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1(G__58526) : com.fulcrologic.fulcro.ui_state_machines.begin.call(null,G__58526));
})()], null));
}));

(com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$lang$maxFixedArity = 5);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-actor","com.fulcrologic.fulcro.ui-state-machines/target-actor",362646538),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-alias","com.fulcrologic.fulcro.ui-state-machines/target-alias",284018720),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","alias","com.fulcrologic.fulcro.ui-state-machines/alias",466933196),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","alias","com.fulcrologic.fulcro.ui-state-machines/alias",466933196));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","do-something","com.fulcrologic.fulcro.ui-state-machines/do-something",1808599788,null)),"null"], null), null)))),cljs.spec.alpha.with_gen(cljs.core.symbol_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","do-something","com.fulcrologic.fulcro.ui-state-machines/do-something",1808599788,null),null], null), null));
})));
com.fulcrologic.fulcro.ui_state_machines.spec_mutation = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","spec-mutation","com.fulcrologic.fulcro.ui-state-machines/spec-mutation",-1214366849,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-decl","com.fulcrologic.fulcro.ui-state-machines/mutation-decl",-1004883610),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","mutation-declaration?","com.fulcrologic.fulcro.mutations/mutation-declaration?",1865681563,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","spec-mutation","com.fulcrologic.fulcro.ui-state-machines/spec-mutation",-1214366849,null),"null"], null), null)))),cljs.spec.alpha.with_gen(com.fulcrologic.fulcro.mutations.mutation_declaration_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([com.fulcrologic.fulcro.ui_state_machines.spec_mutation]));
})));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-descriptor","com.fulcrologic.fulcro.ui-state-machines/mutation-descriptor",1232629368),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-remote","com.fulcrologic.fulcro.ui-state-machines/mutation-remote",-672492740)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58530){
return cljs.core.map_QMARK_(G__58530);
}),(function (G__58530){
return cljs.core.contains_QMARK_(G__58530,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703));
}),(function (G__58530){
return cljs.core.contains_QMARK_(G__58530,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120));
})], null),(function (G__58530){
return ((cljs.core.map_QMARK_(G__58530)) && (((cljs.core.contains_QMARK_(G__58530,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703))) && (cljs.core.contains_QMARK_(G__58530,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120))))));
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-remote","com.fulcrologic.fulcro.ui-state-machines/mutation-remote",-672492740)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-remote","com.fulcrologic.fulcro.ui-state-machines/mutation-remote",-672492740)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120)))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-remote","com.fulcrologic.fulcro.ui-state-machines/mutation-remote",-672492740)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-remote","com.fulcrologic.fulcro.ui-state-machines/mutation-remote",-672492740),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-mutations","com.fulcrologic.fulcro.ui-state-machines/queued-mutations",-652604760),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-descriptor","com.fulcrologic.fulcro.ui-state-machines/mutation-descriptor",1232629368)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-descriptor","com.fulcrologic.fulcro.ui-state-machines/mutation-descriptor",1232629368),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-descriptor","com.fulcrologic.fulcro.ui-state-machines/mutation-descriptor",1232629368),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58536){
return cljs.core.coll_QMARK_(G__58536);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-descriptor","com.fulcrologic.fulcro.ui-state-machines/mutation-descriptor",1232629368))], null),null));
/**
 * Compute a raw Fulcro target based on the possible options.
 * 
 *   `env` - The SM env
 * 
 *   targeting options:
 * 
 *   `:com.fulcrologic.fulcro.algorithms.data-targeting/target explicit-target` - A raw Fulcro data fetch target.
 *   `::uism/target-actor actor-alias` - Helper that can translate an actor alias to a target
 *   `::uism/target-alias field-alias` - Helper that can translate a data alias to a target (ident + field)
 * 
 *   If more than one option is used, then `df/mutliple-targets` will be used to encode them all.
 *   
 */
com.fulcrologic.fulcro.ui_state_machines.compute_target = (function com$fulcrologic$fulcro$ui_state_machines$compute_target(env,p__58538){
var map__58539 = p__58538;
var map__58539__$1 = cljs.core.__destructure_map(map__58539);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58539__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140));
var target_actor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58539__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-actor","com.fulcrologic.fulcro.ui-state-machines/target-actor",362646538));
var target_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58539__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-alias","com.fulcrologic.fulcro.ui-state-machines/target-alias",284018720));
var noptions = cljs.core.count(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,target_actor,target_alias], null)));
var actor = (cljs.core.truth_(target_actor)?com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,target_actor):null);
var field = (cljs.core.truth_(target_alias)?com.fulcrologic.fulcro.ui_state_machines.resolve_alias(env,target_alias):null);
if((noptions > (1))){
if(cljs.core.truth_((function (){var and__4251__auto__ = target;
if(cljs.core.truth_(and__4251__auto__)){
return com.fulcrologic.fulcro.algorithms.data_targeting.multiple_targets_QMARK_(target);
} else {
return and__4251__auto__;
}
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(target,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [actor,field], null)));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.data_targeting.multiple_targets,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,actor,field], null)));
}
} else {
var or__4253__auto__ = target;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = actor;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return field;
}
}
}
});
var mtrigger_BANG__58804 = (function com$fulcrologic$fulcro$ui_state_machines$mutation_trigger_STAR_(p__58542,actor_ident,asm_id,event,data){
var map__58543 = p__58542;
var map__58543__$1 = cljs.core.__destructure_map(map__58543);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58543__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58543__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core.truth_((function (){var and__4251__auto__ = asm_id;
if(cljs.core.truth_(and__4251__auto__)){
return event;
} else {
return and__4251__auto__;
}
})())){
var event_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-result","com.fulcrologic.fulcro.ui-state-machines/mutation-result",-1418456314),result);
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58545 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),event,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),event_data], null);
return (com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.cljs$core$IFn$_invoke$arity$1(G__58545) : com.fulcrologic.fulcro.ui_state_machines.trigger_state_machine_event.call(null,G__58545));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),actor_ident], null));
} else {
return null;
}
});
com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","mutation-delegate","com.fulcrologic.fulcro.ui-state-machines/mutation-delegate",-2068639436,null),(function (p__58546){
var map__58547 = p__58546;
var map__58547__$1 = cljs.core.__destructure_map(map__58547);
var env = map__58547__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58547__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var map__58548 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast);
var map__58548__$1 = cljs.core.__destructure_map(map__58548);
var mp = map__58548__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140));
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
var error_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384));
var mutation_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703));
var mutation_remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-remote","com.fulcrologic.fulcro.ui-state-machines/mutation-remote",-672492740));
var error_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624));
var ok_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701));
var mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120));
var returning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614));
var ok_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58548__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126));
var params = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(mp,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-remote","com.fulcrologic.fulcro.ui-state-machines/mutation-remote",-672492740),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140)], 0));
var sm_env = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$6(cljs.core.deref(state),null,asm_id,ok_event,ok_data,app);
var actor_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(sm_env,mutation_context);
var ast__$1 = edn_query_language.core.query__GT_ast1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,mutation,(new cljs.core.List(null,params,null,(1),null)),(2),null))], null));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (){var or__4253__auto__ = mutation_remote;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})(),(function (env__$1){
var env__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1);
var G__58550 = env__$2;
var G__58550__$1 = (cljs.core.truth_(returning)?com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$2(G__58550,returning):G__58550);
if(cljs.core.truth_(target)){
return com.fulcrologic.fulcro.mutations.with_target(G__58550__$1,target);
} else {
return G__58550__$1;
}
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),com.fulcrologic.fulcro.mutations.default_result_action_BANG_,new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),(function (env__$1){
var tid__GT_rid = com.fulcrologic.fulcro.algorithms.tempid.result__GT_tempid__GT_realid(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(env__$1)));
var actor_ident__$1 = com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(actor_ident,tid__GT_rid);
var ok_data__$1 = com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(ok_data,tid__GT_rid);
var asm_id__$1 = com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(asm_id,tid__GT_rid);
return mtrigger_BANG__58804(env__$1,actor_ident__$1,asm_id__$1,ok_event,ok_data__$1);
}),new cljs.core.Keyword(null,"error-action","error-action",-1147840498),(function (env__$1){
var tid__GT_rid = com.fulcrologic.fulcro.algorithms.tempid.result__GT_tempid__GT_realid(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(env__$1)));
var actor_ident__$1 = com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(actor_ident,tid__GT_rid);
var error_data__$1 = com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(error_data,tid__GT_rid);
var asm_id__$1 = com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(asm_id,tid__GT_rid);
return mtrigger_BANG__58804(env__$1,actor_ident__$1,asm_id__$1,error_event,error_data__$1);
})]);
}));
/**
 * Run the given REMOTE mutation (a symbol or mutation declaration) in the context of the state machine.
 * 
 *   `env` - The SM handler environment
 *   `actor` - The name (keyword) of a defined actor.
 *   `mutation` - The symbol (or mutation declaration) of the *server* mutation to run. This function will *not* run a local
 *   version of the mutation.
 *   `options-and-params` - The parameters to pass to your mutation. This map can also include these additional
 *   state-machine options:
 * 
 *   `::uism/target-actor actor` - If you use this it will set JUST the `target` (not necessary for loading an actor). Use `::m/returning` to override the type if necessary.
 *   `::uism/target-alias field-alias` - Helper that can translate a data alias to a target (ident + field). You must also use `returning` to specify the normalization type.
 *   `:com.fulcrologic.fulcro.mutations/returning Class` - Class to use for normalizing the result.
 *   `:com.fulcrologic.fulcro.algorithms.data-targeting/target explicit-target` - Target for result
 *   `::uism/ok-event event-id` - The SM event to trigger when the pessimistic mutation succeeds (no default).
 *   `::uism/error-event event-id` - The SM event to trigger when the pessimistic mutation fails (no default).
 *   `::uism/ok-data map-of-data` - Data to include in the event-data on an ok event
 *   `::uism/error-data map-of-data` - Data to include in the event-data on an error event
 *   `::uism/mutation-remote` - The keyword name of the Fulcro remote (defaults to :remote)
 *   `:com.fulcrologic.fulcro.algorithms.tx-processing/abort-id` - An abort ID for being able to cancel the mutation.
 * 
 *   NOTE: The mutation response *will be merged* into the event data that is sent to the SM handler.
 * 
 *   This function does *not* side effect.  It queues the mutation to run after the handler exits.
 */
com.fulcrologic.fulcro.ui_state_machines.trigger_remote_mutation = (function com$fulcrologic$fulcro$ui_state_machines$trigger_remote_mutation(env,actor,mutation,options_and_params){
var target = com.fulcrologic.fulcro.ui_state_machines.compute_target(env,options_and_params);
var abort_id = (function (){var or__4253__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(options_and_params);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(options_and_params);
}
})();
var asm_id = com.fulcrologic.fulcro.ui_state_machines.asm_id(env);
var mutation_sym = com.fulcrologic.fulcro.mutations.mutation_symbol(mutation);
var mutation_descriptor = (function (){var G__58554 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options_and_params,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-actor","com.fulcrologic.fulcro.ui-state-machines/target-actor",362646538),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-alias","com.fulcrologic.fulcro.ui-state-machines/target-alias",284018720),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140)], 0)),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation","com.fulcrologic.fulcro.ui-state-machines/mutation",-2113032120),mutation_sym,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-context","com.fulcrologic.fulcro.ui-state-machines/mutation-context",1639102703),actor], 0));
var G__58554__$1 = (cljs.core.truth_(abort_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58554,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184),abort_id):G__58554);
if(cljs.core.seq(target)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58554__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),target);
} else {
return G__58554__$1;
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-mutations","com.fulcrologic.fulcro.ui-state-machines/queued-mutations",-652604760),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),mutation_descriptor);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ident","ident",-742346)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("edn-query-language.core","ident?","edn-query-language.core/ident?",-1410852474,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,edn_query_language.core.ident_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load","com.fulcrologic.fulcro.ui-state-machines/load",178791414),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423),new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__58556){
return cljs.core.map_QMARK_(G__58556);
})], null),(function (G__58556){
return cljs.core.map_QMARK_(G__58556);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423),new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423),new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423),new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load","com.fulcrologic.fulcro.ui-state-machines/load",178791414)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load","com.fulcrologic.fulcro.ui-state-machines/load",178791414),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load","com.fulcrologic.fulcro.ui-state-machines/load",178791414),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__58559){
return cljs.core.coll_QMARK_(G__58559);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load","com.fulcrologic.fulcro.ui-state-machines/load",178791414))], null),null));
/**
 * INTERNAL: Convert SM load options into Fulcro load options.
 */
com.fulcrologic.fulcro.ui_state_machines.convert_load_options = (function com$fulcrologic$fulcro$ui_state_machines$convert_load_options(env,options){
var map__58562 = options;
var map__58562__$1 = cljs.core.__destructure_map(map__58562);
var ok_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58562__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126));
var ok_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58562__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701));
var error_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58562__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384));
var error_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58562__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624));
var target_actor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58562__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-actor","com.fulcrologic.fulcro.ui-state-machines/target-actor",362646538));
var target_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58562__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-alias","com.fulcrologic.fulcro.ui-state-machines/target-alias",284018720));
var map__58563 = options;
var map__58563__$1 = cljs.core.__destructure_map(map__58563);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58563__$1,new cljs.core.Keyword(null,"marker","marker",865118313));
var marker__$1 = (((marker == null))?false:marker);
var map__58564 = env;
var map__58564__$1 = cljs.core.__destructure_map(map__58564);
var asm_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58564__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394));
var options__$1 = (function (){var G__58565 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-data","com.fulcrologic.fulcro.ui-state-machines/ok-data",664644701),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-alias","com.fulcrologic.fulcro.ui-state-machines/target-alias",284018720),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-actor","com.fulcrologic.fulcro.ui-state-machines/target-actor",362646538)], 0)),new cljs.core.Keyword(null,"marker","marker",865118313),marker__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"abort-id","abort-id",1559937819),asm_id,new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","handle-load-error","com.fulcrologic.fulcro.ui-state-machines/handle-load-error",145527222,null),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ok_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null)], 0))], 0));
var G__58565__$1 = (cljs.core.truth_((function (){var or__4253__auto__ = target_actor;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return target_alias;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58565,new cljs.core.Keyword(null,"target","target",253001721),com.fulcrologic.fulcro.ui_state_machines.compute_target(env,options)):G__58565);
var G__58565__$2 = (cljs.core.truth_(ok_event)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58565__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("com.fulcrologic.fulcro.ui-state-machines","trigger-state-machine-event","com.fulcrologic.fulcro.ui-state-machines/trigger-state-machine-event",717825464,null)),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-id","com.fulcrologic.fulcro.ui-state-machines/event-id",196307868),ok_event):G__58565__$1);
var G__58565__$3 = (cljs.core.truth_(ok_data)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__58565__$2,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),ok_data):G__58565__$2);
var G__58565__$4 = (cljs.core.truth_(error_event)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__58565__$3,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),error_event):G__58565__$3);
if(cljs.core.truth_(error_data)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__58565__$4,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-data","com.fulcrologic.fulcro.ui-state-machines/error-data",1731316624),error_data);
} else {
return G__58565__$4;
}
})();
return options__$1;
});
/**
 * Identical API to fulcro's data fetch `load`, but using a handle `env` instead of a component/app.
 * Adds the load request to then env which will be sent to Fulcro as soon as the handler finishes.
 * 
 * The 3rd argument can be a Fulcro class or a UISM actor name that was registered with `begin!`.
 * 
 *   The `options` can include anything from data fetch's load, but the following additional keys are
 *   more supported for better integration with UISM:
 * 
 *   `::uism/ok-event`:: An event to send when the load is done (instead of calling a mutation)
 *   `::uism/ok-data`:: To send as event-data on the ok-event.
 *   `::uism/error-event`:: The event to send if the load has a network error.
 *   `::uism/error-data`:: To send as event-data on error.
 *   `::uism/target-actor`:: Set target to a given actor's ident. See also `load-actor`.
 *   `::uism/target-alias`:: Set load target to the path defined by the given alias.
 * 
 * NOTE: In general a state machine should declare an actor for items in the machine and use `load-actor` instead of
 * this function so that the state definitions themselves need not be coupled (via code) to the UI.
 */
com.fulcrologic.fulcro.ui_state_machines.load = (function com$fulcrologic$fulcro$ui_state_machines$load(var_args){
var G__58570 = arguments.length;
switch (G__58570) {
case 3:
return com.fulcrologic.fulcro.ui_state_machines.load.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.ui_state_machines.load.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.load.cljs$core$IFn$_invoke$arity$3 = (function (env,key_or_ident,component_class_or_actor_name){
return com.fulcrologic.fulcro.ui_state_machines.load.cljs$core$IFn$_invoke$arity$4(env,key_or_ident,component_class_or_actor_name,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.ui_state_machines.load.cljs$core$IFn$_invoke$arity$4 = (function (env,key_or_ident,component_class_or_actor_name,options){
var options__$1 = com.fulcrologic.fulcro.ui_state_machines.convert_load_options(env,options);
var class$ = (((component_class_or_actor_name instanceof cljs.core.Keyword))?com.fulcrologic.fulcro.ui_state_machines.actor_class(env,component_class_or_actor_name):component_class_or_actor_name);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),(function (){var G__58572 = cljs.core.PersistentArrayMap.EMPTY;
var G__58572__$1 = (cljs.core.truth_(class$)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58572,new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),class$):G__58572);
var G__58572__$2 = (cljs.core.truth_(key_or_ident)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58572__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","query-key","com.fulcrologic.fulcro.ui-state-machines/query-key",-1158698423),key_or_ident):G__58572__$1);
if(cljs.core.truth_(options__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58572__$2,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091),options__$1);
} else {
return G__58572__$2;
}
})());
}));

(com.fulcrologic.fulcro.ui_state_machines.load.cljs$lang$maxFixedArity = 4);

/**
 * Load (refresh) the given actor. If the actor *is not* on the UI, then you *must* specify
 * `:com.fulcrologic.fulcro.components/component-class` in the `options` map.
 * 
 * options can contain the normal `df/load` parameters, and also:
 * 
 *   `::comp/component-class` - The defsc name of the component to use for normalization and query. Only needed if the
 *  actor was not declared using a Fulcro component or component class.
 *   `::uism/ok-event`:: An event to send when the load is done (instead of calling a mutation)
 *   `::uism/ok-data`:: To send as event-data on the ok-event.
 *   `::uism/error-event`:: The event to send if the load has a network error.
 *   `::uism/error-data`:: To send as event-data on error.
 * 
 * Adds a load request to then env which will be sent to Fulcro as soon as the handler finishes.
 */
com.fulcrologic.fulcro.ui_state_machines.load_actor = (function com$fulcrologic$fulcro$ui_state_machines$load_actor(var_args){
var G__58575 = arguments.length;
switch (G__58575) {
case 2:
return com.fulcrologic.fulcro.ui_state_machines.load_actor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.ui_state_machines.load_actor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.load_actor.cljs$core$IFn$_invoke$arity$2 = (function (env,actor_name){
return com.fulcrologic.fulcro.ui_state_machines.load_actor.cljs$core$IFn$_invoke$arity$3(env,actor_name,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.ui_state_machines.load_actor.cljs$core$IFn$_invoke$arity$3 = (function (env,actor_name,p__58577){
var map__58578 = p__58577;
var map__58578__$1 = cljs.core.__destructure_map(map__58578);
var options = map__58578__$1;
var component_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58578__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369));
var options__$1 = com.fulcrologic.fulcro.ui_state_machines.convert_load_options(env,options);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-loads","com.fulcrologic.fulcro.ui-state-machines/queued-loads",1234134533),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),(function (){var G__58580 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor-name","com.fulcrologic.fulcro.ui-state-machines/actor-name",-147583310),actor_name,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","load-options","com.fulcrologic.fulcro.ui-state-machines/load-options",-2118314091),options__$1], null);
if(cljs.core.truth_(component_class)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58580,new cljs.core.Keyword("com.fulcrologic.fulcro.components","component-class","com.fulcrologic.fulcro.components/component-class",-316082369),component_class);
} else {
return G__58580;
}
})());
}));

(com.fulcrologic.fulcro.ui_state_machines.load_actor.cljs$lang$maxFixedArity = 3);

/**
 * Run a mutation helper function (e.g. a fn of Fulcro state).
 */
com.fulcrologic.fulcro.ui_state_machines.apply_action = (function com$fulcrologic$fulcro$ui_state_machines$apply_action(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58815 = arguments.length;
var i__4865__auto___58816 = (0);
while(true){
if((i__4865__auto___58816 < len__4864__auto___58815)){
args__4870__auto__.push((arguments[i__4865__auto___58816]));

var G__58817 = (i__4865__auto___58816 + (1));
i__4865__auto___58816 = G__58817;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic = (function (env,mutation_helper,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138),mutation_helper,args);
}));

(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$lang$applyTo = (function (seq58581){
var G__58582 = cljs.core.first(seq58581);
var seq58581__$1 = cljs.core.next(seq58581);
var G__58583 = cljs.core.first(seq58581__$1);
var seq58581__$2 = cljs.core.next(seq58581__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58582,G__58583,seq58581__$2);
}));

/**
 * Get the name of the active state for an active state machine using a component. If you use this to represent UI changes then you should
 *   include the ident of your state machine instance in the query of the component that uses it so that `shouldComponentUpdate` will
 *   see props change:
 *   
 *   ```
 *   (defsc Component [this props]
 *  {:query (fn [] [ [::uism/asm-id ::my-machine] ...]) 
 *   ...}
 *  ...
 *  (let [s (get-active-state this ::my-machine)] ...))
 *   ```
 *   
 */
com.fulcrologic.fulcro.ui_state_machines.get_active_state = (function com$fulcrologic$fulcro$ui_state_machines$get_active_state(this$,asm_id){
var state_map = com.fulcrologic.fulcro.raw.application.current_state(com.fulcrologic.fulcro.raw.components.any__GT_app(this$));
var G__58587 = state_map;
var G__58587__$1 = (((G__58587 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394).cljs$core$IFn$_invoke$arity$1(G__58587));
var G__58587__$2 = (((G__58587__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__58587__$1,asm_id));
if((G__58587__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193).cljs$core$IFn$_invoke$arity$1(G__58587__$2);
}
});
/**
 * Returns a map that contains the given state-machine's ID and actor state.
 * 
 * `state-map` - The current Fulcro state map
 * `asm-id` - The ID of the state machine of interest.
 */
com.fulcrologic.fulcro.ui_state_machines.current_state_and_actors = (function com$fulcrologic$fulcro$ui_state_machines$current_state_and_actors(state_map,id){
var map__58588 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),id], null));
var map__58588__$1 = cljs.core.__destructure_map(map__58588);
var active_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58588__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193));
var actor__GT_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58588__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928));
var actor__GT_component_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58588__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446));
var props = cljs.core.reduce_kv((function (result,actor,ident){
var cname = (actor__GT_component_name.cljs$core$IFn$_invoke$arity$1 ? actor__GT_component_name.cljs$core$IFn$_invoke$arity$1(actor) : actor__GT_component_name.call(null,actor));
var cls = com.fulcrologic.fulcro.raw.components.registry_key__GT_class(cname);
var query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(cls);
if(cljs.core.truth_(cls)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,1176,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You forgot to give actor",actor,"a :componentName"], null);
}),null)),null,1913219999,null);
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,actor,com.fulcrologic.fulcro.algorithms.denormalize.traced_db__GT_tree(state_map,ident,query));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-state","active-state",-1185168001),active_state], null),actor__GT_ident);
return props;
});
/**
 * Add a UISM to Fulcro in a manner disconnected from React.
 * 
 * The options map should contain:
 * 
 * * `:state-machine-definition` - The state machine you want to create/use.
 * * `:id` - The ID you want to use for the instance of the state machine.
 * * `:receive-props` - A `(fn [props])` that is called whenever the state changes in a way that affects an actor. The
 *                      `props` is a map that contains the actor props (by actor name `{:actor/x actor-x-props}`) and the current
 *                      state of the state machine as `:active-state`.
 * * `:actors` - The actor definitions. See `begin!`.
 * * `:initial-event-data` - The data to pass to the initial event if the machine is started (not remounted).
 * 
 * This will set up the given state machine under the given ID, and start it (if not
 * already started). Your initial state handler MUST set up actors and otherwise initialize based on initial-event-data.
 * 
 * If the machine is already started at the given ID then this will send it an `:event/remounted` event.
 * 
 * You MUST include `:componentName` in each of your actor's normalizing component options (e.g. `(nc query {:componentName ::uniqueName})`)
 * because UISM requires component appear in the component registry (components cannot be safely stored in app state, just their
 * names).
 * 
 * NOTE: This function automatically supports a very fast variant of props change detection, so you will not receive
 * calls when there is a transaction that does not change the actors/active state of this UISM.
 */
com.fulcrologic.fulcro.ui_state_machines.add_uism_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$add_uism_BANG_(app,p__58591){
var map__58592 = p__58591;
var map__58592__$1 = cljs.core.__destructure_map(map__58592);
var state_machine_definition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword(null,"state-machine-definition","state-machine-definition",-64300746));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var receive_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword(null,"receive-props","receive-props",-391890642));
var actors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword(null,"actors","actors",-1845636398));
var initial_event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword(null,"initial-event-data","initial-event-data",184944047));
var last_return_value_58820 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var last_ident_58821 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
com.fulcrologic.fulcro.raw.application.add_render_listener_BANG_(app,id,(function() { 
var G__58822__delegate = function (args){
var state_map = com.fulcrologic.fulcro.raw.application.current_state(app);
var map__58594 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),id], null));
var map__58594__$1 = cljs.core.__destructure_map(map__58594);
var active_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193));
var actor__GT_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928));
var actor__GT_component_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->component-name","com.fulcrologic.fulcro.ui-state-machines/actor->component-name",-2090352446));
var props = cljs.core.reduce_kv((function (result,actor,ident){
var prior_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(last_ident_58821),actor);
var prior_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(last_return_value_58820),actor);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(last_ident_58821,cljs.core.assoc,actor,ident);

if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prior_ident,ident);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.denormalize.possibly_stale_QMARK_(state_map,prior_props);
}
})())){
var cname = (actor__GT_component_name.cljs$core$IFn$_invoke$arity$1 ? actor__GT_component_name.cljs$core$IFn$_invoke$arity$1(actor) : actor__GT_component_name.call(null,actor));
var cls = com.fulcrologic.fulcro.raw.components.registry_key__GT_class(cname);
var query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(cls);
if(cljs.core.truth_(cls)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.ui-state-machines",null,1223,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You forgot to give actor",actor,"a :componentName"], null);
}),null)),null,-866152643,null);
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,actor,com.fulcrologic.fulcro.algorithms.denormalize.traced_db__GT_tree(state_map,ident,query));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,actor,prior_props);
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-state","active-state",-1185168001),active_state], null),actor__GT_ident);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(last_return_value_58820),props)){
return null;
} else {
cljs.core.reset_BANG_(last_return_value_58820,props);

return (receive_props.cljs$core$IFn$_invoke$arity$1 ? receive_props.cljs$core$IFn$_invoke$arity$1(props) : receive_props.call(null,props));
}
};
var G__58822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58824__i = 0, G__58824__a = new Array(arguments.length -  0);
while (G__58824__i < G__58824__a.length) {G__58824__a[G__58824__i] = arguments[G__58824__i + 0]; ++G__58824__i;}
  args = new cljs.core.IndexedSeq(G__58824__a,0,null);
} 
return G__58822__delegate.call(this,args);};
G__58822.cljs$lang$maxFixedArity = 0;
G__58822.cljs$lang$applyTo = (function (arglist__58825){
var args = cljs.core.seq(arglist__58825);
return G__58822__delegate(args);
});
G__58822.cljs$core$IFn$_invoke$arity$variadic = G__58822__delegate;
return G__58822;
})()
);

var s = com.fulcrologic.fulcro.raw.application.current_state(app);
var started_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),id], null));
if(cljs.core.truth_(started_QMARK_)){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app,id,new cljs.core.Keyword("event","remounted","event/remounted",496340590));
} else {
return com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(app,state_machine_definition,id,(function (){var or__4253__auto__ = actors;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),initial_event_data);
}
});
/**
 * Remove a previously-added UISM from state and the render listener. The state machine will not receive any
 * (final) events.
 */
com.fulcrologic.fulcro.ui_state_machines.remove_uism_BANG_ = (function com$fulcrologic$fulcro$ui_state_machines$remove_uism_BANG_(app,id){
com.fulcrologic.fulcro.raw.application.remove_render_listener_BANG_(app,id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app),cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
});
/**
 * Just like `components/transact!`, but simply queues the transaction to be submitted after the handler completes.
 * Usually you can use `apply-action` to do local state changes, and `trigger-remote-mutation` to do remote operations;
 * however, sometimes external users of a state machine wish to supply ad-hoc operations that should be run by a
 * state machine.
 * 
 * NOTE: It is legal to side-effect in an event handler, but in general the desired operation is to defer
 * the side effects (e.g. `comp/transact!`) until the handler has finished. Running, for example, a synchronous
 * transact inside of a handler will not work as expected because the handler will finish after such a transaction
 * and overwrite the changes to state that such a transaction caused.
 * 
 * So, for example, someone might begin a state machine with:
 * 
 * ```
 * (begin! this machine :id actors {:on-success `[(something-happened)])
 * ```
 * 
 * which the state machine can save with `store`, and later look up with `retrieve`.
 * 
 * `options` is as described in `components/transact!`.
 * 
 */
com.fulcrologic.fulcro.ui_state_machines.transact = (function com$fulcrologic$fulcro$ui_state_machines$transact(var_args){
var G__58600 = arguments.length;
switch (G__58600) {
case 2:
return com.fulcrologic.fulcro.ui_state_machines.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.ui_state_machines.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.ui_state_machines.transact.cljs$core$IFn$_invoke$arity$2 = (function (env,txn){
return com.fulcrologic.fulcro.ui_state_machines.transact.cljs$core$IFn$_invoke$arity$3(env,txn,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.ui_state_machines.transact.cljs$core$IFn$_invoke$arity$3 = (function (env,txn,options){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","queued-transactions","com.fulcrologic.fulcro.ui-state-machines/queued-transactions",-998495741),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"txn","txn",-469204789),txn,new cljs.core.Keyword(null,"options","options",99638489),options], null));
}));

(com.fulcrologic.fulcro.ui_state_machines.transact.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=com.fulcrologic.fulcro.ui_state_machines.js.map
