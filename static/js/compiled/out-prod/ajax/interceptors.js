// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31563__auto__,k__31564__auto__){
var self__ = this;
var this__31563__auto____$1 = this;
return this__31563__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31564__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31565__auto__,k36552,else__31566__auto__){
var self__ = this;
var this__31565__auto____$1 = this;
var G__36556 = k36552;
var G__36556__$1 = (((G__36556 instanceof cljs.core.Keyword))?G__36556.fqn:null);
switch (G__36556__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36552,else__31566__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__36557,opts){
var self__ = this;
var map__36558 = p__36557;
var map__36558__$1 = ((((!((map__36558 == null)))?((((map__36558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36558):map__36558);
var request__$1 = cljs.core.get.call(null,map__36558__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__36560 = this;
var map__36560__$1 = ((((!((map__36560 == null)))?((((map__36560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36560):map__36560);
var request__$2 = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__36562,xhrio){
var self__ = this;
var map__36563 = p__36562;
var map__36563__$1 = ((((!((map__36563 == null)))?((((map__36563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36563):map__36563);
var response__$1 = cljs.core.get.call(null,map__36563__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__36565 = this;
var map__36565__$1 = ((((!((map__36565 == null)))?((((map__36565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36565):map__36565);
var response__$2 = cljs.core.get.call(null,map__36565__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31577__auto__,writer__31578__auto__,opts__31579__auto__){
var self__ = this;
var this__31577__auto____$1 = this;
var pr_pair__31580__auto__ = ((function (this__31577__auto____$1){
return (function (keyval__31581__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,cljs.core.pr_writer,""," ","",opts__31579__auto__,keyval__31581__auto__);
});})(this__31577__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,pr_pair__31580__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__31579__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36551){
var self__ = this;
var G__36551__$1 = this;
return (new cljs.core.RecordIter((0),G__36551__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31561__auto__){
var self__ = this;
var this__31561__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31558__auto__){
var self__ = this;
var this__31558__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31567__auto__){
var self__ = this;
var this__31567__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31559__auto__){
var self__ = this;
var this__31559__auto____$1 = this;
var h__31331__auto__ = self__.__hash;
if(!((h__31331__auto__ == null))){
return h__31331__auto__;
} else {
var h__31331__auto____$1 = ((function (h__31331__auto__,this__31559__auto____$1){
return (function (coll__31560__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__31560__auto__));
});})(h__31331__auto__,this__31559__auto____$1))
.call(null,this__31559__auto____$1);
self__.__hash = h__31331__auto____$1;

return h__31331__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36553,other36554){
var self__ = this;
var this36553__$1 = this;
return (!((other36554 == null))) && ((this36553__$1.constructor === other36554.constructor)) && (cljs.core._EQ_.call(null,this36553__$1.name,other36554.name)) && (cljs.core._EQ_.call(null,this36553__$1.request,other36554.request)) && (cljs.core._EQ_.call(null,this36553__$1.response,other36554.response)) && (cljs.core._EQ_.call(null,this36553__$1.__extmap,other36554.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31572__auto__,k__31573__auto__){
var self__ = this;
var this__31572__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__31573__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31572__auto____$1),self__.__meta),k__31573__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31573__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31570__auto__,k__31571__auto__,G__36551){
var self__ = this;
var this__31570__auto____$1 = this;
var pred__36567 = cljs.core.keyword_identical_QMARK_;
var expr__36568 = k__31571__auto__;
if(cljs.core.truth_(pred__36567.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__36568))){
return (new ajax.interceptors.StandardInterceptor(G__36551,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36567.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__36568))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__36551,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36567.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__36568))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__36551,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31571__auto__,G__36551),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31575__auto__){
var self__ = this;
var this__31575__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31562__auto__,G__36551){
var self__ = this;
var this__31562__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__36551,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31568__auto__,entry__31569__auto__){
var self__ = this;
var this__31568__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31569__auto__)){
return this__31568__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31569__auto__,(0)),cljs.core._nth.call(null,entry__31569__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31568__auto____$1,entry__31569__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__31601__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__31601__auto__,writer__31602__auto__){
return cljs.core._write.call(null,writer__31602__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__36555){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__36555),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__36555),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__36555),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36555,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__36571,xhrio){
var map__36572 = p__36571;
var map__36572__$1 = ((((!((map__36572 == null)))?((((map__36572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36572):map__36572);
var description = cljs.core.get.call(null,map__36572__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__32159__auto__ = [];
var len__32152__auto___36578 = arguments.length;
var i__32153__auto___36579 = (0);
while(true){
if((i__32153__auto___36579 < len__32152__auto___36578)){
args__32159__auto__.push((arguments[i__32153__auto___36579]));

var G__36580 = (i__32153__auto___36579 + (1));
i__32153__auto___36579 = G__36580;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((3) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32160__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq36574){
var G__36575 = cljs.core.first.call(null,seq36574);
var seq36574__$1 = cljs.core.next.call(null,seq36574);
var G__36576 = cljs.core.first.call(null,seq36574__$1);
var seq36574__$2 = cljs.core.next.call(null,seq36574__$1);
var G__36577 = cljs.core.first.call(null,seq36574__$2);
var seq36574__$3 = cljs.core.next.call(null,seq36574__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__36575,G__36576,G__36577,seq36574__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31563__auto__,k__31564__auto__){
var self__ = this;
var this__31563__auto____$1 = this;
return this__31563__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31564__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31565__auto__,k36583,else__31566__auto__){
var self__ = this;
var this__31565__auto____$1 = this;
var G__36587 = k36583;
var G__36587__$1 = (((G__36587 instanceof cljs.core.Keyword))?G__36587.fqn:null);
switch (G__36587__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36583,else__31566__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__36588,request){
var self__ = this;
var map__36589 = p__36588;
var map__36589__$1 = ((((!((map__36589 == null)))?((((map__36589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36589):map__36589);
var content_type__$1 = cljs.core.get.call(null,map__36589__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__36591 = this;
var map__36591__$1 = ((((!((map__36591 == null)))?((((map__36591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36591):map__36591);
var content_type__$2 = cljs.core.get.call(null,map__36591__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__36591,map__36591__$1,content_type__$2,map__36589,map__36589__$1,content_type__$1){
return (function (p1__36581_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__30875__auto__ = p1__36581_SHARP_;
if(cljs.core.truth_(or__30875__auto__)){
return or__30875__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__36591,map__36591__$1,content_type__$2,map__36589,map__36589__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__36593,xhrio){
var self__ = this;
var map__36594 = p__36593;
var map__36594__$1 = ((((!((map__36594 == null)))?((((map__36594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36594):map__36594);
var format = map__36594__$1;
var read__$1 = cljs.core.get.call(null,map__36594__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__36596 = this;
var map__36596__$1 = ((((!((map__36596 == null)))?((((map__36596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36596):map__36596);
var format__$1 = map__36596__$1;
var read__$2 = cljs.core.get.call(null,map__36596__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__36599 = status;
switch (G__36599) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e36600){if((e36600 instanceof Object)){
var e = e36600;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e36600;

}
}
}
}catch (e36598){if((e36598 instanceof Object)){
var e = e36598;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e36598;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31577__auto__,writer__31578__auto__,opts__31579__auto__){
var self__ = this;
var this__31577__auto____$1 = this;
var pr_pair__31580__auto__ = ((function (this__31577__auto____$1){
return (function (keyval__31581__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,cljs.core.pr_writer,""," ","",opts__31579__auto__,keyval__31581__auto__);
});})(this__31577__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,pr_pair__31580__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__31579__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36582){
var self__ = this;
var G__36582__$1 = this;
return (new cljs.core.RecordIter((0),G__36582__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31561__auto__){
var self__ = this;
var this__31561__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31558__auto__){
var self__ = this;
var this__31558__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31567__auto__){
var self__ = this;
var this__31567__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31559__auto__){
var self__ = this;
var this__31559__auto____$1 = this;
var h__31331__auto__ = self__.__hash;
if(!((h__31331__auto__ == null))){
return h__31331__auto__;
} else {
var h__31331__auto____$1 = ((function (h__31331__auto__,this__31559__auto____$1){
return (function (coll__31560__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__31560__auto__));
});})(h__31331__auto__,this__31559__auto____$1))
.call(null,this__31559__auto____$1);
self__.__hash = h__31331__auto____$1;

return h__31331__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36584,other36585){
var self__ = this;
var this36584__$1 = this;
return (!((other36585 == null))) && ((this36584__$1.constructor === other36585.constructor)) && (cljs.core._EQ_.call(null,this36584__$1.read,other36585.read)) && (cljs.core._EQ_.call(null,this36584__$1.description,other36585.description)) && (cljs.core._EQ_.call(null,this36584__$1.content_type,other36585.content_type)) && (cljs.core._EQ_.call(null,this36584__$1.__extmap,other36585.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31572__auto__,k__31573__auto__){
var self__ = this;
var this__31572__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__31573__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31572__auto____$1),self__.__meta),k__31573__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31573__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31570__auto__,k__31571__auto__,G__36582){
var self__ = this;
var this__31570__auto____$1 = this;
var pred__36601 = cljs.core.keyword_identical_QMARK_;
var expr__36602 = k__31571__auto__;
if(cljs.core.truth_(pred__36601.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__36602))){
return (new ajax.interceptors.ResponseFormat(G__36582,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36601.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__36602))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__36582,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36601.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__36602))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__36582,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31571__auto__,G__36582),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31575__auto__){
var self__ = this;
var this__31575__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31562__auto__,G__36582){
var self__ = this;
var this__31562__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__36582,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31568__auto__,entry__31569__auto__){
var self__ = this;
var this__31568__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31569__auto__)){
return this__31568__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31569__auto__,(0)),cljs.core._nth.call(null,entry__31569__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31568__auto____$1,entry__31569__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__31601__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__31601__auto__,writer__31602__auto__){
return cljs.core._write.call(null,writer__31602__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__36586){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__36586),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__36586),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__36586),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36586,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31563__auto__,k__31564__auto__){
var self__ = this;
var this__31563__auto____$1 = this;
return this__31563__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31564__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31565__auto__,k36607,else__31566__auto__){
var self__ = this;
var this__31565__auto____$1 = this;
var G__36611 = k36607;
switch (G__36611) {
default:
return cljs.core.get.call(null,self__.__extmap,k36607,else__31566__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__36612){
var self__ = this;
var map__36613 = p__36612;
var map__36613__$1 = ((((!((map__36613 == null)))?((((map__36613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36613):map__36613);
var request = map__36613__$1;
var uri = cljs.core.get.call(null,map__36613__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__36613__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__36613__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__36613__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__36613__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__36615 = ajax.interceptors.get_request_format.call(null,format);
var map__36615__$1 = ((((!((map__36615 == null)))?((((map__36615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36615):map__36615);
var write = cljs.core.get.call(null,map__36615__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__36615__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__30875__auto__ = headers;
if(cljs.core.truth_(or__30875__auto__)){
return or__30875__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31577__auto__,writer__31578__auto__,opts__31579__auto__){
var self__ = this;
var this__31577__auto____$1 = this;
var pr_pair__31580__auto__ = ((function (this__31577__auto____$1){
return (function (keyval__31581__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,cljs.core.pr_writer,""," ","",opts__31579__auto__,keyval__31581__auto__);
});})(this__31577__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,pr_pair__31580__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__31579__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36606){
var self__ = this;
var G__36606__$1 = this;
return (new cljs.core.RecordIter((0),G__36606__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31561__auto__){
var self__ = this;
var this__31561__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31558__auto__){
var self__ = this;
var this__31558__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31567__auto__){
var self__ = this;
var this__31567__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31559__auto__){
var self__ = this;
var this__31559__auto____$1 = this;
var h__31331__auto__ = self__.__hash;
if(!((h__31331__auto__ == null))){
return h__31331__auto__;
} else {
var h__31331__auto____$1 = ((function (h__31331__auto__,this__31559__auto____$1){
return (function (coll__31560__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__31560__auto__));
});})(h__31331__auto__,this__31559__auto____$1))
.call(null,this__31559__auto____$1);
self__.__hash = h__31331__auto____$1;

return h__31331__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36608,other36609){
var self__ = this;
var this36608__$1 = this;
return (!((other36609 == null))) && ((this36608__$1.constructor === other36609.constructor)) && (cljs.core._EQ_.call(null,this36608__$1.__extmap,other36609.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31572__auto__,k__31573__auto__){
var self__ = this;
var this__31572__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__31573__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31572__auto____$1),self__.__meta),k__31573__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31573__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31570__auto__,k__31571__auto__,G__36606){
var self__ = this;
var this__31570__auto____$1 = this;
var pred__36617 = cljs.core.keyword_identical_QMARK_;
var expr__36618 = k__31571__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31571__auto__,G__36606),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31575__auto__){
var self__ = this;
var this__31575__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31562__auto__,G__36606){
var self__ = this;
var this__31562__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__36606,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31568__auto__,entry__31569__auto__){
var self__ = this;
var this__31568__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31569__auto__)){
return this__31568__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31569__auto__,(0)),cljs.core._nth.call(null,entry__31569__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31568__auto____$1,entry__31569__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__31601__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__31601__auto__,writer__31602__auto__){
return cljs.core._write.call(null,writer__31602__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__36610){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36610)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__36622 = arguments.length;
switch (G__36622) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__36623,uri){
var map__36624 = p__36623;
var map__36624__$1 = ((((!((map__36624 == null)))?((((map__36624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36624):map__36624);
var vec_strategy = cljs.core.get.call(null,map__36624__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__36624__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__36626){
var map__36627 = p__36626;
var map__36627__$1 = ((((!((map__36627 == null)))?((((map__36627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36627):map__36627);
var vec_strategy = cljs.core.get.call(null,map__36627__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__36627__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__36627,map__36627__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__36627,map__36627__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31563__auto__,k__31564__auto__){
var self__ = this;
var this__31563__auto____$1 = this;
return this__31563__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31564__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31565__auto__,k36631,else__31566__auto__){
var self__ = this;
var this__31565__auto____$1 = this;
var G__36635 = k36631;
switch (G__36635) {
default:
return cljs.core.get.call(null,self__.__extmap,k36631,else__31566__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__36636){
var self__ = this;
var map__36637 = p__36636;
var map__36637__$1 = ((((!((map__36637 == null)))?((((map__36637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36637):map__36637);
var request = map__36637__$1;
var method = cljs.core.get.call(null,map__36637__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31577__auto__,writer__31578__auto__,opts__31579__auto__){
var self__ = this;
var this__31577__auto____$1 = this;
var pr_pair__31580__auto__ = ((function (this__31577__auto____$1){
return (function (keyval__31581__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,cljs.core.pr_writer,""," ","",opts__31579__auto__,keyval__31581__auto__);
});})(this__31577__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,pr_pair__31580__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__31579__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36630){
var self__ = this;
var G__36630__$1 = this;
return (new cljs.core.RecordIter((0),G__36630__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31561__auto__){
var self__ = this;
var this__31561__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31558__auto__){
var self__ = this;
var this__31558__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31567__auto__){
var self__ = this;
var this__31567__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31559__auto__){
var self__ = this;
var this__31559__auto____$1 = this;
var h__31331__auto__ = self__.__hash;
if(!((h__31331__auto__ == null))){
return h__31331__auto__;
} else {
var h__31331__auto____$1 = ((function (h__31331__auto__,this__31559__auto____$1){
return (function (coll__31560__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__31560__auto__));
});})(h__31331__auto__,this__31559__auto____$1))
.call(null,this__31559__auto____$1);
self__.__hash = h__31331__auto____$1;

return h__31331__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36632,other36633){
var self__ = this;
var this36632__$1 = this;
return (!((other36633 == null))) && ((this36632__$1.constructor === other36633.constructor)) && (cljs.core._EQ_.call(null,this36632__$1.__extmap,other36633.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31572__auto__,k__31573__auto__){
var self__ = this;
var this__31572__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__31573__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31572__auto____$1),self__.__meta),k__31573__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31573__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31570__auto__,k__31571__auto__,G__36630){
var self__ = this;
var this__31570__auto____$1 = this;
var pred__36639 = cljs.core.keyword_identical_QMARK_;
var expr__36640 = k__31571__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31571__auto__,G__36630),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31575__auto__){
var self__ = this;
var this__31575__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31562__auto__,G__36630){
var self__ = this;
var this__31562__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__36630,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31568__auto__,entry__31569__auto__){
var self__ = this;
var this__31568__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31569__auto__)){
return this__31568__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31569__auto__,(0)),cljs.core._nth.call(null,entry__31569__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31568__auto____$1,entry__31569__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__31601__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__31601__auto__,writer__31602__auto__){
return cljs.core._write.call(null,writer__31602__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__36634){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36634)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31563__auto__,k__31564__auto__){
var self__ = this;
var this__31563__auto____$1 = this;
return this__31563__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31564__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31565__auto__,k36644,else__31566__auto__){
var self__ = this;
var this__31565__auto____$1 = this;
var G__36648 = k36644;
switch (G__36648) {
default:
return cljs.core.get.call(null,self__.__extmap,k36644,else__31566__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__36649){
var self__ = this;
var map__36650 = p__36649;
var map__36650__$1 = ((((!((map__36650 == null)))?((((map__36650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36650):map__36650);
var request = map__36650__$1;
var body = cljs.core.get.call(null,map__36650__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31577__auto__,writer__31578__auto__,opts__31579__auto__){
var self__ = this;
var this__31577__auto____$1 = this;
var pr_pair__31580__auto__ = ((function (this__31577__auto____$1){
return (function (keyval__31581__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,cljs.core.pr_writer,""," ","",opts__31579__auto__,keyval__31581__auto__);
});})(this__31577__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31578__auto__,pr_pair__31580__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__31579__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36643){
var self__ = this;
var G__36643__$1 = this;
return (new cljs.core.RecordIter((0),G__36643__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31561__auto__){
var self__ = this;
var this__31561__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31558__auto__){
var self__ = this;
var this__31558__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31567__auto__){
var self__ = this;
var this__31567__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31559__auto__){
var self__ = this;
var this__31559__auto____$1 = this;
var h__31331__auto__ = self__.__hash;
if(!((h__31331__auto__ == null))){
return h__31331__auto__;
} else {
var h__31331__auto____$1 = ((function (h__31331__auto__,this__31559__auto____$1){
return (function (coll__31560__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__31560__auto__));
});})(h__31331__auto__,this__31559__auto____$1))
.call(null,this__31559__auto____$1);
self__.__hash = h__31331__auto____$1;

return h__31331__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36645,other36646){
var self__ = this;
var this36645__$1 = this;
return (!((other36646 == null))) && ((this36645__$1.constructor === other36646.constructor)) && (cljs.core._EQ_.call(null,this36645__$1.__extmap,other36646.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31572__auto__,k__31573__auto__){
var self__ = this;
var this__31572__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__31573__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31572__auto____$1),self__.__meta),k__31573__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31573__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31570__auto__,k__31571__auto__,G__36643){
var self__ = this;
var this__31570__auto____$1 = this;
var pred__36652 = cljs.core.keyword_identical_QMARK_;
var expr__36653 = k__31571__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31571__auto__,G__36643),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31575__auto__){
var self__ = this;
var this__31575__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31562__auto__,G__36643){
var self__ = this;
var this__31562__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__36643,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31568__auto__,entry__31569__auto__){
var self__ = this;
var this__31568__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31569__auto__)){
return this__31568__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31569__auto__,(0)),cljs.core._nth.call(null,entry__31569__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31568__auto____$1,entry__31569__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__31601__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__31601__auto__,writer__31602__auto__){
return cljs.core._write.call(null,writer__31602__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__36647){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36647)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__36656){
var map__36657 = p__36656;
var map__36657__$1 = ((((!((map__36657 == null)))?((((map__36657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36657):map__36657);
var opts = map__36657__$1;
var response_format = cljs.core.get.call(null,map__36657__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});
