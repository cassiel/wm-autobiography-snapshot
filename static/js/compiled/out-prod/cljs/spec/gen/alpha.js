// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__31546__auto__,writer__31547__auto__,opt__31548__auto__){
return cljs.core._write.call(null,writer__31547__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41031 = arguments.length;
var i__32153__auto___41032 = (0);
while(true){
if((i__32153__auto___41032 < len__32152__auto___41031)){
args__32159__auto__.push((arguments[i__32153__auto___41032]));

var G__41033 = (i__32153__auto___41032 + (1));
i__32153__auto___41032 = G__41033;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq41030){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41030));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41035 = arguments.length;
var i__32153__auto___41036 = (0);
while(true){
if((i__32153__auto___41036 < len__32152__auto___41035)){
args__32159__auto__.push((arguments[i__32153__auto___41036]));

var G__41037 = (i__32153__auto___41036 + (1));
i__32153__auto___41036 = G__41037;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq41034){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41034));
});

var g_QMARK__41038 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_41039 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__41038){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__41038))
,null));
var mkg_41040 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__41038,g_41039){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__41038,g_41039))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__41038,g_41039,mkg_41040){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__41038).call(null,x);
});})(g_QMARK__41038,g_41039,mkg_41040))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__41038,g_41039,mkg_41040){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_41040).call(null,gfn);
});})(g_QMARK__41038,g_41039,mkg_41040))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__41038,g_41039,mkg_41040){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_41039).call(null,generator);
});})(g_QMARK__41038,g_41039,mkg_41040))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__41002__auto___41060 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__41002__auto___41060){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41061 = arguments.length;
var i__32153__auto___41062 = (0);
while(true){
if((i__32153__auto___41062 < len__32152__auto___41061)){
args__32159__auto__.push((arguments[i__32153__auto___41062]));

var G__41063 = (i__32153__auto___41062 + (1));
i__32153__auto___41062 = G__41063;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41060))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41060){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41060),args);
});})(g__41002__auto___41060))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__41002__auto___41060){
return (function (seq41041){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41041));
});})(g__41002__auto___41060))
;


var g__41002__auto___41064 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__41002__auto___41064){
return (function cljs$spec$gen$alpha$list(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41065 = arguments.length;
var i__32153__auto___41066 = (0);
while(true){
if((i__32153__auto___41066 < len__32152__auto___41065)){
args__32159__auto__.push((arguments[i__32153__auto___41066]));

var G__41067 = (i__32153__auto___41066 + (1));
i__32153__auto___41066 = G__41067;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41064))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41064){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41064),args);
});})(g__41002__auto___41064))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__41002__auto___41064){
return (function (seq41042){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41042));
});})(g__41002__auto___41064))
;


var g__41002__auto___41068 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__41002__auto___41068){
return (function cljs$spec$gen$alpha$map(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41069 = arguments.length;
var i__32153__auto___41070 = (0);
while(true){
if((i__32153__auto___41070 < len__32152__auto___41069)){
args__32159__auto__.push((arguments[i__32153__auto___41070]));

var G__41071 = (i__32153__auto___41070 + (1));
i__32153__auto___41070 = G__41071;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41068))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41068){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41068),args);
});})(g__41002__auto___41068))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__41002__auto___41068){
return (function (seq41043){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41043));
});})(g__41002__auto___41068))
;


var g__41002__auto___41072 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__41002__auto___41072){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41073 = arguments.length;
var i__32153__auto___41074 = (0);
while(true){
if((i__32153__auto___41074 < len__32152__auto___41073)){
args__32159__auto__.push((arguments[i__32153__auto___41074]));

var G__41075 = (i__32153__auto___41074 + (1));
i__32153__auto___41074 = G__41075;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41072))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41072){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41072),args);
});})(g__41002__auto___41072))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__41002__auto___41072){
return (function (seq41044){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41044));
});})(g__41002__auto___41072))
;


var g__41002__auto___41076 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__41002__auto___41076){
return (function cljs$spec$gen$alpha$set(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41077 = arguments.length;
var i__32153__auto___41078 = (0);
while(true){
if((i__32153__auto___41078 < len__32152__auto___41077)){
args__32159__auto__.push((arguments[i__32153__auto___41078]));

var G__41079 = (i__32153__auto___41078 + (1));
i__32153__auto___41078 = G__41079;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41076))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41076){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41076),args);
});})(g__41002__auto___41076))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__41002__auto___41076){
return (function (seq41045){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41045));
});})(g__41002__auto___41076))
;


var g__41002__auto___41080 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__41002__auto___41080){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41081 = arguments.length;
var i__32153__auto___41082 = (0);
while(true){
if((i__32153__auto___41082 < len__32152__auto___41081)){
args__32159__auto__.push((arguments[i__32153__auto___41082]));

var G__41083 = (i__32153__auto___41082 + (1));
i__32153__auto___41082 = G__41083;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41080))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41080){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41080),args);
});})(g__41002__auto___41080))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__41002__auto___41080){
return (function (seq41046){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41046));
});})(g__41002__auto___41080))
;


var g__41002__auto___41084 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__41002__auto___41084){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41085 = arguments.length;
var i__32153__auto___41086 = (0);
while(true){
if((i__32153__auto___41086 < len__32152__auto___41085)){
args__32159__auto__.push((arguments[i__32153__auto___41086]));

var G__41087 = (i__32153__auto___41086 + (1));
i__32153__auto___41086 = G__41087;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41084))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41084){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41084),args);
});})(g__41002__auto___41084))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__41002__auto___41084){
return (function (seq41047){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41047));
});})(g__41002__auto___41084))
;


var g__41002__auto___41088 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__41002__auto___41088){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41089 = arguments.length;
var i__32153__auto___41090 = (0);
while(true){
if((i__32153__auto___41090 < len__32152__auto___41089)){
args__32159__auto__.push((arguments[i__32153__auto___41090]));

var G__41091 = (i__32153__auto___41090 + (1));
i__32153__auto___41090 = G__41091;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41088))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41088){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41088),args);
});})(g__41002__auto___41088))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__41002__auto___41088){
return (function (seq41048){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41048));
});})(g__41002__auto___41088))
;


var g__41002__auto___41092 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__41002__auto___41092){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41093 = arguments.length;
var i__32153__auto___41094 = (0);
while(true){
if((i__32153__auto___41094 < len__32152__auto___41093)){
args__32159__auto__.push((arguments[i__32153__auto___41094]));

var G__41095 = (i__32153__auto___41094 + (1));
i__32153__auto___41094 = G__41095;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41092))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41092){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41092),args);
});})(g__41002__auto___41092))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__41002__auto___41092){
return (function (seq41049){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41049));
});})(g__41002__auto___41092))
;


var g__41002__auto___41096 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__41002__auto___41096){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41097 = arguments.length;
var i__32153__auto___41098 = (0);
while(true){
if((i__32153__auto___41098 < len__32152__auto___41097)){
args__32159__auto__.push((arguments[i__32153__auto___41098]));

var G__41099 = (i__32153__auto___41098 + (1));
i__32153__auto___41098 = G__41099;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41096))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41096){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41096),args);
});})(g__41002__auto___41096))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__41002__auto___41096){
return (function (seq41050){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41050));
});})(g__41002__auto___41096))
;


var g__41002__auto___41100 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__41002__auto___41100){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41101 = arguments.length;
var i__32153__auto___41102 = (0);
while(true){
if((i__32153__auto___41102 < len__32152__auto___41101)){
args__32159__auto__.push((arguments[i__32153__auto___41102]));

var G__41103 = (i__32153__auto___41102 + (1));
i__32153__auto___41102 = G__41103;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41100))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41100){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41100),args);
});})(g__41002__auto___41100))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__41002__auto___41100){
return (function (seq41051){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41051));
});})(g__41002__auto___41100))
;


var g__41002__auto___41104 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__41002__auto___41104){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41105 = arguments.length;
var i__32153__auto___41106 = (0);
while(true){
if((i__32153__auto___41106 < len__32152__auto___41105)){
args__32159__auto__.push((arguments[i__32153__auto___41106]));

var G__41107 = (i__32153__auto___41106 + (1));
i__32153__auto___41106 = G__41107;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41104))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41104){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41104),args);
});})(g__41002__auto___41104))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__41002__auto___41104){
return (function (seq41052){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41052));
});})(g__41002__auto___41104))
;


var g__41002__auto___41108 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__41002__auto___41108){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41109 = arguments.length;
var i__32153__auto___41110 = (0);
while(true){
if((i__32153__auto___41110 < len__32152__auto___41109)){
args__32159__auto__.push((arguments[i__32153__auto___41110]));

var G__41111 = (i__32153__auto___41110 + (1));
i__32153__auto___41110 = G__41111;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41108))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41108){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41108),args);
});})(g__41002__auto___41108))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__41002__auto___41108){
return (function (seq41053){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41053));
});})(g__41002__auto___41108))
;


var g__41002__auto___41112 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__41002__auto___41112){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41113 = arguments.length;
var i__32153__auto___41114 = (0);
while(true){
if((i__32153__auto___41114 < len__32152__auto___41113)){
args__32159__auto__.push((arguments[i__32153__auto___41114]));

var G__41115 = (i__32153__auto___41114 + (1));
i__32153__auto___41114 = G__41115;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41112))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41112){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41112),args);
});})(g__41002__auto___41112))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__41002__auto___41112){
return (function (seq41054){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41054));
});})(g__41002__auto___41112))
;


var g__41002__auto___41116 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__41002__auto___41116){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41117 = arguments.length;
var i__32153__auto___41118 = (0);
while(true){
if((i__32153__auto___41118 < len__32152__auto___41117)){
args__32159__auto__.push((arguments[i__32153__auto___41118]));

var G__41119 = (i__32153__auto___41118 + (1));
i__32153__auto___41118 = G__41119;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41116))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41116){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41116),args);
});})(g__41002__auto___41116))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__41002__auto___41116){
return (function (seq41055){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41055));
});})(g__41002__auto___41116))
;


var g__41002__auto___41120 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__41002__auto___41120){
return (function cljs$spec$gen$alpha$return(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41121 = arguments.length;
var i__32153__auto___41122 = (0);
while(true){
if((i__32153__auto___41122 < len__32152__auto___41121)){
args__32159__auto__.push((arguments[i__32153__auto___41122]));

var G__41123 = (i__32153__auto___41122 + (1));
i__32153__auto___41122 = G__41123;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41120))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41120){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41120),args);
});})(g__41002__auto___41120))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__41002__auto___41120){
return (function (seq41056){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41056));
});})(g__41002__auto___41120))
;


var g__41002__auto___41124 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__41002__auto___41124){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41125 = arguments.length;
var i__32153__auto___41126 = (0);
while(true){
if((i__32153__auto___41126 < len__32152__auto___41125)){
args__32159__auto__.push((arguments[i__32153__auto___41126]));

var G__41127 = (i__32153__auto___41126 + (1));
i__32153__auto___41126 = G__41127;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41124))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41124){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41124),args);
});})(g__41002__auto___41124))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__41002__auto___41124){
return (function (seq41057){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41057));
});})(g__41002__auto___41124))
;


var g__41002__auto___41128 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__41002__auto___41128){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41129 = arguments.length;
var i__32153__auto___41130 = (0);
while(true){
if((i__32153__auto___41130 < len__32152__auto___41129)){
args__32159__auto__.push((arguments[i__32153__auto___41130]));

var G__41131 = (i__32153__auto___41130 + (1));
i__32153__auto___41130 = G__41131;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41128))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41128){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41128),args);
});})(g__41002__auto___41128))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__41002__auto___41128){
return (function (seq41058){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41058));
});})(g__41002__auto___41128))
;


var g__41002__auto___41132 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__41002__auto___41132){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41133 = arguments.length;
var i__32153__auto___41134 = (0);
while(true){
if((i__32153__auto___41134 < len__32152__auto___41133)){
args__32159__auto__.push((arguments[i__32153__auto___41134]));

var G__41135 = (i__32153__auto___41134 + (1));
i__32153__auto___41134 = G__41135;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41002__auto___41132))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41002__auto___41132){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__41002__auto___41132),args);
});})(g__41002__auto___41132))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__41002__auto___41132){
return (function (seq41059){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41059));
});})(g__41002__auto___41132))
;

var g__41015__auto___41157 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__41015__auto___41157){
return (function cljs$spec$gen$alpha$any(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41158 = arguments.length;
var i__32153__auto___41159 = (0);
while(true){
if((i__32153__auto___41159 < len__32152__auto___41158)){
args__32159__auto__.push((arguments[i__32153__auto___41159]));

var G__41160 = (i__32153__auto___41159 + (1));
i__32153__auto___41159 = G__41160;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41157))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41157){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41157);
});})(g__41015__auto___41157))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__41015__auto___41157){
return (function (seq41136){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41136));
});})(g__41015__auto___41157))
;


var g__41015__auto___41161 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__41015__auto___41161){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41162 = arguments.length;
var i__32153__auto___41163 = (0);
while(true){
if((i__32153__auto___41163 < len__32152__auto___41162)){
args__32159__auto__.push((arguments[i__32153__auto___41163]));

var G__41164 = (i__32153__auto___41163 + (1));
i__32153__auto___41163 = G__41164;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41161))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41161){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41161);
});})(g__41015__auto___41161))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__41015__auto___41161){
return (function (seq41137){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41137));
});})(g__41015__auto___41161))
;


var g__41015__auto___41165 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__41015__auto___41165){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41166 = arguments.length;
var i__32153__auto___41167 = (0);
while(true){
if((i__32153__auto___41167 < len__32152__auto___41166)){
args__32159__auto__.push((arguments[i__32153__auto___41167]));

var G__41168 = (i__32153__auto___41167 + (1));
i__32153__auto___41167 = G__41168;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41165))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41165){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41165);
});})(g__41015__auto___41165))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__41015__auto___41165){
return (function (seq41138){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41138));
});})(g__41015__auto___41165))
;


var g__41015__auto___41169 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__41015__auto___41169){
return (function cljs$spec$gen$alpha$char(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41170 = arguments.length;
var i__32153__auto___41171 = (0);
while(true){
if((i__32153__auto___41171 < len__32152__auto___41170)){
args__32159__auto__.push((arguments[i__32153__auto___41171]));

var G__41172 = (i__32153__auto___41171 + (1));
i__32153__auto___41171 = G__41172;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41169))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41169){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41169);
});})(g__41015__auto___41169))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__41015__auto___41169){
return (function (seq41139){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41139));
});})(g__41015__auto___41169))
;


var g__41015__auto___41173 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__41015__auto___41173){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41174 = arguments.length;
var i__32153__auto___41175 = (0);
while(true){
if((i__32153__auto___41175 < len__32152__auto___41174)){
args__32159__auto__.push((arguments[i__32153__auto___41175]));

var G__41176 = (i__32153__auto___41175 + (1));
i__32153__auto___41175 = G__41176;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41173))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41173){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41173);
});})(g__41015__auto___41173))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__41015__auto___41173){
return (function (seq41140){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41140));
});})(g__41015__auto___41173))
;


var g__41015__auto___41177 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__41015__auto___41177){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41178 = arguments.length;
var i__32153__auto___41179 = (0);
while(true){
if((i__32153__auto___41179 < len__32152__auto___41178)){
args__32159__auto__.push((arguments[i__32153__auto___41179]));

var G__41180 = (i__32153__auto___41179 + (1));
i__32153__auto___41179 = G__41180;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41177))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41177){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41177);
});})(g__41015__auto___41177))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__41015__auto___41177){
return (function (seq41141){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41141));
});})(g__41015__auto___41177))
;


var g__41015__auto___41181 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__41015__auto___41181){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41182 = arguments.length;
var i__32153__auto___41183 = (0);
while(true){
if((i__32153__auto___41183 < len__32152__auto___41182)){
args__32159__auto__.push((arguments[i__32153__auto___41183]));

var G__41184 = (i__32153__auto___41183 + (1));
i__32153__auto___41183 = G__41184;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41181))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41181){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41181);
});})(g__41015__auto___41181))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__41015__auto___41181){
return (function (seq41142){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41142));
});})(g__41015__auto___41181))
;


var g__41015__auto___41185 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__41015__auto___41185){
return (function cljs$spec$gen$alpha$double(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41186 = arguments.length;
var i__32153__auto___41187 = (0);
while(true){
if((i__32153__auto___41187 < len__32152__auto___41186)){
args__32159__auto__.push((arguments[i__32153__auto___41187]));

var G__41188 = (i__32153__auto___41187 + (1));
i__32153__auto___41187 = G__41188;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41185))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41185){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41185);
});})(g__41015__auto___41185))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__41015__auto___41185){
return (function (seq41143){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41143));
});})(g__41015__auto___41185))
;


var g__41015__auto___41189 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__41015__auto___41189){
return (function cljs$spec$gen$alpha$int(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41190 = arguments.length;
var i__32153__auto___41191 = (0);
while(true){
if((i__32153__auto___41191 < len__32152__auto___41190)){
args__32159__auto__.push((arguments[i__32153__auto___41191]));

var G__41192 = (i__32153__auto___41191 + (1));
i__32153__auto___41191 = G__41192;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41189))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41189){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41189);
});})(g__41015__auto___41189))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__41015__auto___41189){
return (function (seq41144){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41144));
});})(g__41015__auto___41189))
;


var g__41015__auto___41193 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__41015__auto___41193){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41194 = arguments.length;
var i__32153__auto___41195 = (0);
while(true){
if((i__32153__auto___41195 < len__32152__auto___41194)){
args__32159__auto__.push((arguments[i__32153__auto___41195]));

var G__41196 = (i__32153__auto___41195 + (1));
i__32153__auto___41195 = G__41196;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41193))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41193){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41193);
});})(g__41015__auto___41193))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__41015__auto___41193){
return (function (seq41145){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41145));
});})(g__41015__auto___41193))
;


var g__41015__auto___41197 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__41015__auto___41197){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41198 = arguments.length;
var i__32153__auto___41199 = (0);
while(true){
if((i__32153__auto___41199 < len__32152__auto___41198)){
args__32159__auto__.push((arguments[i__32153__auto___41199]));

var G__41200 = (i__32153__auto___41199 + (1));
i__32153__auto___41199 = G__41200;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41197))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41197){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41197);
});})(g__41015__auto___41197))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__41015__auto___41197){
return (function (seq41146){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41146));
});})(g__41015__auto___41197))
;


var g__41015__auto___41201 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__41015__auto___41201){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41202 = arguments.length;
var i__32153__auto___41203 = (0);
while(true){
if((i__32153__auto___41203 < len__32152__auto___41202)){
args__32159__auto__.push((arguments[i__32153__auto___41203]));

var G__41204 = (i__32153__auto___41203 + (1));
i__32153__auto___41203 = G__41204;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41201))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41201){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41201);
});})(g__41015__auto___41201))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__41015__auto___41201){
return (function (seq41147){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41147));
});})(g__41015__auto___41201))
;


var g__41015__auto___41205 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__41015__auto___41205){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41206 = arguments.length;
var i__32153__auto___41207 = (0);
while(true){
if((i__32153__auto___41207 < len__32152__auto___41206)){
args__32159__auto__.push((arguments[i__32153__auto___41207]));

var G__41208 = (i__32153__auto___41207 + (1));
i__32153__auto___41207 = G__41208;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41205))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41205){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41205);
});})(g__41015__auto___41205))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__41015__auto___41205){
return (function (seq41148){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41148));
});})(g__41015__auto___41205))
;


var g__41015__auto___41209 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__41015__auto___41209){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41210 = arguments.length;
var i__32153__auto___41211 = (0);
while(true){
if((i__32153__auto___41211 < len__32152__auto___41210)){
args__32159__auto__.push((arguments[i__32153__auto___41211]));

var G__41212 = (i__32153__auto___41211 + (1));
i__32153__auto___41211 = G__41212;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41209))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41209){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41209);
});})(g__41015__auto___41209))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__41015__auto___41209){
return (function (seq41149){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41149));
});})(g__41015__auto___41209))
;


var g__41015__auto___41213 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__41015__auto___41213){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41214 = arguments.length;
var i__32153__auto___41215 = (0);
while(true){
if((i__32153__auto___41215 < len__32152__auto___41214)){
args__32159__auto__.push((arguments[i__32153__auto___41215]));

var G__41216 = (i__32153__auto___41215 + (1));
i__32153__auto___41215 = G__41216;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41213))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41213){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41213);
});})(g__41015__auto___41213))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__41015__auto___41213){
return (function (seq41150){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41150));
});})(g__41015__auto___41213))
;


var g__41015__auto___41217 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__41015__auto___41217){
return (function cljs$spec$gen$alpha$string(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41218 = arguments.length;
var i__32153__auto___41219 = (0);
while(true){
if((i__32153__auto___41219 < len__32152__auto___41218)){
args__32159__auto__.push((arguments[i__32153__auto___41219]));

var G__41220 = (i__32153__auto___41219 + (1));
i__32153__auto___41219 = G__41220;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41217))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41217){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41217);
});})(g__41015__auto___41217))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__41015__auto___41217){
return (function (seq41151){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41151));
});})(g__41015__auto___41217))
;


var g__41015__auto___41221 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__41015__auto___41221){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41222 = arguments.length;
var i__32153__auto___41223 = (0);
while(true){
if((i__32153__auto___41223 < len__32152__auto___41222)){
args__32159__auto__.push((arguments[i__32153__auto___41223]));

var G__41224 = (i__32153__auto___41223 + (1));
i__32153__auto___41223 = G__41224;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41221))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41221){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41221);
});})(g__41015__auto___41221))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__41015__auto___41221){
return (function (seq41152){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41152));
});})(g__41015__auto___41221))
;


var g__41015__auto___41225 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__41015__auto___41225){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41226 = arguments.length;
var i__32153__auto___41227 = (0);
while(true){
if((i__32153__auto___41227 < len__32152__auto___41226)){
args__32159__auto__.push((arguments[i__32153__auto___41227]));

var G__41228 = (i__32153__auto___41227 + (1));
i__32153__auto___41227 = G__41228;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41225))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41225){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41225);
});})(g__41015__auto___41225))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__41015__auto___41225){
return (function (seq41153){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41153));
});})(g__41015__auto___41225))
;


var g__41015__auto___41229 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__41015__auto___41229){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41230 = arguments.length;
var i__32153__auto___41231 = (0);
while(true){
if((i__32153__auto___41231 < len__32152__auto___41230)){
args__32159__auto__.push((arguments[i__32153__auto___41231]));

var G__41232 = (i__32153__auto___41231 + (1));
i__32153__auto___41231 = G__41232;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41229))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41229){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41229);
});})(g__41015__auto___41229))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__41015__auto___41229){
return (function (seq41154){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41154));
});})(g__41015__auto___41229))
;


var g__41015__auto___41233 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__41015__auto___41233){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41234 = arguments.length;
var i__32153__auto___41235 = (0);
while(true){
if((i__32153__auto___41235 < len__32152__auto___41234)){
args__32159__auto__.push((arguments[i__32153__auto___41235]));

var G__41236 = (i__32153__auto___41235 + (1));
i__32153__auto___41235 = G__41236;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41233))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41233){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41233);
});})(g__41015__auto___41233))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__41015__auto___41233){
return (function (seq41155){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41155));
});})(g__41015__auto___41233))
;


var g__41015__auto___41237 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__41015__auto___41237){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41238 = arguments.length;
var i__32153__auto___41239 = (0);
while(true){
if((i__32153__auto___41239 < len__32152__auto___41238)){
args__32159__auto__.push((arguments[i__32153__auto___41239]));

var G__41240 = (i__32153__auto___41239 + (1));
i__32153__auto___41239 = G__41240;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});})(g__41015__auto___41237))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__41015__auto___41237){
return (function (args){
return cljs.core.deref.call(null,g__41015__auto___41237);
});})(g__41015__auto___41237))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__41015__auto___41237){
return (function (seq41156){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41156));
});})(g__41015__auto___41237))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__32159__auto__ = [];
var len__32152__auto___41243 = arguments.length;
var i__32153__auto___41244 = (0);
while(true){
if((i__32153__auto___41244 < len__32152__auto___41243)){
args__32159__auto__.push((arguments[i__32153__auto___41244]));

var G__41245 = (i__32153__auto___41244 + (1));
i__32153__auto___41244 = G__41245;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((0) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__32160__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__41241_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__41241_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq41242){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41242));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__41246_SHARP_){
return (new Date(p1__41246_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});
