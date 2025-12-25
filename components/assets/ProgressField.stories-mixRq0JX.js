import { r as ref } from './iframe-B-YMhJRM.js';
import { P as ProgressField } from './ProgressField-D6jbIE0e.js';
import './FormField-DC7p7h4Z.js';
import './Spinner-CAmBDD7O.js';
import './CheckCircleIcon-D4s67Pui.js';

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
const ProgressField_stories = {
    title: "Components/ProgressField",
    component: ProgressField
};
const Template = (props)=>({
        components: {
            ProgressField
        },
        setup () {
            const text = ref("");
            return _object_spread_props(_object_spread({}, props), {
                text
            });
        },
        template: `
    <div class="mb-3" v-for="input in inputs">
      <ProgressField v-bind="input.attrs" v-model="input.value">
        <template #label v-if="input.slot?.label"><span v-html="input.slot.label"></span></template>
      </ProgressField>
    </div>
    <ProgressField v-model="text" :is-loading="!!text" :is-loading-success="text.length > 6">
      <template #label>Write more than 6 symbols for success</template>
    </ProgressField>
  `
    });
const Default = Template.bind({});
Default.args = {
    inputs: [
        {
            value: "Some text",
            slot: {
                label: "With isLoading"
            },
            attrs: {
                isLoading: true
            }
        },
        {
            value: "Some text",
            slot: {
                label: "With isLoadingSuccess"
            },
            attrs: {
                isLoadingSuccess: true
            }
        }
    ]
};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    ProgressField\n  },\n  setup() {\n    const text = ref(\"\");\n    return {\n      ...props,\n      text\n    };\n  },\n  template: `\n    <div class=\"mb-3\" v-for=\"input in inputs\">\n      <ProgressField v-bind=\"input.attrs\" v-model=\"input.value\">\n        <template #label v-if=\"input.slot?.label\"><span v-html=\"input.slot.label\"></span></template>\n      </ProgressField>\n    </div>\n    <ProgressField v-model=\"text\" :is-loading=\"!!text\" :is-loading-success=\"text.length > 6\">\n      <template #label>Write more than 6 symbols for success</template>\n    </ProgressField>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, ProgressField_stories as default };
