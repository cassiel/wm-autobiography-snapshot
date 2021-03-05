// Compiled by ClojureScript 1.9.908 {}
goog.provide('net.cassiel.auto_23.components.reagent_base');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('net.cassiel.lifecycle');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('net.cassiel.auto_23.components.exchange');
goog.require('net.cassiel.auto_23.patterns');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {net.cassiel.auto_23.components.reagent_base.Object}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
net.cassiel.auto_23.components.reagent_base.REAGENT_BASE = (function (exchange,local_ch,state,installed_QMARK_,__meta,__extmap,__hash){
this.exchange = exchange;
this.local_ch = local_ch;
this.state = state;
this.installed_QMARK_ = installed_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return "REAGENT-BASE";
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31563__auto__,k__31564__auto__){
var self__ = this;
var this__31563__auto____$1 = this;
return this__31563__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31564__auto__,null);
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31565__auto__,k42308,else__31566__auto__){
var self__ = this;
var this__31565__auto____$1 = this;
var G__42312 = k42308;
var G__42312__$1 = (((G__42312 instanceof cljs.core.Keyword))?G__42312.fqn:null);
switch (G__42312__$1) {
case "exchange":
return self__.exchange;

break;
case "local-ch":
return self__.local_ch;

break;
case "state":
return self__.state;

break;
case "installed?":
return self__.installed_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42308,else__31566__auto__);

}
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31577__auto__,writer__31578__auto__,opts__31579__auto__){
var self__ = this;
var this__31577__auto____$1 = this;
var pr_pair__31580__auto__ = ((function (this__31577__auto____$1){
return (function (keyval__31581__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,cljs.core.pr_writer,""," ","",opts__31579__auto__,keyval__31581__auto__);
});})(this__31577__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,pr_pair__31580__auto__,"#net.cassiel.auto-23.components.reagent-base.REAGENT-BASE{",", ","}",opts__31579__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"exchange","exchange",843073210),self__.exchange],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),self__.local_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"installed?","installed?",-345006478),self__.installed_QMARK_],null))], null),self__.__extmap));
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42307){
var self__ = this;
var G__42307__$1 = this;
return (new cljs.core.RecordIter((0),G__42307__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"installed?","installed?",-345006478)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31561__auto__){
var self__ = this;
var this__31561__auto____$1 = this;
return self__.__meta;
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31558__auto__){
var self__ = this;
var this__31558__auto____$1 = this;
return (new net.cassiel.auto_23.components.reagent_base.REAGENT_BASE(self__.exchange,self__.local_ch,self__.state,self__.installed_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31567__auto__){
var self__ = this;
var this__31567__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31559__auto__){
var self__ = this;
var this__31559__auto____$1 = this;
var h__31331__auto__ = self__.__hash;
if(!((h__31331__auto__ == null))){
return h__31331__auto__;
} else {
var h__31331__auto____$1 = ((function (h__31331__auto__,this__31559__auto____$1){
return (function (coll__31560__auto__){
return (-1576679427 ^ cljs.core.hash_unordered_coll.call(null,coll__31560__auto__));
});})(h__31331__auto__,this__31559__auto____$1))
.call(null,this__31559__auto____$1);
self__.__hash = h__31331__auto____$1;

return h__31331__auto____$1;
}
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42309,other42310){
var self__ = this;
var this42309__$1 = this;
return (!((other42310 == null))) && ((this42309__$1.constructor === other42310.constructor)) && (cljs.core._EQ_.call(null,this42309__$1.exchange,other42310.exchange)) && (cljs.core._EQ_.call(null,this42309__$1.local_ch,other42310.local_ch)) && (cljs.core._EQ_.call(null,this42309__$1.state,other42310.state)) && (cljs.core._EQ_.call(null,this42309__$1.installed_QMARK_,other42310.installed_QMARK_)) && (cljs.core._EQ_.call(null,this42309__$1.__extmap,other42310.__extmap));
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31572__auto__,k__31573__auto__){
var self__ = this;
var this__31572__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"installed?","installed?",-345006478),null,new cljs.core.Keyword(null,"exchange","exchange",843073210),null,new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),null], null), null),k__31573__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31572__auto____$1),self__.__meta),k__31573__auto__);
} else {
return (new net.cassiel.auto_23.components.reagent_base.REAGENT_BASE(self__.exchange,self__.local_ch,self__.state,self__.installed_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31573__auto__)),null));
}
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31570__auto__,k__31571__auto__,G__42307){
var self__ = this;
var this__31570__auto____$1 = this;
var pred__42313 = cljs.core.keyword_identical_QMARK_;
var expr__42314 = k__31571__auto__;
if(cljs.core.truth_(pred__42313.call(null,new cljs.core.Keyword(null,"exchange","exchange",843073210),expr__42314))){
return (new net.cassiel.auto_23.components.reagent_base.REAGENT_BASE(G__42307,self__.local_ch,self__.state,self__.installed_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42313.call(null,new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),expr__42314))){
return (new net.cassiel.auto_23.components.reagent_base.REAGENT_BASE(self__.exchange,G__42307,self__.state,self__.installed_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42313.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__42314))){
return (new net.cassiel.auto_23.components.reagent_base.REAGENT_BASE(self__.exchange,self__.local_ch,G__42307,self__.installed_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42313.call(null,new cljs.core.Keyword(null,"installed?","installed?",-345006478),expr__42314))){
return (new net.cassiel.auto_23.components.reagent_base.REAGENT_BASE(self__.exchange,self__.local_ch,self__.state,G__42307,self__.__meta,self__.__extmap,null));
} else {
return (new net.cassiel.auto_23.components.reagent_base.REAGENT_BASE(self__.exchange,self__.local_ch,self__.state,self__.installed_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31571__auto__,G__42307),null));
}
}
}
}
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31575__auto__){
var self__ = this;
var this__31575__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"exchange","exchange",843073210),self__.exchange],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),self__.local_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"installed?","installed?",-345006478),self__.installed_QMARK_],null))], null),self__.__extmap));
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31562__auto__,G__42307){
var self__ = this;
var this__31562__auto____$1 = this;
return (new net.cassiel.auto_23.components.reagent_base.REAGENT_BASE(self__.exchange,self__.local_ch,self__.state,self__.installed_QMARK_,G__42307,self__.__extmap,self__.__hash));
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31568__auto__,entry__31569__auto__){
var self__ = this;
var this__31568__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31569__auto__)){
return this__31568__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31569__auto__,(0)),cljs.core._nth.call(null,entry__31569__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31568__auto____$1,entry__31569__auto__);
}
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return net.cassiel.lifecycle.starting.call(null,this$__$1,new cljs.core.Keyword(null,"on","on",173873944),self__.installed_QMARK_,new cljs.core.Keyword(null,"action","action",-811238024),((function (this$__$1){
return (function (){
var ch = cljs.core.async.chan.call(null);
var s = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"this","this",-611633625),(0),new cljs.core.Keyword(null,"legend","legend",-1027192245),"",new cljs.core.Keyword(null,"next","next",-117701485),(1)], null));
var atom_input = ((function (ch,s,this$__$1){
return (function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,v)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (ch,s,this$__$1){
return (function (p1__42305_SHARP_){
return cljs.core.swap_BANG_.call(null,v,cljs.core.assoc,new cljs.core.Keyword(null,"next","next",-117701485),(p1__42305_SHARP_.target.value | (0)));
});})(ch,s,this$__$1))
], null)], null);
});})(ch,s,this$__$1))
;
var app = ((function (ch,s,atom_input,this$__$1){
return (function (){
cljs.core.println.call(null,"Seeing exchange as ",self__.exchange);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.svg-host","div.svg-host",-1630338315),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg#app","svg#app",-735931915)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls-host","div.controls-host",-393810019),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.this-host","div.this-host",737882621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"this","this",-611633625).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend-host","div.legend-host",-1220505471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"legend","legend",-1027192245).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.next-host","div.next-host",55790642),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atom_input,s], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (ch,s,atom_input,this$__$1){
return (function (){
var new_v = new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,s,((function (ch,s,atom_input,this$__$1){
return (function (p1__42306_SHARP_){
return cljs.core.update.call(null,p1__42306_SHARP_,new cljs.core.Keyword(null,"next","next",-117701485),cljs.core.inc);
});})(ch,s,atom_input,this$__$1))
));
return net.cassiel.auto_23.components.exchange.submit.call(null,self__.exchange,(new_v - (1)));
});})(ch,s,atom_input,this$__$1))
], null),"Next"], null)], null)], null)], null)], null);
});})(ch,s,atom_input,this$__$1))
;
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app], null),document.getElementById("container"));

var c__38330__auto___42348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___42348,ch,s,atom_input,app,this$__$1){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___42348,ch,s,atom_input,app,this$__$1){
return (function (state_42333){
var state_val_42334 = (state_42333[(1)]);
if((state_val_42334 === (1))){
var state_42333__$1 = state_42333;
var statearr_42335_42349 = state_42333__$1;
(statearr_42335_42349[(2)] = null);

(statearr_42335_42349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42334 === (2))){
var state_42333__$1 = state_42333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42333__$1,(4),ch);
} else {
if((state_val_42334 === (3))){
var inst_42331 = (state_42333[(2)]);
var state_42333__$1 = state_42333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42333__$1,inst_42331);
} else {
if((state_val_42334 === (4))){
var inst_42318 = (state_42333[(7)]);
var inst_42318__$1 = (state_42333[(2)]);
var state_42333__$1 = (function (){var statearr_42336 = state_42333;
(statearr_42336[(7)] = inst_42318__$1);

return statearr_42336;
})();
if(cljs.core.truth_(inst_42318__$1)){
var statearr_42337_42350 = state_42333__$1;
(statearr_42337_42350[(1)] = (5));

} else {
var statearr_42338_42351 = state_42333__$1;
(statearr_42338_42351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42334 === (5))){
var inst_42318 = (state_42333[(7)]);
var inst_42320 = cljs.core.println.call(null,"REAGENT: subscribed data: ",inst_42318);
var inst_42321 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_42318);
var inst_42322 = new cljs.core.Keyword(null,"legend","legend",-1027192245).cljs$core$IFn$_invoke$arity$1(inst_42321);
var inst_42323 = net.cassiel.auto_23.patterns.flatten_legend.call(null,inst_42322);
var inst_42324 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(inst_42318);
var inst_42325 = cljs.core.swap_BANG_.call(null,s,cljs.core.assoc,new cljs.core.Keyword(null,"legend","legend",-1027192245),inst_42323,new cljs.core.Keyword(null,"this","this",-611633625),inst_42324);
var state_42333__$1 = (function (){var statearr_42339 = state_42333;
(statearr_42339[(8)] = inst_42320);

(statearr_42339[(9)] = inst_42325);

return statearr_42339;
})();
var statearr_42340_42352 = state_42333__$1;
(statearr_42340_42352[(2)] = null);

(statearr_42340_42352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42334 === (6))){
var state_42333__$1 = state_42333;
var statearr_42341_42353 = state_42333__$1;
(statearr_42341_42353[(2)] = null);

(statearr_42341_42353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42334 === (7))){
var inst_42329 = (state_42333[(2)]);
var state_42333__$1 = state_42333;
var statearr_42342_42354 = state_42333__$1;
(statearr_42342_42354[(2)] = inst_42329);

(statearr_42342_42354[(1)] = (3));


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
});})(c__38330__auto___42348,ch,s,atom_input,app,this$__$1))
;
return ((function (switch__38240__auto__,c__38330__auto___42348,ch,s,atom_input,app,this$__$1){
return (function() {
var net$cassiel$auto_23$components$reagent_base$state_machine__38241__auto__ = null;
var net$cassiel$auto_23$components$reagent_base$state_machine__38241__auto____0 = (function (){
var statearr_42343 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42343[(0)] = net$cassiel$auto_23$components$reagent_base$state_machine__38241__auto__);

(statearr_42343[(1)] = (1));

return statearr_42343;
});
var net$cassiel$auto_23$components$reagent_base$state_machine__38241__auto____1 = (function (state_42333){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_42333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e42344){if((e42344 instanceof Object)){
var ex__38244__auto__ = e42344;
var statearr_42345_42355 = state_42333;
(statearr_42345_42355[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42356 = state_42333;
state_42333 = G__42356;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
net$cassiel$auto_23$components$reagent_base$state_machine__38241__auto__ = function(state_42333){
switch(arguments.length){
case 0:
return net$cassiel$auto_23$components$reagent_base$state_machine__38241__auto____0.call(this);
case 1:
return net$cassiel$auto_23$components$reagent_base$state_machine__38241__auto____1.call(this,state_42333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
net$cassiel$auto_23$components$reagent_base$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = net$cassiel$auto_23$components$reagent_base$state_machine__38241__auto____0;
net$cassiel$auto_23$components$reagent_base$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = net$cassiel$auto_23$components$reagent_base$state_machine__38241__auto____1;
return net$cassiel$auto_23$components$reagent_base$state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___42348,ch,s,atom_input,app,this$__$1))
})();
var state__38332__auto__ = (function (){var statearr_42346 = f__38331__auto__.call(null);
(statearr_42346[(6)] = c__38330__auto___42348);

return statearr_42346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___42348,ch,s,atom_input,app,this$__$1))
);


cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"publication","publication",-1089697399).cljs$core$IFn$_invoke$arity$1(self__.exchange),"ANY",ch);

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"state","state",-1988618099),s,new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),ch,new cljs.core.Keyword(null,"installed?","installed?",-345006478),true);
});})(this$__$1))
);
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return net.cassiel.lifecycle.stopping.call(null,this$__$1,new cljs.core.Keyword(null,"on","on",173873944),self__.installed_QMARK_,new cljs.core.Keyword(null,"action","action",-811238024),((function (this$__$1){
return (function (){
cljs.core.async.unsub.call(null,new cljs.core.Keyword(null,"publication","publication",-1089697399).cljs$core$IFn$_invoke$arity$1(self__.exchange),"ANY",self__.local_ch);

cljs.core.async.close_BANG_.call(null,self__.local_ch);

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),null,new cljs.core.Keyword(null,"installed?","installed?",-345006478),false);
});})(this$__$1))
);
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exchange","exchange",-1811362559,null),new cljs.core.Symbol(null,"local-ch","local-ch",1514363299,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"installed?","installed?",1295525049,null)], null);
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.cljs$lang$type = true;

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.cljs$lang$ctorPrSeq = (function (this__31601__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"net.cassiel.auto-23.components.reagent-base/REAGENT-BASE");
});

net.cassiel.auto_23.components.reagent_base.REAGENT_BASE.cljs$lang$ctorPrWriter = (function (this__31601__auto__,writer__31602__auto__){
return cljs.core._write.call(null,writer__31602__auto__,"net.cassiel.auto-23.components.reagent-base/REAGENT-BASE");
});

net.cassiel.auto_23.components.reagent_base.__GT_REAGENT_BASE = (function net$cassiel$auto_23$components$reagent_base$__GT_REAGENT_BASE(exchange,local_ch,state,installed_QMARK_){
return (new net.cassiel.auto_23.components.reagent_base.REAGENT_BASE(exchange,local_ch,state,installed_QMARK_,null,null,null));
});

net.cassiel.auto_23.components.reagent_base.map__GT_REAGENT_BASE = (function net$cassiel$auto_23$components$reagent_base$map__GT_REAGENT_BASE(G__42311){
return (new net.cassiel.auto_23.components.reagent_base.REAGENT_BASE(new cljs.core.Keyword(null,"exchange","exchange",843073210).cljs$core$IFn$_invoke$arity$1(G__42311),new cljs.core.Keyword(null,"local-ch","local-ch",-126168228).cljs$core$IFn$_invoke$arity$1(G__42311),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__42311),new cljs.core.Keyword(null,"installed?","installed?",-345006478).cljs$core$IFn$_invoke$arity$1(G__42311),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42311,new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"installed?","installed?",-345006478))),null));
});

