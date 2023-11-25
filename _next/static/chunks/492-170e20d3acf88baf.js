"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{9567:function(e,t,n){var r=n(4904);t.Z=(e,t)=>{let n=r.useRef(!1);r.useEffect(()=>{if(n.current)return e();n.current=!0},t)}},4829:function(e,t,n){n.d(t,{F:function(){return r}});function r(e){return null!=e&&e===e.window}},3361:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(4915),l=n(4904),i=n(2176),o=n(4829);let u=(e,t)=>((0,o.F)(e)?0:e.getBoundingClientRect().top)+t,s=(e,t)=>((0,o.F)(e)?0:window.innerHeight-e.getBoundingClientRect().bottom)+t,c=()=>window,a=e=>{let t=null,n=n=>{t=null,e(...n)},r=function(){for(var e=arguments.length,r=Array(e),l=0;l<e;l++)r[l]=arguments[l];null==t&&(t=requestAnimationFrame(()=>n(r)))};return r.cancel=()=>{null!=t&&(cancelAnimationFrame(t),t=null)},r},f=e=>{let[t,n]=l.useState(e);return l.useEffect(()=>{let t=setTimeout(()=>{n(e)});return()=>clearTimeout(t)},[e]),l.useCallback(()=>t,[e,t])},d=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],h=l.forwardRef((e,t)=>{let{offset:n=0,position:o="top",target:h=c,onChange:p}=e,E=f(h),m=l.useRef(null),v=l.useRef(null),[g,S]=l.useState(),[x,N]=l.useState(),w=l.useCallback(()=>{var e,t;let r=E();if(!v.current||!r)return;let l=v.current.getBoundingClientRect(),{top:i}=l,c=window.innerHeight-l.bottom;if("top"===o){let t=u(r,n);i<=t&&!g?(S({position:"fixed",top:t,zIndex:999}),N({height:null===(e=m.current)||void 0===e?void 0:e.offsetHeight}),null==p||p(!0)):i>t&&g&&(S(void 0),N(void 0),null==p||p(!1))}else{let e=s(r,n);c<=e&&!g?(S({position:"fixed",bottom:e,zIndex:999}),N({height:null===(t=m.current)||void 0===t?void 0:t.offsetHeight}),null==p||p(!0)):c>e&&g&&(S(void 0),N(void 0),null==p||p(!1))}},[E,g,n,o,p]),j=l.useMemo(()=>a(w),[w]);return l.useEffect(()=>{let e=E();if(e)return d.forEach(t=>{e.addEventListener(t,j)}),()=>{d.forEach(t=>{e.removeEventListener(t,j)}),j.cancel()}},[E,j]),l.useEffect(()=>{w()},[w]),l.useImperativeHandle(t,()=>({updatePosition:j})),(0,r.jsx)(i.Z,{onResize:j,children:(0,r.jsx)("div",{ref:v,style:x,children:(0,r.jsx)("div",{ref:m,style:g,children:(0,r.jsx)(i.Z,{onResize:j,children:e.children})})})})});var p=h},2940:function(e,t,n){n.r(t),n.d(t,{Anchor:function(){return x}});var r=n(4915),l=n(4904),i=n(5366),o=e=>{let{top:t}=e,n=(0,i.rC)("anchor-line");return(0,r.jsx)("div",{className:n(),children:(0,r.jsx)("span",{style:{top:t},className:n("slider")})})};let u=l.createContext({}),s=u.Provider;u.Consumer;var c=e=>{let{href:t,title:n}=e,o=(0,i.rC)("anchor-link"),{activeLink:s,onClick:c,scrollTo:a}=l.useContext(u);return(0,r.jsx)("a",{href:t,onClick:e=>{a(t),null==c||c(e,{href:t,title:n})},className:o({active:s===t}),children:n})},a=n(4829);let f=e=>e===window?window.scrollY:e.scrollTop,d=(e,t)=>{(0,a.F)(e)?e.scrollTo(window.scrollX,t):e.scrollTop=t},h=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{duration:r=450}=n,l=f(e),i=t-l,o=i/(r/16),u=l;return new Promise(n=>{let r=()=>{if(u+=o,u=i>0?u>t?t:u:u<t?t:u,d(e,i>0?u>t?t:u:u<t?t:u),u===t){n();return}requestAnimationFrame(r)};requestAnimationFrame(r)})},p=(e,t)=>{let n=e.getBoundingClientRect();if((0,a.F)(t))return n.top-e.ownerDocument.documentElement.clientTop;let{top:r}=t.getBoundingClientRect();return n.top-r},E=/^#(\S+)$/,m=e=>{if(!(null==e?void 0:e.length))return[];let t=[];return e.forEach(e=>{t.push(e.href),t.push(...m(e.children))}),[...new Set(t)]};var v=n(9567);let g=e=>{if(null==e?void 0:e.length)return(0,r.jsx)("ul",{className:"yk-anchor-list",children:e.map((e,t)=>(0,r.jsxs)("li",{className:"yk-anchor-list-item",children:[(0,r.jsx)(c,{href:e.href,title:e.title}),g(e.children)]},"".concat(e.title,"-").concat(t)))})},S=()=>window,x=e=>{let{items:t,onClick:n,onChange:u,bounds:c=5,offsetTop:a=0,lineless:f=!1,getContainer:d=S}=e,x=(0,i.rC)("anchor"),N=l.useRef(null),w=l.useRef(!1),[j,y]=l.useState(),[R,b]=l.useState(),C=l.useMemo(()=>m(t),[t]),k=l.useCallback(()=>{let e=[],t=d();if(C.forEach(n=>{if(E.test(n)){let r=document.querySelector(n);if(r){let l=p(r,t);l<c+a&&e.push({link:n,top:l})}}}),e.length)return e.reduce((e,t)=>t.top>e.top?t:e).link},[C,d,c,a]),A=l.useCallback(()=>{if(w.current)return;let e=k();y(e)},[k]),I=l.useCallback(()=>{if(!j){b(void 0);return}let e=N.current,t=null==e?void 0:e.querySelector(".yk-anchor-link--active");if(e&&t){let n=p(t,e);b(n+7)}},[j]),M=l.useCallback(e=>{if(y(e),!E.test(e))return;w.current=!0;let t=document.querySelector(e);if(!t)return;let n=d(),r=p(t,n),l=n===window?window.scrollY:n.scrollTop;h(n,l+r).then(()=>{w.current=!1})},[d]);l.useEffect(()=>{let e=d();return e.addEventListener("scroll",A),()=>{e.removeEventListener("scroll",A)}},[d,A]),l.useEffect(()=>{f||I()},[f,I]),l.useEffect(()=>{if(location.hash){let e=decodeURIComponent(location.hash);C.includes(e)&&M(e)}},[]),(0,v.Z)(()=>{j&&(null==u||u(j))},[j]);let _=l.useMemo(()=>({onClick:n,scrollTo:M,activeLink:j}),[n,M,j]);return(0,r.jsx)(s,{value:_,children:(0,r.jsxs)("div",{ref:N,className:x(),children:[(()=>{if(!f)return(0,r.jsx)(o,{top:R})})(),g(t)]})})};x.Link=c},9526:function(e,t,n){n.r(t),n.d(t,{Button:function(){return o}});var r=n(4915),l=n(5366);let i=(0,r.jsx)("span",{role:"img","aria-label":"loading-outlined",className:"yk-button-loading-icon",children:(0,r.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",width:"1em",height:"1em",children:(0,r.jsx)("path",{d:"m937.57 371.64-12.03-36.46-72.96 24.04 12.03 36.45A369.98 369.98 0 0 1 883.2 512c0 205-166.2 371.2-371.2 371.2S140.8 717 140.8 512 307 140.8 512 140.8h38.4V64H512C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448c0-48.2-7.63-95.44-22.43-140.36z"})})});var o=e=>{let{disabled:t=!1,type:n="primary",size:o="l",status:u,shape:s,loading:c=!1,long:a=!1,children:f,icon:d,htmlType:h="button",...p}=e,E=(0,l.rC)("button"),m=E([n,u,s,o],{loading:c,long:a,disabled:t}),v={disabled:t,className:m,type:h,onClick:n=>{let{onClick:r}=e;(0,l.mf)(r)&&!t&&(n.preventDefault(),r(n))},...p};return(0,r.jsxs)("button",{...v,children:[c?i:d,f]})}},9566:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r,l,i=n(4915),o=n(4904),u=n(9567);let s=function(){try{return!(void 0!==document)}catch(e){return!0}}(),c=s?o.useEffect:o.useLayoutEffect,a=e=>"string"==typeof e||"number"==typeof e,f=e=>e.reduce((e,t)=>e+(a(t)?t.toString().length:1),0),d=(e,t,n)=>{let r=[];if(t>=n)return e;let l=0;for(let n=0;n<e.length&&!(l>=t);n++){let i=e[n];if(a(i)){let e=String(i),n=e.length;if(n>t-l)return r.push(e.slice(0,t-l)),l=t,r;r.push(i),l+=n}else r.push(i),l+=1}return r};(r=l||(l={}))[r.UNMEASURED=0]="UNMEASURED",r[r.INIT=1]="INIT",r[r.MEASURING=2]="MEASURING",r[r.MEASURE_END=3]="MEASURE_END",r[r.NO_NEED_ELLIPSIS=4]="NO_NEED_ELLIPSIS";let h={zIndex:-999,position:"fixed",opacity:0,padding:0,margin:0};var p=e=>{let{rows:t,text:n,width:r,expanding:s,onEllipsis:a,renderMeasureNode:p,enableJSEllipsis:E}=e,m=o.useMemo(()=>o.Children.toArray([n]),[n]),v=o.useMemo(()=>f(m),[m]),[g,S]=o.useState([0,0,0]),x=o.useRef(null),N=o.useRef(null),[w,j]=o.useState(0),[y,R,b]=g,[C,k]=o.useState(l.UNMEASURED),[A,I]=o.useState(!1);(0,u.Z)(()=>{a(A)},[A]),c(()=>{x.current&&j(x.current.clientHeight)},[]),c(()=>{r<=0||(S([0,v,v]),k(l.INIT))},[r,s]),c(()=>{if(w&&N.current){let e=t*w,n=N.current.offsetHeight;if(C===l.INIT)!E||s?(k(l.MEASURE_END),I(n>e)):n<=e?(k(l.NO_NEED_ELLIPSIS),I(!1)):(k(l.MEASURING),I(!0));else if(C===l.MEASURING){if(y!==b-1){let t=y,r=b;n>e?r=R:n<=e&&(t=R);let l=Math.floor((t+r)/2);S([t,l,r])}else S([y,y,y]),k(l.MEASURE_END)}}},[w,t,y,R,b,C]);let M=o.useMemo(()=>(0,i.jsx)("div",{ref:x,style:{wordBreak:"keep-all",whiteSpace:"nowrap",...h},children:"lg"}),[]),_=o.useMemo(()=>E&&C!==l.NO_NEED_ELLIPSIS?p(d(m,R,v),A):n,[E,C,n,m,R,v,p,A]),U=o.useMemo(()=>(0,i.jsx)("div",{ref:N,style:{width:r,...h},children:_}),[_,r]);return(0,i.jsxs)(o.Fragment,{children:[C===l.UNMEASURED&&M,[l.MEASURE_END,l.NO_NEED_ELLIPSIS].includes(C)?_:U]})},E=n(5366),m=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})}},v=e=>{let{enable:t=!0,children:n,onResize:r}=e,l=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(t){let e=l.current;if(!e)return;let t=new window.ResizeObserver(e=>{if(e.length){let{width:t,height:n}=e[0].contentRect;null==r||r(t,n)}});return t.observe(e),()=>{t.unobserve(e)}}},[r,t]),null==n?void 0:n(l)};let g=()=>{},S={rows:1,expandable:!1,onEllipsis:g,onExpand:g},x=o.forwardRef((e,t)=>{let{component:n,ellipsis:r=!1,children:l,className:u,type:s="default",strong:c=!1,disabled:a=!1,underline:f=!1,delete:d=!1,mark:h=!1,...g}=e,x="boolean"==typeof r?S:{...S,...r},N=!!r,w=N&&x.expandable,j=N&&!w,{rows:y}=x,[R,b]=o.useState(0),C=(0,E.rC)("typography"),k=o.useCallback(e=>{b(e)},[]),[A,I]=o.useState(!1),M=()=>(0,i.jsx)("span",{onClick:()=>{I(!A),x.onExpand(!0)},className:C("ellipsis-operation-expand"),children:A?"折叠":"展开"}),_=(e,t)=>(0,i.jsxs)(o.Fragment,{children:[e,t&&!A&&"...",t&&M()]}),U=e=>d?(0,i.jsx)("del",{children:e}):c?(0,i.jsx)("strong",{children:e}):e;return(0,i.jsx)(v,{onResize:k,enable:N,children:e=>(0,i.jsx)(n,{...g,ref:m(e,t),style:{WebkitLineClamp:j&&y>1?y:void 0},className:C.join(C([s],{disabled:a,strong:c,underline:f,del:d,mark:h}),C({ellipsis:j,"ellipsis-single-line":j&&1===y,"ellipsis-multiple-line":j&&y>1}),u),children:U(w?(0,i.jsx)(p,{rows:y,width:R,text:l,expanding:A,enableJSEllipsis:w,renderMeasureNode:_,onEllipsis:x.onEllipsis}):l)})})});var N=x},75:function(e,t,n){n.r(t);var r=n(4915),l=n(4904),i=n(9566),o=n(5366);let u=l.forwardRef((e,t)=>{let{level:n=1,...l}=e,u=(0,o.rC)("title");return(0,r.jsx)(i.default,{...l,ref:t,component:"h".concat(n),className:u.join(u(),l.className)})});t.default=u},5366:function(e,t,n){n.d(t,{rC:function(){return a},kJ:function(){return o},mf:function(){return i},hj:function(){return u},HD:function(){return l}});let r=e=>null!==e&&"object"==typeof e,l=e=>"string"==typeof e;function i(e){return"function"==typeof e}let o=e=>Array.isArray(e);function u(e){return"[object Number]"===Object.prototype.toString.call(e)&&e==e}let s=(e,t)=>{let n=[];return o(t)?n=t.map(t=>t?"".concat(e,"--").concat(t):"").filter(Boolean):r(t)&&(n=Object.entries(t).map(t=>{let[n,r]=t;return r?"".concat(e,"--").concat(n):""})),n},c=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map(e=>Array.isArray(e)?e.filter(Boolean).join(" "):e||"").filter(Boolean).join(" ")},a=e=>{let t="".concat("yk","-").concat(e),n=(e,n,r)=>{if(!e)return t;if(l(e)){let l="".concat(t,"__").concat(e);return n?c(l,s(l,n),s(l,r)):l}return c(t,s(t,e),s(t,n))};return n.join=c,n},f=["success","warning","danger","primary"];[...f],[...f]}}]);