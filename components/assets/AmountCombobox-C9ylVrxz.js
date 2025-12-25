import { _ as _export_sfc, r as ref, c as computed, e as watch, f as openBlock, g as createElementBlock, l as createVNode, j as withCtx, u as unref, F as Fragment, z as renderList, i as createBlock, h as createBaseVNode, A as toDisplayString, m as normalizeClass } from './iframe-B-YMhJRM.js';
import { A as AmountInput } from './AmountInput-B4GxmzhL.js';
import { j as je, A as Ae, F as Fe, I as Ie } from './listbox-xfprdXMl.js';
import { r as render } from './ChevronUpDownIcon-BNkXqcI5.js';

const _hoisted_1 = {
    class: "amount-combobox"
};
const _sfc_main = {
    __name: 'AmountCombobox',
    props: {
        modelValue: {
            type: [
                String,
                Number
            ],
            default: 0
        },
        options: {
            type: Array,
            default: ()=>[
                    {
                        value: "Value",
                        label: "Label"
                    }
                ]
        },
        placeholder: {
            type: String,
            default: ""
        },
        maskOptions: AmountInput.props.options
    },
    emits: {
        "update:model-value": null,
        blur: null,
        select: null
    },
    setup (__props, { emit: __emit }) {
        const props = __props;
        const emit = __emit;
        const selectedOption = ref(null);
        const value = computed({
            get () {
                return props.modelValue;
            },
            set (val) {
                emit("update:model-value", val);
            }
        });
        watch(selectedOption, ({ value })=>{
            emit("update:model-value", value);
            emit("select", value);
        });
        function onBlur(event) {
            emit("blur", event);
        }
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", _hoisted_1, [
                createVNode(AmountInput, {
                    modelValue: value.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event)=>value.value = $event),
                    options: __props.maskOptions,
                    placeholder: __props.placeholder,
                    class: "amount-combobox-control",
                    onBlur: onBlur
                }, null, 8, [
                    "modelValue",
                    "options",
                    "placeholder"
                ]),
                createVNode(unref(Ie), {
                    modelValue: selectedOption.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event)=>selectedOption.value = $event)
                }, {
                    default: withCtx(()=>[
                            createVNode(unref(je), {
                                class: "amount-combobox-button"
                            }, {
                                default: withCtx(()=>[
                                        createVNode(unref(render), {
                                            class: "amount-combobox-icon"
                                        })
                                    ]),
                                _: 1
                            }),
                            createVNode(unref(Ae), {
                                as: "ul",
                                class: "amount-combobox-options"
                            }, {
                                default: withCtx(()=>[
                                        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option)=>{
                                            return openBlock(), createBlock(unref(Fe), {
                                                key: option.value,
                                                value: option
                                            }, {
                                                default: withCtx(({ active })=>[
                                                        createBaseVNode("li", {
                                                            class: normalizeClass([
                                                                {
                                                                    active
                                                                },
                                                                "amount-combobox-option"
                                                            ])
                                                        }, toDisplayString(option.label), 3)
                                                    ]),
                                                _: 2
                                            }, 1032, [
                                                "value"
                                            ]);
                                        }), 128))
                                    ]),
                                _: 1
                            })
                        ]),
                    _: 1
                }, 8, [
                    "modelValue"
                ])
            ]);
        };
    }
};
const AmountCombobox = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-e98e81bf"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"AmountCombobox","description":"","tags":{},"props":[{"name":"modelValue","type":{"name":"string|number"},"defaultValue":{"func":false,"value":"0"}},{"name":"options","type":{"name":"array"},"defaultValue":{"func":false,"value":"[{ value: \"Value\", label: \"Label\" }]"}},{"name":"placeholder","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"maskOptions","type":{"name":"AmountInput.props.options","func":true}}],"events":[{"name":"update:model-value"},{"name":"blur"},{"name":"select"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/amount-combobox/AmountCombobox.vue"]};

export { AmountCombobox as A };
