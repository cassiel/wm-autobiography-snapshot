// Compiled by ClojureScript 1.9.908 {}
goog.provide('net.cassiel.auto_23.components.exchange');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('net.cassiel.lifecycle');
goog.require('cljs.core.async');
goog.require('net.cassiel.auto_23.components.ajax_xfer');
goog.require('net.cassiel.auto_23.patterns');
/**
 * Iterate a layout: create a pattern, send it to the server.
 */
net.cassiel.auto_23.components.exchange.submit = (function net$cassiel$auto_23$components$exchange$submit(exchange,n){
cljs.core.println.call(null,"SUBMIT with ",exchange);

var discs = net.cassiel.auto_23.patterns.plug_positions_in_data.call(null,net.cassiel.auto_23.patterns.shuffle_all_keys_as_positions.call(null));
return net.cassiel.auto_23.components.ajax_xfer.fire.call(null,new cljs.core.Keyword(null,"ajax-xfer","ajax-xfer",-2109230539).cljs$core$IFn$_invoke$arity$1(exchange),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),n,new cljs.core.Keyword(null,"type","type",1174270348),"ANY",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"discs","discs",1754122594),discs,new cljs.core.Keyword(null,"legend","legend",-1027192245),net.cassiel.auto_23.patterns.make_legend.call(null)], null)], null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {net.cassiel.auto_23.components.exchange.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
net.cassiel.auto_23.components.exchange.EXCHANGE = (function (ajax_xfer,publication,installed_QMARK_,__meta,__extmap,__hash){
this.ajax_xfer = ajax_xfer;
this.publication = publication;
this.installed_QMARK_ = installed_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return "EXCHANGE";
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31563__auto__,k__31564__auto__){
var self__ = this;
var this__31563__auto____$1 = this;
return this__31563__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31564__auto__,null);
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31565__auto__,k42292,else__31566__auto__){
var self__ = this;
var this__31565__auto____$1 = this;
var G__42296 = k42292;
var G__42296__$1 = (((G__42296 instanceof cljs.core.Keyword))?G__42296.fqn:null);
switch (G__42296__$1) {
case "ajax-xfer":
return self__.ajax_xfer;

break;
case "publication":
return self__.publication;

break;
case "installed?":
return self__.installed_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42292,else__31566__auto__);

}
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31577__auto__,writer__31578__auto__,opts__31579__auto__){
var self__ = this;
var this__31577__auto____$1 = this;
var pr_pair__31580__auto__ = ((function (this__31577__auto____$1){
return (function (keyval__31581__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,cljs.core.pr_writer,""," ","",opts__31579__auto__,keyval__31581__auto__);
});})(this__31577__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,pr_pair__31580__auto__,"#net.cassiel.auto-23.components.exchange.EXCHANGE{",", ","}",opts__31579__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-xfer","ajax-xfer",-2109230539),self__.ajax_xfer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"publication","publication",-1089697399),self__.publication],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"installed?","installed?",-345006478),self__.installed_QMARK_],null))], null),self__.__extmap));
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42291){
var self__ = this;
var G__42291__$1 = this;
return (new cljs.core.RecordIter((0),G__42291__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax-xfer","ajax-xfer",-2109230539),new cljs.core.Keyword(null,"publication","publication",-1089697399),new cljs.core.Keyword(null,"installed?","installed?",-345006478)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31561__auto__){
var self__ = this;
var this__31561__auto____$1 = this;
return self__.__meta;
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31558__auto__){
var self__ = this;
var this__31558__auto____$1 = this;
return (new net.cassiel.auto_23.components.exchange.EXCHANGE(self__.ajax_xfer,self__.publication,self__.installed_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31567__auto__){
var self__ = this;
var this__31567__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31559__auto__){
var self__ = this;
var this__31559__auto____$1 = this;
var h__31331__auto__ = self__.__hash;
if(!((h__31331__auto__ == null))){
return h__31331__auto__;
} else {
var h__31331__auto____$1 = ((function (h__31331__auto__,this__31559__auto____$1){
return (function (coll__31560__auto__){
return (-144367086 ^ cljs.core.hash_unordered_coll.call(null,coll__31560__auto__));
});})(h__31331__auto__,this__31559__auto____$1))
.call(null,this__31559__auto____$1);
self__.__hash = h__31331__auto____$1;

return h__31331__auto____$1;
}
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42293,other42294){
var self__ = this;
var this42293__$1 = this;
return (!((other42294 == null))) && ((this42293__$1.constructor === other42294.constructor)) && (cljs.core._EQ_.call(null,this42293__$1.ajax_xfer,other42294.ajax_xfer)) && (cljs.core._EQ_.call(null,this42293__$1.publication,other42294.publication)) && (cljs.core._EQ_.call(null,this42293__$1.installed_QMARK_,other42294.installed_QMARK_)) && (cljs.core._EQ_.call(null,this42293__$1.__extmap,other42294.__extmap));
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31572__auto__,k__31573__auto__){
var self__ = this;
var this__31572__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"publication","publication",-1089697399),null,new cljs.core.Keyword(null,"installed?","installed?",-345006478),null,new cljs.core.Keyword(null,"ajax-xfer","ajax-xfer",-2109230539),null], null), null),k__31573__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31572__auto____$1),self__.__meta),k__31573__auto__);
} else {
return (new net.cassiel.auto_23.components.exchange.EXCHANGE(self__.ajax_xfer,self__.publication,self__.installed_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31573__auto__)),null));
}
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31570__auto__,k__31571__auto__,G__42291){
var self__ = this;
var this__31570__auto____$1 = this;
var pred__42297 = cljs.core.keyword_identical_QMARK_;
var expr__42298 = k__31571__auto__;
if(cljs.core.truth_(pred__42297.call(null,new cljs.core.Keyword(null,"ajax-xfer","ajax-xfer",-2109230539),expr__42298))){
return (new net.cassiel.auto_23.components.exchange.EXCHANGE(G__42291,self__.publication,self__.installed_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42297.call(null,new cljs.core.Keyword(null,"publication","publication",-1089697399),expr__42298))){
return (new net.cassiel.auto_23.components.exchange.EXCHANGE(self__.ajax_xfer,G__42291,self__.installed_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42297.call(null,new cljs.core.Keyword(null,"installed?","installed?",-345006478),expr__42298))){
return (new net.cassiel.auto_23.components.exchange.EXCHANGE(self__.ajax_xfer,self__.publication,G__42291,self__.__meta,self__.__extmap,null));
} else {
return (new net.cassiel.auto_23.components.exchange.EXCHANGE(self__.ajax_xfer,self__.publication,self__.installed_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31571__auto__,G__42291),null));
}
}
}
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31575__auto__){
var self__ = this;
var this__31575__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-xfer","ajax-xfer",-2109230539),self__.ajax_xfer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"publication","publication",-1089697399),self__.publication],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"installed?","installed?",-345006478),self__.installed_QMARK_],null))], null),self__.__extmap));
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31562__auto__,G__42291){
var self__ = this;
var this__31562__auto____$1 = this;
return (new net.cassiel.auto_23.components.exchange.EXCHANGE(self__.ajax_xfer,self__.publication,self__.installed_QMARK_,G__42291,self__.__extmap,self__.__hash));
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31568__auto__,entry__31569__auto__){
var self__ = this;
var this__31568__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31569__auto__)){
return this__31568__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31569__auto__,(0)),cljs.core._nth.call(null,entry__31569__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31568__auto____$1,entry__31569__auto__);
}
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return net.cassiel.lifecycle.starting.call(null,this$__$1,new cljs.core.Keyword(null,"on","on",173873944),self__.installed_QMARK_,new cljs.core.Keyword(null,"action","action",-811238024),((function (this$__$1){
return (function (){
var ch = new cljs.core.Keyword(null,"return-ch","return-ch",-64194874).cljs$core$IFn$_invoke$arity$1(self__.ajax_xfer);
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"publication","publication",-1089697399),cljs.core.async.pub.call(null,ch,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"installed?","installed?",-345006478),true);
});})(this$__$1))
);
});

net.cassiel.auto_23.components.exchange.EXCHANGE.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return net.cassiel.lifecycle.stopping.call(null,this$__$1,new cljs.core.Keyword(null,"on","on",173873944),self__.installed_QMARK_,new cljs.core.Keyword(null,"action","action",-811238024),((function (this$__$1){
return (function (){
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"publication","publication",-1089697399),null,new cljs.core.Keyword(null,"installed?","installed?",-345006478),false);
});})(this$__$1))
);
});

net.cassiel.auto_23.components.exchange.EXCHANGE.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ajax-xfer","ajax-xfer",-468699012,null),new cljs.core.Symbol(null,"publication","publication",550834128,null),new cljs.core.Symbol(null,"installed?","installed?",1295525049,null)], null);
});

net.cassiel.auto_23.components.exchange.EXCHANGE.cljs$lang$type = true;

net.cassiel.auto_23.components.exchange.EXCHANGE.cljs$lang$ctorPrSeq = (function (this__31601__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"net.cassiel.auto-23.components.exchange/EXCHANGE");
});

net.cassiel.auto_23.components.exchange.EXCHANGE.cljs$lang$ctorPrWriter = (function (this__31601__auto__,writer__31602__auto__){
return cljs.core._write.call(null,writer__31602__auto__,"net.cassiel.auto-23.components.exchange/EXCHANGE");
});

net.cassiel.auto_23.components.exchange.__GT_EXCHANGE = (function net$cassiel$auto_23$components$exchange$__GT_EXCHANGE(ajax_xfer,publication,installed_QMARK_){
return (new net.cassiel.auto_23.components.exchange.EXCHANGE(ajax_xfer,publication,installed_QMARK_,null,null,null));
});

net.cassiel.auto_23.components.exchange.map__GT_EXCHANGE = (function net$cassiel$auto_23$components$exchange$map__GT_EXCHANGE(G__42295){
return (new net.cassiel.auto_23.components.exchange.EXCHANGE(new cljs.core.Keyword(null,"ajax-xfer","ajax-xfer",-2109230539).cljs$core$IFn$_invoke$arity$1(G__42295),new cljs.core.Keyword(null,"publication","publication",-1089697399).cljs$core$IFn$_invoke$arity$1(G__42295),new cljs.core.Keyword(null,"installed?","installed?",-345006478).cljs$core$IFn$_invoke$arity$1(G__42295),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42295,new cljs.core.Keyword(null,"ajax-xfer","ajax-xfer",-2109230539),new cljs.core.Keyword(null,"publication","publication",-1089697399),new cljs.core.Keyword(null,"installed?","installed?",-345006478))),null));
});

