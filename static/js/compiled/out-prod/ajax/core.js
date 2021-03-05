// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__32159__auto__ = [];
var len__32152__auto___36955 = arguments.length;
var i__32153__auto___36956 = (0);
while(true){
if((i__32153__auto___36956 < len__32152__auto___36955)){
args__32159__auto__.push((arguments[i__32153__auto___36956]));

var G__36957 = (i__32153__auto___36956 + (1));
i__32153__auto___36956 = G__36957;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((1) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32160__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36543__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__36543__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36543__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq36953){
var G__36954 = cljs.core.first.call(null,seq36953);
var seq36953__$1 = cljs.core.next.call(null,seq36953);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__36954,seq36953__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__32159__auto__ = [];
var len__32152__auto___36960 = arguments.length;
var i__32153__auto___36961 = (0);
while(true){
if((i__32153__auto___36961 < len__32152__auto___36960)){
args__32159__auto__.push((arguments[i__32153__auto___36961]));

var G__36962 = (i__32153__auto___36961 + (1));
i__32153__auto___36961 = G__36962;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((1) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32160__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36543__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__36543__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36543__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq36958){
var G__36959 = cljs.core.first.call(null,seq36958);
var seq36958__$1 = cljs.core.next.call(null,seq36958);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__36959,seq36958__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__32159__auto__ = [];
var len__32152__auto___36965 = arguments.length;
var i__32153__auto___36966 = (0);
while(true){
if((i__32153__auto___36966 < len__32152__auto___36965)){
args__32159__auto__.push((arguments[i__32153__auto___36966]));

var G__36967 = (i__32153__auto___36966 + (1));
i__32153__auto___36966 = G__36967;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((1) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32160__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36543__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__36543__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36543__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq36963){
var G__36964 = cljs.core.first.call(null,seq36963);
var seq36963__$1 = cljs.core.next.call(null,seq36963);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__36964,seq36963__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__32159__auto__ = [];
var len__32152__auto___36970 = arguments.length;
var i__32153__auto___36971 = (0);
while(true){
if((i__32153__auto___36971 < len__32152__auto___36970)){
args__32159__auto__.push((arguments[i__32153__auto___36971]));

var G__36972 = (i__32153__auto___36971 + (1));
i__32153__auto___36971 = G__36972;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((1) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32160__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36543__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__36543__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36543__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq36968){
var G__36969 = cljs.core.first.call(null,seq36968);
var seq36968__$1 = cljs.core.next.call(null,seq36968);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__36969,seq36968__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__32159__auto__ = [];
var len__32152__auto___36975 = arguments.length;
var i__32153__auto___36976 = (0);
while(true){
if((i__32153__auto___36976 < len__32152__auto___36975)){
args__32159__auto__.push((arguments[i__32153__auto___36976]));

var G__36977 = (i__32153__auto___36976 + (1));
i__32153__auto___36976 = G__36977;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((1) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32160__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36543__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__36543__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36543__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq36973){
var G__36974 = cljs.core.first.call(null,seq36973);
var seq36973__$1 = cljs.core.next.call(null,seq36973);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__36974,seq36973__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__32159__auto__ = [];
var len__32152__auto___36980 = arguments.length;
var i__32153__auto___36981 = (0);
while(true){
if((i__32153__auto___36981 < len__32152__auto___36980)){
args__32159__auto__.push((arguments[i__32153__auto___36981]));

var G__36982 = (i__32153__auto___36981 + (1));
i__32153__auto___36981 = G__36982;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((1) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32160__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36543__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__36543__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36543__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq36978){
var G__36979 = cljs.core.first.call(null,seq36978);
var seq36978__$1 = cljs.core.next.call(null,seq36978);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__36979,seq36978__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__32159__auto__ = [];
var len__32152__auto___36985 = arguments.length;
var i__32153__auto___36986 = (0);
while(true){
if((i__32153__auto___36986 < len__32152__auto___36985)){
args__32159__auto__.push((arguments[i__32153__auto___36986]));

var G__36987 = (i__32153__auto___36986 + (1));
i__32153__auto___36986 = G__36987;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((1) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32160__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36543__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__36543__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36543__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq36983){
var G__36984 = cljs.core.first.call(null,seq36983);
var seq36983__$1 = cljs.core.next.call(null,seq36983);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__36984,seq36983__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__32159__auto__ = [];
var len__32152__auto___36990 = arguments.length;
var i__32153__auto___36991 = (0);
while(true){
if((i__32153__auto___36991 < len__32152__auto___36990)){
args__32159__auto__.push((arguments[i__32153__auto___36991]));

var G__36992 = (i__32153__auto___36991 + (1));
i__32153__auto___36991 = G__36992;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((1) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32160__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36543__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__36543__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36543__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq36988){
var G__36989 = cljs.core.first.call(null,seq36988);
var seq36988__$1 = cljs.core.next.call(null,seq36988);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__36989,seq36988__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__32159__auto__ = [];
var len__32152__auto___36995 = arguments.length;
var i__32153__auto___36996 = (0);
while(true){
if((i__32153__auto___36996 < len__32152__auto___36995)){
args__32159__auto__.push((arguments[i__32153__auto___36996]));

var G__36997 = (i__32153__auto___36996 + (1));
i__32153__auto___36996 = G__36997;
continue;
} else {
}
break;
}

var argseq__32160__auto__ = ((((1) < args__32159__auto__.length))?(new cljs.core.IndexedSeq(args__32159__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32160__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36543__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__36543__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36543__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq36993){
var G__36994 = cljs.core.first.call(null,seq36993);
var seq36993__$1 = cljs.core.next.call(null,seq36993);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__36994,seq36993__$1);
});

