goog.provide('nubank.workspaces.ui');
goog.scope(function(){
  nubank.workspaces.ui.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.components_with_error !== 'undefined')){
} else {
nubank.workspaces.ui.components_with_error = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
nubank.workspaces.ui.default_bindings = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("nubank.workspaces.ui","keybinding-toggle-index","nubank.workspaces.ui/keybinding-toggle-index",2077220551),"alt-shift-i",new cljs.core.Keyword("nubank.workspaces.ui","keybinding-spotlight","nubank.workspaces.ui/keybinding-spotlight",254588049),"alt-shift-a",new cljs.core.Keyword("nubank.workspaces.ui","keybinding-toggle-card-headers","nubank.workspaces.ui/keybinding-toggle-card-headers",1763073649),"alt-shift-h",new cljs.core.Keyword("nubank.workspaces.ui","keybinding-new-workspace","nubank.workspaces.ui/keybinding-new-workspace",-1840796647),"alt-shift-n",new cljs.core.Keyword("nubank.workspaces.ui","keybinding-close-workspace","nubank.workspaces.ui/keybinding-close-workspace",145944058),"alt-shift-w",new cljs.core.Keyword("nubank.workspaces.ui","keybinding-fix-sizes","nubank.workspaces.ui/keybinding-fix-sizes",1615114381),"alt-shift-s"], null);
nubank.workspaces.ui.get_keybinding = (function nubank$workspaces$ui$get_keybinding(name){
return nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.default_bindings,name));
});
nubank.workspaces.ui.card_title = (function nubank$workspaces$ui$card_title(card_id){
return cljs.core.name(card_id);
});
nubank.workspaces.ui.card_changed_QMARK_ = (function nubank$workspaces$ui$card_changed_QMARK_(card_id){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nubank.workspaces.data.card_definitions_snap_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_id,new cljs.core.Keyword("nubank.workspaces.model","card-form","nubank.workspaces.model/card-form",2147473)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nubank.workspaces.data.card_definitions_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_id,new cljs.core.Keyword("nubank.workspaces.model","card-form","nubank.workspaces.model/card-form",2147473)], null)));
});
nubank.workspaces.ui.use_card = (function nubank$workspaces$ui$use_card(card_id,node,reconciler){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nubank.workspaces.data.active_cards_STAR_),card_id);
if(cljs.core.truth_(temp__5751__auto__)){
var active = temp__5751__auto__;
return active;
} else {
var temp__5751__auto____$1 = nubank.workspaces.data.card_definition(card_id);
if(cljs.core.truth_(temp__5751__auto____$1)){
var map__59301 = temp__5751__auto____$1;
var map__59301__$1 = cljs.core.__destructure_map(map__59301);
var card_def = map__59301__$1;
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59301__$1,new cljs.core.Keyword("nubank.workspaces.model","init","nubank.workspaces.model/init",-1281528358));
var card = (function (){var G__59305 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([card_def,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134),node,new cljs.core.Keyword("nubank.workspaces.model","reconciler","nubank.workspaces.model/reconciler",794444150),reconciler,new cljs.core.Keyword("nubank.workspaces.model","set-card-header-style","nubank.workspaces.model/set-card-header-style",1976817478),(function (style){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.fulcrologic.fulcro.mutations","set-props","com.fulcrologic.fulcro.mutations/set-props",1644200406,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.model","card-header-style","nubank.workspaces.model/card-header-style",534442797),null,(1),null)),(new cljs.core.List(null,style,null,(1),null)))))),null,(1),null)))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id], null)], null));
})], null)], 0));
return (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(G__59305) : init.call(null,G__59305));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nubank.workspaces.data.active_cards_STAR_,cljs.core.assoc,card_id,card);

return card;
} else {
return console.warn("Card card-id",card_id,"not found");
}
}
});
nubank.workspaces.ui.dispose_card = (function nubank$workspaces$ui$dispose_card(card_id){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nubank.workspaces.data.active_cards_STAR_),card_id);
if(cljs.core.truth_(temp__5753__auto__)){
var map__59313 = temp__5753__auto__;
var map__59313__$1 = cljs.core.__destructure_map(map__59313);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59313__$1,new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134));
var dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59313__$1,new cljs.core.Keyword("nubank.workspaces.model","dispose","nubank.workspaces.model/dispose",829517204));
if(cljs.core.truth_(dispose)){
(dispose.cljs$core$IFn$_invoke$arity$1 ? dispose.cljs$core$IFn$_invoke$arity$1(node) : dispose.call(null,node));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.data.active_cards_STAR_,cljs.core.dissoc,card_id);
} else {
return null;
}
});
nubank.workspaces.ui.render_card = (function nubank$workspaces$ui$render_card(p__59317){
var map__59318 = p__59317;
var map__59318__$1 = cljs.core.__destructure_map(map__59318);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59318__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59318__$1,new cljs.core.Keyword("nubank.workspaces.model","component","nubank.workspaces.model/component",-1201359926));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59318__$1,new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134));
var map__59319 = nubank.workspaces.ui.use_card(card_id,node,com.fulcrologic.fulcro.components.any__GT_app(component));
var map__59319__$1 = cljs.core.__destructure_map(map__59319);
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59319__$1,new cljs.core.Keyword("nubank.workspaces.model","render","nubank.workspaces.model/render",125050774));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nubank.workspaces.data.active_cards_STAR_,cljs.core.update,card_id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134),node,new cljs.core.Keyword("nubank.workspaces.model","component","nubank.workspaces.model/component",-1201359926),component], 0));

return (render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(node) : render.call(null,node));
});
nubank.workspaces.ui.refresh_card_container = (function nubank$workspaces$ui$refresh_card_container(card_id){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.data.active_card(card_id),new cljs.core.Keyword("nubank.workspaces.model","component","nubank.workspaces.model/component",-1201359926));
if(cljs.core.truth_(temp__5751__auto__)){
var comp = temp__5751__auto__;
return comp.forceUpdate();
} else {
return null;
}
});
nubank.workspaces.ui.restart_card = (function nubank$workspaces$ui$restart_card(card_id){
var old_card = nubank.workspaces.data.active_card(card_id);
nubank.workspaces.ui.dispose_card(card_id);

nubank.workspaces.ui.render_card(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_card,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id));

return nubank.workspaces.ui.refresh_card_container(card_id);
});
nubank.workspaces.ui.workspace_card_ids = (function nubank$workspaces$ui$workspace_card_ids(p__59329){
var map__59332 = p__59329;
var map__59332__$1 = cljs.core.__destructure_map(map__59332);
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59332__$1,new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701));
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59332__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
if(cljs.core.truth_(cards)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cards);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([card_id]);
}
});
nubank.workspaces.ui.refresh_cards = (function nubank$workspaces$ui$refresh_cards(var_args){
var G__59338 = arguments.length;
switch (G__59338) {
case 1:
return nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$1 = (function (cards){
return nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$2(cards,true);
}));

(nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$2 = (function (cards,check_changes_QMARK_){
var seq__59342_60177 = cljs.core.seq(cards);
var chunk__59343_60178 = null;
var count__59344_60179 = (0);
var i__59345_60180 = (0);
while(true){
if((i__59345_60180 < count__59344_60179)){
var vec__59367_60181 = chunk__59343_60178.cljs$core$IIndexed$_nth$arity$2(null,i__59345_60180);
var card_id_60182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59367_60181,(0),null);
var map__59370_60183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59367_60181,(1),null);
var map__59370_60184__$1 = cljs.core.__destructure_map(map__59370_60183);
var node_60185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59370_60184__$1,new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134));
var refresh_60186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59370_60184__$1,new cljs.core.Keyword("nubank.workspaces.model","refresh","nubank.workspaces.model/refresh",-816174567));
try{if(cljs.core.truth_((function (){var and__4251__auto__ = check_changes_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return nubank.workspaces.ui.card_changed_QMARK_(card_id_60182);
} else {
return and__4251__auto__;
}
})())){
nubank.workspaces.ui.restart_card(card_id_60182);
} else {
if(cljs.core.truth_(refresh_60186)){
(refresh_60186.cljs$core$IFn$_invoke$arity$1 ? refresh_60186.cljs$core$IFn$_invoke$arity$1(node_60185) : refresh_60186.call(null,node_60185));
} else {
}
}
}catch (e59373){var e_60191 = e59373;
console.error("Error refreshing card",card_id_60182,e_60191);
}

var G__60192 = seq__59342_60177;
var G__60193 = chunk__59343_60178;
var G__60194 = count__59344_60179;
var G__60195 = (i__59345_60180 + (1));
seq__59342_60177 = G__60192;
chunk__59343_60178 = G__60193;
count__59344_60179 = G__60194;
i__59345_60180 = G__60195;
continue;
} else {
var temp__5753__auto___60196 = cljs.core.seq(seq__59342_60177);
if(temp__5753__auto___60196){
var seq__59342_60197__$1 = temp__5753__auto___60196;
if(cljs.core.chunked_seq_QMARK_(seq__59342_60197__$1)){
var c__4679__auto___60198 = cljs.core.chunk_first(seq__59342_60197__$1);
var G__60199 = cljs.core.chunk_rest(seq__59342_60197__$1);
var G__60200 = c__4679__auto___60198;
var G__60201 = cljs.core.count(c__4679__auto___60198);
var G__60202 = (0);
seq__59342_60177 = G__60199;
chunk__59343_60178 = G__60200;
count__59344_60179 = G__60201;
i__59345_60180 = G__60202;
continue;
} else {
var vec__59378_60203 = cljs.core.first(seq__59342_60197__$1);
var card_id_60204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59378_60203,(0),null);
var map__59381_60205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59378_60203,(1),null);
var map__59381_60206__$1 = cljs.core.__destructure_map(map__59381_60205);
var node_60207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59381_60206__$1,new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134));
var refresh_60208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59381_60206__$1,new cljs.core.Keyword("nubank.workspaces.model","refresh","nubank.workspaces.model/refresh",-816174567));
try{if(cljs.core.truth_((function (){var and__4251__auto__ = check_changes_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return nubank.workspaces.ui.card_changed_QMARK_(card_id_60204);
} else {
return and__4251__auto__;
}
})())){
nubank.workspaces.ui.restart_card(card_id_60204);
} else {
if(cljs.core.truth_(refresh_60208)){
(refresh_60208.cljs$core$IFn$_invoke$arity$1 ? refresh_60208.cljs$core$IFn$_invoke$arity$1(node_60207) : refresh_60208.call(null,node_60207));
} else {
}
}
}catch (e59382){var e_60210 = e59382;
console.error("Error refreshing card",card_id_60204,e_60210);
}

var G__60211 = cljs.core.next(seq__59342_60197__$1);
var G__60212 = null;
var G__60213 = (0);
var G__60214 = (0);
seq__59342_60177 = G__60211;
chunk__59343_60178 = G__60212;
count__59344_60179 = G__60213;
i__59345_60180 = G__60214;
continue;
}
} else {
}
}
break;
}

var seq__59385_60215 = cljs.core.seq(cljs.core.deref(nubank.workspaces.ui.components_with_error));
var chunk__59386_60216 = null;
var count__59387_60217 = (0);
var i__59388_60218 = (0);
while(true){
if((i__59388_60218 < count__59387_60217)){
var comp_60219 = chunk__59386_60216.cljs$core$IIndexed$_nth$arity$2(null,i__59388_60218);
com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(comp_60219,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944),false], null));


var G__60222 = seq__59385_60215;
var G__60223 = chunk__59386_60216;
var G__60224 = count__59387_60217;
var G__60225 = (i__59388_60218 + (1));
seq__59385_60215 = G__60222;
chunk__59386_60216 = G__60223;
count__59387_60217 = G__60224;
i__59388_60218 = G__60225;
continue;
} else {
var temp__5753__auto___60228 = cljs.core.seq(seq__59385_60215);
if(temp__5753__auto___60228){
var seq__59385_60229__$1 = temp__5753__auto___60228;
if(cljs.core.chunked_seq_QMARK_(seq__59385_60229__$1)){
var c__4679__auto___60230 = cljs.core.chunk_first(seq__59385_60229__$1);
var G__60231 = cljs.core.chunk_rest(seq__59385_60229__$1);
var G__60232 = c__4679__auto___60230;
var G__60233 = cljs.core.count(c__4679__auto___60230);
var G__60234 = (0);
seq__59385_60215 = G__60231;
chunk__59386_60216 = G__60232;
count__59387_60217 = G__60233;
i__59388_60218 = G__60234;
continue;
} else {
var comp_60235 = cljs.core.first(seq__59385_60229__$1);
com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(comp_60235,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944),false], null));


var G__60236 = cljs.core.next(seq__59385_60229__$1);
var G__60237 = null;
var G__60238 = (0);
var G__60239 = (0);
seq__59385_60215 = G__60236;
chunk__59386_60216 = G__60237;
count__59387_60217 = G__60238;
i__59388_60218 = G__60239;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(nubank.workspaces.ui.components_with_error,cljs.core.PersistentHashSet.EMPTY);
}));

(nubank.workspaces.ui.refresh_cards.cljs$lang$maxFixedArity = 2);

nubank.workspaces.ui.active_workspace_cards = (function nubank$workspaces$ui$active_workspace_cards(app){
var temp__5751__auto__ = com.fulcrologic.fulcro.application.current_state.cljs$core$IFn$_invoke$arity$1(app);
if(cljs.core.truth_(temp__5751__auto__)){
var state = temp__5751__auto__;
var temp__5751__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814)], null));
if(cljs.core.truth_(temp__5751__auto____$1)){
var ref = temp__5751__auto____$1;
var card_ids = nubank.workspaces.ui.workspace_card_ids(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ref));
return cljs.core.select_keys(cljs.core.deref(nubank.workspaces.data.active_cards_STAR_),card_ids);
} else {
return null;
}
} else {
return null;
}
});
nubank.workspaces.ui.refresh_active_workspace_cards = (function nubank$workspaces$ui$refresh_active_workspace_cards(reconciler){
return nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.active_workspace_cards(reconciler));
});
nubank.workspaces.ui.refresh_active_cards = (function nubank$workspaces$ui$refresh_active_cards(){
return nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nubank.workspaces.data.active_cards_STAR_));
});
nubank.workspaces.ui.lookup_ref = (function nubank$workspaces$ui$lookup_ref(state,ref){
if(cljs.core.vector_QMARK_(ref)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ref);
} else {
return ref;
}
});
nubank.workspaces.ui.normalize_ws_cards = (function nubank$workspaces$ui$normalize_ws_cards(state,ws){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ws,new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701),(function (p1__59408_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.lookup_ref,state),p1__59408_SHARP_);
}));
});
nubank.workspaces.ui.create_workspace_STAR_ = (function nubank$workspaces$ui$create_workspace_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60245 = arguments.length;
var i__4865__auto___60246 = (0);
while(true){
if((i__4865__auto___60246 < len__4864__auto___60245)){
args__4870__auto__.push((arguments[i__4865__auto___60246]));

var G__60247 = (i__4865__auto___60246 + (1));
i__4865__auto___60246 = G__60247;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return nubank.workspaces.ui.create_workspace_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(nubank.workspaces.ui.create_workspace_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__59420,ws,args){
var map__59422 = p__59420;
var map__59422__$1 = cljs.core.__destructure_map(map__59422);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59422__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59422__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ws__$1 = (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.Workspace,ws) : com.fulcrologic.fulcro.components.get_initial_state.call(null,nubank.workspaces.ui.Workspace,ws));
cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_,app,nubank.workspaces.ui.Workspace,nubank.workspaces.ui.normalize_ws_cards(cljs.core.deref(state),ws__$1),new cljs.core.Keyword(null,"append","append",-291298229),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-root","nubank.workspaces.ui/workspace-root",695328612),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450)], null),args], 0));

return ws__$1;
}));

(nubank.workspaces.ui.create_workspace_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nubank.workspaces.ui.create_workspace_STAR_.cljs$lang$applyTo = (function (seq59412){
var G__59413 = cljs.core.first(seq59412);
var seq59412__$1 = cljs.core.next(seq59412);
var G__59414 = cljs.core.first(seq59412__$1);
var seq59412__$2 = cljs.core.next(seq59412__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59413,G__59414,seq59412__$2);
}));

nubank.workspaces.ui.save_local_workspace = (function nubank$workspaces$ui$save_local_workspace(p__59429){
var map__59430 = p__59429;
var map__59430__$1 = cljs.core.__destructure_map(map__59430);
var workspace = map__59430__$1;
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
nubank.workspaces.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([workspace_id], 0));

nubank.workspaces.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nubank.workspaces.ui","local-workspaces","nubank.workspaces.ui/local-workspaces",-1846378387),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([workspace_id], 0));

nubank.workspaces.lib.local_storage.tset_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id], null),cljs.core.select_keys(workspace,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716)], null)));

return workspace;
});
nubank.workspaces.ui.active_workspace_ref = (function nubank$workspaces$ui$active_workspace_ref(p__59434){
var map__59435 = p__59434;
var map__59435__$1 = cljs.core.__destructure_map(map__59435);
var env = map__59435__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59435__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814)], null));
if(cljs.core.truth_(temp__5751__auto__)){
var ref = temp__5751__auto__;
return ref;
} else {
var ws = nubank.workspaces.ui.create_workspace_STAR_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447)], null),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814)], null)], 0));
nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858).cljs$core$IFn$_invoke$arity$1(ws));

nubank.workspaces.ui.save_local_workspace(ws);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858).cljs$core$IFn$_invoke$arity$1(ws)], null);
}
});
nubank.workspaces.ui.map_values = (function nubank$workspaces$ui$map_values(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__59441){
var vec__59443 = p__59441;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59443,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59443,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
nubank.workspaces.ui.all_referenced_cards = (function nubank$workspaces$ui$all_referenced_cards(state){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (card_ids,ws_ref){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(card_ids,nubank.workspaces.ui.workspace_card_ids(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ws_ref)));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447)], null)));
});
nubank.workspaces.ui.disposed_unreferenced_cards = (function nubank$workspaces$ui$disposed_unreferenced_cards(state,card_ids){
var seq__59449 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(card_ids,nubank.workspaces.ui.all_referenced_cards(state)));
var chunk__59450 = null;
var count__59451 = (0);
var i__59452 = (0);
while(true){
if((i__59452 < count__59451)){
var unreferenced_card_id = chunk__59450.cljs$core$IIndexed$_nth$arity$2(null,i__59452);
nubank.workspaces.ui.dispose_card(unreferenced_card_id);


var G__60253 = seq__59449;
var G__60254 = chunk__59450;
var G__60255 = count__59451;
var G__60256 = (i__59452 + (1));
seq__59449 = G__60253;
chunk__59450 = G__60254;
count__59451 = G__60255;
i__59452 = G__60256;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59449);
if(temp__5753__auto__){
var seq__59449__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59449__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59449__$1);
var G__60257 = cljs.core.chunk_rest(seq__59449__$1);
var G__60258 = c__4679__auto__;
var G__60259 = cljs.core.count(c__4679__auto__);
var G__60260 = (0);
seq__59449 = G__60257;
chunk__59450 = G__60258;
count__59451 = G__60259;
i__59452 = G__60260;
continue;
} else {
var unreferenced_card_id = cljs.core.first(seq__59449__$1);
nubank.workspaces.ui.dispose_card(unreferenced_card_id);


var G__60261 = cljs.core.next(seq__59449__$1);
var G__60262 = null;
var G__60263 = (0);
var G__60264 = (0);
seq__59449 = G__60261;
chunk__59450 = G__60262;
count__59451 = G__60263;
i__59452 = G__60264;
continue;
}
} else {
return null;
}
}
break;
}
});
nubank.workspaces.ui.remove_workspace_card = (function nubank$workspaces$ui$remove_workspace_card(workspace,card_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(workspace,new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701),(function (cards){
return cljs.core.filterv((function (p1__59462_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__59462_SHARP_),card_id);
}),cards);
})),new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),(function (breakpoints){
return nubank.workspaces.ui.map_values((function (layouts){
return cljs.core.filterv((function (p1__59463_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__59463_SHARP_,"i"),card_id);
}),layouts);
}),breakpoints);
}));
});
/**
 * 
 */
nubank.workspaces.ui.remove_card_from_active_ns = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","remove-card-from-active-ns","nubank.workspaces.ui/remove-card-from-active-ns",-2013077344,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","remove-card-from-active-ns","nubank.workspaces.ui/remove-card-from-active-ns",-2013077344,null),(function (fulcro_mutation_env_symbol){
var map__59473 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__59473__$1 = cljs.core.__destructure_map(map__59473);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59473__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),(function nubank$workspaces$ui$refresh(_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701)], null);
}),new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__59475){
var map__59476 = p__59475;
var map__59476__$1 = cljs.core.__destructure_map(map__59476);
var env = map__59476__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59476__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__59477_60265 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59478_60266 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59478_60266);

try{var ws_ref_60267 = nubank.workspaces.ui.active_workspace_ref(env);
var current_ws_60268 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ws_ref_60267);
if(cljs.core.contains_QMARK_(nubank.workspaces.ui.workspace_card_ids(current_ws_60268),card_id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,ws_ref_60267,(function (p1__59470_SHARP_){
return nubank.workspaces.ui.remove_workspace_card(p1__59470_SHARP_,card_id);
}));

nubank.workspaces.ui.disposed_unreferenced_cards(cljs.core.deref(state),cljs.core.PersistentHashSet.createAsIfByAssoc([card_id]));
} else {
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59477_60265);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__59482 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59483 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59483);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59482);
}})], null);
}));

var options__48885__auto___60269 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$ui$build_raw_initial_state_STAR_(data){
return data;
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_white,new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 4px 9px 0 rgba(0,0,0,0.02)",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),nubank.workspaces.ui.core.card_border_radius,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),nubank.workspaces.ui.core.font_os12sb,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_geyser,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#ef0000",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".card",".card",1484105240),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null)], null),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var map__59497 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59497__$1 = cljs.core.__destructure_map(map__59497);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59497__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var node = nubank.workspaces.ui.goog$module$goog$object.get(this$,"cardNode");
try{nubank.workspaces.ui.render_card(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id,new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134),node,new cljs.core.Keyword("nubank.workspaces.model","component","nubank.workspaces.model/component",-1201359926),this$], null));

return this$.forceUpdate();
}catch (e59498){var e = e59498;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.ui.components_with_error,cljs.core.conj,this$);

console.error("Error mounting card",card_id,e);

return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944),true], null));
}}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_WorkspaceSoloCard(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__59502 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59502__$1 = cljs.core.__destructure_map(map__59502);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59502__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var map__59505 = nubank.workspaces.data.active_card(card_id);
var map__59505__$1 = cljs.core.__destructure_map(map__59505);
var render_toolbar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59505__$1,new cljs.core.Keyword("nubank.workspaces.model","render-toolbar","nubank.workspaces.model/render-toolbar",-1738138937));
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),(cljs.core.truth_(render_toolbar)?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),(render_toolbar.cljs$core$IFn$_invoke$arity$0 ? render_toolbar.cljs$core$IFn$_invoke$arity$0() : render_toolbar.call(null))], 0)):com.fulcrologic.fulcro_css.localized_dom.div()),(cljs.core.truth_(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944)))?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".error",".error",115475668),"Error rendering card, check console for details."], 0)):null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".card",".card",1484105240),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.model","node-props","nubank.workspaces.model/node-props",-69697539).cljs$core$IFn$_invoke$arity$1(nubank.workspaces.data.card_definition(card_id)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__59490_SHARP_){
return nubank.workspaces.ui.goog$module$goog$object.set(this$,"cardNode",p1__59490_SHARP_);
})], null)], 0))], 0))], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.WorkspaceSoloCard !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.WorkspaceSoloCard = (function nubank$workspaces$ui$WorkspaceSoloCard(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___60270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___60269,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___60270)){
var init_state__48888__auto___60271 = temp__5751__auto___60270;
(this__48887__auto__.state = (function (){var obj59511 = ({"fulcro$state":(function (){var G__59515 = this__48887__auto__;
var G__59516 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___60271.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___60271.cljs$core$IFn$_invoke$arity$2(G__59515,G__59516) : init_state__48888__auto___60271.call(null,G__59515,G__59516));
})()});
return obj59511;
})());
} else {
(this__48887__auto__.state = (function (){var obj59518 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj59518;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.WorkspaceSoloCard,new cljs.core.Keyword("nubank.workspaces.ui","WorkspaceSoloCard","nubank.workspaces.ui/WorkspaceSoloCard",-185454692),options__48885__auto___60269);
nubank.workspaces.ui.workspace_solo_card = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.WorkspaceSoloCard,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809)], null));

var options__48885__auto___60272 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$ui$build_raw_initial_state_STAR_(data){
return data;
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),new cljs.core.Keyword("nubank.workspaces.model","card-header-style","nubank.workspaces.model/card-header-style",534442797),new cljs.core.Keyword("nubank.workspaces.ui","show-source?","nubank.workspaces.ui/show-source?",1596348105),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-root","nubank.workspaces.ui/workspace-root",695328612),"singleton"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956)], null)])], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_white,new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 4px 9px 0 rgba(0,0,0,0.02)",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),nubank.workspaces.ui.core.card_border_radius,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cljs-workflow-static-workflow","$cljs-workflow-static-workflow",-448809644),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header",".header",-1761691025),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#ef0000",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header",".header",-1761691025),nubank.workspaces.ui.core.font_os12sb,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_mystic,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),[nubank.workspaces.ui.core.card_border_radius," ",nubank.workspaces.ui.core.card_border_radius," 0 0"].join(''),new cljs.core.Keyword(null,"color","color",1011675173),nubank.workspaces.ui.core.color_limed_spruce,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"grab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"-webkit-grab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"-moz-grab"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header-title",".header-title",719021241),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 10px",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".card-title",".card-title",1927235738),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".card-actions",".card-actions",-1000790231),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-auto-flow","grid-auto-flow",-1754873684),"column",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"5px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".close",".close",1636677024),nubank.workspaces.ui.core.close_icon_css], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".more-container",".more-container",-324805920),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".more",".more",196863026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".more",".more",196863026),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"right","right",-452581833),"0",new cljs.core.Keyword(null,"top","top",-1856271961),"100%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-10px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".more-actions",".more-actions",-54999811),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_mystic,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0 0 6px 6px",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 10px 10px",new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),"6px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_geyser,new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$react-draggable-dragging","$react-draggable-dragging",1270042297),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header",".header",-1761691025),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"grabbing"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"-webkit-grabbing"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"-moz-grabbing"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cljs-workflow-static-workflow","$cljs-workflow-static-workflow",-448809644),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".close",".close",1636677024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".card",".card",1484105240),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".source",".source",1541091664),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"80vw",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"80vh",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),nubank.workspaces.ui.core.card_border_radius,new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),nubank.workspaces.ui.core.box_shadow], null)], null)], null),new cljs.core.Keyword(null,"css-include","css-include",559023012),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nubank.workspaces.ui.highlight.Highlight,nubank.workspaces.ui.modal.Modal], null),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var map__59546 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59546__$1 = cljs.core.__destructure_map(map__59546);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59546__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var node = nubank.workspaces.ui.goog$module$goog$object.get(this$,"cardNode");
try{nubank.workspaces.ui.render_card(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id,new cljs.core.Keyword("nubank.workspaces.model","node","nubank.workspaces.model/node",-2144506134),node,new cljs.core.Keyword("nubank.workspaces.model","component","nubank.workspaces.model/component",-1201359926),this$], null));

return this$.forceUpdate();
}catch (e59548){var e = e59548;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.ui.components_with_error,cljs.core.conj,this$);

console.error("Error mounting card",card_id,e);

return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944),true], null));
}}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_WorkspaceCard(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__59552 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59552__$1 = cljs.core.__destructure_map(map__59552);
var props = map__59552__$1;
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59552__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var card_header_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59552__$1,new cljs.core.Keyword("nubank.workspaces.model","card-header-style","nubank.workspaces.model/card-header-style",534442797));
var show_source_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59552__$1,new cljs.core.Keyword("nubank.workspaces.ui","show-source?","nubank.workspaces.ui/show-source?",1596348105));
var map__59553 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__59553__$1 = cljs.core.__destructure_map(map__59553);
var export_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59553__$1,new cljs.core.Keyword("nubank.workspaces.ui","export-size","nubank.workspaces.ui/export-size",1661946281));
var open_solo_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59553__$1,new cljs.core.Keyword("nubank.workspaces.ui","open-solo-card","nubank.workspaces.ui/open-solo-card",-1371578732));
var map__59557 = nubank.workspaces.data.active_card(card_id);
var map__59557__$1 = cljs.core.__destructure_map(map__59557);
var render_toolbar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59557__$1,new cljs.core.Keyword("nubank.workspaces.model","render-toolbar","nubank.workspaces.model/render-toolbar",-1738138937));
var map__59558 = nubank.workspaces.data.card_definition(card_id);
var map__59558__$1 = cljs.core.__destructure_map(map__59558);
var card_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59558__$1,new cljs.core.Keyword("nubank.workspaces.model","card-form","nubank.workspaces.model/card-form",2147473));
var test_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59558__$1,new cljs.core.Keyword("nubank.workspaces.model","test?","nubank.workspaces.model/test?",993719827));
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".header$workspaces-cljs-card-drag-handle",".header$workspaces-cljs-card-drag-handle",1045999511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([card_header_style,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-root","nubank.workspaces.ui/workspace-root",695328612),"singleton"], null),new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956),new cljs.core.Keyword("nubank.workspaces.ui","hide-card-header?","nubank.workspaces.ui/hide-card-header?",-497463645)], null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null):null)], 0))], null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".header-title",".header-title",719021241),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".card-title",".card-title",1927235738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.str.cljs$core$IFn$_invoke$arity$1(card_id)], null),nubank.workspaces.ui.card_title(card_id)], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".card-actions",".card-actions",-1000790231),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".more-container",".more-container",-324805920),nubank.workspaces.ui.core.more_icon(cljs.core.PersistentArrayMap.EMPTY),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".more",".more",196863026),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".more-actions",".more-actions",-54999811),(cljs.core.truth_(card_form)?(function (){var G__59562 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-source?","nubank.workspaces.ui/show-source?",1596348105),true);
})], null);
var G__59563 = "Source";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__59562,G__59563) : nubank.workspaces.ui.core.button.call(null,G__59562,G__59563));
})():null),(function (){var G__59566 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var G__59569 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id], null);
return (open_solo_card.cljs$core$IFn$_invoke$arity$1 ? open_solo_card.cljs$core$IFn$_invoke$arity$1(G__59569) : open_solo_card.call(null,G__59569));
})], null);
var G__59567 = "Solo";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__59566,G__59567) : nubank.workspaces.ui.core.button.call(null,G__59566,G__59567));
})(),((cljs.core.not(test_QMARK_))?(function (){var G__59570 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),export_size], null);
var G__59571 = "Size";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__59570,G__59571) : nubank.workspaces.ui.core.button.call(null,G__59570,G__59571));
})():null),(function (){var G__59572 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return nubank.workspaces.ui.restart_card(card_id);
})], null);
var G__59573 = "Remount";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__59572,G__59573) : nubank.workspaces.ui.core.button.call(null,G__59572,G__59573));
})()], 0))], 0))], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".close",".close",1636677024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","remove-card-from-active-ns","nubank.workspaces.ui/remove-card-from-active-ns",-2013077344,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),null,(1),null)),(new cljs.core.List(null,card_id,null,(1),null)))))),null,(1),null)))))], null));
})], null),"\u00D7"], 0))], 0))], 0)),(cljs.core.truth_(render_toolbar)?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),(render_toolbar.cljs$core$IFn$_invoke$arity$0 ? render_toolbar.cljs$core$IFn$_invoke$arity$0() : render_toolbar.call(null))], 0)):null)], 0)),(cljs.core.truth_(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944)))?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".error",".error",115475668),"Error rendering card, check console for details."], 0)):null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".card",".card",1484105240),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.model","node-props","nubank.workspaces.model/node-props",-69697539).cljs$core$IFn$_invoke$arity$1(nubank.workspaces.data.card_definition(card_id)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__59525_SHARP_){
return nubank.workspaces.ui.goog$module$goog$object.set(this$,"cardNode",p1__59525_SHARP_);
})], null)], 0))], 0)),(cljs.core.truth_(show_source_QMARK_)?(function (){var G__59580 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.modal","on-close","nubank.workspaces.ui.modal/on-close",1602537550),(function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-source?","nubank.workspaces.ui/show-source?",1596348105),false);
})], null);
var G__59581 = com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".source",".source",1541091664),(function (){var G__59582 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.highlight","source","nubank.workspaces.ui.highlight/source",161213844),(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59585_60285 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59586_60286 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59587_60287 = true;
var _STAR_print_fn_STAR__temp_val__59588_60288 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59587_60287);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59588_60288);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(card_form);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59586_60286);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59585_60285);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()], null);
return (nubank.workspaces.ui.highlight.highlight.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.highlight.highlight.cljs$core$IFn$_invoke$arity$1(G__59582) : nubank.workspaces.ui.highlight.highlight.call(null,G__59582));
})()], 0));
return (nubank.workspaces.ui.modal.modal.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.modal.modal.cljs$core$IFn$_invoke$arity$2(G__59580,G__59581) : nubank.workspaces.ui.modal.modal.call(null,G__59580,G__59581));
})():null)], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.WorkspaceCard !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.WorkspaceCard = (function nubank$workspaces$ui$WorkspaceCard(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___60290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___60272,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___60290)){
var init_state__48888__auto___60292 = temp__5751__auto___60290;
(this__48887__auto__.state = (function (){var obj59595 = ({"fulcro$state":(function (){var G__59597 = this__48887__auto__;
var G__59598 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___60292.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___60292.cljs$core$IFn$_invoke$arity$2(G__59597,G__59598) : init_state__48888__auto___60292.call(null,G__59597,G__59598));
})()});
return obj59595;
})());
} else {
(this__48887__auto__.state = (function (){var obj59601 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj59601;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.WorkspaceCard,new cljs.core.Keyword("nubank.workspaces.ui","WorkspaceCard","nubank.workspaces.ui/WorkspaceCard",1363306272),options__48885__auto___60272);
nubank.workspaces.ui.workspace_card = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.WorkspaceCard,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809)], null));
nubank.workspaces.ui.block = (function nubank$workspaces$ui$block(w,h,x,y){
return new cljs.core.PersistentArrayMap(null, 4, ["w",w,"h",h,"x",x,"y",y], null);
});
nubank.workspaces.ui.build_grid = (function nubank$workspaces$ui$build_grid(items){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (grid,p__59608){
var map__59609 = p__59608;
var map__59609__$1 = cljs.core.__destructure_map(map__59609);
var item = map__59609__$1;
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59609__$1,"w");
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59609__$1,"h");
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59609__$1,"x");
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59609__$1,"y");
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(grid,(function (){var iter__4652__auto__ = (function nubank$workspaces$ui$build_grid_$_iter__59613(s__59614){
return (new cljs.core.LazySeq(null,(function (){
var s__59614__$1 = s__59614;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59614__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x_SINGLEQUOTE_ = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__59614__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__59609,map__59609__$1,item,w,h,x,y){
return (function nubank$workspaces$ui$build_grid_$_iter__59613_$_iter__59615(s__59616){
return (new cljs.core.LazySeq(null,((function (s__59614__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__59609,map__59609__$1,item,w,h,x,y){
return (function (){
var s__59616__$1 = s__59616;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__59616__$1);
if(temp__5753__auto____$1){
var s__59616__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59616__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59616__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59618 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59617 = (0);
while(true){
if((i__59617 < size__4651__auto__)){
var y_SINGLEQUOTE_ = cljs.core._nth(c__4650__auto__,i__59617);
cljs.core.chunk_append(b__59618,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_SINGLEQUOTE_ + x),(y_SINGLEQUOTE_ + y)], null),item], null));

var G__60295 = (i__59617 + (1));
i__59617 = G__60295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59618),nubank$workspaces$ui$build_grid_$_iter__59613_$_iter__59615(cljs.core.chunk_rest(s__59616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59618),null);
}
} else {
var y_SINGLEQUOTE_ = cljs.core.first(s__59616__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_SINGLEQUOTE_ + x),(y_SINGLEQUOTE_ + y)], null),item], null),nubank$workspaces$ui$build_grid_$_iter__59613_$_iter__59615(cljs.core.rest(s__59616__$2)));
}
} else {
return null;
}
break;
}
});})(s__59614__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__59609,map__59609__$1,item,w,h,x,y))
,null,null));
});})(s__59614__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__59609,map__59609__$1,item,w,h,x,y))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(h)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,nubank$workspaces$ui$build_grid_$_iter__59613(cljs.core.rest(s__59614__$1)));
} else {
var G__60297 = cljs.core.rest(s__59614__$1);
s__59614__$1 = G__60297;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(w));
})());
}),cljs.core.PersistentArrayMap.EMPTY,items);
});
nubank.workspaces.ui.fits_in_QMARK_ = (function nubank$workspaces$ui$fits_in_QMARK_(p__59635,grid){
var map__59636 = p__59635;
var map__59636__$1 = cljs.core.__destructure_map(map__59636);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59636__$1,"w");
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59636__$1,"h");
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59636__$1,"x");
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59636__$1,"y");
var coords = (function (){var iter__4652__auto__ = (function nubank$workspaces$ui$fits_in_QMARK__$_iter__59637(s__59638){
return (new cljs.core.LazySeq(null,(function (){
var s__59638__$1 = s__59638;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59638__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x_SINGLEQUOTE_ = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__59638__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__59636,map__59636__$1,w,h,x,y){
return (function nubank$workspaces$ui$fits_in_QMARK__$_iter__59637_$_iter__59639(s__59640){
return (new cljs.core.LazySeq(null,((function (s__59638__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__59636,map__59636__$1,w,h,x,y){
return (function (){
var s__59640__$1 = s__59640;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__59640__$1);
if(temp__5753__auto____$1){
var s__59640__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59640__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59640__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59642 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59641 = (0);
while(true){
if((i__59641 < size__4651__auto__)){
var y_SINGLEQUOTE_ = cljs.core._nth(c__4650__auto__,i__59641);
cljs.core.chunk_append(b__59642,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_SINGLEQUOTE_ + x),(y_SINGLEQUOTE_ + y)], null));

var G__60300 = (i__59641 + (1));
i__59641 = G__60300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59642),nubank$workspaces$ui$fits_in_QMARK__$_iter__59637_$_iter__59639(cljs.core.chunk_rest(s__59640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59642),null);
}
} else {
var y_SINGLEQUOTE_ = cljs.core.first(s__59640__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_SINGLEQUOTE_ + x),(y_SINGLEQUOTE_ + y)], null),nubank$workspaces$ui$fits_in_QMARK__$_iter__59637_$_iter__59639(cljs.core.rest(s__59640__$2)));
}
} else {
return null;
}
break;
}
});})(s__59638__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__59636,map__59636__$1,w,h,x,y))
,null,null));
});})(s__59638__$1,x_SINGLEQUOTE_,xs__6308__auto__,temp__5753__auto__,map__59636,map__59636__$1,w,h,x,y))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(h)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,nubank$workspaces$ui$fits_in_QMARK__$_iter__59637(cljs.core.rest(s__59638__$1)));
} else {
var G__60303 = cljs.core.rest(s__59638__$1);
s__59638__$1 = G__60303;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(w));
})();
return cljs.core.every_QMARK_((function (p1__59631_SHARP_){
return (!(cljs.core.contains_QMARK_(grid,p1__59631_SHARP_)));
}),coords);
});
nubank.workspaces.ui.smart_item_position = (function nubank$workspaces$ui$smart_item_position(columns,p__59658,items){
var map__59659 = p__59658;
var map__59659__$1 = cljs.core.__destructure_map(map__59659);
var new_item = map__59659__$1;
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59659__$1,"w");
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59659__$1,"h");
var grid = nubank.workspaces.ui.build_grid(items);
var w__$1 = (function (){var x__4339__auto__ = w;
var y__4340__auto__ = columns;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var x = (0);
var y = (0);
while(true){
if(((x + w__$1) > columns)){
var G__60304 = (0);
var G__60305 = (y + (1));
x = G__60304;
y = G__60305;
continue;
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
if(cljs.core.truth_(temp__5751__auto__)){
var block = temp__5751__auto__;
var G__60306 = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,"x") + cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,"w"));
var G__60307 = y;
x = G__60306;
y = G__60307;
continue;
} else {
if(nubank.workspaces.ui.fits_in_QMARK_(nubank.workspaces.ui.block(w__$1,h,x,y),grid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new_item,"x",x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["y",y,"w",w__$1], 0));
} else {
var G__60308 = (x + (1));
var G__60309 = y;
x = G__60308;
y = G__60309;
continue;
}
}
}
break;
}
});
/**
 * 
 */
nubank.workspaces.ui.pick_card_to_namespace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","pick-card-to-namespace","nubank.workspaces.ui/pick-card-to-namespace",1745669749,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","pick-card-to-namespace","nubank.workspaces.ui/pick-card-to-namespace",1745669749,null),(function (fulcro_mutation_env_symbol){
var map__59672 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__59672__$1 = cljs.core.__destructure_map(map__59672);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59672__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__59673){
var map__59674 = p__59673;
var map__59674__$1 = cljs.core.__destructure_map(map__59674);
var env = map__59674__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59674__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59674__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__59678_60310 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59679_60311 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59679_60311);

try{var ws_ref_60312 = nubank.workspaces.ui.active_workspace_ref(env);
var current_ws_60313 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ws_ref_60312);
var card_60314 = nubank.workspaces.data.card_definition(card_id);
if(cljs.core.truth_(new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950).cljs$core$IFn$_invoke$arity$1(current_ws_60313))){
console.warn("Can't add card to static workspace, please duplicate the workspace to add cards.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cljs.core.first(ws_ref_60312))){
console.warn("Can't add card to solo card, please switch a local workspace.");
} else {
if(cljs.core.contains_QMARK_(nubank.workspaces.ui.workspace_card_ids(current_ws_60313),card_id)){
} else {
com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,nubank.workspaces.ui.WorkspaceCard,(function (){var G__59683 = nubank.workspaces.ui.WorkspaceCard;
var G__59684 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__59683,G__59684) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__59683,G__59684));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws_ref_60312,new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701))], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ws_ref_60312,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),(function (layouts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (l,p__59685){
var map__59686 = p__59685;
var map__59686__$1 = cljs.core.__destructure_map(map__59686);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59686__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59686__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(l,id,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),nubank.workspaces.ui.smart_item_position(cols,new cljs.core.PersistentArrayMap(null, 6, ["i",card_id,"w",(function (){var or__4253__auto__ = new cljs.core.Keyword("nubank.workspaces.model","card-width","nubank.workspaces.model/card-width",-1929280730).cljs$core$IFn$_invoke$arity$1(card_60314);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (2);
}
})(),"h",(function (){var or__4253__auto__ = new cljs.core.Keyword("nubank.workspaces.model","card-height","nubank.workspaces.model/card-height",1579539064).cljs$core$IFn$_invoke$arity$1(card_60314);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (4);
}
})(),"x",(0),"y",(100),"minH",(2)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$3(l,id,cljs.core.PersistentVector.EMPTY)));
}),layouts,nubank.workspaces.ui.grid_layout.breakpoints);
})], 0));
}

}
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59678_60310);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__59693 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59694 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59694);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59693);
}})], null);
}));
nubank.workspaces.ui.add_card = (function nubank$workspaces$ui$add_card(this$,card_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","pick-card-to-namespace","nubank.workspaces.ui/pick-card-to-namespace",1745669749,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),null,(1),null)),(new cljs.core.List(null,card_id,null,(1),null)))))),null,(1),null)))))], null));
});
/**
 * 
 */
nubank.workspaces.ui.open_solo_workspace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","open-solo-workspace","nubank.workspaces.ui/open-solo-workspace",-1902644014,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","open-solo-workspace","nubank.workspaces.ui/open-solo-workspace",-1902644014,null),(function (fulcro_mutation_env_symbol){
var map__59704 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__59704__$1 = cljs.core.__destructure_map(map__59704);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59704__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__59707){
var map__59709 = p__59707;
var map__59709__$1 = cljs.core.__destructure_map(map__59709);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59709__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59709__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__59710_60315 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59711_60316 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59711_60316);

try{var ws_ident_60317 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,com.fulcrologic.fulcro.algorithms.data_targeting.integrate_ident_STAR_,ws_ident_60317,new cljs.core.Keyword(null,"append","append",-291298229),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447)),new cljs.core.Keyword(null,"replace","replace",-786587770),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814))], 0));

nubank.workspaces.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws_ident_60317], 0));

nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),ws_ident_60317);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59710_60315);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__59715 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59716 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59716);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59715);
}})], null);
}));
nubank.workspaces.ui.add_card_solo = (function nubank$workspaces$ui$add_card_solo(this$,card_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","open-solo-workspace","nubank.workspaces.ui/open-solo-workspace",-1902644014,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id], null),null,(1),null)))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton"], null)], null));
});
nubank.workspaces.ui.normalize_layout = (function nubank$workspaces$ui$normalize_layout(layout){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__59723_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__59727){
var vec__59728 = p__59727;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59728,(1),null);
return v;
})),p1__59723_SHARP_),"i",cljs.core.symbol);
}),layout);
});
/**
 * 
 */
nubank.workspaces.ui.normalize_sizes = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","normalize-sizes","nubank.workspaces.ui/normalize-sizes",1530582337,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","normalize-sizes","nubank.workspaces.ui/normalize-sizes",1530582337,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__59739){
var map__59740 = p__59739;
var map__59740__$1 = cljs.core.__destructure_map(map__59740);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59740__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59740__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__59741_60321 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59742_60322 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59742_60322);

try{var ws_60323 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var items_60324 = nubank.workspaces.ui.map_values(cljs.core.first,cljs.core.group_by((function (p1__59734_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__59734_SHARP_,"i");
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716).cljs$core$IFn$_invoke$arity$1(ws_60323),new cljs.core.Keyword("nubank.workspaces.ui","breakpoint","nubank.workspaces.ui/breakpoint",-1694045841).cljs$core$IFn$_invoke$arity$1(ws_60323))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),(function (breaks){
return nubank.workspaces.ui.map_values((function (layouts){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__59735_SHARP_){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_60324,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__59735_SHARP_,"i"));
if(cljs.core.truth_(temp__5751__auto__)){
var map__59746 = temp__5751__auto__;
var map__59746__$1 = cljs.core.__destructure_map(map__59746);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59746__$1,"w");
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59746__$1,"h");
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59746__$1,"x");
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59746__$1,"y");
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__59735_SHARP_,"w",w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["h",h,"x",x,"y",y], 0));
} else {
return p1__59735_SHARP_;
}
}),layouts);
}),breaks);
})], 0));

nubank.workspaces.ui.save_local_workspace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59741_60321);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__59750 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59751 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59751);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59750);
}})], null);
}));
/**
 * 
 */
nubank.workspaces.ui.update_workspace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","update-workspace","nubank.workspaces.ui/update-workspace",-2145331844,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","update-workspace","nubank.workspaces.ui/update-workspace",-2145331844,null),(function (fulcro_mutation_env_symbol){
var map__59757 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__59757__$1 = cljs.core.__destructure_map(map__59757);
var ws = map__59757__$1;
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59757__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_static_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59757__$1,new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),(function nubank$workspaces$ui$refresh(_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450)], null);
}),new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__59759){
var map__59760 = p__59759;
var map__59760__$1 = cljs.core.__destructure_map(map__59760);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59760__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__59761_60331 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59762_60332 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59762_60332);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws], 0));

if(cljs.core.not(workspace_static_QMARK_)){
nubank.workspaces.ui.save_local_workspace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id], null)));
} else {
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59761_60331);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__59766 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59767 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59767);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59766);
}})], null);
}));
nubank.workspaces.ui.ws_data__GT_ident_map = (function nubank$workspaces$ui$ws_data__GT_ident_map(x){
if(cljs.core.vector_QMARK_(x)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,x);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),x], null);
}
});
nubank.workspaces.ui.workspace_id_QMARK_ = (function nubank$workspaces$ui$workspace_id_QMARK_(x){
return ((cljs.core.uuid_QMARK_(x)) || ((x instanceof cljs.core.Symbol)));
});
nubank.workspaces.ui.workspace_ident = (function nubank$workspaces$ui$workspace_ident(p__59777){
var map__59778 = p__59777;
var map__59778__$1 = cljs.core.__destructure_map(map__59778);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59778__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59778__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
if(nubank.workspaces.ui.workspace_id_QMARK_(workspace_id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id], null);
} else {
if(cljs.core.truth_(card_id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),card_id], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invalid","invalid",412869516),"ident"], null);

}
}
});
/**
 * 
 */
nubank.workspaces.ui.close_workspace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","close-workspace","nubank.workspaces.ui/close-workspace",-1735247601,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","close-workspace","nubank.workspaces.ui/close-workspace",-1735247601,null),(function (fulcro_mutation_env_symbol){
var map__59783 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__59783__$1 = cljs.core.__destructure_map(map__59783);
var ws_data = map__59783__$1;
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59783__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__59784){
var map__59786 = p__59784;
var map__59786__$1 = cljs.core.__destructure_map(map__59786);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59786__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__59789_60334 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59790_60335 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59790_60335);

try{var ws_ref_60336 = nubank.workspaces.ui.workspace_ident(ws_data);
var ws_60337 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ws_ref_60336);
var card_ids_60338 = nubank.workspaces.ui.workspace_card_ids(ws_60337);
var tabs_ref_60339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton"], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,tabs_ref_60339,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),(function (p1__59779_SHARP_){
return cljs.core.filterv((function (x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,ws_ref_60336);
}),p1__59779_SHARP_);
})], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tabs_ref_60339,new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814))),ws_ref_60336)){
var active_ref_60340 = cljs.core.first(new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),tabs_ref_60339)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,tabs_ref_60339,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),cljs.core.first(new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),tabs_ref_60339)))], 0));

nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),active_ref_60340);
} else {
}

nubank.workspaces.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([workspace_id,ws_ref_60336], 0));

nubank.workspaces.ui.disposed_unreferenced_cards(cljs.core.deref(state),card_ids_60338);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59789_60334);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__59796 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59797 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59797);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59796);
}})], null);
}));
/**
 * 
 */
nubank.workspaces.ui.remove_workspace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","remove-workspace","nubank.workspaces.ui/remove-workspace",-1845546964,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","remove-workspace","nubank.workspaces.ui/remove-workspace",-1845546964,null),(function (fulcro_mutation_env_symbol){
var map__59803 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__59803__$1 = cljs.core.__destructure_map(map__59803);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59803__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),(function nubank$workspaces$ui$refresh(_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450)], null);
}),new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__59806){
var map__59807 = p__59806;
var map__59807__$1 = cljs.core.__destructure_map(map__59807);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59807__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__59809_60343 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59810_60344 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59810_60344);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-root","nubank.workspaces.ui/workspace-root",695328612),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450)], null),(function (p1__59799_SHARP_){
return cljs.core.filterv((function (x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(x),workspace_id);
}),p1__59799_SHARP_);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([workspace_id], 0));

nubank.workspaces.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nubank.workspaces.ui","local-workspaces","nubank.workspaces.ui/local-workspaces",-1846378387),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([workspace_id], 0));

nubank.workspaces.lib.local_storage.remove_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id], null));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59809_60343);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__59814 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59815 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59815);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59814);
}})], null);
}));
/**
 * 
 */
nubank.workspaces.ui.create_workspace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","create-workspace","nubank.workspaces.ui/create-workspace",-404659908,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","create-workspace","nubank.workspaces.ui/create-workspace",-404659908,null),(function (fulcro_mutation_env_symbol){
var ws = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__59819){
var map__59820 = p__59819;
var map__59820__$1 = cljs.core.__destructure_map(map__59820);
var env = map__59820__$1;
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59820__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__59823_60345 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59824_60346 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59824_60346);

try{var map__59826_60347 = nubank.workspaces.ui.save_local_workspace(nubank.workspaces.ui.create_workspace_STAR_.cljs$core$IFn$_invoke$arity$variadic(env,(function (){var or__4253__auto__ = ws;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447)),new cljs.core.Keyword(null,"replace","replace",-786587770),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814))], 0)));
var map__59826_60348__$1 = cljs.core.__destructure_map(map__59826_60347);
var workspace_id_60349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59826_60348__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),workspace_id_60349);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59823_60345);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__59830 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59831 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59831);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59830);
}})], null);
}));
/**
 * 
 */
nubank.workspaces.ui.copy_breakpoint_layout = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","copy-breakpoint-layout","nubank.workspaces.ui/copy-breakpoint-layout",1066150982,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","copy-breakpoint-layout","nubank.workspaces.ui/copy-breakpoint-layout",1066150982,null),(function (fulcro_mutation_env_symbol){
var map__59835 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__59835__$1 = cljs.core.__destructure_map(map__59835);
var source_breakpoint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59835__$1,new cljs.core.Keyword("nubank.workspaces.ui","source-breakpoint","nubank.workspaces.ui/source-breakpoint",1683194315));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__59836){
var map__59837 = p__59836;
var map__59837__$1 = cljs.core.__destructure_map(map__59837);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59837__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59837__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__59840_60350 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59841_60351 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59841_60351);

try{var map__59843_60352 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__59843_60353__$1 = cljs.core.__destructure_map(map__59843_60352);
var breakpoint_60354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59843_60353__$1,new cljs.core.Keyword("nubank.workspaces.ui","breakpoint","nubank.workspaces.ui/breakpoint",-1694045841));
var layouts_60355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59843_60353__$1,new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),breakpoint_60354], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(layouts_60355,source_breakpoint)], 0));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59840_60350);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__59844 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__59845 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__59845);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__59844);
}})], null);
}));
nubank.workspaces.ui.export_card_size = (function nubank$workspaces$ui$export_card_size(this$,card_id){
var map__59852 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59852__$1 = cljs.core.__destructure_map(map__59852);
var layouts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59852__$1,new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716));
var breakpoint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59852__$1,new cljs.core.Keyword("nubank.workspaces.ui","breakpoint","nubank.workspaces.ui/breakpoint",-1694045841));
var map__59853 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59849_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(card_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__59849_SHARP_,"i"));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(layouts,breakpoint)));
var map__59853__$1 = cljs.core.__destructure_map(map__59853);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59853__$1,"w");
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59853__$1,"h");
return console.log(["{::wsm/card-width ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w)," ::wsm/card-height ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"}"].join(''));
});

var options__48885__auto___60356 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$ui$build_raw_initial_state_STAR_(p__59865){
var map__59866 = p__59865;
var map__59866__$1 = cljs.core.__destructure_map(map__59866);
var ws = map__59866__$1;
var layouts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59866__$1,new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59866__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59866__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var layouts__$1 = (function (){var or__4253__auto__ = layouts;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),(function (){var or__4253__auto__ = workspace_id;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.random_uuid();
}
})(),new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),(function (){var or__4253__auto__ = workspace_title;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "new workspace";
}
})(),new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701),(function (){var or__4253__auto__ = (function (){var G__59870 = layouts__$1;
var G__59870__$1 = (((G__59870 == null))?null:cljs.core.first(G__59870));
var G__59870__$2 = (((G__59870__$1 == null))?null:cljs.core.val(G__59870__$1));
if((G__59870__$2 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__59858_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__59858_SHARP_,"i")],null));
}),G__59870__$2);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),layouts__$1,new cljs.core.Keyword("nubank.workspaces.ui","breakpoint","nubank.workspaces.ui/breakpoint",-1694045841),""], null)], 0));
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),new cljs.core.Keyword("nubank.workspaces.ui","breakpoint","nubank.workspaces.ui/breakpoint",-1694045841),new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspaceCard)], null)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".grid",".grid",1505444140),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"hidden"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".tools",".tools",-438409224),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_white,new cljs.core.Keyword(null,"color","color",1011675173),nubank.workspaces.ui.core.color_limed_spruce,new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 9px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".breakpoint",".breakpoint",790298917),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null)], null),new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733),(function (this$,error,info){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.ui.components_with_error,cljs.core.conj,this$);

return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944),true], null));
}),new cljs.core.Keyword(null,"css-include","css-include",559023012),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nubank.workspaces.ui.grid_layout.GridLayout], null),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
return requestAnimationFrame((function (){
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render?","render?",-1838581524),true], null));
}));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_Workspace(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__59880 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59880__$1 = cljs.core.__destructure_map(map__59880);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59880__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59880__$1,new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701));
var layouts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59880__$1,new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716));
var breakpoint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59880__$1,new cljs.core.Keyword("nubank.workspaces.ui","breakpoint","nubank.workspaces.ui/breakpoint",-1694045841));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59880__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
var workspace_static_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59880__$1,new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950));
var map__59881 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__59881__$1 = cljs.core.__destructure_map(map__59881);
var open_solo_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59881__$1,new cljs.core.Keyword("nubank.workspaces.ui","open-solo-card","nubank.workspaces.ui/open-solo-card",-1371578732));
if(cljs.core.truth_(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944)))){
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Some error leaked to workspace level (ugh...), please report this and check console for details."], 0));
} else {
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container$workspaces-workspace-container",".container$workspaces-workspace-container",-1077330955),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".tools",".tools",-438409224),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".breakpoint",".breakpoint",790298917),cljs.core.str.cljs$core$IFn$_invoke$arity$1(breakpoint)], 0)),((cljs.core.not(workspace_static_QMARK_))?com.fulcrologic.fulcro_css.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"-",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (e){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","copy-breakpoint-layout","nubank.workspaces.ui/copy-breakpoint-layout",1066150982,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","source-breakpoint","nubank.workspaces.ui/source-breakpoint",1683194315),e.target.value], null),null,(1),null)))))], null));

return nubank.workspaces.ui.goog$module$goog$object.set(e.target,"selectedIndex",(0));
})], null),com.fulcrologic.fulcro_css.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"-"], null),"Copy layout"], 0)),(function (){var iter__4652__auto__ = (function nubank$workspaces$ui$render_Workspace_$_iter__59886(s__59887){
return (new cljs.core.LazySeq(null,(function (){
var s__59887__$1 = s__59887;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59887__$1);
if(temp__5753__auto__){
var s__59887__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59887__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59887__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59889 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59888 = (0);
while(true){
if((i__59888 < size__4651__auto__)){
var map__59894 = cljs.core._nth(c__4650__auto__,i__59888);
var map__59894__$1 = cljs.core.__destructure_map(map__59894);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59894__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append(b__59889,com.fulcrologic.fulcro_css.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"value","value",305978217),id], null),id], 0)));

var G__60373 = (i__59888 + (1));
i__59888 = G__60373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59889),nubank$workspaces$ui$render_Workspace_$_iter__59886(cljs.core.chunk_rest(s__59887__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59889),null);
}
} else {
var map__59896 = cljs.core.first(s__59887__$2);
var map__59896__$1 = cljs.core.__destructure_map(map__59896);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59896__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"value","value",305978217),id], null),id], 0)),nubank$workspaces$ui$render_Workspace_$_iter__59886(cljs.core.rest(s__59887__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(nubank.workspaces.ui.grid_layout.breakpoints);
})()], 0)):null),(function (){var G__59900 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return nubank.workspaces.ui.refresh_cards.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.active_workspace_cards(com.fulcrologic.fulcro.components.any__GT_app(this$)),false);
})], null);
var G__59901 = "Refresh cards";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__59900,G__59901) : nubank.workspaces.ui.core.button.call(null,G__59900,G__59901));
})(),(function (){var G__59902 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components.any__GT_app(this$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","create-workspace","nubank.workspaces.ui/create-workspace",-404659908,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_title)," copy"].join(''),new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),layouts], null),null,(1),null)))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton"], null)], null));
})], null);
var G__59903 = "Duplicate";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__59902,G__59903) : nubank.workspaces.ui.core.button.call(null,G__59902,G__59903));
})(),((cljs.core.not(workspace_static_QMARK_))?(function (){var G__59907 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","normalize-sizes","nubank.workspaces.ui/normalize-sizes",1530582337,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null));
})], null);
var G__59908 = "Unify layouts";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__59907,G__59908) : nubank.workspaces.ui.core.button.call(null,G__59907,G__59908));
})():null),((cljs.core.not(workspace_static_QMARK_))?(function (){var G__59909 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return console.log((function (){var writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cognitect.transit.write(writer,layouts)], 0));
})());
})], null);
var G__59910 = "Export";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__59909,G__59910) : nubank.workspaces.ui.core.button.call(null,G__59909,G__59910));
})():null),((cljs.core.not(workspace_static_QMARK_))?(function (){var G__59914 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
if(cljs.core.truth_(confirm("Delete workspace?"))){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","close-workspace","nubank.workspaces.ui/close-workspace",-1735247601,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));

return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","remove-workspace","nubank.workspaces.ui/remove-workspace",-1845546964,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));
} else {
return null;
}
})], null);
var G__59915 = "Delete";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__59914,G__59915) : nubank.workspaces.ui.core.button.call(null,G__59914,G__59915));
})():null)], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".grid",".grid",1505444140),(cljs.core.truth_(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render?","render?",-1838581524)))?(function (){var G__59919 = (function (){var G__59921 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"className","className",-1983287057),["layout ",(cljs.core.truth_(workspace_static_QMARK_)?"cljs-workflow-static-workflow":null)].join(''),new cljs.core.Keyword(null,"rowHeight","rowHeight",1730581244),(30),new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"breakpoint","breakpoint",1183378440))),nubank.workspaces.ui.grid_layout.breakpoints),new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cols","cols",-1914801295))),nubank.workspaces.ui.grid_layout.breakpoints),new cljs.core.Keyword(null,"layouts","layouts",11991539),layouts,new cljs.core.Keyword(null,"draggableHandle","draggableHandle",1358445442),".workspaces-cljs-card-drag-handle",new cljs.core.Keyword(null,"onBreakpointChange","onBreakpointChange",1104296229),(function (bp,_){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","breakpoint","nubank.workspaces.ui/breakpoint",-1694045841),bp);
}),new cljs.core.Keyword(null,"onLayoutChange","onLayoutChange",-320596147),(function (_,layouts__$1){
var layouts_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__59925){
var vec__59928 = p__59925;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59928,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59928,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nubank.workspaces.ui.normalize_layout(v)], null);
})),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(layouts__$1));
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","update-workspace","nubank.workspaces.ui/update-workspace",-2145331844,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id,new cljs.core.Keyword("nubank.workspaces.ui","layouts","nubank.workspaces.ui/layouts",1429280716),layouts_SINGLEQUOTE_], null),null,(1),null)))))], null));
})], null);
if(cljs.core.truth_(workspace_static_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__59921,new cljs.core.Keyword(null,"isDraggable","isDraggable",-181233715),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"isResizable","isResizable",1591995984),false,new cljs.core.Keyword(null,"onLayoutChange","onLayoutChange",-320596147),(function (_,___$1){
return null;
})], 0));
} else {
return G__59921;
}
})();
var G__59920 = (function (){var iter__4652__auto__ = (function nubank$workspaces$ui$render_Workspace_$_iter__59934(s__59935){
return (new cljs.core.LazySeq(null,(function (){
var s__59935__$1 = s__59935;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59935__$1);
if(temp__5753__auto__){
var s__59935__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59935__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59935__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59937 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59936 = (0);
while(true){
if((i__59936 < size__4651__auto__)){
var map__59942 = cljs.core._nth(c__4650__auto__,i__59936);
var map__59942__$1 = cljs.core.__destructure_map(map__59942);
var card = map__59942__$1;
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59942__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
if(cljs.core.truth_(card_id)){
cljs.core.chunk_append(b__59937,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(card_id)], null),(function (){var G__59943 = (function (){var G__59944 = card;
var G__59945 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui","export-size","nubank.workspaces.ui/export-size",1661946281),((function (i__59936,s__59935__$1,G__59944,map__59942,map__59942__$1,card,card_id,c__4650__auto__,size__4651__auto__,b__59937,s__59935__$2,temp__5753__auto__,G__59919,map__59880,map__59880__$1,workspace_id,cards,layouts,breakpoint,workspace_title,workspace_static_QMARK_,map__59881,map__59881__$1,open_solo_card){
return (function (){
return nubank.workspaces.ui.export_card_size(this$,card_id);
});})(i__59936,s__59935__$1,G__59944,map__59942,map__59942__$1,card,card_id,c__4650__auto__,size__4651__auto__,b__59937,s__59935__$2,temp__5753__auto__,G__59919,map__59880,map__59880__$1,workspace_id,cards,layouts,breakpoint,workspace_title,workspace_static_QMARK_,map__59881,map__59881__$1,open_solo_card))
,new cljs.core.Keyword("nubank.workspaces.ui","open-solo-card","nubank.workspaces.ui/open-solo-card",-1371578732),open_solo_card], null);
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__59944,G__59945) : com.fulcrologic.fulcro.components.computed.call(null,G__59944,G__59945));
})();
return (nubank.workspaces.ui.workspace_card.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.workspace_card.cljs$core$IFn$_invoke$arity$1(G__59943) : nubank.workspaces.ui.workspace_card.call(null,G__59943));
})()], 0)));

var G__60392 = (i__59936 + (1));
i__59936 = G__60392;
continue;
} else {
var G__60393 = (i__59936 + (1));
i__59936 = G__60393;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59937),nubank$workspaces$ui$render_Workspace_$_iter__59934(cljs.core.chunk_rest(s__59935__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59937),null);
}
} else {
var map__59949 = cljs.core.first(s__59935__$2);
var map__59949__$1 = cljs.core.__destructure_map(map__59949);
var card = map__59949__$1;
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59949__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
if(cljs.core.truth_(card_id)){
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(card_id)], null),(function (){var G__59950 = (function (){var G__59954 = card;
var G__59955 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui","export-size","nubank.workspaces.ui/export-size",1661946281),((function (s__59935__$1,G__59954,map__59949,map__59949__$1,card,card_id,s__59935__$2,temp__5753__auto__,G__59919,map__59880,map__59880__$1,workspace_id,cards,layouts,breakpoint,workspace_title,workspace_static_QMARK_,map__59881,map__59881__$1,open_solo_card){
return (function (){
return nubank.workspaces.ui.export_card_size(this$,card_id);
});})(s__59935__$1,G__59954,map__59949,map__59949__$1,card,card_id,s__59935__$2,temp__5753__auto__,G__59919,map__59880,map__59880__$1,workspace_id,cards,layouts,breakpoint,workspace_title,workspace_static_QMARK_,map__59881,map__59881__$1,open_solo_card))
,new cljs.core.Keyword("nubank.workspaces.ui","open-solo-card","nubank.workspaces.ui/open-solo-card",-1371578732),open_solo_card], null);
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__59954,G__59955) : com.fulcrologic.fulcro.components.computed.call(null,G__59954,G__59955));
})();
return (nubank.workspaces.ui.workspace_card.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.workspace_card.cljs$core$IFn$_invoke$arity$1(G__59950) : nubank.workspaces.ui.workspace_card.call(null,G__59950));
})()], 0)),nubank$workspaces$ui$render_Workspace_$_iter__59934(cljs.core.rest(s__59935__$2)));
} else {
var G__60394 = cljs.core.rest(s__59935__$2);
s__59935__$1 = G__60394;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cards);
})();
return (nubank.workspaces.ui.grid_layout.grid_layout.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.grid_layout.grid_layout.cljs$core$IFn$_invoke$arity$2(G__59919,G__59920) : nubank.workspaces.ui.grid_layout.grid_layout.call(null,G__59919,G__59920));
})():null)], 0))], 0));
}
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.Workspace !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.Workspace = (function nubank$workspaces$ui$Workspace(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___60395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___60356,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___60395)){
var init_state__48888__auto___60396 = temp__5751__auto___60395;
(this__48887__auto__.state = (function (){var obj59962 = ({"fulcro$state":(function (){var G__59964 = this__48887__auto__;
var G__59965 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___60396.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___60396.cljs$core$IFn$_invoke$arity$2(G__59964,G__59965) : init_state__48888__auto___60396.call(null,G__59964,G__59965));
})()});
return obj59962;
})());
} else {
(this__48887__auto__.state = (function (){var obj59967 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj59967;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.Workspace,new cljs.core.Keyword("nubank.workspaces.ui","Workspace","nubank.workspaces.ui/Workspace",1485031084),options__48885__auto___60356);
nubank.workspaces.ui.workspace = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.Workspace,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858)], null));

var options__48885__auto___60397 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,props){
return nubank.workspaces.ui.workspace_ident(props);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(this$){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.Workspace),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspaceSoloCard)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$workspaces-workspace-container","$workspaces-workspace-container",-495417857),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#9fa2ab",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#ef0000",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null)], null),new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733),(function (this$,error,info){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nubank.workspaces.ui.components_with_error,cljs.core.conj,this$);

return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944),true], null));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_WorkspaceContainer(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59974 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__59974__$1 = cljs.core.__destructure_map(map__59974);
var open_solo_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59974__$1,new cljs.core.Keyword("nubank.workspaces.ui","open-solo-card","nubank.workspaces.ui/open-solo-card",-1371578732));
if(cljs.core.truth_(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("nubank.workspaces.ui","error-catch?","nubank.workspaces.ui/error-catch?",1438279944)))){
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".error",".error",115475668),"Error rendering workspace, check console for details."], 0));
} else {
var G__59975 = cljs.core.first((com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)));
var G__59975__$1 = (((G__59975 instanceof cljs.core.Keyword))?G__59975.fqn:null);
switch (G__59975__$1) {
case "nubank.workspaces.ui/workspace-id":
var G__59976 = (function (){var G__59977 = props;
var G__59978 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","open-solo-card","nubank.workspaces.ui/open-solo-card",-1371578732),open_solo_card], null);
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__59977,G__59978) : com.fulcrologic.fulcro.components.computed.call(null,G__59977,G__59978));
})();
return (nubank.workspaces.ui.workspace.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.workspace.cljs$core$IFn$_invoke$arity$1(G__59976) : nubank.workspaces.ui.workspace.call(null,G__59976));

break;
case "nubank.workspaces.model/card-id":
return (nubank.workspaces.ui.workspace_solo_card.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.workspace_solo_card.cljs$core$IFn$_invoke$arity$1(props) : nubank.workspaces.ui.workspace_solo_card.call(null,props));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59975__$1)].join('')));

}
}
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.WorkspaceContainer !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.WorkspaceContainer = (function nubank$workspaces$ui$WorkspaceContainer(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___60406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___60397,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___60406)){
var init_state__48888__auto___60412 = temp__5751__auto___60406;
(this__48887__auto__.state = (function (){var obj59980 = ({"fulcro$state":(function (){var G__59981 = this__48887__auto__;
var G__59982 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___60412.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___60412.cljs$core$IFn$_invoke$arity$2(G__59981,G__59982) : init_state__48888__auto___60412.call(null,G__59981,G__59982));
})()});
return obj59980;
})());
} else {
(this__48887__auto__.state = (function (){var obj59984 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj59984;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.WorkspaceContainer,new cljs.core.Keyword("nubank.workspaces.ui","WorkspaceContainer","nubank.workspaces.ui/WorkspaceContainer",171698625),options__48885__auto___60397);
nubank.workspaces.ui.workspace_container = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.WorkspaceContainer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__59985_SHARP_){
var or__4253__auto__ = new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858).cljs$core$IFn$_invoke$arity$1(p1__59985_SHARP_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809).cljs$core$IFn$_invoke$arity$1(p1__59985_SHARP_);
}
})], null));

var options__48885__auto___60416 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(_,props){
return nubank.workspaces.ui.workspace_ident(props);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_WorkspaceTabItem(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
return null;
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.WorkspaceTabItem !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.WorkspaceTabItem = (function nubank$workspaces$ui$WorkspaceTabItem(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___60422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___60416,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___60422)){
var init_state__48888__auto___60423 = temp__5751__auto___60422;
(this__48887__auto__.state = (function (){var obj59987 = ({"fulcro$state":(function (){var G__59988 = this__48887__auto__;
var G__59989 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___60423.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___60423.cljs$core$IFn$_invoke$arity$2(G__59988,G__59989) : init_state__48888__auto___60423.call(null,G__59988,G__59989));
})()});
return obj59987;
})());
} else {
(this__48887__auto__.state = (function (){var obj59991 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj59991;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.WorkspaceTabItem,new cljs.core.Keyword("nubank.workspaces.ui","WorkspaceTabItem","nubank.workspaces.ui/WorkspaceTabItem",1782145703),options__48885__auto___60416);

var options__48885__auto___60424 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$ui$build_raw_initial_state_STAR_(_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.ws_data__GT_ident_map,nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),(function (){var temp__5751__auto__ = nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814));
if(cljs.core.truth_(temp__5751__auto__)){
var active = temp__5751__auto__;
return nubank.workspaces.ui.ws_data__GT_ident_map(active);
} else {
return null;
}
})()], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,p__59996){
var map__59997 = p__59996;
var map__59997__$1 = cljs.core.__destructure_map(map__59997);
var active_workspace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59997__$1,new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814));
var open_workspaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59997__$1,new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton"], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspaceTabItem)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspaceContainer)], null)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".tabs",".tabs",642963783),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"nowrap",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".tab",".tab",1455359754),nubank.workspaces.ui.core.font_os12sb,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941)],["center",nubank.workspaces.ui.core.color_limed_spruce,"hidden",nubank.workspaces.ui.core.color_iron,"pointer","0 0 auto","1","7px 12px 9px","flex","1px",["1px solid ",nubank.workspaces.ui.core.color_geyser].join(''),"6px 6px 0 0","-1px"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.active-tab","&.active-tab",2033073281),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_white,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),["1px solid ",nubank.workspaces.ui.core.color_white].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".active",".active",-1779503645),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",nubank.workspaces.ui.core.color_geyser].join(''),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"min-height","min-height",398480837),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".new-tab",".new-tab",-1096253910),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"23px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".welcome",".welcome",-697886208),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),nubank.workspaces.ui.core.color_dark_grey,new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".welcome-content",".welcome-content",-884469317),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"font-family","font-family",-667419874),nubank.workspaces.ui.core.font_open_sans,new cljs.core.Keyword(null,"padding","padding",1660304693),"0 12px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"12px 0"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".workspace-title",".workspace-title",9128440),nubank.workspaces.ui.core.font_os12sb,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"direction","direction",-633359395)],["ellipsis","0 0 2px 0 transparent","nowrap","hidden","transparent","pointer","1","150px","1px solid transparent","rtl"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:focus","&:focus",1074121139),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #0079bf",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 2px 0 #0284c6",new cljs.core.Keyword(null,"outline","outline",793464534),"0",new cljs.core.Keyword(null,"color","color",1011675173),"#000 !important",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"text"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".workspace-close",".workspace-close",631096870),nubank.workspaces.ui.core.close_icon_css,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_WorkspaceTabs(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__59998 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59998__$1 = cljs.core.__destructure_map(map__59998);
var active_workspace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59998__$1,new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814));
var open_workspaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59998__$1,new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447));
var update_title = (function (new_title,workspace_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","update-workspace","nubank.workspaces.ui/update-workspace",-2145331844,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),new_title], null),null,(1),null)))))], null));
});
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-close-workspace","nubank.workspaces.ui/keybinding-close-workspace",145944058)),new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","close-workspace","nubank.workspaces.ui/close-workspace",-1735247601,null),null,(1),null)),(new cljs.core.List(null,active_workspace,null,(1),null)))))], null));
})], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-new-workspace","nubank.workspaces.ui/keybinding-new-workspace",-1840796647)),new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","create-workspace","nubank.workspaces.ui/create-workspace",-404659908,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null));
})], null)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".tabs",".tabs",642963783),(function (){var iter__4652__auto__ = (function nubank$workspaces$ui$render_WorkspaceTabs_$_iter__59999(s__60000){
return (new cljs.core.LazySeq(null,(function (){
var s__60000__$1 = s__60000;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60000__$1);
if(temp__5753__auto__){
var s__60000__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60000__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60000__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60002 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60001 = (0);
while(true){
if((i__60001 < size__4651__auto__)){
var map__60003 = cljs.core._nth(c__4650__auto__,i__60001);
var map__60003__$1 = cljs.core.__destructure_map(map__60003);
var tab_ws = map__60003__$1;
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60003__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60003__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
var workspace_static_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60003__$1,new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950));
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60003__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var current_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.workspace_ident(tab_ws),nubank.workspaces.ui.workspace_ident(active_workspace));
cljs.core.chunk_append(b__60002,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".tab",".tab",1455359754),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__4253__auto__ = workspace_id;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return card_id;
}
})(),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((current_QMARK_)?new cljs.core.Keyword(null,".active-tab",".active-tab",1387866299):null)], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__60001,current_QMARK_,map__60003,map__60003__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4650__auto__,size__4651__auto__,b__60002,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces){
return (function (){
var ws_ident = nubank.workspaces.ui.workspace_ident(tab_ws);
com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),ws_ident);

return nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),ws_ident);
});})(i__60001,current_QMARK_,map__60003,map__60003__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4650__auto__,size__4651__auto__,b__60002,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces))
], null),(cljs.core.truth_((function (){var or__4253__auto__ = workspace_static_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = card_id;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return (!(current_QMARK_));
}
}
})())?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace-title",".workspace-title",9128440),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = workspace_title;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return card_id;
}
})())], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = workspace_title;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return card_id;
}
})())], 0)):com.fulcrologic.fulcro_css.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace-title",".workspace-title",9128440),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_title),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (i__60001,current_QMARK_,map__60003,map__60003__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4650__auto__,size__4651__auto__,b__60002,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces){
return (function (_){
return null;
});})(i__60001,current_QMARK_,map__60003,map__60003__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4650__auto__,size__4651__auto__,b__60002,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces))
,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__60001,current_QMARK_,map__60003,map__60003__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4650__auto__,size__4651__auto__,b__60002,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces){
return (function (p1__59992_SHARP_){
return p1__59992_SHARP_.target.select();
});})(i__60001,current_QMARK_,map__60003,map__60003__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4650__auto__,size__4651__auto__,b__60002,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces))
,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (i__60001,current_QMARK_,map__60003,map__60003__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4650__auto__,size__4651__auto__,b__60002,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces){
return (function (p1__59993_SHARP_){
return update_title(p1__59993_SHARP_.target.value,workspace_id);
});})(i__60001,current_QMARK_,map__60003,map__60003__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4650__auto__,size__4651__auto__,b__60002,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces))
,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),((function (i__60001,current_QMARK_,map__60003,map__60003__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4650__auto__,size__4651__auto__,b__60002,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces){
return (function (p1__59994_SHARP_){
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.events.KEYS,"return"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.events.KEYS,"escape")]),p1__59994_SHARP_.keyCode)){
return p1__59994_SHARP_.target.blur();
} else {
return null;
}
});})(i__60001,current_QMARK_,map__60003,map__60003__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4650__auto__,size__4651__auto__,b__60002,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces))
], null)], 0))),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace-close",".workspace-close",631096870),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__60001,current_QMARK_,map__60003,map__60003__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4650__auto__,size__4651__auto__,b__60002,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces){
return (function (e){
e.stopPropagation();

return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","close-workspace","nubank.workspaces.ui/close-workspace",-1735247601,null),null,(1),null)),(new cljs.core.List(null,tab_ws,null,(1),null)))))], null));
});})(i__60001,current_QMARK_,map__60003,map__60003__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,c__4650__auto__,size__4651__auto__,b__60002,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces))
], null),"\u00D7"], 0))], 0)));

var G__60430 = (i__60001 + (1));
i__60001 = G__60430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60002),nubank$workspaces$ui$render_WorkspaceTabs_$_iter__59999(cljs.core.chunk_rest(s__60000__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60002),null);
}
} else {
var map__60004 = cljs.core.first(s__60000__$2);
var map__60004__$1 = cljs.core.__destructure_map(map__60004);
var tab_ws = map__60004__$1;
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60004__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60004__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
var workspace_static_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60004__$1,new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950));
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60004__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var current_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.workspace_ident(tab_ws),nubank.workspaces.ui.workspace_ident(active_workspace));
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".tab",".tab",1455359754),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__4253__auto__ = workspace_id;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return card_id;
}
})(),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((current_QMARK_)?new cljs.core.Keyword(null,".active-tab",".active-tab",1387866299):null)], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (current_QMARK_,map__60004,map__60004__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces){
return (function (){
var ws_ident = nubank.workspaces.ui.workspace_ident(tab_ws);
com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),ws_ident);

return nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),ws_ident);
});})(current_QMARK_,map__60004,map__60004__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces))
], null),(cljs.core.truth_((function (){var or__4253__auto__ = workspace_static_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = card_id;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return (!(current_QMARK_));
}
}
})())?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace-title",".workspace-title",9128440),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = workspace_title;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return card_id;
}
})())], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = workspace_title;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return card_id;
}
})())], 0)):com.fulcrologic.fulcro_css.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace-title",".workspace-title",9128440),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_title),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (current_QMARK_,map__60004,map__60004__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces){
return (function (_){
return null;
});})(current_QMARK_,map__60004,map__60004__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces))
,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (current_QMARK_,map__60004,map__60004__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces){
return (function (p1__59992_SHARP_){
return p1__59992_SHARP_.target.select();
});})(current_QMARK_,map__60004,map__60004__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces))
,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (current_QMARK_,map__60004,map__60004__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces){
return (function (p1__59993_SHARP_){
return update_title(p1__59993_SHARP_.target.value,workspace_id);
});})(current_QMARK_,map__60004,map__60004__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces))
,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),((function (current_QMARK_,map__60004,map__60004__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces){
return (function (p1__59994_SHARP_){
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.events.KEYS,"return"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.events.KEYS,"escape")]),p1__59994_SHARP_.keyCode)){
return p1__59994_SHARP_.target.blur();
} else {
return null;
}
});})(current_QMARK_,map__60004,map__60004__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces))
], null)], 0))),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace-close",".workspace-close",631096870),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (current_QMARK_,map__60004,map__60004__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces){
return (function (e){
e.stopPropagation();

return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","close-workspace","nubank.workspaces.ui/close-workspace",-1735247601,null),null,(1),null)),(new cljs.core.List(null,tab_ws,null,(1),null)))))], null));
});})(current_QMARK_,map__60004,map__60004__$1,tab_ws,workspace_id,workspace_title,workspace_static_QMARK_,card_id,s__60000__$2,temp__5753__auto__,update_title,map__59998,map__59998__$1,active_workspace,open_workspaces))
], null),"\u00D7"], 0))], 0)),nubank$workspaces$ui$render_WorkspaceTabs_$_iter__59999(cljs.core.rest(s__60000__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),open_workspaces));
})(),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".tab.new-tab",".tab.new-tab",1931822071),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","create-workspace","nubank.workspaces.ui/create-workspace",-404659908,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null));
})], null),"+"], 0))], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".active",".active",-1779503645),(cljs.core.truth_(active_workspace)?(function (){var G__60005 = (function (){var G__60006 = active_workspace;
var G__60007 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","open-solo-card","nubank.workspaces.ui/open-solo-card",-1371578732),(function (p1__59995_SHARP_){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","open-solo-workspace","nubank.workspaces.ui/open-solo-workspace",-1902644014,null),null,(1),null)),(new cljs.core.List(null,p1__59995_SHARP_,null,(1),null)))))], null));
})], null);
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__60006,G__60007) : com.fulcrologic.fulcro.components.computed.call(null,G__60006,G__60007));
})();
return (nubank.workspaces.ui.workspace_container.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.workspace_container.cljs$core$IFn$_invoke$arity$1(G__60005) : nubank.workspaces.ui.workspace_container.call(null,G__60005));
})():com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".welcome",".welcome",-697886208),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".welcome-content",".welcome-content",-884469317),com.fulcrologic.fulcro_css.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Welcome to workspaces!"], 0)),com.fulcrologic.fulcro_css.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Use the index on the left to start navigating."], 0)),com.fulcrologic.fulcro_css.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["If you like more instructions please check ",com.fulcrologic.fulcro_css.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/nubank/workspaces#using-workspaces",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"workspaces usage guide"], 0)),"."], 0))], 0))], 0)))], 0))], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.WorkspaceTabs !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.WorkspaceTabs = (function nubank$workspaces$ui$WorkspaceTabs(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___60434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___60424,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___60434)){
var init_state__48888__auto___60435 = temp__5751__auto___60434;
(this__48887__auto__.state = (function (){var obj60009 = ({"fulcro$state":(function (){var G__60010 = this__48887__auto__;
var G__60011 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___60435.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___60435.cljs$core$IFn$_invoke$arity$2(G__60010,G__60011) : init_state__48888__auto___60435.call(null,G__60010,G__60011));
})()});
return obj60009;
})());
} else {
(this__48887__auto__.state = (function (){var obj60013 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj60013;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.WorkspaceTabs,new cljs.core.Keyword("nubank.workspaces.ui","WorkspaceTabs","nubank.workspaces.ui/WorkspaceTabs",948705863),options__48885__auto___60424);
nubank.workspaces.ui.workspace_tabs = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspaceTabs);

var options__48885__auto___60436 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$ui$build_raw_initial_state_STAR_(card){
return cljs.core.select_keys(card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),new cljs.core.Keyword("nubank.workspaces.model","test?","nubank.workspaces.model/test?",993719827),new cljs.core.Keyword("nubank.workspaces.model","card-unlisted?","nubank.workspaces.model/card-unlisted?",-302030555)], null));
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),new cljs.core.Keyword("nubank.workspaces.model","test?","nubank.workspaces.model/test?",993719827),new cljs.core.Keyword("nubank.workspaces.model","card-unlisted?","nubank.workspaces.model/card-unlisted?",-302030555)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_CardIndexListing(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__60015 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__60015__$1 = cljs.core.__destructure_map(map__60015);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60015__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__60014_SHARP_){
if(cljs.core.truth_(p1__60014_SHARP_.altKey)){
return nubank.workspaces.ui.add_card_solo(this$,card_id);
} else {
return nubank.workspaces.ui.add_card(this$,card_id);
}
})], null),cljs.core.name(card_id)], 0))], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.CardIndexListing !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.CardIndexListing = (function nubank$workspaces$ui$CardIndexListing(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___60450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___60436,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___60450)){
var init_state__48888__auto___60451 = temp__5751__auto___60450;
(this__48887__auto__.state = (function (){var obj60017 = ({"fulcro$state":(function (){var G__60018 = this__48887__auto__;
var G__60019 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___60451.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___60451.cljs$core$IFn$_invoke$arity$2(G__60018,G__60019) : init_state__48888__auto___60451.call(null,G__60018,G__60019));
})()});
return obj60017;
})());
} else {
(this__48887__auto__.state = (function (){var obj60021 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj60021;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.CardIndexListing,new cljs.core.Keyword("nubank.workspaces.ui","CardIndexListing","nubank.workspaces.ui/CardIndexListing",-1935958460),options__48885__auto___60436);
nubank.workspaces.ui.card_index_listing = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.CardIndexListing,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809)], null));

var options__48885__auto___60457 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_WorkspaceIndexListing(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var ___$1 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
return null;
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.WorkspaceIndexListing !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.WorkspaceIndexListing = (function nubank$workspaces$ui$WorkspaceIndexListing(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___60458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___60457,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___60458)){
var init_state__48888__auto___60464 = temp__5751__auto___60458;
(this__48887__auto__.state = (function (){var obj60023 = ({"fulcro$state":(function (){var G__60024 = this__48887__auto__;
var G__60025 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___60464.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___60464.cljs$core$IFn$_invoke$arity$2(G__60024,G__60025) : init_state__48888__auto___60464.call(null,G__60024,G__60025));
})()});
return obj60023;
})());
} else {
(this__48887__auto__.state = (function (){var obj60027 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj60027;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.WorkspaceIndexListing,new cljs.core.Keyword("nubank.workspaces.ui","WorkspaceIndexListing","nubank.workspaces.ui/WorkspaceIndexListing",-1301015075),options__48885__auto___60457);
nubank.workspaces.ui.workspace_index_listing = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.WorkspaceIndexListing,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858)], null));
/**
 * 
 */
nubank.workspaces.ui.load_card = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","load-card","nubank.workspaces.ui/load-card",817030703,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","load-card","nubank.workspaces.ui/load-card",817030703,null),(function (fulcro_mutation_env_symbol){
var card = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__60028){
var map__60029 = p__60028;
var map__60029__$1 = cljs.core.__destructure_map(map__60029);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60029__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var _STAR_after_render_STAR__orig_val__60030_60465 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60031_60466 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60031_60466);

try{com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic(reconciler,nubank.workspaces.ui.CardIndexListing,(com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.CardIndexListing,card) : com.fulcrologic.fulcro.components.get_initial_state.call(null,nubank.workspaces.ui.CardIndexListing,card)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-root","nubank.workspaces.ui/workspace-root",695328612),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701)], null)], 0));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60030_60465);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__60032 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60033 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60033);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60032);
}})], null);
}));
nubank.workspaces.ui.initialize_static_workspaces = (function nubank$workspaces$ui$initialize_static_workspaces(){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60034_SHARP_){
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.Workspace,p1__60034_SHARP_) : com.fulcrologic.fulcro.components.get_initial_state.call(null,nubank.workspaces.ui.Workspace,p1__60034_SHARP_));
}),cljs.core.vals(cljs.core.deref(nubank.workspaces.data.workspace_definitions_STAR_)));
});
/**
 * 
 */
nubank.workspaces.ui.load_workspace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","load-workspace","nubank.workspaces.ui/load-workspace",60048364,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","load-workspace","nubank.workspaces.ui/load-workspace",60048364,null),(function (fulcro_mutation_env_symbol){
var workspace = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__60035){
var map__60036 = p__60035;
var map__60036__$1 = cljs.core.__destructure_map(map__60036);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60036__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60036__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__60037_60468 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60038_60469 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60038_60469);

try{com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic(reconciler,nubank.workspaces.ui.Workspace,nubank.workspaces.ui.normalize_ws_cards(cljs.core.deref(state),(com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.Workspace,workspace) : com.fulcrologic.fulcro.components.get_initial_state.call(null,nubank.workspaces.ui.Workspace,workspace))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-root","nubank.workspaces.ui/workspace-root",695328612),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450)], null)], 0));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60037_60468);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__60039 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60040 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60040);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60039);
}})], null);
}));
/**
 * 
 */
nubank.workspaces.ui.select_workspace = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),(function (fulcro_mutation_env_symbol){
var map__60041 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__60041__$1 = cljs.core.__destructure_map(map__60041);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60041__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),(function nubank$workspaces$ui$refresh(_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814)], null);
}),new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__60042){
var map__60043 = p__60042;
var map__60043__$1 = cljs.core.__destructure_map(map__60043);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60043__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__60044_60470 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60045_60471 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60045_60471);

try{var open_workspaces_60477 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447)], null)));
var ws_ref_60478 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),workspace_id], null);
if((!(cljs.core.contains_QMARK_(open_workspaces_60477,workspace_id)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws_ref_60478], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-tabs","nubank.workspaces.ui/workspace-tabs",-908048516),"singleton",new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814)], null),ws_ref_60478);

nubank.workspaces.lib.local_storage.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("nubank.workspaces.ui","open-workspaces","nubank.workspaces.ui/open-workspaces",-733634447),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([workspace_id], 0));

nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","active-workspace","nubank.workspaces.ui/active-workspace",-959687814),workspace_id);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60044_60470);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__60046 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60047 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60047);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60046);
}})], null);
}));
/**
 * 
 */
nubank.workspaces.ui.toggle_ns_expansion = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","toggle-ns-expansion","nubank.workspaces.ui/toggle-ns-expansion",117524570,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-ns-expansion","nubank.workspaces.ui/toggle-ns-expansion",117524570,null),(function (fulcro_mutation_env_symbol){
var map__60048 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__60048__$1 = cljs.core.__destructure_map(map__60048);
var expand_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60048__$1,new cljs.core.Keyword("nubank.workspaces.ui","expand-path","nubank.workspaces.ui/expand-path",-795465683));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__60049){
var map__60050 = p__60049;
var map__60050__$1 = cljs.core.__destructure_map(map__60050);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60050__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60050__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__60051_60479 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60052_60480 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60052_60480);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223),cljs.core.update_in,expand_path,cljs.core.not], 0));

nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ref,new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223))));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60051_60479);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__60053 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60054 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60054);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60053);
}})], null);
}));
/**
 * 
 */
nubank.workspaces.ui.toggle_index_view = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("nubank.workspaces.ui","toggle-index-view","nubank.workspaces.ui/toggle-index-view",-2043129614,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-index-view","nubank.workspaces.ui/toggle-index-view",-2043129614,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function nubank$workspaces$ui$action(p__60055){
var map__60056 = p__60055;
var map__60056__$1 = cljs.core.__destructure_map(map__60056);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60056__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60056__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var _STAR_after_render_STAR__orig_val__60057_60482 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60058_60483 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60058_60483);

try{var show_index_QMARK__60484 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ref,new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui","show-index?","nubank.workspaces.ui/show-index?",580921311)], 0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ref,new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nubank.workspaces.ui","show-index?","nubank.workspaces.ui/show-index?",580921311)], 0)),cljs.core.not(show_index_QMARK__60484));

nubank.workspaces.lib.local_storage.set_BANG_(new cljs.core.Keyword("nubank.workspaces.ui","show-index?","nubank.workspaces.ui/show-index?",580921311),cljs.core.not(show_index_QMARK__60484));

setTimeout((function (){
return nubank.workspaces.ui.events.trigger_event(window,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.events","event","nubank.workspaces.ui.events/event",-1162809276),"resize"], null));
}),(100));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60057_60482);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__60059 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60060 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60060);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60059);
}})], null);
}));
nubank.workspaces.ui.open_spotlight = (function nubank$workspaces$ui$open_spotlight(this$){
var map__60061 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__60061__$1 = cljs.core.__destructure_map(map__60061);
var spotlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60061__$1,new cljs.core.Keyword("nubank.workspaces.ui","spotlight","nubank.workspaces.ui/spotlight",1269025828));
var state = com.fulcrologic.fulcro.components.component__GT_state_map(this$);
var options = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__60062){
var vec__60063 = p__60062;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60063,(0),null);
var map__60066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60063,(1),null);
var map__60066__$1 = cljs.core.__destructure_map(map__60066);
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60066__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var test_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60066__$1,new cljs.core.Keyword("nubank.workspaces.model","test?","nubank.workspaces.model/test?",993719827));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.spotlight","type","nubank.workspaces.ui.spotlight/type",1675623435),(cljs.core.truth_(test_QMARK_)?new cljs.core.Keyword("nubank.workspaces.ui.spotlight","test","nubank.workspaces.ui.spotlight/test",-2118206012):new cljs.core.Keyword("nubank.workspaces.ui.spotlight","card","nubank.workspaces.ui.spotlight/card",-882323793)),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","id","nubank.workspaces.ui.spotlight/id",-871569707),card_id], null);
})),new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__60067){
var vec__60068 = p__60067;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60068,(0),null);
var map__60071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60068,(1),null);
var map__60071__$1 = cljs.core.__destructure_map(map__60071);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60071__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60071__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("nubank.workspaces.ui.spotlight","type","nubank.workspaces.ui.spotlight/type",1675623435),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","workspace","nubank.workspaces.ui.spotlight/workspace",-529313372),new cljs.core.Keyword("nubank.workspaces.ui.spotlight","id","nubank.workspaces.ui.spotlight/id",-871569707),workspace_id,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","label","nubank.workspaces.ui.spotlight/label",1308535731),workspace_title], null);
})),new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858).cljs$core$IFn$_invoke$arity$1(state));
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components.any__GT_app(this$),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui.spotlight","reset","nubank.workspaces.ui.spotlight/reset",475380012,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","options","nubank.workspaces.ui.spotlight/options",-459165350),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))))),null,(1),null))))),null,(1),null)))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.spotlight.Spotlight,spotlight) : com.fulcrologic.fulcro.components.get_ident.call(null,nubank.workspaces.ui.spotlight.Spotlight,spotlight))], null));

return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-spotlight?","nubank.workspaces.ui/show-spotlight?",1825873402),true);
});

var options__48885__auto___60492 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"rgba(0, 0, 0, 0.8)",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"font-family","font-family",-667419874),nubank.workspaces.ui.core.font_monospace,new cljs.core.Keyword(null,"padding","padding",1660304693),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header",".header",-1761691025),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),nubank.workspaces.ui.core.font_open_sans,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"26px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"margin","margin",-995903681),"-5px 0 20px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_HelpDialog(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__60072 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__60072__$1 = cljs.core.__destructure_map(map__60072);
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".header",".header",-1761691025),"Keyboard Shortcuts"], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-spotlight","nubank.workspaces.ui/keybinding-spotlight",254588049))], 0)),": Add card to current workspace (open spotlight for card picking)"], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-toggle-index","nubank.workspaces.ui/keybinding-toggle-index",2077220551))], 0)),": Toggle index view"], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-toggle-card-headers","nubank.workspaces.ui/keybinding-toggle-card-headers",1763073649))], 0)),": Toggle card headers"], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-new-workspace","nubank.workspaces.ui/keybinding-new-workspace",-1840796647))], 0)),": Create new local workspace"], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-close-workspace","nubank.workspaces.ui/keybinding-close-workspace",145944058))], 0)),": Close current workspace"], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["alt-shift-?"], 0)),": Toggle shorcuts modal"], 0))], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.HelpDialog !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.HelpDialog = (function nubank$workspaces$ui$HelpDialog(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___60496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___60492,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___60496)){
var init_state__48888__auto___60497 = temp__5751__auto___60496;
(this__48887__auto__.state = (function (){var obj60074 = ({"fulcro$state":(function (){var G__60075 = this__48887__auto__;
var G__60076 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___60497.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___60497.cljs$core$IFn$_invoke$arity$2(G__60075,G__60076) : init_state__48888__auto___60497.call(null,G__60075,G__60076));
})()});
return obj60074;
})());
} else {
(this__48887__auto__.state = (function (){var obj60078 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj60078;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.HelpDialog,new cljs.core.Keyword("nubank.workspaces.ui","HelpDialog","nubank.workspaces.ui/HelpDialog",-262514724),options__48885__auto___60492);
nubank.workspaces.ui.help_dialog = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.HelpDialog);

var options__48885__auto___60503 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function nubank$workspaces$ui$build_raw_initial_state_STAR_(card_definitions){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60079_SHARP_){
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.CardIndexListing,p1__60079_SHARP_) : com.fulcrologic.fulcro.components.get_initial_state.call(null,nubank.workspaces.ui.CardIndexListing,p1__60079_SHARP_));
}),cljs.core.vals(card_definitions)),new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450),cljs.core.into.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.initialize_static_workspaces(),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60080_SHARP_){
var G__60083 = nubank.workspaces.ui.Workspace;
var G__60084 = nubank.workspaces.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),p1__60080_SHARP_], null));
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__60083,G__60084) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__60083,G__60084));
}),nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","local-workspaces","nubank.workspaces.ui/local-workspaces",-1846378387),cljs.core.PersistentVector.EMPTY))),new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223),nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("nubank.workspaces.ui","ws-tabs","nubank.workspaces.ui/ws-tabs",872859899),(function (){var G__60085 = nubank.workspaces.ui.WorkspaceTabs;
var G__60086 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__60085,G__60086) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__60085,G__60086));
})(),new cljs.core.Keyword("nubank.workspaces.ui","spotlight","nubank.workspaces.ui/spotlight",1269025828),(function (){var G__60087 = nubank.workspaces.ui.spotlight.Spotlight;
var G__60088 = cljs.core.PersistentVector.EMPTY;
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__60087,G__60088) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__60087,G__60088));
})(),new cljs.core.Keyword("nubank.workspaces.ui","show-spotlight?","nubank.workspaces.ui/show-spotlight?",1825873402),false,new cljs.core.Keyword("nubank.workspaces.ui","show-help-modal?","nubank.workspaces.ui/show-help-modal?",827473639),false,new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","show-index?","nubank.workspaces.ui/show-index?",580921311),nubank.workspaces.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","show-index?","nubank.workspaces.ui/show-index?",580921311),true)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function nubank$workspaces$ui$ident_STAR_(this$,p__60089){
var map__60090 = p__60089;
var map__60090__$1 = cljs.core.__destructure_map(map__60090);
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60090__$1,new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701));
var ws_tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60090__$1,new cljs.core.Keyword("nubank.workspaces.ui","ws-tabs","nubank.workspaces.ui/ws-tabs",872859899));
var workspaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60090__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450));
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60090__$1,new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956));
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60090__$1,new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223));
var spotlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60090__$1,new cljs.core.Keyword("nubank.workspaces.ui","spotlight","nubank.workspaces.ui/spotlight",1269025828));
var show_spotlight_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60090__$1,new cljs.core.Keyword("nubank.workspaces.ui","show-spotlight?","nubank.workspaces.ui/show-spotlight?",1825873402));
var show_help_modal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60090__$1,new cljs.core.Keyword("nubank.workspaces.ui","show-help-modal?","nubank.workspaces.ui/show-help-modal?",827473639));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","workspace-root","nubank.workspaces.ui/workspace-root",695328612),"singleton"], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function nubank$workspaces$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956),new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223),new cljs.core.Keyword("nubank.workspaces.ui","show-spotlight?","nubank.workspaces.ui/show-spotlight?",1825873402),new cljs.core.Keyword("nubank.workspaces.ui","show-help-modal?","nubank.workspaces.ui/show-help-modal?",827473639),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.CardIndexListing)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspaceIndexListing)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","ws-tabs","nubank.workspaces.ui/ws-tabs",872859899),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspaceTabs)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui","spotlight","nubank.workspaces.ui/spotlight",1269025828),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.spotlight.Spotlight)], null)], null);
}),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"background","background",-863952629),"#f7f7f7",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".menu",".menu",986259874),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"10px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),nubank.workspaces.ui.core.font_open_sans,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),"0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"300px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".workspaces",".workspaces",317220476),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"100vh",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".index-action-button",".index-action-button",859695279),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border","border",1444987323)],["23px","bold","-4px","transparent","pointer","0","none","5px","none"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.spotlight","&.spotlight",1243372633),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"transparent",new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),"0 0 #ffffff",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"margin","margin",-995903681),"-2px 10px 0 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.help","&.help",-256627561),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"17px",new cljs.core.Keyword(null,"margin","margin",-995903681),"-2px 10px 0 0"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header",".header",-1761691025),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"#404040",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 7px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",new cljs.core.Keyword(null,"margin","margin",-995903681),"1px 1px 6px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".row",".row",-368374508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pointer",".pointer",614214252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".workspaces-solo",".workspaces-solo",-85217111),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".workspace",".workspace",1526137578),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".nest-group",".nest-group",-588503719),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"32px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".nest-group-small",".nest-group-small",-1151011320),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"18px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ns-header",".ns-header",60233442),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".expand-arrow",".expand-arrow",489938474),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null)], null),new cljs.core.Keyword(null,"css-include","css-include",559023012),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nubank.workspaces.ui.core.CSS,nubank.workspaces.ui.HelpDialog], null),new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spotlight-select","spotlight-select",-635934435),(function (p__60091,solo_QMARK_){
var map__60092 = p__60091;
var map__60092__$1 = cljs.core.__destructure_map(map__60092);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60092__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","id","nubank.workspaces.ui.spotlight/id",-871569707));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60092__$1,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","type","nubank.workspaces.ui.spotlight/type",1675623435));
if(cljs.core.truth_(id)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("nubank.workspaces.ui.spotlight","workspace","nubank.workspaces.ui.spotlight/workspace",-529313372))){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,id,null,(1),null)))))),null,(1),null)))))], null));
} else {
if(cljs.core.truth_(solo_QMARK_)){
nubank.workspaces.ui.add_card_solo(this$,id);
} else {
nubank.workspaces.ui.add_card(this$,id);

}
}
} else {
}

return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-spotlight?","nubank.workspaces.ui/show-spotlight?",1825873402),false);
})], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$render_WorkspacesRoot(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__60093 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__60093__$1 = cljs.core.__destructure_map(map__60093);
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60093__$1,new cljs.core.Keyword("nubank.workspaces.ui","cards","nubank.workspaces.ui/cards",-577802701));
var ws_tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60093__$1,new cljs.core.Keyword("nubank.workspaces.ui","ws-tabs","nubank.workspaces.ui/ws-tabs",872859899));
var workspaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60093__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspaces","nubank.workspaces.ui/workspaces",1165878450));
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60093__$1,new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956));
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60093__$1,new cljs.core.Keyword("nubank.workspaces.ui","expanded","nubank.workspaces.ui/expanded",-751310223));
var spotlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60093__$1,new cljs.core.Keyword("nubank.workspaces.ui","spotlight","nubank.workspaces.ui/spotlight",1269025828));
var show_spotlight_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60093__$1,new cljs.core.Keyword("nubank.workspaces.ui","show-spotlight?","nubank.workspaces.ui/show-spotlight?",1825873402));
var show_help_modal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60093__$1,new cljs.core.Keyword("nubank.workspaces.ui","show-help-modal?","nubank.workspaces.ui/show-help-modal?",827473639));
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),com.fulcrologic.fulcro_css.css_injection.style_element(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),nubank.workspaces.ui.WorkspacesRoot], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-toggle-index","nubank.workspaces.ui/keybinding-toggle-index",2077220551)),new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-index-view","nubank.workspaces.ui/toggle-index-view",-2043129614,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null));
})], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),"alt-shift-/",new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (){
return com.fulcrologic.fulcro.mutations.toggle_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-help-modal?","nubank.workspaces.ui/show-help-modal?",827473639));
})], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-fix-sizes","nubank.workspaces.ui/keybinding-fix-sizes",1615114381)),new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (){
return nubank.workspaces.ui.events.trigger_event(window,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.events","event","nubank.workspaces.ui.events/event",-1162809276),"resize"], null));
})], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-toggle-card-headers","nubank.workspaces.ui/keybinding-toggle-card-headers",1763073649)),new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956),cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("nubank.workspaces.ui","settings","nubank.workspaces.ui/settings",139105956).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$))),new cljs.core.Keyword("nubank.workspaces.ui","hide-card-header?","nubank.workspaces.ui/hide-card-header?",-497463645),cljs.core.not));
})], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","keystroke","nubank.workspaces.ui.events/keystroke",1034732647),nubank.workspaces.ui.get_keybinding(new cljs.core.Keyword("nubank.workspaces.ui","keybinding-spotlight","nubank.workspaces.ui/keybinding-spotlight",254588049)),new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),nubank.workspaces.ui.events.pd((function (){
return nubank.workspaces.ui.open_spotlight(this$);
}))], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","event","nubank.workspaces.ui.events/event",-1162809276),"keydown",new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (p1__60081_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__60081_SHARP_.keyCode,(18))){
return document.body.classList.add("cljs-workspaces-extended-views");
} else {
return null;
}
})], null)),nubank.workspaces.ui.events.dom_listener(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nubank.workspaces.ui.events","event","nubank.workspaces.ui.events/event",-1162809276),"keyup",new cljs.core.Keyword("nubank.workspaces.ui.events","action","nubank.workspaces.ui.events/action",-891512282),(function (p1__60082_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__60082_SHARP_.keyCode,(18))){
return document.body.classList.remove("cljs-workspaces-extended-views");
} else {
return null;
}
})], null)),(cljs.core.truth_(show_help_modal_QMARK_)?(function (){var G__60094 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.modal","on-close","nubank.workspaces.ui.modal/on-close",1602537550),(function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-help-modal?","nubank.workspaces.ui/show-help-modal?",827473639),false);
})], null);
var G__60095 = (function (){var G__60096 = cljs.core.PersistentArrayMap.EMPTY;
return (nubank.workspaces.ui.help_dialog.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.help_dialog.cljs$core$IFn$_invoke$arity$1(G__60096) : nubank.workspaces.ui.help_dialog.call(null,G__60096));
})();
return (nubank.workspaces.ui.modal.modal.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.modal.modal.cljs$core$IFn$_invoke$arity$2(G__60094,G__60095) : nubank.workspaces.ui.modal.modal.call(null,G__60094,G__60095));
})():null),(cljs.core.truth_(show_spotlight_QMARK_)?(function (){var G__60097 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.modal","on-close","nubank.workspaces.ui.modal/on-close",1602537550),(function (){
return com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-spotlight?","nubank.workspaces.ui/show-spotlight?",1825873402),false);
})], null);
var G__60098 = (function (){var G__60099 = (function (){var G__60100 = spotlight;
var G__60101 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.ui.spotlight","on-select","nubank.workspaces.ui.spotlight/on-select",366623223),com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"spotlight-select","spotlight-select",-635934435))], null);
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__60100,G__60101) : com.fulcrologic.fulcro.components.computed.call(null,G__60100,G__60101));
})();
return (nubank.workspaces.ui.spotlight.spotlight.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.spotlight.spotlight.cljs$core$IFn$_invoke$arity$1(G__60099) : nubank.workspaces.ui.spotlight.spotlight.call(null,G__60099));
})();
return (nubank.workspaces.ui.modal.modal.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.modal.modal.cljs$core$IFn$_invoke$arity$2(G__60097,G__60098) : nubank.workspaces.ui.modal.modal.call(null,G__60097,G__60098));
})():null),(cljs.core.truth_(new cljs.core.Keyword("nubank.workspaces.ui","show-index?","nubank.workspaces.ui/show-index?",580921311).cljs$core$IFn$_invoke$arity$1(settings))?(function (){var map__60102 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,new cljs.core.Keyword("nubank.workspaces.model","test?","nubank.workspaces.model/test?",993719827)),cards);
var map__60102__$1 = cljs.core.__destructure_map(map__60102);
var uis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60102__$1,false);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60102__$1,true);
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu",".menu",986259874),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".row.header",".row.header",-1769651026),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Workspaces"], 0)),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),com.fulcrologic.fulcro_css.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".index-action-button.spotlight",".index-action-button.spotlight",1590132671),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return nubank.workspaces.ui.open_spotlight(this$);
})], null),"\uD83D\uDD0D"], 0)),com.fulcrologic.fulcro_css.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".index-action-button.help",".index-action-button.help",-1460269596),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.mutations.toggle_BANG_(this$,new cljs.core.Keyword("nubank.workspaces.ui","show-help-modal?","nubank.workspaces.ui/show-help-modal?",827473639));
})], null),"?"], 0)),com.fulcrologic.fulcro_css.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".index-action-button",".index-action-button",859695279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-index-view","nubank.workspaces.ui/toggle-index-view",-2043129614,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null));
})], null),"\u00AB"], 0))], 0)),(function (){var map__60103 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,new cljs.core.Keyword("nubank.workspaces.model","workspace-static?","nubank.workspaces.model/workspace-static?",1744769950)),workspaces);
var map__60103__$1 = cljs.core.__destructure_map(map__60103);
var statics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60103__$1,true);
var locals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60103__$1,false);
return com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Local workspaces",com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".nest-group-small",".nest-group-small",-1151011320),(function (){var iter__4652__auto__ = (function nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60104(s__60105){
return (new cljs.core.LazySeq(null,(function (){
var s__60105__$1 = s__60105;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60105__$1);
if(temp__5753__auto__){
var s__60105__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60105__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60105__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60107 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60106 = (0);
while(true){
if((i__60106 < size__4651__auto__)){
var map__60108 = cljs.core._nth(c__4650__auto__,i__60106);
var map__60108__$1 = cljs.core.__destructure_map(map__60108);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60108__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60108__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
cljs.core.chunk_append(b__60107,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace",".workspace",1526137578),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__60106,map__60108,map__60108__$1,workspace_id,workspace_title,c__4650__auto__,size__4651__auto__,b__60107,s__60105__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));
});})(i__60106,map__60108,map__60108__$1,workspace_id,workspace_title,c__4650__auto__,size__4651__auto__,b__60107,s__60105__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_title)], 0)));

var G__60527 = (i__60106 + (1));
i__60106 = G__60527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60107),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60104(cljs.core.chunk_rest(s__60105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60107),null);
}
} else {
var map__60109 = cljs.core.first(s__60105__$2);
var map__60109__$1 = cljs.core.__destructure_map(map__60109);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60109__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60109__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace",".workspace",1526137578),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__60109,map__60109__$1,workspace_id,workspace_title,s__60105__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));
});})(map__60109,map__60109__$1,workspace_id,workspace_title,s__60105__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_title)], 0)),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60104(cljs.core.rest(s__60105__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),locals));
})()], 0))], 0)),com.fulcrologic.fulcro_css.localized_dom.br(),(function (){var iter__4652__auto__ = (function nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60110(s__60111){
return (new cljs.core.LazySeq(null,(function (){
var s__60111__$1 = s__60111;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60111__$1);
if(temp__5753__auto__){
var s__60111__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60111__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60111__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60113 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60112 = (0);
while(true){
if((i__60112 < size__4651__auto__)){
var vec__60114 = cljs.core._nth(c__4650__auto__,i__60112);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60114,(0),null);
var workspaces__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60114,(1),null);
cljs.core.chunk_append(b__60113,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".nest-group-small",".nest-group-small",-1151011320),(function (){var iter__4652__auto__ = ((function (i__60112,vec__60114,ns,workspaces__$1,c__4650__auto__,size__4651__auto__,b__60113,s__60111__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60110_$_iter__60117(s__60118){
return (new cljs.core.LazySeq(null,((function (i__60112,vec__60114,ns,workspaces__$1,c__4650__auto__,size__4651__auto__,b__60113,s__60111__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
var s__60118__$1 = s__60118;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__60118__$1);
if(temp__5753__auto____$1){
var s__60118__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60118__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__60118__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__60120 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__60119 = (0);
while(true){
if((i__60119 < size__4651__auto____$1)){
var map__60121 = cljs.core._nth(c__4650__auto____$1,i__60119);
var map__60121__$1 = cljs.core.__destructure_map(map__60121);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60121__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60121__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
cljs.core.chunk_append(b__60120,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace",".workspace",1526137578),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__60119,i__60112,map__60121,map__60121__$1,workspace_id,workspace_title,c__4650__auto____$1,size__4651__auto____$1,b__60120,s__60118__$2,temp__5753__auto____$1,vec__60114,ns,workspaces__$1,c__4650__auto__,size__4651__auto__,b__60113,s__60111__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));
});})(i__60119,i__60112,map__60121,map__60121__$1,workspace_id,workspace_title,c__4650__auto____$1,size__4651__auto____$1,b__60120,s__60118__$2,temp__5753__auto____$1,vec__60114,ns,workspaces__$1,c__4650__auto__,size__4651__auto__,b__60113,s__60111__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),cljs.core.name(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(workspace_title))], 0)));

var G__60538 = (i__60119 + (1));
i__60119 = G__60538;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60120),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60110_$_iter__60117(cljs.core.chunk_rest(s__60118__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60120),null);
}
} else {
var map__60122 = cljs.core.first(s__60118__$2);
var map__60122__$1 = cljs.core.__destructure_map(map__60122);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60122__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60122__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace",".workspace",1526137578),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__60112,map__60122,map__60122__$1,workspace_id,workspace_title,s__60118__$2,temp__5753__auto____$1,vec__60114,ns,workspaces__$1,c__4650__auto__,size__4651__auto__,b__60113,s__60111__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));
});})(i__60112,map__60122,map__60122__$1,workspace_id,workspace_title,s__60118__$2,temp__5753__auto____$1,vec__60114,ns,workspaces__$1,c__4650__auto__,size__4651__auto__,b__60113,s__60111__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),cljs.core.name(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(workspace_title))], 0)),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60110_$_iter__60117(cljs.core.rest(s__60118__$2)));
}
} else {
return null;
}
break;
}
});})(i__60112,vec__60114,ns,workspaces__$1,c__4650__auto__,size__4651__auto__,b__60113,s__60111__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
,null,null));
});})(i__60112,vec__60114,ns,workspaces__$1,c__4650__auto__,size__4651__auto__,b__60113,s__60111__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
;
return iter__4652__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),workspaces__$1));
})()], 0))], 0)));

var G__60541 = (i__60112 + (1));
i__60112 = G__60541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60113),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60110(cljs.core.chunk_rest(s__60111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60113),null);
}
} else {
var vec__60123 = cljs.core.first(s__60111__$2);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60123,(0),null);
var workspaces__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60123,(1),null);
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".nest-group-small",".nest-group-small",-1151011320),(function (){var iter__4652__auto__ = ((function (vec__60123,ns,workspaces__$1,s__60111__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60110_$_iter__60126(s__60127){
return (new cljs.core.LazySeq(null,(function (){
var s__60127__$1 = s__60127;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__60127__$1);
if(temp__5753__auto____$1){
var s__60127__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60127__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60127__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60129 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60128 = (0);
while(true){
if((i__60128 < size__4651__auto__)){
var map__60130 = cljs.core._nth(c__4650__auto__,i__60128);
var map__60130__$1 = cljs.core.__destructure_map(map__60130);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60130__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60130__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
cljs.core.chunk_append(b__60129,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace",".workspace",1526137578),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__60128,map__60130,map__60130__$1,workspace_id,workspace_title,c__4650__auto__,size__4651__auto__,b__60129,s__60127__$2,temp__5753__auto____$1,vec__60123,ns,workspaces__$1,s__60111__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));
});})(i__60128,map__60130,map__60130__$1,workspace_id,workspace_title,c__4650__auto__,size__4651__auto__,b__60129,s__60127__$2,temp__5753__auto____$1,vec__60123,ns,workspaces__$1,s__60111__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),cljs.core.name(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(workspace_title))], 0)));

var G__60559 = (i__60128 + (1));
i__60128 = G__60559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60129),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60110_$_iter__60126(cljs.core.chunk_rest(s__60127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60129),null);
}
} else {
var map__60131 = cljs.core.first(s__60127__$2);
var map__60131__$1 = cljs.core.__destructure_map(map__60131);
var workspace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60131__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858));
var workspace_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60131__$1,new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263));
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspace",".workspace",1526137578),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(workspace_id),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__60131,map__60131__$1,workspace_id,workspace_title,s__60127__$2,temp__5753__auto____$1,vec__60123,ns,workspaces__$1,s__60111__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","select-workspace","nubank.workspaces.ui/select-workspace",558971453,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858),null,(1),null)),(new cljs.core.List(null,workspace_id,null,(1),null)))))),null,(1),null)))))], null));
});})(map__60131,map__60131__$1,workspace_id,workspace_title,s__60127__$2,temp__5753__auto____$1,vec__60123,ns,workspaces__$1,s__60111__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),cljs.core.name(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(workspace_title))], 0)),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60110_$_iter__60126(cljs.core.rest(s__60127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__60123,ns,workspaces__$1,s__60111__$2,temp__5753__auto__,map__60103,map__60103__$1,statics,locals,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
;
return iter__4652__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.ui","workspace-title","nubank.workspaces.ui/workspace-title",-373163263),workspaces__$1));
})()], 0))], 0)),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60110(cljs.core.rest(s__60111__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,new cljs.core.Keyword("nubank.workspaces.ui","workspace-id","nubank.workspaces.ui/workspace-id",-1045831858)),statics)));
})()], 0));
})(),com.fulcrologic.fulcro_css.localized_dom.br(),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".header",".header",-1761691025),"Cards"], 0)),(function (){var iter__4652__auto__ = (function nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60132(s__60133){
return (new cljs.core.LazySeq(null,(function (){
var s__60133__$1 = s__60133;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60133__$1);
if(temp__5753__auto__){
var s__60133__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60133__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60133__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60135 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60134 = (0);
while(true){
if((i__60134 < size__4651__auto__)){
var vec__60136 = cljs.core._nth(c__4650__auto__,i__60134);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60136,(0),null);
var cards__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60136,(1),null);
cljs.core.chunk_append(b__60135,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".ns-header",".ns-header",60233442),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".expand-arrow",".expand-arrow",489938474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__60134,vec__60136,ns,cards__$1,c__4650__auto__,size__4651__auto__,b__60135,s__60133__$2,temp__5753__auto__,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-ns-expansion","nubank.workspaces.ui/toggle-ns-expansion",117524570,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","expand-path","nubank.workspaces.ui/expand-path",-795465683),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-ns","card-ns",-470859449),ns], null),null,(1),null)))))),null,(1),null)))))], null));
});})(i__60134,vec__60136,ns,cards__$1,c__4650__auto__,size__4651__auto__,b__60135,s__60133__$2,temp__5753__auto__,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-ns","card-ns",-470859449),ns], null)))?nubank.workspaces.ui.core.arrow_down:nubank.workspaces.ui.core.arrow_right)], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], 0)),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-ns","card-ns",-470859449),ns], null)))?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".nest-group",".nest-group",-588503719),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.card_index_listing,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cards__$1))], 0)):null)], 0)));

var G__60568 = (i__60134 + (1));
i__60134 = G__60568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60135),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60132(cljs.core.chunk_rest(s__60133__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60135),null);
}
} else {
var vec__60139 = cljs.core.first(s__60133__$2);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60139,(0),null);
var cards__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60139,(1),null);
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".ns-header",".ns-header",60233442),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".expand-arrow",".expand-arrow",489938474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__60139,ns,cards__$1,s__60133__$2,temp__5753__auto__,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-ns-expansion","nubank.workspaces.ui/toggle-ns-expansion",117524570,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","expand-path","nubank.workspaces.ui/expand-path",-795465683),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-ns","card-ns",-470859449),ns], null),null,(1),null)))))),null,(1),null)))))], null));
});})(vec__60139,ns,cards__$1,s__60133__$2,temp__5753__auto__,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-ns","card-ns",-470859449),ns], null)))?nubank.workspaces.ui.core.arrow_down:nubank.workspaces.ui.core.arrow_right)], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], 0)),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-ns","card-ns",-470859449),ns], null)))?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".nest-group",".nest-group",-588503719),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.card_index_listing,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cards__$1))], 0)):null)], 0)),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60132(cljs.core.rest(s__60133__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809)),uis)));
})(),com.fulcrologic.fulcro_css.localized_dom.br(),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".pointer.header",".pointer.header",-301986551),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return nubank.workspaces.ui.add_card(this$,new cljs.core.Symbol("nubank.workspaces.card-types.test","test-all","nubank.workspaces.card-types.test/test-all",-1512776685,null));
})], null),"Tests"], 0)),(function (){var iter__4652__auto__ = (function nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60142(s__60143){
return (new cljs.core.LazySeq(null,(function (){
var s__60143__$1 = s__60143;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60143__$1);
if(temp__5753__auto__){
var s__60143__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60143__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60143__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60145 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60144 = (0);
while(true){
if((i__60144 < size__4651__auto__)){
var vec__60146 = cljs.core._nth(c__4650__auto__,i__60144);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60146,(0),null);
var cards__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60146,(1),null);
cljs.core.chunk_append(b__60145,com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".ns-header",".ns-header",60233442),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".expand-arrow",".expand-arrow",489938474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__60144,vec__60146,ns,cards__$1,c__4650__auto__,size__4651__auto__,b__60145,s__60143__$2,temp__5753__auto__,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-ns-expansion","nubank.workspaces.ui/toggle-ns-expansion",117524570,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","expand-path","nubank.workspaces.ui/expand-path",-795465683),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-ns","test-ns",332567313),ns], null),null,(1),null)))))),null,(1),null)))))], null));
});})(i__60144,vec__60146,ns,cards__$1,c__4650__auto__,size__4651__auto__,b__60145,s__60143__$2,temp__5753__auto__,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-ns","test-ns",332567313),ns], null)))?nubank.workspaces.ui.core.arrow_down:nubank.workspaces.ui.core.arrow_right)], 0)),(function (){var G__60149 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ns)], null);
return (nubank.workspaces.ui.card_index_listing.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.card_index_listing.cljs$core$IFn$_invoke$arity$1(G__60149) : nubank.workspaces.ui.card_index_listing.call(null,G__60149));
})()], 0)),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-ns","test-ns",332567313),ns], null)))?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".nest-group",".nest-group",-588503719),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.card_index_listing,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cards__$1))], 0)):null)], 0)));

var G__60573 = (i__60144 + (1));
i__60144 = G__60573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60145),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60142(cljs.core.chunk_rest(s__60143__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60145),null);
}
} else {
var vec__60150 = cljs.core.first(s__60143__$2);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60150,(0),null);
var cards__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60150,(1),null);
return cljs.core.cons(com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)], null),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".ns-header",".ns-header",60233442),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".expand-arrow",".expand-arrow",489938474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__60150,ns,cards__$1,s__60143__$2,temp__5753__auto__,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-ns-expansion","nubank.workspaces.ui/toggle-ns-expansion",117524570,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("nubank.workspaces.ui","expand-path","nubank.workspaces.ui/expand-path",-795465683),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-ns","test-ns",332567313),ns], null),null,(1),null)))))),null,(1),null)))))], null));
});})(vec__60150,ns,cards__$1,s__60143__$2,temp__5753__auto__,map__60102,map__60102__$1,uis,tests,map__60093,map__60093__$1,cards,ws_tabs,workspaces,settings,expanded,spotlight,show_spotlight_QMARK_,show_help_modal_QMARK_))
], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-ns","test-ns",332567313),ns], null)))?nubank.workspaces.ui.core.arrow_down:nubank.workspaces.ui.core.arrow_right)], 0)),(function (){var G__60153 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ns)], null);
return (nubank.workspaces.ui.card_index_listing.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.card_index_listing.cljs$core$IFn$_invoke$arity$1(G__60153) : nubank.workspaces.ui.card_index_listing.call(null,G__60153));
})()], 0)),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expanded,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-ns","test-ns",332567313),ns], null)))?com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".nest-group",".nest-group",-588503719),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nubank.workspaces.ui.card_index_listing,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809),cards__$1))], 0)):null)], 0)),nubank$workspaces$ui$render_WorkspacesRoot_$_iter__60142(cljs.core.rest(s__60143__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nubank.workspaces.model","card-unlisted?","nubank.workspaces.model/card-unlisted?",-302030555),tests))));
})()], 0));
})():com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".menu-show",".menu-show",-330773335),com.fulcrologic.fulcro_css.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".index-action-button",".index-action-button",859695279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("nubank.workspaces.ui","toggle-index-view","nubank.workspaces.ui/toggle-index-view",-2043129614,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))], null));
})], null),"\u00BB"], 0))], 0))),com.fulcrologic.fulcro_css.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".workspaces",".workspaces",317220476),(nubank.workspaces.ui.workspace_tabs.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.workspace_tabs.cljs$core$IFn$_invoke$arity$1(ws_tabs) : nubank.workspaces.ui.workspace_tabs.call(null,ws_tabs))], 0))], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.WorkspacesRoot !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.WorkspacesRoot = (function nubank$workspaces$ui$WorkspacesRoot(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___60574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___60503,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___60574)){
var init_state__48888__auto___60575 = temp__5751__auto___60574;
(this__48887__auto__.state = (function (){var obj60155 = ({"fulcro$state":(function (){var G__60156 = this__48887__auto__;
var G__60157 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___60575.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___60575.cljs$core$IFn$_invoke$arity$2(G__60156,G__60157) : init_state__48888__auto___60575.call(null,G__60156,G__60157));
})()});
return obj60155;
})());
} else {
(this__48887__auto__.state = (function (){var obj60159 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj60159;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.WorkspacesRoot,new cljs.core.Keyword("nubank.workspaces.ui","WorkspacesRoot","nubank.workspaces.ui/WorkspacesRoot",-113702147),options__48885__auto___60503);
nubank.workspaces.ui.workspaces_root = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.WorkspacesRoot);

//# sourceMappingURL=nubank.workspaces.ui.js.map
