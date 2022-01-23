goog.provide('dv.cljs_emotion.devcards');
var module$node_modules$polished$dist$polished_cjs=shadow.js.require("module$node_modules$polished$dist$polished_cjs", {});
cljs.core.enable_console_print_BANG_();
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  Hi there. This page uses devcards to demonstrate usage of the dv.cljs-emotion library.\n  This library is a small wrapper around the emotion css-in-js JavaScript library that\n  makes it easy to use all of CSS within a react application.\n\n  The source of these cards can be found here:\n  https://github.com/dvingo/cljs-emotion/tree/master/src/dev/dv/cljs_emotion\n\n  The main API of this library is: `[defstyled keyframes global-style theme-provider]`\n\n  defstyled is a wrapper around `@emotion/styled`\n  Styled is multi-arity and supports passing functions that return maps of styles, a vector of styles that\n  will be merged top down (first to last) and a map, you can also pass JavaScript objects and arrays.\n\n  This library converts between cljs and js structures, but the multi-arity capability is built into emotion already.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Use it\n\nRequire the library:\n```clojure\n(require [dv.cljs-emotion :refer [defstyled keyframes global-style theme-provider]])\n```\n\nOr for reagent support:\n```clojure\n(require [dv.cljs-emotion-reagent :refer [defstyled keyframes global-style theme-provider]])\n```\n\nYou can pass any number of children to defstyled:\n\n```clojure\n(defstyled sample1 :div\n  {:background-color \"RebeccaPurple\"})\n```\n\n```clojure\n(defstyled sample1 :div\n {:background-color \"RebeccaPurple\"}\n #js{:color \"yellow\"}\n (fn [props] {:border-radius 4}))\n```\n\nThis library delegates to emotion's styled API, while adding a transform layer for cljs->js data structures.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
dv.cljs_emotion.devcards.global_data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on?","on?",-74017086),false], null));
dv.cljs_emotion.devcards.btn_styles = new cljs.core.PersistentArrayMap(null, 1, ["button",cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),":hover",":active",new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"margin","margin",-995903681)],["1rem",["inset 0 1px 0 white, inset 0 -1px 0 #d9d9d9,"," inset    0 0 0 1px #f2f2f2, 0 2px 4px rgba(0, 0, 0, 0.2)"].join(''),"#8c8c8c","top","all 20ms ease-out",(700),"#f2f2f2","pointer","linear-gradient(to bottom, #f2f2f2, #f2f2f2)",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"#f2f2f2",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#8c8c8c",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"inset 0 1px 0 white, inset 0 -1px 0 #d9d9d9, inset 0 0 0 1px #f2f2f2"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"inset 0 2px 3px rgba(0, 0, 0, 0.2)"], null),"9px 16px 9px","0 1px 0 rgba(255, 255, 255, 0.5)","1px solid #bfbfbf",(3),"sans-serif","16px 0 0 16px"])], null);
dv.cljs_emotion.devcards.button_styles = new cljs.core.PersistentArrayMap(null, 1, ["button",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"transition","transition",765692007),"all .5s",":hover",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755)," 0px 10px 10px rgba(0,0,0,0.2)",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(-3px)","::after",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scaleX(1.4) scaleY(1.6)",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null),"::after",cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["uppercase","all .5s",(0),"''","100 %",(-1),"none","inline-block","absolute",(100),"100 %",(0)])], null)], null);
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"For a quick demonstration we will change some global styles on this page.\n\n  In this example we add some styles to `<button>` elements on this page.\n\n  If global styles are rendered and then on subsequent render they are not, emotion will remove those global styles\n  from the page so you can dynamically include global styles.\n```clojure\n(html\n  [:div\n  [:h2 \"Click the button to style all the <button>s on this page\"]\n  [:button {:on-click #(swap! global-data update :on? not)} \"Do it.\"]\n (when on? (global-style btn-styles))])\n```\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data,_){
var on_QMARK_ = new cljs.core.Keyword(null,"on?","on?",-74017086).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var G__82837 = "div";
var G__82838 = null;
var G__82839 = (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3("h2",null,"Click the button to style all the <button>s on this page") : sablono.core.create_element.call(null,"h2",null,"Click the button to style all the <button>s on this page"));
var G__82840 = (function (){var G__82842 = "button";
var G__82843 = ({"onClick": (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dv.cljs_emotion.devcards.global_data,cljs.core.update,new cljs.core.Keyword(null,"on?","on?",-74017086),cljs.core.not);
})});
var G__82844 = "Do it.";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__82842,G__82843,G__82844) : sablono.core.create_element.call(null,G__82842,G__82843,G__82844));
})();
var G__82841 = (cljs.core.truth_(on_QMARK_)?sablono.interpreter.interpret(dv.cljs_emotion.global_style(dv.cljs_emotion.devcards.btn_styles)):null);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$5 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$5(G__82837,G__82838,G__82839,G__82840,G__82841) : sablono.core.create_element.call(null,G__82837,G__82838,G__82839,G__82840,G__82841));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),dv.cljs_emotion.devcards.global_data,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
var className82848_83063 = "dv.cljs-emotion.devcards/sample1";
var fullClassName82849_83064 = "dv.cljs-emotion.devcards/sample1";
var children82850_83065 = clojure.walk.postwalk((function (x__81536__auto__){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(x__81536__auto__);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(x__81536__auto__),new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x__81536__auto__)))].join('');
} else {
if(cljs.core.fn_QMARK_(x__81536__auto__)){
return (function (arg__81537__auto__){
delete arg__81537__auto__["children"];

var cljs_args__81538__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dv.cljs_emotion.obj_get(arg__81537__auto__,"dv.cljs-emotion/props"),new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(dv.cljs_emotion.obj_get(arg__81537__auto__,"theme"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
return cljs.core.clj__GT_js(dv.cljs_emotion.camelize_keys((x__81536__auto__.cljs$core$IFn$_invoke$arity$1 ? x__81536__auto__.cljs$core$IFn$_invoke$arity$1(cljs_args__81538__auto__) : x__81536__auto__.call(null,cljs_args__81538__auto__))));

});
} else {
if(cljs.core.map_QMARK_(x__81536__auto__)){
return dv.cljs_emotion.camelize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x__81536__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return x__81536__auto__;

}
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"rebeCCApurple"], null)], null));
var children82850_83066__$1 = cljs.core.clj__GT_js(children82850_83065);
var component_type82846_83067 = dv.cljs_emotion.obj_get(dv.cljs_emotion.styled,"div");
var clss82847_83068 = component_type82846_83067.apply(component_type82846_83067,children82850_83066__$1);
dv.cljs_emotion.obj_set(clss82847_83068,"displayName","dv.cljs-emotion.devcards/sample1");

dv.cljs_emotion.devcards.sample1 = cljs.core.with_meta(dv.cljs_emotion.react_factory(clss82847_83068,className82848_83063),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661),dv.cljs_emotion.hashit(fullClassName82849_83064),new cljs.core.Keyword("dv.cljs-emotion","styled","dv.cljs-emotion/styled",764203097),clss82847_83068], null));

var x82852_83069 = dv.cljs_emotion.devcards.sample1;
(x82852_83069.toString = (function (){
var this__81545__auto__ = this;
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(dv.cljs_emotion.devcards.sample1)))].join('');
}));

devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main api is defstyled which will return react element factory - a function that accepts props and children.\n\n  ```clojure\n  (defstyled sample1 :div\n    {:background-color \"RebeccaPurple\"})\n\n  (sample1 \"Some text here\")\n  ```",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(dv.cljs_emotion.devcards.sample1.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.devcards.sample1.cljs$core$IFn$_invoke$arity$1("Some text here") : dv.cljs_emotion.devcards.sample1.call(null,"Some text here")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"You may find it useful to know that the `className` property is passed through to the rendered element.\n  Inspect the output in the browser devtools to confirm that it works.\n\n  Additionally you will note that the fully qualified symbol name is also added as a classname - this is soley used\n  during development time to see your components easily in the browser devtools. By default these classnames are removed\n  when `goog.DEBUG` is set to `false`. You can keep them during release builds by setting the closure constant:\n\n`dv.cljs-emotion/ADD_CLASSNAMES` to `true`\n\nor if using reagent:\n\n`dv.cljs-emotion-reagent/ADD_CLASSNAMES`\n\nI've set this var to true so these classname will show up in the release build of these devcards.\n\n```clojure\n  (defstyled sample1 :div\n    {:background-color \"RebeccaPurple\"})\n  (sample1 {:className \"TEST\"} \"Some text here\")\n```",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var G__82859 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"TEST"], null);
var G__82860 = "Some text here";
return (dv.cljs_emotion.devcards.sample1.cljs$core$IFn$_invoke$arity$2 ? dv.cljs_emotion.devcards.sample1.cljs$core$IFn$_invoke$arity$2(G__82859,G__82860) : dv.cljs_emotion.devcards.sample1.call(null,G__82859,G__82860));
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
dv.cljs_emotion.devcards.mw_700 = "@media (min-width:700px)";
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"global-styles","global-styles",1792539654)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"global-styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Nested styles are supported - as these are part of the emotion API. Here we are applying different styles\n  for screen widths greater than 699 pixels using a breakpoint.\n\n  We also target a global class \"my-thing\" - using the :.classname notation is handled by this library and passes\n  \".my-thing\" to emotion.\n\n  Resize the width of the page to see the effect.\n\n```clojure\n(def mw-700 \"@media (min-width:700px)\")\n[:div\n [:.my-thing \"Some content\"]\n  (global-style\n    {:.my-thing {:background \"navy\" :color \"#cce\" mw-700 {:background \"black\"}}})])\n```",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var G__82864 = "div";
var G__82865 = null;
var G__82866 = (function (){var G__82868 = "div";
var G__82869 = ({"className": "my-thing"});
var G__82870 = "Some content";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__82868,G__82869,G__82870) : sablono.core.create_element.call(null,G__82868,G__82869,G__82870));
})();
var G__82867 = sablono.interpreter.interpret(dv.cljs_emotion.global_style(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,".my-thing",".my-thing",780594527),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"background","background",-863952629),"navy",new cljs.core.Keyword(null,"color","color",1011675173),"#cce",dv.cljs_emotion.devcards.mw_700,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"black"], null)])], null)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__82864,G__82865,G__82866,G__82867) : sablono.core.create_element.call(null,G__82864,G__82865,G__82866,G__82867));
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
dv.cljs_emotion.devcards.animation = dv.cljs_emotion.keyframes(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"transparent"], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"grey"], null)], null));
dv.cljs_emotion.devcards.animation_styles = (function dv$cljs_emotion$devcards$animation_styles(p__82871){
var map__82872 = p__82871;
var map__82872__$1 = cljs.core.__destructure_map(map__82872);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82872__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dv.cljs_emotion.devcards.animation)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(time),"s ease-in-out infinite"].join('')], null);
});
var className82875_83070 = "dv.cljs-emotion.devcards/with-anim";
var fullClassName82876_83071 = "dv.cljs-emotion.devcards/with-anim";
var children82877_83072 = clojure.walk.postwalk((function (x__81536__auto__){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(x__81536__auto__);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(x__81536__auto__),new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x__81536__auto__)))].join('');
} else {
if(cljs.core.fn_QMARK_(x__81536__auto__)){
return (function (arg__81537__auto__){
delete arg__81537__auto__["children"];

var cljs_args__81538__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dv.cljs_emotion.obj_get(arg__81537__auto__,"dv.cljs-emotion/props"),new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(dv.cljs_emotion.obj_get(arg__81537__auto__,"theme"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
return cljs.core.clj__GT_js(dv.cljs_emotion.camelize_keys((x__81536__auto__.cljs$core$IFn$_invoke$arity$1 ? x__81536__auto__.cljs$core$IFn$_invoke$arity$1(cljs_args__81538__auto__) : x__81536__auto__.call(null,cljs_args__81538__auto__))));

});
} else {
if(cljs.core.map_QMARK_(x__81536__auto__)){
return dv.cljs_emotion.camelize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x__81536__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return x__81536__auto__;

}
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv.cljs_emotion.devcards.animation_styles], null));
var children82877_83073__$1 = cljs.core.clj__GT_js(children82877_83072);
var component_type82873_83074 = dv.cljs_emotion.obj_get(dv.cljs_emotion.styled,"div");
var clss82874_83075 = component_type82873_83074.apply(component_type82873_83074,children82877_83073__$1);
dv.cljs_emotion.obj_set(clss82874_83075,"displayName","dv.cljs-emotion.devcards/with-anim");

dv.cljs_emotion.devcards.with_anim = cljs.core.with_meta(dv.cljs_emotion.react_factory(clss82874_83075,className82875_83070),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661),dv.cljs_emotion.hashit(fullClassName82876_83071),new cljs.core.Keyword("dv.cljs-emotion","styled","dv.cljs-emotion/styled",764203097),clss82874_83075], null));

var x82879_83076 = dv.cljs_emotion.devcards.with_anim;
(x82879_83076.toString = (function (){
var this__81545__auto__ = this;
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(dv.cljs_emotion.devcards.with_anim)))].join('');
}));

dv.cljs_emotion.devcards.animation_card = (function dv$cljs_emotion$devcards$animation_card(a,o){
var G__82880 = "div";
var G__82881 = null;
var G__82882 = (function (){var G__82886 = "p";
var G__82887 = null;
var G__82888 = "animation time: ";
var G__82889 = sablono.interpreter.interpret(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a)));
var G__82890 = " seconds";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$5 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$5(G__82886,G__82887,G__82888,G__82889,G__82890) : sablono.core.create_element.call(null,G__82886,G__82887,G__82888,G__82889,G__82890));
})();
var G__82883 = (function (){var G__82891 = "button";
var G__82892 = ({"onClick": (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.update,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.inc);
})});
var G__82893 = "inc";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__82891,G__82892,G__82893) : sablono.core.create_element.call(null,G__82891,G__82892,G__82893));
})();
var G__82884 = (function (){var G__82894 = "button";
var G__82895 = ({"onClick": (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.update,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.dec);
})});
var G__82896 = "dec";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__82894,G__82895,G__82896) : sablono.core.create_element.call(null,G__82894,G__82895,G__82896));
})();
var G__82885 = sablono.interpreter.interpret((function (){var G__82897 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a))], null);
var G__82898 = "Some text here";
return (dv.cljs_emotion.devcards.with_anim.cljs$core$IFn$_invoke$arity$2 ? dv.cljs_emotion.devcards.with_anim.cljs$core$IFn$_invoke$arity$2(G__82897,G__82898) : dv.cljs_emotion.devcards.with_anim.call(null,G__82897,G__82898));
})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$6 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$6(G__82880,G__82881,G__82882,G__82883,G__82884,G__82885) : sablono.core.create_element.call(null,G__82880,G__82881,G__82882,G__82883,G__82884,G__82885));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Keyframe animations are supported - this is built into emotion. ",["\n```clojure\n","(def animation\n  (keyframes {:from {:background-color \"transparent\"}\n              :to   {:background-color \"grey\"}}))","\n```\n"].join(''),["\n```clojure\n","(defn animation-styles [{:keys [time]}]\n  {:animation (str animation \" \" time \"s ease-in-out infinite\")})","\n```\n"].join(''),["\n```clojure\n","(defstyled with-anim :div\n  animation-styles)","\n```\n"].join(''),["\n```clojure\n","(defn animation-card [a o]\n  (html\n    [:div\n     [:p \"animation time: \" (:time @a) \" seconds\"]\n     [:button {:on-click #(swap! a update :time inc)} \"inc\"]\n     [:button {:on-click #(swap! a update :time dec)} \"dec\"]\n     (with-anim {:time (:time @a)} \"Some text here\")]))","\n```\n"].join('')], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"keyframes",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),dv.cljs_emotion.devcards.animation_card,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time","time",1385887882),(1)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
var className82901_83077 = "dv.cljs-emotion.devcards/with-anim2";
var fullClassName82902_83078 = "dv.cljs-emotion.devcards/with-anim2";
var children82903_83079 = clojure.walk.postwalk((function (x__81536__auto__){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(x__81536__auto__);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(x__81536__auto__),new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x__81536__auto__)))].join('');
} else {
if(cljs.core.fn_QMARK_(x__81536__auto__)){
return (function (arg__81537__auto__){
delete arg__81537__auto__["children"];

var cljs_args__81538__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dv.cljs_emotion.obj_get(arg__81537__auto__,"dv.cljs-emotion/props"),new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(dv.cljs_emotion.obj_get(arg__81537__auto__,"theme"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
return cljs.core.clj__GT_js(dv.cljs_emotion.camelize_keys((x__81536__auto__.cljs$core$IFn$_invoke$arity$1 ? x__81536__auto__.cljs$core$IFn$_invoke$arity$1(cljs_args__81538__auto__) : x__81536__auto__.call(null,cljs_args__81538__auto__))));

});
} else {
if(cljs.core.map_QMARK_(x__81536__auto__)){
return dv.cljs_emotion.camelize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x__81536__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return x__81536__auto__;

}
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p__82905){
var map__82906 = p__82905;
var map__82906__$1 = cljs.core.__destructure_map(map__82906);
var amt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82906__$1,new cljs.core.Keyword(null,"amt","amt",-1785711538),(20));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dv.cljs_emotion.keyframes(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),module$node_modules$polished$dist$polished_cjs.adjustHue(amt,"yellow")], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"yellow"], null)], null)))," 2s ease-in-out infinite"].join('')], null);
})], null));
var children82903_83080__$1 = cljs.core.clj__GT_js(children82903_83079);
var component_type82899_83081 = dv.cljs_emotion.obj_get(dv.cljs_emotion.styled,"div");
var clss82900_83082 = component_type82899_83081.apply(component_type82899_83081,children82903_83080__$1);
dv.cljs_emotion.obj_set(clss82900_83082,"displayName","dv.cljs-emotion.devcards/with-anim2");

dv.cljs_emotion.devcards.with_anim2 = cljs.core.with_meta(dv.cljs_emotion.react_factory(clss82900_83082,className82901_83077),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661),dv.cljs_emotion.hashit(fullClassName82902_83078),new cljs.core.Keyword("dv.cljs-emotion","styled","dv.cljs-emotion/styled",764203097),clss82900_83082], null));

var x82907_83083 = dv.cljs_emotion.devcards.with_anim2;
(x82907_83083.toString = (function (){
var this__81545__auto__ = this;
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(dv.cljs_emotion.devcards.with_anim2)))].join('');
}));

devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"keyframes2","keyframes2",-701299326)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"keyframes2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Animation can be defined dynamically as well - in the render.\n\n  This example also shows how you can pass any props to the underlying component - in this case onClick.\n\n  ```clojure\n  (defstyled with-anim2 :div\n    (fn [{:keys [amt] :or {amt 20}}]\n      {:animation\n        (str (keyframes\n          {:from {:background (p/adjustHue amt \"yellow\")}\n           :to   {:background \"yellow\"}})\n            \" 2s ease-in-out infinite\")}))\n\n  (html\n  [:div\n    [:p \"hue: \" (p/adjustHue (:amt @a) \"yellow\")]\n    [:button {:on-click #(swap! a update :amt (partial + 10))} \"inc\"]\n    [:button {:on-click #(swap! a update :amt (partial - 10))} \"dec\"]\n    (with-anim2 {:amt     (:amt @a)\n                 :onClick #(js/console.log \"ON CLICK\")} \"Some text here\")])\n  ```",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (a,o){
var G__82908 = "div";
var G__82909 = null;
var G__82910 = (function (){var G__82914 = "p";
var G__82915 = null;
var G__82916 = "hue: ";
var G__82917 = sablono.interpreter.interpret(module$node_modules$polished$dist$polished_cjs.adjustHue(new cljs.core.Keyword(null,"amt","amt",-1785711538).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a)),"yellow"));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__82914,G__82915,G__82916,G__82917) : sablono.core.create_element.call(null,G__82914,G__82915,G__82916,G__82917));
})();
var G__82911 = (function (){var G__82918 = "button";
var G__82919 = ({"onClick": (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.update,new cljs.core.Keyword(null,"amt","amt",-1785711538),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(10)));
})});
var G__82920 = "inc";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__82918,G__82919,G__82920) : sablono.core.create_element.call(null,G__82918,G__82919,G__82920));
})();
var G__82912 = (function (){var G__82921 = "button";
var G__82922 = ({"onClick": (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.update,new cljs.core.Keyword(null,"amt","amt",-1785711538),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._,(10)));
})});
var G__82923 = "dec";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__82921,G__82922,G__82923) : sablono.core.create_element.call(null,G__82921,G__82922,G__82923));
})();
var G__82913 = sablono.interpreter.interpret((function (){var G__82924 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"amt","amt",-1785711538),new cljs.core.Keyword(null,"amt","amt",-1785711538).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return console.log("ON CLICK");
})], null);
var G__82925 = "Some text here";
return (dv.cljs_emotion.devcards.with_anim2.cljs$core$IFn$_invoke$arity$2 ? dv.cljs_emotion.devcards.with_anim2.cljs$core$IFn$_invoke$arity$2(G__82924,G__82925) : dv.cljs_emotion.devcards.with_anim2.call(null,G__82924,G__82925));
})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$6 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$6(G__82908,G__82909,G__82910,G__82911,G__82912,G__82913) : sablono.core.create_element.call(null,G__82908,G__82909,G__82910,G__82911,G__82912,G__82913));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"amt","amt",-1785711538),(20)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
var className82928_83084 = "dv.cljs-emotion.devcards/multi";
var fullClassName82929_83085 = "dv.cljs-emotion.devcards/multi";
var children82930_83086 = clojure.walk.postwalk((function (x__81536__auto__){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(x__81536__auto__);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(x__81536__auto__),new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x__81536__auto__)))].join('');
} else {
if(cljs.core.fn_QMARK_(x__81536__auto__)){
return (function (arg__81537__auto__){
delete arg__81537__auto__["children"];

var cljs_args__81538__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dv.cljs_emotion.obj_get(arg__81537__auto__,"dv.cljs-emotion/props"),new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(dv.cljs_emotion.obj_get(arg__81537__auto__,"theme"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
return cljs.core.clj__GT_js(dv.cljs_emotion.camelize_keys((x__81536__auto__.cljs$core$IFn$_invoke$arity$1 ? x__81536__auto__.cljs$core$IFn$_invoke$arity$1(cljs_args__81538__auto__) : x__81536__auto__.call(null,cljs_args__81538__auto__))));

});
} else {
if(cljs.core.map_QMARK_(x__81536__auto__)){
return dv.cljs_emotion.camelize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x__81536__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return x__81536__auto__;

}
}
}
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"blue"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),({"borderRadius": (4)}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["border","1px solid grey"], null)], null),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [":hover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"white"], null)], null);
})], null));
var children82930_83087__$1 = cljs.core.clj__GT_js(children82930_83086);
var component_type82926_83088 = dv.cljs_emotion.obj_get(dv.cljs_emotion.styled,"div");
var clss82927_83089 = component_type82926_83088.apply(component_type82926_83088,children82930_83087__$1);
dv.cljs_emotion.obj_set(clss82927_83089,"displayName","dv.cljs-emotion.devcards/multi");

dv.cljs_emotion.devcards.multi = cljs.core.with_meta(dv.cljs_emotion.react_factory(clss82927_83089,className82928_83084),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661),dv.cljs_emotion.hashit(fullClassName82929_83085),new cljs.core.Keyword("dv.cljs-emotion","styled","dv.cljs-emotion/styled",764203097),clss82927_83089], null));

var x82932_83090 = dv.cljs_emotion.devcards.multi;
(x82932_83090.toString = (function (){
var this__81545__auto__ = this;
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(dv.cljs_emotion.devcards.multi)))].join('');
}));

devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Multiple children are handled just like emotion:\n```clojure\n(defstyled multi :div\n  {:background \"blue\"}\n  {:color \"yellow\"}\n  #js{\"borderRadius\" 4}\n  [{\"border\" \"1px solid grey\"}]\n  (fn [_] {\":hover\" {:background \"white\"}}))\n\n(multi \"HELLO\")\n```\n",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(dv.cljs_emotion.devcards.multi.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.devcards.multi.cljs$core$IFn$_invoke$arity$1("HELLO") : dv.cljs_emotion.devcards.multi.call(null,"HELLO")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
var className82935_83091 = "dv.cljs-emotion.devcards/multi2";
var fullClassName82936_83092 = "dv.cljs-emotion.devcards/multi2";
var children82937_83093 = clojure.walk.postwalk((function (x__81536__auto__){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(x__81536__auto__);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(x__81536__auto__),new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x__81536__auto__)))].join('');
} else {
if(cljs.core.fn_QMARK_(x__81536__auto__)){
return (function (arg__81537__auto__){
delete arg__81537__auto__["children"];

var cljs_args__81538__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dv.cljs_emotion.obj_get(arg__81537__auto__,"dv.cljs-emotion/props"),new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(dv.cljs_emotion.obj_get(arg__81537__auto__,"theme"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
return cljs.core.clj__GT_js(dv.cljs_emotion.camelize_keys((x__81536__auto__.cljs$core$IFn$_invoke$arity$1 ? x__81536__auto__.cljs$core$IFn$_invoke$arity$1(cljs_args__81538__auto__) : x__81536__auto__.call(null,cljs_args__81538__auto__))));

});
} else {
if(cljs.core.map_QMARK_(x__81536__auto__)){
return dv.cljs_emotion.camelize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x__81536__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return x__81536__auto__;

}
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"blue"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),({"borderRadius": (4)}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["border","1px solid grey"], null)], null),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [":hover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"white"], null)], null);
})], null)], null));
var children82937_83094__$1 = cljs.core.clj__GT_js(children82937_83093);
var component_type82933_83095 = dv.cljs_emotion.obj_get(dv.cljs_emotion.styled,"div");
var clss82934_83096 = component_type82933_83095.apply(component_type82933_83095,children82937_83094__$1);
dv.cljs_emotion.obj_set(clss82934_83096,"displayName","dv.cljs-emotion.devcards/multi2");

dv.cljs_emotion.devcards.multi2 = cljs.core.with_meta(dv.cljs_emotion.react_factory(clss82934_83096,className82935_83091),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661),dv.cljs_emotion.hashit(fullClassName82936_83092),new cljs.core.Keyword("dv.cljs-emotion","styled","dv.cljs-emotion/styled",764203097),clss82934_83096], null));

var x82939_83097 = dv.cljs_emotion.devcards.multi2;
(x82939_83097.toString = (function (){
var this__81545__auto__ = this;
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(dv.cljs_emotion.devcards.multi2)))].join('');
}));

devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Anywhere an array is passed emotion will merge those styles, so you can also\n  pass multiple styles as a vector/array:\n\n```clojure\n(defstyled multi2 :div\n  [{:background \"blue\"}\n  {:color \"yellow\"}\n  #js{\"borderRadius\" 4}\n  [{\"border\" \"1px solid grey\"}]\n  (fn [_] {\":hover\" {:background \"white\"}})])\n\n(multi2 \"HELLO\")\n```\n",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(dv.cljs_emotion.devcards.multi2.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.devcards.multi2.cljs$core$IFn$_invoke$arity$1("HELLO") : dv.cljs_emotion.devcards.multi2.call(null,"HELLO")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
var className82942_83098 = "dv.cljs-emotion.devcards/a-fn";
var fullClassName82943_83099 = "dv.cljs-emotion.devcards/a-fn";
var children82944_83100 = clojure.walk.postwalk((function (x__81536__auto__){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(x__81536__auto__);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(x__81536__auto__),new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x__81536__auto__)))].join('');
} else {
if(cljs.core.fn_QMARK_(x__81536__auto__)){
return (function (arg__81537__auto__){
delete arg__81537__auto__["children"];

var cljs_args__81538__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dv.cljs_emotion.obj_get(arg__81537__auto__,"dv.cljs-emotion/props"),new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(dv.cljs_emotion.obj_get(arg__81537__auto__,"theme"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
return cljs.core.clj__GT_js(dv.cljs_emotion.camelize_keys((x__81536__auto__.cljs$core$IFn$_invoke$arity$1 ? x__81536__auto__.cljs$core$IFn$_invoke$arity$1(cljs_args__81538__auto__) : x__81536__auto__.call(null,cljs_args__81538__auto__))));

});
} else {
if(cljs.core.map_QMARK_(x__81536__auto__)){
return dv.cljs_emotion.camelize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x__81536__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return x__81536__auto__;

}
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p__82946){
var map__82947 = p__82946;
var map__82947__$1 = cljs.core.__destructure_map(map__82947);
var my_padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82947__$1,new cljs.core.Keyword(null,"my-padding","my-padding",1389925511));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),my_padding], null);
})], null));
var children82944_83101__$1 = cljs.core.clj__GT_js(children82944_83100);
var component_type82940_83102 = dv.cljs_emotion.obj_get(dv.cljs_emotion.styled,"button");
var clss82941_83103 = component_type82940_83102.apply(component_type82940_83102,children82944_83101__$1);
dv.cljs_emotion.obj_set(clss82941_83103,"displayName","dv.cljs-emotion.devcards/a-fn");

dv.cljs_emotion.devcards.a_fn = cljs.core.with_meta(dv.cljs_emotion.react_factory(clss82941_83103,className82942_83098),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661),dv.cljs_emotion.hashit(fullClassName82943_83099),new cljs.core.Keyword("dv.cljs-emotion","styled","dv.cljs-emotion/styled",764203097),clss82941_83103], null));

var x82948_83104 = dv.cljs_emotion.devcards.a_fn;
(x82948_83104.toString = (function (){
var this__81545__auto__ = this;
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(dv.cljs_emotion.devcards.a_fn)))].join('');
}));

devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Any props you pass to the component at render time are converted to cljs data\n  structures via `js->clj` and then passed to any functions in defstyled. The output of your\n  function is then passed to `clj->js` and on to emotion.\n```clojure\n(defstyled a-fn :button\n  (fn [{:keys [my-padding]}]\n    {:padding my-padding}))\n\n  (a-fn\n    {:my-padding 20 :onClick #(js/console.log \"clicked\")\n     :another-key 5} \"This is a button\")\n```\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var G__82949 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"my-padding","my-padding",1389925511),(20),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return console.log("clicked");
}),new cljs.core.Keyword(null,"another-key","another-key",1757915937),(5)], null);
var G__82950 = "This is a button";
return (dv.cljs_emotion.devcards.a_fn.cljs$core$IFn$_invoke$arity$2 ? dv.cljs_emotion.devcards.a_fn.cljs$core$IFn$_invoke$arity$2(G__82949,G__82950) : dv.cljs_emotion.devcards.a_fn.call(null,G__82949,G__82950));
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
var className82953_83105 = "dv.cljs-emotion.devcards/flex";
var fullClassName82954_83106 = "dv.cljs-emotion.devcards/flex";
var children82955_83107 = clojure.walk.postwalk((function (x__81536__auto__){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(x__81536__auto__);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(x__81536__auto__),new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x__81536__auto__)))].join('');
} else {
if(cljs.core.fn_QMARK_(x__81536__auto__)){
return (function (arg__81537__auto__){
delete arg__81537__auto__["children"];

var cljs_args__81538__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dv.cljs_emotion.obj_get(arg__81537__auto__,"dv.cljs-emotion/props"),new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(dv.cljs_emotion.obj_get(arg__81537__auto__,"theme"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
return cljs.core.clj__GT_js(dv.cljs_emotion.camelize_keys((x__81536__auto__.cljs$core$IFn$_invoke$arity$1 ? x__81536__auto__.cljs$core$IFn$_invoke$arity$1(cljs_args__81538__auto__) : x__81536__auto__.call(null,cljs_args__81538__auto__))));

});
} else {
if(cljs.core.map_QMARK_(x__81536__auto__)){
return dv.cljs_emotion.camelize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x__81536__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return x__81536__auto__;

}
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-evenly"], null)], null));
var children82955_83108__$1 = cljs.core.clj__GT_js(children82955_83107);
var component_type82951_83109 = dv.cljs_emotion.obj_get(dv.cljs_emotion.styled,"div");
var clss82952_83110 = component_type82951_83109.apply(component_type82951_83109,children82955_83108__$1);
dv.cljs_emotion.obj_set(clss82952_83110,"displayName","dv.cljs-emotion.devcards/flex");

dv.cljs_emotion.devcards.flex = cljs.core.with_meta(dv.cljs_emotion.react_factory(clss82952_83110,className82953_83105),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661),dv.cljs_emotion.hashit(fullClassName82954_83106),new cljs.core.Keyword("dv.cljs-emotion","styled","dv.cljs-emotion/styled",764203097),clss82952_83110], null));

var x82957_83111 = dv.cljs_emotion.devcards.flex;
(x82957_83111.toString = (function (){
var this__81545__auto__ = this;
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(dv.cljs_emotion.devcards.flex)))].join('');
}));

var className82960_83112 = "dv.cljs-emotion.devcards/box";
var fullClassName82961_83113 = "dv.cljs-emotion.devcards/box";
var children82962_83114 = clojure.walk.postwalk((function (x__81536__auto__){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(x__81536__auto__);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(x__81536__auto__),new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x__81536__auto__)))].join('');
} else {
if(cljs.core.fn_QMARK_(x__81536__auto__)){
return (function (arg__81537__auto__){
delete arg__81537__auto__["children"];

var cljs_args__81538__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dv.cljs_emotion.obj_get(arg__81537__auto__,"dv.cljs-emotion/props"),new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(dv.cljs_emotion.obj_get(arg__81537__auto__,"theme"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
return cljs.core.clj__GT_js(dv.cljs_emotion.camelize_keys((x__81536__auto__.cljs$core$IFn$_invoke$arity$1 ? x__81536__auto__.cljs$core$IFn$_invoke$arity$1(cljs_args__81538__auto__) : x__81536__auto__.call(null,cljs_args__81538__auto__))));

});
} else {
if(cljs.core.map_QMARK_(x__81536__auto__)){
return dv.cljs_emotion.camelize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x__81536__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return x__81536__auto__;

}
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"20%",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"background","background",-863952629),"palEvIoletrEd"], null)], null));
var children82962_83115__$1 = cljs.core.clj__GT_js(children82962_83114);
var component_type82958_83116 = dv.cljs_emotion.obj_get(dv.cljs_emotion.styled,"div");
var clss82959_83117 = component_type82958_83116.apply(component_type82958_83116,children82962_83115__$1);
dv.cljs_emotion.obj_set(clss82959_83117,"displayName","dv.cljs-emotion.devcards/box");

dv.cljs_emotion.devcards.box = cljs.core.with_meta(dv.cljs_emotion.react_factory(clss82959_83117,className82960_83112),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661),dv.cljs_emotion.hashit(fullClassName82961_83113),new cljs.core.Keyword("dv.cljs-emotion","styled","dv.cljs-emotion/styled",764203097),clss82959_83117], null));

var x82964_83118 = dv.cljs_emotion.devcards.box;
(x82964_83118.toString = (function (){
var this__81545__auto__ = this;
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(dv.cljs_emotion.devcards.box)))].join('');
}));

var className82967_83119 = "dv.cljs-emotion.devcards/box2";
var fullClassName82968_83120 = "dv.cljs-emotion.devcards/box2";
var children82969_83121 = clojure.walk.postwalk((function (x__81536__auto__){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(x__81536__auto__);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(x__81536__auto__),new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x__81536__auto__)))].join('');
} else {
if(cljs.core.fn_QMARK_(x__81536__auto__)){
return (function (arg__81537__auto__){
delete arg__81537__auto__["children"];

var cljs_args__81538__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dv.cljs_emotion.obj_get(arg__81537__auto__,"dv.cljs-emotion/props"),new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(dv.cljs_emotion.obj_get(arg__81537__auto__,"theme"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
return cljs.core.clj__GT_js(dv.cljs_emotion.camelize_keys((x__81536__auto__.cljs$core$IFn$_invoke$arity$1 ? x__81536__auto__.cljs$core$IFn$_invoke$arity$1(cljs_args__81538__auto__) : x__81536__auto__.call(null,cljs_args__81538__auto__))));

});
} else {
if(cljs.core.map_QMARK_(x__81536__auto__)){
return dv.cljs_emotion.camelize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x__81536__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return x__81536__auto__;

}
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"background","background",-863952629),module$node_modules$polished$dist$polished_cjs.lighten(0.2,"palevioletred"),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",":hover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),module$node_modules$polished$dist$polished_cjs.darken(0.2,"palevioletred")], null),":active",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),module$node_modules$polished$dist$polished_cjs.darken(0.4,"palevioletred"),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"4px 4px lightgrey"], null)], null)], null));
var children82969_83122__$1 = cljs.core.clj__GT_js(children82969_83121);
var component_type82965_83123 = ((typeof dv.cljs_emotion.devcards.box === 'string')?dv.cljs_emotion.obj_get(dv.cljs_emotion.styled,dv.cljs_emotion.devcards.box):(((dv.cljs_emotion.devcards.box instanceof cljs.core.Keyword))?dv.cljs_emotion.obj_get(dv.cljs_emotion.styled,"box"):(cljs.core.truth_(new cljs.core.Keyword("dv.cljs-emotion","styled","dv.cljs-emotion/styled",764203097).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(dv.cljs_emotion.devcards.box)))?dv.cljs_emotion.styled.call(dv.cljs_emotion.styled,new cljs.core.Keyword("dv.cljs-emotion","styled","dv.cljs-emotion/styled",764203097).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(dv.cljs_emotion.devcards.box))):dv.cljs_emotion.styled.call(dv.cljs_emotion.styled,dv.cljs_emotion.devcards.box)
)));
var clss82966_83124 = component_type82965_83123.apply(component_type82965_83123,children82969_83122__$1);
dv.cljs_emotion.obj_set(clss82966_83124,"displayName","dv.cljs-emotion.devcards/box2");

dv.cljs_emotion.devcards.box2 = cljs.core.with_meta(dv.cljs_emotion.react_factory(clss82966_83124,className82967_83119),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661),dv.cljs_emotion.hashit(fullClassName82968_83120),new cljs.core.Keyword("dv.cljs-emotion","styled","dv.cljs-emotion/styled",764203097),clss82966_83124], null));

var x82971_83125 = dv.cljs_emotion.devcards.box2;
(x82971_83125.toString = (function (){
var this__81545__auto__ = this;
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(dv.cljs_emotion.devcards.box2)))].join('');
}));

devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"flex-card","flex-card",-1954027863)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"flex-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Here is a somewhat larger example, showing the extension feature of emotion to override styles.\n\n  This example using the polished library as well.\n\n```clojure\n(defstyled flex :div\n  {:display         \"flex\"\n   :flex-wrap       \"wrap\"\n   :justify-content \"space-evenly\"})\n\n(defstyled box :div\n  {:width           \"20%\"\n   :padding         \"1rem 0\"\n   :display         \"flex\"\n   :margin          \"1rem\"\n   :justify-content \"center\"\n   :background      \"palEvIoletrEd\"})\n\n\n(defstyled box2 box\n  {:border-radius \"4px\"\n   :user-select   \"none\"\n   :background    (p/lighten 0.2 \"palevioletred\")\n   :cursor        \"pointer\"\n   \":hover\"       {:background (darken 0.2 \"palevioletred\")}\n   \":active\"      {:background (darken 0.4 \"palevioletred\")\n                   :box-shadow \"4px 4px lightgrey\"}})\n\n(flex (box \"box\") (box \"box\") (box \"box\") (box2 \"box2\") (box2 \"box2\") (box \"box\") (box \"box\") (box2 \"box2\") (box \"box\")))\n```\n",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var G__82972 = (dv.cljs_emotion.devcards.box.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.devcards.box.cljs$core$IFn$_invoke$arity$1("box") : dv.cljs_emotion.devcards.box.call(null,"box"));
var G__82973 = (dv.cljs_emotion.devcards.box.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.devcards.box.cljs$core$IFn$_invoke$arity$1("box") : dv.cljs_emotion.devcards.box.call(null,"box"));
var G__82974 = (dv.cljs_emotion.devcards.box.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.devcards.box.cljs$core$IFn$_invoke$arity$1("box") : dv.cljs_emotion.devcards.box.call(null,"box"));
var G__82975 = (dv.cljs_emotion.devcards.box2.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.devcards.box2.cljs$core$IFn$_invoke$arity$1("box2") : dv.cljs_emotion.devcards.box2.call(null,"box2"));
var G__82976 = (dv.cljs_emotion.devcards.box2.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.devcards.box2.cljs$core$IFn$_invoke$arity$1("box2") : dv.cljs_emotion.devcards.box2.call(null,"box2"));
var G__82977 = (dv.cljs_emotion.devcards.box.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.devcards.box.cljs$core$IFn$_invoke$arity$1("box") : dv.cljs_emotion.devcards.box.call(null,"box"));
var G__82978 = (dv.cljs_emotion.devcards.box.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.devcards.box.cljs$core$IFn$_invoke$arity$1("box") : dv.cljs_emotion.devcards.box.call(null,"box"));
var G__82979 = (dv.cljs_emotion.devcards.box2.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.devcards.box2.cljs$core$IFn$_invoke$arity$1("box2") : dv.cljs_emotion.devcards.box2.call(null,"box2"));
var G__82980 = (dv.cljs_emotion.devcards.box.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.devcards.box.cljs$core$IFn$_invoke$arity$1("box") : dv.cljs_emotion.devcards.box.call(null,"box"));
return (dv.cljs_emotion.devcards.flex.cljs$core$IFn$_invoke$arity$9 ? dv.cljs_emotion.devcards.flex.cljs$core$IFn$_invoke$arity$9(G__82972,G__82973,G__82974,G__82975,G__82976,G__82977,G__82978,G__82979,G__82980) : dv.cljs_emotion.devcards.flex.call(null,G__82972,G__82973,G__82974,G__82975,G__82976,G__82977,G__82978,G__82979,G__82980));
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"update-global-styles","update-global-styles",1487171421)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"update-global-styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  This example changes the body background of this page's body color.\n  ```clojure\n  [:div\n         [:label \"Input a color for the background color:\"]\n         [:input {:value bg :on-change #(swap! a assoc :bg (-> % .-target .-value))}]\n         (global-style {:body {:background bg}})]\n   ```",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (a,_){
var map__82982 = cljs.core.deref(a);
var map__82982__$1 = cljs.core.__destructure_map(map__82982);
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82982__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var G__82985 = "div";
var G__82986 = null;
var G__82987 = (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3("label",null,"Input a color for the background color:") : sablono.core.create_element.call(null,"label",null,"Input a color for the background color:"));
var G__82988 = sablono.interpreter.create_element("input",({"value": bg, "onChange": (function (p1__82981_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,new cljs.core.Keyword(null,"bg","bg",-206688421),p1__82981_SHARP_.target.value);
})}));
var G__82989 = sablono.interpreter.interpret(dv.cljs_emotion.global_style(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),bg], null)], null)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$5 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$5(G__82985,G__82986,G__82987,G__82988,G__82989) : sablono.core.create_element.call(null,G__82985,G__82986,G__82987,G__82988,G__82989));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bg","bg",-206688421),"#cce"], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
dv.cljs_emotion.devcards.start_bg = "#eeaabb";
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"update-card-bg-styles","update-card-bg-styles",-771594595)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"update-card-bg-styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  This example changes the background color of this card.\n  ```clojure\n  (let [{:keys [bg]} @a\n          cls :.my-card]\n      (html\n        [:div\n         [:label \"Input a color for the background:\"]\n         [:input {:value bg :on-change #(swap! a assoc :bg (-> % .-target .-value))}]\n         [:button {:on-click #(swap! a assoc :bg start-bg)} \"reset\"]\n         [:button\n          {:on-click\n           #(swap! a assoc :bg (p/lighten 0.08 bg))} \"lighten\"]\n\n         [:button\n          {:on-click\n           #(swap! a assoc :bg (p/darken 0.08 bg))} \"darken\"]\n         (global-style {cls {:background bg}})]))\n   ```",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (a,_){
var map__82991 = cljs.core.deref(a);
var map__82991__$1 = cljs.core.__destructure_map(map__82991);
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82991__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var cls = new cljs.core.Keyword(null,".my-card",".my-card",1656982961);
var G__82994 = "div";
var G__82995 = null;
var G__82996 = (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3("label",null,"Input a color for the background:") : sablono.core.create_element.call(null,"label",null,"Input a color for the background:"));
var G__82997 = sablono.interpreter.create_element("input",({"value": bg, "onChange": (function (p1__82990_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,new cljs.core.Keyword(null,"bg","bg",-206688421),p1__82990_SHARP_.target.value);
})}));
var G__82998 = (function (){var G__83002 = "button";
var G__83003 = ({"onClick": (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,new cljs.core.Keyword(null,"bg","bg",-206688421),dv.cljs_emotion.devcards.start_bg);
})});
var G__83004 = "reset";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__83002,G__83003,G__83004) : sablono.core.create_element.call(null,G__83002,G__83003,G__83004));
})();
var G__82999 = (function (){var G__83005 = "button";
var G__83006 = ({"onClick": (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,new cljs.core.Keyword(null,"bg","bg",-206688421),module$node_modules$polished$dist$polished_cjs.lighten(0.08,bg));
})});
var G__83007 = "lighten";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__83005,G__83006,G__83007) : sablono.core.create_element.call(null,G__83005,G__83006,G__83007));
})();
var G__83000 = (function (){var G__83008 = "button";
var G__83009 = ({"onClick": (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,new cljs.core.Keyword(null,"bg","bg",-206688421),module$node_modules$polished$dist$polished_cjs.darken(0.08,bg));
})});
var G__83010 = "darken";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__83008,G__83009,G__83010) : sablono.core.create_element.call(null,G__83008,G__83009,G__83010));
})();
var G__83001 = sablono.interpreter.interpret(dv.cljs_emotion.global_style(cljs.core.PersistentArrayMap.createAsIfByAssoc([cls,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),bg], null)])));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$8 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$8(G__82994,G__82995,G__82996,G__82997,G__82998,G__82999,G__83000,G__83001) : sablono.core.create_element.call(null,G__82994,G__82995,G__82996,G__82997,G__82998,G__82999,G__83000,G__83001));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bg","bg",-206688421),dv.cljs_emotion.devcards.start_bg], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classname","classname",777390796),"my-card"], null)], null));
})], null));
var className83013_83126 = "dv.cljs-emotion.devcards/test-theme";
var fullClassName83014_83127 = "dv.cljs-emotion.devcards/test-theme";
var children83015_83128 = clojure.walk.postwalk((function (x__81536__auto__){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(x__81536__auto__);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(x__81536__auto__),new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x__81536__auto__)))].join('');
} else {
if(cljs.core.fn_QMARK_(x__81536__auto__)){
return (function (arg__81537__auto__){
delete arg__81537__auto__["children"];

var cljs_args__81538__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dv.cljs_emotion.obj_get(arg__81537__auto__,"dv.cljs-emotion/props"),new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(dv.cljs_emotion.obj_get(arg__81537__auto__,"theme"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
return cljs.core.clj__GT_js(dv.cljs_emotion.camelize_keys((x__81536__auto__.cljs$core$IFn$_invoke$arity$1 ? x__81536__auto__.cljs$core$IFn$_invoke$arity$1(cljs_args__81538__auto__) : x__81536__auto__.call(null,cljs_args__81538__auto__))));

});
} else {
if(cljs.core.map_QMARK_(x__81536__auto__)){
return dv.cljs_emotion.camelize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x__81536__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return x__81536__auto__;

}
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p__83017){
var map__83018 = p__83017;
var map__83018__$1 = cljs.core.__destructure_map(map__83018);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83018__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(theme);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "blue";
}
})()], null);
})], null));
var children83015_83129__$1 = cljs.core.clj__GT_js(children83015_83128);
var component_type83011_83130 = dv.cljs_emotion.obj_get(dv.cljs_emotion.styled,"div");
var clss83012_83131 = component_type83011_83130.apply(component_type83011_83130,children83015_83129__$1);
dv.cljs_emotion.obj_set(clss83012_83131,"displayName","dv.cljs-emotion.devcards/test-theme");

dv.cljs_emotion.devcards.test_theme = cljs.core.with_meta(dv.cljs_emotion.react_factory(clss83012_83131,className83013_83126),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661),dv.cljs_emotion.hashit(fullClassName83014_83127),new cljs.core.Keyword("dv.cljs-emotion","styled","dv.cljs-emotion/styled",764203097),clss83012_83131], null));

var x83019_83132 = dv.cljs_emotion.devcards.test_theme;
(x83019_83132.toString = (function (){
var this__81545__auto__ = this;
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(dv.cljs_emotion.devcards.test_theme)))].join('');
}));

devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"theme-provider-card","theme-provider-card",-1686140511)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"theme-provider-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Theme use is straight forward.\n\n  It wraps emotion's ThemeProvider calling clj->js first on the props.\n  Wrap your application with `theme-provider` passing it\n  a map or JS object of theme data.\n```clojure\n(defstyled test-theme :div\n  (fn [{:keys [theme]}]\n    {:background (or (:bg theme) \"blue\")}))\n\n(html\n  [:div\n   (theme-provider {:theme {:bg \"yellow\"}} (test-theme \"Hello there theme\"))\n   (test-theme \"no theme\")])\n```\n",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var attrs83020 = dv.cljs_emotion.theme_provider.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bg","bg",-206688421),"yellow"], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(dv.cljs_emotion.devcards.test_theme.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.devcards.test_theme.cljs$core$IFn$_invoke$arity$1("Hello there theme") : dv.cljs_emotion.devcards.test_theme.call(null,"Hello there theme"))], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs83020))?sablono.interpreter.attributes(attrs83020):null),((cljs.core.map_QMARK_(attrs83020))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((dv.cljs_emotion.devcards.test_theme.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.devcards.test_theme.cljs$core$IFn$_invoke$arity$1("no theme") : dv.cljs_emotion.devcards.test_theme.call(null,"no theme")))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs83020),sablono.interpreter.interpret((dv.cljs_emotion.devcards.test_theme.cljs$core$IFn$_invoke$arity$1 ? dv.cljs_emotion.devcards.test_theme.cljs$core$IFn$_invoke$arity$1("no theme") : dv.cljs_emotion.devcards.test_theme.call(null,"no theme")))], null)));
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
dv.cljs_emotion.devcards.anon_styles = (function dv$cljs_emotion$devcards$anon_styles(){
var attrs83021 = (function (){var G__83022 = "div";
var G__83023 = (function (){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"lightgrey"], null)], null),new cljs.core.Keyword(null,"css","css",1135045163))){
} else {
throw (new Error(["Assert failed: ","Props must contain :css key","\n","(clojure.core/contains? {:css {:background \"lightgrey\"}} :css)"].join('')));
}

return cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"lightgrey"], null)], null),new cljs.core.Keyword(null,"css","css",1135045163),clojure.walk.postwalk((function (x__81536__auto__){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(x__81536__auto__);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(x__81536__auto__),new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x__81536__auto__)))].join('');
} else {
if(cljs.core.fn_QMARK_(x__81536__auto__)){
return (function (arg__81537__auto__){
delete arg__81537__auto__["children"];

return cljs.core.clj__GT_js(dv.cljs_emotion.camelize_keys((function (){var G__83025 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(arg__81537__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (x__81536__auto__.cljs$core$IFn$_invoke$arity$1 ? x__81536__auto__.cljs$core$IFn$_invoke$arity$1(G__83025) : x__81536__auto__.call(null,G__83025));
})()));

});
} else {
if(cljs.core.map_QMARK_(x__81536__auto__)){
return dv.cljs_emotion.camelize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x__81536__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return x__81536__auto__;

}
}
}
}),new cljs.core.Keyword(null,"css","css",1135045163).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"lightgrey"], null)], null)))));
})()
;
var G__83024 = (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3("p",null,"Some text on a lightgrey background.") : sablono.core.create_element.call(null,"p",null,"Some text on a lightgrey background."));
return (dv.cljs_emotion.jsx.cljs$core$IFn$_invoke$arity$3 ? dv.cljs_emotion.jsx.cljs$core$IFn$_invoke$arity$3(G__83022,G__83023,G__83024) : dv.cljs_emotion.jsx.call(null,G__83022,G__83023,G__83024));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs83021))?sablono.interpreter.attributes(attrs83021):null),((cljs.core.map_QMARK_(attrs83021))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(dv.cljs_emotion.theme_provider.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bg","bg",-206688421),"salmon"], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__83028 = "div";
var G__83029 = (function (){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),({"border": "1px solid"}),(function (t){
console.log("THEME :  ",t);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "lightgrey";
}
})()], null);
})], null)], null),new cljs.core.Keyword(null,"css","css",1135045163))){
} else {
throw (new Error(["Assert failed: ","Props must contain :css key","\n","(clojure.core/contains? {:css [{:color \"white\"} #object[cljs.tagged_literals.JSValue 0x69da4362 \"cljs.tagged_literals.JSValue@69da4362\"] (fn [t] (.log js/console \"THEME :  \" t) {:background (or (:bg t) \"lightgrey\")})]} :css)"].join('')));
}

return cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),({"border": "1px solid"}),(function (t){
console.log("THEME :  ",t);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "lightgrey";
}
})()], null);
})], null)], null),new cljs.core.Keyword(null,"css","css",1135045163),clojure.walk.postwalk((function (x__81536__auto__){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(x__81536__auto__);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(x__81536__auto__),new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x__81536__auto__)))].join('');
} else {
if(cljs.core.fn_QMARK_(x__81536__auto__)){
return (function (arg__81537__auto__){
delete arg__81537__auto__["children"];

return cljs.core.clj__GT_js(dv.cljs_emotion.camelize_keys((function (){var G__83031 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(arg__81537__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (x__81536__auto__.cljs$core$IFn$_invoke$arity$1 ? x__81536__auto__.cljs$core$IFn$_invoke$arity$1(G__83031) : x__81536__auto__.call(null,G__83031));
})()));

});
} else {
if(cljs.core.map_QMARK_(x__81536__auto__)){
return dv.cljs_emotion.camelize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x__81536__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return x__81536__auto__;

}
}
}
}),new cljs.core.Keyword(null,"css","css",1135045163).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),({"border": "1px solid"}),(function (t){
console.log("THEME :  ",t);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "lightgrey";
}
})()], null);
})], null)], null)))));
})()
;
var G__83030 = (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3("p",null,"Some text on a salmon background.") : sablono.core.create_element.call(null,"p",null,"Some text on a salmon background."));
return (dv.cljs_emotion.jsx.cljs$core$IFn$_invoke$arity$3 ? dv.cljs_emotion.jsx.cljs$core$IFn$_invoke$arity$3(G__83028,G__83029,G__83030) : dv.cljs_emotion.jsx.call(null,G__83028,G__83029,G__83030));
})()], 0)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs83021),sablono.interpreter.interpret(dv.cljs_emotion.theme_provider.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bg","bg",-206688421),"salmon"], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__83034 = "div";
var G__83035 = (function (){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),({"border": "1px solid"}),(function (t){
console.log("THEME :  ",t);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "lightgrey";
}
})()], null);
})], null)], null),new cljs.core.Keyword(null,"css","css",1135045163))){
} else {
throw (new Error(["Assert failed: ","Props must contain :css key","\n","(clojure.core/contains? {:css [{:color \"white\"} #object[cljs.tagged_literals.JSValue 0x69da4362 \"cljs.tagged_literals.JSValue@69da4362\"] (fn [t] (.log js/console \"THEME :  \" t) {:background (or (:bg t) \"lightgrey\")})]} :css)"].join('')));
}

return cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),({"border": "1px solid"}),(function (t){
console.log("THEME :  ",t);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "lightgrey";
}
})()], null);
})], null)], null),new cljs.core.Keyword(null,"css","css",1135045163),clojure.walk.postwalk((function (x__81536__auto__){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(x__81536__auto__);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(x__81536__auto__),new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x__81536__auto__)))].join('');
} else {
if(cljs.core.fn_QMARK_(x__81536__auto__)){
return (function (arg__81537__auto__){
delete arg__81537__auto__["children"];

return cljs.core.clj__GT_js(dv.cljs_emotion.camelize_keys((function (){var G__83037 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(arg__81537__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (x__81536__auto__.cljs$core$IFn$_invoke$arity$1 ? x__81536__auto__.cljs$core$IFn$_invoke$arity$1(G__83037) : x__81536__auto__.call(null,G__83037));
})()));

});
} else {
if(cljs.core.map_QMARK_(x__81536__auto__)){
return dv.cljs_emotion.camelize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x__81536__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return x__81536__auto__;

}
}
}
}),new cljs.core.Keyword(null,"css","css",1135045163).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),({"border": "1px solid"}),(function (t){
console.log("THEME :  ",t);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"bg","bg",-206688421).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "lightgrey";
}
})()], null);
})], null)], null)))));
})()
;
var G__83036 = (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3("p",null,"Some text on a salmon background.") : sablono.core.create_element.call(null,"p",null,"Some text on a salmon background."));
return (dv.cljs_emotion.jsx.cljs$core$IFn$_invoke$arity$3 ? dv.cljs_emotion.jsx.cljs$core$IFn$_invoke$arity$3(G__83034,G__83035,G__83036) : dv.cljs_emotion.jsx.call(null,G__83034,G__83035,G__83036));
})()], 0)))], null)));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["# Anonymous inline styles support.\n   You can use the `css` helper to style a react element inline without needing to create a component.",["\n```clojure\n","(defn anon-styles []\n  (html [:div\n         (css :div {:css {:background \"lightgrey\"}}\n           (html [:p \"Some text on a lightgrey background.\"]))\n         (theme-provider {:theme {:bg \"salmon\"}}\n           (css :div {:css\n                      [{:color \"white\"}\n                       #js{:border \"1px solid\"}\n                       (fn [t]\n                         (.log js/console \"THEME :  \" t)\n                         {:background (or (:bg t) \"lightgrey\")})]}\n             (html [:p \"Some text on a salmon background.\"])))]))","\n```\n"].join('')], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),dv.cljs_emotion.devcards.anon_styles(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
dv.cljs_emotion.devcards.anon_styles2 = (function dv$cljs_emotion$devcards$anon_styles2(){
var G__83040 = "div";
var G__83041 = (function (){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"lightgrey"], null)], null),new cljs.core.Keyword(null,"css","css",1135045163))){
} else {
throw (new Error(["Assert failed: ","Props must contain :css key","\n","(clojure.core/contains? {:css {:background \"lightgrey\"}} :css)"].join('')));
}

return cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"lightgrey"], null)], null),new cljs.core.Keyword(null,"css","css",1135045163),clojure.walk.postwalk((function (x__81536__auto__){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.meta(x__81536__auto__);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.meta(x__81536__auto__),new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661));
} else {
return and__4251__auto__;
}
})())){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dv.cljs-emotion","hashed-name","dv.cljs-emotion/hashed-name",-795044661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x__81536__auto__)))].join('');
} else {
if(cljs.core.fn_QMARK_(x__81536__auto__)){
return (function (arg__81537__auto__){
delete arg__81537__auto__["children"];

return cljs.core.clj__GT_js(dv.cljs_emotion.camelize_keys((function (){var G__83043 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(arg__81537__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (x__81536__auto__.cljs$core$IFn$_invoke$arity$1 ? x__81536__auto__.cljs$core$IFn$_invoke$arity$1(G__83043) : x__81536__auto__.call(null,G__83043));
})()));

});
} else {
if(cljs.core.map_QMARK_(x__81536__auto__)){
return dv.cljs_emotion.camelize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x__81536__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
} else {
return x__81536__auto__;

}
}
}
}),new cljs.core.Keyword(null,"css","css",1135045163).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"lightgrey"], null)], null)))));
})()
;
var G__83042 = (function (){var G__83046 = "div";
var G__83047 = null;
var G__83048 = (function (){var G__83051 = "div";
var G__83052 = null;
var G__83053 = (function (){var G__83054 = "div";
var G__83055 = ({"key": (1)});
var G__83056 = "Hello";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__83054,G__83055,G__83056) : sablono.core.create_element.call(null,G__83054,G__83055,G__83056));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__83051,G__83052,G__83053) : sablono.core.create_element.call(null,G__83051,G__83052,G__83053));
})();
var G__83049 = (function (){var G__83057 = "div";
var G__83058 = ({"key": (2)});
var G__83059 = "Hello2";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__83057,G__83058,G__83059) : sablono.core.create_element.call(null,G__83057,G__83058,G__83059));
})();
var G__83050 = (function (){var G__83060 = "div";
var G__83061 = ({"key": (3)});
var G__83062 = "Hello3";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__83060,G__83061,G__83062) : sablono.core.create_element.call(null,G__83060,G__83061,G__83062));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$5 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$5(G__83046,G__83047,G__83048,G__83049,G__83050) : sablono.core.create_element.call(null,G__83046,G__83047,G__83048,G__83049,G__83050));
})();
return (dv.cljs_emotion.jsx.cljs$core$IFn$_invoke$arity$3 ? dv.cljs_emotion.jsx.cljs$core$IFn$_invoke$arity$3(G__83040,G__83041,G__83042) : dv.cljs_emotion.jsx.call(null,G__83040,G__83041,G__83042));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Multiple children are wrapped in a react fragment.",["\n```clojure\n","(defn anon-styles2 []\n  (css :div {:css {:background \"lightgrey\"}}\n    (html\n      [:div\n       [:div [:div {:key 1} \"Hello\"]]\n       [:div {:key 2} \"Hello2\"]\n       [:div {:key 3} \"Hello3\"]])))","\n```\n"].join('')], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dv.cljs_emotion.devcards","dv.cljs_emotion.devcards",540490030),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),dv.cljs_emotion.devcards.anon_styles2(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
dv.cljs_emotion.devcards.main = (function dv$cljs_emotion$devcards$main(){
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();
});
goog.exportSymbol('dv.cljs_emotion.devcards.main', dv.cljs_emotion.devcards.main);

//# sourceMappingURL=dv.cljs_emotion.devcards.js.map
