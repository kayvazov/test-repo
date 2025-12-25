import { f as openBlock, g as createElementBlock, h as createBaseVNode, r as ref } from './iframe-B-YMhJRM.js';
import { S as Select } from './Select-BrvdAO34.js';
import { T as Tooltip, P as PLACEMENTS, a as TYPES } from './Tooltip-CW07EFtD.js';
import { r as render$1 } from './CheckCircleIcon-D4s67Pui.js';
import './listbox-xfprdXMl.js';
import './form-B5TVLiQV.js';
import './keyboard-Y5Ohh0Ec.js';
import './open-closed-n-oNVJpd.js';
import './focus-management-CfDY3olH.js';
import './use-resolve-button-type-BRMzcgpv.js';
import './calculate-active-index-BtXYA8d0.js';

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
      d: "m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
    })
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
const Tooltip_stories = {
    title: "Components/Tooltip",
    component: Tooltip
};
const Template = (props)=>({
        components: {
            Tooltip,
            Select,
            CubeIcon: render,
            CheckCircleIcon: render$1
        },
        setup () {
            const placementVariants = PLACEMENTS.map((item)=>{
                return {
                    value: item,
                    label: item
                };
            });
            const typeVariants = TYPES.map((item)=>{
                return {
                    value: item,
                    label: item
                };
            });
            const placement = ref(placementVariants[0]);
            const type = ref(typeVariants[0]);
            return _object_spread({
                placement,
                type,
                placementVariants,
                typeVariants
            }, props);
        },
        template: `
    <section>
      <div class="grid grid-cols-2 gap-4 mt-6">
        <Select is-native v-model="placement" class="mb-4 lg:mb-6">
          <template #label>
            Placement
          </template>
          <template #options>
            <option
                v-for="item in placementVariants"
                :key="item"
                :value="item.value"
                class="flex items-center"
            >
              {{ item.label }}
            </option>
          </template>
        </Select>
        <Select is-native v-model="type" class="mb-4 lg:mb-6">
          <template #label>
            Type
          </template>
          <template #options>
            <option
                v-for="item in typeVariants"
                :key="item"
                :value="item.value"
                class="flex items-center"
            >
              {{ item.label }}
            </option>
          </template>
        </Select>
      </div>
  
      <div class="flex justify-center items-center my-40">
        <Tooltip :type="type.value" :placement="placement.value">
          <template #icon>
            <CheckCircleIcon class="w-5 h-5 mr-3 flex-shrink-0" />
          </template>
          <template #trigger>
            <CubeIcon class="w-32 h-32 text-green-500"/>
          </template>

          Текст тултипа
        </Tooltip>
      </div>
    </section>
  `
    });
const Default = Template.bind({});
Default.args = {};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Tooltip,\n    Select,\n    CubeIcon,\n    CheckCircleIcon\n  },\n  setup() {\n    const placementVariants = PLACEMENTS.map(item => {\n      return {\n        value: item,\n        label: item\n      };\n    });\n    const typeVariants = TYPES.map(item => {\n      return {\n        value: item,\n        label: item\n      };\n    });\n    const placement = ref(placementVariants[0]);\n    const type = ref(typeVariants[0]);\n    return {\n      placement,\n      type,\n      placementVariants,\n      typeVariants,\n      ...props\n    };\n  },\n  template: `\n    <section>\n      <div class=\"grid grid-cols-2 gap-4 mt-6\">\n        <Select is-native v-model=\"placement\" class=\"mb-4 lg:mb-6\">\n          <template #label>\n            Placement\n          </template>\n          <template #options>\n            <option\n                v-for=\"item in placementVariants\"\n                :key=\"item\"\n                :value=\"item.value\"\n                class=\"flex items-center\"\n            >\n              {{ item.label }}\n            </option>\n          </template>\n        </Select>\n        <Select is-native v-model=\"type\" class=\"mb-4 lg:mb-6\">\n          <template #label>\n            Type\n          </template>\n          <template #options>\n            <option\n                v-for=\"item in typeVariants\"\n                :key=\"item\"\n                :value=\"item.value\"\n                class=\"flex items-center\"\n            >\n              {{ item.label }}\n            </option>\n          </template>\n        </Select>\n      </div>\n  \n      <div class=\"flex justify-center items-center my-40\">\n        <Tooltip :type=\"type.value\" :placement=\"placement.value\">\n          <template #icon>\n            <CheckCircleIcon class=\"w-5 h-5 mr-3 flex-shrink-0\" />\n          </template>\n          <template #trigger>\n            <CubeIcon class=\"w-32 h-32 text-green-500\"/>\n          </template>\n\n          \u0422\u0435\u043A\u0441\u0442 \u0442\u0443\u043B\u0442\u0438\u043F\u0430\n        </Tooltip>\n      </div>\n    </section>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, Tooltip_stories as default };
