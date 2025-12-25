import { _ as _export_sfc, r as ref, e as watch, a as reactive, c as computed, o as onUnmounted, f as openBlock, i as createBlock, j as withCtx, u as unref, k as inject, n as nextTick, l as createVNode, h as createBaseVNode, m as normalizeClass, v as normalizeStyle, q as renderSlot, s as mergeProps } from './iframe-B-YMhJRM.js';
import { h as he, q as qe, _ as _e, S as Se, H as Hammer } from './transition-BbYjgdWJ.js';

const _hoisted_1 = {
    class: "action-sheet-parent"
};
const _hoisted_2 = {
    class: "action-sheet-wrapper"
};
const _hoisted_3 = {
    class: "action-sheet-header"
};
const _hoisted_4 = {
    class: "action-sheet-title"
};
const MIN_BORDER = 30;
const _sfc_main = {
    __name: 'ActionSheet',
    props: {
        isDark: {
            type: Boolean,
            default: false
        },
        initialFocus: {
            type: Object,
            default: null
        }
    },
    emits: {
        close: null
    },
    setup (__props, { expose: __expose, emit: __emit }) {
        const props = __props;
        const emit = __emit;
        const rootSelector = inject("rootSelector");
        const isDarkTheme = ref(props.isDark);
        watch(()=>props.isDark, toggleDarkTheme);
        const state = reactive({
            hammer: null,
            hasTransition: false,
            translatePos: 0,
            coefficient: 0
        });
        const isOpen = ref(false);
        const actionSheet = ref(null);
        const dragArea = ref(null);
        const dialogBodyRef = ref(null);
        let resolve;
        let resolveState;
        const style = computed(()=>{
            return {
                transform: `translateY(${state.translatePos}%)`
            };
        });
        const initialFocusNode = computed(()=>{
            return props.initialFocus || dialogBodyRef.value;
        });
        function calculateTapCoefficient() {
            return 100 / actionSheet.value.offsetHeight;
        }
        function onPanEnd(distance) {
            state.hasTransition = true;
            if (distance < MIN_BORDER) {
                state.translatePos = 0;
                return;
            }
            isOpen.value = false;
        }
        function onTransitionEnd() {
            emit("close");
            state.hasTransition = false;
        }
        function initHammer() {
            state.translatePos = 0;
            state.coefficient = calculateTapCoefficient();
            state.hammer = new Hammer(dragArea.value);
            state.hammer.get("pan").set({
                direction: Hammer.DIRECTION_DOWN
            });
            state.hammer.on("panup pandown panend", onHammerEvents);
            actionSheet.value.addEventListener("transitionend", onTransitionEnd);
        }
        function onHammerEvents(e) {
            const distanceInPercents = e.distance * state.coefficient;
            if (e.type === "panend") {
                return onPanEnd(distanceInPercents);
            }
            state.translatePos = distanceInPercents;
        }
        onUnmounted(()=>{
            var _state_hammer, _actionSheet_value;
            (_state_hammer = state.hammer) === null || _state_hammer === void 0 ? void 0 : _state_hammer.destroy();
            (_actionSheet_value = actionSheet.value) === null || _actionSheet_value === void 0 ? void 0 : _actionSheet_value.removeEventListener("transitionend", onTransitionEnd);
        });
        function open() {
            isOpen.value = true;
            nextTick(()=>{
                initHammer();
            });
            return new Promise((ok)=>{
                resolve = ok;
            });
        }
        function confirm() {
            isOpen.value = false;
            resolveState = true;
        }
        function close() {
            isOpen.value = false;
            resolveState = false;
        }
        function onAfterLeave() {
            resolve(resolveState);
        }
        function toggleDarkTheme(value) {
            isDarkTheme.value = value;
        }
        __expose({
            open,
            close,
            confirm,
            toggleDarkTheme,
            isOpen
        });
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(unref(Se), {
                show: isOpen.value,
                as: "template"
            }, {
                default: withCtx(()=>[
                        createVNode(unref(_e), mergeProps(_ctx.$attrs, {
                            "initial-focus": initialFocusNode.value,
                            as: "div",
                            onClose: close
                        }), {
                            default: withCtx(()=>[
                                    createBaseVNode("div", {
                                        class: normalizeClass(unref(rootSelector))
                                    }, [
                                        createBaseVNode("div", _hoisted_1, [
                                            createBaseVNode("div", {
                                                class: normalizeClass([
                                                    {
                                                        dark: isDarkTheme.value
                                                    },
                                                    "action-sheet-parent-wrapper"
                                                ])
                                            }, [
                                                createVNode(unref(he), {
                                                    as: "template",
                                                    enter: "ease-out duration-300",
                                                    "enter-from": "opacity-0",
                                                    "enter-to": "opacity-100",
                                                    leave: "ease-in duration-200",
                                                    "leave-from": "opacity-100",
                                                    "leave-to": "opacity-0",
                                                    onAfterLeave: onAfterLeave
                                                }, {
                                                    default: withCtx(()=>[
                                                            createVNode(unref(qe), {
                                                                class: "overlay"
                                                            })
                                                        ]),
                                                    _: 1
                                                }),
                                                createVNode(unref(he), {
                                                    as: "template",
                                                    enter: "ease-out transform duration-300",
                                                    "enter-from": "translate-y-full",
                                                    "enter-to": "translate-y-0",
                                                    leave: "ease-in transform duration-200",
                                                    "leave-from": "translate-y-0",
                                                    "leave-to": "translate-y-full"
                                                }, {
                                                    default: withCtx(()=>[
                                                            createBaseVNode("div", _hoisted_2, [
                                                                createBaseVNode("div", {
                                                                    ref_key: "actionSheet",
                                                                    ref: actionSheet,
                                                                    class: normalizeClass([
                                                                        {
                                                                            'action-sheet-transition': state.hasTransition
                                                                        },
                                                                        "action-sheet"
                                                                    ]),
                                                                    style: normalizeStyle(style.value)
                                                                }, [
                                                                    createBaseVNode("div", _hoisted_3, [
                                                                        createBaseVNode("div", {
                                                                            ref_key: "dragArea",
                                                                            ref: dragArea,
                                                                            class: "action-sheet-line"
                                                                        }, null, 512),
                                                                        createBaseVNode("div", _hoisted_4, [
                                                                            renderSlot(_ctx.$slots, "title", {}, undefined, true)
                                                                        ])
                                                                    ]),
                                                                    createBaseVNode("div", {
                                                                        ref_key: "dialogBodyRef",
                                                                        ref: dialogBodyRef,
                                                                        class: "action-sheet-content",
                                                                        tabindex: "-1"
                                                                    }, [
                                                                        renderSlot(_ctx.$slots, "default", {
                                                                            close: close,
                                                                            confirm: confirm
                                                                        }, undefined, true)
                                                                    ], 512)
                                                                ], 6)
                                                            ])
                                                        ]),
                                                    _: 3
                                                })
                                            ], 2)
                                        ])
                                    ], 2)
                                ]),
                            _: 3
                        }, 16, [
                            "initial-focus"
                        ])
                    ]),
                _: 3
            }, 8, [
                "show"
            ]);
        };
    }
};
const ActionSheet = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-cb1434f4"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"ActionSheet","description":"","tags":{},"expose":[{"name":"open"},{"name":"close"},{"name":"confirm"},{"name":"toggleDarkTheme"},{"name":"isOpen"}],"props":[{"name":"isDark","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"initialFocus","type":{"name":"object"},"defaultValue":{"func":false,"value":"null"}}],"events":[{"name":"close"}],"slots":[{"name":"title"},{"name":"default","scoped":true,"bindings":[{"name":"close","title":"binding"},{"name":"confirm","title":"binding"}]}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/action-sheet/ActionSheet.vue"]};

export { ActionSheet as A };
