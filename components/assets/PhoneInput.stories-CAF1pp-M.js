import { f as openBlock, g as createElementBlock, h as createBaseVNode, r as ref } from './iframe-B-YMhJRM.js';
import { P as PhoneInput } from './PhoneInput-BLkL-bbH.js';
import './useMask-G9TE6bCD.js';
import './index-DHjp26mP.js';

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
    })
  ]))
}

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
const PhoneInput_stories = {
    title: "Components/PhoneInput",
    component: PhoneInput
};
const Template = (args)=>({
        components: {
            PhoneInput,
            CheckBadgeIcon: render
        },
        setup () {
            const maskedValue = ref("");
            const unmaskedValue = ref("");
            const initUnmaskedValue = ref("+35791927394");
            const isComplete = ref(false);
            const isError = ref(false);
            const errors = {
                phoneMoreLength (phone) {
                    return `Phone number is too long: ${phone.length}`;
                }
            };
            return _object_spread_props(_object_spread({}, args), {
                maskedValue,
                initUnmaskedValue,
                isError,
                unmaskedValue,
                isComplete,
                errors,
                initialCountry: "de"
            });
        },
        template: `
    <div class="grid gap-4">
      Masked value: {{ maskedValue }}
      <br />
      Unmasked value: {{ unmaskedValue }}
      <br />
      <span class="flex">
        Is complete:
        <CheckBadgeIcon
          class="w-5 h-5"
          :class="{ 'text-green-600': isComplete }"
        />
      </span>
  
      <PhoneInput
        :initial-country="initialCountry"
        :errors="errors"
        v-model="unmaskedValue"
        v-model:masked-value="maskedValue"
        v-model:is-complete="isComplete"
      />

      <PhoneInput
        :initial-country="initialCountry"
        :errors="errors"
        v-model:is-error="isError"
        error-text="Данное поле является обязательным"
      >
        <template #label>Label</template>
      </PhoneInput>

      <PhoneInput
        :initial-country="initialCountry"
        :errors="errors"
        show-reset-btn
        v-model="unmaskedValue"
        v-model:masked-value="maskedValue"
        v-model:is-complete="isComplete"
      >
        <template #label>
          With reset mask button
        </template>
      </PhoneInput>

      <PhoneInput
          :initial-country="initialCountry"
          :errors="errors"
          show-reset-btn
          v-model="initUnmaskedValue"
      >
        <template #label>
          With init value
        </template>
      </PhoneInput>
    </div>
  `
    });
const Default = Template.bind({});
Default.args = {};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    PhoneInput,\n    CheckBadgeIcon\n  },\n  setup() {\n    const maskedValue = ref(\"\");\n    const unmaskedValue = ref(\"\");\n    const initUnmaskedValue = ref(\"+35791927394\");\n    const isComplete = ref(false);\n    const isError = ref(false);\n    const errors = {\n      phoneMoreLength(phone) {\n        return `Phone number is too long: ${phone.length}`;\n      }\n    };\n    return {\n      ...args,\n      maskedValue,\n      initUnmaskedValue,\n      isError,\n      unmaskedValue,\n      isComplete,\n      errors,\n      initialCountry: \"de\"\n    };\n  },\n  template: `\n    <div class=\"grid gap-4\">\n      Masked value: {{ maskedValue }}\n      <br />\n      Unmasked value: {{ unmaskedValue }}\n      <br />\n      <span class=\"flex\">\n        Is complete:\n        <CheckBadgeIcon\n          class=\"w-5 h-5\"\n          :class=\"{ 'text-green-600': isComplete }\"\n        />\n      </span>\n  \n      <PhoneInput\n        :initial-country=\"initialCountry\"\n        :errors=\"errors\"\n        v-model=\"unmaskedValue\"\n        v-model:masked-value=\"maskedValue\"\n        v-model:is-complete=\"isComplete\"\n      />\n\n      <PhoneInput\n        :initial-country=\"initialCountry\"\n        :errors=\"errors\"\n        v-model:is-error=\"isError\"\n        error-text=\"\u0414\u0430\u043D\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C\"\n      >\n        <template #label>Label</template>\n      </PhoneInput>\n\n      <PhoneInput\n        :initial-country=\"initialCountry\"\n        :errors=\"errors\"\n        show-reset-btn\n        v-model=\"unmaskedValue\"\n        v-model:masked-value=\"maskedValue\"\n        v-model:is-complete=\"isComplete\"\n      >\n        <template #label>\n          With reset mask button\n        </template>\n      </PhoneInput>\n\n      <PhoneInput\n          :initial-country=\"initialCountry\"\n          :errors=\"errors\"\n          show-reset-btn\n          v-model=\"initUnmaskedValue\"\n      >\n        <template #label>\n          With init value\n        </template>\n      </PhoneInput>\n    </div>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, PhoneInput_stories as default };
