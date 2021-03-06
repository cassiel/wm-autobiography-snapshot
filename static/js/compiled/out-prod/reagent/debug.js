// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35933__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35934__i = 0, G__35934__a = new Array(arguments.length -  0);
while (G__35934__i < G__35934__a.length) {G__35934__a[G__35934__i] = arguments[G__35934__i + 0]; ++G__35934__i;}
  args = new cljs.core.IndexedSeq(G__35934__a,0,null);
} 
return G__35933__delegate.call(this,args);};
G__35933.cljs$lang$maxFixedArity = 0;
G__35933.cljs$lang$applyTo = (function (arglist__35935){
var args = cljs.core.seq(arglist__35935);
return G__35933__delegate(args);
});
G__35933.cljs$core$IFn$_invoke$arity$variadic = G__35933__delegate;
return G__35933;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35936__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35937__i = 0, G__35937__a = new Array(arguments.length -  0);
while (G__35937__i < G__35937__a.length) {G__35937__a[G__35937__i] = arguments[G__35937__i + 0]; ++G__35937__i;}
  args = new cljs.core.IndexedSeq(G__35937__a,0,null);
} 
return G__35936__delegate.call(this,args);};
G__35936.cljs$lang$maxFixedArity = 0;
G__35936.cljs$lang$applyTo = (function (arglist__35938){
var args = cljs.core.seq(arglist__35938);
return G__35936__delegate(args);
});
G__35936.cljs$core$IFn$_invoke$arity$variadic = G__35936__delegate;
return G__35936;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
