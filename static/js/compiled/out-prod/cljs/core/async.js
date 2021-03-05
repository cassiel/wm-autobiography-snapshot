// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38390 = arguments.length;
switch (G__38390) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async38391 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38391 = (function (f,blockable,meta38392){
this.f = f;
this.blockable = blockable;
this.meta38392 = meta38392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38393,meta38392__$1){
var self__ = this;
var _38393__$1 = this;
return (new cljs.core.async.t_cljs$core$async38391(self__.f,self__.blockable,meta38392__$1));
});

cljs.core.async.t_cljs$core$async38391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38393){
var self__ = this;
var _38393__$1 = this;
return self__.meta38392;
});

cljs.core.async.t_cljs$core$async38391.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38391.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38391.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38391.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38392","meta38392",-1449148463,null)], null);
});

cljs.core.async.t_cljs$core$async38391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38391";

cljs.core.async.t_cljs$core$async38391.cljs$lang$ctorPrWriter = (function (this__31546__auto__,writer__31547__auto__,opt__31548__auto__){
return cljs.core._write.call(null,writer__31547__auto__,"cljs.core.async/t_cljs$core$async38391");
});

cljs.core.async.__GT_t_cljs$core$async38391 = (function cljs$core$async$__GT_t_cljs$core$async38391(f__$1,blockable__$1,meta38392){
return (new cljs.core.async.t_cljs$core$async38391(f__$1,blockable__$1,meta38392));
});

}

return (new cljs.core.async.t_cljs$core$async38391(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__38397 = arguments.length;
switch (G__38397) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__38400 = arguments.length;
switch (G__38400) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__38403 = arguments.length;
switch (G__38403) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_38405 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38405);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38405,ret){
return (function (){
return fn1.call(null,val_38405);
});})(val_38405,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__38407 = arguments.length;
switch (G__38407) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31918__auto___38409 = n;
var x_38410 = (0);
while(true){
if((x_38410 < n__31918__auto___38409)){
(a[x_38410] = (0));

var G__38411 = (x_38410 + (1));
x_38410 = G__38411;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__38412 = (i + (1));
i = G__38412;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async38413 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38413 = (function (flag,meta38414){
this.flag = flag;
this.meta38414 = meta38414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38415,meta38414__$1){
var self__ = this;
var _38415__$1 = this;
return (new cljs.core.async.t_cljs$core$async38413(self__.flag,meta38414__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async38413.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38415){
var self__ = this;
var _38415__$1 = this;
return self__.meta38414;
});})(flag))
;

cljs.core.async.t_cljs$core$async38413.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38413.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async38413.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38413.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38413.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38414","meta38414",399641736,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38413.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38413";

cljs.core.async.t_cljs$core$async38413.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31546__auto__,writer__31547__auto__,opt__31548__auto__){
return cljs.core._write.call(null,writer__31547__auto__,"cljs.core.async/t_cljs$core$async38413");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async38413 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38413(flag__$1,meta38414){
return (new cljs.core.async.t_cljs$core$async38413(flag__$1,meta38414));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38413(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async38416 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38416 = (function (flag,cb,meta38417){
this.flag = flag;
this.cb = cb;
this.meta38417 = meta38417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38418,meta38417__$1){
var self__ = this;
var _38418__$1 = this;
return (new cljs.core.async.t_cljs$core$async38416(self__.flag,self__.cb,meta38417__$1));
});

cljs.core.async.t_cljs$core$async38416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38418){
var self__ = this;
var _38418__$1 = this;
return self__.meta38417;
});

cljs.core.async.t_cljs$core$async38416.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38416.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async38416.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38416.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38417","meta38417",571954593,null)], null);
});

cljs.core.async.t_cljs$core$async38416.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38416";

cljs.core.async.t_cljs$core$async38416.cljs$lang$ctorPrWriter = (function (this__31546__auto__,writer__31547__auto__,opt__31548__auto__){
return cljs.core._write.call(null,writer__31547__auto__,"cljs.core.async/t_cljs$core$async38416");
});

cljs.core.async.__GT_t_cljs$core$async38416 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38416(flag__$1,cb__$1,meta38417){
return (new cljs.core.async.t_cljs$core$async38416(flag__$1,cb__$1,meta38417));
});

}

return (new cljs.core.async.t_cljs$core$async38416(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38419_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38419_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38420_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38420_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30875__auto__ = wport;
if(cljs.core.truth_(or__30875__auto__)){
return or__30875__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38421 = (i + (1));
i = G__38421;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30875__auto__ = ret;
if(cljs.core.truth_(or__30875__auto__)){
return or__30875__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__30863__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30863__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30863__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__32159__auto__ = [];
var len__32152__auto___38427 = arguments.length;
var i__32153__auto___38428 = (0);
while(true){
if((i__32153__auto___38428 < len__32152__auto___38427)){
args__32159__auto__.push((arguments[i__32153__auto___38428]));

var G__38429 = (i__32153__auto___38428 + (1));
i__32153__auto___38428 = G__38429;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((1) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38424){
var map__38425 = p__38424;
var map__38425__$1 = ((((!((map__38425 == null)))?((((map__38425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38425):map__38425);
var opts = map__38425__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38422){
var G__38423 = cljs.core.first.call(null,seq38422);
var seq38422__$1 = cljs.core.next.call(null,seq38422);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38423,seq38422__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__38431 = arguments.length;
switch (G__38431) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38330__auto___38477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___38477){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___38477){
return (function (state_38455){
var state_val_38456 = (state_38455[(1)]);
if((state_val_38456 === (7))){
var inst_38451 = (state_38455[(2)]);
var state_38455__$1 = state_38455;
var statearr_38457_38478 = state_38455__$1;
(statearr_38457_38478[(2)] = inst_38451);

(statearr_38457_38478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38456 === (1))){
var state_38455__$1 = state_38455;
var statearr_38458_38479 = state_38455__$1;
(statearr_38458_38479[(2)] = null);

(statearr_38458_38479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38456 === (4))){
var inst_38434 = (state_38455[(7)]);
var inst_38434__$1 = (state_38455[(2)]);
var inst_38435 = (inst_38434__$1 == null);
var state_38455__$1 = (function (){var statearr_38459 = state_38455;
(statearr_38459[(7)] = inst_38434__$1);

return statearr_38459;
})();
if(cljs.core.truth_(inst_38435)){
var statearr_38460_38480 = state_38455__$1;
(statearr_38460_38480[(1)] = (5));

} else {
var statearr_38461_38481 = state_38455__$1;
(statearr_38461_38481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38456 === (13))){
var state_38455__$1 = state_38455;
var statearr_38462_38482 = state_38455__$1;
(statearr_38462_38482[(2)] = null);

(statearr_38462_38482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38456 === (6))){
var inst_38434 = (state_38455[(7)]);
var state_38455__$1 = state_38455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38455__$1,(11),to,inst_38434);
} else {
if((state_val_38456 === (3))){
var inst_38453 = (state_38455[(2)]);
var state_38455__$1 = state_38455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38455__$1,inst_38453);
} else {
if((state_val_38456 === (12))){
var state_38455__$1 = state_38455;
var statearr_38463_38483 = state_38455__$1;
(statearr_38463_38483[(2)] = null);

(statearr_38463_38483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38456 === (2))){
var state_38455__$1 = state_38455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38455__$1,(4),from);
} else {
if((state_val_38456 === (11))){
var inst_38444 = (state_38455[(2)]);
var state_38455__$1 = state_38455;
if(cljs.core.truth_(inst_38444)){
var statearr_38464_38484 = state_38455__$1;
(statearr_38464_38484[(1)] = (12));

} else {
var statearr_38465_38485 = state_38455__$1;
(statearr_38465_38485[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38456 === (9))){
var state_38455__$1 = state_38455;
var statearr_38466_38486 = state_38455__$1;
(statearr_38466_38486[(2)] = null);

(statearr_38466_38486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38456 === (5))){
var state_38455__$1 = state_38455;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38467_38487 = state_38455__$1;
(statearr_38467_38487[(1)] = (8));

} else {
var statearr_38468_38488 = state_38455__$1;
(statearr_38468_38488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38456 === (14))){
var inst_38449 = (state_38455[(2)]);
var state_38455__$1 = state_38455;
var statearr_38469_38489 = state_38455__$1;
(statearr_38469_38489[(2)] = inst_38449);

(statearr_38469_38489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38456 === (10))){
var inst_38441 = (state_38455[(2)]);
var state_38455__$1 = state_38455;
var statearr_38470_38490 = state_38455__$1;
(statearr_38470_38490[(2)] = inst_38441);

(statearr_38470_38490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38456 === (8))){
var inst_38438 = cljs.core.async.close_BANG_.call(null,to);
var state_38455__$1 = state_38455;
var statearr_38471_38491 = state_38455__$1;
(statearr_38471_38491[(2)] = inst_38438);

(statearr_38471_38491[(1)] = (10));


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
});})(c__38330__auto___38477))
;
return ((function (switch__38240__auto__,c__38330__auto___38477){
return (function() {
var cljs$core$async$state_machine__38241__auto__ = null;
var cljs$core$async$state_machine__38241__auto____0 = (function (){
var statearr_38472 = [null,null,null,null,null,null,null,null];
(statearr_38472[(0)] = cljs$core$async$state_machine__38241__auto__);

(statearr_38472[(1)] = (1));

return statearr_38472;
});
var cljs$core$async$state_machine__38241__auto____1 = (function (state_38455){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_38455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e38473){if((e38473 instanceof Object)){
var ex__38244__auto__ = e38473;
var statearr_38474_38492 = state_38455;
(statearr_38474_38492[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38493 = state_38455;
state_38455 = G__38493;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$state_machine__38241__auto__ = function(state_38455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38241__auto____1.call(this,state_38455);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38241__auto____0;
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38241__auto____1;
return cljs$core$async$state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___38477))
})();
var state__38332__auto__ = (function (){var statearr_38475 = f__38331__auto__.call(null);
(statearr_38475[(6)] = c__38330__auto___38477);

return statearr_38475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___38477))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__38494){
var vec__38495 = p__38494;
var v = cljs.core.nth.call(null,vec__38495,(0),null);
var p = cljs.core.nth.call(null,vec__38495,(1),null);
var job = vec__38495;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38330__auto___38666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___38666,res,vec__38495,v,p,job,jobs,results){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___38666,res,vec__38495,v,p,job,jobs,results){
return (function (state_38502){
var state_val_38503 = (state_38502[(1)]);
if((state_val_38503 === (1))){
var state_38502__$1 = state_38502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38502__$1,(2),res,v);
} else {
if((state_val_38503 === (2))){
var inst_38499 = (state_38502[(2)]);
var inst_38500 = cljs.core.async.close_BANG_.call(null,res);
var state_38502__$1 = (function (){var statearr_38504 = state_38502;
(statearr_38504[(7)] = inst_38499);

return statearr_38504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38502__$1,inst_38500);
} else {
return null;
}
}
});})(c__38330__auto___38666,res,vec__38495,v,p,job,jobs,results))
;
return ((function (switch__38240__auto__,c__38330__auto___38666,res,vec__38495,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____0 = (function (){
var statearr_38505 = [null,null,null,null,null,null,null,null];
(statearr_38505[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__);

(statearr_38505[(1)] = (1));

return statearr_38505;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____1 = (function (state_38502){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_38502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e38506){if((e38506 instanceof Object)){
var ex__38244__auto__ = e38506;
var statearr_38507_38667 = state_38502;
(statearr_38507_38667[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38668 = state_38502;
state_38502 = G__38668;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__ = function(state_38502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____1.call(this,state_38502);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___38666,res,vec__38495,v,p,job,jobs,results))
})();
var state__38332__auto__ = (function (){var statearr_38508 = f__38331__auto__.call(null);
(statearr_38508[(6)] = c__38330__auto___38666);

return statearr_38508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___38666,res,vec__38495,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38509){
var vec__38510 = p__38509;
var v = cljs.core.nth.call(null,vec__38510,(0),null);
var p = cljs.core.nth.call(null,vec__38510,(1),null);
var job = vec__38510;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31918__auto___38669 = n;
var __38670 = (0);
while(true){
if((__38670 < n__31918__auto___38669)){
var G__38513_38671 = type;
var G__38513_38672__$1 = (((G__38513_38671 instanceof cljs.core.Keyword))?G__38513_38671.fqn:null);
switch (G__38513_38672__$1) {
case "compute":
var c__38330__auto___38674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38670,c__38330__auto___38674,G__38513_38671,G__38513_38672__$1,n__31918__auto___38669,jobs,results,process,async){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (__38670,c__38330__auto___38674,G__38513_38671,G__38513_38672__$1,n__31918__auto___38669,jobs,results,process,async){
return (function (state_38526){
var state_val_38527 = (state_38526[(1)]);
if((state_val_38527 === (1))){
var state_38526__$1 = state_38526;
var statearr_38528_38675 = state_38526__$1;
(statearr_38528_38675[(2)] = null);

(statearr_38528_38675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38527 === (2))){
var state_38526__$1 = state_38526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38526__$1,(4),jobs);
} else {
if((state_val_38527 === (3))){
var inst_38524 = (state_38526[(2)]);
var state_38526__$1 = state_38526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38526__$1,inst_38524);
} else {
if((state_val_38527 === (4))){
var inst_38516 = (state_38526[(2)]);
var inst_38517 = process.call(null,inst_38516);
var state_38526__$1 = state_38526;
if(cljs.core.truth_(inst_38517)){
var statearr_38529_38676 = state_38526__$1;
(statearr_38529_38676[(1)] = (5));

} else {
var statearr_38530_38677 = state_38526__$1;
(statearr_38530_38677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38527 === (5))){
var state_38526__$1 = state_38526;
var statearr_38531_38678 = state_38526__$1;
(statearr_38531_38678[(2)] = null);

(statearr_38531_38678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38527 === (6))){
var state_38526__$1 = state_38526;
var statearr_38532_38679 = state_38526__$1;
(statearr_38532_38679[(2)] = null);

(statearr_38532_38679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38527 === (7))){
var inst_38522 = (state_38526[(2)]);
var state_38526__$1 = state_38526;
var statearr_38533_38680 = state_38526__$1;
(statearr_38533_38680[(2)] = inst_38522);

(statearr_38533_38680[(1)] = (3));


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
});})(__38670,c__38330__auto___38674,G__38513_38671,G__38513_38672__$1,n__31918__auto___38669,jobs,results,process,async))
;
return ((function (__38670,switch__38240__auto__,c__38330__auto___38674,G__38513_38671,G__38513_38672__$1,n__31918__auto___38669,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____0 = (function (){
var statearr_38534 = [null,null,null,null,null,null,null];
(statearr_38534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__);

(statearr_38534[(1)] = (1));

return statearr_38534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____1 = (function (state_38526){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_38526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e38535){if((e38535 instanceof Object)){
var ex__38244__auto__ = e38535;
var statearr_38536_38681 = state_38526;
(statearr_38536_38681[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38682 = state_38526;
state_38526 = G__38682;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__ = function(state_38526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____1.call(this,state_38526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__;
})()
;})(__38670,switch__38240__auto__,c__38330__auto___38674,G__38513_38671,G__38513_38672__$1,n__31918__auto___38669,jobs,results,process,async))
})();
var state__38332__auto__ = (function (){var statearr_38537 = f__38331__auto__.call(null);
(statearr_38537[(6)] = c__38330__auto___38674);

return statearr_38537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(__38670,c__38330__auto___38674,G__38513_38671,G__38513_38672__$1,n__31918__auto___38669,jobs,results,process,async))
);


break;
case "async":
var c__38330__auto___38683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38670,c__38330__auto___38683,G__38513_38671,G__38513_38672__$1,n__31918__auto___38669,jobs,results,process,async){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (__38670,c__38330__auto___38683,G__38513_38671,G__38513_38672__$1,n__31918__auto___38669,jobs,results,process,async){
return (function (state_38550){
var state_val_38551 = (state_38550[(1)]);
if((state_val_38551 === (1))){
var state_38550__$1 = state_38550;
var statearr_38552_38684 = state_38550__$1;
(statearr_38552_38684[(2)] = null);

(statearr_38552_38684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38551 === (2))){
var state_38550__$1 = state_38550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38550__$1,(4),jobs);
} else {
if((state_val_38551 === (3))){
var inst_38548 = (state_38550[(2)]);
var state_38550__$1 = state_38550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38550__$1,inst_38548);
} else {
if((state_val_38551 === (4))){
var inst_38540 = (state_38550[(2)]);
var inst_38541 = async.call(null,inst_38540);
var state_38550__$1 = state_38550;
if(cljs.core.truth_(inst_38541)){
var statearr_38553_38685 = state_38550__$1;
(statearr_38553_38685[(1)] = (5));

} else {
var statearr_38554_38686 = state_38550__$1;
(statearr_38554_38686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38551 === (5))){
var state_38550__$1 = state_38550;
var statearr_38555_38687 = state_38550__$1;
(statearr_38555_38687[(2)] = null);

(statearr_38555_38687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38551 === (6))){
var state_38550__$1 = state_38550;
var statearr_38556_38688 = state_38550__$1;
(statearr_38556_38688[(2)] = null);

(statearr_38556_38688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38551 === (7))){
var inst_38546 = (state_38550[(2)]);
var state_38550__$1 = state_38550;
var statearr_38557_38689 = state_38550__$1;
(statearr_38557_38689[(2)] = inst_38546);

(statearr_38557_38689[(1)] = (3));


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
});})(__38670,c__38330__auto___38683,G__38513_38671,G__38513_38672__$1,n__31918__auto___38669,jobs,results,process,async))
;
return ((function (__38670,switch__38240__auto__,c__38330__auto___38683,G__38513_38671,G__38513_38672__$1,n__31918__auto___38669,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____0 = (function (){
var statearr_38558 = [null,null,null,null,null,null,null];
(statearr_38558[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__);

(statearr_38558[(1)] = (1));

return statearr_38558;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____1 = (function (state_38550){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_38550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e38559){if((e38559 instanceof Object)){
var ex__38244__auto__ = e38559;
var statearr_38560_38690 = state_38550;
(statearr_38560_38690[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38691 = state_38550;
state_38550 = G__38691;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__ = function(state_38550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____1.call(this,state_38550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__;
})()
;})(__38670,switch__38240__auto__,c__38330__auto___38683,G__38513_38671,G__38513_38672__$1,n__31918__auto___38669,jobs,results,process,async))
})();
var state__38332__auto__ = (function (){var statearr_38561 = f__38331__auto__.call(null);
(statearr_38561[(6)] = c__38330__auto___38683);

return statearr_38561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(__38670,c__38330__auto___38683,G__38513_38671,G__38513_38672__$1,n__31918__auto___38669,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38513_38672__$1)].join('')));

}

var G__38692 = (__38670 + (1));
__38670 = G__38692;
continue;
} else {
}
break;
}

var c__38330__auto___38693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___38693,jobs,results,process,async){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___38693,jobs,results,process,async){
return (function (state_38583){
var state_val_38584 = (state_38583[(1)]);
if((state_val_38584 === (1))){
var state_38583__$1 = state_38583;
var statearr_38585_38694 = state_38583__$1;
(statearr_38585_38694[(2)] = null);

(statearr_38585_38694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38584 === (2))){
var state_38583__$1 = state_38583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38583__$1,(4),from);
} else {
if((state_val_38584 === (3))){
var inst_38581 = (state_38583[(2)]);
var state_38583__$1 = state_38583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38583__$1,inst_38581);
} else {
if((state_val_38584 === (4))){
var inst_38564 = (state_38583[(7)]);
var inst_38564__$1 = (state_38583[(2)]);
var inst_38565 = (inst_38564__$1 == null);
var state_38583__$1 = (function (){var statearr_38586 = state_38583;
(statearr_38586[(7)] = inst_38564__$1);

return statearr_38586;
})();
if(cljs.core.truth_(inst_38565)){
var statearr_38587_38695 = state_38583__$1;
(statearr_38587_38695[(1)] = (5));

} else {
var statearr_38588_38696 = state_38583__$1;
(statearr_38588_38696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38584 === (5))){
var inst_38567 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38583__$1 = state_38583;
var statearr_38589_38697 = state_38583__$1;
(statearr_38589_38697[(2)] = inst_38567);

(statearr_38589_38697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38584 === (6))){
var inst_38569 = (state_38583[(8)]);
var inst_38564 = (state_38583[(7)]);
var inst_38569__$1 = cljs.core.async.chan.call(null,(1));
var inst_38570 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38571 = [inst_38564,inst_38569__$1];
var inst_38572 = (new cljs.core.PersistentVector(null,2,(5),inst_38570,inst_38571,null));
var state_38583__$1 = (function (){var statearr_38590 = state_38583;
(statearr_38590[(8)] = inst_38569__$1);

return statearr_38590;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38583__$1,(8),jobs,inst_38572);
} else {
if((state_val_38584 === (7))){
var inst_38579 = (state_38583[(2)]);
var state_38583__$1 = state_38583;
var statearr_38591_38698 = state_38583__$1;
(statearr_38591_38698[(2)] = inst_38579);

(statearr_38591_38698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38584 === (8))){
var inst_38569 = (state_38583[(8)]);
var inst_38574 = (state_38583[(2)]);
var state_38583__$1 = (function (){var statearr_38592 = state_38583;
(statearr_38592[(9)] = inst_38574);

return statearr_38592;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38583__$1,(9),results,inst_38569);
} else {
if((state_val_38584 === (9))){
var inst_38576 = (state_38583[(2)]);
var state_38583__$1 = (function (){var statearr_38593 = state_38583;
(statearr_38593[(10)] = inst_38576);

return statearr_38593;
})();
var statearr_38594_38699 = state_38583__$1;
(statearr_38594_38699[(2)] = null);

(statearr_38594_38699[(1)] = (2));


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
});})(c__38330__auto___38693,jobs,results,process,async))
;
return ((function (switch__38240__auto__,c__38330__auto___38693,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____0 = (function (){
var statearr_38595 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__);

(statearr_38595[(1)] = (1));

return statearr_38595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____1 = (function (state_38583){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_38583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e38596){if((e38596 instanceof Object)){
var ex__38244__auto__ = e38596;
var statearr_38597_38700 = state_38583;
(statearr_38597_38700[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38701 = state_38583;
state_38583 = G__38701;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__ = function(state_38583){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____1.call(this,state_38583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___38693,jobs,results,process,async))
})();
var state__38332__auto__ = (function (){var statearr_38598 = f__38331__auto__.call(null);
(statearr_38598[(6)] = c__38330__auto___38693);

return statearr_38598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___38693,jobs,results,process,async))
);


var c__38330__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto__,jobs,results,process,async){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto__,jobs,results,process,async){
return (function (state_38636){
var state_val_38637 = (state_38636[(1)]);
if((state_val_38637 === (7))){
var inst_38632 = (state_38636[(2)]);
var state_38636__$1 = state_38636;
var statearr_38638_38702 = state_38636__$1;
(statearr_38638_38702[(2)] = inst_38632);

(statearr_38638_38702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (20))){
var state_38636__$1 = state_38636;
var statearr_38639_38703 = state_38636__$1;
(statearr_38639_38703[(2)] = null);

(statearr_38639_38703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (1))){
var state_38636__$1 = state_38636;
var statearr_38640_38704 = state_38636__$1;
(statearr_38640_38704[(2)] = null);

(statearr_38640_38704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (4))){
var inst_38601 = (state_38636[(7)]);
var inst_38601__$1 = (state_38636[(2)]);
var inst_38602 = (inst_38601__$1 == null);
var state_38636__$1 = (function (){var statearr_38641 = state_38636;
(statearr_38641[(7)] = inst_38601__$1);

return statearr_38641;
})();
if(cljs.core.truth_(inst_38602)){
var statearr_38642_38705 = state_38636__$1;
(statearr_38642_38705[(1)] = (5));

} else {
var statearr_38643_38706 = state_38636__$1;
(statearr_38643_38706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (15))){
var inst_38614 = (state_38636[(8)]);
var state_38636__$1 = state_38636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38636__$1,(18),to,inst_38614);
} else {
if((state_val_38637 === (21))){
var inst_38627 = (state_38636[(2)]);
var state_38636__$1 = state_38636;
var statearr_38644_38707 = state_38636__$1;
(statearr_38644_38707[(2)] = inst_38627);

(statearr_38644_38707[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (13))){
var inst_38629 = (state_38636[(2)]);
var state_38636__$1 = (function (){var statearr_38645 = state_38636;
(statearr_38645[(9)] = inst_38629);

return statearr_38645;
})();
var statearr_38646_38708 = state_38636__$1;
(statearr_38646_38708[(2)] = null);

(statearr_38646_38708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (6))){
var inst_38601 = (state_38636[(7)]);
var state_38636__$1 = state_38636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38636__$1,(11),inst_38601);
} else {
if((state_val_38637 === (17))){
var inst_38622 = (state_38636[(2)]);
var state_38636__$1 = state_38636;
if(cljs.core.truth_(inst_38622)){
var statearr_38647_38709 = state_38636__$1;
(statearr_38647_38709[(1)] = (19));

} else {
var statearr_38648_38710 = state_38636__$1;
(statearr_38648_38710[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (3))){
var inst_38634 = (state_38636[(2)]);
var state_38636__$1 = state_38636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38636__$1,inst_38634);
} else {
if((state_val_38637 === (12))){
var inst_38611 = (state_38636[(10)]);
var state_38636__$1 = state_38636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38636__$1,(14),inst_38611);
} else {
if((state_val_38637 === (2))){
var state_38636__$1 = state_38636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38636__$1,(4),results);
} else {
if((state_val_38637 === (19))){
var state_38636__$1 = state_38636;
var statearr_38649_38711 = state_38636__$1;
(statearr_38649_38711[(2)] = null);

(statearr_38649_38711[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (11))){
var inst_38611 = (state_38636[(2)]);
var state_38636__$1 = (function (){var statearr_38650 = state_38636;
(statearr_38650[(10)] = inst_38611);

return statearr_38650;
})();
var statearr_38651_38712 = state_38636__$1;
(statearr_38651_38712[(2)] = null);

(statearr_38651_38712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (9))){
var state_38636__$1 = state_38636;
var statearr_38652_38713 = state_38636__$1;
(statearr_38652_38713[(2)] = null);

(statearr_38652_38713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (5))){
var state_38636__$1 = state_38636;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38653_38714 = state_38636__$1;
(statearr_38653_38714[(1)] = (8));

} else {
var statearr_38654_38715 = state_38636__$1;
(statearr_38654_38715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (14))){
var inst_38614 = (state_38636[(8)]);
var inst_38616 = (state_38636[(11)]);
var inst_38614__$1 = (state_38636[(2)]);
var inst_38615 = (inst_38614__$1 == null);
var inst_38616__$1 = cljs.core.not.call(null,inst_38615);
var state_38636__$1 = (function (){var statearr_38655 = state_38636;
(statearr_38655[(8)] = inst_38614__$1);

(statearr_38655[(11)] = inst_38616__$1);

return statearr_38655;
})();
if(inst_38616__$1){
var statearr_38656_38716 = state_38636__$1;
(statearr_38656_38716[(1)] = (15));

} else {
var statearr_38657_38717 = state_38636__$1;
(statearr_38657_38717[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (16))){
var inst_38616 = (state_38636[(11)]);
var state_38636__$1 = state_38636;
var statearr_38658_38718 = state_38636__$1;
(statearr_38658_38718[(2)] = inst_38616);

(statearr_38658_38718[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (10))){
var inst_38608 = (state_38636[(2)]);
var state_38636__$1 = state_38636;
var statearr_38659_38719 = state_38636__$1;
(statearr_38659_38719[(2)] = inst_38608);

(statearr_38659_38719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (18))){
var inst_38619 = (state_38636[(2)]);
var state_38636__$1 = state_38636;
var statearr_38660_38720 = state_38636__$1;
(statearr_38660_38720[(2)] = inst_38619);

(statearr_38660_38720[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38637 === (8))){
var inst_38605 = cljs.core.async.close_BANG_.call(null,to);
var state_38636__$1 = state_38636;
var statearr_38661_38721 = state_38636__$1;
(statearr_38661_38721[(2)] = inst_38605);

(statearr_38661_38721[(1)] = (10));


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
});})(c__38330__auto__,jobs,results,process,async))
;
return ((function (switch__38240__auto__,c__38330__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____0 = (function (){
var statearr_38662 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38662[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__);

(statearr_38662[(1)] = (1));

return statearr_38662;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____1 = (function (state_38636){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_38636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e38663){if((e38663 instanceof Object)){
var ex__38244__auto__ = e38663;
var statearr_38664_38722 = state_38636;
(statearr_38664_38722[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38723 = state_38636;
state_38636 = G__38723;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__ = function(state_38636){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____1.call(this,state_38636);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38241__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto__,jobs,results,process,async))
})();
var state__38332__auto__ = (function (){var statearr_38665 = f__38331__auto__.call(null);
(statearr_38665[(6)] = c__38330__auto__);

return statearr_38665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto__,jobs,results,process,async))
);

return c__38330__auto__;
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
var G__38725 = arguments.length;
switch (G__38725) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__38728 = arguments.length;
switch (G__38728) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__38731 = arguments.length;
switch (G__38731) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38330__auto___38780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___38780,tc,fc){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___38780,tc,fc){
return (function (state_38757){
var state_val_38758 = (state_38757[(1)]);
if((state_val_38758 === (7))){
var inst_38753 = (state_38757[(2)]);
var state_38757__$1 = state_38757;
var statearr_38759_38781 = state_38757__$1;
(statearr_38759_38781[(2)] = inst_38753);

(statearr_38759_38781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38758 === (1))){
var state_38757__$1 = state_38757;
var statearr_38760_38782 = state_38757__$1;
(statearr_38760_38782[(2)] = null);

(statearr_38760_38782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38758 === (4))){
var inst_38734 = (state_38757[(7)]);
var inst_38734__$1 = (state_38757[(2)]);
var inst_38735 = (inst_38734__$1 == null);
var state_38757__$1 = (function (){var statearr_38761 = state_38757;
(statearr_38761[(7)] = inst_38734__$1);

return statearr_38761;
})();
if(cljs.core.truth_(inst_38735)){
var statearr_38762_38783 = state_38757__$1;
(statearr_38762_38783[(1)] = (5));

} else {
var statearr_38763_38784 = state_38757__$1;
(statearr_38763_38784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38758 === (13))){
var state_38757__$1 = state_38757;
var statearr_38764_38785 = state_38757__$1;
(statearr_38764_38785[(2)] = null);

(statearr_38764_38785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38758 === (6))){
var inst_38734 = (state_38757[(7)]);
var inst_38740 = p.call(null,inst_38734);
var state_38757__$1 = state_38757;
if(cljs.core.truth_(inst_38740)){
var statearr_38765_38786 = state_38757__$1;
(statearr_38765_38786[(1)] = (9));

} else {
var statearr_38766_38787 = state_38757__$1;
(statearr_38766_38787[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38758 === (3))){
var inst_38755 = (state_38757[(2)]);
var state_38757__$1 = state_38757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38757__$1,inst_38755);
} else {
if((state_val_38758 === (12))){
var state_38757__$1 = state_38757;
var statearr_38767_38788 = state_38757__$1;
(statearr_38767_38788[(2)] = null);

(statearr_38767_38788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38758 === (2))){
var state_38757__$1 = state_38757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38757__$1,(4),ch);
} else {
if((state_val_38758 === (11))){
var inst_38734 = (state_38757[(7)]);
var inst_38744 = (state_38757[(2)]);
var state_38757__$1 = state_38757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38757__$1,(8),inst_38744,inst_38734);
} else {
if((state_val_38758 === (9))){
var state_38757__$1 = state_38757;
var statearr_38768_38789 = state_38757__$1;
(statearr_38768_38789[(2)] = tc);

(statearr_38768_38789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38758 === (5))){
var inst_38737 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38738 = cljs.core.async.close_BANG_.call(null,fc);
var state_38757__$1 = (function (){var statearr_38769 = state_38757;
(statearr_38769[(8)] = inst_38737);

return statearr_38769;
})();
var statearr_38770_38790 = state_38757__$1;
(statearr_38770_38790[(2)] = inst_38738);

(statearr_38770_38790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38758 === (14))){
var inst_38751 = (state_38757[(2)]);
var state_38757__$1 = state_38757;
var statearr_38771_38791 = state_38757__$1;
(statearr_38771_38791[(2)] = inst_38751);

(statearr_38771_38791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38758 === (10))){
var state_38757__$1 = state_38757;
var statearr_38772_38792 = state_38757__$1;
(statearr_38772_38792[(2)] = fc);

(statearr_38772_38792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38758 === (8))){
var inst_38746 = (state_38757[(2)]);
var state_38757__$1 = state_38757;
if(cljs.core.truth_(inst_38746)){
var statearr_38773_38793 = state_38757__$1;
(statearr_38773_38793[(1)] = (12));

} else {
var statearr_38774_38794 = state_38757__$1;
(statearr_38774_38794[(1)] = (13));

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
});})(c__38330__auto___38780,tc,fc))
;
return ((function (switch__38240__auto__,c__38330__auto___38780,tc,fc){
return (function() {
var cljs$core$async$state_machine__38241__auto__ = null;
var cljs$core$async$state_machine__38241__auto____0 = (function (){
var statearr_38775 = [null,null,null,null,null,null,null,null,null];
(statearr_38775[(0)] = cljs$core$async$state_machine__38241__auto__);

(statearr_38775[(1)] = (1));

return statearr_38775;
});
var cljs$core$async$state_machine__38241__auto____1 = (function (state_38757){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_38757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e38776){if((e38776 instanceof Object)){
var ex__38244__auto__ = e38776;
var statearr_38777_38795 = state_38757;
(statearr_38777_38795[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38796 = state_38757;
state_38757 = G__38796;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$state_machine__38241__auto__ = function(state_38757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38241__auto____1.call(this,state_38757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38241__auto____0;
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38241__auto____1;
return cljs$core$async$state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___38780,tc,fc))
})();
var state__38332__auto__ = (function (){var statearr_38778 = f__38331__auto__.call(null);
(statearr_38778[(6)] = c__38330__auto___38780);

return statearr_38778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___38780,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38330__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto__){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto__){
return (function (state_38817){
var state_val_38818 = (state_38817[(1)]);
if((state_val_38818 === (7))){
var inst_38813 = (state_38817[(2)]);
var state_38817__$1 = state_38817;
var statearr_38819_38837 = state_38817__$1;
(statearr_38819_38837[(2)] = inst_38813);

(statearr_38819_38837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38818 === (1))){
var inst_38797 = init;
var state_38817__$1 = (function (){var statearr_38820 = state_38817;
(statearr_38820[(7)] = inst_38797);

return statearr_38820;
})();
var statearr_38821_38838 = state_38817__$1;
(statearr_38821_38838[(2)] = null);

(statearr_38821_38838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38818 === (4))){
var inst_38800 = (state_38817[(8)]);
var inst_38800__$1 = (state_38817[(2)]);
var inst_38801 = (inst_38800__$1 == null);
var state_38817__$1 = (function (){var statearr_38822 = state_38817;
(statearr_38822[(8)] = inst_38800__$1);

return statearr_38822;
})();
if(cljs.core.truth_(inst_38801)){
var statearr_38823_38839 = state_38817__$1;
(statearr_38823_38839[(1)] = (5));

} else {
var statearr_38824_38840 = state_38817__$1;
(statearr_38824_38840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38818 === (6))){
var inst_38797 = (state_38817[(7)]);
var inst_38804 = (state_38817[(9)]);
var inst_38800 = (state_38817[(8)]);
var inst_38804__$1 = f.call(null,inst_38797,inst_38800);
var inst_38805 = cljs.core.reduced_QMARK_.call(null,inst_38804__$1);
var state_38817__$1 = (function (){var statearr_38825 = state_38817;
(statearr_38825[(9)] = inst_38804__$1);

return statearr_38825;
})();
if(inst_38805){
var statearr_38826_38841 = state_38817__$1;
(statearr_38826_38841[(1)] = (8));

} else {
var statearr_38827_38842 = state_38817__$1;
(statearr_38827_38842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38818 === (3))){
var inst_38815 = (state_38817[(2)]);
var state_38817__$1 = state_38817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38817__$1,inst_38815);
} else {
if((state_val_38818 === (2))){
var state_38817__$1 = state_38817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38817__$1,(4),ch);
} else {
if((state_val_38818 === (9))){
var inst_38804 = (state_38817[(9)]);
var inst_38797 = inst_38804;
var state_38817__$1 = (function (){var statearr_38828 = state_38817;
(statearr_38828[(7)] = inst_38797);

return statearr_38828;
})();
var statearr_38829_38843 = state_38817__$1;
(statearr_38829_38843[(2)] = null);

(statearr_38829_38843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38818 === (5))){
var inst_38797 = (state_38817[(7)]);
var state_38817__$1 = state_38817;
var statearr_38830_38844 = state_38817__$1;
(statearr_38830_38844[(2)] = inst_38797);

(statearr_38830_38844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38818 === (10))){
var inst_38811 = (state_38817[(2)]);
var state_38817__$1 = state_38817;
var statearr_38831_38845 = state_38817__$1;
(statearr_38831_38845[(2)] = inst_38811);

(statearr_38831_38845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38818 === (8))){
var inst_38804 = (state_38817[(9)]);
var inst_38807 = cljs.core.deref.call(null,inst_38804);
var state_38817__$1 = state_38817;
var statearr_38832_38846 = state_38817__$1;
(statearr_38832_38846[(2)] = inst_38807);

(statearr_38832_38846[(1)] = (10));


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
});})(c__38330__auto__))
;
return ((function (switch__38240__auto__,c__38330__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38241__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38241__auto____0 = (function (){
var statearr_38833 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38833[(0)] = cljs$core$async$reduce_$_state_machine__38241__auto__);

(statearr_38833[(1)] = (1));

return statearr_38833;
});
var cljs$core$async$reduce_$_state_machine__38241__auto____1 = (function (state_38817){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_38817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e38834){if((e38834 instanceof Object)){
var ex__38244__auto__ = e38834;
var statearr_38835_38847 = state_38817;
(statearr_38835_38847[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38848 = state_38817;
state_38817 = G__38848;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38241__auto__ = function(state_38817){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38241__auto____1.call(this,state_38817);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38241__auto____0;
cljs$core$async$reduce_$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38241__auto____1;
return cljs$core$async$reduce_$_state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto__))
})();
var state__38332__auto__ = (function (){var statearr_38836 = f__38331__auto__.call(null);
(statearr_38836[(6)] = c__38330__auto__);

return statearr_38836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto__))
);

return c__38330__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__38330__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto__,f__$1){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto__,f__$1){
return (function (state_38854){
var state_val_38855 = (state_38854[(1)]);
if((state_val_38855 === (1))){
var inst_38849 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_38854__$1 = state_38854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38854__$1,(2),inst_38849);
} else {
if((state_val_38855 === (2))){
var inst_38851 = (state_38854[(2)]);
var inst_38852 = f__$1.call(null,inst_38851);
var state_38854__$1 = state_38854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38854__$1,inst_38852);
} else {
return null;
}
}
});})(c__38330__auto__,f__$1))
;
return ((function (switch__38240__auto__,c__38330__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38241__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38241__auto____0 = (function (){
var statearr_38856 = [null,null,null,null,null,null,null];
(statearr_38856[(0)] = cljs$core$async$transduce_$_state_machine__38241__auto__);

(statearr_38856[(1)] = (1));

return statearr_38856;
});
var cljs$core$async$transduce_$_state_machine__38241__auto____1 = (function (state_38854){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_38854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e38857){if((e38857 instanceof Object)){
var ex__38244__auto__ = e38857;
var statearr_38858_38860 = state_38854;
(statearr_38858_38860[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38861 = state_38854;
state_38854 = G__38861;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38241__auto__ = function(state_38854){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38241__auto____1.call(this,state_38854);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38241__auto____0;
cljs$core$async$transduce_$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38241__auto____1;
return cljs$core$async$transduce_$_state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto__,f__$1))
})();
var state__38332__auto__ = (function (){var statearr_38859 = f__38331__auto__.call(null);
(statearr_38859[(6)] = c__38330__auto__);

return statearr_38859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto__,f__$1))
);

return c__38330__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38863 = arguments.length;
switch (G__38863) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38330__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto__){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto__){
return (function (state_38888){
var state_val_38889 = (state_38888[(1)]);
if((state_val_38889 === (7))){
var inst_38870 = (state_38888[(2)]);
var state_38888__$1 = state_38888;
var statearr_38890_38911 = state_38888__$1;
(statearr_38890_38911[(2)] = inst_38870);

(statearr_38890_38911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (1))){
var inst_38864 = cljs.core.seq.call(null,coll);
var inst_38865 = inst_38864;
var state_38888__$1 = (function (){var statearr_38891 = state_38888;
(statearr_38891[(7)] = inst_38865);

return statearr_38891;
})();
var statearr_38892_38912 = state_38888__$1;
(statearr_38892_38912[(2)] = null);

(statearr_38892_38912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (4))){
var inst_38865 = (state_38888[(7)]);
var inst_38868 = cljs.core.first.call(null,inst_38865);
var state_38888__$1 = state_38888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38888__$1,(7),ch,inst_38868);
} else {
if((state_val_38889 === (13))){
var inst_38882 = (state_38888[(2)]);
var state_38888__$1 = state_38888;
var statearr_38893_38913 = state_38888__$1;
(statearr_38893_38913[(2)] = inst_38882);

(statearr_38893_38913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (6))){
var inst_38873 = (state_38888[(2)]);
var state_38888__$1 = state_38888;
if(cljs.core.truth_(inst_38873)){
var statearr_38894_38914 = state_38888__$1;
(statearr_38894_38914[(1)] = (8));

} else {
var statearr_38895_38915 = state_38888__$1;
(statearr_38895_38915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (3))){
var inst_38886 = (state_38888[(2)]);
var state_38888__$1 = state_38888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38888__$1,inst_38886);
} else {
if((state_val_38889 === (12))){
var state_38888__$1 = state_38888;
var statearr_38896_38916 = state_38888__$1;
(statearr_38896_38916[(2)] = null);

(statearr_38896_38916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (2))){
var inst_38865 = (state_38888[(7)]);
var state_38888__$1 = state_38888;
if(cljs.core.truth_(inst_38865)){
var statearr_38897_38917 = state_38888__$1;
(statearr_38897_38917[(1)] = (4));

} else {
var statearr_38898_38918 = state_38888__$1;
(statearr_38898_38918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (11))){
var inst_38879 = cljs.core.async.close_BANG_.call(null,ch);
var state_38888__$1 = state_38888;
var statearr_38899_38919 = state_38888__$1;
(statearr_38899_38919[(2)] = inst_38879);

(statearr_38899_38919[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (9))){
var state_38888__$1 = state_38888;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38900_38920 = state_38888__$1;
(statearr_38900_38920[(1)] = (11));

} else {
var statearr_38901_38921 = state_38888__$1;
(statearr_38901_38921[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (5))){
var inst_38865 = (state_38888[(7)]);
var state_38888__$1 = state_38888;
var statearr_38902_38922 = state_38888__$1;
(statearr_38902_38922[(2)] = inst_38865);

(statearr_38902_38922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (10))){
var inst_38884 = (state_38888[(2)]);
var state_38888__$1 = state_38888;
var statearr_38903_38923 = state_38888__$1;
(statearr_38903_38923[(2)] = inst_38884);

(statearr_38903_38923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (8))){
var inst_38865 = (state_38888[(7)]);
var inst_38875 = cljs.core.next.call(null,inst_38865);
var inst_38865__$1 = inst_38875;
var state_38888__$1 = (function (){var statearr_38904 = state_38888;
(statearr_38904[(7)] = inst_38865__$1);

return statearr_38904;
})();
var statearr_38905_38924 = state_38888__$1;
(statearr_38905_38924[(2)] = null);

(statearr_38905_38924[(1)] = (2));


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
});})(c__38330__auto__))
;
return ((function (switch__38240__auto__,c__38330__auto__){
return (function() {
var cljs$core$async$state_machine__38241__auto__ = null;
var cljs$core$async$state_machine__38241__auto____0 = (function (){
var statearr_38906 = [null,null,null,null,null,null,null,null];
(statearr_38906[(0)] = cljs$core$async$state_machine__38241__auto__);

(statearr_38906[(1)] = (1));

return statearr_38906;
});
var cljs$core$async$state_machine__38241__auto____1 = (function (state_38888){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_38888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e38907){if((e38907 instanceof Object)){
var ex__38244__auto__ = e38907;
var statearr_38908_38925 = state_38888;
(statearr_38908_38925[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38926 = state_38888;
state_38888 = G__38926;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$state_machine__38241__auto__ = function(state_38888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38241__auto____1.call(this,state_38888);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38241__auto____0;
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38241__auto____1;
return cljs$core$async$state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto__))
})();
var state__38332__auto__ = (function (){var statearr_38909 = f__38331__auto__.call(null);
(statearr_38909[(6)] = c__38330__auto__);

return statearr_38909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto__))
);

return c__38330__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__31608__auto__ = (((_ == null))?null:_);
var m__31609__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31608__auto__)]);
if(!((m__31609__auto__ == null))){
return m__31609__auto__.call(null,_);
} else {
var m__31609__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31609__auto____$1 == null))){
return m__31609__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__31608__auto__ = (((m == null))?null:m);
var m__31609__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31608__auto__)]);
if(!((m__31609__auto__ == null))){
return m__31609__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__31609__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31609__auto____$1 == null))){
return m__31609__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__31608__auto__ = (((m == null))?null:m);
var m__31609__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31608__auto__)]);
if(!((m__31609__auto__ == null))){
return m__31609__auto__.call(null,m,ch);
} else {
var m__31609__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31609__auto____$1 == null))){
return m__31609__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__31608__auto__ = (((m == null))?null:m);
var m__31609__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31608__auto__)]);
if(!((m__31609__auto__ == null))){
return m__31609__auto__.call(null,m);
} else {
var m__31609__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31609__auto____$1 == null))){
return m__31609__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38927 = (function (ch,cs,meta38928){
this.ch = ch;
this.cs = cs;
this.meta38928 = meta38928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38929,meta38928__$1){
var self__ = this;
var _38929__$1 = this;
return (new cljs.core.async.t_cljs$core$async38927(self__.ch,self__.cs,meta38928__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38929){
var self__ = this;
var _38929__$1 = this;
return self__.meta38928;
});})(cs))
;

cljs.core.async.t_cljs$core$async38927.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38927.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38927.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38927.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38927.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38927.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38927.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38928","meta38928",-1617343063,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38927";

cljs.core.async.t_cljs$core$async38927.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31546__auto__,writer__31547__auto__,opt__31548__auto__){
return cljs.core._write.call(null,writer__31547__auto__,"cljs.core.async/t_cljs$core$async38927");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38927 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38927(ch__$1,cs__$1,meta38928){
return (new cljs.core.async.t_cljs$core$async38927(ch__$1,cs__$1,meta38928));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38927(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__38330__auto___39149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___39149,cs,m,dchan,dctr,done){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___39149,cs,m,dchan,dctr,done){
return (function (state_39064){
var state_val_39065 = (state_39064[(1)]);
if((state_val_39065 === (7))){
var inst_39060 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
var statearr_39066_39150 = state_39064__$1;
(statearr_39066_39150[(2)] = inst_39060);

(statearr_39066_39150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (20))){
var inst_38963 = (state_39064[(7)]);
var inst_38975 = cljs.core.first.call(null,inst_38963);
var inst_38976 = cljs.core.nth.call(null,inst_38975,(0),null);
var inst_38977 = cljs.core.nth.call(null,inst_38975,(1),null);
var state_39064__$1 = (function (){var statearr_39067 = state_39064;
(statearr_39067[(8)] = inst_38976);

return statearr_39067;
})();
if(cljs.core.truth_(inst_38977)){
var statearr_39068_39151 = state_39064__$1;
(statearr_39068_39151[(1)] = (22));

} else {
var statearr_39069_39152 = state_39064__$1;
(statearr_39069_39152[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (27))){
var inst_38932 = (state_39064[(9)]);
var inst_39005 = (state_39064[(10)]);
var inst_39012 = (state_39064[(11)]);
var inst_39007 = (state_39064[(12)]);
var inst_39012__$1 = cljs.core._nth.call(null,inst_39005,inst_39007);
var inst_39013 = cljs.core.async.put_BANG_.call(null,inst_39012__$1,inst_38932,done);
var state_39064__$1 = (function (){var statearr_39070 = state_39064;
(statearr_39070[(11)] = inst_39012__$1);

return statearr_39070;
})();
if(cljs.core.truth_(inst_39013)){
var statearr_39071_39153 = state_39064__$1;
(statearr_39071_39153[(1)] = (30));

} else {
var statearr_39072_39154 = state_39064__$1;
(statearr_39072_39154[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (1))){
var state_39064__$1 = state_39064;
var statearr_39073_39155 = state_39064__$1;
(statearr_39073_39155[(2)] = null);

(statearr_39073_39155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (24))){
var inst_38963 = (state_39064[(7)]);
var inst_38982 = (state_39064[(2)]);
var inst_38983 = cljs.core.next.call(null,inst_38963);
var inst_38941 = inst_38983;
var inst_38942 = null;
var inst_38943 = (0);
var inst_38944 = (0);
var state_39064__$1 = (function (){var statearr_39074 = state_39064;
(statearr_39074[(13)] = inst_38941);

(statearr_39074[(14)] = inst_38944);

(statearr_39074[(15)] = inst_38942);

(statearr_39074[(16)] = inst_38943);

(statearr_39074[(17)] = inst_38982);

return statearr_39074;
})();
var statearr_39075_39156 = state_39064__$1;
(statearr_39075_39156[(2)] = null);

(statearr_39075_39156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (39))){
var state_39064__$1 = state_39064;
var statearr_39079_39157 = state_39064__$1;
(statearr_39079_39157[(2)] = null);

(statearr_39079_39157[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (4))){
var inst_38932 = (state_39064[(9)]);
var inst_38932__$1 = (state_39064[(2)]);
var inst_38933 = (inst_38932__$1 == null);
var state_39064__$1 = (function (){var statearr_39080 = state_39064;
(statearr_39080[(9)] = inst_38932__$1);

return statearr_39080;
})();
if(cljs.core.truth_(inst_38933)){
var statearr_39081_39158 = state_39064__$1;
(statearr_39081_39158[(1)] = (5));

} else {
var statearr_39082_39159 = state_39064__$1;
(statearr_39082_39159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (15))){
var inst_38941 = (state_39064[(13)]);
var inst_38944 = (state_39064[(14)]);
var inst_38942 = (state_39064[(15)]);
var inst_38943 = (state_39064[(16)]);
var inst_38959 = (state_39064[(2)]);
var inst_38960 = (inst_38944 + (1));
var tmp39076 = inst_38941;
var tmp39077 = inst_38942;
var tmp39078 = inst_38943;
var inst_38941__$1 = tmp39076;
var inst_38942__$1 = tmp39077;
var inst_38943__$1 = tmp39078;
var inst_38944__$1 = inst_38960;
var state_39064__$1 = (function (){var statearr_39083 = state_39064;
(statearr_39083[(13)] = inst_38941__$1);

(statearr_39083[(14)] = inst_38944__$1);

(statearr_39083[(18)] = inst_38959);

(statearr_39083[(15)] = inst_38942__$1);

(statearr_39083[(16)] = inst_38943__$1);

return statearr_39083;
})();
var statearr_39084_39160 = state_39064__$1;
(statearr_39084_39160[(2)] = null);

(statearr_39084_39160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (21))){
var inst_38986 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
var statearr_39088_39161 = state_39064__$1;
(statearr_39088_39161[(2)] = inst_38986);

(statearr_39088_39161[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (31))){
var inst_39012 = (state_39064[(11)]);
var inst_39016 = done.call(null,null);
var inst_39017 = cljs.core.async.untap_STAR_.call(null,m,inst_39012);
var state_39064__$1 = (function (){var statearr_39089 = state_39064;
(statearr_39089[(19)] = inst_39016);

return statearr_39089;
})();
var statearr_39090_39162 = state_39064__$1;
(statearr_39090_39162[(2)] = inst_39017);

(statearr_39090_39162[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (32))){
var inst_39004 = (state_39064[(20)]);
var inst_39006 = (state_39064[(21)]);
var inst_39005 = (state_39064[(10)]);
var inst_39007 = (state_39064[(12)]);
var inst_39019 = (state_39064[(2)]);
var inst_39020 = (inst_39007 + (1));
var tmp39085 = inst_39004;
var tmp39086 = inst_39006;
var tmp39087 = inst_39005;
var inst_39004__$1 = tmp39085;
var inst_39005__$1 = tmp39087;
var inst_39006__$1 = tmp39086;
var inst_39007__$1 = inst_39020;
var state_39064__$1 = (function (){var statearr_39091 = state_39064;
(statearr_39091[(20)] = inst_39004__$1);

(statearr_39091[(21)] = inst_39006__$1);

(statearr_39091[(10)] = inst_39005__$1);

(statearr_39091[(22)] = inst_39019);

(statearr_39091[(12)] = inst_39007__$1);

return statearr_39091;
})();
var statearr_39092_39163 = state_39064__$1;
(statearr_39092_39163[(2)] = null);

(statearr_39092_39163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (40))){
var inst_39032 = (state_39064[(23)]);
var inst_39036 = done.call(null,null);
var inst_39037 = cljs.core.async.untap_STAR_.call(null,m,inst_39032);
var state_39064__$1 = (function (){var statearr_39093 = state_39064;
(statearr_39093[(24)] = inst_39036);

return statearr_39093;
})();
var statearr_39094_39164 = state_39064__$1;
(statearr_39094_39164[(2)] = inst_39037);

(statearr_39094_39164[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (33))){
var inst_39023 = (state_39064[(25)]);
var inst_39025 = cljs.core.chunked_seq_QMARK_.call(null,inst_39023);
var state_39064__$1 = state_39064;
if(inst_39025){
var statearr_39095_39165 = state_39064__$1;
(statearr_39095_39165[(1)] = (36));

} else {
var statearr_39096_39166 = state_39064__$1;
(statearr_39096_39166[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (13))){
var inst_38953 = (state_39064[(26)]);
var inst_38956 = cljs.core.async.close_BANG_.call(null,inst_38953);
var state_39064__$1 = state_39064;
var statearr_39097_39167 = state_39064__$1;
(statearr_39097_39167[(2)] = inst_38956);

(statearr_39097_39167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (22))){
var inst_38976 = (state_39064[(8)]);
var inst_38979 = cljs.core.async.close_BANG_.call(null,inst_38976);
var state_39064__$1 = state_39064;
var statearr_39098_39168 = state_39064__$1;
(statearr_39098_39168[(2)] = inst_38979);

(statearr_39098_39168[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (36))){
var inst_39023 = (state_39064[(25)]);
var inst_39027 = cljs.core.chunk_first.call(null,inst_39023);
var inst_39028 = cljs.core.chunk_rest.call(null,inst_39023);
var inst_39029 = cljs.core.count.call(null,inst_39027);
var inst_39004 = inst_39028;
var inst_39005 = inst_39027;
var inst_39006 = inst_39029;
var inst_39007 = (0);
var state_39064__$1 = (function (){var statearr_39099 = state_39064;
(statearr_39099[(20)] = inst_39004);

(statearr_39099[(21)] = inst_39006);

(statearr_39099[(10)] = inst_39005);

(statearr_39099[(12)] = inst_39007);

return statearr_39099;
})();
var statearr_39100_39169 = state_39064__$1;
(statearr_39100_39169[(2)] = null);

(statearr_39100_39169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (41))){
var inst_39023 = (state_39064[(25)]);
var inst_39039 = (state_39064[(2)]);
var inst_39040 = cljs.core.next.call(null,inst_39023);
var inst_39004 = inst_39040;
var inst_39005 = null;
var inst_39006 = (0);
var inst_39007 = (0);
var state_39064__$1 = (function (){var statearr_39101 = state_39064;
(statearr_39101[(20)] = inst_39004);

(statearr_39101[(21)] = inst_39006);

(statearr_39101[(10)] = inst_39005);

(statearr_39101[(12)] = inst_39007);

(statearr_39101[(27)] = inst_39039);

return statearr_39101;
})();
var statearr_39102_39170 = state_39064__$1;
(statearr_39102_39170[(2)] = null);

(statearr_39102_39170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (43))){
var state_39064__$1 = state_39064;
var statearr_39103_39171 = state_39064__$1;
(statearr_39103_39171[(2)] = null);

(statearr_39103_39171[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (29))){
var inst_39048 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
var statearr_39104_39172 = state_39064__$1;
(statearr_39104_39172[(2)] = inst_39048);

(statearr_39104_39172[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (44))){
var inst_39057 = (state_39064[(2)]);
var state_39064__$1 = (function (){var statearr_39105 = state_39064;
(statearr_39105[(28)] = inst_39057);

return statearr_39105;
})();
var statearr_39106_39173 = state_39064__$1;
(statearr_39106_39173[(2)] = null);

(statearr_39106_39173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (6))){
var inst_38996 = (state_39064[(29)]);
var inst_38995 = cljs.core.deref.call(null,cs);
var inst_38996__$1 = cljs.core.keys.call(null,inst_38995);
var inst_38997 = cljs.core.count.call(null,inst_38996__$1);
var inst_38998 = cljs.core.reset_BANG_.call(null,dctr,inst_38997);
var inst_39003 = cljs.core.seq.call(null,inst_38996__$1);
var inst_39004 = inst_39003;
var inst_39005 = null;
var inst_39006 = (0);
var inst_39007 = (0);
var state_39064__$1 = (function (){var statearr_39107 = state_39064;
(statearr_39107[(20)] = inst_39004);

(statearr_39107[(21)] = inst_39006);

(statearr_39107[(10)] = inst_39005);

(statearr_39107[(29)] = inst_38996__$1);

(statearr_39107[(30)] = inst_38998);

(statearr_39107[(12)] = inst_39007);

return statearr_39107;
})();
var statearr_39108_39174 = state_39064__$1;
(statearr_39108_39174[(2)] = null);

(statearr_39108_39174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (28))){
var inst_39004 = (state_39064[(20)]);
var inst_39023 = (state_39064[(25)]);
var inst_39023__$1 = cljs.core.seq.call(null,inst_39004);
var state_39064__$1 = (function (){var statearr_39109 = state_39064;
(statearr_39109[(25)] = inst_39023__$1);

return statearr_39109;
})();
if(inst_39023__$1){
var statearr_39110_39175 = state_39064__$1;
(statearr_39110_39175[(1)] = (33));

} else {
var statearr_39111_39176 = state_39064__$1;
(statearr_39111_39176[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (25))){
var inst_39006 = (state_39064[(21)]);
var inst_39007 = (state_39064[(12)]);
var inst_39009 = (inst_39007 < inst_39006);
var inst_39010 = inst_39009;
var state_39064__$1 = state_39064;
if(cljs.core.truth_(inst_39010)){
var statearr_39112_39177 = state_39064__$1;
(statearr_39112_39177[(1)] = (27));

} else {
var statearr_39113_39178 = state_39064__$1;
(statearr_39113_39178[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (34))){
var state_39064__$1 = state_39064;
var statearr_39114_39179 = state_39064__$1;
(statearr_39114_39179[(2)] = null);

(statearr_39114_39179[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (17))){
var state_39064__$1 = state_39064;
var statearr_39115_39180 = state_39064__$1;
(statearr_39115_39180[(2)] = null);

(statearr_39115_39180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (3))){
var inst_39062 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39064__$1,inst_39062);
} else {
if((state_val_39065 === (12))){
var inst_38991 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
var statearr_39116_39181 = state_39064__$1;
(statearr_39116_39181[(2)] = inst_38991);

(statearr_39116_39181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (2))){
var state_39064__$1 = state_39064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39064__$1,(4),ch);
} else {
if((state_val_39065 === (23))){
var state_39064__$1 = state_39064;
var statearr_39117_39182 = state_39064__$1;
(statearr_39117_39182[(2)] = null);

(statearr_39117_39182[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (35))){
var inst_39046 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
var statearr_39118_39183 = state_39064__$1;
(statearr_39118_39183[(2)] = inst_39046);

(statearr_39118_39183[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (19))){
var inst_38963 = (state_39064[(7)]);
var inst_38967 = cljs.core.chunk_first.call(null,inst_38963);
var inst_38968 = cljs.core.chunk_rest.call(null,inst_38963);
var inst_38969 = cljs.core.count.call(null,inst_38967);
var inst_38941 = inst_38968;
var inst_38942 = inst_38967;
var inst_38943 = inst_38969;
var inst_38944 = (0);
var state_39064__$1 = (function (){var statearr_39119 = state_39064;
(statearr_39119[(13)] = inst_38941);

(statearr_39119[(14)] = inst_38944);

(statearr_39119[(15)] = inst_38942);

(statearr_39119[(16)] = inst_38943);

return statearr_39119;
})();
var statearr_39120_39184 = state_39064__$1;
(statearr_39120_39184[(2)] = null);

(statearr_39120_39184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (11))){
var inst_38963 = (state_39064[(7)]);
var inst_38941 = (state_39064[(13)]);
var inst_38963__$1 = cljs.core.seq.call(null,inst_38941);
var state_39064__$1 = (function (){var statearr_39121 = state_39064;
(statearr_39121[(7)] = inst_38963__$1);

return statearr_39121;
})();
if(inst_38963__$1){
var statearr_39122_39185 = state_39064__$1;
(statearr_39122_39185[(1)] = (16));

} else {
var statearr_39123_39186 = state_39064__$1;
(statearr_39123_39186[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (9))){
var inst_38993 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
var statearr_39124_39187 = state_39064__$1;
(statearr_39124_39187[(2)] = inst_38993);

(statearr_39124_39187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (5))){
var inst_38939 = cljs.core.deref.call(null,cs);
var inst_38940 = cljs.core.seq.call(null,inst_38939);
var inst_38941 = inst_38940;
var inst_38942 = null;
var inst_38943 = (0);
var inst_38944 = (0);
var state_39064__$1 = (function (){var statearr_39125 = state_39064;
(statearr_39125[(13)] = inst_38941);

(statearr_39125[(14)] = inst_38944);

(statearr_39125[(15)] = inst_38942);

(statearr_39125[(16)] = inst_38943);

return statearr_39125;
})();
var statearr_39126_39188 = state_39064__$1;
(statearr_39126_39188[(2)] = null);

(statearr_39126_39188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (14))){
var state_39064__$1 = state_39064;
var statearr_39127_39189 = state_39064__$1;
(statearr_39127_39189[(2)] = null);

(statearr_39127_39189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (45))){
var inst_39054 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
var statearr_39128_39190 = state_39064__$1;
(statearr_39128_39190[(2)] = inst_39054);

(statearr_39128_39190[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (26))){
var inst_38996 = (state_39064[(29)]);
var inst_39050 = (state_39064[(2)]);
var inst_39051 = cljs.core.seq.call(null,inst_38996);
var state_39064__$1 = (function (){var statearr_39129 = state_39064;
(statearr_39129[(31)] = inst_39050);

return statearr_39129;
})();
if(inst_39051){
var statearr_39130_39191 = state_39064__$1;
(statearr_39130_39191[(1)] = (42));

} else {
var statearr_39131_39192 = state_39064__$1;
(statearr_39131_39192[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (16))){
var inst_38963 = (state_39064[(7)]);
var inst_38965 = cljs.core.chunked_seq_QMARK_.call(null,inst_38963);
var state_39064__$1 = state_39064;
if(inst_38965){
var statearr_39132_39193 = state_39064__$1;
(statearr_39132_39193[(1)] = (19));

} else {
var statearr_39133_39194 = state_39064__$1;
(statearr_39133_39194[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (38))){
var inst_39043 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
var statearr_39134_39195 = state_39064__$1;
(statearr_39134_39195[(2)] = inst_39043);

(statearr_39134_39195[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (30))){
var state_39064__$1 = state_39064;
var statearr_39135_39196 = state_39064__$1;
(statearr_39135_39196[(2)] = null);

(statearr_39135_39196[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (10))){
var inst_38944 = (state_39064[(14)]);
var inst_38942 = (state_39064[(15)]);
var inst_38952 = cljs.core._nth.call(null,inst_38942,inst_38944);
var inst_38953 = cljs.core.nth.call(null,inst_38952,(0),null);
var inst_38954 = cljs.core.nth.call(null,inst_38952,(1),null);
var state_39064__$1 = (function (){var statearr_39136 = state_39064;
(statearr_39136[(26)] = inst_38953);

return statearr_39136;
})();
if(cljs.core.truth_(inst_38954)){
var statearr_39137_39197 = state_39064__$1;
(statearr_39137_39197[(1)] = (13));

} else {
var statearr_39138_39198 = state_39064__$1;
(statearr_39138_39198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (18))){
var inst_38989 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
var statearr_39139_39199 = state_39064__$1;
(statearr_39139_39199[(2)] = inst_38989);

(statearr_39139_39199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (42))){
var state_39064__$1 = state_39064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39064__$1,(45),dchan);
} else {
if((state_val_39065 === (37))){
var inst_38932 = (state_39064[(9)]);
var inst_39032 = (state_39064[(23)]);
var inst_39023 = (state_39064[(25)]);
var inst_39032__$1 = cljs.core.first.call(null,inst_39023);
var inst_39033 = cljs.core.async.put_BANG_.call(null,inst_39032__$1,inst_38932,done);
var state_39064__$1 = (function (){var statearr_39140 = state_39064;
(statearr_39140[(23)] = inst_39032__$1);

return statearr_39140;
})();
if(cljs.core.truth_(inst_39033)){
var statearr_39141_39200 = state_39064__$1;
(statearr_39141_39200[(1)] = (39));

} else {
var statearr_39142_39201 = state_39064__$1;
(statearr_39142_39201[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (8))){
var inst_38944 = (state_39064[(14)]);
var inst_38943 = (state_39064[(16)]);
var inst_38946 = (inst_38944 < inst_38943);
var inst_38947 = inst_38946;
var state_39064__$1 = state_39064;
if(cljs.core.truth_(inst_38947)){
var statearr_39143_39202 = state_39064__$1;
(statearr_39143_39202[(1)] = (10));

} else {
var statearr_39144_39203 = state_39064__$1;
(statearr_39144_39203[(1)] = (11));

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
});})(c__38330__auto___39149,cs,m,dchan,dctr,done))
;
return ((function (switch__38240__auto__,c__38330__auto___39149,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38241__auto__ = null;
var cljs$core$async$mult_$_state_machine__38241__auto____0 = (function (){
var statearr_39145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39145[(0)] = cljs$core$async$mult_$_state_machine__38241__auto__);

(statearr_39145[(1)] = (1));

return statearr_39145;
});
var cljs$core$async$mult_$_state_machine__38241__auto____1 = (function (state_39064){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_39064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e39146){if((e39146 instanceof Object)){
var ex__38244__auto__ = e39146;
var statearr_39147_39204 = state_39064;
(statearr_39147_39204[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39205 = state_39064;
state_39064 = G__39205;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38241__auto__ = function(state_39064){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38241__auto____1.call(this,state_39064);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38241__auto____0;
cljs$core$async$mult_$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38241__auto____1;
return cljs$core$async$mult_$_state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___39149,cs,m,dchan,dctr,done))
})();
var state__38332__auto__ = (function (){var statearr_39148 = f__38331__auto__.call(null);
(statearr_39148[(6)] = c__38330__auto___39149);

return statearr_39148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___39149,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39207 = arguments.length;
switch (G__39207) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__31608__auto__ = (((m == null))?null:m);
var m__31609__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31608__auto__)]);
if(!((m__31609__auto__ == null))){
return m__31609__auto__.call(null,m,ch);
} else {
var m__31609__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31609__auto____$1 == null))){
return m__31609__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__31608__auto__ = (((m == null))?null:m);
var m__31609__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31608__auto__)]);
if(!((m__31609__auto__ == null))){
return m__31609__auto__.call(null,m,ch);
} else {
var m__31609__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31609__auto____$1 == null))){
return m__31609__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__31608__auto__ = (((m == null))?null:m);
var m__31609__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31608__auto__)]);
if(!((m__31609__auto__ == null))){
return m__31609__auto__.call(null,m);
} else {
var m__31609__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31609__auto____$1 == null))){
return m__31609__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__31608__auto__ = (((m == null))?null:m);
var m__31609__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31608__auto__)]);
if(!((m__31609__auto__ == null))){
return m__31609__auto__.call(null,m,state_map);
} else {
var m__31609__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31609__auto____$1 == null))){
return m__31609__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__31608__auto__ = (((m == null))?null:m);
var m__31609__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31608__auto__)]);
if(!((m__31609__auto__ == null))){
return m__31609__auto__.call(null,m,mode);
} else {
var m__31609__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31609__auto____$1 == null))){
return m__31609__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__32159__auto__ = [];
var len__32152__auto___39219 = arguments.length;
var i__32153__auto___39220 = (0);
while(true){
if((i__32153__auto___39220 < len__32152__auto___39219)){
args__32159__auto__.push((arguments[i__32153__auto___39220]));

var G__39221 = (i__32153__auto___39220 + (1));
i__32153__auto___39220 = G__39221;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((3) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39213){
var map__39214 = p__39213;
var map__39214__$1 = ((((!((map__39214 == null)))?((((map__39214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39214):map__39214);
var opts = map__39214__$1;
var statearr_39216_39222 = state;
(statearr_39216_39222[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__39214,map__39214__$1,opts){
return (function (val){
var statearr_39217_39223 = state;
(statearr_39217_39223[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39214,map__39214__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_39218_39224 = state;
(statearr_39218_39224[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39209){
var G__39210 = cljs.core.first.call(null,seq39209);
var seq39209__$1 = cljs.core.next.call(null,seq39209);
var G__39211 = cljs.core.first.call(null,seq39209__$1);
var seq39209__$2 = cljs.core.next.call(null,seq39209__$1);
var G__39212 = cljs.core.first.call(null,seq39209__$2);
var seq39209__$3 = cljs.core.next.call(null,seq39209__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39210,G__39211,G__39212,seq39209__$3);
});

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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39225 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta39226){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta39226 = meta39226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39227,meta39226__$1){
var self__ = this;
var _39227__$1 = this;
return (new cljs.core.async.t_cljs$core$async39225(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta39226__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39227){
var self__ = this;
var _39227__$1 = this;
return self__.meta39226;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39225.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39225.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39225.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39225.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39225.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39225.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39225.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39225.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39225.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta39226","meta39226",558308394,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39225.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39225";

cljs.core.async.t_cljs$core$async39225.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31546__auto__,writer__31547__auto__,opt__31548__auto__){
return cljs.core._write.call(null,writer__31547__auto__,"cljs.core.async/t_cljs$core$async39225");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async39225 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39225(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39226){
return (new cljs.core.async.t_cljs$core$async39225(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39226));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39225(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38330__auto___39389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___39389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___39389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39329){
var state_val_39330 = (state_39329[(1)]);
if((state_val_39330 === (7))){
var inst_39244 = (state_39329[(2)]);
var state_39329__$1 = state_39329;
var statearr_39331_39390 = state_39329__$1;
(statearr_39331_39390[(2)] = inst_39244);

(statearr_39331_39390[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (20))){
var inst_39256 = (state_39329[(7)]);
var state_39329__$1 = state_39329;
var statearr_39332_39391 = state_39329__$1;
(statearr_39332_39391[(2)] = inst_39256);

(statearr_39332_39391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (27))){
var state_39329__$1 = state_39329;
var statearr_39333_39392 = state_39329__$1;
(statearr_39333_39392[(2)] = null);

(statearr_39333_39392[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (1))){
var inst_39231 = (state_39329[(8)]);
var inst_39231__$1 = calc_state.call(null);
var inst_39233 = (inst_39231__$1 == null);
var inst_39234 = cljs.core.not.call(null,inst_39233);
var state_39329__$1 = (function (){var statearr_39334 = state_39329;
(statearr_39334[(8)] = inst_39231__$1);

return statearr_39334;
})();
if(inst_39234){
var statearr_39335_39393 = state_39329__$1;
(statearr_39335_39393[(1)] = (2));

} else {
var statearr_39336_39394 = state_39329__$1;
(statearr_39336_39394[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (24))){
var inst_39303 = (state_39329[(9)]);
var inst_39280 = (state_39329[(10)]);
var inst_39289 = (state_39329[(11)]);
var inst_39303__$1 = inst_39280.call(null,inst_39289);
var state_39329__$1 = (function (){var statearr_39337 = state_39329;
(statearr_39337[(9)] = inst_39303__$1);

return statearr_39337;
})();
if(cljs.core.truth_(inst_39303__$1)){
var statearr_39338_39395 = state_39329__$1;
(statearr_39338_39395[(1)] = (29));

} else {
var statearr_39339_39396 = state_39329__$1;
(statearr_39339_39396[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (4))){
var inst_39247 = (state_39329[(2)]);
var state_39329__$1 = state_39329;
if(cljs.core.truth_(inst_39247)){
var statearr_39340_39397 = state_39329__$1;
(statearr_39340_39397[(1)] = (8));

} else {
var statearr_39341_39398 = state_39329__$1;
(statearr_39341_39398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (15))){
var inst_39274 = (state_39329[(2)]);
var state_39329__$1 = state_39329;
if(cljs.core.truth_(inst_39274)){
var statearr_39342_39399 = state_39329__$1;
(statearr_39342_39399[(1)] = (19));

} else {
var statearr_39343_39400 = state_39329__$1;
(statearr_39343_39400[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (21))){
var inst_39279 = (state_39329[(12)]);
var inst_39279__$1 = (state_39329[(2)]);
var inst_39280 = cljs.core.get.call(null,inst_39279__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39281 = cljs.core.get.call(null,inst_39279__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39282 = cljs.core.get.call(null,inst_39279__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39329__$1 = (function (){var statearr_39344 = state_39329;
(statearr_39344[(13)] = inst_39281);

(statearr_39344[(10)] = inst_39280);

(statearr_39344[(12)] = inst_39279__$1);

return statearr_39344;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39329__$1,(22),inst_39282);
} else {
if((state_val_39330 === (31))){
var inst_39311 = (state_39329[(2)]);
var state_39329__$1 = state_39329;
if(cljs.core.truth_(inst_39311)){
var statearr_39345_39401 = state_39329__$1;
(statearr_39345_39401[(1)] = (32));

} else {
var statearr_39346_39402 = state_39329__$1;
(statearr_39346_39402[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (32))){
var inst_39288 = (state_39329[(14)]);
var state_39329__$1 = state_39329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39329__$1,(35),out,inst_39288);
} else {
if((state_val_39330 === (33))){
var inst_39279 = (state_39329[(12)]);
var inst_39256 = inst_39279;
var state_39329__$1 = (function (){var statearr_39347 = state_39329;
(statearr_39347[(7)] = inst_39256);

return statearr_39347;
})();
var statearr_39348_39403 = state_39329__$1;
(statearr_39348_39403[(2)] = null);

(statearr_39348_39403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (13))){
var inst_39256 = (state_39329[(7)]);
var inst_39263 = inst_39256.cljs$lang$protocol_mask$partition0$;
var inst_39264 = (inst_39263 & (64));
var inst_39265 = inst_39256.cljs$core$ISeq$;
var inst_39266 = (cljs.core.PROTOCOL_SENTINEL === inst_39265);
var inst_39267 = (inst_39264) || (inst_39266);
var state_39329__$1 = state_39329;
if(cljs.core.truth_(inst_39267)){
var statearr_39349_39404 = state_39329__$1;
(statearr_39349_39404[(1)] = (16));

} else {
var statearr_39350_39405 = state_39329__$1;
(statearr_39350_39405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (22))){
var inst_39289 = (state_39329[(11)]);
var inst_39288 = (state_39329[(14)]);
var inst_39287 = (state_39329[(2)]);
var inst_39288__$1 = cljs.core.nth.call(null,inst_39287,(0),null);
var inst_39289__$1 = cljs.core.nth.call(null,inst_39287,(1),null);
var inst_39290 = (inst_39288__$1 == null);
var inst_39291 = cljs.core._EQ_.call(null,inst_39289__$1,change);
var inst_39292 = (inst_39290) || (inst_39291);
var state_39329__$1 = (function (){var statearr_39351 = state_39329;
(statearr_39351[(11)] = inst_39289__$1);

(statearr_39351[(14)] = inst_39288__$1);

return statearr_39351;
})();
if(cljs.core.truth_(inst_39292)){
var statearr_39352_39406 = state_39329__$1;
(statearr_39352_39406[(1)] = (23));

} else {
var statearr_39353_39407 = state_39329__$1;
(statearr_39353_39407[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (36))){
var inst_39279 = (state_39329[(12)]);
var inst_39256 = inst_39279;
var state_39329__$1 = (function (){var statearr_39354 = state_39329;
(statearr_39354[(7)] = inst_39256);

return statearr_39354;
})();
var statearr_39355_39408 = state_39329__$1;
(statearr_39355_39408[(2)] = null);

(statearr_39355_39408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (29))){
var inst_39303 = (state_39329[(9)]);
var state_39329__$1 = state_39329;
var statearr_39356_39409 = state_39329__$1;
(statearr_39356_39409[(2)] = inst_39303);

(statearr_39356_39409[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (6))){
var state_39329__$1 = state_39329;
var statearr_39357_39410 = state_39329__$1;
(statearr_39357_39410[(2)] = false);

(statearr_39357_39410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (28))){
var inst_39299 = (state_39329[(2)]);
var inst_39300 = calc_state.call(null);
var inst_39256 = inst_39300;
var state_39329__$1 = (function (){var statearr_39358 = state_39329;
(statearr_39358[(7)] = inst_39256);

(statearr_39358[(15)] = inst_39299);

return statearr_39358;
})();
var statearr_39359_39411 = state_39329__$1;
(statearr_39359_39411[(2)] = null);

(statearr_39359_39411[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (25))){
var inst_39325 = (state_39329[(2)]);
var state_39329__$1 = state_39329;
var statearr_39360_39412 = state_39329__$1;
(statearr_39360_39412[(2)] = inst_39325);

(statearr_39360_39412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (34))){
var inst_39323 = (state_39329[(2)]);
var state_39329__$1 = state_39329;
var statearr_39361_39413 = state_39329__$1;
(statearr_39361_39413[(2)] = inst_39323);

(statearr_39361_39413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (17))){
var state_39329__$1 = state_39329;
var statearr_39362_39414 = state_39329__$1;
(statearr_39362_39414[(2)] = false);

(statearr_39362_39414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (3))){
var state_39329__$1 = state_39329;
var statearr_39363_39415 = state_39329__$1;
(statearr_39363_39415[(2)] = false);

(statearr_39363_39415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (12))){
var inst_39327 = (state_39329[(2)]);
var state_39329__$1 = state_39329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39329__$1,inst_39327);
} else {
if((state_val_39330 === (2))){
var inst_39231 = (state_39329[(8)]);
var inst_39236 = inst_39231.cljs$lang$protocol_mask$partition0$;
var inst_39237 = (inst_39236 & (64));
var inst_39238 = inst_39231.cljs$core$ISeq$;
var inst_39239 = (cljs.core.PROTOCOL_SENTINEL === inst_39238);
var inst_39240 = (inst_39237) || (inst_39239);
var state_39329__$1 = state_39329;
if(cljs.core.truth_(inst_39240)){
var statearr_39364_39416 = state_39329__$1;
(statearr_39364_39416[(1)] = (5));

} else {
var statearr_39365_39417 = state_39329__$1;
(statearr_39365_39417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (23))){
var inst_39288 = (state_39329[(14)]);
var inst_39294 = (inst_39288 == null);
var state_39329__$1 = state_39329;
if(cljs.core.truth_(inst_39294)){
var statearr_39366_39418 = state_39329__$1;
(statearr_39366_39418[(1)] = (26));

} else {
var statearr_39367_39419 = state_39329__$1;
(statearr_39367_39419[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (35))){
var inst_39314 = (state_39329[(2)]);
var state_39329__$1 = state_39329;
if(cljs.core.truth_(inst_39314)){
var statearr_39368_39420 = state_39329__$1;
(statearr_39368_39420[(1)] = (36));

} else {
var statearr_39369_39421 = state_39329__$1;
(statearr_39369_39421[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (19))){
var inst_39256 = (state_39329[(7)]);
var inst_39276 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39256);
var state_39329__$1 = state_39329;
var statearr_39370_39422 = state_39329__$1;
(statearr_39370_39422[(2)] = inst_39276);

(statearr_39370_39422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (11))){
var inst_39256 = (state_39329[(7)]);
var inst_39260 = (inst_39256 == null);
var inst_39261 = cljs.core.not.call(null,inst_39260);
var state_39329__$1 = state_39329;
if(inst_39261){
var statearr_39371_39423 = state_39329__$1;
(statearr_39371_39423[(1)] = (13));

} else {
var statearr_39372_39424 = state_39329__$1;
(statearr_39372_39424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (9))){
var inst_39231 = (state_39329[(8)]);
var state_39329__$1 = state_39329;
var statearr_39373_39425 = state_39329__$1;
(statearr_39373_39425[(2)] = inst_39231);

(statearr_39373_39425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (5))){
var state_39329__$1 = state_39329;
var statearr_39374_39426 = state_39329__$1;
(statearr_39374_39426[(2)] = true);

(statearr_39374_39426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (14))){
var state_39329__$1 = state_39329;
var statearr_39375_39427 = state_39329__$1;
(statearr_39375_39427[(2)] = false);

(statearr_39375_39427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (26))){
var inst_39289 = (state_39329[(11)]);
var inst_39296 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39289);
var state_39329__$1 = state_39329;
var statearr_39376_39428 = state_39329__$1;
(statearr_39376_39428[(2)] = inst_39296);

(statearr_39376_39428[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (16))){
var state_39329__$1 = state_39329;
var statearr_39377_39429 = state_39329__$1;
(statearr_39377_39429[(2)] = true);

(statearr_39377_39429[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (38))){
var inst_39319 = (state_39329[(2)]);
var state_39329__$1 = state_39329;
var statearr_39378_39430 = state_39329__$1;
(statearr_39378_39430[(2)] = inst_39319);

(statearr_39378_39430[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (30))){
var inst_39281 = (state_39329[(13)]);
var inst_39280 = (state_39329[(10)]);
var inst_39289 = (state_39329[(11)]);
var inst_39306 = cljs.core.empty_QMARK_.call(null,inst_39280);
var inst_39307 = inst_39281.call(null,inst_39289);
var inst_39308 = cljs.core.not.call(null,inst_39307);
var inst_39309 = (inst_39306) && (inst_39308);
var state_39329__$1 = state_39329;
var statearr_39379_39431 = state_39329__$1;
(statearr_39379_39431[(2)] = inst_39309);

(statearr_39379_39431[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (10))){
var inst_39231 = (state_39329[(8)]);
var inst_39252 = (state_39329[(2)]);
var inst_39253 = cljs.core.get.call(null,inst_39252,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39254 = cljs.core.get.call(null,inst_39252,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39255 = cljs.core.get.call(null,inst_39252,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39256 = inst_39231;
var state_39329__$1 = (function (){var statearr_39380 = state_39329;
(statearr_39380[(16)] = inst_39254);

(statearr_39380[(7)] = inst_39256);

(statearr_39380[(17)] = inst_39255);

(statearr_39380[(18)] = inst_39253);

return statearr_39380;
})();
var statearr_39381_39432 = state_39329__$1;
(statearr_39381_39432[(2)] = null);

(statearr_39381_39432[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (18))){
var inst_39271 = (state_39329[(2)]);
var state_39329__$1 = state_39329;
var statearr_39382_39433 = state_39329__$1;
(statearr_39382_39433[(2)] = inst_39271);

(statearr_39382_39433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (37))){
var state_39329__$1 = state_39329;
var statearr_39383_39434 = state_39329__$1;
(statearr_39383_39434[(2)] = null);

(statearr_39383_39434[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (8))){
var inst_39231 = (state_39329[(8)]);
var inst_39249 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39231);
var state_39329__$1 = state_39329;
var statearr_39384_39435 = state_39329__$1;
(statearr_39384_39435[(2)] = inst_39249);

(statearr_39384_39435[(1)] = (10));


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
});})(c__38330__auto___39389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38240__auto__,c__38330__auto___39389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38241__auto__ = null;
var cljs$core$async$mix_$_state_machine__38241__auto____0 = (function (){
var statearr_39385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39385[(0)] = cljs$core$async$mix_$_state_machine__38241__auto__);

(statearr_39385[(1)] = (1));

return statearr_39385;
});
var cljs$core$async$mix_$_state_machine__38241__auto____1 = (function (state_39329){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_39329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e39386){if((e39386 instanceof Object)){
var ex__38244__auto__ = e39386;
var statearr_39387_39436 = state_39329;
(statearr_39387_39436[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39437 = state_39329;
state_39329 = G__39437;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38241__auto__ = function(state_39329){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38241__auto____1.call(this,state_39329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38241__auto____0;
cljs$core$async$mix_$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38241__auto____1;
return cljs$core$async$mix_$_state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___39389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38332__auto__ = (function (){var statearr_39388 = f__38331__auto__.call(null);
(statearr_39388[(6)] = c__38330__auto___39389);

return statearr_39388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___39389,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__31608__auto__ = (((p == null))?null:p);
var m__31609__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31608__auto__)]);
if(!((m__31609__auto__ == null))){
return m__31609__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__31609__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31609__auto____$1 == null))){
return m__31609__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__31608__auto__ = (((p == null))?null:p);
var m__31609__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31608__auto__)]);
if(!((m__31609__auto__ == null))){
return m__31609__auto__.call(null,p,v,ch);
} else {
var m__31609__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31609__auto____$1 == null))){
return m__31609__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39439 = arguments.length;
switch (G__39439) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__31608__auto__ = (((p == null))?null:p);
var m__31609__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31608__auto__)]);
if(!((m__31609__auto__ == null))){
return m__31609__auto__.call(null,p);
} else {
var m__31609__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31609__auto____$1 == null))){
return m__31609__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__31608__auto__ = (((p == null))?null:p);
var m__31609__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31608__auto__)]);
if(!((m__31609__auto__ == null))){
return m__31609__auto__.call(null,p,v);
} else {
var m__31609__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31609__auto____$1 == null))){
return m__31609__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__39443 = arguments.length;
switch (G__39443) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30875__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30875__auto__)){
return or__30875__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30875__auto__,mults){
return (function (p1__39441_SHARP_){
if(cljs.core.truth_(p1__39441_SHARP_.call(null,topic))){
return p1__39441_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39441_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30875__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39444 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39444 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39445){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39445 = meta39445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39446,meta39445__$1){
var self__ = this;
var _39446__$1 = this;
return (new cljs.core.async.t_cljs$core$async39444(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39445__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39446){
var self__ = this;
var _39446__$1 = this;
return self__.meta39445;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39444.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39444.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39444.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39444.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39444.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39444.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39444.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39444.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39445","meta39445",-930086361,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39444.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39444";

cljs.core.async.t_cljs$core$async39444.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31546__auto__,writer__31547__auto__,opt__31548__auto__){
return cljs.core._write.call(null,writer__31547__auto__,"cljs.core.async/t_cljs$core$async39444");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async39444 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39444(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39445){
return (new cljs.core.async.t_cljs$core$async39444(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39445));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39444(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38330__auto___39564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___39564,mults,ensure_mult,p){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___39564,mults,ensure_mult,p){
return (function (state_39518){
var state_val_39519 = (state_39518[(1)]);
if((state_val_39519 === (7))){
var inst_39514 = (state_39518[(2)]);
var state_39518__$1 = state_39518;
var statearr_39520_39565 = state_39518__$1;
(statearr_39520_39565[(2)] = inst_39514);

(statearr_39520_39565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (20))){
var state_39518__$1 = state_39518;
var statearr_39521_39566 = state_39518__$1;
(statearr_39521_39566[(2)] = null);

(statearr_39521_39566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (1))){
var state_39518__$1 = state_39518;
var statearr_39522_39567 = state_39518__$1;
(statearr_39522_39567[(2)] = null);

(statearr_39522_39567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (24))){
var inst_39497 = (state_39518[(7)]);
var inst_39506 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39497);
var state_39518__$1 = state_39518;
var statearr_39523_39568 = state_39518__$1;
(statearr_39523_39568[(2)] = inst_39506);

(statearr_39523_39568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (4))){
var inst_39449 = (state_39518[(8)]);
var inst_39449__$1 = (state_39518[(2)]);
var inst_39450 = (inst_39449__$1 == null);
var state_39518__$1 = (function (){var statearr_39524 = state_39518;
(statearr_39524[(8)] = inst_39449__$1);

return statearr_39524;
})();
if(cljs.core.truth_(inst_39450)){
var statearr_39525_39569 = state_39518__$1;
(statearr_39525_39569[(1)] = (5));

} else {
var statearr_39526_39570 = state_39518__$1;
(statearr_39526_39570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (15))){
var inst_39491 = (state_39518[(2)]);
var state_39518__$1 = state_39518;
var statearr_39527_39571 = state_39518__$1;
(statearr_39527_39571[(2)] = inst_39491);

(statearr_39527_39571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (21))){
var inst_39511 = (state_39518[(2)]);
var state_39518__$1 = (function (){var statearr_39528 = state_39518;
(statearr_39528[(9)] = inst_39511);

return statearr_39528;
})();
var statearr_39529_39572 = state_39518__$1;
(statearr_39529_39572[(2)] = null);

(statearr_39529_39572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (13))){
var inst_39473 = (state_39518[(10)]);
var inst_39475 = cljs.core.chunked_seq_QMARK_.call(null,inst_39473);
var state_39518__$1 = state_39518;
if(inst_39475){
var statearr_39530_39573 = state_39518__$1;
(statearr_39530_39573[(1)] = (16));

} else {
var statearr_39531_39574 = state_39518__$1;
(statearr_39531_39574[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (22))){
var inst_39503 = (state_39518[(2)]);
var state_39518__$1 = state_39518;
if(cljs.core.truth_(inst_39503)){
var statearr_39532_39575 = state_39518__$1;
(statearr_39532_39575[(1)] = (23));

} else {
var statearr_39533_39576 = state_39518__$1;
(statearr_39533_39576[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (6))){
var inst_39499 = (state_39518[(11)]);
var inst_39449 = (state_39518[(8)]);
var inst_39497 = (state_39518[(7)]);
var inst_39497__$1 = topic_fn.call(null,inst_39449);
var inst_39498 = cljs.core.deref.call(null,mults);
var inst_39499__$1 = cljs.core.get.call(null,inst_39498,inst_39497__$1);
var state_39518__$1 = (function (){var statearr_39534 = state_39518;
(statearr_39534[(11)] = inst_39499__$1);

(statearr_39534[(7)] = inst_39497__$1);

return statearr_39534;
})();
if(cljs.core.truth_(inst_39499__$1)){
var statearr_39535_39577 = state_39518__$1;
(statearr_39535_39577[(1)] = (19));

} else {
var statearr_39536_39578 = state_39518__$1;
(statearr_39536_39578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (25))){
var inst_39508 = (state_39518[(2)]);
var state_39518__$1 = state_39518;
var statearr_39537_39579 = state_39518__$1;
(statearr_39537_39579[(2)] = inst_39508);

(statearr_39537_39579[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (17))){
var inst_39473 = (state_39518[(10)]);
var inst_39482 = cljs.core.first.call(null,inst_39473);
var inst_39483 = cljs.core.async.muxch_STAR_.call(null,inst_39482);
var inst_39484 = cljs.core.async.close_BANG_.call(null,inst_39483);
var inst_39485 = cljs.core.next.call(null,inst_39473);
var inst_39459 = inst_39485;
var inst_39460 = null;
var inst_39461 = (0);
var inst_39462 = (0);
var state_39518__$1 = (function (){var statearr_39538 = state_39518;
(statearr_39538[(12)] = inst_39459);

(statearr_39538[(13)] = inst_39484);

(statearr_39538[(14)] = inst_39461);

(statearr_39538[(15)] = inst_39460);

(statearr_39538[(16)] = inst_39462);

return statearr_39538;
})();
var statearr_39539_39580 = state_39518__$1;
(statearr_39539_39580[(2)] = null);

(statearr_39539_39580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (3))){
var inst_39516 = (state_39518[(2)]);
var state_39518__$1 = state_39518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39518__$1,inst_39516);
} else {
if((state_val_39519 === (12))){
var inst_39493 = (state_39518[(2)]);
var state_39518__$1 = state_39518;
var statearr_39540_39581 = state_39518__$1;
(statearr_39540_39581[(2)] = inst_39493);

(statearr_39540_39581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (2))){
var state_39518__$1 = state_39518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39518__$1,(4),ch);
} else {
if((state_val_39519 === (23))){
var state_39518__$1 = state_39518;
var statearr_39541_39582 = state_39518__$1;
(statearr_39541_39582[(2)] = null);

(statearr_39541_39582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (19))){
var inst_39499 = (state_39518[(11)]);
var inst_39449 = (state_39518[(8)]);
var inst_39501 = cljs.core.async.muxch_STAR_.call(null,inst_39499);
var state_39518__$1 = state_39518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39518__$1,(22),inst_39501,inst_39449);
} else {
if((state_val_39519 === (11))){
var inst_39459 = (state_39518[(12)]);
var inst_39473 = (state_39518[(10)]);
var inst_39473__$1 = cljs.core.seq.call(null,inst_39459);
var state_39518__$1 = (function (){var statearr_39542 = state_39518;
(statearr_39542[(10)] = inst_39473__$1);

return statearr_39542;
})();
if(inst_39473__$1){
var statearr_39543_39583 = state_39518__$1;
(statearr_39543_39583[(1)] = (13));

} else {
var statearr_39544_39584 = state_39518__$1;
(statearr_39544_39584[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (9))){
var inst_39495 = (state_39518[(2)]);
var state_39518__$1 = state_39518;
var statearr_39545_39585 = state_39518__$1;
(statearr_39545_39585[(2)] = inst_39495);

(statearr_39545_39585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (5))){
var inst_39456 = cljs.core.deref.call(null,mults);
var inst_39457 = cljs.core.vals.call(null,inst_39456);
var inst_39458 = cljs.core.seq.call(null,inst_39457);
var inst_39459 = inst_39458;
var inst_39460 = null;
var inst_39461 = (0);
var inst_39462 = (0);
var state_39518__$1 = (function (){var statearr_39546 = state_39518;
(statearr_39546[(12)] = inst_39459);

(statearr_39546[(14)] = inst_39461);

(statearr_39546[(15)] = inst_39460);

(statearr_39546[(16)] = inst_39462);

return statearr_39546;
})();
var statearr_39547_39586 = state_39518__$1;
(statearr_39547_39586[(2)] = null);

(statearr_39547_39586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (14))){
var state_39518__$1 = state_39518;
var statearr_39551_39587 = state_39518__$1;
(statearr_39551_39587[(2)] = null);

(statearr_39551_39587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (16))){
var inst_39473 = (state_39518[(10)]);
var inst_39477 = cljs.core.chunk_first.call(null,inst_39473);
var inst_39478 = cljs.core.chunk_rest.call(null,inst_39473);
var inst_39479 = cljs.core.count.call(null,inst_39477);
var inst_39459 = inst_39478;
var inst_39460 = inst_39477;
var inst_39461 = inst_39479;
var inst_39462 = (0);
var state_39518__$1 = (function (){var statearr_39552 = state_39518;
(statearr_39552[(12)] = inst_39459);

(statearr_39552[(14)] = inst_39461);

(statearr_39552[(15)] = inst_39460);

(statearr_39552[(16)] = inst_39462);

return statearr_39552;
})();
var statearr_39553_39588 = state_39518__$1;
(statearr_39553_39588[(2)] = null);

(statearr_39553_39588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (10))){
var inst_39459 = (state_39518[(12)]);
var inst_39461 = (state_39518[(14)]);
var inst_39460 = (state_39518[(15)]);
var inst_39462 = (state_39518[(16)]);
var inst_39467 = cljs.core._nth.call(null,inst_39460,inst_39462);
var inst_39468 = cljs.core.async.muxch_STAR_.call(null,inst_39467);
var inst_39469 = cljs.core.async.close_BANG_.call(null,inst_39468);
var inst_39470 = (inst_39462 + (1));
var tmp39548 = inst_39459;
var tmp39549 = inst_39461;
var tmp39550 = inst_39460;
var inst_39459__$1 = tmp39548;
var inst_39460__$1 = tmp39550;
var inst_39461__$1 = tmp39549;
var inst_39462__$1 = inst_39470;
var state_39518__$1 = (function (){var statearr_39554 = state_39518;
(statearr_39554[(12)] = inst_39459__$1);

(statearr_39554[(14)] = inst_39461__$1);

(statearr_39554[(15)] = inst_39460__$1);

(statearr_39554[(17)] = inst_39469);

(statearr_39554[(16)] = inst_39462__$1);

return statearr_39554;
})();
var statearr_39555_39589 = state_39518__$1;
(statearr_39555_39589[(2)] = null);

(statearr_39555_39589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (18))){
var inst_39488 = (state_39518[(2)]);
var state_39518__$1 = state_39518;
var statearr_39556_39590 = state_39518__$1;
(statearr_39556_39590[(2)] = inst_39488);

(statearr_39556_39590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (8))){
var inst_39461 = (state_39518[(14)]);
var inst_39462 = (state_39518[(16)]);
var inst_39464 = (inst_39462 < inst_39461);
var inst_39465 = inst_39464;
var state_39518__$1 = state_39518;
if(cljs.core.truth_(inst_39465)){
var statearr_39557_39591 = state_39518__$1;
(statearr_39557_39591[(1)] = (10));

} else {
var statearr_39558_39592 = state_39518__$1;
(statearr_39558_39592[(1)] = (11));

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
});})(c__38330__auto___39564,mults,ensure_mult,p))
;
return ((function (switch__38240__auto__,c__38330__auto___39564,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38241__auto__ = null;
var cljs$core$async$state_machine__38241__auto____0 = (function (){
var statearr_39559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39559[(0)] = cljs$core$async$state_machine__38241__auto__);

(statearr_39559[(1)] = (1));

return statearr_39559;
});
var cljs$core$async$state_machine__38241__auto____1 = (function (state_39518){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_39518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e39560){if((e39560 instanceof Object)){
var ex__38244__auto__ = e39560;
var statearr_39561_39593 = state_39518;
(statearr_39561_39593[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39594 = state_39518;
state_39518 = G__39594;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$state_machine__38241__auto__ = function(state_39518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38241__auto____1.call(this,state_39518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38241__auto____0;
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38241__auto____1;
return cljs$core$async$state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___39564,mults,ensure_mult,p))
})();
var state__38332__auto__ = (function (){var statearr_39562 = f__38331__auto__.call(null);
(statearr_39562[(6)] = c__38330__auto___39564);

return statearr_39562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___39564,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39596 = arguments.length;
switch (G__39596) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39599 = arguments.length;
switch (G__39599) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__39602 = arguments.length;
switch (G__39602) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__38330__auto___39669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___39669,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___39669,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39641){
var state_val_39642 = (state_39641[(1)]);
if((state_val_39642 === (7))){
var state_39641__$1 = state_39641;
var statearr_39643_39670 = state_39641__$1;
(statearr_39643_39670[(2)] = null);

(statearr_39643_39670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (1))){
var state_39641__$1 = state_39641;
var statearr_39644_39671 = state_39641__$1;
(statearr_39644_39671[(2)] = null);

(statearr_39644_39671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (4))){
var inst_39605 = (state_39641[(7)]);
var inst_39607 = (inst_39605 < cnt);
var state_39641__$1 = state_39641;
if(cljs.core.truth_(inst_39607)){
var statearr_39645_39672 = state_39641__$1;
(statearr_39645_39672[(1)] = (6));

} else {
var statearr_39646_39673 = state_39641__$1;
(statearr_39646_39673[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (15))){
var inst_39637 = (state_39641[(2)]);
var state_39641__$1 = state_39641;
var statearr_39647_39674 = state_39641__$1;
(statearr_39647_39674[(2)] = inst_39637);

(statearr_39647_39674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (13))){
var inst_39630 = cljs.core.async.close_BANG_.call(null,out);
var state_39641__$1 = state_39641;
var statearr_39648_39675 = state_39641__$1;
(statearr_39648_39675[(2)] = inst_39630);

(statearr_39648_39675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (6))){
var state_39641__$1 = state_39641;
var statearr_39649_39676 = state_39641__$1;
(statearr_39649_39676[(2)] = null);

(statearr_39649_39676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (3))){
var inst_39639 = (state_39641[(2)]);
var state_39641__$1 = state_39641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39641__$1,inst_39639);
} else {
if((state_val_39642 === (12))){
var inst_39627 = (state_39641[(8)]);
var inst_39627__$1 = (state_39641[(2)]);
var inst_39628 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39627__$1);
var state_39641__$1 = (function (){var statearr_39650 = state_39641;
(statearr_39650[(8)] = inst_39627__$1);

return statearr_39650;
})();
if(cljs.core.truth_(inst_39628)){
var statearr_39651_39677 = state_39641__$1;
(statearr_39651_39677[(1)] = (13));

} else {
var statearr_39652_39678 = state_39641__$1;
(statearr_39652_39678[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (2))){
var inst_39604 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39605 = (0);
var state_39641__$1 = (function (){var statearr_39653 = state_39641;
(statearr_39653[(7)] = inst_39605);

(statearr_39653[(9)] = inst_39604);

return statearr_39653;
})();
var statearr_39654_39679 = state_39641__$1;
(statearr_39654_39679[(2)] = null);

(statearr_39654_39679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (11))){
var inst_39605 = (state_39641[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39641,(10),Object,null,(9));
var inst_39614 = chs__$1.call(null,inst_39605);
var inst_39615 = done.call(null,inst_39605);
var inst_39616 = cljs.core.async.take_BANG_.call(null,inst_39614,inst_39615);
var state_39641__$1 = state_39641;
var statearr_39655_39680 = state_39641__$1;
(statearr_39655_39680[(2)] = inst_39616);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39641__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (9))){
var inst_39605 = (state_39641[(7)]);
var inst_39618 = (state_39641[(2)]);
var inst_39619 = (inst_39605 + (1));
var inst_39605__$1 = inst_39619;
var state_39641__$1 = (function (){var statearr_39656 = state_39641;
(statearr_39656[(7)] = inst_39605__$1);

(statearr_39656[(10)] = inst_39618);

return statearr_39656;
})();
var statearr_39657_39681 = state_39641__$1;
(statearr_39657_39681[(2)] = null);

(statearr_39657_39681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (5))){
var inst_39625 = (state_39641[(2)]);
var state_39641__$1 = (function (){var statearr_39658 = state_39641;
(statearr_39658[(11)] = inst_39625);

return statearr_39658;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39641__$1,(12),dchan);
} else {
if((state_val_39642 === (14))){
var inst_39627 = (state_39641[(8)]);
var inst_39632 = cljs.core.apply.call(null,f,inst_39627);
var state_39641__$1 = state_39641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39641__$1,(16),out,inst_39632);
} else {
if((state_val_39642 === (16))){
var inst_39634 = (state_39641[(2)]);
var state_39641__$1 = (function (){var statearr_39659 = state_39641;
(statearr_39659[(12)] = inst_39634);

return statearr_39659;
})();
var statearr_39660_39682 = state_39641__$1;
(statearr_39660_39682[(2)] = null);

(statearr_39660_39682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (10))){
var inst_39609 = (state_39641[(2)]);
var inst_39610 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39641__$1 = (function (){var statearr_39661 = state_39641;
(statearr_39661[(13)] = inst_39609);

return statearr_39661;
})();
var statearr_39662_39683 = state_39641__$1;
(statearr_39662_39683[(2)] = inst_39610);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39641__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (8))){
var inst_39623 = (state_39641[(2)]);
var state_39641__$1 = state_39641;
var statearr_39663_39684 = state_39641__$1;
(statearr_39663_39684[(2)] = inst_39623);

(statearr_39663_39684[(1)] = (5));


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
});})(c__38330__auto___39669,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38240__auto__,c__38330__auto___39669,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38241__auto__ = null;
var cljs$core$async$state_machine__38241__auto____0 = (function (){
var statearr_39664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39664[(0)] = cljs$core$async$state_machine__38241__auto__);

(statearr_39664[(1)] = (1));

return statearr_39664;
});
var cljs$core$async$state_machine__38241__auto____1 = (function (state_39641){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_39641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e39665){if((e39665 instanceof Object)){
var ex__38244__auto__ = e39665;
var statearr_39666_39685 = state_39641;
(statearr_39666_39685[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39686 = state_39641;
state_39641 = G__39686;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$state_machine__38241__auto__ = function(state_39641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38241__auto____1.call(this,state_39641);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38241__auto____0;
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38241__auto____1;
return cljs$core$async$state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___39669,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38332__auto__ = (function (){var statearr_39667 = f__38331__auto__.call(null);
(statearr_39667[(6)] = c__38330__auto___39669);

return statearr_39667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___39669,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39689 = arguments.length;
switch (G__39689) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38330__auto___39743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___39743,out){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___39743,out){
return (function (state_39721){
var state_val_39722 = (state_39721[(1)]);
if((state_val_39722 === (7))){
var inst_39700 = (state_39721[(7)]);
var inst_39701 = (state_39721[(8)]);
var inst_39700__$1 = (state_39721[(2)]);
var inst_39701__$1 = cljs.core.nth.call(null,inst_39700__$1,(0),null);
var inst_39702 = cljs.core.nth.call(null,inst_39700__$1,(1),null);
var inst_39703 = (inst_39701__$1 == null);
var state_39721__$1 = (function (){var statearr_39723 = state_39721;
(statearr_39723[(7)] = inst_39700__$1);

(statearr_39723[(8)] = inst_39701__$1);

(statearr_39723[(9)] = inst_39702);

return statearr_39723;
})();
if(cljs.core.truth_(inst_39703)){
var statearr_39724_39744 = state_39721__$1;
(statearr_39724_39744[(1)] = (8));

} else {
var statearr_39725_39745 = state_39721__$1;
(statearr_39725_39745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (1))){
var inst_39690 = cljs.core.vec.call(null,chs);
var inst_39691 = inst_39690;
var state_39721__$1 = (function (){var statearr_39726 = state_39721;
(statearr_39726[(10)] = inst_39691);

return statearr_39726;
})();
var statearr_39727_39746 = state_39721__$1;
(statearr_39727_39746[(2)] = null);

(statearr_39727_39746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (4))){
var inst_39691 = (state_39721[(10)]);
var state_39721__$1 = state_39721;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39721__$1,(7),inst_39691);
} else {
if((state_val_39722 === (6))){
var inst_39717 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
var statearr_39728_39747 = state_39721__$1;
(statearr_39728_39747[(2)] = inst_39717);

(statearr_39728_39747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (3))){
var inst_39719 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39721__$1,inst_39719);
} else {
if((state_val_39722 === (2))){
var inst_39691 = (state_39721[(10)]);
var inst_39693 = cljs.core.count.call(null,inst_39691);
var inst_39694 = (inst_39693 > (0));
var state_39721__$1 = state_39721;
if(cljs.core.truth_(inst_39694)){
var statearr_39730_39748 = state_39721__$1;
(statearr_39730_39748[(1)] = (4));

} else {
var statearr_39731_39749 = state_39721__$1;
(statearr_39731_39749[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (11))){
var inst_39691 = (state_39721[(10)]);
var inst_39710 = (state_39721[(2)]);
var tmp39729 = inst_39691;
var inst_39691__$1 = tmp39729;
var state_39721__$1 = (function (){var statearr_39732 = state_39721;
(statearr_39732[(10)] = inst_39691__$1);

(statearr_39732[(11)] = inst_39710);

return statearr_39732;
})();
var statearr_39733_39750 = state_39721__$1;
(statearr_39733_39750[(2)] = null);

(statearr_39733_39750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (9))){
var inst_39701 = (state_39721[(8)]);
var state_39721__$1 = state_39721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39721__$1,(11),out,inst_39701);
} else {
if((state_val_39722 === (5))){
var inst_39715 = cljs.core.async.close_BANG_.call(null,out);
var state_39721__$1 = state_39721;
var statearr_39734_39751 = state_39721__$1;
(statearr_39734_39751[(2)] = inst_39715);

(statearr_39734_39751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (10))){
var inst_39713 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
var statearr_39735_39752 = state_39721__$1;
(statearr_39735_39752[(2)] = inst_39713);

(statearr_39735_39752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (8))){
var inst_39700 = (state_39721[(7)]);
var inst_39691 = (state_39721[(10)]);
var inst_39701 = (state_39721[(8)]);
var inst_39702 = (state_39721[(9)]);
var inst_39705 = (function (){var cs = inst_39691;
var vec__39696 = inst_39700;
var v = inst_39701;
var c = inst_39702;
return ((function (cs,vec__39696,v,c,inst_39700,inst_39691,inst_39701,inst_39702,state_val_39722,c__38330__auto___39743,out){
return (function (p1__39687_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39687_SHARP_);
});
;})(cs,vec__39696,v,c,inst_39700,inst_39691,inst_39701,inst_39702,state_val_39722,c__38330__auto___39743,out))
})();
var inst_39706 = cljs.core.filterv.call(null,inst_39705,inst_39691);
var inst_39691__$1 = inst_39706;
var state_39721__$1 = (function (){var statearr_39736 = state_39721;
(statearr_39736[(10)] = inst_39691__$1);

return statearr_39736;
})();
var statearr_39737_39753 = state_39721__$1;
(statearr_39737_39753[(2)] = null);

(statearr_39737_39753[(1)] = (2));


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
});})(c__38330__auto___39743,out))
;
return ((function (switch__38240__auto__,c__38330__auto___39743,out){
return (function() {
var cljs$core$async$state_machine__38241__auto__ = null;
var cljs$core$async$state_machine__38241__auto____0 = (function (){
var statearr_39738 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39738[(0)] = cljs$core$async$state_machine__38241__auto__);

(statearr_39738[(1)] = (1));

return statearr_39738;
});
var cljs$core$async$state_machine__38241__auto____1 = (function (state_39721){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_39721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e39739){if((e39739 instanceof Object)){
var ex__38244__auto__ = e39739;
var statearr_39740_39754 = state_39721;
(statearr_39740_39754[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39755 = state_39721;
state_39721 = G__39755;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$state_machine__38241__auto__ = function(state_39721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38241__auto____1.call(this,state_39721);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38241__auto____0;
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38241__auto____1;
return cljs$core$async$state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___39743,out))
})();
var state__38332__auto__ = (function (){var statearr_39741 = f__38331__auto__.call(null);
(statearr_39741[(6)] = c__38330__auto___39743);

return statearr_39741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___39743,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39757 = arguments.length;
switch (G__39757) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38330__auto___39802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___39802,out){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___39802,out){
return (function (state_39781){
var state_val_39782 = (state_39781[(1)]);
if((state_val_39782 === (7))){
var inst_39763 = (state_39781[(7)]);
var inst_39763__$1 = (state_39781[(2)]);
var inst_39764 = (inst_39763__$1 == null);
var inst_39765 = cljs.core.not.call(null,inst_39764);
var state_39781__$1 = (function (){var statearr_39783 = state_39781;
(statearr_39783[(7)] = inst_39763__$1);

return statearr_39783;
})();
if(inst_39765){
var statearr_39784_39803 = state_39781__$1;
(statearr_39784_39803[(1)] = (8));

} else {
var statearr_39785_39804 = state_39781__$1;
(statearr_39785_39804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39782 === (1))){
var inst_39758 = (0);
var state_39781__$1 = (function (){var statearr_39786 = state_39781;
(statearr_39786[(8)] = inst_39758);

return statearr_39786;
})();
var statearr_39787_39805 = state_39781__$1;
(statearr_39787_39805[(2)] = null);

(statearr_39787_39805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39782 === (4))){
var state_39781__$1 = state_39781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39781__$1,(7),ch);
} else {
if((state_val_39782 === (6))){
var inst_39776 = (state_39781[(2)]);
var state_39781__$1 = state_39781;
var statearr_39788_39806 = state_39781__$1;
(statearr_39788_39806[(2)] = inst_39776);

(statearr_39788_39806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39782 === (3))){
var inst_39778 = (state_39781[(2)]);
var inst_39779 = cljs.core.async.close_BANG_.call(null,out);
var state_39781__$1 = (function (){var statearr_39789 = state_39781;
(statearr_39789[(9)] = inst_39778);

return statearr_39789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39781__$1,inst_39779);
} else {
if((state_val_39782 === (2))){
var inst_39758 = (state_39781[(8)]);
var inst_39760 = (inst_39758 < n);
var state_39781__$1 = state_39781;
if(cljs.core.truth_(inst_39760)){
var statearr_39790_39807 = state_39781__$1;
(statearr_39790_39807[(1)] = (4));

} else {
var statearr_39791_39808 = state_39781__$1;
(statearr_39791_39808[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39782 === (11))){
var inst_39758 = (state_39781[(8)]);
var inst_39768 = (state_39781[(2)]);
var inst_39769 = (inst_39758 + (1));
var inst_39758__$1 = inst_39769;
var state_39781__$1 = (function (){var statearr_39792 = state_39781;
(statearr_39792[(8)] = inst_39758__$1);

(statearr_39792[(10)] = inst_39768);

return statearr_39792;
})();
var statearr_39793_39809 = state_39781__$1;
(statearr_39793_39809[(2)] = null);

(statearr_39793_39809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39782 === (9))){
var state_39781__$1 = state_39781;
var statearr_39794_39810 = state_39781__$1;
(statearr_39794_39810[(2)] = null);

(statearr_39794_39810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39782 === (5))){
var state_39781__$1 = state_39781;
var statearr_39795_39811 = state_39781__$1;
(statearr_39795_39811[(2)] = null);

(statearr_39795_39811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39782 === (10))){
var inst_39773 = (state_39781[(2)]);
var state_39781__$1 = state_39781;
var statearr_39796_39812 = state_39781__$1;
(statearr_39796_39812[(2)] = inst_39773);

(statearr_39796_39812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39782 === (8))){
var inst_39763 = (state_39781[(7)]);
var state_39781__$1 = state_39781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39781__$1,(11),out,inst_39763);
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
});})(c__38330__auto___39802,out))
;
return ((function (switch__38240__auto__,c__38330__auto___39802,out){
return (function() {
var cljs$core$async$state_machine__38241__auto__ = null;
var cljs$core$async$state_machine__38241__auto____0 = (function (){
var statearr_39797 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39797[(0)] = cljs$core$async$state_machine__38241__auto__);

(statearr_39797[(1)] = (1));

return statearr_39797;
});
var cljs$core$async$state_machine__38241__auto____1 = (function (state_39781){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_39781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e39798){if((e39798 instanceof Object)){
var ex__38244__auto__ = e39798;
var statearr_39799_39813 = state_39781;
(statearr_39799_39813[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39814 = state_39781;
state_39781 = G__39814;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$state_machine__38241__auto__ = function(state_39781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38241__auto____1.call(this,state_39781);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38241__auto____0;
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38241__auto____1;
return cljs$core$async$state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___39802,out))
})();
var state__38332__auto__ = (function (){var statearr_39800 = f__38331__auto__.call(null);
(statearr_39800[(6)] = c__38330__auto___39802);

return statearr_39800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___39802,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39816 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39816 = (function (f,ch,meta39817){
this.f = f;
this.ch = ch;
this.meta39817 = meta39817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39818,meta39817__$1){
var self__ = this;
var _39818__$1 = this;
return (new cljs.core.async.t_cljs$core$async39816(self__.f,self__.ch,meta39817__$1));
});

cljs.core.async.t_cljs$core$async39816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39818){
var self__ = this;
var _39818__$1 = this;
return self__.meta39817;
});

cljs.core.async.t_cljs$core$async39816.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39816.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39816.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39816.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39816.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39819 = (function (f,ch,meta39817,_,fn1,meta39820){
this.f = f;
this.ch = ch;
this.meta39817 = meta39817;
this._ = _;
this.fn1 = fn1;
this.meta39820 = meta39820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39821,meta39820__$1){
var self__ = this;
var _39821__$1 = this;
return (new cljs.core.async.t_cljs$core$async39819(self__.f,self__.ch,self__.meta39817,self__._,self__.fn1,meta39820__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39821){
var self__ = this;
var _39821__$1 = this;
return self__.meta39820;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39819.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39819.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39815_SHARP_){
return f1.call(null,(((p1__39815_SHARP_ == null))?null:self__.f.call(null,p1__39815_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39819.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39817","meta39817",1411912238,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39816","cljs.core.async/t_cljs$core$async39816",1927566219,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39820","meta39820",-1634028863,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39819.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39819";

cljs.core.async.t_cljs$core$async39819.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31546__auto__,writer__31547__auto__,opt__31548__auto__){
return cljs.core._write.call(null,writer__31547__auto__,"cljs.core.async/t_cljs$core$async39819");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39819 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39819(f__$1,ch__$1,meta39817__$1,___$2,fn1__$1,meta39820){
return (new cljs.core.async.t_cljs$core$async39819(f__$1,ch__$1,meta39817__$1,___$2,fn1__$1,meta39820));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39819(self__.f,self__.ch,self__.meta39817,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30863__auto__ = ret;
if(cljs.core.truth_(and__30863__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30863__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39816.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39816.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39817","meta39817",1411912238,null)], null);
});

cljs.core.async.t_cljs$core$async39816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39816";

cljs.core.async.t_cljs$core$async39816.cljs$lang$ctorPrWriter = (function (this__31546__auto__,writer__31547__auto__,opt__31548__auto__){
return cljs.core._write.call(null,writer__31547__auto__,"cljs.core.async/t_cljs$core$async39816");
});

cljs.core.async.__GT_t_cljs$core$async39816 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39816(f__$1,ch__$1,meta39817){
return (new cljs.core.async.t_cljs$core$async39816(f__$1,ch__$1,meta39817));
});

}

return (new cljs.core.async.t_cljs$core$async39816(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39822 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39822 = (function (f,ch,meta39823){
this.f = f;
this.ch = ch;
this.meta39823 = meta39823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39824,meta39823__$1){
var self__ = this;
var _39824__$1 = this;
return (new cljs.core.async.t_cljs$core$async39822(self__.f,self__.ch,meta39823__$1));
});

cljs.core.async.t_cljs$core$async39822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39824){
var self__ = this;
var _39824__$1 = this;
return self__.meta39823;
});

cljs.core.async.t_cljs$core$async39822.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39822.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39822.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39822.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39822.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39822.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39823","meta39823",-1504105897,null)], null);
});

cljs.core.async.t_cljs$core$async39822.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39822";

cljs.core.async.t_cljs$core$async39822.cljs$lang$ctorPrWriter = (function (this__31546__auto__,writer__31547__auto__,opt__31548__auto__){
return cljs.core._write.call(null,writer__31547__auto__,"cljs.core.async/t_cljs$core$async39822");
});

cljs.core.async.__GT_t_cljs$core$async39822 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39822(f__$1,ch__$1,meta39823){
return (new cljs.core.async.t_cljs$core$async39822(f__$1,ch__$1,meta39823));
});

}

return (new cljs.core.async.t_cljs$core$async39822(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39825 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39825 = (function (p,ch,meta39826){
this.p = p;
this.ch = ch;
this.meta39826 = meta39826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39827,meta39826__$1){
var self__ = this;
var _39827__$1 = this;
return (new cljs.core.async.t_cljs$core$async39825(self__.p,self__.ch,meta39826__$1));
});

cljs.core.async.t_cljs$core$async39825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39827){
var self__ = this;
var _39827__$1 = this;
return self__.meta39826;
});

cljs.core.async.t_cljs$core$async39825.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39825.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39825.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39825.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39825.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39825.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39825.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39826","meta39826",-729479094,null)], null);
});

cljs.core.async.t_cljs$core$async39825.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39825";

cljs.core.async.t_cljs$core$async39825.cljs$lang$ctorPrWriter = (function (this__31546__auto__,writer__31547__auto__,opt__31548__auto__){
return cljs.core._write.call(null,writer__31547__auto__,"cljs.core.async/t_cljs$core$async39825");
});

cljs.core.async.__GT_t_cljs$core$async39825 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39825(p__$1,ch__$1,meta39826){
return (new cljs.core.async.t_cljs$core$async39825(p__$1,ch__$1,meta39826));
});

}

return (new cljs.core.async.t_cljs$core$async39825(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39829 = arguments.length;
switch (G__39829) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38330__auto___39869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___39869,out){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___39869,out){
return (function (state_39850){
var state_val_39851 = (state_39850[(1)]);
if((state_val_39851 === (7))){
var inst_39846 = (state_39850[(2)]);
var state_39850__$1 = state_39850;
var statearr_39852_39870 = state_39850__$1;
(statearr_39852_39870[(2)] = inst_39846);

(statearr_39852_39870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39851 === (1))){
var state_39850__$1 = state_39850;
var statearr_39853_39871 = state_39850__$1;
(statearr_39853_39871[(2)] = null);

(statearr_39853_39871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39851 === (4))){
var inst_39832 = (state_39850[(7)]);
var inst_39832__$1 = (state_39850[(2)]);
var inst_39833 = (inst_39832__$1 == null);
var state_39850__$1 = (function (){var statearr_39854 = state_39850;
(statearr_39854[(7)] = inst_39832__$1);

return statearr_39854;
})();
if(cljs.core.truth_(inst_39833)){
var statearr_39855_39872 = state_39850__$1;
(statearr_39855_39872[(1)] = (5));

} else {
var statearr_39856_39873 = state_39850__$1;
(statearr_39856_39873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39851 === (6))){
var inst_39832 = (state_39850[(7)]);
var inst_39837 = p.call(null,inst_39832);
var state_39850__$1 = state_39850;
if(cljs.core.truth_(inst_39837)){
var statearr_39857_39874 = state_39850__$1;
(statearr_39857_39874[(1)] = (8));

} else {
var statearr_39858_39875 = state_39850__$1;
(statearr_39858_39875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39851 === (3))){
var inst_39848 = (state_39850[(2)]);
var state_39850__$1 = state_39850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39850__$1,inst_39848);
} else {
if((state_val_39851 === (2))){
var state_39850__$1 = state_39850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39850__$1,(4),ch);
} else {
if((state_val_39851 === (11))){
var inst_39840 = (state_39850[(2)]);
var state_39850__$1 = state_39850;
var statearr_39859_39876 = state_39850__$1;
(statearr_39859_39876[(2)] = inst_39840);

(statearr_39859_39876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39851 === (9))){
var state_39850__$1 = state_39850;
var statearr_39860_39877 = state_39850__$1;
(statearr_39860_39877[(2)] = null);

(statearr_39860_39877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39851 === (5))){
var inst_39835 = cljs.core.async.close_BANG_.call(null,out);
var state_39850__$1 = state_39850;
var statearr_39861_39878 = state_39850__$1;
(statearr_39861_39878[(2)] = inst_39835);

(statearr_39861_39878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39851 === (10))){
var inst_39843 = (state_39850[(2)]);
var state_39850__$1 = (function (){var statearr_39862 = state_39850;
(statearr_39862[(8)] = inst_39843);

return statearr_39862;
})();
var statearr_39863_39879 = state_39850__$1;
(statearr_39863_39879[(2)] = null);

(statearr_39863_39879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39851 === (8))){
var inst_39832 = (state_39850[(7)]);
var state_39850__$1 = state_39850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39850__$1,(11),out,inst_39832);
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
});})(c__38330__auto___39869,out))
;
return ((function (switch__38240__auto__,c__38330__auto___39869,out){
return (function() {
var cljs$core$async$state_machine__38241__auto__ = null;
var cljs$core$async$state_machine__38241__auto____0 = (function (){
var statearr_39864 = [null,null,null,null,null,null,null,null,null];
(statearr_39864[(0)] = cljs$core$async$state_machine__38241__auto__);

(statearr_39864[(1)] = (1));

return statearr_39864;
});
var cljs$core$async$state_machine__38241__auto____1 = (function (state_39850){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_39850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e39865){if((e39865 instanceof Object)){
var ex__38244__auto__ = e39865;
var statearr_39866_39880 = state_39850;
(statearr_39866_39880[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39881 = state_39850;
state_39850 = G__39881;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$state_machine__38241__auto__ = function(state_39850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38241__auto____1.call(this,state_39850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38241__auto____0;
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38241__auto____1;
return cljs$core$async$state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___39869,out))
})();
var state__38332__auto__ = (function (){var statearr_39867 = f__38331__auto__.call(null);
(statearr_39867[(6)] = c__38330__auto___39869);

return statearr_39867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___39869,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39883 = arguments.length;
switch (G__39883) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38330__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto__){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto__){
return (function (state_39946){
var state_val_39947 = (state_39946[(1)]);
if((state_val_39947 === (7))){
var inst_39942 = (state_39946[(2)]);
var state_39946__$1 = state_39946;
var statearr_39948_39986 = state_39946__$1;
(statearr_39948_39986[(2)] = inst_39942);

(statearr_39948_39986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (20))){
var inst_39912 = (state_39946[(7)]);
var inst_39923 = (state_39946[(2)]);
var inst_39924 = cljs.core.next.call(null,inst_39912);
var inst_39898 = inst_39924;
var inst_39899 = null;
var inst_39900 = (0);
var inst_39901 = (0);
var state_39946__$1 = (function (){var statearr_39949 = state_39946;
(statearr_39949[(8)] = inst_39900);

(statearr_39949[(9)] = inst_39898);

(statearr_39949[(10)] = inst_39923);

(statearr_39949[(11)] = inst_39899);

(statearr_39949[(12)] = inst_39901);

return statearr_39949;
})();
var statearr_39950_39987 = state_39946__$1;
(statearr_39950_39987[(2)] = null);

(statearr_39950_39987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (1))){
var state_39946__$1 = state_39946;
var statearr_39951_39988 = state_39946__$1;
(statearr_39951_39988[(2)] = null);

(statearr_39951_39988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (4))){
var inst_39887 = (state_39946[(13)]);
var inst_39887__$1 = (state_39946[(2)]);
var inst_39888 = (inst_39887__$1 == null);
var state_39946__$1 = (function (){var statearr_39952 = state_39946;
(statearr_39952[(13)] = inst_39887__$1);

return statearr_39952;
})();
if(cljs.core.truth_(inst_39888)){
var statearr_39953_39989 = state_39946__$1;
(statearr_39953_39989[(1)] = (5));

} else {
var statearr_39954_39990 = state_39946__$1;
(statearr_39954_39990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (15))){
var state_39946__$1 = state_39946;
var statearr_39958_39991 = state_39946__$1;
(statearr_39958_39991[(2)] = null);

(statearr_39958_39991[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (21))){
var state_39946__$1 = state_39946;
var statearr_39959_39992 = state_39946__$1;
(statearr_39959_39992[(2)] = null);

(statearr_39959_39992[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (13))){
var inst_39900 = (state_39946[(8)]);
var inst_39898 = (state_39946[(9)]);
var inst_39899 = (state_39946[(11)]);
var inst_39901 = (state_39946[(12)]);
var inst_39908 = (state_39946[(2)]);
var inst_39909 = (inst_39901 + (1));
var tmp39955 = inst_39900;
var tmp39956 = inst_39898;
var tmp39957 = inst_39899;
var inst_39898__$1 = tmp39956;
var inst_39899__$1 = tmp39957;
var inst_39900__$1 = tmp39955;
var inst_39901__$1 = inst_39909;
var state_39946__$1 = (function (){var statearr_39960 = state_39946;
(statearr_39960[(8)] = inst_39900__$1);

(statearr_39960[(9)] = inst_39898__$1);

(statearr_39960[(14)] = inst_39908);

(statearr_39960[(11)] = inst_39899__$1);

(statearr_39960[(12)] = inst_39901__$1);

return statearr_39960;
})();
var statearr_39961_39993 = state_39946__$1;
(statearr_39961_39993[(2)] = null);

(statearr_39961_39993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (22))){
var state_39946__$1 = state_39946;
var statearr_39962_39994 = state_39946__$1;
(statearr_39962_39994[(2)] = null);

(statearr_39962_39994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (6))){
var inst_39887 = (state_39946[(13)]);
var inst_39896 = f.call(null,inst_39887);
var inst_39897 = cljs.core.seq.call(null,inst_39896);
var inst_39898 = inst_39897;
var inst_39899 = null;
var inst_39900 = (0);
var inst_39901 = (0);
var state_39946__$1 = (function (){var statearr_39963 = state_39946;
(statearr_39963[(8)] = inst_39900);

(statearr_39963[(9)] = inst_39898);

(statearr_39963[(11)] = inst_39899);

(statearr_39963[(12)] = inst_39901);

return statearr_39963;
})();
var statearr_39964_39995 = state_39946__$1;
(statearr_39964_39995[(2)] = null);

(statearr_39964_39995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (17))){
var inst_39912 = (state_39946[(7)]);
var inst_39916 = cljs.core.chunk_first.call(null,inst_39912);
var inst_39917 = cljs.core.chunk_rest.call(null,inst_39912);
var inst_39918 = cljs.core.count.call(null,inst_39916);
var inst_39898 = inst_39917;
var inst_39899 = inst_39916;
var inst_39900 = inst_39918;
var inst_39901 = (0);
var state_39946__$1 = (function (){var statearr_39965 = state_39946;
(statearr_39965[(8)] = inst_39900);

(statearr_39965[(9)] = inst_39898);

(statearr_39965[(11)] = inst_39899);

(statearr_39965[(12)] = inst_39901);

return statearr_39965;
})();
var statearr_39966_39996 = state_39946__$1;
(statearr_39966_39996[(2)] = null);

(statearr_39966_39996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (3))){
var inst_39944 = (state_39946[(2)]);
var state_39946__$1 = state_39946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39946__$1,inst_39944);
} else {
if((state_val_39947 === (12))){
var inst_39932 = (state_39946[(2)]);
var state_39946__$1 = state_39946;
var statearr_39967_39997 = state_39946__$1;
(statearr_39967_39997[(2)] = inst_39932);

(statearr_39967_39997[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (2))){
var state_39946__$1 = state_39946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39946__$1,(4),in$);
} else {
if((state_val_39947 === (23))){
var inst_39940 = (state_39946[(2)]);
var state_39946__$1 = state_39946;
var statearr_39968_39998 = state_39946__$1;
(statearr_39968_39998[(2)] = inst_39940);

(statearr_39968_39998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (19))){
var inst_39927 = (state_39946[(2)]);
var state_39946__$1 = state_39946;
var statearr_39969_39999 = state_39946__$1;
(statearr_39969_39999[(2)] = inst_39927);

(statearr_39969_39999[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (11))){
var inst_39912 = (state_39946[(7)]);
var inst_39898 = (state_39946[(9)]);
var inst_39912__$1 = cljs.core.seq.call(null,inst_39898);
var state_39946__$1 = (function (){var statearr_39970 = state_39946;
(statearr_39970[(7)] = inst_39912__$1);

return statearr_39970;
})();
if(inst_39912__$1){
var statearr_39971_40000 = state_39946__$1;
(statearr_39971_40000[(1)] = (14));

} else {
var statearr_39972_40001 = state_39946__$1;
(statearr_39972_40001[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (9))){
var inst_39934 = (state_39946[(2)]);
var inst_39935 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39946__$1 = (function (){var statearr_39973 = state_39946;
(statearr_39973[(15)] = inst_39934);

return statearr_39973;
})();
if(cljs.core.truth_(inst_39935)){
var statearr_39974_40002 = state_39946__$1;
(statearr_39974_40002[(1)] = (21));

} else {
var statearr_39975_40003 = state_39946__$1;
(statearr_39975_40003[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (5))){
var inst_39890 = cljs.core.async.close_BANG_.call(null,out);
var state_39946__$1 = state_39946;
var statearr_39976_40004 = state_39946__$1;
(statearr_39976_40004[(2)] = inst_39890);

(statearr_39976_40004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (14))){
var inst_39912 = (state_39946[(7)]);
var inst_39914 = cljs.core.chunked_seq_QMARK_.call(null,inst_39912);
var state_39946__$1 = state_39946;
if(inst_39914){
var statearr_39977_40005 = state_39946__$1;
(statearr_39977_40005[(1)] = (17));

} else {
var statearr_39978_40006 = state_39946__$1;
(statearr_39978_40006[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (16))){
var inst_39930 = (state_39946[(2)]);
var state_39946__$1 = state_39946;
var statearr_39979_40007 = state_39946__$1;
(statearr_39979_40007[(2)] = inst_39930);

(statearr_39979_40007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (10))){
var inst_39899 = (state_39946[(11)]);
var inst_39901 = (state_39946[(12)]);
var inst_39906 = cljs.core._nth.call(null,inst_39899,inst_39901);
var state_39946__$1 = state_39946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39946__$1,(13),out,inst_39906);
} else {
if((state_val_39947 === (18))){
var inst_39912 = (state_39946[(7)]);
var inst_39921 = cljs.core.first.call(null,inst_39912);
var state_39946__$1 = state_39946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39946__$1,(20),out,inst_39921);
} else {
if((state_val_39947 === (8))){
var inst_39900 = (state_39946[(8)]);
var inst_39901 = (state_39946[(12)]);
var inst_39903 = (inst_39901 < inst_39900);
var inst_39904 = inst_39903;
var state_39946__$1 = state_39946;
if(cljs.core.truth_(inst_39904)){
var statearr_39980_40008 = state_39946__$1;
(statearr_39980_40008[(1)] = (10));

} else {
var statearr_39981_40009 = state_39946__$1;
(statearr_39981_40009[(1)] = (11));

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
});})(c__38330__auto__))
;
return ((function (switch__38240__auto__,c__38330__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38241__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38241__auto____0 = (function (){
var statearr_39982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39982[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38241__auto__);

(statearr_39982[(1)] = (1));

return statearr_39982;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38241__auto____1 = (function (state_39946){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_39946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e39983){if((e39983 instanceof Object)){
var ex__38244__auto__ = e39983;
var statearr_39984_40010 = state_39946;
(statearr_39984_40010[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40011 = state_39946;
state_39946 = G__40011;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38241__auto__ = function(state_39946){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38241__auto____1.call(this,state_39946);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38241__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38241__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto__))
})();
var state__38332__auto__ = (function (){var statearr_39985 = f__38331__auto__.call(null);
(statearr_39985[(6)] = c__38330__auto__);

return statearr_39985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto__))
);

return c__38330__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40013 = arguments.length;
switch (G__40013) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40016 = arguments.length;
switch (G__40016) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40019 = arguments.length;
switch (G__40019) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38330__auto___40066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___40066,out){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___40066,out){
return (function (state_40043){
var state_val_40044 = (state_40043[(1)]);
if((state_val_40044 === (7))){
var inst_40038 = (state_40043[(2)]);
var state_40043__$1 = state_40043;
var statearr_40045_40067 = state_40043__$1;
(statearr_40045_40067[(2)] = inst_40038);

(statearr_40045_40067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40044 === (1))){
var inst_40020 = null;
var state_40043__$1 = (function (){var statearr_40046 = state_40043;
(statearr_40046[(7)] = inst_40020);

return statearr_40046;
})();
var statearr_40047_40068 = state_40043__$1;
(statearr_40047_40068[(2)] = null);

(statearr_40047_40068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40044 === (4))){
var inst_40023 = (state_40043[(8)]);
var inst_40023__$1 = (state_40043[(2)]);
var inst_40024 = (inst_40023__$1 == null);
var inst_40025 = cljs.core.not.call(null,inst_40024);
var state_40043__$1 = (function (){var statearr_40048 = state_40043;
(statearr_40048[(8)] = inst_40023__$1);

return statearr_40048;
})();
if(inst_40025){
var statearr_40049_40069 = state_40043__$1;
(statearr_40049_40069[(1)] = (5));

} else {
var statearr_40050_40070 = state_40043__$1;
(statearr_40050_40070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40044 === (6))){
var state_40043__$1 = state_40043;
var statearr_40051_40071 = state_40043__$1;
(statearr_40051_40071[(2)] = null);

(statearr_40051_40071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40044 === (3))){
var inst_40040 = (state_40043[(2)]);
var inst_40041 = cljs.core.async.close_BANG_.call(null,out);
var state_40043__$1 = (function (){var statearr_40052 = state_40043;
(statearr_40052[(9)] = inst_40040);

return statearr_40052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40043__$1,inst_40041);
} else {
if((state_val_40044 === (2))){
var state_40043__$1 = state_40043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40043__$1,(4),ch);
} else {
if((state_val_40044 === (11))){
var inst_40023 = (state_40043[(8)]);
var inst_40032 = (state_40043[(2)]);
var inst_40020 = inst_40023;
var state_40043__$1 = (function (){var statearr_40053 = state_40043;
(statearr_40053[(7)] = inst_40020);

(statearr_40053[(10)] = inst_40032);

return statearr_40053;
})();
var statearr_40054_40072 = state_40043__$1;
(statearr_40054_40072[(2)] = null);

(statearr_40054_40072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40044 === (9))){
var inst_40023 = (state_40043[(8)]);
var state_40043__$1 = state_40043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40043__$1,(11),out,inst_40023);
} else {
if((state_val_40044 === (5))){
var inst_40023 = (state_40043[(8)]);
var inst_40020 = (state_40043[(7)]);
var inst_40027 = cljs.core._EQ_.call(null,inst_40023,inst_40020);
var state_40043__$1 = state_40043;
if(inst_40027){
var statearr_40056_40073 = state_40043__$1;
(statearr_40056_40073[(1)] = (8));

} else {
var statearr_40057_40074 = state_40043__$1;
(statearr_40057_40074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40044 === (10))){
var inst_40035 = (state_40043[(2)]);
var state_40043__$1 = state_40043;
var statearr_40058_40075 = state_40043__$1;
(statearr_40058_40075[(2)] = inst_40035);

(statearr_40058_40075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40044 === (8))){
var inst_40020 = (state_40043[(7)]);
var tmp40055 = inst_40020;
var inst_40020__$1 = tmp40055;
var state_40043__$1 = (function (){var statearr_40059 = state_40043;
(statearr_40059[(7)] = inst_40020__$1);

return statearr_40059;
})();
var statearr_40060_40076 = state_40043__$1;
(statearr_40060_40076[(2)] = null);

(statearr_40060_40076[(1)] = (2));


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
});})(c__38330__auto___40066,out))
;
return ((function (switch__38240__auto__,c__38330__auto___40066,out){
return (function() {
var cljs$core$async$state_machine__38241__auto__ = null;
var cljs$core$async$state_machine__38241__auto____0 = (function (){
var statearr_40061 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40061[(0)] = cljs$core$async$state_machine__38241__auto__);

(statearr_40061[(1)] = (1));

return statearr_40061;
});
var cljs$core$async$state_machine__38241__auto____1 = (function (state_40043){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_40043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e40062){if((e40062 instanceof Object)){
var ex__38244__auto__ = e40062;
var statearr_40063_40077 = state_40043;
(statearr_40063_40077[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40078 = state_40043;
state_40043 = G__40078;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$state_machine__38241__auto__ = function(state_40043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38241__auto____1.call(this,state_40043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38241__auto____0;
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38241__auto____1;
return cljs$core$async$state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___40066,out))
})();
var state__38332__auto__ = (function (){var statearr_40064 = f__38331__auto__.call(null);
(statearr_40064[(6)] = c__38330__auto___40066);

return statearr_40064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___40066,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40080 = arguments.length;
switch (G__40080) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38330__auto___40146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___40146,out){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___40146,out){
return (function (state_40118){
var state_val_40119 = (state_40118[(1)]);
if((state_val_40119 === (7))){
var inst_40114 = (state_40118[(2)]);
var state_40118__$1 = state_40118;
var statearr_40120_40147 = state_40118__$1;
(statearr_40120_40147[(2)] = inst_40114);

(statearr_40120_40147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (1))){
var inst_40081 = (new Array(n));
var inst_40082 = inst_40081;
var inst_40083 = (0);
var state_40118__$1 = (function (){var statearr_40121 = state_40118;
(statearr_40121[(7)] = inst_40083);

(statearr_40121[(8)] = inst_40082);

return statearr_40121;
})();
var statearr_40122_40148 = state_40118__$1;
(statearr_40122_40148[(2)] = null);

(statearr_40122_40148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (4))){
var inst_40086 = (state_40118[(9)]);
var inst_40086__$1 = (state_40118[(2)]);
var inst_40087 = (inst_40086__$1 == null);
var inst_40088 = cljs.core.not.call(null,inst_40087);
var state_40118__$1 = (function (){var statearr_40123 = state_40118;
(statearr_40123[(9)] = inst_40086__$1);

return statearr_40123;
})();
if(inst_40088){
var statearr_40124_40149 = state_40118__$1;
(statearr_40124_40149[(1)] = (5));

} else {
var statearr_40125_40150 = state_40118__$1;
(statearr_40125_40150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (15))){
var inst_40108 = (state_40118[(2)]);
var state_40118__$1 = state_40118;
var statearr_40126_40151 = state_40118__$1;
(statearr_40126_40151[(2)] = inst_40108);

(statearr_40126_40151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (13))){
var state_40118__$1 = state_40118;
var statearr_40127_40152 = state_40118__$1;
(statearr_40127_40152[(2)] = null);

(statearr_40127_40152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (6))){
var inst_40083 = (state_40118[(7)]);
var inst_40104 = (inst_40083 > (0));
var state_40118__$1 = state_40118;
if(cljs.core.truth_(inst_40104)){
var statearr_40128_40153 = state_40118__$1;
(statearr_40128_40153[(1)] = (12));

} else {
var statearr_40129_40154 = state_40118__$1;
(statearr_40129_40154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (3))){
var inst_40116 = (state_40118[(2)]);
var state_40118__$1 = state_40118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40118__$1,inst_40116);
} else {
if((state_val_40119 === (12))){
var inst_40082 = (state_40118[(8)]);
var inst_40106 = cljs.core.vec.call(null,inst_40082);
var state_40118__$1 = state_40118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40118__$1,(15),out,inst_40106);
} else {
if((state_val_40119 === (2))){
var state_40118__$1 = state_40118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40118__$1,(4),ch);
} else {
if((state_val_40119 === (11))){
var inst_40098 = (state_40118[(2)]);
var inst_40099 = (new Array(n));
var inst_40082 = inst_40099;
var inst_40083 = (0);
var state_40118__$1 = (function (){var statearr_40130 = state_40118;
(statearr_40130[(10)] = inst_40098);

(statearr_40130[(7)] = inst_40083);

(statearr_40130[(8)] = inst_40082);

return statearr_40130;
})();
var statearr_40131_40155 = state_40118__$1;
(statearr_40131_40155[(2)] = null);

(statearr_40131_40155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (9))){
var inst_40082 = (state_40118[(8)]);
var inst_40096 = cljs.core.vec.call(null,inst_40082);
var state_40118__$1 = state_40118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40118__$1,(11),out,inst_40096);
} else {
if((state_val_40119 === (5))){
var inst_40091 = (state_40118[(11)]);
var inst_40083 = (state_40118[(7)]);
var inst_40082 = (state_40118[(8)]);
var inst_40086 = (state_40118[(9)]);
var inst_40090 = (inst_40082[inst_40083] = inst_40086);
var inst_40091__$1 = (inst_40083 + (1));
var inst_40092 = (inst_40091__$1 < n);
var state_40118__$1 = (function (){var statearr_40132 = state_40118;
(statearr_40132[(12)] = inst_40090);

(statearr_40132[(11)] = inst_40091__$1);

return statearr_40132;
})();
if(cljs.core.truth_(inst_40092)){
var statearr_40133_40156 = state_40118__$1;
(statearr_40133_40156[(1)] = (8));

} else {
var statearr_40134_40157 = state_40118__$1;
(statearr_40134_40157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (14))){
var inst_40111 = (state_40118[(2)]);
var inst_40112 = cljs.core.async.close_BANG_.call(null,out);
var state_40118__$1 = (function (){var statearr_40136 = state_40118;
(statearr_40136[(13)] = inst_40111);

return statearr_40136;
})();
var statearr_40137_40158 = state_40118__$1;
(statearr_40137_40158[(2)] = inst_40112);

(statearr_40137_40158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (10))){
var inst_40102 = (state_40118[(2)]);
var state_40118__$1 = state_40118;
var statearr_40138_40159 = state_40118__$1;
(statearr_40138_40159[(2)] = inst_40102);

(statearr_40138_40159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (8))){
var inst_40091 = (state_40118[(11)]);
var inst_40082 = (state_40118[(8)]);
var tmp40135 = inst_40082;
var inst_40082__$1 = tmp40135;
var inst_40083 = inst_40091;
var state_40118__$1 = (function (){var statearr_40139 = state_40118;
(statearr_40139[(7)] = inst_40083);

(statearr_40139[(8)] = inst_40082__$1);

return statearr_40139;
})();
var statearr_40140_40160 = state_40118__$1;
(statearr_40140_40160[(2)] = null);

(statearr_40140_40160[(1)] = (2));


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
});})(c__38330__auto___40146,out))
;
return ((function (switch__38240__auto__,c__38330__auto___40146,out){
return (function() {
var cljs$core$async$state_machine__38241__auto__ = null;
var cljs$core$async$state_machine__38241__auto____0 = (function (){
var statearr_40141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40141[(0)] = cljs$core$async$state_machine__38241__auto__);

(statearr_40141[(1)] = (1));

return statearr_40141;
});
var cljs$core$async$state_machine__38241__auto____1 = (function (state_40118){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_40118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e40142){if((e40142 instanceof Object)){
var ex__38244__auto__ = e40142;
var statearr_40143_40161 = state_40118;
(statearr_40143_40161[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40162 = state_40118;
state_40118 = G__40162;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$state_machine__38241__auto__ = function(state_40118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38241__auto____1.call(this,state_40118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38241__auto____0;
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38241__auto____1;
return cljs$core$async$state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___40146,out))
})();
var state__38332__auto__ = (function (){var statearr_40144 = f__38331__auto__.call(null);
(statearr_40144[(6)] = c__38330__auto___40146);

return statearr_40144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___40146,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40164 = arguments.length;
switch (G__40164) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38330__auto___40234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___40234,out){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___40234,out){
return (function (state_40206){
var state_val_40207 = (state_40206[(1)]);
if((state_val_40207 === (7))){
var inst_40202 = (state_40206[(2)]);
var state_40206__$1 = state_40206;
var statearr_40208_40235 = state_40206__$1;
(statearr_40208_40235[(2)] = inst_40202);

(statearr_40208_40235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (1))){
var inst_40165 = [];
var inst_40166 = inst_40165;
var inst_40167 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40206__$1 = (function (){var statearr_40209 = state_40206;
(statearr_40209[(7)] = inst_40167);

(statearr_40209[(8)] = inst_40166);

return statearr_40209;
})();
var statearr_40210_40236 = state_40206__$1;
(statearr_40210_40236[(2)] = null);

(statearr_40210_40236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (4))){
var inst_40170 = (state_40206[(9)]);
var inst_40170__$1 = (state_40206[(2)]);
var inst_40171 = (inst_40170__$1 == null);
var inst_40172 = cljs.core.not.call(null,inst_40171);
var state_40206__$1 = (function (){var statearr_40211 = state_40206;
(statearr_40211[(9)] = inst_40170__$1);

return statearr_40211;
})();
if(inst_40172){
var statearr_40212_40237 = state_40206__$1;
(statearr_40212_40237[(1)] = (5));

} else {
var statearr_40213_40238 = state_40206__$1;
(statearr_40213_40238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (15))){
var inst_40196 = (state_40206[(2)]);
var state_40206__$1 = state_40206;
var statearr_40214_40239 = state_40206__$1;
(statearr_40214_40239[(2)] = inst_40196);

(statearr_40214_40239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (13))){
var state_40206__$1 = state_40206;
var statearr_40215_40240 = state_40206__$1;
(statearr_40215_40240[(2)] = null);

(statearr_40215_40240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (6))){
var inst_40166 = (state_40206[(8)]);
var inst_40191 = inst_40166.length;
var inst_40192 = (inst_40191 > (0));
var state_40206__$1 = state_40206;
if(cljs.core.truth_(inst_40192)){
var statearr_40216_40241 = state_40206__$1;
(statearr_40216_40241[(1)] = (12));

} else {
var statearr_40217_40242 = state_40206__$1;
(statearr_40217_40242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (3))){
var inst_40204 = (state_40206[(2)]);
var state_40206__$1 = state_40206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40206__$1,inst_40204);
} else {
if((state_val_40207 === (12))){
var inst_40166 = (state_40206[(8)]);
var inst_40194 = cljs.core.vec.call(null,inst_40166);
var state_40206__$1 = state_40206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40206__$1,(15),out,inst_40194);
} else {
if((state_val_40207 === (2))){
var state_40206__$1 = state_40206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40206__$1,(4),ch);
} else {
if((state_val_40207 === (11))){
var inst_40174 = (state_40206[(10)]);
var inst_40170 = (state_40206[(9)]);
var inst_40184 = (state_40206[(2)]);
var inst_40185 = [];
var inst_40186 = inst_40185.push(inst_40170);
var inst_40166 = inst_40185;
var inst_40167 = inst_40174;
var state_40206__$1 = (function (){var statearr_40218 = state_40206;
(statearr_40218[(11)] = inst_40184);

(statearr_40218[(7)] = inst_40167);

(statearr_40218[(12)] = inst_40186);

(statearr_40218[(8)] = inst_40166);

return statearr_40218;
})();
var statearr_40219_40243 = state_40206__$1;
(statearr_40219_40243[(2)] = null);

(statearr_40219_40243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (9))){
var inst_40166 = (state_40206[(8)]);
var inst_40182 = cljs.core.vec.call(null,inst_40166);
var state_40206__$1 = state_40206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40206__$1,(11),out,inst_40182);
} else {
if((state_val_40207 === (5))){
var inst_40174 = (state_40206[(10)]);
var inst_40170 = (state_40206[(9)]);
var inst_40167 = (state_40206[(7)]);
var inst_40174__$1 = f.call(null,inst_40170);
var inst_40175 = cljs.core._EQ_.call(null,inst_40174__$1,inst_40167);
var inst_40176 = cljs.core.keyword_identical_QMARK_.call(null,inst_40167,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40177 = (inst_40175) || (inst_40176);
var state_40206__$1 = (function (){var statearr_40220 = state_40206;
(statearr_40220[(10)] = inst_40174__$1);

return statearr_40220;
})();
if(cljs.core.truth_(inst_40177)){
var statearr_40221_40244 = state_40206__$1;
(statearr_40221_40244[(1)] = (8));

} else {
var statearr_40222_40245 = state_40206__$1;
(statearr_40222_40245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (14))){
var inst_40199 = (state_40206[(2)]);
var inst_40200 = cljs.core.async.close_BANG_.call(null,out);
var state_40206__$1 = (function (){var statearr_40224 = state_40206;
(statearr_40224[(13)] = inst_40199);

return statearr_40224;
})();
var statearr_40225_40246 = state_40206__$1;
(statearr_40225_40246[(2)] = inst_40200);

(statearr_40225_40246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (10))){
var inst_40189 = (state_40206[(2)]);
var state_40206__$1 = state_40206;
var statearr_40226_40247 = state_40206__$1;
(statearr_40226_40247[(2)] = inst_40189);

(statearr_40226_40247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40207 === (8))){
var inst_40174 = (state_40206[(10)]);
var inst_40170 = (state_40206[(9)]);
var inst_40166 = (state_40206[(8)]);
var inst_40179 = inst_40166.push(inst_40170);
var tmp40223 = inst_40166;
var inst_40166__$1 = tmp40223;
var inst_40167 = inst_40174;
var state_40206__$1 = (function (){var statearr_40227 = state_40206;
(statearr_40227[(7)] = inst_40167);

(statearr_40227[(14)] = inst_40179);

(statearr_40227[(8)] = inst_40166__$1);

return statearr_40227;
})();
var statearr_40228_40248 = state_40206__$1;
(statearr_40228_40248[(2)] = null);

(statearr_40228_40248[(1)] = (2));


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
});})(c__38330__auto___40234,out))
;
return ((function (switch__38240__auto__,c__38330__auto___40234,out){
return (function() {
var cljs$core$async$state_machine__38241__auto__ = null;
var cljs$core$async$state_machine__38241__auto____0 = (function (){
var statearr_40229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40229[(0)] = cljs$core$async$state_machine__38241__auto__);

(statearr_40229[(1)] = (1));

return statearr_40229;
});
var cljs$core$async$state_machine__38241__auto____1 = (function (state_40206){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_40206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e40230){if((e40230 instanceof Object)){
var ex__38244__auto__ = e40230;
var statearr_40231_40249 = state_40206;
(statearr_40231_40249[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40250 = state_40206;
state_40206 = G__40250;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
cljs$core$async$state_machine__38241__auto__ = function(state_40206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38241__auto____1.call(this,state_40206);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38241__auto____0;
cljs$core$async$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38241__auto____1;
return cljs$core$async$state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___40234,out))
})();
var state__38332__auto__ = (function (){var statearr_40232 = f__38331__auto__.call(null);
(statearr_40232[(6)] = c__38330__auto___40234);

return statearr_40232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___40234,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

