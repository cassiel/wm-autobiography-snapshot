// Compiled by ClojureScript 1.9.908 {}
goog.provide('net.cassiel.auto_23.components.ajax_xfer');
goog.require('cljs.core');
goog.require('net.cassiel.auto_23.config');
goog.require('com.stuartsierra.component');
goog.require('net.cassiel.lifecycle');
goog.require('cljs.core.async');
goog.require('ajax.core');
net.cassiel.auto_23.components.ajax_xfer.handler = (function net$cassiel$auto_23$components$ajax_xfer$handler(ajax_xfer,response){
cljs.core.println.call(null,"RESPONSE: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));

var c__38330__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto__){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto__){
return (function (state_40366){
var state_val_40367 = (state_40366[(1)]);
if((state_val_40367 === (1))){
var inst_40362 = new cljs.core.Keyword(null,"return-ch","return-ch",-64194874).cljs$core$IFn$_invoke$arity$1(ajax_xfer);
var state_40366__$1 = state_40366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40366__$1,(2),inst_40362,response);
} else {
if((state_val_40367 === (2))){
var inst_40364 = (state_40366[(2)]);
var state_40366__$1 = state_40366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40366__$1,inst_40364);
} else {
return null;
}
}
});})(c__38330__auto__))
;
return ((function (switch__38240__auto__,c__38330__auto__){
return (function() {
var net$cassiel$auto_23$components$ajax_xfer$handler_$_state_machine__38241__auto__ = null;
var net$cassiel$auto_23$components$ajax_xfer$handler_$_state_machine__38241__auto____0 = (function (){
var statearr_40368 = [null,null,null,null,null,null,null];
(statearr_40368[(0)] = net$cassiel$auto_23$components$ajax_xfer$handler_$_state_machine__38241__auto__);

(statearr_40368[(1)] = (1));

return statearr_40368;
});
var net$cassiel$auto_23$components$ajax_xfer$handler_$_state_machine__38241__auto____1 = (function (state_40366){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_40366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e40369){if((e40369 instanceof Object)){
var ex__38244__auto__ = e40369;
var statearr_40370_40372 = state_40366;
(statearr_40370_40372[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40373 = state_40366;
state_40366 = G__40373;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
net$cassiel$auto_23$components$ajax_xfer$handler_$_state_machine__38241__auto__ = function(state_40366){
switch(arguments.length){
case 0:
return net$cassiel$auto_23$components$ajax_xfer$handler_$_state_machine__38241__auto____0.call(this);
case 1:
return net$cassiel$auto_23$components$ajax_xfer$handler_$_state_machine__38241__auto____1.call(this,state_40366);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
net$cassiel$auto_23$components$ajax_xfer$handler_$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = net$cassiel$auto_23$components$ajax_xfer$handler_$_state_machine__38241__auto____0;
net$cassiel$auto_23$components$ajax_xfer$handler_$_state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = net$cassiel$auto_23$components$ajax_xfer$handler_$_state_machine__38241__auto____1;
return net$cassiel$auto_23$components$ajax_xfer$handler_$_state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto__))
})();
var state__38332__auto__ = (function (){var statearr_40371 = f__38331__auto__.call(null);
(statearr_40371[(6)] = c__38330__auto__);

return statearr_40371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto__))
);

return c__38330__auto__;
});
net.cassiel.auto_23.components.ajax_xfer.error_handler = (function net$cassiel$auto_23$components$ajax_xfer$error_handler(p__40374){
var map__40375 = p__40374;
var map__40375__$1 = ((((!((map__40375 == null)))?((((map__40375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40375):map__40375);
var status = cljs.core.get.call(null,map__40375__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__40375__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["something bad happened: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
net.cassiel.auto_23.components.ajax_xfer.fire = (function net$cassiel$auto_23$components$ajax_xfer$fire(ajax_xfer,sample){
cljs.core.println.call(null,"POSTING... with ajax-xfer ",ajax_xfer);

return ajax.core.POST.call(null,net.cassiel.auto_23.config.endpoint,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),sample,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,net.cassiel.auto_23.components.ajax_xfer.handler,ajax_xfer),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),net.cassiel.auto_23.components.ajax_xfer.error_handler], null));
});

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
 * @implements {net.cassiel.auto_23.components.ajax_xfer.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER = (function (return_ch,installed_QMARK_,__meta,__extmap,__hash){
this.return_ch = return_ch;
this.installed_QMARK_ = installed_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return "AJAX-XFER";
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31563__auto__,k__31564__auto__){
var self__ = this;
var this__31563__auto____$1 = this;
return this__31563__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31564__auto__,null);
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31565__auto__,k40378,else__31566__auto__){
var self__ = this;
var this__31565__auto____$1 = this;
var G__40382 = k40378;
var G__40382__$1 = (((G__40382 instanceof cljs.core.Keyword))?G__40382.fqn:null);
switch (G__40382__$1) {
case "return-ch":
return self__.return_ch;

break;
case "installed?":
return self__.installed_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k40378,else__31566__auto__);

}
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31577__auto__,writer__31578__auto__,opts__31579__auto__){
var self__ = this;
var this__31577__auto____$1 = this;
var pr_pair__31580__auto__ = ((function (this__31577__auto____$1){
return (function (keyval__31581__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,cljs.core.pr_writer,""," ","",opts__31579__auto__,keyval__31581__auto__);
});})(this__31577__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,pr_pair__31580__auto__,"#net.cassiel.auto-23.components.ajax-xfer.AJAX-XFER{",", ","}",opts__31579__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-ch","return-ch",-64194874),self__.return_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"installed?","installed?",-345006478),self__.installed_QMARK_],null))], null),self__.__extmap));
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40377){
var self__ = this;
var G__40377__$1 = this;
return (new cljs.core.RecordIter((0),G__40377__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"return-ch","return-ch",-64194874),new cljs.core.Keyword(null,"installed?","installed?",-345006478)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31561__auto__){
var self__ = this;
var this__31561__auto____$1 = this;
return self__.__meta;
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31558__auto__){
var self__ = this;
var this__31558__auto____$1 = this;
return (new net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER(self__.return_ch,self__.installed_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31567__auto__){
var self__ = this;
var this__31567__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31559__auto__){
var self__ = this;
var this__31559__auto____$1 = this;
var h__31331__auto__ = self__.__hash;
if(!((h__31331__auto__ == null))){
return h__31331__auto__;
} else {
var h__31331__auto____$1 = ((function (h__31331__auto__,this__31559__auto____$1){
return (function (coll__31560__auto__){
return (1530269319 ^ cljs.core.hash_unordered_coll.call(null,coll__31560__auto__));
});})(h__31331__auto__,this__31559__auto____$1))
.call(null,this__31559__auto____$1);
self__.__hash = h__31331__auto____$1;

return h__31331__auto____$1;
}
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40379,other40380){
var self__ = this;
var this40379__$1 = this;
return (!((other40380 == null))) && ((this40379__$1.constructor === other40380.constructor)) && (cljs.core._EQ_.call(null,this40379__$1.return_ch,other40380.return_ch)) && (cljs.core._EQ_.call(null,this40379__$1.installed_QMARK_,other40380.installed_QMARK_)) && (cljs.core._EQ_.call(null,this40379__$1.__extmap,other40380.__extmap));
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31572__auto__,k__31573__auto__){
var self__ = this;
var this__31572__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-ch","return-ch",-64194874),null,new cljs.core.Keyword(null,"installed?","installed?",-345006478),null], null), null),k__31573__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31572__auto____$1),self__.__meta),k__31573__auto__);
} else {
return (new net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER(self__.return_ch,self__.installed_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31573__auto__)),null));
}
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31570__auto__,k__31571__auto__,G__40377){
var self__ = this;
var this__31570__auto____$1 = this;
var pred__40383 = cljs.core.keyword_identical_QMARK_;
var expr__40384 = k__31571__auto__;
if(cljs.core.truth_(pred__40383.call(null,new cljs.core.Keyword(null,"return-ch","return-ch",-64194874),expr__40384))){
return (new net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER(G__40377,self__.installed_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40383.call(null,new cljs.core.Keyword(null,"installed?","installed?",-345006478),expr__40384))){
return (new net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER(self__.return_ch,G__40377,self__.__meta,self__.__extmap,null));
} else {
return (new net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER(self__.return_ch,self__.installed_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31571__auto__,G__40377),null));
}
}
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31575__auto__){
var self__ = this;
var this__31575__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-ch","return-ch",-64194874),self__.return_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"installed?","installed?",-345006478),self__.installed_QMARK_],null))], null),self__.__extmap));
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31562__auto__,G__40377){
var self__ = this;
var this__31562__auto____$1 = this;
return (new net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER(self__.return_ch,self__.installed_QMARK_,G__40377,self__.__extmap,self__.__hash));
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31568__auto__,entry__31569__auto__){
var self__ = this;
var this__31568__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31569__auto__)){
return this__31568__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31569__auto__,(0)),cljs.core._nth.call(null,entry__31569__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31568__auto____$1,entry__31569__auto__);
}
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return net.cassiel.lifecycle.starting.call(null,this$__$1,new cljs.core.Keyword(null,"on","on",173873944),self__.installed_QMARK_,new cljs.core.Keyword(null,"action","action",-811238024),((function (this$__$1){
return (function (){
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"return-ch","return-ch",-64194874),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"installed?","installed?",-345006478),true);
});})(this$__$1))
);
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return net.cassiel.lifecycle.stopping.call(null,this$__$1,new cljs.core.Keyword(null,"on","on",173873944),self__.installed_QMARK_,new cljs.core.Keyword(null,"action","action",-811238024),((function (this$__$1){
return (function (){
cljs.core.async.close_BANG_.call(null,new cljs.core.Keyword(null,"return-ch","return-ch",-64194874).cljs$core$IFn$_invoke$arity$1(this$__$1));

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"return-ch","return-ch",-64194874),null,new cljs.core.Keyword(null,"installed?","installed?",-345006478),false);
});})(this$__$1))
);
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"return-ch","return-ch",1576336653,null),new cljs.core.Symbol(null,"installed?","installed?",1295525049,null)], null);
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.cljs$lang$type = true;

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.cljs$lang$ctorPrSeq = (function (this__31601__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"net.cassiel.auto-23.components.ajax-xfer/AJAX-XFER");
});

net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER.cljs$lang$ctorPrWriter = (function (this__31601__auto__,writer__31602__auto__){
return cljs.core._write.call(null,writer__31602__auto__,"net.cassiel.auto-23.components.ajax-xfer/AJAX-XFER");
});

net.cassiel.auto_23.components.ajax_xfer.__GT_AJAX_XFER = (function net$cassiel$auto_23$components$ajax_xfer$__GT_AJAX_XFER(return_ch,installed_QMARK_){
return (new net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER(return_ch,installed_QMARK_,null,null,null));
});

net.cassiel.auto_23.components.ajax_xfer.map__GT_AJAX_XFER = (function net$cassiel$auto_23$components$ajax_xfer$map__GT_AJAX_XFER(G__40381){
return (new net.cassiel.auto_23.components.ajax_xfer.AJAX_XFER(new cljs.core.Keyword(null,"return-ch","return-ch",-64194874).cljs$core$IFn$_invoke$arity$1(G__40381),new cljs.core.Keyword(null,"installed?","installed?",-345006478).cljs$core$IFn$_invoke$arity$1(G__40381),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__40381,new cljs.core.Keyword(null,"return-ch","return-ch",-64194874),new cljs.core.Keyword(null,"installed?","installed?",-345006478))),null));
});

