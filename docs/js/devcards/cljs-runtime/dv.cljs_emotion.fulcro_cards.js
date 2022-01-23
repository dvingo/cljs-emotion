goog.provide('dv.cljs_emotion.fulcro_cards');
var module$node_modules$polished$dist$polished_cjs=shadow.js.require("module$node_modules$polished$dist$polished_cjs", {});

var options__48885__auto___82798 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function dv$cljs_emotion$fulcro_cards$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"text","text",-1790561697)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function dv$cljs_emotion$fulcro_cards$ident_STAR_(this$,p__82781,_){
var map__82782 = p__82781;
var map__82782__$1 = cljs.core.__destructure_map(map__82782);
var props = map__82782__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82782__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82782__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dv.cljs-emotion.fulcro-cards","id","dv.cljs-emotion.fulcro-cards/id",-203008471),new cljs.core.Keyword(null,"button","button",1456579943)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function dv$cljs_emotion$fulcro_cards$build_raw_initial_state_STAR_(_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world"], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function dv$cljs_emotion$fulcro_cards$render_Button(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__82784 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__82784__$1 = cljs.core.__destructure_map(map__82784);
var props = map__82784__$1;
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82784__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82784__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),className], null),text], null),null)], null),null);
}));
})], null);
if((typeof dv !== 'undefined') && (typeof dv.cljs_emotion !== 'undefined') && (typeof dv.cljs_emotion.fulcro_cards !== 'undefined') && (typeof dv.cljs_emotion.fulcro_cards.Button !== 'undefined')){
} else {
/**
 * @constructor
 */
dv.cljs_emotion.fulcro_cards.Button = (function dv$cljs_emotion$fulcro_cards$Button(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___82805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___82798,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___82805)){
var init_state__48888__auto___82806 = temp__5751__auto___82805;
(this__48887__auto__.state = (function (){var obj82786 = ({"fulcro$state":(function (){var G__82787 = this__48887__auto__;
var G__82788 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___82806.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___82806.cljs$core$IFn$_invoke$arity$2(G__82787,G__82788) : init_state__48888__auto___82806.call(null,G__82787,G__82788));
})()});
return obj82786;
})());
} else {
(this__48887__auto__.state = (function (){var obj82796 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj82796;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(dv.cljs_emotion.fulcro_cards.Button,new cljs.core.Keyword("dv.cljs-emotion.fulcro-cards","Button","dv.cljs-emotion.fulcro-cards/Button",2115191650),options__48885__auto___82798);
dv.cljs_emotion.fulcro_cards.ui_button = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(dv.cljs_emotion.fulcro_cards.Button);
if((typeof dv !== 'undefined') && (typeof dv.cljs_emotion !== 'undefined') && (typeof dv.cljs_emotion.fulcro_cards !== 'undefined') && (typeof dv.cljs_emotion.fulcro_cards.app_id !== 'undefined')){
} else {
dv.cljs_emotion.fulcro_cards.app_id = cljs.core.random_uuid();
}
dv.cljs_emotion.fulcro_cards.fulcro_app = dv.devcards_fulcro3.upsert_app(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("dv.devcards-fulcro3","root","dv.devcards-fulcro3/root",686837000),dv.cljs_emotion.fulcro_cards.Button,new cljs.core.Keyword("dv.devcards-fulcro3","root-state","dv.devcards-fulcro3/root-state",-2043604530),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("dv.devcards-fulcro3","wrap-root?","dv.devcards-fulcro3/wrap-root?",-194762109),true,new cljs.core.Keyword("dv.devcards-fulcro3","persistence-key","dv.devcards-fulcro3/persistence-key",-1297056889),dv.cljs_emotion.fulcro_cards.app_id,new cljs.core.Keyword("dv.devcards-fulcro3","app","dv.devcards-fulcro3/app",1543639816),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),dv.cljs_emotion.fulcro_cards.app_id], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.fulcro_cards","dv.cljs_emotion.fulcro_cards",119976176),new cljs.core.Keyword(null,"dv-test-fulcro-styled-button","dv-test-fulcro-styled-button",-608433637)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"dv-test-fulcro-styled-button",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_((function (_,dom_node){
return dv.devcards_fulcro3.mount_at(dv.cljs_emotion.fulcro_cards.fulcro_app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("dv.devcards-fulcro3","root","dv.devcards-fulcro3/root",686837000),dv.cljs_emotion.fulcro_cards.Button,new cljs.core.Keyword("dv.devcards-fulcro3","wrap-root?","dv.devcards-fulcro3/wrap-root?",-194762109),true,new cljs.core.Keyword("dv.devcards-fulcro3","persistence-key","dv.devcards-fulcro3/persistence-key",-1297056889),dv.cljs_emotion.fulcro_cards.app_id], null),dom_node);
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=dv.cljs_emotion.fulcro_cards.js.map
