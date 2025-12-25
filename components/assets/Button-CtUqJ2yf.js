import { _ as _export_sfc, c as computed, f as openBlock, i as createBlock, j as withCtx, s as mergeProps, u as unref, x as resolveDynamicComponent, q as renderSlot, g as createElementBlock, h as createBaseVNode, m as normalizeClass, y as createCommentVNode } from './iframe-B-YMhJRM.js';

const __vite_import_meta_env__ = {"BASE_URL": "./", "DEV": false, "MODE": "production", "PROD": true, "SSR": false, "STORYBOOK": "true", "VITE_BUILD_TARGET": "desktop", "VITE_STORYBOOK_THEME": "tn"};
const _sfc_main = {
  __name: "Button",
  props: {
    as: {
      type: String,
      default: "button"
    },
    htmlType: {
      type: String,
      default: "button",
      validator: (value) => [
        "button",
        "submit",
        "reset"
      ].includes(value)
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
    type: {
      type: String,
      default: "primary",
      validator: (value) => [
        "primary",
        "secondary",
        "white",
        "round",
        "danger",
        "regular",
        "ghost",
        "ghost-accent",
        "warning",
        "default",
        "text-danger",
        "text-primary",
        "text-secondary",
        // Token system types
        "main",
        "second",
        "positive",
        "negative",
        "text",
        "text-negative"
      ].includes(value)
    },
    isProgress: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const { VITE_BUILD_TARGET } = __vite_import_meta_env__;
    const filteredAttrs = computed(() => {
      const attrs = {};
      if (props.as !== "a") {
        attrs.disabled = props.disabled || props.isProgress;
      }
      return attrs;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.as), mergeProps(filteredAttrs.value, {
        class: [
          [
            `btn-type-${__props.type}`,
            `btn-size-${__props.size}`,
            unref(VITE_BUILD_TARGET),
            {
              isProgress: __props.isProgress
            },
            {
              disabled: __props.disabled
            }
          ],
          "btn"
        ],
        type: __props.htmlType
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "leading", {}, () => [
            __props.isProgress ? (openBlock(), createElementBlock("svg", {
              key: 0,
              class: normalizeClass([
                [
                  [
                    "xs",
                    "sm"
                  ].includes(__props.size) ? "btn-icon-small" : "btn-icon-large"
                ],
                "btn-icon"
              ]),
              fill: "none",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg"
            }, _cache[0] || (_cache[0] = [
              createBaseVNode("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }, null, -1),
              createBaseVNode("path", {
                class: "opacity-75",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                fill: "currentColor"
              }, null, -1)
            ]), 2)) : createCommentVNode("", true)
          ], true),
          renderSlot(_ctx.$slots, "default", {}, void 0, true),
          renderSlot(_ctx.$slots, "trailing", {}, void 0, true)
        ]),
        _: 3
      }, 16, [
        "class",
        "type"
      ]);
    };
  }
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main, [
  [
    "__scopeId",
    "data-v-f0ae18d4"
  ]
]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Button", "description": "", "tags": {}, "props": [{ "name": "as", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"button"' } }, { "name": "htmlType", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"button"' }, "values": ["button", "submit", "reset"] }, { "name": "size", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"base"' }, "values": ["xs", "sm", "base", "l", "xl"] }, { "name": "type", "type": { "name": "string" }, "defaultValue": { "func": false, "value": '"primary"' }, "values": ["primary", "secondary", "white", "round", "danger", "regular", "ghost", "ghost-accent", "warning", "default", "text-danger", "text-primary", "text-secondary", "main", "second", "positive", "negative", "text", "text-negative"] }, { "name": "isProgress", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }, { "name": "disabled", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "false" } }], "slots": [{ "name": "leading" }, { "name": "default" }, { "name": "trailing" }], "sourceFiles": ["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/button/Button.vue"] };

export { Button as B };
