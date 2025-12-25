import { _ as _export_sfc, c as computed, f as openBlock, g as createElementBlock, l as createVNode, j as withCtx, m as normalizeClass, u as unref, q as renderSlot, y as createCommentVNode, h as createBaseVNode, A as toDisplayString } from './iframe-B-YMhJRM.js';
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
const _sfc_main = {
    __name: 'Switcher',
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        screedReaderText: {
            type: String,
            default: ""
        },
        isError: {
            type: Boolean,
            default: false
        }
    },
    emits: {
        "update:modelValue": null,
        "update:isError": null
    },
    setup (__props, { emit: __emit }) {
        const props = __props;
        const emit = __emit;
        const value = computed({
            get () {
                return props.modelValue;
            },
            set (value) {
                emit("update:modelValue", value);
                props.isError && emit("update:isError", !props.isError);
            }
        });
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", _hoisted_1, [
                createVNode(unref(ie), {
                    modelValue: value.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event)=>value.value = $event),
                    class: normalizeClass([
                        [
                            value.value ? 'bg-success' : 'bg-default',
                            _ctx.$slots.leading ? 'width-leading' : 'width-default',
                            {
                                'is-error': __props.isError
                            }
                        ],
                        "switch-button"
                    ])
                }, {
                    default: withCtx(()=>[
                            value.value && _ctx.$slots.leading ? renderSlot(_ctx.$slots, "leading", {
                                key: 0
                            }, undefined, true) : createCommentVNode("", true),
                            createBaseVNode("span", _hoisted_2, toDisplayString(__props.screedReaderText), 1),
                            createBaseVNode("span", {
                                "aria-hidden": value.value,
                                class: normalizeClass([
                                    {
                                        'circle-moved': value.value,
                                        'circle-moved--leading': value.value && _ctx.$slots.leading
                                    },
                                    "circle"
                                ])
                            }, [
                                renderSlot(_ctx.$slots, "default", {}, undefined, true)
                            ], 10, _hoisted_3),
                            !value.value && _ctx.$slots.trailing ? renderSlot(_ctx.$slots, "trailing", {
                                key: 1
                            }, undefined, true) : createCommentVNode("", true)
                        ]),
                    _: 3
                }, 8, [
                    "modelValue",
                    "class"
                ])
            ]);
        };
    }
};
const Switcher = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-476844df"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"Switcher","description":"","tags":{},"props":[{"name":"modelValue","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"screedReaderText","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"isError","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"events":[{"name":"update:modelValue"},{"name":"update:isError"}],"slots":[{"name":"leading"},{"name":"default"},{"name":"trailing"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/switcher/Switcher.vue"]};

export { Switcher as S };
