goog.provide('dv.devcards_fulcro3');
dv.devcards_fulcro3.html = (new borkdude.dynaload.LazyVar((function (){
if((typeof sablono !== 'undefined') && (typeof sablono.core !== 'undefined') && (typeof sablono.core.html !== 'undefined')){
return sablono.core.html;
} else {
var temp__5751__auto__ = cljs.core.find(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"default","default",-1987822328));
if(cljs.core.truth_(temp__5751__auto__)){
var e__46726__auto__ = temp__5751__auto__;
return cljs.core.val(e__46726__auto__);
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("sablono.core","html","sablono.core/html",-1737605261,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("sablono.core","html","sablono.core/html",-1737605261,null))," never required"].join('')));
}
}
}),null));
dv.devcards_fulcro3.r_as_element = (new borkdude.dynaload.LazyVar((function (){
if((typeof reagent !== 'undefined') && (typeof reagent.core !== 'undefined') && (typeof reagent.core.as_element !== 'undefined')){
return reagent.core.as_element;
} else {
var temp__5751__auto__ = cljs.core.find(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"default","default",-1987822328));
if(cljs.core.truth_(temp__5751__auto__)){
var e__46726__auto__ = temp__5751__auto__;
return cljs.core.val(e__46726__auto__);
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("reagent.core","as-element","reagent.core/as-element",-1369748434,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("reagent.core","as-element","reagent.core/as-element",-1369748434,null))," never required"].join('')));
}
}
}),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("dv.devcards-fulcro3","root","dv.devcards-fulcro3/root",686837000),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("dv.devcards-fulcro3","wrap-root?","dv.devcards-fulcro3/wrap-root?",-194762109),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("dv.devcards-fulcro3","app","dv.devcards-fulcro3/app",1543639816),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("dv.devcards-fulcro3","persistence-key","dv.devcards-fulcro3/persistence-key",-1297056889),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("dv.devcards-fulcro3","initial-state","dv.devcards-fulcro3/initial-state",-906049907),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn?","fn?",180459291),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"factory-param","factory-param",-492106999),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn?","fn?",180459291),new cljs.core.Keyword(null,"factory-param","factory-param",-492106999)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.any_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("dv.devcards-fulcro3","root-state","dv.devcards-fulcro3/root-state",-2043604530),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("dv.devcards-fulcro3","computed","dv.devcards-fulcro3/computed",1693992759),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("dv.devcards-fulcro3","root-node-props","dv.devcards-fulcro3/root-node-props",-590818473),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
if((typeof dv !== 'undefined') && (typeof dv.devcards_fulcro3 !== 'undefined') && (typeof dv.devcards_fulcro3.persistent_apps_STAR_ !== 'undefined')){
} else {
dv.devcards_fulcro3.persistent_apps_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
dv.devcards_fulcro3.safe_initial_state = (function dv$devcards_fulcro3$safe_initial_state(comp,params){
if(com.fulcrologic.fulcro.components.has_initial_app_state_QMARK_(comp)){
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(comp,params) : com.fulcrologic.fulcro.components.get_initial_state.call(null,comp,params));
} else {
return params;
}
});
dv.devcards_fulcro3.make_root = (function dv$devcards_fulcro3$make_root(Root){
var generated_name = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var component_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("dv.devcards-fulcro3",cljs.core.name(generated_name));
return com.fulcrologic.fulcro.components.configure_component_BANG_((function dv$devcards_fulcro3$make_root_$__STAR_dyn_root_STAR_(){
return null;
}),component_key,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function (_,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),(function (){var or__4253__auto__ = dv.devcards_fulcro3.safe_initial_state(Root,params);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(Root)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (this$){
var map__60273 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__60273__$1 = cljs.core.__destructure_map(map__60273);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60273__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
var Root__$1 = (function (){var G__60274 = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(Root) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,Root));
return (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(G__60274) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,G__60274));
})();
var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(Root__$1);
var computed = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dv.devcards-fulcro3","computed","dv.devcards-fulcro3/computed",1693992759));
if(cljs.core.seq(root)){
var G__60275 = (function (){var G__60276 = root;
if(cljs.core.truth_(computed)){
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__60276,computed) : com.fulcrologic.fulcro.components.computed.call(null,G__60276,computed));
} else {
return G__60276;
}
})();
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__60275) : factory.call(null,G__60275));
} else {
return null;
}
})], null));
});
dv.devcards_fulcro3.fulcro_initial_state = (function dv$devcards_fulcro3$fulcro_initial_state(p__60277){
var map__60278 = p__60277;
var map__60278__$1 = cljs.core.__destructure_map(map__60278);
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60278__$1,new cljs.core.Keyword("dv.devcards-fulcro3","initial-state","dv.devcards-fulcro3/initial-state",-906049907),cljs.core.PersistentArrayMap.EMPTY);
var wrap_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60278__$1,new cljs.core.Keyword("dv.devcards-fulcro3","wrap-root?","dv.devcards-fulcro3/wrap-root?",-194762109),true);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60278__$1,new cljs.core.Keyword("dv.devcards-fulcro3","root","dv.devcards-fulcro3/root",686837000));
var root_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60278__$1,new cljs.core.Keyword("dv.devcards-fulcro3","root-state","dv.devcards-fulcro3/root-state",-2043604530));
var state_tree = ((cljs.core.fn_QMARK_(initial_state))?(function (){var G__60279 = dv.devcards_fulcro3.safe_initial_state(root,null);
return (initial_state.cljs$core$IFn$_invoke$arity$1 ? initial_state.cljs$core$IFn$_invoke$arity$1(G__60279) : initial_state.call(null,G__60279));
})():dv.devcards_fulcro3.safe_initial_state(root,initial_state));
var wrapped = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(wrap_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),state_tree], null):state_tree),root_state], 0));
var Root = (cljs.core.truth_(wrap_root_QMARK_)?dv.devcards_fulcro3.make_root(root):root);
var db = com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(Root,wrapped,true,com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
return db;
});
dv.devcards_fulcro3.upsert_app = (function dv$devcards_fulcro3$upsert_app(p__60280){
var map__60281 = p__60280;
var map__60281__$1 = cljs.core.__destructure_map(map__60281);
var config = map__60281__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60281__$1,new cljs.core.Keyword("dv.devcards-fulcro3","app","dv.devcards-fulcro3/app",1543639816));
var persistence_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60281__$1,new cljs.core.Keyword("dv.devcards-fulcro3","persistence-key","dv.devcards-fulcro3/persistence-key",-1297056889));
var computed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60281__$1,new cljs.core.Keyword("dv.devcards-fulcro3","computed","dv.devcards-fulcro3/computed",1693992759));
var app_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60281__$1,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233));
var temp__5751__auto__ = (function (){var and__4251__auto__ = persistence_key;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dv.devcards_fulcro3.persistent_apps_STAR_),persistence_key);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var instance = temp__5751__auto__;
return instance;
} else {
var app_options = (function (){var G__60282 = app;
var G__60282__$1 = (((!(cljs.core.contains_QMARK_(app,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60282,new cljs.core.Keyword(null,"initial-db","initial-db",1939835102),dv.devcards_fulcro3.fulcro_initial_state(config)):G__60282);
var G__60282__$2 = (cljs.core.truth_(computed)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__60282__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.assoc,new cljs.core.Keyword("dv.devcards-fulcro3","computed","dv.devcards-fulcro3/computed",1693992759),computed):G__60282__$1);
if(cljs.core.truth_(app_id)){
return cljs.core.assoc_in(G__60282__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-db","initial-db",1939835102),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233)], null),app_id);
} else {
return G__60282__$2;
}
})();
var instance = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(app_options);
if(cljs.core.truth_(persistence_key)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dv.devcards_fulcro3.persistent_apps_STAR_,cljs.core.assoc,persistence_key,instance);
} else {
}

return instance;
}
});
dv.devcards_fulcro3.dispose_app = (function dv$devcards_fulcro3$dispose_app(p__60283){
var map__60284 = p__60283;
var map__60284__$1 = cljs.core.__destructure_map(map__60284);
var app = map__60284__$1;
var persistence_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60284__$1,new cljs.core.Keyword("dv.devcards-fulcro3","persistence-key","dv.devcards-fulcro3/persistence-key",-1297056889));
if(cljs.core.truth_(persistence_key)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dv.devcards_fulcro3.persistent_apps_STAR_,cljs.core.dissoc,persistence_key);
} else {
}

var temp__5753__auto__ = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app);
if(cljs.core.truth_(temp__5753__auto__)){
var app_uuid = temp__5753__auto__;
return com.fulcrologic.fulcro.inspect.inspect_client.dispose_app(app_uuid);
} else {
return null;
}
});
dv.devcards_fulcro3.mount_at = (function dv$devcards_fulcro3$mount_at(app,p__60289,node){
var map__60291 = p__60289;
var map__60291__$1 = cljs.core.__destructure_map(map__60291);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60291__$1,new cljs.core.Keyword("dv.devcards-fulcro3","root","dv.devcards-fulcro3/root",686837000));
var wrap_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60291__$1,new cljs.core.Keyword("dv.devcards-fulcro3","wrap-root?","dv.devcards-fulcro3/wrap-root?",-194762109),true);
var persistence_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60291__$1,new cljs.core.Keyword("dv.devcards-fulcro3","persistence-key","dv.devcards-fulcro3/persistence-key",-1297056889));
var instance = (cljs.core.truth_(wrap_root_QMARK_)?dv.devcards_fulcro3.make_root(root):root);
com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$4(app,instance,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519),false], null));

if(cljs.core.truth_(persistence_key)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dv.devcards_fulcro3.persistent_apps_STAR_,cljs.core.assoc,persistence_key,app);
} else {
}

return app;
});
dv.devcards_fulcro3.inspector_set_app = (function dv$devcards_fulcro3$inspector_set_app(card_id){
var map__60293 = nubank.workspaces.data.active_card(card_id);
var map__60293__$1 = cljs.core.__destructure_map(map__60293);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60293__$1,new cljs.core.Keyword("dv.devcards-fulcro3","app","dv.devcards-fulcro3/app",1543639816));
var app_uuid = com.fulcrologic.fulcro.inspect.inspect_client.app_uuid(app);
if(cljs.core.truth_(app_uuid)){
return com.fulcrologic.fulcro.inspect.inspect_client.set_active_app(app_uuid);
} else {
return null;
}
});
dv.devcards_fulcro3.fulcro_card_init = (function dv$devcards_fulcro3$fulcro_card_init(p__60294,config){
var map__60296 = p__60294;
var map__60296__$1 = cljs.core.__destructure_map(map__60296);
var card = map__60296__$1;
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60296__$1,new cljs.core.Keyword("nubank.workspaces.model","card-id","nubank.workspaces.model/card-id",605424809));
var app = dv.devcards_fulcro3.upsert_app(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),card_id));
return nubank.workspaces.card_types.util.positioned_card(card,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("nubank.workspaces.model","dispose","nubank.workspaces.model/dispose",829517204),(function (node){
dv.devcards_fulcro3.dispose_app(app);

return ReactDOM.unmountComponentAtNode(node);
}),new cljs.core.Keyword("nubank.workspaces.model","refresh","nubank.workspaces.model/refresh",-816174567),(function (_){
return com.fulcrologic.fulcro.application.force_root_render_BANG_(app);
}),new cljs.core.Keyword("nubank.workspaces.model","render","nubank.workspaces.model/render",125050774),(function (node){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nubank.workspaces.data.active_cards_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_id,new cljs.core.Keyword("dv.devcards-fulcro3","app","dv.devcards-fulcro3/app",1543639816)], null),app);

return dv.devcards_fulcro3.mount_at(app,config,node);
}),new cljs.core.Keyword("nubank.workspaces.model","render-toolbar","nubank.workspaces.model/render-toolbar",-1738138937),(function (){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60298 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return dv.devcards_fulcro3.inspector_set_app(card_id);
})], null);
var G__60299 = "Inspector";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__60298,G__60299) : nubank.workspaces.ui.core.button.call(null,G__60298,G__60299));
})(),(function (){var G__60301 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return nubank.workspaces.ui.restart_card(card_id);
})], null);
var G__60302 = "Restart";
return (nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2 ? nubank.workspaces.ui.core.button.cljs$core$IFn$_invoke$arity$2(G__60301,G__60302) : nubank.workspaces.ui.core.button.call(null,G__60301,G__60302));
})()], null),null);
}),new cljs.core.Keyword("dv.devcards-fulcro3","app","dv.devcards-fulcro3/app",1543639816),app], null));
});

//# sourceMappingURL=dv.devcards_fulcro3.js.map
