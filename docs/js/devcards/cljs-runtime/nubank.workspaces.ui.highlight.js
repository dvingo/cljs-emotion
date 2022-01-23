goog.provide('nubank.workspaces.ui.highlight');

var options__48885__auto___58970 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
return hljs.highlightBlock((com.fulcrologic.fulcro_css.localized_dom.node.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.localized_dom.node.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro_css.localized_dom.node.call(null,this$)));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$highlight$render_Highlight(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__58960 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__58960__$1 = cljs.core.__destructure_map(map__58960);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58960__$1,new cljs.core.Keyword("nubank.workspaces.ui.highlight","source","nubank.workspaces.ui.highlight/source",161213844));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58960__$1,new cljs.core.Keyword("nubank.workspaces.ui.highlight","language","nubank.workspaces.ui.highlight/language",496856371));
return com.fulcrologic.fulcro_css.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__4253__auto__ = language;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "clojure";
}
})()], null),source], 0));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.highlight !== 'undefined') && (typeof nubank.workspaces.ui.highlight.Highlight !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.highlight.Highlight = (function nubank$workspaces$ui$highlight$Highlight(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___58977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___58970,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___58977)){
var init_state__48888__auto___58978 = temp__5751__auto___58977;
(this__48887__auto__.state = (function (){var obj58965 = ({"fulcro$state":(function (){var G__58966 = this__48887__auto__;
var G__58967 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___58978.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___58978.cljs$core$IFn$_invoke$arity$2(G__58966,G__58967) : init_state__48888__auto___58978.call(null,G__58966,G__58967));
})()});
return obj58965;
})());
} else {
(this__48887__auto__.state = (function (){var obj58969 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj58969;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.highlight.Highlight,new cljs.core.Keyword("nubank.workspaces.ui.highlight","Highlight","nubank.workspaces.ui.highlight/Highlight",346292055),options__48885__auto___58970);
nubank.workspaces.ui.highlight.highlight = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.highlight.Highlight);

//# sourceMappingURL=nubank.workspaces.ui.highlight.js.map
