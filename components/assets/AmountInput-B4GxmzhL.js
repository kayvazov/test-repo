import { _ as _export_sfc, r as ref, c as computed, e as watch, f as openBlock, i as createBlock, V as createSlots, j as withCtx, s as mergeProps, q as renderSlot, g as createElementBlock, h as createBaseVNode, l as createVNode, u as unref, y as createCommentVNode, n as nextTick } from './iframe-B-YMhJRM.js';
import { A as AMOUNT_OPTIONS, u as useMask } from './useMask-G9TE6bCD.js';
import { F as FormField } from './FormField-DC7p7h4Z.js';
import { C as ChevronUpIcon, a as ChevronDownIcon } from './ChevronDownIcon-CrpolITG.js';

const __vite_import_meta_env__ = {"BASE_URL": "./", "DEV": false, "MODE": "production", "PROD": true, "SSR": false, "STORYBOOK": "true", "VITE_BUILD_TARGET": "desktop", "VITE_STORYBOOK_THEME": "tn"};
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _async_to_generator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
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
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _define_property(target, key, source[key]);
    });
  }
  return target;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _object_spread_props(target, source) {
  source = source != null ? source : {};
  if (Object.getOwnPropertyDescriptors) {
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
  } else {
    ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
const _hoisted_1 = {
  key: 0,
  class: "stepper"
};
const _sfc_main = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "AmountInput",
  props: _object_spread_props(_object_spread({}, FormField.props), {
    options: {
      type: Object,
      default: () => ({})
    },
    withStepper: {
      type: Boolean,
      default: false
    }
  }),
  emits: {
    "update:modelValue": null,
    "update:maskedValue": null,
    // For "mobile" target (Vue 2)
    "update:model-value": null,
    "update:masked-value": null
  },
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { VITE_BUILD_TARGET } = __vite_import_meta_env__;
    const formFieldRef = ref(null);
    const isStepperVisible = computed(() => props.withStepper && props.options.step !== 0);
    const options = _object_spread({}, AMOUNT_OPTIONS, props.options);
    const roundedValue = computed(() => {
      let result = props.modelValue;
      const { scale } = options;
      if (result && ![
        null,
        void 0
      ].includes(scale)) {
        result = Number(result).toFixed(scale);
      }
      return result;
    });
    const { value, maskedValue, setValue, updateOptions } = useMask(formFieldRef, options, roundedValue.value);
    function handleStepUp() {
      const { step = 1 } = props.options;
      value.value = String(+value.value + step);
      setValue(value.value);
    }
    function handleStepDown() {
      const { step = 1 } = props.options;
      value.value = String(+value.value - step);
      setValue(value.value);
    }
    watch(roundedValue, setValue);
    watch(() => props.options, updateOptions);
    watch(value, /* @__PURE__ */ _async_to_generator(function* () {
      if (VITE_BUILD_TARGET === "mobile") {
        emit("update:model-value", value.value);
        emit("update:masked-value", maskedValue.value);
      } else {
        emit("update:modelValue", value.value);
        emit("update:maskedValue", maskedValue.value);
      }
      yield nextTick();
      if (props.modelValue === value.value) {
        return;
      }
      setValue(roundedValue.value);
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(FormField, mergeProps({
        ref_key: "formFieldRef",
        ref: formFieldRef,
        "is-error": _ctx.isError,
        "is-masked": true,
        size: _ctx.size,
        trailing: _ctx.trailing,
        inputmode: "decimal"
      }, _ctx.$attrs), createSlots({
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true),
          isStepperVisible.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("button", {
              class: "step-button",
              type: "button",
              onClick: handleStepUp
            }, [
              createVNode(unref(ChevronUpIcon))
            ]),
            createBaseVNode("button", {
              class: "step-button",
              type: "button",
              onClick: handleStepDown
            }, [
              createVNode(unref(ChevronDownIcon))
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 2
      }, [
        _ctx.$slots.label ? {
          name: "label",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "label", {}, void 0, true)
          ]),
          key: "0"
        } : void 0,
        _ctx.$slots.trailing ? {
          name: "trailing",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "trailing", {}, void 0, true)
          ]),
          key: "1"
        } : void 0,
        _ctx.$slots.error ? {
          name: "error",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "error", {}, void 0, true)
          ]),
          key: "2"
        } : void 0
      ]), 1040, [
        "is-error",
        "size",
        "trailing"
      ]);
    };
  }
});
const AmountInput = /* @__PURE__ */ _export_sfc(_sfc_main, [
  [
    "__scopeId",
    "data-v-c7eb6ac7"
  ]
]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "AmountInput", "description": "", "tags": {}, "props": [{ "name": "options", "type": { "name": "object" }, "defaultValue": { "func": false, "value": "{}" } }, { "name": "withStepper", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }], "events": [{ "name": "update:modelValue" }, { "name": "update:maskedValue" }, { "name": "update:model-value" }, { "name": "update:masked-value" }], "slots": [{ "name": "label" }, { "name": "trailing" }, { "name": "error" }, { "name": "default" }], "sourceFiles": ["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/amount-input/AmountInput.vue"] };

export { AmountInput as A };
