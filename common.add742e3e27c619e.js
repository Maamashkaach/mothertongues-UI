"use strict";(self.webpackChunkmtd_mobile_ui=self.webpackChunkmtd_mobile_ui||[]).push([[2076],{4031:(b,p,a)=>{a.d(p,{c:()=>r});var _=a(8737),o=a(1086),l=a(8607);const r=(e,c)=>{let n,t;const f=(s,y,d)=>{if(typeof document>"u")return;const m=document.elementFromPoint(s,y);m&&c(m)&&!m.disabled?m!==n&&(i(),u(m,d)):i()},u=(s,y)=>{n=s,t||(t=n);const d=n;(0,_.w)(()=>d.classList.add("ion-activated")),y()},i=(s=!1)=>{if(!n)return;const y=n;(0,_.w)(()=>y.classList.remove("ion-activated")),s&&t!==n&&n.click(),n=void 0};return(0,l.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:s=>f(s.currentX,s.currentY,o.a),onMove:s=>f(s.currentX,s.currentY,o.b),onEnd:()=>{i(!0),(0,o.h)(),t=void 0}})}},8438:(b,p,a)=>{a.d(p,{g:()=>o});var _=a(8476);const o=()=>{if(void 0!==_.w)return _.w.Capacitor}},5572:(b,p,a)=>{a.d(p,{c:()=>_,i:()=>o});const _=(l,r,e)=>"function"==typeof e?e(l,r):"string"==typeof e?l[e]===r[e]:Array.isArray(r)?r.includes(l):l===r,o=(l,r,e)=>void 0!==l&&(Array.isArray(l)?l.some(c=>_(c,r,e)):_(l,r,e))},3351:(b,p,a)=>{a.d(p,{g:()=>_});const _=(c,n,t,f,u)=>l(c[1],n[1],t[1],f[1],u).map(i=>o(c[0],n[0],t[0],f[0],i)),o=(c,n,t,f,u)=>u*(3*n*Math.pow(u-1,2)+u*(-3*t*u+3*t+f*u))-c*Math.pow(u-1,3),l=(c,n,t,f,u)=>e((f-=u)-3*(t-=u)+3*(n-=u)-(c-=u),3*t-6*n+3*c,3*n-3*c,c).filter(s=>s>=0&&s<=1),e=(c,n,t,f)=>{if(0===c)return((c,n,t)=>{const f=n*n-4*c*t;return f<0?[]:[(-n+Math.sqrt(f))/(2*c),(-n-Math.sqrt(f))/(2*c)]})(n,t,f);const u=(3*(t/=c)-(n/=c)*n)/3,i=(2*n*n*n-9*n*t+27*(f/=c))/27;if(0===u)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-u),-Math.sqrt(-u)];const s=Math.pow(i/2,2)+Math.pow(u/3,3);if(0===s)return[Math.pow(i/2,.5)-n/3];if(s>0)return[Math.pow(-i/2+Math.sqrt(s),1/3)-Math.pow(i/2+Math.sqrt(s),1/3)-n/3];const y=Math.sqrt(Math.pow(-u/3,3)),d=Math.acos(-i/(2*Math.sqrt(Math.pow(-u/3,3)))),m=2*Math.pow(y,1/3);return[m*Math.cos(d/3)-n/3,m*Math.cos((d+2*Math.PI)/3)-n/3,m*Math.cos((d+4*Math.PI)/3)-n/3]}},5083:(b,p,a)=>{a.d(p,{i:()=>_});const _=o=>o&&""!==o.dir?"rtl"===o.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},3126:(b,p,a)=>{a.r(p),a.d(p,{startFocusVisible:()=>r});const _="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let c=[],n=!0;const t=e?e.shadowRoot:document,f=e||document.body,u=E=>{c.forEach(g=>g.classList.remove(_)),E.forEach(g=>g.classList.add(_)),c=E},i=()=>{n=!1,u([])},s=E=>{n=l.includes(E.key),n||u([])},y=E=>{if(n&&void 0!==E.composedPath){const g=E.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));u(g)}},d=()=>{t.activeElement===f&&u([])};return t.addEventListener("keydown",s),t.addEventListener("focusin",y),t.addEventListener("focusout",d),t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("mousedown",i),{destroy:()=>{t.removeEventListener("keydown",s),t.removeEventListener("focusin",y),t.removeEventListener("focusout",d),t.removeEventListener("touchstart",i),t.removeEventListener("mousedown",i)},setFocus:u}}},1086:(b,p,a)=>{a.d(p,{I:()=>o,a:()=>n,b:()=>t,c:()=>c,d:()=>u,h:()=>f});var _=a(8438),o=function(i){return i.Heavy="HEAVY",i.Medium="MEDIUM",i.Light="LIGHT",i}(o||{});const r={getEngine(){const i=(0,_.g)();if(i?.isPluginAvailable("Haptics"))return i.Plugins.Haptics},available(){if(!this.getEngine())return!1;const s=(0,_.g)();return"web"!==s?.getPlatform()||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(i){const s=this.getEngine();s&&s.impact({style:i.style})},notification(i){const s=this.getEngine();s&&s.notification({type:i.type})},selection(){this.impact({style:o.Light})},selectionStart(){const i=this.getEngine();i&&i.selectionStart()},selectionChanged(){const i=this.getEngine();i&&i.selectionChanged()},selectionEnd(){const i=this.getEngine();i&&i.selectionEnd()}},e=()=>r.available(),c=()=>{e()&&r.selection()},n=()=>{e()&&r.selectionStart()},t=()=>{e()&&r.selectionChanged()},f=()=>{e()&&r.selectionEnd()},u=i=>{e()&&r.impact(i)}},909:(b,p,a)=>{a.d(p,{I:()=>c,a:()=>u,b:()=>e,c:()=>y,d:()=>m,f:()=>i,g:()=>f,i:()=>t,p:()=>d,r:()=>E,s:()=>s});var _=a(467),o=a(4920),l=a(4929);const e="ion-content",c=".ion-content-scroll-host",n=`${e}, ${c}`,t=g=>"ION-CONTENT"===g.tagName,f=function(){var g=(0,_.A)(function*(v){return t(v)?(yield new Promise(w=>(0,o.c)(v,w)),v.getScrollElement()):v});return function(w){return g.apply(this,arguments)}}(),u=g=>g.querySelector(c)||g.querySelector(n),i=g=>g.closest(n),s=(g,v)=>t(g)?g.scrollToTop(v):Promise.resolve(g.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),y=(g,v,w,M)=>t(g)?g.scrollByPoint(v,w,M):Promise.resolve(g.scrollBy({top:w,left:v,behavior:M>0?"smooth":"auto"})),d=g=>(0,l.b)(g,e),m=g=>{if(t(g)){const w=g.scrollY;return g.scrollY=!1,w}return g.style.setProperty("overflow","hidden"),!0},E=(g,v)=>{t(g)?g.scrollY=v:g.style.removeProperty("overflow")}},3992:(b,p,a)=>{a.d(p,{a:()=>_,b:()=>y,c:()=>n,d:()=>d,e:()=>k,f:()=>c,g:()=>m,h:()=>l,i:()=>o,j:()=>h,k:()=>D,l:()=>t,m:()=>i,n:()=>E,o:()=>u,p:()=>e,q:()=>r,r:()=>O,s:()=>C,t:()=>s,u:()=>w,v:()=>M,w:()=>f,x:()=>g,y:()=>v});const _="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",k="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(b,p,a)=>{a.d(p,{c:()=>r,g:()=>e});var _=a(8476),o=a(4920),l=a(4929);const r=(n,t,f)=>{let u,i;if(void 0!==_.w&&"MutationObserver"in _.w){const m=Array.isArray(t)?t:[t];u=new MutationObserver(E=>{for(const g of E)for(const v of g.addedNodes)if(v.nodeType===Node.ELEMENT_NODE&&m.includes(v.slot))return f(),void(0,o.r)(()=>s(v))}),u.observe(n,{childList:!0,subtree:!0})}const s=m=>{var E;i&&(i.disconnect(),i=void 0),i=new MutationObserver(g=>{f();for(const v of g)for(const w of v.removedNodes)w.nodeType===Node.ELEMENT_NODE&&w.slot===t&&d()}),i.observe(null!==(E=m.parentElement)&&void 0!==E?E:m,{subtree:!0,childList:!0})},d=()=>{i&&(i.disconnect(),i=void 0)};return{destroy:()=>{u&&(u.disconnect(),u=void 0),d()}}},e=(n,t,f)=>{const u=null==n?0:n.toString().length,i=c(u,t);if(void 0===f)return i;try{return f(u,t)}catch(s){return(0,l.a)("Exception in provided `counterFormatter`.",s),i}},c=(n,t)=>`${n} / ${t}`},1622:(b,p,a)=>{a.r(p),a.d(p,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>O,keyboardDidClose:()=>g,keyboardDidOpen:()=>m,keyboardDidResize:()=>E,resetKeyboardAssist:()=>u,setKeyboardClose:()=>d,setKeyboardOpen:()=>y,startKeyboardAssist:()=>i,trackViewportChanges:()=>M});var _=a(4379);a(8438),a(8476);const r="ionKeyboardDidShow",e="ionKeyboardDidHide";let n={},t={},f=!1;const u=()=>{n={},t={},f=!1},i=h=>{if(_.K.getEngine())s(h);else{if(!h.visualViewport)return;t=O(h.visualViewport),h.visualViewport.onresize=()=>{M(h),m()||E(h)?y(h):g(h)&&d(h)}}},s=h=>{h.addEventListener("keyboardDidShow",D=>y(h,D)),h.addEventListener("keyboardDidHide",()=>d(h))},y=(h,D)=>{v(h,D),f=!0},d=h=>{w(h),f=!1},m=()=>!f&&n.width===t.width&&(n.height-t.height)*t.scale>150,E=h=>f&&!g(h),g=h=>f&&t.height===h.innerHeight,v=(h,D)=>{const k=new CustomEvent(r,{detail:{keyboardHeight:D?D.keyboardHeight:h.innerHeight-t.height}});h.dispatchEvent(k)},w=h=>{const D=new CustomEvent(e);h.dispatchEvent(D)},M=h=>{n=Object.assign({},t),t=O(h.visualViewport)},O=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},4379:(b,p,a)=>{a.d(p,{K:()=>r,a:()=>l});var _=a(8438),o=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(o||{}),l=function(e){return e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none",e}(l||{});const r={getEngine(){const e=(0,_.g)();if(e?.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return e?.getResizeMode?e.getResizeMode().catch(c=>{if(c.code!==o.Unimplemented)throw c}):Promise.resolve(void 0)}}},4731:(b,p,a)=>{a.d(p,{c:()=>c});var _=a(467),o=a(8476),l=a(4379);const r=n=>void 0===o.d||n===l.a.None||void 0===n?null:o.d.querySelector("ion-app")??o.d.body,e=n=>{const t=r(n);return null===t?0:t.clientHeight},c=function(){var n=(0,_.A)(function*(t){let f,u,i,s;const y=function(){var v=(0,_.A)(function*(){const w=yield l.K.getResizeMode(),M=void 0===w?void 0:w.mode;f=()=>{void 0===s&&(s=e(M)),i=!0,d(i,M)},u=()=>{i=!1,d(i,M)},null==o.w||o.w.addEventListener("keyboardWillShow",f),null==o.w||o.w.addEventListener("keyboardWillHide",u)});return function(){return v.apply(this,arguments)}}(),d=(v,w)=>{t&&t(v,m(w))},m=v=>{if(0===s||s===e(v))return;const w=r(v);return null!==w?new Promise(M=>{const h=new ResizeObserver(()=>{w.clientHeight===s&&(h.disconnect(),M())});h.observe(w)}):void 0};return yield y(),{init:y,destroy:()=>{null==o.w||o.w.removeEventListener("keyboardWillShow",f),null==o.w||o.w.removeEventListener("keyboardWillHide",u),f=u=void 0},isKeyboardVisible:()=>i}});return function(f){return n.apply(this,arguments)}}()},7838:(b,p,a)=>{a.d(p,{c:()=>o});var _=a(467);const o=()=>{let l;return{lock:function(){var e=(0,_.A)(function*(){const c=l;let n;return l=new Promise(t=>n=t),void 0!==c&&(yield c),n});return function(){return e.apply(this,arguments)}}()}}},9001:(b,p,a)=>{a.d(p,{c:()=>l});var _=a(8476),o=a(4920);const l=(r,e,c)=>{let n;const t=()=>!(void 0===e()||void 0!==r.label||null===c()),u=()=>{const s=e();if(void 0===s)return;if(!t())return void s.style.removeProperty("width");const y=c().scrollWidth;if(0===y&&null===s.offsetParent&&void 0!==_.w&&"IntersectionObserver"in _.w){if(void 0!==n)return;const d=n=new IntersectionObserver(m=>{1===m[0].intersectionRatio&&(u(),d.disconnect(),n=void 0)},{threshold:.01,root:r});d.observe(s)}else s.style.setProperty("width",.75*y+"px")};return{calculateNotchWidth:()=>{t()&&(0,o.r)(()=>{u()})},destroy:()=>{n&&(n.disconnect(),n=void 0)}}}},7895:(b,p,a)=>{a.d(p,{S:()=>o});const o={bubbles:{dur:1e3,circles:9,fn:(l,r,e)=>{const c=l*r/e-l+"ms",n=2*Math.PI*r/e;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":c}}}},circles:{dur:1e3,circles:8,fn:(l,r,e)=>{const c=r/e,n=l*c-l+"ms",t=2*Math.PI*c;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,r,e)=>({y1:14,y2:26,style:{transform:`rotate(${360/e*r+(r<e/2?180:-180)}deg)`,"animation-delay":l*r/e-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,r,e)=>({y1:12,y2:20,style:{transform:`rotate(${360/e*r+(r<e/2?180:-180)}deg)`,"animation-delay":l*r/e-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,r,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/e-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,r,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/e-l+"ms"}})}}},7166:(b,p,a)=>{a.r(p),a.d(p,{createSwipeBackGesture:()=>e});var _=a(4920),o=a(5083),l=a(8607);a(1970);const e=(c,n,t,f,u)=>{const i=c.ownerDocument.defaultView;let s=(0,o.i)(c);const d=w=>s?-w.deltaX:w.deltaX;return(0,l.createGesture)({el:c,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:w=>(s=(0,o.i)(c),(w=>{const{startX:O}=w;return s?O>=i.innerWidth-50:O<=50})(w)&&n()),onStart:t,onMove:w=>{const O=d(w)/i.innerWidth;f(O)},onEnd:w=>{const M=d(w),O=i.innerWidth,h=M/O,D=(w=>s?-w.velocityX:w.velocityX)(w),k=D>=0&&(D>.2||M>O/2),L=(k?1-h:h)*O;let x=0;if(L>5){const P=L/Math.abs(D);x=Math.min(P,540)}u(k,h<=0?.01:(0,_.j)(0,h,.9999),x)}})}},2935:(b,p,a)=>{a.d(p,{w:()=>_});const _=(r,e,c)=>{if(typeof MutationObserver>"u")return;const n=new MutationObserver(t=>{c(o(t,e))});return n.observe(r,{childList:!0,subtree:!0}),n},o=(r,e)=>{let c;return r.forEach(n=>{for(let t=0;t<n.addedNodes.length;t++)c=l(n.addedNodes[t],e)||c}),c},l=(r,e)=>{if(1!==r.nodeType)return;const c=r;return(c.tagName===e.toUpperCase()?[c]:Array.from(c.querySelectorAll(e))).find(t=>t.value===c.value)}},7530:(b,p,a)=>{a.d(p,{e:()=>i});var _=a(5329),o=a(4438),l=a(177),r=a(3819),e=a(5906);function c(s,y){if(1&s&&o.nrm(0,"ion-checkbox",10),2&s){const d=o.XpG().$implicit,m=o.XpG().ngIf;o.Y8G("checked",m[d].checked)}}function n(s,y){if(1&s){const d=o.RV6();o.j41(0,"ion-item",4),o.bIt("click",function(){const E=o.eBV(d).$implicit,g=o.XpG().ngIf,v=o.XpG(2);return o.Njj(v.showModal(g[E]))}),o.DNE(1,c,1,1,"ion-checkbox",5),o.j41(2,"ion-label")(3,"div",6)(4,"span",7),o.EFF(5),o.k0s()(),o.j41(6,"div",8)(7,"span",9),o.EFF(8),o.k0s()()()()}if(2&s){const d=y.$implicit,m=o.XpG().ngIf,E=o.XpG(2);o.R7$(),o.Y8G("ngIf",E.edit),o.R7$(4),o.JRh(m[d].word),o.R7$(3),o.JRh(m[d].definition)}}function t(s,y){if(1&s&&(o.j41(0,"div"),o.DNE(1,n,9,3,"ion-item",3),o.k0s()),2&s){const d=o.XpG(2);o.R7$(),o.Y8G("ngForOf",d.entryIDS)}}function f(s,y){if(1&s&&(o.j41(0,"ion-list"),o.DNE(1,t,2,1,"div",1),o.nI1(2,"async"),o.k0s()),2&s){const d=o.XpG();o.R7$(),o.Y8G("ngIf",o.bMT(2,1,d.$entriesHash))}}function u(s,y){if(1&s){const d=o.RV6();o.j41(0,"ion-header")(1,"ion-toolbar"),o.nrm(2,"ion-title"),o.j41(3,"ion-buttons",11)(4,"ion-button",12),o.bIt("click",function(){o.eBV(d);const E=o.XpG();return o.Njj(E.isModalOpen=!1)}),o.EFF(5,"Close"),o.k0s()()()(),o.j41(6,"ion-content",13),o.nrm(7,"mtd-entry",14),o.k0s()}if(2&s){const d=o.XpG();o.R7$(7),o.Y8G("entry",d.modalEntry)}}let i=(()=>{class s{constructor(d){this.dataService=d,this.edit=!1,this.entryIDS=[],this.isModalOpen=!1,this.$entriesHash=this.dataService.$entriesHash}ngOnInit(){this.getEntryIDS()}getEntryIDS(){const d=[];this.entries.forEach(m=>{m.entryID&&d.push(m.entryID)}),this.entryIDS=d}showModal(d){this.modalEntry=d,this.isModalOpen=!0}setOpen(d){this.isModalOpen=d}didDismiss(){this.isModalOpen=!1}ngOnChanges(){this.getEntryIDS(),void 0!==this.parentEdit&&(this.edit=this.parentEdit)}trackByFn(d,m){return console.log(m),console.log(d),m.entryID}static#o=this.\u0275fac=function(m){return new(m||s)(o.rXU(_.u))};static#n=this.\u0275cmp=o.VBU({type:s,selectors:[["mtd-entry-list"]],inputs:{parentEdit:"parentEdit",entries:"entries"},features:[o.OA$],decls:4,vars:2,consts:[[1,"browseElements"],[4,"ngIf"],[3,"didDismiss","isOpen"],["class","matchContainer","text-wrap","",3,"click",4,"ngFor","ngForOf"],["text-wrap","",1,"matchContainer",3,"click"],["color","danger",3,"checked",4,"ngIf"],[1,"langMatched","matchLeftContainer"],[1,"langMatched","response","browseL1"],[1,"matchRightContainer"],[1,"response","matchRightDiv"],["color","danger",3,"checked"],["slot","end"],[3,"click"],[1,"ion-padding"],[3,"entry"]],template:function(m,E){1&m&&(o.j41(0,"div",0),o.DNE(1,f,3,3,"ion-list",1),o.j41(2,"ion-modal",2),o.bIt("didDismiss",function(){return E.didDismiss()}),o.DNE(3,u,8,1,"ng-template"),o.k0s()()),2&m&&(o.R7$(),o.Y8G("ngIf",E.entries.length>0),o.R7$(),o.Y8G("isOpen",E.isModalOpen))},dependencies:[l.Sq,l.bT,r.Jm,r.QW,r.eY,r.W9,r.eU,r.uz,r.he,r.nf,r.BC,r.ai,r.Sb,r.hB,e.a,l.Jj],styles:[":root{--ion-color-primary: #3880ff;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3171e0;--ion-color-primary-tint: #4c8dff;--ion-color-secondary: #3dc2ff;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #5260ff;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}@media (prefers-color-scheme: dark){body{--ion-color-primary: #428cff;--ion-color-primary-rgb: 66, 140, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3a7be0;--ion-color-primary-tint: #5598ff;--ion-color-secondary: #50c8ff;--ion-color-secondary-rgb: 80, 200, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #46b0e0;--ion-color-secondary-tint: #62ceff;--ion-color-tertiary: #6a64ff;--ion-color-tertiary-rgb: 106, 100, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #5d58e0;--ion-color-tertiary-tint: #7974ff;--ion-color-success: #2fdf75;--ion-color-success-rgb: 47, 223, 117;--ion-color-success-contrast: #000000;--ion-color-success-contrast-rgb: 0, 0, 0;--ion-color-success-shade: #29c467;--ion-color-success-tint: #44e283;--ion-color-warning: #ffd534;--ion-color-warning-rgb: 255, 213, 52;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0bb2e;--ion-color-warning-tint: #ffd948;--ion-color-danger: #ff4961;--ion-color-danger-rgb: 255, 73, 97;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #e04055;--ion-color-danger-tint: #ff5b71;--ion-color-dark: #f4f5f8;--ion-color-dark-rgb: 244, 245, 248;--ion-color-dark-contrast: #000000;--ion-color-dark-contrast-rgb: 0, 0, 0;--ion-color-dark-shade: #d7d8da;--ion-color-dark-tint: #f5f6f9;--ion-color-medium: #989aa2;--ion-color-medium-rgb: 152, 154, 162;--ion-color-medium-contrast: #000000;--ion-color-medium-contrast-rgb: 0, 0, 0;--ion-color-medium-shade: #86888f;--ion-color-medium-tint: #a2a4ab;--ion-color-light: #222428;--ion-color-light-rgb: 34, 36, 40;--ion-color-light-contrast: #ffffff;--ion-color-light-contrast-rgb: 255, 255, 255;--ion-color-light-shade: #1e2023;--ion-color-light-tint: #383a3e}.ios body{--ion-background-color: #000000;--ion-background-color-rgb: 0, 0, 0;--ion-text-color: #ffffff;--ion-text-color-rgb: 255, 255, 255;--ion-color-step-50: #0d0d0d;--ion-color-step-100: #1a1a1a;--ion-color-step-150: #262626;--ion-color-step-200: #333333;--ion-color-step-250: #404040;--ion-color-step-300: #4d4d4d;--ion-color-step-350: #595959;--ion-color-step-400: #666666;--ion-color-step-450: #737373;--ion-color-step-500: #808080;--ion-color-step-550: #8c8c8c;--ion-color-step-600: #999999;--ion-color-step-650: #a6a6a6;--ion-color-step-700: #b3b3b3;--ion-color-step-750: #bfbfbf;--ion-color-step-800: #cccccc;--ion-color-step-850: #d9d9d9;--ion-color-step-900: #e6e6e6;--ion-color-step-950: #f2f2f2;--ion-item-background: #000000;--ion-card-background: #1c1c1d}.ios ion-modal{--ion-background-color: var(--ion-color-step-100);--ion-toolbar-background: var(--ion-color-step-150);--ion-toolbar-border-color: var(--ion-color-step-250)}.md body{--ion-background-color: #121212;--ion-background-color-rgb: 18, 18, 18;--ion-text-color: #ffffff;--ion-text-color-rgb: 255, 255, 255;--ion-border-color: #222222;--ion-color-step-50: #1e1e1e;--ion-color-step-100: #2a2a2a;--ion-color-step-150: #363636;--ion-color-step-200: #414141;--ion-color-step-250: #4d4d4d;--ion-color-step-300: #595959;--ion-color-step-350: #656565;--ion-color-step-400: #717171;--ion-color-step-450: #7d7d7d;--ion-color-step-500: #898989;--ion-color-step-550: #949494;--ion-color-step-600: #a0a0a0;--ion-color-step-650: #acacac;--ion-color-step-700: #b8b8b8;--ion-color-step-750: #c4c4c4;--ion-color-step-800: #d0d0d0;--ion-color-step-850: #dbdbdb;--ion-color-step-900: #e7e7e7;--ion-color-step-950: #f3f3f3;--ion-item-background: #1e1e1e;--ion-toolbar-background: #1f1f1f;--ion-tab-bar-background: #1f1f1f;--ion-card-background: #1e1e1e}}.browseElements{margin:auto;height:auto;width:auto;text-align:center;background-color:var(--ion-color-medium)}.browseElements{margin:auto;height:auto;width:auto;text-align:center!important;background-color:var(--ion-color-medium)}.matchContainer{margin:1em 0;text-align:center}.matchLeftDiv{margin-right:.2em;text-align:left}.matchLeftContainer,.matchRightContainer{display:initial}.matchRightDiv{margin-left:.2em}.matchResponse{margin:2.5em 0 .75em;text-decoration:underline}.browseL1{color:var(--ion-color-secondary)}.matchLeftDiv .langMatched,.matchRightDiv .langMatched{color:var(--ion-color-secondary);font-weight:900}\n"],encapsulation:2})}return s})()}}]);