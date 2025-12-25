import { t as t$2 } from './micro-task-DeZ0-2Kb.js';

function t$1(n){function e(){document.readyState!=="loading"&&(n(),document.removeEventListener("DOMContentLoaded",e));}typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("DOMContentLoaded",e),e());}

let t=[];t$1(()=>{function e(n){n.target instanceof HTMLElement&&n.target!==document.body&&t[0]!==n.target&&(t.unshift(n.target),t=t.filter(r=>r!=null&&r.isConnected),t.splice(10));}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0});});

function o(){let a=[],s={addEventListener(e,t,r,i){return e.addEventListener(t,r,i),s.add(()=>e.removeEventListener(t,r,i))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);s.add(()=>cancelAnimationFrame(t));},nextFrame(...e){s.requestAnimationFrame(()=>{s.requestAnimationFrame(...e);});},setTimeout(...e){let t=setTimeout(...e);s.add(()=>clearTimeout(t));},microTask(...e){let t={current:!0};return t$2(()=>{t.current&&e[0]();}),s.add(()=>{t.current=!1;})},style(e,t,r){let i=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:r}),this.add(()=>{Object.assign(e.style,{[t]:i});})},group(e){let t=o();return e(t),this.add(()=>t.dispose())},add(e){return a.push(e),()=>{let t=a.indexOf(e);if(t>=0)for(let r of a.splice(t,1))r();}},dispose(){for(let e of a.splice(0))e();}};return s}

export { o, t };
