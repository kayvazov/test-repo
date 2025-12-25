import { _ as _export_sfc, r as ref, c as computed, f as openBlock, g as createElementBlock, m as normalizeClass, q as renderSlot, y as createCommentVNode, h as createBaseVNode, s as mergeProps, u as unref, A as toDisplayString } from './iframe-B-YMhJRM.js';

const formFieldInput = "uc_form-field-input_7b4c29";
const dark = "dark";
const isError = "uc_is-error_e79f9b";
const formFieldInputSizeXs = "uc_form-field-input-size-xs_598af9";
const formFieldInputSizeSm = "uc_form-field-input-size-sm_5286d8";
const formFieldInputSizeBase = "uc_form-field-input-size-base_966566";
const formFieldInputSizeL = "uc_form-field-input-size-l_dc6a6c";
const formFieldInputSizeXl = "uc_form-field-input-size-xl_1d9234";
const desktop = "uc_desktop_b2c79a";
const mobile = "uc_mobile_532c28";
const label = "uc_label_d304ba";
const wrapper = "uc_wrapper_7c2753";
const error = "uc_error_cb5e10";
const trailing = "uc_trailing_d1b15a";
const trailingSizeXs = "uc_trailing-size-xs_1e91a4";
const trailingSizeSm = "uc_trailing-size-sm_f44bef";
const trailingSizeBase = "uc_trailing-size-base_706020";
const trailingSizeL = "uc_trailing-size-l_5ccbf3";
const trailingSizeXl = "uc_trailing-size-xl_21daaa";
const style0 = {
	"form-field-input": "uc_form-field-input_7b4c29",
	formFieldInput: formFieldInput,
	dark: dark,
	"is-error": "uc_is-error_e79f9b",
	isError: isError,
	"form-field-input-size-xs": "uc_form-field-input-size-xs_598af9",
	formFieldInputSizeXs: formFieldInputSizeXs,
	"form-field-input-size-sm": "uc_form-field-input-size-sm_5286d8",
	formFieldInputSizeSm: formFieldInputSizeSm,
	"form-field-input-size-base": "uc_form-field-input-size-base_966566",
	formFieldInputSizeBase: formFieldInputSizeBase,
	"form-field-input-size-l": "uc_form-field-input-size-l_dc6a6c",
	formFieldInputSizeL: formFieldInputSizeL,
	"form-field-input-size-xl": "uc_form-field-input-size-xl_1d9234",
	formFieldInputSizeXl: formFieldInputSizeXl,
	desktop: desktop,
	mobile: mobile,
	label: label,
	wrapper: wrapper,
	error: error,
	trailing: trailing,
	"trailing-size-xs": "uc_trailing-size-xs_1e91a4",
	trailingSizeXs: trailingSizeXs,
	"trailing-size-sm": "uc_trailing-size-sm_f44bef",
	trailingSizeSm: trailingSizeSm,
	"trailing-size-base": "uc_trailing-size-base_706020",
	trailingSizeBase: trailingSizeBase,
	"trailing-size-l": "uc_trailing-size-l_5ccbf3",
	trailingSizeL: trailingSizeL,
	"trailing-size-xl": "uc_trailing-size-xl_21daaa",
	trailingSizeXl: trailingSizeXl
};

const __vite_import_meta_env__ = {"BASE_URL": "./", "DEV": false, "MODE": "production", "PROD": true, "SSR": false, "STORYBOOK": "true", "VITE_BUILD_TARGET": "desktop", "VITE_STORYBOOK_THEME": "tn"};
function _define_property(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _object_spread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _define_property(target, key, source[key]);
    });
  }
  return target;
}
const _hoisted_1 = [
  "value"
];
const _sfc_main = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "FormField",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    isError: {
      type: Boolean,
      default: false
    },
    isMasked: {
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
    trailing: {
      type: String,
      default: ""
    }
  },
  emits: {
    "update:modelValue": null,
    // For "mobile" target (Vue 2)
    "update:model-value": null
  },
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { VITE_BUILD_TARGET } = __vite_import_meta_env__;
    const trailingRef = ref(null);
    const offsetWidth = computed(() => {
      var _trailingRef_value;
      return ((_trailingRef_value = trailingRef.value) === null || _trailingRef_value === void 0 ? void 0 : _trailingRef_value.offsetWidth) || 0;
    });
    function onInput(e) {
      const { value } = e.target;
      if (VITE_BUILD_TARGET === "mobile") {
        emit("update:model-value", value);
      } else {
        emit("update:modelValue", value);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _ctx.$slots.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          class: normalizeClass(_ctx.$style.label)
        }, [
          renderSlot(_ctx.$slots, "label", {}, void 0, true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.wrapper)
        }, [
          __props.isMasked ? (openBlock(), createElementBlock("input", mergeProps({
            key: 0
          }, _object_spread({
            type: "text"
          }, _ctx.$attrs), {
            class: [
              _ctx.$style.formFieldInput,
              _ctx.$style[unref(VITE_BUILD_TARGET)],
              {
                [_ctx.$style.isError]: __props.isError,
                [_ctx.$style[`form-field-input-size-${__props.size}`]]: __props.size
              }
            ],
            style: {
              paddingRight: __props.trailing ? `${offsetWidth.value}px` : null
            }
          }), null, 16)) : (openBlock(), createElementBlock("input", mergeProps({
            key: 1
          }, _object_spread({
            type: "text"
          }, _ctx.$attrs), {
            class: [
              _ctx.$style.formFieldInput,
              _ctx.$style[unref(VITE_BUILD_TARGET)],
              {
                [_ctx.$style.isError]: __props.isError,
                [_ctx.$style[`form-field-input-size-${__props.size}`]]: __props.size
              }
            ],
            style: {
              paddingRight: __props.trailing ? `${offsetWidth.value}px` : null
            },
            value: __props.modelValue,
            onInput
          }), null, 16, _hoisted_1)),
          renderSlot(_ctx.$slots, "default", {}, void 0, true),
          renderSlot(_ctx.$slots, "trailing", {}, () => [
            __props.trailing ? (openBlock(), createElementBlock("span", {
              key: 0,
              ref_key: "trailingRef",
              ref: trailingRef,
              class: normalizeClass({
                [_ctx.$style.trailing]: true,
                [_ctx.$style[`trailing-size-${__props.size}`]]: __props.size
              })
            }, toDisplayString(__props.trailing), 3)) : createCommentVNode("", true)
          ], true)
        ], 2),
        __props.isError && _ctx.$slots.error ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.error)
        }, [
          renderSlot(_ctx.$slots, "error", {}, void 0, true)
        ], 2)) : createCommentVNode("", true)
      ]);
    };
  }
});
const cssModules = {
  "$style": style0
};
const FormField = /* @__PURE__ */ _export_sfc(_sfc_main, [
  [
    "__cssModules",
    cssModules
  ],
  [
    "__scopeId",
    "data-v-4c2bf4e9"
  ]
]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "FormField", "description": "", "tags": {}, "props": [{ "name": "modelValue", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }, { "name": "isError", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "isMasked", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "size", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"base"' }, "values": ["xs", "sm", "base", "l", "xl"] }, { "name": "trailing", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '""' } }], "events": [{ "name": "update:modelValue" }, { "name": "update:model-value" }], "slots": [{ "name": "label" }, { "name": "default" }, { "name": "trailing" }, { "name": "error" }], "sourceFiles": ["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/form-field/FormField.vue"] };

export { FormField as F };
