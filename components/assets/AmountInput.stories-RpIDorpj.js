import { a as reactive, c as computed } from './iframe-B-YMhJRM.js';
import { B as Button } from './Button-CtUqJ2yf.js';
import { F as FormField } from './FormField-DC7p7h4Z.js';
import { A as AmountInput } from './AmountInput-B4GxmzhL.js';
import './useMask-G9TE6bCD.js';
import './index-DHjp26mP.js';
import './ChevronDownIcon-CrpolITG.js';

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
var _Default_parameters, _Default_parameters_docs, _Default_parameters1, _WithStepper_parameters, _WithStepper_parameters_docs, _WithStepper_parameters1;
const AmountInput_stories = {
    title: "Components/AmountInput",
    component: AmountInput
};
const Template = (props)=>({
        components: {
            AmountInput,
            Button,
            FormField
        },
        setup () {
            const state = reactive({
                value: "1000.9999",
                maskedValue: "",
                scale: "4",
                step: 0.5,
                useStep: props.withStepper,
                maxValue: ""
            });
            const setValue = ()=>{
                state.value = (Math.random() * 10000).toString();
            };
            const generateScale = (max = 4, min = 1)=>{
                const random = Math.random() * (max - min);
                return Math.floor(random + min);
            };
            const setCustomScale = ()=>{
                state.scale = generateScale().toString();
            };
            const handleStepChange = (value)=>{
                state.step = +value;
            };
            const updateValue = (value)=>{
                state.value = value;
                if (state.maxValue && Number(state.value) > Number(state.maxValue)) {
                    state.value = state.maxValue;
                }
            };
            const updateMaxValue = (value)=>{
                state.maxValue = value;
                if (state.maxValue && Number(state.value) > Number(state.maxValue)) {
                    updateValue(state.maxValue);
                }
            };
            const options = computed(()=>{
                return {
                    scale: state.scale,
                    step: state.useStep ? state.step : 0
                };
            });
            return _object_spread_props(_object_spread({}, props), {
                state,
                setValue,
                setCustomScale,
                handleStepChange,
                updateValue,
                updateMaxValue,
                options
            });
        },
        template: `
    <div class="flex mb-3">
      <div class="mr-3">
        <FormField v-model="state.value" disabled>
          <template #label>Unmasked value</template>
        </FormField>  
      </div>
      
      <div class="mr-3">
        <FormField v-model="state.maskedValue" disabled>
          <template #label>Masked value</template>
        </FormField>  
      </div>

      <div class="mr-3">
        <FormField :model-value="state.maxValue" @update:model-value="updateMaxValue">
          <template #label>Max value</template>
        </FormField>
      </div>
      
      <div class="mr-3">
        <FormField v-model="state.scale" disabled trailing="pcs">
          <template #label>Scale</template>
        </FormField>
      </div>
      
      <div class="flex">
        <FormField :model-value="state.step" @update:model-value="handleStepChange" :disabled="!state.useStep" trailing="step">
          <template #label>
            <label class="flex gap-4 items-center">
                Use Step
                <input type="checkbox" v-model="state.useStep">
            </label>
          </template>
        </FormField>
      </div>
    </div>
    
    <div class="flex flex-col items-start">
      <AmountInput
          v-model:masked-value="state.maskedValue"
          :with-stepper="withStepper"
          type="text" 
          inputmode="decimal" 
          :options="options"
          :model-value="state.value"
          @update:model-value="updateValue"
      >
        <template #label>Amount input</template>
      </AmountInput>
      
      <div class="mt-4">
        <Button class="mr-3" @click="setValue">Set random value</Button>
        <Button @click="setCustomScale">Set custom scale</Button>  
      </div>
    </div>
  `
    });
const Default = Template.bind({});
Default.args = {};
const WithStepper = Template.bind({});
WithStepper.args = {
    withStepper: true
};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    AmountInput,\n    Button,\n    FormField\n  },\n  setup() {\n    const state = reactive({\n      value: \"1000.9999\",\n      maskedValue: \"\",\n      scale: \"4\",\n      step: 0.5,\n      useStep: props.withStepper,\n      maxValue: \"\"\n    });\n    const setValue = () => {\n      state.value = (Math.random() * 10000).toString();\n    };\n    const generateScale = (max = 4, min = 1) => {\n      const random = Math.random() * (max - min);\n      return Math.floor(random + min);\n    };\n    const setCustomScale = () => {\n      state.scale = generateScale().toString();\n    };\n    const handleStepChange = value => {\n      state.step = +value;\n    };\n    const updateValue = value => {\n      state.value = value;\n      if (state.maxValue && Number(state.value) > Number(state.maxValue)) {\n        state.value = state.maxValue;\n      }\n    };\n    const updateMaxValue = value => {\n      state.maxValue = value;\n      if (state.maxValue && Number(state.value) > Number(state.maxValue)) {\n        updateValue(state.maxValue);\n      }\n    };\n    const options = computed(() => {\n      return {\n        scale: state.scale,\n        step: state.useStep ? state.step : 0\n      };\n    });\n    return {\n      ...props,\n      state,\n      setValue,\n      setCustomScale,\n      handleStepChange,\n      updateValue,\n      updateMaxValue,\n      options\n    };\n  },\n  template: `\n    <div class=\"flex mb-3\">\n      <div class=\"mr-3\">\n        <FormField v-model=\"state.value\" disabled>\n          <template #label>Unmasked value</template>\n        </FormField>  \n      </div>\n      \n      <div class=\"mr-3\">\n        <FormField v-model=\"state.maskedValue\" disabled>\n          <template #label>Masked value</template>\n        </FormField>  \n      </div>\n\n      <div class=\"mr-3\">\n        <FormField :model-value=\"state.maxValue\" @update:model-value=\"updateMaxValue\">\n          <template #label>Max value</template>\n        </FormField>\n      </div>\n      \n      <div class=\"mr-3\">\n        <FormField v-model=\"state.scale\" disabled trailing=\"pcs\">\n          <template #label>Scale</template>\n        </FormField>\n      </div>\n      \n      <div class=\"flex\">\n        <FormField :model-value=\"state.step\" @update:model-value=\"handleStepChange\" :disabled=\"!state.useStep\" trailing=\"step\">\n          <template #label>\n            <label class=\"flex gap-4 items-center\">\n                Use Step\n                <input type=\"checkbox\" v-model=\"state.useStep\">\n            </label>\n          </template>\n        </FormField>\n      </div>\n    </div>\n    \n    <div class=\"flex flex-col items-start\">\n      <AmountInput\n          v-model:masked-value=\"state.maskedValue\"\n          :with-stepper=\"withStepper\"\n          type=\"text\" \n          inputmode=\"decimal\" \n          :options=\"options\"\n          :model-value=\"state.value\"\n          @update:model-value=\"updateValue\"\n      >\n        <template #label>Amount input</template>\n      </AmountInput>\n      \n      <div class=\"mt-4\">\n        <Button class=\"mr-3\" @click=\"setValue\">Set random value</Button>\n        <Button @click=\"setCustomScale\">Set custom scale</Button>  \n      </div>\n    </div>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
WithStepper.parameters = _object_spread_props(_object_spread({}, WithStepper.parameters), {
    docs: _object_spread_props(_object_spread({}, (_WithStepper_parameters = WithStepper.parameters) === null || _WithStepper_parameters === void 0 ? void 0 : _WithStepper_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    AmountInput,\n    Button,\n    FormField\n  },\n  setup() {\n    const state = reactive({\n      value: \"1000.9999\",\n      maskedValue: \"\",\n      scale: \"4\",\n      step: 0.5,\n      useStep: props.withStepper,\n      maxValue: \"\"\n    });\n    const setValue = () => {\n      state.value = (Math.random() * 10000).toString();\n    };\n    const generateScale = (max = 4, min = 1) => {\n      const random = Math.random() * (max - min);\n      return Math.floor(random + min);\n    };\n    const setCustomScale = () => {\n      state.scale = generateScale().toString();\n    };\n    const handleStepChange = value => {\n      state.step = +value;\n    };\n    const updateValue = value => {\n      state.value = value;\n      if (state.maxValue && Number(state.value) > Number(state.maxValue)) {\n        state.value = state.maxValue;\n      }\n    };\n    const updateMaxValue = value => {\n      state.maxValue = value;\n      if (state.maxValue && Number(state.value) > Number(state.maxValue)) {\n        updateValue(state.maxValue);\n      }\n    };\n    const options = computed(() => {\n      return {\n        scale: state.scale,\n        step: state.useStep ? state.step : 0\n      };\n    });\n    return {\n      ...props,\n      state,\n      setValue,\n      setCustomScale,\n      handleStepChange,\n      updateValue,\n      updateMaxValue,\n      options\n    };\n  },\n  template: `\n    <div class=\"flex mb-3\">\n      <div class=\"mr-3\">\n        <FormField v-model=\"state.value\" disabled>\n          <template #label>Unmasked value</template>\n        </FormField>  \n      </div>\n      \n      <div class=\"mr-3\">\n        <FormField v-model=\"state.maskedValue\" disabled>\n          <template #label>Masked value</template>\n        </FormField>  \n      </div>\n\n      <div class=\"mr-3\">\n        <FormField :model-value=\"state.maxValue\" @update:model-value=\"updateMaxValue\">\n          <template #label>Max value</template>\n        </FormField>\n      </div>\n      \n      <div class=\"mr-3\">\n        <FormField v-model=\"state.scale\" disabled trailing=\"pcs\">\n          <template #label>Scale</template>\n        </FormField>\n      </div>\n      \n      <div class=\"flex\">\n        <FormField :model-value=\"state.step\" @update:model-value=\"handleStepChange\" :disabled=\"!state.useStep\" trailing=\"step\">\n          <template #label>\n            <label class=\"flex gap-4 items-center\">\n                Use Step\n                <input type=\"checkbox\" v-model=\"state.useStep\">\n            </label>\n          </template>\n        </FormField>\n      </div>\n    </div>\n    \n    <div class=\"flex flex-col items-start\">\n      <AmountInput\n          v-model:masked-value=\"state.maskedValue\"\n          :with-stepper=\"withStepper\"\n          type=\"text\" \n          inputmode=\"decimal\" \n          :options=\"options\"\n          :model-value=\"state.value\"\n          @update:model-value=\"updateValue\"\n      >\n        <template #label>Amount input</template>\n      </AmountInput>\n      \n      <div class=\"mt-4\">\n        <Button class=\"mr-3\" @click=\"setValue\">Set random value</Button>\n        <Button @click=\"setCustomScale\">Set custom scale</Button>  \n      </div>\n    </div>\n  `\n})"
        }, (_WithStepper_parameters1 = WithStepper.parameters) === null || _WithStepper_parameters1 === void 0 ? void 0 : (_WithStepper_parameters_docs = _WithStepper_parameters1.docs) === null || _WithStepper_parameters_docs === void 0 ? void 0 : _WithStepper_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default","WithStepper"];

export { Default, WithStepper, __namedExportsOrder, AmountInput_stories as default };
