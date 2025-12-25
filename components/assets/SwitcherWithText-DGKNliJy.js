import { _ as _export_sfc, c as computed, r as ref, b as onMounted, f as openBlock, g as createElementBlock, l as createVNode, j as withCtx, m as normalizeClass, v as normalizeStyle, u as unref, h as createBaseVNode, A as toDisplayString } from './iframe-B-YMhJRM.js';
import { i as ie } from './switch-DT6ond_T.js';

const _hoisted_1 = {
    class: "switch-wrapper"
};
const _hoisted_2 = {
    class: "unexposed"
};
const _hoisted_3 = [
    "aria-hidden"
];
const DEFAULT_SWITCHER_WIDTH = 60;
const _sfc_main = {
    __name: 'SwitcherWithText',
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        screedReaderText: {
            type: String,
            default: ""
        },
        rightText: {
            type: String,
            default: ""
        },
        leftText: {
            type: String,
            default: ""
        },
        isColourful: {
            type: Boolean,
            default: true
        },
        width: {
            type: Number,
            default: DEFAULT_SWITCHER_WIDTH
        }
    },
    emits: {
        "update:model-value": null
    },
    setup (__props) {
        const props = __props;
        const switchColor = computed(()=>{
            if (!props.isColourful) {
                return "bg-default";
            }
            return props.modelValue ? "bg-success" : "bg-danger";
        });
        const textColor = computed(()=>{
            if (!props.isColourful) {
                return "text-default";
            }
            return props.modelValue ? "text-success" : "text-danger";
        });
        const switchElement = ref(null);
        const transformLength = ref(0);
        onMounted(()=>{
            var _switchElement_value_$el, _switchElement_value;
            const circleLength = 20; // Default switcher circle length
            const offset = 2; // Default border width
            var _switchElement_value_$el_offsetWidth;
            const elementWidth = (_switchElement_value_$el_offsetWidth = (_switchElement_value = switchElement.value) === null || _switchElement_value === void 0 ? void 0 : (_switchElement_value_$el = _switchElement_value.$el) === null || _switchElement_value_$el === void 0 ? void 0 : _switchElement_value_$el.offsetWidth) !== null && _switchElement_value_$el_offsetWidth !== void 0 ? _switchElement_value_$el_offsetWidth : 0;
            transformLength.value = elementWidth - circleLength - offset * 2;
        });
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", _hoisted_1, [
                createVNode(unref(ie), {
                    ref_key: "switchElement",
                    ref: switchElement,
                    class: normalizeClass([
                        switchColor.value,
                        "switch-button"
                    ]),
                    "model-value": __props.modelValue,
                    style: normalizeStyle({
                        width: `${__props.width}px`
                    }),
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event)=>_ctx.$emit('update:model-value', $event))
                }, {
                    default: withCtx(()=>[
                            createBaseVNode("span", _hoisted_2, toDisplayString(__props.screedReaderText), 1),
                            createBaseVNode("span", {
                                "aria-hidden": __props.modelValue,
                                style: normalizeStyle({
                                    transform: `translateX(${__props.modelValue ? transformLength.value : 0}px)`
                                }),
                                class: "circle"
                            }, null, 12, _hoisted_3),
                            createBaseVNode("span", {
                                class: normalizeClass([
                                    [
                                        __props.modelValue ? 'text-wrapper--moved' : ''
                                    ],
                                    "text-wrapper"
                                ])
                            }, [
                                createBaseVNode("span", {
                                    class: normalizeClass([
                                        [
                                            __props.modelValue ? 'text-transparent' : '',
                                            textColor.value
                                        ],
                                        "right-text"
                                    ])
                                }, toDisplayString(__props.rightText), 3),
                                createBaseVNode("span", {
                                    class: normalizeClass([
                                        [
                                            __props.modelValue ? '' : 'text-transparent',
                                            textColor.value
                                        ],
                                        "left-text"
                                    ])
                                }, toDisplayString(__props.leftText), 3)
                            ], 2)
                        ]),
                    _: 1
                }, 8, [
                    "class",
                    "model-value",
                    "style"
                ])
            ]);
        };
    }
};
const SwitcherWithText = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-8ddda7bf"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"SwitcherWithText","description":"","tags":{},"props":[{"name":"modelValue","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"screedReaderText","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"rightText","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"leftText","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"isColourful","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"true"}},{"name":"width","type":{"name":"number"},"defaultValue":{"func":false,"value":"DEFAULT_SWITCHER_WIDTH"}}],"events":[{"name":"update:model-value"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/switcher/SwitcherWithText.vue"]};

export { SwitcherWithText as S };
