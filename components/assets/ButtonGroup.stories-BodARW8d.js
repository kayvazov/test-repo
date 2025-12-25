import { B as Button } from './Button-CtUqJ2yf.js';
import { B as ButtonGroup } from './ButtonGroup-D41YfLMb.js';
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
const ButtonGroup_stories = {
    title: "Components/ButtonGroup",
    component: ButtonGroup
};
const Template = (args)=>({
        components: {
            ButtonGroup,
            Button
        },
        setup () {
            const buttons = Array(5);
            return _object_spread_props(_object_spread({}, args), {
                buttons
            });
        },
        template: `
    <ButtonGroup
        class="border border-gray-300 dark:border-gray-700 drop-shadow-sm"
    >
      <Button v-for="(button, index) in buttons" :key="index" type="white">
        Button {{ index }}
      </Button>
    </ButtonGroup>
  `
    });
const Default = Template.bind({});
Default.args = {};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    ButtonGroup,\n    Button\n  },\n  setup() {\n    const buttons = Array(5);\n    return {\n      ...args,\n      buttons\n    };\n  },\n  template: `\n    <ButtonGroup\n        class=\"border border-gray-300 dark:border-gray-700 drop-shadow-sm\"\n    >\n      <Button v-for=\"(button, index) in buttons\" :key=\"index\" type=\"white\">\n        Button {{ index }}\n      </Button>\n    </ButtonGroup>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, ButtonGroup_stories as default };
