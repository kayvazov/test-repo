import { r as ref, e as watch } from './iframe-B-YMhJRM.js';
import { F as FormField } from './FormField-DC7p7h4Z.js';

const isRequired = (value)=>value.trim() !== "";
const isEmail = (value)=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
const useFormField = (name = "", rules = ()=>true, options = {})=>{
    const initialValue = options && options.initialValue === undefined ? "" : options.initialValue;
    const value = ref(initialValue);
    const errorMessage = ref("");
    const dirty = ref(false);
    const validate = ()=>new Promise((resolve, reject)=>{
            const errors = [];
            const result = typeof rules === "function" ? rules(value.value) : true;
            let valid = true;
            if (typeof result === "string") {
                errors.push(result);
                valid = false;
            } else if (typeof result === "boolean") {
                !result && errors.push("Field value is invalid");
                valid = result;
            }
            errorMessage.value = errors[0] || "";
            const response = {
                errors,
                valid
            };
            return valid ? resolve(response) : reject(response);
        });
    const onBlur = ()=>{
        if (!dirty.value) {
            return;
        }
        validate().then(()=>{}).catch(()=>{});
    };
    watch(value, ()=>{
        dirty.value = true;
        errorMessage.value = "";
    });
    return {
        name,
        value,
        errorMessage,
        validate,
        onBlur
    };
};

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
var _Default_parameters, _Default_parameters_docs, _Default_parameters1, _AllSizes_parameters, _AllSizes_parameters_docs, _AllSizes_parameters1, _WithValidation_parameters, _WithValidation_parameters_docs, _WithValidation_parameters1;
const FormField_stories = {
    title: "Components/FormField",
    component: FormField
};
const Template = (props)=>({
        components: {
            FormField
        },
        setup () {
            return _object_spread({}, props);
        },
        template: `
    <div class="mb-3" v-for="input in inputs">
      <FormField :is-error="input.isError" v-bind="input.attrs" v-model="input.value" :size="input.size" :trailing="input.trailing">
        <template #label v-if="input.slot?.label"><span v-html="input.slot.label"></span></template>
        <template #error v-if="input.slot?.error"><span v-html="input.slot.error"></span></template>
      </FormField>
    </div>
  `
    });
const Default = Template.bind({});
Default.args = {
    inputs: [
        {
            value: "Value",
            isError: false,
            slot: {
                label: "<span>Custom label</span>"
            }
        },
        {
            value: "Value",
            isError: true,
            slot: {
                label: "With error",
                error: "Поле обязательно для заполнения"
            }
        },
        {
            value: "Value",
            slot: {
                label: "Disabled"
            },
            attrs: {
                disabled: true
            }
        },
        {
            value: "With trailing",
            slot: {
                label: "With trailing"
            },
            trailing: "шт."
        }
    ]
};
const AllSizes = Template.bind({});
AllSizes.args = {
    inputs: [
        {
            value: "XS size",
            size: "xs"
        },
        {
            value: "SM size",
            size: "sm"
        },
        {
            value: "BASE size",
            size: "base"
        },
        {
            value: "L size",
            size: "l"
        },
        {
            value: "XL size",
            size: "xl"
        }
    ]
};
const WithValidation = ()=>({
        components: {
            FormField
        },
        setup () {
            const { value, errorMessage, onBlur } = useFormField("email", (value)=>{
                if (!isRequired(value)) {
                    return "Email is required";
                }
                if (!isEmail(value)) {
                    return "Enter correct email";
                }
                return true;
            });
            return {
                value,
                errorMessage,
                onBlur
            };
        },
        template: `
    <span class="inline-block mb-4 rounded-md bg-green-50 p-4 text-sm text-green-500">
      Enter invalid email and blur from input
    </span>
    <FormField :is-error="Boolean(errorMessage)" v-model="value" @blur="onBlur" placeholder="Enter email" />
    <span class="inline-block rounded-md p-2 text-sm mt-2 bg-red-50 text-red-500" v-if="Boolean(errorMessage)">{{errorMessage}}</span>
  `
    });
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    FormField\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `\n    <div class=\"mb-3\" v-for=\"input in inputs\">\n      <FormField :is-error=\"input.isError\" v-bind=\"input.attrs\" v-model=\"input.value\" :size=\"input.size\" :trailing=\"input.trailing\">\n        <template #label v-if=\"input.slot?.label\"><span v-html=\"input.slot.label\"></span></template>\n        <template #error v-if=\"input.slot?.error\"><span v-html=\"input.slot.error\"></span></template>\n      </FormField>\n    </div>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
AllSizes.parameters = _object_spread_props(_object_spread({}, AllSizes.parameters), {
    docs: _object_spread_props(_object_spread({}, (_AllSizes_parameters = AllSizes.parameters) === null || _AllSizes_parameters === void 0 ? void 0 : _AllSizes_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    FormField\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `\n    <div class=\"mb-3\" v-for=\"input in inputs\">\n      <FormField :is-error=\"input.isError\" v-bind=\"input.attrs\" v-model=\"input.value\" :size=\"input.size\" :trailing=\"input.trailing\">\n        <template #label v-if=\"input.slot?.label\"><span v-html=\"input.slot.label\"></span></template>\n        <template #error v-if=\"input.slot?.error\"><span v-html=\"input.slot.error\"></span></template>\n      </FormField>\n    </div>\n  `\n})"
        }, (_AllSizes_parameters1 = AllSizes.parameters) === null || _AllSizes_parameters1 === void 0 ? void 0 : (_AllSizes_parameters_docs = _AllSizes_parameters1.docs) === null || _AllSizes_parameters_docs === void 0 ? void 0 : _AllSizes_parameters_docs.source)
    })
});
WithValidation.parameters = _object_spread_props(_object_spread({}, WithValidation.parameters), {
    docs: _object_spread_props(_object_spread({}, (_WithValidation_parameters = WithValidation.parameters) === null || _WithValidation_parameters === void 0 ? void 0 : _WithValidation_parameters.docs), {
        source: _object_spread({
            originalSource: "() => ({\n  components: {\n    FormField\n  },\n  setup() {\n    const {\n      value,\n      errorMessage,\n      onBlur\n    } = useFormField(\"email\", value => {\n      if (!isRequired(value)) {\n        return \"Email is required\";\n      }\n      if (!isEmail(value)) {\n        return \"Enter correct email\";\n      }\n      return true;\n    });\n    return {\n      value,\n      errorMessage,\n      onBlur\n    };\n  },\n  template: `\n    <span class=\"inline-block mb-4 rounded-md bg-green-50 p-4 text-sm text-green-500\">\n      Enter invalid email and blur from input\n    </span>\n    <FormField :is-error=\"Boolean(errorMessage)\" v-model=\"value\" @blur=\"onBlur\" placeholder=\"Enter email\" />\n    <span class=\"inline-block rounded-md p-2 text-sm mt-2 bg-red-50 text-red-500\" v-if=\"Boolean(errorMessage)\">{{errorMessage}}</span>\n  `\n})"
        }, (_WithValidation_parameters1 = WithValidation.parameters) === null || _WithValidation_parameters1 === void 0 ? void 0 : (_WithValidation_parameters_docs = _WithValidation_parameters1.docs) === null || _WithValidation_parameters_docs === void 0 ? void 0 : _WithValidation_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default","AllSizes","WithValidation"];

export { AllSizes, Default, WithValidation, __namedExportsOrder, FormField_stories as default };
