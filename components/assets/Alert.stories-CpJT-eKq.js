import { A as Alert } from './Alert-Cz2VvQwu.js';
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
var _Default_parameters, _Default_parameters_docs, _Default_parameters1, _WithLeadingIcon_parameters, _WithLeadingIcon_parameters_docs, _WithLeadingIcon_parameters1, _WithTitle_parameters, _WithTitle_parameters_docs, _WithTitle_parameters1, _WithTitleAndIcon_parameters, _WithTitleAndIcon_parameters_docs, _WithTitleAndIcon_parameters1;
const Alert_stories = {
    title: "Components/Alert",
    component: Alert
};
const Template = (args)=>({
        components: {
            Alert
        },
        setup () {
            return _object_spread({}, args);
        },
        template: `
    <section class="p-12 bg-white dark:bg-gray-900">
      <Alert
          v-for="type in types"
          :type="type"
          :show-leading-icon="showLeadingIcon"
          class="mb-4"
      >
        <template v-if="title" #title>{{ title }}</template>
        {{ text }}
      </Alert>  
    </section>
  `
    });
const defaultProps = {
    text: "Alert Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    types: [
        "regular",
        "warning",
        "danger",
        "success",
        "neutral",
        "special"
    ]
};
const Default = Template.bind({});
Default.args = _object_spread_props(_object_spread({}, defaultProps), {
    showLeadingIcon: false
});
const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = _object_spread_props(_object_spread({}, defaultProps), {
    showLeadingIcon: true
});
const WithTitle = Template.bind({});
WithTitle.args = _object_spread_props(_object_spread({}, defaultProps), {
    title: "Alert title"
});
const WithTitleAndIcon = Template.bind({});
WithTitleAndIcon.args = _object_spread_props(_object_spread({}, defaultProps), {
    title: "Alert title",
    showLeadingIcon: true
});
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Alert\n  },\n  setup() {\n    return {\n      ...args\n    };\n  },\n  template: `\n    <section class=\"p-12 bg-white dark:bg-gray-900\">\n      <Alert\n          v-for=\"type in types\"\n          :type=\"type\"\n          :show-leading-icon=\"showLeadingIcon\"\n          class=\"mb-4\"\n      >\n        <template v-if=\"title\" #title>{{ title }}</template>\n        {{ text }}\n      </Alert>  \n    </section>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
WithLeadingIcon.parameters = _object_spread_props(_object_spread({}, WithLeadingIcon.parameters), {
    docs: _object_spread_props(_object_spread({}, (_WithLeadingIcon_parameters = WithLeadingIcon.parameters) === null || _WithLeadingIcon_parameters === void 0 ? void 0 : _WithLeadingIcon_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Alert\n  },\n  setup() {\n    return {\n      ...args\n    };\n  },\n  template: `\n    <section class=\"p-12 bg-white dark:bg-gray-900\">\n      <Alert\n          v-for=\"type in types\"\n          :type=\"type\"\n          :show-leading-icon=\"showLeadingIcon\"\n          class=\"mb-4\"\n      >\n        <template v-if=\"title\" #title>{{ title }}</template>\n        {{ text }}\n      </Alert>  \n    </section>\n  `\n})"
        }, (_WithLeadingIcon_parameters1 = WithLeadingIcon.parameters) === null || _WithLeadingIcon_parameters1 === void 0 ? void 0 : (_WithLeadingIcon_parameters_docs = _WithLeadingIcon_parameters1.docs) === null || _WithLeadingIcon_parameters_docs === void 0 ? void 0 : _WithLeadingIcon_parameters_docs.source)
    })
});
WithTitle.parameters = _object_spread_props(_object_spread({}, WithTitle.parameters), {
    docs: _object_spread_props(_object_spread({}, (_WithTitle_parameters = WithTitle.parameters) === null || _WithTitle_parameters === void 0 ? void 0 : _WithTitle_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Alert\n  },\n  setup() {\n    return {\n      ...args\n    };\n  },\n  template: `\n    <section class=\"p-12 bg-white dark:bg-gray-900\">\n      <Alert\n          v-for=\"type in types\"\n          :type=\"type\"\n          :show-leading-icon=\"showLeadingIcon\"\n          class=\"mb-4\"\n      >\n        <template v-if=\"title\" #title>{{ title }}</template>\n        {{ text }}\n      </Alert>  \n    </section>\n  `\n})"
        }, (_WithTitle_parameters1 = WithTitle.parameters) === null || _WithTitle_parameters1 === void 0 ? void 0 : (_WithTitle_parameters_docs = _WithTitle_parameters1.docs) === null || _WithTitle_parameters_docs === void 0 ? void 0 : _WithTitle_parameters_docs.source)
    })
});
WithTitleAndIcon.parameters = _object_spread_props(_object_spread({}, WithTitleAndIcon.parameters), {
    docs: _object_spread_props(_object_spread({}, (_WithTitleAndIcon_parameters = WithTitleAndIcon.parameters) === null || _WithTitleAndIcon_parameters === void 0 ? void 0 : _WithTitleAndIcon_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Alert\n  },\n  setup() {\n    return {\n      ...args\n    };\n  },\n  template: `\n    <section class=\"p-12 bg-white dark:bg-gray-900\">\n      <Alert\n          v-for=\"type in types\"\n          :type=\"type\"\n          :show-leading-icon=\"showLeadingIcon\"\n          class=\"mb-4\"\n      >\n        <template v-if=\"title\" #title>{{ title }}</template>\n        {{ text }}\n      </Alert>  \n    </section>\n  `\n})"
        }, (_WithTitleAndIcon_parameters1 = WithTitleAndIcon.parameters) === null || _WithTitleAndIcon_parameters1 === void 0 ? void 0 : (_WithTitleAndIcon_parameters_docs = _WithTitleAndIcon_parameters1.docs) === null || _WithTitleAndIcon_parameters_docs === void 0 ? void 0 : _WithTitleAndIcon_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default","WithLeadingIcon","WithTitle","WithTitleAndIcon"];

export { Default, WithLeadingIcon, WithTitle, WithTitleAndIcon, __namedExportsOrder, Alert_stories as default };
