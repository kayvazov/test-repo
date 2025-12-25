import { T as TextMark } from './TextMark-DHD5g9tQ.js';
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
const TextMark_stories = {
    title: "Components/TextMark",
    component: TextMark
};
const Template = (props)=>({
        components: {
            TextMark
        },
        setup () {
            return _object_spread({}, props);
        },
        template: `
    <div class="space-y-3">
      <TextMark
          v-for="({ text, searchText }, index) in examples"
          :key="index"
          as="p"
          :text="text"
          :search-text="searchText"
      />
    </div>
  `
    });
const Default = Template.bind({});
Default.args = {
    examples: [
        {
            text: "Lorem ipsum dolor sit amet",
            searchText: "or s"
        },
        {
            text: "+AMD.19SEP2025.P157.5",
            searchText: "+AM"
        }
    ]
};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    TextMark\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `\n    <div class=\"space-y-3\">\n      <TextMark\n          v-for=\"({ text, searchText }, index) in examples\"\n          :key=\"index\"\n          as=\"p\"\n          :text=\"text\"\n          :search-text=\"searchText\"\n      />\n    </div>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, TextMark_stories as default };
