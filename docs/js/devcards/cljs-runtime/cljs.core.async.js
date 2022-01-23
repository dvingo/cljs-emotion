goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45272 = arguments.length;
switch (G__45272) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45279 = (function (f,blockable,meta45280){
this.f = f;
this.blockable = blockable;
this.meta45280 = meta45280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45281,meta45280__$1){
var self__ = this;
var _45281__$1 = this;
return (new cljs.core.async.t_cljs$core$async45279(self__.f,self__.blockable,meta45280__$1));
}));

(cljs.core.async.t_cljs$core$async45279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45281){
var self__ = this;
var _45281__$1 = this;
return self__.meta45280;
}));

(cljs.core.async.t_cljs$core$async45279.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45279.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45280","meta45280",-1832027069,null)], null);
}));

(cljs.core.async.t_cljs$core$async45279.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45279");

(cljs.core.async.t_cljs$core$async45279.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45279");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45279.
 */
cljs.core.async.__GT_t_cljs$core$async45279 = (function cljs$core$async$__GT_t_cljs$core$async45279(f__$1,blockable__$1,meta45280){
return (new cljs.core.async.t_cljs$core$async45279(f__$1,blockable__$1,meta45280));
});

}

return (new cljs.core.async.t_cljs$core$async45279(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45340 = arguments.length;
switch (G__45340) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45377 = arguments.length;
switch (G__45377) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45387 = arguments.length;
switch (G__45387) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_48545 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48545) : fn1.call(null,val_48545));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48545) : fn1.call(null,val_48545));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45409 = arguments.length;
switch (G__45409) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___48557 = n;
var x_48558 = (0);
while(true){
if((x_48558 < n__4741__auto___48557)){
(a[x_48558] = x_48558);

var G__48559 = (x_48558 + (1));
x_48558 = G__48559;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45414 = (function (flag,meta45415){
this.flag = flag;
this.meta45415 = meta45415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45416,meta45415__$1){
var self__ = this;
var _45416__$1 = this;
return (new cljs.core.async.t_cljs$core$async45414(self__.flag,meta45415__$1));
}));

(cljs.core.async.t_cljs$core$async45414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45416){
var self__ = this;
var _45416__$1 = this;
return self__.meta45415;
}));

(cljs.core.async.t_cljs$core$async45414.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45414.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45415","meta45415",2101621978,null)], null);
}));

(cljs.core.async.t_cljs$core$async45414.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45414");

(cljs.core.async.t_cljs$core$async45414.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45414");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45414.
 */
cljs.core.async.__GT_t_cljs$core$async45414 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45414(flag__$1,meta45415){
return (new cljs.core.async.t_cljs$core$async45414(flag__$1,meta45415));
});

}

return (new cljs.core.async.t_cljs$core$async45414(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45426 = (function (flag,cb,meta45427){
this.flag = flag;
this.cb = cb;
this.meta45427 = meta45427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45428,meta45427__$1){
var self__ = this;
var _45428__$1 = this;
return (new cljs.core.async.t_cljs$core$async45426(self__.flag,self__.cb,meta45427__$1));
}));

(cljs.core.async.t_cljs$core$async45426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45428){
var self__ = this;
var _45428__$1 = this;
return self__.meta45427;
}));

(cljs.core.async.t_cljs$core$async45426.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45426.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45426.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45426.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45427","meta45427",1748551238,null)], null);
}));

(cljs.core.async.t_cljs$core$async45426.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45426");

(cljs.core.async.t_cljs$core$async45426.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45426");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45426.
 */
cljs.core.async.__GT_t_cljs$core$async45426 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45426(flag__$1,cb__$1,meta45427){
return (new cljs.core.async.t_cljs$core$async45426(flag__$1,cb__$1,meta45427));
});

}

return (new cljs.core.async.t_cljs$core$async45426(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45432_SHARP_){
var G__45437 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45432_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45437) : fret.call(null,G__45437));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45434_SHARP_){
var G__45438 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45434_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45438) : fret.call(null,G__45438));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48575 = (i + (1));
i = G__48575;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48576 = arguments.length;
var i__4865__auto___48577 = (0);
while(true){
if((i__4865__auto___48577 < len__4864__auto___48576)){
args__4870__auto__.push((arguments[i__4865__auto___48577]));

var G__48578 = (i__4865__auto___48577 + (1));
i__4865__auto___48577 = G__48578;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45448){
var map__45449 = p__45448;
var map__45449__$1 = cljs.core.__destructure_map(map__45449);
var opts = map__45449__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45442){
var G__45443 = cljs.core.first(seq45442);
var seq45442__$1 = cljs.core.next(seq45442);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45443,seq45442__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45451 = arguments.length;
switch (G__45451) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45178__auto___48580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_45487){
var state_val_45488 = (state_45487[(1)]);
if((state_val_45488 === (7))){
var inst_45481 = (state_45487[(2)]);
var state_45487__$1 = state_45487;
var statearr_45491_48582 = state_45487__$1;
(statearr_45491_48582[(2)] = inst_45481);

(statearr_45491_48582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (1))){
var state_45487__$1 = state_45487;
var statearr_45492_48584 = state_45487__$1;
(statearr_45492_48584[(2)] = null);

(statearr_45492_48584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (4))){
var inst_45462 = (state_45487[(7)]);
var inst_45462__$1 = (state_45487[(2)]);
var inst_45465 = (inst_45462__$1 == null);
var state_45487__$1 = (function (){var statearr_45497 = state_45487;
(statearr_45497[(7)] = inst_45462__$1);

return statearr_45497;
})();
if(cljs.core.truth_(inst_45465)){
var statearr_45498_48585 = state_45487__$1;
(statearr_45498_48585[(1)] = (5));

} else {
var statearr_45500_48586 = state_45487__$1;
(statearr_45500_48586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (13))){
var state_45487__$1 = state_45487;
var statearr_45502_48587 = state_45487__$1;
(statearr_45502_48587[(2)] = null);

(statearr_45502_48587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (6))){
var inst_45462 = (state_45487[(7)]);
var state_45487__$1 = state_45487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45487__$1,(11),to,inst_45462);
} else {
if((state_val_45488 === (3))){
var inst_45485 = (state_45487[(2)]);
var state_45487__$1 = state_45487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45487__$1,inst_45485);
} else {
if((state_val_45488 === (12))){
var state_45487__$1 = state_45487;
var statearr_45504_48590 = state_45487__$1;
(statearr_45504_48590[(2)] = null);

(statearr_45504_48590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (2))){
var state_45487__$1 = state_45487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45487__$1,(4),from);
} else {
if((state_val_45488 === (11))){
var inst_45474 = (state_45487[(2)]);
var state_45487__$1 = state_45487;
if(cljs.core.truth_(inst_45474)){
var statearr_45507_48592 = state_45487__$1;
(statearr_45507_48592[(1)] = (12));

} else {
var statearr_45508_48594 = state_45487__$1;
(statearr_45508_48594[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (9))){
var state_45487__$1 = state_45487;
var statearr_45509_48595 = state_45487__$1;
(statearr_45509_48595[(2)] = null);

(statearr_45509_48595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (5))){
var state_45487__$1 = state_45487;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45510_48597 = state_45487__$1;
(statearr_45510_48597[(1)] = (8));

} else {
var statearr_45511_48598 = state_45487__$1;
(statearr_45511_48598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (14))){
var inst_45479 = (state_45487[(2)]);
var state_45487__$1 = state_45487;
var statearr_45512_48599 = state_45487__$1;
(statearr_45512_48599[(2)] = inst_45479);

(statearr_45512_48599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (10))){
var inst_45471 = (state_45487[(2)]);
var state_45487__$1 = state_45487;
var statearr_45513_48601 = state_45487__$1;
(statearr_45513_48601[(2)] = inst_45471);

(statearr_45513_48601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (8))){
var inst_45468 = cljs.core.async.close_BANG_(to);
var state_45487__$1 = state_45487;
var statearr_45514_48602 = state_45487__$1;
(statearr_45514_48602[(2)] = inst_45468);

(statearr_45514_48602[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__45093__auto__ = null;
var cljs$core$async$state_machine__45093__auto____0 = (function (){
var statearr_45515 = [null,null,null,null,null,null,null,null];
(statearr_45515[(0)] = cljs$core$async$state_machine__45093__auto__);

(statearr_45515[(1)] = (1));

return statearr_45515;
});
var cljs$core$async$state_machine__45093__auto____1 = (function (state_45487){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_45487);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e45516){var ex__45096__auto__ = e45516;
var statearr_45517_48605 = state_45487;
(statearr_45517_48605[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_45487[(4)]))){
var statearr_45518_48606 = state_45487;
(statearr_45518_48606[(1)] = cljs.core.first((state_45487[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48607 = state_45487;
state_45487 = G__48607;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$state_machine__45093__auto__ = function(state_45487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45093__auto____1.call(this,state_45487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45093__auto____0;
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45093__auto____1;
return cljs$core$async$state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_45519 = f__45179__auto__();
(statearr_45519[(6)] = c__45178__auto___48580);

return statearr_45519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__45521){
var vec__45522 = p__45521;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45522,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45522,(1),null);
var job = vec__45522;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45178__auto___48616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_45529){
var state_val_45530 = (state_45529[(1)]);
if((state_val_45530 === (1))){
var state_45529__$1 = state_45529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45529__$1,(2),res,v);
} else {
if((state_val_45530 === (2))){
var inst_45526 = (state_45529[(2)]);
var inst_45527 = cljs.core.async.close_BANG_(res);
var state_45529__$1 = (function (){var statearr_45536 = state_45529;
(statearr_45536[(7)] = inst_45526);

return statearr_45536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45529__$1,inst_45527);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____0 = (function (){
var statearr_45539 = [null,null,null,null,null,null,null,null];
(statearr_45539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__);

(statearr_45539[(1)] = (1));

return statearr_45539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____1 = (function (state_45529){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_45529);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e45544){var ex__45096__auto__ = e45544;
var statearr_45545_48621 = state_45529;
(statearr_45545_48621[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_45529[(4)]))){
var statearr_45546_48622 = state_45529;
(statearr_45546_48622[(1)] = cljs.core.first((state_45529[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48623 = state_45529;
state_45529 = G__48623;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__ = function(state_45529){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____1.call(this,state_45529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_45551 = f__45179__auto__();
(statearr_45551[(6)] = c__45178__auto___48616);

return statearr_45551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45552){
var vec__45553 = p__45552;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45553,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45553,(1),null);
var job = vec__45553;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___48627 = n;
var __48628 = (0);
while(true){
if((__48628 < n__4741__auto___48627)){
var G__45557_48630 = type;
var G__45557_48631__$1 = (((G__45557_48630 instanceof cljs.core.Keyword))?G__45557_48630.fqn:null);
switch (G__45557_48631__$1) {
case "compute":
var c__45178__auto___48633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48628,c__45178__auto___48633,G__45557_48630,G__45557_48631__$1,n__4741__auto___48627,jobs,results,process,async){
return (function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = ((function (__48628,c__45178__auto___48633,G__45557_48630,G__45557_48631__$1,n__4741__auto___48627,jobs,results,process,async){
return (function (state_45573){
var state_val_45574 = (state_45573[(1)]);
if((state_val_45574 === (1))){
var state_45573__$1 = state_45573;
var statearr_45577_48634 = state_45573__$1;
(statearr_45577_48634[(2)] = null);

(statearr_45577_48634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45574 === (2))){
var state_45573__$1 = state_45573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45573__$1,(4),jobs);
} else {
if((state_val_45574 === (3))){
var inst_45571 = (state_45573[(2)]);
var state_45573__$1 = state_45573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45573__$1,inst_45571);
} else {
if((state_val_45574 === (4))){
var inst_45561 = (state_45573[(2)]);
var inst_45563 = process(inst_45561);
var state_45573__$1 = state_45573;
if(cljs.core.truth_(inst_45563)){
var statearr_45582_48636 = state_45573__$1;
(statearr_45582_48636[(1)] = (5));

} else {
var statearr_45583_48637 = state_45573__$1;
(statearr_45583_48637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45574 === (5))){
var state_45573__$1 = state_45573;
var statearr_45584_48638 = state_45573__$1;
(statearr_45584_48638[(2)] = null);

(statearr_45584_48638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45574 === (6))){
var state_45573__$1 = state_45573;
var statearr_45589_48639 = state_45573__$1;
(statearr_45589_48639[(2)] = null);

(statearr_45589_48639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45574 === (7))){
var inst_45568 = (state_45573[(2)]);
var state_45573__$1 = state_45573;
var statearr_45595_48640 = state_45573__$1;
(statearr_45595_48640[(2)] = inst_45568);

(statearr_45595_48640[(1)] = (3));


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
});})(__48628,c__45178__auto___48633,G__45557_48630,G__45557_48631__$1,n__4741__auto___48627,jobs,results,process,async))
;
return ((function (__48628,switch__45092__auto__,c__45178__auto___48633,G__45557_48630,G__45557_48631__$1,n__4741__auto___48627,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____0 = (function (){
var statearr_45615 = [null,null,null,null,null,null,null];
(statearr_45615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__);

(statearr_45615[(1)] = (1));

return statearr_45615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____1 = (function (state_45573){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_45573);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e45621){var ex__45096__auto__ = e45621;
var statearr_45622_48642 = state_45573;
(statearr_45622_48642[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_45573[(4)]))){
var statearr_45628_48643 = state_45573;
(statearr_45628_48643[(1)] = cljs.core.first((state_45573[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48645 = state_45573;
state_45573 = G__48645;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__ = function(state_45573){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____1.call(this,state_45573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__;
})()
;})(__48628,switch__45092__auto__,c__45178__auto___48633,G__45557_48630,G__45557_48631__$1,n__4741__auto___48627,jobs,results,process,async))
})();
var state__45180__auto__ = (function (){var statearr_45644 = f__45179__auto__();
(statearr_45644[(6)] = c__45178__auto___48633);

return statearr_45644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
});})(__48628,c__45178__auto___48633,G__45557_48630,G__45557_48631__$1,n__4741__auto___48627,jobs,results,process,async))
);


break;
case "async":
var c__45178__auto___48646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48628,c__45178__auto___48646,G__45557_48630,G__45557_48631__$1,n__4741__auto___48627,jobs,results,process,async){
return (function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = ((function (__48628,c__45178__auto___48646,G__45557_48630,G__45557_48631__$1,n__4741__auto___48627,jobs,results,process,async){
return (function (state_45675){
var state_val_45676 = (state_45675[(1)]);
if((state_val_45676 === (1))){
var state_45675__$1 = state_45675;
var statearr_45682_48648 = state_45675__$1;
(statearr_45682_48648[(2)] = null);

(statearr_45682_48648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45676 === (2))){
var state_45675__$1 = state_45675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45675__$1,(4),jobs);
} else {
if((state_val_45676 === (3))){
var inst_45672 = (state_45675[(2)]);
var state_45675__$1 = state_45675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45675__$1,inst_45672);
} else {
if((state_val_45676 === (4))){
var inst_45661 = (state_45675[(2)]);
var inst_45664 = async(inst_45661);
var state_45675__$1 = state_45675;
if(cljs.core.truth_(inst_45664)){
var statearr_45691_48649 = state_45675__$1;
(statearr_45691_48649[(1)] = (5));

} else {
var statearr_45694_48650 = state_45675__$1;
(statearr_45694_48650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45676 === (5))){
var state_45675__$1 = state_45675;
var statearr_45700_48655 = state_45675__$1;
(statearr_45700_48655[(2)] = null);

(statearr_45700_48655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45676 === (6))){
var state_45675__$1 = state_45675;
var statearr_45701_48656 = state_45675__$1;
(statearr_45701_48656[(2)] = null);

(statearr_45701_48656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45676 === (7))){
var inst_45670 = (state_45675[(2)]);
var state_45675__$1 = state_45675;
var statearr_45702_48657 = state_45675__$1;
(statearr_45702_48657[(2)] = inst_45670);

(statearr_45702_48657[(1)] = (3));


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
});})(__48628,c__45178__auto___48646,G__45557_48630,G__45557_48631__$1,n__4741__auto___48627,jobs,results,process,async))
;
return ((function (__48628,switch__45092__auto__,c__45178__auto___48646,G__45557_48630,G__45557_48631__$1,n__4741__auto___48627,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____0 = (function (){
var statearr_45707 = [null,null,null,null,null,null,null];
(statearr_45707[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__);

(statearr_45707[(1)] = (1));

return statearr_45707;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____1 = (function (state_45675){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_45675);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e45708){var ex__45096__auto__ = e45708;
var statearr_45709_48663 = state_45675;
(statearr_45709_48663[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_45675[(4)]))){
var statearr_45711_48664 = state_45675;
(statearr_45711_48664[(1)] = cljs.core.first((state_45675[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48665 = state_45675;
state_45675 = G__48665;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__ = function(state_45675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____1.call(this,state_45675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__;
})()
;})(__48628,switch__45092__auto__,c__45178__auto___48646,G__45557_48630,G__45557_48631__$1,n__4741__auto___48627,jobs,results,process,async))
})();
var state__45180__auto__ = (function (){var statearr_45725 = f__45179__auto__();
(statearr_45725[(6)] = c__45178__auto___48646);

return statearr_45725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
});})(__48628,c__45178__auto___48646,G__45557_48630,G__45557_48631__$1,n__4741__auto___48627,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45557_48631__$1)].join('')));

}

var G__48667 = (__48628 + (1));
__48628 = G__48667;
continue;
} else {
}
break;
}

var c__45178__auto___48669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_45761){
var state_val_45762 = (state_45761[(1)]);
if((state_val_45762 === (7))){
var inst_45753 = (state_45761[(2)]);
var state_45761__$1 = state_45761;
var statearr_45766_48670 = state_45761__$1;
(statearr_45766_48670[(2)] = inst_45753);

(statearr_45766_48670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45762 === (1))){
var state_45761__$1 = state_45761;
var statearr_45767_48673 = state_45761__$1;
(statearr_45767_48673[(2)] = null);

(statearr_45767_48673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45762 === (4))){
var inst_45729 = (state_45761[(7)]);
var inst_45729__$1 = (state_45761[(2)]);
var inst_45732 = (inst_45729__$1 == null);
var state_45761__$1 = (function (){var statearr_45772 = state_45761;
(statearr_45772[(7)] = inst_45729__$1);

return statearr_45772;
})();
if(cljs.core.truth_(inst_45732)){
var statearr_45773_48684 = state_45761__$1;
(statearr_45773_48684[(1)] = (5));

} else {
var statearr_45774_48685 = state_45761__$1;
(statearr_45774_48685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45762 === (6))){
var inst_45743 = (state_45761[(8)]);
var inst_45729 = (state_45761[(7)]);
var inst_45743__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45744 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45745 = [inst_45729,inst_45743__$1];
var inst_45746 = (new cljs.core.PersistentVector(null,2,(5),inst_45744,inst_45745,null));
var state_45761__$1 = (function (){var statearr_45776 = state_45761;
(statearr_45776[(8)] = inst_45743__$1);

return statearr_45776;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45761__$1,(8),jobs,inst_45746);
} else {
if((state_val_45762 === (3))){
var inst_45755 = (state_45761[(2)]);
var state_45761__$1 = state_45761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45761__$1,inst_45755);
} else {
if((state_val_45762 === (2))){
var state_45761__$1 = state_45761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45761__$1,(4),from);
} else {
if((state_val_45762 === (9))){
var inst_45750 = (state_45761[(2)]);
var state_45761__$1 = (function (){var statearr_45777 = state_45761;
(statearr_45777[(9)] = inst_45750);

return statearr_45777;
})();
var statearr_45778_48702 = state_45761__$1;
(statearr_45778_48702[(2)] = null);

(statearr_45778_48702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45762 === (5))){
var inst_45737 = cljs.core.async.close_BANG_(jobs);
var state_45761__$1 = state_45761;
var statearr_45779_48704 = state_45761__$1;
(statearr_45779_48704[(2)] = inst_45737);

(statearr_45779_48704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45762 === (8))){
var inst_45743 = (state_45761[(8)]);
var inst_45748 = (state_45761[(2)]);
var state_45761__$1 = (function (){var statearr_45781 = state_45761;
(statearr_45781[(10)] = inst_45748);

return statearr_45781;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45761__$1,(9),results,inst_45743);
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
var cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____0 = (function (){
var statearr_45782 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45782[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__);

(statearr_45782[(1)] = (1));

return statearr_45782;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____1 = (function (state_45761){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_45761);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e45783){var ex__45096__auto__ = e45783;
var statearr_45784_48717 = state_45761;
(statearr_45784_48717[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_45761[(4)]))){
var statearr_45785_48721 = state_45761;
(statearr_45785_48721[(1)] = cljs.core.first((state_45761[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48722 = state_45761;
state_45761 = G__48722;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__ = function(state_45761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____1.call(this,state_45761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_45787 = f__45179__auto__();
(statearr_45787[(6)] = c__45178__auto___48669);

return statearr_45787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


var c__45178__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_45831){
var state_val_45832 = (state_45831[(1)]);
if((state_val_45832 === (7))){
var inst_45826 = (state_45831[(2)]);
var state_45831__$1 = state_45831;
var statearr_45833_48725 = state_45831__$1;
(statearr_45833_48725[(2)] = inst_45826);

(statearr_45833_48725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45832 === (20))){
var state_45831__$1 = state_45831;
var statearr_45835_48726 = state_45831__$1;
(statearr_45835_48726[(2)] = null);

(statearr_45835_48726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45832 === (1))){
var state_45831__$1 = state_45831;
var statearr_45838_48732 = state_45831__$1;
(statearr_45838_48732[(2)] = null);

(statearr_45838_48732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45832 === (4))){
var inst_45790 = (state_45831[(7)]);
var inst_45790__$1 = (state_45831[(2)]);
var inst_45791 = (inst_45790__$1 == null);
var state_45831__$1 = (function (){var statearr_45839 = state_45831;
(statearr_45839[(7)] = inst_45790__$1);

return statearr_45839;
})();
if(cljs.core.truth_(inst_45791)){
var statearr_45840_48740 = state_45831__$1;
(statearr_45840_48740[(1)] = (5));

} else {
var statearr_45841_48741 = state_45831__$1;
(statearr_45841_48741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45832 === (15))){
var inst_45807 = (state_45831[(8)]);
var state_45831__$1 = state_45831;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45831__$1,(18),to,inst_45807);
} else {
if((state_val_45832 === (21))){
var inst_45821 = (state_45831[(2)]);
var state_45831__$1 = state_45831;
var statearr_45843_48745 = state_45831__$1;
(statearr_45843_48745[(2)] = inst_45821);

(statearr_45843_48745[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45832 === (13))){
var inst_45823 = (state_45831[(2)]);
var state_45831__$1 = (function (){var statearr_45844 = state_45831;
(statearr_45844[(9)] = inst_45823);

return statearr_45844;
})();
var statearr_45845_48750 = state_45831__$1;
(statearr_45845_48750[(2)] = null);

(statearr_45845_48750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45832 === (6))){
var inst_45790 = (state_45831[(7)]);
var state_45831__$1 = state_45831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45831__$1,(11),inst_45790);
} else {
if((state_val_45832 === (17))){
var inst_45816 = (state_45831[(2)]);
var state_45831__$1 = state_45831;
if(cljs.core.truth_(inst_45816)){
var statearr_45846_48751 = state_45831__$1;
(statearr_45846_48751[(1)] = (19));

} else {
var statearr_45848_48752 = state_45831__$1;
(statearr_45848_48752[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45832 === (3))){
var inst_45828 = (state_45831[(2)]);
var state_45831__$1 = state_45831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45831__$1,inst_45828);
} else {
if((state_val_45832 === (12))){
var inst_45804 = (state_45831[(10)]);
var state_45831__$1 = state_45831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45831__$1,(14),inst_45804);
} else {
if((state_val_45832 === (2))){
var state_45831__$1 = state_45831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45831__$1,(4),results);
} else {
if((state_val_45832 === (19))){
var state_45831__$1 = state_45831;
var statearr_45853_48754 = state_45831__$1;
(statearr_45853_48754[(2)] = null);

(statearr_45853_48754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45832 === (11))){
var inst_45804 = (state_45831[(2)]);
var state_45831__$1 = (function (){var statearr_45857 = state_45831;
(statearr_45857[(10)] = inst_45804);

return statearr_45857;
})();
var statearr_45858_48757 = state_45831__$1;
(statearr_45858_48757[(2)] = null);

(statearr_45858_48757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45832 === (9))){
var state_45831__$1 = state_45831;
var statearr_45864_48758 = state_45831__$1;
(statearr_45864_48758[(2)] = null);

(statearr_45864_48758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45832 === (5))){
var state_45831__$1 = state_45831;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45868_48759 = state_45831__$1;
(statearr_45868_48759[(1)] = (8));

} else {
var statearr_45869_48760 = state_45831__$1;
(statearr_45869_48760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45832 === (14))){
var inst_45810 = (state_45831[(11)]);
var inst_45807 = (state_45831[(8)]);
var inst_45807__$1 = (state_45831[(2)]);
var inst_45809 = (inst_45807__$1 == null);
var inst_45810__$1 = cljs.core.not(inst_45809);
var state_45831__$1 = (function (){var statearr_45872 = state_45831;
(statearr_45872[(11)] = inst_45810__$1);

(statearr_45872[(8)] = inst_45807__$1);

return statearr_45872;
})();
if(inst_45810__$1){
var statearr_45873_48762 = state_45831__$1;
(statearr_45873_48762[(1)] = (15));

} else {
var statearr_45874_48763 = state_45831__$1;
(statearr_45874_48763[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45832 === (16))){
var inst_45810 = (state_45831[(11)]);
var state_45831__$1 = state_45831;
var statearr_45878_48765 = state_45831__$1;
(statearr_45878_48765[(2)] = inst_45810);

(statearr_45878_48765[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45832 === (10))){
var inst_45798 = (state_45831[(2)]);
var state_45831__$1 = state_45831;
var statearr_45882_48766 = state_45831__$1;
(statearr_45882_48766[(2)] = inst_45798);

(statearr_45882_48766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45832 === (18))){
var inst_45813 = (state_45831[(2)]);
var state_45831__$1 = state_45831;
var statearr_45883_48768 = state_45831__$1;
(statearr_45883_48768[(2)] = inst_45813);

(statearr_45883_48768[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45832 === (8))){
var inst_45795 = cljs.core.async.close_BANG_(to);
var state_45831__$1 = state_45831;
var statearr_45887_48769 = state_45831__$1;
(statearr_45887_48769[(2)] = inst_45795);

(statearr_45887_48769[(1)] = (10));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____0 = (function (){
var statearr_45898 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__);

(statearr_45898[(1)] = (1));

return statearr_45898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____1 = (function (state_45831){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_45831);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e45902){var ex__45096__auto__ = e45902;
var statearr_45903_48771 = state_45831;
(statearr_45903_48771[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_45831[(4)]))){
var statearr_45904_48772 = state_45831;
(statearr_45904_48772[(1)] = cljs.core.first((state_45831[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48774 = state_45831;
state_45831 = G__48774;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__ = function(state_45831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____1.call(this,state_45831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45093__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_45906 = f__45179__auto__();
(statearr_45906[(6)] = c__45178__auto__);

return statearr_45906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));

return c__45178__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__45908 = arguments.length;
switch (G__45908) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__45923 = arguments.length;
switch (G__45923) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__45932 = arguments.length;
switch (G__45932) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__45178__auto___48781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_45965){
var state_val_45966 = (state_45965[(1)]);
if((state_val_45966 === (7))){
var inst_45961 = (state_45965[(2)]);
var state_45965__$1 = state_45965;
var statearr_45973_48782 = state_45965__$1;
(statearr_45973_48782[(2)] = inst_45961);

(statearr_45973_48782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (1))){
var state_45965__$1 = state_45965;
var statearr_45976_48784 = state_45965__$1;
(statearr_45976_48784[(2)] = null);

(statearr_45976_48784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (4))){
var inst_45940 = (state_45965[(7)]);
var inst_45940__$1 = (state_45965[(2)]);
var inst_45941 = (inst_45940__$1 == null);
var state_45965__$1 = (function (){var statearr_45978 = state_45965;
(statearr_45978[(7)] = inst_45940__$1);

return statearr_45978;
})();
if(cljs.core.truth_(inst_45941)){
var statearr_45979_48785 = state_45965__$1;
(statearr_45979_48785[(1)] = (5));

} else {
var statearr_45981_48786 = state_45965__$1;
(statearr_45981_48786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (13))){
var state_45965__$1 = state_45965;
var statearr_45986_48789 = state_45965__$1;
(statearr_45986_48789[(2)] = null);

(statearr_45986_48789[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (6))){
var inst_45940 = (state_45965[(7)]);
var inst_45947 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45940) : p.call(null,inst_45940));
var state_45965__$1 = state_45965;
if(cljs.core.truth_(inst_45947)){
var statearr_45988_48792 = state_45965__$1;
(statearr_45988_48792[(1)] = (9));

} else {
var statearr_45989_48793 = state_45965__$1;
(statearr_45989_48793[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (3))){
var inst_45963 = (state_45965[(2)]);
var state_45965__$1 = state_45965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45965__$1,inst_45963);
} else {
if((state_val_45966 === (12))){
var state_45965__$1 = state_45965;
var statearr_45991_48795 = state_45965__$1;
(statearr_45991_48795[(2)] = null);

(statearr_45991_48795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (2))){
var state_45965__$1 = state_45965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45965__$1,(4),ch);
} else {
if((state_val_45966 === (11))){
var inst_45940 = (state_45965[(7)]);
var inst_45952 = (state_45965[(2)]);
var state_45965__$1 = state_45965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45965__$1,(8),inst_45952,inst_45940);
} else {
if((state_val_45966 === (9))){
var state_45965__$1 = state_45965;
var statearr_45993_48796 = state_45965__$1;
(statearr_45993_48796[(2)] = tc);

(statearr_45993_48796[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (5))){
var inst_45943 = cljs.core.async.close_BANG_(tc);
var inst_45944 = cljs.core.async.close_BANG_(fc);
var state_45965__$1 = (function (){var statearr_45998 = state_45965;
(statearr_45998[(8)] = inst_45943);

return statearr_45998;
})();
var statearr_45999_48801 = state_45965__$1;
(statearr_45999_48801[(2)] = inst_45944);

(statearr_45999_48801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (14))){
var inst_45959 = (state_45965[(2)]);
var state_45965__$1 = state_45965;
var statearr_46002_48803 = state_45965__$1;
(statearr_46002_48803[(2)] = inst_45959);

(statearr_46002_48803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (10))){
var state_45965__$1 = state_45965;
var statearr_46004_48804 = state_45965__$1;
(statearr_46004_48804[(2)] = fc);

(statearr_46004_48804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45966 === (8))){
var inst_45954 = (state_45965[(2)]);
var state_45965__$1 = state_45965;
if(cljs.core.truth_(inst_45954)){
var statearr_46005_48805 = state_45965__$1;
(statearr_46005_48805[(1)] = (12));

} else {
var statearr_46006_48806 = state_45965__$1;
(statearr_46006_48806[(1)] = (13));

}

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
});
return (function() {
var cljs$core$async$state_machine__45093__auto__ = null;
var cljs$core$async$state_machine__45093__auto____0 = (function (){
var statearr_46014 = [null,null,null,null,null,null,null,null,null];
(statearr_46014[(0)] = cljs$core$async$state_machine__45093__auto__);

(statearr_46014[(1)] = (1));

return statearr_46014;
});
var cljs$core$async$state_machine__45093__auto____1 = (function (state_45965){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_45965);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e46017){var ex__45096__auto__ = e46017;
var statearr_46018_48811 = state_45965;
(statearr_46018_48811[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_45965[(4)]))){
var statearr_46019_48813 = state_45965;
(statearr_46019_48813[(1)] = cljs.core.first((state_45965[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48815 = state_45965;
state_45965 = G__48815;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$state_machine__45093__auto__ = function(state_45965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45093__auto____1.call(this,state_45965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45093__auto____0;
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45093__auto____1;
return cljs$core$async$state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_46022 = f__45179__auto__();
(statearr_46022[(6)] = c__45178__auto___48781);

return statearr_46022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45178__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_46050){
var state_val_46051 = (state_46050[(1)]);
if((state_val_46051 === (7))){
var inst_46046 = (state_46050[(2)]);
var state_46050__$1 = state_46050;
var statearr_46054_48830 = state_46050__$1;
(statearr_46054_48830[(2)] = inst_46046);

(statearr_46054_48830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46051 === (1))){
var inst_46025 = init;
var inst_46026 = inst_46025;
var state_46050__$1 = (function (){var statearr_46055 = state_46050;
(statearr_46055[(7)] = inst_46026);

return statearr_46055;
})();
var statearr_46056_48831 = state_46050__$1;
(statearr_46056_48831[(2)] = null);

(statearr_46056_48831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46051 === (4))){
var inst_46032 = (state_46050[(8)]);
var inst_46032__$1 = (state_46050[(2)]);
var inst_46034 = (inst_46032__$1 == null);
var state_46050__$1 = (function (){var statearr_46062 = state_46050;
(statearr_46062[(8)] = inst_46032__$1);

return statearr_46062;
})();
if(cljs.core.truth_(inst_46034)){
var statearr_46063_48834 = state_46050__$1;
(statearr_46063_48834[(1)] = (5));

} else {
var statearr_46065_48836 = state_46050__$1;
(statearr_46065_48836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46051 === (6))){
var inst_46037 = (state_46050[(9)]);
var inst_46026 = (state_46050[(7)]);
var inst_46032 = (state_46050[(8)]);
var inst_46037__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46026,inst_46032) : f.call(null,inst_46026,inst_46032));
var inst_46038 = cljs.core.reduced_QMARK_(inst_46037__$1);
var state_46050__$1 = (function (){var statearr_46078 = state_46050;
(statearr_46078[(9)] = inst_46037__$1);

return statearr_46078;
})();
if(inst_46038){
var statearr_46079_48839 = state_46050__$1;
(statearr_46079_48839[(1)] = (8));

} else {
var statearr_46088_48840 = state_46050__$1;
(statearr_46088_48840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46051 === (3))){
var inst_46048 = (state_46050[(2)]);
var state_46050__$1 = state_46050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46050__$1,inst_46048);
} else {
if((state_val_46051 === (2))){
var state_46050__$1 = state_46050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46050__$1,(4),ch);
} else {
if((state_val_46051 === (9))){
var inst_46037 = (state_46050[(9)]);
var inst_46026 = inst_46037;
var state_46050__$1 = (function (){var statearr_46096 = state_46050;
(statearr_46096[(7)] = inst_46026);

return statearr_46096;
})();
var statearr_46097_48842 = state_46050__$1;
(statearr_46097_48842[(2)] = null);

(statearr_46097_48842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46051 === (5))){
var inst_46026 = (state_46050[(7)]);
var state_46050__$1 = state_46050;
var statearr_46098_48844 = state_46050__$1;
(statearr_46098_48844[(2)] = inst_46026);

(statearr_46098_48844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46051 === (10))){
var inst_46044 = (state_46050[(2)]);
var state_46050__$1 = state_46050;
var statearr_46099_48847 = state_46050__$1;
(statearr_46099_48847[(2)] = inst_46044);

(statearr_46099_48847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46051 === (8))){
var inst_46037 = (state_46050[(9)]);
var inst_46040 = cljs.core.deref(inst_46037);
var state_46050__$1 = state_46050;
var statearr_46103_48848 = state_46050__$1;
(statearr_46103_48848[(2)] = inst_46040);

(statearr_46103_48848[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__45093__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45093__auto____0 = (function (){
var statearr_46104 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46104[(0)] = cljs$core$async$reduce_$_state_machine__45093__auto__);

(statearr_46104[(1)] = (1));

return statearr_46104;
});
var cljs$core$async$reduce_$_state_machine__45093__auto____1 = (function (state_46050){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_46050);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e46109){var ex__45096__auto__ = e46109;
var statearr_46110_48849 = state_46050;
(statearr_46110_48849[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_46050[(4)]))){
var statearr_46111_48850 = state_46050;
(statearr_46111_48850[(1)] = cljs.core.first((state_46050[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48853 = state_46050;
state_46050 = G__48853;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45093__auto__ = function(state_46050){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45093__auto____1.call(this,state_46050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45093__auto____0;
cljs$core$async$reduce_$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45093__auto____1;
return cljs$core$async$reduce_$_state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_46116 = f__45179__auto__();
(statearr_46116[(6)] = c__45178__auto__);

return statearr_46116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));

return c__45178__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45178__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_46144){
var state_val_46145 = (state_46144[(1)]);
if((state_val_46145 === (1))){
var inst_46139 = cljs.core.async.reduce(f__$1,init,ch);
var state_46144__$1 = state_46144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46144__$1,(2),inst_46139);
} else {
if((state_val_46145 === (2))){
var inst_46141 = (state_46144[(2)]);
var inst_46142 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46141) : f__$1.call(null,inst_46141));
var state_46144__$1 = state_46144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46144__$1,inst_46142);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45093__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45093__auto____0 = (function (){
var statearr_46171 = [null,null,null,null,null,null,null];
(statearr_46171[(0)] = cljs$core$async$transduce_$_state_machine__45093__auto__);

(statearr_46171[(1)] = (1));

return statearr_46171;
});
var cljs$core$async$transduce_$_state_machine__45093__auto____1 = (function (state_46144){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_46144);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e46172){var ex__45096__auto__ = e46172;
var statearr_46173_48858 = state_46144;
(statearr_46173_48858[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_46144[(4)]))){
var statearr_46174_48860 = state_46144;
(statearr_46174_48860[(1)] = cljs.core.first((state_46144[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48863 = state_46144;
state_46144 = G__48863;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45093__auto__ = function(state_46144){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45093__auto____1.call(this,state_46144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45093__auto____0;
cljs$core$async$transduce_$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45093__auto____1;
return cljs$core$async$transduce_$_state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_46178 = f__45179__auto__();
(statearr_46178[(6)] = c__45178__auto__);

return statearr_46178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));

return c__45178__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__46184 = arguments.length;
switch (G__46184) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45178__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_46239){
var state_val_46240 = (state_46239[(1)]);
if((state_val_46240 === (7))){
var inst_46221 = (state_46239[(2)]);
var state_46239__$1 = state_46239;
var statearr_46253_48869 = state_46239__$1;
(statearr_46253_48869[(2)] = inst_46221);

(statearr_46253_48869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (1))){
var inst_46214 = cljs.core.seq(coll);
var inst_46215 = inst_46214;
var state_46239__$1 = (function (){var statearr_46263 = state_46239;
(statearr_46263[(7)] = inst_46215);

return statearr_46263;
})();
var statearr_46267_48871 = state_46239__$1;
(statearr_46267_48871[(2)] = null);

(statearr_46267_48871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (4))){
var inst_46215 = (state_46239[(7)]);
var inst_46219 = cljs.core.first(inst_46215);
var state_46239__$1 = state_46239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46239__$1,(7),ch,inst_46219);
} else {
if((state_val_46240 === (13))){
var inst_46233 = (state_46239[(2)]);
var state_46239__$1 = state_46239;
var statearr_46279_48874 = state_46239__$1;
(statearr_46279_48874[(2)] = inst_46233);

(statearr_46279_48874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (6))){
var inst_46224 = (state_46239[(2)]);
var state_46239__$1 = state_46239;
if(cljs.core.truth_(inst_46224)){
var statearr_46292_48877 = state_46239__$1;
(statearr_46292_48877[(1)] = (8));

} else {
var statearr_46296_48879 = state_46239__$1;
(statearr_46296_48879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (3))){
var inst_46237 = (state_46239[(2)]);
var state_46239__$1 = state_46239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46239__$1,inst_46237);
} else {
if((state_val_46240 === (12))){
var state_46239__$1 = state_46239;
var statearr_46297_48880 = state_46239__$1;
(statearr_46297_48880[(2)] = null);

(statearr_46297_48880[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (2))){
var inst_46215 = (state_46239[(7)]);
var state_46239__$1 = state_46239;
if(cljs.core.truth_(inst_46215)){
var statearr_46298_48881 = state_46239__$1;
(statearr_46298_48881[(1)] = (4));

} else {
var statearr_46299_48882 = state_46239__$1;
(statearr_46299_48882[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (11))){
var inst_46230 = cljs.core.async.close_BANG_(ch);
var state_46239__$1 = state_46239;
var statearr_46301_48883 = state_46239__$1;
(statearr_46301_48883[(2)] = inst_46230);

(statearr_46301_48883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (9))){
var state_46239__$1 = state_46239;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46303_48886 = state_46239__$1;
(statearr_46303_48886[(1)] = (11));

} else {
var statearr_46304_48887 = state_46239__$1;
(statearr_46304_48887[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (5))){
var inst_46215 = (state_46239[(7)]);
var state_46239__$1 = state_46239;
var statearr_46306_48888 = state_46239__$1;
(statearr_46306_48888[(2)] = inst_46215);

(statearr_46306_48888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (10))){
var inst_46235 = (state_46239[(2)]);
var state_46239__$1 = state_46239;
var statearr_46310_48899 = state_46239__$1;
(statearr_46310_48899[(2)] = inst_46235);

(statearr_46310_48899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46240 === (8))){
var inst_46215 = (state_46239[(7)]);
var inst_46226 = cljs.core.next(inst_46215);
var inst_46215__$1 = inst_46226;
var state_46239__$1 = (function (){var statearr_46311 = state_46239;
(statearr_46311[(7)] = inst_46215__$1);

return statearr_46311;
})();
var statearr_46312_48900 = state_46239__$1;
(statearr_46312_48900[(2)] = null);

(statearr_46312_48900[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__45093__auto__ = null;
var cljs$core$async$state_machine__45093__auto____0 = (function (){
var statearr_46315 = [null,null,null,null,null,null,null,null];
(statearr_46315[(0)] = cljs$core$async$state_machine__45093__auto__);

(statearr_46315[(1)] = (1));

return statearr_46315;
});
var cljs$core$async$state_machine__45093__auto____1 = (function (state_46239){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_46239);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e46320){var ex__45096__auto__ = e46320;
var statearr_46322_48903 = state_46239;
(statearr_46322_48903[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_46239[(4)]))){
var statearr_46330_48904 = state_46239;
(statearr_46330_48904[(1)] = cljs.core.first((state_46239[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48907 = state_46239;
state_46239 = G__48907;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$state_machine__45093__auto__ = function(state_46239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45093__auto____1.call(this,state_46239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45093__auto____0;
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45093__auto____1;
return cljs$core$async$state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_46340 = f__45179__auto__();
(statearr_46340[(6)] = c__45178__auto__);

return statearr_46340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));

return c__45178__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46343 = arguments.length;
switch (G__46343) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_48913 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_48913(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_48917 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_48917(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_48922 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_48922(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_48923 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_48923(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46352 = (function (ch,cs,meta46353){
this.ch = ch;
this.cs = cs;
this.meta46353 = meta46353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46354,meta46353__$1){
var self__ = this;
var _46354__$1 = this;
return (new cljs.core.async.t_cljs$core$async46352(self__.ch,self__.cs,meta46353__$1));
}));

(cljs.core.async.t_cljs$core$async46352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46354){
var self__ = this;
var _46354__$1 = this;
return self__.meta46353;
}));

(cljs.core.async.t_cljs$core$async46352.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46352.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46352.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46352.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46352.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46352.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46353","meta46353",1218031652,null)], null);
}));

(cljs.core.async.t_cljs$core$async46352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46352");

(cljs.core.async.t_cljs$core$async46352.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46352.
 */
cljs.core.async.__GT_t_cljs$core$async46352 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46352(ch__$1,cs__$1,meta46353){
return (new cljs.core.async.t_cljs$core$async46352(ch__$1,cs__$1,meta46353));
});

}

return (new cljs.core.async.t_cljs$core$async46352(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45178__auto___48937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_46553){
var state_val_46554 = (state_46553[(1)]);
if((state_val_46554 === (7))){
var inst_46547 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
var statearr_46561_48939 = state_46553__$1;
(statearr_46561_48939[(2)] = inst_46547);

(statearr_46561_48939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (20))){
var inst_46436 = (state_46553[(7)]);
var inst_46456 = cljs.core.first(inst_46436);
var inst_46457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46456,(0),null);
var inst_46458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46456,(1),null);
var state_46553__$1 = (function (){var statearr_46562 = state_46553;
(statearr_46562[(8)] = inst_46457);

return statearr_46562;
})();
if(cljs.core.truth_(inst_46458)){
var statearr_46563_48941 = state_46553__$1;
(statearr_46563_48941[(1)] = (22));

} else {
var statearr_46564_48942 = state_46553__$1;
(statearr_46564_48942[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (27))){
var inst_46391 = (state_46553[(9)]);
var inst_46491 = (state_46553[(10)]);
var inst_46489 = (state_46553[(11)]);
var inst_46497 = (state_46553[(12)]);
var inst_46497__$1 = cljs.core._nth(inst_46489,inst_46491);
var inst_46498 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46497__$1,inst_46391,done);
var state_46553__$1 = (function (){var statearr_46565 = state_46553;
(statearr_46565[(12)] = inst_46497__$1);

return statearr_46565;
})();
if(cljs.core.truth_(inst_46498)){
var statearr_46568_48946 = state_46553__$1;
(statearr_46568_48946[(1)] = (30));

} else {
var statearr_46570_48947 = state_46553__$1;
(statearr_46570_48947[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (1))){
var state_46553__$1 = state_46553;
var statearr_46571_48948 = state_46553__$1;
(statearr_46571_48948[(2)] = null);

(statearr_46571_48948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (24))){
var inst_46436 = (state_46553[(7)]);
var inst_46463 = (state_46553[(2)]);
var inst_46464 = cljs.core.next(inst_46436);
var inst_46403 = inst_46464;
var inst_46404 = null;
var inst_46405 = (0);
var inst_46406 = (0);
var state_46553__$1 = (function (){var statearr_46573 = state_46553;
(statearr_46573[(13)] = inst_46406);

(statearr_46573[(14)] = inst_46405);

(statearr_46573[(15)] = inst_46463);

(statearr_46573[(16)] = inst_46403);

(statearr_46573[(17)] = inst_46404);

return statearr_46573;
})();
var statearr_46574_48957 = state_46553__$1;
(statearr_46574_48957[(2)] = null);

(statearr_46574_48957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (39))){
var state_46553__$1 = state_46553;
var statearr_46579_48958 = state_46553__$1;
(statearr_46579_48958[(2)] = null);

(statearr_46579_48958[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (4))){
var inst_46391 = (state_46553[(9)]);
var inst_46391__$1 = (state_46553[(2)]);
var inst_46393 = (inst_46391__$1 == null);
var state_46553__$1 = (function (){var statearr_46580 = state_46553;
(statearr_46580[(9)] = inst_46391__$1);

return statearr_46580;
})();
if(cljs.core.truth_(inst_46393)){
var statearr_46581_48961 = state_46553__$1;
(statearr_46581_48961[(1)] = (5));

} else {
var statearr_46582_48964 = state_46553__$1;
(statearr_46582_48964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (15))){
var inst_46406 = (state_46553[(13)]);
var inst_46405 = (state_46553[(14)]);
var inst_46403 = (state_46553[(16)]);
var inst_46404 = (state_46553[(17)]);
var inst_46432 = (state_46553[(2)]);
var inst_46433 = (inst_46406 + (1));
var tmp46575 = inst_46405;
var tmp46576 = inst_46403;
var tmp46577 = inst_46404;
var inst_46403__$1 = tmp46576;
var inst_46404__$1 = tmp46577;
var inst_46405__$1 = tmp46575;
var inst_46406__$1 = inst_46433;
var state_46553__$1 = (function (){var statearr_46586 = state_46553;
(statearr_46586[(13)] = inst_46406__$1);

(statearr_46586[(14)] = inst_46405__$1);

(statearr_46586[(18)] = inst_46432);

(statearr_46586[(16)] = inst_46403__$1);

(statearr_46586[(17)] = inst_46404__$1);

return statearr_46586;
})();
var statearr_46587_48976 = state_46553__$1;
(statearr_46587_48976[(2)] = null);

(statearr_46587_48976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (21))){
var inst_46468 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
var statearr_46596_48977 = state_46553__$1;
(statearr_46596_48977[(2)] = inst_46468);

(statearr_46596_48977[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (31))){
var inst_46497 = (state_46553[(12)]);
var inst_46502 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46497);
var state_46553__$1 = state_46553;
var statearr_46598_48978 = state_46553__$1;
(statearr_46598_48978[(2)] = inst_46502);

(statearr_46598_48978[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (32))){
var inst_46490 = (state_46553[(19)]);
var inst_46488 = (state_46553[(20)]);
var inst_46491 = (state_46553[(10)]);
var inst_46489 = (state_46553[(11)]);
var inst_46504 = (state_46553[(2)]);
var inst_46505 = (inst_46491 + (1));
var tmp46592 = inst_46490;
var tmp46593 = inst_46488;
var tmp46594 = inst_46489;
var inst_46488__$1 = tmp46593;
var inst_46489__$1 = tmp46594;
var inst_46490__$1 = tmp46592;
var inst_46491__$1 = inst_46505;
var state_46553__$1 = (function (){var statearr_46599 = state_46553;
(statearr_46599[(19)] = inst_46490__$1);

(statearr_46599[(20)] = inst_46488__$1);

(statearr_46599[(21)] = inst_46504);

(statearr_46599[(10)] = inst_46491__$1);

(statearr_46599[(11)] = inst_46489__$1);

return statearr_46599;
})();
var statearr_46600_48986 = state_46553__$1;
(statearr_46600_48986[(2)] = null);

(statearr_46600_48986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (40))){
var inst_46518 = (state_46553[(22)]);
var inst_46522 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46518);
var state_46553__$1 = state_46553;
var statearr_46601_48994 = state_46553__$1;
(statearr_46601_48994[(2)] = inst_46522);

(statearr_46601_48994[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (33))){
var inst_46508 = (state_46553[(23)]);
var inst_46511 = cljs.core.chunked_seq_QMARK_(inst_46508);
var state_46553__$1 = state_46553;
if(inst_46511){
var statearr_46605_48995 = state_46553__$1;
(statearr_46605_48995[(1)] = (36));

} else {
var statearr_46606_48996 = state_46553__$1;
(statearr_46606_48996[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (13))){
var inst_46421 = (state_46553[(24)]);
var inst_46427 = cljs.core.async.close_BANG_(inst_46421);
var state_46553__$1 = state_46553;
var statearr_46608_48998 = state_46553__$1;
(statearr_46608_48998[(2)] = inst_46427);

(statearr_46608_48998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (22))){
var inst_46457 = (state_46553[(8)]);
var inst_46460 = cljs.core.async.close_BANG_(inst_46457);
var state_46553__$1 = state_46553;
var statearr_46612_48999 = state_46553__$1;
(statearr_46612_48999[(2)] = inst_46460);

(statearr_46612_48999[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (36))){
var inst_46508 = (state_46553[(23)]);
var inst_46513 = cljs.core.chunk_first(inst_46508);
var inst_46514 = cljs.core.chunk_rest(inst_46508);
var inst_46515 = cljs.core.count(inst_46513);
var inst_46488 = inst_46514;
var inst_46489 = inst_46513;
var inst_46490 = inst_46515;
var inst_46491 = (0);
var state_46553__$1 = (function (){var statearr_46613 = state_46553;
(statearr_46613[(19)] = inst_46490);

(statearr_46613[(20)] = inst_46488);

(statearr_46613[(10)] = inst_46491);

(statearr_46613[(11)] = inst_46489);

return statearr_46613;
})();
var statearr_46616_49000 = state_46553__$1;
(statearr_46616_49000[(2)] = null);

(statearr_46616_49000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (41))){
var inst_46508 = (state_46553[(23)]);
var inst_46524 = (state_46553[(2)]);
var inst_46525 = cljs.core.next(inst_46508);
var inst_46488 = inst_46525;
var inst_46489 = null;
var inst_46490 = (0);
var inst_46491 = (0);
var state_46553__$1 = (function (){var statearr_46618 = state_46553;
(statearr_46618[(25)] = inst_46524);

(statearr_46618[(19)] = inst_46490);

(statearr_46618[(20)] = inst_46488);

(statearr_46618[(10)] = inst_46491);

(statearr_46618[(11)] = inst_46489);

return statearr_46618;
})();
var statearr_46619_49005 = state_46553__$1;
(statearr_46619_49005[(2)] = null);

(statearr_46619_49005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (43))){
var state_46553__$1 = state_46553;
var statearr_46620_49010 = state_46553__$1;
(statearr_46620_49010[(2)] = null);

(statearr_46620_49010[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (29))){
var inst_46533 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
var statearr_46621_49013 = state_46553__$1;
(statearr_46621_49013[(2)] = inst_46533);

(statearr_46621_49013[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (44))){
var inst_46542 = (state_46553[(2)]);
var state_46553__$1 = (function (){var statearr_46622 = state_46553;
(statearr_46622[(26)] = inst_46542);

return statearr_46622;
})();
var statearr_46623_49014 = state_46553__$1;
(statearr_46623_49014[(2)] = null);

(statearr_46623_49014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (6))){
var inst_46480 = (state_46553[(27)]);
var inst_46479 = cljs.core.deref(cs);
var inst_46480__$1 = cljs.core.keys(inst_46479);
var inst_46481 = cljs.core.count(inst_46480__$1);
var inst_46482 = cljs.core.reset_BANG_(dctr,inst_46481);
var inst_46487 = cljs.core.seq(inst_46480__$1);
var inst_46488 = inst_46487;
var inst_46489 = null;
var inst_46490 = (0);
var inst_46491 = (0);
var state_46553__$1 = (function (){var statearr_46628 = state_46553;
(statearr_46628[(19)] = inst_46490);

(statearr_46628[(20)] = inst_46488);

(statearr_46628[(28)] = inst_46482);

(statearr_46628[(27)] = inst_46480__$1);

(statearr_46628[(10)] = inst_46491);

(statearr_46628[(11)] = inst_46489);

return statearr_46628;
})();
var statearr_46629_49018 = state_46553__$1;
(statearr_46629_49018[(2)] = null);

(statearr_46629_49018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (28))){
var inst_46508 = (state_46553[(23)]);
var inst_46488 = (state_46553[(20)]);
var inst_46508__$1 = cljs.core.seq(inst_46488);
var state_46553__$1 = (function (){var statearr_46630 = state_46553;
(statearr_46630[(23)] = inst_46508__$1);

return statearr_46630;
})();
if(inst_46508__$1){
var statearr_46631_49019 = state_46553__$1;
(statearr_46631_49019[(1)] = (33));

} else {
var statearr_46632_49021 = state_46553__$1;
(statearr_46632_49021[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (25))){
var inst_46490 = (state_46553[(19)]);
var inst_46491 = (state_46553[(10)]);
var inst_46494 = (inst_46491 < inst_46490);
var inst_46495 = inst_46494;
var state_46553__$1 = state_46553;
if(cljs.core.truth_(inst_46495)){
var statearr_46633_49025 = state_46553__$1;
(statearr_46633_49025[(1)] = (27));

} else {
var statearr_46634_49027 = state_46553__$1;
(statearr_46634_49027[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (34))){
var state_46553__$1 = state_46553;
var statearr_46635_49028 = state_46553__$1;
(statearr_46635_49028[(2)] = null);

(statearr_46635_49028[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (17))){
var state_46553__$1 = state_46553;
var statearr_46642_49029 = state_46553__$1;
(statearr_46642_49029[(2)] = null);

(statearr_46642_49029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (3))){
var inst_46549 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46553__$1,inst_46549);
} else {
if((state_val_46554 === (12))){
var inst_46474 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
var statearr_46663_49033 = state_46553__$1;
(statearr_46663_49033[(2)] = inst_46474);

(statearr_46663_49033[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (2))){
var state_46553__$1 = state_46553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46553__$1,(4),ch);
} else {
if((state_val_46554 === (23))){
var state_46553__$1 = state_46553;
var statearr_46666_49034 = state_46553__$1;
(statearr_46666_49034[(2)] = null);

(statearr_46666_49034[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (35))){
var inst_46531 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
var statearr_46667_49035 = state_46553__$1;
(statearr_46667_49035[(2)] = inst_46531);

(statearr_46667_49035[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (19))){
var inst_46436 = (state_46553[(7)]);
var inst_46444 = cljs.core.chunk_first(inst_46436);
var inst_46445 = cljs.core.chunk_rest(inst_46436);
var inst_46446 = cljs.core.count(inst_46444);
var inst_46403 = inst_46445;
var inst_46404 = inst_46444;
var inst_46405 = inst_46446;
var inst_46406 = (0);
var state_46553__$1 = (function (){var statearr_46670 = state_46553;
(statearr_46670[(13)] = inst_46406);

(statearr_46670[(14)] = inst_46405);

(statearr_46670[(16)] = inst_46403);

(statearr_46670[(17)] = inst_46404);

return statearr_46670;
})();
var statearr_46674_49038 = state_46553__$1;
(statearr_46674_49038[(2)] = null);

(statearr_46674_49038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (11))){
var inst_46436 = (state_46553[(7)]);
var inst_46403 = (state_46553[(16)]);
var inst_46436__$1 = cljs.core.seq(inst_46403);
var state_46553__$1 = (function (){var statearr_46675 = state_46553;
(statearr_46675[(7)] = inst_46436__$1);

return statearr_46675;
})();
if(inst_46436__$1){
var statearr_46676_49045 = state_46553__$1;
(statearr_46676_49045[(1)] = (16));

} else {
var statearr_46677_49052 = state_46553__$1;
(statearr_46677_49052[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (9))){
var inst_46476 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
var statearr_46679_49054 = state_46553__$1;
(statearr_46679_49054[(2)] = inst_46476);

(statearr_46679_49054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (5))){
var inst_46400 = cljs.core.deref(cs);
var inst_46401 = cljs.core.seq(inst_46400);
var inst_46403 = inst_46401;
var inst_46404 = null;
var inst_46405 = (0);
var inst_46406 = (0);
var state_46553__$1 = (function (){var statearr_46681 = state_46553;
(statearr_46681[(13)] = inst_46406);

(statearr_46681[(14)] = inst_46405);

(statearr_46681[(16)] = inst_46403);

(statearr_46681[(17)] = inst_46404);

return statearr_46681;
})();
var statearr_46684_49056 = state_46553__$1;
(statearr_46684_49056[(2)] = null);

(statearr_46684_49056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (14))){
var state_46553__$1 = state_46553;
var statearr_46686_49058 = state_46553__$1;
(statearr_46686_49058[(2)] = null);

(statearr_46686_49058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (45))){
var inst_46539 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
var statearr_46687_49061 = state_46553__$1;
(statearr_46687_49061[(2)] = inst_46539);

(statearr_46687_49061[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (26))){
var inst_46480 = (state_46553[(27)]);
var inst_46535 = (state_46553[(2)]);
var inst_46536 = cljs.core.seq(inst_46480);
var state_46553__$1 = (function (){var statearr_46688 = state_46553;
(statearr_46688[(29)] = inst_46535);

return statearr_46688;
})();
if(inst_46536){
var statearr_46690_49063 = state_46553__$1;
(statearr_46690_49063[(1)] = (42));

} else {
var statearr_46692_49064 = state_46553__$1;
(statearr_46692_49064[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (16))){
var inst_46436 = (state_46553[(7)]);
var inst_46442 = cljs.core.chunked_seq_QMARK_(inst_46436);
var state_46553__$1 = state_46553;
if(inst_46442){
var statearr_46693_49067 = state_46553__$1;
(statearr_46693_49067[(1)] = (19));

} else {
var statearr_46694_49071 = state_46553__$1;
(statearr_46694_49071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (38))){
var inst_46528 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
var statearr_46697_49073 = state_46553__$1;
(statearr_46697_49073[(2)] = inst_46528);

(statearr_46697_49073[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (30))){
var state_46553__$1 = state_46553;
var statearr_46698_49074 = state_46553__$1;
(statearr_46698_49074[(2)] = null);

(statearr_46698_49074[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (10))){
var inst_46406 = (state_46553[(13)]);
var inst_46404 = (state_46553[(17)]);
var inst_46420 = cljs.core._nth(inst_46404,inst_46406);
var inst_46421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46420,(0),null);
var inst_46423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46420,(1),null);
var state_46553__$1 = (function (){var statearr_46700 = state_46553;
(statearr_46700[(24)] = inst_46421);

return statearr_46700;
})();
if(cljs.core.truth_(inst_46423)){
var statearr_46701_49080 = state_46553__$1;
(statearr_46701_49080[(1)] = (13));

} else {
var statearr_46702_49082 = state_46553__$1;
(statearr_46702_49082[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (18))){
var inst_46472 = (state_46553[(2)]);
var state_46553__$1 = state_46553;
var statearr_46705_49083 = state_46553__$1;
(statearr_46705_49083[(2)] = inst_46472);

(statearr_46705_49083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (42))){
var state_46553__$1 = state_46553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46553__$1,(45),dchan);
} else {
if((state_val_46554 === (37))){
var inst_46508 = (state_46553[(23)]);
var inst_46518 = (state_46553[(22)]);
var inst_46391 = (state_46553[(9)]);
var inst_46518__$1 = cljs.core.first(inst_46508);
var inst_46519 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46518__$1,inst_46391,done);
var state_46553__$1 = (function (){var statearr_46706 = state_46553;
(statearr_46706[(22)] = inst_46518__$1);

return statearr_46706;
})();
if(cljs.core.truth_(inst_46519)){
var statearr_46707_49088 = state_46553__$1;
(statearr_46707_49088[(1)] = (39));

} else {
var statearr_46708_49089 = state_46553__$1;
(statearr_46708_49089[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46554 === (8))){
var inst_46406 = (state_46553[(13)]);
var inst_46405 = (state_46553[(14)]);
var inst_46410 = (inst_46406 < inst_46405);
var inst_46411 = inst_46410;
var state_46553__$1 = state_46553;
if(cljs.core.truth_(inst_46411)){
var statearr_46709_49091 = state_46553__$1;
(statearr_46709_49091[(1)] = (10));

} else {
var statearr_46710_49093 = state_46553__$1;
(statearr_46710_49093[(1)] = (11));

}

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
var cljs$core$async$mult_$_state_machine__45093__auto__ = null;
var cljs$core$async$mult_$_state_machine__45093__auto____0 = (function (){
var statearr_46713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46713[(0)] = cljs$core$async$mult_$_state_machine__45093__auto__);

(statearr_46713[(1)] = (1));

return statearr_46713;
});
var cljs$core$async$mult_$_state_machine__45093__auto____1 = (function (state_46553){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_46553);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e46714){var ex__45096__auto__ = e46714;
var statearr_46715_49094 = state_46553;
(statearr_46715_49094[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_46553[(4)]))){
var statearr_46716_49095 = state_46553;
(statearr_46716_49095[(1)] = cljs.core.first((state_46553[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49096 = state_46553;
state_46553 = G__49096;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45093__auto__ = function(state_46553){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45093__auto____1.call(this,state_46553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45093__auto____0;
cljs$core$async$mult_$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45093__auto____1;
return cljs$core$async$mult_$_state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_46717 = f__45179__auto__();
(statearr_46717[(6)] = c__45178__auto___48937);

return statearr_46717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46719 = arguments.length;
switch (G__46719) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_49103 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_49103(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49109 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_49109(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49111 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49111(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49122 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_49122(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49126 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49126(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49131 = arguments.length;
var i__4865__auto___49132 = (0);
while(true){
if((i__4865__auto___49132 < len__4864__auto___49131)){
args__4870__auto__.push((arguments[i__4865__auto___49132]));

var G__49133 = (i__4865__auto___49132 + (1));
i__4865__auto___49132 = G__49133;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46733){
var map__46734 = p__46733;
var map__46734__$1 = cljs.core.__destructure_map(map__46734);
var opts = map__46734__$1;
var statearr_46735_49140 = state;
(statearr_46735_49140[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46736_49141 = state;
(statearr_46736_49141[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_46738_49142 = state;
(statearr_46738_49142[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46728){
var G__46729 = cljs.core.first(seq46728);
var seq46728__$1 = cljs.core.next(seq46728);
var G__46730 = cljs.core.first(seq46728__$1);
var seq46728__$2 = cljs.core.next(seq46728__$1);
var G__46731 = cljs.core.first(seq46728__$2);
var seq46728__$3 = cljs.core.next(seq46728__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46729,G__46730,G__46731,seq46728__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46741 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46742){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46742 = meta46742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46743,meta46742__$1){
var self__ = this;
var _46743__$1 = this;
return (new cljs.core.async.t_cljs$core$async46741(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46742__$1));
}));

(cljs.core.async.t_cljs$core$async46741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46743){
var self__ = this;
var _46743__$1 = this;
return self__.meta46742;
}));

(cljs.core.async.t_cljs$core$async46741.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46741.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46741.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46741.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46741.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46741.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46741.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46741.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46742","meta46742",-933254197,null)], null);
}));

(cljs.core.async.t_cljs$core$async46741.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46741");

(cljs.core.async.t_cljs$core$async46741.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46741");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46741.
 */
cljs.core.async.__GT_t_cljs$core$async46741 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46741(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46742){
return (new cljs.core.async.t_cljs$core$async46741(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46742));
});

}

return (new cljs.core.async.t_cljs$core$async46741(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45178__auto___49171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_46825){
var state_val_46826 = (state_46825[(1)]);
if((state_val_46826 === (7))){
var inst_46782 = (state_46825[(2)]);
var state_46825__$1 = state_46825;
if(cljs.core.truth_(inst_46782)){
var statearr_46829_49172 = state_46825__$1;
(statearr_46829_49172[(1)] = (8));

} else {
var statearr_46830_49173 = state_46825__$1;
(statearr_46830_49173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (20))){
var inst_46771 = (state_46825[(7)]);
var state_46825__$1 = state_46825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46825__$1,(23),out,inst_46771);
} else {
if((state_val_46826 === (1))){
var inst_46751 = calc_state();
var inst_46753 = cljs.core.__destructure_map(inst_46751);
var inst_46755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46753,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46753,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46753,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46758 = inst_46751;
var state_46825__$1 = (function (){var statearr_46831 = state_46825;
(statearr_46831[(8)] = inst_46757);

(statearr_46831[(9)] = inst_46758);

(statearr_46831[(10)] = inst_46755);

(statearr_46831[(11)] = inst_46756);

return statearr_46831;
})();
var statearr_46832_49176 = state_46825__$1;
(statearr_46832_49176[(2)] = null);

(statearr_46832_49176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (24))){
var inst_46761 = (state_46825[(12)]);
var inst_46758 = inst_46761;
var state_46825__$1 = (function (){var statearr_46834 = state_46825;
(statearr_46834[(9)] = inst_46758);

return statearr_46834;
})();
var statearr_46835_49182 = state_46825__$1;
(statearr_46835_49182[(2)] = null);

(statearr_46835_49182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (4))){
var inst_46776 = (state_46825[(13)]);
var inst_46771 = (state_46825[(7)]);
var inst_46770 = (state_46825[(2)]);
var inst_46771__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46770,(0),null);
var inst_46772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46770,(1),null);
var inst_46776__$1 = (inst_46771__$1 == null);
var state_46825__$1 = (function (){var statearr_46836 = state_46825;
(statearr_46836[(13)] = inst_46776__$1);

(statearr_46836[(14)] = inst_46772);

(statearr_46836[(7)] = inst_46771__$1);

return statearr_46836;
})();
if(cljs.core.truth_(inst_46776__$1)){
var statearr_46838_49184 = state_46825__$1;
(statearr_46838_49184[(1)] = (5));

} else {
var statearr_46839_49185 = state_46825__$1;
(statearr_46839_49185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (15))){
var inst_46762 = (state_46825[(15)]);
var inst_46798 = (state_46825[(16)]);
var inst_46798__$1 = cljs.core.empty_QMARK_(inst_46762);
var state_46825__$1 = (function (){var statearr_46842 = state_46825;
(statearr_46842[(16)] = inst_46798__$1);

return statearr_46842;
})();
if(inst_46798__$1){
var statearr_46843_49186 = state_46825__$1;
(statearr_46843_49186[(1)] = (17));

} else {
var statearr_46844_49187 = state_46825__$1;
(statearr_46844_49187[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (21))){
var inst_46761 = (state_46825[(12)]);
var inst_46758 = inst_46761;
var state_46825__$1 = (function (){var statearr_46845 = state_46825;
(statearr_46845[(9)] = inst_46758);

return statearr_46845;
})();
var statearr_46846_49190 = state_46825__$1;
(statearr_46846_49190[(2)] = null);

(statearr_46846_49190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (13))){
var inst_46790 = (state_46825[(2)]);
var inst_46792 = calc_state();
var inst_46758 = inst_46792;
var state_46825__$1 = (function (){var statearr_46847 = state_46825;
(statearr_46847[(9)] = inst_46758);

(statearr_46847[(17)] = inst_46790);

return statearr_46847;
})();
var statearr_46848_49193 = state_46825__$1;
(statearr_46848_49193[(2)] = null);

(statearr_46848_49193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (22))){
var inst_46818 = (state_46825[(2)]);
var state_46825__$1 = state_46825;
var statearr_46849_49196 = state_46825__$1;
(statearr_46849_49196[(2)] = inst_46818);

(statearr_46849_49196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (6))){
var inst_46772 = (state_46825[(14)]);
var inst_46780 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46772,change);
var state_46825__$1 = state_46825;
var statearr_46850_49201 = state_46825__$1;
(statearr_46850_49201[(2)] = inst_46780);

(statearr_46850_49201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (25))){
var state_46825__$1 = state_46825;
var statearr_46852_49202 = state_46825__$1;
(statearr_46852_49202[(2)] = null);

(statearr_46852_49202[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (17))){
var inst_46772 = (state_46825[(14)]);
var inst_46763 = (state_46825[(18)]);
var inst_46800 = (inst_46763.cljs$core$IFn$_invoke$arity$1 ? inst_46763.cljs$core$IFn$_invoke$arity$1(inst_46772) : inst_46763.call(null,inst_46772));
var inst_46801 = cljs.core.not(inst_46800);
var state_46825__$1 = state_46825;
var statearr_46855_49204 = state_46825__$1;
(statearr_46855_49204[(2)] = inst_46801);

(statearr_46855_49204[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (3))){
var inst_46822 = (state_46825[(2)]);
var state_46825__$1 = state_46825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46825__$1,inst_46822);
} else {
if((state_val_46826 === (12))){
var state_46825__$1 = state_46825;
var statearr_46856_49205 = state_46825__$1;
(statearr_46856_49205[(2)] = null);

(statearr_46856_49205[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (2))){
var inst_46761 = (state_46825[(12)]);
var inst_46758 = (state_46825[(9)]);
var inst_46761__$1 = cljs.core.__destructure_map(inst_46758);
var inst_46762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46761__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46761__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46761__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46825__$1 = (function (){var statearr_46857 = state_46825;
(statearr_46857[(12)] = inst_46761__$1);

(statearr_46857[(15)] = inst_46762);

(statearr_46857[(18)] = inst_46763);

return statearr_46857;
})();
return cljs.core.async.ioc_alts_BANG_(state_46825__$1,(4),inst_46764);
} else {
if((state_val_46826 === (23))){
var inst_46809 = (state_46825[(2)]);
var state_46825__$1 = state_46825;
if(cljs.core.truth_(inst_46809)){
var statearr_46858_49214 = state_46825__$1;
(statearr_46858_49214[(1)] = (24));

} else {
var statearr_46859_49216 = state_46825__$1;
(statearr_46859_49216[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (19))){
var inst_46804 = (state_46825[(2)]);
var state_46825__$1 = state_46825;
var statearr_46860_49221 = state_46825__$1;
(statearr_46860_49221[(2)] = inst_46804);

(statearr_46860_49221[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (11))){
var inst_46772 = (state_46825[(14)]);
var inst_46787 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46772);
var state_46825__$1 = state_46825;
var statearr_46862_49224 = state_46825__$1;
(statearr_46862_49224[(2)] = inst_46787);

(statearr_46862_49224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (9))){
var inst_46762 = (state_46825[(15)]);
var inst_46772 = (state_46825[(14)]);
var inst_46795 = (state_46825[(19)]);
var inst_46795__$1 = (inst_46762.cljs$core$IFn$_invoke$arity$1 ? inst_46762.cljs$core$IFn$_invoke$arity$1(inst_46772) : inst_46762.call(null,inst_46772));
var state_46825__$1 = (function (){var statearr_46863 = state_46825;
(statearr_46863[(19)] = inst_46795__$1);

return statearr_46863;
})();
if(cljs.core.truth_(inst_46795__$1)){
var statearr_46864_49225 = state_46825__$1;
(statearr_46864_49225[(1)] = (14));

} else {
var statearr_46865_49226 = state_46825__$1;
(statearr_46865_49226[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (5))){
var inst_46776 = (state_46825[(13)]);
var state_46825__$1 = state_46825;
var statearr_46867_49227 = state_46825__$1;
(statearr_46867_49227[(2)] = inst_46776);

(statearr_46867_49227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (14))){
var inst_46795 = (state_46825[(19)]);
var state_46825__$1 = state_46825;
var statearr_46869_49228 = state_46825__$1;
(statearr_46869_49228[(2)] = inst_46795);

(statearr_46869_49228[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (26))){
var inst_46814 = (state_46825[(2)]);
var state_46825__$1 = state_46825;
var statearr_46871_49229 = state_46825__$1;
(statearr_46871_49229[(2)] = inst_46814);

(statearr_46871_49229[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (16))){
var inst_46806 = (state_46825[(2)]);
var state_46825__$1 = state_46825;
if(cljs.core.truth_(inst_46806)){
var statearr_46874_49230 = state_46825__$1;
(statearr_46874_49230[(1)] = (20));

} else {
var statearr_46875_49231 = state_46825__$1;
(statearr_46875_49231[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (10))){
var inst_46820 = (state_46825[(2)]);
var state_46825__$1 = state_46825;
var statearr_46877_49233 = state_46825__$1;
(statearr_46877_49233[(2)] = inst_46820);

(statearr_46877_49233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (18))){
var inst_46798 = (state_46825[(16)]);
var state_46825__$1 = state_46825;
var statearr_46878_49236 = state_46825__$1;
(statearr_46878_49236[(2)] = inst_46798);

(statearr_46878_49236[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46826 === (8))){
var inst_46771 = (state_46825[(7)]);
var inst_46784 = (inst_46771 == null);
var state_46825__$1 = state_46825;
if(cljs.core.truth_(inst_46784)){
var statearr_46879_49237 = state_46825__$1;
(statearr_46879_49237[(1)] = (11));

} else {
var statearr_46880_49238 = state_46825__$1;
(statearr_46880_49238[(1)] = (12));

}

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
var cljs$core$async$mix_$_state_machine__45093__auto__ = null;
var cljs$core$async$mix_$_state_machine__45093__auto____0 = (function (){
var statearr_46881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46881[(0)] = cljs$core$async$mix_$_state_machine__45093__auto__);

(statearr_46881[(1)] = (1));

return statearr_46881;
});
var cljs$core$async$mix_$_state_machine__45093__auto____1 = (function (state_46825){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_46825);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e46882){var ex__45096__auto__ = e46882;
var statearr_46884_49239 = state_46825;
(statearr_46884_49239[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_46825[(4)]))){
var statearr_46885_49240 = state_46825;
(statearr_46885_49240[(1)] = cljs.core.first((state_46825[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49241 = state_46825;
state_46825 = G__49241;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45093__auto__ = function(state_46825){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45093__auto____1.call(this,state_46825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45093__auto____0;
cljs$core$async$mix_$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45093__auto____1;
return cljs$core$async$mix_$_state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_46886 = f__45179__auto__();
(statearr_46886[(6)] = c__45178__auto___49171);

return statearr_46886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_49242 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_49242(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49247 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_49247(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49251 = (function() {
var G__49252 = null;
var G__49252__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__49252__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__49252 = function(p,v){
switch(arguments.length){
case 1:
return G__49252__1.call(this,p);
case 2:
return G__49252__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49252.cljs$core$IFn$_invoke$arity$1 = G__49252__1;
G__49252.cljs$core$IFn$_invoke$arity$2 = G__49252__2;
return G__49252;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46893 = arguments.length;
switch (G__46893) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49251(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49251(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46898 = arguments.length;
switch (G__46898) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46896_SHARP_){
if(cljs.core.truth_((p1__46896_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46896_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46896_SHARP_.call(null,topic)))){
return p1__46896_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46896_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46899 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46900){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46900 = meta46900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46901,meta46900__$1){
var self__ = this;
var _46901__$1 = this;
return (new cljs.core.async.t_cljs$core$async46899(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46900__$1));
}));

(cljs.core.async.t_cljs$core$async46899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46901){
var self__ = this;
var _46901__$1 = this;
return self__.meta46900;
}));

(cljs.core.async.t_cljs$core$async46899.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46899.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46899.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46899.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46899.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async46899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46900","meta46900",235037183,null)], null);
}));

(cljs.core.async.t_cljs$core$async46899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46899");

(cljs.core.async.t_cljs$core$async46899.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46899.
 */
cljs.core.async.__GT_t_cljs$core$async46899 = (function cljs$core$async$__GT_t_cljs$core$async46899(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46900){
return (new cljs.core.async.t_cljs$core$async46899(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46900));
});

}

return (new cljs.core.async.t_cljs$core$async46899(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45178__auto___49266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_47006){
var state_val_47008 = (state_47006[(1)]);
if((state_val_47008 === (7))){
var inst_46999 = (state_47006[(2)]);
var state_47006__$1 = state_47006;
var statearr_47013_49270 = state_47006__$1;
(statearr_47013_49270[(2)] = inst_46999);

(statearr_47013_49270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (20))){
var state_47006__$1 = state_47006;
var statearr_47015_49273 = state_47006__$1;
(statearr_47015_49273[(2)] = null);

(statearr_47015_49273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (1))){
var state_47006__$1 = state_47006;
var statearr_47021_49274 = state_47006__$1;
(statearr_47021_49274[(2)] = null);

(statearr_47021_49274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (24))){
var inst_46978 = (state_47006[(7)]);
var inst_46990 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46978);
var state_47006__$1 = state_47006;
var statearr_47024_49275 = state_47006__$1;
(statearr_47024_49275[(2)] = inst_46990);

(statearr_47024_49275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (4))){
var inst_46917 = (state_47006[(8)]);
var inst_46917__$1 = (state_47006[(2)]);
var inst_46918 = (inst_46917__$1 == null);
var state_47006__$1 = (function (){var statearr_47028 = state_47006;
(statearr_47028[(8)] = inst_46917__$1);

return statearr_47028;
})();
if(cljs.core.truth_(inst_46918)){
var statearr_47029_49276 = state_47006__$1;
(statearr_47029_49276[(1)] = (5));

} else {
var statearr_47030_49277 = state_47006__$1;
(statearr_47030_49277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (15))){
var inst_46971 = (state_47006[(2)]);
var state_47006__$1 = state_47006;
var statearr_47032_49278 = state_47006__$1;
(statearr_47032_49278[(2)] = inst_46971);

(statearr_47032_49278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (21))){
var inst_46996 = (state_47006[(2)]);
var state_47006__$1 = (function (){var statearr_47040 = state_47006;
(statearr_47040[(9)] = inst_46996);

return statearr_47040;
})();
var statearr_47043_49279 = state_47006__$1;
(statearr_47043_49279[(2)] = null);

(statearr_47043_49279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (13))){
var inst_46948 = (state_47006[(10)]);
var inst_46951 = cljs.core.chunked_seq_QMARK_(inst_46948);
var state_47006__$1 = state_47006;
if(inst_46951){
var statearr_47047_49280 = state_47006__$1;
(statearr_47047_49280[(1)] = (16));

} else {
var statearr_47048_49282 = state_47006__$1;
(statearr_47048_49282[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (22))){
var inst_46985 = (state_47006[(2)]);
var state_47006__$1 = state_47006;
if(cljs.core.truth_(inst_46985)){
var statearr_47050_49283 = state_47006__$1;
(statearr_47050_49283[(1)] = (23));

} else {
var statearr_47051_49284 = state_47006__$1;
(statearr_47051_49284[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (6))){
var inst_46978 = (state_47006[(7)]);
var inst_46980 = (state_47006[(11)]);
var inst_46917 = (state_47006[(8)]);
var inst_46978__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46917) : topic_fn.call(null,inst_46917));
var inst_46979 = cljs.core.deref(mults);
var inst_46980__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46979,inst_46978__$1);
var state_47006__$1 = (function (){var statearr_47057 = state_47006;
(statearr_47057[(7)] = inst_46978__$1);

(statearr_47057[(11)] = inst_46980__$1);

return statearr_47057;
})();
if(cljs.core.truth_(inst_46980__$1)){
var statearr_47058_49287 = state_47006__$1;
(statearr_47058_49287[(1)] = (19));

} else {
var statearr_47062_49288 = state_47006__$1;
(statearr_47062_49288[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (25))){
var inst_46993 = (state_47006[(2)]);
var state_47006__$1 = state_47006;
var statearr_47063_49289 = state_47006__$1;
(statearr_47063_49289[(2)] = inst_46993);

(statearr_47063_49289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (17))){
var inst_46948 = (state_47006[(10)]);
var inst_46959 = cljs.core.first(inst_46948);
var inst_46960 = cljs.core.async.muxch_STAR_(inst_46959);
var inst_46961 = cljs.core.async.close_BANG_(inst_46960);
var inst_46962 = cljs.core.next(inst_46948);
var inst_46928 = inst_46962;
var inst_46929 = null;
var inst_46930 = (0);
var inst_46931 = (0);
var state_47006__$1 = (function (){var statearr_47069 = state_47006;
(statearr_47069[(12)] = inst_46928);

(statearr_47069[(13)] = inst_46929);

(statearr_47069[(14)] = inst_46930);

(statearr_47069[(15)] = inst_46961);

(statearr_47069[(16)] = inst_46931);

return statearr_47069;
})();
var statearr_47071_49295 = state_47006__$1;
(statearr_47071_49295[(2)] = null);

(statearr_47071_49295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (3))){
var inst_47001 = (state_47006[(2)]);
var state_47006__$1 = state_47006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47006__$1,inst_47001);
} else {
if((state_val_47008 === (12))){
var inst_46973 = (state_47006[(2)]);
var state_47006__$1 = state_47006;
var statearr_47075_49298 = state_47006__$1;
(statearr_47075_49298[(2)] = inst_46973);

(statearr_47075_49298[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (2))){
var state_47006__$1 = state_47006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47006__$1,(4),ch);
} else {
if((state_val_47008 === (23))){
var state_47006__$1 = state_47006;
var statearr_47078_49300 = state_47006__$1;
(statearr_47078_49300[(2)] = null);

(statearr_47078_49300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (19))){
var inst_46980 = (state_47006[(11)]);
var inst_46917 = (state_47006[(8)]);
var inst_46983 = cljs.core.async.muxch_STAR_(inst_46980);
var state_47006__$1 = state_47006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47006__$1,(22),inst_46983,inst_46917);
} else {
if((state_val_47008 === (11))){
var inst_46928 = (state_47006[(12)]);
var inst_46948 = (state_47006[(10)]);
var inst_46948__$1 = cljs.core.seq(inst_46928);
var state_47006__$1 = (function (){var statearr_47083 = state_47006;
(statearr_47083[(10)] = inst_46948__$1);

return statearr_47083;
})();
if(inst_46948__$1){
var statearr_47086_49301 = state_47006__$1;
(statearr_47086_49301[(1)] = (13));

} else {
var statearr_47088_49302 = state_47006__$1;
(statearr_47088_49302[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (9))){
var inst_46975 = (state_47006[(2)]);
var state_47006__$1 = state_47006;
var statearr_47090_49304 = state_47006__$1;
(statearr_47090_49304[(2)] = inst_46975);

(statearr_47090_49304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (5))){
var inst_46925 = cljs.core.deref(mults);
var inst_46926 = cljs.core.vals(inst_46925);
var inst_46927 = cljs.core.seq(inst_46926);
var inst_46928 = inst_46927;
var inst_46929 = null;
var inst_46930 = (0);
var inst_46931 = (0);
var state_47006__$1 = (function (){var statearr_47094 = state_47006;
(statearr_47094[(12)] = inst_46928);

(statearr_47094[(13)] = inst_46929);

(statearr_47094[(14)] = inst_46930);

(statearr_47094[(16)] = inst_46931);

return statearr_47094;
})();
var statearr_47095_49317 = state_47006__$1;
(statearr_47095_49317[(2)] = null);

(statearr_47095_49317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (14))){
var state_47006__$1 = state_47006;
var statearr_47100_49320 = state_47006__$1;
(statearr_47100_49320[(2)] = null);

(statearr_47100_49320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (16))){
var inst_46948 = (state_47006[(10)]);
var inst_46953 = cljs.core.chunk_first(inst_46948);
var inst_46954 = cljs.core.chunk_rest(inst_46948);
var inst_46956 = cljs.core.count(inst_46953);
var inst_46928 = inst_46954;
var inst_46929 = inst_46953;
var inst_46930 = inst_46956;
var inst_46931 = (0);
var state_47006__$1 = (function (){var statearr_47105 = state_47006;
(statearr_47105[(12)] = inst_46928);

(statearr_47105[(13)] = inst_46929);

(statearr_47105[(14)] = inst_46930);

(statearr_47105[(16)] = inst_46931);

return statearr_47105;
})();
var statearr_47107_49325 = state_47006__$1;
(statearr_47107_49325[(2)] = null);

(statearr_47107_49325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (10))){
var inst_46928 = (state_47006[(12)]);
var inst_46929 = (state_47006[(13)]);
var inst_46930 = (state_47006[(14)]);
var inst_46931 = (state_47006[(16)]);
var inst_46939 = cljs.core._nth(inst_46929,inst_46931);
var inst_46940 = cljs.core.async.muxch_STAR_(inst_46939);
var inst_46941 = cljs.core.async.close_BANG_(inst_46940);
var inst_46942 = (inst_46931 + (1));
var tmp47097 = inst_46928;
var tmp47098 = inst_46929;
var tmp47099 = inst_46930;
var inst_46928__$1 = tmp47097;
var inst_46929__$1 = tmp47098;
var inst_46930__$1 = tmp47099;
var inst_46931__$1 = inst_46942;
var state_47006__$1 = (function (){var statearr_47115 = state_47006;
(statearr_47115[(12)] = inst_46928__$1);

(statearr_47115[(17)] = inst_46941);

(statearr_47115[(13)] = inst_46929__$1);

(statearr_47115[(14)] = inst_46930__$1);

(statearr_47115[(16)] = inst_46931__$1);

return statearr_47115;
})();
var statearr_47116_49326 = state_47006__$1;
(statearr_47116_49326[(2)] = null);

(statearr_47116_49326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (18))){
var inst_46966 = (state_47006[(2)]);
var state_47006__$1 = state_47006;
var statearr_47121_49327 = state_47006__$1;
(statearr_47121_49327[(2)] = inst_46966);

(statearr_47121_49327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47008 === (8))){
var inst_46930 = (state_47006[(14)]);
var inst_46931 = (state_47006[(16)]);
var inst_46936 = (inst_46931 < inst_46930);
var inst_46937 = inst_46936;
var state_47006__$1 = state_47006;
if(cljs.core.truth_(inst_46937)){
var statearr_47123_49329 = state_47006__$1;
(statearr_47123_49329[(1)] = (10));

} else {
var statearr_47124_49330 = state_47006__$1;
(statearr_47124_49330[(1)] = (11));

}

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
var cljs$core$async$state_machine__45093__auto__ = null;
var cljs$core$async$state_machine__45093__auto____0 = (function (){
var statearr_47129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47129[(0)] = cljs$core$async$state_machine__45093__auto__);

(statearr_47129[(1)] = (1));

return statearr_47129;
});
var cljs$core$async$state_machine__45093__auto____1 = (function (state_47006){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_47006);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e47134){var ex__45096__auto__ = e47134;
var statearr_47136_49333 = state_47006;
(statearr_47136_49333[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_47006[(4)]))){
var statearr_47138_49334 = state_47006;
(statearr_47138_49334[(1)] = cljs.core.first((state_47006[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49336 = state_47006;
state_47006 = G__49336;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$state_machine__45093__auto__ = function(state_47006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45093__auto____1.call(this,state_47006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45093__auto____0;
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45093__auto____1;
return cljs$core$async$state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_47143 = f__45179__auto__();
(statearr_47143[(6)] = c__45178__auto___49266);

return statearr_47143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47149 = arguments.length;
switch (G__47149) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47163 = arguments.length;
switch (G__47163) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47177 = arguments.length;
switch (G__47177) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__45178__auto___49345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_47246){
var state_val_47247 = (state_47246[(1)]);
if((state_val_47247 === (7))){
var state_47246__$1 = state_47246;
var statearr_47252_49348 = state_47246__$1;
(statearr_47252_49348[(2)] = null);

(statearr_47252_49348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47247 === (1))){
var state_47246__$1 = state_47246;
var statearr_47256_49349 = state_47246__$1;
(statearr_47256_49349[(2)] = null);

(statearr_47256_49349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47247 === (4))){
var inst_47194 = (state_47246[(7)]);
var inst_47193 = (state_47246[(8)]);
var inst_47197 = (inst_47194 < inst_47193);
var state_47246__$1 = state_47246;
if(cljs.core.truth_(inst_47197)){
var statearr_47258_49350 = state_47246__$1;
(statearr_47258_49350[(1)] = (6));

} else {
var statearr_47261_49351 = state_47246__$1;
(statearr_47261_49351[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47247 === (15))){
var inst_47230 = (state_47246[(9)]);
var inst_47236 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47230);
var state_47246__$1 = state_47246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47246__$1,(17),out,inst_47236);
} else {
if((state_val_47247 === (13))){
var inst_47230 = (state_47246[(9)]);
var inst_47230__$1 = (state_47246[(2)]);
var inst_47232 = cljs.core.some(cljs.core.nil_QMARK_,inst_47230__$1);
var state_47246__$1 = (function (){var statearr_47267 = state_47246;
(statearr_47267[(9)] = inst_47230__$1);

return statearr_47267;
})();
if(cljs.core.truth_(inst_47232)){
var statearr_47270_49353 = state_47246__$1;
(statearr_47270_49353[(1)] = (14));

} else {
var statearr_47271_49354 = state_47246__$1;
(statearr_47271_49354[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47247 === (6))){
var state_47246__$1 = state_47246;
var statearr_47273_49356 = state_47246__$1;
(statearr_47273_49356[(2)] = null);

(statearr_47273_49356[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47247 === (17))){
var inst_47238 = (state_47246[(2)]);
var state_47246__$1 = (function (){var statearr_47290 = state_47246;
(statearr_47290[(10)] = inst_47238);

return statearr_47290;
})();
var statearr_47291_49358 = state_47246__$1;
(statearr_47291_49358[(2)] = null);

(statearr_47291_49358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47247 === (3))){
var inst_47243 = (state_47246[(2)]);
var state_47246__$1 = state_47246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47246__$1,inst_47243);
} else {
if((state_val_47247 === (12))){
var _ = (function (){var statearr_47292 = state_47246;
(statearr_47292[(4)] = cljs.core.rest((state_47246[(4)])));

return statearr_47292;
})();
var state_47246__$1 = state_47246;
var ex47289 = (state_47246__$1[(2)]);
var statearr_47301_49360 = state_47246__$1;
(statearr_47301_49360[(5)] = ex47289);


if((ex47289 instanceof Object)){
var statearr_47302_49361 = state_47246__$1;
(statearr_47302_49361[(1)] = (11));

(statearr_47302_49361[(5)] = null);

} else {
throw ex47289;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47247 === (2))){
var inst_47192 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47193 = cnt;
var inst_47194 = (0);
var state_47246__$1 = (function (){var statearr_47307 = state_47246;
(statearr_47307[(7)] = inst_47194);

(statearr_47307[(11)] = inst_47192);

(statearr_47307[(8)] = inst_47193);

return statearr_47307;
})();
var statearr_47308_49363 = state_47246__$1;
(statearr_47308_49363[(2)] = null);

(statearr_47308_49363[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47247 === (11))){
var inst_47206 = (state_47246[(2)]);
var inst_47207 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47246__$1 = (function (){var statearr_47312 = state_47246;
(statearr_47312[(12)] = inst_47206);

return statearr_47312;
})();
var statearr_47313_49371 = state_47246__$1;
(statearr_47313_49371[(2)] = inst_47207);

(statearr_47313_49371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47247 === (9))){
var inst_47194 = (state_47246[(7)]);
var _ = (function (){var statearr_47315 = state_47246;
(statearr_47315[(4)] = cljs.core.cons((12),(state_47246[(4)])));

return statearr_47315;
})();
var inst_47214 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47194) : chs__$1.call(null,inst_47194));
var inst_47215 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47194) : done.call(null,inst_47194));
var inst_47216 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47214,inst_47215);
var ___$1 = (function (){var statearr_47317 = state_47246;
(statearr_47317[(4)] = cljs.core.rest((state_47246[(4)])));

return statearr_47317;
})();
var state_47246__$1 = state_47246;
var statearr_47321_49372 = state_47246__$1;
(statearr_47321_49372[(2)] = inst_47216);

(statearr_47321_49372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47247 === (5))){
var inst_47226 = (state_47246[(2)]);
var state_47246__$1 = (function (){var statearr_47323 = state_47246;
(statearr_47323[(13)] = inst_47226);

return statearr_47323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47246__$1,(13),dchan);
} else {
if((state_val_47247 === (14))){
var inst_47234 = cljs.core.async.close_BANG_(out);
var state_47246__$1 = state_47246;
var statearr_47324_49373 = state_47246__$1;
(statearr_47324_49373[(2)] = inst_47234);

(statearr_47324_49373[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47247 === (16))){
var inst_47241 = (state_47246[(2)]);
var state_47246__$1 = state_47246;
var statearr_47325_49374 = state_47246__$1;
(statearr_47325_49374[(2)] = inst_47241);

(statearr_47325_49374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47247 === (10))){
var inst_47194 = (state_47246[(7)]);
var inst_47219 = (state_47246[(2)]);
var inst_47220 = (inst_47194 + (1));
var inst_47194__$1 = inst_47220;
var state_47246__$1 = (function (){var statearr_47329 = state_47246;
(statearr_47329[(7)] = inst_47194__$1);

(statearr_47329[(14)] = inst_47219);

return statearr_47329;
})();
var statearr_47330_49381 = state_47246__$1;
(statearr_47330_49381[(2)] = null);

(statearr_47330_49381[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47247 === (8))){
var inst_47224 = (state_47246[(2)]);
var state_47246__$1 = state_47246;
var statearr_47332_49382 = state_47246__$1;
(statearr_47332_49382[(2)] = inst_47224);

(statearr_47332_49382[(1)] = (5));


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
}
});
return (function() {
var cljs$core$async$state_machine__45093__auto__ = null;
var cljs$core$async$state_machine__45093__auto____0 = (function (){
var statearr_47333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47333[(0)] = cljs$core$async$state_machine__45093__auto__);

(statearr_47333[(1)] = (1));

return statearr_47333;
});
var cljs$core$async$state_machine__45093__auto____1 = (function (state_47246){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_47246);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e47334){var ex__45096__auto__ = e47334;
var statearr_47335_49385 = state_47246;
(statearr_47335_49385[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_47246[(4)]))){
var statearr_47336_49387 = state_47246;
(statearr_47336_49387[(1)] = cljs.core.first((state_47246[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49391 = state_47246;
state_47246 = G__49391;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$state_machine__45093__auto__ = function(state_47246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45093__auto____1.call(this,state_47246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45093__auto____0;
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45093__auto____1;
return cljs$core$async$state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_47339 = f__45179__auto__();
(statearr_47339[(6)] = c__45178__auto___49345);

return statearr_47339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47343 = arguments.length;
switch (G__47343) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45178__auto___49395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_47384){
var state_val_47385 = (state_47384[(1)]);
if((state_val_47385 === (7))){
var inst_47364 = (state_47384[(7)]);
var inst_47363 = (state_47384[(8)]);
var inst_47363__$1 = (state_47384[(2)]);
var inst_47364__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47363__$1,(0),null);
var inst_47365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47363__$1,(1),null);
var inst_47366 = (inst_47364__$1 == null);
var state_47384__$1 = (function (){var statearr_47400 = state_47384;
(statearr_47400[(7)] = inst_47364__$1);

(statearr_47400[(9)] = inst_47365);

(statearr_47400[(8)] = inst_47363__$1);

return statearr_47400;
})();
if(cljs.core.truth_(inst_47366)){
var statearr_47402_49396 = state_47384__$1;
(statearr_47402_49396[(1)] = (8));

} else {
var statearr_47403_49397 = state_47384__$1;
(statearr_47403_49397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (1))){
var inst_47352 = cljs.core.vec(chs);
var inst_47353 = inst_47352;
var state_47384__$1 = (function (){var statearr_47404 = state_47384;
(statearr_47404[(10)] = inst_47353);

return statearr_47404;
})();
var statearr_47405_49400 = state_47384__$1;
(statearr_47405_49400[(2)] = null);

(statearr_47405_49400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (4))){
var inst_47353 = (state_47384[(10)]);
var state_47384__$1 = state_47384;
return cljs.core.async.ioc_alts_BANG_(state_47384__$1,(7),inst_47353);
} else {
if((state_val_47385 === (6))){
var inst_47380 = (state_47384[(2)]);
var state_47384__$1 = state_47384;
var statearr_47410_49401 = state_47384__$1;
(statearr_47410_49401[(2)] = inst_47380);

(statearr_47410_49401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (3))){
var inst_47382 = (state_47384[(2)]);
var state_47384__$1 = state_47384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47384__$1,inst_47382);
} else {
if((state_val_47385 === (2))){
var inst_47353 = (state_47384[(10)]);
var inst_47356 = cljs.core.count(inst_47353);
var inst_47357 = (inst_47356 > (0));
var state_47384__$1 = state_47384;
if(cljs.core.truth_(inst_47357)){
var statearr_47413_49402 = state_47384__$1;
(statearr_47413_49402[(1)] = (4));

} else {
var statearr_47414_49404 = state_47384__$1;
(statearr_47414_49404[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (11))){
var inst_47353 = (state_47384[(10)]);
var inst_47373 = (state_47384[(2)]);
var tmp47411 = inst_47353;
var inst_47353__$1 = tmp47411;
var state_47384__$1 = (function (){var statearr_47415 = state_47384;
(statearr_47415[(10)] = inst_47353__$1);

(statearr_47415[(11)] = inst_47373);

return statearr_47415;
})();
var statearr_47416_49407 = state_47384__$1;
(statearr_47416_49407[(2)] = null);

(statearr_47416_49407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (9))){
var inst_47364 = (state_47384[(7)]);
var state_47384__$1 = state_47384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47384__$1,(11),out,inst_47364);
} else {
if((state_val_47385 === (5))){
var inst_47378 = cljs.core.async.close_BANG_(out);
var state_47384__$1 = state_47384;
var statearr_47426_49409 = state_47384__$1;
(statearr_47426_49409[(2)] = inst_47378);

(statearr_47426_49409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (10))){
var inst_47376 = (state_47384[(2)]);
var state_47384__$1 = state_47384;
var statearr_47430_49410 = state_47384__$1;
(statearr_47430_49410[(2)] = inst_47376);

(statearr_47430_49410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47385 === (8))){
var inst_47364 = (state_47384[(7)]);
var inst_47365 = (state_47384[(9)]);
var inst_47353 = (state_47384[(10)]);
var inst_47363 = (state_47384[(8)]);
var inst_47368 = (function (){var cs = inst_47353;
var vec__47359 = inst_47363;
var v = inst_47364;
var c = inst_47365;
return (function (p1__47341_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47341_SHARP_);
});
})();
var inst_47369 = cljs.core.filterv(inst_47368,inst_47353);
var inst_47353__$1 = inst_47369;
var state_47384__$1 = (function (){var statearr_47432 = state_47384;
(statearr_47432[(10)] = inst_47353__$1);

return statearr_47432;
})();
var statearr_47436_49413 = state_47384__$1;
(statearr_47436_49413[(2)] = null);

(statearr_47436_49413[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__45093__auto__ = null;
var cljs$core$async$state_machine__45093__auto____0 = (function (){
var statearr_47438 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47438[(0)] = cljs$core$async$state_machine__45093__auto__);

(statearr_47438[(1)] = (1));

return statearr_47438;
});
var cljs$core$async$state_machine__45093__auto____1 = (function (state_47384){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_47384);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e47443){var ex__45096__auto__ = e47443;
var statearr_47447_49421 = state_47384;
(statearr_47447_49421[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_47384[(4)]))){
var statearr_47449_49422 = state_47384;
(statearr_47449_49422[(1)] = cljs.core.first((state_47384[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49423 = state_47384;
state_47384 = G__49423;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$state_machine__45093__auto__ = function(state_47384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45093__auto____1.call(this,state_47384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45093__auto____0;
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45093__auto____1;
return cljs$core$async$state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_47453 = f__45179__auto__();
(statearr_47453[(6)] = c__45178__auto___49395);

return statearr_47453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47460 = arguments.length;
switch (G__47460) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45178__auto___49427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_47498){
var state_val_47499 = (state_47498[(1)]);
if((state_val_47499 === (7))){
var inst_47477 = (state_47498[(7)]);
var inst_47477__$1 = (state_47498[(2)]);
var inst_47478 = (inst_47477__$1 == null);
var inst_47479 = cljs.core.not(inst_47478);
var state_47498__$1 = (function (){var statearr_47504 = state_47498;
(statearr_47504[(7)] = inst_47477__$1);

return statearr_47504;
})();
if(inst_47479){
var statearr_47506_49430 = state_47498__$1;
(statearr_47506_49430[(1)] = (8));

} else {
var statearr_47507_49431 = state_47498__$1;
(statearr_47507_49431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (1))){
var inst_47468 = (0);
var state_47498__$1 = (function (){var statearr_47508 = state_47498;
(statearr_47508[(8)] = inst_47468);

return statearr_47508;
})();
var statearr_47509_49433 = state_47498__$1;
(statearr_47509_49433[(2)] = null);

(statearr_47509_49433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (4))){
var state_47498__$1 = state_47498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47498__$1,(7),ch);
} else {
if((state_val_47499 === (6))){
var inst_47490 = (state_47498[(2)]);
var state_47498__$1 = state_47498;
var statearr_47510_49434 = state_47498__$1;
(statearr_47510_49434[(2)] = inst_47490);

(statearr_47510_49434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (3))){
var inst_47492 = (state_47498[(2)]);
var inst_47493 = cljs.core.async.close_BANG_(out);
var state_47498__$1 = (function (){var statearr_47511 = state_47498;
(statearr_47511[(9)] = inst_47492);

return statearr_47511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47498__$1,inst_47493);
} else {
if((state_val_47499 === (2))){
var inst_47468 = (state_47498[(8)]);
var inst_47471 = (inst_47468 < n);
var state_47498__$1 = state_47498;
if(cljs.core.truth_(inst_47471)){
var statearr_47512_49436 = state_47498__$1;
(statearr_47512_49436[(1)] = (4));

} else {
var statearr_47513_49437 = state_47498__$1;
(statearr_47513_49437[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (11))){
var inst_47468 = (state_47498[(8)]);
var inst_47482 = (state_47498[(2)]);
var inst_47483 = (inst_47468 + (1));
var inst_47468__$1 = inst_47483;
var state_47498__$1 = (function (){var statearr_47518 = state_47498;
(statearr_47518[(8)] = inst_47468__$1);

(statearr_47518[(10)] = inst_47482);

return statearr_47518;
})();
var statearr_47519_49439 = state_47498__$1;
(statearr_47519_49439[(2)] = null);

(statearr_47519_49439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (9))){
var state_47498__$1 = state_47498;
var statearr_47520_49440 = state_47498__$1;
(statearr_47520_49440[(2)] = null);

(statearr_47520_49440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (5))){
var state_47498__$1 = state_47498;
var statearr_47521_49444 = state_47498__$1;
(statearr_47521_49444[(2)] = null);

(statearr_47521_49444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (10))){
var inst_47487 = (state_47498[(2)]);
var state_47498__$1 = state_47498;
var statearr_47523_49445 = state_47498__$1;
(statearr_47523_49445[(2)] = inst_47487);

(statearr_47523_49445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47499 === (8))){
var inst_47477 = (state_47498[(7)]);
var state_47498__$1 = state_47498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47498__$1,(11),out,inst_47477);
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
});
return (function() {
var cljs$core$async$state_machine__45093__auto__ = null;
var cljs$core$async$state_machine__45093__auto____0 = (function (){
var statearr_47524 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47524[(0)] = cljs$core$async$state_machine__45093__auto__);

(statearr_47524[(1)] = (1));

return statearr_47524;
});
var cljs$core$async$state_machine__45093__auto____1 = (function (state_47498){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_47498);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e47525){var ex__45096__auto__ = e47525;
var statearr_47526_49448 = state_47498;
(statearr_47526_49448[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_47498[(4)]))){
var statearr_47527_49449 = state_47498;
(statearr_47527_49449[(1)] = cljs.core.first((state_47498[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49450 = state_47498;
state_47498 = G__49450;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$state_machine__45093__auto__ = function(state_47498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45093__auto____1.call(this,state_47498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45093__auto____0;
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45093__auto____1;
return cljs$core$async$state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_47528 = f__45179__auto__();
(statearr_47528[(6)] = c__45178__auto___49427);

return statearr_47528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47532 = (function (f,ch,meta47533){
this.f = f;
this.ch = ch;
this.meta47533 = meta47533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47534,meta47533__$1){
var self__ = this;
var _47534__$1 = this;
return (new cljs.core.async.t_cljs$core$async47532(self__.f,self__.ch,meta47533__$1));
}));

(cljs.core.async.t_cljs$core$async47532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47534){
var self__ = this;
var _47534__$1 = this;
return self__.meta47533;
}));

(cljs.core.async.t_cljs$core$async47532.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47532.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47532.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47532.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47532.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47535 = (function (f,ch,meta47533,_,fn1,meta47536){
this.f = f;
this.ch = ch;
this.meta47533 = meta47533;
this._ = _;
this.fn1 = fn1;
this.meta47536 = meta47536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47537,meta47536__$1){
var self__ = this;
var _47537__$1 = this;
return (new cljs.core.async.t_cljs$core$async47535(self__.f,self__.ch,self__.meta47533,self__._,self__.fn1,meta47536__$1));
}));

(cljs.core.async.t_cljs$core$async47535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47537){
var self__ = this;
var _47537__$1 = this;
return self__.meta47536;
}));

(cljs.core.async.t_cljs$core$async47535.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47530_SHARP_){
var G__47538 = (((p1__47530_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47530_SHARP_) : self__.f.call(null,p1__47530_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47538) : f1.call(null,G__47538));
});
}));

(cljs.core.async.t_cljs$core$async47535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47533","meta47533",1054322913,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47532","cljs.core.async/t_cljs$core$async47532",-532576277,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47536","meta47536",469876058,null)], null);
}));

(cljs.core.async.t_cljs$core$async47535.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47535");

(cljs.core.async.t_cljs$core$async47535.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47535");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47535.
 */
cljs.core.async.__GT_t_cljs$core$async47535 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47535(f__$1,ch__$1,meta47533__$1,___$2,fn1__$1,meta47536){
return (new cljs.core.async.t_cljs$core$async47535(f__$1,ch__$1,meta47533__$1,___$2,fn1__$1,meta47536));
});

}

return (new cljs.core.async.t_cljs$core$async47535(self__.f,self__.ch,self__.meta47533,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47539 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47539) : self__.f.call(null,G__47539));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47532.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47532.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47533","meta47533",1054322913,null)], null);
}));

(cljs.core.async.t_cljs$core$async47532.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47532");

(cljs.core.async.t_cljs$core$async47532.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47532");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47532.
 */
cljs.core.async.__GT_t_cljs$core$async47532 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47532(f__$1,ch__$1,meta47533){
return (new cljs.core.async.t_cljs$core$async47532(f__$1,ch__$1,meta47533));
});

}

return (new cljs.core.async.t_cljs$core$async47532(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47542 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47542 = (function (f,ch,meta47543){
this.f = f;
this.ch = ch;
this.meta47543 = meta47543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47544,meta47543__$1){
var self__ = this;
var _47544__$1 = this;
return (new cljs.core.async.t_cljs$core$async47542(self__.f,self__.ch,meta47543__$1));
}));

(cljs.core.async.t_cljs$core$async47542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47544){
var self__ = this;
var _47544__$1 = this;
return self__.meta47543;
}));

(cljs.core.async.t_cljs$core$async47542.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47542.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47542.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47542.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47542.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47542.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47543","meta47543",844214246,null)], null);
}));

(cljs.core.async.t_cljs$core$async47542.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47542");

(cljs.core.async.t_cljs$core$async47542.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47542");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47542.
 */
cljs.core.async.__GT_t_cljs$core$async47542 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47542(f__$1,ch__$1,meta47543){
return (new cljs.core.async.t_cljs$core$async47542(f__$1,ch__$1,meta47543));
});

}

return (new cljs.core.async.t_cljs$core$async47542(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47549 = (function (p,ch,meta47550){
this.p = p;
this.ch = ch;
this.meta47550 = meta47550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47551,meta47550__$1){
var self__ = this;
var _47551__$1 = this;
return (new cljs.core.async.t_cljs$core$async47549(self__.p,self__.ch,meta47550__$1));
}));

(cljs.core.async.t_cljs$core$async47549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47551){
var self__ = this;
var _47551__$1 = this;
return self__.meta47550;
}));

(cljs.core.async.t_cljs$core$async47549.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47549.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47549.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47549.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47549.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47549.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47549.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47550","meta47550",-1862839037,null)], null);
}));

(cljs.core.async.t_cljs$core$async47549.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47549");

(cljs.core.async.t_cljs$core$async47549.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47549");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47549.
 */
cljs.core.async.__GT_t_cljs$core$async47549 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47549(p__$1,ch__$1,meta47550){
return (new cljs.core.async.t_cljs$core$async47549(p__$1,ch__$1,meta47550));
});

}

return (new cljs.core.async.t_cljs$core$async47549(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47554 = arguments.length;
switch (G__47554) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45178__auto___49482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_47578){
var state_val_47579 = (state_47578[(1)]);
if((state_val_47579 === (7))){
var inst_47574 = (state_47578[(2)]);
var state_47578__$1 = state_47578;
var statearr_47584_49487 = state_47578__$1;
(statearr_47584_49487[(2)] = inst_47574);

(statearr_47584_49487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47579 === (1))){
var state_47578__$1 = state_47578;
var statearr_47586_49488 = state_47578__$1;
(statearr_47586_49488[(2)] = null);

(statearr_47586_49488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47579 === (4))){
var inst_47559 = (state_47578[(7)]);
var inst_47559__$1 = (state_47578[(2)]);
var inst_47560 = (inst_47559__$1 == null);
var state_47578__$1 = (function (){var statearr_47588 = state_47578;
(statearr_47588[(7)] = inst_47559__$1);

return statearr_47588;
})();
if(cljs.core.truth_(inst_47560)){
var statearr_47589_49491 = state_47578__$1;
(statearr_47589_49491[(1)] = (5));

} else {
var statearr_47591_49492 = state_47578__$1;
(statearr_47591_49492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47579 === (6))){
var inst_47559 = (state_47578[(7)]);
var inst_47565 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47559) : p.call(null,inst_47559));
var state_47578__$1 = state_47578;
if(cljs.core.truth_(inst_47565)){
var statearr_47592_49493 = state_47578__$1;
(statearr_47592_49493[(1)] = (8));

} else {
var statearr_47596_49494 = state_47578__$1;
(statearr_47596_49494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47579 === (3))){
var inst_47576 = (state_47578[(2)]);
var state_47578__$1 = state_47578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47578__$1,inst_47576);
} else {
if((state_val_47579 === (2))){
var state_47578__$1 = state_47578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47578__$1,(4),ch);
} else {
if((state_val_47579 === (11))){
var inst_47568 = (state_47578[(2)]);
var state_47578__$1 = state_47578;
var statearr_47599_49496 = state_47578__$1;
(statearr_47599_49496[(2)] = inst_47568);

(statearr_47599_49496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47579 === (9))){
var state_47578__$1 = state_47578;
var statearr_47600_49498 = state_47578__$1;
(statearr_47600_49498[(2)] = null);

(statearr_47600_49498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47579 === (5))){
var inst_47563 = cljs.core.async.close_BANG_(out);
var state_47578__$1 = state_47578;
var statearr_47603_49500 = state_47578__$1;
(statearr_47603_49500[(2)] = inst_47563);

(statearr_47603_49500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47579 === (10))){
var inst_47571 = (state_47578[(2)]);
var state_47578__$1 = (function (){var statearr_47604 = state_47578;
(statearr_47604[(8)] = inst_47571);

return statearr_47604;
})();
var statearr_47605_49501 = state_47578__$1;
(statearr_47605_49501[(2)] = null);

(statearr_47605_49501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47579 === (8))){
var inst_47559 = (state_47578[(7)]);
var state_47578__$1 = state_47578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47578__$1,(11),out,inst_47559);
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
});
return (function() {
var cljs$core$async$state_machine__45093__auto__ = null;
var cljs$core$async$state_machine__45093__auto____0 = (function (){
var statearr_47607 = [null,null,null,null,null,null,null,null,null];
(statearr_47607[(0)] = cljs$core$async$state_machine__45093__auto__);

(statearr_47607[(1)] = (1));

return statearr_47607;
});
var cljs$core$async$state_machine__45093__auto____1 = (function (state_47578){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_47578);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e47608){var ex__45096__auto__ = e47608;
var statearr_47609_49503 = state_47578;
(statearr_47609_49503[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_47578[(4)]))){
var statearr_47613_49504 = state_47578;
(statearr_47613_49504[(1)] = cljs.core.first((state_47578[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49505 = state_47578;
state_47578 = G__49505;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$state_machine__45093__auto__ = function(state_47578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45093__auto____1.call(this,state_47578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45093__auto____0;
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45093__auto____1;
return cljs$core$async$state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_47614 = f__45179__auto__();
(statearr_47614[(6)] = c__45178__auto___49482);

return statearr_47614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47616 = arguments.length;
switch (G__47616) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45178__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_47710){
var state_val_47711 = (state_47710[(1)]);
if((state_val_47711 === (7))){
var inst_47703 = (state_47710[(2)]);
var state_47710__$1 = state_47710;
var statearr_47715_49511 = state_47710__$1;
(statearr_47715_49511[(2)] = inst_47703);

(statearr_47715_49511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (20))){
var inst_47666 = (state_47710[(7)]);
var inst_47681 = (state_47710[(2)]);
var inst_47685 = cljs.core.next(inst_47666);
var inst_47652 = inst_47685;
var inst_47653 = null;
var inst_47654 = (0);
var inst_47655 = (0);
var state_47710__$1 = (function (){var statearr_47716 = state_47710;
(statearr_47716[(8)] = inst_47655);

(statearr_47716[(9)] = inst_47652);

(statearr_47716[(10)] = inst_47654);

(statearr_47716[(11)] = inst_47681);

(statearr_47716[(12)] = inst_47653);

return statearr_47716;
})();
var statearr_47717_49519 = state_47710__$1;
(statearr_47717_49519[(2)] = null);

(statearr_47717_49519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (1))){
var state_47710__$1 = state_47710;
var statearr_47718_49522 = state_47710__$1;
(statearr_47718_49522[(2)] = null);

(statearr_47718_49522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (4))){
var inst_47635 = (state_47710[(13)]);
var inst_47635__$1 = (state_47710[(2)]);
var inst_47636 = (inst_47635__$1 == null);
var state_47710__$1 = (function (){var statearr_47719 = state_47710;
(statearr_47719[(13)] = inst_47635__$1);

return statearr_47719;
})();
if(cljs.core.truth_(inst_47636)){
var statearr_47720_49531 = state_47710__$1;
(statearr_47720_49531[(1)] = (5));

} else {
var statearr_47721_49533 = state_47710__$1;
(statearr_47721_49533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (15))){
var state_47710__$1 = state_47710;
var statearr_47725_49534 = state_47710__$1;
(statearr_47725_49534[(2)] = null);

(statearr_47725_49534[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (21))){
var state_47710__$1 = state_47710;
var statearr_47726_49535 = state_47710__$1;
(statearr_47726_49535[(2)] = null);

(statearr_47726_49535[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (13))){
var inst_47655 = (state_47710[(8)]);
var inst_47652 = (state_47710[(9)]);
var inst_47654 = (state_47710[(10)]);
var inst_47653 = (state_47710[(12)]);
var inst_47662 = (state_47710[(2)]);
var inst_47663 = (inst_47655 + (1));
var tmp47722 = inst_47652;
var tmp47723 = inst_47654;
var tmp47724 = inst_47653;
var inst_47652__$1 = tmp47722;
var inst_47653__$1 = tmp47724;
var inst_47654__$1 = tmp47723;
var inst_47655__$1 = inst_47663;
var state_47710__$1 = (function (){var statearr_47731 = state_47710;
(statearr_47731[(8)] = inst_47655__$1);

(statearr_47731[(9)] = inst_47652__$1);

(statearr_47731[(10)] = inst_47654__$1);

(statearr_47731[(14)] = inst_47662);

(statearr_47731[(12)] = inst_47653__$1);

return statearr_47731;
})();
var statearr_47732_49537 = state_47710__$1;
(statearr_47732_49537[(2)] = null);

(statearr_47732_49537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (22))){
var state_47710__$1 = state_47710;
var statearr_47733_49538 = state_47710__$1;
(statearr_47733_49538[(2)] = null);

(statearr_47733_49538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (6))){
var inst_47635 = (state_47710[(13)]);
var inst_47650 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47635) : f.call(null,inst_47635));
var inst_47651 = cljs.core.seq(inst_47650);
var inst_47652 = inst_47651;
var inst_47653 = null;
var inst_47654 = (0);
var inst_47655 = (0);
var state_47710__$1 = (function (){var statearr_47734 = state_47710;
(statearr_47734[(8)] = inst_47655);

(statearr_47734[(9)] = inst_47652);

(statearr_47734[(10)] = inst_47654);

(statearr_47734[(12)] = inst_47653);

return statearr_47734;
})();
var statearr_47735_49543 = state_47710__$1;
(statearr_47735_49543[(2)] = null);

(statearr_47735_49543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (17))){
var inst_47666 = (state_47710[(7)]);
var inst_47670 = cljs.core.chunk_first(inst_47666);
var inst_47671 = cljs.core.chunk_rest(inst_47666);
var inst_47672 = cljs.core.count(inst_47670);
var inst_47652 = inst_47671;
var inst_47653 = inst_47670;
var inst_47654 = inst_47672;
var inst_47655 = (0);
var state_47710__$1 = (function (){var statearr_47736 = state_47710;
(statearr_47736[(8)] = inst_47655);

(statearr_47736[(9)] = inst_47652);

(statearr_47736[(10)] = inst_47654);

(statearr_47736[(12)] = inst_47653);

return statearr_47736;
})();
var statearr_47738_49550 = state_47710__$1;
(statearr_47738_49550[(2)] = null);

(statearr_47738_49550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (3))){
var inst_47705 = (state_47710[(2)]);
var state_47710__$1 = state_47710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47710__$1,inst_47705);
} else {
if((state_val_47711 === (12))){
var inst_47693 = (state_47710[(2)]);
var state_47710__$1 = state_47710;
var statearr_47745_49551 = state_47710__$1;
(statearr_47745_49551[(2)] = inst_47693);

(statearr_47745_49551[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (2))){
var state_47710__$1 = state_47710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47710__$1,(4),in$);
} else {
if((state_val_47711 === (23))){
var inst_47701 = (state_47710[(2)]);
var state_47710__$1 = state_47710;
var statearr_47751_49552 = state_47710__$1;
(statearr_47751_49552[(2)] = inst_47701);

(statearr_47751_49552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (19))){
var inst_47688 = (state_47710[(2)]);
var state_47710__$1 = state_47710;
var statearr_47754_49554 = state_47710__$1;
(statearr_47754_49554[(2)] = inst_47688);

(statearr_47754_49554[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (11))){
var inst_47666 = (state_47710[(7)]);
var inst_47652 = (state_47710[(9)]);
var inst_47666__$1 = cljs.core.seq(inst_47652);
var state_47710__$1 = (function (){var statearr_47757 = state_47710;
(statearr_47757[(7)] = inst_47666__$1);

return statearr_47757;
})();
if(inst_47666__$1){
var statearr_47758_49561 = state_47710__$1;
(statearr_47758_49561[(1)] = (14));

} else {
var statearr_47759_49562 = state_47710__$1;
(statearr_47759_49562[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (9))){
var inst_47695 = (state_47710[(2)]);
var inst_47696 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47710__$1 = (function (){var statearr_47761 = state_47710;
(statearr_47761[(15)] = inst_47695);

return statearr_47761;
})();
if(cljs.core.truth_(inst_47696)){
var statearr_47763_49565 = state_47710__$1;
(statearr_47763_49565[(1)] = (21));

} else {
var statearr_47764_49566 = state_47710__$1;
(statearr_47764_49566[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (5))){
var inst_47638 = cljs.core.async.close_BANG_(out);
var state_47710__$1 = state_47710;
var statearr_47768_49568 = state_47710__$1;
(statearr_47768_49568[(2)] = inst_47638);

(statearr_47768_49568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (14))){
var inst_47666 = (state_47710[(7)]);
var inst_47668 = cljs.core.chunked_seq_QMARK_(inst_47666);
var state_47710__$1 = state_47710;
if(inst_47668){
var statearr_47770_49569 = state_47710__$1;
(statearr_47770_49569[(1)] = (17));

} else {
var statearr_47771_49570 = state_47710__$1;
(statearr_47771_49570[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (16))){
var inst_47691 = (state_47710[(2)]);
var state_47710__$1 = state_47710;
var statearr_47774_49571 = state_47710__$1;
(statearr_47774_49571[(2)] = inst_47691);

(statearr_47774_49571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (10))){
var inst_47655 = (state_47710[(8)]);
var inst_47653 = (state_47710[(12)]);
var inst_47660 = cljs.core._nth(inst_47653,inst_47655);
var state_47710__$1 = state_47710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47710__$1,(13),out,inst_47660);
} else {
if((state_val_47711 === (18))){
var inst_47666 = (state_47710[(7)]);
var inst_47679 = cljs.core.first(inst_47666);
var state_47710__$1 = state_47710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47710__$1,(20),out,inst_47679);
} else {
if((state_val_47711 === (8))){
var inst_47655 = (state_47710[(8)]);
var inst_47654 = (state_47710[(10)]);
var inst_47657 = (inst_47655 < inst_47654);
var inst_47658 = inst_47657;
var state_47710__$1 = state_47710;
if(cljs.core.truth_(inst_47658)){
var statearr_47779_49574 = state_47710__$1;
(statearr_47779_49574[(1)] = (10));

} else {
var statearr_47781_49575 = state_47710__$1;
(statearr_47781_49575[(1)] = (11));

}

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45093__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45093__auto____0 = (function (){
var statearr_47788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47788[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45093__auto__);

(statearr_47788[(1)] = (1));

return statearr_47788;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45093__auto____1 = (function (state_47710){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_47710);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e47789){var ex__45096__auto__ = e47789;
var statearr_47790_49579 = state_47710;
(statearr_47790_49579[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_47710[(4)]))){
var statearr_47791_49580 = state_47710;
(statearr_47791_49580[(1)] = cljs.core.first((state_47710[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49583 = state_47710;
state_47710 = G__49583;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45093__auto__ = function(state_47710){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45093__auto____1.call(this,state_47710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45093__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45093__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_47792 = f__45179__auto__();
(statearr_47792[(6)] = c__45178__auto__);

return statearr_47792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));

return c__45178__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47794 = arguments.length;
switch (G__47794) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47802 = arguments.length;
switch (G__47802) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47813 = arguments.length;
switch (G__47813) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45178__auto___49592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_47849){
var state_val_47851 = (state_47849[(1)]);
if((state_val_47851 === (7))){
var inst_47844 = (state_47849[(2)]);
var state_47849__$1 = state_47849;
var statearr_47864_49593 = state_47849__$1;
(statearr_47864_49593[(2)] = inst_47844);

(statearr_47864_49593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (1))){
var inst_47819 = null;
var state_47849__$1 = (function (){var statearr_47867 = state_47849;
(statearr_47867[(7)] = inst_47819);

return statearr_47867;
})();
var statearr_47869_49594 = state_47849__$1;
(statearr_47869_49594[(2)] = null);

(statearr_47869_49594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (4))){
var inst_47823 = (state_47849[(8)]);
var inst_47823__$1 = (state_47849[(2)]);
var inst_47825 = (inst_47823__$1 == null);
var inst_47826 = cljs.core.not(inst_47825);
var state_47849__$1 = (function (){var statearr_47870 = state_47849;
(statearr_47870[(8)] = inst_47823__$1);

return statearr_47870;
})();
if(inst_47826){
var statearr_47872_49596 = state_47849__$1;
(statearr_47872_49596[(1)] = (5));

} else {
var statearr_47874_49598 = state_47849__$1;
(statearr_47874_49598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (6))){
var state_47849__$1 = state_47849;
var statearr_47875_49600 = state_47849__$1;
(statearr_47875_49600[(2)] = null);

(statearr_47875_49600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (3))){
var inst_47846 = (state_47849[(2)]);
var inst_47847 = cljs.core.async.close_BANG_(out);
var state_47849__$1 = (function (){var statearr_47878 = state_47849;
(statearr_47878[(9)] = inst_47846);

return statearr_47878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47849__$1,inst_47847);
} else {
if((state_val_47851 === (2))){
var state_47849__$1 = state_47849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47849__$1,(4),ch);
} else {
if((state_val_47851 === (11))){
var inst_47823 = (state_47849[(8)]);
var inst_47835 = (state_47849[(2)]);
var inst_47819 = inst_47823;
var state_47849__$1 = (function (){var statearr_47881 = state_47849;
(statearr_47881[(10)] = inst_47835);

(statearr_47881[(7)] = inst_47819);

return statearr_47881;
})();
var statearr_47885_49605 = state_47849__$1;
(statearr_47885_49605[(2)] = null);

(statearr_47885_49605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (9))){
var inst_47823 = (state_47849[(8)]);
var state_47849__$1 = state_47849;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47849__$1,(11),out,inst_47823);
} else {
if((state_val_47851 === (5))){
var inst_47823 = (state_47849[(8)]);
var inst_47819 = (state_47849[(7)]);
var inst_47828 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47823,inst_47819);
var state_47849__$1 = state_47849;
if(inst_47828){
var statearr_47895_49607 = state_47849__$1;
(statearr_47895_49607[(1)] = (8));

} else {
var statearr_47900_49608 = state_47849__$1;
(statearr_47900_49608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (10))){
var inst_47841 = (state_47849[(2)]);
var state_47849__$1 = state_47849;
var statearr_47905_49609 = state_47849__$1;
(statearr_47905_49609[(2)] = inst_47841);

(statearr_47905_49609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (8))){
var inst_47819 = (state_47849[(7)]);
var tmp47890 = inst_47819;
var inst_47819__$1 = tmp47890;
var state_47849__$1 = (function (){var statearr_47911 = state_47849;
(statearr_47911[(7)] = inst_47819__$1);

return statearr_47911;
})();
var statearr_47912_49611 = state_47849__$1;
(statearr_47912_49611[(2)] = null);

(statearr_47912_49611[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__45093__auto__ = null;
var cljs$core$async$state_machine__45093__auto____0 = (function (){
var statearr_47922 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47922[(0)] = cljs$core$async$state_machine__45093__auto__);

(statearr_47922[(1)] = (1));

return statearr_47922;
});
var cljs$core$async$state_machine__45093__auto____1 = (function (state_47849){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_47849);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e47925){var ex__45096__auto__ = e47925;
var statearr_47927_49612 = state_47849;
(statearr_47927_49612[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_47849[(4)]))){
var statearr_47930_49614 = state_47849;
(statearr_47930_49614[(1)] = cljs.core.first((state_47849[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49616 = state_47849;
state_47849 = G__49616;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$state_machine__45093__auto__ = function(state_47849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45093__auto____1.call(this,state_47849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45093__auto____0;
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45093__auto____1;
return cljs$core$async$state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_47941 = f__45179__auto__();
(statearr_47941[(6)] = c__45178__auto___49592);

return statearr_47941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47963 = arguments.length;
switch (G__47963) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45178__auto___49620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_48017){
var state_val_48018 = (state_48017[(1)]);
if((state_val_48018 === (7))){
var inst_48013 = (state_48017[(2)]);
var state_48017__$1 = state_48017;
var statearr_48023_49622 = state_48017__$1;
(statearr_48023_49622[(2)] = inst_48013);

(statearr_48023_49622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (1))){
var inst_47980 = (new Array(n));
var inst_47981 = inst_47980;
var inst_47982 = (0);
var state_48017__$1 = (function (){var statearr_48024 = state_48017;
(statearr_48024[(7)] = inst_47982);

(statearr_48024[(8)] = inst_47981);

return statearr_48024;
})();
var statearr_48027_49624 = state_48017__$1;
(statearr_48027_49624[(2)] = null);

(statearr_48027_49624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (4))){
var inst_47985 = (state_48017[(9)]);
var inst_47985__$1 = (state_48017[(2)]);
var inst_47986 = (inst_47985__$1 == null);
var inst_47987 = cljs.core.not(inst_47986);
var state_48017__$1 = (function (){var statearr_48040 = state_48017;
(statearr_48040[(9)] = inst_47985__$1);

return statearr_48040;
})();
if(inst_47987){
var statearr_48053_49626 = state_48017__$1;
(statearr_48053_49626[(1)] = (5));

} else {
var statearr_48055_49627 = state_48017__$1;
(statearr_48055_49627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (15))){
var inst_48007 = (state_48017[(2)]);
var state_48017__$1 = state_48017;
var statearr_48057_49628 = state_48017__$1;
(statearr_48057_49628[(2)] = inst_48007);

(statearr_48057_49628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (13))){
var state_48017__$1 = state_48017;
var statearr_48058_49629 = state_48017__$1;
(statearr_48058_49629[(2)] = null);

(statearr_48058_49629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (6))){
var inst_47982 = (state_48017[(7)]);
var inst_48003 = (inst_47982 > (0));
var state_48017__$1 = state_48017;
if(cljs.core.truth_(inst_48003)){
var statearr_48061_49630 = state_48017__$1;
(statearr_48061_49630[(1)] = (12));

} else {
var statearr_48062_49632 = state_48017__$1;
(statearr_48062_49632[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (3))){
var inst_48015 = (state_48017[(2)]);
var state_48017__$1 = state_48017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48017__$1,inst_48015);
} else {
if((state_val_48018 === (12))){
var inst_47981 = (state_48017[(8)]);
var inst_48005 = cljs.core.vec(inst_47981);
var state_48017__$1 = state_48017;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48017__$1,(15),out,inst_48005);
} else {
if((state_val_48018 === (2))){
var state_48017__$1 = state_48017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48017__$1,(4),ch);
} else {
if((state_val_48018 === (11))){
var inst_47997 = (state_48017[(2)]);
var inst_47998 = (new Array(n));
var inst_47981 = inst_47998;
var inst_47982 = (0);
var state_48017__$1 = (function (){var statearr_48069 = state_48017;
(statearr_48069[(7)] = inst_47982);

(statearr_48069[(8)] = inst_47981);

(statearr_48069[(10)] = inst_47997);

return statearr_48069;
})();
var statearr_48072_49633 = state_48017__$1;
(statearr_48072_49633[(2)] = null);

(statearr_48072_49633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (9))){
var inst_47981 = (state_48017[(8)]);
var inst_47995 = cljs.core.vec(inst_47981);
var state_48017__$1 = state_48017;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48017__$1,(11),out,inst_47995);
} else {
if((state_val_48018 === (5))){
var inst_47982 = (state_48017[(7)]);
var inst_47981 = (state_48017[(8)]);
var inst_47985 = (state_48017[(9)]);
var inst_47990 = (state_48017[(11)]);
var inst_47989 = (inst_47981[inst_47982] = inst_47985);
var inst_47990__$1 = (inst_47982 + (1));
var inst_47991 = (inst_47990__$1 < n);
var state_48017__$1 = (function (){var statearr_48086 = state_48017;
(statearr_48086[(12)] = inst_47989);

(statearr_48086[(11)] = inst_47990__$1);

return statearr_48086;
})();
if(cljs.core.truth_(inst_47991)){
var statearr_48089_49635 = state_48017__$1;
(statearr_48089_49635[(1)] = (8));

} else {
var statearr_48091_49638 = state_48017__$1;
(statearr_48091_49638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (14))){
var inst_48010 = (state_48017[(2)]);
var inst_48011 = cljs.core.async.close_BANG_(out);
var state_48017__$1 = (function (){var statearr_48099 = state_48017;
(statearr_48099[(13)] = inst_48010);

return statearr_48099;
})();
var statearr_48101_49640 = state_48017__$1;
(statearr_48101_49640[(2)] = inst_48011);

(statearr_48101_49640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (10))){
var inst_48001 = (state_48017[(2)]);
var state_48017__$1 = state_48017;
var statearr_48106_49641 = state_48017__$1;
(statearr_48106_49641[(2)] = inst_48001);

(statearr_48106_49641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (8))){
var inst_47981 = (state_48017[(8)]);
var inst_47990 = (state_48017[(11)]);
var tmp48097 = inst_47981;
var inst_47981__$1 = tmp48097;
var inst_47982 = inst_47990;
var state_48017__$1 = (function (){var statearr_48111 = state_48017;
(statearr_48111[(7)] = inst_47982);

(statearr_48111[(8)] = inst_47981__$1);

return statearr_48111;
})();
var statearr_48115_49643 = state_48017__$1;
(statearr_48115_49643[(2)] = null);

(statearr_48115_49643[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__45093__auto__ = null;
var cljs$core$async$state_machine__45093__auto____0 = (function (){
var statearr_48122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48122[(0)] = cljs$core$async$state_machine__45093__auto__);

(statearr_48122[(1)] = (1));

return statearr_48122;
});
var cljs$core$async$state_machine__45093__auto____1 = (function (state_48017){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_48017);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e48128){var ex__45096__auto__ = e48128;
var statearr_48129_49646 = state_48017;
(statearr_48129_49646[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_48017[(4)]))){
var statearr_48132_49647 = state_48017;
(statearr_48132_49647[(1)] = cljs.core.first((state_48017[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49648 = state_48017;
state_48017 = G__49648;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$state_machine__45093__auto__ = function(state_48017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45093__auto____1.call(this,state_48017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45093__auto____0;
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45093__auto____1;
return cljs$core$async$state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_48142 = f__45179__auto__();
(statearr_48142[(6)] = c__45178__auto___49620);

return statearr_48142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48161 = arguments.length;
switch (G__48161) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45178__auto___49653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45179__auto__ = (function (){var switch__45092__auto__ = (function (state_48245){
var state_val_48247 = (state_48245[(1)]);
if((state_val_48247 === (7))){
var inst_48236 = (state_48245[(2)]);
var state_48245__$1 = state_48245;
var statearr_48262_49655 = state_48245__$1;
(statearr_48262_49655[(2)] = inst_48236);

(statearr_48262_49655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (1))){
var inst_48180 = [];
var inst_48182 = inst_48180;
var inst_48183 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48245__$1 = (function (){var statearr_48269 = state_48245;
(statearr_48269[(7)] = inst_48182);

(statearr_48269[(8)] = inst_48183);

return statearr_48269;
})();
var statearr_48270_49657 = state_48245__$1;
(statearr_48270_49657[(2)] = null);

(statearr_48270_49657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (4))){
var inst_48187 = (state_48245[(9)]);
var inst_48187__$1 = (state_48245[(2)]);
var inst_48190 = (inst_48187__$1 == null);
var inst_48191 = cljs.core.not(inst_48190);
var state_48245__$1 = (function (){var statearr_48271 = state_48245;
(statearr_48271[(9)] = inst_48187__$1);

return statearr_48271;
})();
if(inst_48191){
var statearr_48272_49659 = state_48245__$1;
(statearr_48272_49659[(1)] = (5));

} else {
var statearr_48276_49660 = state_48245__$1;
(statearr_48276_49660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (15))){
var inst_48182 = (state_48245[(7)]);
var inst_48228 = cljs.core.vec(inst_48182);
var state_48245__$1 = state_48245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48245__$1,(18),out,inst_48228);
} else {
if((state_val_48247 === (13))){
var inst_48222 = (state_48245[(2)]);
var state_48245__$1 = state_48245;
var statearr_48277_49661 = state_48245__$1;
(statearr_48277_49661[(2)] = inst_48222);

(statearr_48277_49661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (6))){
var inst_48182 = (state_48245[(7)]);
var inst_48225 = inst_48182.length;
var inst_48226 = (inst_48225 > (0));
var state_48245__$1 = state_48245;
if(cljs.core.truth_(inst_48226)){
var statearr_48278_49663 = state_48245__$1;
(statearr_48278_49663[(1)] = (15));

} else {
var statearr_48279_49664 = state_48245__$1;
(statearr_48279_49664[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (17))){
var inst_48233 = (state_48245[(2)]);
var inst_48234 = cljs.core.async.close_BANG_(out);
var state_48245__$1 = (function (){var statearr_48280 = state_48245;
(statearr_48280[(10)] = inst_48233);

return statearr_48280;
})();
var statearr_48281_49665 = state_48245__$1;
(statearr_48281_49665[(2)] = inst_48234);

(statearr_48281_49665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (3))){
var inst_48238 = (state_48245[(2)]);
var state_48245__$1 = state_48245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48245__$1,inst_48238);
} else {
if((state_val_48247 === (12))){
var inst_48182 = (state_48245[(7)]);
var inst_48212 = cljs.core.vec(inst_48182);
var state_48245__$1 = state_48245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48245__$1,(14),out,inst_48212);
} else {
if((state_val_48247 === (2))){
var state_48245__$1 = state_48245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48245__$1,(4),ch);
} else {
if((state_val_48247 === (11))){
var inst_48182 = (state_48245[(7)]);
var inst_48187 = (state_48245[(9)]);
var inst_48195 = (state_48245[(11)]);
var inst_48207 = inst_48182.push(inst_48187);
var tmp48284 = inst_48182;
var inst_48182__$1 = tmp48284;
var inst_48183 = inst_48195;
var state_48245__$1 = (function (){var statearr_48290 = state_48245;
(statearr_48290[(7)] = inst_48182__$1);

(statearr_48290[(12)] = inst_48207);

(statearr_48290[(8)] = inst_48183);

return statearr_48290;
})();
var statearr_48292_49668 = state_48245__$1;
(statearr_48292_49668[(2)] = null);

(statearr_48292_49668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (9))){
var inst_48183 = (state_48245[(8)]);
var inst_48203 = cljs.core.keyword_identical_QMARK_(inst_48183,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_48245__$1 = state_48245;
var statearr_48296_49669 = state_48245__$1;
(statearr_48296_49669[(2)] = inst_48203);

(statearr_48296_49669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (5))){
var inst_48196 = (state_48245[(13)]);
var inst_48187 = (state_48245[(9)]);
var inst_48183 = (state_48245[(8)]);
var inst_48195 = (state_48245[(11)]);
var inst_48195__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48187) : f.call(null,inst_48187));
var inst_48196__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48195__$1,inst_48183);
var state_48245__$1 = (function (){var statearr_48299 = state_48245;
(statearr_48299[(13)] = inst_48196__$1);

(statearr_48299[(11)] = inst_48195__$1);

return statearr_48299;
})();
if(inst_48196__$1){
var statearr_48300_49675 = state_48245__$1;
(statearr_48300_49675[(1)] = (8));

} else {
var statearr_48301_49680 = state_48245__$1;
(statearr_48301_49680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (14))){
var inst_48187 = (state_48245[(9)]);
var inst_48195 = (state_48245[(11)]);
var inst_48214 = (state_48245[(2)]);
var inst_48218 = [];
var inst_48219 = inst_48218.push(inst_48187);
var inst_48182 = inst_48218;
var inst_48183 = inst_48195;
var state_48245__$1 = (function (){var statearr_48304 = state_48245;
(statearr_48304[(14)] = inst_48214);

(statearr_48304[(7)] = inst_48182);

(statearr_48304[(15)] = inst_48219);

(statearr_48304[(8)] = inst_48183);

return statearr_48304;
})();
var statearr_48307_49691 = state_48245__$1;
(statearr_48307_49691[(2)] = null);

(statearr_48307_49691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (16))){
var state_48245__$1 = state_48245;
var statearr_48308_49692 = state_48245__$1;
(statearr_48308_49692[(2)] = null);

(statearr_48308_49692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (10))){
var inst_48205 = (state_48245[(2)]);
var state_48245__$1 = state_48245;
if(cljs.core.truth_(inst_48205)){
var statearr_48310_49698 = state_48245__$1;
(statearr_48310_49698[(1)] = (11));

} else {
var statearr_48312_49699 = state_48245__$1;
(statearr_48312_49699[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (18))){
var inst_48230 = (state_48245[(2)]);
var state_48245__$1 = state_48245;
var statearr_48318_49703 = state_48245__$1;
(statearr_48318_49703[(2)] = inst_48230);

(statearr_48318_49703[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48247 === (8))){
var inst_48196 = (state_48245[(13)]);
var state_48245__$1 = state_48245;
var statearr_48323_49705 = state_48245__$1;
(statearr_48323_49705[(2)] = inst_48196);

(statearr_48323_49705[(1)] = (10));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__45093__auto__ = null;
var cljs$core$async$state_machine__45093__auto____0 = (function (){
var statearr_48330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48330[(0)] = cljs$core$async$state_machine__45093__auto__);

(statearr_48330[(1)] = (1));

return statearr_48330;
});
var cljs$core$async$state_machine__45093__auto____1 = (function (state_48245){
while(true){
var ret_value__45094__auto__ = (function (){try{while(true){
var result__45095__auto__ = switch__45092__auto__(state_48245);
if(cljs.core.keyword_identical_QMARK_(result__45095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45095__auto__;
}
break;
}
}catch (e48331){var ex__45096__auto__ = e48331;
var statearr_48332_49713 = state_48245;
(statearr_48332_49713[(2)] = ex__45096__auto__);


if(cljs.core.seq((state_48245[(4)]))){
var statearr_48339_49722 = state_48245;
(statearr_48339_49722[(1)] = cljs.core.first((state_48245[(4)])));

} else {
throw ex__45096__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49723 = state_48245;
state_48245 = G__49723;
continue;
} else {
return ret_value__45094__auto__;
}
break;
}
});
cljs$core$async$state_machine__45093__auto__ = function(state_48245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45093__auto____1.call(this,state_48245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45093__auto____0;
cljs$core$async$state_machine__45093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45093__auto____1;
return cljs$core$async$state_machine__45093__auto__;
})()
})();
var state__45180__auto__ = (function (){var statearr_48356 = f__45179__auto__();
(statearr_48356[(6)] = c__45178__auto___49653);

return statearr_48356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45180__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
