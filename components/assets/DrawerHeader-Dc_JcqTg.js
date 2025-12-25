import { r as ref, b as onMounted, d as onBeforeUnmount, c as computed, e as watch, o as onUnmounted, f as openBlock, g as createElementBlock, h as createBaseVNode, m as normalizeClass, _ as _export_sfc, a as reactive, i as createBlock, j as withCtx, u as unref, k as inject, p as provide, l as createVNode, v as normalizeStyle, y as createCommentVNode, q as renderSlot, s as mergeProps, A as toDisplayString } from './iframe-B-YMhJRM.js';
import { u as useTheme } from './useTheme-Cy0CkrhV.js';
import { H as Hammer, h as he, q as qe, _ as _e, S as Se } from './transition-BbYjgdWJ.js';
import { r as render } from './XMarkIcon-B0gCI5_N.js';

function useResponsive(options = {}) {
    var _options_tabletMin;
    const tabletMin = (_options_tabletMin = options.tabletMin) !== null && _options_tabletMin !== void 0 ? _options_tabletMin : 768;
    var _options_desktopMin;
    const desktopMin = (_options_desktopMin = options.desktopMin) !== null && _options_desktopMin !== void 0 ? _options_desktopMin : 1024;
    const mqTabletMin = window.matchMedia(`(min-width: ${tabletMin}px)`);
    const mqDesktopMin = window.matchMedia(`(min-width: ${desktopMin}px)`);
    const isDesktop = ref(mqDesktopMin.matches);
    const isTablet = ref(mqTabletMin.matches && !mqDesktopMin.matches);
    const isMobile = ref(!mqTabletMin.matches);
    function update() {
        isDesktop.value = mqDesktopMin.matches;
        isTablet.value = mqTabletMin.matches && !mqDesktopMin.matches;
        isMobile.value = !mqTabletMin.matches;
    }
    function addMQListener(mql, handler) {
        mql.addEventListener("change", handler);
    }
    function removeMQListener(mql, handler) {
        mql.removeEventListener("change", handler);
    }
    function onChange() {
        return update();
    }
    onMounted(()=>{
        update();
        addMQListener(mqTabletMin, onChange);
        addMQListener(mqDesktopMin, onChange);
    });
    onBeforeUnmount(()=>{
        removeMQListener(mqTabletMin, onChange);
        removeMQListener(mqDesktopMin, onChange);
    });
    return {
        isDesktop,
        isTablet,
        isMobile
    };
}

const MIN_CLOSE_DISTANCE = 30;
const _sfc_main$5 = {
    __name: 'DrawerHandle',
    props: {
        position: {
            type: String,
            required: true,
            validator: (value)=>[
                    "left",
                    "right",
                    "top",
                    "bottom"
                ].includes(value)
        },
        enabled: {
            type: Boolean,
            default: false
        },
        drawerSize: {
            type: Number,
            required: true
        }
    },
    emits: {
        drag: null,
        dragend: null
    },
    setup (__props, { emit: __emit }) {
        const props = __props;
        const emit = __emit;
        const POSITION_CONFIG = {
            left: {
                direction: Hammer.DIRECTION_LEFT,
                axis: "X",
                distanceKey: "deltaX",
                multiplier: -1,
                handlePlacement: "after"
            },
            right: {
                direction: Hammer.DIRECTION_RIGHT,
                axis: "X",
                distanceKey: "deltaX",
                multiplier: 1,
                handlePlacement: "before"
            },
            top: {
                direction: Hammer.DIRECTION_UP,
                axis: "Y",
                distanceKey: "deltaY",
                multiplier: -1,
                handlePlacement: "after"
            },
            bottom: {
                direction: Hammer.DIRECTION_DOWN,
                axis: "Y",
                distanceKey: "deltaY",
                multiplier: 1,
                handlePlacement: "before"
            }
        };
        const handleElement = ref(null);
        let hammerInstance = null;
        const coefficient = computed(()=>{
            return props.drawerSize > 0 ? 100 / props.drawerSize : 0;
        });
        function calculateDragDistance(e) {
            const config = POSITION_CONFIG[props.position];
            const distance = e[config.distanceKey];
            const isCorrectDirection = config.multiplier * distance > 0;
            const distanceInPercents = Math.abs(distance) * coefficient.value;
            const translatePos = distanceInPercents * config.multiplier;
            return {
                isCorrectDirection,
                distanceInPercents,
                translatePos
            };
        }
        function onDrag(e) {
            const { isCorrectDirection, translatePos } = calculateDragDistance(e);
            emit("drag", isCorrectDirection ? translatePos : 0);
        }
        function onDragEnd(e) {
            const { isCorrectDirection, distanceInPercents } = calculateDragDistance(e);
            const shouldClose = isCorrectDirection && distanceInPercents >= MIN_CLOSE_DISTANCE;
            emit("dragend", shouldClose);
        }
        function initHammer() {
            if (!props.enabled || !handleElement.value) {
                return;
            }
            destroyHammer();
            const direction = POSITION_CONFIG[props.position].direction;
            hammerInstance = new Hammer(handleElement.value);
            hammerInstance.get("pan").set({
                direction
            });
            hammerInstance.on("pan", onDrag);
            hammerInstance.on("panend", onDragEnd);
        }
        function destroyHammer() {
            if (hammerInstance) {
                hammerInstance.destroy();
                hammerInstance = null;
            }
        }
        onMounted(()=>{
            if (props.enabled) {
                initHammer();
            }
        });
        watch(()=>props.enabled, (newVal)=>{
            if (newVal) {
                initHammer();
            } else {
                destroyHammer();
            }
        });
        onUnmounted(()=>{
            destroyHammer();
        });
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", {
                ref_key: "handleElement",
                ref: handleElement,
                class: normalizeClass([
                    `wrapper-${__props.position}`,
                    "wrapper"
                ])
            }, [
                createBaseVNode("div", {
                    class: normalizeClass([
                        `drawer-handle-${__props.position}`,
                        "drawer-handle"
                    ])
                }, null, 2)
            ], 2);
        };
    }
};
const DrawerHandle = /*#__PURE__*/ _export_sfc(_sfc_main$5, [
    [
        '__scopeId',
        "data-v-5409b45f"
    ]
]);
_sfc_main$5.__docgenInfo = {"exportName":"default","displayName":"DrawerHandle","description":"","tags":{},"props":[{"name":"position","type":{"name":"string"},"required":true,"values":["left","right","top","bottom"]},{"name":"enabled","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"drawerSize","type":{"name":"number"},"required":true}],"events":[{"name":"drag"},{"name":"dragend"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/drawer/DrawerHandle.vue"]};

const _hoisted_1$3 = {
    class: "drawer-parent"
};
const _sfc_main$4 = {
    __name: 'Drawer',
    props: {
        position: {
            type: String,
            default: "right",
            validator: (value)=>[
                    "left",
                    "right",
                    "top",
                    "bottom"
                ].includes(value)
        },
        full: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: false
        },
        persistence: {
            type: Boolean,
            default: false
        },
        initialFocus: {
            type: Object,
            default: null
        },
        enableGestures: {
            type: Boolean,
            default: false
        },
        adaptive: {
            type: Boolean,
            default: true
        }
    },
    emits: {
        close: null
    },
    setup (__props, { expose: __expose, emit: __emit }) {
        const props = __props;
        const emit = __emit;
        const rootSelector = inject("rootSelector", "");
        const { isDark } = useTheme();
        const { isMobile } = useResponsive();
        const state = reactive({
            hasTransition: false,
            translatePos: 0
        });
        const isOpen = ref(false);
        const drawerRef = ref(null);
        const dialogBodyRef = ref(null);
        let resolve;
        let resolveState;
        const POSITION_CONFIG = {
            left: {
                axis: "X",
                handlePlacement: "after"
            },
            right: {
                axis: "X",
                handlePlacement: "before"
            },
            top: {
                axis: "Y",
                handlePlacement: "after"
            },
            bottom: {
                axis: "Y",
                handlePlacement: "before"
            }
        };
        const responsiveConfig = computed(()=>{
            if (!props.adaptive) {
                return {
                    position: props.position,
                    rounded: props.rounded
                };
            }
            return {
                position: isMobile.value ? "bottom" : props.position,
                rounded: isMobile.value
            };
        });
        const isHorizontal = computed(()=>{
            return [
                "left",
                "right"
            ].includes(responsiveConfig.value.position);
        });
        const showHandleBefore = computed(()=>{
            return props.enableGestures && POSITION_CONFIG[responsiveConfig.value.position].handlePlacement === "before";
        });
        const showHandleAfter = computed(()=>{
            return props.enableGestures && POSITION_CONFIG[responsiveConfig.value.position].handlePlacement === "after";
        });
        const wrapperClass = computed(()=>{
            const baseClass = "drawer-wrapper";
            return `${baseClass} drawer-wrapper-${responsiveConfig.value.position}`;
        });
        const style = computed(()=>{
            if (!props.enableGestures || state.translatePos === 0) {
                return {};
            }
            const axis = POSITION_CONFIG[responsiveConfig.value.position].axis;
            return {
                transform: `translate${axis}(${state.translatePos}%)`
            };
        });
        const initialFocusNode = computed(()=>{
            return props.initialFocus || dialogBodyRef.value;
        });
        const drawerSize = computed(()=>{
            if (!drawerRef.value) {
                return 0;
            }
            return isHorizontal.value ? drawerRef.value.offsetWidth : drawerRef.value.offsetHeight;
        });
        function handleDrag(translatePos) {
            // Reset transition flag when starting a new drag gesture
            // to prevent lag from previous transition
            if (state.hasTransition) {
                state.hasTransition = false;
            }
            state.translatePos = translatePos;
        }
        function handleDragEnd(shouldClose) {
            state.hasTransition = true;
            if (shouldClose) {
                isOpen.value = false;
            } else {
                state.translatePos = 0;
            }
        }
        function open() {
            state.translatePos = 0;
            state.hasTransition = false;
            isOpen.value = true;
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
        function onClose() {
            if (props.persistence) {
                return;
            }
            close();
        }
        function onOverlayClick() {
            if (!props.persistence) {
                close();
            }
        }
        function onAfterLeave() {
            resolve(resolveState);
        }
        function onDrawerAfterLeave() {
            emit("close");
            state.hasTransition = false;
            state.translatePos = 0;
        }
        provide("api", {
            confirm,
            close
        });
        __expose({
            open,
            close,
            confirm,
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
                            onClose: onClose
                        }), {
                            default: withCtx(()=>[
                                    createBaseVNode("div", {
                                        class: normalizeClass(unref(rootSelector))
                                    }, [
                                        createBaseVNode("div", _hoisted_1$3, [
                                            createBaseVNode("div", {
                                                class: normalizeClass([
                                                    {
                                                        dark: unref(isDark)
                                                    },
                                                    "drawer-parent-wrapper"
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
                                                                class: "overlay",
                                                                onClick: onOverlayClick
                                                            })
                                                        ]),
                                                    _: 1
                                                }),
                                                createVNode(unref(he), {
                                                    "enter-from": `enter-from-${responsiveConfig.value.position}`,
                                                    "leave-to": `leave-to-${responsiveConfig.value.position}`,
                                                    as: "template",
                                                    enter: "ease-out transform duration-300",
                                                    "enter-to": "enter-to",
                                                    leave: "ease-in transform duration-200",
                                                    "leave-from": "leave-from",
                                                    onAfterLeave: onDrawerAfterLeave
                                                }, {
                                                    default: withCtx(()=>[
                                                            createBaseVNode("div", {
                                                                class: normalizeClass(wrapperClass.value)
                                                            }, [
                                                                createBaseVNode("div", {
                                                                    ref_key: "drawerRef",
                                                                    ref: drawerRef,
                                                                    class: normalizeClass([
                                                                        [
                                                                            `drawer-${responsiveConfig.value.position}`,
                                                                            {
                                                                                'drawer-full': __props.full
                                                                            },
                                                                            {
                                                                                'drawer-rounded': responsiveConfig.value.rounded
                                                                            },
                                                                            {
                                                                                'drawer-transition': state.hasTransition
                                                                            }
                                                                        ],
                                                                        "drawer"
                                                                    ]),
                                                                    style: normalizeStyle(style.value)
                                                                }, [
                                                                    showHandleBefore.value ? (openBlock(), createBlock(DrawerHandle, {
                                                                        key: 0,
                                                                        "drawer-size": drawerSize.value,
                                                                        enabled: __props.enableGestures,
                                                                        position: responsiveConfig.value.position,
                                                                        onDrag: handleDrag,
                                                                        onDragend: handleDragEnd
                                                                    }, null, 8, [
                                                                        "drawer-size",
                                                                        "enabled",
                                                                        "position"
                                                                    ])) : createCommentVNode("", true),
                                                                    createBaseVNode("div", {
                                                                        ref_key: "dialogBodyRef",
                                                                        ref: dialogBodyRef,
                                                                        class: "drawer-body",
                                                                        tabindex: "-1"
                                                                    }, [
                                                                        renderSlot(_ctx.$slots, "default", {
                                                                            close: close,
                                                                            confirm: confirm
                                                                        }, undefined, true)
                                                                    ], 512),
                                                                    showHandleAfter.value ? (openBlock(), createBlock(DrawerHandle, {
                                                                        key: 1,
                                                                        "drawer-size": drawerSize.value,
                                                                        enabled: __props.enableGestures,
                                                                        position: responsiveConfig.value.position,
                                                                        onDrag: handleDrag,
                                                                        onDragend: handleDragEnd
                                                                    }, null, 8, [
                                                                        "drawer-size",
                                                                        "enabled",
                                                                        "position"
                                                                    ])) : createCommentVNode("", true)
                                                                ], 6)
                                                            ], 2)
                                                        ]),
                                                    _: 3
                                                }, 8, [
                                                    "enter-from",
                                                    "leave-to"
                                                ])
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
const Drawer = /*#__PURE__*/ _export_sfc(_sfc_main$4, [
    [
        '__scopeId',
        "data-v-2ecba2b8"
    ]
]);
_sfc_main$4.__docgenInfo = {"exportName":"default","displayName":"Drawer","description":"","tags":{},"expose":[{"name":"open"},{"name":"close"},{"name":"confirm"},{"name":"isOpen"}],"props":[{"name":"position","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"right\""},"values":["left","right","top","bottom"]},{"name":"full","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"rounded","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"persistence","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"initialFocus","type":{"name":"object"},"defaultValue":{"func":false,"value":"null"}},{"name":"enableGestures","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"adaptive","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"true"}}],"events":[{"name":"close"}],"slots":[{"name":"default","scoped":true,"bindings":[{"name":"close","title":"binding"},{"name":"confirm","title":"binding"}]}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/drawer/Drawer.vue"]};

const _sfc_main$3 = {};
const _hoisted_1$2 = {
    class: "drawer-content"
};
function _sfc_render$1(_ctx, _cache) {
    return openBlock(), createElementBlock("div", _hoisted_1$2, [
        renderSlot(_ctx.$slots, "default", {}, undefined, true)
    ]);
}
const DrawerContent = /*#__PURE__*/ _export_sfc(_sfc_main$3, [
    [
        'render',
        _sfc_render$1
    ],
    [
        '__scopeId',
        "data-v-076a38cd"
    ]
]);
_sfc_main$3.__docgenInfo = {"displayName":"DrawerContent","description":"","tags":{},"slots":[{"name":"default"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/drawer/DrawerContent.vue"]};

const _sfc_main$2 = {};
const _hoisted_1$1 = {
    class: "drawer-footer"
};
function _sfc_render(_ctx, _cache) {
    return openBlock(), createElementBlock("div", _hoisted_1$1, [
        renderSlot(_ctx.$slots, "default", {}, undefined, true)
    ]);
}
const DrawerFooter = /*#__PURE__*/ _export_sfc(_sfc_main$2, [
    [
        'render',
        _sfc_render
    ],
    [
        '__scopeId',
        "data-v-e2d22572"
    ]
]);
_sfc_main$2.__docgenInfo = {"displayName":"DrawerFooter","description":"","tags":{},"slots":[{"name":"default"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/drawer/DrawerFooter.vue"]};

const _sfc_main$1 = {
    __name: 'DismissButton',
    props: {
        isStatic: {
            type: Boolean,
            default: false
        }
    },
    setup (__props) {
        const { close } = inject("api");
        function onClick() {
            close();
        }
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", {
                class: normalizeClass([
                    [
                        {
                            'static-button': __props.isStatic
                        }
                    ],
                    "button-wrapper"
                ])
            }, [
                createBaseVNode("button", mergeProps({
                    class: "button",
                    tabindex: "-1",
                    type: "button"
                }, _ctx.$attrs, {
                    onClick: onClick
                }), [
                    _cache[0] || (_cache[0] = createBaseVNode("span", {
                        class: "invisible"
                    }, "Close", -1)),
                    createVNode(unref(render), {
                        class: "icon"
                    })
                ], 16)
            ], 2);
        };
    }
};
const DismissButton = /*#__PURE__*/ _export_sfc(_sfc_main$1, [
    [
        '__scopeId',
        "data-v-f2183021"
    ]
]);
_sfc_main$1.__docgenInfo = {"exportName":"default","displayName":"DismissButton","description":"","tags":{},"props":[{"name":"isStatic","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/dismiss-button/DismissButton.vue"]};

const _hoisted_1 = {
    class: "drawer-header"
};
const _hoisted_2 = {
    class: "content"
};
const _hoisted_3 = {
    class: "text"
};
const _hoisted_4 = {
    key: 0,
    class: "title"
};
const _hoisted_5 = {
    key: 1,
    class: "subtitle"
};
const _hoisted_6 = {
    key: 0,
    class: "divider"
};
const _sfc_main = {
    __name: 'DrawerHeader',
    props: {
        title: {
            type: String,
            default: ""
        },
        subtitle: {
            type: String,
            default: ""
        },
        showClose: {
            type: Boolean,
            default: true
        },
        showDivider: {
            type: Boolean,
            default: true
        }
    },
    setup (__props) {
        const { confirm, close } = inject("api");
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", _hoisted_1, [
                renderSlot(_ctx.$slots, "default", {
                    close: unref(close),
                    confirm: unref(confirm)
                }, ()=>[
                        createBaseVNode("div", _hoisted_2, [
                            createBaseVNode("div", _hoisted_3, [
                                __props.title ? (openBlock(), createElementBlock("h2", _hoisted_4, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
                                __props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_5, toDisplayString(__props.subtitle), 1)) : createCommentVNode("", true)
                            ]),
                            renderSlot(_ctx.$slots, "actions", {
                                close: unref(close),
                                confirm: unref(confirm)
                            }, ()=>[
                                    __props.showClose ? (openBlock(), createBlock(unref(DismissButton), {
                                        key: 0,
                                        "is-static": ""
                                    })) : createCommentVNode("", true)
                                ], true)
                        ])
                    ], true),
                __props.showDivider ? (openBlock(), createElementBlock("div", _hoisted_6)) : createCommentVNode("", true)
            ]);
        };
    }
};
const DrawerHeader = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-5fd9d863"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"DrawerHeader","description":"","tags":{},"props":[{"name":"title","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"subtitle","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"showClose","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"true"}},{"name":"showDivider","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"true"}}],"slots":[{"name":"default","scoped":true,"bindings":[{"name":"close","title":"binding"},{"name":"confirm","title":"binding"}]},{"name":"actions","scoped":true,"bindings":[{"name":"close","title":"binding"},{"name":"confirm","title":"binding"}]}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/drawer/DrawerHeader.vue"]};

export { Drawer as D, DrawerHeader as a, DrawerContent as b, DrawerFooter as c, DismissButton as d };
