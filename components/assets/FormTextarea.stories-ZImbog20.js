import { a as reactive } from './iframe-B-YMhJRM.js';
import { F as FormTextarea, a as FormTextareaLabel } from './FormTextareaLabel-C-Ky4ZoC.js';

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
const FormTextarea_stories = {
    title: "Components/FormTextarea",
    component: FormTextarea
};
const Template = (props)=>({
        components: {
            FormTextarea,
            FormTextareaLabel
        },
        setup () {
            const state = reactive({
                value: ""
            });
            return _object_spread_props(_object_spread({}, props), {
                state
            });
        },
        template: `
    <FormTextarea v-model="state.value">
      <FormTextareaLabel>
        Комментарий
      </FormTextareaLabel>
    </FormTextarea>
  `
    });
const Default = Template.bind({});
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    FormTextarea,\n    FormTextareaLabel\n  },\n  setup() {\n    const state = reactive({\n      value: \"\"\n    });\n    return {\n      ...props,\n      state\n    };\n  },\n  template: `\n    <FormTextarea v-model=\"state.value\">\n      <FormTextareaLabel>\n        \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439\n      </FormTextareaLabel>\n    </FormTextarea>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, FormTextarea_stories as default };
