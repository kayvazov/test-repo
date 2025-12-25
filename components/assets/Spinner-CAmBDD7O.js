import { _ as _export_sfc, f as openBlock, g as createElementBlock, m as normalizeClass, h as createBaseVNode } from './iframe-B-YMhJRM.js';

const wrapper = "uc_wrapper_7c2753";
const icon = "uc_icon_baec64";
const spin = "uc_spin_40d4a2";
const circle = "uc_circle_9b6dde";
const path = "uc_path_d6fe1d";
const style0 = {
	wrapper: wrapper,
	icon: icon,
	spin: spin,
	circle: circle,
	path: path
};

const SIZES = {
    s1: "1",
    s2: "2",
    s3: "3",
    s4: "4",
    s5: "5",
    s6: "6",
    s7: "7",
    s8: "8",
    s9: "9",
    s10: "10",
    s11: "11",
    s12: "12"
};
const _sfc_main = {
    __name: 'Spinner',
    props: {
        size: {
            type: String,
            default: "4",
            validator: (value)=>Object.values(SIZES).includes(value)
        }
    },
    setup (__props) {
        const sizesClasses = {
            [SIZES.s1]: "h-1 w-1",
            [SIZES.s2]: "h-2 w-2",
            [SIZES.s3]: "h-3 w-3",
            [SIZES.s4]: "h-4 w-4",
            [SIZES.s5]: "h-5 w-5",
            [SIZES.s6]: "h-6 w-6",
            [SIZES.s7]: "h-7 w-7",
            [SIZES.s8]: "h-8 w-8",
            [SIZES.s9]: "h-9 w-9",
            [SIZES.s10]: "h-10 w-10",
            [SIZES.s11]: "h-11 w-11",
            [SIZES.s12]: "h-12 w-12"
        };
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", {
                class: normalizeClass({
                    [_ctx.$style.wrapper]: true,
                    [sizesClasses[__props.size]]: true
                })
            }, [
                (openBlock(), createElementBlock("svg", {
                    class: normalizeClass(_ctx.$style.icon),
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, [
                    createBaseVNode("circle", {
                        class: normalizeClass(_ctx.$style.circle),
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        "stroke-width": "4"
                    }, null, 2),
                    createBaseVNode("path", {
                        class: normalizeClass(_ctx.$style.path),
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                        fill: "currentColor"
                    }, null, 2)
                ], 2))
            ], 2);
        };
    }
};
const cssModules = {
    "$style": style0
};
const Spinner = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__cssModules',
        cssModules
    ],
    [
        '__scopeId',
        "data-v-f784fed1"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"Spinner","description":"","tags":{},"props":[{"name":"size","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"4\""}}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/spinner/Spinner.vue"]};

export { Spinner as S };
