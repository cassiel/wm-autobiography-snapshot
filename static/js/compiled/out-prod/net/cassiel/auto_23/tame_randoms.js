// Compiled by ClojureScript 1.9.908 {}
goog.provide('net.cassiel.auto_23.tame_randoms');
goog.require('cljs.core');
goog.require('net.cassiel.auto_23.config');
goog.require('net.cassiel.auto_23.data');
net.cassiel.auto_23.tame_randoms.all_genotypes = cljs.core.vec.call(null,cljs.core.set.call(null,net.cassiel.auto_23.data.genotypes));
net.cassiel.auto_23.tame_randoms.A = cljs.core.atom.call(null,cljs.core.drop.call(null,cljs.core.rand_int.call(null,cljs.core.count.call(null,net.cassiel.auto_23.data.genotypes)),net.cassiel.auto_23.data.genotypes));
net.cassiel.auto_23.tame_randoms.step = (function net$cassiel$auto_23$tame_randoms$step(){
return cljs.core.first.call(null,cljs.core.swap_BANG_.call(null,net.cassiel.auto_23.tame_randoms.A,(function (p1__36336_SHARP_){
if(cljs.core.truth_(p1__36336_SHARP_)){
return cljs.core.next.call(null,p1__36336_SHARP_);
} else {
return net.cassiel.auto_23.data.genotypes;
}
})));
});
net.cassiel.auto_23.tame_randoms.tame_rand = (function net$cassiel$auto_23$tame_randoms$tame_rand(){
if(net.cassiel.auto_23.config.tame_randoms){
return (net.cassiel.auto_23.tame_randoms.all_genotypes.indexOf(net.cassiel.auto_23.tame_randoms.step.call(null)) / cljs.core.count.call(null,net.cassiel.auto_23.tame_randoms.all_genotypes));
} else {
return cljs.core.rand.call(null);
}
});
net.cassiel.auto_23.tame_randoms.tame_rand_nth = (function net$cassiel$auto_23$tame_randoms$tame_rand_nth(ll){
if(net.cassiel.auto_23.config.tame_randoms){
if(cljs.core.seq.call(null,ll)){
return cljs.core.nth.call(null,ll,((cljs.core.count.call(null,ll) * net.cassiel.auto_23.tame_randoms.tame_rand.call(null)) | (0)));
} else {
return null;
}
} else {
return cljs.core.rand_nth.call(null,ll);
}
});
net.cassiel.auto_23.tame_randoms.tame_shuffle = (function net$cassiel$auto_23$tame_randoms$tame_shuffle(ll){
if(net.cassiel.auto_23.config.tame_randoms){
var shuffle_SINGLEQUOTE_ = (function net$cassiel$auto_23$tame_randoms$tame_shuffle_$_shuffle_SINGLEQUOTE_(result,items){
while(true){
if(cljs.core.seq.call(null,items)){
var x = net.cassiel.auto_23.tame_randoms.tame_rand_nth.call(null,items);
var items_SINGLEQUOTE_ = cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([x]),items);
var G__36337 = cljs.core.cons.call(null,x,result);
var G__36338 = items_SINGLEQUOTE_;
result = G__36337;
items = G__36338;
continue;
} else {
return result;
}
break;
}
});
return shuffle_SINGLEQUOTE_.call(null,null,ll);
} else {
return cljs.core.shuffle.call(null,ll);
}
});
