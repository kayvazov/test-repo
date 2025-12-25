import { a as reactive, r as ref } from './iframe-B-YMhJRM.js';
import { S as Select } from './Select-BrvdAO34.js';
import { S as SelectOption } from './SelectOption-D8MCSwFb.js';
import { r as render } from './CheckIcon-CfIKdVGN.js';
import './listbox-xfprdXMl.js';
import './form-B5TVLiQV.js';
import './keyboard-Y5Ohh0Ec.js';
import './open-closed-n-oNVJpd.js';
import './focus-management-CfDY3olH.js';
import './use-resolve-button-type-BRMzcgpv.js';
import './calculate-active-index-BtXYA8d0.js';

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
var _Native_parameters, _Native_parameters_docs, _Native_parameters1, _Custom_parameters, _Custom_parameters_docs, _Custom_parameters1, _CustomWithError_parameters, _CustomWithError_parameters_docs, _CustomWithError_parameters1, _CustomWithCheckOnRight_parameters, _CustomWithCheckOnRight_parameters_docs, _CustomWithCheckOnRight_parameters1, _ScrollIntoView_parameters, _ScrollIntoView_parameters_docs, _ScrollIntoView_parameters1, _AllSizes_parameters, _AllSizes_parameters_docs, _AllSizes_parameters1, _Multiple_parameters, _Multiple_parameters_docs, _Multiple_parameters1, _ClearableNative_parameters, _ClearableNative_parameters_docs, _ClearableNative_parameters1, _ClearableCustom_parameters, _ClearableCustom_parameters_docs, _ClearableCustom_parameters1, _MultipleWithValue_parameters, _MultipleWithValue_parameters_docs, _MultipleWithValue_parameters1, _WithSingleOptionPerGroup_parameters, _WithSingleOptionPerGroup_parameters_docs, _WithSingleOptionPerGroup_parameters1;
const Select_stories = {
    title: "Components/Select",
    component: Select
};
const items = Array.from(Array(50)).map((_, index)=>({
        label: `Label ${index + 1}`,
        value: index + 1
    }));
const Template = (props)=>({
        components: {
            Select,
            SelectOption,
            CheckIcon: render
        },
        setup () {
            const selected = ref(props.isMultiple ? [
                props.items[0],
                props.items[1]
            ] : props.items[0]);
            return _object_spread_props(_object_spread({}, props), {
                selected
            });
        },
        template: `
    <Select v-if="isNative" v-model="selected" :is-native="isNative" :clearable="isClearable">
      ${props.slots}
    </Select>
    <Select
      v-else
      v-model="selected"
      :has-error="hasError"
      :is-multiple="isMultiple"
      :clearable="isClearable"
    >
      ${props.slots}
    </Select>
  `
    });
const Native = Template.bind({});
Native.args = {
    items,
    isNative: true,
    slots: `
    <template #options>
        <option v-for="item in items" :key="item.value" :value="item.value" :data-label="item.label">{{ item.label }}</option>
    </template>
  `
};
const Custom = Template.bind({});
Custom.args = {
    items,
    isNative: false,
    slots: `
    <template #label="{selected}">
        {{ selected.label }}
    </template>
    <template #options>
      <SelectOption v-for="item in items" :key="item.value" :value="item" />
    </template>
  `
};
const CustomWithError = Template.bind({});
CustomWithError.args = {
    items,
    hasError: true,
    isNative: false,
    slots: `
    <template #label="{selected}">
        {{ selected.label }}
    </template>
    <template #options>
      <SelectOption v-for="item in items" :key="item.value" :value="item" />
    </template>
  `
};
const CustomWithCheckOnRight = Template.bind({});
CustomWithCheckOnRight.args = {
    items,
    isNative: false,
    slots: `
    <template #options>
      <SelectOption v-for="item in items" :key="item.value" :value="item" with-check-icon />
    </template>
  `
};
const ScrollIntoView = Template.bind({});
ScrollIntoView.args = {
    items,
    isNative: false,
    slots: `
    <template #options>
      <SelectOption v-for="item in items" :key="item.value" :value="item" :scroll-into-view="item.value === 20" />
    </template>
  `
};
const AllSizes = (args)=>({
        setup () {
            const list = reactive(args.sizes.map((size)=>({
                    size,
                    items,
                    selected: items[0]
                })));
            const isClearable = reactive(false);
            return _object_spread_props(_object_spread({}, args), {
                list,
                isClearable
            });
        },
        components: {
            Select,
            SelectOption
        },
        template: `
    <div>
      <label>
        Clearable
        <input type="checkbox" v-model="isClearable" class="ml-2">
      </label>
    </div>
    <Select
        v-for="item in list"
        :key="item.size"
        v-model="item.selected"
        :size="item.size"
        class="mb-4"
        :clearable="isClearable"
    >
      <template #label>
        {{ item.size }}
      </template>
      <template #options>
        <SelectOption v-for="option in item.items" :value="option">
          {{ option.label }}
        </SelectOption>
      </template>
    </Select>
  
    <h2 class="mt-8">Native select</h2>
    
    <Select
          v-for="item in list"
          :key="item.size"
          v-model="item.selected"
          is-native
          :size="item.size"
          class="mb-4"
          :clearable="isClearable"
      >
      <template #label>
        {{ item.size }}
      </template>
      <template #options>
        <option
            v-for="option in item.items"
            :value="option.value"
            :data-label="option.label"
        >
          {{ option.label }}
        </option>
      </template>
    </Select>
  `
    });
AllSizes.args = {
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ]
};
const Multiple = Template.bind({});
Multiple.args = {
    items,
    isNative: false,
    isMultiple: true,
    isClearable: true,
    slots: `
    <template #options>
      <SelectOption v-for="item in items" :key="item.value" :value="item" />
    </template>
  `
};
const ClearableNative = Template.bind({});
ClearableNative.args = {
    items,
    isNative: true,
    isClearable: true,
    slots: `
    <template #options>
        <option 
           v-for="item in items"
           :key="item.value"
           :value="item.value"
           :data-label="item.label"
        >
          {{ item.label }}
        </option>
    </template>
  `
};
const ClearableCustom = Template.bind({});
ClearableCustom.args = {
    items,
    isNative: false,
    isClearable: true,
    slots: `
    <template #options>
      <SelectOption v-for="item in items" :key="item.value" :value="item" />
    </template>
  `
};
const MultipleWithValue = Template.bind({});
MultipleWithValue.args = {
    items,
    isNative: false,
    isMultiple: true,
    slots: `
    <template #value="{ selected }">
      {{ selected.map((el) => el.label).join(", ") }}
    </template>
    <template #options>
      <SelectOption v-for="item in items" :key="item.value" :value="item" />
    </template>
  `
};
const WithSingleOptionPerGroup = (props)=>({
        components: {
            Select,
            SelectOption
        },
        setup () {
            const selected = ref(Object.keys(props.items).reduce((acc, key)=>{
                acc[key] = props.items[key][0];
                return acc;
            }, {}));
            function handleChange(value) {
                selected.value[value.group] = value;
            }
            function compare(a, b) {
                return a[b.group].id === b.id;
            }
            return _object_spread_props(_object_spread({}, props), {
                selected,
                handleChange,
                compare
            });
        },
        template: `
    <Select
      :modelValue="selected"
      @update:modelValue="handleChange"
      :by="compare"
    >
      ${props.slots}
    </Select>
  `
    });
WithSingleOptionPerGroup.args = {
    items: {
        Group1: [
            {
                label: "Option 1",
                value: 1,
                group: "Group1",
                id: 1
            },
            {
                label: "Option 2",
                value: 2,
                group: "Group1",
                id: 2
            }
        ],
        Group2: [
            {
                label: "Option 3",
                value: 3,
                group: "Group2",
                id: 3
            },
            {
                label: "Option 4",
                value: 4,
                group: "Group2",
                id: 4
            },
            {
                label: "Option 5",
                value: 5,
                group: "Group2",
                id: 5
            }
        ]
    },
    isNative: false,
    slots: `
    <template #value="{ selected }">
      {{ Object.values(selected).map((el) => el.label).join(", ") }}
    </template>
    <template #options>
      <template v-for="(group, key, index) in items" :key="key">
        <SelectOption v-for="item in group" :key="item.id" :value="item" with-check-icon />
        <hr v-if="index !== Object.keys(items).length - 1" class="my-2" />
      </template>
    </template>
  `
};
Native.parameters = _object_spread_props(_object_spread({}, Native.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Native_parameters = Native.parameters) === null || _Native_parameters === void 0 ? void 0 : _Native_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Select,\n    SelectOption,\n    CheckIcon\n  },\n  setup() {\n    const selected = ref(props.isMultiple ? [props.items[0], props.items[1]] : props.items[0]);\n    return {\n      ...props,\n      selected\n    };\n  },\n  template: `\n    <Select v-if=\"isNative\" v-model=\"selected\" :is-native=\"isNative\" :clearable=\"isClearable\">\n      ${props.slots}\n    </Select>\n    <Select\n      v-else\n      v-model=\"selected\"\n      :has-error=\"hasError\"\n      :is-multiple=\"isMultiple\"\n      :clearable=\"isClearable\"\n    >\n      ${props.slots}\n    </Select>\n  `\n})"
        }, (_Native_parameters1 = Native.parameters) === null || _Native_parameters1 === void 0 ? void 0 : (_Native_parameters_docs = _Native_parameters1.docs) === null || _Native_parameters_docs === void 0 ? void 0 : _Native_parameters_docs.source)
    })
});
Custom.parameters = _object_spread_props(_object_spread({}, Custom.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Custom_parameters = Custom.parameters) === null || _Custom_parameters === void 0 ? void 0 : _Custom_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Select,\n    SelectOption,\n    CheckIcon\n  },\n  setup() {\n    const selected = ref(props.isMultiple ? [props.items[0], props.items[1]] : props.items[0]);\n    return {\n      ...props,\n      selected\n    };\n  },\n  template: `\n    <Select v-if=\"isNative\" v-model=\"selected\" :is-native=\"isNative\" :clearable=\"isClearable\">\n      ${props.slots}\n    </Select>\n    <Select\n      v-else\n      v-model=\"selected\"\n      :has-error=\"hasError\"\n      :is-multiple=\"isMultiple\"\n      :clearable=\"isClearable\"\n    >\n      ${props.slots}\n    </Select>\n  `\n})"
        }, (_Custom_parameters1 = Custom.parameters) === null || _Custom_parameters1 === void 0 ? void 0 : (_Custom_parameters_docs = _Custom_parameters1.docs) === null || _Custom_parameters_docs === void 0 ? void 0 : _Custom_parameters_docs.source)
    })
});
CustomWithError.parameters = _object_spread_props(_object_spread({}, CustomWithError.parameters), {
    docs: _object_spread_props(_object_spread({}, (_CustomWithError_parameters = CustomWithError.parameters) === null || _CustomWithError_parameters === void 0 ? void 0 : _CustomWithError_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Select,\n    SelectOption,\n    CheckIcon\n  },\n  setup() {\n    const selected = ref(props.isMultiple ? [props.items[0], props.items[1]] : props.items[0]);\n    return {\n      ...props,\n      selected\n    };\n  },\n  template: `\n    <Select v-if=\"isNative\" v-model=\"selected\" :is-native=\"isNative\" :clearable=\"isClearable\">\n      ${props.slots}\n    </Select>\n    <Select\n      v-else\n      v-model=\"selected\"\n      :has-error=\"hasError\"\n      :is-multiple=\"isMultiple\"\n      :clearable=\"isClearable\"\n    >\n      ${props.slots}\n    </Select>\n  `\n})"
        }, (_CustomWithError_parameters1 = CustomWithError.parameters) === null || _CustomWithError_parameters1 === void 0 ? void 0 : (_CustomWithError_parameters_docs = _CustomWithError_parameters1.docs) === null || _CustomWithError_parameters_docs === void 0 ? void 0 : _CustomWithError_parameters_docs.source)
    })
});
CustomWithCheckOnRight.parameters = _object_spread_props(_object_spread({}, CustomWithCheckOnRight.parameters), {
    docs: _object_spread_props(_object_spread({}, (_CustomWithCheckOnRight_parameters = CustomWithCheckOnRight.parameters) === null || _CustomWithCheckOnRight_parameters === void 0 ? void 0 : _CustomWithCheckOnRight_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Select,\n    SelectOption,\n    CheckIcon\n  },\n  setup() {\n    const selected = ref(props.isMultiple ? [props.items[0], props.items[1]] : props.items[0]);\n    return {\n      ...props,\n      selected\n    };\n  },\n  template: `\n    <Select v-if=\"isNative\" v-model=\"selected\" :is-native=\"isNative\" :clearable=\"isClearable\">\n      ${props.slots}\n    </Select>\n    <Select\n      v-else\n      v-model=\"selected\"\n      :has-error=\"hasError\"\n      :is-multiple=\"isMultiple\"\n      :clearable=\"isClearable\"\n    >\n      ${props.slots}\n    </Select>\n  `\n})"
        }, (_CustomWithCheckOnRight_parameters1 = CustomWithCheckOnRight.parameters) === null || _CustomWithCheckOnRight_parameters1 === void 0 ? void 0 : (_CustomWithCheckOnRight_parameters_docs = _CustomWithCheckOnRight_parameters1.docs) === null || _CustomWithCheckOnRight_parameters_docs === void 0 ? void 0 : _CustomWithCheckOnRight_parameters_docs.source)
    })
});
ScrollIntoView.parameters = _object_spread_props(_object_spread({}, ScrollIntoView.parameters), {
    docs: _object_spread_props(_object_spread({}, (_ScrollIntoView_parameters = ScrollIntoView.parameters) === null || _ScrollIntoView_parameters === void 0 ? void 0 : _ScrollIntoView_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Select,\n    SelectOption,\n    CheckIcon\n  },\n  setup() {\n    const selected = ref(props.isMultiple ? [props.items[0], props.items[1]] : props.items[0]);\n    return {\n      ...props,\n      selected\n    };\n  },\n  template: `\n    <Select v-if=\"isNative\" v-model=\"selected\" :is-native=\"isNative\" :clearable=\"isClearable\">\n      ${props.slots}\n    </Select>\n    <Select\n      v-else\n      v-model=\"selected\"\n      :has-error=\"hasError\"\n      :is-multiple=\"isMultiple\"\n      :clearable=\"isClearable\"\n    >\n      ${props.slots}\n    </Select>\n  `\n})"
        }, (_ScrollIntoView_parameters1 = ScrollIntoView.parameters) === null || _ScrollIntoView_parameters1 === void 0 ? void 0 : (_ScrollIntoView_parameters_docs = _ScrollIntoView_parameters1.docs) === null || _ScrollIntoView_parameters_docs === void 0 ? void 0 : _ScrollIntoView_parameters_docs.source)
    })
});
AllSizes.parameters = _object_spread_props(_object_spread({}, AllSizes.parameters), {
    docs: _object_spread_props(_object_spread({}, (_AllSizes_parameters = AllSizes.parameters) === null || _AllSizes_parameters === void 0 ? void 0 : _AllSizes_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  setup() {\n    const list = reactive(args.sizes.map(size => ({\n      size,\n      items,\n      selected: items[0]\n    })));\n    const isClearable = reactive(false);\n    return {\n      ...args,\n      list,\n      isClearable\n    };\n  },\n  components: {\n    Select,\n    SelectOption\n  },\n  template: `\n    <div>\n      <label>\n        Clearable\n        <input type=\"checkbox\" v-model=\"isClearable\" class=\"ml-2\">\n      </label>\n    </div>\n    <Select\n        v-for=\"item in list\"\n        :key=\"item.size\"\n        v-model=\"item.selected\"\n        :size=\"item.size\"\n        class=\"mb-4\"\n        :clearable=\"isClearable\"\n    >\n      <template #label>\n        {{ item.size }}\n      </template>\n      <template #options>\n        <SelectOption v-for=\"option in item.items\" :value=\"option\">\n          {{ option.label }}\n        </SelectOption>\n      </template>\n    </Select>\n  \n    <h2 class=\"mt-8\">Native select</h2>\n    \n    <Select\n          v-for=\"item in list\"\n          :key=\"item.size\"\n          v-model=\"item.selected\"\n          is-native\n          :size=\"item.size\"\n          class=\"mb-4\"\n          :clearable=\"isClearable\"\n      >\n      <template #label>\n        {{ item.size }}\n      </template>\n      <template #options>\n        <option\n            v-for=\"option in item.items\"\n            :value=\"option.value\"\n            :data-label=\"option.label\"\n        >\n          {{ option.label }}\n        </option>\n      </template>\n    </Select>\n  `\n})"
        }, (_AllSizes_parameters1 = AllSizes.parameters) === null || _AllSizes_parameters1 === void 0 ? void 0 : (_AllSizes_parameters_docs = _AllSizes_parameters1.docs) === null || _AllSizes_parameters_docs === void 0 ? void 0 : _AllSizes_parameters_docs.source)
    })
});
Multiple.parameters = _object_spread_props(_object_spread({}, Multiple.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Multiple_parameters = Multiple.parameters) === null || _Multiple_parameters === void 0 ? void 0 : _Multiple_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Select,\n    SelectOption,\n    CheckIcon\n  },\n  setup() {\n    const selected = ref(props.isMultiple ? [props.items[0], props.items[1]] : props.items[0]);\n    return {\n      ...props,\n      selected\n    };\n  },\n  template: `\n    <Select v-if=\"isNative\" v-model=\"selected\" :is-native=\"isNative\" :clearable=\"isClearable\">\n      ${props.slots}\n    </Select>\n    <Select\n      v-else\n      v-model=\"selected\"\n      :has-error=\"hasError\"\n      :is-multiple=\"isMultiple\"\n      :clearable=\"isClearable\"\n    >\n      ${props.slots}\n    </Select>\n  `\n})"
        }, (_Multiple_parameters1 = Multiple.parameters) === null || _Multiple_parameters1 === void 0 ? void 0 : (_Multiple_parameters_docs = _Multiple_parameters1.docs) === null || _Multiple_parameters_docs === void 0 ? void 0 : _Multiple_parameters_docs.source)
    })
});
ClearableNative.parameters = _object_spread_props(_object_spread({}, ClearableNative.parameters), {
    docs: _object_spread_props(_object_spread({}, (_ClearableNative_parameters = ClearableNative.parameters) === null || _ClearableNative_parameters === void 0 ? void 0 : _ClearableNative_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Select,\n    SelectOption,\n    CheckIcon\n  },\n  setup() {\n    const selected = ref(props.isMultiple ? [props.items[0], props.items[1]] : props.items[0]);\n    return {\n      ...props,\n      selected\n    };\n  },\n  template: `\n    <Select v-if=\"isNative\" v-model=\"selected\" :is-native=\"isNative\" :clearable=\"isClearable\">\n      ${props.slots}\n    </Select>\n    <Select\n      v-else\n      v-model=\"selected\"\n      :has-error=\"hasError\"\n      :is-multiple=\"isMultiple\"\n      :clearable=\"isClearable\"\n    >\n      ${props.slots}\n    </Select>\n  `\n})"
        }, (_ClearableNative_parameters1 = ClearableNative.parameters) === null || _ClearableNative_parameters1 === void 0 ? void 0 : (_ClearableNative_parameters_docs = _ClearableNative_parameters1.docs) === null || _ClearableNative_parameters_docs === void 0 ? void 0 : _ClearableNative_parameters_docs.source)
    })
});
ClearableCustom.parameters = _object_spread_props(_object_spread({}, ClearableCustom.parameters), {
    docs: _object_spread_props(_object_spread({}, (_ClearableCustom_parameters = ClearableCustom.parameters) === null || _ClearableCustom_parameters === void 0 ? void 0 : _ClearableCustom_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Select,\n    SelectOption,\n    CheckIcon\n  },\n  setup() {\n    const selected = ref(props.isMultiple ? [props.items[0], props.items[1]] : props.items[0]);\n    return {\n      ...props,\n      selected\n    };\n  },\n  template: `\n    <Select v-if=\"isNative\" v-model=\"selected\" :is-native=\"isNative\" :clearable=\"isClearable\">\n      ${props.slots}\n    </Select>\n    <Select\n      v-else\n      v-model=\"selected\"\n      :has-error=\"hasError\"\n      :is-multiple=\"isMultiple\"\n      :clearable=\"isClearable\"\n    >\n      ${props.slots}\n    </Select>\n  `\n})"
        }, (_ClearableCustom_parameters1 = ClearableCustom.parameters) === null || _ClearableCustom_parameters1 === void 0 ? void 0 : (_ClearableCustom_parameters_docs = _ClearableCustom_parameters1.docs) === null || _ClearableCustom_parameters_docs === void 0 ? void 0 : _ClearableCustom_parameters_docs.source)
    })
});
MultipleWithValue.parameters = _object_spread_props(_object_spread({}, MultipleWithValue.parameters), {
    docs: _object_spread_props(_object_spread({}, (_MultipleWithValue_parameters = MultipleWithValue.parameters) === null || _MultipleWithValue_parameters === void 0 ? void 0 : _MultipleWithValue_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Select,\n    SelectOption,\n    CheckIcon\n  },\n  setup() {\n    const selected = ref(props.isMultiple ? [props.items[0], props.items[1]] : props.items[0]);\n    return {\n      ...props,\n      selected\n    };\n  },\n  template: `\n    <Select v-if=\"isNative\" v-model=\"selected\" :is-native=\"isNative\" :clearable=\"isClearable\">\n      ${props.slots}\n    </Select>\n    <Select\n      v-else\n      v-model=\"selected\"\n      :has-error=\"hasError\"\n      :is-multiple=\"isMultiple\"\n      :clearable=\"isClearable\"\n    >\n      ${props.slots}\n    </Select>\n  `\n})"
        }, (_MultipleWithValue_parameters1 = MultipleWithValue.parameters) === null || _MultipleWithValue_parameters1 === void 0 ? void 0 : (_MultipleWithValue_parameters_docs = _MultipleWithValue_parameters1.docs) === null || _MultipleWithValue_parameters_docs === void 0 ? void 0 : _MultipleWithValue_parameters_docs.source)
    })
});
WithSingleOptionPerGroup.parameters = _object_spread_props(_object_spread({}, WithSingleOptionPerGroup.parameters), {
    docs: _object_spread_props(_object_spread({}, (_WithSingleOptionPerGroup_parameters = WithSingleOptionPerGroup.parameters) === null || _WithSingleOptionPerGroup_parameters === void 0 ? void 0 : _WithSingleOptionPerGroup_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Select,\n    SelectOption\n  },\n  setup() {\n    const selected = ref(Object.keys(props.items).reduce((acc, key) => {\n      acc[key] = props.items[key][0];\n      return acc;\n    }, {}));\n    function handleChange(value) {\n      selected.value[value.group] = value;\n    }\n    function compare(a, b) {\n      return a[b.group].id === b.id;\n    }\n    return {\n      ...props,\n      selected,\n      handleChange,\n      compare\n    };\n  },\n  template: `\n    <Select\n      :modelValue=\"selected\"\n      @update:modelValue=\"handleChange\"\n      :by=\"compare\"\n    >\n      ${props.slots}\n    </Select>\n  `\n})"
        }, (_WithSingleOptionPerGroup_parameters1 = WithSingleOptionPerGroup.parameters) === null || _WithSingleOptionPerGroup_parameters1 === void 0 ? void 0 : (_WithSingleOptionPerGroup_parameters_docs = _WithSingleOptionPerGroup_parameters1.docs) === null || _WithSingleOptionPerGroup_parameters_docs === void 0 ? void 0 : _WithSingleOptionPerGroup_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Native","Custom","CustomWithError","CustomWithCheckOnRight","ScrollIntoView","AllSizes","Multiple","ClearableNative","ClearableCustom","MultipleWithValue","WithSingleOptionPerGroup"];

export { AllSizes, ClearableCustom, ClearableNative, Custom, CustomWithCheckOnRight, CustomWithError, Multiple, MultipleWithValue, Native, ScrollIntoView, WithSingleOptionPerGroup, __namedExportsOrder, Select_stories as default };
