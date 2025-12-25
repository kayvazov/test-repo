import { r as ref, o as onUnmounted, w as watchEffect } from './iframe-B-YMhJRM.js';
import { u as useHideData } from './useHideData-p5xj-pxn.js';
import { B as Button } from './Button-CtUqJ2yf.js';
import { A as Amount } from './Amount-CH7S0hrn.js';
import './useTheme-Cy0CkrhV.js';
import './constants-BNWoBBcu.js';
import './index-DHjp26mP.js';

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
var _Default_parameters, _Default_parameters_docs, _Default_parameters1, _WithBlinked_parameters, _WithBlinked_parameters_docs, _WithBlinked_parameters1, _ToggleDataVisibility_parameters, _ToggleDataVisibility_parameters_docs, _ToggleDataVisibility_parameters1;
const Amount_stories = {
    title: "Components/Amount",
    component: Amount
};
function getRandomInt(max, withDec) {
    return withDec ? Math.floor(Math.random() * max) + Math.random() : Math.floor(Math.random() * max);
}
const Template = (props)=>({
        components: {
            Amount,
            Button
        },
        setup () {
            const { toggleDataVisibility } = useHideData();
            const amounts = ref([
                ...props.amounts
            ]);
            toggleDataVisibility(true);
            onUnmounted(()=>{
                toggleDataVisibility(false);
            });
            if (props.name !== "blinked") {
                return {
                    amounts
                };
            }
            let index = getRandomInt(props.amounts.length);
            let counter = 0;
            const blink = ()=>{
                if (!amounts.value[index]) {
                    index = 0;
                }
                if (counter === 5) {
                    counter = 1;
                }
                const multiply = counter % 2 === 0 ? -1 : 1;
                if (!amounts.value[index].partialColorize) {
                    amounts.value[index].value = getRandomInt(114, counter % 4 === 0) * multiply;
                } else {
                    amounts.value[index].value += 0.09;
                }
                index++;
                counter++;
            };
            return _object_spread_props(_object_spread({}, props), {
                amounts,
                blink
            });
        },
        template: `
    <div
      v-if="name === 'blinked'"
      class="mb-4"
    >
      <Button
        @click="blink"
      >
        Make blink
      </Button>
    </div>
    
    <div class="flex gap-20">
      <div v-if="name !== 'blinked'">
        <div
            v-for="props in amounts"
            class="mb-2 w-full"
        >
          {{ String(props.value) }}
        </div>
      </div>
  
      <div>
        <div v-for="props in amounts" class="mb-2">
          <Amount
              as="span"
              class="mr-4"
              v-bind="props"
          />
          <template v-if="name !== 'blinked'">
            Text after
          </template>
        </div>
      </div>
    </div>
  `
    });
const Default = Template.bind({});
Default.args = {
    name: "default",
    amounts: [
        {
            value: null,
            currency: "USD",
            isColorized: true,
            padFractionalZeros: true,
            partialColorize: true
        },
        {
            value: null,
            currency: "USD",
            isColorized: true,
            padFractionalZeros: true,
            partialColorize: true,
            showNotAvailable: true
        },
        {
            value: undefined,
            currency: "USD",
            isColorized: true,
            padFractionalZeros: true,
            partialColorize: true
        },
        {
            value: 0,
            isColorized: true,
            showPlus: true
        },
        {
            value: "1000.1234"
        },
        {
            value: 10000,
            currency: "RUR"
        },
        {
            value: 10000,
            currency: "RUR",
            currencyPosition: "before"
        },
        {
            value: 10000,
            currency: "USDT",
            currencyPosition: "before"
        },
        {
            value: 111.124,
            padFractionalZeros: true,
            scale: 4,
            wrapInBrackets: true
        },
        {
            value: -1000.0,
            isColorized: true
        },
        {
            value: 100.0999,
            isColorized: true,
            showPlus: true,
            isPercent: true,
            wrapInBrackets: true
        },
        {
            value: 1.23456789,
            scale: null,
            maxScale: 2
        },
        {
            value: 100,
            scale: null,
            padFractionalZeros: true,
            minScale: 2
        },
        {
            value: 1e-8,
            scale: null
        },
        {
            value: 111.124,
            currencyPosition: "before",
            currency: "RUR",
            hideData: true
        },
        {
            value: 38,
            isColorized: true,
            showPlus: true,
            isPercent: true,
            hideData: true
        },
        {
            value: 77,
            wrapInBrackets: true,
            hideData: true
        }
    ]
};
const WithBlinked = Template.bind({});
WithBlinked.args = {
    name: "blinked",
    amounts: [
        {
            value: 120,
            padFractionalZeros: true,
            currency: "USD",
            partialColorize: true,
            isBlinked: true
        },
        {
            value: "1000.1234",
            scale: 4,
            isBlinked: true
        },
        {
            value: -1000.0,
            isColorized: true,
            isBlinked: true
        }
    ]
};
const ToggleDataVisibilityTemplate = (props)=>({
        components: {
            Amount,
            Button
        },
        setup () {
            const { addListener, removeListener, toggleDataVisibility, isDataHidden } = useHideData();
            function onEvent(e) {
                toggleDataVisibility(e.detail);
            }
            toggleDataVisibility(true);
            watchEffect((onCleanup)=>{
                addListener(onEvent);
                onCleanup(()=>{
                    removeListener(onEvent);
                });
            });
            onUnmounted(()=>{
                toggleDataVisibility(false);
            });
            return _object_spread_props(_object_spread({}, props), {
                isDataHidden,
                toggleDataVisibility
            });
        },
        template: `
    <div class="max-w-xs">
      <div v-for="props in amounts" class="flex flex-col gap-2">
        <Button
          :disabled="isDataHidden"
          @click="toggleDataVisibility(true)"
        >
          Hide data again
        </Button>
        <p class="mt-4" :class="{ 'text-gray-300': !isDataHidden }">
          Click the amount to unhide the data
        </p>
        <Amount
          v-bind="props"
        />
      </div>
    </div>
  `
    });
const ToggleDataVisibility = ToggleDataVisibilityTemplate.bind({});
ToggleDataVisibility.args = {
    name: "toggle-data-visibility",
    amounts: [
        {
            value: 123456,
            padFractionalZeros: true,
            currency: "USD",
            hideData: true
        }
    ]
};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Amount,\n    Button\n  },\n  setup() {\n    const {\n      toggleDataVisibility\n    } = useHideData();\n    const amounts = ref([...props.amounts]);\n    toggleDataVisibility(true);\n    onUnmounted(() => {\n      toggleDataVisibility(false);\n    });\n    if (props.name !== \"blinked\") {\n      return {\n        amounts\n      };\n    }\n    let index = getRandomInt(props.amounts.length);\n    let counter = 0;\n    const blink = () => {\n      if (!amounts.value[index]) {\n        index = 0;\n      }\n      if (counter === 5) {\n        counter = 1;\n      }\n      const multiply = counter % 2 === 0 ? -1 : 1;\n      if (!amounts.value[index].partialColorize) {\n        amounts.value[index].value = getRandomInt(114, counter % 4 === 0) * multiply;\n      } else {\n        amounts.value[index].value += 0.09;\n      }\n      index++;\n      counter++;\n    };\n    return {\n      ...props,\n      amounts,\n      blink\n    };\n  },\n  template: `\n    <div\n      v-if=\"name === 'blinked'\"\n      class=\"mb-4\"\n    >\n      <Button\n        @click=\"blink\"\n      >\n        Make blink\n      </Button>\n    </div>\n    \n    <div class=\"flex gap-20\">\n      <div v-if=\"name !== 'blinked'\">\n        <div\n            v-for=\"props in amounts\"\n            class=\"mb-2 w-full\"\n        >\n          {{ String(props.value) }}\n        </div>\n      </div>\n  \n      <div>\n        <div v-for=\"props in amounts\" class=\"mb-2\">\n          <Amount\n              as=\"span\"\n              class=\"mr-4\"\n              v-bind=\"props\"\n          />\n          <template v-if=\"name !== 'blinked'\">\n            Text after\n          </template>\n        </div>\n      </div>\n    </div>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
WithBlinked.parameters = _object_spread_props(_object_spread({}, WithBlinked.parameters), {
    docs: _object_spread_props(_object_spread({}, (_WithBlinked_parameters = WithBlinked.parameters) === null || _WithBlinked_parameters === void 0 ? void 0 : _WithBlinked_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Amount,\n    Button\n  },\n  setup() {\n    const {\n      toggleDataVisibility\n    } = useHideData();\n    const amounts = ref([...props.amounts]);\n    toggleDataVisibility(true);\n    onUnmounted(() => {\n      toggleDataVisibility(false);\n    });\n    if (props.name !== \"blinked\") {\n      return {\n        amounts\n      };\n    }\n    let index = getRandomInt(props.amounts.length);\n    let counter = 0;\n    const blink = () => {\n      if (!amounts.value[index]) {\n        index = 0;\n      }\n      if (counter === 5) {\n        counter = 1;\n      }\n      const multiply = counter % 2 === 0 ? -1 : 1;\n      if (!amounts.value[index].partialColorize) {\n        amounts.value[index].value = getRandomInt(114, counter % 4 === 0) * multiply;\n      } else {\n        amounts.value[index].value += 0.09;\n      }\n      index++;\n      counter++;\n    };\n    return {\n      ...props,\n      amounts,\n      blink\n    };\n  },\n  template: `\n    <div\n      v-if=\"name === 'blinked'\"\n      class=\"mb-4\"\n    >\n      <Button\n        @click=\"blink\"\n      >\n        Make blink\n      </Button>\n    </div>\n    \n    <div class=\"flex gap-20\">\n      <div v-if=\"name !== 'blinked'\">\n        <div\n            v-for=\"props in amounts\"\n            class=\"mb-2 w-full\"\n        >\n          {{ String(props.value) }}\n        </div>\n      </div>\n  \n      <div>\n        <div v-for=\"props in amounts\" class=\"mb-2\">\n          <Amount\n              as=\"span\"\n              class=\"mr-4\"\n              v-bind=\"props\"\n          />\n          <template v-if=\"name !== 'blinked'\">\n            Text after\n          </template>\n        </div>\n      </div>\n    </div>\n  `\n})"
        }, (_WithBlinked_parameters1 = WithBlinked.parameters) === null || _WithBlinked_parameters1 === void 0 ? void 0 : (_WithBlinked_parameters_docs = _WithBlinked_parameters1.docs) === null || _WithBlinked_parameters_docs === void 0 ? void 0 : _WithBlinked_parameters_docs.source)
    })
});
ToggleDataVisibility.parameters = _object_spread_props(_object_spread({}, ToggleDataVisibility.parameters), {
    docs: _object_spread_props(_object_spread({}, (_ToggleDataVisibility_parameters = ToggleDataVisibility.parameters) === null || _ToggleDataVisibility_parameters === void 0 ? void 0 : _ToggleDataVisibility_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Amount,\n    Button\n  },\n  setup() {\n    const {\n      addListener,\n      removeListener,\n      toggleDataVisibility,\n      isDataHidden\n    } = useHideData();\n    function onEvent(e) {\n      toggleDataVisibility(e.detail);\n    }\n    toggleDataVisibility(true);\n    watchEffect(onCleanup => {\n      addListener(onEvent);\n      onCleanup(() => {\n        removeListener(onEvent);\n      });\n    });\n    onUnmounted(() => {\n      toggleDataVisibility(false);\n    });\n    return {\n      ...props,\n      isDataHidden,\n      toggleDataVisibility\n    };\n  },\n  template: `\n    <div class=\"max-w-xs\">\n      <div v-for=\"props in amounts\" class=\"flex flex-col gap-2\">\n        <Button\n          :disabled=\"isDataHidden\"\n          @click=\"toggleDataVisibility(true)\"\n        >\n          Hide data again\n        </Button>\n        <p class=\"mt-4\" :class=\"{ 'text-gray-300': !isDataHidden }\">\n          Click the amount to unhide the data\n        </p>\n        <Amount\n          v-bind=\"props\"\n        />\n      </div>\n    </div>\n  `\n})"
        }, (_ToggleDataVisibility_parameters1 = ToggleDataVisibility.parameters) === null || _ToggleDataVisibility_parameters1 === void 0 ? void 0 : (_ToggleDataVisibility_parameters_docs = _ToggleDataVisibility_parameters1.docs) === null || _ToggleDataVisibility_parameters_docs === void 0 ? void 0 : _ToggleDataVisibility_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default","WithBlinked","ToggleDataVisibility"];

export { Default, ToggleDataVisibility, WithBlinked, __namedExportsOrder, Amount_stories as default };
