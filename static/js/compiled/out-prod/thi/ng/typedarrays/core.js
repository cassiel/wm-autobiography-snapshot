// Compiled by ClojureScript 1.9.908 {}
goog.provide('thi.ng.typedarrays.core');
goog.require('cljs.core');
/**
 * Returns true if JS runtime supports typed arrays
 */
thi.ng.typedarrays.core.typed_arrays_supported_QMARK_ = (function thi$ng$typedarrays$core$typed_arrays_supported_QMARK_(){
return !(((window["ArrayBuffer"]) == null));
});
thi.ng.typedarrays.core.array_types = cljs.core.PersistentHashMap.fromArrays(["Float64Array","Uint8Array","Int8Array","Uint8ClampedArray","Uint16Array","Int16Array","Uint32Array","Float32Array","Int32Array"],[new cljs.core.Keyword(null,"float64","float64",1881838306),new cljs.core.Keyword(null,"uint8","uint8",956521151),new cljs.core.Keyword(null,"int8","int8",-1834023920),new cljs.core.Keyword(null,"uint8-clamped","uint8-clamped",1439331936),new cljs.core.Keyword(null,"uint16","uint16",-588869202),new cljs.core.Keyword(null,"int16","int16",-188764863),new cljs.core.Keyword(null,"uint32","uint32",-418789486),new cljs.core.Keyword(null,"float32","float32",-2119815775),new cljs.core.Keyword(null,"int32","int32",1718804896)]);
/**
 * Returns truthy value if the given arg is a typed array instance
 */
thi.ng.typedarrays.core.typed_array_QMARK_ = (function thi$ng$typedarrays$core$typed_array_QMARK_(x){
if(cljs.core._EQ_.call(null,"object",goog.typeOf(x))){
if(typeof x.BYTES_PER_ELEMENT === 'number'){
return x.buffer;
} else {
return null;
}
} else {
return null;
}
});
thi.ng.typedarrays.core.array_type = (function thi$ng$typedarrays$core$array_type(x){
if(cljs.core.array_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"array","array",-2080713842);
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,x))){
return cljs.core.get.call(null,thi.ng.typedarrays.core.array_types,cljs.core.first.call(null,cljs.core.re_find.call(null,/((Uint|Int|Float)\d+(Clamped)?Array)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.constructor)].join(''))));
} else {
return null;
}
}
});
/**
 * Creates a native Int8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int8 = (function thi$ng$typedarrays$core$int8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int8Array(len));
var i_40685 = (0);
var coll_40686 = size_or_coll;
while(true){
if((i_40685 < len)){
(buf[i_40685] = cljs.core.first.call(null,coll_40686));

var G__40687 = (i_40685 + (1));
var G__40688 = cljs.core.next.call(null,coll_40686);
i_40685 = G__40687;
coll_40686 = G__40688;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8 = (function thi$ng$typedarrays$core$uint8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8Array(len));
var i_40689 = (0);
var coll_40690 = size_or_coll;
while(true){
if((i_40689 < len)){
(buf[i_40689] = cljs.core.first.call(null,coll_40690));

var G__40691 = (i_40689 + (1));
var G__40692 = cljs.core.next.call(null,coll_40690);
i_40689 = G__40691;
coll_40690 = G__40692;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint8ClampedArray of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8_clamped = (function thi$ng$typedarrays$core$uint8_clamped(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8ClampedArray(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8ClampedArray(len));
var i_40693 = (0);
var coll_40694 = size_or_coll;
while(true){
if((i_40693 < len)){
(buf[i_40693] = cljs.core.first.call(null,coll_40694));

var G__40695 = (i_40693 + (1));
var G__40696 = cljs.core.next.call(null,coll_40694);
i_40693 = G__40695;
coll_40694 = G__40696;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Int16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int16 = (function thi$ng$typedarrays$core$int16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int16Array(len));
var i_40697 = (0);
var coll_40698 = size_or_coll;
while(true){
if((i_40697 < len)){
(buf[i_40697] = cljs.core.first.call(null,coll_40698));

var G__40699 = (i_40697 + (1));
var G__40700 = cljs.core.next.call(null,coll_40698);
i_40697 = G__40699;
coll_40698 = G__40700;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint16 = (function thi$ng$typedarrays$core$uint16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint16Array(len));
var i_40701 = (0);
var coll_40702 = size_or_coll;
while(true){
if((i_40701 < len)){
(buf[i_40701] = cljs.core.first.call(null,coll_40702));

var G__40703 = (i_40701 + (1));
var G__40704 = cljs.core.next.call(null,coll_40702);
i_40701 = G__40703;
coll_40702 = G__40704;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Int32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int32 = (function thi$ng$typedarrays$core$int32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int32Array(len));
var i_40705 = (0);
var coll_40706 = size_or_coll;
while(true){
if((i_40705 < len)){
(buf[i_40705] = cljs.core.first.call(null,coll_40706));

var G__40707 = (i_40705 + (1));
var G__40708 = cljs.core.next.call(null,coll_40706);
i_40705 = G__40707;
coll_40706 = G__40708;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint32 = (function thi$ng$typedarrays$core$uint32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint32Array(len));
var i_40709 = (0);
var coll_40710 = size_or_coll;
while(true){
if((i_40709 < len)){
(buf[i_40709] = cljs.core.first.call(null,coll_40710));

var G__40711 = (i_40709 + (1));
var G__40712 = cljs.core.next.call(null,coll_40710);
i_40709 = G__40711;
coll_40710 = G__40712;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Float32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float32 = (function thi$ng$typedarrays$core$float32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float32Array(len));
var i_40713 = (0);
var coll_40714 = size_or_coll;
while(true){
if((i_40713 < len)){
(buf[i_40713] = cljs.core.first.call(null,coll_40714));

var G__40715 = (i_40713 + (1));
var G__40716 = cljs.core.next.call(null,coll_40714);
i_40713 = G__40715;
coll_40714 = G__40716;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Float64Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float64 = (function thi$ng$typedarrays$core$float64(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float64Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float64Array(len));
var i_40717 = (0);
var coll_40718 = size_or_coll;
while(true){
if((i_40717 < len)){
(buf[i_40717] = cljs.core.first.call(null,coll_40718));

var G__40719 = (i_40717 + (1));
var G__40720 = cljs.core.next.call(null,coll_40718);
i_40717 = G__40719;
coll_40718 = G__40720;
continue;
} else {
}
break;
}

return buf;

}
}
});
