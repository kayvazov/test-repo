import { c as computed, f as openBlock, g as createElementBlock, A as toDisplayString } from './iframe-B-YMhJRM.js';

const _sfc_main = {
    __name: 'FriendlyNumber',
    props: {
        number: {
            type: [
                Number,
                String
            ],
            required: true
        },
        scale: {
            type: Number,
            default: 1
        }
    },
    setup (__props) {
        const props = __props;
        function getFriendlyNumberAbbreviation(val, scale) {
            const parsedVal = parseInt(val);
            if (Number.isNaN(parsedVal)) {
                return "-";
            }
            const abbreviations = [
                "",
                "K",
                "M",
                "B",
                "T"
            ];
            let count = String(parsedVal).length - 1;
            const equalizer = Math.pow(10, scale || 0);
            count -= count % 3;
            let value = Math.round(parsedVal * equalizer / Math.pow(10, count)) / equalizer;
            return [
                value,
                abbreviations[count / 3]
            ].join("");
        }
        const content = computed(()=>getFriendlyNumberAbbreviation(props.number, props.scale));
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("span", null, toDisplayString(content.value), 1);
        };
    }
};
const FriendlyNumber = _sfc_main;
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"FriendlyNumber","description":"","tags":{},"props":[{"name":"number","type":{"name":"number|string"},"required":true},{"name":"scale","type":{"name":"number"},"defaultValue":{"func":false,"value":"1"}}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/friendly-number/FriendlyNumber.vue"]};

export { FriendlyNumber as F };
