// Compiled by ClojureScript 1.9.908 {}
goog.provide('net.cassiel.lifecycle');
goog.require('cljs.core');
goog.require('clojure.string');
net.cassiel.lifecycle.pad = (function net$cassiel$lifecycle$pad(x){
return clojure.string.join.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,((20) - cljs.core.count.call(null,x))," ")),x," "));
});
net.cassiel.lifecycle.starting = (function net$cassiel$lifecycle$starting(var_args){
var args__32159__auto__ = [];
var len__32152__auto___40349 = arguments.length;
var i__32153__auto___40350 = (0);
while(true){
if((i__32153__auto___40350 < len__32152__auto___40349)){
args__32159__auto__.push((arguments[i__32153__auto___40350]));

var G__40351 = (i__32153__auto___40350 + (1));
i__32153__auto___40350 = G__40351;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((1) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((1)),(0),null)):null);
return net.cassiel.lifecycle.starting.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32160__auto__);
});

net.cassiel.lifecycle.starting.cljs$core$IFn$_invoke$arity$variadic = (function (component,p__40346){
var map__40347 = p__40346;
var map__40347__$1 = ((((!((map__40347 == null)))?((((map__40347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40347):map__40347);
var on = cljs.core.get.call(null,map__40347__$1,new cljs.core.Keyword(null,"on","on",173873944));
var action = cljs.core.get.call(null,map__40347__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(on)){
console.info(net.cassiel.lifecycle.pad.call(null,"already running"),component.toString());

return component;
} else {
console.info(net.cassiel.lifecycle.pad.call(null,"+>>"),component.toString());

return action.call(null);
}
});

net.cassiel.lifecycle.starting.cljs$lang$maxFixedArity = (1);

net.cassiel.lifecycle.starting.cljs$lang$applyTo = (function (seq40344){
var G__40345 = cljs.core.first.call(null,seq40344);
var seq40344__$1 = cljs.core.next.call(null,seq40344);
return net.cassiel.lifecycle.starting.cljs$core$IFn$_invoke$arity$variadic(G__40345,seq40344__$1);
});

net.cassiel.lifecycle.stopping = (function net$cassiel$lifecycle$stopping(var_args){
var args__32159__auto__ = [];
var len__32152__auto___40357 = arguments.length;
var i__32153__auto___40358 = (0);
while(true){
if((i__32153__auto___40358 < len__32152__auto___40357)){
args__32159__auto__.push((arguments[i__32153__auto___40358]));

var G__40359 = (i__32153__auto___40358 + (1));
i__32153__auto___40358 = G__40359;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((1) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((1)),(0),null)):null);
return net.cassiel.lifecycle.stopping.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32160__auto__);
});

net.cassiel.lifecycle.stopping.cljs$core$IFn$_invoke$arity$variadic = (function (component,p__40354){
var map__40355 = p__40354;
var map__40355__$1 = ((((!((map__40355 == null)))?((((map__40355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40355):map__40355);
var on = cljs.core.get.call(null,map__40355__$1,new cljs.core.Keyword(null,"on","on",173873944));
var action = cljs.core.get.call(null,map__40355__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(on)){
console.info(net.cassiel.lifecycle.pad.call(null,"<<-"),component.toString());

return action.call(null);
} else {
console.info(net.cassiel.lifecycle.pad.call(null,"already stopped"),component.toString());

return component;
}
});

net.cassiel.lifecycle.stopping.cljs$lang$maxFixedArity = (1);

net.cassiel.lifecycle.stopping.cljs$lang$applyTo = (function (seq40352){
var G__40353 = cljs.core.first.call(null,seq40352);
var seq40352__$1 = cljs.core.next.call(null,seq40352);
return net.cassiel.lifecycle.stopping.cljs$core$IFn$_invoke$arity$variadic(G__40353,seq40352__$1);
});

