(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9160,7019,5185,7475],{247:function(e,t,n){Promise.resolve().then(n.t.bind(n,61155,23)),Promise.resolve().then(n.t.bind(n,97961,23)),Promise.resolve().then(n.bind(n,51059)),Promise.resolve().then(n.bind(n,51072)),Promise.resolve().then(n.bind(n,14180)),Promise.resolve().then(n.bind(n,30561)),Promise.resolve().then(n.bind(n,13304)),Promise.resolve().then(n.t.bind(n,4257,23)),Promise.resolve().then(n.t.bind(n,99705,23))},51059:function(e,t,n){"use strict";n.r(t);var r=n(39949),i=n(21161);n(24476),t.default=e=>{let{disabled:t=!1,type:n="primary",size:l="l",status:s,shape:o,loading:u=!1,long:c=!1,children:a,icon:f}=e,d=(0,i.rC)("button"),E=d([n,s,o,l],{loading:u,long:c,disabled:t});return(0,r.jsxs)("button",{disabled:t,className:E,onClick:n=>{let{onClick:r}=e;(0,i.mf)(r)&&!t&&(n.preventDefault(),r(n))},children:[f,a]})}},14180:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r,i,l=n(39949),s=n(70301),o=(e,t)=>{let n=s.useRef(!1);s.useEffect(()=>{if(n.current)return e();n.current=!0},t)};let u=function(){try{return!(void 0!==document)}catch(e){return!0}}(),c=u?s.useEffect:s.useLayoutEffect,a=e=>"string"==typeof e||"number"==typeof e,f=e=>e.reduce((e,t)=>e+(a(t)?t.toString().length:1),0),d=(e,t,n)=>{let r=[];if(t>=n)return e;let i=0;for(let n=0;n<e.length&&!(i>=t);n++){let l=e[n];if(a(l)){let e=String(l),n=e.length;if(n>t-i)return r.push(e.slice(0,t-i)),i=t,r;r.push(l),i+=n}else r.push(l),i+=1}return r};(r=i||(i={}))[r.UNMEASURED=0]="UNMEASURED",r[r.INIT=1]="INIT",r[r.MEASURING=2]="MEASURING",r[r.MEASURE_END=3]="MEASURE_END",r[r.NO_NEED_ELLIPSIS=4]="NO_NEED_ELLIPSIS";let E={zIndex:-999,position:"fixed",opacity:0,padding:0,margin:0};var h=e=>{let{rows:t,text:n,width:r,expanding:u,onEllipsis:a,renderMeasureNode:h,enableJSEllipsis:p}=e,m=s.useMemo(()=>s.Children.toArray([n]),[n]),b=s.useMemo(()=>f(m),[m]),[N,g]=s.useState([0,0,0]),S=s.useRef(null),v=s.useRef(null),[y,_]=s.useState(0),[x,I,j]=N,[R,A]=s.useState(i.UNMEASURED),[M,U]=s.useState(!1);o(()=>{a(M)},[M]),c(()=>{S.current&&_(S.current.clientHeight)},[]),c(()=>{r<=0||(g([0,b,b]),A(i.INIT))},[r,u]),c(()=>{if(y&&v.current){let e=t*y,n=v.current.offsetHeight;if(R===i.INIT)!p||u?(A(i.MEASURE_END),U(n>e)):n<=e?(A(i.NO_NEED_ELLIPSIS),U(!1)):(A(i.MEASURING),U(!0));else if(R===i.MEASURING){if(x!==j-1){let t=x,r=j;n>e?r=I:n<=e&&(t=I);let i=Math.floor((t+r)/2);g([t,i,r])}else g([x,x,x]),A(i.MEASURE_END)}}},[y,t,x,I,j,R]);let w=s.useMemo(()=>(0,l.jsx)("div",{ref:S,style:{wordBreak:"keep-all",whiteSpace:"nowrap",...E},children:"lg"}),[]),D=s.useMemo(()=>p&&R!==i.NO_NEED_ELLIPSIS?h(d(m,I,b),M):n,[p,R,n,m,I,b,h,M]),P=s.useMemo(()=>(0,l.jsx)("div",{ref:v,style:{width:r,...E},children:D}),[D,r]);return(0,l.jsxs)(s.Fragment,{children:[R===i.UNMEASURED&&w,[i.MEASURE_END,i.NO_NEED_ELLIPSIS].includes(R)?D:P]})},p=n(21161),m=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})}},b=e=>{let{enable:t=!0,children:n,onResize:r}=e,i=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(t){let e=i.current;if(!e)return;let t=new window.ResizeObserver(e=>{if(e.length){let{width:t,height:n}=e[0].contentRect;null==r||r(t,n)}});return t.observe(e),()=>{t.unobserve(e)}}},[r,t]),null==n?void 0:n(i)};let N=()=>{},g={rows:1,expandable:!1,onEllipsis:N,onExpand:N},S=s.forwardRef((e,t)=>{let{component:n,ellipsis:r=!1,children:i,className:o,type:u="default",strong:c=!1,disabled:a=!1,underline:f=!1,delete:d=!1,mark:E=!1}=e,N="boolean"==typeof r?g:{...g,...r},S=!!r,v=S&&N.expandable,y=S&&!v,{rows:_}=N,[x,I]=s.useState(0),j=(0,p.rC)("typography"),R=s.useCallback(e=>{I(e)},[]),[A,M]=s.useState(!1),U=()=>(0,l.jsx)("span",{onClick:()=>{M(!A),N.onExpand(!0)},className:j("ellipsis-operation-expand"),children:A?"折叠":"展开"}),w=(e,t)=>(0,l.jsxs)(s.Fragment,{children:[e,t&&!A&&"...",t&&U()]}),D=e=>d?(0,l.jsx)("del",{children:e}):c?(0,l.jsx)("strong",{children:e}):e;return(0,l.jsx)(b,{onResize:R,enable:S,children:e=>(0,l.jsx)(n,{ref:m(e,t),style:{WebkitLineClamp:y&&_>1?_:void 0},className:j.join(j([u],{disabled:a,strong:c,underline:f,del:d,mark:E}),j({ellipsis:y,"ellipsis-single-line":y&&1===_,"ellipsis-multiple-line":y&&_>1}),o),children:D(S?(0,l.jsx)(h,{rows:_,width:x,text:i,expanding:A,enableJSEllipsis:v,renderMeasureNode:w,onEllipsis:N.onEllipsis}):i)})})});var v=S},51072:function(e,t,n){"use strict";n.r(t);var r=n(39949),i=n(70301),l=n(14180),s=n(21161);let o=i.forwardRef((e,t)=>{let{level:n=1,...i}=e,o=(0,s.rC)("title");return(0,r.jsx)(l.default,{...i,ref:t,component:"h".concat(n),className:o.join(o(),i.className)})});t.default=o},21161:function(e,t,n){"use strict";n.d(t,{rC:function(){return a},kJ:function(){return s},mf:function(){return l},hj:function(){return o},HD:function(){return i}});let r=e=>null!==e&&"object"==typeof e,i=e=>"string"==typeof e;function l(e){return"function"==typeof e}let s=e=>Array.isArray(e);function o(e){return"[object Number]"===Object.prototype.toString.call(e)&&e==e}let u=(e,t)=>{let n=[];return s(t)?n=t.map(t=>t?"".concat(e,"--").concat(t):"").filter(Boolean):r(t)&&(n=Object.entries(t).map(t=>{let[n,r]=t;return r?"".concat(e,"--").concat(n):""})),n},c=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map(e=>Array.isArray(e)?e.filter(Boolean).join(" "):e||"").filter(Boolean).join(" ")},a=e=>{let t="".concat("yk","-").concat(e),n=(e,n,r)=>{if(!e)return t;if(i(e)){let i="".concat(t,"__").concat(e);return n?c(i,u(i,n),u(i,r)):i}return c(t,u(t,e),u(t,n))};return n.join=c,n},f=["success","warning","danger","primary"];[...f],[...f]},24476:function(){},4257:function(){},99705:function(){},13304:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/logo-bg.9164ec97.svg",height:220,width:380,blurWidth:0,blurHeight:0}},30561:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/sign.05de7fb9.svg",height:63,width:62,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[5163,7961,8908,3742,1744],function(){return e(e.s=247)}),_N_E=e.O()}]);