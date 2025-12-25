import { _ as _export_sfc, f as openBlock, g as createElementBlock, q as renderSlot, h as createBaseVNode, m as normalizeClass, y as createCommentVNode } from './iframe-B-YMhJRM.js';

const __vite_import_meta_env__ = {"BASE_URL": "./", "DEV": false, "MODE": "production", "PROD": true, "SSR": false, "STORYBOOK": "true", "VITE_BUILD_TARGET": "desktop", "VITE_STORYBOOK_THEME": "tn"};
const _hoisted_1$1 = {
  class: "textarea-wrapper"
};
const _hoisted_2 = [
  "model-value",
  "placeholder",
  "rows",
  "value"
];
const _hoisted_3 = {
  key: 0,
  class: "error-message"
};
const _sfc_main$1 = {
  __name: "FormTextarea",
  props: {
    modelValue: {
      type: String,
      required: true
    },
    rows: {
      type: String,
      default: "8"
    },
    isError: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "base",
      validator: (value) => [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
      ].includes(value)
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  emits: {
    "update:modelValue": String,
    // For "mobile" target (Vue 2)
    "update:model-value": String
  },
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { VITE_BUILD_TARGET } = __vite_import_meta_env__;
    function onInput(e) {
      if (VITE_BUILD_TARGET === "mobile") {
        emit("update:model-value", e.target.value);
      } else {
        emit("update:modelValue", e.target.value);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("textarea", {
            class: normalizeClass([
              {
                "is-error": __props.isError,
                [`textarea-size-${__props.size}`]: __props.size
              },
              "textarea"
            ]),
            "model-value": __props.modelValue,
            placeholder: __props.placeholder,
            rows: __props.rows,
            value: __props.modelValue,
            onInput
          }, null, 42, _hoisted_2)
        ]),
        __props.isError && _ctx.$slots.error ? (openBlock(), createElementBlock("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "error", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
const FormTextarea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [
  [
    "__scopeId",
    "data-v-c29ebe1b"
  ]
]);
_sfc_main$1.__docgenInfo = { "exportName": "default", "displayName": "FormTextarea", "description": "", "tags": {}, "props": [{ "name": "modelValue", "type": { "name": "string" }, "required": true }, { "name": "rows", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"8"' } }, { "name": "isError", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "size", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"base"' }, "values": ["xs", "sm", "base", "l", "xl"] }, { "name": "placeholder", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "events": [{ "name": "update:modelValue" }, { "name": "update:model-value" }], "slots": [{ "name": "default" }, { "name": "error" }], "sourceFiles": ["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/form-textarea/FormTextarea.vue"] };

const _sfc_main = {};
const _hoisted_1 = {
    class: "textarea-label"
};
function _sfc_render(_ctx, _cache) {
    return openBlock(), createElementBlock("label", _hoisted_1, [
        renderSlot(_ctx.$slots, "default", {}, undefined, true)
    ]);
}
const FormTextareaLabel = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        'render',
        _sfc_render
    ],
    [
        '__scopeId',
        "data-v-de0511fc"
    ]
]);
_sfc_main.__docgenInfo = {"displayName":"FormTextareaLabel","description":"","tags":{},"slots":[{"name":"default"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/form-textarea/FormTextareaLabel.vue"]};

export { FormTextarea as F, FormTextareaLabel as a };
