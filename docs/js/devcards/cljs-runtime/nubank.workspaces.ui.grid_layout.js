goog.provide('nubank.workspaces.ui.grid_layout');
goog.scope(function(){
  nubank.workspaces.ui.grid_layout.goog$module$goog$object = goog.module.get('goog.object');
});
nubank.workspaces.ui.grid_layout.column_size = (120);
nubank.workspaces.ui.grid_layout.max_columns = (20);
nubank.workspaces.ui.grid_layout.columns_step = (2);
nubank.workspaces.ui.grid_layout.breakpoints = cljs.core.vec((function (){var iter__4652__auto__ = (function nubank$workspaces$ui$grid_layout$iter__59026(s__59027){
return (new cljs.core.LazySeq(null,(function (){
var s__59027__$1 = s__59027;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59027__$1);
if(temp__5753__auto__){
var s__59027__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59027__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59027__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59029 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59028 = (0);
while(true){
if((i__59028 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__59028);
var c = (i + nubank.workspaces.ui.grid_layout.columns_step);
cljs.core.chunk_append(b__59029,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''),new cljs.core.Keyword(null,"cols","cols",-1914801295),c,new cljs.core.Keyword(null,"breakpoint","breakpoint",1183378440),(((i === (0)))?(0):(c * nubank.workspaces.ui.grid_layout.column_size))], null));

var G__59099 = (i__59028 + (1));
i__59028 = G__59099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59029),nubank$workspaces$ui$grid_layout$iter__59026(cljs.core.chunk_rest(s__59027__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59029),null);
}
} else {
var i = cljs.core.first(s__59027__$2);
var c = (i + nubank.workspaces.ui.grid_layout.columns_step);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''),new cljs.core.Keyword(null,"cols","cols",-1914801295),c,new cljs.core.Keyword(null,"breakpoint","breakpoint",1183378440),(((i === (0)))?(0):(c * nubank.workspaces.ui.grid_layout.column_size))], null),nubank$workspaces$ui$grid_layout$iter__59026(cljs.core.rest(s__59027__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),nubank.workspaces.ui.grid_layout.max_columns,nubank.workspaces.ui.grid_layout.columns_step));
})());
nubank.workspaces.ui.grid_layout.grid_item_css = (function nubank$workspaces$ui$grid_layout$grid_item_css(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$react-grid-item","$react-grid-item",-602734337),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59053 = (garden.selectors.not.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.not.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,".react-grid-placeholder",".react-grid-placeholder",-1359549304)) : garden.selectors.not.call(null,new cljs.core.Keyword(null,".react-grid-placeholder",".react-grid-placeholder",-1359549304)));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__59053) : garden.selectors._AMPERSAND_.call(null,G__59053));
})(),props], null)], null);
});
nubank.workspaces.ui.grid_layout.WidthProvider = ReactGridLayout.WidthProvider;
nubank.workspaces.ui.grid_layout.Responsive = ReactGridLayout.Responsive;
nubank.workspaces.ui.grid_layout.GridWithWidth = (nubank.workspaces.ui.grid_layout.WidthProvider.cljs$core$IFn$_invoke$arity$1 ? nubank.workspaces.ui.grid_layout.WidthProvider.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.grid_layout.Responsive) : nubank.workspaces.ui.grid_layout.WidthProvider.call(null,nubank.workspaces.ui.grid_layout.Responsive));

var options__48885__auto___59103 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$react-grid-layout","$react-grid-layout",981237676),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"transition","transition",765692007),"height 200ms ease"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$react-grid-item","$react-grid-item",-602734337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 200ms ease",new cljs.core.Keyword(null,"transition-property","transition-property",2036650935),"left, top"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$cssTransforms","&$cssTransforms",-517931914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition-property","transition-property",2036650935),"transform"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$resizing","&$resizing",321290676),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),"1",new cljs.core.Keyword(null,"will-change","will-change",-152752061),"width, height"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$react-draggable-dragging","&$react-draggable-dragging",-1158002458),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transition","transition",765692007),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"3",new cljs.core.Keyword(null,"will-change","will-change",-152752061),"transform"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&$react-grid-placeholder","&$react-grid-placeholder",-688504279),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"-ms-user-select","-ms-user-select",953709445),new cljs.core.Keyword(null,"-o-user-select","-o-user-select",-1433064762),new cljs.core.Keyword(null,"-moz-user-select","-moz-user-select",-342302744),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"transition-duration","transition-duration",85784092),new cljs.core.Keyword(null,"user-select","user-select",-346451650)],["none","none","none","none","red","2","0.2","100ms","none"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$react-resizable-handle","$react-resizable-handle",-157361248),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0",new cljs.core.Keyword(null,"right","right",-452581833),"0",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"se-resize"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"content","content",15833224),"\"\"",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),"5px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"5px",new cljs.core.Keyword(null,"width","width",-384071477),"5px",new cljs.core.Keyword(null,"height","height",1025178622),"5px",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"2px solid rgba(0, 0, 0, 0.4)",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid rgba(0, 0, 0, 0.4)"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$react-resizable","$react-resizable",690214542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$react-resizable-handle","$react-resizable-handle",-157361248),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"background-origin","background-origin",79411540),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),new cljs.core.Keyword(null,"background-position","background-position",1112702746),new cljs.core.Keyword(null,"height","height",1025178622)],["border-box","0","20px","se-resize","content-box","0 3px 3px 0","0","absolute","no-repeat","bottom right","20px"])], null),nubank.workspaces.ui.grid_layout.grid_item_css(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),nubank.workspaces.ui.core.card_border_radius,new cljs.core.Keyword(null,"display","display",242065432),"flex"], null))], null),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
var map__59065 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59065__$1 = cljs.core.__destructure_map(map__59065);
var onBreakpointChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59065__$1,new cljs.core.Keyword(null,"onBreakpointChange","onBreakpointChange",1104296229));
var width = nubank.workspaces.ui.grid_layout.goog$module$goog$object.get((function (){var G__59068 = nubank.workspaces.ui.grid_layout.goog$module$goog$object.getValueByKeys(this$,"grid");
return (com.fulcrologic.fulcro_css.localized_dom.node.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro_css.localized_dom.node.cljs$core$IFn$_invoke$arity$1(G__59068) : com.fulcrologic.fulcro_css.localized_dom.node.call(null,G__59068));
})(),"offsetWidth");
var bp = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59057_SHARP_){
return (width >= new cljs.core.Keyword(null,"breakpoint","breakpoint",1183378440).cljs$core$IFn$_invoke$arity$1(p1__59057_SHARP_));
}),cljs.core.rseq(nubank.workspaces.ui.grid_layout.breakpoints))));
return (onBreakpointChange.cljs$core$IFn$_invoke$arity$1 ? onBreakpointChange.cljs$core$IFn$_invoke$arity$1(bp) : onBreakpointChange.call(null,bp));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function nubank$workspaces$ui$grid_layout$render_GridLayout(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var G__59073 = nubank.workspaces.ui.grid_layout.GridWithWidth;
var G__59074 = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__59058_SHARP_){
return nubank.workspaces.ui.grid_layout.goog$module$goog$object.set(this$,"grid",p1__59058_SHARP_);
})));
var G__59075 = com.fulcrologic.fulcro.components.children(this$);
return (com.fulcrologic.fulcro_css.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro_css.localized_dom.create_element.cljs$core$IFn$_invoke$arity$3(G__59073,G__59074,G__59075) : com.fulcrologic.fulcro_css.localized_dom.create_element.call(null,G__59073,G__59074,G__59075));
}));
})], null);
if((typeof nubank !== 'undefined') && (typeof nubank.workspaces !== 'undefined') && (typeof nubank.workspaces.ui !== 'undefined') && (typeof nubank.workspaces.ui.grid_layout !== 'undefined') && (typeof nubank.workspaces.ui.grid_layout.GridLayout !== 'undefined')){
} else {
/**
 * @constructor
 */
nubank.workspaces.ui.grid_layout.GridLayout = (function nubank$workspaces$ui$grid_layout$GridLayout(props__48886__auto__){
var this__48887__auto__ = this;
var temp__5751__auto___59114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__48885__auto___59103,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___59114)){
var init_state__48888__auto___59115 = temp__5751__auto___59114;
(this__48887__auto__.state = (function (){var obj59086 = ({"fulcro$state":(function (){var G__59088 = this__48887__auto__;
var G__59089 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__48886__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__48886__auto__,"fulcro$value"));
return (init_state__48888__auto___59115.cljs$core$IFn$_invoke$arity$2 ? init_state__48888__auto___59115.cljs$core$IFn$_invoke$arity$2(G__59088,G__59089) : init_state__48888__auto___59115.call(null,G__59088,G__59089));
})()});
return obj59086;
})());
} else {
(this__48887__auto__.state = (function (){var obj59092 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj59092;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(nubank.workspaces.ui.grid_layout.GridLayout,new cljs.core.Keyword("nubank.workspaces.ui.grid-layout","GridLayout","nubank.workspaces.ui.grid-layout/GridLayout",523926778),options__48885__auto___59103);
nubank.workspaces.ui.grid_layout.grid_layout = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(nubank.workspaces.ui.grid_layout.GridLayout);

//# sourceMappingURL=nubank.workspaces.ui.grid_layout.js.map
