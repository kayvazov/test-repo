import { w as watchEffect, r as ref, c as computed, p as provide, k as inject } from './iframe-B-YMhJRM.js';
import { o } from './keyboard-Y5Ohh0Ec.js';
import { c, w as w$2, h } from './focus-management-CfDY3olH.js';

function t$1(){return /iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function i$1(){return /Android/gi.test(window.navigator.userAgent)}function n$1(){return t$1()||i$1()}

function u(e,t,n){c.isServer||watchEffect(o=>{document.addEventListener(e,t,n),o(()=>document.removeEventListener(e,t,n));});}

function w$1(e,n,t){c.isServer||watchEffect(o=>{window.addEventListener(e,n,t),o(()=>window.removeEventListener(e,n,t));});}

function w(f,m,l=computed(()=>!0)){function a(e,r){if(!l.value||e.defaultPrevented)return;let t=r(e);if(t===null||!t.getRootNode().contains(t))return;let c=function o(n){return typeof n=="function"?o(n()):Array.isArray(n)||n instanceof Set?n:[n]}(f);for(let o$1 of c){if(o$1===null)continue;let n=o$1 instanceof HTMLElement?o$1:o(o$1);if(n!=null&&n.contains(t)||e.composed&&e.composedPath().includes(n))return}return !w$2(t,h.Loose)&&t.tabIndex!==-1&&e.preventDefault(),m(e,t)}let u$1=ref(null);u("pointerdown",e=>{var r,t;l.value&&(u$1.value=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target);},!0),u("mousedown",e=>{var r,t;l.value&&(u$1.value=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target);},!0),u("click",e=>{n$1()||u$1.value&&(a(e,()=>u$1.value),u$1.value=null);},!0),u("touchend",e=>a(e,()=>e.target instanceof HTMLElement?e.target:null),!0),w$1("blur",e=>a(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0);}

let n=Symbol("Context");var i=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(i||{});function s(){return l()!==null}function l(){return inject(n,null)}function t(o){provide(n,o);}

export { t$1 as a, w$1 as b, i, l, n$1 as n, s, t, w };
