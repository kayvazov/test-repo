import { P as ProgressBar } from './ProgressBar-BqQIwWuq.js';
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
var _Default_parameters, _Default_parameters_docs, _Default_parameters1, _CustomColors_parameters, _CustomColors_parameters_docs, _CustomColors_parameters1;
const ProgressBar_stories = {
    title: "Components/ProgressBar",
    component: ProgressBar
};
const Template = (args)=>({
        components: {
            ProgressBar
        },
        setup () {
            return _object_spread({}, args);
        },
        template: "<div class='mb-2' v-for='percent in percents'>{{ percent }}<ProgressBar :percent='percent' :colors='colors' /></div>"
    });
const percents = Array.from(Array(11)).map((_, index)=>index * 10);
const Default = Template.bind({});
Default.args = {
    percents
};
const CustomColors = Template.bind({});
CustomColors.args = {
    percents,
    colors: [
        "bg-green-500"
    ]
};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    ProgressBar\n  },\n  setup() {\n    return {\n      ...args\n    };\n  },\n  template: \"<div class='mb-2' v-for='percent in percents'>{{ percent }}<ProgressBar :percent='percent' :colors='colors' /></div>\"\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
CustomColors.parameters = _object_spread_props(_object_spread({}, CustomColors.parameters), {
    docs: _object_spread_props(_object_spread({}, (_CustomColors_parameters = CustomColors.parameters) === null || _CustomColors_parameters === void 0 ? void 0 : _CustomColors_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    ProgressBar\n  },\n  setup() {\n    return {\n      ...args\n    };\n  },\n  template: \"<div class='mb-2' v-for='percent in percents'>{{ percent }}<ProgressBar :percent='percent' :colors='colors' /></div>\"\n})"
        }, (_CustomColors_parameters1 = CustomColors.parameters) === null || _CustomColors_parameters1 === void 0 ? void 0 : (_CustomColors_parameters_docs = _CustomColors_parameters1.docs) === null || _CustomColors_parameters_docs === void 0 ? void 0 : _CustomColors_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default","CustomColors"];

export { CustomColors, Default, __namedExportsOrder, ProgressBar_stories as default };
