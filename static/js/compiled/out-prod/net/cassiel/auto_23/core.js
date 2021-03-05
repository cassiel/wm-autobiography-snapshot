// Compiled by ClojureScript 1.9.908 {}
goog.provide('net.cassiel.auto_23.core');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('net.cassiel.auto_23.components.svg_base');
goog.require('net.cassiel.auto_23.components.reagent_base');
goog.require('net.cassiel.auto_23.components.ajax_xfer');
goog.require('net.cassiel.auto_23.components.exchange');
cljs.core.enable_console_print_BANG_.call(null);
net.cassiel.auto_23.core.system = (function net$cassiel$auto_23$core$system(){
return com.stuartsierra.component.system_map.call(null,new cljs.core.Keyword(null,"ajax-xfer","ajax-xfer",-2109230539),net.cassiel.auto_23.components.ajax_xfer.map__GT_AJAX_XFER.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"exchange","exchange",843073210),com.stuartsierra.component.using.call(null,net.cassiel.auto_23.components.exchange.map__GT_EXCHANGE.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax-xfer","ajax-xfer",-2109230539)], null)),new cljs.core.Keyword(null,"reagent-base","reagent-base",856617841),com.stuartsierra.component.using.call(null,net.cassiel.auto_23.components.reagent_base.map__GT_REAGENT_BASE.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210)], null)),new cljs.core.Keyword(null,"svg-base","svg-base",361547711),com.stuartsierra.component.using.call(null,net.cassiel.auto_23.components.svg_base.map__GT_SVG_BASE.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exchange","exchange",843073210)], null)));
});
if(typeof net.cassiel.auto_23.core.S !== 'undefined'){
} else {
net.cassiel.auto_23.core.S = cljs.core.atom.call(null,net.cassiel.auto_23.core.system.call(null));
}
if(typeof net.cassiel.auto_23.core.app_state !== 'undefined'){
} else {
net.cassiel.auto_23.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
net.cassiel.auto_23.core.start = (function net$cassiel$auto_23$core$start(){
return cljs.core.swap_BANG_.call(null,net.cassiel.auto_23.core.S,com.stuartsierra.component.start);
});
net.cassiel.auto_23.core.stop = (function net$cassiel$auto_23$core$stop(){
return cljs.core.swap_BANG_.call(null,net.cassiel.auto_23.core.S,com.stuartsierra.component.stop);
});
net.cassiel.auto_23.core.on_js_reload = (function net$cassiel$auto_23$core$on_js_reload(){
net.cassiel.auto_23.core.stop.call(null);

return net.cassiel.auto_23.core.start.call(null);
});
net.cassiel.auto_23.core.stop.call(null);
