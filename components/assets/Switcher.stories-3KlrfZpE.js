import { f as openBlock, g as createElementBlock, h as createBaseVNode, r as ref } from './iframe-B-YMhJRM.js';
import { S as Switcher } from './Switcher-Bt8YX7H1.js';
import './switch-DT6ond_T.js';
import './form-B5TVLiQV.js';
import './keyboard-Y5Ohh0Ec.js';
import './use-resolve-button-type-BRMzcgpv.js';

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z",
      "clip-rule": "evenodd"
    })
  ]))
}

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", { d: "M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" })
  ]))
}

function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
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
    for(var i = 1; i < arguments.length; i++){
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
var _Default_parameters, _Default_parameters_docs, _Default_parameters1;
const Switcher_stories = {
    title: "Components/Switcher/DefaultSwitcher",
    component: Switcher
};
const Template = (props)=>({
        components: {
            Switcher,
            MoonIcon: render$1,
            SunIcon: render
        },
        setup () {
            const value = ref(false);
            return _object_spread_props(_object_spread({}, props), {
                value
            });
        },
        template: `
    <div class="box-sizing-border"><Switcher v-model="value"/></div>

    <Switcher v-model="value">
      <template #leading>
        <span class="absolute top-1/2 -translate-y-1/2 left-1">
          <SunIcon class="m-auto w-3.5 h-3.5 text-white" />
        </span>
      </template>
      <template #trailing>
        <span class="absolute top-1/2 -translate-y-1/2 right-1">
          <MoonIcon class="m-auto w-3.5 h-3.5 text-gray-400" />
        </span>
      </template>
    </Switcher>
  `
    });
const Default = Template.bind({});
Default.args = {};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Switcher,\n    MoonIcon,\n    SunIcon\n  },\n  setup() {\n    const value = ref(false);\n    return {\n      ...props,\n      value\n    };\n  },\n  template: `\n    <div class=\"box-sizing-border\"><Switcher v-model=\"value\"/></div>\n\n    <Switcher v-model=\"value\">\n      <template #leading>\n        <span class=\"absolute top-1/2 -translate-y-1/2 left-1\">\n          <SunIcon class=\"m-auto w-3.5 h-3.5 text-white\" />\n        </span>\n      </template>\n      <template #trailing>\n        <span class=\"absolute top-1/2 -translate-y-1/2 right-1\">\n          <MoonIcon class=\"m-auto w-3.5 h-3.5 text-gray-400\" />\n        </span>\n      </template>\n    </Switcher>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, Switcher_stories as default };
