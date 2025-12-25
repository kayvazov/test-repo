import { _ as _export_sfc, f as openBlock, g as createElementBlock, q as renderSlot, m as normalizeClass, u as unref } from './iframe-B-YMhJRM.js';

const __vite_import_meta_env__ = {"BASE_URL": "./", "DEV": false, "MODE": "production", "PROD": true, "SSR": false, "STORYBOOK": "true", "VITE_BUILD_TARGET": "desktop", "VITE_STORYBOOK_THEME": "tn"};
const THEMES = [
  "green-light",
  "gray",
  "gray-light",
  "green",
  "blue",
  "red-light",
  "blue-static",
  "custom"
];
const SIZES = [
  "base",
  "xs"
];
const { VITE_BUILD_TARGET } = __vite_import_meta_env__;
const _sfc_main = {
  __name: "Badge",
  props: {
    theme: {
      type: String,
      default: THEMES[0],
      validator: (value) => THEMES.includes(value)
    },
    size: {
      type: String,
      default: SIZES[0],
      validator: (value) => SIZES.includes(value)
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass([
          `badge-theme-${__props.theme} badge-size-${__props.size} ${unref(VITE_BUILD_TARGET)}`,
          "badge"
        ])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
};
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main, [
  [
    "__scopeId",
    "data-v-73c3c3e3"
  ]
]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Badge", "description": "", "tags": {}, "props": [{ "name": "theme", "type": { "name": "string" }, "defaultValue": { "func": false, "value": "THEMES[0]" }, "values": ["green-light", "gray", "gray-light", "green", "blue", "red-light", "blue-static", "custom"] }, { "name": "size", "type": { "name": "string" }, "defaultValue": { "func": false, "value": "SIZES[0]" }, "values": ["base", "xs"] }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/badge/Badge.vue"] };

export { Badge as B, SIZES as S, THEMES as T };
