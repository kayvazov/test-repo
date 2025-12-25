import { _ as _export_sfc, c as computed, f as openBlock, g as createElementBlock, L as withDirectives, a0 as vModelRadio, h as createBaseVNode, q as renderSlot } from './iframe-B-YMhJRM.js';

const _hoisted_1 = {
    class: "flex"
};
const _hoisted_2 = [
    "id",
    "name",
    "value"
];
const _hoisted_3 = [
    "for"
];
const _sfc_main = {
    __name: 'Radio',
    props: {
        modelValue: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        },
        nameGroup: {
            type: String,
            default: ""
        }
    },
    emits: {
        "update:modelValue": null
    },
    setup (__props, { emit: __emit }) {
        const props = __props;
        const emit = __emit;
        const model = computed({
            set (e) {
                emit("update:modelValue", e);
            },
            get () {
                return props.modelValue;
            }
        });
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", _hoisted_1, [
                withDirectives(createBaseVNode("input", {
                    id: __props.name,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event)=>model.value = $event),
                    name: __props.nameGroup,
                    value: __props.value,
                    class: "radio",
                    type: "radio"
                }, null, 8, _hoisted_2), [
                    [
                        vModelRadio,
                        model.value
                    ]
                ]),
                createBaseVNode("label", {
                    for: __props.name,
                    class: "radio-label"
                }, [
                    renderSlot(_ctx.$slots, "default", {}, undefined, true)
                ], 8, _hoisted_3)
            ]);
        };
    }
};
const Radio = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-01e9663e"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"Radio","description":"","tags":{},"props":[{"name":"modelValue","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"value","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"name","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"nameGroup","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}}],"events":[{"name":"update:modelValue"}],"slots":[{"name":"default"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/radio/Radio.vue"]};

export { Radio as R };
