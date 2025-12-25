import { r as ref } from './iframe-B-YMhJRM.js';
import { F as FormField } from './FormField-DC7p7h4Z.js';
import { F as FriendlyNumber } from './FriendlyNumber-CfyrG48u.js';

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
const FriendlyNumber_stories = {
    title: "Components/FriendlyNumber",
    component: FriendlyNumber
};
const Template = (args)=>({
        components: {
            FriendlyNumber,
            FormField
        },
        setup () {
            const dynamicFriendlyNumber = ref(0);
            return _object_spread({
                dynamicFriendlyNumber
            }, args);
        },
        template: `
    <div v-for='number in numbers'>
      <FriendlyNumber class='block' :number='number' :scale='3' />
    </div>
    <div class="mt-4 grid max-w-lg grid-cols-2 gap-8">
      <FormField v-model="dynamicFriendlyNumber">
        <template #label>
          Dynamic friendly number
        </template>
      </FormField>
      <div>
        <p class="block text-sm lg:text-base text-gray-500 mb-2 dark:text-gray-400">
          Result:
        </p>
        <FriendlyNumber class='block mt-3' :number='dynamicFriendlyNumber' :scale='3' />
      </div>
    </div>
  `
    });
const Default = Template.bind({});
Default.args = {
    numbers: [
        150,
        1500,
        10500,
        100500,
        1500500,
        1500500500
    ]
};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    FriendlyNumber,\n    FormField\n  },\n  setup() {\n    const dynamicFriendlyNumber = ref(0);\n    return {\n      dynamicFriendlyNumber,\n      ...args\n    };\n  },\n  template: `\n    <div v-for='number in numbers'>\n      <FriendlyNumber class='block' :number='number' :scale='3' />\n    </div>\n    <div class=\"mt-4 grid max-w-lg grid-cols-2 gap-8\">\n      <FormField v-model=\"dynamicFriendlyNumber\">\n        <template #label>\n          Dynamic friendly number\n        </template>\n      </FormField>\n      <div>\n        <p class=\"block text-sm lg:text-base text-gray-500 mb-2 dark:text-gray-400\">\n          Result:\n        </p>\n        <FriendlyNumber class='block mt-3' :number='dynamicFriendlyNumber' :scale='3' />\n      </div>\n    </div>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, FriendlyNumber_stories as default };
