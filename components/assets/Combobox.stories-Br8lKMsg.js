import { r as ref } from './iframe-B-YMhJRM.js';
import { C as Combobox, a as ComboboxOption } from './ComboboxOption-BiQzpX90.js';
import './ChevronUpDownIcon-BNkXqcI5.js';
import './CheckIcon-CfIKdVGN.js';
import './form-B5TVLiQV.js';
import './keyboard-Y5Ohh0Ec.js';
import './open-closed-n-oNVJpd.js';
import './focus-management-CfDY3olH.js';
import './use-resolve-button-type-BRMzcgpv.js';
import './calculate-active-index-BtXYA8d0.js';
import './disposables-JZe9QuOV.js';
import './micro-task-DeZ0-2Kb.js';

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
const Combobox_stories = {
    title: "Components/Combobox",
    component: Combobox
};
const Template = (args)=>({
        components: {
            Combobox,
            ComboboxOption
        },
        setup () {
            const selected = ref(args.options[1]);
            return _object_spread_props(_object_spread({}, args), {
                selected
            });
        },
        template: `
    <Combobox :options="options" v-model="selected">
      <template #label="{selected}">
        {{selected.label}} | {{selected.id}}
      </template>
      <template #options="{options}">
        <ComboboxOption v-for="option in options" :key="option.id" :value="option" />
      </template>
    </Combobox>
    `
    });
const Default = Template.bind({});
Default.args = {
    options: [
        {
            id: 1,
            label: "Leslie Alexander"
        },
        {
            id: 2,
            label: "Alexander Leslie"
        }
    ]
};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Combobox,\n    ComboboxOption\n  },\n  setup() {\n    const selected = ref(args.options[1]);\n    return {\n      ...args,\n      selected\n    };\n  },\n  template: `\n    <Combobox :options=\"options\" v-model=\"selected\">\n      <template #label=\"{selected}\">\n        {{selected.label}} | {{selected.id}}\n      </template>\n      <template #options=\"{options}\">\n        <ComboboxOption v-for=\"option in options\" :key=\"option.id\" :value=\"option\" />\n      </template>\n    </Combobox>\n    `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, Combobox_stories as default };
