goog.provide('nubank.workspaces.ui.spotlight');
goog.scope(function(){
  nubank.workspaces.ui.spotlight.goog$module$goog$object = goog.module.get('goog.object');
});
nubank.workspaces.ui.spotlight.max_results = (50);
nubank.workspaces.ui.spotlight.spotlight_lookup_debounce_ms = (150);
nubank.workspaces.ui.spotlight.value__GT_label = (function nubank$workspaces$ui$spotlight$value__GT_label(p__59116){
var map__59117 = p__59116;
var map__59117__$1 = cljs.core.__destructure_map(map__59117);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59117__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","id","nubank.workspaces.ui.spotlight/id",-871569707));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59117__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","label","nubank.workspaces.ui.spotlight/label",1308535731));
var or__4253__auto__ = label;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
}
});
nubank.workspaces.ui.spotlight.value__GT_key = (function nubank$workspaces$ui$spotlight$value__GT_key(p__59124){
var map__59125 = p__59124;
var map__59125__$1 = cljs.core.__destructure_map(map__59125);
var opt = map__59125__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59125__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","type","nubank.workspaces.ui.spotlight/type",1675623435));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59125__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","id","nubank.workspaces.ui.spotlight/id",-871569707));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","workspace","nubank.workspaces.ui.spotlight/workspace",-529313372))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
} else {
return [(function (){var G__59129 = opt;
var G__59129__$1 = (((G__59129 == null))?null:new cljs.core.Keyword("nubank.workspaces.ui.spotlight","type","nubank.workspaces.ui.spotlight/type",1675623435).cljs$core$IFn$_invoke$arity$1(G__59129));
if((G__59129__$1 == null)){
return null;
} else {
return cljs.core.name(G__59129__$1);
}
})(),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.spotlight.value__GT_label(opt))].join('');
}
});
nubank.workspaces.ui.spotlight.fuzzy_match = (function nubank$workspaces$ui$spotlight$fuzzy_match(p__59135){
var map__59136 = p__59135;
var map__59136__$1 = cljs.core.__destructure_map(map__59136);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59136__$1,new cljs.core.Keyword(null,"options","options",99638489));
var search_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59136__$1,new cljs.core.Keyword(null,"search-input","search-input",-576916149));
return com.wsscode.fuzzy.fuzzy_match(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.fuzzy","search-input","com.wsscode.fuzzy/search-input",897823168),search_input,new cljs.core.Keyword("com.wsscode.fuzzy","options","com.wsscode.fuzzy/options",773495630),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59131_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59131_SHARP_,new cljs.core.Keyword("com.wsscode.fuzzy","string","com.wsscode.fuzzy/string",320074815),nubank.workspaces.ui.spotlight.value__GT_label(p1__59131_SHARP_));
}),options)], null));
});
nubank.workspaces.ui.spotlight.spotlight_sm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"search-input","search-input",-576916149),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spotlight","spotlight",-1758601723),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","filter","nubank.workspaces.ui.spotlight/filter",-1449113295)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spotlight","spotlight",-1758601723),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","options","nubank.workspaces.ui.spotlight/options",-459165350)], null),new cljs.core.Keyword(null,"current-options","current-options",262833537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spotlight","spotlight",-1758601723),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","filtered-options","nubank.workspaces.ui.spotlight/filtered-options",-219189043)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword(null,"searching","searching",1101390875));
})], null),new cljs.core.Keyword(null,"searching","searching",1101390875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","value-changed","com.fulcrologic.fulcro.ui-state-machines/value-changed",-292687479),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"lookup!","lookup!",-790204480),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var map__59144 = com.fulcrologic.fulcro.ui_state_machines.aliased_data(env);
var map__59144__$1 = cljs.core.__destructure_map(map__59144);
var data = map__59144__$1;
var search_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59144__$1,new cljs.core.Keyword(null,"search-input","search-input",-576916149));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59144__$1,new cljs.core.Keyword(null,"options","options",99638489));
return com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"current-options","current-options",262833537),(((cljs.core.count(search_input) < (3)))?options:nubank.workspaces.ui.spotlight.fuzzy_match(data)));
})], null),new cljs.core.Keyword(null,"exit!","exit!",-220465113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","exit","com.fulcrologic.fulcro.ui-state-machines/exit",600820288)], null)], null)], null)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Symbol("nubank.workspaces.ui.spotlight","spotlight-sm","nubank.workspaces.ui.spotlight/spotlight-sm",-726599954,null));

com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_(new cljs.core.Symbol("nubank.workspaces.ui.spotlight","spotlight-sm","nubank.workspaces.ui.spotlight/spotlight-sm",-726599954,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"search-input","search-input",-576916149),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spotlight","spotlight",-1758601723),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","filter","nubank.workspaces.ui.spotlight/filter",-1449113295)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spotlight","spotlight",-1758601723),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","options","nubank.workspaces.ui.spotlight/options",-459165350)], null),new cljs.core.Keyword(null,"current-options","current-options",262833537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spotlight","spotlight",-1758601723),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","filtered-options","nubank.workspaces.ui.spotlight/filtered-options",-219189043)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword(null,"searching","searching",1101390875));
})], null),new cljs.core.Keyword(null,"searching","searching",1101390875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","value-changed","com.fulcrologic.fulcro.ui-state-machines/value-changed",-292687479),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"lookup!","lookup!",-790204480),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var map__59150 = com.fulcrologic.fulcro.ui_state_machines.aliased_data(env);
var map__59150__$1 = cljs.core.__destructure_map(map__59150);
var data = map__59150__$1;
var search_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59150__$1,new cljs.core.Keyword(null,"search-input","search-input",-576916149));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59150__$1,new cljs.core.Keyword(null,"options","options",99638489));
return com.fulcrologic.fulcro.ui_state_machines.set_aliased_value.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"current-options","current-options",262833537),(((cljs.core.count(search_input) < (3)))?options:nubank.workspaces.ui.spotlight.fuzzy_match(data)));
})], null),new cljs.core.Keyword(null,"exit!","exit!",-220465113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","exit","com.fulcrologic.fulcro.ui-state-machines/exit",600820288)], null)], null)], null)], null)], null));
/**
 * 
 */
nubank.workspaces.ui.spotlight.reset = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui.spotlight","reset","nubank.workspaces.ui.spotlight/reset",475380012,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui.spotlight","reset","nubank.workspaces.ui.spotlight/reset",475380012,null),(function (fulcro_mutation_env_symbol){
var map__59154 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__59154__$1 = cljs.core.__destructure_map(map__59154);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59154__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","options","nubank.workspaces.ui.spotlight/options",-459165350));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$spotlight$action(p__59158){
var map__59159 = p__59158;
var map__59159__$1 = cljs.core.__destructure_map(map__59159);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59159__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59159__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__59160_59291 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59161_59292 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59161_59292);

try{var map__59165_59294 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__59165_59295__$1 = cljs.core.__destructure_map(map__59165_59294);
var filter_59296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59165_59295__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","filter","nubank.workspaces.ui.spotlight/filter",-1449113295));
var options_59297__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.spotlight.value__GT_label,options);
var filtered_options_59298 = nubank.workspaces.ui.spotlight.fuzzy_match(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search-input","search-input",-576916149),filter_59296,new cljs.core.Keyword(null,"options","options",99638489),options_59297__$1], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui.spotlight","options","nubank.workspaces.ui.spotlight/options",-459165350),options_59297__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","filtered-options","nubank.workspaces.ui.spotlight/filtered-options",-219189043),filtered_options_59298], 0));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59160_59291);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__59166 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59167 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59167);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59166);
}})], null);
}));

var options__48885__auto___59306 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".option",".option",-31944368),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),"#1d1d1d",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 3px",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#e2d610",new cljs.core.Keyword(null,"color","color",1011675173),"#000"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".option-type",".option-type",-1369374888),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".option-selected",".option-selected",1185435611),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#582074",new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".solo-hint",".solo-hint",1159989931),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cljs-workspaces-extended-views","$cljs-workspaces-extended-views",-110849724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".option-selected",".option-selected",1185435611),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".solo-hint",".solo-hint",1159989931),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$spotlight$render_SpotlightEntry(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__59178 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59178__$1 = cljs.core.__destructure_map(map__59178);
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59178__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","opt","nubank.workspaces.ui.spotlight/opt",-221248834));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59178__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","value","nubank.workspaces.ui.spotlight/value",-257773846));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59178__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","on-change","nubank.workspaces.ui.spotlight/on-change",-290705346));
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59178__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","on-select","nubank.workspaces.ui.spotlight/on-select",366623223));
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".option",".option",-31944368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt,value))?new cljs.core.Keyword(null,".option-selected",".option-selected",1185435611):null)], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__59174_SHARP_){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(opt) : on_change.call(null,opt));

var G__59182 = opt;
var G__59183 = p1__59174_SHARP_.altKey;
return (on_select.cljs$core$IFn$_invoke$arity$2 ? on_select.cljs$core$IFn$_invoke$arity$2(G__59182,G__59183) : on_select.call(null,G__59182,G__59183));
})], null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),(function (){var or__4253__auto__ = new cljs.core.Keyword("com.wsscode.fuzzy","match-hl","com.wsscode.fuzzy/match-hl",-611317739).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nubank.workspaces.ui.spotlight.value__GT_label(opt);
}
})()], null)], null)], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".option-type",".option-type",-1369374888),(function (){var G__59186 = opt;
var G__59186__$1 = (((G__59186 == null))?null:new cljs.core.Keyword("nubank.workspaces.ui.spotlight","type","nubank.workspaces.ui.spotlight/type",1675623435).cljs$core$IFn$_invoke$arity$1(G__59186));
if((G__59186__$1 == null)){
return null;
} else {
return cljs.core.name(G__59186__$1);
}
})(),(cljs.core.truth_((function (){var G__59188 = opt;
var G__59188__$1 = (((G__59188 == null))?null:new cljs.core.Keyword("nubank.workspaces.ui.spotlight","type","nubank.workspaces.ui.spotlight/type",1675623435).cljs$core$IFn$_invoke$arity$1(G__59188));
if((G__59188__$1 == null)){
return null;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(G__59188__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","workspace","nubank.workspaces.ui.spotlight/workspace",-529313372));
}
})())?com.fulcrologic.fulcro_css.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".solo-hint",".solo-hint",1159989931)," - open solo"], 0)):null)], 0))], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.spotlight !== 'undefined') && (typeof nubank.workspaces.ui.spotlight.SpotlightEntry !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.spotlight.SpotlightEntry = (function nubank$workspaces$ui$spotlight$SpotlightEntry(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___59320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___59306,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___59320)){
var init_state__48888__auto___59323 = temp__5751__auto___59320;
(this__48887__auto__.state = (function (){var obj59193 = ({"fulcro$state":(function (){var G__59194 = this__48887__auto__;
var G__59195 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___59323.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___59323.cljs$core$IFn$_invoke$arity$2(G__59194,G__59195) : init_state__48888__auto___59323.call(null,G__59194,G__59195));
})()});
return obj59193;
})());
} else {
(this__48887__auto__.state = (function (){var obj59200 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj59200;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.spotlight.SpotlightEntry,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","SpotlightEntry","nubank.workspaces.ui.spotlight/SpotlightEntry",504630321),options__48885__auto___59306);
nubank.workspaces.ui.spotlight.spotlight_entry = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.spotlight.SpotlightEntry);

var options__48885__auto___59325 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"css-include","css-include",559023012),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nubank.workspaces.ui.cursor.VerticalCursor,nubank.workspaces.ui.spotlight.SpotlightEntry], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".area-container",".area-container",-1540052376),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"600px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#e2e2e2",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 6px 6px rgba(0, 0, 0, 0.26), 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 2px rgba(0,0,0,0.3)",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".search",".search",-1559053770),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["border-box","#000","32px","100%","#cccbcd","10px","0","0",nubank.workspaces.ui.core.font_helvetica])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".options",".options",-2119721631),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),nubank.workspaces.ui.core.font_open_sans,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null)], null),(function (this$){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","spotlight","nubank.workspaces.ui.spotlight/spotlight",1020768902),new cljs.core.Keyword(null,"exit!","exit!",-220465113));
}),(function nubank$workspaces$ui$spotlight$render_Spotlight(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__59230 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59230__$1 = cljs.core.__destructure_map(map__59230);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59230__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","options","nubank.workspaces.ui.spotlight/options",-459165350));
var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59230__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","filter","nubank.workspaces.ui.spotlight/filter",-1449113295));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59230__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","value","nubank.workspaces.ui.spotlight/value",-257773846));
var filtered_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59230__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","filtered-options","nubank.workspaces.ui.spotlight/filtered-options",-219189043));
var map__59231 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__59231__$1 = cljs.core.__destructure_map(map__59231);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59231__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","on-select","nubank.workspaces.ui.spotlight/on-select",366623223),cljs.core.identity);
var css = com.fulcrologic.fulcro.components.get_extra_props(this$);
var options_SINGLEQUOTE_ = ((cljs.core.seq(filter))?filtered_options:options);
var on_change = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"cursor-change","cursor-change",-507382902));
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".area-container",".area-container",-1540052376),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.fulcrologic.fulcro_css.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".search",".search",-1559053770),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),filter,new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__59206_SHARP_){
return nubank.workspaces.ui.spotlight.goog$module$goog$object.set(this$,"input",p1__59206_SHARP_);
}),new cljs.core.Keyword(null,"onChange","onChange",-312891301),com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"update-input","update-input",-884820204))], null)], 0)),((cljs.core.seq(options_SINGLEQUOTE_))?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".options",".options",-2119721631),(function (){var G__59235 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),"500px"], null),new cljs.core.Keyword("nubank.workspaces.ui.cursor","value","nubank.workspaces.ui.cursor/value",-199258490),value,new cljs.core.Keyword("nubank.workspaces.ui.cursor","options","nubank.workspaces.ui.cursor/options",-450932746),cljs.core.take.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.spotlight.max_results,options_SINGLEQUOTE_),new cljs.core.Keyword("nubank.workspaces.ui.cursor","on-change","nubank.workspaces.ui.cursor/on-change",-265764398),on_change,new cljs.core.Keyword("nubank.workspaces.ui.cursor","on-select","nubank.workspaces.ui.cursor/on-select",360128875),com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"cursor-select","cursor-select",-830325844)),new cljs.core.Keyword("nubank.workspaces.ui.cursor","factory","nubank.workspaces.ui.cursor/factory",-385580505),com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"cursor-factory","cursor-factory",657765766)),new cljs.core.Keyword("nubank.workspaces.ui.cursor","value->key","nubank.workspaces.ui.cursor/value->key",-977103990),nubank.workspaces.ui.spotlight.value__GT_key,new cljs.core.Keyword("nubank.workspaces.ui.events","target","nubank.workspaces.ui.events/target",-254697909),com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"cursor-target","cursor-target",2033760297))], null);
return (nubank.workspaces.ui.cursor.vertical_cursor.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.cursor.vertical_cursor.cljs$core$IFn$_invoke$arity$1(G__59235) : nubank.workspaces.ui.cursor.vertical_cursor.call(null,G__59235));
})()], 0)):null)], 0))], 0));
}));
}),(function nubank$workspaces$ui$spotlight$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui.spotlight","id","nubank.workspaces.ui.spotlight/id",-871569707),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","id","nubank.workspaces.ui.spotlight/id",-871569707).cljs$core$IFn$_invoke$arity$1(props)], null);
}),(function (this$){
com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$4(this$,nubank.workspaces.ui.spotlight.spotlight_sm,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","spotlight","nubank.workspaces.ui.spotlight/spotlight",1020768902),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spotlight","spotlight",-1758601723),this$], null));

return nubank.workspaces.ui.spotlight.goog$module$goog$object.get(this$,"input").select();
}),(function nubank$workspaces$ui$spotlight$build_raw_initial_state_STAR_(options){
var options__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.spotlight.value__GT_label,options);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("nubank.workspaces.ui.spotlight","id","nubank.workspaces.ui.spotlight/id",-871569707),cljs.core.random_uuid(),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","options","nubank.workspaces.ui.spotlight/options",-459165350),options__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","value","nubank.workspaces.ui.spotlight/value",-257773846),cljs.core.first(options__$1),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","filter","nubank.workspaces.ui.spotlight/filter",-1449113295),"",new cljs.core.Keyword("nubank.workspaces.ui.spotlight","filtered-options","nubank.workspaces.ui.spotlight/filtered-options",-219189043),cljs.core.PersistentVector.EMPTY], null);
}),(function nubank$workspaces$ui$spotlight$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui.spotlight","id","nubank.workspaces.ui.spotlight/id",-871569707),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","options","nubank.workspaces.ui.spotlight/options",-459165350),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","filter","nubank.workspaces.ui.spotlight/filter",-1449113295),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","filtered-options","nubank.workspaces.ui.spotlight/filtered-options",-219189043),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","value","nubank.workspaces.ui.spotlight/value",-257773846)], null);
}),(function (this$){
var on_change = (function (p1__59204_SHARP_){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","value","nubank.workspaces.ui.spotlight/value",-257773846),p1__59204_SHARP_);
});
var lookup = (function (){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","spotlight","nubank.workspaces.ui.spotlight/spotlight",1020768902),new cljs.core.Keyword(null,"lookup!","lookup!",-790204480));
});
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor-select","cursor-select",-830325844),(function (opt,e){
var map__59248 = (function (){var G__59249 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(G__59249) : com.fulcrologic.fulcro.components.get_computed.call(null,G__59249));
})();
var map__59248__$1 = cljs.core.__destructure_map(map__59248);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59248__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","on-select","nubank.workspaces.ui.spotlight/on-select",366623223),cljs.core.identity);
e.stopPropagation();

var G__59252 = opt;
var G__59253 = e.altKey;
return (on_select.cljs$core$IFn$_invoke$arity$2 ? on_select.cljs$core$IFn$_invoke$arity$2(G__59252,G__59253) : on_select.call(null,G__59252,G__59253));
}),new cljs.core.Keyword(null,"cursor-change","cursor-change",-507382902),on_change,new cljs.core.Keyword(null,"cursor-factory","cursor-factory",657765766),(function (opt){
var map__59255 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59255__$1 = cljs.core.__destructure_map(map__59255);
var props = map__59255__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59255__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","value","nubank.workspaces.ui.spotlight/value",-257773846));
var map__59256 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(props) : com.fulcrologic.fulcro.components.get_computed.call(null,props));
var map__59256__$1 = cljs.core.__destructure_map(map__59256);
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59256__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","on-select","nubank.workspaces.ui.spotlight/on-select",366623223),cljs.core.identity);
var G__59257 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("nubank.workspaces.ui.spotlight","opt","nubank.workspaces.ui.spotlight/opt",-221248834),opt,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","value","nubank.workspaces.ui.spotlight/value",-257773846),value,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","on-change","nubank.workspaces.ui.spotlight/on-change",-290705346),on_change,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","on-select","nubank.workspaces.ui.spotlight/on-select",366623223),on_select], null);
return (nubank.workspaces.ui.spotlight.spotlight_entry.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.spotlight.spotlight_entry.cljs$core$IFn$_invoke$arity$1(G__59257) : nubank.workspaces.ui.spotlight.spotlight_entry.call(null,G__59257));
}),new cljs.core.Keyword(null,"cursor-target","cursor-target",2033760297),(function (){
return nubank.workspaces.ui.spotlight.goog$module$goog$object.get(this$,"input");
}),new cljs.core.Keyword(null,"update-input","update-input",-884820204),(function (e){
com.fulcrologic.fulcro.ui_state_machines.set_string_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","spotlight","nubank.workspaces.ui.spotlight/spotlight",1020768902),new cljs.core.Keyword(null,"search-input","search-input",-576916149),e);

return lookup();
})], null);
})]);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.spotlight !== 'undefined') && (typeof nubank.workspaces.ui.spotlight.Spotlight !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.spotlight.Spotlight = (function nubank$workspaces$ui$spotlight$Spotlight(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___59365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___59325,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___59365)){
var init_state__48888__auto___59366 = temp__5751__auto___59365;
(this__48887__auto__.state = (function (){var obj59265 = ({"fulcro$state":(function (){var G__59266 = this__48887__auto__;
var G__59267 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___59366.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___59366.cljs$core$IFn$_invoke$arity$2(G__59266,G__59267) : init_state__48888__auto___59366.call(null,G__59266,G__59267));
})()});
return obj59265;
})());
} else {
(this__48887__auto__.state = (function (){var obj59271 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj59271;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.spotlight.Spotlight,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","Spotlight","nubank.workspaces.ui.spotlight/Spotlight",-1391740903),options__48885__auto___59325);
nubank.workspaces.ui.spotlight.spotlight = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.spotlight.Spotlight);

//# sourceMappingURL=nubank.workspaces.ui.spotlight.js.map
