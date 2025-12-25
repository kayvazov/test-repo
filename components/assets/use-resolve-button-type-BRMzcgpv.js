import { r as ref, b as onMounted, w as watchEffect } from './iframe-B-YMhJRM.js';
import { o } from './keyboard-Y5Ohh0Ec.js';

function r(t,e){if(t)return t;let n=e!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return "button"}function s(t,e){let n=ref(r(t.value.type,t.value.as));return onMounted(()=>{n.value=r(t.value.type,t.value.as);}),watchEffect(()=>{var u;n.value||o(e)&&o(e)instanceof HTMLButtonElement&&!((u=o(e))!=null&&u.hasAttribute("type"))&&(n.value="button");}),n}

export { s };
