import { _ as _export_sfc, r as ref, b as onMounted, f as openBlock, i as createBlock, j as withCtx, h as createBaseVNode, q as renderSlot, m as normalizeClass, S as createTextVNode, A as toDisplayString, u as unref, y as createCommentVNode } from './iframe-B-YMhJRM.js';
import { r as render } from './CheckIcon-CfIKdVGN.js';
import { F as Fe } from './listbox-xfprdXMl.js';

const _sfc_main = {
    __name: 'SelectOption',
    props: {
        size: {
            type: String,
            default: "base",
            validator: (value)=>[
                    "xs",
                    "sm",
                    "base",
                    "l",
                    "xl"
                ].includes(value)
        },
        value: {
            type: Object,
            default: ()=>({
                    value: "",
                    label: ""
                })
        },
        scrollIntoView: {
            type: Boolean,
            default: false
        },
        withCheckIcon: {
            type: Boolean,
            default: false
        }
    },
    setup (__props) {
        const props = __props;
        const targetRef = ref(null);
        props.scrollIntoView && onMounted(()=>{
            if (targetRef.value === null) {
                return;
            }
            targetRef.value.scrollIntoView({
                block: "center"
            });
        });
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(unref(Fe), {
                value: __props.value,
                as: "template"
            }, {
                default: withCtx(({ selected, active })=>[
                        createBaseVNode("li", {
                            ref_key: "targetRef",
                            ref: targetRef,
                            class: normalizeClass([
                                {
                                    active,
                                    [`size-${__props.size}`]: __props.size
                                },
                                "li"
                            ])
                        }, [
                            renderSlot(_ctx.$slots, "default", {
                                active: active,
                                selected: selected
                            }, ()=>[
                                    createBaseVNode("span", {
                                        class: normalizeClass([
                                            [
                                                selected && 'label-selected'
                                            ],
                                            "label"
                                        ])
                                    }, [
                                        renderSlot(_ctx.$slots, "label", {}, ()=>[
                                                createTextVNode(toDisplayString(__props.value.label), 1)
                                            ], true)
                                    ], 2),
                                    __props.withCheckIcon ? (openBlock(), createBlock(unref(render), {
                                        key: 0,
                                        class: normalizeClass([
                                            {
                                                'is-active': active,
                                                'is-selected': selected
                                            },
                                            "check-icon"
                                        ]),
                                        "aria-hidden": "true"
                                    }, null, 8, [
                                        "class"
                                    ])) : createCommentVNode("", true)
                                ], true)
                        ], 2)
                    ]),
                _: 3
            }, 8, [
                "value"
            ]);
        };
    }
};
const SelectOption = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-18104117"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"SelectOption","description":"","tags":{},"props":[{"name":"size","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"base\""},"values":["xs","sm","base","l","xl"]},{"name":"value","type":{"name":"object"},"defaultValue":{"func":false,"value":"{\n  value: \"\",\n  label: \"\"\n}"}},{"name":"scrollIntoView","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"withCheckIcon","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"slots":[{"name":"default","scoped":true,"bindings":[{"name":"active","title":"binding"},{"name":"selected","title":"binding"}]},{"name":"label"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/select/SelectOption.vue"]};

export { SelectOption as S };
