(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6234],{24320:function(e,t,r){var n={"./button/basic-type.tsx":[15428,5428]};function l(e){if(!r.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],l=t[0];return r.e(t[1]).then(function(){return r(l)})}l.keys=function(){return Object.keys(n)},l.id=24320,e.exports=l},67745:function(e,t,r){var n={"./button.mdx":[11590,2198,1590],"./icon.mdx":[24744,2198,4744],"./space.mdx":[67666,7666],"./typography.mdx":[57050,7050]};function l(e){if(!r.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],l=t[0];return Promise.all(t.slice(1).map(r.e)).then(function(){return r(l)})}l.keys=function(){return Object.keys(n)},l.id=67745,e.exports=l},69412:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(39949),l=r(94092),s=r.n(l),i=r(35541),o=r(38269),a=r(48557),c=e=>{let{error:t}=e;return(0,n.jsxs)("div",{className:"leading-relaxed",children:[(0,n.jsxs)("p",{className:"flex items-center text-lg text-danger",children:[(0,n.jsx)(a.Z,{className:"font-bold"}),(0,n.jsx)("span",{className:"mx-1 font-bold",children:"ERROR"}),(0,n.jsx)("p",{className:"ml-1 text-sm truncate leading-tight",children:t.message})]}),(0,n.jsx)("section",{className:"text-base",children:t.stack&&(0,n.jsx)("p",{children:(0,n.jsxs)("details",{open:!0,children:[(0,n.jsx)("summary",{children:"Error stack"}),(0,n.jsx)("pre",{className:"max-h-24 overflow-auto text-sm pl-4",children:t.stack})]})})})]})};let u=e=>{let{error:t,resetErrorBoundary:r}=e;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"absolute right-0 top-0 z-10",children:(0,n.jsx)("button",{onClick:r,children:(0,n.jsx)(i.Z,{className:"text-base"})})}),(0,n.jsx)(c,{error:t instanceof Error?t:Error("error",{cause:t})})]})};var f=e=>{let{children:t}=e;return(0,n.jsx)(o.SV,{fallbackRender:u,children:t})},d=r(73235),h=e=>{let{inline:t=!1,component:l,demo:i}=e,o=s()(t?()=>r(67745)("./".concat(l,".mdx")).then(e=>e[i]()):()=>r(24320)("./".concat(l,"/").concat(i,".tsx")),{ssr:!1,loading:()=>(0,n.jsx)(d.Z,{className:"animate-spin text-xl"})});return(0,n.jsx)(f,{children:(0,n.jsx)(o,{})})}},86387:function(e,t,r){"use strict";var n=r(39949),l=r(70301);let s=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")},i=e=>{if(e)return{msTransform:"rotate(".concat(e,"deg)"),transform:"rotate(".concat(e,"deg)")}},o=l.forwardRef((e,t)=>{let{className:r,rotate:l=0,name:o,style:a,icon:c,svgRef:u,...f}=e,d=i(l);return(0,n.jsx)("span",{role:"img",ref:t,...f,"aria-label":o,className:s("yk-icon",r),style:{display:"inline-flex",...a},children:(0,n.jsx)(c,{ref:u,style:d})})});t.Z=o},48557:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(39949),l=r(70301),s=r(86387);let i=l.forwardRef((e,t)=>(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",width:"1em",height:"1em",ref:t,...e,children:(0,n.jsx)("path",{d:"M512 51.2c254.49 0 460.8 206.31 460.8 460.8S766.49 972.8 512 972.8 51.2 766.49 51.2 512 257.51 51.2 512 51.2zm0 76.8c-212.07 0-384 171.93-384 384s171.93 384 384 384 384-171.93 384-384-171.93-384-384-384zm135.76 193.92 54.32 54.32L566.28 512l135.77 135.76-54.32 54.32L512 566.28 376.24 702.04l-54.32-54.32L457.72 512 321.96 376.24l54.32-54.32L512 457.72l135.76-135.77z"})})),o=l.forwardRef((e,t)=>(0,n.jsx)(s.Z,{...e,ref:t,name:"circle-cross-outlined",icon:i}));var a=o},73235:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(39949),l=r(70301),s=r(86387);let i=l.forwardRef((e,t)=>(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",width:"1em",height:"1em",ref:t,...e,children:(0,n.jsx)("path",{d:"m937.57 371.64-12.03-36.46-72.96 24.04 12.03 36.45A369.98 369.98 0 0 1 883.2 512c0 205-166.2 371.2-371.2 371.2S140.8 717 140.8 512 307 140.8 512 140.8h38.4V64H512C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448c0-48.2-7.63-95.44-22.43-140.36z"})})),o=l.forwardRef((e,t)=>(0,n.jsx)(s.Z,{...e,ref:t,name:"loading-outlined",icon:i}));var a=o},35541:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(39949),l=r(70301),s=r(86387);let i=l.forwardRef((e,t)=>(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",width:"1em",height:"1em",ref:t,...e,children:(0,n.jsx)("path",{d:"M82.05 564.53 278.9 621l-21.17 73.81-64.26-18.4a357.22 357.22 0 0 0 201.84 174.46c187.13 64.46 391.11-35.02 455.55-222.19l72.62 25.02c-78.25 227.25-325.9 348.05-553.19 269.8A433.82 433.82 0 0 1 121.73 704.6l-22.3 77.96L25.6 761.4l56.45-196.87zm769.79 61.24 72.86 24.4-1.18 3.42-72.63-24.96.98-2.86zM103.32 362.52C184.42 140.3 429 23.17 653.67 100.51a433.8 433.8 0 0 1 247.68 217.13l21.86-76.2 73.83 21.16-56.47 196.87L743.71 403l21.17-73.81 65.81 18.84a357.2 357.2 0 0 0-202.03-174.9c-187.14-64.46-391.1 35.05-455.55 222.21l-.49 1.43-72.7-24.67z"})})),o=l.forwardRef((e,t)=>(0,n.jsx)(s.Z,{...e,ref:t,name:"refresh-outlined",icon:i}));var a=o},51059:function(e,t,r){"use strict";r.r(t);var n=r(39949),l=r(21161);r(24476),t.default=e=>{let{disabled:t=!1,type:r="primary",size:s="l",status:i,shape:o,loading:a=!1,long:c=!1,children:u,icon:f}=e,d=(0,l.rC)("button"),h=d([r,i,o,s],{loading:a,long:c,disabled:t});return(0,n.jsxs)("button",{disabled:t,className:h,onClick:r=>{let{onClick:n}=e;(0,l.mf)(n)&&!t&&(r.preventDefault(),n(r))},children:[f,u]})}},14180:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n,l,s=r(39949),i=r(70301),o=(e,t)=>{let r=i.useRef(!1);i.useEffect(()=>{if(r.current)return e();r.current=!0},t)};let a=function(){try{return!(void 0!==document)}catch(e){return!0}}(),c=a?i.useEffect:i.useLayoutEffect,u=e=>"string"==typeof e||"number"==typeof e,f=e=>e.reduce((e,t)=>e+(u(t)?t.toString().length:1),0),d=(e,t,r)=>{let n=[];if(t>=r)return e;let l=0;for(let r=0;r<e.length&&!(l>=t);r++){let s=e[r];if(u(s)){let e=String(s),r=e.length;if(r>t-l)return n.push(e.slice(0,t-l)),l=t,n;n.push(s),l+=r}else n.push(s),l+=1}return n};(n=l||(l={}))[n.UNMEASURED=0]="UNMEASURED",n[n.INIT=1]="INIT",n[n.MEASURING=2]="MEASURING",n[n.MEASURE_END=3]="MEASURE_END",n[n.NO_NEED_ELLIPSIS=4]="NO_NEED_ELLIPSIS";let h={zIndex:-999,position:"fixed",opacity:0,padding:0,margin:0};var m=e=>{let{rows:t,text:r,width:n,expanding:a,onEllipsis:u,renderMeasureNode:m,enableJSEllipsis:x}=e,p=i.useMemo(()=>i.Children.toArray([r]),[r]),E=i.useMemo(()=>f(p),[p]),[j,N]=i.useState([0,0,0]),g=i.useRef(null),v=i.useRef(null),[y,S]=i.useState(0),[b,R,w]=j,[M,_]=i.useState(l.UNMEASURED),[A,I]=i.useState(!1);o(()=>{u(A)},[A]),c(()=>{g.current&&S(g.current.clientHeight)},[]),c(()=>{n<=0||(N([0,E,E]),_(l.INIT))},[n,a]),c(()=>{if(y&&v.current){let e=t*y,r=v.current.offsetHeight;if(M===l.INIT)!x||a?(_(l.MEASURE_END),I(r>e)):r<=e?(_(l.NO_NEED_ELLIPSIS),I(!1)):(_(l.MEASURING),I(!0));else if(M===l.MEASURING){if(b!==w-1){let t=b,n=w;r>e?n=R:r<=e&&(t=R);let l=Math.floor((t+n)/2);N([t,l,n])}else N([b,b,b]),_(l.MEASURE_END)}}},[y,t,b,R,w,M]);let k=i.useMemo(()=>(0,s.jsx)("div",{ref:g,style:{wordBreak:"keep-all",whiteSpace:"nowrap",...h},children:"lg"}),[]),U=i.useMemo(()=>x&&M!==l.NO_NEED_ELLIPSIS?m(d(p,R,E),A):r,[x,M,r,p,R,E,m,A]),D=i.useMemo(()=>(0,s.jsx)("div",{ref:v,style:{width:n,...h},children:U}),[U,n]);return(0,s.jsxs)(i.Fragment,{children:[M===l.UNMEASURED&&k,[l.MEASURE_END,l.NO_NEED_ELLIPSIS].includes(M)?U:D]})},x=r(21161),p=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>{t.forEach(t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})}},E=e=>{let{enable:t=!0,children:r,onResize:n}=e,l=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(t){let e=l.current;if(!e)return;let t=new window.ResizeObserver(e=>{if(e.length){let{width:t,height:r}=e[0].contentRect;null==n||n(t,r)}});return t.observe(e),()=>{t.unobserve(e)}}},[n,t]),null==r?void 0:r(l)};let j=()=>{},N={rows:1,expandable:!1,onEllipsis:j,onExpand:j},g=i.forwardRef((e,t)=>{let{component:r,ellipsis:n=!1,children:l,className:o,type:a="default",strong:c=!1,disabled:u=!1,underline:f=!1,delete:d=!1,mark:h=!1}=e,j="boolean"==typeof n?N:{...N,...n},g=!!n,v=g&&j.expandable,y=g&&!v,{rows:S}=j,[b,R]=i.useState(0),w=(0,x.rC)("typography"),M=i.useCallback(e=>{R(e)},[]),[_,A]=i.useState(!1),I=()=>(0,s.jsx)("span",{onClick:()=>{A(!_),j.onExpand(!0)},className:w("ellipsis-operation-expand"),children:_?"折叠":"展开"}),k=(e,t)=>(0,s.jsxs)(i.Fragment,{children:[e,t&&!_&&"...",t&&I()]}),U=e=>d?(0,s.jsx)("del",{children:e}):c?(0,s.jsx)("strong",{children:e}):e;return(0,s.jsx)(E,{onResize:M,enable:g,children:e=>(0,s.jsx)(r,{ref:p(e,t),style:{WebkitLineClamp:y&&S>1?S:void 0},className:w.join(w([a],{disabled:u,strong:c,underline:f,del:d,mark:h}),w({ellipsis:y,"ellipsis-single-line":y&&1===S,"ellipsis-multiple-line":y&&S>1}),o),children:U(g?(0,s.jsx)(m,{rows:S,width:b,text:l,expanding:_,enableJSEllipsis:v,renderMeasureNode:k,onEllipsis:j.onEllipsis}):l)})})});var v=g},51072:function(e,t,r){"use strict";r.r(t);var n=r(39949),l=r(70301),s=r(14180),i=r(21161);let o=l.forwardRef((e,t)=>{let{level:r=1,...l}=e,o=(0,i.rC)("title");return(0,n.jsx)(s.default,{...l,ref:t,component:"h".concat(r),className:o.join(o(),l.className)})});t.default=o},21161:function(e,t,r){"use strict";r.d(t,{rC:function(){return u},kJ:function(){return i},mf:function(){return s},hj:function(){return o},HD:function(){return l}});let n=e=>null!==e&&"object"==typeof e,l=e=>"string"==typeof e;function s(e){return"function"==typeof e}let i=e=>Array.isArray(e);function o(e){return"[object Number]"===Object.prototype.toString.call(e)&&e==e}let a=(e,t)=>{let r=[];return i(t)?r=t.map(t=>t?"".concat(e,"--").concat(t):"").filter(Boolean):n(t)&&(r=Object.entries(t).map(t=>{let[r,n]=t;return n?"".concat(e,"--").concat(r):""})),r},c=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.map(e=>Array.isArray(e)?e.filter(Boolean).join(" "):e||"").filter(Boolean).join(" ")},u=e=>{let t="".concat("yk","-").concat(e),r=(e,r,n)=>{if(!e)return t;if(l(e)){let l="".concat(t,"__").concat(e);return r?c(l,a(l,r),a(l,n)):l}return c(t,a(t,e),a(t,r))};return r.join=c,r},f=["success","warning","danger","primary"];[...f],[...f]},24476:function(){},4257:function(){},99705:function(){}}]);