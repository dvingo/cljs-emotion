goog.provide('expound.alpha');
if((typeof expound !== 'undefined') && (typeof expound.alpha !== 'undefined') && (typeof expound.alpha.registry_ref !== 'undefined')){
} else {
expound.alpha.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"count","count",2139924085),(1)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56374){
return ((cljs.core.coll_QMARK_(G__56374)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.bounded_count((1),G__56374))));
}),new cljs.core.Keyword(null,"count","count",2139924085),(1),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"count","count",2139924085),(1))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.spec","specs","expound.spec/specs",1949978405),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56379){
return cljs.core.coll_QMARK_(G__56379);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.spec.problem","via","expound.spec.problem/via",421328647),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56389){
return cljs.core.vector_QMARK_(G__56389);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.spec","problem","expound.spec/problem",628036380),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.spec.problem","via","expound.spec.problem/via",421328647)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.spec.problem","via","expound.spec.problem/via",421328647)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56390){
return cljs.core.map_QMARK_(G__56390);
}),(function (G__56390){
return cljs.core.contains_QMARK_(G__56390,new cljs.core.Keyword(null,"via","via",-1904457336));
})], null),(function (G__56390){
return ((cljs.core.map_QMARK_(G__56390)) && (cljs.core.contains_QMARK_(G__56390,new cljs.core.Keyword(null,"via","via",-1904457336))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.spec.problem","via","expound.spec.problem/via",421328647)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"via","via",-1904457336)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"via","via",-1904457336)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.spec","problems","expound.spec/problems",-1664082731),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","problem","expound.spec/problem",628036380)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("expound.spec","problem","expound.spec/problem",628036380),new cljs.core.Keyword("expound.spec","problem","expound.spec/problem",628036380),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56396){
return cljs.core.coll_QMARK_(G__56396);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("expound.spec","problem","expound.spec/problem",628036380))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.printer","show-valid-values?","expound.printer/show-valid-values?",1382130219),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.printer","value-str-fn","expound.printer/value-str-fn",-605841761),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.printer","print-specs?","expound.printer/print-specs?",-2143920374),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.printer","theme","expound.printer/theme",976967333),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figwheel-theme","figwheel-theme",1505227343),"null",new cljs.core.Keyword(null,"none","none",1333468478),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figwheel-theme","figwheel-theme",1505227343),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.printer","show-valid-values?","expound.printer/show-valid-values?",1382130219),new cljs.core.Keyword("expound.printer","value-str-fn","expound.printer/value-str-fn",-605841761),new cljs.core.Keyword("expound.printer","print-specs?","expound.printer/print-specs?",-2143920374),new cljs.core.Keyword("expound.printer","theme","expound.printer/theme",976967333)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.printer","show-valid-values?","expound.printer/show-valid-values?",1382130219),new cljs.core.Keyword("expound.printer","value-str-fn","expound.printer/value-str-fn",-605841761),new cljs.core.Keyword("expound.printer","print-specs?","expound.printer/print-specs?",-2143920374),new cljs.core.Keyword("expound.printer","theme","expound.printer/theme",976967333)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56400){
return cljs.core.map_QMARK_(G__56400);
})], null),(function (G__56400){
return cljs.core.map_QMARK_(G__56400);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),new cljs.core.Keyword(null,"value-str-fn","value-str-fn",1124137860),new cljs.core.Keyword(null,"print-specs?","print-specs?",146397677),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.printer","show-valid-values?","expound.printer/show-valid-values?",1382130219),new cljs.core.Keyword("expound.printer","value-str-fn","expound.printer/value-str-fn",-605841761),new cljs.core.Keyword("expound.printer","print-specs?","expound.printer/print-specs?",-2143920374),new cljs.core.Keyword("expound.printer","theme","expound.printer/theme",976967333)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),new cljs.core.Keyword(null,"kw","kw",1158308175),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Symbol("cljs.spec.alpha","spec?","cljs.spec.alpha/spec?",-2086793671,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"kw","kw",1158308175),new cljs.core.Keyword(null,"spec","spec",347520401)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),new cljs.core.Symbol("cljs.spec.alpha","spec?","cljs.spec.alpha/spec?",-2086793671,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,cljs.core.ifn_QMARK_,cljs.core.qualified_keyword_QMARK_,cljs.spec.alpha.spec_QMARK_], null),null));
expound.alpha.figwheel_theme = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"good-key","good-key",-1265033983),new cljs.core.Keyword(null,"warning-key","warning-key",-1487066651),new cljs.core.Keyword(null,"correct-key","correct-key",1087492967),new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.Keyword(null,"focus-path","focus-path",-2048689431),new cljs.core.Keyword(null,"bad-value","bad-value",-139100659),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"good-pred","good-pred",-629085297),new cljs.core.Keyword(null,"good","good",511701169),new cljs.core.Keyword(null,"focus-key","focus-key",2074966449),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"bad","bad",1127186645),new cljs.core.Keyword(null,"error-key","error-key",-1651308715),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"message","message",-406056002)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cyan","cyan",1118839274)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cyan","cyan",1118839274)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold","bold",-116809535)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null)]);
expound.alpha.check_header_size = (45);
expound.alpha.header_size = (35);
expound.alpha.section_size = (25);
expound.alpha._STAR_value_str_fn_STAR_ = (function expound$alpha$_STAR_value_str_fn_STAR_(_,___$1,___$2,___$3){
return "NOT IMPLEMENTED";
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.alpha","value-in-context","expound.alpha/value-in-context",-547735824,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),"null",new cljs.core.Keyword(null,"ret","ret",-468222814),"null",new cljs.core.Keyword(null,"fn","fn",-1175266204),"null",new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594),"null"], null), null)),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),"null",new cljs.core.Keyword(null,"ret","ret",-468222814),"null",new cljs.core.Keyword(null,"fn","fn",-1175266204),"null",new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594),"null"], null), null)),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.spec.alpha.nilable_impl(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),"null",new cljs.core.Keyword(null,"ret","ret",-468222814),"null",new cljs.core.Keyword(null,"fn","fn",-1175266204),"null",new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594),null], null), null),null),cljs.core.any_QMARK_,new cljs.core.Keyword("expound","path","expound/path",-1026376555),cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),"null",new cljs.core.Keyword(null,"ret","ret",-468222814),"null",new cljs.core.Keyword(null,"fn","fn",-1175266204),"null",new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594),"null"], null), null)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),"null",new cljs.core.Keyword(null,"ret","ret",-468222814),"null",new cljs.core.Keyword(null,"fn","fn",-1175266204),"null",new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594),"null"], null), null)),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));
/**
 * Given a form and a path into that form, returns a string
 * that helps the user understand where that path is located
 * in the form
 */
expound.alpha.value_in_context = (function expound$alpha$value_in_context(opts,spec_name,form,path,value){
var _STAR_print_namespace_maps_STAR__orig_val__56431 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_namespace_maps_STAR__temp_val__56432 = false;
(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__56432);

try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),spec_name)){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-value","bad-value",-139100659)], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,value)){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.pprint_str(value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-value","bad-value",-139100659)], 0)));
} else {
if(cljs.core.truth_(path)){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.printer.highlighted_value(opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("expound","form","expound/form",-264680632),form,new cljs.core.Keyword("expound","in","expound/in",-1900412298),path,new cljs.core.Keyword("expound","value","expound/value",-1539618504),value], null)));
} else {
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("Part of the value\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-value","bad-value",-139100659)], 0)))], 0));

}
}
}
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__56431);
}});
expound.alpha.spec_str = (function expound$alpha$spec_str(spec){
if((spec instanceof cljs.core.Keyword)){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s:\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec,expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.printer.pprint_str(cljs.spec.alpha.form(spec)))], 0));
} else {
return expound.printer.pprint_str(cljs.spec.alpha.form(spec));
}
});
expound.alpha.spec_PLUS_via = (function expound$alpha$spec_PLUS_via(problem){
var map__56444 = problem;
var map__56444__$1 = cljs.core.__destructure_map(map__56444);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56444__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56444__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
if((spec instanceof cljs.core.Keyword)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null),via);
} else {
return via;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.alpha","specs","expound.alpha/specs",-1617991929,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"problems","problems",2097327077),new cljs.core.Keyword("expound.spec","problems","expound.spec/problems",-1664082731)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("expound.spec","specs","expound.spec/specs",1949978405)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"problems","problems",2097327077),new cljs.core.Keyword("expound.spec","problems","expound.spec/problems",-1664082731)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"problems","problems",2097327077)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.spec","problems","expound.spec/problems",-1664082731)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.spec","problems","expound.spec/problems",-1664082731)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"problems","problems",2097327077),new cljs.core.Keyword("expound.spec","problems","expound.spec/problems",-1664082731)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("expound.spec","specs","expound.spec/specs",1949978405),new cljs.core.Keyword("expound.spec","specs","expound.spec/specs",1949978405),null,null),new cljs.core.Keyword("expound.spec","specs","expound.spec/specs",1949978405),null,null,null));
/**
 * Given a collection of problems, returns the specs for those problems, with duplicates removed
 */
expound.alpha.specs = (function expound$alpha$specs(problems){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(expound.alpha.spec_PLUS_via,problems)));
});
expound.alpha.specs_str = (function expound$alpha$specs_str(problems){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(expound.alpha.spec_str,cljs.core.reverse(expound.alpha.specs(problems))));
});
expound.alpha.named_QMARK_ = (function expound$alpha$named_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
expound.alpha.pr_pred_STAR_ = (function expound$alpha$pr_pred_STAR_(pred){
if((((pred instanceof cljs.core.Symbol)) || (expound.alpha.named_QMARK_(pred)))){
return cljs.core.name(pred);
} else {
if(cljs.core.fn_QMARK_(pred)){
return expound.printer.pprint_fn(pred);
} else {
return expound.printer.elide_core_ns((function (){var _STAR_print_namespace_maps_STAR__orig_val__56466 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_namespace_maps_STAR__temp_val__56467 = false;
(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__56467);

try{return expound.printer.pprint_str(pred);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__56466);
}})());

}
}
});
expound.alpha.pr_pred = (function expound$alpha$pr_pred(pred,spec){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),pred)){
return expound.alpha.pr_pred_STAR_(spec);
} else {
return expound.alpha.pr_pred_STAR_(pred);
}
});
expound.alpha.show_spec_name = (function expound$alpha$show_spec_name(spec_name,value){
if(cljs.core.truth_(spec_name)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__56478 = spec_name;
var G__56478__$1 = (((G__56478 instanceof cljs.core.Keyword))?G__56478.fqn:null);
switch (G__56478__$1) {
case "cljs.spec.alpha/pred":
return "";

break;
case "args":
return "Function arguments\n\n";

break;
case "ret":
return "Return value\n\n";

break;
case "fn":
return "Function arguments and return value\n\n";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56478__$1)].join('')));

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
} else {
return value;
}
});
expound.alpha.preds = (function expound$alpha$preds(problems){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\nor\n\n",cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (problem){
return expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.alpha.pr_pred(new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem),new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(problem)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"good-pred","good-pred",-629085297)], 0)));
}),problems)));
});
expound.alpha.spec_w_error_message_QMARK_ = (function expound$alpha$spec_w_error_message_QMARK_(via,pred){
return cljs.core.boolean$((function (){var last_spec = cljs.core.last(via);
var and__4251__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),pred);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core.qualified_keyword_QMARK_(last_spec);
if(and__4251__auto____$1){
var and__4251__auto____$2 = (expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1(last_spec) : expound.alpha.error_message.call(null,last_spec));
if(cljs.core.truth_(and__4251__auto____$2)){
return cljs.spec.alpha.get_spec(last_spec);
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})());
});
expound.alpha.label = (function expound$alpha$label(var_args){
var G__56488 = arguments.length;
switch (G__56488) {
case 1:
return expound.alpha.label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return expound.alpha.label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return expound.alpha.label.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expound.alpha.label.cljs$core$IFn$_invoke$arity$1 = (function (size){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(size,"-"));
}));

(expound.alpha.label.cljs$core$IFn$_invoke$arity$2 = (function (size,s){
return expound.alpha.label.cljs$core$IFn$_invoke$arity$3(size,s,"-");
}));

(expound.alpha.label.cljs$core$IFn$_invoke$arity$3 = (function (size,s,label_str){
return expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic((function (){var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label_str)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join('');
var chars_left = (cljs.core.long$(size) - ((prefix).length));
return [prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(chars_left,label_str)))].join('');
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134)], 0));
}));

(expound.alpha.label.cljs$lang$maxFixedArity = 3);

expound.alpha.header_label = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.alpha.label,expound.alpha.header_size);
expound.alpha.section_label = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.alpha.label,expound.alpha.section_size);
expound.alpha.relevant_specs = (function expound$alpha$relevant_specs(problems){
var sp_str = expound.alpha.specs_str(problems);
if(clojure.string.blank_QMARK_(sp_str)){
return "";
} else {
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.section_label("Relevant specs"),sp_str], 0));
}
});
expound.alpha.multi_spec_parts = (function expound$alpha$multi_spec_parts(spec_form){
var vec__56499 = spec_form;
var _multi_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56499,(0),null);
var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56499,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mm","mm",-1652850560),mm], null);
});
expound.alpha.multi_spec = (function expound$alpha$multi_spec(pred,spec){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56503_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__56503_SHARP_)) && (((((2) <= cljs.core.count(p1__56503_SHARP_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",-1464710253),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__56503_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.second(p1__56503_SHARP_))))))));
}),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,cljs.spec.alpha.form(spec))));
});
expound.alpha.no_method = (function expound$alpha$no_method(_spec_name,_form,_path,problem){
var dispatch_val = cljs.core.last(new cljs.core.Keyword("expound","path","expound/path",-1026376555).cljs$core$IFn$_invoke$arity$1(problem));
var sp = cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.core","last","cljs.core/last",1273893704,null),cljs.core.list(new cljs.core.Keyword("expound","via","expound/via",-595987777),new cljs.core.Symbol(null,"problem","problem",-1486280621,null))),cljs.core.last(new cljs.core.Keyword("expound","via","expound/via",-595987777).cljs$core$IFn$_invoke$arity$1(problem)),null,null);
var map__56519 = expound.alpha.multi_spec_parts(expound.alpha.multi_spec(new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem),sp));
var map__56519__$1 = cljs.core.__destructure_map(map__56519);
var mm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56519__$1,new cljs.core.Keyword(null,"mm","mm",-1652850560));
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic(" Spec multimethod:      `%s`\n Dispatch value:        `%s`",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mm], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dispatch_val], 0))], 0));
});
if((typeof expound !== 'undefined') && (typeof expound.alpha !== 'undefined') && (typeof expound.alpha.problem_group_str !== 'undefined')){
} else {
expound.alpha.problem_group_str = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__56520 = cljs.core.get_global_hierarchy;
return (fexpr__56520.cljs$core$IFn$_invoke$arity$0 ? fexpr__56520.cljs$core$IFn$_invoke$arity$0() : fexpr__56520.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("expound.alpha","problem-group-str"),(function (type,_spec_name,_form,_path,_problems,_opts){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
if((typeof expound !== 'undefined') && (typeof expound.alpha !== 'undefined') && (typeof expound.alpha.expected_str !== 'undefined')){
} else {
expound.alpha.expected_str = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__56527 = cljs.core.get_global_hierarchy;
return (fexpr__56527.cljs$core$IFn$_invoke$arity$0 ? fexpr__56527.cljs$core$IFn$_invoke$arity$0() : fexpr__56527.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("expound.alpha","expected-str"),(function (type,_spec_name,_form,_path,_problems,_opts){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
if((typeof expound !== 'undefined') && (typeof expound.alpha !== 'undefined') && (typeof expound.alpha.value_str !== 'undefined')){
} else {
expound.alpha.value_str = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__56534 = cljs.core.get_global_hierarchy;
return (fexpr__56534.cljs$core$IFn$_invoke$arity$0 ? fexpr__56534.cljs$core$IFn$_invoke$arity$0() : fexpr__56534.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("expound.alpha","value-str"),(function (type,_spec_name,_form,_path,_problems,_opts){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
expound.alpha.expected_str_STAR_ = (function expound$alpha$expected_str_STAR_(spec_name,problems,opts){
var problem = cljs.core.first(problems);
var map__56536 = problem;
var map__56536__$1 = cljs.core.__destructure_map(map__56536);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56536__$1,new cljs.core.Keyword("expound","form","expound/form",-264680632));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56536__$1,new cljs.core.Keyword("expound","in","expound/in",-1900412298));
var type = new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659).cljs$core$IFn$_invoke$arity$1(problem);
return expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,in$,problems,opts);
});
expound.alpha.value_str_STAR_ = (function expound$alpha$value_str_STAR_(spec_name,problems,opts){
var problem = cljs.core.first(problems);
var map__56538 = problem;
var map__56538__$1 = cljs.core.__destructure_map(map__56538);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56538__$1,new cljs.core.Keyword("expound","form","expound/form",-264680632));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56538__$1,new cljs.core.Keyword("expound","in","expound/in",-1900412298));
var type = new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659).cljs$core$IFn$_invoke$arity$1(problem);
return expound.alpha.value_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,in$,problems,opts);
});
expound.alpha.conformed_value = (function expound$alpha$conformed_value(problems,invalid_value){
var conformed_val = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(cljs.core.first(problems));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conformed_val,invalid_value)){
return "";
} else {
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("\n\nwhen conformed as\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conformed_val], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-value","bad-value",-139100659)], 0)))], 0));
}
});
expound.alpha.value_PLUS_conformed_value = (function expound$alpha$value_PLUS_conformed_value(problems,spec_name,form,path,opts){
var map__56545 = opts;
var map__56545__$1 = cljs.core.__destructure_map(map__56545);
var show_conformed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56545__$1,new cljs.core.Keyword(null,"show-conformed?","show-conformed?",-1548441572));
var invalid_value = (((path == null))?new cljs.core.Keyword("expound.alpha","no-value-found","expound.alpha/no-value-found",1205148696):(expound.problems.value_in.cljs$core$IFn$_invoke$arity$2 ? expound.problems.value_in.cljs$core$IFn$_invoke$arity$2(form,path) : expound.problems.value_in.call(null,form,path)));
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,form,path,invalid_value),(cljs.core.truth_(show_conformed_QMARK_)?expound.alpha.conformed_value(problems,invalid_value):"")], 0));
});
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_type,spec_name,form,path,problems,_opts){
return expound.alpha.show_spec_name(spec_name,expound.alpha.value_PLUS_conformed_value(problems,spec_name,form,path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-conformed?","show-conformed?",-1548441572),true], null)));
}));
expound.alpha.explain_missing_keys = (function expound$alpha$explain_missing_keys(problems){
var missing_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56546_SHARP_){
return expound.printer.missing_key(new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(p1__56546_SHARP_));
}),problems);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("should contain %s: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(missing_keys))) && (cljs.core.every_QMARK_(cljs.core.keyword,missing_keys))))?"key":"keys"),expound.printer.print_missing_keys(problems)], 0))),(function (){var temp__5751__auto__ = expound.printer.print_spec_keys(problems);
if(cljs.core.truth_(temp__5751__auto__)){
var table = temp__5751__auto__;
return ["\n\n",table].join('');
} else {
return null;
}
})()].join('');
});
expound.alpha.format_str = "%s\n\n%s\n\n%s";
expound.alpha.format_err = (function expound$alpha$format_err(header,type,spec_name,form,in$,problems,opts,expected){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic(expound.alpha.format_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.header_label(header),expound.alpha.value_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,in$,problems,opts),expected], 0));
});
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem-group","one-value","expound.problem-group/one-value",-1584327548),(function (_type,spec_name,_form,_path,problems,opts){
var problem = cljs.core.first(problems);
var subproblems = new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(problem);
var grouped_subproblems = cljs.core.vals(cljs.core.group_by(new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659),subproblems));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\nor\n\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56575_SHARP_){
return expound.alpha.expected_str_STAR_(spec_name,p1__56575_SHARP_,opts);
}),grouped_subproblems));
}));
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem-group","one-value","expound.problem-group/one-value",-1584327548),(function (_type,spec_name,_form,_path,problems,opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
var subproblems = new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(problem);
return expound.alpha.value_str_STAR_(spec_name,subproblems,opts);
}));
expound.alpha.header = (function expound$alpha$header(type){
var G__56580 = type;
var G__56580__$1 = (((G__56580 instanceof cljs.core.Keyword))?G__56580.fqn:null);
switch (G__56580__$1) {
case "expound.problem/missing-spec":
return "Missing spec";

break;
default:
return "Spec failed";

}
});
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem-group","one-value","expound.problem-group/one-value",-1584327548),(function (type,spec_name,_form,path,problems,opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
var subproblems = new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(problem);
var map__56582 = cljs.core.first(subproblems);
var map__56582__$1 = cljs.core.__destructure_map(map__56582);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56582__$1,new cljs.core.Keyword("expound","form","expound/form",-264680632));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56582__$1,new cljs.core.Keyword("expound","in","expound/in",-1900412298));
return expound.alpha.format_err(expound.alpha.header(new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659).cljs$core$IFn$_invoke$arity$1(cljs.core.first(subproblems))),type,spec_name,form,in$,problems,opts,expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem-group","many-values","expound.problem-group/many-values",-397006439),(function (_type,spec_name,_form,_path,problems,opts){
var subproblems = new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(cljs.core.first(problems));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\nor value\n\n",(function (){var iter__4652__auto__ = (function expound$alpha$iter__56590(s__56591){
return (new cljs.core.LazySeq(null,(function (){
var s__56591__$1 = s__56591;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56591__$1);
if(temp__5753__auto__){
var s__56591__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56591__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__56591__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__56593 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__56592 = (0);
while(true){
if((i__56592 < size__4651__auto__)){
var problem = cljs.core._nth(c__4650__auto__,i__56592);
cljs.core.chunk_append(b__56593,expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.value_str_STAR_(spec_name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [problem], null),opts),expound.alpha.expected_str_STAR_(spec_name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [problem], null),opts)], 0)));

var G__57338 = (i__56592 + (1));
i__56592 = G__57338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56593),expound$alpha$iter__56590(cljs.core.chunk_rest(s__56591__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56593),null);
}
} else {
var problem = cljs.core.first(s__56591__$2);
return cljs.core.cons(expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.value_str_STAR_(spec_name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [problem], null),opts),expound.alpha.expected_str_STAR_(spec_name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [problem], null),opts)], 0)),expound$alpha$iter__56590(cljs.core.rest(s__56591__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(subproblems);
})());
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem-group","many-values","expound.problem-group/many-values",-397006439),(function (_type,spec_name,form,path,problems,opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.header_label("Spec failed"),expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(_type,spec_name,form,path,problems,opts)], 0));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","missing-key","expound.problem/missing-key",-750683408),(function (_type,_spec_name,_form,_path,problems,_opts){
return expound.alpha.explain_missing_keys(problems);
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","missing-key","expound.problem/missing-key",-750683408),(function (type,spec_name,form,path,problems,opts){
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),problems)))){
} else {
throw (new Error(["Assert failed: ",[expound.util.assert_message,": All values should be the same, but they are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problems)].join(''),"\n","(apply = (map :val problems))"].join('')));
}

return expound.alpha.format_err("Spec failed",type,spec_name,form,path,problems,opts,expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","not-in-set","expound.problem/not-in-set",14506077),(function (_type,_spec_name,_form,_path,problems,_opts){
var map__56618 = cljs.core.first(problems);
var map__56618__$1 = cljs.core.__destructure_map(map__56618);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56618__$1,new cljs.core.Keyword("expound","via","expound/via",-595987777));
var last_spec = cljs.core.last(via);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.qualified_keyword_QMARK_(last_spec);
if(and__4251__auto__){
return (expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1(last_spec) : expound.alpha.error_message.call(null,last_spec));
} else {
return and__4251__auto__;
}
})())){
return expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic((expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1(last_spec) : expound.alpha.error_message.call(null,last_spec)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"good","good",511701169)], 0));
} else {
var combined_set = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pred","pred",1927423397),problems));
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("should be%s: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(combined_set)))?"":" one of"),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56609_SHARP_){
return expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(p1__56609_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"good","good",511701169)], 0));
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56608_SHARP_){
return ["",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__56608_SHARP_], 0)),""].join('');
}),combined_set)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"good","good",511701169)], 0))], 0));
}
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","not-in-set","expound.problem/not-in-set",14506077),(function (type,spec_name,form,path,problems,opts){
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),problems)))){
} else {
throw (new Error(["Assert failed: ",[expound.util.assert_message,": All values should be the same, but they are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problems)].join(''),"\n","(apply = (map :val problems))"].join('')));
}

return expound.alpha.format_err("Spec failed",type,spec_name,form,path,problems,opts,expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","missing-spec","expound.problem/missing-spec",-1439599438),(function (_type,spec_name,form,path,problems,_opts){
return ["with\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\nor with\n\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56621_SHARP_){
return expound.alpha.no_method(spec_name,form,path,p1__56621_SHARP_);
}),problems))].join('');
}));
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","missing-spec","expound.problem/missing-spec",-1439599438),(function (_type,spec_name,form,path,_problems,_opts){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("Cannot find spec for\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.show_spec_name(spec_name,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,form,path,(expound.problems.value_in.cljs$core$IFn$_invoke$arity$2 ? expound.problems.value_in.cljs$core$IFn$_invoke$arity$2(form,path) : expound.problems.value_in.call(null,form,path))))], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","missing-spec","expound.problem/missing-spec",-1439599438),(function (type,spec_name,form,path,problems,opts){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.header_label("Missing spec"),expound.alpha.value_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts),expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts)], 0));
}));
expound.alpha.lcs_STAR_ = (function expound$alpha$lcs_STAR_(p__56629,p__56630){
var vec__56631 = p__56629;
var seq__56632 = cljs.core.seq(vec__56631);
var first__56633 = cljs.core.first(seq__56632);
var seq__56632__$1 = cljs.core.next(seq__56632);
var x = first__56633;
var xs = seq__56632__$1;
var vec__56634 = p__56630;
var seq__56635 = cljs.core.seq(vec__56634);
var first__56636 = cljs.core.first(seq__56635);
var seq__56635__$1 = cljs.core.next(seq__56635);
var y = first__56636;
var ys = seq__56635__$1;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,null)))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return cljs.core.vec(cljs.core.cons(x,(expound.alpha.lcs_STAR_.cljs$core$IFn$_invoke$arity$2 ? expound.alpha.lcs_STAR_.cljs$core$IFn$_invoke$arity$2(xs,ys) : expound.alpha.lcs_STAR_.call(null,xs,ys))));
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
});
expound.alpha.lcs = (function expound$alpha$lcs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57350 = arguments.length;
var i__4865__auto___57352 = (0);
while(true){
if((i__4865__auto___57352 < len__4864__auto___57350)){
args__4870__auto__.push((arguments[i__4865__auto___57352]));

var G__57354 = (i__4865__auto___57352 + (1));
i__4865__auto___57352 = G__57354;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return expound.alpha.lcs.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(expound.alpha.lcs.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (xs,ys){
return expound.alpha.lcs_STAR_(xs,ys);
}),paths);
}));

(expound.alpha.lcs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(expound.alpha.lcs.cljs$lang$applyTo = (function (seq56644){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56644));
}));

expound.alpha.contains_alternate_at_path_QMARK_ = (function expound$alpha$contains_alternate_at_path_QMARK_(spec_form,path){
if((!(cljs.core.coll_QMARK_(spec_form)))){
return false;
} else {
var vec__56661 = spec_form;
var seq__56662 = cljs.core.seq(vec__56661);
var first__56663 = cljs.core.first(seq__56662);
var seq__56662__$1 = cljs.core.next(seq__56662);
var op = first__56663;
var rest_form = seq__56662__$1;
var vec__56664 = path;
var seq__56665 = cljs.core.seq(vec__56664);
var first__56666 = cljs.core.first(seq__56665);
var seq__56665__$1 = cljs.core.next(seq__56665);
var k = first__56666;
var rest_path = seq__56665__$1;
var pred__56667 = cljs.core.contains_QMARK_;
var expr__56668 = op;
if(cljs.core.truth_((function (){var G__56670 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),null,new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),null], null), null);
var G__56671 = expr__56668;
return (pred__56667.cljs$core$IFn$_invoke$arity$2 ? pred__56667.cljs$core$IFn$_invoke$arity$2(G__56670,G__56671) : pred__56667.call(null,G__56670,G__56671));
})())){
var node_keys = cljs.core.set(cljs.core.keys(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,rest_form)));
if(cljs.core.empty_QMARK_(path)){
return true;
} else {
if(cljs.core.contains_QMARK_(node_keys,k)){
return cljs.core.some((function (p1__56650_SHARP_){
return (expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2 ? expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__56650_SHARP_,rest_path) : expound.alpha.contains_alternate_at_path_QMARK_.call(null,p1__56650_SHARP_,rest_path));
}),rest_form);
} else {
return false;

}
}
} else {
if(cljs.core.truth_((function (){var G__56682 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),null,new cljs.core.Symbol("cljs.spec.alpha","keys*","cljs.spec.alpha/keys*",784398971,null),null], null), null);
var G__56683 = expr__56668;
return (pred__56667.cljs$core$IFn$_invoke$arity$2 ? pred__56667.cljs$core$IFn$_invoke$arity$2(G__56682,G__56683) : pred__56667.call(null,G__56682,G__56683));
})())){
var keys_args = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,rest_form);
var node_keys = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$2(keys_args,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"req","req",-326448303).cljs$core$IFn$_invoke$arity$2(keys_args,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56651_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__56651_SHARP_));
}),new cljs.core.Keyword(null,"opt-un","opt-un",883442496).cljs$core$IFn$_invoke$arity$2(keys_args,cljs.core.PersistentVector.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56652_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__56652_SHARP_));
}),new cljs.core.Keyword(null,"req-un","req-un",1074571008).cljs$core$IFn$_invoke$arity$2(keys_args,cljs.core.PersistentVector.EMPTY))], 0)));
var possible_spec_names = ((cljs.core.qualified_keyword_QMARK_(k))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null):cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56653_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__56653_SHARP_)));
}),cljs.core.flatten(cljs.core.vals(keys_args))));
if(cljs.core.empty_QMARK_(path)){
return false;
} else {
if(cljs.core.contains_QMARK_(node_keys,k)){
return cljs.core.some((function (p1__56654_SHARP_){
return (expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2 ? expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__56654_SHARP_,rest_path) : expound.alpha.contains_alternate_at_path_QMARK_.call(null,p1__56654_SHARP_,rest_path));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.form,possible_spec_names));
} else {
return false;

}
}
} else {
if(cljs.core.truth_((function (){var G__56695 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),null], null), null);
var G__56696 = expr__56668;
return (pred__56667.cljs$core$IFn$_invoke$arity$2 ? pred__56667.cljs$core$IFn$_invoke$arity$2(G__56695,G__56696) : pred__56667.call(null,G__56695,G__56696));
})())){
var node_keys = cljs.core.set(cljs.core.keys(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,rest_form)));
if(cljs.core.empty_QMARK_(path)){
return false;
} else {
if(cljs.core.contains_QMARK_(node_keys,k)){
return cljs.core.some((function (p1__56655_SHARP_){
return (expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2 ? expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__56655_SHARP_,rest_path) : expound.alpha.contains_alternate_at_path_QMARK_.call(null,p1__56655_SHARP_,rest_path));
}),rest_form);
} else {
return false;

}
}
} else {
if(cljs.core.truth_((function (){var G__56700 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),null], null), null);
var G__56701 = expr__56668;
return (pred__56667.cljs$core$IFn$_invoke$arity$2 ? pred__56667.cljs$core$IFn$_invoke$arity$2(G__56700,G__56701) : pred__56667.call(null,G__56700,G__56701));
})())){
if(cljs.core.empty_QMARK_(path)){
return true;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594),null,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950),null], null), null),k)){
return cljs.core.some((function (p1__56656_SHARP_){
return (expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2 ? expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__56656_SHARP_,rest_path) : expound.alpha.contains_alternate_at_path_QMARK_.call(null,p1__56656_SHARP_,rest_path));
}),rest_form);
} else {
return false;

}
}
} else {
return cljs.core.some((function (p1__56657_SHARP_){
return (expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2 ? expound.alpha.contains_alternate_at_path_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__56657_SHARP_,path) : expound.alpha.contains_alternate_at_path_QMARK_.call(null,p1__56657_SHARP_,path));
}),rest_form);
}
}
}
}
}
});
/**
 * Determine if two groups have prefixes (ie. spec tags) that are included in
 *   an s/or or s/alt predicate.
 */
expound.alpha.share_alt_tags_QMARK_ = (function expound$alpha$share_alt_tags_QMARK_(grp1,grp2){
var pprefix1 = new cljs.core.Keyword(null,"path-prefix","path-prefix",-1210521238).cljs$core$IFn$_invoke$arity$1(grp1);
var pprefix2 = new cljs.core.Keyword(null,"path-prefix","path-prefix",-1210521238).cljs$core$IFn$_invoke$arity$1(grp2);
var shared_prefix = expound.alpha.lcs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pprefix1,pprefix2], 0));
var shared_specs = expound.alpha.lcs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"via-prefix","via-prefix",-370380427).cljs$core$IFn$_invoke$arity$1(grp1),new cljs.core.Keyword(null,"via-prefix","via-prefix",-370380427).cljs$core$IFn$_invoke$arity$1(grp2)], 0));
var and__4251__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pprefix1,cljs.core.count(shared_prefix));
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pprefix2,cljs.core.count(shared_prefix));
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.some((function (p1__56704_SHARP_){
var and__4251__auto____$2 = expound.alpha.contains_alternate_at_path_QMARK_(cljs.spec.alpha.form(p1__56704_SHARP_),shared_prefix);
if(cljs.core.truth_(and__4251__auto____$2)){
return expound.alpha.contains_alternate_at_path_QMARK_(cljs.spec.alpha.form(p1__56704_SHARP_),shared_prefix);
} else {
return and__4251__auto____$2;
}
}),shared_specs);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
/**
 * Determine if either group 1 or 2 is recursive (ie. have repeating specs in
 *   their via paths) and if one group is included in another.
 */
expound.alpha.recursive_spec_QMARK_ = (function expound$alpha$recursive_spec_QMARK_(grp1,grp2){
var vxs = new cljs.core.Keyword(null,"via-prefix","via-prefix",-370380427).cljs$core$IFn$_invoke$arity$1(grp1);
var vys = new cljs.core.Keyword(null,"via-prefix","via-prefix",-370380427).cljs$core$IFn$_invoke$arity$1(grp2);
var vprefix = expound.alpha.lcs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vxs,vys], 0));
return ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vys),cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(vys)))) && ((((cljs.core.count(vprefix) < cljs.core.count(vys))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(vxs,vprefix)))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vxs),cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(vxs)))) && ((((cljs.core.count(vprefix) < cljs.core.count(vxs))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(vys,vprefix)))))));
});
expound.alpha.problem_group = (function expound$alpha$problem_group(grp1,grp2){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659),new cljs.core.Keyword("expound.problem-group","many-values","expound.problem-group/many-values",-397006439),new cljs.core.Keyword(null,"path-prefix","path-prefix",-1210521238),expound.alpha.lcs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path-prefix","path-prefix",-1210521238).cljs$core$IFn$_invoke$arity$1(grp1),new cljs.core.Keyword(null,"path-prefix","path-prefix",-1210521238).cljs$core$IFn$_invoke$arity$1(grp2)], 0)),new cljs.core.Keyword(null,"via-prefix","via-prefix",-370380427),expound.alpha.lcs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"via-prefix","via-prefix",-370380427).cljs$core$IFn$_invoke$arity$1(grp1),new cljs.core.Keyword(null,"via-prefix","via-prefix",-370380427).cljs$core$IFn$_invoke$arity$1(grp2)], 0)),new cljs.core.Keyword(null,"problems","problems",2097327077),cljs.core.into.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.problem-group","many-values","expound.problem-group/many-values",-397006439),new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659).cljs$core$IFn$_invoke$arity$1(grp1)))?new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(grp1):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grp1], null)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.problem-group","many-values","expound.problem-group/many-values",-397006439),new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659).cljs$core$IFn$_invoke$arity$1(grp2)))?new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(grp2):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grp2], null)))], null);
});
expound.alpha.target_form_QMARK_ = (function expound$alpha$target_form_QMARK_(form){
return ((cljs.core.map_QMARK_(form)) && ((((!(cljs.core.sorted_QMARK_(form)))) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("expound.problem-group","one-value","expound.problem-group/one-value",-1584327548),null,new cljs.core.Keyword("expound.problem-group","many-values","expound.problem-group/many-values",-397006439),null], null), null),new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659).cljs$core$IFn$_invoke$arity$1(form))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(form)))))))));
});
expound.alpha.groups_walk = (function expound$alpha$groups_walk(f,form){
if(((cljs.core.map_QMARK_(form)) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("expound.problem-group","one-value","expound.problem-group/one-value",-1584327548),null,new cljs.core.Keyword("expound.problem-group","many-values","expound.problem-group/many-values",-397006439),null], null), null),new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659).cljs$core$IFn$_invoke$arity$1(form))) && (cljs.core.contains_QMARK_(form,new cljs.core.Keyword(null,"problems","problems",2097327077))))))){
var G__56725 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.Keyword(null,"problems","problems",2097327077),(function (p1__56721_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(p1__56721_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.alpha.groups_walk,f),p1__56721_SHARP_));
}));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56725) : f.call(null,G__56725));
} else {
return form;

}
});
expound.alpha.lift_singleton_groups = (function expound$alpha$lift_singleton_groups(groups){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.alpha.groups_walk,(function (p1__56733_SHARP_){
if(expound.alpha.target_form_QMARK_(p1__56733_SHARP_)){
return cljs.core.first(new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(p1__56733_SHARP_));
} else {
return p1__56733_SHARP_;
}
})),groups);
});
expound.alpha.vec_remove = (function expound$alpha$vec_remove(v,x){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([x]),v));
});
expound.alpha.replace_group = (function expound$alpha$replace_group(groups,old_groups,group){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expound.alpha.vec_remove(groups,old_groups),expound.alpha.problem_group(old_groups,group));
});
/**
 * Consolidate a group into a group collection if it's either part of an s/or,
 *   s/alt or recursive spec.
 */
expound.alpha.conj_groups = (function expound$alpha$conj_groups(groups,group){
var temp__5751__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56738_SHARP_){
var or__4253__auto__ = expound.alpha.recursive_spec_QMARK_(p1__56738_SHARP_,group);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return expound.alpha.share_alt_tags_QMARK_(p1__56738_SHARP_,group);
}
}),groups));
if(cljs.core.truth_(temp__5751__auto__)){
var old_group = temp__5751__auto__;
return expound.alpha.replace_group(groups,old_group,group);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,group);
}
});
expound.alpha.groups = (function expound$alpha$groups(problems){
var grouped_by_in_path = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (grp){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659),new cljs.core.Keyword("expound.problem-group","one-value","expound.problem-group/one-value",-1584327548),new cljs.core.Keyword(null,"path-prefix","path-prefix",-1210521238),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(expound.alpha.lcs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound","path","expound/path",-1026376555),grp)),new cljs.core.Keyword(null,"via-prefix","via-prefix",-370380427),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(expound.alpha.lcs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound","via","expound/via",-595987777),grp)),new cljs.core.Keyword(null,"problems","problems",2097327077),grp], null);
}),cljs.core.vals(cljs.core.group_by(new cljs.core.Keyword("expound","in","expound/in",-1900412298),problems)));
return expound.alpha.lift_singleton_groups(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(expound.alpha.conj_groups,cljs.core.PersistentVector.EMPTY,grouped_by_in_path));
});
expound.alpha.problems_without_location = (function expound$alpha$problems_without_location(problems,opts){
var failure = null;
var non_matching_value = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound","value-that-should-never-match","expound/value-that-should-never-match",-232021426)], null);
var problems__$1 = expound.alpha.groups(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56749_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56749_SHARP_,new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659),(expound.problems.type.cljs$core$IFn$_invoke$arity$3 ? expound.problems.type.cljs$core$IFn$_invoke$arity$3(failure,p1__56749_SHARP_,true) : expound.problems.type.call(null,failure,p1__56749_SHARP_,true)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56748_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__56748_SHARP_,new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reason","reason",-2070751759)], 0));
}),problems)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__4652__auto__ = (function expound$alpha$problems_without_location_$_iter__56757(s__56758){
return (new cljs.core.LazySeq(null,(function (){
var s__56758__$1 = s__56758;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56758__$1);
if(temp__5753__auto__){
var s__56758__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56758__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__56758__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__56760 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__56759 = (0);
while(true){
if((i__56759 < size__4651__auto__)){
var prob = cljs.core._nth(c__4650__auto__,i__56759);
cljs.core.chunk_append(b__56760,(function (){var in$ = new cljs.core.Keyword("expound","in","expound/in",-1900412298).cljs$core$IFn$_invoke$arity$1(prob);
return expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659).cljs$core$IFn$_invoke$arity$1(prob),new cljs.core.Keyword("expound","no-spec-name","expound/no-spec-name",-718645311),non_matching_value,in$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prob], null),opts);
})());

var G__57375 = (i__56759 + (1));
i__56759 = G__57375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56760),expound$alpha$problems_without_location_$_iter__56757(cljs.core.chunk_rest(s__56758__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56760),null);
}
} else {
var prob = cljs.core.first(s__56758__$2);
return cljs.core.cons((function (){var in$ = new cljs.core.Keyword("expound","in","expound/in",-1900412298).cljs$core$IFn$_invoke$arity$1(prob);
return expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659).cljs$core$IFn$_invoke$arity$1(prob),new cljs.core.Keyword("expound","no-spec-name","expound/no-spec-name",-718645311),non_matching_value,in$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prob], null),opts);
})(),expound$alpha$problems_without_location_$_iter__56757(cljs.core.rest(s__56758__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(problems__$1);
})());
});
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","insufficient-input","expound.problem/insufficient-input",1437497436),(function (_type,_spec_name,_form,_path,problems,opts){
var problem = cljs.core.first(problems);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("should have additional elements. The next element%s %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5755__auto__ = cljs.core.last(new cljs.core.Keyword("expound","path","expound/path",-1026376555).cljs$core$IFn$_invoke$arity$1(problem));
if((temp__5755__auto__ == null)){
return "";
} else {
var el_name = temp__5755__auto__;
return [" \"",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([el_name], 0)),"\""].join('');
}
})(),expound.alpha.problems_without_location(problems,opts)], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","insufficient-input","expound.problem/insufficient-input",1437497436),(function (type,spec_name,form,path,problems,opts){
return expound.alpha.format_err("Syntax error",type,spec_name,form,path,problems,opts,expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","extra-input","expound.problem/extra-input",2043170217),(function (_type,_spec_name,_form,_path,problems,_opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

return "has extra input";
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","extra-input","expound.problem/extra-input",2043170217),(function (type,spec_name,form,path,problems,opts){
return expound.alpha.format_err("Syntax error",type,spec_name,form,path,problems,opts,expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","fspec-exception-failure","expound.problem/fspec-exception-failure",-398312942),(function (_type,_spec_name,_form,_path,problems,_opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("threw exception\n\n%s\n\nwith args:\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.indent.cljs$core$IFn$_invoke$arity$1(((typeof new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem) === 'string')?["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem)),"\""].join(''):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem)], 0)))),expound.printer.indent.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(problem)))], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","fspec-exception-failure","expound.problem/fspec-exception-failure",-398312942),(function (type,spec_name,form,path,problems,opts){
return expound.alpha.format_err("Exception",type,spec_name,form,path,problems,opts,expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","fspec-ret-failure","expound.problem/fspec-ret-failure",1192937934),(function (_type,_spec_name,_form,_path,problems,opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("returned an invalid value\n\n%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.indent.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(problem)], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-value","bad-value",-139100659)], 0)),expound.alpha.problems_without_location(problems,opts)], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","fspec-ret-failure","expound.problem/fspec-ret-failure",1192937934),(function (type,spec_name,form,path,problems,opts){
return expound.alpha.format_err("Function spec failed",type,spec_name,form,path,problems,opts,expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts));
}));
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","insufficient-input","expound.problem/insufficient-input",1437497436),(function (_type,spec_name,form,path,problems,_opts){
return expound.alpha.show_spec_name(spec_name,expound.alpha.value_PLUS_conformed_value(problems,spec_name,form,path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-conformed?","show-conformed?",-1548441572),false], null)));
}));
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","extra-input","expound.problem/extra-input",2043170217),(function (_type,spec_name,form,path,problems,_opts){
return expound.alpha.show_spec_name(spec_name,expound.alpha.value_PLUS_conformed_value(problems,spec_name,form,path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-conformed?","show-conformed?",-1548441572),false], null)));
}));
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","fspec-fn-failure","expound.problem/fspec-fn-failure",-814692716),(function (_type,spec_name,form,path,problems,_opts){
return expound.alpha.show_spec_name(spec_name,expound.alpha.value_PLUS_conformed_value(problems,spec_name,form,path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-conformed?","show-conformed?",-1548441572),false], null)));
}));
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","fspec-exception-failure","expound.problem/fspec-exception-failure",-398312942),(function (_type,spec_name,form,path,problems,_opts){
return expound.alpha.show_spec_name(spec_name,expound.alpha.value_PLUS_conformed_value(problems,spec_name,form,path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-conformed?","show-conformed?",-1548441572),false], null)));
}));
expound.alpha.value_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","fspec-ret-failure","expound.problem/fspec-ret-failure",1192937934),(function (_type,spec_name,form,path,problems,_opts){
return expound.alpha.show_spec_name(spec_name,expound.alpha.value_PLUS_conformed_value(problems,spec_name,form,path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-conformed?","show-conformed?",-1548441572),false], null)));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","fspec-fn-failure","expound.problem/fspec-fn-failure",-814692716),(function (_type,_spec_name,_form,_path,problems,_opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("failed spec. Function arguments and return value\n\n%s\n\nshould satisfy\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(problem)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-value","bad-value",-139100659)], 0))),expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.alpha.pr_pred(new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem),new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(problem)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"good-pred","good-pred",-629085297)], 0)))], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","fspec-fn-failure","expound.problem/fspec-fn-failure",-814692716),(function (type,spec_name,form,path,problems,opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

return expound.alpha.format_err("Function spec failed",type,spec_name,form,path,problems,opts,expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","check-fn-failure","expound.problem/check-fn-failure",443478179),(function (_type,_spec_name,_form,_path,problems,_opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

var problem = cljs.core.first(problems);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("failed spec. Function arguments and return value\n\n%s\n\nshould satisfy\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(problem)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-value","bad-value",-139100659)], 0))),expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.alpha.pr_pred(new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem),new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(problem)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"good-pred","good-pred",-629085297)], 0)))], 0));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","check-fn-failure","expound.problem/check-fn-failure",443478179),(function (_type,spec_name,form,path,problems,opts){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic(expound.alpha.format_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.header_label("Function spec failed"),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.indent.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("expound","check-fn-call","expound/check-fn-call",-300245931).cljs$core$IFn$_invoke$arity$1(cljs.core.first(problems))], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-value","bad-value",-139100659)], 0)),expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(_type,spec_name,form,path,problems,opts)], 0));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","check-ret-failure","expound.problem/check-ret-failure",1795987483),(function (_type,_spec_name,_form,_path,problems,opts){
return expound.alpha.problems_without_location(problems,opts);
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","check-ret-failure","expound.problem/check-ret-failure",1795987483),(function (_type,spec_name,form,path,problems,opts){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s\n\n%s\n\nreturned an invalid value.\n\n%s\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.header_label("Function spec failed"),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.indent.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("expound","check-fn-call","expound/check-fn-call",-300245931).cljs$core$IFn$_invoke$arity$1(cljs.core.first(problems))], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-value","bad-value",-139100659)], 0)),expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,form,path,(expound.problems.value_in.cljs$core$IFn$_invoke$arity$2 ? expound.problems.value_in.cljs$core$IFn$_invoke$arity$2(form,path) : expound.problems.value_in.call(null,form,path))),expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(_type,spec_name,form,path,problems,opts)], 0));
}));
expound.alpha.expected_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","unknown","expound.problem/unknown",1364832957),(function (_type,_spec_name,_form,_path,problems,_opts){
var vec__56817 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove)((function (p__56820){
var map__56821 = p__56820;
var map__56821__$1 = cljs.core.__destructure_map(map__56821);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56821__$1,new cljs.core.Keyword("expound","via","expound/via",-595987777));
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56821__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
return expound.alpha.spec_w_error_message_QMARK_(via,pred);
}),problems);
var with_msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56817,(0),null);
var no_msgs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56817,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\nor\n\n",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__56824){
var map__56825 = p__56824;
var map__56825__$1 = cljs.core.__destructure_map(map__56825);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56825__$1,new cljs.core.Keyword("expound","via","expound/via",-595987777));
var last_spec = cljs.core.last(via);
if(cljs.core.qualified_keyword_QMARK_(last_spec)){
return expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic((expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1 ? expound.alpha.error_message.cljs$core$IFn$_invoke$arity$1(last_spec) : expound.alpha.error_message.call(null,last_spec)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"good","good",511701169)], 0));
} else {
return null;
}
}),with_msg),((cljs.core.seq(no_msgs))?expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("should satisfy\n\n%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.preds(no_msgs)], 0)):null)))));
}));
expound.alpha.problem_group_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("expound.problem","unknown","expound.problem/unknown",1364832957),(function (type,spec_name,form,path,problems,opts){
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),problems)))){
} else {
throw (new Error(["Assert failed: ",[expound.util.assert_message,": All values should be the same, but they are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problems)].join(''),"\n","(apply = (map :val problems))"].join('')));
}

return expound.alpha.format_err("Spec failed",type,spec_name,form,path,problems,opts,expound.alpha.expected_str.cljs$core$IFn$_invoke$arity$6(type,spec_name,form,path,problems,opts));
}));
expound.alpha.instrumentation_info = (function expound$alpha$instrumentation_info(failure,caller){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure)){
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s:%s\n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$2(caller,"<filename missing>"),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$2(caller,"<line number missing>")], 0));
} else {
return "";
}
});
expound.alpha.spec_name = (function expound$alpha$spec_name(ed){
if(cljs.core.truth_((function (){var G__56838 = new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(ed);
var fexpr__56837 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrument","instrument",-960698844),null], null), null);
return (fexpr__56837.cljs$core$IFn$_invoke$arity$1 ? fexpr__56837.cljs$core$IFn$_invoke$arity$1(G__56838) : fexpr__56837.call(null,G__56838));
})())){
if(cljs.core.truth_(new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783).cljs$core$IFn$_invoke$arity$1(ed))){
return new cljs.core.Keyword(null,"args","args",1315556576);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("cljs.spec.alpha","ret","cljs.spec.alpha/ret",1165997503).cljs$core$IFn$_invoke$arity$1(ed))){
return new cljs.core.Keyword(null,"ret","ret",-468222814);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443).cljs$core$IFn$_invoke$arity$1(ed))){
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
} else {
return cljs.core.first(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed))));

}
}
}
} else {
return null;
}
});
expound.alpha.print_explain_data = (function expound$alpha$print_explain_data(opts,explain_data){
if(cljs.core.not(explain_data)){
return "Success!\n";
} else {
var explain_data_SINGLEQUOTE_ = expound.problems.annotate(explain_data);
var map__56840 = explain_data_SINGLEQUOTE_;
var map__56840__$1 = cljs.core.__destructure_map(map__56840);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56840__$1,new cljs.core.Keyword("expound","caller","expound/caller",-503638870));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56840__$1,new cljs.core.Keyword("expound","form","expound/form",-264680632));
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56840__$1,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592));
var problems = expound.alpha.groups(new cljs.core.Keyword("expound","problems","expound/problems",1257773984).cljs$core$IFn$_invoke$arity$1(explain_data_SINGLEQUOTE_));
return expound.printer.no_trailing_whitespace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.alpha.instrumentation_info(failure,caller),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"none","none",1333468478)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.printer.format.cljs$core$IFn$_invoke$arity$variadic("%s%s\n%s %s %s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__4652__auto__ = (function expound$alpha$print_explain_data_$_iter__56866(s__56867){
return (new cljs.core.LazySeq(null,(function (){
var s__56867__$1 = s__56867;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56867__$1);
if(temp__5753__auto__){
var s__56867__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56867__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__56867__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__56869 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__56868 = (0);
while(true){
if((i__56868 < size__4651__auto__)){
var prob = cljs.core._nth(c__4650__auto__,i__56868);
cljs.core.chunk_append(b__56869,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.alpha.problem_group_str.cljs$core$IFn$_invoke$arity$6(new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659).cljs$core$IFn$_invoke$arity$1(prob),expound.alpha.spec_name(explain_data_SINGLEQUOTE_),form,new cljs.core.Keyword("expound","in","expound/in",-1900412298).cljs$core$IFn$_invoke$arity$1(prob),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prob], null),opts)),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var s = (cljs.core.truth_(new cljs.core.Keyword(null,"print-specs?","print-specs?",146397677).cljs$core$IFn$_invoke$arity$1(opts))?expound.alpha.relevant_specs(new cljs.core.Keyword("expound","problems","expound/problems",1257773984).cljs$core$IFn$_invoke$arity$1(explain_data_SINGLEQUOTE_)):"");
if(cljs.core.empty_QMARK_(s)){
return s;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\n\n"].join('');
}
})())].join(''));

var G__57423 = (i__56868 + (1));
i__56868 = G__57423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56869),expound$alpha$print_explain_data_$_iter__56866(cljs.core.chunk_rest(s__56867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56869),null);
}
} else {
var prob = cljs.core.first(s__56867__$2);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.alpha.problem_group_str.cljs$core$IFn$_invoke$arity$6(new cljs.core.Keyword("expound.spec.problem","type","expound.spec.problem/type",-862044659).cljs$core$IFn$_invoke$arity$1(prob),expound.alpha.spec_name(explain_data_SINGLEQUOTE_),form,new cljs.core.Keyword("expound","in","expound/in",-1900412298).cljs$core$IFn$_invoke$arity$1(prob),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prob], null),opts)),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var s = (cljs.core.truth_(new cljs.core.Keyword(null,"print-specs?","print-specs?",146397677).cljs$core$IFn$_invoke$arity$1(opts))?expound.alpha.relevant_specs(new cljs.core.Keyword("expound","problems","expound/problems",1257773984).cljs$core$IFn$_invoke$arity$1(explain_data_SINGLEQUOTE_)):"");
if(cljs.core.empty_QMARK_(s)){
return s;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\n\n"].join('');
}
})())].join(''),expound$alpha$print_explain_data_$_iter__56866(cljs.core.rest(s__56867__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(problems);
})()),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.alpha.section_label(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"footer","footer",1606445390)], 0)),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic("Detected",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"footer","footer",1606445390)], 0)),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(cljs.core.count(problems),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"footer","footer",1606445390)], 0)),expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(problems)))?"error":"errors"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"footer","footer",1606445390)], 0))], 0)))].join(''));
}
});
expound.alpha.minimal_fspec = (function expound$alpha$minimal_fspec(form){
var fspec_sp = cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_symbol_QMARK_,cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),"null",new cljs.core.Keyword(null,"ret","ret",-468222814),"null",new cljs.core.Keyword(null,"fn","fn",-1175266204),"null"], null), null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"v","v",21465059)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),"null",new cljs.core.Keyword(null,"ret","ret",-468222814),"null",new cljs.core.Keyword(null,"fn","fn",-1175266204),"null"], null), null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","qualified-symbol?","cljs.core/qualified-symbol?",1570873476,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),"null",new cljs.core.Keyword(null,"ret","ret",-468222814),"null",new cljs.core.Keyword(null,"fn","fn",-1175266204),"null"], null), null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))], null));
return cljs.spec.alpha.unform(fspec_sp,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.conform(fspec_sp,form),new cljs.core.Keyword(null,"args","args",1315556576),(function (args){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56876_SHARP_){
return (!((new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p1__56876_SHARP_) == null)));
}),args);
})));
});
expound.alpha.print_check_result = (function expound$alpha$print_check_result(check_result){
var map__56892 = check_result;
var map__56892__$1 = cljs.core.__destructure_map(map__56892);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56892__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol(null,"<unknown>","<unknown>",868184816,null));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56892__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56892__$1,new cljs.core.Keyword(null,"failure","failure",720415879));
var ret = (function (){var or__4253__auto__ = new cljs.core.Keyword("clojure.spec.test.check","ret","clojure.spec.test.check/ret",-1173350899).cljs$core$IFn$_invoke$arity$1(check_result);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(check_result);
}
})();
var explain_data = cljs.core.ex_data(failure);
var bad_args = (function (){var or__4253__auto__ = new cljs.core.Keyword("cljs.spec.test.alpha","args","cljs.spec.test.alpha/args",78409593).cljs$core$IFn$_invoke$arity$1(explain_data);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret)));
}
})();
var failure_reason = new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(explain_data);
var sym__$1 = (function (){var or__4253__auto__ = sym;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Symbol(null,"<unknown>","<unknown>",868184816,null);
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.alpha.label.cljs$core$IFn$_invoke$arity$3(expound.alpha.check_header_size,["Checked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)].join(''),"=")),"\n\n",(cljs.core.truth_((function (){var and__4251__auto__ = failure;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.re_matches(/Unable to construct gen at.*/,failure.message);
} else {
return and__4251__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(failure.message)," in\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.printer.indent.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.form(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(check_result)))))),"\n"].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786),failure_reason))?["Failed to check function.\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.printer.pprint_str(expound.alpha.minimal_fspec(cljs.spec.alpha.form(spec)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-value","bad-value",-139100659)], 0))),"\n\nshould contain an :args spec\n"].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"no-fn","no-fn",-353517111),failure_reason))?(((!((sym__$1 == null))))?["Failed to check function.\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.indent.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym__$1], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-value","bad-value",-139100659)], 0))),"\n\nis not defined\n"].join(''):"Cannot check undefined function\n"):(cljs.core.truth_((function (){var and__4251__auto__ = explain_data;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-failed","check-failed",-1316157547),new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(explain_data));
} else {
return and__4251__auto__;
}
})())?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56922_57438 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56923_57439 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56924_57440 = true;
var _STAR_print_fn_STAR__temp_val__56925_57441 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56924_57440);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56925_57441);

try{cljs.spec.alpha._STAR_explain_out_STAR_.call(null,cljs.core.update.cljs$core$IFn$_invoke$arity$3(explain_data,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (p1__56891_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,new cljs.core.Keyword("expound","check-fn-call","expound/check-fn-call",-300245931),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym__$1,null,(1),null)),bad_args));
}),p1__56891_SHARP_);
})));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56923_57439);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56922_57438);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(cljs.core.truth_(failure)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.cljs$core$IFn$_invoke$arity$variadic(expound.printer.indent.cljs$core$IFn$_invoke$arity$1(expound.printer.pprint_str(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym__$1,null,(1),null)),bad_args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bad-value","bad-value",-139100659)], 0))),"\n\n threw error\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.printer.pprint_str(failure))].join(''):"Success!\n"
)))))].join('');
});
expound.alpha.explain_data_QMARK_ = (function expound$alpha$explain_data_QMARK_(data){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56931){
return cljs.core.map_QMARK_(G__56931);
}),(function (G__56931){
return cljs.core.contains_QMARK_(G__56931,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
}),(function (G__56931){
return cljs.core.contains_QMARK_(G__56931,new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578));
}),(function (G__56931){
return cljs.core.contains_QMARK_(G__56931,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274));
})], null),(function (G__56931){
return ((cljs.core.map_QMARK_(G__56931)) && (((cljs.core.contains_QMARK_(G__56931,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814))) && (((cljs.core.contains_QMARK_(G__56931,new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578))) && (cljs.core.contains_QMARK_(G__56931,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274))))))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578),new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578),new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578),new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592)], null)])),data);
});
expound.alpha.check_result_QMARK_ = (function expound$alpha$check_result_QMARK_(data){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.alpha","spec","expound.alpha/spec",999405232)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.alpha","sym","expound.alpha/sym",1887308696),new cljs.core.Keyword("expound.alpha","failure","expound.alpha/failure",1137826194),new cljs.core.Keyword("clojure.spec.test.check","ret","clojure.spec.test.check/ret",-1173350899)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56959){
return cljs.core.map_QMARK_(G__56959);
}),(function (G__56959){
return cljs.core.contains_QMARK_(G__56959,new cljs.core.Keyword(null,"spec","spec",347520401));
})], null),(function (G__56959){
return ((cljs.core.map_QMARK_(G__56959)) && (cljs.core.contains_QMARK_(G__56959,new cljs.core.Keyword(null,"spec","spec",347520401))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"ret","ret",-468222814)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.alpha","spec","expound.alpha/spec",999405232)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spec","spec",347520401)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.alpha","sym","expound.alpha/sym",1887308696),new cljs.core.Keyword("expound.alpha","failure","expound.alpha/failure",1137826194),new cljs.core.Keyword("clojure.spec.test.check","ret","clojure.spec.test.check/ret",-1173350899)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"spec","spec",347520401)))], null),null])),data);
});
expound.alpha.printer_str = (function expound$alpha$printer_str(opts,data){
var opts_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),false,new cljs.core.Keyword(null,"print-specs?","print-specs?",146397677),true], null),opts], 0));
var enable_color_QMARK_ = (function (){var or__4253__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"none","none",1333468478)));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return expound.ansi._STAR_enable_color_STAR_;
}
})();
var _STAR_value_str_fn_STAR__orig_val__56966 = expound.alpha._STAR_value_str_fn_STAR_;
var _STAR_enable_color_STAR__orig_val__56967 = expound.ansi._STAR_enable_color_STAR_;
var _STAR_print_styles_STAR__orig_val__56968 = expound.ansi._STAR_print_styles_STAR_;
var _STAR_value_str_fn_STAR__temp_val__56969 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"value-str-fn","value-str-fn",1124137860),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expound.alpha.value_in_context,opts_SINGLEQUOTE_));
var _STAR_enable_color_STAR__temp_val__56970 = enable_color_QMARK_;
var _STAR_print_styles_STAR__temp_val__56971 = (function (){var G__56972 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(enable_color_QMARK_)?new cljs.core.Keyword(null,"figwheel-theme","figwheel-theme",1505227343):new cljs.core.Keyword(null,"none","none",1333468478)));
var G__56972__$1 = (((G__56972 instanceof cljs.core.Keyword))?G__56972.fqn:null);
switch (G__56972__$1) {
case "figwheel-theme":
return expound.alpha.figwheel_theme;

break;
case "none":
return cljs.core.PersistentArrayMap.EMPTY;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56972__$1)].join('')));

}
})();
(expound.alpha._STAR_value_str_fn_STAR_ = _STAR_value_str_fn_STAR__temp_val__56969);

(expound.ansi._STAR_enable_color_STAR_ = _STAR_enable_color_STAR__temp_val__56970);

(expound.ansi._STAR_print_styles_STAR_ = _STAR_print_styles_STAR__temp_val__56971);

try{if(((expound.alpha.explain_data_QMARK_(data)) || ((data == null)))){
return expound.alpha.print_explain_data(opts_SINGLEQUOTE_,data);
} else {
if(expound.alpha.check_result_QMARK_(data)){
return expound.alpha.print_check_result(data);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown data:\n\n",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null));

}
}
}finally {(expound.ansi._STAR_print_styles_STAR_ = _STAR_print_styles_STAR__orig_val__56968);

(expound.ansi._STAR_enable_color_STAR_ = _STAR_enable_color_STAR__orig_val__56967);

(expound.alpha._STAR_value_str_fn_STAR_ = _STAR_value_str_fn_STAR__orig_val__56966);
}});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.alpha","error-message","expound.alpha/error-message",596661929,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),null,null,null));
/**
 * Given a spec named `k`, return its human-readable error message.
 */
expound.alpha.error_message = (function expound$alpha$error_message(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(expound.alpha.registry_ref),k);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.alpha","custom-printer","expound.alpha/custom-printer",2045191946,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_,null,null),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),null,null,null));
/**
 * Returns a printer.
 * 
 *   Options:
 * - `:show-valid-values?` - if `false`, replaces valid values with "..."
 * - `:value-str-fn`       - function to print bad values
 * - `:print-specs?`       - if `true`, display "Relevant specs" section. Otherwise, omit that section.
 * - `:theme`               - enables color theme. Possible values: `:figwheel-theme`, `:none`
 */
expound.alpha.custom_printer = (function expound$alpha$custom_printer(opts){
return (function (explain_data){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.printer_str(opts,explain_data)], 0));
});
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.alpha","printer","expound.alpha/printer",-1055631074,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"explain-data","explain-data",-1124944340),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"explain-data","explain-data",-1124944340),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"explain-data","explain-data",-1124944340)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"explain-data","explain-data",-1124944340),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.nil_QMARK_,null,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,null,null));
/**
 * Prints `explain-data` in a human-readable format.
 */
expound.alpha.printer = (function expound$alpha$printer(explain_data){
return expound.alpha.custom_printer(cljs.core.PersistentArrayMap.EMPTY)(explain_data);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.alpha","expound-str","expound.alpha/expound-str",-1476944198,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"opts","opts",155075701)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),cljs.core.any_QMARK_,cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940),new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));
/**
 * Given a `spec` and a `form`, either returns success message or a human-readable error message.
 */
expound.alpha.expound_str = (function expound$alpha$expound_str(var_args){
var G__57059 = arguments.length;
switch (G__57059) {
case 2:
return expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$2 = (function (spec,form){
return expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,form,cljs.core.PersistentArrayMap.EMPTY);
}));

(expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3 = (function (spec,form,opts){
return expound.alpha.printer_str(opts,cljs.spec.alpha.explain_data(spec,form));
}));

(expound.alpha.expound_str.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.alpha","expound","expound.alpha/expound",1096575731,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"opts","opts",155075701)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),cljs.core.any_QMARK_,cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940),new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword("expound.spec","spec","expound.spec/spec",-184988511),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("expound.printer","opts","expound.printer/opts",785498940))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.nil_QMARK_,null,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,null,null));
/**
 * Given a `spec` and a `form`, either prints a success message or a human-readable error message.
 */
expound.alpha.expound = (function expound$alpha$expound(var_args){
var G__57146 = arguments.length;
switch (G__57146) {
case 2:
return expound.alpha.expound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return expound.alpha.expound.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(expound.alpha.expound.cljs$core$IFn$_invoke$arity$2 = (function (spec,form){
return expound.alpha.expound.cljs$core$IFn$_invoke$arity$3(spec,form,cljs.core.PersistentArrayMap.EMPTY);
}));

(expound.alpha.expound.cljs$core$IFn$_invoke$arity$3 = (function (spec,form,opts){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,form,opts)], 0));
}));

(expound.alpha.expound.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.alpha","defmsg","expound.alpha/defmsg",-1469554987,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),new cljs.core.Keyword(null,"error-message","error-message",1756021561),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),new cljs.core.Keyword(null,"error-message","error-message",1756021561),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"error-message","error-message",1756021561)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_,cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),new cljs.core.Keyword(null,"error-message","error-message",1756021561),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.nil_QMARK_,null,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,null,null));
/**
 * Associates the spec named `k` with `error-message`.
 */
expound.alpha.defmsg = (function expound$alpha$defmsg(k,error_message){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(expound.alpha.registry_ref,cljs.core.assoc,k,error_message);

return null;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.alpha","explain-result","expound.alpha/explain-result",-1675766338,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"check-result","check-result",164617515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"check-result","check-result",164617515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-result","check-result",164617515)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"check-result","check-result",164617515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.nil_QMARK_,null,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,null,null));
/**
 * Given a result from `clojure.spec.test.alpha/check`, prints a summary of the result.
 */
expound.alpha.explain_result = (function expound$alpha$explain_result(check_result){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha._STAR_explain_out_STAR_,cljs.spec.alpha.explain_printer)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot print check results with default printer. Use 'set!' or 'binding' to use Expound printer.",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return cljs.spec.alpha._STAR_explain_out_STAR_.call(null,check_result);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.alpha","explain-result-str","expound.alpha/explain-result-str",-1526943386,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"check-result","check-result",164617515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"check-result","check-result",164617515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-result","check-result",164617515)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"check-result","check-result",164617515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));
/**
 * Given a result from `clojure.spec.test.alpha/check`, returns a string summarizing the result.
 */
expound.alpha.explain_result_str = (function expound$alpha$explain_result_str(check_result){
var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57276_57479 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57277_57480 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57278_57481 = true;
var _STAR_print_fn_STAR__temp_val__57279_57482 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57278_57481);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57279_57482);

try{expound.alpha.explain_result(check_result);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57277_57480);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57276_57479);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.alpha","explain-results","expound.alpha/explain-results",854308104,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"check-results","check-results",1484458047),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"check-results","check-results",1484458047),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-results","check-results",1484458047)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__57280){
return cljs.core.coll_QMARK_(G__57280);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)))], null),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"check-results","check-results",1484458047),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.nil_QMARK_,null,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,null,null));
/**
 * Given a sequence of results from `clojure.spec.test.alpha/check`, prints a summary of the results.
 */
expound.alpha.explain_results = (function expound$alpha$explain_results(check_results){
var seq__57281_57486 = cljs.core.seq(cljs.core.butlast(check_results));
var chunk__57282_57487 = null;
var count__57283_57488 = (0);
var i__57284_57489 = (0);
while(true){
if((i__57284_57489 < count__57283_57488)){
var check_result_57490 = chunk__57282_57487.cljs$core$IIndexed$_nth$arity$2(null,i__57284_57489);
expound.alpha.explain_result(check_result_57490);

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\n"], 0));


var G__57491 = seq__57281_57486;
var G__57492 = chunk__57282_57487;
var G__57493 = count__57283_57488;
var G__57494 = (i__57284_57489 + (1));
seq__57281_57486 = G__57491;
chunk__57282_57487 = G__57492;
count__57283_57488 = G__57493;
i__57284_57489 = G__57494;
continue;
} else {
var temp__5753__auto___57496 = cljs.core.seq(seq__57281_57486);
if(temp__5753__auto___57496){
var seq__57281_57497__$1 = temp__5753__auto___57496;
if(cljs.core.chunked_seq_QMARK_(seq__57281_57497__$1)){
var c__4679__auto___57499 = cljs.core.chunk_first(seq__57281_57497__$1);
var G__57500 = cljs.core.chunk_rest(seq__57281_57497__$1);
var G__57501 = c__4679__auto___57499;
var G__57502 = cljs.core.count(c__4679__auto___57499);
var G__57503 = (0);
seq__57281_57486 = G__57500;
chunk__57282_57487 = G__57501;
count__57283_57488 = G__57502;
i__57284_57489 = G__57503;
continue;
} else {
var check_result_57505 = cljs.core.first(seq__57281_57497__$1);
expound.alpha.explain_result(check_result_57505);

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\n"], 0));


var G__57506 = cljs.core.next(seq__57281_57497__$1);
var G__57507 = null;
var G__57508 = (0);
var G__57509 = (0);
seq__57281_57486 = G__57506;
chunk__57282_57487 = G__57507;
count__57283_57488 = G__57508;
i__57284_57489 = G__57509;
continue;
}
} else {
}
}
break;
}

return expound.alpha.explain_result(cljs.core.last(check_results));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("expound.alpha","explain-results-str","expound.alpha/explain-results-str",-1024157844,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"check-results","check-results",1484458047),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"check-results","check-results",1484458047),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-results","check-results",1484458047)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__57288){
return cljs.core.coll_QMARK_(G__57288);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)))], null),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"check-results","check-results",1484458047),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));
/**
 * Given a sequence of results from `clojure.spec.test.alpha/check`, returns a string summarizing the results.
 */
expound.alpha.explain_results_str = (function expound$alpha$explain_results_str(check_results){
var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57289_57511 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57290_57512 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57291_57513 = true;
var _STAR_print_fn_STAR__temp_val__57292_57514 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57291_57513);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57292_57514);

try{expound.alpha.explain_results(check_results);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57290_57512);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57289_57511);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
});

//# sourceMappingURL=expound.alpha.js.map
