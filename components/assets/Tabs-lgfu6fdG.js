import { E as defineComponent, r as ref, H as h, c as computed, p as provide, b as onMounted, e as watch, w as watchEffect, F as Fragment, o as onUnmounted, k as inject, f as openBlock, i as createBlock, j as withCtx, h as createBaseVNode, q as renderSlot, s as mergeProps, u as unref, _ as _export_sfc, g as createElementBlock, l as createVNode, m as normalizeClass, y as createCommentVNode } from './iframe-B-YMhJRM.js';
import { U as UNDERLINED_TABS, P as PILL_TABS, B as BUTTON_TABS } from './constants-BNWoBBcu.js';
import { s, f, o, A, T, t, u, a as o$1, N } from './keyboard-Y5Ohh0Ec.js';
import { s as s$1 } from './use-resolve-button-type-BRMzcgpv.js';
import { O, T as T$1, i, P, N as N$1 } from './focus-management-CfDY3olH.js';
import { t as t$1 } from './micro-task-DeZ0-2Kb.js';

let d=defineComponent({props:{onFocus:{type:Function,required:!0}},setup(t){let n=ref(!0);return ()=>n.value?h(f,{as:"button",type:"button",features:s.Focusable,onFocus(o){o.preventDefault();let e,a=50;function r(){var u;if(a--<=0){e&&cancelAnimationFrame(e);return}if((u=t.onFocus)!=null&&u.call(t)){n.value=!1,cancelAnimationFrame(e);return}e=requestAnimationFrame(r);}e=requestAnimationFrame(r);}}):null}});

var te=(i=>(i[i.Forwards=0]="Forwards",i[i.Backwards=1]="Backwards",i))(te||{}),le=(s=>(s[s.Less=-1]="Less",s[s.Equal=0]="Equal",s[s.Greater=1]="Greater",s))(le||{});let U=Symbol("TabsContext");function k(a){let v=inject(U,null);if(v===null){let i=new Error(`<${a} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,k),i}return v}let j=Symbol("TabsSSRContext"),me=defineComponent({name:"TabGroup",emits:{change:a=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(a,{slots:v,attrs:i,emit:s}){var P;let l=ref((P=a.selectedIndex)!=null?P:a.defaultIndex),n=ref([]),d$1=ref([]),h$1=computed(()=>a.selectedIndex!==null),b=computed(()=>h$1.value?a.selectedIndex:l.value);function m(t){var S;let e=O(r.tabs.value,o),u$1=O(r.panels.value,o),f=e.filter(p=>{var g;return !((g=o(p))!=null&&g.hasAttribute("disabled"))});if(t<0||t>e.length-1){let p=u(l.value===null?0:Math.sign(t-l.value),{[-1]:()=>1,[0]:()=>u(Math.sign(t),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0}),g=u(p,{[0]:()=>e.indexOf(f[0]),[1]:()=>e.indexOf(f[f.length-1])});g!==-1&&(l.value=g),r.tabs.value=e,r.panels.value=u$1;}else {let p=e.slice(0,t),G=[...e.slice(t),...p].find(W=>f.includes(W));if(!G)return;let B=(S=e.indexOf(G))!=null?S:r.selectedIndex.value;B===-1&&(B=r.selectedIndex.value),l.value=B,r.tabs.value=e,r.panels.value=u$1;}}let r={selectedIndex:computed(()=>{var t,e;return (e=(t=l.value)!=null?t:a.defaultIndex)!=null?e:null}),orientation:computed(()=>a.vertical?"vertical":"horizontal"),activation:computed(()=>a.manual?"manual":"auto"),tabs:n,panels:d$1,setSelectedIndex(t){b.value!==t&&s("change",t),h$1.value||m(t);},registerTab(t){var f;if(n.value.includes(t))return;let e=n.value[l.value];n.value.push(t),n.value=O(n.value,o);let u=(f=n.value.indexOf(e))!=null?f:l.value;u!==-1&&(l.value=u);},unregisterTab(t){let e=n.value.indexOf(t);e!==-1&&n.value.splice(e,1);},registerPanel(t){d$1.value.includes(t)||(d$1.value.push(t),d$1.value=O(d$1.value,o));},unregisterPanel(t){let e=d$1.value.indexOf(t);e!==-1&&d$1.value.splice(e,1);}};provide(U,r);let w=ref({tabs:[],panels:[]}),y=ref(!1);onMounted(()=>{y.value=!0;}),provide(j,computed(()=>y.value?null:w.value));let E=computed(()=>a.selectedIndex);return onMounted(()=>{watch([E],()=>{var t;return m((t=a.selectedIndex)!=null?t:a.defaultIndex)},{immediate:!0});}),watchEffect(()=>{if(!h$1.value||b.value==null||r.tabs.value.length<=0)return;let t=O(r.tabs.value,o);t.some((u,f)=>o(r.tabs.value[f])!==o(u))&&r.setSelectedIndex(t.findIndex(u=>o(u)===o(r.tabs.value[b.value])));}),()=>{let t={selectedIndex:l.value};return h(Fragment,[n.value.length<=0&&h(d,{onFocus:()=>{for(let e of n.value){let u=o(e);if((u==null?void 0:u.tabIndex)===0)return u.focus(),!0}return !1}}),A({theirProps:{...i,...T(a,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:t,slots:v,attrs:i,name:"TabGroup"})])}}}),pe=defineComponent({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(a,{attrs:v,slots:i}){let s=k("TabList");return ()=>{let l={selectedIndex:s.selectedIndex.value},n={role:"tablist","aria-orientation":s.orientation.value};return A({ourProps:n,theirProps:a,slot:l,attrs:v,slots:i,name:"TabList"})}}}),xe=defineComponent({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${t()}`}},setup(a,{attrs:v,slots:i$1,expose:s}){let l=k("Tab"),n=ref(null);s({el:n,$el:n}),onMounted(()=>l.registerTab(n)),onUnmounted(()=>l.unregisterTab(n));let d=inject(j),h=computed(()=>{if(d.value){let e=d.value.tabs.indexOf(a.id);return e===-1?d.value.tabs.push(a.id)-1:e}return -1}),b=computed(()=>{let e=l.tabs.value.indexOf(n);return e===-1?h.value:e}),m=computed(()=>b.value===l.selectedIndex.value);function r(e){var f;let u=e();if(u===T$1.Success&&l.activation.value==="auto"){let S=(f=i(n))==null?void 0:f.activeElement,p=l.tabs.value.findIndex(g=>o(g)===S);p!==-1&&l.setSelectedIndex(p);}return u}function w(e){let u$1=l.tabs.value.map(S=>o(S)).filter(Boolean);if(e.key===o$1.Space||e.key===o$1.Enter){e.preventDefault(),e.stopPropagation(),l.setSelectedIndex(b.value);return}switch(e.key){case o$1.Home:case o$1.PageUp:return e.preventDefault(),e.stopPropagation(),r(()=>P(u$1,N$1.First));case o$1.End:case o$1.PageDown:return e.preventDefault(),e.stopPropagation(),r(()=>P(u$1,N$1.Last))}if(r(()=>u(l.orientation.value,{vertical(){return e.key===o$1.ArrowUp?P(u$1,N$1.Previous|N$1.WrapAround):e.key===o$1.ArrowDown?P(u$1,N$1.Next|N$1.WrapAround):T$1.Error},horizontal(){return e.key===o$1.ArrowLeft?P(u$1,N$1.Previous|N$1.WrapAround):e.key===o$1.ArrowRight?P(u$1,N$1.Next|N$1.WrapAround):T$1.Error}}))===T$1.Success)return e.preventDefault()}let y=ref(!1);function E(){var e;y.value||(y.value=!0,!a.disabled&&((e=o(n))==null||e.focus({preventScroll:!0}),l.setSelectedIndex(b.value),t$1(()=>{y.value=!1;})));}function P$1(e){e.preventDefault();}let t=s$1(computed(()=>({as:a.as,type:v.type})),n);return ()=>{var p;let e={selected:m.value},{id:u,...f}=a,S={ref:n,onKeydown:w,onMousedown:P$1,onClick:E,id:u,role:"tab",type:t.value,"aria-controls":(p=o(l.panels.value[b.value]))==null?void 0:p.id,"aria-selected":m.value,tabIndex:m.value?0:-1,disabled:a.disabled?!0:void 0};return A({ourProps:S,theirProps:f,slot:e,attrs:v,slots:i$1,name:"Tab"})}}}),Ie=defineComponent({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(a,{slots:v,attrs:i}){let s=k("TabPanels");return ()=>{let l={selectedIndex:s.selectedIndex.value};return A({theirProps:a,ourProps:{},slot:l,attrs:i,slots:v,name:"TabPanels"})}}}),ye=defineComponent({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${t()}`},tabIndex:{type:Number,default:0}},setup(a,{attrs:v,slots:i,expose:s}){let l=k("TabPanel"),n=ref(null);s({el:n,$el:n}),onMounted(()=>l.registerPanel(n)),onUnmounted(()=>l.unregisterPanel(n));let d=inject(j),h$1=computed(()=>{if(d.value){let r=d.value.panels.indexOf(a.id);return r===-1?d.value.panels.push(a.id)-1:r}return -1}),b=computed(()=>{let r=l.panels.value.indexOf(n);return r===-1?h$1.value:r}),m=computed(()=>b.value===l.selectedIndex.value);return ()=>{var t;let r={selected:m.value},{id:w,tabIndex:y,...E}=a,P={ref:n,id:w,role:"tabpanel","aria-labelledby":(t=o(l.tabs.value[b.value]))==null?void 0:t.id,tabIndex:m.value?y:-1};return !m.value&&a.unmount&&!a.static?h(f,{as:"span","aria-hidden":!0,...P}):A({ourProps:P,theirProps:E,slot:r,attrs:v,slots:i,features:N.Static|N.RenderStrategy,visible:m.value,name:"TabPanel"})}}});

const _sfc_main$2 = /*@__PURE__*/ Object.assign({
    inheritAttrs: false
}, {
    __name: 'Tab',
    setup (__props) {
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(unref(xe), {
                as: "template"
            }, {
                default: withCtx(()=>[
                        createBaseVNode("button", mergeProps({
                            class: "button"
                        }, _ctx.$attrs), [
                            renderSlot(_ctx.$slots, "default", {}, undefined, true)
                        ], 16)
                    ]),
                _: 3
            });
        };
    }
});
const Tab = /*#__PURE__*/ _export_sfc(_sfc_main$2, [
    [
        '__scopeId',
        "data-v-7a0bccf4"
    ]
]);
_sfc_main$2.__docgenInfo = {"exportName":"default","displayName":"Tab","description":"","tags":{},"slots":[{"name":"default"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/tabs/Tab.vue"]};

const _sfc_main$1 = {
    __name: 'TabPanel',
    setup (__props) {
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(unref(ye), {
                class: "tab-panel"
            }, {
                default: withCtx(()=>[
                        renderSlot(_ctx.$slots, "default")
                    ]),
                _: 3
            });
        };
    }
};
_sfc_main$1.__docgenInfo = {"exportName":"default","displayName":"TabPanel","description":"","tags":{},"slots":[{"name":"default"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/tabs/TabPanel.vue"]};

const _hoisted_1 = {
    key: 0,
    class: "hr"
};
const _sfc_main = {
    __name: 'Tabs',
    props: {
        tablistClassNames: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: UNDERLINED_TABS,
            validator: (value)=>[
                    UNDERLINED_TABS,
                    PILL_TABS,
                    BUTTON_TABS
                ].includes(value)
        }
    },
    setup (__props) {
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", {
                class: normalizeClass([
                    `tabs-type-${__props.type}`
                ])
            }, [
                createVNode(unref(me), null, {
                    default: withCtx(()=>[
                            createVNode(unref(pe), {
                                class: normalizeClass([
                                    __props.tablistClassNames,
                                    "tab-list"
                                ])
                            }, {
                                default: withCtx(({ selectedIndex })=>[
                                        renderSlot(_ctx.$slots, "tabs", {
                                            selectedIndex: selectedIndex
                                        }, undefined, true),
                                        __props.type === unref(PILL_TABS) ? (openBlock(), createElementBlock("hr", _hoisted_1)) : createCommentVNode("", true)
                                    ]),
                                _: 3
                            }, 8, [
                                "class"
                            ]),
                            createVNode(unref(Ie), {
                                class: "tab-panels"
                            }, {
                                default: withCtx(({ selectedIndex })=>[
                                        renderSlot(_ctx.$slots, "panels", {}, undefined, true)
                                    ]),
                                _: 3
                            })
                        ]),
                    _: 3
                })
            ], 2);
        };
    }
};
const Tabs = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-28886fe0"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"Tabs","description":"","tags":{},"props":[{"name":"tablistClassNames","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"type","type":{"name":"string"},"defaultValue":{"func":false,"value":"UNDERLINED_TABS"},"values":[]}],"slots":[{"name":"tabs","scoped":true,"bindings":[{"name":"selected-index","title":"binding"}]},{"name":"panels"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/tabs/Tabs.vue"]};

export { Tabs as T, _sfc_main$1 as _, Tab as a };
