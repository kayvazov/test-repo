import { _ as _export_sfc, f as openBlock, g as createElementBlock, m as normalizeClass } from './iframe-B-YMhJRM.js';

const _hoisted_1 = [
    "value"
];
const _sfc_main = {
    __name: 'InputText',
    props: {
        modelValue: {
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
        function onInput(event) {
            emit("update:modelValue", event.target.value);
            props.isError && emit("update:isError", !props.isError);
        }
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("input", {
                class: normalizeClass([
                    {
                        'is-error': __props.isError
                    },
                    "input-text"
                ]),
                value: __props.modelValue,
                onInput: onInput
            }, null, 42, _hoisted_1);
        };
    }
};
const InputText = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-d2d9a2dd"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"InputText","description":"","tags":{},"props":[{"name":"modelValue","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"isError","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"events":[{"name":"update:modelValue"},{"name":"update:isError"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/input-text/InputText.vue"]};

export { InputText as I };
