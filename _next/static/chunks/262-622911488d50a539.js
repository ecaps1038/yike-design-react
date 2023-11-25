"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[262],{9688:function(t,e,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(4904),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(t,e,n){var r,i={},a=null,f=null;for(r in void 0!==n&&(a=""+n),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(f=e.ref),e)c.call(e,r)&&!u.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===i[r]&&(i[r]=e[r]);return{$$typeof:o,type:t,key:a,ref:f,props:i,_owner:s.current}}e.Fragment=i,e.jsx=a,e.jsxs=a},4915:function(t,e,n){t.exports=n(9688)},2176:function(t,e,n){function r(){return(r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return Y}});var o=n(4904),i=n(166),c={},s=[];function u(t,e){}function a(t,e){}function f(t,e,n){e||c[n]||(t(!1,n),c[n]=!0)}function h(t,e){f(u,t,e)}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==l(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===l(e)?e:String(e)}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach(function(e){var r,o;r=e,o=n[e],(r=p(r))in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}h.preMessage=function(t){s.push(t)},h.resetWarned=function(){c={}},h.noteOnce=function(t,e){f(a,t,e)};var y=n(2331);function b(t){return t instanceof HTMLElement||t instanceof SVGElement?t:t instanceof o.Component?y.findDOMNode(t):null}function _(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.filter(function(t){return t});return r.length<=1?r[0]:function(t){e.forEach(function(e){"function"==typeof e?e(t):"object"===l(e)&&e&&"current"in e&&(e.current=t)})}}var m=o.createContext(null),g=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];t.call(e,o[1],o[0])}},e}()}(),O="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,w=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),E="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(w):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},j=["top","right","bottom","left","width","height","size","weight"],S="undefined"!=typeof MutationObserver,R=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,o=0;function i(){n&&(n=!1,t()),r&&s()}function c(){E(i)}function s(){var t=Date.now();if(n){if(t-o<2)return;r=!0}else n=!0,r=!1,setTimeout(c,20);o=t}return s}(this.refresh.bind(this),0)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},t.prototype.connect_=function(){O&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),S?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){O&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;j.some(function(t){return!!~n.indexOf(t)})&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),M=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},P=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||w},k=C(0,0,0,0);function A(t){return parseFloat(t)||0}function x(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(e,n){return e+A(t["border-"+n+"-width"])},0)}var T="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof P(t).SVGGraphicsElement}:function(t){return t instanceof P(t).SVGElement&&"function"==typeof t.getBBox};function C(t,e,n,r){return{x:t,y:e,width:n,height:r}}var D=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=C(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=function(t){if(!O)return k;if(T(t)){var e;return C(0,0,(e=t.getBBox()).width,e.height)}return function(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return k;var r=P(t).getComputedStyle(t),o=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=t["padding-"+o];e[o]=A(i)}return e}(r),i=o.left+o.right,c=o.top+o.bottom,s=A(r.width),u=A(r.height);if("border-box"===r.boxSizing&&(Math.round(s+i)!==e&&(s-=x(r,"left","right")+i),Math.round(u+c)!==n&&(u-=x(r,"top","bottom")+c)),t!==P(t).document.documentElement){var a=Math.round(s+i)-e,f=Math.round(u+c)-n;1!==Math.abs(a)&&(s-=a),1!==Math.abs(f)&&(u-=f)}return C(o.left,o.top,s,u)}(t)}(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),z=function(t,e){var n,r,o,i,c,s=(n=e.x,r=e.y,o=e.width,i=e.height,M(c=Object.create(("undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype),{x:n,y:r,width:o,height:i,top:r,right:n+o,bottom:i+r,left:n}),c);M(this,{target:t,contentRect:s})},W=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new g,"function"!=typeof t)throw TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof P(t).Element))throw TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new D(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof P(t).Element))throw TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new z(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),H="undefined"!=typeof WeakMap?new WeakMap:new g,L=function t(e){if(!(this instanceof t))throw TypeError("Cannot call a class as a function.");if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");var n=R.getInstance(),r=new W(e,n,this);H.set(this,r)};["observe","unobserve","disconnect"].forEach(function(t){L.prototype[t]=function(){var e;return(e=H.get(this))[t].apply(e,arguments)}});var B=void 0!==w.ResizeObserver?w.ResizeObserver:L,F=new Map,N=new B(function(t){t.forEach(function(t){var e,n=t.target;null===(e=F.get(n))||void 0===e||e.forEach(function(t){return t(n)})})});function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function I(t,e){return(I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function V(t){return(V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var $=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(o,t);var e,n,r=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n=V(o);if(e){var r=V(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function o(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,o),r.apply(this,arguments)}return G(o.prototype,[{key:"render",value:function(){return this.props.children}}]),n&&G(o,n),Object.defineProperty(o,"prototype",{writable:!1}),o}(o.Component),q=o.forwardRef(function(t,e){var n,r,c,s=t.children,u=t.disabled,a=o.useRef(null),f=o.useRef(null),h=o.useContext(m),p="function"==typeof s,d=p?s(a):s,y=o.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),g=!p&&o.isValidElement(d)&&("function"!=typeof(c=(0,i.isMemo)(d)?d.type.type:d.type)||null!==(n=c.prototype)&&void 0!==n&&!!n.render)&&("function"!=typeof d||null!==(r=d.prototype)&&void 0!==r&&!!r.render),O=function(){for(var t,e,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return(!("value"in(e=o.useRef({})).current)||(t=e.current.condition).length!==r.length||t.every(function(t,e){return t!==r[e]}))&&(e.current.value=_.apply(void 0,r),e.current.condition=r),e.current.value}(g?d.ref:null,a),w=function(){var t;return b(a.current)||(a.current&&"object"===l(a.current)?b(null===(t=a.current)||void 0===t?void 0:t.nativeElement):null)||b(f.current)};o.useImperativeHandle(e,function(){return w()});var E=o.useRef(t);E.current=t;var j=o.useCallback(function(t){var e=E.current,n=e.onResize,r=e.data,o=t.getBoundingClientRect(),i=o.width,c=o.height,s=t.offsetWidth,u=t.offsetHeight,a=Math.floor(i),f=Math.floor(c);if(y.current.width!==a||y.current.height!==f||y.current.offsetWidth!==s||y.current.offsetHeight!==u){var l={width:a,height:f,offsetWidth:s,offsetHeight:u};y.current=l;var p=s===Math.round(i)?i:s,d=u===Math.round(c)?c:u,b=v(v({},l),{},{offsetWidth:p,offsetHeight:d});null==h||h(b,t,r),n&&Promise.resolve().then(function(){n(b,t)})}},[]);return o.useEffect(function(){var t=w();return t&&!u&&(F.has(t)||(F.set(t,new Set),N.observe(t)),F.get(t).add(j)),function(){F.has(t)&&(F.get(t).delete(j),F.get(t).size||(N.unobserve(t),F.delete(t)))}},[a.current,u]),o.createElement($,{ref:f},g?o.cloneElement(d,{ref:O}):d)}),U=o.forwardRef(function(t,e){var n=t.children;return("function"==typeof n?[n]:function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[];return o.Children.forEach(e,function(e){(null!=e||n.keepEmpty)&&(Array.isArray(e)?r=r.concat(t(e)):(0,i.isFragment)(e)&&e.props?r=r.concat(t(e.props.children,n)):r.push(e))}),r}(n)).map(function(n,i){var c=(null==n?void 0:n.key)||"".concat("rc-observer-key","-").concat(i);return o.createElement(q,r({},t,{key:c,ref:0===i?e:void 0}),n)})});U.Collection=function(t){var e=t.children,n=t.onBatchResize,r=o.useRef(0),i=o.useRef([]),c=o.useContext(m),s=o.useCallback(function(t,e,o){r.current+=1;var s=r.current;i.current.push({size:t,element:e,data:o}),Promise.resolve().then(function(){s===r.current&&(null==n||n(i.current),i.current=[])}),null==c||c(t,e,o)},[n,c]);return o.createElement(m.Provider,{value:s},e)};var Y=U},7426:function(t,e){/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),a=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),l=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy");function v(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case n:switch(t=t.type){case o:case c:case i:case h:case l:return t;default:switch(t=t&&t.$$typeof){case a:case u:case f:case d:case p:case s:return t;default:return e}}case r:return e}}}Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),e.isFragment=function(t){return v(t)===o},e.isMemo=function(t){return v(t)===p}},166:function(t,e,n){t.exports=n(7426)}}]);