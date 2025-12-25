import { R as Radio } from './Radio-BPg1-YTu.js';
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
const Radio_stories = {
    title: "Components/Radio",
    component: Radio
};
const Template = (props)=>({
        components: {
            Radio
        },
        setup () {
            return _object_spread({}, props);
        },
        template: `
    <section class="space-y-4">
        <Radio name="notification-method1" name-group="notification-method">Email</Radio>
        <Radio name="notification-method2" name-group="notification-method">Phone (SMS)</Radio>
        <Radio name="notification-method3" name-group="notification-method">Push notification</Radio>
    </section>
  `
    });
const Default = Template.bind({});
Default.args = {};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Radio\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `\n    <section class=\"space-y-4\">\n        <Radio name=\"notification-method1\" name-group=\"notification-method\">Email</Radio>\n        <Radio name=\"notification-method2\" name-group=\"notification-method\">Phone (SMS)</Radio>\n        <Radio name=\"notification-method3\" name-group=\"notification-method\">Push notification</Radio>\n    </section>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, Radio_stories as default };
