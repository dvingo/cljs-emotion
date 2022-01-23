goog.provide('devcards.system');
goog.scope(function(){
  devcards.system.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
devcards.system.l = (function devcards$system$l(x){
console.log(x);

return x;
});
devcards.system.devcards_app_element_id = "com-rigsomelight-devcards-main";
devcards.system.devcards_rendered_card_class = "com-rigsomelight-devcards_rendered-card";
devcards.system.prevent__GT_ = (function devcards$system$prevent__GT_(f){
return (function (e){
e.preventDefault();

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
});
});
devcards.system.get_element_by_id = (function devcards$system$get_element_by_id(id){
return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards$system$devcards_app_node(){
return devcards.system.get_element_by_id(devcards.system.devcards_app_element_id);
});
devcards.system.path__GT_unique_card_id = (function devcards$system$path__GT_unique_card_id(path){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"]"].join('');
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(new cljs.core.Keyword(null,"cardpath","cardpath",-1078069311),path))));
});
devcards.system.create_element_STAR_ = (function devcards$system$create_element_STAR_(tag,id,style_text){
var el = document.createElement(tag);
(el.id = id);

el.appendChild(document.createTextNode(style_text));

return el;
});
devcards.system.create_style_element = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.create_element_STAR_,"style");
devcards.system.create_script_element = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.create_element_STAR_,"script");
devcards.system.prepend_child = (function devcards$system$prepend_child(node,node2){
var temp__5751__auto__ = node.firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var first_child = temp__5751__auto__;
return node.insertBefore(node2,first_child);
} else {
return node.appendChild(node2);
}
});
devcards.system.add_css_if_necessary_BANG_ = (function devcards$system$add_css_if_necessary_BANG_(){
var temp__5751__auto__ = document.getElementsByTagName("head");
if(cljs.core.truth_(temp__5751__auto__)){
var heads = temp__5751__auto__;
var head = (heads[(0)]);
if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-code-highlight-css"))){
} else {
head.appendChild(devcards.system.create_style_element("com-rigsomelight-code-highlight-css","/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs-comment,\n.diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.css .rule .hljs-keyword,\n.hljs-winutils,\n.nginx .hljs-title,\n.hljs-subst,\n.hljs-request,\n.hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-hexcolor,\n.ruby .hljs-constant {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-tag .hljs-value,\n.hljs-doctag,\n.tex .hljs-formula {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-id,\n.scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-list .hljs-keyword,\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-class .hljs-title,\n.hljs-type,\n.vhdl .hljs-literal,\n.tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-tag .hljs-title,\n.hljs-rule .hljs-property,\n.django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-attribute,\n.hljs-variable,\n.lisp .hljs-body,\n.hljs-name {\n  color: #008080;\n}\n\n.hljs-regexp {\n  color: #009926;\n}\n\n.hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.lisp .hljs-keyword,\n.clojure .hljs-keyword,\n.scheme .hljs-keyword,\n.tex .hljs-special,\n.hljs-prompt {\n  color: #990073;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-pi,\n.hljs-doctype,\n.hljs-shebang,\n.hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.diff .hljs-change {\n  background: #0086b3;\n}\n\n.hljs-chunk {\n  color: #aaa;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-devcards-css"))){
} else {
head.appendChild(devcards.system.create_style_element("com-rigsomelight-devcards-css","body {\n    margin: 0px;\n}\n\nbody .hljs {\n  padding: 0px;\n  color: #333;\n  background: transparent;\n}\n  \n#com-rigsomelight-devcards-main {\n    padding-bottom: 10em;\n}\n\n.com-rigsomelight-devcards_rendered-card {\n  position: relative;\n}\n\n.com-rigsomelight-devcards-body {\n    background-color: rgb(233,234,237);\n}\n\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre\n{\n  display: block;\n  padding: 9.5px 14px;\n  margin: 0px 0px 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;\n  color: #333;\n  background-color: rgb(250,250,250);\n  border: 1px solid #e1e1e1;  \n  margin-left: -14px;\n  margin-right: -14px;  \n  border-left: 0px;\n  border-right: 0px; \n}\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  margin-left: -15px;\n  margin-right: -15px;  \n}\n\n/* frameless style for markdown */\n.com-rigsomelight-devcards-framelesss .com-rigsomelight-devcards-markdown {\n    padding-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n}\n\n/* end fremless markdown style */\n\n.com-rigsomelight-devcards-padding-top-border {\n    margin-top: 14px;\n    padding-top: 14px;\n}\n\n.com-rigsomelight-devcards-markdown code {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #990073;\n  background-color: #fafafa;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\n.com-rigsomelight-devcards-markdown pre code {\n  padding: 0;\n  font-size: 1em;\n  color: inherit;\n  white-space: pre; \n  background-color: transparent;\n  border-radius: 0;\n}\n\n.com-rigsomelight-devcards-base,\n.com-rigsomelight-devcards-markdown {\n\n}\n\n\n.com-rigsomelight-devcards-typog {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards-typog h1,\n.com-rigsomelight-devcards-typog h2,\n.com-rigsomelight-devcards-typog h3,\n.com-rigsomelight-devcards-typog h4,\n.com-rigsomelight-devcards-typog h5,\n.com-rigsomelight-devcards-markdown h1,\n.com-rigsomelight-devcards-markdown h2,\n.com-rigsomelight-devcards-markdown h3,\n.com-rigsomelight-devcards-markdown h4,\n.com-rigsomelight-devcards-markdown h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards-typog a {\n    color: #428bca;\n    text-decoration: none;\n}\n\n.com-rigsomelight-devcards-markdown h1:first-child,\n.com-rigsomelight-devcards-markdown h2:first-child,\n.com-rigsomelight-devcards-markdown h3:first-child,\n.com-rigsomelight-devcards-markdown h4:first-child,\n.com-rigsomelight-devcards-markdown h5:first-child {\n    margin-top: 14px;\n}\n                                           \n.com-rigsomelight-devcards-markdown code,\n.com-rigsomelight-devcards-markdown kbd,\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-markdown samp {\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n\n.com-rigsomelight-devcards-navbar {\n    background-color: rgb(60,90,153);\n    border-color: rgb(50,80,153);\n    color: #fff;\n    height: 50px;\n}\n\n.com-rigsomelight-devcards-brand {\n    color: #ccc;\n    font-size: 18px;\n    line-height: 50px;\n    display: block;\n    margin-left: 14px;\n}\n\n.com-rigsomelight-devcards-container {\n /* margin: auto;\n    width: 80%;*/\n}\n\n.com-rigsomelight-devcards-card-base {\n    background: #fff;\n    padding: 8px 14px;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-card-base-no-pad {\n    background: #fff;\n    border:  1px solid rgb(231,234,242);\n    margin-top: 20px;\n    border-left: 0px;\n    border-right: 0px;    \n}\n\n.com-rigsomelight-devcards-card-base-no-pad.com-rigsomelight-devcards-card-hide-border {\n   border: 1px solid transparent;\n}\n\n\n.com-rigsomelight-devcards-breadcrumbs {\n    font-size: 16px;\n    line-height: 1.5em;\n    border: none !important;\n}\n\n.com-rigsomelight-devcards-breadcrumb-sep {\n    display: inline-block;\n    padding: 0px 5px;\n    color: #ccc;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    color: #555;\n    position: relative;\n    display: block;\n    padding: 10px 14px;\n    margin-bottom: -1px;\n    border-bottom: 1px solid #eee;\n}\n\n.com-rigsomelight-devcards-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #999;\n  border-radius: 10px;\n}\n\nbutton.com-rigsomelight-devcards-badge {\n    border: none;\n    padding: 3px 19px;\n}\n\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 15px;\n    font-size: 16px;\n    line-height: 1.5em;\n    background-color: rgb(142,162,206);\n    background-color: rgb(239, 237, 237);\n}\n\n.com-rigsomelight-devcards-panel-heading a {\n    color: #666;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    margin-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n    padding-bottom: 14px;\n}\n\n.com-rigsomelight-devcards-test-line {\n  position: relative;\n  display: block;\n  padding: 10px 14px;\n  border: none;\n  border-top: 1px solid #fafafa;\n}\n\n\n\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-context {\n    background-color: #fcfcfc;\n    border-left: 1px solid #f1f1f1;\n    border-right: 1px solid #f1f1f1;      \n}\n\n.com-rigsomelight-devcards-test-line pre {\n  margin: 0px;\n    \n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;    \n}\n\n\n.com-rigsomelight-devcards-test-line pre code {\n    font-size: 80%;\n    padding: 0px;\n    background-color:transparent;\n}\n    \n.com-rigsomelight-devcards-pass {\n    color: #3c763d;\n    border: 1px solid rgb(199, 225, 160);\n    border-left: 10px solid rgb(199, 225, 160);    \n}\n\n.com-rigsomelight-devcards-fail, .com-rigsomelight-devcards-error {\n  color: #a94442;\n  border: 1px solid rgb(236, 196, 196);    \n  border-left: 10px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-fail {\n    background-color: rgb(254, 254, 244);\n}\n\n\n.com-rigsomelight-devcards-error {\n    background-color: rgb(254, 245, 245);\n}\n\n\n\n.com-rigsomelight-devcards-test-message {\n    display: block;\n    margin-top: 2px;\n    margin-bottom: 8px;\n}\n\n.com-rigsomelight-devcards-pass .com-rigsomelight-devcards-test-message {\n    color: #386739;\n}\n\n.com-rigsomelight-devcards-fail .com-rigsomelight-devcards-test-message {\n    color: #994745;\n}\n\n.com-rigsomelight-devcards-history-control-small-arrow {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 9px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-block {\n    display: inline-block;\n    height: 16px;\n    width: 3px;\n    background-color: #666;\n}    \n\n.com-rigsomelight-devcards-history-control-right {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 16px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-left {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-right-width: 16px;\n    border-right-color: #666;\n    margin-left: -10px;\n}\n\n.com-rigsomelight-devcards-history-stop {\n    display: inline-block;\n    height: 17px;\n    width: 17px;\n    background-color: #D88282;\n    border-radius: 3px;\n}\n\n.com-rigsomelight-devcards-history-control-bar {\n    background-color: rgb(255,252,234);\n    padding-top: 5px;\n    padding-bottom: 3px;    \n    margin: 14px 0px;\n    padding-left: 14px;\n    padding-right: 14px;\n    text-align: right;\n    /* position: absolute;\n    top: 0px;\n    right: 0px; */\n}\n\n.com-rigsomelight-devcards-history-control-bar button {\n    background: transparent;\n    border: none;\n    margin: 0px 4px;\n    height: 20px;\n    padding: 1px 28px;\n}\n\n.com-rigsomelight-devcards-history-control-bar + .com-rigsomelight-devcards-padding-top-border {\n    border: none;\n    padding-top: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding .com-rigsomelight-devcards-history-control-bar {\n    /* margin-top: -14px; */\n    margin: 14px -30px;\n}\n\n\n\n\n@media (min-width: 768px) {\n\n    \n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  padding: 9.5px 30px;\n  margin-left: -30px;\n  margin-right: -30px;      \n}\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 30px;\n}    \n\n.com-rigsomelight-devcards-brand {\n    margin-left: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 0px;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    padding-left: 0px;\n    padding-right: 0px;    \n}\n    \n .com-rigsomelight-devcards-container {\n    margin: auto;\n    width: 750px;\n }\n\n button.com-rigsomelight-devcards-badge {\n    border: 1px solid #999;\n    padding: 3px 9px;\n    background-color: #ccc;\n }\n\n .com-rigsomelight-devcards-history-control-bar button {\n     padding: 1px 6px;\n }\n\n .com-rigsomelight-devcards-card-base,\n .com-rigsomelight-devcards-card-base-no-pad {\n     border-radius: 3px;\n     border:  1px solid rgb(231,234,242);\n }\n\n .com-rigsomelight-devcards-test-line {\n    padding: 10px 30px;\n }\n\n.com-rigsomelight-devcards-pass {\n  border-left: 25px solid rgb(199, 225, 160);        \n}\n\n.com-rigsomelight-devcards-fail {\n  border-left: 25px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-error {\n  border-left: 25px solid rgb(236, 196, 196);      \n}\n \n}\n\n@media (min-width: 800px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-markdown pre {\n      border: 1px solid #e1e1e1;\n      border-radius: 4px;\n      padding-left: 14px;\n      padding-right: 14px;\n\n      margin-left: 0px;\n      margin-right: 0px;            \n  }\n}\n\n@media (min-width: 1200px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .com-rigsomelight-devcards-brand {\n    margin-left: 30px;\n  }\n  .com-rigsomelight-devcards-list-group-item {\n      margin-left: 30px;\n      margin-right: 30px;\n  }\n  \n  .com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 30px;\n  }\n  \n  .com-rigsomelight-devcards-container {    \n    margin: auto;\n    width: 970px;\n  }\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-devcards-addons-css"))){
} else {
head.appendChild(devcards.system.create_style_element("com-rigsomelight-devcards-addons-css","/* full width code examples */\n\nbody {\n    overflow-x: hidden;\n}\n\n@media (max-width: 1000px) {\n.com-rigsomelight-devcards-card-hide-border\n.com-rigsomelight-devcards_rendered-card\n.com-rigsomelight-devcards-markdown pre {\n    margin-right: -3000px;\n    margin-left: -3000px;\n    padding-right: 3000px;\n    padding-left: 3000px;        \n}\n}\n\n/* default typography */\n.com-rigsomelight-devcards_rendered-card {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards_rendered-card code {\n    font-size: 90%;\n}\n\n.com-rigsomelight-devcards_rendered-card h1,\n.com-rigsomelight-devcards_rendered-card h2,\n.com-rigsomelight-devcards_rendered-card h3,\n.com-rigsomelight-devcards_rendered-card h4,\n.com-rigsomelight-devcards_rendered-card h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards_rendered-card a {\n    color: #428bca;\n    text-decoration: none;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-edn-css"))){
return null;
} else {
return head.appendChild(devcards.system.create_style_element("com-rigsomelight-edn-css",".com-rigsomelight-rendered-edn .collection {\n    display: flex;\n    display: -webkit-flex;\n}\n\n.com-rigsomelight-rendered-edn .keyval {\n    display: flex;\n    display: -webkit-flex;    \n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;    \n}\n\n.com-rigsomelight-rendered-edn .keyval > .keyword {\n    color: #a94442; \n}\n\n.com-rigsomelight-rendered-edn .keyval > *:first-child {\n    margin: 0px 3px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;\n}\n\n.com-rigsomelight-rendered-edn .keyval > *:last-child {\n    margin: 0px 3px;\n}\n\n.com-rigsomelight-rendered-edn .opener {\n    color: #999;\n    margin: 0px 4px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;    \n}\n\n.com-rigsomelight-rendered-edn .closer {\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: column-reverse;\n    -webkit-flex-direction: column-reverse;\n    margin: 0px 3px;    \n    color: #999;\n}\n\n.com-rigsomelight-rendered-edn .string {\n    color: #428bca;\n}\n\n.com-rigsomelight-rendered-edn .string .opener,\n.com-rigsomelight-rendered-edn .string .closer {\n    display: inline;\n    margin: 0px;\n    color: #428bca;    \n}\n"));
}
} else {
return null;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function devcards$system$render_base_if_necessary_BANG_(){
devcards.system.add_css_if_necessary_BANG_();

if(cljs.core.truth_(devcards.system.devcards_app_node())){
return null;
} else {
var el = document.createElement("div");
(el.id = devcards.system.devcards_app_element_id);

return devcards.system.prepend_child(document.body,el);
}
});

if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.history !== 'undefined')){
} else {
devcards.system.history = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){var h = (new goog.History());
h.setEnabled(true);

return h;
})():null);
}
devcards.system.path__GT_token = (function devcards$system$path__GT_token(path){
return ["!/",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,path))].join('');
});
devcards.system.token__GT_path = (function devcards$system$token__GT_path(token){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(token,/#/,""),/!\//,""),/\//)));
});
devcards.system.hash_navigate = (function devcards$system$hash_navigate(path){
return devcards.system.history.setToken(devcards.system.path__GT_token(path));
});
devcards.system.hash_routing_init = (function devcards$system$hash_routing_init(state_atom){
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,(function (p1__51657_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(p1__51657_SHARP_.token));
}));

var temp__5753__auto__ = devcards.system.goog$module$goog$object.get(location,"hash");
if(cljs.core.truth_(temp__5753__auto__)){
var token = temp__5753__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(token));
} else {
return null;
}
});
devcards.system.devcard_QMARK_ = (function devcards$system$devcard_QMARK_(d){
var and__4251__auto__ = cljs.core.map_QMARK_(d);
if(and__4251__auto__){
var and__4251__auto____$1 = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4251__auto____$2)){
var and__4251__auto____$3 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4251__auto____$3)){
return d;
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
devcards.system.path_collision = (function devcards$system$path_collision(state,path){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351).cljs$core$IFn$_invoke$arity$1(state),path);
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(cljs.core.vec(path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(cljs.core.last(path)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''))], null)));
} else {
return path;
}
});
devcards.system.register_collision = (function devcards$system$register_collision(state,path){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),path], null),cljs.core.inc);
});
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.dev_trans !== 'undefined')){
} else {
devcards.system.dev_trans = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51674 = cljs.core.get_global_hierarchy;
return (fexpr__51674.cljs$core$IFn$_invoke$arity$0 ? fexpr__51674.cljs$core$IFn$_invoke$arity$0() : fexpr__51674.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.system","dev-trans"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg,state){
return state;
}));
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"register-card","register-card",-1375971588),(function (p__51675,state){
var vec__51676 = p__51675;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51676,(0),null);
var map__51679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51676,(1),null);
var map__51679__$1 = cljs.core.__destructure_map(map__51679);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51679__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51679__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51679__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state);
var new_path = devcards.system.path_collision(state,path);
return devcards.system.register_collision(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.inc),cljs.core.cons(new cljs.core.Keyword(null,"cards","cards",169174038),new_path),(function (dc){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new_path,new cljs.core.Keyword(null,"func","func",-238706040),func,new cljs.core.Keyword(null,"position","position",-2011731912),position], null);
})),path);
}));
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true,new cljs.core.Keyword(null,"padding","padding",1660304693),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true,new cljs.core.Keyword(null,"history","history",-247395220),false], null)], null);
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.app_state !== 'undefined')){
} else {
devcards.system.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(devcards.system.devcard_initial_data);
}
devcards.system.valid_path_QMARK_ = (function devcards$system$valid_path_QMARK_(state,path){
var or__4253__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,path);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function devcards$system$enforce_valid_path(state,path){
return cljs.core.vec((cljs.core.truth_(devcards.system.valid_path_QMARK_(state,path))?path:cljs.core.PersistentVector.EMPTY));
});
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__51695,path){
var map__51696 = p__51695;
var map__51696__$1 = cljs.core.__destructure_map(map__51696);
var state = map__51696__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51696__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path(state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__51700,path){
var map__51704 = p__51700;
var map__51704__$1 = cljs.core.__destructure_map(map__51704);
var state = map__51704__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51704__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var path__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,path));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_path,path__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path(state,path__$1));
} else {
return state;
}
});
devcards.system.set_current_path_BANG_ = (function devcards$system$set_current_path_BANG_(state_atom,path){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,path);

return devcards.system.hash_navigate(path);
});
devcards.system.current_page = (function devcards$system$current_page(data){
var and__4251__auto__ = new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
devcards.system.display_single_card_QMARK_ = (function devcards$system$display_single_card_QMARK_(state){
return devcards.system.devcard_QMARK_(devcards.system.current_page(state));
});
devcards.system.display_dir_paths = (function devcards$system$display_dir_paths(state){
var cur = devcards.system.current_page(state);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(devcards.system.devcard_QMARK_,cljs.core.second)),cur);
});
devcards.system.display_cards = (function devcards$system$display_cards(cur){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__51729_SHARP_){
var and__4251__auto__ = cljs.core.not(new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(p1__51729_SHARP_));
if(and__4251__auto__){
return devcards.system.devcard_QMARK_(p1__51729_SHARP_);
} else {
return and__4251__auto__;
}
}),cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__51731){
var map__51732 = p__51731;
var map__51732__$1 = cljs.core.__destructure_map(map__51732);
var card = map__51732__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51732__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51732__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51732__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var G__51733 = "div";
var G__51734 = ({"key": devcards.system.path__GT_unique_card_id(path), "className": "com-rigsomelight-devcard"});
var G__51735 = sablono.interpreter.interpret((function (){var _STAR_devcard_data_STAR__orig_val__51736 = devcards.system._STAR_devcard_data_STAR_;
var _STAR_devcard_data_STAR__temp_val__51737 = card;
(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__temp_val__51737);

try{return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}finally {(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__orig_val__51736);
}})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__51733,G__51734,G__51735) : sablono.core.create_element.call(null,G__51733,G__51734,G__51735));
});
devcards.system.render_cards = (function devcards$system$render_cards(cards,state_atom){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.card_template,state_atom),cljs.core.second),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.second),cards));
});
devcards.system.main_cards_template = (function devcards$system$main_cards_template(state_atom){
var data = cljs.core.deref(state_atom);
if(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))){
return devcards.system.card_template(state_atom,devcards.system.current_page(data));
} else {
return devcards.system.render_cards(devcards.system.display_cards(devcards.system.current_page(data)),state_atom);
}
});
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__51756){
var map__51757 = p__51756;
var map__51757__$1 = cljs.core.__destructure_map(map__51757);
var state = map__51757__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51757__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var cpath = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(new cljs.core.Keyword(null,"devcards","devcards",365747130),current_path));
var crumbs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.rest),cljs.core.rest(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(cpath) + (1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sep_fn = (function (_){
var G__51770 = "span";
var G__51771 = ({"key": (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);

return cljs.core.deref(counter);
})()
, "className": "com-rigsomelight-devcards-breadcrumb-sep"});
var G__51772 = "/";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__51770,G__51771,G__51772) : sablono.core.create_element.call(null,G__51770,G__51771,G__51772));
});
var G__51775 = "div";
var G__51776 = ({"key": "breadcrumbs-templ", "className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs com-rigsomelight-devcards-typog"});
var G__51777 = sablono.interpreter.interpret(cljs.core.rest(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(sep_fn,sep_fn(null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51780){
var vec__51781 = p__51780;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51781,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51781,(1),null);
var G__51785 = "span";
var G__51786 = ({"style": ({"display": "inline-block"}), "key": devcards.system.path__GT_unique_card_id(path)});
var G__51787 = (function (){var G__51788 = "a";
var G__51789 = ({"href": "#", "onClick": devcards.system.prevent__GT_((function (){
return devcards.system.set_current_path_BANG_(state_atom,path);
})), "className": "com-rigsomelight-devcards_set-current-path"});
var G__51791 = sablono.interpreter.interpret(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__51788,G__51789,G__51791) : sablono.core.create_element.call(null,G__51788,G__51789,G__51791));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__51785,G__51786,G__51787) : sablono.core.create_element.call(null,G__51785,G__51786,G__51787));
}),crumbs))));
var G__51778 = sablono.interpreter.interpret((devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0 ? devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0() : devcards.system.cljs_logo.call(null)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__51775,G__51776,G__51777,G__51778) : sablono.core.create_element.call(null,G__51775,G__51776,G__51777,G__51778));
});
devcards.system.navigate_to_path = (function devcards$system$navigate_to_path(key,state_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (s){
var new_s = devcards.system.add_to_current_path(s,key);
devcards.system.hash_navigate(new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(new_s));

return new_s;
}));
});
devcards.system.dir_links = (function devcards$system$dir_links(dirs,state_atom){
if(cljs.core.empty_QMARK_(dirs)){
return null;
} else {
var attrs51800 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51802){
var vec__51803 = p__51802;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51803,(0),null);
var child_tree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51803,(1),null);
var G__51808 = "a";
var G__51809 = ({"href": "#", "key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(key), "onClick": devcards.system.prevent__GT_((function (e){
return devcards.system.navigate_to_path(key,state_atom);
})), "className": "com-rigsomelight-devcards-list-group-item"});
var G__51810 = (function (){var G__51814 = "span";
var G__51815 = ({"style": ({"float": "right"}), "className": "com-rigsomelight-devcards-badge"});
var G__51816 = sablono.interpreter.interpret(cljs.core.count(child_tree));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__51814,G__51815,G__51816) : sablono.core.create_element.call(null,G__51814,G__51815,G__51816));
})();
var G__51811 = (function (){var G__51817 = "span";
var G__51818 = null;
var G__51819 = " ";
var G__51820 = sablono.interpreter.interpret(cljs.core.name(key));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__51817,G__51818,G__51819,G__51820) : sablono.core.create_element.call(null,G__51817,G__51818,G__51819,G__51820));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__51808,G__51809,G__51810,G__51811) : sablono.core.create_element.call(null,G__51808,G__51809,G__51810,G__51811));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__51823){
var vec__51824 = p__51823;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51824,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51824,(1),null);
return cljs.core.name(key);
}),dirs));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs51800))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-list-group","com-rigsomelight-devcards-typog"], null)], null),attrs51800], 0))):({"className": "com-rigsomelight-devcards-list-group com-rigsomelight-devcards-typog"})),((cljs.core.map_QMARK_(attrs51800))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51800)], null)));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = cljs.core.deref(state_atom);
var G__51841 = "div";
var G__51842 = ({"className": ["com-rigsomelight-devcards-base ",(function (){var temp__5753__auto__ = cljs.core.first(new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
return clojure.string.replace(cljs.core.name(n),".","-");
} else {
return null;
}
})()].join('')});
var G__51843 = (function (){var attrs51836 = (function (){var temp__5753__auto__ = devcards.system.breadcrumbs(data);
if(cljs.core.truth_(temp__5753__auto__)){
var crumbs = temp__5753__auto__;
return devcards.system.breadcrumbs_templ(crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs51836))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs51836], 0))):({"className": "com-rigsomelight-devcards-container"})),((cljs.core.map_QMARK_(attrs51836))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return sablono.interpreter.interpret(devcards.system.dir_links(dir_paths,state_atom));
})()),(function (){var attrs51839 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs51839))?sablono.interpreter.attributes(attrs51839):null),((cljs.core.map_QMARK_(attrs51839))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51839)], null)));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51836),(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return sablono.interpreter.interpret(devcards.system.dir_links(dir_paths,state_atom));
})()),(function (){var attrs51840 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs51840))?sablono.interpreter.attributes(attrs51840):null),((cljs.core.map_QMARK_(attrs51840))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs51840)], null)));
})()], null)));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__51841,G__51842,G__51843) : sablono.core.create_element.call(null,G__51841,G__51842,G__51843));
});
devcards.system.DevcardsRoot = (function (){var ctor__50818__auto__ = (function (props__50815__auto__){
var this__50816__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__50816__auto__,props__50815__auto__);

return this__50816__auto__;
});
goog.inherits(ctor__50818__auto__,devcards.util.utils.react_holder.Component);

var x51869_52710 = ctor__50818__auto__.prototype;
(x51869_52710.componentDidMount = (function (){
var this$ = this;
return cljs.core.add_watch(devcards.system.app_state,new cljs.core.Keyword(null,"renderer-watch","renderer-watch",542998517),(function (_,___$1,___$2,___$3){
return this$.forceUpdate();
}));
}));

(x51869_52710.render = (function (){
var this$ = this;
return devcards.system.main_template(devcards.system.app_state);
}));


return ctor__50818__auto__;
})();

(devcards.system.DevcardsRoot.displayName = cljs.core.name(new cljs.core.Symbol(null,"DevcardsRoot","DevcardsRoot",-655621301,null)));
devcards.system.renderer = (function devcards$system$renderer(state_atom){
return module$node_modules$react_dom$index.render(module$node_modules$react$index.createElement(devcards.system.DevcardsRoot),devcards.system.devcards_app_node());
});
devcards.system.merge_in_new_data = (function devcards$system$merge_in_new_data(state,new_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(new_state)], 0))], 0));
});
/**
 * Run sequential messages off the books outside of the atom and
 * then difference the result so we can only display the new cards
 * that have arrived. This prevents multiple renders and allows us
 * to delete cards live.
 */
devcards.system.off_the_books = (function devcards$system$off_the_books(channel,start_data,first_message){
var initial_data = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(start_data,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"cards","cards",169174038));
var c__45178__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_51950){
var state_val_51952 = (state_51950[(1)]);
if((state_val_51952 === (7))){
var inst_51944 = (state_51950[(2)]);
var state_51950__$1 = state_51950;
var statearr_51960_52717 = state_51950__$1;
(statearr_51960_52717[(2)] = inst_51944);

(statearr_51960_52717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (1))){
var inst_51893 = devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(first_message,initial_data);
var inst_51894 = inst_51893;
var state_51950__$1 = (function (){var statearr_51964 = state_51950;
(statearr_51964[(7)] = inst_51894);

return statearr_51964;
})();
var statearr_51965_52718 = state_51950__$1;
(statearr_51965_52718[(2)] = null);

(statearr_51965_52718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (4))){
var inst_51904 = (state_51950[(8)]);
var inst_51904__$1 = (state_51950[(2)]);
var state_51950__$1 = (function (){var statearr_51968 = state_51950;
(statearr_51968[(8)] = inst_51904__$1);

return statearr_51968;
})();
if(cljs.core.truth_(inst_51904__$1)){
var statearr_51970_52721 = state_51950__$1;
(statearr_51970_52721[(1)] = (5));

} else {
var statearr_51973_52722 = state_51950__$1;
(statearr_51973_52722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (15))){
var state_51950__$1 = state_51950;
var statearr_51976_52723 = state_51950__$1;
(statearr_51976_52723[(2)] = null);

(statearr_51976_52723[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (13))){
var inst_51939 = (state_51950[(2)]);
var state_51950__$1 = state_51950;
var statearr_51977_52724 = state_51950__$1;
(statearr_51977_52724[(2)] = inst_51939);

(statearr_51977_52724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (6))){
var state_51950__$1 = state_51950;
var statearr_51982_52725 = state_51950__$1;
(statearr_51982_52725[(2)] = null);

(statearr_51982_52725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (3))){
var inst_51946 = (state_51950[(2)]);
var state_51950__$1 = state_51950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51950__$1,inst_51946);
} else {
if((state_val_51952 === (12))){
var state_51950__$1 = state_51950;
var statearr_51985_52726 = state_51950__$1;
(statearr_51985_52726[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (2))){
var inst_51899 = (state_51950[(9)]);
var inst_51899__$1 = cljs.core.async.timeout((500));
var inst_51900 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51901 = [channel,inst_51899__$1];
var inst_51902 = (new cljs.core.PersistentVector(null,2,(5),inst_51900,inst_51901,null));
var state_51950__$1 = (function (){var statearr_51994 = state_51950;
(statearr_51994[(9)] = inst_51899__$1);

return statearr_51994;
})();
return cljs.core.async.ioc_alts_BANG_(state_51950__$1,(4),inst_51902);
} else {
if((state_val_51952 === (11))){
var inst_51894 = (state_51950[(7)]);
var inst_51926 = devcards.system.merge_in_new_data(start_data,inst_51894);
var state_51950__$1 = state_51950;
var statearr_51998_52734 = state_51950__$1;
(statearr_51998_52734[(2)] = inst_51926);

(statearr_51998_52734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (9))){
var inst_51916 = (state_51950[(10)]);
var inst_51924 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51916,new cljs.core.Keyword(null,"jsreload","jsreload",331693051));
var state_51950__$1 = state_51950;
if(inst_51924){
var statearr_52003_52735 = state_51950__$1;
(statearr_52003_52735[(1)] = (11));

} else {
var statearr_52004_52737 = state_51950__$1;
(statearr_52004_52737[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (5))){
var inst_51899 = (state_51950[(9)]);
var inst_51904 = (state_51950[(8)]);
var inst_51913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51904,(0),null);
var inst_51916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51913,(0),null);
var inst_51917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51913,(1),null);
var inst_51918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51904,(1),null);
var inst_51919 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51918,inst_51899);
var state_51950__$1 = (function (){var statearr_52011 = state_51950;
(statearr_52011[(10)] = inst_51916);

(statearr_52011[(11)] = inst_51917);

return statearr_52011;
})();
if(inst_51919){
var statearr_52014_52739 = state_51950__$1;
(statearr_52014_52739[(1)] = (8));

} else {
var statearr_52015_52740 = state_51950__$1;
(statearr_52015_52740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (14))){
var inst_51894 = (state_51950[(7)]);
var inst_51916 = (state_51950[(10)]);
var inst_51917 = (state_51950[(11)]);
var inst_51930 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51931 = [inst_51916,inst_51917];
var inst_51932 = (new cljs.core.PersistentVector(null,2,(5),inst_51930,inst_51931,null));
var inst_51933 = devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(inst_51932,inst_51894);
var inst_51894__$1 = inst_51933;
var state_51950__$1 = (function (){var statearr_52020 = state_51950;
(statearr_52020[(7)] = inst_51894__$1);

return statearr_52020;
})();
var statearr_52022_52748 = state_51950__$1;
(statearr_52022_52748[(2)] = null);

(statearr_52022_52748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (16))){
var inst_51937 = (state_51950[(2)]);
var state_51950__$1 = state_51950;
var statearr_52025_52749 = state_51950__$1;
(statearr_52025_52749[(2)] = inst_51937);

(statearr_52025_52749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (10))){
var inst_51941 = (state_51950[(2)]);
var state_51950__$1 = state_51950;
var statearr_52026_52750 = state_51950__$1;
(statearr_52026_52750[(2)] = inst_51941);

(statearr_52026_52750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51952 === (8))){
var inst_51894 = (state_51950[(7)]);
var inst_51922 = devcards.system.merge_in_new_data(start_data,inst_51894);
var state_51950__$1 = state_51950;
var statearr_52031_52752 = state_51950__$1;
(statearr_52031_52752[(2)] = inst_51922);

(statearr_52031_52752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var devcards$system$off_the_books_$_state_machine__45093__auto__ = null;
var devcards$system$off_the_books_$_state_machine__45093__auto____0 = (function (){
var statearr_52043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52043[(0)] = devcards$system$off_the_books_$_state_machine__45093__auto__);

(statearr_52043[(1)] = (1));

return statearr_52043;
});
var devcards$system$off_the_books_$_state_machine__45093__auto____1 = (function (state_51950){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_51950);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e52050){var ex__45096__auto__ = e52050;
var statearr_52051_52754 = state_51950;
(statearr_52051_52754[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_51950[(4)]))){
var statearr_52053_52755 = state_51950;
(statearr_52053_52755[(1)] = cljs.core.first((state_51950[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52756 = state_51950;
state_51950 = G__52756;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__45093__auto__ = function(state_51950){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__45093__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__45093__auto____1.call(this,state_51950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$off_the_books_$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__45093__auto____0;
devcards$system$off_the_books_$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__45093__auto____1;
return devcards$system$off_the_books_$_state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_52055 = f__45179__auto__();
(statearr_52055[(6)] = c__45178__auto__);

return statearr_52055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));

return c__45178__auto__;
});
devcards.system.load_data_from_channel_BANG_ = (function devcards$system$load_data_from_channel_BANG_(channel){
var c__45178__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_52083){
var state_val_52084 = (state_52083[(1)]);
if((state_val_52084 === (1))){
var inst_52075 = cljs.core.deref(devcards.system.app_state);
var inst_52076 = cljs.core.PersistentVector.EMPTY;
var inst_52077 = devcards.system.off_the_books(channel,inst_52075,inst_52076);
var state_52083__$1 = state_52083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52083__$1,(2),inst_52077);
} else {
if((state_val_52084 === (2))){
var inst_52079 = (state_52083[(2)]);
var inst_52080 = cljs.core.reset_BANG_(devcards.system.app_state,inst_52079);
var state_52083__$1 = state_52083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52083__$1,inst_52080);
} else {
return null;
}
}
});
return (function() {
var devcards$system$load_data_from_channel_BANG__$_state_machine__45093__auto__ = null;
var devcards$system$load_data_from_channel_BANG__$_state_machine__45093__auto____0 = (function (){
var statearr_52111 = [null,null,null,null,null,null,null];
(statearr_52111[(0)] = devcards$system$load_data_from_channel_BANG__$_state_machine__45093__auto__);

(statearr_52111[(1)] = (1));

return statearr_52111;
});
var devcards$system$load_data_from_channel_BANG__$_state_machine__45093__auto____1 = (function (state_52083){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_52083);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e52113){var ex__45096__auto__ = e52113;
var statearr_52115_52762 = state_52083;
(statearr_52115_52762[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_52083[(4)]))){
var statearr_52117_52763 = state_52083;
(statearr_52117_52763[(1)] = cljs.core.first((state_52083[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52764 = state_52083;
state_52083 = G__52764;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
devcards$system$load_data_from_channel_BANG__$_state_machine__45093__auto__ = function(state_52083){
switch(arguments.length){
case 0:
return devcards$system$load_data_from_channel_BANG__$_state_machine__45093__auto____0.call(this);
case 1:
return devcards$system$load_data_from_channel_BANG__$_state_machine__45093__auto____1.call(this,state_52083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$load_data_from_channel_BANG__$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$load_data_from_channel_BANG__$_state_machine__45093__auto____0;
devcards$system$load_data_from_channel_BANG__$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$load_data_from_channel_BANG__$_state_machine__45093__auto____1;
return devcards$system$load_data_from_channel_BANG__$_state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_52123 = f__45179__auto__();
(statearr_52123[(6)] = c__45178__auto__);

return statearr_52123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));

return c__45178__auto__;
});
devcards.system.start_ui_with_renderer = (function devcards$system$start_ui_with_renderer(channel,renderer){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof module$node_modules$react$index !== 'undefined') && (typeof module$node_modules$react$index.initializeTouchEvents !== 'undefined')){
module$node_modules$react$index.initializeTouchEvents(true);
} else {
}

var c__45178__auto___52769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_52172){
var state_val_52173 = (state_52172[(1)]);
if((state_val_52173 === (7))){
var state_52172__$1 = state_52172;
var statearr_52174_52770 = state_52172__$1;
(statearr_52174_52770[(2)] = null);

(statearr_52174_52770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52173 === (1))){
var inst_52145 = devcards.system.load_data_from_channel_BANG_(channel);
var state_52172__$1 = state_52172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52172__$1,(2),inst_52145);
} else {
if((state_val_52173 === (4))){
var inst_52169 = (state_52172[(2)]);
var state_52172__$1 = state_52172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52172__$1,inst_52169);
} else {
if((state_val_52173 === (6))){
var inst_52155 = (state_52172[(7)]);
var inst_52158 = cljs.core.deref(devcards.system.app_state);
var inst_52159 = devcards.system.off_the_books(channel,inst_52158,inst_52155);
var state_52172__$1 = state_52172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52172__$1,(9),inst_52159);
} else {
if((state_val_52173 === (3))){
var state_52172__$1 = state_52172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52172__$1,(5),channel);
} else {
if((state_val_52173 === (2))){
var inst_52147 = (state_52172[(2)]);
var inst_52148 = (function (){return (function (){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
});
})();
var inst_52149 = setTimeout(inst_52148,(0));
var inst_52150 = (function (){return (function (){
return cljs.core.add_watch(devcards.system.app_state,new cljs.core.Keyword(null,"devcards-render","devcards-render",592502782),(function (_,___$1,___$2,___$3){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
}));
});
})();
var inst_52151 = setTimeout(inst_52150,(0));
var state_52172__$1 = (function (){var statearr_52215 = state_52172;
(statearr_52215[(8)] = inst_52147);

(statearr_52215[(9)] = inst_52151);

(statearr_52215[(10)] = inst_52149);

return statearr_52215;
})();
var statearr_52224_52777 = state_52172__$1;
(statearr_52224_52777[(2)] = null);

(statearr_52224_52777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52173 === (9))){
var inst_52155 = (state_52172[(7)]);
var inst_52161 = (state_52172[(2)]);
var inst_52162 = (function (){var temp__5753__auto__ = inst_52155;
var v = inst_52155;
var new_state = inst_52161;
return (function (){
return cljs.core.reset_BANG_(devcards.system.app_state,new_state);
});
})();
var inst_52163 = setTimeout(inst_52162,(0));
var state_52172__$1 = (function (){var statearr_52242 = state_52172;
(statearr_52242[(11)] = inst_52163);

return statearr_52242;
})();
var statearr_52244_52782 = state_52172__$1;
(statearr_52244_52782[(2)] = null);

(statearr_52244_52782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52173 === (5))){
var inst_52155 = (state_52172[(7)]);
var inst_52155__$1 = (state_52172[(2)]);
var state_52172__$1 = (function (){var statearr_52257 = state_52172;
(statearr_52257[(7)] = inst_52155__$1);

return statearr_52257;
})();
if(cljs.core.truth_(inst_52155__$1)){
var statearr_52267_52783 = state_52172__$1;
(statearr_52267_52783[(1)] = (6));

} else {
var statearr_52272_52784 = state_52172__$1;
(statearr_52272_52784[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52173 === (8))){
var inst_52167 = (state_52172[(2)]);
var state_52172__$1 = state_52172;
var statearr_52281_52785 = state_52172__$1;
(statearr_52281_52785[(2)] = inst_52167);

(statearr_52281_52785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var devcards$system$start_ui_with_renderer_$_state_machine__45093__auto__ = null;
var devcards$system$start_ui_with_renderer_$_state_machine__45093__auto____0 = (function (){
var statearr_52283 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52283[(0)] = devcards$system$start_ui_with_renderer_$_state_machine__45093__auto__);

(statearr_52283[(1)] = (1));

return statearr_52283;
});
var devcards$system$start_ui_with_renderer_$_state_machine__45093__auto____1 = (function (state_52172){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_52172);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e52285){var ex__45096__auto__ = e52285;
var statearr_52286_52790 = state_52172;
(statearr_52286_52790[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_52172[(4)]))){
var statearr_52287_52792 = state_52172;
(statearr_52287_52792[(1)] = cljs.core.first((state_52172[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52794 = state_52172;
state_52172 = G__52794;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
devcards$system$start_ui_with_renderer_$_state_machine__45093__auto__ = function(state_52172){
switch(arguments.length){
case 0:
return devcards$system$start_ui_with_renderer_$_state_machine__45093__auto____0.call(this);
case 1:
return devcards$system$start_ui_with_renderer_$_state_machine__45093__auto____1.call(this,state_52172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_with_renderer_$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_with_renderer_$_state_machine__45093__auto____0;
devcards$system$start_ui_with_renderer_$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_with_renderer_$_state_machine__45093__auto____1;
return devcards$system$start_ui_with_renderer_$_state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_52298 = f__45179__auto__();
(statearr_52298[(6)] = c__45178__auto___52769);

return statearr_52298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


return true;
})()
)
;
}
});
devcards.system.start_ui = (function devcards$system$start_ui(channel){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof module$node_modules$react$index !== 'undefined') && (typeof module$node_modules$react$index.initializeTouchEvents !== 'undefined')){
module$node_modules$react$index.initializeTouchEvents(true);
} else {
}

devcards.system.render_base_if_necessary_BANG_();

var c__45178__auto___52796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_52346){
var state_val_52347 = (state_52346[(1)]);
if((state_val_52347 === (7))){
var state_52346__$1 = state_52346;
var statearr_52354_52798 = state_52346__$1;
(statearr_52354_52798[(2)] = null);

(statearr_52354_52798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (1))){
var inst_52312 = devcards.system.load_data_from_channel_BANG_(channel);
var state_52346__$1 = state_52346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52346__$1,(2),inst_52312);
} else {
if((state_val_52347 === (4))){
var inst_52343 = (state_52346[(2)]);
var state_52346__$1 = state_52346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52346__$1,inst_52343);
} else {
if((state_val_52347 === (6))){
var inst_52327 = (state_52346[(7)]);
var inst_52330 = cljs.core.deref(devcards.system.app_state);
var inst_52331 = devcards.system.off_the_books(channel,inst_52330,inst_52327);
var state_52346__$1 = state_52346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52346__$1,(9),inst_52331);
} else {
if((state_val_52347 === (3))){
var state_52346__$1 = state_52346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52346__$1,(5),channel);
} else {
if((state_val_52347 === (2))){
var inst_52317 = (state_52346[(2)]);
var inst_52318 = (function (){return (function (){
return devcards.system.renderer(devcards.system.app_state);
});
})();
var inst_52319 = setTimeout(inst_52318,(0));
var inst_52320 = (function (){return (function (){
return devcards.system.hash_routing_init(devcards.system.app_state);
});
})();
var inst_52321 = setTimeout(inst_52320,(0));
var state_52346__$1 = (function (){var statearr_52393 = state_52346;
(statearr_52393[(8)] = inst_52319);

(statearr_52393[(9)] = inst_52317);

(statearr_52393[(10)] = inst_52321);

return statearr_52393;
})();
var statearr_52400_52805 = state_52346__$1;
(statearr_52400_52805[(2)] = null);

(statearr_52400_52805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (9))){
var inst_52327 = (state_52346[(7)]);
var inst_52333 = (state_52346[(2)]);
var inst_52335 = (function (){var temp__5753__auto__ = inst_52327;
var v = inst_52327;
var new_state = inst_52333;
return (function (){
return cljs.core.reset_BANG_(devcards.system.app_state,new_state);
});
})();
var inst_52336 = setTimeout(inst_52335,(0));
var state_52346__$1 = (function (){var statearr_52412 = state_52346;
(statearr_52412[(11)] = inst_52336);

return statearr_52412;
})();
var statearr_52417_52806 = state_52346__$1;
(statearr_52417_52806[(2)] = null);

(statearr_52417_52806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (5))){
var inst_52327 = (state_52346[(7)]);
var inst_52327__$1 = (state_52346[(2)]);
var state_52346__$1 = (function (){var statearr_52424 = state_52346;
(statearr_52424[(7)] = inst_52327__$1);

return statearr_52424;
})();
if(cljs.core.truth_(inst_52327__$1)){
var statearr_52426_52809 = state_52346__$1;
(statearr_52426_52809[(1)] = (6));

} else {
var statearr_52428_52810 = state_52346__$1;
(statearr_52428_52810[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52347 === (8))){
var inst_52341 = (state_52346[(2)]);
var state_52346__$1 = state_52346;
var statearr_52431_52813 = state_52346__$1;
(statearr_52431_52813[(2)] = inst_52341);

(statearr_52431_52813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var devcards$system$start_ui_$_state_machine__45093__auto__ = null;
var devcards$system$start_ui_$_state_machine__45093__auto____0 = (function (){
var statearr_52435 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52435[(0)] = devcards$system$start_ui_$_state_machine__45093__auto__);

(statearr_52435[(1)] = (1));

return statearr_52435;
});
var devcards$system$start_ui_$_state_machine__45093__auto____1 = (function (state_52346){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_52346);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e52436){var ex__45096__auto__ = e52436;
var statearr_52437_52814 = state_52346;
(statearr_52437_52814[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_52346[(4)]))){
var statearr_52442_52815 = state_52346;
(statearr_52442_52815[(1)] = cljs.core.first((state_52346[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52817 = state_52346;
state_52346 = G__52817;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__45093__auto__ = function(state_52346){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__45093__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__45093__auto____1.call(this,state_52346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__45093__auto____0;
devcards$system$start_ui_$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__45093__auto____1;
return devcards$system$start_ui_$_state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_52454 = f__45179__auto__();
(statearr_52454[(6)] = c__45178__auto___52796);

return statearr_52454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


return true;
})()
)
;
}
});
devcards.system.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg class='cljs-logo' width='49px' height='49px' style='float: right; display: inline-block; position:relative; top:-13px; right: 0px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
devcards.system.cljs_logo = (function devcards$system$cljs_logo(){
return module$node_modules$react$index.createElement("span",({"key": "cljs-logo", "dangerouslySetInnerHTML": ({"__html": devcards.system.cljs_logo_svg})}));
});

//# sourceMappingURL=devcards.system.js.map
