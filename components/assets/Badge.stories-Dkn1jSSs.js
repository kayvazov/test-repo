import { B as Badge, T as THEMES, S as SIZES } from './Badge-BEx1WZDd.js';
import './iframe-B-YMhJRM.js';

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
const Badge_stories = {
    title: "Components/Badge",
    component: Badge
};
const Template = (args)=>({
        components: {
            Badge
        },
        setup () {
            return _object_spread({
                THEMES,
                SIZES
            }, args);
        },
        template: `
    <section class="mt-6">
      <div class="mt-3 flex items-end gap-3" v-for="(theme) in THEMES">
        <Badge
            v-for="(size, sizeIndex) in SIZES"
            :key="sizeIndex"
            :size="size"
            :theme="theme"
            :class="theme === 'custom' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : ''"
        >
          Badge ({{ theme }}, {{ size }})
        </Badge>
      </div>
    </section>
  `
    });
const Default = Template.bind({});
Default.args = {};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Badge\n  },\n  setup() {\n    return {\n      THEMES,\n      SIZES,\n      ...args\n    };\n  },\n  template: `\n    <section class=\"mt-6\">\n      <div class=\"mt-3 flex items-end gap-3\" v-for=\"(theme) in THEMES\">\n        <Badge\n            v-for=\"(size, sizeIndex) in SIZES\"\n            :key=\"sizeIndex\"\n            :size=\"size\"\n            :theme=\"theme\"\n            :class=\"theme === 'custom' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : ''\"\n        >\n          Badge ({{ theme }}, {{ size }})\n        </Badge>\n      </div>\n    </section>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, Badge_stories as default };
