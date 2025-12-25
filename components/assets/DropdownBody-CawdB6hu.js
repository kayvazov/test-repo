import { E as defineComponent, r as ref, c as computed, p as provide, w as watchEffect, H as h$1, F as Fragment, b as onMounted, o as onUnmounted, k as inject, f as openBlock, i as createBlock, j as withCtx, u as unref, q as renderSlot, g as createElementBlock, y as createCommentVNode, T as Transition, l as createVNode, s as mergeProps, _ as _export_sfc } from './iframe-B-YMhJRM.js';
import { A, N, E as E$1, n, d } from './portal-xOeomrXK.js';
import { o, u, A as A$1, t as t$1, N as N$1, f, s, a as o$1 } from './keyboard-Y5Ohh0Ec.js';
import { t, i as i$1, w, l } from './open-closed-n-oNVJpd.js';
import { s as s$1 } from './use-resolve-button-type-BRMzcgpv.js';
import { i, E, w as w$1, h, P, N as N$2, T } from './focus-management-CfDY3olH.js';

var Se=(p=>(p[p.Open=0]="Open",p[p.Closed=1]="Closed",p))(Se||{});let re=Symbol("PopoverContext");function V(P){let b=inject(re,null);if(b===null){let p=new Error(`<${P} /> is missing a parent <${ye.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,V),p}return b}let le=Symbol("PopoverGroupContext");function ae(){return inject(le,null)}let ue=Symbol("PopoverPanelContext");function ge(){return inject(ue,null)}let ye=defineComponent({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(P,{slots:b,attrs:p,expose:h$2}){var v;let t$1=ref(null);h$2({el:t$1,$el:t$1});let e=ref(1),c=ref(null),d=ref(null),O=ref(null),f=ref(null),y=computed(()=>i(t$1)),M=computed(()=>{var Y,Z;if(!o(c)||!o(f))return !1;for(let B of document.querySelectorAll("body > *"))if(Number(B==null?void 0:B.contains(o(c)))^Number(B==null?void 0:B.contains(o(f))))return !0;let o$1=E(),a=o$1.indexOf(o(c)),g=(a+o$1.length-1)%o$1.length,E$1=(a+1)%o$1.length,N=o$1[g],$=o$1[E$1];return !((Y=o(f))!=null&&Y.contains(N))&&!((Z=o(f))!=null&&Z.contains($))}),l={popoverState:e,buttonId:ref(null),panelId:ref(null),panel:f,button:c,isPortalled:M,beforePanelSentinel:d,afterPanelSentinel:O,togglePopover(){e.value=u(e.value,{[0]:1,[1]:0});},closePopover(){e.value!==1&&(e.value=1);},close(o$1){l.closePopover();let a=(()=>o$1?o$1 instanceof HTMLElement?o$1:o$1.value instanceof HTMLElement?o(o$1):o(l.button):o(l.button))();a==null||a.focus();}};provide(re,l),t(computed(()=>u(e.value,{[0]:i$1.Open,[1]:i$1.Closed})));let m={buttonId:l.buttonId,panelId:l.panelId,close(){l.closePopover();}},S=ae(),I=S==null?void 0:S.registerPopover,[s,u$1]=A(),i$2=N({mainTreeNodeRef:S==null?void 0:S.mainTreeNodeRef,portals:s,defaultContainers:[c,f]});function n(){var o$1,a,g,E;return (E=S==null?void 0:S.isFocusWithinPopoverGroup())!=null?E:((o$1=y.value)==null?void 0:o$1.activeElement)&&(((a=o(c))==null?void 0:a.contains(y.value.activeElement))||((g=o(f))==null?void 0:g.contains(y.value.activeElement)))}return watchEffect(()=>I==null?void 0:I(m)),E$1((v=y.value)==null?void 0:v.defaultView,"focus",o$1=>{var a,g;o$1.target!==window&&o$1.target instanceof HTMLElement&&e.value===0&&(n()||c&&f&&(i$2.contains(o$1.target)||(a=o(l.beforePanelSentinel))!=null&&a.contains(o$1.target)||(g=o(l.afterPanelSentinel))!=null&&g.contains(o$1.target)||l.closePopover()));},!0),w(i$2.resolveContainers,(o$1,a)=>{var g;l.closePopover(),w$1(a,h.Loose)||(o$1.preventDefault(),(g=o(c))==null||g.focus());},computed(()=>e.value===0)),()=>{let o={open:e.value===0,close:l.close};return h$1(Fragment,[h$1(u$1,{},()=>A$1({theirProps:{...P,...p},ourProps:{ref:t$1},slot:o,slots:b,attrs:p,name:"Popover"})),h$1(i$2.MainTreeNode)])}}}),Ge=defineComponent({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${t$1()}`}},inheritAttrs:!1,setup(P$1,{attrs:b,slots:p,expose:h}){let t=V("PopoverButton"),e=computed(()=>i(t.button));h({el:t.button,$el:t.button}),onMounted(()=>{t.buttonId.value=P$1.id;}),onUnmounted(()=>{t.buttonId.value=null;});let c=ae(),d$1=c==null?void 0:c.closeOthers,O=ge(),f$1=computed(()=>O===null?!1:O.value===t.panelId.value),y=ref(null),M=`headlessui-focus-sentinel-${t$1()}`;f$1.value||watchEffect(()=>{t.button.value=o(y);});let l=s$1(computed(()=>({as:P$1.as,type:b.type})),y);function m(n){var v,o$2,a,g,E;if(f$1.value){if(t.popoverState.value===1)return;switch(n.key){case o$1.Space:case o$1.Enter:n.preventDefault(),(o$2=(v=n.target).click)==null||o$2.call(v),t.closePopover(),(a=o(t.button))==null||a.focus();break}}else switch(n.key){case o$1.Space:case o$1.Enter:n.preventDefault(),n.stopPropagation(),t.popoverState.value===1&&(d$1==null||d$1(t.buttonId.value)),t.togglePopover();break;case o$1.Escape:if(t.popoverState.value!==0)return d$1==null?void 0:d$1(t.buttonId.value);if(!o(t.button)||(g=e.value)!=null&&g.activeElement&&!((E=o(t.button))!=null&&E.contains(e.value.activeElement)))return;n.preventDefault(),n.stopPropagation(),t.closePopover();break}}function S(n){f$1.value||n.key===o$1.Space&&n.preventDefault();}function I(n){var v,o$1;P$1.disabled||(f$1.value?(t.closePopover(),(v=o(t.button))==null||v.focus()):(n.preventDefault(),n.stopPropagation(),t.popoverState.value===1&&(d$1==null||d$1(t.buttonId.value)),t.togglePopover(),(o$1=o(t.button))==null||o$1.focus()));}function s$2(n){n.preventDefault(),n.stopPropagation();}let u$1=n();function i$1(){let n=o(t.panel);if(!n)return;function v(){u(u$1.value,{[d.Forwards]:()=>P(n,N$2.First),[d.Backwards]:()=>P(n,N$2.Last)})===T.Error&&P(E().filter(a=>a.dataset.headlessuiFocusGuard!=="true"),u(u$1.value,{[d.Forwards]:N$2.Next,[d.Backwards]:N$2.Previous}),{relativeTo:o(t.button)});}v();}return ()=>{let n=t.popoverState.value===0,v={open:n},{id:o$1,...a}=P$1,g=f$1.value?{ref:y,type:l.value,onKeydown:m,onClick:I}:{ref:y,id:o$1,type:l.value,"aria-expanded":t.popoverState.value===0,"aria-controls":o(t.panel)?t.panelId.value:void 0,disabled:P$1.disabled?!0:void 0,onKeydown:m,onKeyup:S,onClick:I,onMousedown:s$2};return h$1(Fragment,[A$1({ourProps:g,theirProps:{...b,...a},slot:v,attrs:b,slots:p,name:"PopoverButton"}),n&&!f$1.value&&t.isPortalled.value&&h$1(f,{id:M,features:s.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:i$1})])}}}),$e=defineComponent({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(P,{attrs:b,slots:p}){let h=V("PopoverOverlay"),t=`headlessui-popover-overlay-${t$1()}`,e=l(),c=computed(()=>e!==null?(e.value&i$1.Open)===i$1.Open:h.popoverState.value===0);function d(){h.closePopover();}return ()=>{let O={open:h.popoverState.value===0};return A$1({ourProps:{id:t,"aria-hidden":!0,onClick:d},theirProps:P,slot:O,attrs:b,slots:p,features:N$1.RenderStrategy|N$1.Static,visible:c.value,name:"PopoverOverlay"})}}}),je=defineComponent({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${t$1()}`}},inheritAttrs:!1,setup(P$1,{attrs:b,slots:p,expose:h}){let{focus:t}=P$1,e=V("PopoverPanel"),c=computed(()=>i(e.panel)),d$1=`headlessui-focus-sentinel-before-${t$1()}`,O=`headlessui-focus-sentinel-after-${t$1()}`;h({el:e.panel,$el:e.panel}),onMounted(()=>{e.panelId.value=P$1.id;}),onUnmounted(()=>{e.panelId.value=null;}),provide(ue,e.panelId),watchEffect(()=>{var u,i;if(!t||e.popoverState.value!==0||!e.panel)return;let s=(u=c.value)==null?void 0:u.activeElement;(i=o(e.panel))!=null&&i.contains(s)||P(o(e.panel),N$2.First);});let f$1=l(),y=computed(()=>f$1!==null?(f$1.value&i$1.Open)===i$1.Open:e.popoverState.value===0);function M(s){var u,i;switch(s.key){case o$1.Escape:if(e.popoverState.value!==0||!o(e.panel)||c.value&&!((u=o(e.panel))!=null&&u.contains(c.value.activeElement)))return;s.preventDefault(),s.stopPropagation(),e.closePopover(),(i=o(e.button))==null||i.focus();break}}function l$1(s){var i,n,v,o$1,a;let u=s.relatedTarget;u&&o(e.panel)&&((i=o(e.panel))!=null&&i.contains(u)||(e.closePopover(),((v=(n=o(e.beforePanelSentinel))==null?void 0:n.contains)!=null&&v.call(n,u)||(a=(o$1=o(e.afterPanelSentinel))==null?void 0:o$1.contains)!=null&&a.call(o$1,u))&&u.focus({preventScroll:!0})));}let m=n();function S(){let s=o(e.panel);if(!s)return;function u$1(){u(m.value,{[d.Forwards]:()=>{var n;P(s,N$2.First)===T.Error&&((n=o(e.afterPanelSentinel))==null||n.focus());},[d.Backwards]:()=>{var i;(i=o(e.button))==null||i.focus({preventScroll:!0});}});}u$1();}function I(){let s=o(e.panel);if(!s)return;function u$1(){u(m.value,{[d.Forwards]:()=>{let i=o(e.button),n=o(e.panel);if(!i)return;let v=E(),o$1=v.indexOf(i),a=v.slice(0,o$1+1),E$1=[...v.slice(o$1+1),...a];for(let N of E$1.slice())if(N.dataset.headlessuiFocusGuard==="true"||n!=null&&n.contains(N)){let $=E$1.indexOf(N);$!==-1&&E$1.splice($,1);}P(E$1,N$2.First,{sorted:!1});},[d.Backwards]:()=>{var n;P(s,N$2.Previous)===T.Error&&((n=o(e.button))==null||n.focus());}});}u$1();}return ()=>{let s$1={open:e.popoverState.value===0,close:e.close},{id:u,focus:i,...n}=P$1,v={ref:e.panel,id:u,onKeydown:M,onFocusout:t&&e.popoverState.value===0?l$1:void 0,tabIndex:-1};return A$1({ourProps:v,theirProps:{...b,...n},attrs:b,slot:s$1,slots:{...p,default:(...o)=>{var a;return [h$1(Fragment,[y.value&&e.isPortalled.value&&h$1(f,{id:d$1,ref:e.beforePanelSentinel,features:s.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:S}),(a=p.default)==null?void 0:a.call(p,...o),y.value&&e.isPortalled.value&&h$1(f,{id:O,ref:e.afterPanelSentinel,features:s.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:I})])]}},features:N$1.RenderStrategy|N$1.Static,visible:y.value,name:"PopoverPanel"})}}});

const _sfc_main$2 = {
    __name: 'Dropdown',
    setup (__props) {
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(unref(ye), null, {
                default: withCtx(({ open, close })=>[
                        renderSlot(_ctx.$slots, "default", {
                            close: close,
                            open: open
                        })
                    ]),
                _: 3
            });
        };
    }
};
const Dropdown = _sfc_main$2;
_sfc_main$2.__docgenInfo = {"exportName":"default","displayName":"Dropdown","description":"","tags":{},"slots":[{"name":"default","scoped":true,"bindings":[{"name":"close","title":"binding"},{"name":"open","title":"binding"}]}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/dropdown/Dropdown.vue"]};

const _sfc_main$1 = {
    __name: 'DropdownButton',
    setup (__props) {
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(unref(Ge), null, {
                default: withCtx(({ open })=>[
                        renderSlot(_ctx.$slots, "default", {
                            open: open
                        })
                    ]),
                _: 3
            });
        };
    }
};
_sfc_main$1.__docgenInfo = {"exportName":"default","displayName":"DropdownButton","description":"","tags":{},"slots":[{"name":"default","scoped":true,"bindings":[{"name":"open","title":"binding"}]}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/dropdown/DropdownButton.vue"]};

const _sfc_main = /*@__PURE__*/ Object.assign({
    inheritAttrs: false
}, {
    __name: 'DropdownBody',
    props: {
        open: {
            type: Boolean,
            default: false
        },
        close: {
            type: Function,
            default: ()=>{}
        },
        withOverlay: {
            type: Boolean,
            default: false
        },
        withScrollLock: {
            type: Boolean,
            default: false
        }
    },
    emits: {
        "after-enter": null,
        "after-leave": null
    },
    setup (__props, { emit: __emit }) {
        const props = __props;
        const emit = __emit;
        const panel = ref(null);
        function blockPageScroll(isBlock) {
            const documentElement = document.documentElement;
            if (isBlock) {
                let scrollbarWidth = window.innerWidth - documentElement.clientWidth;
                documentElement.style.overflow = "hidden";
                if (scrollbarWidth) {
                    documentElement.style.paddingRight = `${scrollbarWidth}px`;
                }
                return;
            }
            documentElement.style.overflow = "";
            documentElement.style.paddingRight = "";
        }
        function subscribeOnClick() {
            document.body.addEventListener("click", onBodyClick);
        }
        function unsubscribeOnClick() {
            document.body.removeEventListener("click", onBodyClick);
        }
        onUnmounted(unsubscribeOnClick);
        function onAfterEnter() {
            props.withScrollLock && blockPageScroll(true);
            emit("after-enter");
        }
        function onAfterLeave() {
            props.withScrollLock && blockPageScroll(false);
            emit("after-leave");
        }
        /**
 * on page we have many vue instances.
 * Popover component used in Header, for example,
 * not looking for outside click in another places of app.
 * This is fix for close on outside click.
 * Need to remove, when we will came to SPA
 */ function onBodyClick(event) {
            const isClickInside = panel.value.$el.contains(event.target);
            if (!isClickInside) {
                props.close();
            }
        }
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock(Fragment, null, [
                __props.withOverlay ? (openBlock(), createBlock(Transition, {
                    key: 0,
                    "enter-active-class": "transition ease-out duration-200",
                    "enter-from-class": "opacity-0",
                    "enter-to-class": "opacity-100",
                    "leave-active-class": "transition ease-in duration-150",
                    "leave-from-class": "opacity-100",
                    "leave-to-class": "opacity-0"
                }, {
                    default: withCtx(()=>[
                            __props.open ? (openBlock(), createBlock(unref($e), {
                                key: 0,
                                class: "popover-overlay",
                                static: ""
                            })) : createCommentVNode("", true)
                        ]),
                    _: 1
                })) : createCommentVNode("", true),
                createVNode(Transition, {
                    "enter-active-class": "transition ease-out duration-200",
                    "enter-from-class": "opacity-0",
                    "enter-to-class": "opacity-100",
                    "leave-active-class": "transition ease-in duration-150",
                    "leave-from-class": "opacity-100",
                    "leave-to-class": "opacity-0",
                    onAfterEnter: onAfterEnter,
                    onAfterLeave: onAfterLeave,
                    onBeforeEnter: subscribeOnClick,
                    onBeforeLeave: unsubscribeOnClick
                }, {
                    default: withCtx(()=>[
                            createVNode(unref(je), mergeProps(_ctx.$attrs, {
                                ref_key: "panel",
                                ref: panel
                            }), {
                                default: withCtx(()=>[
                                        renderSlot(_ctx.$slots, "default", {
                                            close: __props.close,
                                            open: __props.open
                                        }, undefined, true)
                                    ]),
                                _: 3
                            }, 16)
                        ]),
                    _: 3
                })
            ], 64);
        };
    }
});
const DropdownBody = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-60cd1a65"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"DropdownBody","description":"","tags":{},"props":[{"name":"open","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"close","type":{"name":"func"},"defaultValue":{"func":true,"value":"() => {}"}},{"name":"withOverlay","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"withScrollLock","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"events":[{"name":"after-enter"},{"name":"after-leave"}],"slots":[{"name":"default","scoped":true,"bindings":[{"name":"close","title":"binding"},{"name":"open","title":"binding"}]}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/dropdown/DropdownBody.vue"]};

export { Dropdown as D, _sfc_main$1 as _, DropdownBody as a };
