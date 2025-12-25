import { _ as _export_sfc, c as computed, f as openBlock, g as createElementBlock, h as createBaseVNode, m as normalizeClass, u as unref, v as normalizeStyle, U as useCssModule } from './iframe-B-YMhJRM.js';

const wrapper = "uc_wrapper_7c2753";
const dark = "dark";
const progressBar = "uc_progress-bar_63d860";
const danger = "uc_danger_b136ee";
const warning = "uc_warning_7b83d3";
const success = "uc_success_260ca9";
const style0 = {
	wrapper: wrapper,
	dark: dark,
	"progress-bar": "uc_progress-bar_63d860",
	progressBar: progressBar,
	danger: danger,
	warning: warning,
	success: success
};

const _sfc_main = {
    __name: 'ProgressBar',
    props: {
        percent: {
            type: Number,
            default: 10,
            validator: (value)=>value >= 0 && value <= 100
        },
        colors: {
            type: Array,
            default: ()=>[]
        },
        themes: {
            type: Array,
            default: ()=>[
                    "danger",
                    "warning",
                    "success"
                ]
        }
    },
    setup (__props) {
        const props = __props;
        const $style = useCssModule();
        const color = computed(()=>{
            let items = props.colors.length ? props.colors : props.themes.map((theme)=>$style[theme]);
            const colorIndex = Math.max(0, Math.ceil(items.length * props.percent / 100) - 1);
            return items[colorIndex];
        });
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", {
                class: normalizeClass(unref($style).wrapper)
            }, [
                createBaseVNode("div", {
                    class: normalizeClass({
                        [unref($style).progressBar]: true,
                        [color.value]: Boolean(color.value)
                    }),
                    style: normalizeStyle({
                        width: __props.percent + '%'
                    })
                }, null, 6)
            ], 2);
        };
    }
};
const cssModules = {
    "$style": style0
};
const ProgressBar = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__cssModules',
        cssModules
    ],
    [
        '__scopeId',
        "data-v-b5f46d9b"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"ProgressBar","description":"","tags":{},"props":[{"name":"percent","type":{"name":"number"},"defaultValue":{"func":false,"value":"10"}},{"name":"colors","type":{"name":"array"},"defaultValue":{"func":false,"value":"[]"}},{"name":"themes","type":{"name":"array"},"defaultValue":{"func":false,"value":"[\"danger\", \"warning\", \"success\"]"}}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/progress-bar/ProgressBar.vue"]};

export { ProgressBar as P };
