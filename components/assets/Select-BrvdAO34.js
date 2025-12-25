import { f as openBlock, g as createElementBlock, h as createBaseVNode, a1 as mergeModels, a2 as useModel, c as computed, l as createVNode, j as withCtx, u as unref, _ as _export_sfc, i as createBlock, q as renderSlot, S as createTextVNode, A as toDisplayString, m as normalizeClass, y as createCommentVNode, P as withModifiers, T as Transition, s as mergeProps, H as h } from './iframe-B-YMhJRM.js';
import { I as Ie, E as Ee, j as je, A as Ae } from './listbox-xfprdXMl.js';

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
      "clip-rule": "evenodd"
    })
  ]))
}

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
      "clip-rule": "evenodd"
    })
  ]))
}

const wrapper = "uc_wrapper_7c2753";
const leaveActiveClass = "uc_leave-active-class_354b5e";
const leaveFromClass = "uc_leave-from-class_b8f0a0";
const leaveToClass = "uc_leave-to-class_d98b2a";
const label = "uc_label_d304ba";
const dark = "dark";
const select = "uc_select_999382";
const selectError = "uc_select-error_440ab8";
const selectContent = "uc_select-content_67e5c3";
const selectOpen = "uc_select-open_9f1a2d";
const selectOpenIcon = "uc_select-open-icon_9a8827";
const selectClear = "uc_select-clear_32981c";
const selectClearIcon = "uc_select-clear-icon_e78476";
const selectOptions = "uc_select-options_6df425";
const selectSizeXs = "uc_select-size-xs_70f7df";
const selectSizeSm = "uc_select-size-sm_d199a2";
const selectSizeBase = "uc_select-size-base_248daf";
const selectSizeL = "uc_select-size-l_7ceb7b";
const selectSizeXl = "uc_select-size-xl_367b23";
const style0 = {
	wrapper: wrapper,
	"leave-active-class": "uc_leave-active-class_354b5e",
	leaveActiveClass: leaveActiveClass,
	"leave-from-class": "uc_leave-from-class_b8f0a0",
	leaveFromClass: leaveFromClass,
	"leave-to-class": "uc_leave-to-class_d98b2a",
	leaveToClass: leaveToClass,
	label: label,
	dark: dark,
	select: select,
	"select-error": "uc_select-error_440ab8",
	selectError: selectError,
	"select-content": "uc_select-content_67e5c3",
	selectContent: selectContent,
	"select-open": "uc_select-open_9f1a2d",
	selectOpen: selectOpen,
	"select-open-icon": "uc_select-open-icon_9a8827",
	selectOpenIcon: selectOpenIcon,
	"select-clear": "uc_select-clear_32981c",
	selectClear: selectClear,
	"select-clear-icon": "uc_select-clear-icon_e78476",
	selectClearIcon: selectClearIcon,
	"select-options": "uc_select-options_6df425",
	selectOptions: selectOptions,
	"select-size-xs": "uc_select-size-xs_70f7df",
	selectSizeXs: selectSizeXs,
	"select-size-sm": "uc_select-size-sm_d199a2",
	selectSizeSm: selectSizeSm,
	"select-size-base": "uc_select-size-base_248daf",
	selectSizeBase: selectSizeBase,
	"select-size-l": "uc_select-size-l_7ceb7b",
	selectSizeL: selectSizeL,
	"select-size-xl": "uc_select-size-xl_367b23",
	selectSizeXl: selectSizeXl
};

const _sfc_main$2 = {
    __name: 'CustomSelect',
    props: /*@__PURE__*/ mergeModels({
        label: {
            type: String,
            default: ""
        },
        hasError: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: "base",
            validator: (value)=>[
                    "xs",
                    "sm",
                    "base",
                    "l",
                    "xl"
                ].includes(value)
        },
        clearable: {
            type: Boolean,
            default: false
        },
        isMultiple: {
            type: Boolean,
            default: false
        },
        by: Ie.props.by,
        onClear: {
            type: Function,
            default: null
        }
    }, {
        "modelValue": {
            type: [
                Array,
                Object
            ],
            default: ()=>({
                    value: "",
                    label: ""
                })
        },
        "modelModifiers": {}
    }),
    emits: [
        "update:modelValue"
    ],
    setup (__props) {
        const props = __props;
        const value = useModel(__props, "modelValue");
        const selectedValueLabel = computed(()=>{
            return props.isMultiple ? value.value.map((item)=>item.label).join(", ") : value.value.label;
        });
        const isShowClearIcon = computed(()=>{
            var _value_value;
            if (!props.clearable) {
                return false;
            }
            return props.isMultiple ? value.value.length > 0 : Boolean((_value_value = value.value) === null || _value_value === void 0 ? void 0 : _value_value.value);
        });
        function handleClear() {
            if (props.onClear) {
                props.onClear();
                return;
            }
            if (props.isMultiple) {
                value.value = [];
                return;
            }
            value.value = {
                value: "",
                label: ""
            };
        }
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", null, [
                createVNode(unref(Ie), {
                    modelValue: value.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event)=>value.value = $event),
                    by: __props.by,
                    multiple: __props.isMultiple,
                    as: "div"
                }, {
                    default: withCtx(()=>[
                            _ctx.$slots.label ? (openBlock(), createBlock(unref(Ee), {
                                key: 0,
                                class: normalizeClass(_ctx.$style.label)
                            }, {
                                default: withCtx(()=>[
                                        renderSlot(_ctx.$slots, "label", {
                                            selected: value.value
                                        }, ()=>[
                                                createTextVNode(toDisplayString(__props.label), 1)
                                            ], true)
                                    ]),
                                _: 3
                            }, 8, [
                                "class"
                            ])) : createCommentVNode("", true),
                            createBaseVNode("div", {
                                class: normalizeClass(_ctx.$style.wrapper)
                            }, [
                                createVNode(unref(je), {
                                    class: normalizeClass({
                                        [_ctx.$style.select]: true,
                                        [_ctx.$style.selectError]: __props.hasError,
                                        [_ctx.$style[`select-size-${__props.size}`]]: Boolean(__props.size)
                                    })
                                }, {
                                    default: withCtx(()=>[
                                            createBaseVNode("span", {
                                                class: normalizeClass(_ctx.$style.selectContent)
                                            }, [
                                                renderSlot(_ctx.$slots, "value", {
                                                    selected: value.value
                                                }, ()=>[
                                                        createTextVNode(toDisplayString(selectedValueLabel.value), 1)
                                                    ], true)
                                            ], 2),
                                            isShowClearIcon.value ? (openBlock(), createElementBlock("button", {
                                                key: 0,
                                                class: normalizeClass(_ctx.$style.selectClear),
                                                onClick: withModifiers(handleClear, [
                                                    "prevent"
                                                ])
                                            }, [
                                                createVNode(unref(render), {
                                                    class: normalizeClass(_ctx.$style.selectOpenIcon)
                                                }, null, 8, [
                                                    "class"
                                                ])
                                            ], 2)) : (openBlock(), createElementBlock("span", {
                                                key: 1,
                                                class: normalizeClass(_ctx.$style.selectOpen)
                                            }, [
                                                createVNode(unref(render$1), {
                                                    class: normalizeClass(_ctx.$style.selectOpenIcon)
                                                }, null, 8, [
                                                    "class"
                                                ])
                                            ], 2))
                                        ]),
                                    _: 3
                                }, 8, [
                                    "class"
                                ]),
                                createVNode(Transition, {
                                    "leave-active-class": _ctx.$style.leaveActiveClass,
                                    "leave-from-class": _ctx.$style.leaveFromClass,
                                    "leave-to-class": _ctx.$style.leaveToClass
                                }, {
                                    default: withCtx(()=>[
                                            createVNode(unref(Ae), {
                                                class: normalizeClass(_ctx.$style.selectOptions)
                                            }, {
                                                default: withCtx(()=>[
                                                        renderSlot(_ctx.$slots, "options", {}, undefined, true)
                                                    ]),
                                                _: 3
                                            }, 8, [
                                                "class"
                                            ])
                                        ]),
                                    _: 3
                                }, 8, [
                                    "leave-active-class",
                                    "leave-from-class",
                                    "leave-to-class"
                                ])
                            ], 2)
                        ]),
                    _: 3
                }, 8, [
                    "modelValue",
                    "by",
                    "multiple"
                ])
            ]);
        };
    }
};
const cssModules = {
    "$style": style0
};
const CustomSelect = /*#__PURE__*/ _export_sfc(_sfc_main$2, [
    [
        '__cssModules',
        cssModules
    ],
    [
        '__scopeId',
        "data-v-4fe29114"
    ]
]);
_sfc_main$2.__docgenInfo = {"exportName":"default","displayName":"CustomSelect","description":"","tags":{},"props":[{"name":"label","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"hasError","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"size","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"base\""},"values":["xs","sm","base","l","xl"]},{"name":"clearable","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"isMultiple","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"by","type":{"name":"Listbox.props.by","func":true}},{"name":"onClear","type":{"name":"func"},"defaultValue":{"func":false,"value":"null"}}],"slots":[{"name":"label","scoped":true,"bindings":[{"name":"selected","title":"binding"}]},{"name":"value","scoped":true,"bindings":[{"name":"selected","title":"binding"}]},{"name":"options"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/select/components/CustomSelect.vue"]};

const _hoisted_1 = {
    class: "label"
};
const _hoisted_2 = {
    class: "label-content"
};
const _hoisted_3 = {
    class: "select-wrapper"
};
const _hoisted_4 = [
    "value"
];
const _sfc_main$1 = {
    __name: 'NativeSelect',
    props: {
        modelValue: {
            type: Object,
            default: ()=>({
                    value: "",
                    label: ""
                })
        },
        size: {
            type: String,
            default: "base",
            validator: (value)=>[
                    "xs",
                    "sm",
                    "base",
                    "l",
                    "xl"
                ].includes(value)
        },
        clearable: {
            type: Boolean,
            default: false
        }
    },
    emits: {
        "update:modelValue": null
    },
    setup (__props, { emit: __emit }) {
        const props = __props;
        const emit = __emit;
        const isShowClearIcon = computed(()=>props.clearable && props.modelValue.value);
        function onChange({ target }) {
            const option = [
                ...target.options
            ].find((option)=>option.value === target.value);
            emit("update:modelValue", {
                value: target.value,
                label: option.dataset.label
            });
        }
        function onClear() {
            emit("update:modelValue", {
                value: "",
                label: ""
            });
        }
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("label", _hoisted_1, [
                createBaseVNode("span", _hoisted_2, [
                    renderSlot(_ctx.$slots, "label", {
                        selected: __props.modelValue
                    }, ()=>[
                            createTextVNode(toDisplayString(__props.modelValue.label), 1)
                        ], true)
                ]),
                createBaseVNode("div", _hoisted_3, [
                    isShowClearIcon.value ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        class: "clear-button",
                        onClick: withModifiers(onClear, [
                            "prevent"
                        ])
                    }, [
                        createVNode(unref(render), {
                            class: normalizeClass({
                                [`clear-button-size-${__props.size}`]: __props.size
                            })
                        }, null, 8, [
                            "class"
                        ])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("select", mergeProps(_ctx.$attrs, {
                        class: [
                            {
                                [`select-size-${__props.size}`]: __props.size,
                                'hide-chevron': isShowClearIcon.value
                            },
                            "select"
                        ],
                        value: __props.modelValue.value,
                        onInput: onChange
                    }), [
                        renderSlot(_ctx.$slots, "options", {}, undefined, true)
                    ], 16, _hoisted_4)
                ])
            ]);
        };
    }
};
const NativeSelect = /*#__PURE__*/ _export_sfc(_sfc_main$1, [
    [
        '__scopeId',
        "data-v-f485adc5"
    ]
]);
_sfc_main$1.__docgenInfo = {"exportName":"default","displayName":"NativeSelect","description":"","tags":{},"props":[{"name":"modelValue","type":{"name":"object"},"defaultValue":{"func":false,"value":"{\n  value: \"\",\n  label: \"\"\n}"}},{"name":"size","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"base\""},"values":["xs","sm","base","l","xl"]},{"name":"clearable","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"events":[{"name":"update:modelValue"}],"slots":[{"name":"label","scoped":true,"bindings":[{"name":"selected","title":"binding"}]},{"name":"options"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/select/components/NativeSelect.vue"]};

function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
const _sfc_main = {
    name: "Select",
    props: _object_spread_props(_object_spread({}, CustomSelect.props), {
        isNative: {
            type: Boolean,
            default: false
        }
    }),
    emits: {
        "update:modelValue": null
    },
    setup (props, { slots, emit }) {
        const component = props.isNative ? NativeSelect : CustomSelect;
        const childSlots = {};
        if (slots.label) {
            childSlots.label = ()=>slots.label({
                    selected: props.modelValue
                });
        }
        if (slots.options) {
            childSlots.options = ()=>slots.options({
                    selected: props.modelValue
                });
        }
        if (slots.value) {
            childSlots.value = ()=>slots.value({
                    selected: props.modelValue
                });
        }
        return ()=>h(component, _object_spread_props(_object_spread({}, props), {
                modelValue: props.modelValue,
                "onUpdate:modelValue": (value)=>{
                    emit("update:modelValue", value);
                }
            }), _object_spread({}, childSlots));
    }
};
const Select = _sfc_main;
_sfc_main.__docgenInfo = {"displayName":"Select","exportName":"default","description":"","tags":{},"props":[{"name":"isNative","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"events":[{"name":"update:modelValue"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/select/Select.vue"]};

export { Select as S };
