(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,475254,e=>{"use strict";var t=e.i(271645);let a=(...e)=>e.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim(),r=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,a)=>a?a.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,t.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:n="",children:l,iconNode:d,...c},u)=>(0,t.createElement)("svg",{ref:u,...i,width:r,height:r,stroke:e,strokeWidth:o?24*Number(s)/Number(r):s,className:a("lucide",n),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(c)&&{"aria-hidden":"true"},...c},[...d.map(([e,a])=>(0,t.createElement)(e,a)),...Array.isArray(l)?l:[l]])),o=(e,i)=>{let o=(0,t.forwardRef)(({className:o,...n},l)=>(0,t.createElement)(s,{ref:l,iconNode:i,className:a(`lucide-${r(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,o),...n}));return o.displayName=r(e),o};e.s(["default",()=>o],475254)},977757,e=>{"use strict";let t={name:"Aqib Mehedi",company:"Kamal-Paterson Ltd",logo:{text:"Aqib",suffix:" Mehedi"},title:"Best AI Engineer in Bangladesh | Senior Solutions Architect",description:"Aqib Mehedi is the Best AI Engineer in Bangladesh, specializing in custom LLMs, RAG systems, and high-performance Flutter applications. Award-winning innovation and 10+ years experience.",url:"https://aqibmehedi.com",ogImage:"/og-image.png",keywords:["Best AI Engineer in Bangladesh","Top AI Engineer Bangladesh","Hire AI Engineer Dhaka","Generative AI Specialist Bangladesh","LLM Fine-Tuning Expert Bangladesh","RAG System Developer Bangladesh","Senior Mobile Solutions Architect","Best Flutter Developer Bangladesh","Aqib Mehedi","Kamal-Paterson Ltd","Agri-Llama","Krishok AI","AI Consultant Bangladesh","Technical Architect Dhaka","Machine Learning Engineer Bangladesh"],author:"Aqib Mehedi",location:"Dhaka, Bangladesh",coordinates:{lat:23.8103,lng:90.4125},socials:{github:"https://github.com/aqibmehedi007",linkedin:"https://linkedin.com/in/aqibmehedi",email:"aqibcareer007@gmail.com",whatsapp:"+8801777818880"},navLinks:[{label:"Expertise",href:"/#stack"},{label:"Arsenal",href:"/#arsenal"},{label:"Projects",href:"/#projects"},{label:"Blog",href:"/blog"},{label:"Approach",href:"/#process"},{label:"Contact",href:"/#contact"}],cta:{nav:"Hire Me",hero:"Architect Your Future",contact:"Start the Audit"},assets:{profile:"/profile/aqib_mehedi.jpg",resume:"/resume/Aqib-Mehedi-Resume.pdf",og:"/og-image.png"}};t.url,t.name,t.url,t.url,t.url,t.assets.profile,t.url,t.assets.profile,t.name,t.title,t.company,t.description,t.socials.linkedin,t.socials.github,t.url,t.name,t.name,t.url,t.url,t.url,t.url,t.url,t.url,t.url,t.url,t.url,t.name,t.description,t.url,t.url,t.url,t.url,t.title,t.url,t.url,t.description,t.url,t.url,t.url,t.url,t.url,e.s(["SITE_CONFIG",0,t])},705766,e=>{"use strict";let t,a;var r,i=e.i(271645);let s={data:""},o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,d=(e,t)=>{let a="",r="",i="";for(let s in e){let o=e[s];"@"==s[0]?"i"==s[1]?a=s+" "+o+";":r+="f"==s[1]?d(o,s):s+"{"+d(o,"k"==s[1]?"":t)+"}":"object"==typeof o?r+=d(o,t?t.replace(/([^,])+/g,e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=o&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=d.p?d.p(s,o):s+":"+o+";")}return a+(t&&i?t+"{"+i+"}":i)+r},c={},u=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+u(e[a]);return t}return e};function p(e){let t,a,r=this||{},i=e.call?e(r.p):e;return((e,t,a,r,i)=>{var s;let p=u(e),m=c[p]||(c[p]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(p));if(!c[m]){let t=p!==e?e:(e=>{let t,a,r=[{}];for(;t=o.exec(e.replace(n,""));)t[4]?r.shift():t[3]?(a=t[3].replace(l," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(l," ").trim();return r[0]})(e);c[m]=d(i?{["@keyframes "+m]:t}:t,a?"":"."+m)}let f=a&&c.g?c.g:null;return a&&(c.g=c[m]),s=c[m],f?t.data=t.data.replace(f,s):-1===t.data.indexOf(s)&&(t.data=r?s+t.data:t.data+s),m})(i.unshift?i.raw?(t=[].slice.call(arguments,1),a=r.p,i.reduce((e,r,i)=>{let s=t[i];if(s&&s.call){let e=s(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+r+(null==s?"":s)},"")):i.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):i,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||s})(r.target),r.g,r.o,r.k)}p.bind({g:1});let m,f,h,g=p.bind({k:1});function b(e,t){let a=this||{};return function(){let r=arguments;function i(s,o){let n=Object.assign({},s),l=n.className||i.className;a.p=Object.assign({theme:f&&f()},n),a.o=/ *go\d+/.test(l),n.className=p.apply(a,r)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),h&&d[0]&&h(n),m(d,n)}return t?t(i):i}}var y=(e,t)=>"function"==typeof e?e(t):e,x=(t=0,()=>(++t).toString()),v=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},w="default",k=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return k(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},A=[],E={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},C={},j=(e,t=w)=>{C[t]=k(C[t]||E,e),A.forEach(([e,a])=>{e===t&&a(C[t])})},I=e=>Object.keys(C).forEach(t=>j(e,t)),N=(e=w)=>t=>{j(t,e)},T={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=(e={},t=w)=>{let[a,r]=(0,i.useState)(C[t]||E),s=(0,i.useRef)(C[t]);(0,i.useEffect)(()=>(s.current!==C[t]&&r(C[t]),A.push([t,r]),()=>{let e=A.findIndex(([e])=>e===t);e>-1&&A.splice(e,1)}),[t]);let o=a.toasts.map(t=>{var a,r,i;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||T[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}});return{...a,toasts:o}},S=e=>(t,a)=>{let r,i=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||x()}))(t,e,a);return N(i.toasterId||(r=i.id,Object.keys(C).find(e=>C[e].toasts.some(e=>e.id===r))))({type:2,toast:i}),i.id},B=(e,t)=>S("blank")(e,t);B.error=S("error"),B.success=S("success"),B.loading=S("loading"),B.custom=S("custom"),B.dismiss=(e,t)=>{let a={type:3,toastId:e};t?N(t)(a):I(a)},B.dismissAll=e=>B.dismiss(void 0,e),B.remove=(e,t)=>{let a={type:4,toastId:e};t?N(t)(a):I(a)},B.removeAll=e=>B.remove(void 0,e),B.promise=(e,t,a)=>{let r=B.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let i=t.success?y(t.success,e):void 0;return i?B.success(i,{id:r,...a,...null==a?void 0:a.success}):B.dismiss(r),e}).catch(e=>{let i=t.error?y(t.error,e):void 0;i?B.error(i,{id:r,...a,...null==a?void 0:a.error}):B.dismiss(r)}),e};var D=1e3,L=(e,t="default")=>{let{toasts:a,pausedAt:r}=$(e,t),s=(0,i.useRef)(new Map).current,o=(0,i.useCallback)((e,t=D)=>{if(s.has(e))return;let a=setTimeout(()=>{s.delete(e),n({type:4,toastId:e})},t);s.set(e,a)},[]);(0,i.useEffect)(()=>{if(r)return;let e=Date.now(),i=a.map(a=>{if(a.duration===1/0)return;let r=(a.duration||0)+a.pauseDuration-(e-a.createdAt);if(r<0){a.visible&&B.dismiss(a.id);return}return setTimeout(()=>B.dismiss(a.id,t),r)});return()=>{i.forEach(e=>e&&clearTimeout(e))}},[a,r,t]);let n=(0,i.useCallback)(N(t),[t]),l=(0,i.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),d=(0,i.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),c=(0,i.useCallback)(()=>{r&&n({type:6,time:Date.now()})},[r,n]),u=(0,i.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:s}=t||{},o=a.filter(t=>(t.position||s)===(e.position||s)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[a]);return(0,i.useEffect)(()=>{a.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[a,o]),{toasts:a,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}},O=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,M=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,P=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${M} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,q=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,_=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${q} 1s linear infinite;
`,F=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,R=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,H=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${R} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,U=b("div")`
  position: absolute;
`,G=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Z=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(W,null,t):t:"blank"===a?null:i.createElement(G,null,i.createElement(_,{...r}),"loading"!==a&&i.createElement(U,null,"error"===a?i.createElement(P,{...r}):i.createElement(H,{...r})))},X=b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Y=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,J=i.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,i]=v()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*a}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*a}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${g(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(Z,{toast:e}),n=i.createElement(Y,{...e.ariaProps},y(e.message,e));return i.createElement(X,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))});r=i.createElement,d.p=void 0,m=r,f=void 0,h=void 0;var V=({id:e,className:t,style:a,onHeightUpdate:r,children:s})=>{let o=i.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return i.createElement("div",{ref:o,className:t,style:a},s)},Q=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:s,toasterId:o,containerStyle:n,containerClassName:l})=>{let{toasts:d,handlers:c}=L(a,o);return i.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(a=>{let o,n,l=a.position||t,d=c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}),u=(o=l.includes("top"),n=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:v()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(o?1:-1)}px)`,...o?{top:0}:{bottom:0},...n});return i.createElement(V,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?Q:"",style:u},"custom"===a.type?y(a.message,a):s?s(a):i.createElement(J,{toast:a,position:l}))}))};e.s(["CheckmarkIcon",()=>H,"ErrorIcon",()=>P,"LoaderIcon",()=>_,"ToastBar",()=>J,"ToastIcon",()=>Z,"Toaster",()=>ee,"default",()=>B,"resolveValue",()=>y,"toast",()=>B,"useToaster",()=>L,"useToasterStore",()=>$],705766)},37727,e=>{"use strict";let t=(0,e.i(475254).default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",()=>t],37727)},664625,e=>{"use strict";var t=e.i(271645);function a(){return(0,t.useEffect)(()=>{(async()=>{try{await fetch("/api/track",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({platform:navigator.platform,language:navigator.language})})}catch(e){}})()},[]),null}e.s(["default",()=>a])},547549,e=>{"use strict";var t=e.i(843476),a=e.i(271645),r=e.i(977757),i=e.i(37727);let s=encodeURIComponent("Hi Aqib! I visited your portfolio and I'd like to discuss a project with you. 🚀"),o=r.SITE_CONFIG.socials.whatsapp.replace(/[^\d+]/g,""),n=`https://wa.me/${o}?text=${s}`;function l(){let[e,r]=(0,a.useState)(!1),[s,o]=(0,a.useState)(!1),[l,d]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{let e=setTimeout(()=>r(!0),2e3);return()=>clearTimeout(e)},[]),(0,a.useEffect)(()=>{if(!e||l)return;let t=setTimeout(()=>o(!0),2e3);return()=>clearTimeout(t)},[e,l]),e)?(0,t.jsxs)("div",{className:"fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2",children:[s&&!l&&(0,t.jsxs)("div",{className:"relative flex items-center gap-2 px-4 py-2.5 rounded-2xl rounded-br-sm shadow-2xl max-w-[230px] animate-in slide-in-from-bottom-2 fade-in duration-300 border border-brand-amber/30",style:{background:"linear-gradient(135deg, #111 0%, #1a1500 100%)"},children:[(0,t.jsxs)("span",{className:"text-sm font-semibold text-white",children:["Let's talk on ",(0,t.jsx)("span",{className:"text-brand-amber",children:"WhatsApp!"})," 👋"]}),(0,t.jsx)("button",{onClick:()=>{o(!1),d(!0)},className:"ml-1 text-slate-500 hover:text-brand-amber flex-shrink-0 transition-colors","aria-label":"Dismiss",children:(0,t.jsx)(i.X,{size:13})}),(0,t.jsx)("div",{className:"absolute inset-0 rounded-2xl rounded-br-sm pointer-events-none",style:{boxShadow:"0 0 20px rgba(245,158,11,0.08)"}}),(0,t.jsx)("div",{className:"absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8",style:{borderTopColor:"#1a1500"}})]}),(0,t.jsxs)("a",{href:n,target:"_blank",rel:"noopener noreferrer","aria-label":"Chat on WhatsApp",onClick:()=>o(!1),className:"group relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95",style:{backgroundColor:"#25D366"},children:[(0,t.jsx)("span",{className:"absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"}),(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",className:"w-8 h-8 fill-white drop-shadow-sm",children:(0,t.jsx)("path",{d:"M16 0C7.164 0 0 7.163 0 16c0 2.825.738 5.476 2.027 7.775L0 32l8.437-2.01A15.94 15.94 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.765-1.851l-.484-.289-5.008 1.196 1.228-4.877-.317-.5A13.23 13.23 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.273-9.87c-.398-.199-2.353-1.161-2.718-1.294-.365-.133-.631-.199-.898.199-.266.398-1.031 1.294-1.264 1.56-.234.266-.466.299-.864.1-.398-.199-1.68-.619-3.2-1.975-1.183-1.056-1.981-2.36-2.214-2.758-.234-.398-.025-.613.175-.811.18-.179.398-.466.597-.699.199-.234.266-.398.398-.664.133-.266.066-.499-.033-.698-.1-.199-.898-2.164-1.231-2.962-.323-.778-.653-.672-.898-.685l-.765-.013c-.266 0-.698.1-.1064.499-.365.398-1.397 1.365-1.397 3.329 0 1.964 1.43 3.862 1.629 4.128.199.266 2.813 4.295 6.816 6.026.953.41 1.697.655 2.278.839.957.305 1.828.262 2.516.159.767-.114 2.353-.962 2.686-1.891.332-.93.332-1.728.232-1.892-.099-.163-.365-.262-.764-.46z"})})]})]}):null}e.s(["default",()=>l])}]);