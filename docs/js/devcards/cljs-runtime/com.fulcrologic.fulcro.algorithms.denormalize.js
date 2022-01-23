goog.provide('com.fulcrologic.fulcro.algorithms.denormalize');
com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = (0);
com.fulcrologic.fulcro.algorithms.denormalize._STAR_root_keys_and_idents_STAR_ = null;
/**
 * Is the given `v` a link ref query (e.g. `[:table '_]) element.
 */
com.fulcrologic.fulcro.algorithms.denormalize.link_ref_QMARK_ = (function com$fulcrologic$fulcro$algorithms$denormalize$link_ref_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(v))) && ((((cljs.core.first(v) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(v))))))));
});
/**
 * Is the given `v` a lookup ref query (i.e. ident)?
 */
com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_ = (function com$fulcrologic$fulcro$algorithms$denormalize$lookup_ref_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(v))) && ((cljs.core.first(v) instanceof cljs.core.Keyword)))));
});
/**
 * Returns the value defined by the `ref` from `state-map`.  Works for link refs and
 *   lookup refs.
 */
com.fulcrologic.fulcro.algorithms.denormalize.follow_ref = (function com$fulcrologic$fulcro$algorithms$denormalize$follow_ref(state_map,p__44981){
var vec__44983 = p__44981;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44983,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44983,(1),null);
var ref = vec__44983;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),id)){
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.denormalize._STAR_root_keys_and_idents_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.algorithms.denormalize._STAR_root_keys_and_idents_STAR_,cljs.core.conj_BANG_,table);
} else {
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,table);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.denormalize._STAR_root_keys_and_idents_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.algorithms.denormalize._STAR_root_keys_and_idents_STAR_,cljs.core.conj_BANG_,ref);
} else {
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,ref);
}
});
/**
 * Returns the key to use in results for the given ref (ident of lookup ref). For link refs this is just
 *   the first element, and for idents it is the ident.
 */
com.fulcrologic.fulcro.algorithms.denormalize.ref_key = (function com$fulcrologic$fulcro$algorithms$denormalize$ref_key(p__44991){
var vec__44995 = p__44991;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44995,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44995,(1),null);
var ref = vec__44995;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),id)){
return table;
} else {
return ref;
}
});
/**
 * Associates time metadata with the given props. This time can be used by rendering optimizations to decide when
 *   stale props are passed to it from a parent in cases where props tunnelling was used for localized refresh.
 */
com.fulcrologic.fulcro.algorithms.denormalize.with_time = (function com$fulcrologic$fulcro$algorithms$denormalize$with_time(props,t){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(props,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.denormalize","time","com.fulcrologic.fulcro.algorithms.denormalize/time",-375164969),t);
});
/**
 * Walk the given AST children (which MUST be prop nodes), and add their values from `current-entity`
 *   (if found).
 */
com.fulcrologic.fulcro.algorithms.denormalize.add_props_BANG_ = (function com$fulcrologic$fulcro$algorithms$denormalize$add_props_BANG_(transient_node,entity,ast_prop_children,state_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,p__45012){
var map__45013 = p__45012;
var map__45013__$1 = cljs.core.__destructure_map(map__45013);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45013__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(key)){
var temp__5751__auto__ = com.fulcrologic.fulcro.algorithms.denormalize.follow_ref(state_map,key);
if(cljs.core.truth_(temp__5751__auto__)){
var x = temp__5751__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,com.fulcrologic.fulcro.algorithms.denormalize.ref_key(key),x);
} else {
return n;
}
} else {
var temp__5751__auto__ = (function (){var and__4251__auto__ = cljs.core.coll_QMARK_(entity);
if(and__4251__auto__){
return cljs.core.find(entity,key);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var entry = temp__5751__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key,cljs.core.second(entry));
} else {
return n;
}
}
}),transient_node,ast_prop_children);
});
/**
 * Reduce the query depth on `join-node` that appears within the children of `parent-node`.
 */
com.fulcrologic.fulcro.algorithms.denormalize.reduce_depth = (function com$fulcrologic$fulcro$algorithms$denormalize$reduce_depth(parent_node,join_node){
var join_node_index = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,n){
if((join_node === n)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(parent_node));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(parent_node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),join_node_index,new cljs.core.Keyword(null,"query","query",-1288509510)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,(1)));
});
com.fulcrologic.fulcro.algorithms.denormalize.add_join_BANG_ = (function com$fulcrologic$fulcro$algorithms$denormalize$add_join_BANG_(n,p__45041,entity,state_map,parent_node,idents_seen){
var map__45044 = p__45041;
var map__45044__$1 = cljs.core.__destructure_map(map__45044);
var join_node = map__45044__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45044__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45044__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var link_join_QMARK_ = com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(key);
var v = ((link_join_QMARK_)?com.fulcrologic.fulcro.algorithms.denormalize.follow_ref(state_map,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,key));
var key__$1 = ((com.fulcrologic.fulcro.algorithms.denormalize.link_ref_QMARK_(key))?cljs.core.first(key):key);
var is_ref_QMARK_ = com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(v);
var join_entity = ((is_ref_QMARK_)?com.fulcrologic.fulcro.algorithms.denormalize.follow_ref(state_map,v):v);
var to_many_QMARK_ = (((!(is_ref_QMARK_))) && (cljs.core.vector_QMARK_(join_entity)));
var depth_based_QMARK_ = cljs.core.int_QMARK_(query);
var recursive_QMARK_ = ((depth_based_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)));
var stop_recursion_QMARK_ = ((recursive_QMARK_) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),query)) || (((is_ref_QMARK_) && ((((!(depth_based_QMARK_))) && (cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(idents_seen,key__$1),v)))))))));
var parent_node__$1 = ((((depth_based_QMARK_) && ((!(stop_recursion_QMARK_)))))?com.fulcrologic.fulcro.algorithms.denormalize.reduce_depth(parent_node,join_node):parent_node);
var target_node = ((recursive_QMARK_)?parent_node__$1:join_node);
var parent_idents_seen = idents_seen;
var idents_seen__$1 = ((is_ref_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(idents_seen,key__$1,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v):((((to_many_QMARK_) && (cljs.core.every_QMARK_(com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_,v))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(idents_seen,key__$1,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.set(v)):idents_seen
));
if(stop_recursion_QMARK_){
if(cljs.core.truth_((function (){var and__4251__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__4251__auto__)){
return (!(depth_based_QMARK_));
} else {
return and__4251__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.denormalize",null,109,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Loop detected in data graph at ",entity,". Recursive query stopped. See https://book.fulcrologic.com/#warn-denormalize-loop-detected"], null);
}),null)),null,947774510,null);
} else {
}

return n;
} else {
if(to_many_QMARK_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (x){
var e = ((com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(x))?com.fulcrologic.fulcro.algorithms.denormalize.follow_ref(state_map,x):x);
var stop_recursion_QMARK___$1 = ((recursive_QMARK_) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),query)) || (((com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(x)) && ((((!(depth_based_QMARK_))) && (cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent_idents_seen,key__$1),x)))))))));
if(stop_recursion_QMARK___$1){
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.denormalize",null,124,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Loop detected in data graph at ",e,". Recursive query stopped."], null);
}),null)),null,1895607641,null);
} else {
}

return null;
} else {
return (com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4(target_node,e,state_map,idents_seen__$1) : com.fulcrologic.fulcro.algorithms.denormalize.denormalize.call(null,target_node,e,state_map,idents_seen__$1));
}
})),join_entity));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = recursive_QMARK_;
if(and__4251__auto__){
return join_entity;
} else {
return and__4251__auto__;
}
})())){
if(depth_based_QMARK_){
var join_node_index = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,n__$1){
if((join_node === n__$1)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(parent_node__$1));
var parent_node__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(parent_node__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),join_node_index,new cljs.core.Keyword(null,"query","query",-1288509510)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,(1)));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key__$1,(com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4(parent_node__$2,join_entity,state_map,idents_seen__$1) : com.fulcrologic.fulcro.algorithms.denormalize.denormalize.call(null,parent_node__$2,join_entity,state_map,idents_seen__$1)));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key__$1,(com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4(parent_node__$1,join_entity,state_map,idents_seen__$1) : com.fulcrologic.fulcro.algorithms.denormalize.denormalize.call(null,parent_node__$1,join_entity,state_map,idents_seen__$1)));
}
} else {
if(cljs.core.map_QMARK_(join_entity)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key__$1,(com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4(target_node,join_entity,state_map,idents_seen__$1) : com.fulcrologic.fulcro.algorithms.denormalize.denormalize.call(null,target_node,join_entity,state_map,idents_seen__$1)));
} else {
if(((cljs.core.contains_QMARK_(entity,key__$1)) && ((((!(recursive_QMARK_))) && ((!(link_join_QMARK_))))))){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key__$1,v);
} else {
return n;

}
}
}
}
}
});
com.fulcrologic.fulcro.algorithms.denormalize.add_union_BANG_ = (function com$fulcrologic$fulcro$algorithms$denormalize$add_union_BANG_(n,p__45132,entity,state_map,idents_seen){
var map__45135 = p__45132;
var map__45135__$1 = cljs.core.__destructure_map(map__45135);
var join_node = map__45135__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45135__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var link_join_QMARK_ = com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(key);
var v = ((link_join_QMARK_)?key:cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,key));
var union_node = cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(join_node));
var union_key__GT_query = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__45147){
var map__45151 = p__45147;
var map__45151__$1 = cljs.core.__destructure_map(map__45151);
var node = map__45151__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45151__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,union_key,node);
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(union_node));
var is_ref_QMARK_ = com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(v);
var to_many_QMARK_ = (((!(is_ref_QMARK_))) && (cljs.core.vector_QMARK_(v)));
if(to_many_QMARK_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (lookup_ref){
var temp__5751__auto__ = (function (){var and__4251__auto__ = com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(lookup_ref);
if(and__4251__auto__){
return com.fulcrologic.fulcro.algorithms.denormalize.follow_ref(state_map,lookup_ref);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var e = temp__5751__auto__;
var vec__45163 = lookup_ref;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45163,(0),null);
var temp__5751__auto____$1 = (union_key__GT_query.cljs$core$IFn$_invoke$arity$1 ? union_key__GT_query.cljs$core$IFn$_invoke$arity$1(table) : union_key__GT_query.call(null,table));
if(cljs.core.truth_(temp__5751__auto____$1)){
var target_ast_node = temp__5751__auto____$1;
return (com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4(target_ast_node,e,state_map,idents_seen) : com.fulcrologic.fulcro.algorithms.denormalize.denormalize.call(null,target_ast_node,e,state_map,idents_seen));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})),v));
} else {
if(is_ref_QMARK_){
var temp__5751__auto__ = com.fulcrologic.fulcro.algorithms.denormalize.follow_ref(state_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var e = temp__5751__auto__;
var temp__5751__auto____$1 = (function (){var G__45171 = cljs.core.first(v);
return (union_key__GT_query.cljs$core$IFn$_invoke$arity$1 ? union_key__GT_query.cljs$core$IFn$_invoke$arity$1(G__45171) : union_key__GT_query.call(null,G__45171));
})();
if(cljs.core.truth_(temp__5751__auto____$1)){
var target_ast_node = temp__5751__auto____$1;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key,(com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.denormalize.denormalize.cljs$core$IFn$_invoke$arity$4(target_ast_node,e,state_map,idents_seen) : com.fulcrologic.fulcro.algorithms.denormalize.denormalize.call(null,target_ast_node,e,state_map,idents_seen)));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return n;
}
} else {
if(((cljs.core.contains_QMARK_(entity,key)) && ((!(link_join_QMARK_))))){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(n,key,v);
} else {
return n;

}
}
}
});
com.fulcrologic.fulcro.algorithms.denormalize.add_joins_BANG_ = (function com$fulcrologic$fulcro$algorithms$denormalize$add_joins_BANG_(transient_node,entity,state_map,parent_node,ast_join_nodes,idents_seen){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,join_node){
var union_QMARK_ = cljs.core.map_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(join_node));
if(union_QMARK_){
return com.fulcrologic.fulcro.algorithms.denormalize.add_union_BANG_(n,join_node,entity,state_map,idents_seen);
} else {
return com.fulcrologic.fulcro.algorithms.denormalize.add_join_BANG_(n,join_node,entity,state_map,parent_node,idents_seen);
}
}),transient_node,ast_join_nodes);
});
/**
 * Internal implementation of `db->tree`.  You should normally use `db->tree` instead of this function.
 * 
 *   - `top-node`: an AST for the query.
 *   - `current-entity`: The entity to start denormalization from.
 *   - `state-map`: a normalized database.
 *   - `idents-seen`: a map of the idents seen so far (for recursion loop tracking).
 */
com.fulcrologic.fulcro.algorithms.denormalize.denormalize = (function com$fulcrologic$fulcro$algorithms$denormalize$denormalize(p__45181,current_entity,state_map,idents_seen){
var map__45184 = p__45181;
var map__45184__$1 = cljs.core.__destructure_map(map__45184);
var top_node = map__45184__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45184__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45184__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"prop","prop",-515168332))){
} else {
throw (new Error("Assert failed: (not= type :prop)"));
}

var current_entity__$1 = ((com.fulcrologic.fulcro.algorithms.denormalize.lookup_ref_QMARK_(current_entity))?com.fulcrologic.fulcro.algorithms.denormalize.follow_ref(state_map,current_entity):current_entity);
var grouped_children = cljs.core.group_by(new cljs.core.Keyword(null,"type","type",1174270348),children);
var nil_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(grouped_children,null,false);
var wildcard_QMARK_ = (function (){var and__4251__auto__ = nil_nodes;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*","*",345799209,null),(function (){var G__45192 = nil_nodes;
var G__45192__$1 = (((G__45192 == null))?null:cljs.core.first(G__45192));
if((G__45192__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__45192__$1);
}
})());
} else {
return and__4251__auto__;
}
})();
var result_node = com.fulcrologic.fulcro.algorithms.denormalize.add_props_BANG_(cljs.core.transient$((cljs.core.truth_(wildcard_QMARK_)?current_entity__$1:cljs.core.PersistentArrayMap.EMPTY)),current_entity__$1,new cljs.core.Keyword(null,"prop","prop",-515168332).cljs$core$IFn$_invoke$arity$1(grouped_children),state_map);
var result_node__$1 = com.fulcrologic.fulcro.algorithms.denormalize.add_joins_BANG_(result_node,current_entity__$1,state_map,top_node,new cljs.core.Keyword(null,"join","join",-758861890).cljs$core$IFn$_invoke$arity$1(grouped_children),idents_seen);
var G__45195 = result_node__$1;
var G__45195__$1 = (((G__45195 == null))?null:cljs.core.persistent_BANG_(G__45195));
if((G__45195__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.denormalize.with_time(G__45195__$1,com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_);
}
});
/**
 * Pull a tree of data from a fulcro normalized database as a tree corresponding to the given query.
 * 
 *   query - EQL.
 *   starting-entity - A map of data or ident at which to start.
 *   state-map - The overall normalized database from which idents can be resolved.
 * 
 *   Returns a tree of data where each resolved data node is also marked with the current
 *   *denormalize-time* (dynamically bound outside of this call). Users of this function that
 *   are hydrating the UI should ensure that this time is bound to Fulcro's current internal
 *   basis-time using `binding`.
 * 
 *   The `state-map` needs to be your entire Fulcro database. This database is used to resolve the joins in the EQL query
 *   (which are represented as `idents`).
 * 
 *   The starting entity can be `state-map` as well if your EQL query starts from your root. If not, it can simply be
 *   the map (taken from the `state-map`) of the entity whose query you're using.
 * 
 *   For example:
 * 
 *   ```
 *   (defsc SomeComponent [this props]
 *  {:ident :thing/id
 *   :query [...]})
 * 
 *   ;; Get the sub-tree of data for thing 1:
 *   (db->tree
 *  (comp/get-query SomeComponent)
 *  (get-in state-map [:thing/id 1])
 *  state-map)
 *   ```
 *   
 */
com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree = (function com$fulcrologic$fulcro$algorithms$denormalize$db__GT_tree(query,starting_entity,state_map){
var ast = edn_query_language.core.query__GT_ast(query);
var G__45198 = com.fulcrologic.fulcro.algorithms.denormalize.denormalize(ast,starting_entity,state_map,cljs.core.PersistentArrayMap.EMPTY);
if((G__45198 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.denormalize.with_time(G__45198,com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_);
}
});
/**
 * Gets the time at which the given props were processed by `db->tree`, if known.
 */
com.fulcrologic.fulcro.algorithms.denormalize.denormalization_time = (function com$fulcrologic$fulcro$algorithms$denormalize$denormalization_time(props){
var G__45202 = props;
var G__45202__$1 = (((G__45202 == null))?null:cljs.core.meta(G__45202));
if((G__45202__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.denormalize","time","com.fulcrologic.fulcro.algorithms.denormalize/time",-375164969).cljs$core$IFn$_invoke$arity$1(G__45202__$1);
}
});
/**
 * Similar to `db->tree`; however, the returned props will have annotated metadata the indicates what root keys and
 * idents were visited during the conversion to a tree, along with the source state map that was used. Such props can
 * be used with `possibly-stale?` to do very fast checks to see if an update is needed when `state-map` changes.
 */
com.fulcrologic.fulcro.algorithms.denormalize.traced_db__GT_tree = (function com$fulcrologic$fulcro$algorithms$denormalize$traced_db__GT_tree(state_map,root_key_or_ident,query){
var _STAR_root_keys_and_idents_STAR__orig_val__45220 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_root_keys_and_idents_STAR_;
var _STAR_root_keys_and_idents_STAR__temp_val__45221 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentHashSet.createAsIfByAssoc([root_key_or_ident])));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_root_keys_and_idents_STAR_ = _STAR_root_keys_and_idents_STAR__temp_val__45221);

try{var starting_point = (((root_key_or_ident instanceof cljs.core.Keyword))?state_map:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,root_key_or_ident));
var query__$1 = (((root_key_or_ident instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([root_key_or_ident,query])], null):query);
var result = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query__$1,starting_point,state_map);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(result,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.denormalize","visited","com.fulcrologic.fulcro.algorithms.denormalize/visited",823384252),cljs.core.persistent_BANG_(cljs.core.deref(com.fulcrologic.fulcro.algorithms.denormalize._STAR_root_keys_and_idents_STAR_)),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.denormalize","source-state-map","com.fulcrologic.fulcro.algorithms.denormalize/source-state-map",-1097808870),state_map);
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_root_keys_and_idents_STAR_ = _STAR_root_keys_and_idents_STAR__orig_val__45220);
}});
/**
 * Returns true if the given `prior-props` are likely to be stale with respect to the `current-state-map`. This function
 * returns true unless the `prior-props` were generated with `traced-db->tree` and have not since lost their metadata.
 * 
 * When called with properly-annotated props this function can do a very fast and accurate check to indicate if the props
 * seem out of date. Runs N `identical?` checks (which are reference compares) where N is the number of root keys and idents
 * that were traversed to originally build prior-props.
 * 
 * This is not proof that the props have changed, but the false indicators will all be `true`, meaning it is a safe (and
 * faster) replacement for the comparisons that `shouldComponentUpdate` usually use.
 * 
 */
com.fulcrologic.fulcro.algorithms.denormalize.possibly_stale_QMARK_ = (function com$fulcrologic$fulcro$algorithms$denormalize$possibly_stale_QMARK_(current_state_map,prior_props){
var map__45239 = cljs.core.meta(prior_props);
var map__45239__$1 = cljs.core.__destructure_map(map__45239);
var visited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45239__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.denormalize","visited","com.fulcrologic.fulcro.algorithms.denormalize/visited",823384252));
var source_state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45239__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.denormalize","source-state-map","com.fulcrologic.fulcro.algorithms.denormalize/source-state-map",-1097808870));
if((source_state_map == null)){
return true;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,path){
var old_value = (((path instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(source_state_map,path):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(source_state_map,path));
var new_value = (((path instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_state_map,path):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_state_map,path));
if((old_value === new_value)){
return false;
} else {
return cljs.core.reduced(true);
}
}),false,visited);
}
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.denormalize.js.map
