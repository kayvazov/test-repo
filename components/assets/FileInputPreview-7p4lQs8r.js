import { f as openBlock, g as createElementBlock, h as createBaseVNode, _ as _export_sfc, q as renderSlot, m as normalizeClass, i as createBlock, u as unref, F as Fragment, z as renderList, S as createTextVNode, A as toDisplayString, l as createVNode } from './iframe-B-YMhJRM.js';
import { r as render$1 } from './XMarkIcon-B0gCI5_N.js';

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
    })
  ]))
}

const fileInput = "uc_file-input_bf25fe";
const style0$2 = {
	"file-input": "uc_file-input_bf25fe",
	fileInput: fileInput
};

const _hoisted_1$1 = [
    "accept",
    "multiple",
    "name"
];
const _sfc_main$2 = {
    __name: 'FileInput',
    props: {
        name: {
            type: String,
            default: ""
        },
        multiple: {
            type: Boolean,
            default: false
        },
        accept: {
            type: Array,
            default: ()=>[]
        }
    },
    emits: {
        change: null
    },
    setup (__props, { emit: __emit }) {
        const emit = __emit;
        function onChange(event) {
            emit("change", event);
        }
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("label", {
                class: normalizeClass(_ctx.$style['file-input'])
            }, [
                renderSlot(_ctx.$slots, "default", {}, undefined, true),
                createBaseVNode("input", {
                    accept: __props.accept.join(', '),
                    multiple: __props.multiple,
                    name: __props.name,
                    type: "file",
                    hidden: "",
                    onChange: onChange
                }, null, 40, _hoisted_1$1)
            ], 2);
        };
    }
};
const cssModules$2 = {
    "$style": style0$2
};
const FileInput = /*#__PURE__*/ _export_sfc(_sfc_main$2, [
    [
        '__cssModules',
        cssModules$2
    ],
    [
        '__scopeId',
        "data-v-ad8d8f18"
    ]
]);
_sfc_main$2.__docgenInfo = {"exportName":"default","displayName":"FileInput","description":"","tags":{},"props":[{"name":"name","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"multiple","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"accept","type":{"name":"array"},"defaultValue":{"func":false,"value":"[]"}}],"events":[{"name":"change"}],"slots":[{"name":"default"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/file-input/FileInput.vue"]};

const icon$1 = "uc_icon_baec64";
const style0$1 = {
	icon: icon$1
};

const _sfc_main$1 = {
    __name: 'FileInputIcon',
    setup (__props) {
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(unref(render), {
                class: normalizeClass(_ctx.$style.icon)
            }, null, 8, [
                "class"
            ]);
        };
    }
};
const cssModules$1 = {
    "$style": style0$1
};
const FileInputIcon = /*#__PURE__*/ _export_sfc(_sfc_main$1, [
    [
        '__cssModules',
        cssModules$1
    ],
    [
        '__scopeId',
        "data-v-9e8e3935"
    ]
]);
_sfc_main$1.__docgenInfo = {"exportName":"default","displayName":"FileInputIcon","description":"","tags":{},"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/file-input/FileInputIcon.vue"]};

const previewList = "uc_preview-list_e30a70";
const preview = "uc_preview_5ebeb6";
const dark = "dark";
const icon = "uc_icon_baec64";
const style0 = {
	"preview-list": "uc_preview-list_e30a70",
	previewList: previewList,
	preview: preview,
	dark: dark,
	icon: icon
};

const _hoisted_1 = [
    "onClick"
];
const _sfc_main = {
    __name: 'FileInputPreview',
    props: {
        preview: {
            type: Object,
            required: true
        }
    },
    emits: {
        remove: String
    },
    setup (__props, { emit: __emit }) {
        const emit = __emit;
        function onRemove(name) {
            emit("remove", name);
        }
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("ul", {
                class: normalizeClass(_ctx.$style['preview-list'])
            }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.preview, (file, id)=>{
                    return openBlock(), createElementBlock("li", {
                        key: id,
                        class: normalizeClass(_ctx.$style.preview)
                    }, [
                        createTextVNode(toDisplayString(file.name) + " ", 1),
                        createBaseVNode("button", {
                            onClick: ($event)=>onRemove(id)
                        }, [
                            createVNode(unref(render$1), {
                                class: normalizeClass(_ctx.$style.icon)
                            }, null, 8, [
                                "class"
                            ])
                        ], 8, _hoisted_1)
                    ], 2);
                }), 128))
            ], 2);
        };
    }
};
const cssModules = {
    "$style": style0
};
const FileInputPreview = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__cssModules',
        cssModules
    ],
    [
        '__scopeId',
        "data-v-ca281eec"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"FileInputPreview","description":"","tags":{},"props":[{"name":"preview","type":{"name":"object"},"required":true}],"events":[{"name":"remove"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/file-input/FileInputPreview.vue"]};

export { FileInput as F, FileInputIcon as a, FileInputPreview as b };
