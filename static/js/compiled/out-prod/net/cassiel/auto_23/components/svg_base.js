// Compiled by ClojureScript 1.9.908 {}
goog.provide('net.cassiel.auto_23.components.svg_base');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('net.cassiel.lifecycle');
goog.require('cljs.core.async');
goog.require('net.cassiel.auto_23.patterns');
goog.require('thi.ng.color.core');
goog.require('thi.ng.color.presets.brewer');
goog.require('thi.ng.color.presets.categories');
goog.require('goog.string');
goog.require('goog.string.format');
net.cassiel.auto_23.components.svg_base.radius = ((720) / (2));
net.cassiel.auto_23.components.svg_base.disc_radius = (40);
net.cassiel.auto_23.components.svg_base.margin = (5);
net.cassiel.auto_23.components.svg_base.wrap = (20);
net.cassiel.auto_23.components.svg_base.level = (function net$cassiel$auto_23$components$svg_base$level(c,amt){
return cljs.core.deref.call(null,thi.ng.color.core.as_int24.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.css.call(null,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c.toString((16)))].join('')),amt),(- amt))));
});
net.cassiel.auto_23.components.svg_base.pad_to_six_digits = (function net$cassiel$auto_23$components$svg_base$pad_to_six_digits(s){
if((cljs.core.count.call(null,s) < (6))){
return net.cassiel.auto_23.components.svg_base.pad_to_six_digits.call(null,["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
} else {
return s;
}
});
net.cassiel.auto_23.components.svg_base.fill_colour_for = (function net$cassiel$auto_23$components$svg_base$fill_colour_for(idx,offset){
var base = cljs.core.nth.call(null,thi.ng.color.presets.categories.cat20,cljs.core.mod.call(null,idx,net.cassiel.auto_23.components.svg_base.wrap));
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(net.cassiel.auto_23.components.svg_base.pad_to_six_digits.call(null,(((idx < net.cassiel.auto_23.components.svg_base.wrap))?net.cassiel.auto_23.components.svg_base.level.call(null,base,(offset + 0.15)):net.cassiel.auto_23.components.svg_base.level.call(null,base,(offset - 0.15))).toString((16))))].join('');
});
net.cassiel.auto_23.components.svg_base.text_colour_for = (function net$cassiel$auto_23$components$svg_base$text_colour_for(idx){
if((idx < net.cassiel.auto_23.components.svg_base.wrap)){
return "black";
} else {
return "white";
}
});
net.cassiel.auto_23.components.svg_base.d3_stop = (function net$cassiel$auto_23$components$svg_base$d3_stop(){
return d3.select("#app").selectAll("g.node").data([]).exit().remove();
});
net.cassiel.auto_23.components.svg_base.refresh = (function net$cassiel$auto_23$components$svg_base$refresh(group,t){
group.transition().delay((function (d,i){
return ((i * t) * ((1) / (100)));
})).duration(t).attr("transform",(function (d,i){
var pos = d.pos;
var num_discs = d.num_discs;
var angle = ((Math.PI * (2)) * (pos / num_discs));
var dist = (((net.cassiel.auto_23.components.svg_base.radius - net.cassiel.auto_23.components.svg_base.disc_radius) - net.cassiel.auto_23.components.svg_base.margin) * d.radius);
var x = (net.cassiel.auto_23.components.svg_base.radius + (dist * Math.sin(angle)));
var y = (net.cassiel.auto_23.components.svg_base.radius - (dist * Math.cos(angle)));
return goog.string.format("translate(%f, %f)",x,y);
})).style("opacity",(function (d){
return d.opacity;
})).select("text.label").delay((500)).text((function (d,i){
return d.label;
}));

return group;
});
net.cassiel.auto_23.components.svg_base.d3_load = (function net$cassiel$auto_23$components$svg_base$d3_load(data){
var app = d3.select("#app").selectAll("g.node").data(cljs.core.clj__GT_js.call(null,data));
var _ = net.cassiel.auto_23.components.svg_base.refresh.call(null,app,(1000));
var node = net.cassiel.auto_23.components.svg_base.refresh.call(null,app.enter().append("g").attr("class","node"),(0));
app.exit().remove();

node.append("circle").attr("r",net.cassiel.auto_23.components.svg_base.disc_radius).style("fill",((function (app,_,node){
return (function (d,i){
return net.cassiel.auto_23.components.svg_base.fill_colour_for.call(null,i,(0));
});})(app,_,node))
).style("stroke-width",(1)).style("stroke",((function (app,_,node){
return (function (d,i){
return net.cassiel.auto_23.components.svg_base.fill_colour_for.call(null,i,-0.3);
});})(app,_,node))
);

return node.append("text").attr("class","index").attr("dy","0.3em").style("text-anchor","middle").style("fill",((function (app,_,node){
return (function (d,i){
return net.cassiel.auto_23.components.svg_base.text_colour_for.call(null,i);
});})(app,_,node))
).text(((function (app,_,node){
return (function (d,i){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + (1)))].join('');
});})(app,_,node))
);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {net.cassiel.auto_23.components.svg_base.Object}
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
net.cassiel.auto_23.components.svg_base.SVG_BASE = (function (exchange,local_ch,installed_QMARK_,__meta,__extmap,__hash){
this.exchange = exchange;
this.local_ch = local_ch;
this.installed_QMARK_ = installed_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return "SVG-BASE";
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31563__auto__,k__31564__auto__){
var self__ = this;
var this__31563__auto____$1 = this;
return this__31563__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31564__auto__,null);
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31565__auto__,k42360,else__31566__auto__){
var self__ = this;
var this__31565__auto____$1 = this;
var G__42364 = k42360;
var G__42364__$1 = (((G__42364 instanceof cljs.core.Keyword))?G__42364.fqn:null);
switch (G__42364__$1) {
case "exchange":
return self__.exchange;

break;
case "local-ch":
return self__.local_ch;

break;
case "installed?":
return self__.installed_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42360,else__31566__auto__);

}
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31577__auto__,writer__31578__auto__,opts__31579__auto__){
var self__ = this;
var this__31577__auto____$1 = this;
var pr_pair__31580__auto__ = ((function (this__31577__auto____$1){
return (function (keyval__31581__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,cljs.core.pr_writer,""," ","",opts__31579__auto__,keyval__31581__auto__);
});})(this__31577__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,pr_pair__31580__auto__,"#net.cassiel.auto-23.components.svg-base.SVG-BASE{",", ","}",opts__31579__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"exchange","exchange",843073210),self__.exchange],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),self__.local_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"installed?","installed?",-345006478),self__.installed_QMARK_],null))], null),self__.__extmap));
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42359){
var self__ = this;
var G__42359__$1 = this;
return (new cljs.core.RecordIter((0),G__42359__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),new cljs.core.Keyword(null,"installed?","installed?",-345006478)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31561__auto__){
var self__ = this;
var this__31561__auto____$1 = this;
return self__.__meta;
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31558__auto__){
var self__ = this;
var this__31558__auto____$1 = this;
return (new net.cassiel.auto_23.components.svg_base.SVG_BASE(self__.exchange,self__.local_ch,self__.installed_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31567__auto__){
var self__ = this;
var this__31567__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31559__auto__){
var self__ = this;
var this__31559__auto____$1 = this;
var h__31331__auto__ = self__.__hash;
if(!((h__31331__auto__ == null))){
return h__31331__auto__;
} else {
var h__31331__auto____$1 = ((function (h__31331__auto__,this__31559__auto____$1){
return (function (coll__31560__auto__){
return (1646538544 ^ cljs.core.hash_unordered_coll.call(null,coll__31560__auto__));
});})(h__31331__auto__,this__31559__auto____$1))
.call(null,this__31559__auto____$1);
self__.__hash = h__31331__auto____$1;

return h__31331__auto____$1;
}
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42361,other42362){
var self__ = this;
var this42361__$1 = this;
return (!((other42362 == null))) && ((this42361__$1.constructor === other42362.constructor)) && (cljs.core._EQ_.call(null,this42361__$1.exchange,other42362.exchange)) && (cljs.core._EQ_.call(null,this42361__$1.local_ch,other42362.local_ch)) && (cljs.core._EQ_.call(null,this42361__$1.installed_QMARK_,other42362.installed_QMARK_)) && (cljs.core._EQ_.call(null,this42361__$1.__extmap,other42362.__extmap));
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31572__auto__,k__31573__auto__){
var self__ = this;
var this__31572__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"installed?","installed?",-345006478),null,new cljs.core.Keyword(null,"exchange","exchange",843073210),null,new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),null], null), null),k__31573__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31572__auto____$1),self__.__meta),k__31573__auto__);
} else {
return (new net.cassiel.auto_23.components.svg_base.SVG_BASE(self__.exchange,self__.local_ch,self__.installed_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31573__auto__)),null));
}
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31570__auto__,k__31571__auto__,G__42359){
var self__ = this;
var this__31570__auto____$1 = this;
var pred__42365 = cljs.core.keyword_identical_QMARK_;
var expr__42366 = k__31571__auto__;
if(cljs.core.truth_(pred__42365.call(null,new cljs.core.Keyword(null,"exchange","exchange",843073210),expr__42366))){
return (new net.cassiel.auto_23.components.svg_base.SVG_BASE(G__42359,self__.local_ch,self__.installed_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42365.call(null,new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),expr__42366))){
return (new net.cassiel.auto_23.components.svg_base.SVG_BASE(self__.exchange,G__42359,self__.installed_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42365.call(null,new cljs.core.Keyword(null,"installed?","installed?",-345006478),expr__42366))){
return (new net.cassiel.auto_23.components.svg_base.SVG_BASE(self__.exchange,self__.local_ch,G__42359,self__.__meta,self__.__extmap,null));
} else {
return (new net.cassiel.auto_23.components.svg_base.SVG_BASE(self__.exchange,self__.local_ch,self__.installed_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31571__auto__,G__42359),null));
}
}
}
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31575__auto__){
var self__ = this;
var this__31575__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"exchange","exchange",843073210),self__.exchange],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),self__.local_ch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"installed?","installed?",-345006478),self__.installed_QMARK_],null))], null),self__.__extmap));
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31562__auto__,G__42359){
var self__ = this;
var this__31562__auto____$1 = this;
return (new net.cassiel.auto_23.components.svg_base.SVG_BASE(self__.exchange,self__.local_ch,self__.installed_QMARK_,G__42359,self__.__extmap,self__.__hash));
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31568__auto__,entry__31569__auto__){
var self__ = this;
var this__31568__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31569__auto__)){
return this__31568__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31569__auto__,(0)),cljs.core._nth.call(null,entry__31569__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31568__auto____$1,entry__31569__auto__);
}
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return net.cassiel.lifecycle.starting.call(null,this$__$1,new cljs.core.Keyword(null,"on","on",173873944),self__.installed_QMARK_,new cljs.core.Keyword(null,"action","action",-811238024),((function (this$__$1){
return (function (){
var ch = cljs.core.async.chan.call(null);
net.cassiel.auto_23.components.svg_base.d3_load.call(null,net.cassiel.auto_23.patterns.data);

var c__38330__auto___42397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38330__auto___42397,ch,this$__$1){
return (function (){
var f__38331__auto__ = (function (){var switch__38240__auto__ = ((function (c__38330__auto___42397,ch,this$__$1){
return (function (state_42382){
var state_val_42383 = (state_42382[(1)]);
if((state_val_42383 === (1))){
var state_42382__$1 = state_42382;
var statearr_42384_42398 = state_42382__$1;
(statearr_42384_42398[(2)] = null);

(statearr_42384_42398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (2))){
var state_42382__$1 = state_42382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42382__$1,(4),ch);
} else {
if((state_val_42383 === (3))){
var inst_42380 = (state_42382[(2)]);
var state_42382__$1 = state_42382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42382__$1,inst_42380);
} else {
if((state_val_42383 === (4))){
var inst_42370 = (state_42382[(7)]);
var inst_42370__$1 = (state_42382[(2)]);
var state_42382__$1 = (function (){var statearr_42385 = state_42382;
(statearr_42385[(7)] = inst_42370__$1);

return statearr_42385;
})();
if(cljs.core.truth_(inst_42370__$1)){
var statearr_42386_42399 = state_42382__$1;
(statearr_42386_42399[(1)] = (5));

} else {
var statearr_42387_42400 = state_42382__$1;
(statearr_42387_42400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (5))){
var inst_42370 = (state_42382[(7)]);
var inst_42372 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_42370);
var inst_42373 = new cljs.core.Keyword(null,"discs","discs",1754122594).cljs$core$IFn$_invoke$arity$1(inst_42372);
var inst_42374 = net.cassiel.auto_23.components.svg_base.d3_load.call(null,inst_42373);
var state_42382__$1 = (function (){var statearr_42388 = state_42382;
(statearr_42388[(8)] = inst_42374);

return statearr_42388;
})();
var statearr_42389_42401 = state_42382__$1;
(statearr_42389_42401[(2)] = null);

(statearr_42389_42401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (6))){
var state_42382__$1 = state_42382;
var statearr_42390_42402 = state_42382__$1;
(statearr_42390_42402[(2)] = null);

(statearr_42390_42402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42383 === (7))){
var inst_42378 = (state_42382[(2)]);
var state_42382__$1 = state_42382;
var statearr_42391_42403 = state_42382__$1;
(statearr_42391_42403[(2)] = inst_42378);

(statearr_42391_42403[(1)] = (3));


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
});})(c__38330__auto___42397,ch,this$__$1))
;
return ((function (switch__38240__auto__,c__38330__auto___42397,ch,this$__$1){
return (function() {
var net$cassiel$auto_23$components$svg_base$state_machine__38241__auto__ = null;
var net$cassiel$auto_23$components$svg_base$state_machine__38241__auto____0 = (function (){
var statearr_42392 = [null,null,null,null,null,null,null,null,null];
(statearr_42392[(0)] = net$cassiel$auto_23$components$svg_base$state_machine__38241__auto__);

(statearr_42392[(1)] = (1));

return statearr_42392;
});
var net$cassiel$auto_23$components$svg_base$state_machine__38241__auto____1 = (function (state_42382){
while(true){
var ret_value__38242__auto__ = (function (){try{while(true){
var result__38243__auto__ = switch__38240__auto__.call(null,state_42382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38243__auto__;
}
break;
}
}catch (e42393){if((e42393 instanceof Object)){
var ex__38244__auto__ = e42393;
var statearr_42394_42404 = state_42382;
(statearr_42394_42404[(5)] = ex__38244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38242__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42405 = state_42382;
state_42382 = G__42405;
continue;
} else {
return ret_value__38242__auto__;
}
break;
}
});
net$cassiel$auto_23$components$svg_base$state_machine__38241__auto__ = function(state_42382){
switch(arguments.length){
case 0:
return net$cassiel$auto_23$components$svg_base$state_machine__38241__auto____0.call(this);
case 1:
return net$cassiel$auto_23$components$svg_base$state_machine__38241__auto____1.call(this,state_42382);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
net$cassiel$auto_23$components$svg_base$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$0 = net$cassiel$auto_23$components$svg_base$state_machine__38241__auto____0;
net$cassiel$auto_23$components$svg_base$state_machine__38241__auto__.cljs$core$IFn$_invoke$arity$1 = net$cassiel$auto_23$components$svg_base$state_machine__38241__auto____1;
return net$cassiel$auto_23$components$svg_base$state_machine__38241__auto__;
})()
;})(switch__38240__auto__,c__38330__auto___42397,ch,this$__$1))
})();
var state__38332__auto__ = (function (){var statearr_42395 = f__38331__auto__.call(null);
(statearr_42395[(6)] = c__38330__auto___42397);

return statearr_42395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38332__auto__);
});})(c__38330__auto___42397,ch,this$__$1))
);


cljs.core.async.sub.call(null,new cljs.core.Keyword(null,"publication","publication",-1089697399).cljs$core$IFn$_invoke$arity$1(self__.exchange),"ANY",ch);

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),ch,new cljs.core.Keyword(null,"installed?","installed?",-345006478),true);
});})(this$__$1))
);
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return net.cassiel.lifecycle.stopping.call(null,this$__$1,new cljs.core.Keyword(null,"on","on",173873944),self__.installed_QMARK_,new cljs.core.Keyword(null,"action","action",-811238024),((function (this$__$1){
return (function (){
cljs.core.async.unsub.call(null,new cljs.core.Keyword(null,"publication","publication",-1089697399).cljs$core$IFn$_invoke$arity$1(self__.exchange),"ANY",self__.local_ch);

cljs.core.async.close_BANG_.call(null,self__.local_ch);

net.cassiel.auto_23.components.svg_base.d3_load.call(null,cljs.core.PersistentVector.EMPTY);

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),null,new cljs.core.Keyword(null,"installed?","installed?",-345006478),false);
});})(this$__$1))
);
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exchange","exchange",-1811362559,null),new cljs.core.Symbol(null,"local-ch","local-ch",1514363299,null),new cljs.core.Symbol(null,"installed?","installed?",1295525049,null)], null);
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.cljs$lang$type = true;

net.cassiel.auto_23.components.svg_base.SVG_BASE.cljs$lang$ctorPrSeq = (function (this__31601__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"net.cassiel.auto-23.components.svg-base/SVG-BASE");
});

net.cassiel.auto_23.components.svg_base.SVG_BASE.cljs$lang$ctorPrWriter = (function (this__31601__auto__,writer__31602__auto__){
return cljs.core._write.call(null,writer__31602__auto__,"net.cassiel.auto-23.components.svg-base/SVG-BASE");
});

net.cassiel.auto_23.components.svg_base.__GT_SVG_BASE = (function net$cassiel$auto_23$components$svg_base$__GT_SVG_BASE(exchange,local_ch,installed_QMARK_){
return (new net.cassiel.auto_23.components.svg_base.SVG_BASE(exchange,local_ch,installed_QMARK_,null,null,null));
});

net.cassiel.auto_23.components.svg_base.map__GT_SVG_BASE = (function net$cassiel$auto_23$components$svg_base$map__GT_SVG_BASE(G__42363){
return (new net.cassiel.auto_23.components.svg_base.SVG_BASE(new cljs.core.Keyword(null,"exchange","exchange",843073210).cljs$core$IFn$_invoke$arity$1(G__42363),new cljs.core.Keyword(null,"local-ch","local-ch",-126168228).cljs$core$IFn$_invoke$arity$1(G__42363),new cljs.core.Keyword(null,"installed?","installed?",-345006478).cljs$core$IFn$_invoke$arity$1(G__42363),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__42363,new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"local-ch","local-ch",-126168228),new cljs.core.Keyword(null,"installed?","installed?",-345006478))),null));
});

