import { _ as _export_sfc, f as openBlock, i as createBlock, V as createSlots, j as withCtx, m as normalizeClass, u as unref, q as renderSlot, h as createBaseVNode, y as createCommentVNode } from './iframe-B-YMhJRM.js';
import { F as FormField } from './FormField-DC7p7h4Z.js';
import { S as Spinner } from './Spinner-CAmBDD7O.js';
import { r as render } from './CheckCircleIcon-D4s67Pui.js';

const field = "uc_field_06e3d3";
const trailing = "uc_trailing_d1b15a";
const checkIcon = "uc_check-icon_a5664c";
const style0 = {
	field: field,
	trailing: trailing,
	"check-icon": "uc_check-icon_a5664c",
	checkIcon: checkIcon
};

const _sfc_main = {
    __name: 'ProgressField',
    props: {
        isLoading: {
            type: Boolean,
            default: false
        },
        isSuccess: {
            type: Boolean,
            default: false
        }
    },
    setup (__props) {
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(unref(FormField), {
                class: normalizeClass(_ctx.$style.field)
            }, createSlots({
                trailing: withCtx(()=>[
                        renderSlot(_ctx.$slots, "trailing", {}, ()=>[
                                createBaseVNode("div", {
                                    class: normalizeClass(_ctx.$style.trailing)
                                }, [
                                    __props.isSuccess ? (openBlock(), createBlock(unref(render), {
                                        key: 0,
                                        class: normalizeClass(_ctx.$style['check-icon'])
                                    }, null, 8, [
                                        "class"
                                    ])) : __props.isLoading ? (openBlock(), createBlock(unref(Spinner), {
                                        key: 1
                                    })) : createCommentVNode("", true)
                                ], 2)
                            ], true)
                    ]),
                _: 2
            }, [
                _ctx.$slots.label ? {
                    name: "label",
                    fn: withCtx(()=>[
                            renderSlot(_ctx.$slots, "label", {}, undefined, true)
                        ]),
                    key: "0"
                } : undefined,
                _ctx.$slots.error ? {
                    name: "error",
                    fn: withCtx(()=>[
                            renderSlot(_ctx.$slots, "error", {}, undefined, true)
                        ]),
                    key: "1"
                } : undefined
            ]), 1032, [
                "class"
            ]);
        };
    }
};
const cssModules = {
    "$style": style0
};
const ProgressField = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__cssModules',
        cssModules
    ],
    [
        '__scopeId',
        "data-v-c5da4c14"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"ProgressField","description":"","tags":{},"props":[{"name":"isLoading","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"isSuccess","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"slots":[{"name":"label"},{"name":"trailing"},{"name":"error"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/progress-field/ProgressField.vue"]};

export { ProgressField as P };
