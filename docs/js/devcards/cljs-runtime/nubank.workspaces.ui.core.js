goog.provide('nubank.workspaces.ui.core');
nubank.workspaces.ui.core.color_white = "#fff";
nubank.workspaces.ui.core.color_light_grey = "#b1b1b1";
nubank.workspaces.ui.core.color_dark_grey = "#404040";
nubank.workspaces.ui.core.color_mystic = "#d9e2e9";
nubank.workspaces.ui.core.color_limed_spruce = "#323c47";
nubank.workspaces.ui.core.color_geyser = "#cdd7e0";
nubank.workspaces.ui.core.color_fiord = "#4b5b6d";
nubank.workspaces.ui.core.color_iron = "#e7e8e9";
nubank.workspaces.ui.core.color_red_dark = "#ca2c29";
nubank.workspaces.ui.core.color_red_light = "#f37976";
nubank.workspaces.ui.core.color_green_dark = "#187d11";
nubank.workspaces.ui.core.color_mint_green = "#8efd86";
nubank.workspaces.ui.core.color_green_light = "#61d658";
nubank.workspaces.ui.core.color_yellow = "#dea54e";
nubank.workspaces.ui.core.card_border_radius = "6px";
nubank.workspaces.ui.core.font_helvetica = "Helvetica Neue,Arial,Helvetica,sans-serif";
nubank.workspaces.ui.core.font_open_sans = "'Open Sans', sans-serif";
nubank.workspaces.ui.core.font_monospace = "monospace";
nubank.workspaces.ui.core.font_os12sb = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),nubank.workspaces.ui.core.font_open_sans,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600"], null);
nubank.workspaces.ui.core.header_color = (function nubank$workspaces$ui$core$header_color(card,bg){
var G__58963_58992 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),bg], null);
var fexpr__58962_58993 = new cljs.core.Keyword("nubank.workspaces.model","set-card-header-style","nubank.workspaces.model/set-card-header-style",1976817478).cljs$core$IFn$_invoke$arity$1(card);
(fexpr__58962_58993.cljs$core$IFn$_invoke$arity$1 ? fexpr__58962_58993.cljs$core$IFn$_invoke$arity$1(G__58963_58992) : fexpr__58962_58993.call(null,G__58963_58992));

return null;
});
nubank.workspaces.ui.core.arrow_right = "\u25B6";
nubank.workspaces.ui.core.arrow_down = "\u25BC";
nubank.workspaces.ui.core.box_shadow = "0 6px 6px rgba(0, 0, 0, 0.26),\n                 0 10px 20px rgba(0, 0, 0, 0.19),\n                 0 0 2px rgba(0,0,0,0.3)";
nubank.workspaces.ui.core.box_shadow_2 = "rgba(0, 0, 0, 0.15) 0px 1px 4px,\n                   rgba(0, 0, 0, 0.15) 0px 1px 1px";
nubank.workspaces.ui.core.close_icon_css = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"23px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1em"], null);
nubank.workspaces.ui.core.more_icon = (function nubank$workspaces$ui$core$more_icon(props){
return com.fulcrologic.fulcro_css.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(19),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 40 40"], null),props], 0)),com.fulcrologic.fulcro_css.localized_dom.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000"], null),com.fulcrologic.fulcro_css.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"m20 26.6c1.8 0 3.4 1.6 3.4 3.4s-1.6 3.4-3.4 3.4-3.4-1.6-3.4-3.4 1.6-3.4 3.4-3.4z m0-10c1.8 0 3.4 1.6 3.4 3.4s-1.6 3.4-3.4 3.4-3.4-1.6-3.4-3.4 1.6-3.4 3.4-3.4z m0-3.2c-1.8 0-3.4-1.6-3.4-3.4s1.6-3.4 3.4-3.4 3.4 1.6 3.4 3.4-1.6 3.4-3.4 3.4z"], null)], 0))], 0))], 0));
});

var options__48885__auto___59005 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".button",".button",48002398),nubank.workspaces.ui.core.font_os12sb,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"user-select","user-select",-346451650)],["1.5",nubank.workspaces.ui.core.color_white,"center","middle","nowrap",nubank.workspaces.ui.core.color_fiord,"pointer","2px 8px","none","inline-block","none","3px","0","none"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:disabled","&:disabled",1179821010),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"#8c95a0",new cljs.core.Keyword(null,"color","color",1011675173),"#ccc",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"not-allowed"], null)], null)], null)], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$core$render_Button(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro_css.localized_dom.button,new cljs.core.Keyword(null,".button",".button",48002398),props,com.fulcrologic.fulcro.components.children(this$));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.core !== 'undefined') && (typeof nubank.workspaces.ui.core.Button !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.core.Button = (function nubank$workspaces$ui$core$Button(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___59009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___59005,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___59009)){
var init_state__48888__auto___59010 = temp__5751__auto___59009;
(this__48887__auto__.state = (function (){var obj58972 = ({"fulcro$state":(function (){var G__58973 = this__48887__auto__;
var G__58974 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___59010.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___59010.cljs$core$IFn$_invoke$arity$2(G__58973,G__58974) : init_state__48888__auto___59010.call(null,G__58973,G__58974));
})()});
return obj58972;
})());
} else {
(this__48887__auto__.state = (function (){var obj58976 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj58976;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.core.Button,new cljs.core.Keyword("nubank.workspaces.ui.core","Button","nubank.workspaces.ui.core/Button",1894545803),options__48885__auto___59005);
nubank.workspaces.ui.core.button = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.core.Button);

var options__48885__auto___59013 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css-include","css-include",559023012),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nubank.workspaces.ui.core.Button], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$core$render_CSS(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _ = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return null;
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.core !== 'undefined') && (typeof nubank.workspaces.ui.core.CSS !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.core.CSS = (function nubank$workspaces$ui$core$CSS(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___59020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___59013,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___59020)){
var init_state__48888__auto___59021 = temp__5751__auto___59020;
(this__48887__auto__.state = (function (){var obj58986 = ({"fulcro$state":(function (){var G__58987 = this__48887__auto__;
var G__58988 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___59021.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___59021.cljs$core$IFn$_invoke$arity$2(G__58987,G__58988) : init_state__48888__auto___59021.call(null,G__58987,G__58988));
})()});
return obj58986;
})());
} else {
(this__48887__auto__.state = (function (){var obj58990 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj58990;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.core.CSS,new cljs.core.Keyword("nubank.workspaces.ui.core","CSS","nubank.workspaces.ui.core/CSS",-1287121972),options__48885__auto___59013);

//# sourceMappingURL=nubank.workspaces.ui.core.js.map
