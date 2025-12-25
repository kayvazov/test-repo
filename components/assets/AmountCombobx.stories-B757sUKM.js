import { r as ref } from './iframe-B-YMhJRM.js';
import { B as Button } from './Button-CtUqJ2yf.js';
import { F as FormField } from './FormField-DC7p7h4Z.js';
import { A as AmountCombobox } from './AmountCombobox-C9ylVrxz.js';
import './AmountInput-B4GxmzhL.js';
import './useMask-G9TE6bCD.js';
import './index-DHjp26mP.js';
import './ChevronDownIcon-CrpolITG.js';
import './listbox-xfprdXMl.js';
import './form-B5TVLiQV.js';
import './keyboard-Y5Ohh0Ec.js';
import './open-closed-n-oNVJpd.js';
import './focus-management-CfDY3olH.js';
import './use-resolve-button-type-BRMzcgpv.js';
import './calculate-active-index-BtXYA8d0.js';
import './ChevronUpDownIcon-BNkXqcI5.js';

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
const AmountCombobx_stories = {
    title: "Components/AmountCombobox",
    component: AmountCombobox
};
const Template = (props)=>({
        components: {
            AmountCombobox,
            Button,
            FormField
        },
        setup () {
            const val = ref("");
            const onSet = ()=>{
                val.value = Math.random();
            };
            return _object_spread_props(_object_spread({}, props), {
                val,
                onSet
            });
        },
        template: `
    <div class="space-y-2">
      <FormField v-model="val" readonly>
        <template #label>Raw value</template>
      </FormField>

      <Button @click="onSet">Set value</Button>
      <AmountCombobox v-model="val" :options="options" />  
    </div>
  `
    });
const Default = Template.bind({});
Default.args = {
    options: [
        {
            value: "",
            label: "Market value"
        },
        {
            value: "2",
            label: "Best ask price"
        }
    ]
};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    AmountCombobox,\n    Button,\n    FormField\n  },\n  setup() {\n    const val = ref(\"\");\n    const onSet = () => {\n      val.value = Math.random();\n    };\n    return {\n      ...props,\n      val,\n      onSet\n    };\n  },\n  template: `\n    <div class=\"space-y-2\">\n      <FormField v-model=\"val\" readonly>\n        <template #label>Raw value</template>\n      </FormField>\n\n      <Button @click=\"onSet\">Set value</Button>\n      <AmountCombobox v-model=\"val\" :options=\"options\" />  \n    </div>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, AmountCombobx_stories as default };
