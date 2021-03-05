// Compiled by ClojureScript 1.9.908 {}
goog.provide('net.cassiel.auto_23.patterns');
goog.require('cljs.core');
goog.require('net.cassiel.auto_23.checker');
goog.require('net.cassiel.auto_23.tame_randoms');
/**
 * Exclusion groups for the 23 items. They should constitute a set such
 * that applying them results in 15 items, and includes #1, #12 and #23.
 * Numbering starts from #1.
 */
net.cassiel.auto_23.patterns.exclusions = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(11)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(17)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(19),(20)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21),(22)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(23)], null)], null);
net.cassiel.auto_23.patterns.total_num_discs = (23);
net.cassiel.auto_23.patterns.display_num_discs = cljs.core.count.call(null,net.cassiel.auto_23.patterns.exclusions);
/**
 * Apply exclusions to get a list of numbers to include, and those to exclude.
 */
net.cassiel.auto_23.patterns.select_by_exclusion = (function net$cassiel$auto_23$patterns$select_by_exclusion(){
return net.cassiel.auto_23.checker.conformer.call(null,new cljs.core.Keyword("net.cassiel.auto-23.checker","key-sets","net.cassiel.auto-23.checker/key-sets",1215081847),cljs.core.reduce.call(null,(function (result,item){
var x = net.cassiel.auto_23.tame_randoms.tame_rand_nth.call(null,item);
var xs = cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x),item);
return cljs.core.update.call(null,cljs.core.update.call(null,result,new cljs.core.Keyword(null,"incl","incl",1482303638),cljs.core.conj,x),new cljs.core.Keyword(null,"excl","excl",1051845148),cljs.core.concat,xs);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"incl","incl",1482303638),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"excl","excl",1051845148),cljs.core.PersistentVector.EMPTY], null),net.cassiel.auto_23.patterns.exclusions));
});
net.cassiel.auto_23.patterns.starting_shuffle = (function net$cassiel$auto_23$patterns$starting_shuffle(){
var map__42247 = net.cassiel.auto_23.patterns.select_by_exclusion.call(null);
var map__42247__$1 = ((((!((map__42247 == null)))?((((map__42247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42247):map__42247);
var incl = cljs.core.get.call(null,map__42247__$1,new cljs.core.Keyword(null,"incl","incl",1482303638));
var excl = cljs.core.get.call(null,map__42247__$1,new cljs.core.Keyword(null,"excl","excl",1051845148));
var incl_SINGLEQUOTE_ = net.cassiel.auto_23.tame_randoms.tame_shuffle.call(null,incl);
return net.cassiel.auto_23.checker.conformer.call(null,new cljs.core.Keyword("net.cassiel.auto-23.checker","working-state","net.cassiel.auto-23.checker/working-state",-1270538570),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-sets","key-sets",-44628496),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"incl","incl",1482303638),incl_SINGLEQUOTE_,new cljs.core.Keyword(null,"excl","excl",1051845148),excl], null),new cljs.core.Keyword(null,"wired-positions","wired-positions",1127639423),cljs.core.PersistentHashSet.EMPTY], null));
});
/**
 * Put a particular item in a particular position, swapping with the
 * value already there. The item must be in the inclusion list.
 */
net.cassiel.auto_23.patterns.into_position = (function net$cassiel$auto_23$patterns$into_position(var_args){
var args__32159__auto__ = [];
var len__32152__auto___42254 = arguments.length;
var i__32153__auto___42255 = (0);
while(true){
if((i__32153__auto___42255 < len__32152__auto___42254)){
args__32159__auto__.push((arguments[i__32153__auto___42255]));

var G__42256 = (i__32153__auto___42255 + (1));
i__32153__auto___42255 = G__42256;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((1) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((1)),(0),null)):null);
return net.cassiel.auto_23.patterns.into_position.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32160__auto__);
});

net.cassiel.auto_23.patterns.into_position.cljs$core$IFn$_invoke$arity$variadic = (function (working_state,p__42251){
var map__42252 = p__42251;
var map__42252__$1 = ((((!((map__42252 == null)))?((((map__42252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42252):map__42252);
var pos = cljs.core.get.call(null,map__42252__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var key = cljs.core.get.call(null,map__42252__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var keys = cljs.core.get_in.call(null,working_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-sets","key-sets",-44628496),new cljs.core.Keyword(null,"incl","incl",1482303638)], null));
var curr_pos = keys.indexOf(key);
var curr_val = cljs.core.nth.call(null,keys,pos);
var X = cljs.core.vec.call(null,keys);
var X__$1 = cljs.core.assoc.call(null,X,curr_pos,curr_val);
var X__$2 = cljs.core.assoc.call(null,X__$1,pos,key);
var X__$3 = cljs.core.assoc_in.call(null,working_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-sets","key-sets",-44628496),new cljs.core.Keyword(null,"incl","incl",1482303638)], null),X__$2);
var X__$4 = cljs.core.update_in.call(null,X__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wired-positions","wired-positions",1127639423)], null),cljs.core.conj,pos);
return net.cassiel.auto_23.checker.conformer.call(null,new cljs.core.Keyword("net.cassiel.auto-23.checker","working-state","net.cassiel.auto-23.checker/working-state",-1270538570),X__$4);
});

net.cassiel.auto_23.patterns.into_position.cljs$lang$maxFixedArity = (1);

net.cassiel.auto_23.patterns.into_position.cljs$lang$applyTo = (function (seq42249){
var G__42250 = cljs.core.first.call(null,seq42249);
var seq42249__$1 = cljs.core.next.call(null,seq42249);
return net.cassiel.auto_23.patterns.into_position.cljs$core$IFn$_invoke$arity$variadic(G__42250,seq42249__$1);
});

/**
 * If `old` is in `items`, replace it with `new`.
 */
net.cassiel.auto_23.patterns.maybe_swap = (function net$cassiel$auto_23$patterns$maybe_swap(items,old,new$){
var p = items.indexOf(old);
if(!((p < (0)))){
return cljs.core.assoc.call(null,cljs.core.vec.call(null,items),p,new$);
} else {
return items;
}
});
/**
 * If `if_` is in the include set, then swap to make sure `use_` is
 * in the set and `not_` is not.
 */
net.cassiel.auto_23.patterns.pairing = (function net$cassiel$auto_23$patterns$pairing(var_args){
var args__32159__auto__ = [];
var len__32152__auto___42266 = arguments.length;
var i__32153__auto___42267 = (0);
while(true){
if((i__32153__auto___42267 < len__32152__auto___42266)){
args__32159__auto__.push((arguments[i__32153__auto___42267]));

var G__42268 = (i__32153__auto___42267 + (1));
i__32153__auto___42267 = G__42268;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((1) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((1)),(0),null)):null);
return net.cassiel.auto_23.patterns.pairing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32160__auto__);
});

net.cassiel.auto_23.patterns.pairing.cljs$core$IFn$_invoke$arity$variadic = (function (working_state,p__42259){
var map__42260 = p__42259;
var map__42260__$1 = ((((!((map__42260 == null)))?((((map__42260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42260):map__42260);
var if_ = cljs.core.get.call(null,map__42260__$1,new cljs.core.Keyword(null,"if","if",-458814265));
var use_ = cljs.core.get.call(null,map__42260__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var not_ = cljs.core.get.call(null,map__42260__$1,new cljs.core.Keyword(null,"not","not",-595976884));
var map__42262 = working_state;
var map__42262__$1 = ((((!((map__42262 == null)))?((((map__42262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42262):map__42262);
var key_sets = cljs.core.get.call(null,map__42262__$1,new cljs.core.Keyword(null,"key-sets","key-sets",-44628496));
var map__42263 = key_sets;
var map__42263__$1 = ((((!((map__42263 == null)))?((((map__42263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42263):map__42263);
var incl = cljs.core.get.call(null,map__42263__$1,new cljs.core.Keyword(null,"incl","incl",1482303638));
var excl = cljs.core.get.call(null,map__42263__$1,new cljs.core.Keyword(null,"excl","excl",1051845148));
if((incl.indexOf(if_) < (0))){
return working_state;
} else {
return net.cassiel.auto_23.checker.conformer.call(null,new cljs.core.Keyword("net.cassiel.auto-23.checker","working-state","net.cassiel.auto-23.checker/working-state",-1270538570),cljs.core.update_in.call(null,cljs.core.update_in.call(null,working_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-sets","key-sets",-44628496),new cljs.core.Keyword(null,"incl","incl",1482303638)], null),net.cassiel.auto_23.patterns.maybe_swap,not_,use_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-sets","key-sets",-44628496),new cljs.core.Keyword(null,"excl","excl",1051845148)], null),net.cassiel.auto_23.patterns.maybe_swap,use_,not_));
}
});

net.cassiel.auto_23.patterns.pairing.cljs$lang$maxFixedArity = (1);

net.cassiel.auto_23.patterns.pairing.cljs$lang$applyTo = (function (seq42257){
var G__42258 = cljs.core.first.call(null,seq42257);
var seq42257__$1 = cljs.core.next.call(null,seq42257);
return net.cassiel.auto_23.patterns.pairing.cljs$core$IFn$_invoke$arity$variadic(G__42258,seq42257__$1);
});

net.cassiel.auto_23.patterns.any_unwired_pos_in_range = (function net$cassiel$auto_23$patterns$any_unwired_pos_in_range(wired_positions,min,max){
var positions = cljs.core.range.call(null,min,(max + (1)));
var candidates = cljs.core.filter.call(null,((function (positions){
return (function (p1__42269_SHARP_){
return cljs.core.not.call(null,wired_positions.call(null,p1__42269_SHARP_));
});})(positions))
,positions);
return net.cassiel.auto_23.tame_randoms.tame_rand_nth.call(null,candidates);
});
/**
 * Pull a key, if present, into a region (position `min`-`max` inclusive).
 */
net.cassiel.auto_23.patterns.into_region = (function net$cassiel$auto_23$patterns$into_region(var_args){
var args__32159__auto__ = [];
var len__32152__auto___42275 = arguments.length;
var i__32153__auto___42276 = (0);
while(true){
if((i__32153__auto___42276 < len__32152__auto___42275)){
args__32159__auto__.push((arguments[i__32153__auto___42276]));

var G__42277 = (i__32153__auto___42276 + (1));
i__32153__auto___42276 = G__42277;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((1) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((1)),(0),null)):null);
return net.cassiel.auto_23.patterns.into_region.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32160__auto__);
});

net.cassiel.auto_23.patterns.into_region.cljs$core$IFn$_invoke$arity$variadic = (function (working_state,p__42272){
var map__42273 = p__42272;
var map__42273__$1 = ((((!((map__42273 == null)))?((((map__42273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42273):map__42273);
var key = cljs.core.get.call(null,map__42273__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var min = cljs.core.get.call(null,map__42273__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__42273__$1,new cljs.core.Keyword(null,"max","max",61366548));
var incl = cljs.core.get_in.call(null,working_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-sets","key-sets",-44628496),new cljs.core.Keyword(null,"incl","incl",1482303638)], null));
var pos = incl.indexOf(key);
if(!((pos < (0)))){
var pos_SINGLEQUOTE_ = net.cassiel.auto_23.patterns.any_unwired_pos_in_range.call(null,new cljs.core.Keyword(null,"wired-positions","wired-positions",1127639423).cljs$core$IFn$_invoke$arity$1(working_state),min,max);
var key_SINGLEQUOTE_ = cljs.core.nth.call(null,incl,pos_SINGLEQUOTE_);
var incl_SINGLEQUOTE_ = cljs.core.assoc.call(null,cljs.core.vec.call(null,incl),pos,key_SINGLEQUOTE_,pos_SINGLEQUOTE_,key);
return net.cassiel.auto_23.checker.conformer.call(null,new cljs.core.Keyword("net.cassiel.auto-23.checker","working-state","net.cassiel.auto-23.checker/working-state",-1270538570),cljs.core.update.call(null,cljs.core.assoc_in.call(null,working_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-sets","key-sets",-44628496),new cljs.core.Keyword(null,"incl","incl",1482303638)], null),incl_SINGLEQUOTE_),new cljs.core.Keyword(null,"wired-positions","wired-positions",1127639423),cljs.core.conj,pos_SINGLEQUOTE_));
} else {
return working_state;
}
});

net.cassiel.auto_23.patterns.into_region.cljs$lang$maxFixedArity = (1);

net.cassiel.auto_23.patterns.into_region.cljs$lang$applyTo = (function (seq42270){
var G__42271 = cljs.core.first.call(null,seq42270);
var seq42270__$1 = cljs.core.next.call(null,seq42270);
return net.cassiel.auto_23.patterns.into_region.cljs$core$IFn$_invoke$arity$variadic(G__42271,seq42270__$1);
});

/**
 * If both these keys present, must have some separation.
 */
net.cassiel.auto_23.patterns.distant_QMARK_ = (function net$cassiel$auto_23$patterns$distant_QMARK_(working_state,k1,k2){
var incl = cljs.core.get_in.call(null,working_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-sets","key-sets",-44628496),new cljs.core.Keyword(null,"incl","incl",1482303638)], null));
var p1 = incl.indexOf(k1);
var p2 = incl.indexOf(k2);
return ((p1 < (0))) || ((p2 < (0))) || ((Math.abs((p1 - p2)) > (1)));
});
/**
 * The final condition (spacing between #2/#3, #6, #13, #15) we will
 * impose as an iterative filter - easier than trying to apply a
 * corrective function. After N iterations we'll give up.
 */
net.cassiel.auto_23.patterns.well_spaced = (function net$cassiel$auto_23$patterns$well_spaced(working_state){
return cljs.core.reduce.call(null,(function (result,p__42278){
var vec__42279 = p__42278;
var k1 = cljs.core.nth.call(null,vec__42279,(0),null);
var k2 = cljs.core.nth.call(null,vec__42279,(1),null);
var and__30863__auto__ = result;
if(cljs.core.truth_(and__30863__auto__)){
return net.cassiel.auto_23.patterns.distant_QMARK_.call(null,working_state,k1,k2);
} else {
return and__30863__auto__;
}
}),true,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(13)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(13)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(13)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(15)], null)], null));
});
net.cassiel.auto_23.patterns.full_shuffle = (function net$cassiel$auto_23$patterns$full_shuffle(var_args){
var G__42283 = arguments.length;
switch (G__42283) {
case 0:
return net.cassiel.auto_23.patterns.full_shuffle.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cassiel.auto_23.patterns.full_shuffle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cassiel.auto_23.patterns.full_shuffle.cljs$core$IFn$_invoke$arity$0 = (function (){
return net.cassiel.auto_23.patterns.full_shuffle.call(null,(10));
});

net.cassiel.auto_23.patterns.full_shuffle.cljs$core$IFn$_invoke$arity$1 = (function (tries){
while(true){
var candidate = net.cassiel.auto_23.patterns.into_region.call(null,net.cassiel.auto_23.patterns.into_region.call(null,net.cassiel.auto_23.patterns.into_region.call(null,net.cassiel.auto_23.patterns.into_region.call(null,net.cassiel.auto_23.patterns.pairing.call(null,net.cassiel.auto_23.patterns.pairing.call(null,net.cassiel.auto_23.patterns.into_position.call(null,net.cassiel.auto_23.patterns.into_position.call(null,net.cassiel.auto_23.patterns.into_position.call(null,net.cassiel.auto_23.patterns.starting_shuffle.call(null),new cljs.core.Keyword(null,"pos","pos",-864607220),(0),new cljs.core.Keyword(null,"key","key",-1516042587),(1)),new cljs.core.Keyword(null,"pos","pos",-864607220),(net.cassiel.auto_23.patterns.display_num_discs - (1)),new cljs.core.Keyword(null,"key","key",-1516042587),net.cassiel.auto_23.patterns.total_num_discs),new cljs.core.Keyword(null,"pos","pos",-864607220),(7),new cljs.core.Keyword(null,"key","key",-1516042587),(12)),new cljs.core.Keyword(null,"if","if",-458814265),(4),new cljs.core.Keyword(null,"use","use",-1846382424),(8),new cljs.core.Keyword(null,"not","not",-595976884),(9)),new cljs.core.Keyword(null,"if","if",-458814265),(5),new cljs.core.Keyword(null,"use","use",-1846382424),(9),new cljs.core.Keyword(null,"not","not",-595976884),(8)),new cljs.core.Keyword(null,"key","key",-1516042587),(16),new cljs.core.Keyword(null,"min","min",444991522),(2),new cljs.core.Keyword(null,"max","max",61366548),(7)),new cljs.core.Keyword(null,"key","key",-1516042587),(17),new cljs.core.Keyword(null,"min","min",444991522),(2),new cljs.core.Keyword(null,"max","max",61366548),(7)),new cljs.core.Keyword(null,"key","key",-1516042587),(6),new cljs.core.Keyword(null,"min","min",444991522),(8),new cljs.core.Keyword(null,"max","max",61366548),(13)),new cljs.core.Keyword(null,"key","key",-1516042587),(14),new cljs.core.Keyword(null,"min","min",444991522),(8),new cljs.core.Keyword(null,"max","max",61366548),(13));
if(cljs.core.truth_((function (){var or__30875__auto__ = net.cassiel.auto_23.patterns.well_spaced.call(null,candidate);
if(cljs.core.truth_(or__30875__auto__)){
return or__30875__auto__;
} else {
return (tries === (0));
}
})())){
return candidate;
} else {
cljs.core.println.call(null,"shuffle rejection, retry at ",(tries - (1)),"...");

var G__42285 = (tries - (1));
tries = G__42285;
continue;
}
break;
}
});

net.cassiel.auto_23.patterns.full_shuffle.cljs$lang$maxFixedArity = 1;

/**
 * TODO: shuffle into a well-formed set. #1 should be at pos 0, #23 should be
 * at pos (dec display-num-discs), then apply exclusion rules, moving all
 * excluded items to give them positions from display-num-discs upwards.
 * 
 * (That's a slight hack - we should do proper enter()/exit() processing
 * instead - but I quite like the overall effect.)
 */
net.cassiel.auto_23.patterns.shuffle_all_keys_as_positions = (function net$cassiel$auto_23$patterns$shuffle_all_keys_as_positions(){
var map__42287 = new cljs.core.Keyword(null,"key-sets","key-sets",-44628496).cljs$core$IFn$_invoke$arity$1(net.cassiel.auto_23.patterns.full_shuffle.call(null));
var map__42287__$1 = ((((!((map__42287 == null)))?((((map__42287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42287):map__42287);
var incl = cljs.core.get.call(null,map__42287__$1,new cljs.core.Keyword(null,"incl","incl",1482303638));
var excl = cljs.core.get.call(null,map__42287__$1,new cljs.core.Keyword(null,"excl","excl",1051845148));
var all_positions = cljs.core.concat.call(null,incl,excl);
return cljs.core.map.call(null,((function (map__42287,map__42287__$1,incl,excl,all_positions){
return (function (p1__42286_SHARP_){
return all_positions.indexOf((p1__42286_SHARP_ + (1)));
});})(map__42287,map__42287__$1,incl,excl,all_positions))
,cljs.core.range.call(null,net.cassiel.auto_23.patterns.total_num_discs));
});
net.cassiel.auto_23.patterns.data = net.cassiel.auto_23.checker.conformer.call(null,new cljs.core.Keyword("net.cassiel.auto-23.checker","items","net.cassiel.auto-23.checker/items",-829889151),cljs.core.map.call(null,(function (i){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"-",new cljs.core.Keyword(null,"pos","pos",-864607220),i,new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"num_discs","num_discs",-520187686),net.cassiel.auto_23.patterns.total_num_discs,new cljs.core.Keyword(null,"radius","radius",-2073122258),1.0], null);
}),cljs.core.range.call(null,net.cassiel.auto_23.patterns.total_num_discs)));
net.cassiel.auto_23.patterns.plug_positions_in_data = (function net$cassiel$auto_23$patterns$plug_positions_in_data(positions){
return net.cassiel.auto_23.checker.conformer.call(null,new cljs.core.Keyword("net.cassiel.auto-23.checker","items","net.cassiel.auto-23.checker/items",-829889151),cljs.core.map_indexed.call(null,(function (i,x){
var p = cljs.core.nth.call(null,positions,i);
var op = (((p >= net.cassiel.auto_23.patterns.display_num_discs))?0.0:1.0);
var r = (((p >= net.cassiel.auto_23.patterns.display_num_discs))?0.0:1.0);
return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"pos","pos",-864607220),p,new cljs.core.Keyword(null,"opacity","opacity",397153780),op,new cljs.core.Keyword(null,"radius","radius",-2073122258),r,new cljs.core.Keyword(null,"num_discs","num_discs",-520187686),net.cassiel.auto_23.patterns.display_num_discs);
}),net.cassiel.auto_23.patterns.data));
});
net.cassiel.auto_23.patterns.initial_legend = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","B","C","D","E","F","G","H","I","J"], null);
net.cassiel.auto_23.patterns.flatten_legend = (function net$cassiel$auto_23$patterns$flatten_legend(items){
return cljs.core.reduce.call(null,cljs.core.str,"",items);
});
net.cassiel.auto_23.patterns.make_legend = (function net$cassiel$auto_23$patterns$make_legend(){
return cljs.core.take.call(null,(7),net.cassiel.auto_23.tame_randoms.tame_shuffle.call(null,net.cassiel.auto_23.patterns.initial_legend));
});
