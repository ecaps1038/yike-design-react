"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5163],{28533:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(75622);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},89179:function(e,t,r){function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(75622),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},80385:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return o}});let n=r(57542);function o(e){return(0,n.pathHasPrefix)(e,"")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},61155:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return P}});let n=r(89945),o=n._(r(70301)),u=r(23801),a=r(92994),l=r(87389),i=r(40756),f=r(28533),c=r(7747),s=r(1661),d=r(38758),p=r(89179),h=r(75130),y=r(76817),m=new Set;function g(e,t,r,n,o,u){if(!u&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,u=t+"%"+r+"%"+o;if(m.has(u))return;m.add(u)}let l=u?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(l).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let _=o.default.forwardRef(function(e,t){let r,n;let{href:l,as:m,children:_,prefetch:P=null,passHref:v,replace:O,shallow:j,scroll:R,locale:E,onClick:x,onMouseEnter:M,onTouchStart:C,legacyBehavior:k=!1,...w}=e;r=_,k&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let S=o.default.useContext(c.RouterContext),I=o.default.useContext(s.AppRouterContext),T=null!=S?S:I,L=!S,N=!1!==P,U=null===P?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:A,as:D}=o.default.useMemo(()=>{if(!S){let e=b(l);return{href:e,as:m?b(m):e}}let[e,t]=(0,u.resolveHref)(S,l,!0);return{href:e,as:m?(0,u.resolveHref)(S,m):t||e}},[S,l,m]),W=o.default.useRef(A),z=o.default.useRef(D);k&&(n=o.default.Children.only(r));let K=k?n&&"object"==typeof n&&n.ref:t,[F,$,B]=(0,d.useIntersection)({rootMargin:"200px"}),q=o.default.useCallback(e=>{(z.current!==D||W.current!==A)&&(B(),z.current=D,W.current=A),F(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[D,K,A,B,F]);o.default.useEffect(()=>{T&&$&&N&&g(T,A,D,{locale:E},{kind:U},L)},[D,A,$,E,N,null==S?void 0:S.locale,T,L,U]);let H={ref:q,onClick(e){k||"function"!=typeof x||x(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,r,n,u,l,i,f,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let h=()=>{let e=null==i||i;"beforePopState"in t?t[u?"replace":"push"](r,n,{shallow:l,locale:f,scroll:e}):t[u?"replace":"push"](n||r,{forceOptimisticNavigation:!s,scroll:e})};c?o.default.startTransition(h):h()}(e,T,A,D,O,j,R,E,L,N)},onMouseEnter(e){k||"function"!=typeof M||M(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),T&&(N||!L)&&g(T,A,D,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)},onTouchStart(e){k||"function"!=typeof C||C(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),T&&(N||!L)&&g(T,A,D,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)}};if((0,i.isAbsoluteUrl)(D))H.href=D;else if(!k||v||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&(0,p.getDomainLocale)(D,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);H.href=t||(0,h.addBasePath)((0,f.addLocale)(D,e,null==S?void 0:S.defaultLocale))}return k?o.default.cloneElement(n,H):o.default.createElement("a",{...w,...H},r)}),P=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7589:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},38758:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(70301),o=r(7589),u="function"==typeof IntersectionObserver,a=new Map,l=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,f=i||!u,[c,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(u){if(f||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:u,elements:o},l.push(r),a.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),a.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[f,r,t,c,d.current]);let h=(0,n.useCallback)(()=>{s(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},13399:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},7747:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return u}});let n=r(89945),o=n._(r(70301)),u=o.default.createContext(null)},87389:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},urlObjectKeys:function(){return l},formatWithValidation:function(){return i}});let n=r(76552),o=n._(r(18111)),u=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,n=e.protocol||"",a=e.pathname||"",l=e.hash||"",i=e.query||"",f=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?f=t+e.host:r&&(f=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(f+=":"+e.port)),i&&"object"==typeof i&&(i=String(o.urlQueryToSearchParams(i)));let c=e.search||i&&"?"+i||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||u.test(n))&&!1!==f?(f="//"+(f||""),a&&"/"!==a[0]&&(a="/"+a)):f||(f=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+n+f+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function i(e){return a(e)}},1817:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return u}});let n=r(62596),o=r(46921);function u(e,t,r){let u="",a=(0,o.getRouteRegex)(e),l=a.groups,i=(t!==e?(0,n.getRouteMatcher)(a)(t):"")||r;u=e;let f=Object.keys(l);return f.every(e=>{let t=i[e]||"",{repeat:r,optional:n}=l[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in i)&&(u=u.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(u=""),{params:f,result:u}}},60675:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return n}});let r=/\/\[[^/]+?\](?=\/|$)/;function n(e){return r.test(e)}},92994:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return u}});let n=r(40756),o=r(80385);function u(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},37673:function(e,t){function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},57542:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});let n=r(63544);function o(e,t){if("string"!=typeof e)return!1;let{pathname:r}=(0,n.parsePath)(e);return r===t||r.startsWith(t+"/")}},18111:function(e,t){function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o},assign:function(){return u}})},23801:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return s}});let n=r(18111),o=r(87389),u=r(37673),a=r(40756),l=r(75622),i=r(92994),f=r(60675),c=r(1817);function s(e,t,r){let s;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?")[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,a.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,i.isLocalURL)(d))return r?[d]:d;try{s=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){s=new URL("/","http://n")}try{let e=new URL(d,s);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,f.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:a,params:l}=(0,c.interpolateAs)(e.pathname,e.pathname,r);a&&(t=(0,o.formatWithValidation)({pathname:a,hash:e.hash,query:(0,u.omit)(r,l)}))}let a=e.origin===s.origin?e.href.slice(e.origin.length):e.href;return r?[a,t||a]:a}catch(e){return r?[d]:d}}},62596:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(40756);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let u=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},a={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(a[e]=~n.indexOf("/")?n.split("/").map(e=>u(e)):t.repeat?[u(n)]:u(n))}),a}}},46921:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return i},getNamedRouteRegex:function(){return s},getNamedMiddlewareRegex:function(){return d}});let n=r(55729),o=r(13399),u=r(7495);function a(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function l(e){let t=(0,u.removeTrailingSlash)(e).slice(1).split("/"),r={},l=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),u=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&u){let{key:e,optional:n,repeat:i}=a(u[1]);return r[e]={pos:l++,repeat:i,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!u)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=a(u[1]);return r[e]={pos:l++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function i(e){let{parameterizedRoute:t,groups:r}=l(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function f(e){let t,r,{segment:n,routeKeys:o,keyPrefix:u}=e,l=(t=97,r=1,()=>{let e="";for(let n=0;n<r;n++)e+=String.fromCharCode(t),++t>122&&(r++,t=97);return e}),{key:i,optional:f,repeat:c}=a(n),s=i.replace(/\W/g,"");u&&(s=""+u+s);let d=!1;return(0===s.length||s.length>30)&&(d=!0),isNaN(parseInt(s.slice(0,1)))||(d=!0),d&&(s=l()),u?o[s]=""+u+i:o[s]=""+i,c?f?"(?:/(?<"+s+">.+?))?":"/(?<"+s+">.+?)":"/(?<"+s+">[^/]+?)"}function c(e,t){let r=(0,u.removeTrailingSlash)(e).slice(1).split("/"),a={};return{namedParameterizedRoute:r.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),u=e.match(/\[((?:\[.*\])|.+)\]/);return r&&u?f({segment:u[1],routeKeys:a,keyPrefix:t?"nxtI":void 0}):u?f({segment:u[1],routeKeys:a,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:a}}function s(e,t){let r=c(e,t);return{...i(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function d(e,t){let{parameterizedRoute:r}=l(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},40756:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return n},isAbsoluteUrl:function(){return u},getLocationOrigin:function(){return a},getURL:function(){return l},getDisplayName:function(){return i},isResSent:function(){return f},normalizeRepeatedSlashes:function(){return c},loadGetInitialProps:function(){return s},SP:function(){return d},ST:function(){return p},DecodeError:function(){return h},NormalizeError:function(){return y},PageNotFoundError:function(){return m},MissingStaticPage:function(){return g},MiddlewareNotFoundError:function(){return b},stringifyError:function(){return _}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function l(){let{href:e}=window.location,t=a();return e.substring(t.length)}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function c(e){let t=e.split("?"),r=t[0];return r.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function s(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await s(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n){let t='"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.';throw Error(t)}return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class y extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},81189:function(e,t,r){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(70301),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,r){var n,u={},f=null,c=null;for(n in void 0!==r&&(f=""+r),void 0!==t.key&&(f=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!i.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:f,ref:c,props:u,_owner:l.current}}t.Fragment=u,t.jsx=f,t.jsxs=f},39949:function(e,t,r){e.exports=r(81189)}}]);