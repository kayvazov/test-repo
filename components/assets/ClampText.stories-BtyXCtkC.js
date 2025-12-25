import { C as ClampText } from './ClampText-pShlc9wm.js';
import './iframe-B-YMhJRM.js';
import './_commonjsHelpers-BFTU3MAI.js';

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
const ClampText_stories = {
    title: "Components/ClampText",
    component: ClampText
};
const Template = (args)=>({
        components: {
            ClampText
        },
        setup () {
            return _object_spread({}, args);
        },
        template: `
    <ClampText 
        clamp="2"
        content="
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ex id laboriosam maxime modi neque nesciunt provident suscipit! Cupiditate deleniti dignissimos doloremque fuga in inventore necessitatibus quo reiciendis tempore voluptate!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ex id laboriosam maxime modi neque nesciunt provident suscipit! Cupiditate deleniti dignissimos doloremque fuga in inventore necessitatibus quo reiciendis tempore voluptate!</p>
        "
    />

    <ClampText
        clamp="2"
        class="mt-5"
        is-html
        content="
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ex id laboriosam maxime modi neque nesciunt provident suscipit! Cupiditate deleniti dignissimos doloremque fuga in inventore necessitatibus quo reiciendis tempore voluptate!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ex id laboriosam maxime modi neque nesciunt provident suscipit! Cupiditate deleniti dignissimos doloremque fuga in inventore necessitatibus quo reiciendis tempore voluptate!</p>
        "
    />
  `
    });
const Default = Template.bind({});
Default.args = {};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    ClampText\n  },\n  setup() {\n    return {\n      ...args\n    };\n  },\n  template: `\n    <ClampText \n        clamp=\"2\"\n        content=\"\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ex id laboriosam maxime modi neque nesciunt provident suscipit! Cupiditate deleniti dignissimos doloremque fuga in inventore necessitatibus quo reiciendis tempore voluptate!</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ex id laboriosam maxime modi neque nesciunt provident suscipit! Cupiditate deleniti dignissimos doloremque fuga in inventore necessitatibus quo reiciendis tempore voluptate!</p>\n        \"\n    />\n\n    <ClampText\n        clamp=\"2\"\n        class=\"mt-5\"\n        is-html\n        content=\"\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ex id laboriosam maxime modi neque nesciunt provident suscipit! Cupiditate deleniti dignissimos doloremque fuga in inventore necessitatibus quo reiciendis tempore voluptate!</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ex id laboriosam maxime modi neque nesciunt provident suscipit! Cupiditate deleniti dignissimos doloremque fuga in inventore necessitatibus quo reiciendis tempore voluptate!</p>\n        \"\n    />\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, ClampText_stories as default };
