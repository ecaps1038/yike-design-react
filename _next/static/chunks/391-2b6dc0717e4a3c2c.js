(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[391],{9817:function(e,t,n){"use strict";n.d(t,{F:function(){return u},f:function(){return d}});var r=n(4904);let i=["light","dark"],o="(prefers-color-scheme: dark)",a="undefined"==typeof window,l=(0,r.createContext)(void 0),s={setTheme:e=>{},themes:[]},u=()=>{var e;return null!==(e=(0,r.useContext)(l))&&void 0!==e?e:s},d=e=>(0,r.useContext)(l)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),c=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:a=!0,storageKey:s="theme",themes:u=c,defaultTheme:d=n?"system":"light",attribute:f="data-theme",value:y,children:v,nonce:b})=>{let[w,S]=(0,r.useState)(()=>p(s,d)),[_,C]=(0,r.useState)(()=>p(s)),E=y?Object.values(y):u,x=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=h());let o=y?y[r]:r,l=t?g():null,s=document.documentElement;if("class"===f?(s.classList.remove(...E),o&&s.classList.add(o)):o?s.setAttribute(f,o):s.removeAttribute(f),a){let e=i.includes(d)?d:null,t=i.includes(r)?r:e;s.style.colorScheme=t}null==l||l()},[]),j=(0,r.useCallback)(e=>{S(e);try{localStorage.setItem(s,e)}catch(e){}},[e]),O=(0,r.useCallback)(t=>{let r=h(t);C(r),"system"===w&&n&&!e&&x("system")},[w,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(o);return e.addListener(O),O(e),()=>e.removeListener(O)},[O]),(0,r.useEffect)(()=>{let e=e=>{e.key===s&&j(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[j]),(0,r.useEffect)(()=>{x(null!=e?e:w)},[e,w]);let P=(0,r.useMemo)(()=>({theme:w,setTheme:j,forcedTheme:e,resolvedTheme:"system"===w?_:w,themes:n?[...u,"system"]:u,systemTheme:n?_:void 0}),[w,j,e,_,n,u]);return r.createElement(l.Provider,{value:P},r.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:a,storageKey:s,themes:u,defaultTheme:d,attribute:f,value:y,children:v,attrs:E,nonce:b}),v)},m=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,enableColorScheme:l,defaultTheme:s,value:u,attrs:d,nonce:c})=>{let f="system"===s,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=l?i.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=(e,t=!1,r=!0)=>{let o=u?u[e]:e,a=t?e+"|| ''":`'${o}'`,s="";return l&&r&&!t&&i.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===n?s+=t||o?`c.add(${a})`:"null":o&&(s+=`d[s](n,${a})`),s},h=e?`!function(){${m}${g(e)}}()`:a?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${g(u?"x[e]":"e",!0)}}${f?"":"else{"+g(s,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${g(u?"x[e]":"e",!0)}}else{${g(s,!1,!1)};}${p}}catch(t){}}();`;return r.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:h}})},()=>!0),p=(e,t)=>{let n;if(!a){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},h=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},4414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let r=n(9945),i=n(6552),o=i._(n(4904)),a=n(2331),l=r._(n(3718)),s=n(8357),u=n(9909),d=n(8663);n(288);let c=n(650),f=r._(n(7375)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,n,r,i,o){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function g(e){let[t,n]=o.version.split("."),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:a,width:l,decoding:s,className:u,style:d,fetchPriority:c,placeholder:f,loading:m,unoptimized:h,fill:y,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:S,onLoad:_,onError:C,...E}=e;return o.default.createElement("img",{...E,...g(c),loading:m,width:l,height:a,decoding:s,"data-nimg":y?"fill":"1",className:u,style:d,sizes:i,srcSet:r,src:n,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&p(e,f,v,b,w,h))},[n,f,v,b,w,C,h,t]),onLoad:e=>{let t=e.currentTarget;p(t,f,v,b,w,h)},onError:e=>{S(!0),"blur"===f&&w(!0),C&&C(e)}})});function y(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return t?((0,a.preload)(n.src,r),null):o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}let v=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(c.RouterContext),r=(0,o.useContext)(d.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=m||r||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:a,onLoadingComplete:l}=e,p=(0,o.useRef)(a);(0,o.useEffect)(()=>{p.current=a},[a]);let g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let[v,b]=(0,o.useState)(!1),[w,S]=(0,o.useState)(!1),{props:_,meta:C}=(0,s.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:v,showAltText:w});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{..._,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:p,onLoadingCompleteRef:g,setBlurComplete:b,setShowAltText:S,ref:t}),C.priority?o.default.createElement(y,{isAppRouter:!n,imgAttributes:_}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3163:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let r=n(9945),i=r._(n(4904)),o=i.default.createContext({})},5959:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},8357:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(288);let r=n(6770),i=n(9909);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n;let l,s,u,{src:d,sizes:c,unoptimized:f=!1,priority:m=!1,loading:p,className:g,quality:h,width:y,height:v,fill:b=!1,style:w,onLoad:S,onLoadingComplete:_,placeholder:C="empty",blurDataURL:E,fetchPriority:x,layout:j,objectFit:O,objectPosition:P,lazyBoundary:k,lazyRoot:M,...$}=e,{imgConf:z,showAltText:I,blurComplete:A,defaultLoader:T}=t,R=z||i.imageConfigDefault;if("allSizes"in R)l=R;else{let e=[...R.deviceSizes,...R.imageSizes].sort((e,t)=>e-t),t=R.deviceSizes.sort((e,t)=>e-t);l={...R,allSizes:e,deviceSizes:t}}let L=$.loader||T;delete $.loader,delete $.srcSet;let N="__next_img_default"in L;if(N){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:n,...r}=t;return e(r)}}if(j){"fill"===j&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[j];t&&!c&&(c=t)}let D="",F=a(y),U=a(v);if("object"==typeof(n=d)&&(o(n)||void 0!==n.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,E=E||e.blurDataURL,D=e.src,!b){if(F||U){if(F&&!U){let t=F/e.width;U=Math.round(e.height*t)}else if(!F&&U){let t=U/e.height;F=Math.round(e.width*t)}}else F=e.width,U=e.height}}let B=!m&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:D)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,B=!1),l.unoptimized&&(f=!0),N&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),m&&(x="high");let W=a(h),V=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:P}:{},I?{}:{color:"transparent"},w),G="blur"===C&&E&&!A?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:U,blurWidth:s,blurHeight:u,blurDataURL:E,objectFit:V.objectFit})+'")'}:{},H=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:l({config:t,src:n,quality:o,width:s[d]})}}({config:l,src:d,unoptimized:f,width:F,quality:W,sizes:c,loader:L}),J={...$,loading:B?"lazy":p,fetchPriority:x,width:F,height:U,decoding:"async",className:g,style:{...V,...G},sizes:H.sizes,srcSet:H.srcSet,src:H.src},q={unoptimized:f,priority:m,placeholder:C,fill:b};return{props:J,meta:q}}},3718:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return d},default:function(){return p}});let r=n(9945),i=n(6552),o=i._(n(4904)),a=r._(n(143)),l=n(3163),s=n(1874),u=n(5959);function d(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(288);let f=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}let p=function(e){let{children:t}=e,n=(0,o.useContext)(l.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6770:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=r||t,s=i||n,u=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+s+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&i?"1":"20")+"'/%3E"+u+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},8663:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let r=n(9945),i=r._(n(4904)),o=n(9909),a=i.default.createContext(o.imageConfigDefault)},9909:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},7375:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(6552),i=r._(n(4904)),o=i.useLayoutEffect,a=i.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){let r=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},288:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},4782:function(e,t,n){e.exports=n(2836)},3833:function(e,t,n){e.exports=n(7471)},3865:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(r&&(r+=" "),r+=t);return r}}}]);