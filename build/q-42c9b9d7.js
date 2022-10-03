function A(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const f=Object.getOwnPropertyDescriptor(r,o);f&&Object.defineProperty(e,o,f.get?f:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var fe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function F(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var v={exports:{}},u={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),L=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),M=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),k=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,C={};function p(e,t,n){this.props=e,this.context=t,this.refs=C,this.updater=n||g}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function x(){}x.prototype=p.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=C,this.updater=n||g}var w=b.prototype=new x;w.constructor=b;j(w,p.prototype);w.isPureReactComponent=!0;var $=Array.isArray,P=Object.prototype.hasOwnProperty,R={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var r,o={},f=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(f=""+t.key),t)P.call(t,r)&&!I.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:y,type:e,key:f,ref:i,props:o,_owner:R.current}}function J(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function E(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function Y(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var O=/\/+/g;function S(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Y(""+e.key):t.toString(36)}function _(e,t,n,r,o){var f=typeof e;(f==="undefined"||f==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(f){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case y:case L:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+S(i,0):r,$(o)?(n="",e!=null&&(n=e.replace(O,"$&/")+"/"),_(o,t,n,"",function(a){return a})):o!=null&&(E(o)&&(o=J(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(O,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",$(e))for(var s=0;s<e.length;s++){f=e[s];var c=r+S(f,s);i+=_(f,t,n,c,o)}else if(c=G(e),typeof c=="function")for(e=c.call(e),s=0;!(f=e.next()).done;)f=f.value,c=r+S(f,s++),i+=_(f,t,n,c,o);else if(f==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function d(e,t,n){if(e==null)return e;var r=[],o=0;return _(e,r,"","",function(f){return t.call(n,f,o++)}),r}function K(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},m={transition:null},Q={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:m,ReactCurrentOwner:R};u.Children={map:d,forEach:function(e,t,n){d(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};u.Component=p;u.Fragment=N;u.Profiler=V;u.PureComponent=b;u.StrictMode=U;u.Suspense=B;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q;u.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=j({},e.props),o=e.key,f=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(f=t.ref,i=R.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)P.call(t,c)&&!I.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var a=0;a<c;a++)s[a]=arguments[a+2];r.children=s}return{$$typeof:y,type:e.type,key:o,ref:f,props:r,_owner:i}};u.createContext=function(e){return e={$$typeof:M,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:q,_context:e},e.Consumer=e};u.createElement=T;u.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:z,render:e}};u.isValidElement=E;u.lazy=function(e){return{$$typeof:W,_payload:{_status:-1,_result:e},_init:K}};u.memo=function(e,t){return{$$typeof:H,type:e,compare:t===void 0?null:t}};u.startTransition=function(e){var t=m.transition;m.transition={};try{e()}finally{m.transition=t}};u.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};u.useCallback=function(e,t){return l.current.useCallback(e,t)};u.useContext=function(e){return l.current.useContext(e)};u.useDebugValue=function(){};u.useDeferredValue=function(e){return l.current.useDeferredValue(e)};u.useEffect=function(e,t){return l.current.useEffect(e,t)};u.useId=function(){return l.current.useId()};u.useImperativeHandle=function(e,t,n){return l.current.useImperativeHandle(e,t,n)};u.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};u.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};u.useMemo=function(e,t){return l.current.useMemo(e,t)};u.useReducer=function(e,t,n){return l.current.useReducer(e,t,n)};u.useRef=function(e){return l.current.useRef(e)};u.useState=function(e){return l.current.useState(e)};u.useSyncExternalStore=function(e,t,n){return l.current.useSyncExternalStore(e,t,n)};u.useTransition=function(){return l.current.useTransition()};u.version="18.2.0";(function(e){e.exports=u})(v);const X=F(v.exports),ie=A({__proto__:null,default:X},[v.exports]);var Z={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee=v.exports,te=Symbol.for("react.element"),re=Symbol.for("react.fragment"),ne=Object.prototype.hasOwnProperty,oe=ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ue={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,n){var r,o={},f=null,i=null;n!==void 0&&(f=""+n),t.key!==void 0&&(f=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)ne.call(t,r)&&!ue.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:te,type:e,key:f,ref:i,props:o,_owner:oe.current}}h.Fragment=re;h.jsx=D;h.jsxs=D;(function(e){e.exports=h})(Z);export{ie as R,X as a,fe as c,F as g,Z as j,v as r};
