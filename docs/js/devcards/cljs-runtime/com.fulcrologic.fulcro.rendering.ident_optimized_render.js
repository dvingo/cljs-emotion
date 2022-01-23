goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app,ident,c){
if(cljs.core.truth_((function (){var and__4251__auto__ = c;
if(cljs.core.truth_(and__4251__auto__)){
return ident;
} else {
return and__4251__auto__;
}
})())){
var map__49497 = app;
var map__49497__$1 = cljs.core.__destructure_map(map__49497);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49497__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4253__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__49498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__49499 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__49498,G__49499) : com.fulcrologic.fulcro.components.computed.call(null,G__49498,G__49499));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,-1689510669,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__49509 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__49509) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__49509));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-236826530,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app,ident){
var seq__49511 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app,ident));
var chunk__49512 = null;
var count__49513 = (0);
var i__49514 = (0);
while(true){
if((i__49514 < count__49513)){
var c = chunk__49512.cljs$core$IIndexed$_nth$arity$2(null,i__49514);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__49781 = seq__49511;
var G__49782 = chunk__49512;
var G__49783 = count__49513;
var G__49784 = (i__49514 + (1));
seq__49511 = G__49781;
chunk__49512 = G__49782;
count__49513 = G__49783;
i__49514 = G__49784;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49511);
if(temp__5753__auto__){
var seq__49511__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49511__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49511__$1);
var G__49785 = cljs.core.chunk_rest(seq__49511__$1);
var G__49786 = c__4679__auto__;
var G__49787 = cljs.core.count(c__4679__auto__);
var G__49788 = (0);
seq__49511 = G__49785;
chunk__49512 = G__49786;
count__49513 = G__49787;
i__49514 = G__49788;
continue;
} else {
var c = cljs.core.first(seq__49511__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__49789 = cljs.core.next(seq__49511__$1);
var G__49790 = null;
var G__49791 = (0);
var G__49792 = (0);
seq__49511 = G__49789;
chunk__49512 = G__49790;
count__49513 = G__49791;
i__49514 = G__49792;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app,ident);

var map__49538 = app;
var map__49538__$1 = cljs.core.__destructure_map(map__49538);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__49539 = cljs.core.deref(runtime_atom);
var map__49539__$1 = cljs.core.__destructure_map(map__49539);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49539__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__49540 = indexes;
var map__49540__$1 = cljs.core.__destructure_map(map__49540);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4253__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__49541 = cljs.core.seq(classes);
var chunk__49542 = null;
var count__49543 = (0);
var i__49544 = (0);
while(true){
if((i__49544 < count__49543)){
var class$ = chunk__49542.cljs$core$IIndexed$_nth$arity$2(null,i__49544);
var seq__49594_49798 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__49596_49799 = null;
var count__49597_49800 = (0);
var i__49598_49801 = (0);
while(true){
if((i__49598_49801 < count__49597_49800)){
var component_49802 = chunk__49596_49799.cljs$core$IIndexed$_nth$arity$2(null,i__49598_49801);
var component_ident_49803 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_49802) : com.fulcrologic.fulcro.components.get_ident.call(null,component_49802));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_49803,component_49802);


var G__49804 = seq__49594_49798;
var G__49805 = chunk__49596_49799;
var G__49806 = count__49597_49800;
var G__49807 = (i__49598_49801 + (1));
seq__49594_49798 = G__49804;
chunk__49596_49799 = G__49805;
count__49597_49800 = G__49806;
i__49598_49801 = G__49807;
continue;
} else {
var temp__5753__auto___49809 = cljs.core.seq(seq__49594_49798);
if(temp__5753__auto___49809){
var seq__49594_49813__$1 = temp__5753__auto___49809;
if(cljs.core.chunked_seq_QMARK_(seq__49594_49813__$1)){
var c__4679__auto___49814 = cljs.core.chunk_first(seq__49594_49813__$1);
var G__49815 = cljs.core.chunk_rest(seq__49594_49813__$1);
var G__49816 = c__4679__auto___49814;
var G__49817 = cljs.core.count(c__4679__auto___49814);
var G__49818 = (0);
seq__49594_49798 = G__49815;
chunk__49596_49799 = G__49816;
count__49597_49800 = G__49817;
i__49598_49801 = G__49818;
continue;
} else {
var component_49819 = cljs.core.first(seq__49594_49813__$1);
var component_ident_49820 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_49819) : com.fulcrologic.fulcro.components.get_ident.call(null,component_49819));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_49820,component_49819);


var G__49821 = cljs.core.next(seq__49594_49813__$1);
var G__49822 = null;
var G__49823 = (0);
var G__49824 = (0);
seq__49594_49798 = G__49821;
chunk__49596_49799 = G__49822;
count__49597_49800 = G__49823;
i__49598_49801 = G__49824;
continue;
}
} else {
}
}
break;
}


var G__49825 = seq__49541;
var G__49826 = chunk__49542;
var G__49827 = count__49543;
var G__49828 = (i__49544 + (1));
seq__49541 = G__49825;
chunk__49542 = G__49826;
count__49543 = G__49827;
i__49544 = G__49828;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49541);
if(temp__5753__auto__){
var seq__49541__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49541__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49541__$1);
var G__49831 = cljs.core.chunk_rest(seq__49541__$1);
var G__49832 = c__4679__auto__;
var G__49833 = cljs.core.count(c__4679__auto__);
var G__49834 = (0);
seq__49541 = G__49831;
chunk__49542 = G__49832;
count__49543 = G__49833;
i__49544 = G__49834;
continue;
} else {
var class$ = cljs.core.first(seq__49541__$1);
var seq__49623_49837 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__49625_49838 = null;
var count__49626_49839 = (0);
var i__49627_49840 = (0);
while(true){
if((i__49627_49840 < count__49626_49839)){
var component_49843 = chunk__49625_49838.cljs$core$IIndexed$_nth$arity$2(null,i__49627_49840);
var component_ident_49845 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_49843) : com.fulcrologic.fulcro.components.get_ident.call(null,component_49843));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_49845,component_49843);


var G__49846 = seq__49623_49837;
var G__49847 = chunk__49625_49838;
var G__49848 = count__49626_49839;
var G__49849 = (i__49627_49840 + (1));
seq__49623_49837 = G__49846;
chunk__49625_49838 = G__49847;
count__49626_49839 = G__49848;
i__49627_49840 = G__49849;
continue;
} else {
var temp__5753__auto___49851__$1 = cljs.core.seq(seq__49623_49837);
if(temp__5753__auto___49851__$1){
var seq__49623_49852__$1 = temp__5753__auto___49851__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49623_49852__$1)){
var c__4679__auto___49854 = cljs.core.chunk_first(seq__49623_49852__$1);
var G__49855 = cljs.core.chunk_rest(seq__49623_49852__$1);
var G__49856 = c__4679__auto___49854;
var G__49857 = cljs.core.count(c__4679__auto___49854);
var G__49858 = (0);
seq__49623_49837 = G__49855;
chunk__49625_49838 = G__49856;
count__49626_49839 = G__49857;
i__49627_49840 = G__49858;
continue;
} else {
var component_49859 = cljs.core.first(seq__49623_49852__$1);
var component_ident_49860 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_49859) : com.fulcrologic.fulcro.components.get_ident.call(null,component_49859));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_49860,component_49859);


var G__49861 = cljs.core.next(seq__49623_49852__$1);
var G__49862 = null;
var G__49863 = (0);
var G__49864 = (0);
seq__49623_49837 = G__49861;
chunk__49625_49838 = G__49862;
count__49626_49839 = G__49863;
i__49627_49840 = G__49864;
continue;
}
} else {
}
}
break;
}


var G__49866 = cljs.core.next(seq__49541__$1);
var G__49867 = null;
var G__49868 = (0);
var G__49869 = (0);
seq__49541 = G__49866;
chunk__49542 = G__49867;
count__49543 = G__49868;
i__49544 = G__49869;
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
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app,property_set){
if(cljs.core.seq(property_set)){
var map__49658 = app;
var map__49658__$1 = cljs.core.__destructure_map(map__49658);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49658__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__49659 = cljs.core.deref(runtime_atom);
var map__49659__$1 = cljs.core.__destructure_map(map__49659);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49659__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__49660 = indexes;
var map__49660__$1 = cljs.core.__destructure_map(map__49660);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49660__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49660__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__49651_SHARP_,p2__49652_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__49651_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__49652_SHARP_) : class__GT_components.call(null,p2__49652_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app){
var map__49662 = app;
var map__49662__$1 = cljs.core.__destructure_map(map__49662);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49662__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49662__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__49663 = cljs.core.deref(runtime_atom);
var map__49663__$1 = cljs.core.__destructure_map(map__49663);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49663__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49663__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49663__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49663__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__49664 = indexes;
var map__49664__$1 = cljs.core.__destructure_map(map__49664);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49664__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49664__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49664__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49664__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__49671 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__49671__$1 = cljs.core.__destructure_map(map__49671);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49671__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49671__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,limited_props);
var seq__49674_49881 = cljs.core.seq(limited_to_render);
var chunk__49676_49882 = null;
var count__49677_49883 = (0);
var i__49678_49884 = (0);
while(true){
if((i__49678_49884 < count__49677_49883)){
var c_49885 = chunk__49676_49882.cljs$core$IIndexed$_nth$arity$2(null,i__49678_49884);
var ident_49887 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_49885) : com.fulcrologic.fulcro.components.get_ident.call(null,c_49885));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_49887,c_49885);


var G__49891 = seq__49674_49881;
var G__49892 = chunk__49676_49882;
var G__49893 = count__49677_49883;
var G__49894 = (i__49678_49884 + (1));
seq__49674_49881 = G__49891;
chunk__49676_49882 = G__49892;
count__49677_49883 = G__49893;
i__49678_49884 = G__49894;
continue;
} else {
var temp__5753__auto___49895 = cljs.core.seq(seq__49674_49881);
if(temp__5753__auto___49895){
var seq__49674_49897__$1 = temp__5753__auto___49895;
if(cljs.core.chunked_seq_QMARK_(seq__49674_49897__$1)){
var c__4679__auto___49898 = cljs.core.chunk_first(seq__49674_49897__$1);
var G__49900 = cljs.core.chunk_rest(seq__49674_49897__$1);
var G__49901 = c__4679__auto___49898;
var G__49902 = cljs.core.count(c__4679__auto___49898);
var G__49903 = (0);
seq__49674_49881 = G__49900;
chunk__49676_49882 = G__49901;
count__49677_49883 = G__49902;
i__49678_49884 = G__49903;
continue;
} else {
var c_49905 = cljs.core.first(seq__49674_49897__$1);
var ident_49906 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_49905) : com.fulcrologic.fulcro.components.get_ident.call(null,c_49905));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_49906,c_49905);


var G__49907 = cljs.core.next(seq__49674_49897__$1);
var G__49908 = null;
var G__49909 = (0);
var G__49910 = (0);
seq__49674_49881 = G__49907;
chunk__49676_49882 = G__49908;
count__49677_49883 = G__49909;
i__49678_49884 = G__49910;
continue;
}
} else {
}
}
break;
}

var seq__49692 = cljs.core.seq(limited_idents);
var chunk__49693 = null;
var count__49694 = (0);
var i__49695 = (0);
while(true){
if((i__49695 < count__49694)){
var i = chunk__49693.cljs$core$IIndexed$_nth$arity$2(null,i__49695);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__49912 = seq__49692;
var G__49913 = chunk__49693;
var G__49914 = count__49694;
var G__49915 = (i__49695 + (1));
seq__49692 = G__49912;
chunk__49693 = G__49913;
count__49694 = G__49914;
i__49695 = G__49915;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49692);
if(temp__5753__auto__){
var seq__49692__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49692__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49692__$1);
var G__49917 = cljs.core.chunk_rest(seq__49692__$1);
var G__49918 = c__4679__auto__;
var G__49919 = cljs.core.count(c__4679__auto__);
var G__49920 = (0);
seq__49692 = G__49917;
chunk__49693 = G__49918;
count__49694 = G__49919;
i__49695 = G__49920;
continue;
} else {
var i = cljs.core.first(seq__49692__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__49922 = cljs.core.next(seq__49692__$1);
var G__49923 = null;
var G__49924 = (0);
var G__49925 = (0);
seq__49692 = G__49922;
chunk__49693 = G__49923;
count__49694 = G__49924;
i__49695 = G__49925;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4253__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__49711 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__49711__$1 = cljs.core.__destructure_map(map__49711);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49711__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49711__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__49724_49930 = cljs.core.seq(all_idents);
var chunk__49725_49931 = null;
var count__49726_49932 = (0);
var i__49727_49933 = (0);
while(true){
if((i__49727_49933 < count__49726_49932)){
var i_49934 = chunk__49725_49931.cljs$core$IIndexed$_nth$arity$2(null,i__49727_49933);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_49934);


var G__49935 = seq__49724_49930;
var G__49936 = chunk__49725_49931;
var G__49937 = count__49726_49932;
var G__49938 = (i__49727_49933 + (1));
seq__49724_49930 = G__49935;
chunk__49725_49931 = G__49936;
count__49726_49932 = G__49937;
i__49727_49933 = G__49938;
continue;
} else {
var temp__5753__auto___49939 = cljs.core.seq(seq__49724_49930);
if(temp__5753__auto___49939){
var seq__49724_49940__$1 = temp__5753__auto___49939;
if(cljs.core.chunked_seq_QMARK_(seq__49724_49940__$1)){
var c__4679__auto___49941 = cljs.core.chunk_first(seq__49724_49940__$1);
var G__49942 = cljs.core.chunk_rest(seq__49724_49940__$1);
var G__49943 = c__4679__auto___49941;
var G__49944 = cljs.core.count(c__4679__auto___49941);
var G__49945 = (0);
seq__49724_49930 = G__49942;
chunk__49725_49931 = G__49943;
count__49726_49932 = G__49944;
i__49727_49933 = G__49945;
continue;
} else {
var i_49949 = cljs.core.first(seq__49724_49940__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_49949);


var G__49958 = cljs.core.next(seq__49724_49940__$1);
var G__49959 = null;
var G__49960 = (0);
var G__49961 = (0);
seq__49724_49930 = G__49958;
chunk__49725_49931 = G__49959;
count__49726_49932 = G__49960;
i__49727_49933 = G__49961;
continue;
}
} else {
}
}
break;
}

var seq__49742 = cljs.core.seq(extra_to_force);
var chunk__49743 = null;
var count__49744 = (0);
var i__49745 = (0);
while(true){
if((i__49745 < count__49744)){
var c = chunk__49743.cljs$core$IIndexed$_nth$arity$2(null,i__49745);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__49964 = seq__49742;
var G__49965 = chunk__49743;
var G__49966 = count__49744;
var G__49967 = (i__49745 + (1));
seq__49742 = G__49964;
chunk__49743 = G__49965;
count__49744 = G__49966;
i__49745 = G__49967;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49742);
if(temp__5753__auto__){
var seq__49742__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49742__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49742__$1);
var G__49969 = cljs.core.chunk_rest(seq__49742__$1);
var G__49970 = c__4679__auto__;
var G__49971 = cljs.core.count(c__4679__auto__);
var G__49972 = (0);
seq__49742 = G__49969;
chunk__49743 = G__49970;
count__49744 = G__49971;
i__49745 = G__49972;
continue;
} else {
var c = cljs.core.first(seq__49742__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__49973 = cljs.core.next(seq__49742__$1);
var G__49974 = null;
var G__49975 = (0);
var G__49976 = (0);
seq__49742 = G__49973;
chunk__49743 = G__49974;
count__49744 = G__49975;
i__49745 = G__49976;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__49766 = arguments.length;
switch (G__49766) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,p__49770){
var map__49771 = p__49770;
var map__49771__$1 = cljs.core.__destructure_map(map__49771);
var options = map__49771__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49771__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49771__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4253__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app);
}catch (e49772){var e = e49772;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,2104654442,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
