import { r as ref } from './iframe-B-YMhJRM.js';
import { S as SwitcherWithText } from './SwitcherWithText-DGKNliJy.js';
import './switch-DT6ond_T.js';
import './form-B5TVLiQV.js';
import './keyboard-Y5Ohh0Ec.js';
import './use-resolve-button-type-BRMzcgpv.js';

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
const SwitcherWithText_stories = {
    title: "Components/Switcher/SwitcherWithText",
    component: SwitcherWithText
};
const Template = (props)=>({
        components: {
            SwitcherWithText
        },
        setup () {
            const value = ref(false);
            return _object_spread_props(_object_spread({}, props), {
                value
            });
        },
        template: `
    <div class="box-sizing-border">
      <SwitcherWithText 
        v-model="value"
        :rightText="rightText"
        :leftText="leftText"
        :width="width"
      />
      <SwitcherWithText
          v-model="value"
          :rightText="rightText"
          :leftText="leftText"
          :width="width"
          :is-colourful="false"
      />
    </div>`
    });
const Default = Template.bind({});
Default.args = {
    rightText: "Open",
    leftText: "Close",
    width: 70
};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    SwitcherWithText\n  },\n  setup() {\n    const value = ref(false);\n    return {\n      ...props,\n      value\n    };\n  },\n  template: `\n    <div class=\"box-sizing-border\">\n      <SwitcherWithText \n        v-model=\"value\"\n        :rightText=\"rightText\"\n        :leftText=\"leftText\"\n        :width=\"width\"\n      />\n      <SwitcherWithText\n          v-model=\"value\"\n          :rightText=\"rightText\"\n          :leftText=\"leftText\"\n          :width=\"width\"\n          :is-colourful=\"false\"\n      />\n    </div>`\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, SwitcherWithText_stories as default };
