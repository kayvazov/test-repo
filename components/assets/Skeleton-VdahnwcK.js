import { _ as _export_sfc, c as computed, f as openBlock, g as createElementBlock, m as normalizeClass, v as normalizeStyle } from './iframe-B-YMhJRM.js';

const _sfc_main = {
    __name: 'Skeleton',
    props: {
        width: {
            type: String,
            default: "100%"
        },
        type: {
            type: String,
            default: "row",
            validator: (val)=>[
                    "row",
                    "custom"
                ].includes(val)
        }
    },
    setup (__props) {
        const props = __props;
        const styles = computed(()=>{
            return {
                width: props.width
            };
        });
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("span", {
                class: normalizeClass([
                    [
                        `skeleton-${__props.type}`
                    ],
                    "skeleton"
                ]),
                style: normalizeStyle(styles.value)
            }, "   ", 6);
        };
    }
};
const Skeleton = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-57b58943"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"Skeleton","description":"","tags":{},"props":[{"name":"width","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"100%\""}},{"name":"type","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"row\""},"values":["row","custom"]}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/skeleton/Skeleton.vue"]};

export { Skeleton as S };
