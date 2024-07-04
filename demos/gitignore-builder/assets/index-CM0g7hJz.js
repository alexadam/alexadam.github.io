(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function oc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $a={exports:{}},rr={},Ja={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qt=Symbol.for("react.element"),sc=Symbol.for("react.portal"),ac=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),dc=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),mc=Symbol.for("react.memo"),fc=Symbol.for("react.lazy"),Rs=Symbol.iterator;function hc(e){return e===null||typeof e!="object"?null:(e=Rs&&e[Rs]||e["@@iterator"],typeof e=="function"?e:null)}var Qa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ka=Object.assign,Xa={};function ct(e,n,t){this.props=e,this.context=n,this.refs=Xa,this.updater=t||Qa}ct.prototype.isReactComponent={};ct.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ct.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qa(){}qa.prototype=ct.prototype;function Vo(e,n,t){this.props=e,this.context=n,this.refs=Xa,this.updater=t||Qa}var Uo=Vo.prototype=new qa;Uo.constructor=Vo;Ka(Uo,ct.prototype);Uo.isPureReactComponent=!0;var Is=Array.isArray,Ya=Object.prototype.hasOwnProperty,Wo={current:null},Za={key:!0,ref:!0,__self:!0,__source:!0};function el(e,n,t){var i,r={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)Ya.call(n,i)&&!Za.hasOwnProperty(i)&&(r[i]=n[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:qt,type:e,key:o,ref:s,props:r,_owner:Wo.current}}function yc(e,n){return{$$typeof:qt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ho(e){return typeof e=="object"&&e!==null&&e.$$typeof===qt}function vc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var As=/\/+/g;function wr(e,n){return typeof e=="object"&&e!==null&&e.key!=null?vc(""+e.key):n.toString(36)}function xi(e,n,t,i,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case qt:case sc:s=!0}}if(s)return s=e,r=r(s),e=i===""?"."+wr(s,0):i,Is(r)?(t="",e!=null&&(t=e.replace(As,"$&/")+"/"),xi(r,n,t,"",function(c){return c})):r!=null&&(Ho(r)&&(r=yc(r,t+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(As,"$&/")+"/")+e)),n.push(r)),1;if(s=0,i=i===""?".":i+":",Is(e))for(var a=0;a<e.length;a++){o=e[a];var l=i+wr(o,a);s+=xi(o,n,t,l,r)}else if(l=hc(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=i+wr(o,a++),s+=xi(o,n,t,l,r);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function oi(e,n,t){if(e==null)return e;var i=[],r=0;return xi(e,i,"","",function(o){return n.call(t,o,r++)}),i}function kc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},bi={transition:null},_c={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:bi,ReactCurrentOwner:Wo};L.Children={map:oi,forEach:function(e,n,t){oi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return oi(e,function(){n++}),n},toArray:function(e){return oi(e,function(n){return n})||[]},only:function(e){if(!Ho(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=ct;L.Fragment=ac;L.Profiler=uc;L.PureComponent=Vo;L.StrictMode=lc;L.Suspense=pc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_c;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Ka({},e.props),r=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=Wo.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in n)Ya.call(n,l)&&!Za.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&a!==void 0?a[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:qt,type:e.type,key:r,ref:o,props:i,_owner:s}};L.createContext=function(e){return e={$$typeof:gc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cc,_context:e},e.Consumer=e};L.createElement=el;L.createFactory=function(e){var n=el.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:dc,render:e}};L.isValidElement=Ho;L.lazy=function(e){return{$$typeof:fc,_payload:{_status:-1,_result:e},_init:kc}};L.memo=function(e,n){return{$$typeof:mc,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=bi.transition;bi.transition={};try{e()}finally{bi.transition=n}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,n){return ge.current.useCallback(e,n)};L.useContext=function(e){return ge.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};L.useEffect=function(e,n){return ge.current.useEffect(e,n)};L.useId=function(){return ge.current.useId()};L.useImperativeHandle=function(e,n,t){return ge.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return ge.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return ge.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return ge.current.useMemo(e,n)};L.useReducer=function(e,n,t){return ge.current.useReducer(e,n,t)};L.useRef=function(e){return ge.current.useRef(e)};L.useState=function(e){return ge.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return ge.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return ge.current.useTransition()};L.version="18.2.0";Ja.exports=L;var M=Ja.exports;const wc=oc(M);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc=M,bc=Symbol.for("react.element"),Sc=Symbol.for("react.fragment"),Bc=Object.prototype.hasOwnProperty,Gc=xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cc={key:!0,ref:!0,__self:!0,__source:!0};function nl(e,n,t){var i,r={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(i in n)Bc.call(n,i)&&!Cc.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)r[i]===void 0&&(r[i]=n[i]);return{$$typeof:bc,type:e,key:o,ref:s,props:r,_owner:Gc.current}}rr.Fragment=Sc;rr.jsx=nl;rr.jsxs=nl;$a.exports=rr;var j=$a.exports,Qr={},tl={exports:{}},be={},il={exports:{}},rl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(w,P){var D=w.length;w.push(P);e:for(;0<D;){var Q=D-1>>>1,Z=w[Q];if(0<r(Z,P))w[Q]=P,w[D]=Z,D=Q;else break e}}function t(w){return w.length===0?null:w[0]}function i(w){if(w.length===0)return null;var P=w[0],D=w.pop();if(D!==P){w[0]=D;e:for(var Q=0,Z=w.length,ii=Z>>>1;Q<ii;){var xn=2*(Q+1)-1,_r=w[xn],bn=xn+1,ri=w[bn];if(0>r(_r,D))bn<Z&&0>r(ri,_r)?(w[Q]=ri,w[bn]=D,Q=bn):(w[Q]=_r,w[xn]=D,Q=xn);else if(bn<Z&&0>r(ri,D))w[Q]=ri,w[bn]=D,Q=bn;else break e}}return P}function r(w,P){var D=w.sortIndex-P.sortIndex;return D!==0?D:w.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],f=1,m=null,p=3,v=!1,k=!1,x=!1,I=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(w){for(var P=t(c);P!==null;){if(P.callback===null)i(c);else if(P.startTime<=w)i(c),P.sortIndex=P.expirationTime,n(l,P);else break;P=t(c)}}function h(w){if(x=!1,d(w),!k)if(t(l)!==null)k=!0,E(_);else{var P=t(c);P!==null&&A(h,P.startTime-w)}}function _(w,P){k=!1,x&&(x=!1,g(G),G=-1),v=!0;var D=p;try{for(d(P),m=t(l);m!==null&&(!(m.expirationTime>P)||w&&!ve());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,p=m.priorityLevel;var Z=Q(m.expirationTime<=P);P=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===t(l)&&i(l),d(P)}else i(l);m=t(l)}if(m!==null)var ii=!0;else{var xn=t(c);xn!==null&&A(h,xn.startTime-P),ii=!1}return ii}finally{m=null,p=D,v=!1}}var S=!1,B=null,G=-1,U=5,T=-1;function ve(){return!(e.unstable_now()-T<U)}function _n(){if(B!==null){var w=e.unstable_now();T=w;var P=!0;try{P=B(!0,w)}finally{P?wn():(S=!1,B=null)}}else S=!1}var wn;if(typeof u=="function")wn=function(){u(_n)};else if(typeof MessageChannel<"u"){var ti=new MessageChannel,C=ti.port2;ti.port1.onmessage=_n,wn=function(){C.postMessage(null)}}else wn=function(){I(_n,0)};function E(w){B=w,S||(S=!0,wn())}function A(w,P){G=I(function(){w(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(w){w.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,E(_))},e.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<w?Math.floor(1e3/w):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(w){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var D=p;p=P;try{return w()}finally{p=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(w,P){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var D=p;p=w;try{return P()}finally{p=D}},e.unstable_scheduleCallback=function(w,P,D){var Q=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Q+D:Q):D=Q,w){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=D+Z,w={id:f++,callback:P,priorityLevel:w,startTime:D,expirationTime:Z,sortIndex:-1},D>Q?(w.sortIndex=D,n(c,w),t(l)===null&&w===t(c)&&(x?(g(G),G=-1):x=!0,A(h,D-Q))):(w.sortIndex=Z,n(l,w),k||v||(k=!0,E(_))),w},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(w){var P=p;return function(){var D=p;p=P;try{return w.apply(this,arguments)}finally{p=D}}}})(rl);il.exports=rl;var jc=il.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ol=M,xe=jc;function y(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sl=new Set,Lt={};function Rn(e,n){it(e,n),it(e+"Capture",n)}function it(e,n){for(Lt[e]=n,e=0;e<n.length;e++)sl.add(n[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kr=Object.prototype.hasOwnProperty,Ec=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zs={},Os={};function Pc(e){return Kr.call(Os,e)?!0:Kr.call(zs,e)?!1:Ec.test(e)?Os[e]=!0:(zs[e]=!0,!1)}function Mc(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dc(e,n,t,i){if(n===null||typeof n>"u"||Mc(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function de(e,n,t,i,r,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new de(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var $o=/[\-:]([a-z])/g;function Jo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace($o,Jo);re[n]=new de(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace($o,Jo);re[n]=new de(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace($o,Jo);re[n]=new de(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qo(e,n,t,i){var r=re.hasOwnProperty(n)?re[n]:null;(r!==null?r.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Dc(n,t,r,i)&&(t=null),i||r===null?Pc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,i=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var Ye=ol.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),zn=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),Ko=Symbol.for("react.strict_mode"),Xr=Symbol.for("react.profiler"),al=Symbol.for("react.provider"),ll=Symbol.for("react.context"),Xo=Symbol.for("react.forward_ref"),qr=Symbol.for("react.suspense"),Yr=Symbol.for("react.suspense_list"),qo=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),ul=Symbol.for("react.offscreen"),Fs=Symbol.iterator;function pt(e){return e===null||typeof e!="object"?null:(e=Fs&&e[Fs]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,xr;function wt(e){if(xr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);xr=n&&n[1]||""}return`
`+xr+e}var br=!1;function Sr(e,n){if(!e||br)return"";br=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var i=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){i=c}e.call(n.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{br=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?wt(e):""}function Tc(e){switch(e.tag){case 5:return wt(e.type);case 16:return wt("Lazy");case 13:return wt("Suspense");case 19:return wt("SuspenseList");case 0:case 2:case 15:return e=Sr(e.type,!1),e;case 11:return e=Sr(e.type.render,!1),e;case 1:return e=Sr(e.type,!0),e;default:return""}}function Zr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case On:return"Fragment";case zn:return"Portal";case Xr:return"Profiler";case Ko:return"StrictMode";case qr:return"Suspense";case Yr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ll:return(e.displayName||"Context")+".Consumer";case al:return(e._context.displayName||"Context")+".Provider";case Xo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qo:return n=e.displayName||null,n!==null?n:Zr(e.type)||"Memo";case en:n=e._payload,e=e._init;try{return Zr(e(n))}catch{}}return null}function Lc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zr(n);case 8:return n===Ko?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cl(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Nc(e){var n=cl(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ai(e){e._valueTracker||(e._valueTracker=Nc(e))}function gl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=cl(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function eo(e,n){var t=n.checked;return $({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Vs(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=fn(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function dl(e,n){n=n.checked,n!=null&&Qo(e,"checked",n,!1)}function no(e,n){dl(e,n);var t=fn(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?to(e,n.type,t):n.hasOwnProperty("defaultValue")&&to(e,n.type,fn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Us(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function to(e,n,t){(n!=="number"||Li(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var xt=Array.isArray;function qn(e,n,t,i){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&i&&(e[t].defaultSelected=!0)}else{for(t=""+fn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function io(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(y(91));return $({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ws(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(y(92));if(xt(t)){if(1<t.length)throw Error(y(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:fn(t)}}function pl(e,n){var t=fn(n.value),i=fn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function Hs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ml(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ml(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var li,fl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(li=li||document.createElement("div"),li.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Nt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Bt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rc=["Webkit","ms","Moz","O"];Object.keys(Bt).forEach(function(e){Rc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Bt[n]=Bt[e]})});function hl(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Bt.hasOwnProperty(e)&&Bt[e]?(""+n).trim():n+"px"}function yl(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=hl(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,r):e[t]=r}}var Ic=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oo(e,n){if(n){if(Ic[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(y(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(y(61))}if(n.style!=null&&typeof n.style!="object")throw Error(y(62))}}function so(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ao=null;function Yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,Yn=null,Zn=null;function $s(e){if(e=ei(e)){if(typeof lo!="function")throw Error(y(280));var n=e.stateNode;n&&(n=ur(n),lo(e.stateNode,e.type,n))}}function vl(e){Yn?Zn?Zn.push(e):Zn=[e]:Yn=e}function kl(){if(Yn){var e=Yn,n=Zn;if(Zn=Yn=null,$s(e),n)for(e=0;e<n.length;e++)$s(n[e])}}function _l(e,n){return e(n)}function wl(){}var Br=!1;function xl(e,n,t){if(Br)return e(n,t);Br=!0;try{return _l(e,n,t)}finally{Br=!1,(Yn!==null||Zn!==null)&&(wl(),kl())}}function Rt(e,n){var t=e.stateNode;if(t===null)return null;var i=ur(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(y(231,n,typeof t));return t}var uo=!1;if(Qe)try{var mt={};Object.defineProperty(mt,"passive",{get:function(){uo=!0}}),window.addEventListener("test",mt,mt),window.removeEventListener("test",mt,mt)}catch{uo=!1}function Ac(e,n,t,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(f){this.onError(f)}}var Gt=!1,Ni=null,Ri=!1,co=null,zc={onError:function(e){Gt=!0,Ni=e}};function Oc(e,n,t,i,r,o,s,a,l){Gt=!1,Ni=null,Ac.apply(zc,arguments)}function Fc(e,n,t,i,r,o,s,a,l){if(Oc.apply(this,arguments),Gt){if(Gt){var c=Ni;Gt=!1,Ni=null}else throw Error(y(198));Ri||(Ri=!0,co=c)}}function In(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function bl(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Js(e){if(In(e)!==e)throw Error(y(188))}function Vc(e){var n=e.alternate;if(!n){if(n=In(e),n===null)throw Error(y(188));return n!==e?null:e}for(var t=e,i=n;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return Js(r),e;if(o===i)return Js(r),n;o=o.sibling}throw Error(y(188))}if(t.return!==i.return)t=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===t){s=!0,t=r,i=o;break}if(a===i){s=!0,i=r,t=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===t){s=!0,t=o,i=r;break}if(a===i){s=!0,i=o,t=r;break}a=a.sibling}if(!s)throw Error(y(189))}}if(t.alternate!==i)throw Error(y(190))}if(t.tag!==3)throw Error(y(188));return t.stateNode.current===t?e:n}function Sl(e){return e=Vc(e),e!==null?Bl(e):null}function Bl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Bl(e);if(n!==null)return n;e=e.sibling}return null}var Gl=xe.unstable_scheduleCallback,Qs=xe.unstable_cancelCallback,Uc=xe.unstable_shouldYield,Wc=xe.unstable_requestPaint,K=xe.unstable_now,Hc=xe.unstable_getCurrentPriorityLevel,Zo=xe.unstable_ImmediatePriority,Cl=xe.unstable_UserBlockingPriority,Ii=xe.unstable_NormalPriority,$c=xe.unstable_LowPriority,jl=xe.unstable_IdlePriority,or=null,Fe=null;function Jc(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(or,e,void 0,(e.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:Xc,Qc=Math.log,Kc=Math.LN2;function Xc(e){return e>>>=0,e===0?32:31-(Qc(e)/Kc|0)|0}var ui=64,ci=4194304;function bt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ai(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var a=s&~r;a!==0?i=bt(a):(o&=s,o!==0&&(i=bt(o)))}else s=t&~r,s!==0?i=bt(s):o!==0&&(i=bt(o));if(i===0)return 0;if(n!==0&&n!==i&&!(n&r)&&(r=i&-i,o=n&-n,r>=o||r===16&&(o&4194240)!==0))return n;if(i&4&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-Ne(n),r=1<<t,i|=e[t],n&=~r;return i}function qc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yc(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ne(o),a=1<<s,l=r[s];l===-1?(!(a&t)||a&i)&&(r[s]=qc(a,n)):l<=n&&(e.expiredLanes|=a),o&=~a}}function go(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function El(){var e=ui;return ui<<=1,!(ui&4194240)&&(ui=64),e}function Gr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Yt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ne(n),e[n]=t}function Zc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Ne(t),o=1<<r;n[r]=0,i[r]=-1,e[r]=-1,t&=~o}}function es(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-Ne(t),r=1<<i;r&n|e[i]&n&&(e[i]|=n),t&=~r}}var R=0;function Pl(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ml,ns,Dl,Tl,Ll,po=!1,gi=[],an=null,ln=null,un=null,It=new Map,At=new Map,tn=[],eg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ks(e,n){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":It.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(n.pointerId)}}function ft(e,n,t,i,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},n!==null&&(n=ei(n),n!==null&&ns(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function ng(e,n,t,i,r){switch(n){case"focusin":return an=ft(an,e,n,t,i,r),!0;case"dragenter":return ln=ft(ln,e,n,t,i,r),!0;case"mouseover":return un=ft(un,e,n,t,i,r),!0;case"pointerover":var o=r.pointerId;return It.set(o,ft(It.get(o)||null,e,n,t,i,r)),!0;case"gotpointercapture":return o=r.pointerId,At.set(o,ft(At.get(o)||null,e,n,t,i,r)),!0}return!1}function Nl(e){var n=Gn(e.target);if(n!==null){var t=In(n);if(t!==null){if(n=t.tag,n===13){if(n=bl(t),n!==null){e.blockedOn=n,Ll(e.priority,function(){Dl(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Si(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=mo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);ao=i,t.target.dispatchEvent(i),ao=null}else return n=ei(t),n!==null&&ns(n),e.blockedOn=t,!1;n.shift()}return!0}function Xs(e,n,t){Si(e)&&t.delete(n)}function tg(){po=!1,an!==null&&Si(an)&&(an=null),ln!==null&&Si(ln)&&(ln=null),un!==null&&Si(un)&&(un=null),It.forEach(Xs),At.forEach(Xs)}function ht(e,n){e.blockedOn===n&&(e.blockedOn=null,po||(po=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,tg)))}function zt(e){function n(r){return ht(r,e)}if(0<gi.length){ht(gi[0],e);for(var t=1;t<gi.length;t++){var i=gi[t];i.blockedOn===e&&(i.blockedOn=null)}}for(an!==null&&ht(an,e),ln!==null&&ht(ln,e),un!==null&&ht(un,e),It.forEach(n),At.forEach(n),t=0;t<tn.length;t++)i=tn[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<tn.length&&(t=tn[0],t.blockedOn===null);)Nl(t),t.blockedOn===null&&tn.shift()}var et=Ye.ReactCurrentBatchConfig,zi=!0;function ig(e,n,t,i){var r=R,o=et.transition;et.transition=null;try{R=1,ts(e,n,t,i)}finally{R=r,et.transition=o}}function rg(e,n,t,i){var r=R,o=et.transition;et.transition=null;try{R=4,ts(e,n,t,i)}finally{R=r,et.transition=o}}function ts(e,n,t,i){if(zi){var r=mo(e,n,t,i);if(r===null)Rr(e,n,i,Oi,t),Ks(e,i);else if(ng(r,e,n,t,i))i.stopPropagation();else if(Ks(e,i),n&4&&-1<eg.indexOf(e)){for(;r!==null;){var o=ei(r);if(o!==null&&Ml(o),o=mo(e,n,t,i),o===null&&Rr(e,n,i,Oi,t),o===r)break;r=o}r!==null&&i.stopPropagation()}else Rr(e,n,i,null,t)}}var Oi=null;function mo(e,n,t,i){if(Oi=null,e=Yo(i),e=Gn(e),e!==null)if(n=In(e),n===null)e=null;else if(t=n.tag,t===13){if(e=bl(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Oi=e,null}function Rl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hc()){case Zo:return 1;case Cl:return 4;case Ii:case $c:return 16;case jl:return 536870912;default:return 16}default:return 16}}var on=null,is=null,Bi=null;function Il(){if(Bi)return Bi;var e,n=is,t=n.length,i,r="value"in on?on.value:on.textContent,o=r.length;for(e=0;e<t&&n[e]===r[e];e++);var s=t-e;for(i=1;i<=s&&n[t-i]===r[o-i];i++);return Bi=r.slice(e,1<i?1-i:void 0)}function Gi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function qs(){return!1}function Se(e){function n(t,i,r,o,s){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?di:qs,this.isPropagationStopped=qs,this}return $(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),n}var gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rs=Se(gt),Zt=$({},gt,{view:0,detail:0}),og=Se(Zt),Cr,jr,yt,sr=$({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yt&&(yt&&e.type==="mousemove"?(Cr=e.screenX-yt.screenX,jr=e.screenY-yt.screenY):jr=Cr=0,yt=e),Cr)},movementY:function(e){return"movementY"in e?e.movementY:jr}}),Ys=Se(sr),sg=$({},sr,{dataTransfer:0}),ag=Se(sg),lg=$({},Zt,{relatedTarget:0}),Er=Se(lg),ug=$({},gt,{animationName:0,elapsedTime:0,pseudoElement:0}),cg=Se(ug),gg=$({},gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dg=Se(gg),pg=$({},gt,{data:0}),Zs=Se(pg),mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hg[e])?!!n[e]:!1}function os(){return yg}var vg=$({},Zt,{key:function(e){if(e.key){var n=mg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:os,charCode:function(e){return e.type==="keypress"?Gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kg=Se(vg),_g=$({},sr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ea=Se(_g),wg=$({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:os}),xg=Se(wg),bg=$({},gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sg=Se(bg),Bg=$({},sr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gg=Se(Bg),Cg=[9,13,27,32],ss=Qe&&"CompositionEvent"in window,Ct=null;Qe&&"documentMode"in document&&(Ct=document.documentMode);var jg=Qe&&"TextEvent"in window&&!Ct,Al=Qe&&(!ss||Ct&&8<Ct&&11>=Ct),na=" ",ta=!1;function zl(e,n){switch(e){case"keyup":return Cg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ol(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function Eg(e,n){switch(e){case"compositionend":return Ol(n);case"keypress":return n.which!==32?null:(ta=!0,na);case"textInput":return e=n.data,e===na&&ta?null:e;default:return null}}function Pg(e,n){if(Fn)return e==="compositionend"||!ss&&zl(e,n)?(e=Il(),Bi=is=on=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Al&&n.locale!=="ko"?null:n.data;default:return null}}var Mg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ia(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Mg[e.type]:n==="textarea"}function Fl(e,n,t,i){vl(i),n=Fi(n,"onChange"),0<n.length&&(t=new rs("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var jt=null,Ot=null;function Dg(e){Yl(e,0)}function ar(e){var n=Wn(e);if(gl(n))return e}function Tg(e,n){if(e==="change")return n}var Vl=!1;if(Qe){var Pr;if(Qe){var Mr="oninput"in document;if(!Mr){var ra=document.createElement("div");ra.setAttribute("oninput","return;"),Mr=typeof ra.oninput=="function"}Pr=Mr}else Pr=!1;Vl=Pr&&(!document.documentMode||9<document.documentMode)}function oa(){jt&&(jt.detachEvent("onpropertychange",Ul),Ot=jt=null)}function Ul(e){if(e.propertyName==="value"&&ar(Ot)){var n=[];Fl(n,Ot,e,Yo(e)),xl(Dg,n)}}function Lg(e,n,t){e==="focusin"?(oa(),jt=n,Ot=t,jt.attachEvent("onpropertychange",Ul)):e==="focusout"&&oa()}function Ng(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ar(Ot)}function Rg(e,n){if(e==="click")return ar(n)}function Ig(e,n){if(e==="input"||e==="change")return ar(n)}function Ag(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ie=typeof Object.is=="function"?Object.is:Ag;function Ft(e,n){if(Ie(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Kr.call(n,r)||!Ie(e[r],n[r]))return!1}return!0}function sa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function aa(e,n){var t=sa(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=sa(t)}}function Wl(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wl(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hl(){for(var e=window,n=Li();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Li(e.document)}return n}function as(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function zg(e){var n=Hl(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Wl(t.ownerDocument.documentElement,t)){if(i!==null&&as(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!e.extend&&o>i&&(r=i,i=o,o=r),r=aa(t,o);var s=aa(t,i);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),o>i?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Og=Qe&&"documentMode"in document&&11>=document.documentMode,Vn=null,fo=null,Et=null,ho=!1;function la(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ho||Vn==null||Vn!==Li(i)||(i=Vn,"selectionStart"in i&&as(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Et&&Ft(Et,i)||(Et=i,i=Fi(fo,"onSelect"),0<i.length&&(n=new rs("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=Vn)))}function pi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Un={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},Dr={},$l={};Qe&&($l=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function lr(e){if(Dr[e])return Dr[e];if(!Un[e])return e;var n=Un[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in $l)return Dr[e]=n[t];return e}var Jl=lr("animationend"),Ql=lr("animationiteration"),Kl=lr("animationstart"),Xl=lr("transitionend"),ql=new Map,ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,n){ql.set(e,n),Rn(n,[e])}for(var Tr=0;Tr<ua.length;Tr++){var Lr=ua[Tr],Fg=Lr.toLowerCase(),Vg=Lr[0].toUpperCase()+Lr.slice(1);yn(Fg,"on"+Vg)}yn(Jl,"onAnimationEnd");yn(Ql,"onAnimationIteration");yn(Kl,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(Xl,"onTransitionEnd");it("onMouseEnter",["mouseout","mouseover"]);it("onMouseLeave",["mouseout","mouseover"]);it("onPointerEnter",["pointerout","pointerover"]);it("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var St="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ug=new Set("cancel close invalid load scroll toggle".split(" ").concat(St));function ca(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,Fc(i,n,void 0,e),e.currentTarget=null}function Yl(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],r=i.event;i=i.listeners;e:{var o=void 0;if(n)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;ca(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;ca(r,a,c),o=l}}}if(Ri)throw e=co,Ri=!1,co=null,e}function O(e,n){var t=n[wo];t===void 0&&(t=n[wo]=new Set);var i=e+"__bubble";t.has(i)||(Zl(n,e,2,!1),t.add(i))}function Nr(e,n,t){var i=0;n&&(i|=4),Zl(t,e,i,n)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Vt(e){if(!e[mi]){e[mi]=!0,sl.forEach(function(t){t!=="selectionchange"&&(Ug.has(t)||Nr(t,!1,e),Nr(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[mi]||(n[mi]=!0,Nr("selectionchange",!1,n))}}function Zl(e,n,t,i){switch(Rl(n)){case 1:var r=ig;break;case 4:r=rg;break;default:r=ts}t=r.bind(null,n,t,e),r=void 0,!uo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Rr(e,n,t,i,r){var o=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Gn(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}xl(function(){var c=o,f=Yo(t),m=[];e:{var p=ql.get(e);if(p!==void 0){var v=rs,k=e;switch(e){case"keypress":if(Gi(t)===0)break e;case"keydown":case"keyup":v=kg;break;case"focusin":k="focus",v=Er;break;case"focusout":k="blur",v=Er;break;case"beforeblur":case"afterblur":v=Er;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=xg;break;case Jl:case Ql:case Kl:v=cg;break;case Xl:v=Sg;break;case"scroll":v=og;break;case"wheel":v=Gg;break;case"copy":case"cut":case"paste":v=dg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ea}var x=(n&4)!==0,I=!x&&e==="scroll",g=x?p!==null?p+"Capture":null:p;x=[];for(var u=c,d;u!==null;){d=u;var h=d.stateNode;if(d.tag===5&&h!==null&&(d=h,g!==null&&(h=Rt(u,g),h!=null&&x.push(Ut(u,h,d)))),I)break;u=u.return}0<x.length&&(p=new v(p,k,null,t,f),m.push({event:p,listeners:x}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&t!==ao&&(k=t.relatedTarget||t.fromElement)&&(Gn(k)||k[Ke]))break e;if((v||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,v?(k=t.relatedTarget||t.toElement,v=c,k=k?Gn(k):null,k!==null&&(I=In(k),k!==I||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=c),v!==k)){if(x=Ys,h="onMouseLeave",g="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(x=ea,h="onPointerLeave",g="onPointerEnter",u="pointer"),I=v==null?p:Wn(v),d=k==null?p:Wn(k),p=new x(h,u+"leave",v,t,f),p.target=I,p.relatedTarget=d,h=null,Gn(f)===c&&(x=new x(g,u+"enter",k,t,f),x.target=d,x.relatedTarget=I,h=x),I=h,v&&k)n:{for(x=v,g=k,u=0,d=x;d;d=An(d))u++;for(d=0,h=g;h;h=An(h))d++;for(;0<u-d;)x=An(x),u--;for(;0<d-u;)g=An(g),d--;for(;u--;){if(x===g||g!==null&&x===g.alternate)break n;x=An(x),g=An(g)}x=null}else x=null;v!==null&&ga(m,p,v,x,!1),k!==null&&I!==null&&ga(m,I,k,x,!0)}}e:{if(p=c?Wn(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var _=Tg;else if(ia(p))if(Vl)_=Ig;else{_=Ng;var S=Lg}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=Rg);if(_&&(_=_(e,c))){Fl(m,_,t,f);break e}S&&S(e,p,c),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&to(p,"number",p.value)}switch(S=c?Wn(c):window,e){case"focusin":(ia(S)||S.contentEditable==="true")&&(Vn=S,fo=c,Et=null);break;case"focusout":Et=fo=Vn=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,la(m,t,f);break;case"selectionchange":if(Og)break;case"keydown":case"keyup":la(m,t,f)}var B;if(ss)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Fn?zl(e,t)&&(G="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(G="onCompositionStart");G&&(Al&&t.locale!=="ko"&&(Fn||G!=="onCompositionStart"?G==="onCompositionEnd"&&Fn&&(B=Il()):(on=f,is="value"in on?on.value:on.textContent,Fn=!0)),S=Fi(c,G),0<S.length&&(G=new Zs(G,e,null,t,f),m.push({event:G,listeners:S}),B?G.data=B:(B=Ol(t),B!==null&&(G.data=B)))),(B=jg?Eg(e,t):Pg(e,t))&&(c=Fi(c,"onBeforeInput"),0<c.length&&(f=new Zs("onBeforeInput","beforeinput",null,t,f),m.push({event:f,listeners:c}),f.data=B))}Yl(m,n)})}function Ut(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Fi(e,n){for(var t=n+"Capture",i=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Rt(e,t),o!=null&&i.unshift(Ut(e,o,r)),o=Rt(e,n),o!=null&&i.push(Ut(e,o,r))),e=e.return}return i}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ga(e,n,t,i,r){for(var o=n._reactName,s=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Rt(t,o),l!=null&&s.unshift(Ut(t,l,a))):r||(l=Rt(t,o),l!=null&&s.push(Ut(t,l,a)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Wg=/\r\n?/g,Hg=/\u0000|\uFFFD/g;function da(e){return(typeof e=="string"?e:""+e).replace(Wg,`
`).replace(Hg,"")}function fi(e,n,t){if(n=da(n),da(e)!==n&&t)throw Error(y(425))}function Vi(){}var yo=null,vo=null;function ko(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var _o=typeof setTimeout=="function"?setTimeout:void 0,$g=typeof clearTimeout=="function"?clearTimeout:void 0,pa=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof pa<"u"?function(e){return pa.resolve(null).then(e).catch(Qg)}:_o;function Qg(e){setTimeout(function(){throw e})}function Ir(e,n){var t=n,i=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){e.removeChild(r),zt(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);zt(n)}function cn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ma(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var dt=Math.random().toString(36).slice(2),Oe="__reactFiber$"+dt,Wt="__reactProps$"+dt,Ke="__reactContainer$"+dt,wo="__reactEvents$"+dt,Kg="__reactListeners$"+dt,Xg="__reactHandles$"+dt;function Gn(e){var n=e[Oe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ke]||t[Oe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ma(e);e!==null;){if(t=e[Oe])return t;e=ma(e)}return n}e=t,t=e.parentNode}return null}function ei(e){return e=e[Oe]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function ur(e){return e[Wt]||null}var xo=[],Hn=-1;function vn(e){return{current:e}}function F(e){0>Hn||(e.current=xo[Hn],xo[Hn]=null,Hn--)}function z(e,n){Hn++,xo[Hn]=e.current,e.current=n}var hn={},le=vn(hn),fe=vn(!1),Mn=hn;function rt(e,n){var t=e.type.contextTypes;if(!t)return hn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in t)r[o]=n[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function he(e){return e=e.childContextTypes,e!=null}function Ui(){F(fe),F(le)}function fa(e,n,t){if(le.current!==hn)throw Error(y(168));z(le,n),z(fe,t)}function eu(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in n))throw Error(y(108,Lc(e)||"Unknown",r));return $({},t,i)}function Wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,Mn=le.current,z(le,e),z(fe,fe.current),!0}function ha(e,n,t){var i=e.stateNode;if(!i)throw Error(y(169));t?(e=eu(e,n,Mn),i.__reactInternalMemoizedMergedChildContext=e,F(fe),F(le),z(le,e)):F(fe),z(fe,t)}var We=null,cr=!1,Ar=!1;function nu(e){We===null?We=[e]:We.push(e)}function qg(e){cr=!0,nu(e)}function kn(){if(!Ar&&We!==null){Ar=!0;var e=0,n=R;try{var t=We;for(R=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}We=null,cr=!1}catch(r){throw We!==null&&(We=We.slice(e+1)),Gl(Zo,kn),r}finally{R=n,Ar=!1}}return null}var $n=[],Jn=0,Hi=null,$i=0,Be=[],Ge=0,Dn=null,He=1,$e="";function Sn(e,n){$n[Jn++]=$i,$n[Jn++]=Hi,Hi=e,$i=n}function tu(e,n,t){Be[Ge++]=He,Be[Ge++]=$e,Be[Ge++]=Dn,Dn=e;var i=He;e=$e;var r=32-Ne(i)-1;i&=~(1<<r),t+=1;var o=32-Ne(n)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,He=1<<32-Ne(n)+r|t<<r|i,$e=o+e}else He=1<<o|t<<r|i,$e=e}function ls(e){e.return!==null&&(Sn(e,1),tu(e,1,0))}function us(e){for(;e===Hi;)Hi=$n[--Jn],$n[Jn]=null,$i=$n[--Jn],$n[Jn]=null;for(;e===Dn;)Dn=Be[--Ge],Be[Ge]=null,$e=Be[--Ge],Be[Ge]=null,He=Be[--Ge],Be[Ge]=null}var we=null,_e=null,V=!1,Le=null;function iu(e,n){var t=Ce(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ya(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,we=e,_e=cn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,we=e,_e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Dn!==null?{id:He,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ce(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,we=e,_e=null,!0):!1;default:return!1}}function bo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(V){var n=_e;if(n){var t=n;if(!ya(e,n)){if(bo(e))throw Error(y(418));n=cn(t.nextSibling);var i=we;n&&ya(e,n)?iu(i,t):(e.flags=e.flags&-4097|2,V=!1,we=e)}}else{if(bo(e))throw Error(y(418));e.flags=e.flags&-4097|2,V=!1,we=e}}}function va(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function hi(e){if(e!==we)return!1;if(!V)return va(e),V=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ko(e.type,e.memoizedProps)),n&&(n=_e)){if(bo(e))throw ru(),Error(y(418));for(;n;)iu(e,n),n=cn(n.nextSibling)}if(va(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){_e=cn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}_e=null}}else _e=we?cn(e.stateNode.nextSibling):null;return!0}function ru(){for(var e=_e;e;)e=cn(e.nextSibling)}function ot(){_e=we=null,V=!1}function cs(e){Le===null?Le=[e]:Le.push(e)}var Yg=Ye.ReactCurrentBatchConfig;function De(e,n){if(e&&e.defaultProps){n=$({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Ji=vn(null),Qi=null,Qn=null,gs=null;function ds(){gs=Qn=Qi=null}function ps(e){var n=Ji.current;F(Ji),e._currentValue=n}function Bo(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function nt(e,n){Qi=e,gs=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(me=!0),e.firstContext=null)}function Ee(e){var n=e._currentValue;if(gs!==e)if(e={context:e,memoizedValue:n,next:null},Qn===null){if(Qi===null)throw Error(y(308));Qn=e,Qi.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return n}var Cn=null;function ms(e){Cn===null?Cn=[e]:Cn.push(e)}function ou(e,n,t,i){var r=n.interleaved;return r===null?(t.next=t,ms(n)):(t.next=r.next,r.next=t),n.interleaved=t,Xe(e,i)}function Xe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var nn=!1;function fs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function su(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function gn(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,N&2){var r=i.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n,Xe(e,t)}return r=i.interleaved,r===null?(n.next=n,ms(i)):(n.next=r.next,r.next=n),i.interleaved=n,Xe(e,t)}function Ci(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,es(e,t)}}function ka(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?r=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?r=o=n:o=o.next=n}else r=o=n;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ki(e,n,t,i){var r=e.updateQueue;nn=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(o!==null){var m=r.baseState;s=0,f=c=l=null,a=o;do{var p=a.lane,v=a.eventTime;if((i&p)===p){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,x=a;switch(p=n,v=t,x.tag){case 1:if(k=x.payload,typeof k=="function"){m=k.call(v,m,p);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,p=typeof k=="function"?k.call(v,m,p):k,p==null)break e;m=$({},m,p);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=v,l=m):f=f.next=v,s|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(f===null&&(l=m),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,n=r.shared.interleaved,n!==null){r=n;do s|=r.lane,r=r.next;while(r!==n)}else o===null&&(r.shared.lanes=0);Ln|=s,e.lanes=s,e.memoizedState=m}}function _a(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(y(191,r));r.call(i)}}}var au=new ol.Component().refs;function Go(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:$({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var gr={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=ce(),r=pn(e),o=Je(i,r);o.payload=n,t!=null&&(o.callback=t),n=gn(e,o,r),n!==null&&(Re(n,e,r,i),Ci(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=ce(),r=pn(e),o=Je(i,r);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=gn(e,o,r),n!==null&&(Re(n,e,r,i),Ci(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ce(),i=pn(e),r=Je(t,i);r.tag=2,n!=null&&(r.callback=n),n=gn(e,r,i),n!==null&&(Re(n,e,i,t),Ci(n,e,i))}};function wa(e,n,t,i,r,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,s):n.prototype&&n.prototype.isPureReactComponent?!Ft(t,i)||!Ft(r,o):!0}function lu(e,n,t){var i=!1,r=hn,o=n.contextType;return typeof o=="object"&&o!==null?o=Ee(o):(r=he(n)?Mn:le.current,i=n.contextTypes,o=(i=i!=null)?rt(e,r):hn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=gr,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),n}function xa(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&gr.enqueueReplaceState(n,n.state,null)}function Co(e,n,t,i){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs=au,fs(e);var o=n.contextType;typeof o=="object"&&o!==null?r.context=Ee(o):(o=he(n)?Mn:le.current,r.context=rt(e,o)),r.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Go(e,n,o,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&gr.enqueueReplaceState(r,r.state,null),Ki(e,t,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function vt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(y(309));var i=t.stateNode}if(!i)throw Error(y(147,e));var r=i,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var a=r.refs;a===au&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(y(284));if(!t._owner)throw Error(y(290,e))}return e}function yi(e,n){throw e=Object.prototype.toString.call(n),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ba(e){var n=e._init;return n(e._payload)}function uu(e){function n(g,u){if(e){var d=g.deletions;d===null?(g.deletions=[u],g.flags|=16):d.push(u)}}function t(g,u){if(!e)return null;for(;u!==null;)n(g,u),u=u.sibling;return null}function i(g,u){for(g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function r(g,u){return g=mn(g,u),g.index=0,g.sibling=null,g}function o(g,u,d){return g.index=d,e?(d=g.alternate,d!==null?(d=d.index,d<u?(g.flags|=2,u):d):(g.flags|=2,u)):(g.flags|=1048576,u)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,u,d,h){return u===null||u.tag!==6?(u=Hr(d,g.mode,h),u.return=g,u):(u=r(u,d),u.return=g,u)}function l(g,u,d,h){var _=d.type;return _===On?f(g,u,d.props.children,h,d.key):u!==null&&(u.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===en&&ba(_)===u.type)?(h=r(u,d.props),h.ref=vt(g,u,d),h.return=g,h):(h=Ti(d.type,d.key,d.props,null,g.mode,h),h.ref=vt(g,u,d),h.return=g,h)}function c(g,u,d,h){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=$r(d,g.mode,h),u.return=g,u):(u=r(u,d.children||[]),u.return=g,u)}function f(g,u,d,h,_){return u===null||u.tag!==7?(u=Pn(d,g.mode,h,_),u.return=g,u):(u=r(u,d),u.return=g,u)}function m(g,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Hr(""+u,g.mode,d),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case si:return d=Ti(u.type,u.key,u.props,null,g.mode,d),d.ref=vt(g,null,u),d.return=g,d;case zn:return u=$r(u,g.mode,d),u.return=g,u;case en:var h=u._init;return m(g,h(u._payload),d)}if(xt(u)||pt(u))return u=Pn(u,g.mode,d,null),u.return=g,u;yi(g,u)}return null}function p(g,u,d,h){var _=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return _!==null?null:a(g,u,""+d,h);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case si:return d.key===_?l(g,u,d,h):null;case zn:return d.key===_?c(g,u,d,h):null;case en:return _=d._init,p(g,u,_(d._payload),h)}if(xt(d)||pt(d))return _!==null?null:f(g,u,d,h,null);yi(g,d)}return null}function v(g,u,d,h,_){if(typeof h=="string"&&h!==""||typeof h=="number")return g=g.get(d)||null,a(u,g,""+h,_);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case si:return g=g.get(h.key===null?d:h.key)||null,l(u,g,h,_);case zn:return g=g.get(h.key===null?d:h.key)||null,c(u,g,h,_);case en:var S=h._init;return v(g,u,d,S(h._payload),_)}if(xt(h)||pt(h))return g=g.get(d)||null,f(u,g,h,_,null);yi(u,h)}return null}function k(g,u,d,h){for(var _=null,S=null,B=u,G=u=0,U=null;B!==null&&G<d.length;G++){B.index>G?(U=B,B=null):U=B.sibling;var T=p(g,B,d[G],h);if(T===null){B===null&&(B=U);break}e&&B&&T.alternate===null&&n(g,B),u=o(T,u,G),S===null?_=T:S.sibling=T,S=T,B=U}if(G===d.length)return t(g,B),V&&Sn(g,G),_;if(B===null){for(;G<d.length;G++)B=m(g,d[G],h),B!==null&&(u=o(B,u,G),S===null?_=B:S.sibling=B,S=B);return V&&Sn(g,G),_}for(B=i(g,B);G<d.length;G++)U=v(B,g,G,d[G],h),U!==null&&(e&&U.alternate!==null&&B.delete(U.key===null?G:U.key),u=o(U,u,G),S===null?_=U:S.sibling=U,S=U);return e&&B.forEach(function(ve){return n(g,ve)}),V&&Sn(g,G),_}function x(g,u,d,h){var _=pt(d);if(typeof _!="function")throw Error(y(150));if(d=_.call(d),d==null)throw Error(y(151));for(var S=_=null,B=u,G=u=0,U=null,T=d.next();B!==null&&!T.done;G++,T=d.next()){B.index>G?(U=B,B=null):U=B.sibling;var ve=p(g,B,T.value,h);if(ve===null){B===null&&(B=U);break}e&&B&&ve.alternate===null&&n(g,B),u=o(ve,u,G),S===null?_=ve:S.sibling=ve,S=ve,B=U}if(T.done)return t(g,B),V&&Sn(g,G),_;if(B===null){for(;!T.done;G++,T=d.next())T=m(g,T.value,h),T!==null&&(u=o(T,u,G),S===null?_=T:S.sibling=T,S=T);return V&&Sn(g,G),_}for(B=i(g,B);!T.done;G++,T=d.next())T=v(B,g,G,T.value,h),T!==null&&(e&&T.alternate!==null&&B.delete(T.key===null?G:T.key),u=o(T,u,G),S===null?_=T:S.sibling=T,S=T);return e&&B.forEach(function(_n){return n(g,_n)}),V&&Sn(g,G),_}function I(g,u,d,h){if(typeof d=="object"&&d!==null&&d.type===On&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case si:e:{for(var _=d.key,S=u;S!==null;){if(S.key===_){if(_=d.type,_===On){if(S.tag===7){t(g,S.sibling),u=r(S,d.props.children),u.return=g,g=u;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===en&&ba(_)===S.type){t(g,S.sibling),u=r(S,d.props),u.ref=vt(g,S,d),u.return=g,g=u;break e}t(g,S);break}else n(g,S);S=S.sibling}d.type===On?(u=Pn(d.props.children,g.mode,h,d.key),u.return=g,g=u):(h=Ti(d.type,d.key,d.props,null,g.mode,h),h.ref=vt(g,u,d),h.return=g,g=h)}return s(g);case zn:e:{for(S=d.key;u!==null;){if(u.key===S)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){t(g,u.sibling),u=r(u,d.children||[]),u.return=g,g=u;break e}else{t(g,u);break}else n(g,u);u=u.sibling}u=$r(d,g.mode,h),u.return=g,g=u}return s(g);case en:return S=d._init,I(g,u,S(d._payload),h)}if(xt(d))return k(g,u,d,h);if(pt(d))return x(g,u,d,h);yi(g,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(t(g,u.sibling),u=r(u,d),u.return=g,g=u):(t(g,u),u=Hr(d,g.mode,h),u.return=g,g=u),s(g)):t(g,u)}return I}var st=uu(!0),cu=uu(!1),ni={},Ve=vn(ni),Ht=vn(ni),$t=vn(ni);function jn(e){if(e===ni)throw Error(y(174));return e}function hs(e,n){switch(z($t,n),z(Ht,e),z(Ve,ni),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ro(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ro(n,e)}F(Ve),z(Ve,n)}function at(){F(Ve),F(Ht),F($t)}function gu(e){jn($t.current);var n=jn(Ve.current),t=ro(n,e.type);n!==t&&(z(Ht,e),z(Ve,t))}function ys(e){Ht.current===e&&(F(Ve),F(Ht))}var W=vn(0);function Xi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var zr=[];function vs(){for(var e=0;e<zr.length;e++)zr[e]._workInProgressVersionPrimary=null;zr.length=0}var ji=Ye.ReactCurrentDispatcher,Or=Ye.ReactCurrentBatchConfig,Tn=0,H=null,q=null,ee=null,qi=!1,Pt=!1,Jt=0,Zg=0;function oe(){throw Error(y(321))}function ks(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ie(e[t],n[t]))return!1;return!0}function _s(e,n,t,i,r,o){if(Tn=o,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ji.current=e===null||e.memoizedState===null?id:rd,e=t(i,r),Pt){o=0;do{if(Pt=!1,Jt=0,25<=o)throw Error(y(301));o+=1,ee=q=null,n.updateQueue=null,ji.current=od,e=t(i,r)}while(Pt)}if(ji.current=Yi,n=q!==null&&q.next!==null,Tn=0,ee=q=H=null,qi=!1,n)throw Error(y(300));return e}function ws(){var e=Jt!==0;return Jt=0,e}function ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?H.memoizedState=ee=e:ee=ee.next=e,ee}function Pe(){if(q===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var n=ee===null?H.memoizedState:ee.next;if(n!==null)ee=n,q=e;else{if(e===null)throw Error(y(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},ee===null?H.memoizedState=ee=e:ee=ee.next=e}return ee}function Qt(e,n){return typeof n=="function"?n(e):n}function Fr(e){var n=Pe(),t=n.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var i=q,r=i.baseQueue,o=t.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,t.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var f=c.lane;if((Tn&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=m,s=i):l=l.next=m,H.lanes|=f,Ln|=f}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,Ie(i,n.memoizedState)||(me=!0),n.memoizedState=i,n.baseState=s,n.baseQueue=l,t.lastRenderedState=i}if(e=t.interleaved,e!==null){r=e;do o=r.lane,H.lanes|=o,Ln|=o,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Vr(e){var n=Pe(),t=n.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var i=t.dispatch,r=t.pending,o=n.memoizedState;if(r!==null){t.pending=null;var s=r=r.next;do o=e(o,s.action),s=s.next;while(s!==r);Ie(o,n.memoizedState)||(me=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,i]}function du(){}function pu(e,n){var t=H,i=Pe(),r=n(),o=!Ie(i.memoizedState,r);if(o&&(i.memoizedState=r,me=!0),i=i.queue,xs(hu.bind(null,t,i,e),[e]),i.getSnapshot!==n||o||ee!==null&&ee.memoizedState.tag&1){if(t.flags|=2048,Kt(9,fu.bind(null,t,i,r,n),void 0,null),ne===null)throw Error(y(349));Tn&30||mu(t,n,r)}return r}function mu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function fu(e,n,t,i){n.value=t,n.getSnapshot=i,yu(n)&&vu(e)}function hu(e,n,t){return t(function(){yu(n)&&vu(e)})}function yu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ie(e,t)}catch{return!0}}function vu(e){var n=Xe(e,1);n!==null&&Re(n,e,1,-1)}function Sa(e){var n=ze();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},n.queue=e,e=e.dispatch=td.bind(null,H,e),[n.memoizedState,e]}function Kt(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function ku(){return Pe().memoizedState}function Ei(e,n,t,i){var r=ze();H.flags|=e,r.memoizedState=Kt(1|n,t,void 0,i===void 0?null:i)}function dr(e,n,t,i){var r=Pe();i=i===void 0?null:i;var o=void 0;if(q!==null){var s=q.memoizedState;if(o=s.destroy,i!==null&&ks(i,s.deps)){r.memoizedState=Kt(n,t,o,i);return}}H.flags|=e,r.memoizedState=Kt(1|n,t,o,i)}function Ba(e,n){return Ei(8390656,8,e,n)}function xs(e,n){return dr(2048,8,e,n)}function _u(e,n){return dr(4,2,e,n)}function wu(e,n){return dr(4,4,e,n)}function xu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function bu(e,n,t){return t=t!=null?t.concat([e]):null,dr(4,4,xu.bind(null,n,e),t)}function bs(){}function Su(e,n){var t=Pe();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&ks(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function Bu(e,n){var t=Pe();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&ks(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function Gu(e,n,t){return Tn&21?(Ie(t,n)||(t=El(),H.lanes|=t,Ln|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=t)}function ed(e,n){var t=R;R=t!==0&&4>t?t:4,e(!0);var i=Or.transition;Or.transition={};try{e(!1),n()}finally{R=t,Or.transition=i}}function Cu(){return Pe().memoizedState}function nd(e,n,t){var i=pn(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},ju(e))Eu(n,t);else if(t=ou(e,n,t,i),t!==null){var r=ce();Re(t,e,i,r),Pu(t,n,i)}}function td(e,n,t){var i=pn(e),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(ju(e))Eu(n,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,a=o(s,t);if(r.hasEagerState=!0,r.eagerState=a,Ie(a,s)){var l=n.interleaved;l===null?(r.next=r,ms(n)):(r.next=l.next,l.next=r),n.interleaved=r;return}}catch{}finally{}t=ou(e,n,r,i),t!==null&&(r=ce(),Re(t,e,i,r),Pu(t,n,i))}}function ju(e){var n=e.alternate;return e===H||n!==null&&n===H}function Eu(e,n){Pt=qi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Pu(e,n,t){if(t&4194240){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,es(e,t)}}var Yi={readContext:Ee,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},id={readContext:Ee,useCallback:function(e,n){return ze().memoizedState=[e,n===void 0?null:n],e},useContext:Ee,useEffect:Ba,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ei(4194308,4,xu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ei(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ei(4,2,e,n)},useMemo:function(e,n){var t=ze();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=ze();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=nd.bind(null,H,e),[i.memoizedState,e]},useRef:function(e){var n=ze();return e={current:e},n.memoizedState=e},useState:Sa,useDebugValue:bs,useDeferredValue:function(e){return ze().memoizedState=e},useTransition:function(){var e=Sa(!1),n=e[0];return e=ed.bind(null,e[1]),ze().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=H,r=ze();if(V){if(t===void 0)throw Error(y(407));t=t()}else{if(t=n(),ne===null)throw Error(y(349));Tn&30||mu(i,n,t)}r.memoizedState=t;var o={value:t,getSnapshot:n};return r.queue=o,Ba(hu.bind(null,i,o,e),[e]),i.flags|=2048,Kt(9,fu.bind(null,i,o,t,n),void 0,null),t},useId:function(){var e=ze(),n=ne.identifierPrefix;if(V){var t=$e,i=He;t=(i&~(1<<32-Ne(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=Jt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Zg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rd={readContext:Ee,useCallback:Su,useContext:Ee,useEffect:xs,useImperativeHandle:bu,useInsertionEffect:_u,useLayoutEffect:wu,useMemo:Bu,useReducer:Fr,useRef:ku,useState:function(){return Fr(Qt)},useDebugValue:bs,useDeferredValue:function(e){var n=Pe();return Gu(n,q.memoizedState,e)},useTransition:function(){var e=Fr(Qt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:du,useSyncExternalStore:pu,useId:Cu,unstable_isNewReconciler:!1},od={readContext:Ee,useCallback:Su,useContext:Ee,useEffect:xs,useImperativeHandle:bu,useInsertionEffect:_u,useLayoutEffect:wu,useMemo:Bu,useReducer:Vr,useRef:ku,useState:function(){return Vr(Qt)},useDebugValue:bs,useDeferredValue:function(e){var n=Pe();return q===null?n.memoizedState=e:Gu(n,q.memoizedState,e)},useTransition:function(){var e=Vr(Qt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:du,useSyncExternalStore:pu,useId:Cu,unstable_isNewReconciler:!1};function lt(e,n){try{var t="",i=n;do t+=Tc(i),i=i.return;while(i);var r=t}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:r,digest:null}}function Ur(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function jo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var sd=typeof WeakMap=="function"?WeakMap:Map;function Mu(e,n,t){t=Je(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){er||(er=!0,Ao=i),jo(e,n)},t}function Du(e,n,t){t=Je(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;t.payload=function(){return i(r)},t.callback=function(){jo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){jo(e,n),typeof i!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function Ga(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new sd;var r=new Set;i.set(n,r)}else r=i.get(n),r===void 0&&(r=new Set,i.set(n,r));r.has(t)||(r.add(t),e=_d.bind(null,e,n,t),n.then(e,e))}function Ca(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ja(e,n,t,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Je(-1,1),n.tag=2,gn(t,n,1))),t.lanes|=1),e)}var ad=Ye.ReactCurrentOwner,me=!1;function ue(e,n,t,i){n.child=e===null?cu(n,null,t,i):st(n,e.child,t,i)}function Ea(e,n,t,i,r){t=t.render;var o=n.ref;return nt(n,r),i=_s(e,n,t,i,o,r),t=ws(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,qe(e,n,r)):(V&&t&&ls(n),n.flags|=1,ue(e,n,i,r),n.child)}function Pa(e,n,t,i,r){if(e===null){var o=t.type;return typeof o=="function"&&!Ms(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Tu(e,n,o,i,r)):(e=Ti(t.type,null,i,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&r)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:Ft,t(s,i)&&e.ref===n.ref)return qe(e,n,r)}return n.flags|=1,e=mn(o,i),e.ref=n.ref,e.return=n,n.child=e}function Tu(e,n,t,i,r){if(e!==null){var o=e.memoizedProps;if(Ft(o,i)&&e.ref===n.ref)if(me=!1,n.pendingProps=i=o,(e.lanes&r)!==0)e.flags&131072&&(me=!0);else return n.lanes=e.lanes,qe(e,n,r)}return Eo(e,n,t,i,r)}function Lu(e,n,t){var i=n.pendingProps,r=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Xn,ke),ke|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,z(Xn,ke),ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:t,z(Xn,ke),ke|=i}else o!==null?(i=o.baseLanes|t,n.memoizedState=null):i=t,z(Xn,ke),ke|=i;return ue(e,n,r,t),n.child}function Nu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Eo(e,n,t,i,r){var o=he(t)?Mn:le.current;return o=rt(n,o),nt(n,r),t=_s(e,n,t,i,o,r),i=ws(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,qe(e,n,r)):(V&&i&&ls(n),n.flags|=1,ue(e,n,t,r),n.child)}function Ma(e,n,t,i,r){if(he(t)){var o=!0;Wi(n)}else o=!1;if(nt(n,r),n.stateNode===null)Pi(e,n),lu(n,t,i),Co(n,t,i,r),i=!0;else if(e===null){var s=n.stateNode,a=n.memoizedProps;s.props=a;var l=s.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=he(t)?Mn:le.current,c=rt(n,c));var f=t.getDerivedStateFromProps,m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&xa(n,s,i,c),nn=!1;var p=n.memoizedState;s.state=p,Ki(n,i,s,r),l=n.memoizedState,a!==i||p!==l||fe.current||nn?(typeof f=="function"&&(Go(n,t,f,i),l=n.memoizedState),(a=nn||wa(n,t,a,i,p,l,c))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{s=n.stateNode,su(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:De(n.type,a),s.props=c,m=n.pendingProps,p=s.context,l=t.contextType,typeof l=="object"&&l!==null?l=Ee(l):(l=he(t)?Mn:le.current,l=rt(n,l));var v=t.getDerivedStateFromProps;(f=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||p!==l)&&xa(n,s,i,l),nn=!1,p=n.memoizedState,s.state=p,Ki(n,i,s,r);var k=n.memoizedState;a!==m||p!==k||fe.current||nn?(typeof v=="function"&&(Go(n,t,v,i),k=n.memoizedState),(c=nn||wa(n,t,c,i,p,k,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,k,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,k,l)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=k),s.props=i,s.state=k,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),i=!1)}return Po(e,n,t,i,o,r)}function Po(e,n,t,i,r,o){Nu(e,n);var s=(n.flags&128)!==0;if(!i&&!s)return r&&ha(n,t,!1),qe(e,n,o);i=n.stateNode,ad.current=n;var a=s&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&s?(n.child=st(n,e.child,null,o),n.child=st(n,null,a,o)):ue(e,n,a,o),n.memoizedState=i.state,r&&ha(n,t,!0),n.child}function Ru(e){var n=e.stateNode;n.pendingContext?fa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&fa(e,n.context,!1),hs(e,n.containerInfo)}function Da(e,n,t,i,r){return ot(),cs(r),n.flags|=256,ue(e,n,t,i),n.child}var Mo={dehydrated:null,treeContext:null,retryLane:0};function Do(e){return{baseLanes:e,cachePool:null,transitions:null}}function Iu(e,n,t){var i=n.pendingProps,r=W.current,o=!1,s=(n.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),z(W,r&1),e===null)return So(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=i.children,e=i.fallback,o?(i=n.mode,o=n.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=fr(s,i,0,null),e=Pn(e,i,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Do(t),n.memoizedState=Mo,e):Ss(n,s));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ld(e,n,s,i,a,r,t);if(o){o=i.fallback,s=n.mode,r=e.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&n.child!==r?(i=n.child,i.childLanes=0,i.pendingProps=l,n.deletions=null):(i=mn(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=mn(a,o):(o=Pn(o,s,t,null),o.flags|=2),o.return=n,i.return=n,i.sibling=o,n.child=i,i=o,o=n.child,s=e.child.memoizedState,s=s===null?Do(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=Mo,i}return o=e.child,e=o.sibling,i=mn(o,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function Ss(e,n){return n=fr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function vi(e,n,t,i){return i!==null&&cs(i),st(n,e.child,null,t),e=Ss(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ld(e,n,t,i,r,o,s){if(t)return n.flags&256?(n.flags&=-257,i=Ur(Error(y(422))),vi(e,n,s,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=i.fallback,r=n.mode,i=fr({mode:"visible",children:i.children},r,0,null),o=Pn(o,r,s,null),o.flags|=2,i.return=n,o.return=n,i.sibling=o,n.child=i,n.mode&1&&st(n,e.child,null,s),n.child.memoizedState=Do(s),n.memoizedState=Mo,o);if(!(n.mode&1))return vi(e,n,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(y(419)),i=Ur(o,i,void 0),vi(e,n,s,i)}if(a=(s&e.childLanes)!==0,me||a){if(i=ne,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Xe(e,r),Re(i,e,r,-1))}return Ps(),i=Ur(Error(y(421))),vi(e,n,s,i)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=wd.bind(null,e),r._reactRetry=n,null):(e=o.treeContext,_e=cn(r.nextSibling),we=n,V=!0,Le=null,e!==null&&(Be[Ge++]=He,Be[Ge++]=$e,Be[Ge++]=Dn,He=e.id,$e=e.overflow,Dn=n),n=Ss(n,i.children),n.flags|=4096,n)}function Ta(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Bo(e.return,n,t)}function Wr(e,n,t,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=r)}function Au(e,n,t){var i=n.pendingProps,r=i.revealOrder,o=i.tail;if(ue(e,n,i.children,t),i=W.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ta(e,t,n);else if(e.tag===19)Ta(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(z(W,i),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Xi(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Wr(n,!1,r,t,o);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Xi(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Wr(n,!0,t,null,o);break;case"together":Wr(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Pi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function qe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ln|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(y(153));if(n.child!==null){for(e=n.child,t=mn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=mn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ud(e,n,t){switch(n.tag){case 3:Ru(n),ot();break;case 5:gu(n);break;case 1:he(n.type)&&Wi(n);break;case 4:hs(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,r=n.memoizedProps.value;z(Ji,i._currentValue),i._currentValue=r;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(z(W,W.current&1),n.flags|=128,null):t&n.child.childLanes?Iu(e,n,t):(z(W,W.current&1),e=qe(e,n,t),e!==null?e.sibling:null);z(W,W.current&1);break;case 19:if(i=(t&n.childLanes)!==0,e.flags&128){if(i)return Au(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),z(W,W.current),i)break;return null;case 22:case 23:return n.lanes=0,Lu(e,n,t)}return qe(e,n,t)}var zu,To,Ou,Fu;zu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};To=function(){};Ou=function(e,n,t,i){var r=e.memoizedProps;if(r!==i){e=n.stateNode,jn(Ve.current);var o=null;switch(t){case"input":r=eo(e,r),i=eo(e,i),o=[];break;case"select":r=$({},r,{value:void 0}),i=$({},i,{value:void 0}),o=[];break;case"textarea":r=io(e,r),i=io(e,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Vi)}oo(t,i);var s;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Lt.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(t||(t={}),t[s]=l[s])}else t||(o||(o=[]),o.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Lt.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&O("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}t&&(o=o||[]).push("style",t);var c=o;(n.updateQueue=c)&&(n.flags|=4)}};Fu=function(e,n,t,i){t!==i&&(n.flags|=4)};function kt(e,n){if(!V)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function cd(e,n,t){var i=n.pendingProps;switch(us(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return he(n.type)&&Ui(),se(n),null;case 3:return i=n.stateNode,at(),F(fe),F(le),vs(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(hi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Le!==null&&(Fo(Le),Le=null))),To(e,n),se(n),null;case 5:ys(n);var r=jn($t.current);if(t=n.type,e!==null&&n.stateNode!=null)Ou(e,n,t,i,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(y(166));return se(n),null}if(e=jn(Ve.current),hi(n)){i=n.stateNode,t=n.type;var o=n.memoizedProps;switch(i[Oe]=n,i[Wt]=o,e=(n.mode&1)!==0,t){case"dialog":O("cancel",i),O("close",i);break;case"iframe":case"object":case"embed":O("load",i);break;case"video":case"audio":for(r=0;r<St.length;r++)O(St[r],i);break;case"source":O("error",i);break;case"img":case"image":case"link":O("error",i),O("load",i);break;case"details":O("toggle",i);break;case"input":Vs(i,o),O("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},O("invalid",i);break;case"textarea":Ws(i,o),O("invalid",i)}oo(t,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&fi(i.textContent,a,e),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&fi(i.textContent,a,e),r=["children",""+a]):Lt.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&O("scroll",i)}switch(t){case"input":ai(i),Us(i,o,!0);break;case"textarea":ai(i),Hs(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Vi)}i=r,n.updateQueue=i,i!==null&&(n.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ml(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(t,{is:i.is}):(e=s.createElement(t),t==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,t),e[Oe]=n,e[Wt]=i,zu(e,n,!1,!1),n.stateNode=e;e:{switch(s=so(t,i),t){case"dialog":O("cancel",e),O("close",e),r=i;break;case"iframe":case"object":case"embed":O("load",e),r=i;break;case"video":case"audio":for(r=0;r<St.length;r++)O(St[r],e);r=i;break;case"source":O("error",e),r=i;break;case"img":case"image":case"link":O("error",e),O("load",e),r=i;break;case"details":O("toggle",e),r=i;break;case"input":Vs(e,i),r=eo(e,i),O("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=$({},i,{value:void 0}),O("invalid",e);break;case"textarea":Ws(e,i),r=io(e,i),O("invalid",e);break;default:r=i}oo(t,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?yl(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fl(e,l)):o==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Nt(e,l):typeof l=="number"&&Nt(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Lt.hasOwnProperty(o)?l!=null&&o==="onScroll"&&O("scroll",e):l!=null&&Qo(e,o,l,s))}switch(t){case"input":ai(e),Us(e,i,!1);break;case"textarea":ai(e),Hs(e);break;case"option":i.value!=null&&e.setAttribute("value",""+fn(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?qn(e,!!i.multiple,o,!1):i.defaultValue!=null&&qn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Vi)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Fu(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(y(166));if(t=jn($t.current),jn(Ve.current),hi(n)){if(i=n.stateNode,t=n.memoizedProps,i[Oe]=n,(o=i.nodeValue!==t)&&(e=we,e!==null))switch(e.tag){case 3:fi(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fi(i.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Oe]=n,n.stateNode=i}return se(n),null;case 13:if(F(W),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&_e!==null&&n.mode&1&&!(n.flags&128))ru(),ot(),n.flags|=98560,o=!1;else if(o=hi(n),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[Oe]=n}else ot(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),o=!1}else Le!==null&&(Fo(Le),Le=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||W.current&1?Y===0&&(Y=3):Ps())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return at(),To(e,n),e===null&&Vt(n.stateNode.containerInfo),se(n),null;case 10:return ps(n.type._context),se(n),null;case 17:return he(n.type)&&Ui(),se(n),null;case 19:if(F(W),o=n.memoizedState,o===null)return se(n),null;if(i=(n.flags&128)!==0,s=o.rendering,s===null)if(i)kt(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=Xi(e),s!==null){for(n.flags|=128,kt(o,!1),i=s.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)o=t,e=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return z(W,W.current&1|2),n.child}e=e.sibling}o.tail!==null&&K()>ut&&(n.flags|=128,i=!0,kt(o,!1),n.lanes=4194304)}else{if(!i)if(e=Xi(s),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),kt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!V)return se(n),null}else 2*K()-o.renderingStartTime>ut&&t!==1073741824&&(n.flags|=128,i=!0,kt(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=K(),n.sibling=null,t=W.current,z(W,i?t&1|2:t&1),n):(se(n),null);case 22:case 23:return Es(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?ke&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(y(156,n.tag))}function gd(e,n){switch(us(n),n.tag){case 1:return he(n.type)&&Ui(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return at(),F(fe),F(le),vs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ys(n),null;case 13:if(F(W),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(y(340));ot()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F(W),null;case 4:return at(),null;case 10:return ps(n.type._context),null;case 22:case 23:return Es(),null;case 24:return null;default:return null}}var ki=!1,ae=!1,dd=typeof WeakSet=="function"?WeakSet:Set,b=null;function Kn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){J(e,n,i)}else t.current=null}function Lo(e,n,t){try{t()}catch(i){J(e,n,i)}}var La=!1;function pd(e,n){if(yo=zi,e=Hl(),as(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,a=-1,l=-1,c=0,f=0,m=e,p=null;n:for(;;){for(var v;m!==t||r!==0&&m.nodeType!==3||(a=s+r),m!==o||i!==0&&m.nodeType!==3||(l=s+i),m.nodeType===3&&(s+=m.nodeValue.length),(v=m.firstChild)!==null;)p=m,m=v;for(;;){if(m===e)break n;if(p===t&&++c===r&&(a=s),p===o&&++f===i&&(l=s),(v=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=v}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(vo={focusedElem:e,selectionRange:t},zi=!1,b=n;b!==null;)if(n=b,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,b=e;else for(;b!==null;){n=b;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,I=k.memoizedState,g=n.stateNode,u=g.getSnapshotBeforeUpdate(n.elementType===n.type?x:De(n.type,x),I);g.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(h){J(n,n.return,h)}if(e=n.sibling,e!==null){e.return=n.return,b=e;break}b=n.return}return k=La,La=!1,k}function Mt(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&Lo(n,t,o)}r=r.next}while(r!==i)}}function pr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function No(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Vu(e){var n=e.alternate;n!==null&&(e.alternate=null,Vu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Oe],delete n[Wt],delete n[wo],delete n[Kg],delete n[Xg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uu(e){return e.tag===5||e.tag===3||e.tag===4}function Na(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ro(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Vi));else if(i!==4&&(e=e.child,e!==null))for(Ro(e,n,t),e=e.sibling;e!==null;)Ro(e,n,t),e=e.sibling}function Io(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Io(e,n,t),e=e.sibling;e!==null;)Io(e,n,t),e=e.sibling}var te=null,Te=!1;function Ze(e,n,t){for(t=t.child;t!==null;)Wu(e,n,t),t=t.sibling}function Wu(e,n,t){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(or,t)}catch{}switch(t.tag){case 5:ae||Kn(t,n);case 6:var i=te,r=Te;te=null,Ze(e,n,t),te=i,Te=r,te!==null&&(Te?(e=te,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):te.removeChild(t.stateNode));break;case 18:te!==null&&(Te?(e=te,t=t.stateNode,e.nodeType===8?Ir(e.parentNode,t):e.nodeType===1&&Ir(e,t),zt(e)):Ir(te,t.stateNode));break;case 4:i=te,r=Te,te=t.stateNode.containerInfo,Te=!0,Ze(e,n,t),te=i,Te=r;break;case 0:case 11:case 14:case 15:if(!ae&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Lo(t,n,s),r=r.next}while(r!==i)}Ze(e,n,t);break;case 1:if(!ae&&(Kn(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){J(t,n,a)}Ze(e,n,t);break;case 21:Ze(e,n,t);break;case 22:t.mode&1?(ae=(i=ae)||t.memoizedState!==null,Ze(e,n,t),ae=i):Ze(e,n,t);break;default:Ze(e,n,t)}}function Ra(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new dd),n.forEach(function(i){var r=xd.bind(null,e,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Me(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var o=e,s=n,a=s;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Te=!1;break e;case 3:te=a.stateNode.containerInfo,Te=!0;break e;case 4:te=a.stateNode.containerInfo,Te=!0;break e}a=a.return}if(te===null)throw Error(y(160));Wu(o,s,r),te=null,Te=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){J(r,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Hu(n,e),n=n.sibling}function Hu(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(n,e),Ae(e),i&4){try{Mt(3,e,e.return),pr(3,e)}catch(x){J(e,e.return,x)}try{Mt(5,e,e.return)}catch(x){J(e,e.return,x)}}break;case 1:Me(n,e),Ae(e),i&512&&t!==null&&Kn(t,t.return);break;case 5:if(Me(n,e),Ae(e),i&512&&t!==null&&Kn(t,t.return),e.flags&32){var r=e.stateNode;try{Nt(r,"")}catch(x){J(e,e.return,x)}}if(i&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&dl(r,o),so(a,s);var c=so(a,o);for(s=0;s<l.length;s+=2){var f=l[s],m=l[s+1];f==="style"?yl(r,m):f==="dangerouslySetInnerHTML"?fl(r,m):f==="children"?Nt(r,m):Qo(r,f,m,c)}switch(a){case"input":no(r,o);break;case"textarea":pl(r,o);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?qn(r,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?qn(r,!!o.multiple,o.defaultValue,!0):qn(r,!!o.multiple,o.multiple?[]:"",!1))}r[Wt]=o}catch(x){J(e,e.return,x)}}break;case 6:if(Me(n,e),Ae(e),i&4){if(e.stateNode===null)throw Error(y(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(x){J(e,e.return,x)}}break;case 3:if(Me(n,e),Ae(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{zt(n.containerInfo)}catch(x){J(e,e.return,x)}break;case 4:Me(n,e),Ae(e);break;case 13:Me(n,e),Ae(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Cs=K())),i&4&&Ra(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(ae=(c=ae)||f,Me(n,e),ae=c):Me(n,e),Ae(e),i&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(b=e,f=e.child;f!==null;){for(m=b=f;b!==null;){switch(p=b,v=p.child,p.tag){case 0:case 11:case 14:case 15:Mt(4,p,p.return);break;case 1:Kn(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){i=p,t=p.return;try{n=i,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(x){J(i,t,x)}}break;case 5:Kn(p,p.return);break;case 22:if(p.memoizedState!==null){Aa(m);continue}}v!==null?(v.return=p,b=v):Aa(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{r=m.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hl("display",s))}catch(x){J(e,e.return,x)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){J(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Me(n,e),Ae(e),i&4&&Ra(e);break;case 21:break;default:Me(n,e),Ae(e)}}function Ae(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Uu(t)){var i=t;break e}t=t.return}throw Error(y(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Nt(r,""),i.flags&=-33);var o=Na(e);Io(e,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Na(e);Ro(e,a,s);break;default:throw Error(y(161))}}catch(l){J(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function md(e,n,t){b=e,$u(e)}function $u(e,n,t){for(var i=(e.mode&1)!==0;b!==null;){var r=b,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||ki;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||ae;a=ki;var c=ae;if(ki=s,(ae=l)&&!c)for(b=r;b!==null;)s=b,l=s.child,s.tag===22&&s.memoizedState!==null?za(r):l!==null?(l.return=s,b=l):za(r);for(;o!==null;)b=o,$u(o),o=o.sibling;b=r,ki=a,ae=c}Ia(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,b=o):Ia(e)}}function Ia(e){for(;b!==null;){var n=b;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ae||pr(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!ae)if(t===null)i.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:De(n.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&_a(n,o,i);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}_a(n,s,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&zt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ae||n.flags&512&&No(n)}catch(p){J(n,n.return,p)}}if(n===e){b=null;break}if(t=n.sibling,t!==null){t.return=n.return,b=t;break}b=n.return}}function Aa(e){for(;b!==null;){var n=b;if(n===e){b=null;break}var t=n.sibling;if(t!==null){t.return=n.return,b=t;break}b=n.return}}function za(e){for(;b!==null;){var n=b;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{pr(4,n)}catch(l){J(n,t,l)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var r=n.return;try{i.componentDidMount()}catch(l){J(n,r,l)}}var o=n.return;try{No(n)}catch(l){J(n,o,l)}break;case 5:var s=n.return;try{No(n)}catch(l){J(n,s,l)}}}catch(l){J(n,n.return,l)}if(n===e){b=null;break}var a=n.sibling;if(a!==null){a.return=n.return,b=a;break}b=n.return}}var fd=Math.ceil,Zi=Ye.ReactCurrentDispatcher,Bs=Ye.ReactCurrentOwner,je=Ye.ReactCurrentBatchConfig,N=0,ne=null,X=null,ie=0,ke=0,Xn=vn(0),Y=0,Xt=null,Ln=0,mr=0,Gs=0,Dt=null,pe=null,Cs=0,ut=1/0,Ue=null,er=!1,Ao=null,dn=null,_i=!1,sn=null,nr=0,Tt=0,zo=null,Mi=-1,Di=0;function ce(){return N&6?K():Mi!==-1?Mi:Mi=K()}function pn(e){return e.mode&1?N&2&&ie!==0?ie&-ie:Yg.transition!==null?(Di===0&&(Di=El()),Di):(e=R,e!==0||(e=window.event,e=e===void 0?16:Rl(e.type)),e):1}function Re(e,n,t,i){if(50<Tt)throw Tt=0,zo=null,Error(y(185));Yt(e,t,i),(!(N&2)||e!==ne)&&(e===ne&&(!(N&2)&&(mr|=t),Y===4&&rn(e,ie)),ye(e,i),t===1&&N===0&&!(n.mode&1)&&(ut=K()+500,cr&&kn()))}function ye(e,n){var t=e.callbackNode;Yc(e,n);var i=Ai(e,e===ne?ie:0);if(i===0)t!==null&&Qs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&Qs(t),n===1)e.tag===0?qg(Oa.bind(null,e)):nu(Oa.bind(null,e)),Jg(function(){!(N&6)&&kn()}),t=null;else{switch(Pl(i)){case 1:t=Zo;break;case 4:t=Cl;break;case 16:t=Ii;break;case 536870912:t=jl;break;default:t=Ii}t=ec(t,Ju.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ju(e,n){if(Mi=-1,Di=0,N&6)throw Error(y(327));var t=e.callbackNode;if(tt()&&e.callbackNode!==t)return null;var i=Ai(e,e===ne?ie:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=tr(e,i);else{n=i;var r=N;N|=2;var o=Ku();(ne!==e||ie!==n)&&(Ue=null,ut=K()+500,En(e,n));do try{vd();break}catch(a){Qu(e,a)}while(!0);ds(),Zi.current=o,N=r,X!==null?n=0:(ne=null,ie=0,n=Y)}if(n!==0){if(n===2&&(r=go(e),r!==0&&(i=r,n=Oo(e,r))),n===1)throw t=Xt,En(e,0),rn(e,i),ye(e,K()),t;if(n===6)rn(e,i);else{if(r=e.current.alternate,!(i&30)&&!hd(r)&&(n=tr(e,i),n===2&&(o=go(e),o!==0&&(i=o,n=Oo(e,o))),n===1))throw t=Xt,En(e,0),rn(e,i),ye(e,K()),t;switch(e.finishedWork=r,e.finishedLanes=i,n){case 0:case 1:throw Error(y(345));case 2:Bn(e,pe,Ue);break;case 3:if(rn(e,i),(i&130023424)===i&&(n=Cs+500-K(),10<n)){if(Ai(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){ce(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=_o(Bn.bind(null,e,pe,Ue),n);break}Bn(e,pe,Ue);break;case 4:if(rn(e,i),(i&4194240)===i)break;for(n=e.eventTimes,r=-1;0<i;){var s=31-Ne(i);o=1<<s,s=n[s],s>r&&(r=s),i&=~o}if(i=r,i=K()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fd(i/1960))-i,10<i){e.timeoutHandle=_o(Bn.bind(null,e,pe,Ue),i);break}Bn(e,pe,Ue);break;case 5:Bn(e,pe,Ue);break;default:throw Error(y(329))}}}return ye(e,K()),e.callbackNode===t?Ju.bind(null,e):null}function Oo(e,n){var t=Dt;return e.current.memoizedState.isDehydrated&&(En(e,n).flags|=256),e=tr(e,n),e!==2&&(n=pe,pe=t,n!==null&&Fo(n)),e}function Fo(e){pe===null?pe=e:pe.push.apply(pe,e)}function hd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],o=r.getSnapshot;r=r.value;try{if(!Ie(o(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rn(e,n){for(n&=~Gs,n&=~mr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ne(n),i=1<<t;e[t]=-1,n&=~i}}function Oa(e){if(N&6)throw Error(y(327));tt();var n=Ai(e,0);if(!(n&1))return ye(e,K()),null;var t=tr(e,n);if(e.tag!==0&&t===2){var i=go(e);i!==0&&(n=i,t=Oo(e,i))}if(t===1)throw t=Xt,En(e,0),rn(e,n),ye(e,K()),t;if(t===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Bn(e,pe,Ue),ye(e,K()),null}function js(e,n){var t=N;N|=1;try{return e(n)}finally{N=t,N===0&&(ut=K()+500,cr&&kn())}}function Nn(e){sn!==null&&sn.tag===0&&!(N&6)&&tt();var n=N;N|=1;var t=je.transition,i=R;try{if(je.transition=null,R=1,e)return e()}finally{R=i,je.transition=t,N=n,!(N&6)&&kn()}}function Es(){ke=Xn.current,F(Xn)}function En(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,$g(t)),X!==null)for(t=X.return;t!==null;){var i=t;switch(us(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ui();break;case 3:at(),F(fe),F(le),vs();break;case 5:ys(i);break;case 4:at();break;case 13:F(W);break;case 19:F(W);break;case 10:ps(i.type._context);break;case 22:case 23:Es()}t=t.return}if(ne=e,X=e=mn(e.current,null),ie=ke=n,Y=0,Xt=null,Gs=mr=Ln=0,pe=Dt=null,Cn!==null){for(n=0;n<Cn.length;n++)if(t=Cn[n],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,o=t.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}t.pending=i}Cn=null}return e}function Qu(e,n){do{var t=X;try{if(ds(),ji.current=Yi,qi){for(var i=H.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}qi=!1}if(Tn=0,ee=q=H=null,Pt=!1,Jt=0,Bs.current=null,t===null||t.return===null){Y=1,Xt=n,X=null;break}e:{var o=e,s=t.return,a=t,l=n;if(n=ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Ca(s);if(v!==null){v.flags&=-257,ja(v,s,a,o,n),v.mode&1&&Ga(o,c,n),n=v,l=c;var k=n.updateQueue;if(k===null){var x=new Set;x.add(l),n.updateQueue=x}else k.add(l);break e}else{if(!(n&1)){Ga(o,c,n),Ps();break e}l=Error(y(426))}}else if(V&&a.mode&1){var I=Ca(s);if(I!==null){!(I.flags&65536)&&(I.flags|=256),ja(I,s,a,o,n),cs(lt(l,a));break e}}o=l=lt(l,a),Y!==4&&(Y=2),Dt===null?Dt=[o]:Dt.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var g=Mu(o,l,n);ka(o,g);break e;case 1:a=l;var u=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(dn===null||!dn.has(d)))){o.flags|=65536,n&=-n,o.lanes|=n;var h=Du(o,a,n);ka(o,h);break e}}o=o.return}while(o!==null)}qu(t)}catch(_){n=_,X===t&&t!==null&&(X=t=t.return);continue}break}while(!0)}function Ku(){var e=Zi.current;return Zi.current=Yi,e===null?Yi:e}function Ps(){(Y===0||Y===3||Y===2)&&(Y=4),ne===null||!(Ln&268435455)&&!(mr&268435455)||rn(ne,ie)}function tr(e,n){var t=N;N|=2;var i=Ku();(ne!==e||ie!==n)&&(Ue=null,En(e,n));do try{yd();break}catch(r){Qu(e,r)}while(!0);if(ds(),N=t,Zi.current=i,X!==null)throw Error(y(261));return ne=null,ie=0,Y}function yd(){for(;X!==null;)Xu(X)}function vd(){for(;X!==null&&!Uc();)Xu(X)}function Xu(e){var n=Zu(e.alternate,e,ke);e.memoizedProps=e.pendingProps,n===null?qu(e):X=n,Bs.current=null}function qu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=gd(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,X=null;return}}else if(t=cd(t,n,ke),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);Y===0&&(Y=5)}function Bn(e,n,t){var i=R,r=je.transition;try{je.transition=null,R=1,kd(e,n,t,i)}finally{je.transition=r,R=i}return null}function kd(e,n,t,i){do tt();while(sn!==null);if(N&6)throw Error(y(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Zc(e,o),e===ne&&(X=ne=null,ie=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_i||(_i=!0,ec(Ii,function(){return tt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=je.transition,je.transition=null;var s=R;R=1;var a=N;N|=4,Bs.current=null,pd(e,t),Hu(t,e),zg(vo),zi=!!yo,vo=yo=null,e.current=t,md(t),Wc(),N=a,R=s,je.transition=o}else e.current=t;if(_i&&(_i=!1,sn=e,nr=r),o=e.pendingLanes,o===0&&(dn=null),Jc(t.stateNode),ye(e,K()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(er)throw er=!1,e=Ao,Ao=null,e;return nr&1&&e.tag!==0&&tt(),o=e.pendingLanes,o&1?e===zo?Tt++:(Tt=0,zo=e):Tt=0,kn(),null}function tt(){if(sn!==null){var e=Pl(nr),n=je.transition,t=R;try{if(je.transition=null,R=16>e?16:e,sn===null)var i=!1;else{if(e=sn,sn=null,nr=0,N&6)throw Error(y(331));var r=N;for(N|=4,b=e.current;b!==null;){var o=b,s=o.child;if(b.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(b=c;b!==null;){var f=b;switch(f.tag){case 0:case 11:case 15:Mt(8,f,o)}var m=f.child;if(m!==null)m.return=f,b=m;else for(;b!==null;){f=b;var p=f.sibling,v=f.return;if(Vu(f),f===c){b=null;break}if(p!==null){p.return=v,b=p;break}b=v}}}var k=o.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var I=x.sibling;x.sibling=null,x=I}while(x!==null)}}b=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,b=s;else e:for(;b!==null;){if(o=b,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mt(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,b=g;break e}b=o.return}}var u=e.current;for(b=u;b!==null;){s=b;var d=s.child;if(s.subtreeFlags&2064&&d!==null)d.return=s,b=d;else e:for(s=u;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pr(9,a)}}catch(_){J(a,a.return,_)}if(a===s){b=null;break e}var h=a.sibling;if(h!==null){h.return=a.return,b=h;break e}b=a.return}}if(N=r,kn(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(or,e)}catch{}i=!0}return i}finally{R=t,je.transition=n}}return!1}function Fa(e,n,t){n=lt(t,n),n=Mu(e,n,1),e=gn(e,n,1),n=ce(),e!==null&&(Yt(e,1,n),ye(e,n))}function J(e,n,t){if(e.tag===3)Fa(e,e,t);else for(;n!==null;){if(n.tag===3){Fa(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dn===null||!dn.has(i))){e=lt(t,e),e=Du(n,e,1),n=gn(n,e,1),e=ce(),n!==null&&(Yt(n,1,e),ye(n,e));break}}n=n.return}}function _d(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=ce(),e.pingedLanes|=e.suspendedLanes&t,ne===e&&(ie&t)===t&&(Y===4||Y===3&&(ie&130023424)===ie&&500>K()-Cs?En(e,0):Gs|=t),ye(e,n)}function Yu(e,n){n===0&&(e.mode&1?(n=ci,ci<<=1,!(ci&130023424)&&(ci=4194304)):n=1);var t=ce();e=Xe(e,n),e!==null&&(Yt(e,n,t),ye(e,t))}function wd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Yu(e,t)}function xd(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(y(314))}i!==null&&i.delete(n),Yu(e,t)}var Zu;Zu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||fe.current)me=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return me=!1,ud(e,n,t);me=!!(e.flags&131072)}else me=!1,V&&n.flags&1048576&&tu(n,$i,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;Pi(e,n),e=n.pendingProps;var r=rt(n,le.current);nt(n,t),r=_s(null,n,i,e,r,t);var o=ws();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,he(i)?(o=!0,Wi(n)):o=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fs(n),r.updater=gr,n.stateNode=r,r._reactInternals=n,Co(n,i,e,t),n=Po(null,n,i,!0,o,t)):(n.tag=0,V&&o&&ls(n),ue(null,n,r,t),n=n.child),n;case 16:i=n.elementType;e:{switch(Pi(e,n),e=n.pendingProps,r=i._init,i=r(i._payload),n.type=i,r=n.tag=Sd(i),e=De(i,e),r){case 0:n=Eo(null,n,i,e,t);break e;case 1:n=Ma(null,n,i,e,t);break e;case 11:n=Ea(null,n,i,e,t);break e;case 14:n=Pa(null,n,i,De(i.type,e),t);break e}throw Error(y(306,i,""))}return n;case 0:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:De(i,r),Eo(e,n,i,r,t);case 1:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:De(i,r),Ma(e,n,i,r,t);case 3:e:{if(Ru(n),e===null)throw Error(y(387));i=n.pendingProps,o=n.memoizedState,r=o.element,su(e,n),Ki(n,i,null,t);var s=n.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){r=lt(Error(y(423)),n),n=Da(e,n,i,t,r);break e}else if(i!==r){r=lt(Error(y(424)),n),n=Da(e,n,i,t,r);break e}else for(_e=cn(n.stateNode.containerInfo.firstChild),we=n,V=!0,Le=null,t=cu(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ot(),i===r){n=qe(e,n,t);break e}ue(e,n,i,t)}n=n.child}return n;case 5:return gu(n),e===null&&So(n),i=n.type,r=n.pendingProps,o=e!==null?e.memoizedProps:null,s=r.children,ko(i,r)?s=null:o!==null&&ko(i,o)&&(n.flags|=32),Nu(e,n),ue(e,n,s,t),n.child;case 6:return e===null&&So(n),null;case 13:return Iu(e,n,t);case 4:return hs(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=st(n,null,i,t):ue(e,n,i,t),n.child;case 11:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:De(i,r),Ea(e,n,i,r,t);case 7:return ue(e,n,n.pendingProps,t),n.child;case 8:return ue(e,n,n.pendingProps.children,t),n.child;case 12:return ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,r=n.pendingProps,o=n.memoizedProps,s=r.value,z(Ji,i._currentValue),i._currentValue=s,o!==null)if(Ie(o.value,s)){if(o.children===r.children&&!fe.current){n=qe(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Je(-1,t&-t),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),Bo(o.return,t,n),a.lanes|=t;break}l=l.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(y(341));s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),Bo(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ue(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,i=n.pendingProps.children,nt(n,t),r=Ee(r),i=i(r),n.flags|=1,ue(e,n,i,t),n.child;case 14:return i=n.type,r=De(i,n.pendingProps),r=De(i.type,r),Pa(e,n,i,r,t);case 15:return Tu(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:De(i,r),Pi(e,n),n.tag=1,he(i)?(e=!0,Wi(n)):e=!1,nt(n,t),lu(n,i,r),Co(n,i,r,t),Po(null,n,i,!0,e,t);case 19:return Au(e,n,t);case 22:return Lu(e,n,t)}throw Error(y(156,n.tag))};function ec(e,n){return Gl(e,n)}function bd(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,n,t,i){return new bd(e,n,t,i)}function Ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sd(e){if(typeof e=="function")return Ms(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xo)return 11;if(e===qo)return 14}return 2}function mn(e,n){var t=e.alternate;return t===null?(t=Ce(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ti(e,n,t,i,r,o){var s=2;if(i=e,typeof e=="function")Ms(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case On:return Pn(t.children,r,o,n);case Ko:s=8,r|=8;break;case Xr:return e=Ce(12,t,n,r|2),e.elementType=Xr,e.lanes=o,e;case qr:return e=Ce(13,t,n,r),e.elementType=qr,e.lanes=o,e;case Yr:return e=Ce(19,t,n,r),e.elementType=Yr,e.lanes=o,e;case ul:return fr(t,r,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case al:s=10;break e;case ll:s=9;break e;case Xo:s=11;break e;case qo:s=14;break e;case en:s=16,i=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return n=Ce(s,t,n,r),n.elementType=e,n.type=i,n.lanes=o,n}function Pn(e,n,t,i){return e=Ce(7,e,i,n),e.lanes=t,e}function fr(e,n,t,i){return e=Ce(22,e,i,n),e.elementType=ul,e.lanes=t,e.stateNode={isHidden:!1},e}function Hr(e,n,t){return e=Ce(6,e,null,n),e.lanes=t,e}function $r(e,n,t){return n=Ce(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Bd(e,n,t,i,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gr(0),this.expirationTimes=Gr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gr(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ds(e,n,t,i,r,o,s,a,l){return e=new Bd(e,n,t,a,l),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ce(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},fs(o),e}function Gd(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zn,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function nc(e){if(!e)return hn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(y(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(he(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(y(171))}if(e.tag===1){var t=e.type;if(he(t))return eu(e,t,n)}return n}function tc(e,n,t,i,r,o,s,a,l){return e=Ds(t,i,!0,e,r,o,s,a,l),e.context=nc(null),t=e.current,i=ce(),r=pn(t),o=Je(i,r),o.callback=n??null,gn(t,o,r),e.current.lanes=r,Yt(e,r,i),ye(e,i),e}function hr(e,n,t,i){var r=n.current,o=ce(),s=pn(r);return t=nc(t),n.context===null?n.context=t:n.pendingContext=t,n=Je(o,s),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=gn(r,n,s),e!==null&&(Re(e,r,s,o),Ci(e,r,s)),s}function ir(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Va(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ts(e,n){Va(e,n),(e=e.alternate)&&Va(e,n)}function Cd(){return null}var ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ls(e){this._internalRoot=e}yr.prototype.render=Ls.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(y(409));hr(e,n,null,null)};yr.prototype.unmount=Ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Nn(function(){hr(null,e,null,null)}),n[Ke]=null}};function yr(e){this._internalRoot=e}yr.prototype.unstable_scheduleHydration=function(e){if(e){var n=Tl();e={blockedOn:null,target:e,priority:n};for(var t=0;t<tn.length&&n!==0&&n<tn[t].priority;t++);tn.splice(t,0,e),t===0&&Nl(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ua(){}function jd(e,n,t,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=ir(s);o.call(c)}}var s=tc(n,i,e,0,null,!1,!1,"",Ua);return e._reactRootContainer=s,e[Ke]=s.current,Vt(e.nodeType===8?e.parentNode:e),Nn(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ir(l);a.call(c)}}var l=Ds(e,0,!1,null,null,!1,!1,"",Ua);return e._reactRootContainer=l,e[Ke]=l.current,Vt(e.nodeType===8?e.parentNode:e),Nn(function(){hr(n,l,t,i)}),l}function kr(e,n,t,i,r){var o=t._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=ir(s);a.call(l)}}hr(n,s,e,r)}else s=jd(t,n,e,r,i);return ir(s)}Ml=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=bt(n.pendingLanes);t!==0&&(es(n,t|1),ye(n,K()),!(N&6)&&(ut=K()+500,kn()))}break;case 13:Nn(function(){var i=Xe(e,1);if(i!==null){var r=ce();Re(i,e,1,r)}}),Ts(e,1)}};ns=function(e){if(e.tag===13){var n=Xe(e,134217728);if(n!==null){var t=ce();Re(n,e,134217728,t)}Ts(e,134217728)}};Dl=function(e){if(e.tag===13){var n=pn(e),t=Xe(e,n);if(t!==null){var i=ce();Re(t,e,n,i)}Ts(e,n)}};Tl=function(){return R};Ll=function(e,n){var t=R;try{return R=e,n()}finally{R=t}};lo=function(e,n,t){switch(n){case"input":if(no(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var r=ur(i);if(!r)throw Error(y(90));gl(i),no(i,r)}}}break;case"textarea":pl(e,t);break;case"select":n=t.value,n!=null&&qn(e,!!t.multiple,n,!1)}};_l=js;wl=Nn;var Ed={usingClientEntryPoint:!1,Events:[ei,Wn,ur,vl,kl,js]},_t={findFiberByHostInstance:Gn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Pd={bundleType:_t.bundleType,version:_t.version,rendererPackageName:_t.rendererPackageName,rendererConfig:_t.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sl(e),e===null?null:e.stateNode},findFiberByHostInstance:_t.findFiberByHostInstance||Cd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{or=wi.inject(Pd),Fe=wi}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ed;be.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(n))throw Error(y(200));return Gd(e,n,null,t)};be.createRoot=function(e,n){if(!Ns(e))throw Error(y(299));var t=!1,i="",r=ic;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Ds(e,1,!1,null,null,t,!1,i,r),e[Ke]=n.current,Vt(e.nodeType===8?e.parentNode:e),new Ls(n)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Sl(n),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Nn(e)};be.hydrate=function(e,n,t){if(!vr(n))throw Error(y(200));return kr(null,e,n,!0,t)};be.hydrateRoot=function(e,n,t){if(!Ns(e))throw Error(y(405));var i=t!=null&&t.hydratedSources||null,r=!1,o="",s=ic;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=tc(n,null,e,1,t??null,r,!1,o,s),e[Ke]=n.current,Vt(e),i)for(e=0;e<i.length;e++)t=i[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new yr(n)};be.render=function(e,n,t){if(!vr(n))throw Error(y(200));return kr(null,e,n,!1,t)};be.unmountComponentAtNode=function(e){if(!vr(e))throw Error(y(40));return e._reactRootContainer?(Nn(function(){kr(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};be.unstable_batchedUpdates=js;be.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!vr(t))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return kr(e,n,t,!1,i)};be.version="18.2.0-next-9e3b772b8-20220608";function rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)}catch(e){console.error(e)}}rc(),tl.exports=be;var Md=tl.exports,Wa=Md;Qr.createRoot=Wa.createRoot,Qr.hydrateRoot=Wa.hydrateRoot;const Dd={"MATLAB.gitignore":`# Windows default autosave extension
*.asv

# OSX / *nix default autosave extension
*.m~

# Compiled MEX binaries (all platforms)
*.mex*

# Packaged app and toolbox files
*.mlappinstall
*.mltbx

# Generated helpsearch folders
helpsearch*/

# Simulink code generation folders
slprj/
sccprj/

# Matlab code generation folders
codegen/

# Simulink autosave extension
*.autosave

# Simulink cache files
*.slxc

# Octave session info
octave-workspace
`,"CUDA.gitignore":`*.i
*.ii
*.gpu
*.ptx
*.cubin
*.fatbin
`,"Node.gitignore":`# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)
web_modules/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next
out

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
# Comment in the public line in if your project uses Gatsby and not Next.js
# https://nextjs.org/blog/next-9-1#public-directory-support
# public

# vuepress build output
.vuepress/dist

# vuepress v2.x temp and cache directory
.temp
.cache

# Docusaurus cache and generated files
.docusaurus

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*
`,"GitBook.gitignore":`# Node rules:
## Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
.grunt

## Dependency directory
## Commenting this out is preferred by some people, see
## https://docs.npmjs.com/misc/faq#should-i-check-my-node_modules-folder-into-git
node_modules

# Book build output
_book

# eBook build output
*.epub
*.mobi
*.pdf
`,"CVS.gitignore":`/CVS/*
**/CVS/*
.cvsignore
*/.cvsignore
`,"Virtuoso.gitignore":`# Gitignore for Cadence Virtuoso
################################################################

# Log files
*.log
panic*.log.*

# OpenAccess database lock files
*.cdslck*

# Run directories for layout vs. schematic and design rule check
lvsRunDir/*
drcRunDir/*

# Abstract generation tool
abstract.log*
abstract.record*

`,"Xilinx.gitignore":`# gitignore template for Xilinx Vivado Design Suite
# website: https://www.xilinx.com/support/download.html

# [home]
*.jou
*.log
*.debug
*.str
*.zip
*.tmp
*.rst
*.os
*.js
*.pb
*.dcp
*.hwdef
*.vds
*.veo
*.wdf
*.vdi
*.dmp
*.rpx
*.rpt
*_stub.v
*_stub.vhdl
*_funcsim.v
*_funcsim.vhdl
.project

# [dir]
*.cache
.metadata
*.data
*.ipdefs
.Xil
*.sdk
*.hw
*.ip_user_files

### IP synth
*_synth_*

.jobs

### project synth
*/*.runs/synth*/*.xml
*/*.runs/synth*/*.txt
*/*.runs/synth*/*.sh
*/*.runs/synth*/*.tcl
*/*.runs/synth*/*.bat
*/*.runs/synth*/*.xdc
!*/*.runs/synth*/*utilization*.rpt

*.runs/synth*/*.xml
*.runs/synth*/*.txt
*.runs/synth*/*.sh
*.runs/synth*/*.tcl
*.runs/synth*/*.bat
*.runs/synth*/*.xdc
!*.runs/synth*/*utilization*.rpt

### project impl
*/*.runs/impl*/*.xml
*/*.runs/impl*/*.html
*/*.runs/impl*/*.txt
*/*.runs/impl*/*.sh
*/*.runs/impl*/*.tcl
*/*.runs/impl*/*.bat
!*/*.runs/impl*/*utilization*.rpt

*.runs/impl*/*.xml
*.runs/impl*/*.html
*.runs/impl*/*.txt
*.runs/impl*/*.sh
*.runs/impl*/*.tcl
*.runs/impl*/*.bat
!*.runs/impl*/*utilization*.rpt

### block design
*/*/bd/*/hdl
*/*/*/bd/*/hdl

*/*/bd/*/*.xdc
*/*/*/bd/*/*.xdc

*/*/bd/*/ip/*/*.xdc
*/*/*/bd/*/ip/*/*.xdc

*/*/bd/*/ip/*/*/
*/*/*/bd/*/ip/*/*/

*/*/bd/*/ip/*/*.vhd
*/*/*/bd/*/ip/*/*.vhd

*/*/bd/*/ip/*/*.xml
*/*/*/bd/*/ip/*/*.xml

*.c
*.h
*.vho
*.html
*/*/bd/*/ip/*/*.tcl
*/*/*/bd/*/ip/*/*.tcl
hw_handoff
ipshared
`,"PSoCCreator.gitignore":`# Project Settings
*.cywrk.*
*.cyprj.*

# Generated Assets and Resources
Debug/
Release/
Export/
*/codegentemp
*/Generated_Source
*_datasheet.pdf
*_timing.html
*.cycdx
*.cyfit
*.rpt
*.svd
*.log
*.zip
`,"IAR_EWARM.gitignore":`# gitignore template for the IAR EWARM
# website: https://www.iar.com/knowledge/support/technical-notes/ide/which-files-should-be-version-controlled/

# Some tools will put the EWARM files
# under a subdirectory with the same name
# as the configuration.
# Example
# EWARM/Config1/Obj /List /Exe
# EWARM/Config2/Obj /List /Exe
EWARM/**/Obj
EWARM/**/List
EWARM/**/Exe

# Autogenerated project files
*.dep
*.ewt

# Autogenerated folder for debugger
EWARM/settings
`,"Espresso.gitignore":`*.esproj
`,"VirtualEnv.gitignore":`# Virtualenv
# http://iamzed.com/2009/05/07/a-primer-on-virtualenv/
.Python
[Bb]in
[Ii]nclude
[Ll]ib
[Ll]ib64
[Ll]ocal
[Ss]cripts
pyvenv.cfg
.venv
pip-selfcheck.json
`,"Clojure.gitignore":`pom.xml
pom.xml.asc
*.jar
*.class
/lib/
/classes/
/target/
/checkouts/
.lein-deps-sum
.lein-repl-history
.lein-plugins/
.lein-failures
.nrepl-port
.cpcache/
`,"Racket.gitignore":`# gitignore template for the Racket language
# website: http://www.racket-lang.org/

# DrRacket autosave files
*.rkt~
*.rkt.bak
\\#*.rkt#
\\#*.rkt#*#

# Compiled racket bytecode
compiled/
*.zo

# Dependency tracking files
*.dep
`,"WordPress.gitignore":`# Wordpress - ignore core, configuration, examples, uploads and logs.
# https://github.com/github/gitignore/blob/main/WordPress.gitignore

# Core
#
# Note: if you want to stage/commit WP core files
# you can delete this whole section/until Configuration.
/wp-admin/
/wp-content/index.php
/wp-content/languages
/wp-content/plugins/index.php
/wp-content/themes/index.php
/wp-includes/
/index.php
/license.txt
/readme.html
/wp-*.php
/xmlrpc.php

# Configuration
wp-config.php

# Example themes
/wp-content/themes/twenty*/

# Example plugin
/wp-content/plugins/hello.php

# Uploads
/wp-content/uploads/

# Log files
*.log

# htaccess
/.htaccess

# All plugins
#
# Note: If you wish to whitelist plugins,
# uncomment the next line
#/wp-content/plugins

# All themes
#
# Note: If you wish to whitelist themes,
# uncomment the next line
#/wp-content/themes`,"Lua.gitignore":`# Compiled Lua sources
luac.out

# luarocks build files
*.src.rock
*.zip
*.tar.gz

# Object files
*.o
*.os
*.ko
*.obj
*.elf

# Precompiled Headers
*.gch
*.pch

# Libraries
*.lib
*.a
*.la
*.lo
*.def
*.exp

# Shared objects (inc. Windows DLLs)
*.dll
*.so
*.so.*
*.dylib

# Executables
*.exe
*.out
*.app
*.i*86
*.x86_64
*.hex

`,"Puppet.gitignore":`# gitignore template for Puppet modules
# website: https://forge.puppet.com/

# Built packages
pkg/*

# Should run on multiple platforms so don't check in
Gemfile.lock

# Tests
spec/fixtures/*
coverage/*

# Third-party
vendor/*
.bundle/*
`,"Maven.gitignore":`target/
pom.xml.tag
pom.xml.releaseBackup
pom.xml.versionsBackup
pom.xml.next
release.properties
dependency-reduced-pom.xml
buildNumber.properties
.mvn/timing.properties
# https://github.com/takari/maven-wrapper#usage-without-binary-jar
.mvn/wrapper/maven-wrapper.jar

# Eclipse m2e generated files
# Eclipse Core
.project
# JDT-specific (Eclipse Java Development Tools)
.classpath
`,"Nikola.gitignore":`# gitignore template for Nikola static site generator
# website: https://getnikola.com/

.doit.db
*.py[cod]
cache/
output/
`,"Elixir.gitignore":`/_build
/cover
/deps
/doc
/.fetch
erl_crash.dump
*.ez
*.beam
/config/*.secret.exs
.elixir_ls/
`,"Fortran.gitignore":`# Prerequisites
*.d

# Compiled Object files
*.slo
*.lo
*.o
*.obj

# Precompiled Headers
*.gch
*.pch

# Compiled Dynamic libraries
*.so
*.dylib
*.dll

# Fortran module files
*.mod
*.smod

# Compiled Static libraries
*.lai
*.la
*.a
*.lib

# Executables
*.exe
*.out
*.app
`,"AltiumDesigner.gitignore":`# For PCBs designed using Altium Designer
# Website: https://www.altium.com/altium-designer/

# Directories containing cache data
History
__Previews

# Directories containing logs and generated outputs
Project\\ Logs*
Project\\ Outputs*

# Misc files generated by altium
debug.log
Status\\ Report.txt
*.PcbDoc.htm
*.SchDocPreview
*.PcbDocPreview

# Lock files sometimes left behind
.~lock.*
`,"OpenSSL.gitignore":`# OpenSSL-related files best not committed

## Certificate Authority
*.ca

## Certificate
*.crt

## Certificate Sign Request
*.csr

## Certificate
*.der

## Key database file
*.kdb

## OSCP request data
*.org

## PKCS #12
*.p12

## PEM-encoded certificate data
*.pem

## Random number seed
*.rnd

## SSLeay data
*.ssleay

## S/MIME message
*.smime
`,"Plone.gitignore":`*.pyc
*.pyo
*.tmp*
*.mo
*.egg
*.EGG
*.egg-info
*.EGG-INFO
.*.cfg
bin/
build/
develop-eggs/
downloads/
eggs/
fake-eggs/
parts/
dist/
var/
`,"Julia.gitignore":`# Files generated by invoking Julia with --code-coverage
*.jl.cov
*.jl.*.cov

# Files generated by invoking Julia with --track-allocation
*.jl.mem

# System-specific files and directories generated by the BinaryProvider and BinDeps packages
# They contain absolute paths specific to the host computer, and so should not be committed
deps/deps.jl
deps/build.log
deps/downloads/
deps/usr/
deps/src/

# Build artifacts for creating documentation generated by the Documenter package
docs/build/
docs/site/

# File generated by Pkg, the package manager, based on a corresponding Project.toml
# It records a fixed state of all packages used by the project. As such, it should not be
# committed for packages, but should be committed for applications that require a static
# environment.
Manifest.toml
`,"Bazaar.gitignore":`.bzr/
.bzrignore
`,"Lilypond.gitignore":`*.pdf
*.ps
*.midi
*.mid
*.log
*~
`,"Syncthing.gitignore":`# Syncthing caches
.stversions
`,"Qt.gitignore":`# C++ objects and libs
*.slo
*.lo
*.o
*.a
*.la
*.lai
*.so
*.so.*
*.dll
*.dylib

# Qt-es
object_script.*.Release
object_script.*.Debug
*_plugin_import.cpp
/.qmake.cache
/.qmake.stash
*.pro.user
*.pro.user.*
*.qbs.user
*.qbs.user.*
*.moc
moc_*.cpp
moc_*.h
qrc_*.cpp
ui_*.h
*.qmlc
*.jsc
Makefile*
*build-*
*.qm
*.prl

# Qt unit tests
target_wrapper.*

# QtCreator
*.autosave

# QtCreator Qml
*.qmlproject.user
*.qmlproject.user.*

# QtCreator CMake
CMakeLists.txt.user*

# QtCreator 4.8< compilation database
compile_commands.json

# QtCreator local machine specific files for imported projects
*creator.user*

*_qmlcache.qrc
`,"Sdcc.gitignore":`# SDCC stuff
*.lnk
*.lst
*.map
*.mem
*.rel
*.rst
*.sym
`,"AutoIt.gitignore":`# Compiled Scripts
*.a3x

# Tidy Auto-Generated Backups
Backup/*

# Au3Stripper Auto-Generated Files
*_stripped.au3
`,"LabVIEW.gitignore":`# Libraries
*.lvlibp
*.llb

# Shared objects (inc. Windows DLLs)
*.dll
*.so
*.so.*
*.dylib

# Executables
*.exe

# Metadata
*.aliases
*.lvlps
.cache/
`,"ForceDotCom.gitignore":`.project
.settings
salesforce.schema
Referenced Packages
`,"ROS2.gitignore":`install/
log/
build/

# Ignore generated docs
*.dox
*.wikidoc

# eclipse stuff
.project
.cproject

# qcreator stuff
CMakeLists.txt.user

srv/_*.py
*.pcd
*.pyc
qtcreator-*
*.user

*~

# Emacs
.#*

# Colcon custom files
COLCON_IGNORE
AMENT_IGNORE
`,"JupyterNotebooks.gitignore":`# gitignore template for Jupyter Notebooks
# website: http://jupyter.org/

.ipynb_checkpoints
*/.ipynb_checkpoints/*

# IPython
profile_default/
ipython_config.py

# Remove previous ipynb_checkpoints
#   git rm -r .ipynb_checkpoints/
`,"Leiningen.gitignore":`pom.xml
pom.xml.asc
*.jar
*.class
/lib/
/classes/
/target/
/checkouts/
.lein-deps-sum
.lein-repl-history
.lein-plugins/
.lein-failures
.nrepl-port
.cpcache/
`,"Drupal7.gitignore":`# gitignore template for Drupal 7 projects
#
# It is recommended that you use \`Drupal.gitignore\` as this is the latest version

# Ignore configuration files that may contain sensitive information.
sites/*/*settings*.php
sites/example.sites.php

# Ignore paths that contain generated content.
files/
sites/*/files
sites/*/private
sites/*/translations

# Ignore default text files
robots.txt
/CHANGELOG.txt
/COPYRIGHT.txt
/INSTALL*.txt
/LICENSE.txt
/MAINTAINERS.txt
/UPGRADE.txt
/README.txt
sites/README.txt
sites/all/libraries/README.txt
sites/all/modules/README.txt
sites/all/themes/README.txt

# Ignore everything but the "sites" folder ( for non core developer )
.htaccess
web.config
authorize.php
cron.php
index.php
install.php
update.php
xmlrpc.php
/includes
/misc
/modules
/profiles
/scripts
/themes
`,"Typo3.gitignore":`## TYPO3 v6.2
# Ignore several upload and file directories.
/fileadmin/user_upload/
/fileadmin/_temp_/
/fileadmin/_processed_/
/uploads/
# Ignore cache
/typo3conf/temp_CACHED*
/typo3conf/temp_fieldInfo.php
/typo3conf/deprecation_*.log
/typo3conf/ENABLE_INSTALL_TOOL
/typo3conf/realurl_autoconf.php
/FIRST_INSTALL
# Ignore system folders, you should have them symlinked.
# If not comment out the following entries.
/typo3
/typo3_src
/typo3_src-*
/Packages
/.htaccess
/index.php
# Ignore temp directory.
/typo3temp/
`,"CFWheels.gitignore":`# unpacked plugin folders
plugins/**/*

# files directory where uploads go
files

# DBMigrate plugin: generated SQL
db/sql

# AssetBundler plugin: generated bundles
javascripts/bundles
stylesheets/bundles
`,"C++.gitignore":`# Prerequisites
*.d

# Compiled Object files
*.slo
*.lo
*.o
*.obj

# Precompiled Headers
*.gch
*.pch

# Compiled Dynamic libraries
*.so
*.dylib
*.dll

# Fortran module files
*.mod
*.smod

# Compiled Static libraries
*.lai
*.la
*.a
*.lib

# Executables
*.exe
*.out
*.app
`,"Mercury.gitignore":`Mercury/
Mercury.modules
*.mh
*.err
*.init
*.dll
*.exe
*.a
*.so
*.dylib
*.beams
*.d
*.c_date
`,"OracleForms.gitignore":`# Compiled Form Modules
*.fmx

# Compiled Menu Modules
*.mmx

# Compiled Pre-Linked Libraries
*.plx
`,"Gretl.gitignore":`# gitignore template for Gretl
# website: http://gretl.sourceforge.net/

# Auto-generated log file is overwritten whenever you start a new session
session.inp

# Auto-generated temporary string code table
string_table.txt
`,"CDK.gitignore":`# CDK asset staging directory.
# For more information about AWS-CDK, see  https://docs.aws.amazon.com/cdk/
.cdk.staging/
cdk.out/
`,"V.gitignore":`*.exe
*.o
*.so
*.tmp.c
*.exp
*.ilk
*.pdb
*.dll
*.lib
*.bak
*.out
`,"Cloud9.gitignore":`# Cloud9 IDE - http://c9.io
.c9revisions
.c9
`,"Umbraco.gitignore":`## Ignore Umbraco files/folders generated for each instance
##
## Get latest from https://github.com/github/gitignore/blob/main/Umbraco.gitignore

# Note: VisualStudio gitignore rules may also be relevant

# Umbraco
# Ignore unimportant folders generated by Umbraco
**/App_Data/Logs/
**/App_Data/[Pp]review/
**/App_Data/TEMP/
**/App_Data/NuGetBackup/

# Ignore Umbraco content cache file
**/App_Data/umbraco.config

## this [Uu]mbraco/ folder should be created by cmd like \`Install-Package UmbracoCms -Version 8.5.3\`
## you can find your Umbraco version in your Web.config. (i.e. <add key="Umbraco.Core.ConfigurationStatus" value="8.5.3" />)
## Uncomment this line if you think it fits the way you work on your project.
## **/[Uu]mbraco/

## The [Mm]edia/ folder contains content. Content may vary by environment and should therefore not be added to source control.
## Uncomment this line if you think it fits the way you work on your project.
## **/[Mm]edia/ 

# Don't ignore Umbraco packages (VisualStudio.gitignore mistakes this for a NuGet packages folder)
# Make sure to include details from VisualStudio.gitignore BEFORE this
!**/App_Data/[Pp]ackages/*
!**/[Uu]mbraco/[Dd]eveloper/[Pp]ackages/*
!**/[Uu]mbraco/[Vv]iews/[Pp]ackages/*

# ImageProcessor DiskCache
**/App_Data/cache/

# Ignore the Models Builder models out of date flag
**/ood.flag

# NEW for version 9 .Net 5 (Core)
#ignore umbraco backoffice assest from wwwroot
**/wwwroot/umbraco/

# SQLite files
*.sqlite.db*

#ignore umbraco data/views/settings
**/umbraco/

#include default location for modelsbuilder output
!**/umbraco/models

#include default location for packages
!**/umbraco/Data/packages
`,"SymphonyCMS.gitignore":`manifest/cache/
manifest/logs/
manifest/tmp/
symphony/
workspace/uploads/
install-log.txt
`,"LemonStand.gitignore":`boot.php
index.php
install.php
/config/*
!/config/config.php
/controllers/*
/init/*
/logs/*
/phproad/*
/temp/*
/uploaded/*
/installer_files/*
/modules/backend/*
/modules/blog/*
/modules/cms/*
/modules/core/*
/modules/session/*
/modules/shop/*
/modules/system/*
/modules/users/*
# add content_*.php if you don't want erase client changes to content
`,"Python.gitignore":`# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# C extensions
*.so

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
share/python-wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

# PyInstaller
#  Usually these files are written by a python script from a template
#  before PyInstaller builds the exe, so as to inject date/other infos into it.
*.manifest
*.spec

# Installer logs
pip-log.txt
pip-delete-this-directory.txt

# Unit test / coverage reports
htmlcov/
.tox/
.nox/
.coverage
.coverage.*
.cache
nosetests.xml
coverage.xml
*.cover
*.py,cover
.hypothesis/
.pytest_cache/
cover/

# Translations
*.mo
*.pot

# Django stuff:
*.log
local_settings.py
db.sqlite3
db.sqlite3-journal

# Flask stuff:
instance/
.webassets-cache

# Scrapy stuff:
.scrapy

# Sphinx documentation
docs/_build/

# PyBuilder
.pybuilder/
target/

# Jupyter Notebook
.ipynb_checkpoints

# IPython
profile_default/
ipython_config.py

# pyenv
#   For a library or package, you might want to ignore these files since the code is
#   intended to run in multiple environments; otherwise, check them in:
# .python-version

# pipenv
#   According to pypa/pipenv#598, it is recommended to include Pipfile.lock in version control.
#   However, in case of collaboration, if having platform-specific dependencies or dependencies
#   having no cross-platform support, pipenv may install dependencies that don't work, or not
#   install all needed dependencies.
#Pipfile.lock

# poetry
#   Similar to Pipfile.lock, it is generally recommended to include poetry.lock in version control.
#   This is especially recommended for binary packages to ensure reproducibility, and is more
#   commonly ignored for libraries.
#   https://python-poetry.org/docs/basic-usage/#commit-your-poetrylock-file-to-version-control
#poetry.lock

# pdm
#   Similar to Pipfile.lock, it is generally recommended to include pdm.lock in version control.
#pdm.lock
#   pdm stores project-wide configurations in .pdm.toml, but it is recommended to not include it
#   in version control.
#   https://pdm.fming.dev/#use-with-ide
.pdm.toml

# PEP 582; used by e.g. github.com/David-OConnor/pyflow and github.com/pdm-project/pdm
__pypackages__/

# Celery stuff
celerybeat-schedule
celerybeat.pid

# SageMath parsed files
*.sage.py

# Environments
.env
.venv
env/
venv/
ENV/
env.bak/
venv.bak/

# Spyder project settings
.spyderproject
.spyproject

# Rope project settings
.ropeproject

# mkdocs documentation
/site

# mypy
.mypy_cache/
.dmypy.json
dmypy.json

# Pyre type checker
.pyre/

# pytype static type analyzer
.pytype/

# Cython debug symbols
cython_debug/

# PyCharm
#  JetBrains specific template is maintained in a separate JetBrains.gitignore that can
#  be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
#  and can be added to the global gitignore or merged into this file.  For a more nuclear
#  option (not recommended) you can uncomment the following to ignore the entire idea folder.
#.idea/
`,"Red.gitignore":`# gitignore template for Red programming language
# website: http://www.red-lang.org/

# Red Compiled code
*.red

# Libraries
crush.dll
crush.dylib
crush.so

# Files generated during test
quick-test/quick-test.log
quick-test/runnable/
system/tests/source/units/auto-tests/
tests/source/units/auto-tests/
`,"Hugo.gitignore":`# Generated files by hugo
/public/
/resources/_gen/
/assets/jsconfig.json
hugo_stats.json

# Executable may be added to repository
hugo.exe
hugo.darwin
hugo.linux

# Temporary lock file while building
/.hugo_build.lock
`,"Calabash.gitignore":`# Calabash / Cucumber
rerun/
reports/
screenshots/
screenshot*.png
test-servers/

# bundler
.bundle
vendor
`,"uVision.gitignore":`# git ignore file for Keil µVision Project

# µVision 5 and µVision 4 Project screen layout file
*.uvguix.*
*.uvgui.*

# Listing Files
*.i
*.lst
*.m51
*.m66
*.map

# Object Files
*.axf
*.b[0-2][0-9]
*.b3[0-1]
*.bak
*.build_log.htm
*.crf
*.d
*.dep
*.elf
*.htm
*.iex
*.lnp
*.o
*.obj
*.sbr

# Firmware Files
*.bin
*.h86
*.hex

# Build Files
.bat

# Debugger Files
.ini

# JLink Files
JLinkLog.txt

# Other Files
`,"DartEditor.gitignore":`.project
.buildlog
`,"Logtalk.gitignore":`# gitignore template for LogTalk, a programming language that builds upon Prolog
# website: https://logtalk.org/

# Logtalk temporary file directories
.lgt_tmp/
lgt_tmp/

# Logtalk default unit testing and doclet results and logs directories
logtalk_tester_logs/
logtalk_doclet_logs/

# backend Prolog compiler temporary files
.pl-history
*.out
*.xwam
*.qo
*.ql
*.itf
*.po
`,"Scrivener.gitignore":`*/Files/binder.autosave
*/Files/binder.backup
*/Files/search.indexes
*/Files/user.lock
*/Files/Docs/docs.checksum
*/Files/Data/docs.checksum
*/QuickLook/
*/Settings/ui.plist
`,"CommonLisp.gitignore":`*.FASL
*.fasl
*.lisp-temp
*.dfsl
*.pfsl
*.d64fsl
*.p64fsl
*.lx64fsl
*.lx32fsl
*.dx64fsl
*.dx32fsl
*.fx64fsl
*.fx32fsl
*.sx64fsl
*.sx32fsl
*.wx64fsl
*.wx32fsl
`,"TeX.gitignore":`## Core latex/pdflatex auxiliary files:
*.aux
*.lof
*.log
*.lot
*.fls
*.out
*.toc
*.fmt
*.fot
*.cb
*.cb2
.*.lb

## Intermediate documents:
*.dvi
*.xdv
*-converted-to.*
# these rules might exclude image files for figures etc.
# *.ps
# *.eps
# *.pdf

## Generated if empty string is given at "Please type another file name for output:"
.pdf

## Bibliography auxiliary files (bibtex/biblatex/biber):
*.bbl
*.bcf
*.blg
*-blx.aux
*-blx.bib
*.run.xml

## Build tool auxiliary files:
*.fdb_latexmk
*.synctex
*.synctex(busy)
*.synctex.gz
*.synctex.gz(busy)
*.pdfsync

## Build tool directories for auxiliary files
# latexrun
latex.out/

## Auxiliary and intermediate files from other packages:
# algorithms
*.alg
*.loa

# achemso
acs-*.bib

# amsthm
*.thm

# beamer
*.nav
*.pre
*.snm
*.vrb

# changes
*.soc

# comment
*.cut

# cprotect
*.cpt

# elsarticle (documentclass of Elsevier journals)
*.spl

# endnotes
*.ent

# fixme
*.lox

# feynmf/feynmp
*.mf
*.mp
*.t[1-9]
*.t[1-9][0-9]
*.tfm

#(r)(e)ledmac/(r)(e)ledpar
*.end
*.?end
*.[1-9]
*.[1-9][0-9]
*.[1-9][0-9][0-9]
*.[1-9]R
*.[1-9][0-9]R
*.[1-9][0-9][0-9]R
*.eledsec[1-9]
*.eledsec[1-9]R
*.eledsec[1-9][0-9]
*.eledsec[1-9][0-9]R
*.eledsec[1-9][0-9][0-9]
*.eledsec[1-9][0-9][0-9]R

# glossaries
*.acn
*.acr
*.glg
*.glo
*.gls
*.glsdefs
*.lzo
*.lzs
*.slg
*.slo
*.sls

# uncomment this for glossaries-extra (will ignore makeindex's style files!)
# *.ist

# gnuplot
*.gnuplot
*.table

# gnuplottex
*-gnuplottex-*

# gregoriotex
*.gaux
*.glog
*.gtex

# htlatex
*.4ct
*.4tc
*.idv
*.lg
*.trc
*.xref

# hyperref
*.brf

# knitr
*-concordance.tex
# TODO Uncomment the next line if you use knitr and want to ignore its generated tikz files
# *.tikz
*-tikzDictionary

# listings
*.lol

# luatexja-ruby
*.ltjruby

# makeidx
*.idx
*.ilg
*.ind

# minitoc
*.maf
*.mlf
*.mlt
*.mtc[0-9]*
*.slf[0-9]*
*.slt[0-9]*
*.stc[0-9]*

# minted
_minted*
*.pyg

# morewrites
*.mw

# newpax
*.newpax

# nomencl
*.nlg
*.nlo
*.nls

# pax
*.pax

# pdfpcnotes
*.pdfpc

# sagetex
*.sagetex.sage
*.sagetex.py
*.sagetex.scmd

# scrwfile
*.wrt

# svg
svg-inkscape/

# sympy
*.sout
*.sympy
sympy-plots-for-*.tex/

# pdfcomment
*.upa
*.upb

# pythontex
*.pytxcode
pythontex-files-*/

# tcolorbox
*.listing

# thmtools
*.loe

# TikZ & PGF
*.dpth
*.md5
*.auxlock

# titletoc
*.ptc

# todonotes
*.tdo

# vhistory
*.hst
*.ver

# easy-todo
*.lod

# xcolor
*.xcp

# xmpincl
*.xmpi

# xindy
*.xdy

# xypic precompiled matrices and outlines
*.xyc
*.xyd

# endfloat
*.ttt
*.fff

# Latexian
TSWLatexianTemp*

## Editors:
# WinEdt
*.bak
*.sav

# Texpad
.texpadtmp

# LyX
*.lyx~

# Kile
*.backup

# gummi
.*.swp

# KBibTeX
*~[0-9]*

# TeXnicCenter
*.tps

# auto folder when using emacs and auctex
./auto/*
*.el

# expex forward references with \\gathertags
*-tags.tex

# standalone packages
*.sta

# Makeindex log files
*.lpz

# xwatermark package
*.xwm

# REVTeX puts footnotes in the bibliography by default, unless the nofootinbib
# option is specified. Footnotes are the stored in a file with suffix Notes.bib.
# Uncomment the next line to have this generated file ignored.
#*Notes.bib
`,"Nix.gitignore":`# Ignore build outputs from performing a nix-build or \`nix build\` command
result
result-*
`,"WebMethods.gitignore":`**/IntegrationServer/datastore/
**/IntegrationServer/db/
**/IntegrationServer/DocumentStore/
**/IntegrationServer/lib/
**/IntegrationServer/logs/
**/IntegrationServer/replicate/
**/IntegrationServer/sdk/
**/IntegrationServer/support/
**/IntegrationServer/update/
**/IntegrationServer/userFtpRoot/
**/IntegrationServer/web/
**/IntegrationServer/WmRepository4/
**/IntegrationServer/XAStore/
**/IntegrationServer/packages/Wm*/
`,"Rails.gitignore":`*.rbc
capybara-*.html
.rspec
/db/*.sqlite3
/db/*.sqlite3-journal
/db/*.sqlite3-[0-9]*
/public/system
/coverage/
/spec/tmp
*.orig
rerun.txt
pickle-email-*.html

# Ignore all logfiles and tempfiles.
/log/*
/tmp/*
!/log/.keep
!/tmp/.keep

# TODO Comment out this rule if you are OK with secrets being uploaded to the repo
config/initializers/secret_token.rb
config/master.key

# Only include if you have production secrets in this file, which is no longer a Rails default
# config/secrets.yml

# dotenv, dotenv-rails
# TODO Comment out these rules if environment variables can be committed
.env
.env*.local

## Environment normalization:
/.bundle
/vendor/bundle

# these should all be checked in to normalize the environment:
# Gemfile.lock, .ruby-version, .ruby-gemset

# unless supporting rvm < 1.11.0 or doing something fancy, ignore this:
.rvmrc

# if using bower-rails ignore default bower_components path bower.json files
/vendor/assets/bower_components
*.bowerrc
bower.json

# Ignore pow environment settings
.powenv

# Ignore Byebug command history file.
.byebug_history

# Ignore node_modules
node_modules/

# Ignore precompiled javascript packs
/public/packs
/public/packs-test
/public/assets

# Ignore yarn files
/yarn-error.log
yarn-debug.log*
.yarn-integrity

# Ignore uploaded files in development
/storage/*
!/storage/.keep
/public/uploads
`,"Grails.gitignore":`# .gitignore for Grails 1.2 and 1.3
# Although this should work for most versions of grails, it is
# suggested that you use the "grails integrate-with --git" command
# to generate your .gitignore file.

# web application files
/web-app/WEB-INF/classes

# default HSQL database files for production mode
/prodDb.*

# general HSQL database files
*Db.properties
*Db.script

# logs
/stacktrace.log
/test/reports
/logs

# project release file
/*.war

# plugin release files
/*.zip
/plugin.xml

# older plugin install locations
/plugins
/web-app/plugins

# "temporary" build files
/target
`,"Elisp.gitignore":`# Compiled
*.elc

# Packaging
.cask

# Backup files
*~

# Undo-tree save-files
*.~undo-tree
`,"Processing.gitignore":`.DS_Store
applet
application.linux-arm64
application.linux-armv6hf
application.linux32
application.linux64
application.windows32
application.windows64
application.macosx
out
`,"ThinkPHP.gitignore":`# gitignore template for ThinkPHP v3.2.3
# website: http://www.thinkphp.cn/

# Logs and Cache files
/Application/Runtime/

# Common configure file
/Application/Common/Conf/config.php`,"Cordova.gitignore":`# gitignore template for the Cordova framework
# website: https://cordova.apache.org/
#
# Recommended template: Node.gitignore

# App platform binaries and built files
/platforms

# Optional to ignore plugin Git clones
#/plugins
`,"Exercism.gitignore":`# gitignore template for Exercism project
# website: https://exercism.io/

# Ignore .exercism folder which contain sensitive data
.exercism
`,"AtmelStudio.gitignore":`## Ignore Atmel Studio temporary files and build results
# https://www.microchip.com/mplab/avr-support/atmel-studio-7

# Atmel Studio is powered by an older version of Visual Studio,
# so most of the project and solution files are the same as VS files,
# only prefixed by an \`at\`.

#Build Directories
[Dd]ebug/
[Rr]elease/

#Build Results
*.o
*.d
*.eep
*.elf
*.hex
*.map
*.srec

#User Specific Files
*.atsuo
`,"Dreamweaver.gitignore":`# DW Dreamweaver added files
_notes
_compareTemp
configs/
dwsync.xml
dw_php_codehinting.config
*.mno
`,"Raku.gitignore":`# Gitignore for Raku (https://raku.org)
# As part of https://github.com/github/gitignore

# precompiled files
.precomp
lib/.precomp

`,"CakePHP.gitignore":`# CakePHP 3

/vendor/*
/config/app.php

/tmp/cache/models/*
!/tmp/cache/models/empty
/tmp/cache/persistent/*
!/tmp/cache/persistent/empty
/tmp/cache/views/*
!/tmp/cache/views/empty
/tmp/sessions/*
!/tmp/sessions/empty
/tmp/tests/*
!/tmp/tests/empty

/logs/*
!/logs/empty

# CakePHP 2

/app/tmp/*
/app/Config/core.php
/app/Config/database.php
/vendors/*
`,"Perl.gitignore":`!Build/
.last_cover_stats
/META.yml
/META.json
/MYMETA.*
*.o
*.pm.tdy
*.bs

# Devel::Cover
cover_db/

# Devel::NYTProf
nytprof.out

# Dist::Zilla
/.build/

# Module::Build
_build/
Build
Build.bat

# Module::Install
inc/

# ExtUtils::MakeMaker
/blib/
/_eumm/
/*.gz
/Makefile
/Makefile.old
/MANIFEST.bak
/pm_to_blib
/*.zip
`,"FlaxEngine.gitignore":`# Ignore Flax project files
Binaries/
Cache/
Logs/
Output/
Screenshots/
*.HotReload.*

# Ignore Visual Studio project files (generated locally)
*.csproj
*.sln

# Ignore thumbnails created by Windows
Thumbs.db

# Ignore files built by Visual Studio
*.obj
*.exe
*.pdb
*.user
*.aps
*.pch
*.vspscc
*_i.c
*_p.c
*.ncb
*.suo
*.tlb
*.tlh
*.bak
*.cache
*.ilk
*.log
[Bb]in
[Dd]ebug*/
*.lib
*.sbr
obj/
[Rr]elease*/
_ReSharper*/
[Tt]est[Rr]esult*
.vs/

# Ignore Nuget packages folder
packages/
`,"PureScript.gitignore":`# Dependencies
.psci_modules
.spago
bower_components
node_modules

# Generated files
.psci
output
`,"LensStudio.gitignore":`# gitignore template for LensStudio
# website: https://lensstudio.snapchat.com/

# macOS/IDE #
.DS_Store
.idea

# js #
node_modules
yarn.lock

# Python #
__pycache__/
*.py[cod]
*$py.class
[Bb]ackup*
`,"ExtJs.gitignore":`.architect
bootstrap.css
bootstrap.js
bootstrap.json
bootstrap.jsonp
build/
classic.json
classic.jsonp
ext/
modern.json
modern.jsonp
resources/sass/.sass-cache/
resources/.arch-internal-preview.css
.arch-internal-preview.css
`,"Phalcon.gitignore":`/cache/
/config/development/
`,"Sass.gitignore":`.sass-cache/
*.css.map
*.sass.map
*.scss.map
`,"MetaProgrammingSystem.gitignore":`workspace.xml
junitvmwatcher*.properties
build.properties

# generated java classes and java source files
#   manually add any custom artifacts that can't be generated from the models
#   http://confluence.jetbrains.com/display/MPSD25/HowTo+--+MPS+and+Git
classes_gen
source_gen
source_gen.caches

# generated test code and test results
test_gen
test_gen.caches
TEST-*.xml
junit*.properties
`,"Scala.gitignore":`*.class
*.log

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*
`,"PuTTY.gitignore":`# Private key
*.ppk
`,"Backup.gitignore":`*.bak
*.gho
*.ori
*.orig
*.tmp
`,"Snap.gitignore":`# gitginore template for creating Snap packages
# website: https://snapcraft.io/

parts/
prime/
stage/
*.snap

# Snapcraft global state tracking data(automatically generated)
# https://forum.snapcraft.io/t/location-to-save-global-state/768
/snap/.snapcraft/

# Source archive packed by \`snapcraft cleanbuild\` before pushing to the LXD container
/*_source.tar.bz2
`,"Terraform.gitignore":`# Local .terraform directories
**/.terraform/*

# .tfstate files
*.tfstate
*.tfstate.*

# Crash log files
crash.log
crash.*.log

# Exclude all .tfvars files, which are likely to contain sensitive data, such as
# password, private keys, and other secrets. These should not be part of version 
# control as they are data points which are potentially sensitive and subject 
# to change depending on the environment.
*.tfvars
*.tfvars.json

# Ignore override files as they are usually used to override resources locally and so
# are not checked in
override.tf
override.tf.json
*_override.tf
*_override.tf.json

# Include override files you do wish to add to version control using negated pattern
# !example_override.tf

# Include tfplan files to ignore the plan output of command: terraform plan -out=tfplan
# example: *tfplan*

# Ignore CLI configuration files
.terraformrc
terraform.rc
`,"Actionscript.gitignore":`# Build and Release Folders
bin-debug/
bin-release/
[Oo]bj/
[Bb]in/

# Other files and folders
.settings/

# Executables
*.swf
*.air
*.ipa
*.apk

# Project files, i.e. \`.project\`, \`.actionScriptProperties\` and \`.flexProperties\`
# should NOT be excluded as they contain compiler settings and other important
# information for Eclipse / Flash Builder.
`,"Unity.gitignore":`# This .gitignore file should be placed at the root of your Unity project directory
#
# Get latest from https://github.com/github/gitignore/blob/main/Unity.gitignore
#
/[Ll]ibrary/
/[Tt]emp/
/[Oo]bj/
/[Bb]uild/
/[Bb]uilds/
/[Ll]ogs/
/[Uu]ser[Ss]ettings/

# MemoryCaptures can get excessive in size.
# They also could contain extremely sensitive data
/[Mm]emoryCaptures/

# Recordings can get excessive in size
/[Rr]ecordings/

# Uncomment this line if you wish to ignore the asset store tools plugin
# /[Aa]ssets/AssetStoreTools*

# Autogenerated Jetbrains Rider plugin
/[Aa]ssets/Plugins/Editor/JetBrains*

# Visual Studio cache directory
.vs/

# Gradle cache directory
.gradle/

# Autogenerated VS/MD/Consulo solution and project files
ExportedObj/
.consulo/
*.csproj
*.unityproj
*.sln
*.suo
*.tmp
*.user
*.userprefs
*.pidb
*.booproj
*.svd
*.pdb
*.mdb
*.opendb
*.VC.db

# Unity3D generated meta files
*.pidb.meta
*.pdb.meta
*.mdb.meta

# Unity3D generated file on crash reports
sysinfo.txt

# Builds
*.apk
*.aab
*.unitypackage
*.app

# Crashlytics generated file
crashlytics-build.properties

# Packed Addressables
/[Aa]ssets/[Aa]ddressable[Aa]ssets[Dd]ata/*/*.bin*

# Temporary auto-generated Android Assets
/[Aa]ssets/[Ss]treamingAssets/aa.meta
/[Aa]ssets/[Ss]treamingAssets/aa/*
`,"JetBrains.gitignore":`# Covers JetBrains IDEs: IntelliJ, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio, WebStorm and Rider
# Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839

# User-specific stuff
.idea/**/workspace.xml
.idea/**/tasks.xml
.idea/**/usage.statistics.xml
.idea/**/dictionaries
.idea/**/shelf

# AWS User-specific
.idea/**/aws.xml

# Generated files
.idea/**/contentModel.xml

# Sensitive or high-churn files
.idea/**/dataSources/
.idea/**/dataSources.ids
.idea/**/dataSources.local.xml
.idea/**/sqlDataSources.xml
.idea/**/dynamic.xml
.idea/**/uiDesigner.xml
.idea/**/dbnavigator.xml

# Gradle
.idea/**/gradle.xml
.idea/**/libraries

# Gradle and Maven with auto-import
# When using Gradle or Maven with auto-import, you should exclude module files,
# since they will be recreated, and may cause churn.  Uncomment if using
# auto-import.
# .idea/artifacts
# .idea/compiler.xml
# .idea/jarRepositories.xml
# .idea/modules.xml
# .idea/*.iml
# .idea/modules
# *.iml
# *.ipr

# CMake
cmake-build-*/

# Mongo Explorer plugin
.idea/**/mongoSettings.xml

# File-based project format
*.iws

# IntelliJ
out/

# mpeltonen/sbt-idea plugin
.idea_modules/

# JIRA plugin
atlassian-ide-plugin.xml

# Cursive Clojure plugin
.idea/replstate.xml

# SonarLint plugin
.idea/sonarlint/

# Crashlytics plugin (for Android Studio and IntelliJ)
com_crashlytics_export_strings.xml
crashlytics.properties
crashlytics-build.properties
fabric.properties

# Editor-based Rest Client
.idea/httpRequests

# Android studio 3.1+ serialized cache file
.idea/caches/build_file_checksums.ser
`,"TextMate.gitignore":`*.tmproj
*.tmproject
tmtags
`,"RhodesRhomobile.gitignore":`rholog-*
sim-*
bin/libs
bin/RhoBundle
bin/tmp
bin/target
bin/*.ap_
*.o
*.jar
`,"Java.gitignore":`# Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*
replay_pid*
`,"IGORPro.gitignore":`# Avoid including Experiment files: they can be created and edited locally to test the ipf files
*.pxp
*.pxt
*.uxp
*.uxt
`,"Vue.gitignore":`# gitignore template for Vue.js projects
#
# Recommended template: Node.gitignore

# TODO: where does this rule come from?
docs/_book

# TODO: where does this rule come from?
test/
`,"Kate.gitignore":`# Swap Files #
.*.kate-swp
.swp.*
`,"Stella.gitignore":`# Atari 2600 (Stella) support for multiple assemblers
# - DASM
# - CC65

# Assembled binaries and object directories
obj/
a.out
*.bin
*.a26

# Add in special Atari 7800-based binaries for good measure
*.a78
`,"Momentics.gitignore":`# Built files
x86/
arm/
arm-p/
translations/*.qm

# IDE settings
.settings/
`,"Gcov.gitignore":`# gcc coverage testing tool files

*.gcno
*.gcda
*.gcov
`,"Finale.gitignore":`*.bak
*.db
*.avi
*.pdf
*.ps
*.mid
*.midi
*.mp3
*.aif
*.wav
# Some versions of Finale have a bug and randomly save extra copies of
# the music source as "<Filename> copy.mus"
*copy.mus
`,"TwinCAT3.gitignore":`# gitignore template for TwinCAT3
# website: https://www.beckhoff.com/twincat3/
#
# Recommended: VisualStudio.gitignore

# TwinCAT files
*.tpy
*.tclrs
*.compiled-library
*.compileinfo
# Don't include the tmc-file rule if either of the following is true:
#   1. You've got TwinCAT C++ projects, as the information in the TMC-file is created manually for the C++ projects (in that case, only (manually) ignore the tmc-files for the PLC projects)
#   2. You've created a standalone PLC-project and added events to it, as these are stored in the TMC-file.
*.tmc
*.tmcRefac
*.library
*.project.~u
*.tsproj.bak
*.xti.bak
LineIDs.dbg
LineIDs.dbg.bak
_Boot/
_CompileInfo/
_Libraries/
_ModuleInstall/`,"AppEngine.gitignore":`# Google App Engine generated folder
appengine-generated/
`,"XilinxISE.gitignore":`# intermediate build files
*.bgn
*.bit
*.bld
*.cmd_log
*.drc
*.ll
*.lso
*.msd
*.msk
*.ncd
*.ngc
*.ngd
*.ngr
*.pad
*.par
*.pcf
*.prj
*.ptwx
*.rbb
*.rbd
*.stx
*.syr
*.twr
*.twx
*.unroutes
*.ut
*.xpi
*.xst
*_bitgen.xwbt
*_envsettings.html
*_map.map
*_map.mrp
*_map.ngm
*_map.xrpt
*_ngdbuild.xrpt
*_pad.csv
*_pad.txt
*_par.xrpt
*_summary.html
*_summary.xml
*_usage.xml
*_xst.xrpt

# iMPACT generated files
_impactbatch.log
impact.xsl
impact_impact.xwbt
ise_impact.cmd
webtalk_impact.xml

# Core Generator generated files
xaw2verilog.log

# project-wide generated files
*.gise
par_usage_statistics.html
usage_statistics_webtalk.html
webtalk.log
webtalk_pn.xml

# generated folders
iseconfig/
xlnx_auto_0_xdb/
xst/
_ngo/
_xmsgs/
`,"GNOMEShellExtension.gitignore":`# Ignored files for GNOME extension git repository

*.zip
`,"SugarCRM.gitignore":`## SugarCRM
# Ignore custom .htaccess stuff.
/.htaccess
# Ignore the cache directory completely.
# This will break the current behaviour. Which was often leading to
# the misuse of the repository as backup replacement.
# For development the cache directory can be safely ignored and
# therefore it is ignored.
/cache/*
!/cache/index.html
# Ignore some files and directories from the custom directory.
/custom/history/
/custom/modulebuilder/
/custom/working/
/custom/modules/*/Ext/
/custom/application/Ext/
# Custom configuration should also be ignored.
/config.php
/config_override.php
# The silent upgrade scripts aren't needed.
/silentUpgrade*.php
# Logs files can safely be ignored.
*.log
# Ignore the new upload directories.
/upload/*
!/upload/index.html
/upload_backup/
`,"Zephir.gitignore":`# Cache files, generates by Zephir
.temp/
.libs/

# Object files, generates by linker
*.lo
*.la
*.o
*.loT

# Files generated by configure and Zephir,
# not required for extension compilation.
ext/build/
ext/modules/
ext/Makefile*
ext/config*
ext/acinclude.m4
ext/aclocal.m4
ext/autom4te*
ext/install-sh
ext/ltmain.sh
ext/missing
ext/mkinstalldirs
ext/run-tests.php
ext/.deps
ext/libtool
`,"Ninja.gitignore":`.ninja_deps
.ninja_log
`,"esp-idf.gitignore":`# gitignore template for esp-idf, the official development framework for ESP32
# https://github.com/espressif/esp-idf

build/
sdkconfig
sdkconfig.old
`,"SeamGen.gitignore":`/bootstrap/data
/bootstrap/tmp
/classes/
/dist/
/exploded-archives/
/test-build/
/test-output/
/test-report/
/target/
temp-testng-customsuite.xml

# based on http://stackoverflow.com/a/8865858/422476 I am removing inline comments

#/classes/                all class files
#/dist/                       contains generated war files for deployment
#/exploded-archives/      war content generation during deploy (or explode)
#/test-build/                 test compilation (ant target for Seam)
#/test-output/                test results
#/test-report/                test report generation for, e.g., Hudson
#/target/                     maven output folder
#temp-testng-customsuite.xmlgenerated when running test cases under Eclipse

# Thanks to @VonC and @kraftan for their helpful answers on a related question
# on StackOverflow.com:
# http://stackoverflow.com/questions/4176687
# /what-is-the-recommended-source-control-ignore-pattern-for-seam-projects
`,"EiffelStudio.gitignore":`# The compilation directory
EIFGENs
`,"KDevelop4.gitignore":`*.kdev4
.kdev4/
`,"R.gitignore":`# History files
.Rhistory
.Rapp.history

# Session Data files
.RData
.RDataTmp

# User-specific files
.Ruserdata

# Example code in package build process
*-Ex.R

# Output files from R CMD build
/*.tar.gz

# Output files from R CMD check
/*.Rcheck/

# RStudio files
.Rproj.user/

# produced vignettes
vignettes/*.html
vignettes/*.pdf

# OAuth2 token, see https://github.com/hadley/httr/releases/tag/v0.3
.httr-oauth

# knitr and R markdown default cache directories
*_cache/
/cache/

# Temporary files created by R markdown
*.utf8.md
*.knit.md

# R Environment Variables
.Renviron

# pkgdown site
docs/

# translation temp files
po/*~

# RStudio Connect folder
rsconnect/
`,"SPFx.gitignore":`#SharePoint Framework (SPFx)
# Logs
logs
*.log
npm-debug.log*

# Dependency directories
node_modules

# Build generated files
dist
lib
solution
temp
*.sppkg

# Coverage directory used by tools like istanbul
coverage

# OSX
.DS_Store

# Visual Studio files
.ntvs_analysis.dat
.vs
bin
obj

# Resx Generated Code
*.resx.ts

# Styles Generated Code
*.scss.ts
`,"Eclipse.gitignore":`.metadata
bin/
tmp/
*.tmp
*.bak
*.swp
*~.nib
local.properties
.settings/
.loadpath
.recommenders

# External tool builders
.externalToolBuilders/

# Locally stored "Eclipse launch configurations"
*.launch

# PyDev specific (Python IDE for Eclipse)
*.pydevproject

# CDT-specific (C/C++ Development Tooling)
.cproject

# CDT- autotools
.autotools

# Java annotation processor (APT)
.factorypath

# PDT-specific (PHP Development Tools)
.buildpath

# sbteclipse plugin
.target

# Tern plugin
.tern-project

# TeXlipse plugin
.texlipse

# STS (Spring Tool Suite)
.springBeans

# Code Recommenders
.recommenders/

# Annotation Processing
.apt_generated/
.apt_generated_test/

# Scala IDE specific (Scala & Java development for Eclipse)
.cache-main
.scala_dependencies
.worksheet

# Uncomment this line if you wish to ignore the project description file.
# Typically, this file would be tracked if it contains build/dependency configurations:
#.project
`,"Toit.gitignore":`.packages
*_pb.toit
`,"Kentico.gitignore":`# gitignore template for using Kentico CMS
# website: http://www.kentico.com/
#
# Recommended template: VisualStudio.gitignore

# Include some Kentico folders excluded by Visual Studio rules
!CMS/CMSAdminControls/*/
!CMS/CMSModules/System/*/
!CMS/App_Data/CIRepository/**

# Kentico temporary/environment files
CMS/App_Data/AzureCache
CMS/App_Data/AzureTemp
CMS/App_Data/CMSModules/DeviceProfile/logFiftyOne.txt
CMS/App_Data/CMSModules/DeviceProfiles/logFiftyOne.txt
CMS/App_Data/CMSModules/WebFarm/webfarm.sync
CMS/App_Data/CMSTemp
CMS/App_Data/Persistent
CMS/CMSSiteUtils/Export
CMS/CMSSiteUtils/Import

# Ignore all smart search indexes, but not the other system folder contents
CMS/App_Data/CMSModules/SmartSearch/**
!CMS/App_Data/CMSModules/SmartSearch/*/
!CMS/App_Data/CMSModules/SmartSearch/_StopWords/**
!CMS/App_Data/CMSModules/SmartSearch/_Synonyms/**

## Kentico Starter Sites
# Starter site resource Files
CMS/App_Data/DancingGoat

# Starter site web templates
CMS/App_Data/Templates/CommunitySite
CMS/App_Data/Templates/CorporateSite
CMS/App_Data/Templates/DancingGoat
CMS/App_Data/Templates/EcommerceSite
CMS/App_Data/Templates/IntranetPortal
CMS/App_Data/Templates/PersonalSite

# Starter site app themes
CMS/App_Themes/CommunitySite
CMS/App_Themes/CorporateSite
CMS/App_Themes/EcommerceSite
CMS/App_Themes/IntranetPortal*
CMS/App_Themes/PersonalSite

# Starter site ASPX templates
CMS/CMSTemplates/CorporateSite

# Starter site media libraries
CMS/CommunitySite
CMS/CorporateSite
CMS/DancingGoat
CMS/EcommerceSite
CMS/IntranetPortal
CMS/PersonalSite

## Project specific ignores
# Sensitive settings
AppSettings.config
ConnectionStrings.config

# Project media libraries (recommend shared file storage)
# e.g. CMS/{SiteCodeName}
`,"CodeSniffer.gitignore":`# gitignore for the PHP Codesniffer framework
# website: https://github.com/squizlabs/PHP_CodeSniffer
#
# Recommended template: PHP.gitignore

/wpcs/*
`,"InforCMS.gitignore":`# gitignore template for InforCRM (formerly SalesLogix)
# website: https://www.infor.com/product-summary/cx/infor-crm/
#
# Recommended: VisualStudio.gitignore

# Ignore model files that are auto-generated
ModelIndex.xml
ExportedFiles.xml

# Ignore deployment files
[Mm]odel/[Dd]eployment

# Force include portal SupportFiles
!Model/Portal/*/SupportFiles/[Bb]in/
!Model/Portal/PortalTemplates/*/SupportFiles/[Bb]in
`,"Jekyll.gitignore":`_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata
# Ignore folders generated by Bundler
.bundle/
vendor/
`,"KiCad.gitignore":`# For PCBs designed using KiCad: https://www.kicad.org/
# Format documentation: https://kicad.org/help/file-formats/

# Temporary files
*.000
*.bak
*.bck
*.kicad_pcb-bak
*.kicad_sch-bak
*-backups
*.kicad_prl
*.sch-bak
*~
_autosave-*
*.tmp
*-save.pro
*-save.kicad_pcb
fp-info-cache

# Netlist files (exported from Eeschema)
*.net

# Autorouter files (exported from Pcbnew)
*.dsn
*.ses

# Exported BOM files
*.xml
*.csv
`,"Go.AllowList.gitignore":`# Allowlisting gitignore template for GO projects prevents us
# from adding various unwanted local files, such as generated
# files, developer configurations or IDE-specific files etc.
#
# Recommended: Go.AllowList.gitignore

# Ignore everything
*

# But not these files...
!/.gitignore

!*.go
!go.sum
!go.mod

!README.md
!LICENSE

# !Makefile

# ...even if they are in subdirectories
!*/
`,"Delphi.gitignore":`# Uncomment these types if you want even more clean repository. But be careful.
# It can make harm to an existing project source. Read explanations below.
#
# Resource files are binaries containing manifest, project icon and version info.
# They can not be viewed as text or compared by diff-tools. Consider replacing them with .rc files.
#*.res
#
# Type library file (binary). In old Delphi versions it should be stored.
# Since Delphi 2009 it is produced from .ridl file and can safely be ignored.
#*.tlb
#
# Diagram Portfolio file. Used by the diagram editor up to Delphi 7.
# Uncomment this if you are not using diagrams or use newer Delphi version.
#*.ddp
#
# Visual LiveBindings file. Added in Delphi XE2.
# Uncomment this if you are not using LiveBindings Designer.
#*.vlb
#
# Deployment Manager configuration file for your project. Added in Delphi XE2.
# Uncomment this if it is not mobile development and you do not use remote debug feature.
#*.deployproj
#
# C++ object files produced when C/C++ Output file generation is configured.
# Uncomment this if you are not using external objects (zlib library for example).
#*.obj
#

# Delphi compiler-generated binaries (safe to delete)
*.exe
*.dll
*.bpl
*.bpi
*.dcp
*.so
*.apk
*.drc
*.map
*.dres
*.rsm
*.tds
*.dcu
*.lib
*.a
*.o
*.ocx

# Delphi autogenerated files (duplicated info)
*.cfg
*.hpp
*Resource.rc

# Delphi local files (user-specific info)
*.local
*.identcache
*.projdata
*.tvsconfig
*.dsk

# Delphi history and backups
__history/
__recovery/
*.~*

# Castalia statistics file (since XE7 Castalia is distributed with Delphi)
*.stat

# Boss dependency manager vendor folder https://github.com/HashLoad/boss
modules/
`,"Emacs.gitignore":`# -*- mode: gitignore; -*-
*~
\\#*\\#
/.emacs.desktop
/.emacs.desktop.lock
*.elc
auto-save-list
tramp
.\\#*

# Org-mode
.org-id-locations
*_archive

# flymake-mode
*_flymake.*

# eshell files
/eshell/history
/eshell/lastdir

# elpa packages
/elpa/

# reftex files
*.rel

# AUCTeX auto folder
/auto/

# cask packages
.cask/
dist/

# Flycheck
flycheck_*.el

# server auth directory
/server/

# projectiles files
.projectile

# directory configuration
.dir-locals.el

# network security
/network-security.data

`,"MicrosoftOffice.gitignore":`*.tmp

# Word temporary
~$*.doc*

# Word Auto Backup File
Backup of *.doc*

# Excel temporary
~$*.xls*

# Excel Backup File
*.xlk

# PowerPoint temporary
~$*.ppt*

# Visio autosave temporary files
*.~vsd*
`,"Agda.gitignore":`*.agdai
MAlonzo/**
`,"Concrete5.gitignore":`# ignore the error log and .htaccess and others
error_log
.htaccess

# concrete5 5.6 specific

config/site.php
files/cache/*
files/tmp/*

# concrete5 5.7 specific

# ignore everything but the index.html
/application/files/*
!/application/files/index.html

# ignore updates folder
/updates/*

# ignore sitemap.xml
/sitemap.xml
`,"Packer.gitignore":`# Cache objects
packer_cache/

# Crash log
crash.log

# https://www.packer.io/guides/hcl/variables
# Exclude all .pkrvars.hcl files, which are likely to contain sensitive data, 
# such as password, private keys, and other secrets. These should not be part of 
# version control as they are data points which are potentially sensitive and 
# subject to change depending on the environment.
#
*.pkrvars.hcl

# For built boxes
*.box
`,"Vim.gitignore":`# Swap
[._]*.s[a-v][a-z]
!*.svg  # comment out if you don't need vector files
[._]*.sw[a-p]
[._]s[a-rt-v][a-z]
[._]ss[a-gi-z]
[._]sw[a-p]

# Session
Session.vim
Sessionx.vim

# Temporary
.netrwhist
*~
# Auto-generated tag files
tags
# Persistent undo
[._]*.un~
`,"JDeveloper.gitignore":`# default application storage directory used by the IDE Performance Cache feature
.data/

# used for ADF styles caching
temp/

# default output directories
classes/
deploy/
javadoc/

# lock file, a part of Oracle Credential Store Framework
cwallet.sso.lck`,"FlexBuilder.gitignore":`bin/
bin-debug/
bin-release/
`,"ZendFramework.gitignore":`# Composer files
composer.phar
vendor/

# Local configs
config/autoload/*.local.php

# Binary gettext files
*.mo

# Data
data/logs/
data/cache/
data/sessions/
data/tmp/
temp/

#Doctrine 2
data/DoctrineORMModule/Proxy/
data/DoctrineORMModule/cache/

# Legacy ZF1
demos/
extras/documentation
`,"Ansible.gitignore":`*.retry
`,"Kotlin.gitignore":`# Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*
replay_pid*
`,"Vagrant.gitignore":`# General
.vagrant/

# Log files (if you are creating logs in debug mode, uncomment this)
# *.log
`,"Waf.gitignore":`# For projects that use the Waf build system: https://waf.io/
# Dot-hidden on Unix-like systems
.waf-*-*/
.waf3-*-*/
# Hidden directory on Windows (no dot)
waf-*-*/
waf3-*-*/
# Lockfile
.lock-waf_*_build
`,"Metals.gitignore":` # Generated Metals (Scala Language Server) files
 # Reference: https://scalameta.org/metals/
.metals/
.bloop/
project/metals.sbt
`,"Diff.gitignore":`*.patch
*.diff
`,"Idris.gitignore":`# Idris 2
*.ttc
*.ttm

# Idris 1
*.ibc
*.o
`,"Symfony.gitignore":`# Cache and logs (Symfony2)
/app/cache/*
/app/logs/*
!app/cache/.gitkeep
!app/logs/.gitkeep

# Email spool folder
/app/spool/*

# Cache, session files and logs (Symfony3)
/var/cache/*
/var/logs/*
/var/sessions/*
!var/cache/.gitkeep
!var/logs/.gitkeep
!var/sessions/.gitkeep

# Logs (Symfony4)
/var/log/*
!var/log/.gitkeep

# Parameters
/app/config/parameters.yml
/app/config/parameters.ini

# Managed by Composer
/app/bootstrap.php.cache
/var/bootstrap.php.cache
/bin/*
!bin/console
!bin/symfony_requirements
/vendor/

# Assets and user uploads
/web/bundles/
/web/uploads/

# PHPUnit
/app/phpunit.xml
/phpunit.xml

# Build data
/build/

# Composer PHAR
/composer.phar

# Backup entities generated with doctrine:generate:entities command
**/Entity/*~

# Embedded web-server pid file
/.web-server-pid
`,"Smalltalk.gitignore":`# changes file
*.changes
*.chg

# system image
*.image
*.img7
*.img

# Pharo Smalltalk Debug log file
PharoDebug.log

# Squeak Smalltalk Debug log file
SqueakDebug.log

# Dolphin Smalltalk source file
*.sml

# Dolphin Smalltalk error file
*.errors

# Monticello package cache
/package-cache

# playground cache
/play-cache
/play-stash

# Metacello-github cache
/github-cache
github-*.zip
`,"SVN.gitignore":`.svn/
`,"Go.gitignore":`# If you prefer the allow list template instead of the deny list, see community template:
# https://github.com/github/gitignore/blob/main/community/Golang/Go.AllowList.gitignore
#
# Binaries for programs and plugins
*.exe
*.exe~
*.dll
*.so
*.dylib

# Test binary, built with \`go test -c\`
*.test

# Output of the go coverage tool, specifically when used with LiteIDE
*.out

# Dependency directories (remove the comment below to include it)
# vendor/

# Go workspace file
go.work
`,"Magento.gitignore":`#--------------------------#
# Magento Default Files    #
#--------------------------#

/PATCH_*.sh

/app/etc/local.xml

/media/*
!/media/.htaccess

!/media/customer
/media/customer/*
!/media/customer/.htaccess

!/media/dhl
/media/dhl/*
!/media/dhl/logo.jpg

!/media/downloadable
/media/downloadable/*
!/media/downloadable/.htaccess

!/media/xmlconnect
/media/xmlconnect/*

!/media/xmlconnect/custom
/media/xmlconnect/custom/*
!/media/xmlconnect/custom/ok.gif

!/media/xmlconnect/original
/media/xmlconnect/original/*
!/media/xmlconnect/original/ok.gif

!/media/xmlconnect/system
/media/xmlconnect/system/*
!/media/xmlconnect/system/ok.gif

/var/*
!/var/.htaccess

!/var/package
/var/package/*
!/var/package/*.xml

`,"Nim.gitignore":`nimcache/
nimblecache/
htmldocs/
`,"Elm.gitignore":`# elm-package generated files
elm-stuff
# elm-repl generated files
repl-temp-*
`,"Bitrix.gitignore":`# gitignore template for 1C-Bitrix, a PHP-based CMS
# website: https://www.1c-bitrix.ru

#Exclude all of core files
/bitrix/*

#But not the templates and non bitrix components
!/bitrix/templates
!/bitrix/components
/bitrix/components/bitrix

#Exclude bitrix gadgets
!/bitrix/gadgets
/bitrix/gadgets/bitrix

#User can use that directory to store some stuff, but it's not really recommended, just use /local instead of this
!/bitrix/php_interface/

#Exclude database configs
/bitrix/php_interface/dbconn.php

#Exclude default file storage directory
/upload/
`,"Redcar.gitignore":`.redcar
`,"Qooxdoo.gitignore":`cache
cache-downloads
inspector
api
source/inspector.html
`,"ArchLinuxPackages.gitignore":`*.tar
*.tar.*
*.jar
*.exe
*.msi
*.zip
*.tgz
*.log
*.log.*
*.sig

pkg/
src/
`,"Mercurial.gitignore":`.hg/
.hgignore
.hgsigs
.hgsub
.hgsubstate
.hgtags
`,"NasaSpecsIntact.gitignore":`# gitignore template for Nasa SpecsIntact (SI)
# Website: https://specsintact.ksc.nasa.gov/
#
# Recommended: 
# MicrosoftOffice.gitignore
# 

# SpecsIntact (SI) Locking file; this would lock everyone out.
*.se$

# SI Reports; auto-generated. They do not belong in the repository
# as they will be re-created exactly when using a specific checkout point.
*.RPT
ADDRVER.*
BRKTVER.*
DUPEREF.*
REFVER.*
SECTVER.*
SUBMVER.*
TTLDIFFS.*

# SpecsIntact files that change a lot and don't actually affect SI
# PULL.TBL is an auto-generated file to help speed SI loading. 
PULL.TBL
pulltbl.bck

# Tailoring information.
# Keep tailor.tag; it is a list of tailoring options in SI.

# JOB.OTL informs SI where a spec section came from. 
# Keeping the old one isn't useful in git.
JOB.OTL.OLD

# OneNote TOC Files; SI Work Directories may be installed in a location co-located with OneNote
# notebooks, and if so, OneNote will litter the SI folder with these.
*.onetoc*

# Log files, typically tagfix or other auto generated logs that aren't useful 
# outside of the user that made them and clutter up the index.
*.log
`,"Stata.gitignore":`# .gitignore file for git projects containing Stata files
# Commercial statistical software: http://www.stata.com

# Stata dataset and output files
*.dta
*.gph
*.log
*.smcl
*.stpr
*.stsem

# Graphic export files from Stata
# Stata command graph export: http://www.stata.com/manuals14/g-2graphexport.pdf
#
# You may add graphic export files to your .gitignore. However you should be
# aware that this will exclude all image files from this main directory
# and subdirectories.
# *.ps
# *.eps
# *.wmf
# *.emf
# *.pdf
# *.png
# *.tif
`,"TurboGears2.gitignore":`*.py[co]

# Default development database
devdata.db

# Default data directory
data/*

# Packages
*.egg
*.egg-info
dist
build

# Installer logs
pip-log.txt

# Unit test / coverage reports
.coverage
.tox
`,"Splunk.gitignore":`# gitignore template for Splunk apps
# documentation: http://docs.splunk.com/Documentation/Splunk/6.2.3/admin/Defaultmetaconf

# Splunk local meta file
local.meta

# Splunk local folder
local
`,"SynopsysVCS.gitignore":`# Waveform formats
*.vcd
*.vpd
*.evcd
*.fsdb

# Default name of the simulation executable.  A different name can be
# specified with this switch (the associated daidir database name is
# also taken from here):  -o <path>/<filename>
simv

# Generated for Verilog and VHDL top configs
simv.daidir/
simv.db.dir/

# Infrastructure necessary to co-simulate SystemC models with
# Verilog/VHDL models.  An alternate directory may be specified with this
# switch:  -Mdir=<directory_path>
csrc/

# Log file - the following switch allows to specify the file that will be
# used to write all messages from simulation:  -l <filename>
*.log

# Coverage results (generated with urg) and database location.  The
# following switch can also be used:  urg -dir <coverage_directory>.vdb
simv.vdb/
urgReport/

# DVE and UCLI related files.
DVEfiles/
ucli.key

# When the design is elaborated for DirectC, the following file is created
# with declarations for C/C++ functions.
vc_hdrs.h
`,"Composer.gitignore":`composer.phar
/vendor/

# Commit your application's lock file https://getcomposer.org/doc/01-basic-usage.md#commit-your-composer-lock-file-to-version-control
# You may choose to ignore a library lock file http://getcomposer.org/doc/02-libraries.md#lock-file
# composer.lock
`,"Ensime.gitignore":`# Ensime specific
.ensime
.ensime_cache/
.ensime_lucene/
`,"JBoss.gitignore":`jboss/server/all/deploy/project.ext
jboss/server/default/deploy/project.ext
jboss/server/minimal/deploy/project.ext
jboss/server/all/log/*.log
jboss/server/all/tmp/**/*
jboss/server/all/data/**/*
jboss/server/all/work/**/*
jboss/server/default/log/*.log
jboss/server/default/tmp/**/*
jboss/server/default/data/**/*
jboss/server/default/work/**/*
jboss/server/minimal/log/*.log
jboss/server/minimal/tmp/**/*
jboss/server/minimal/data/**/*
jboss/server/minimal/work/**/*

# deployed package files #

*.DEPLOYED
`,"NWjs.gitignore":`# gitignore template for NW.js projects
# website: https://nwjs.io/

# Seen in standard and sdk versions
credits.html
locales/
libEGL.dll
libGLEv2.dll
node.dll
nw.dll
nw.exe
natives_blob.bin
nw_100_percent.pak
nw_200_percent.pak
nw_elf.dll
snapshot_blob.bin
resources.pak

# Seen only in standard
d3dcompiler_47.dll
ffmpeg.dll
icudtl.dat

# Seen only in sdk
pnacl/
chromedriver.exe
nacl_irt_x86_64.nexe
nwjc.exe
payload.exe
`,"Lithium.gitignore":`libraries/*
resources/tmp/*
`,"TortoiseGit.gitignore":`# Project-level settings
/.tgitconfig
`,"Archives.gitignore":`# It's better to unpack these files and commit the raw source because
# git has its own built in compression methods.
*.7z
*.jar
*.rar
*.zip
*.gz
*.gzip
*.tgz
*.bzip
*.bzip2
*.bz2
*.xz
*.lzma
*.cab
*.xar

# Packing-only formats
*.iso
*.tar

# Package management formats
*.dmg
*.xpi
*.gem
*.egg
*.deb
*.rpm
*.msi
*.msm
*.msp
*.txz
`,"Beef.gitignore":`build/
recovery/
BeefSpace_User.toml
`,"SublimeText.gitignore":`# Cache files for Sublime Text
*.tmlanguage.cache
*.tmPreferences.cache
*.stTheme.cache

# Workspace files are user-specific
*.sublime-workspace

# Project files should be checked into the repository, unless a significant
# proportion of contributors will probably not be using Sublime Text
# *.sublime-project

# SFTP configuration file
sftp-config.json
sftp-config-alt*.json

# Package control specific files
Package Control.last-run
Package Control.ca-list
Package Control.ca-bundle
Package Control.system-ca-bundle
Package Control.cache/
Package Control.ca-certs/
Package Control.merged-ca-bundle
Package Control.user-ca-bundle
oscrypto-ca-bundle.crt
bh_unicode_properties.cache

# Sublime-github package stores a github token in this file
# https://packagecontrol.io/packages/sublime-github
GitHub.sublime-settings
`,"LyX.gitignore":`# Ignore LyX backup and autosave files
# http://www.lyx.org/
*.lyx~
*.lyx#
`,"Ada.gitignore":`# Object file
*.o

# Ada Library Information
*.ali
`,"Windows.gitignore":`# Windows thumbnail cache files
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db

# Dump file
*.stackdump

# Folder config file
[Dd]esktop.ini

# Recycle Bin used on file shares
$RECYCLE.BIN/

# Windows Installer files
*.cab
*.msi
*.msix
*.msm
*.msp

# Windows shortcuts
*.lnk
`,"Haskell.gitignore":`dist
dist-*
cabal-dev
*.o
*.hi
*.hie
*.chi
*.chs.h
*.dyn_o
*.dyn_hi
.hpc
.hsenv
.cabal-sandbox/
cabal.sandbox.config
*.prof
*.aux
*.hp
*.eventlog
.stack-work/
cabal.project.local
cabal.project.local~
.HTF/
.ghc.environment.*
`,"SBT.gitignore":`# Simple Build Tool
# http://www.scala-sbt.org/release/docs/Getting-Started/Directories.html#configuring-version-control

dist/*
target/
lib_managed/
src_managed/
project/boot/
project/plugins/project/
.history
.cache
.lib/
`,"Joomla.gitignore":`/.htaccess
/administrator/cache/*
/administrator/components/com_actionlogs/*
/administrator/components/com_admin/*
/administrator/components/com_ajax/*
/administrator/components/com_associations/*
/administrator/components/com_banners/*
/administrator/components/com_cache/*
/administrator/components/com_categories/*
/administrator/components/com_checkin/*
/administrator/components/com_config/*
/administrator/components/com_contact/*
/administrator/components/com_content/*
/administrator/components/com_contenthistory/*
/administrator/components/com_cpanel/*
/administrator/components/com_fields/*
/administrator/components/com_finder/*
/administrator/components/com_installer/*
/administrator/components/com_joomlaupdate/*
/administrator/components/com_languages/*
/administrator/components/com_login/*
/administrator/components/com_media/*
/administrator/components/com_menus/*
/administrator/components/com_messages/*
/administrator/components/com_modules/*
/administrator/components/com_newsfeeds/*
/administrator/components/com_plugins/*
/administrator/components/com_postinstall/*
/administrator/components/com_privacy/*
/administrator/components/com_redirect/*
/administrator/components/com_search/*
/administrator/components/com_tags/*
/administrator/components/com_templates/*
/administrator/components/com_users/*
/administrator/help/*
/administrator/includes/*
/administrator/index.php
/administrator/language/en-GB/en-GB.com_actionlogs.ini
/administrator/language/en-GB/en-GB.com_actionlogs.sys.ini
/administrator/language/en-GB/en-GB.com_admin.ini
/administrator/language/en-GB/en-GB.com_admin.sys.ini
/administrator/language/en-GB/en-GB.com_ajax.ini
/administrator/language/en-GB/en-GB.com_ajax.sys.ini
/administrator/language/en-GB/en-GB.com_associations.ini
/administrator/language/en-GB/en-GB.com_associations.sys.ini
/administrator/language/en-GB/en-GB.com_banners.ini
/administrator/language/en-GB/en-GB.com_banners.sys.ini
/administrator/language/en-GB/en-GB.com_cache.ini
/administrator/language/en-GB/en-GB.com_cache.sys.ini
/administrator/language/en-GB/en-GB.com_categories.ini
/administrator/language/en-GB/en-GB.com_categories.sys.ini
/administrator/language/en-GB/en-GB.com_checkin.ini
/administrator/language/en-GB/en-GB.com_checkin.sys.ini
/administrator/language/en-GB/en-GB.com_config.ini
/administrator/language/en-GB/en-GB.com_config.sys.ini
/administrator/language/en-GB/en-GB.com_contact.ini
/administrator/language/en-GB/en-GB.com_contact.sys.ini
/administrator/language/en-GB/en-GB.com_content.ini
/administrator/language/en-GB/en-GB.com_content.sys.ini
/administrator/language/en-GB/en-GB.com_contenthistory.ini
/administrator/language/en-GB/en-GB.com_contenthistory.sys.ini
/administrator/language/en-GB/en-GB.com_cpanel.ini
/administrator/language/en-GB/en-GB.com_cpanel.sys.ini
/administrator/language/en-GB/en-GB.com_fields.ini
/administrator/language/en-GB/en-GB.com_fields.sys.ini
/administrator/language/en-GB/en-GB.com_finder.ini
/administrator/language/en-GB/en-GB.com_finder.sys.ini
/administrator/language/en-GB/en-GB.com_installer.ini
/administrator/language/en-GB/en-GB.com_installer.sys.ini
/administrator/language/en-GB/en-GB.com_joomlaupdate.ini
/administrator/language/en-GB/en-GB.com_joomlaupdate.sys.ini
/administrator/language/en-GB/en-GB.com_languages.ini
/administrator/language/en-GB/en-GB.com_languages.sys.ini
/administrator/language/en-GB/en-GB.com_login.ini
/administrator/language/en-GB/en-GB.com_login.sys.ini
/administrator/language/en-GB/en-GB.com_mailto.sys.ini
/administrator/language/en-GB/en-GB.com_media.ini
/administrator/language/en-GB/en-GB.com_media.sys.ini
/administrator/language/en-GB/en-GB.com_menus.ini
/administrator/language/en-GB/en-GB.com_menus.sys.ini
/administrator/language/en-GB/en-GB.com_messages.ini
/administrator/language/en-GB/en-GB.com_messages.sys.ini
/administrator/language/en-GB/en-GB.com_modules.ini
/administrator/language/en-GB/en-GB.com_modules.sys.ini
/administrator/language/en-GB/en-GB.com_newsfeeds.ini
/administrator/language/en-GB/en-GB.com_newsfeeds.sys.ini
/administrator/language/en-GB/en-GB.com_plugins.ini
/administrator/language/en-GB/en-GB.com_plugins.sys.ini
/administrator/language/en-GB/en-GB.com_postinstall.ini
/administrator/language/en-GB/en-GB.com_postinstall.sys.ini
/administrator/language/en-GB/en-GB.com_privacy.ini
/administrator/language/en-GB/en-GB.com_privacy.sys.ini
/administrator/language/en-GB/en-GB.com_redirect.ini
/administrator/language/en-GB/en-GB.com_redirect.sys.ini
/administrator/language/en-GB/en-GB.com_search.ini
/administrator/language/en-GB/en-GB.com_search.sys.ini
/administrator/language/en-GB/en-GB.com_tags.ini
/administrator/language/en-GB/en-GB.com_tags.sys.ini
/administrator/language/en-GB/en-GB.com_templates.ini
/administrator/language/en-GB/en-GB.com_templates.sys.ini
/administrator/language/en-GB/en-GB.com_users.ini
/administrator/language/en-GB/en-GB.com_users.sys.ini
/administrator/language/en-GB/en-GB.com_weblinks.ini
/administrator/language/en-GB/en-GB.com_weblinks.sys.ini
/administrator/language/en-GB/en-GB.com_wrapper.ini
/administrator/language/en-GB/en-GB.com_wrapper.sys.ini
/administrator/language/en-GB/en-GB.ini
/administrator/language/en-GB/en-GB.lib_joomla.ini
/administrator/language/en-GB/en-GB.localise.php
/administrator/language/en-GB/en-GB.mod_custom.ini
/administrator/language/en-GB/en-GB.mod_custom.sys.ini
/administrator/language/en-GB/en-GB.mod_feed.ini
/administrator/language/en-GB/en-GB.mod_feed.sys.ini
/administrator/language/en-GB/en-GB.mod_latest.ini
/administrator/language/en-GB/en-GB.mod_latest.sys.ini
/administrator/language/en-GB/en-GB.mod_latestactions.ini
/administrator/language/en-GB/en-GB.mod_latestactions.sys.ini
/administrator/language/en-GB/en-GB.mod_logged.ini
/administrator/language/en-GB/en-GB.mod_logged.sys.ini
/administrator/language/en-GB/en-GB.mod_login.ini
/administrator/language/en-GB/en-GB.mod_login.sys.ini
/administrator/language/en-GB/en-GB.mod_menu.ini
/administrator/language/en-GB/en-GB.mod_menu.sys.ini
/administrator/language/en-GB/en-GB.mod_multilangstatus.ini
/administrator/language/en-GB/en-GB.mod_multilangstatus.sys.ini
/administrator/language/en-GB/en-GB.mod_online.ini
/administrator/language/en-GB/en-GB.mod_online.sys.ini
/administrator/language/en-GB/en-GB.mod_popular.ini
/administrator/language/en-GB/en-GB.mod_popular.sys.ini
/administrator/language/en-GB/en-GB.mod_privacy_dashboard.ini
/administrator/language/en-GB/en-GB.mod_privacy_dashboard.sys.ini
/administrator/language/en-GB/en-GB.mod_quickicon.ini
/administrator/language/en-GB/en-GB.mod_quickicon.sys.ini
/administrator/language/en-GB/en-GB.mod_sampledata.ini
/administrator/language/en-GB/en-GB.mod_sampledata.sys.ini
/administrator/language/en-GB/en-GB.mod_stats_admin.ini
/administrator/language/en-GB/en-GB.mod_stats_admin.sys.ini
/administrator/language/en-GB/en-GB.mod_status.ini
/administrator/language/en-GB/en-GB.mod_status.sys.ini
/administrator/language/en-GB/en-GB.mod_submenu.ini
/administrator/language/en-GB/en-GB.mod_submenu.sys.ini
/administrator/language/en-GB/en-GB.mod_title.ini
/administrator/language/en-GB/en-GB.mod_title.sys.ini
/administrator/language/en-GB/en-GB.mod_toolbar.ini
/administrator/language/en-GB/en-GB.mod_toolbar.sys.ini
/administrator/language/en-GB/en-GB.mod_unread.ini
/administrator/language/en-GB/en-GB.mod_unread.sys.ini
/administrator/language/en-GB/en-GB.mod_version.ini
/administrator/language/en-GB/en-GB.mod_version.sys.ini
/administrator/language/en-GB/en-GB.plg_actionlog_joomla.ini
/administrator/language/en-GB/en-GB.plg_actionlog_joomla.sys.ini
/administrator/language/en-GB/en-GB.plg_authentication_cookie.ini
/administrator/language/en-GB/en-GB.plg_authentication_cookie.sys.ini
/administrator/language/en-GB/en-GB.plg_authentication_example.ini
/administrator/language/en-GB/en-GB.plg_authentication_example.sys.ini
/administrator/language/en-GB/en-GB.plg_authentication_gmail.ini
/administrator/language/en-GB/en-GB.plg_authentication_gmail.sys.ini
/administrator/language/en-GB/en-GB.plg_authentication_joomla.ini
/administrator/language/en-GB/en-GB.plg_authentication_joomla.sys.ini
/administrator/language/en-GB/en-GB.plg_authentication_ldap.ini
/administrator/language/en-GB/en-GB.plg_authentication_ldap.sys.ini
/administrator/language/en-GB/en-GB.plg_captcha_recaptcha.ini
/administrator/language/en-GB/en-GB.plg_captcha_recaptcha.sys.ini
/administrator/language/en-GB/en-GB.plg_captcha_recaptcha_invisible.ini
/administrator/language/en-GB/en-GB.plg_captcha_recaptcha_invisible.sys.ini
/administrator/language/en-GB/en-GB.plg_content_confirmconsent.ini
/administrator/language/en-GB/en-GB.plg_content_confirmconsent.sys.ini
/administrator/language/en-GB/en-GB.plg_content_contact.ini
/administrator/language/en-GB/en-GB.plg_content_contact.sys.ini
/administrator/language/en-GB/en-GB.plg_content_emailcloak.ini
/administrator/language/en-GB/en-GB.plg_content_emailcloak.sys.ini
/administrator/language/en-GB/en-GB.plg_content_fields.ini
/administrator/language/en-GB/en-GB.plg_content_fields.sys.ini
/administrator/language/en-GB/en-GB.plg_content_finder.ini
/administrator/language/en-GB/en-GB.plg_content_finder.sys.ini
/administrator/language/en-GB/en-GB.plg_content_geshi.ini
/administrator/language/en-GB/en-GB.plg_content_geshi.sys.ini
/administrator/language/en-GB/en-GB.plg_content_joomla.ini
/administrator/language/en-GB/en-GB.plg_content_joomla.sys.ini
/administrator/language/en-GB/en-GB.plg_content_loadmodule.ini
/administrator/language/en-GB/en-GB.plg_content_loadmodule.sys.ini
/administrator/language/en-GB/en-GB.plg_content_pagebreak.ini
/administrator/language/en-GB/en-GB.plg_content_pagebreak.sys.ini
/administrator/language/en-GB/en-GB.plg_content_pagenavigation.ini
/administrator/language/en-GB/en-GB.plg_content_pagenavigation.sys.ini
/administrator/language/en-GB/en-GB.plg_content_vote.ini
/administrator/language/en-GB/en-GB.plg_content_vote.sys.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_article.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_article.sys.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_contact.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_contact.sys.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_fields.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_fields.sys.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_image.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_image.sys.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_menu.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_menu.sys.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_module.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_module.sys.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_pagebreak.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_pagebreak.sys.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_readmore.ini
/administrator/language/en-GB/en-GB.plg_editors-xtd_readmore.sys.ini
/administrator/language/en-GB/en-GB.plg_editors_codemirror.ini
/administrator/language/en-GB/en-GB.plg_editors_codemirror.sys.ini
/administrator/language/en-GB/en-GB.plg_editors_none.ini
/administrator/language/en-GB/en-GB.plg_editors_none.sys.ini
/administrator/language/en-GB/en-GB.plg_editors_tinymce.ini
/administrator/language/en-GB/en-GB.plg_editors_tinymce.sys.ini
/administrator/language/en-GB/en-GB.plg_extension_joomla.ini
/administrator/language/en-GB/en-GB.plg_extension_joomla.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_calendar.ini
/administrator/language/en-GB/en-GB.plg_fields_calendar.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_checkboxes.ini
/administrator/language/en-GB/en-GB.plg_fields_checkboxes.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_color.ini
/administrator/language/en-GB/en-GB.plg_fields_color.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_editor.ini
/administrator/language/en-GB/en-GB.plg_fields_editor.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_image.ini
/administrator/language/en-GB/en-GB.plg_fields_image.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_imagelist.ini
/administrator/language/en-GB/en-GB.plg_fields_imagelist.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_integer.ini
/administrator/language/en-GB/en-GB.plg_fields_integer.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_list.ini
/administrator/language/en-GB/en-GB.plg_fields_list.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_media.ini
/administrator/language/en-GB/en-GB.plg_fields_media.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_radio.ini
/administrator/language/en-GB/en-GB.plg_fields_radio.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_repeatable.ini
/administrator/language/en-GB/en-GB.plg_fields_repeatable.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_sql.ini
/administrator/language/en-GB/en-GB.plg_fields_sql.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_text.ini
/administrator/language/en-GB/en-GB.plg_fields_text.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_textarea.ini
/administrator/language/en-GB/en-GB.plg_fields_textarea.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_url.ini
/administrator/language/en-GB/en-GB.plg_fields_url.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_user.ini
/administrator/language/en-GB/en-GB.plg_fields_user.sys.ini
/administrator/language/en-GB/en-GB.plg_fields_usergrouplist.ini
/administrator/language/en-GB/en-GB.plg_fields_usergrouplist.sys.ini
/administrator/language/en-GB/en-GB.plg_finder_categories.ini
/administrator/language/en-GB/en-GB.plg_finder_categories.sys.ini
/administrator/language/en-GB/en-GB.plg_finder_contacts.ini
/administrator/language/en-GB/en-GB.plg_finder_contacts.sys.ini
/administrator/language/en-GB/en-GB.plg_finder_content.ini
/administrator/language/en-GB/en-GB.plg_finder_content.sys.ini
/administrator/language/en-GB/en-GB.plg_finder_newsfeeds.ini
/administrator/language/en-GB/en-GB.plg_finder_newsfeeds.sys.ini
/administrator/language/en-GB/en-GB.plg_finder_tags.ini
/administrator/language/en-GB/en-GB.plg_finder_tags.sys.ini
/administrator/language/en-GB/en-GB.plg_finder_weblinks.ini
/administrator/language/en-GB/en-GB.plg_finder_weblinks.sys.ini
/administrator/language/en-GB/en-GB.plg_installer_folderinstaller.ini
/administrator/language/en-GB/en-GB.plg_installer_folderinstaller.sys.ini
/administrator/language/en-GB/en-GB.plg_installer_packageinstaller.ini
/administrator/language/en-GB/en-GB.plg_installer_packageinstaller.sys.ini
/administrator/language/en-GB/en-GB.plg_installer_urlinstaller.ini
/administrator/language/en-GB/en-GB.plg_installer_urlinstaller.sys.ini
/administrator/language/en-GB/en-GB.plg_installer_webinstaller.ini
/administrator/language/en-GB/en-GB.plg_installer_webinstaller.sys.ini
/administrator/language/en-GB/en-GB.plg_privacy_actionlogs.ini
/administrator/language/en-GB/en-GB.plg_privacy_actionlogs.sys.ini
/administrator/language/en-GB/en-GB.plg_privacy_consents.ini
/administrator/language/en-GB/en-GB.plg_privacy_consents.sys.ini
/administrator/language/en-GB/en-GB.plg_privacy_contact.ini
/administrator/language/en-GB/en-GB.plg_privacy_contact.sys.ini
/administrator/language/en-GB/en-GB.plg_privacy_content.ini
/administrator/language/en-GB/en-GB.plg_privacy_content.sys.ini
/administrator/language/en-GB/en-GB.plg_privacy_message.ini
/administrator/language/en-GB/en-GB.plg_privacy_message.sys.ini
/administrator/language/en-GB/en-GB.plg_privacy_user.ini
/administrator/language/en-GB/en-GB.plg_privacy_user.sys.ini
/administrator/language/en-GB/en-GB.plg_quickicon_extensionupdate.ini
/administrator/language/en-GB/en-GB.plg_quickicon_extensionupdate.sys.ini
/administrator/language/en-GB/en-GB.plg_quickicon_joomlaupdate.ini
/administrator/language/en-GB/en-GB.plg_quickicon_joomlaupdate.sys.ini
/administrator/language/en-GB/en-GB.plg_quickicon_phpversioncheck.ini
/administrator/language/en-GB/en-GB.plg_quickicon_phpversioncheck.sys.ini
/administrator/language/en-GB/en-GB.plg_quickicon_privacycheck.ini
/administrator/language/en-GB/en-GB.plg_quickicon_privacycheck.sys.ini
/administrator/language/en-GB/en-GB.plg_sampledata_blog.ini
/administrator/language/en-GB/en-GB.plg_sampledata_blog.sys.ini
/administrator/language/en-GB/en-GB.plg_search_categories.ini
/administrator/language/en-GB/en-GB.plg_search_categories.sys.ini
/administrator/language/en-GB/en-GB.plg_search_contacts.ini
/administrator/language/en-GB/en-GB.plg_search_contacts.sys.ini
/administrator/language/en-GB/en-GB.plg_search_content.ini
/administrator/language/en-GB/en-GB.plg_search_content.sys.ini
/administrator/language/en-GB/en-GB.plg_search_newsfeeds.ini
/administrator/language/en-GB/en-GB.plg_search_newsfeeds.sys.ini
/administrator/language/en-GB/en-GB.plg_search_tags.ini
/administrator/language/en-GB/en-GB.plg_search_tags.sys.ini
/administrator/language/en-GB/en-GB.plg_search_weblinks.ini
/administrator/language/en-GB/en-GB.plg_search_weblinks.sys.ini
/administrator/language/en-GB/en-GB.plg_system_actionlogs.ini
/administrator/language/en-GB/en-GB.plg_system_actionlogs.sys.ini
/administrator/language/en-GB/en-GB.plg_system_cache.ini
/administrator/language/en-GB/en-GB.plg_system_cache.sys.ini
/administrator/language/en-GB/en-GB.plg_system_debug.ini
/administrator/language/en-GB/en-GB.plg_system_debug.sys.ini
/administrator/language/en-GB/en-GB.plg_system_fields.ini
/administrator/language/en-GB/en-GB.plg_system_fields.sys.ini
/administrator/language/en-GB/en-GB.plg_system_highlight.ini
/administrator/language/en-GB/en-GB.plg_system_highlight.sys.ini
/administrator/language/en-GB/en-GB.plg_system_languagecode.ini
/administrator/language/en-GB/en-GB.plg_system_languagecode.sys.ini
/administrator/language/en-GB/en-GB.plg_system_languagefilter.ini
/administrator/language/en-GB/en-GB.plg_system_languagefilter.sys.ini
/administrator/language/en-GB/en-GB.plg_system_log.ini
/administrator/language/en-GB/en-GB.plg_system_log.sys.ini
/administrator/language/en-GB/en-GB.plg_system_logout.ini
/administrator/language/en-GB/en-GB.plg_system_logout.sys.ini
/administrator/language/en-GB/en-GB.plg_system_logrotation.ini
/administrator/language/en-GB/en-GB.plg_system_logrotation.sys.ini
/administrator/language/en-GB/en-GB.plg_system_p3p.ini
/administrator/language/en-GB/en-GB.plg_system_p3p.sys.ini
/administrator/language/en-GB/en-GB.plg_system_privacyconsent.ini
/administrator/language/en-GB/en-GB.plg_system_privacyconsent.sys.ini
/administrator/language/en-GB/en-GB.plg_system_redirect.ini
/administrator/language/en-GB/en-GB.plg_system_redirect.sys.ini
/administrator/language/en-GB/en-GB.plg_system_remember.ini
/administrator/language/en-GB/en-GB.plg_system_remember.sys.ini
/administrator/language/en-GB/en-GB.plg_system_sef.ini
/administrator/language/en-GB/en-GB.plg_system_sef.sys.ini
/administrator/language/en-GB/en-GB.plg_system_sessiongc.ini
/administrator/language/en-GB/en-GB.plg_system_sessiongc.sys.ini
/administrator/language/en-GB/en-GB.plg_system_stats.ini
/administrator/language/en-GB/en-GB.plg_system_stats.sys.ini
/administrator/language/en-GB/en-GB.plg_system_updatenotification.ini
/administrator/language/en-GB/en-GB.plg_system_updatenotification.sys.ini
/administrator/language/en-GB/en-GB.plg_twofactorauth_totp.ini
/administrator/language/en-GB/en-GB.plg_twofactorauth_totp.sys.ini
/administrator/language/en-GB/en-GB.plg_twofactorauth_yubikey.ini
/administrator/language/en-GB/en-GB.plg_twofactorauth_yubikey.sys.ini
/administrator/language/en-GB/en-GB.plg_user_contactcreator.ini
/administrator/language/en-GB/en-GB.plg_user_contactcreator.sys.ini
/administrator/language/en-GB/en-GB.plg_user_joomla.ini
/administrator/language/en-GB/en-GB.plg_user_joomla.sys.ini
/administrator/language/en-GB/en-GB.plg_user_profile.ini
/administrator/language/en-GB/en-GB.plg_user_profile.sys.ini
/administrator/language/en-GB/en-GB.plg_user_terms.ini
/administrator/language/en-GB/en-GB.plg_user_terms.sys.ini
/administrator/language/en-GB/en-GB.tpl_hathor.ini
/administrator/language/en-GB/en-GB.tpl_hathor.sys.ini
/administrator/language/en-GB/en-GB.tpl_isis.ini
/administrator/language/en-GB/en-GB.tpl_isis.sys.ini
/administrator/language/en-GB/en-GB.xml
/administrator/language/en-GB/install.xml
/administrator/language/overrides/*
/administrator/language/index.html
/administrator/logs/*
/administrator/manifests/files/joomla.xml
/administrator/manifests/libraries/fof.xml
/administrator/manifests/libraries/idna_convert.xml
/administrator/manifests/libraries/joomla.xml
/administrator/manifests/libraries/phpass.xml
/administrator/manifests/libraries/phputf8.xml
/administrator/manifests/packages/pkg_en-GB.xml
/administrator/manifests/packages/index.html
/administrator/modules/mod_custom/*
/administrator/modules/mod_feed/*
/administrator/modules/mod_latest/*
/administrator/modules/mod_latestactions/*
/administrator/modules/mod_logged/*
/administrator/modules/mod_login/*
/administrator/modules/mod_menu/*
/administrator/modules/mod_multilangstatus/*
/administrator/modules/mod_online/*
/administrator/modules/mod_popular/*
/administrator/modules/mod_privacy_dashboard/*
/administrator/modules/mod_quickicon/*
/administrator/modules/mod_sampledata/*
/administrator/modules/mod_stats_admin/*
/administrator/modules/mod_status/*
/administrator/modules/mod_submenu/*
/administrator/modules/mod_title/*
/administrator/modules/mod_toolbar/*
/administrator/modules/mod_unread/*
/administrator/modules/mod_version/*
/administrator/templates/hathor/*
/administrator/templates/isis/*
/administrator/templates/system/*
/bin/*
/cache/*
/cli/*
/components/com_ajax/*
/components/com_banners/*
/components/com_config/*
/components/com_contact/*
/components/com_content/*
/components/com_contenthistory/*
/components/com_fields/*
/components/com_finder/*
/components/com_mailto/*
/components/com_media/*
/components/com_menus/*
/components/com_modules/*
/components/com_newsfeeds/*
/components/com_privacy/*
/components/com_search/*
/components/com_tags/*
/components/com_users/*
/components/com_wrapper/*
/components/index.html
/images/banners/*
/images/headers/*
/images/sampledata/*
/images/index.html
/images/joomla*
/images/powered_by.png
/includes/*
/installation/*
/language/en-GB/en-GB.com_ajax.ini
/language/en-GB/en-GB.com_config.ini
/language/en-GB/en-GB.com_contact.ini
/language/en-GB/en-GB.com_content.ini
/language/en-GB/en-GB.com_finder.ini
/language/en-GB/en-GB.com_mailto.ini
/language/en-GB/en-GB.com_media.ini
/language/en-GB/en-GB.com_messages.ini
/language/en-GB/en-GB.com_newsfeeds.ini
/language/en-GB/en-GB.com_privacy.ini
/language/en-GB/en-GB.com_search.ini
/language/en-GB/en-GB.com_tags.ini
/language/en-GB/en-GB.com_users.ini
/language/en-GB/en-GB.com_weblinks.ini
/language/en-GB/en-GB.com_wrapper.ini
/language/en-GB/en-GB.files_joomla.sys.ini
/language/en-GB/en-GB.finder_cli.ini
/language/en-GB/en-GB.ini
/language/en-GB/en-GB.lib_fof.ini
/language/en-GB/en-GB.lib_fof.sys.ini
/language/en-GB/en-GB.lib_idna_convert.sys.ini
/language/en-GB/en-GB.lib_joomla.ini
/language/en-GB/en-GB.lib_joomla.sys.ini
/language/en-GB/en-GB.lib_phpass.sys.ini
/language/en-GB/en-GB.lib_phpmailer.sys.ini
/language/en-GB/en-GB.lib_phputf8.sys.ini
/language/en-GB/en-GB.lib_simplepie.sys.ini
/language/en-GB/en-GB.localise.php
/language/en-GB/en-GB.mod_articles_archive.ini
/language/en-GB/en-GB.mod_articles_archive.sys.ini
/language/en-GB/en-GB.mod_articles_categories.ini
/language/en-GB/en-GB.mod_articles_categories.sys.ini
/language/en-GB/en-GB.mod_articles_category.ini
/language/en-GB/en-GB.mod_articles_category.sys.ini
/language/en-GB/en-GB.mod_articles_latest.ini
/language/en-GB/en-GB.mod_articles_latest.sys.ini
/language/en-GB/en-GB.mod_articles_news.ini
/language/en-GB/en-GB.mod_articles_news.sys.ini
/language/en-GB/en-GB.mod_articles_popular.ini
/language/en-GB/en-GB.mod_articles_popular.sys.ini
/language/en-GB/en-GB.mod_banners.ini
/language/en-GB/en-GB.mod_banners.sys.ini
/language/en-GB/en-GB.mod_breadcrumbs.ini
/language/en-GB/en-GB.mod_breadcrumbs.sys.ini
/language/en-GB/en-GB.mod_custom.ini
/language/en-GB/en-GB.mod_custom.sys.ini
/language/en-GB/en-GB.mod_feed.ini
/language/en-GB/en-GB.mod_feed.sys.ini
/language/en-GB/en-GB.mod_finder.ini
/language/en-GB/en-GB.mod_finder.sys.ini
/language/en-GB/en-GB.mod_footer.ini
/language/en-GB/en-GB.mod_footer.sys.ini
/language/en-GB/en-GB.mod_languages.ini
/language/en-GB/en-GB.mod_languages.sys.ini
/language/en-GB/en-GB.mod_login.ini
/language/en-GB/en-GB.mod_login.sys.ini
/language/en-GB/en-GB.mod_menu.ini
/language/en-GB/en-GB.mod_menu.sys.ini
/language/en-GB/en-GB.mod_random_image.ini
/language/en-GB/en-GB.mod_random_image.sys.ini
/language/en-GB/en-GB.mod_related_items.ini
/language/en-GB/en-GB.mod_related_items.sys.ini
/language/en-GB/en-GB.mod_search.ini
/language/en-GB/en-GB.mod_search.sys.ini
/language/en-GB/en-GB.mod_stats.ini
/language/en-GB/en-GB.mod_stats.sys.ini
/language/en-GB/en-GB.mod_syndicate.ini
/language/en-GB/en-GB.mod_syndicate.sys.ini
/language/en-GB/en-GB.mod_tags_popular.ini
/language/en-GB/en-GB.mod_tags_popular.sys.ini
/language/en-GB/en-GB.mod_tags_similar.ini
/language/en-GB/en-GB.mod_tags_similar.sys.ini
/language/en-GB/en-GB.mod_users_latest.ini
/language/en-GB/en-GB.mod_users_latest.sys.ini
/language/en-GB/en-GB.mod_weblinks.ini
/language/en-GB/en-GB.mod_weblinks.sys.ini
/language/en-GB/en-GB.mod_whosonline.ini
/language/en-GB/en-GB.mod_whosonline.sys.ini
/language/en-GB/en-GB.mod_wrapper.ini
/language/en-GB/en-GB.mod_wrapper.sys.ini
/language/en-GB/en-GB.tpl_atomic.ini
/language/en-GB/en-GB.tpl_atomic.sys.ini
/language/en-GB/en-GB.tpl_beez3.ini
/language/en-GB/en-GB.tpl_beez3.sys.ini
/language/en-GB/en-GB.tpl_beez5.ini
/language/en-GB/en-GB.tpl_beez5.sys.ini
/language/en-GB/en-GB.tpl_beez_20.ini
/language/en-GB/en-GB.tpl_beez_20.sys.ini
/language/en-GB/en-GB.tpl_protostar.ini
/language/en-GB/en-GB.tpl_protostar.sys.ini
/language/en-GB/en-GB.xml
/language/en-GB/install.xml
/language/overrides/*
/language/index.html
/layouts/joomla/*
/layouts/libraries/*
/layouts/plugins/*
/layouts/index.html
/libraries/cms/*
/libraries/fof/*
/libraries/idna_convert/*
/libraries/joomla/*
/libraries/legacy/*
/libraries/php-encryption/*
/libraries/phpass/*
/libraries/phpmailer/*
/libraries/phputf8/*
/libraries/simplepie/*
/libraries/src/*
/libraries/vendor/*
/libraries/classmap.php
/libraries/cms.php
/libraries/import.legacy.php
/libraries/import.php
/libraries/index.html
/libraries/loader.php
/media/cms/*
/media/com_associations/*
/media/com_contact/*
/media/com_content/*
/media/com_contenthistory/*
/media/com_fields/*
/media/com_finder/*
/media/com_joomlaupdate/*
/media/com_menus/*
/media/com_modules/*
/media/com_wrapper/*
/media/contacts/*
/media/editors/*
/media/jui/*
/media/mailto/*
/media/media/*
/media/mod_languages/*
/media/mod_sampledata/*
/media/overrider/*
/media/plg_captcha_recaptcha/*
/media/plg_captcha_recaptcha_invisible/*
/media/plg_quickicon_extensionupdate/*
/media/plg_quickicon_joomlaupdate/*
/media/plg_quickicon_privacycheck/*
/media/plg_system_highlight/*
/media/plg_system_stats/*
/media/plg_twofactorauth_totp/*
/media/system/*
/media/index.html
/modules/mod_articles_archive/*
/modules/mod_articles_categories/*
/modules/mod_articles_category/*
/modules/mod_articles_latest/*
/modules/mod_articles_news/*
/modules/mod_articles_popular/*
/modules/mod_banners/*
/modules/mod_breadcrumbs/*
/modules/mod_custom/*
/modules/mod_feed/*
/modules/mod_finder/*
/modules/mod_footer/*
/modules/mod_languages/*
/modules/mod_login/*
/modules/mod_menu/*
/modules/mod_random_image/*
/modules/mod_related_items/*
/modules/mod_search/*
/modules/mod_stats/*
/modules/mod_syndicate/*
/modules/mod_tags_popular/*
/modules/mod_tags_similar/*
/modules/mod_users_latest/*
/modules/mod_whosonline/*
/modules/mod_wrapper/*
/modules/index.html
/plugins/actionlog/joomla/*
/plugins/authentication/cookie/*
/plugins/authentication/example/*
/plugins/authentication/gmail/*
/plugins/authentication/joomla/*
/plugins/authentication/ldap/*
/plugins/captcha/recaptcha/*
/plugins/captcha/recaptcha_invisible/*
/plugins/content/confirmconsent/*
/plugins/content/contact/*
/plugins/content/emailcloak/*
/plugins/content/example/*
/plugins/content/fields/*
/plugins/content/finder/*
/plugins/content/geshi/*
/plugins/content/joomla/*
/plugins/content/loadmodule/*
/plugins/content/pagebreak/*
/plugins/content/pagenavigation/*
/plugins/content/vote/*
/plugins/editors/codemirror/*
/plugins/editors/none/*
/plugins/editors/tinymce/*
/plugins/editors-xtd/article/*
/plugins/editors-xtd/contact/*
/plugins/editors-xtd/fields/*
/plugins/editors-xtd/image/*
/plugins/editors-xtd/menu/*
/plugins/editors-xtd/module/*
/plugins/editors-xtd/pagebreak/*
/plugins/editors-xtd/readmore/*
/plugins/extension/example/*
/plugins/extension/joomla/*
/plugins/fields/calendar/*
/plugins/fields/checkboxes/*
/plugins/fields/color/*
/plugins/fields/editor/*
/plugins/fields/imagelist/*
/plugins/fields/integer/*
/plugins/fields/list/*
/plugins/fields/media/*
/plugins/fields/radio/*
/plugins/fields/repeatable/*
/plugins/fields/sql/*
/plugins/fields/text/*
/plugins/fields/textarea/*
/plugins/fields/url/*
/plugins/fields/user/*
/plugins/fields/usergrouplist/*
/plugins/finder/categories/*
/plugins/finder/contacts/*
/plugins/finder/content/*
/plugins/finder/newsfeeds/*
/plugins/finder/tags/*
/plugins/installer/folderinstaller/*
/plugins/installer/packageinstaller/*
/plugins/installer/urlinstaller/*
/plugins/privacy/actionlogs/*
/plugins/privacy/consents/*
/plugins/privacy/contact/*
/plugins/privacy/content/*
/plugins/privacy/message/*
/plugins/privacy/user/*
/plugins/quickicon/extensionupdate/*
/plugins/quickicon/joomlaupdate/*
/plugins/quickicon/phpversioncheck/*
/plugins/quickicon/privacycheck/*
/plugins/quickicon/index.html
/plugins/sampledata/blog/*
/plugins/search/categories/*
/plugins/search/contacts/*
/plugins/search/content/*
/plugins/search/newsfeeds/*
/plugins/search/tags/*
/plugins/search/weblinks/*
/plugins/search/index.html
/plugins/system/actionlogs/*
/plugins/system/cache/*
/plugins/system/debug/*
/plugins/system/fields/*
/plugins/system/highlight/*
/plugins/system/languagecode/*
/plugins/system/languagefilter/*
/plugins/system/log/*
/plugins/system/logout/*
/plugins/system/logrotation/*
/plugins/system/p3p/*
/plugins/system/privacyconsent/*
/plugins/system/redirect/*
/plugins/system/remember/*
/plugins/system/sef/*
/plugins/system/sessiongc/*
/plugins/system/stats/*
/plugins/system/updatenotification/*
/plugins/system/index.html
/plugins/twofactorauth/totp/*
/plugins/twofactorauth/yubikey/*
/plugins/user/contactcreator/*
/plugins/user/example/*
/plugins/user/joomla/*
/plugins/user/profile/*
/plugins/user/terms/*
/plugins/user/index.html
/plugins/index.html
/templates/beez3/*
/templates/protostar/*
/templates/system/*
/templates/index.html
/tmp/*
/configuration.php
/htaccess.txt
/index.php
/joomla.xml
/LICENSE.txt
/README.txt
/robots.txt.dist
/web.config.txt
`,"Gradle.gitignore":`.gradle
**/build/
!src/**/build/

# Ignore Gradle GUI config
gradle-app.setting

# Avoid ignoring Gradle wrapper jar file (.jar files are usually ignored)
!gradle-wrapper.jar

# Avoid ignore Gradle wrappper properties
!gradle-wrapper.properties

# Cache of project
.gradletasknamecache

# Eclipse Gradle plugin generated files
# Eclipse Core
.project
# JDT-specific (Eclipse Java Development Tools)
.classpath
`,"Swift.gitignore":`# Xcode
#
# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore

## User settings
xcuserdata/

## compatibility with Xcode 8 and earlier (ignoring not required starting Xcode 9)
*.xcscmblueprint
*.xccheckout

## compatibility with Xcode 3 and earlier (ignoring not required starting Xcode 4)
build/
DerivedData/
*.moved-aside
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3

## Obj-C/Swift specific
*.hmap

## App packaging
*.ipa
*.dSYM.zip
*.dSYM

## Playgrounds
timeline.xctimeline
playground.xcworkspace

# Swift Package Manager
#
# Add this line if you want to avoid checking in source code from Swift Package Manager dependencies.
# Packages/
# Package.pins
# Package.resolved
# *.xcodeproj
#
# Xcode automatically generates this directory with a .xcworkspacedata file and xcuserdata
# hence it is not needed unless you have added a package configuration file to your project
# .swiftpm

.build/

# CocoaPods
#
# We recommend against adding the Pods directory to your .gitignore. However
# you should judge for yourself, the pros and cons are mentioned at:
# https://guides.cocoapods.org/using/using-cocoapods.html#should-i-check-the-pods-directory-into-source-control
#
# Pods/
#
# Add this line if you want to avoid checking in source code from the Xcode workspace
# *.xcworkspace

# Carthage
#
# Add this line if you want to avoid checking in source code from Carthage dependencies.
# Carthage/Checkouts

Carthage/Build/

# Accio dependency management
Dependencies/
.accio/

# fastlane
#
# It is recommended to not store the screenshots in the git repo.
# Instead, use fastlane to re-generate the screenshots whenever they are needed.
# For more information about the recommended setup visit:
# https://docs.fastlane.tools/best-practices/source-control/#source-control

fastlane/report.xml
fastlane/Preview.html
fastlane/screenshots/**/*.png
fastlane/test_output

# Code Injection
#
# After new code Injection tools there's a generated folder /iOSInjectionProject
# https://github.com/johnno1962/injectionforxcode

iOSInjectionProject/
`,"Strapi.gitignore":`############################
# OS X
############################

.DS_Store
.AppleDouble
.LSOverride
Icon
.Spotlight-V100
.Trashes
._*


############################
# Linux
############################

*~


############################
# Windows
############################

Thumbs.db
ehthumbs.db
Desktop.ini
$RECYCLE.BIN/
*.cab
*.msi
*.msm
*.msp


############################
# Packages
############################

*.7z
*.csv
*.dat
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
*.zip
*.com
*.class
*.dll
*.exe
*.o
*.seed
*.so
*.swo
*.swp
*.swn
*.swm
*.out
*.pid


############################
# Logs and databases
############################

.tmp
*.log
*.sql
*.sqlite


############################
# Misc.
############################

*#
.idea
nbproject
.vscode/


############################
# Node.js
############################

lib-cov
lcov.info
pids
logs
results
build
node_modules
.node_history
package-lock.json
**/package-lock.json
!docs/package-lock.json
*.heapsnapshot


############################
# Tests
############################

testApp
coverage
cypress/screenshots
cypress/videos


############################
# Documentation
############################

dist

############################
# Builds
############################

packages/strapi-generate-new/files/public/

############################
# Example app
############################

.dev
# *.cache

############################
# Visual Studio Code
############################

front-workspace.code-workspace
`,"OpenCart.gitignore":`.htaccess
/config.php
admin/config.php

!index.html

download/
image/data/
image/cache/
system/cache/
system/logs/

system/storage/

# vQmod log files
vqmod/logs/*
# vQmod cache files
vqmod/vqcache/*
vqmod/checked.cache
vqmod/mods.cache
`,"AppceleratorTitanium.gitignore":`# Build folder and log file
build/
build.log
`,"ROS.gitignore":`devel/
logs/
build/
bin/
lib/
msg_gen/
srv_gen/
msg/*Action.msg
msg/*ActionFeedback.msg
msg/*ActionGoal.msg
msg/*ActionResult.msg
msg/*Feedback.msg
msg/*Goal.msg
msg/*Result.msg
msg/_*.py
build_isolated/
devel_isolated/

# Generated by dynamic reconfigure
*.cfgc
/cfg/cpp/
/cfg/*.py

# Ignore generated docs
*.dox
*.wikidoc

# eclipse stuff
.project
.cproject

# qcreator stuff
CMakeLists.txt.user

srv/_*.py
*.pcd
*.pyc
qtcreator-*
*.user

/planning/cfg
/planning/docs
/planning/src

*~

# Emacs
.#*

# Catkin custom files
CATKIN_IGNORE
`,"Erlang.gitignore":`.eunit
*.o
*.beam
*.plt
erl_crash.dump
.concrete/DEV_MODE

# rebar 2.x
.rebar
rel/example_project
ebin/*.beam
deps

# rebar 3
.rebar3
_build/
_checkouts/
`,"MonoDevelop.gitignore":`#User Specific
*.userprefs
*.usertasks

#Mono Project Files
*.pidb
*.resources
test-results/
`,"Dart.gitignore":`# See https://www.dartlang.org/guides/libraries/private-files

# Files and directories created by pub
.dart_tool/
.packages
build/
# If you're building an application, you may want to check-in your pubspec.lock
pubspec.lock

# Directory created by dartdoc
# If you don't generate documentation locally you can remove this line.
doc/api/

# dotenv environment variables file
.env*

# Avoid committing generated Javascript files:
*.dart.js
*.info.json      # Produced by the --dump-info flag.
*.js             # When generated by dart2js. Don't specify *.js if your
                 # project includes source files written in JavaScript.
*.js_
*.js.deps
*.js.map

.flutter-plugins
.flutter-plugins-dependencies
`,"Octave.gitignore":`# Windows default autosave extension
*.asv

# OSX / *nix default autosave extension
*.m~

# Compiled MEX binaries (all platforms)
*.mex*

# Packaged app and toolbox files
*.mlappinstall
*.mltbx

# Generated helpsearch folders
helpsearch*/

# Simulink code generation folders
slprj/
sccprj/

# Matlab code generation folders
codegen/

# Simulink autosave extension
*.autosave

# Simulink cache files
*.slxc

# Octave session info
octave-workspace
`,"Phoenix.gitignore":`# gitignore template for Phoenix projects
# website: http://www.phoenixframework.org/
#
# Recommended template: Elixir.gitignore

# Temporary files
/tmp

# Static artifacts
/node_modules
/assets/node_modules

# Since we are building assets from web/static,
# we ignore priv/static. You may want to comment
# this depending on your deployment strategy.
/priv/static/

# Installer-related files
/installer/_build
/installer/tmp
/installer/doc
/installer/deps
`,"Coq.gitignore":`.*.aux
.*.d
*.a
*.cma
*.cmi
*.cmo
*.cmx
*.cmxa
*.cmxs
*.glob
*.ml.d
*.ml4.d
*.mlg.d
*.mli.d
*.mllib.d
*.mlpack.d
*.native
*.o
*.v.d
*.vio
*.vo
*.vok
*.vos
.coq-native
.csdp.cache
.lia.cache
.nia.cache
.nlia.cache
.nra.cache
csdp.cache
lia.cache
nia.cache
nlia.cache
nra.cache
native_compute_profile_*.data

# generated timing files
*.timing.diff
*.v.after-timing
*.v.before-timing
*.v.timing
time-of-build-after.log
time-of-build-before.log
time-of-build-both.log
time-of-build-pretty.log
`,"Lazarus.gitignore":`# Lazarus compiler-generated binaries (safe to delete)
*.exe
*.dll
*.so
*.dylib
*.lrs
*.res
*.compiled
*.dbg
*.ppu
*.o
*.or
*.a

# Lazarus autogenerated files (duplicated info)
*.rst
*.rsj
*.lrt

# Lazarus local files (user-specific info)
*.lps

# Lazarus backups and unit output folders.
# These can be changed by user in Lazarus/project options.
backup/
*.bak
lib/

# Application bundle for Mac OS
*.app/
`,"Linux.gitignore":`*~

# temporary files which can be created if a process still has a handle open of a deleted file
.fuse_hidden*

# KDE directory preferences
.directory

# Linux trash folder which might appear on any partition or disk
.Trash-*

# .nfs files are created when an open file is removed but is still being accessed
.nfs*
`,"Drupal.gitignore":`# gitignore template for Drupal 8 projects
#
# earlier versions of Drupal are tracked in \`community/PHP/\`
#
# follows official upstream conventions:
# https://www.drupal.org/docs/develop/using-composer

# Ignore configuration files that may contain sensitive information
/web/sites/*/*settings*.php
/web/sites/*/*services*.yml

# Ignore paths that may contain user-generated content
/web/sites/*/files
/web/sites/*/public
/web/sites/*/private
/web/sites/*/files-public
/web/sites/*/files-private

# Ignore paths that may contain temporary files
/web/sites/*/translations
/web/sites/*/tmp
/web/sites/*/cache

# Ignore drupal core (if not versioning drupal sources)
/web/vendor
/web/core
/web/modules/README.txt
/web/profiles/README.txt
/web/sites/development.services.yml
/web/sites/example.settings.local.php
/web/sites/example.sites.php
/web/sites/README.txt
/web/themes/README.txt
/web/.csslintrc
/web/.editorconfig
/web/.eslintignore
/web/.eslintrc.json
/web/.gitattributes
/web/.htaccess
/web/.ht.router.php
/web/autoload.php
/web/composer.json
/web/composer.lock
/web/example.gitignore
/web/index.php
/web/INSTALL.txt
/web/LICENSE.txt
/web/README.txt
/web/robots.txt
/web/update.php
/web/web.config

# Ignore vendor dependencies and scripts
/vendor
/composer.phar
/composer
/robo.phar
/robo
/drush.phar
/drush
/drupal.phar
/drupal
`,"JBoss4.gitignore":`# gitignore for JBoss v4 projects

/server/all/data
/server/all/log
/server/all/tmp
/server/all/work
/server/default/data
/server/default/log
/server/default/tmp
/server/default/work
/server/minimal/data
/server/minimal/log
/server/minimal/tmp
/server/minimal/work

# Note:
# there may be other directories that contain *.xml.failed or *.war.failed files
/server/default/deploy/*.xml.failed
/server/default/deploy/*.war.failed
`,"JEnv.gitignore":`# JEnv local Java version configuration file
.java-version

# Used by previous versions of JEnv
.jenv-version
`,"CMake.gitignore":`CMakeLists.txt.user
CMakeCache.txt
CMakeFiles
CMakeScripts
Testing
Makefile
cmake_install.cmake
install_manifest.txt
compile_commands.json
CTestTestfile.cmake
_deps
`,"ChefCookbook.gitignore":`.vagrant
/cookbooks

# Bundler
bin/*
.bundle/*

.kitchen/
.kitchen.local.yml
`,"Bazel.gitignore":`# gitignore template for Bazel build system
# website: https://bazel.build/

# Ignore all bazel-* symlinks. There is no full list since this can change
# based on the name of the directory bazel is cloned into.
/bazel-*

# Directories for the Bazel IntelliJ plugin containing the generated
# IntelliJ project files and plugin configuration. Seperate directories are
# for the IntelliJ, Android Studio and CLion versions of the plugin.
/.ijwb/
/.aswb/
/.clwb/
`,"Jigsaw.gitignore":`# gitignore template for Jigsaw Static Site Generator
#
# website - https://jigsaw.tighten.co

# Ignore build folder
build_*
`,"DM.gitignore":`*.dmb
*.rsc
*.int
*.lk
*.zip
`,"Tags.gitignore":`# Ignore tags created by etags, ctags, gtags (GNU global) and cscope
TAGS
.TAGS
!TAGS/
tags
.tags
!tags/
gtags.files
GTAGS
GRTAGS
GPATH
GSYMS
cscope.files
cscope.out
cscope.in.out
cscope.po.out

`,"B4X.gitignore":`**/Objects
**/AutoBackups
*.meta
`,"ModelSim.gitignore":`# ignore ModelSim generated files and directories (temp files and so on)
[_@]*

# ignore compilation output of ModelSim
*.mti
*.dat
*.dbs
*.psm
*.bak
*.cmp
*.jpg
*.html
*.bsf

# ignore simulation output of ModelSim
wlf*
*.wlf
*.vstf
*.ucdb
cov*/
transcript*
sc_dpiheader.h
vsim.dbg
`,"Ruby.gitignore":`*.gem
*.rbc
/.config
/coverage/
/InstalledFiles
/pkg/
/spec/reports/
/spec/examples.txt
/test/tmp/
/test/version_tmp/
/tmp/

# Used by dotenv library to load environment variables.
# .env

# Ignore Byebug command history file.
.byebug_history

## Specific to RubyMotion:
.dat*
.repl_history
build/
*.bridgesupport
build-iPhoneOS/
build-iPhoneSimulator/

## Specific to RubyMotion (use of CocoaPods):
#
# We recommend against adding the Pods directory to your .gitignore. However
# you should judge for yourself, the pros and cons are mentioned at:
# https://guides.cocoapods.org/using/using-cocoapods.html#should-i-check-the-pods-directory-into-source-control
#
# vendor/Pods/

## Documentation cache and generated files:
/.yardoc/
/_yardoc/
/doc/
/rdoc/

## Environment normalization:
/.bundle/
/vendor/bundle
/lib/bundler/man/

# for a library or gem, you might want to ignore these files since the code is
# intended to run in multiple environments; otherwise, check them in:
# Gemfile.lock
# .ruby-version
# .ruby-gemset

# unless supporting rvm < 1.11.0 or doing something fancy, ignore this:
.rvmrc

# Used by RuboCop. Remote config files pulled in from inherit_from directive.
# .rubocop-https?--*
`,"Godot.gitignore":`# Godot 4+ specific ignores
.godot/

# Godot-specific ignores
.import/
export.cfg
export_presets.cfg

# Imported translations (automatically generated from CSV files)
*.translation

# Mono-specific ignores
.mono/
data_*/
mono_crash.*.json
`,"Opa.gitignore":`_build
_tracks

opa-debug-js

*.opp
*.opx
*.opx.broken
*.dump
*.api
*.api-txt
*.exe
*.log
`,"CodeKit.gitignore":`# General CodeKit files to ignore
config.codekit
config.codekit3
/min
`,"Dropbox.gitignore":`# Dropbox settings and caches
.dropbox
.dropbox.attr
.dropbox.cache
`,"Nanoc.gitignore":`# For projects using Nanoc (http://nanoc.ws/)

# Default location for output (needs to match output_dir's value found in nanoc.yaml)
output/

# Temporary file directory
tmp/nanoc/

# Crash Log
crash.log
`,"BricxCC.gitignore":`# Bricx Command Center IDE
# http://bricxcc.sourceforge.net
*.bak
*.sym
`,"AL.gitignore":`.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
*.code-workspace

# Local History for Visual Studio Code
.history/
*.app
.snapshots/*
`,"Laravel.gitignore":`/vendor/
node_modules/
npm-debug.log
yarn-error.log

# Laravel 4 specific
bootstrap/compiled.php
app/storage/

# Laravel 5 & Lumen specific
public/storage
public/hot

# Laravel 5 & Lumen specific with changed public path
public_html/storage
public_html/hot

storage/*.key
.env
Homestead.yaml
Homestead.json
/.vagrant
.phpunit.result.cache
`,"ExpressionEngine.gitignore":`.DS_Store

# Images
images/avatars/
images/captchas/
images/smileys/
images/member_photos/
images/signature_attachments/
images/pm_attachments/

# For security do not publish the following files
system/expressionengine/config/database.php
system/expressionengine/config/config.php

# Caches
sized/
thumbs/
_thumbs/
*/expressionengine/cache/*
`,"Kohana.gitignore":`application/cache/*
application/logs/*
`,"FuelPHP.gitignore":`# the composer package lock file and install directory
# Commit your application's lock file http://getcomposer.org/doc/01-basic-usage.md#composer-lock-the-lock-file
# You may choose to ignore a library lock file http://getcomposer.org/doc/02-libraries.md#lock-file
# /composer.lock
/fuel/vendor

# the fuelphp document
/docs/

# you may install these packages with \`oil package\`.
# http://fuelphp.com/docs/packages/oil/package.html
# /fuel/packages/auth/
# /fuel/packages/email/
# /fuel/packages/oil/
# /fuel/packages/orm/
# /fuel/packages/parser/

# dynamically generated files
/fuel/app/logs/*/*/*
/fuel/app/cache/*/*
/fuel/app/config/crypt.php
`,"UnrealEngine.gitignore":`# Visual Studio 2015 user specific files
.vs/

# Compiled Object files
*.slo
*.lo
*.o
*.obj

# Precompiled Headers
*.gch
*.pch

# Compiled Dynamic libraries
*.so
*.dylib
*.dll

# Fortran module files
*.mod

# Compiled Static libraries
*.lai
*.la
*.a
*.lib

# Executables
*.exe
*.out
*.app
*.ipa

# These project files can be generated by the engine
*.xcodeproj
*.xcworkspace
*.sln
*.suo
*.opensdf
*.sdf
*.VC.db
*.VC.opendb

# Precompiled Assets
SourceArt/**/*.png
SourceArt/**/*.tga

# Binary Files
Binaries/*
Plugins/*/Binaries/*

# Builds
Build/*

# Whitelist PakBlacklist-<BuildConfiguration>.txt files
!Build/*/
Build/*/**
!Build/*/PakBlacklist*.txt

# Don't ignore icon files in Build
!Build/**/*.ico

# Built data for maps
*_BuiltData.uasset

# Configuration files generated by the Editor
Saved/*

# Compiled source files for the engine to use
Intermediate/*
Plugins/*/Intermediate/*

# Cache files for the editor to use
DerivedDataCache/*
`,"Yii.gitignore":`assets/*
!assets/.gitignore
protected/runtime/*
!protected/runtime/.gitignore
protected/data/*.db
themes/classic/views/
`,"D.gitignore":`# Compiled Object files
*.o
*.obj

# Compiled Dynamic libraries
*.so
*.dylib
*.dll

# Compiled Static libraries
*.a
*.lib

# Executables
*.exe

# DUB
.dub
docs.json
__dummy.html
docs/

# Code coverage
*.lst
`,"Scheme.gitignore":`*.ss~
*.ss#*
.#*.ss

*.scm~
*.scm#*
.#*.scm
`,"SAM.gitignore":`# gitignore template for AWS Serverless Application Model project
# website: https://docs.aws.amazon.com/serverless-application-model

# Ignore build folder
.aws-sam/
`,"NetBeans.gitignore":`**/nbproject/private/
**/nbproject/Makefile-*.mk
**/nbproject/Package-*.bash
build/
nbbuild/
dist/
nbdist/
.nb-gradle/
`,"Redis.gitignore":`# Ignore redis binary dump (dump.rdb) files

*.rdb
`,"Pimcore.gitignore":`# gitignore template for Pimcore CMS

# pimcore source files
/pimcore

# asset files
/website/var/assets/*

# backups
/website/var/backup/*

# file cache
/website/var/cache/*

# generated PHP classes, keep definition files (.psf)
/website/var/classes/Object*
!/website/var/classes/objectbricks

# various configuration files
/website/var/config/system.xml
/website/var/config/cache.xml
/website/var/config/robots.txt
/website/var/config/Geo*
/website/var/config/object/*
/website/var/config/portal/*
/website/var/config/sqlreport/*

# sent e-mail log files
/website/var/email/*

# log files
/website/var/log/*.log

# serialized recyclebin files
/website/var/recyclebin/*

# search plugin
/website/var/search/*

# various temp files
/website/var/system/*
/website/var/tmp/*

# serialized version files
/website/var/versions/asset/*
/website/var/versions/document/*
/website/var/versions/object/*

# user profile images
/website/var/user-image/*

# keep .dummy files
!.dummy
`,"SketchUp.gitignore":`*.skb
`,"OCaml.gitignore":`*.annot
*.cmo
*.cma
*.cmi
*.a
*.o
*.cmx
*.cmxs
*.cmxa

# ocamlbuild working directory
_build/

# ocamlbuild targets
*.byte
*.native

# oasis generated files
setup.data
setup.log

# Merlin configuring file for Vim and Emacs
.merlin

# Dune generated files
*.install

# Local OPAM switch
_opam/
`,"Android.gitignore":`# Gradle files
.gradle/
build/

# Local configuration file (sdk path, etc)
local.properties

# Log/OS Files
*.log

# Android Studio generated files and folders
captures/
.externalNativeBuild/
.cxx/
*.apk
output.json

# IntelliJ
*.iml
.idea/
misc.xml
deploymentTargetDropDown.xml
render.experimental.xml

# Keystore files
*.jks
*.keystore

# Google Services (e.g. APIs or Firebase)
google-services.json

# Android Profiling
*.hprof
`,"PlayFramework.gitignore":`# Ignore Play! working directory #
bin/
/db
.eclipse
/lib/
/logs/
/modules
/project/project
/project/target
/target
tmp/
test-result
server.pid
*.eml
/dist/
.cache
`,"core.gitignore":`*.swp
*.*~
project.lock.json
.DS_Store
*.pyc
nupkg/

# Visual Studio Code
.vscode

# Rider
.idea

# User-specific files
*.suo
*.user
*.userosscache
*.sln.docstates

# Build results
[Dd]ebug/
[Dd]ebugPublic/
[Rr]elease/
[Rr]eleases/
x64/
x86/
build/
bld/
[Bb]in/
[Oo]bj/
[Oo]ut/
msbuild.log
msbuild.err
msbuild.wrn

# Visual Studio 2015
.vs/

`,"Meteor.gitignore":`# gitignore template for the Meteor framework
# website: https://www.meteor.com/
#
# Recommended template: Node.gitignore

# protect api keys in setting json
settings-production.json
settings.json

# protect your mup.json settings
mup.json
mup.js
`,"Xcode.gitignore":`## User settings
xcuserdata/

## Xcode 8 and earlier
*.xcscmblueprint
*.xccheckout
`,"VisualStudioCode.gitignore":`.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets

# Local History for Visual Studio Code
.history/

# Built Visual Studio Code Extensions
*.vsix
`,"CraftCMS.gitignore":`# Craft 2 Storage (https://craftcms.com/support/craft-storage-gitignore)
# not necessary for Craft 3 (https://github.com/craftcms/craft/issues/26)
/craft/storage/*
!/craft/storage/rebrand
`,"NotepadPP.gitignore":`# Notepad++ backups #
*.bak
`,"EPiServer.gitignore":`######################
## EPiServer Files
######################
*License.config
`,"SlickEdit.gitignore":`# SlickEdit workspace and project files are ignored by default because
# typically they are considered to be developer-specific and not part of a
# project.
*.vpw
*.vpj

# SlickEdit workspace history and tag files always contain user-specific
# data so they should not be stored in a repository.
*.vpwhistu
*.vpwhist
*.vtg
`,"Fancy.gitignore":`*.rbc
*.fyc
`,"C.gitignore":`# Prerequisites
*.d

# Object files
*.o
*.ko
*.obj
*.elf

# Linker output
*.ilk
*.map
*.exp

# Precompiled Headers
*.gch
*.pch

# Libraries
*.lib
*.a
*.la
*.lo

# Shared objects (inc. Windows DLLs)
*.dll
*.so
*.so.*
*.dylib

# Executables
*.exe
*.out
*.app
*.i*86
*.x86_64
*.hex

# Debug files
*.dSYM/
*.su
*.idb
*.pdb

# Kernel Module Compile Results
*.mod*
*.cmd
.tmp_versions/
modules.order
Module.symvers
Mkfile.old
dkms.conf
`,"Objective-C.gitignore":`# Xcode
#
# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore

## User settings
xcuserdata/

## compatibility with Xcode 8 and earlier (ignoring not required starting Xcode 9)
*.xcscmblueprint
*.xccheckout

## compatibility with Xcode 3 and earlier (ignoring not required starting Xcode 4)
build/
DerivedData/
*.moved-aside
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3

## Obj-C/Swift specific
*.hmap

## App packaging
*.ipa
*.dSYM.zip
*.dSYM

# CocoaPods
#
# We recommend against adding the Pods directory to your .gitignore. However
# you should judge for yourself, the pros and cons are mentioned at:
# https://guides.cocoapods.org/using/using-cocoapods.html#should-i-check-the-pods-directory-into-source-control
#
# Pods/
#
# Add this line if you want to avoid checking in source code from the Xcode workspace
# *.xcworkspace

# Carthage
#
# Add this line if you want to avoid checking in source code from Carthage dependencies.
# Carthage/Checkouts

Carthage/Build/

# fastlane
#
# It is recommended to not store the screenshots in the git repo.
# Instead, use fastlane to re-generate the screenshots whenever they are needed.
# For more information about the recommended setup visit:
# https://docs.fastlane.tools/best-practices/source-control/#source-control

fastlane/report.xml
fastlane/Preview.html
fastlane/screenshots/**/*.png
fastlane/test_output

# Code Injection
#
# After new code Injection tools there's a generated folder /iOSInjectionProject
# https://github.com/johnno1962/injectionforxcode

iOSInjectionProject/
`,"LibreOffice.gitignore":`# LibreOffice locks
.~lock.*#
`,"Magento1.gitignore":`# gitignore template for Magento v1 projects
#
# It is recommended that you use \`Magento.gitignore\` as this is the latest version

/PATCH_*.sh

/app/etc/local.xml

/media/*
!/media/.htaccess

!/media/customer
/media/customer/*
!/media/customer/.htaccess

!/media/dhl
/media/dhl/*
!/media/dhl/logo.jpg

!/media/downloadable
/media/downloadable/*
!/media/downloadable/.htaccess

!/media/xmlconnect
/media/xmlconnect/*

!/media/xmlconnect/custom
/media/xmlconnect/custom/*
!/media/xmlconnect/custom/ok.gif

!/media/xmlconnect/original
/media/xmlconnect/original/*
!/media/xmlconnect/original/ok.gif

!/media/xmlconnect/system
/media/xmlconnect/system/*
!/media/xmlconnect/system/ok.gif

/var/*
!/var/.htaccess

!/var/package
/var/package/*
!/var/package/*.xml

`,"Yeoman.gitignore":`node_modules/
bower_components/
*.log

build/
dist/
`,"GWT.gitignore":`*.class

# Package Files #
*.jar
*.war

# gwt caches and compiled units #
war/gwt_bree/
gwt-unitCache/

# boilerplate generated classes #
.apt_generated/

# more caches and things from deploy #
war/WEB-INF/deploy/
war/WEB-INF/classes/

#compilation logs
.gwt/

#gwt junit compilation files
www-test/

#old GWT (1.5) created this dir
.gwt-tmp/
`,"VVVV.gitignore":`
# .v4p backup files
*~.xml

# Dynamic plugins .dll
bin/
`,"Otto.gitignore":`.otto/
`,"Autotools.gitignore":`# http://www.gnu.org/software/automake

Makefile.in
/ar-lib
/mdate-sh
/py-compile
/test-driver
/ylwrap
.deps/
.dirstamp

# http://www.gnu.org/software/autoconf

autom4te.cache
/autoscan.log
/autoscan-*.log
/aclocal.m4
/compile
/config.cache
/config.guess
/config.h.in
/config.log
/config.status
/config.sub
/configure
/configure.scan
/depcomp
/install-sh
/missing
/stamp-h1

# https://www.gnu.org/software/libtool/

/ltmain.sh

# http://www.gnu.org/software/texinfo

/texinfo.tex

# http://www.gnu.org/software/m4/

m4/libtool.m4
m4/ltoptions.m4
m4/ltsugar.m4
m4/ltversion.m4
m4/lt~obsolete.m4

# Generated Makefile
# (meta build system like autotools,
# can automatically generate from config.status script
# (which is called by configure script))
Makefile
`,"VisualStudio.gitignore":`## Ignore Visual Studio temporary files, build results, and
## files generated by popular Visual Studio add-ons.
##
## Get latest from https://github.com/github/gitignore/blob/main/VisualStudio.gitignore

# User-specific files
*.rsuser
*.suo
*.user
*.userosscache
*.sln.docstates

# User-specific files (MonoDevelop/Xamarin Studio)
*.userprefs

# Mono auto generated files
mono_crash.*

# Build results
[Dd]ebug/
[Dd]ebugPublic/
[Rr]elease/
[Rr]eleases/
x64/
x86/
[Ww][Ii][Nn]32/
[Aa][Rr][Mm]/
[Aa][Rr][Mm]64/
bld/
[Bb]in/
[Oo]bj/
[Ll]og/
[Ll]ogs/

# Visual Studio 2015/2017 cache/options directory
.vs/
# Uncomment if you have tasks that create the project's static files in wwwroot
#wwwroot/

# Visual Studio 2017 auto generated files
Generated\\ Files/

# MSTest test Results
[Tt]est[Rr]esult*/
[Bb]uild[Ll]og.*

# NUnit
*.VisualState.xml
TestResult.xml
nunit-*.xml

# Build Results of an ATL Project
[Dd]ebugPS/
[Rr]eleasePS/
dlldata.c

# Benchmark Results
BenchmarkDotNet.Artifacts/

# .NET Core
project.lock.json
project.fragment.lock.json
artifacts/

# ASP.NET Scaffolding
ScaffoldingReadMe.txt

# StyleCop
StyleCopReport.xml

# Files built by Visual Studio
*_i.c
*_p.c
*_h.h
*.ilk
*.meta
*.obj
*.iobj
*.pch
*.pdb
*.ipdb
*.pgc
*.pgd
*.rsp
*.sbr
*.tlb
*.tli
*.tlh
*.tmp
*.tmp_proj
*_wpftmp.csproj
*.log
*.tlog
*.vspscc
*.vssscc
.builds
*.pidb
*.svclog
*.scc

# Chutzpah Test files
_Chutzpah*

# Visual C++ cache files
ipch/
*.aps
*.ncb
*.opendb
*.opensdf
*.sdf
*.cachefile
*.VC.db
*.VC.VC.opendb

# Visual Studio profiler
*.psess
*.vsp
*.vspx
*.sap

# Visual Studio Trace Files
*.e2e

# TFS 2012 Local Workspace
$tf/

# Guidance Automation Toolkit
*.gpState

# ReSharper is a .NET coding add-in
_ReSharper*/
*.[Rr]e[Ss]harper
*.DotSettings.user

# TeamCity is a build add-in
_TeamCity*

# DotCover is a Code Coverage Tool
*.dotCover

# AxoCover is a Code Coverage Tool
.axoCover/*
!.axoCover/settings.json

# Coverlet is a free, cross platform Code Coverage Tool
coverage*.json
coverage*.xml
coverage*.info

# Visual Studio code coverage results
*.coverage
*.coveragexml

# NCrunch
_NCrunch_*
.*crunch*.local.xml
nCrunchTemp_*

# MightyMoose
*.mm.*
AutoTest.Net/

# Web workbench (sass)
.sass-cache/

# Installshield output folder
[Ee]xpress/

# DocProject is a documentation generator add-in
DocProject/buildhelp/
DocProject/Help/*.HxT
DocProject/Help/*.HxC
DocProject/Help/*.hhc
DocProject/Help/*.hhk
DocProject/Help/*.hhp
DocProject/Help/Html2
DocProject/Help/html

# Click-Once directory
publish/

# Publish Web Output
*.[Pp]ublish.xml
*.azurePubxml
# Note: Comment the next line if you want to checkin your web deploy settings,
# but database connection strings (with potential passwords) will be unencrypted
*.pubxml
*.publishproj

# Microsoft Azure Web App publish settings. Comment the next line if you want to
# checkin your Azure Web App publish settings, but sensitive information contained
# in these scripts will be unencrypted
PublishScripts/

# NuGet Packages
*.nupkg
# NuGet Symbol Packages
*.snupkg
# The packages folder can be ignored because of Package Restore
**/[Pp]ackages/*
# except build/, which is used as an MSBuild target.
!**/[Pp]ackages/build/
# Uncomment if necessary however generally it will be regenerated when needed
#!**/[Pp]ackages/repositories.config
# NuGet v3's project.json files produces more ignorable files
*.nuget.props
*.nuget.targets

# Microsoft Azure Build Output
csx/
*.build.csdef

# Microsoft Azure Emulator
ecf/
rcf/

# Windows Store app package directories and files
AppPackages/
BundleArtifacts/
Package.StoreAssociation.xml
_pkginfo.txt
*.appx
*.appxbundle
*.appxupload

# Visual Studio cache files
# files ending in .cache can be ignored
*.[Cc]ache
# but keep track of directories ending in .cache
!?*.[Cc]ache/

# Others
ClientBin/
~$*
*~
*.dbmdl
*.dbproj.schemaview
*.jfm
*.pfx
*.publishsettings
orleans.codegen.cs

# Including strong name files can present a security risk
# (https://github.com/github/gitignore/pull/2483#issue-259490424)
#*.snk

# Since there are multiple workflows, uncomment next line to ignore bower_components
# (https://github.com/github/gitignore/pull/1529#issuecomment-104372622)
#bower_components/

# RIA/Silverlight projects
Generated_Code/

# Backup & report files from converting an old project file
# to a newer Visual Studio version. Backup files are not needed,
# because we have git ;-)
_UpgradeReport_Files/
Backup*/
UpgradeLog*.XML
UpgradeLog*.htm
ServiceFabricBackup/
*.rptproj.bak

# SQL Server files
*.mdf
*.ldf
*.ndf

# Business Intelligence projects
*.rdl.data
*.bim.layout
*.bim_*.settings
*.rptproj.rsuser
*- [Bb]ackup.rdl
*- [Bb]ackup ([0-9]).rdl
*- [Bb]ackup ([0-9][0-9]).rdl

# Microsoft Fakes
FakesAssemblies/

# GhostDoc plugin setting file
*.GhostDoc.xml

# Node.js Tools for Visual Studio
.ntvs_analysis.dat
node_modules/

# Visual Studio 6 build log
*.plg

# Visual Studio 6 workspace options file
*.opt

# Visual Studio 6 auto-generated workspace file (contains which files were open etc.)
*.vbw

# Visual Studio 6 auto-generated project file (contains which files were open etc.)
*.vbp

# Visual Studio 6 workspace and project file (working project files containing files to include in project)
*.dsw
*.dsp

# Visual Studio 6 technical files
*.ncb
*.aps

# Visual Studio LightSwitch build output
**/*.HTMLClient/GeneratedArtifacts
**/*.DesktopClient/GeneratedArtifacts
**/*.DesktopClient/ModelManifest.xml
**/*.Server/GeneratedArtifacts
**/*.Server/ModelManifest.xml
_Pvt_Extensions

# Paket dependency manager
.paket/paket.exe
paket-files/

# FAKE - F# Make
.fake/

# CodeRush personal settings
.cr/personal

# Python Tools for Visual Studio (PTVS)
__pycache__/
*.pyc

# Cake - Uncomment if you are using it
# tools/**
# !tools/packages.config

# Tabs Studio
*.tss

# Telerik's JustMock configuration file
*.jmconfig

# BizTalk build output
*.btp.cs
*.btm.cs
*.odx.cs
*.xsd.cs

# OpenCover UI analysis results
OpenCover/

# Azure Stream Analytics local run output
ASALocalRun/

# MSBuild Binary and Structured Log
*.binlog

# NVidia Nsight GPU debugger configuration file
*.nvuser

# MFractors (Xamarin productivity tool) working folder
.mfractor/

# Local History for Visual Studio
.localhistory/

# Visual Studio History (VSHistory) files
.vshistory/

# BeatPulse healthcheck temp database
healthchecksdb

# Backup folder for Package Reference Convert tool in Visual Studio 2017
MigrationBackup/

# Ionide (cross platform F# VS Code tools) working folder
.ionide/

# Fody - auto-generated XML schema
FodyWeavers.xsd

# VS Code files for those working on multiple tools
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
*.code-workspace

# Local History for Visual Studio Code
.history/

# Windows Installer files from build outputs
*.cab
*.msi
*.msix
*.msm
*.msp

# JetBrains Rider
*.sln.iml
`,"Rust.gitignore":`# Generated by Cargo
# will have compiled files and executables
debug/
target/

# Remove Cargo.lock from gitignore if creating an executable, leave it for libraries
# More information here https://doc.rust-lang.org/cargo/guide/cargo-toml-vs-cargo-lock.html
Cargo.lock

# These are backup files generated by rustfmt
**/*.rs.bk

# MSVC Windows builds of rustc generate these, which store debugging information
*.pdb
`,"JENKINS_HOME.gitignore":`# Learn more about Jenkins and JENKINS_HOME directory for which this file is
# intended.
#
#  http://jenkins-ci.org/
#  https://wiki.jenkins-ci.org/display/JENKINS/Administering+Jenkins
#
# Note: secret.key is purposefully not tracked by git. This should be backed up
# separately because configs may contain secrets which were encrypted using the
# secret.key.  To back up secrets use 'tar -czf /tmp/secrets.tgz secret*' and
# save the file separate from your repository.  If you want secrets backed up
# with configuration, then see the bottom of this file for an example.

# Ignore all JENKINS_HOME except jobs directory, root xml config, and
# .gitignore file.
/*
!/jobs
!/.gitignore
!/*.xml

# Ignore all files in jobs subdirectories except for folders.
# Note: git doesn't track folders, only file content.
jobs/**
!jobs/**/

# Uncomment the following line to save next build numbers with config.

#!jobs/**/nextBuildNumber

# For performance reasons, we want to ignore builds in Jenkins jobs because it
# contains many tiny files on large installations.  This can impact git
# performance when running even basic commands like 'git status'.
builds
indexing

# Exclude only config.xml files in repository subdirectories.
!config.xml

# Don't track workspaces (when users build on the master).
jobs/**/*workspace

# Security warning: If secrets are included with your configuration, then an
# adversary will be able to decrypt all encrypted secrets within Jenkins
# config.  Including secrets is a bad practice, but the example is included in
# case someone still wants it for convenience.  Uncomment the following line to
# include secrets for decryption with repository configuration in Git.

#!/secret*

# As a result, only Jenkins settings and job config.xml files in JENKINS_HOME
# will be tracked by git.
`,"Xojo.gitignore":`# Xojo (formerly REALbasic and Real Studio)

Builds*
*.debug
*.debug.app
Debug*.exe
Debug*/Debug*.exe
Debug*/Debug*\\ Libs
*.rbuistate
*.xojo_uistate
*.obsolete*
`,"JBoss6.gitignore":`# gitignore for JBoss v6 projects
#
# Note: to ensure empty directories remain part of the repository, like
# \`/server/minimal/lib\`, you should add an empty \`.gitignore\` or \`.gitkeep\` file
# to the directory - otherwise you may have issues when starting the service.

/server/all/data
/server/all/log
/server/all/tmp
/server/all/work
/server/default/data
/server/default/log
/server/default/tmp
/server/default/work
/server/minimal/data
/server/minimal/log
/server/minimal/tmp
/server/minimal/work
/server/jbossweb-standalone/data
/server/jbossweb-standalone/log
/server/jbossweb-standalone/tmp
/server/jbossweb-standalone/work
/server/standard/data
/server/standard/log
/server/standard/tmp
/server/standard/work
/server/default/deploy/*.jar.failed
/server/default/deploy/*.jar.dodeploy
/server/default/deploy/*.xml.failed
/server/default/deploy/*.xml.dodeploy
/server/default/deploy/*.war.failed
/server/default/deploy/*.war.dodeploy

`,"Anjuta.gitignore":`# Local configuration folder and symbol database
/.anjuta/
/.anjuta_sym_db.db
`,"Patch.gitignore":`*.orig
*.rej
`,"Eagle.gitignore":`# Ignore list for Eagle, a PCB layout tool

# Backup files
*.s#?
*.b#?
*.l#?
*.b$?
*.s$?
*.l$?

# Eagle project file
# It contains a serial number and references to the file structure
# on your computer.
# comment the following line if you want to have your project file included.
eagle.epf

# Autorouter files
*.pro
*.job

# CAM files
*.$$$
*.cmp
*.ly2
*.l15
*.sol
*.plc
*.stc
*.sts
*.crc
*.crs

*.dri
*.drl
*.gpi
*.pls
*.ger
*.xln

*.drd
*.drd.*

*.s#*
*.b#*

*.info

*.eps

# file locks introduced since 7.x
*.lck
`,"macOS.gitignore":`# General
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \\r
Icon

# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk
`,"CodeIgniter.gitignore":`*/config/development
*/logs/log-*.php
!*/logs/index.html
*/cache/*
!system/cache/*
!*/cache/index.html
!*/cache/.htaccess

user_guide_src/build/*
user_guide_src/cilexer/build/*
user_guide_src/cilexer/dist/*
user_guide_src/cilexer/pycilexer.egg-info/*

#codeigniter 3
application/logs/*
!application/logs/index.html
!application/logs/.htaccess
/vendor/
`,"Images.gitignore":`# JPEG
*.jpg
*.jpeg
*.jpe
*.jif
*.jfif
*.jfi

# JPEG 2000
*.jp2
*.j2k
*.jpf
*.jpx
*.jpm
*.mj2

# JPEG XR
*.jxr
*.hdp
*.wdp

# Graphics Interchange Format
*.gif

# RAW
*.raw

# Web P
*.webp

# Portable Network Graphics
*.png

# Animated Portable Network Graphics
*.apng

# Multiple-image Network Graphics
*.mng

# Tagged Image File Format
*.tiff
*.tif

# Scalable Vector Graphics
*.svg
*.svgz

# Portable Document Format
*.pdf

# X BitMap
*.xbm

# BMP
*.bmp
*.dib

# ICO
*.ico

# 3D Images
*.3dm
*.max
`,"Prestashop.gitignore":`# Cache, temp and personal files

/.htaccess
*.log

# Cache
/cache/*
!/cache/.htaccess
!/cache/cachefs/index.php
!/cache/deprecated.txt
!/cache/index.php
!/cache/purifier/index.php
!/cache/push/activity
!/cache/push/index.php
!/cache/push/trends
!/cache/sandbox/index.php
!/cache/smarty/cache/index.php
!/cache/smarty/compile/index.php
!/cache/smarty/index.php
!/cache/tcpdf/index.php

# Download
/download/*
!/download/.htaccess
!/download/index.php

# Images
/img/*
!/img/.htaccess
!/img/index.php
!/img/404.gif
!/img/bg_500.png
!/img/bg_loader.png
!/img/favicon.ico
!/img/loader.gif
!/img/loadingAnimation.gif
!/img/logo.jpg
!/img/logo.png
!/img/logo_invoice.jpg
!/img/logo_stores.png
!/img/macFFBgHack.png
!/img/prestashop-avatar.png
!/img/prestashop@2x.png
!/img/preston-login-wink@2x.png
!/img/preston-login@2x.png
!/img/questionmark.png
!/img/genders/index.php
!/img/admin/index.php
!/img/c/index.php
!/img/cms/index.php
!/img/co/index.php
!/img/jquery-ui
!/img/l/index.php
!/img/m/index.php
!/img/os/index.php
!/img/p/index.php
!/img/s/index.php
!/img/scenes
!/img/st/index.php
!/img/su/index.php
!/img/t/index.php
!/img/tmp/index.php

# Upload
/upload/*
!/upload/.htaccess

/vendor/*
/docs/phpdoc-sf/
/composer.lock
*.hot-update.js
*.hot-update.json


/admin-dev/autoupgrade/*
!/admin-dev/autoupgrade/index.php
!/admin-dev/autoupgrade/backup/index.php

/admin-dev/backups/*
!/admin-dev/backups/.htaccess

/admin-dev/import/*
!/admin-dev/import/.htaccess
!/admin-dev/import/index.php

/admin-dev/export/*
!/admin-dev/export/.htaccess
!/admin-dev/export/index.php

# Downloaded RTL files
/admin-dev/themes/default/css/bundle/default_rtl.css
/admin-dev/themes/default/css/bundle/shared_rtl.css
/admin-dev/themes/default/css/font_rtl.css
/admin-dev/themes/default/css/overrides_rtl.css
/admin-dev/themes/default/css/vendor/font-awesome/font-awesome_rtl.css
/admin-dev/themes/default/css/vendor/nv.d3_rtl.css
/admin-dev/themes/default/css/vendor/titatoggle-min_rtl.css
/admin-dev/themes/default/public/theme_rtl.css
/admin-dev/themes/new-theme/css/module/drop_rtl.css
/admin-dev/themes/new-theme/css/right-sidebar_rtl.css

themes/*/cache/*

# Config

config/settings.inc.php
config/settings.old.php
config/xml/*
config/themes/*
!config/xml/themes/default.xml
themes/*/config/settings_*.json
app/config/parameters.old.yml
app/config/config.php

# Themes, modules and overrides

modules/*
override/*
themes/*/
!themes/classic
!themes/_core
!themes/_libraries

# Vendors and dependencies

bower_components/
node_modules/
composer.phar
php-cs-fixer
.grunt/*

# Translations and emails templates

translations/*
mails/*
!mails/themes/
!mails/_partials/
themes/default-bootstrap/lang/*
themes/default-bootstrap/modules/*/translations/*.php
themes/default-bootstrap/mails/*
!themes/default-bootstrap/mails/en/
themes/default-bootstrap/modules/*/mails/*
!themes/default-bootstrap/modules/*/mails/en

# MISC

*sitemap.xml
/robots.txt

# Symfony

/bin/
/app/Resources/geoip/GeoLite2-City.mmdb
/app/Resources/translations/*
!/app/Resources/translations/default
/app/config/parameters.yml
/app/config/parameters.php
/build/
/phpunit.xml
/var/*
!/var/cache
/var/cache/*
!var/cache/.gitkeep
!/var/logs
/var/logs/*
!var/logs/.gitkeep
!/var/sessions
/var/sessions/*
!var/sessions/.gitkeep
!var/SymfonyRequirements.php
/vendor/
/web/bundles/

`,"Magento2.gitignore":`/sitemap
/sitemap.xml
/pub/sitemap
/pub/sitemap.xml
/app/config_sandbox
/app/etc/config.php
/app/etc/env.php
/app/code/Magento/TestModule*
/lib/internal/flex/uploader/.actionScriptProperties
/lib/internal/flex/uploader/.flexProperties
/lib/internal/flex/uploader/.project
/lib/internal/flex/uploader/.settings
/lib/internal/flex/varien/.actionScriptProperties
/lib/internal/flex/varien/.flexLibProperties
/lib/internal/flex/varien/.project
/lib/internal/flex/varien/.settings
/.grunt
/.php_cs.cache
/grunt-config.json
/dev/tools/grunt/configs/local-themes.js

/pub/media/*.*
!/pub/media/.htaccess
/pub/media/attribute/*
!/pub/media/attribute/.htaccess
/pub/media/analytics/*
/pub/media/catalog/*
!/pub/media/catalog/.htaccess
/pub/media/customer/*
!/pub/media/customer/.htaccess
/pub/media/downloadable/*
!/pub/media/downloadable/.htaccess
/pub/media/favicon/*
/pub/media/import/*
!/pub/media/import/.htaccess
/pub/media/logo/*
/pub/media/theme/*
/pub/media/theme_customization/*
!/pub/media/theme_customization/.htaccess
/pub/media/wysiwyg/*
!/pub/media/wysiwyg/.htaccess
/pub/media/tmp/*
!/pub/media/tmp/.htaccess
/pub/media/captcha/*
!/pub/media/captcha/.htaccess
/pub/static/*
!/pub/static/.htaccess

/var/*
!/var/.htaccess
/vendor/*
!/vendor/.htaccess
/generated/*
!/generated/.htaccess
`,"GPG.gitignore":`secring.*

`,"SCons.gitignore":`# for projects that use SCons for building: http://http://www.scons.org/
.sconsign.dblite

# When configure fails, SCons outputs these
config.log
.sconf_temp
`,"Textpattern.gitignore":`.htaccess
css.php
rpc/
sites/site*/admin/
sites/site*/private/
sites/site*/public/admin/
sites/site*/public/setup/
sites/site*/public/theme/
textpattern/
HISTORY.txt
README.txt
`};function Td({title:e,titleId:n,...t},i){return M.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},t),e?M.createElement("title",{id:n},e):null,M.createElement("path",{d:"M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"}),M.createElement("path",{d:"M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"}))}const Ld=M.forwardRef(Td),Nd=Ld;function Rd({title:e,titleId:n,...t},i){return M.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},t),e?M.createElement("title",{id:n},e):null,M.createElement("path",{d:"M7.25 10.25a.75.75 0 0 0 1.5 0V4.56l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06l2.22-2.22v5.69Z"}),M.createElement("path",{d:"M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"}))}const Id=M.forwardRef(Rd),Ad=Id;function zd({title:e,titleId:n,...t},i){return M.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},t),e?M.createElement("title",{id:n},e):null,M.createElement("path",{fillRule:"evenodd",d:"M11.986 3H12a2 2 0 0 1 2 2v6a2 2 0 0 1-1.5 1.937v-2.523a2.5 2.5 0 0 0-.732-1.768L8.354 5.232A2.5 2.5 0 0 0 6.586 4.5H4.063A2 2 0 0 1 6 3h.014A2.25 2.25 0 0 1 8.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM10.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z",clipRule:"evenodd"}),M.createElement("path",{d:"M3 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.586a1 1 0 0 0-.293-.707L7.293 6.293A1 1 0 0 0 6.586 6H3Z"}))}const Od=M.forwardRef(zd),Fd=Od;function Vd({title:e,titleId:n,...t},i){return M.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},t),e?M.createElement("title",{id:n},e):null,M.createElement("path",{fillRule:"evenodd",d:"M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 4H9.621a1.5 1.5 0 0 1-1.06-.44L7.439 2.44A1.5 1.5 0 0 0 6.38 2H3.5Zm5.25 4.75a.75.75 0 0 0-1.5 0v2.69l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V6.75Z",clipRule:"evenodd"}))}const Ud=M.forwardRef(Vd),Wd=Ud;function Hd({title:e,titleId:n,...t},i){return M.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},t),e?M.createElement("title",{id:n},e):null,M.createElement("path",{d:"M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"}))}const $d=M.forwardRef(Hd),Jd=$d,Ha=e=>j.jsx("div",{className:"flex flex-col flex-grow-0 w-full h-full overflow-y-auto p-1 content-start justify-start items-start no-scrollbar "+(e.center?"justify-center items-center":""),children:e.items.map(n=>e.withDeleteButton?j.jsxs("div",{className:"flex flex-row",children:[j.jsx("button",{className:"mb-1 w-auto "+(e.selectedItems.indexOf(n)===-1?"rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50":"rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"),children:n.replace(".gitignore","")}),j.jsx("button",{className:"rounded-md px-2 py-1 text-sm font-semibold text-black shadow-sm hover:text-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:text-red-600",onClick:()=>e.onToggle(n),children:j.jsx(Jd,{className:"-ml-0.5 h-5 w-5","aria-hidden":"true"})})]},n):j.jsx("button",{onClick:()=>e.onToggle(n),className:"mb-1 w-auto "+(e.selectedItems.indexOf(n)===-1?"rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50":"rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"),children:n.replace(".gitignore","")},n))}),Jr={lists:[{name:"Java Mac IntelliJ",keys:["Java.gitignore","Maven.gitignore","JetBrains.gitignore","macOS.gitignore"]},{name:"React/Node/TS Mac IntelliJ",keys:["Node.gitignore","JetBrains.gitignore","macOS.gitignore"]},{name:"iOS/mac dev",keys:["Swift.gitignore","Xcode.gitignore","macOS.gitignore"]}],allWithTags:[{key:"Actionscript.gitignore",tags:[]},{key:"Ada.gitignore",tags:[]},{key:"Agda.gitignore",tags:[]},{key:"AL.gitignore",tags:[]},{key:"AltiumDesigner.gitignore",tags:[]},{key:"Android.gitignore",tags:[]},{key:"Anjuta.gitignore",tags:[]},{key:"Ansible.gitignore",tags:["devops"]},{key:"AppceleratorTitanium.gitignore",tags:[]},{key:"AppEngine.gitignore",tags:[]},{key:"Archives.gitignore",tags:[]},{key:"ArchLinuxPackages.gitignore",tags:[]},{key:"AtmelStudio.gitignore",tags:[]},{key:"AutoIt.gitignore",tags:[]},{key:"Autotools.gitignore",tags:[]},{key:"B4X.gitignore",tags:[]},{key:"Backup.gitignore",tags:[]},{key:"Bazaar.gitignore",tags:[]},{key:"Bazel.gitignore",tags:[]},{key:"Beef.gitignore",tags:[]},{key:"Bitrix.gitignore",tags:[]},{key:"BricxCC.gitignore",tags:[]},{key:"C.gitignore",tags:[]},{key:"C++.gitignore",tags:[]},{key:"CakePHP.gitignore",tags:["php"]},{key:"Calabash.gitignore",tags:[]},{key:"CDK.gitignore",tags:[]},{key:"CFWheels.gitignore",tags:[]},{key:"ChefCookbook.gitignore",tags:["devops"]},{key:"Clojure.gitignore",tags:[]},{key:"Cloud9.gitignore",tags:[]},{key:"CMake.gitignore",tags:[]},{key:"CodeIgniter.gitignore",tags:[]},{key:"CodeKit.gitignore",tags:[]},{key:"CodeSniffer.gitignore",tags:[]},{key:"CommonLisp.gitignore",tags:[]},{key:"Composer.gitignore",tags:[]},{key:"Concrete5.gitignore",tags:[]},{key:"Coq.gitignore",tags:[]},{key:"Cordova.gitignore",tags:[]},{key:"core.gitignore",tags:[]},{key:"CraftCMS.gitignore",tags:[]},{key:"CUDA.gitignore",tags:[]},{key:"CVS.gitignore",tags:[]},{key:"D.gitignore",tags:[]},{key:"Dart.gitignore",tags:[]},{key:"DartEditor.gitignore",tags:[]},{key:"Delphi.gitignore",tags:[]},{key:"Diff.gitignore",tags:[]},{key:"DM.gitignore",tags:[]},{key:"Dreamweaver.gitignore",tags:[]},{key:"Dropbox.gitignore",tags:[]},{key:"Drupal.gitignore",tags:["php"]},{key:"Drupal7.gitignore",tags:["php"]},{key:"Eagle.gitignore",tags:[]},{key:"Eclipse.gitignore",tags:["ide"]},{key:"EiffelStudio.gitignore",tags:[]},{key:"Elisp.gitignore",tags:[]},{key:"Elixir.gitignore",tags:[]},{key:"Elm.gitignore",tags:[]},{key:"Emacs.gitignore",tags:["ide"]},{key:"Ensime.gitignore",tags:[]},{key:"EPiServer.gitignore",tags:[]},{key:"Erlang.gitignore",tags:[]},{key:"esp-idf.gitignore",tags:[]},{key:"Espresso.gitignore",tags:[]},{key:"Exercism.gitignore",tags:[]},{key:"ExpressionEngine.gitignore",tags:[]},{key:"ExtJs.gitignore",tags:["js"]},{key:"Fancy.gitignore",tags:[]},{key:"Finale.gitignore",tags:[]},{key:"FlaxEngine.gitignore",tags:[]},{key:"FlexBuilder.gitignore",tags:[]},{key:"ForceDotCom.gitignore",tags:[]},{key:"Fortran.gitignore",tags:[]},{key:"FuelPHP.gitignore",tags:["php"]},{key:"Gcov.gitignore",tags:[]},{key:"GitBook.gitignore",tags:[]},{key:"GNOMEShellExtension.gitignore",tags:[]},{key:"Go.AllowList.gitignore",tags:[]},{key:"Go.gitignore",tags:[]},{key:"Godot.gitignore",tags:[]},{key:"GPG.gitignore",tags:[]},{key:"Gradle.gitignore",tags:["java"]},{key:"Grails.gitignore",tags:[]},{key:"Gretl.gitignore",tags:[]},{key:"GWT.gitignore",tags:[]},{key:"Haskell.gitignore",tags:[]},{key:"Hugo.gitignore",tags:[]},{key:"IAR_EWARM.gitignore",tags:[]},{key:"Idris.gitignore",tags:[]},{key:"IGORPro.gitignore",tags:[]},{key:"Images.gitignore",tags:[]},{key:"InforCMS.gitignore",tags:[]},{key:"Java.gitignore",tags:["java"]},{key:"JBoss.gitignore",tags:["java"]},{key:"JBoss4.gitignore",tags:["java"]},{key:"JBoss6.gitignore",tags:["java"]},{key:"JDeveloper.gitignore",tags:[]},{key:"Jekyll.gitignore",tags:[]},{key:"JENKINS_HOME.gitignore",tags:[]},{key:"JEnv.gitignore",tags:["java"]},{key:"JetBrains.gitignore",tags:["ide"]},{key:"Jigsaw.gitignore",tags:[]},{key:"Joomla.gitignore",tags:["php"]},{key:"Julia.gitignore",tags:[]},{key:"JupyterNotebooks.gitignore",tags:[]},{key:"Kate.gitignore",tags:[]},{key:"KDevelop4.gitignore",tags:[]},{key:"Kentico.gitignore",tags:[]},{key:"KiCad.gitignore",tags:[]},{key:"Kohana.gitignore",tags:[]},{key:"Kotlin.gitignore",tags:[]},{key:"LabVIEW.gitignore",tags:[]},{key:"Laravel.gitignore",tags:["php"]},{key:"Lazarus.gitignore",tags:[]},{key:"Leiningen.gitignore",tags:[]},{key:"LemonStand.gitignore",tags:[]},{key:"LensStudio.gitignore",tags:[]},{key:"LibreOffice.gitignore",tags:["ide"]},{key:"Lilypond.gitignore",tags:[]},{key:"Linux.gitignore",tags:["os"]},{key:"Lithium.gitignore",tags:[]},{key:"Logtalk.gitignore",tags:[]},{key:"Lua.gitignore",tags:[]},{key:"LyX.gitignore",tags:[]},{key:"macOS.gitignore",tags:["os"]},{key:"Magento.gitignore",tags:[]},{key:"Magento1.gitignore",tags:[]},{key:"Magento2.gitignore",tags:["php"]},{key:"MATLAB.gitignore",tags:[]},{key:"Maven.gitignore",tags:["java","build"]},{key:"Mercurial.gitignore",tags:[]},{key:"Mercury.gitignore",tags:[]},{key:"Metals.gitignore",tags:[]},{key:"MetaProgrammingSystem.gitignore",tags:[]},{key:"Meteor.gitignore",tags:[]},{key:"MicrosoftOffice.gitignore",tags:["ide"]},{key:"ModelSim.gitignore",tags:[]},{key:"Momentics.gitignore",tags:[]},{key:"MonoDevelop.gitignore",tags:[]},{key:"Nanoc.gitignore",tags:[]},{key:"NasaSpecsIntact.gitignore",tags:[]},{key:"NetBeans.gitignore",tags:["ide"]},{key:"Nikola.gitignore",tags:[]},{key:"Nim.gitignore",tags:[]},{key:"Ninja.gitignore",tags:[]},{key:"Nix.gitignore",tags:[]},{key:"Node.gitignore",tags:["js","node","ts"]},{key:"NotepadPP.gitignore",tags:["ide"]},{key:"NWjs.gitignore",tags:[]},{key:"Objective-C.gitignore",tags:[]},{key:"OCaml.gitignore",tags:[]},{key:"Octave.gitignore",tags:[]},{key:"Opa.gitignore",tags:[]},{key:"OpenCart.gitignore",tags:[]},{key:"OpenSSL.gitignore",tags:[]},{key:"OracleForms.gitignore",tags:[]},{key:"Otto.gitignore",tags:[]},{key:"Packer.gitignore",tags:[]},{key:"Patch.gitignore",tags:[]},{key:"Perl.gitignore",tags:[]},{key:"Phalcon.gitignore",tags:[]},{key:"Phoenix.gitignore",tags:[]},{key:"Pimcore.gitignore",tags:[]},{key:"PlayFramework.gitignore",tags:[]},{key:"Plone.gitignore",tags:[]},{key:"Prestashop.gitignore",tags:[]},{key:"Processing.gitignore",tags:[]},{key:"PSoCCreator.gitignore",tags:[]},{key:"Puppet.gitignore",tags:["devops"]},{key:"PureScript.gitignore",tags:[]},{key:"PuTTY.gitignore",tags:[]},{key:"Python.gitignore",tags:[]},{key:"Qooxdoo.gitignore",tags:[]},{key:"Qt.gitignore",tags:[]},{key:"R.gitignore",tags:[]},{key:"Racket.gitignore",tags:[]},{key:"Rails.gitignore",tags:[]},{key:"Raku.gitignore",tags:[]},{key:"Red.gitignore",tags:[]},{key:"Redcar.gitignore",tags:[]},{key:"Redis.gitignore",tags:[]},{key:"RhodesRhomobile.gitignore",tags:[]},{key:"ROS.gitignore",tags:[]},{key:"ROS2.gitignore",tags:[]},{key:"Ruby.gitignore",tags:[]},{key:"Rust.gitignore",tags:[]},{key:"SAM.gitignore",tags:[]},{key:"Sass.gitignore",tags:[]},{key:"SBT.gitignore",tags:[]},{key:"Scala.gitignore",tags:[]},{key:"Scheme.gitignore",tags:[]},{key:"SCons.gitignore",tags:[]},{key:"Scrivener.gitignore",tags:[]},{key:"Sdcc.gitignore",tags:[]},{key:"SeamGen.gitignore",tags:[]},{key:"SketchUp.gitignore",tags:[]},{key:"SlickEdit.gitignore",tags:["ide"]},{key:"Smalltalk.gitignore",tags:[]},{key:"Snap.gitignore",tags:[]},{key:"SPFx.gitignore",tags:[]},{key:"Splunk.gitignore",tags:[]},{key:"Stata.gitignore",tags:[]},{key:"Stella.gitignore",tags:[]},{key:"Strapi.gitignore",tags:[]},{key:"SublimeText.gitignore",tags:["ide"]},{key:"SugarCRM.gitignore",tags:[]},{key:"SVN.gitignore",tags:[]},{key:"Swift.gitignore",tags:[]},{key:"Symfony.gitignore",tags:["php"]},{key:"SymphonyCMS.gitignore",tags:[]},{key:"Syncthing.gitignore",tags:[]},{key:"SynopsysVCS.gitignore",tags:[]},{key:"Tags.gitignore",tags:[]},{key:"Terraform.gitignore",tags:["devops"]},{key:"TeX.gitignore",tags:[]},{key:"TextMate.gitignore",tags:["ide"]},{key:"Textpattern.gitignore",tags:[]},{key:"ThinkPHP.gitignore",tags:["php"]},{key:"Toit.gitignore",tags:[]},{key:"TortoiseGit.gitignore",tags:[]},{key:"TurboGears2.gitignore",tags:[]},{key:"TwinCAT3.gitignore",tags:[]},{key:"Typo3.gitignore",tags:[]},{key:"Umbraco.gitignore",tags:[]},{key:"Unity.gitignore",tags:[]},{key:"UnrealEngine.gitignore",tags:[]},{key:"uVision.gitignore",tags:[]},{key:"V.gitignore",tags:[]},{key:"Vagrant.gitignore",tags:["devops"]},{key:"Vim.gitignore",tags:["ide"]},{key:"VirtualEnv.gitignore",tags:[]},{key:"Virtuoso.gitignore",tags:[]},{key:"VisualStudio.gitignore",tags:["ide"]},{key:"VisualStudioCode.gitignore",tags:["ide"]},{key:"Vue.gitignore",tags:["js","ts"]},{key:"VVVV.gitignore",tags:[]},{key:"Waf.gitignore",tags:[]},{key:"WebMethods.gitignore",tags:[]},{key:"Windows.gitignore",tags:["os"]},{key:"WordPress.gitignore",tags:["php"]},{key:"Xcode.gitignore",tags:["ide"]},{key:"Xilinx.gitignore",tags:[]},{key:"XilinxISE.gitignore",tags:[]},{key:"Xojo.gitignore",tags:[]},{key:"Yeoman.gitignore",tags:[]},{key:"Yii.gitignore",tags:[]},{key:"ZendFramework.gitignore",tags:["php"]},{key:"Zephir.gitignore",tags:[]}],all:["MATLAB.gitignore","CUDA.gitignore","Node.gitignore","GitBook.gitignore","CVS.gitignore","Virtuoso.gitignore","Xilinx.gitignore","PSoCCreator.gitignore","IAR_EWARM.gitignore","Espresso.gitignore","VirtualEnv.gitignore","Clojure.gitignore","Racket.gitignore","WordPress.gitignore","Lua.gitignore","Puppet.gitignore","Maven.gitignore","Nikola.gitignore","Elixir.gitignore","Fortran.gitignore","AltiumDesigner.gitignore","OpenSSL.gitignore","Plone.gitignore","Julia.gitignore","Bazaar.gitignore","Lilypond.gitignore","Syncthing.gitignore","Qt.gitignore","Sdcc.gitignore","AutoIt.gitignore","LabVIEW.gitignore","ForceDotCom.gitignore","ROS2.gitignore","JupyterNotebooks.gitignore","Leiningen.gitignore","Drupal7.gitignore","Typo3.gitignore","CFWheels.gitignore","C++.gitignore","Mercury.gitignore","OracleForms.gitignore","Gretl.gitignore","CDK.gitignore","V.gitignore","Cloud9.gitignore","Umbraco.gitignore","SymphonyCMS.gitignore","LemonStand.gitignore","Python.gitignore","Red.gitignore","Hugo.gitignore","Calabash.gitignore","uVision.gitignore","DartEditor.gitignore","Logtalk.gitignore","Scrivener.gitignore","CommonLisp.gitignore","TeX.gitignore","Nix.gitignore","WebMethods.gitignore","Rails.gitignore","Grails.gitignore","Elisp.gitignore","Processing.gitignore","ThinkPHP.gitignore","Cordova.gitignore","Exercism.gitignore","AtmelStudio.gitignore","Dreamweaver.gitignore","Raku.gitignore","CakePHP.gitignore","Perl.gitignore","FlaxEngine.gitignore","PureScript.gitignore","LensStudio.gitignore","ExtJs.gitignore","Phalcon.gitignore","Sass.gitignore","MetaProgrammingSystem.gitignore","Scala.gitignore","PuTTY.gitignore","Backup.gitignore","Snap.gitignore","Terraform.gitignore","Actionscript.gitignore","Unity.gitignore","JetBrains.gitignore","TextMate.gitignore","RhodesRhomobile.gitignore","Java.gitignore","IGORPro.gitignore","Vue.gitignore","Kate.gitignore","Stella.gitignore","Momentics.gitignore","Gcov.gitignore","Finale.gitignore","TwinCAT3.gitignore","AppEngine.gitignore","XilinxISE.gitignore","GNOMEShellExtension.gitignore","SugarCRM.gitignore","Zephir.gitignore","Ninja.gitignore","esp-idf.gitignore","SeamGen.gitignore","EiffelStudio.gitignore","KDevelop4.gitignore","R.gitignore","SPFx.gitignore","Eclipse.gitignore","Toit.gitignore","Kentico.gitignore","CodeSniffer.gitignore","InforCMS.gitignore","Jekyll.gitignore","KiCad.gitignore","Go.AllowList.gitignore","Delphi.gitignore","Emacs.gitignore","MicrosoftOffice.gitignore","Agda.gitignore","Concrete5.gitignore","Packer.gitignore","Vim.gitignore","JDeveloper.gitignore","FlexBuilder.gitignore","ZendFramework.gitignore","Ansible.gitignore","Kotlin.gitignore","Vagrant.gitignore","Waf.gitignore","Metals.gitignore","Diff.gitignore","Idris.gitignore","Symfony.gitignore","Smalltalk.gitignore","SVN.gitignore","Go.gitignore","Magento.gitignore","Nim.gitignore","Elm.gitignore","Bitrix.gitignore","Redcar.gitignore","Qooxdoo.gitignore","ArchLinuxPackages.gitignore","Mercurial.gitignore","NasaSpecsIntact.gitignore","Stata.gitignore","TurboGears2.gitignore","Splunk.gitignore","SynopsysVCS.gitignore","Composer.gitignore","Ensime.gitignore","JBoss.gitignore","NWjs.gitignore","Lithium.gitignore","TortoiseGit.gitignore","Archives.gitignore","Beef.gitignore","SublimeText.gitignore","LyX.gitignore","Ada.gitignore","Windows.gitignore","Haskell.gitignore","SBT.gitignore","Joomla.gitignore","Gradle.gitignore","Swift.gitignore","Strapi.gitignore","OpenCart.gitignore","AppceleratorTitanium.gitignore","ROS.gitignore","Erlang.gitignore","MonoDevelop.gitignore","Dart.gitignore","Octave.gitignore","Phoenix.gitignore","Coq.gitignore","Lazarus.gitignore","Linux.gitignore","Drupal.gitignore","JBoss4.gitignore","JEnv.gitignore","CMake.gitignore","ChefCookbook.gitignore","Bazel.gitignore","Jigsaw.gitignore","DM.gitignore","Tags.gitignore","B4X.gitignore","ModelSim.gitignore","Ruby.gitignore","Godot.gitignore","Opa.gitignore","CodeKit.gitignore","Dropbox.gitignore","Nanoc.gitignore","BricxCC.gitignore","AL.gitignore","Laravel.gitignore","ExpressionEngine.gitignore","Kohana.gitignore","FuelPHP.gitignore","UnrealEngine.gitignore","Yii.gitignore","D.gitignore","Scheme.gitignore","SAM.gitignore","NetBeans.gitignore","Redis.gitignore","Pimcore.gitignore","SketchUp.gitignore","OCaml.gitignore","Android.gitignore","PlayFramework.gitignore","core.gitignore","Meteor.gitignore","Xcode.gitignore","VisualStudioCode.gitignore","CraftCMS.gitignore","NotepadPP.gitignore","EPiServer.gitignore","SlickEdit.gitignore","Fancy.gitignore","C.gitignore","Objective-C.gitignore","LibreOffice.gitignore","Magento1.gitignore","Yeoman.gitignore","GWT.gitignore","VVVV.gitignore","Otto.gitignore","Autotools.gitignore","VisualStudio.gitignore","Rust.gitignore","JENKINS_HOME.gitignore","Xojo.gitignore","JBoss6.gitignore","Anjuta.gitignore","Patch.gitignore","Eagle.gitignore","macOS.gitignore","CodeIgniter.gitignore","Images.gitignore","Prestashop.gitignore","Magento2.gitignore","GPG.gitignore","SCons.gitignore","Textpattern.gitignore"]};function Qd(){let e=[],n=[];const t=()=>{e=[];let C=new Set;i.forEach(E=>{e.push(E.key),E.tags.forEach(A=>C.add(A))}),n=[...C].sort((E,A)=>E.localeCompare(A)),h(n)},[i,r]=M.useState(Jr.allWithTags),[o,s]=M.useState([]),[a,l]=M.useState([]),[c,f]=M.useState(""),[m,p]=M.useState(""),[v,k]=M.useState(e),[x,I]=M.useState(v),[g,u]=M.useState(""),[d,h]=M.useState([]),[_,S]=M.useState(Jr.lists),B=M.useRef(null);M.useEffect(()=>{t()},[i]),M.useEffect(()=>{let C="";for(const E of o)C+=Dd[E]+`

`;f(C)},[o]),M.useEffect(()=>{m.trim().length===0&&I(v);const C=new RegExp(".*"+m.trim()+".*"),E=v.filter(A=>A.toLowerCase().match(C));I(E)},[m,v]),M.useEffect(()=>{if(a.length===0){k(i.map(E=>E.key));return}const C=[];i.forEach(E=>{E.tags.forEach(A=>{a.indexOf(A)>-1&&C.push(E)})}),k(C.map(E=>E.key))},[a]);const G=C=>{const E=o.indexOf(C)>-1;s(E?o.filter(A=>A!==C):[...o,C])},U=C=>{const E=a.indexOf(C)>-1;l(E?a.filter(A=>A!==C):[...a,C])},T=C=>{for(let E=0;E<_.length;E++)if(_[E].name===C){s(_[E].keys);break}},ve=()=>{const C=g.trim();if(C.length===0)return;const E=[..._];let A=!1;for(let w=0;w<E.length;w++)if(E[w].name===C){E[w].keys=[...o],A=!0;break}A||E.push({name:C,keys:[...o]}),S(E),u("")},_n=()=>{const C="_.gitignore",E=c.trim()+(c.trim().length>0?`

# Made with: https://github.com/alexadam/gitignore-builder`:""),A=document.createElement("a");A.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(E)),A.setAttribute("download",C),A.style.display="none",document.body.appendChild(A),A.click(),document.body.removeChild(A)},wn=()=>{let C="gitignore_data.json",E=document.createElement("a");E.setAttribute("href","data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({...Jr,allWithTags:i,lists:_},null,2))),E.setAttribute("download",C),E.style.display="none",document.body.appendChild(E),E.click(),document.body.removeChild(E)},ti=C=>{C.preventDefault();const E=new FileReader;E.onload=async A=>{const w=A.target.result,P=JSON.parse(w);r(P.allWithTags),S(P.lists)},E.readAsText(C.target.files[0])};return j.jsxs("div",{className:"flex flex-col w-full h-screen",children:[j.jsxs("header",{className:"w-full p-3 bg-gray-200 flex flex-row flex-shrink-0 justify-between",children:[j.jsx("h1",{className:"font-bold",children:".gitignore builder"}),j.jsxs("div",{children:[j.jsxs("button",{className:"w-40 mr-2 inline-flex justify-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",onClick:wn,children:[j.jsx(Nd,{className:"-ml-0.5 h-5 w-5","aria-hidden":"true"}),"Save as Json"]}),j.jsxs("button",{className:"w-40 mr-2 inline-flex justify-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",onClick:()=>{var C;return(C=B.current)==null?void 0:C.click()},children:[j.jsx("input",{style:{display:"none"},ref:B,type:"file",onChange:ti}),j.jsx(Ad,{className:"-ml-0.5 h-5 w-5","aria-hidden":"true"}),"Load from Json"]}),j.jsx("a",{href:"https://github.com/alexadam/gitignore-builder",className:"inline-block",children:j.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 16 16",width:"20","aria-hidden":"true",className:"d-block",children:j.jsx("path",{fill:"black",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})})]})]}),j.jsxs("div",{className:"flex flex-row w-full h-full flex-grow-0 min-h-0",children:[j.jsxs("div",{className:"flex flex-col h-full w-[150px]",children:[j.jsxs("div",{className:"flex flex-col p-5 h-full border-b-2 items-start overflow-y-auto no-scrollbar",children:[j.jsx("b",{className:"pb-4",children:"Categories"}),d.map(C=>j.jsx("button",{onClick:()=>U(C),className:a.indexOf(C)>-1?"mb-1 inline-flex items-center rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20":"mb-1 inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20",children:C},C))]}),j.jsxs("div",{className:"flex flex-col p-5 h-full overflow-y-auto no-scrollbar",children:[j.jsx("b",{className:"pb-4 w-full",children:"Lists"}),_.map(C=>j.jsx("button",{onClick:()=>T(C.name),className:"mb-1 inline-flex items-center justify-center rounded-md bg-violet-300 px-2 py-1 text-xs font-medium text-violet-800 ring-1 ring-inset ring-violet-600/20",children:C.name},C.name))]})]}),j.jsxs("div",{className:"h-full w-3/12 flex flex-col p-2 border-l-2",children:[j.jsxs("div",{className:"relative mt-2 mb-2",children:[j.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:j.jsx("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:j.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})}),j.jsx("input",{className:"block w-full border-0 bg-gray-50 py-1.5 pl-10 text-gray-900 focus:ring-0 sm:text-sm sm:leading-16",type:"text",value:m,onChange:C=>p(C.target.value)}),j.jsx("div",{className:"absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600","aria-hidden":"true"})]}),j.jsx(Ha,{items:x,onToggle:G,selectedItems:o})]}),j.jsxs("div",{className:"h-full w-3/12 flex flex-col p-2 border-l-2",children:[j.jsx(Ha,{items:o,onToggle:G,selectedItems:o,withDeleteButton:!0,center:!0}),j.jsxs("div",{className:"flex flex-row w-full mb-5",children:[j.jsx("input",{className:"block w-full border-0 bg-gray-50 py-1 pl-2 text-gray-900 focus:ring-0 sm:text-sm sm:leading-16",type:"text",placeholder:"List Name",value:g,onChange:C=>u(C.target.value)}),j.jsx("button",{className:"w-40 rounded-md bg-green-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:ve,children:"Save List"}),j.jsx("div",{className:"absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600","aria-hidden":"true"})]})]}),j.jsxs("div",{className:"h-full w-6/12 flex flex-col p-2",children:[j.jsx("textarea",{name:"",id:"",className:"h-full w-full shadow-lg p-5 mb-2",value:c.trim()+(c.trim().length>0?`

# Made with: https://github.com/alexadam/gitignore-builder`:""),onChange:C=>f(C.target.value)}),j.jsxs("div",{className:"flex flex-row justify-end",children:[j.jsxs("button",{className:"w-40 mr-2 inline-flex justify-center gap-x-1.5 rounded-md bg-green-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:()=>navigator.clipboard.writeText(c.trim()+(c.trim().length>0?`

# Made with: https://github.com/alexadam/gitignore-builder`:"")),children:[j.jsx(Fd,{className:"-ml-0.5 h-5 w-5","aria-hidden":"true"}),"Copy"]}),j.jsxs("button",{className:"w-60 inline-flex justify-center gap-x-1.5 rounded-md bg-green-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:_n,children:[j.jsx(Wd,{className:"-ml-0.5 h-5 w-5","aria-hidden":"true"}),"Download .gitignore"]})]})]})]})]})}Qr.createRoot(document.getElementById("root")).render(j.jsx(wc.StrictMode,{children:j.jsx(Qd,{})}));
