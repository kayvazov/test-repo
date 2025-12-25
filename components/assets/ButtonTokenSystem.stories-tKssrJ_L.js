import { B as Button } from './Button-CtUqJ2yf.js';
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
var _Main_parameters, _Main_parameters_docs, _Main_parameters1, _Second_parameters, _Second_parameters_docs, _Second_parameters1, _Positive_parameters, _Positive_parameters_docs, _Positive_parameters1, _Negative_parameters, _Negative_parameters_docs, _Negative_parameters1, _Text_parameters, _Text_parameters_docs, _Text_parameters1, _NegativeText_parameters, _NegativeText_parameters_docs, _NegativeText_parameters1;
const ButtonTokenSystem_stories = {
    title: "Components/Button/Token system",
    component: Button,
    argTypes: {
        size: {
            control: {
                type: "radio"
            },
            options: [
                "default",
                "small",
                "large"
            ]
        },
        theme: {
            control: {
                type: "radio"
            },
            options: [
                "default"
            ]
        },
        as: {
            control: {
                type: "radio"
            },
            options: [
                "button",
                "a"
            ]
        }
    }
};
const Template = (props)=>({
        components: {
            Button
        },
        setup () {
            return _object_spread({}, props);
        },
        template: `<Button 
      v-for="size in sizes"
      v-bind="attrs"
      :as="as"
      :size="size" 
      :type="type" 
      :is-progress="isProgress" 
      :disabled="disabled"
      class="m-4"
    > 
      {{ label }} 
    </Button>`
    });
const Main = Template.bind({});
Main.args = {
    label: "Main button",
    as: "button",
    type: "main",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ]
};
const Second = Template.bind({});
Second.args = {
    label: "Second button",
    as: "button",
    type: "second",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ]
};
const Positive = Template.bind({});
Positive.args = {
    label: "Positive button",
    as: "button",
    type: "positive",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ]
};
const Negative = Template.bind({});
Negative.args = {
    label: "Negative button",
    as: "button",
    type: "negative",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ]
};
const Text = Template.bind({});
Text.args = {
    label: "Text button",
    as: "button",
    type: "text",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ]
};
const NegativeText = Template.bind({});
NegativeText.args = {
    label: "Negative text",
    as: "button",
    type: "text-negative",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ]
};
Main.parameters = _object_spread_props(_object_spread({}, Main.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Main_parameters = Main.parameters) === null || _Main_parameters === void 0 ? void 0 : _Main_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_Main_parameters1 = Main.parameters) === null || _Main_parameters1 === void 0 ? void 0 : (_Main_parameters_docs = _Main_parameters1.docs) === null || _Main_parameters_docs === void 0 ? void 0 : _Main_parameters_docs.source)
    })
});
Second.parameters = _object_spread_props(_object_spread({}, Second.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Second_parameters = Second.parameters) === null || _Second_parameters === void 0 ? void 0 : _Second_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_Second_parameters1 = Second.parameters) === null || _Second_parameters1 === void 0 ? void 0 : (_Second_parameters_docs = _Second_parameters1.docs) === null || _Second_parameters_docs === void 0 ? void 0 : _Second_parameters_docs.source)
    })
});
Positive.parameters = _object_spread_props(_object_spread({}, Positive.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Positive_parameters = Positive.parameters) === null || _Positive_parameters === void 0 ? void 0 : _Positive_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_Positive_parameters1 = Positive.parameters) === null || _Positive_parameters1 === void 0 ? void 0 : (_Positive_parameters_docs = _Positive_parameters1.docs) === null || _Positive_parameters_docs === void 0 ? void 0 : _Positive_parameters_docs.source)
    })
});
Negative.parameters = _object_spread_props(_object_spread({}, Negative.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Negative_parameters = Negative.parameters) === null || _Negative_parameters === void 0 ? void 0 : _Negative_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_Negative_parameters1 = Negative.parameters) === null || _Negative_parameters1 === void 0 ? void 0 : (_Negative_parameters_docs = _Negative_parameters1.docs) === null || _Negative_parameters_docs === void 0 ? void 0 : _Negative_parameters_docs.source)
    })
});
Text.parameters = _object_spread_props(_object_spread({}, Text.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Text_parameters = Text.parameters) === null || _Text_parameters === void 0 ? void 0 : _Text_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_Text_parameters1 = Text.parameters) === null || _Text_parameters1 === void 0 ? void 0 : (_Text_parameters_docs = _Text_parameters1.docs) === null || _Text_parameters_docs === void 0 ? void 0 : _Text_parameters_docs.source)
    })
});
NegativeText.parameters = _object_spread_props(_object_spread({}, NegativeText.parameters), {
    docs: _object_spread_props(_object_spread({}, (_NegativeText_parameters = NegativeText.parameters) === null || _NegativeText_parameters === void 0 ? void 0 : _NegativeText_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_NegativeText_parameters1 = NegativeText.parameters) === null || _NegativeText_parameters1 === void 0 ? void 0 : (_NegativeText_parameters_docs = _NegativeText_parameters1.docs) === null || _NegativeText_parameters_docs === void 0 ? void 0 : _NegativeText_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Main","Second","Positive","Negative","Text","NegativeText"];

export { Main, Negative, NegativeText, Positive, Second, Text, __namedExportsOrder, ButtonTokenSystem_stories as default };
