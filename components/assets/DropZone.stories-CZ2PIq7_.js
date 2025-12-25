import { r as ref } from './iframe-B-YMhJRM.js';
import { D as DropZone, a as DraggableItem } from './DropZone-C9W-KNp2.js';
import './useTheme-Cy0CkrhV.js';

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
var _Default_parameters, _Default_parameters_docs, _Default_parameters1, _Custom_parameters, _Custom_parameters_docs, _Custom_parameters1;
const DropZone_stories = {
    title: "Components/DropZone",
    component: DropZone
};
const DefaultTemplate = (args)=>({
        components: {
            DraggableItem,
            DropZone
        },
        setup () {
            const groupMain = ref({
                lists: [
                    args.lists[1]
                ]
            });
            return _object_spread_props(_object_spread({}, args), {
                groupMain
            });
        },
        template: `
    <section>
      <DropZone v-model:group="groupMain">
        <DraggableItem
          v-for="(item, itemIndex) in lists[1]"
          :key="itemIndex"
          :value="item"
        >
          {{ item.label }}
        </DraggableItem>
      </DropZone>
    </section>
  `
    });
const Default = DefaultTemplate.bind({});
const deafaulArgs = {
    listsConfig: [
        {
            sort: true
        },
        {
            sort: false
        },
        {
            sort: false
        }
    ],
    lists: [
        [
            {
                id: "bval",
                label: "Балансовая",
                order: 0
            },
            {
                id: "profit_close",
                label: "На вчера",
                order: 1
            }
        ],
        [
            {
                id: "tprofitp",
                label: "За сегодня (%)",
                order: 2
            },
            {
                id: "gain",
                label: "За все время (%)",
                order: 3
            },
            {
                id: "vm",
                label: "Вариационная маржа",
                order: 4
            },
            {
                id: "go",
                label: "Гарантийное обеспечение",
                order: 5
            },
            {
                id: "type",
                label: "Тип бумаги",
                order: 6
            },
            {
                id: "instr_name",
                label: "Название",
                order: 7
            }
        ],
        [
            {
                id: "code",
                label: "Тикер",
                order: 8,
                isUnremovable: true
            },
            {
                id: "cur_bal_q",
                label: "Кол-во",
                order: 9,
                isUnremovable: true
            },
            {
                id: "otp",
                label: "Цена входа",
                order: 10
            },
            {
                id: "mval",
                label: "Стоимость",
                order: 11
            }
        ]
    ]
};
Default.args = deafaulArgs;
const CustomTemplate = (args)=>({
        components: {
            DraggableItem,
            DropZone
        },
        setup () {
            const groupMain = ref(_object_spread({}, args));
            return _object_spread_props(_object_spread({}, args), {
                groupMain
            });
        },
        template: `
    <section>
      <div class="flex gap-2">
        <DropZone
          class="h-[calc(24px*5)]"
          v-for="(listItems, index) in groupMain.lists"
          :key="index"
          v-model:group="groupMain"
          :sort="index === 0"
        >
          <DraggableItem
            v-for="(item, itemIndex) in listItems"
            :key="itemIndex"
            :value="item"
          >
            <template #="{ dragging, hover }">
              <div
                class="flex items-center relative text-xs bg-gray-100 px-3 h-6"
                :class="{
                'bg-green-100': hover,
                'opacity-50': dragging,
                'bg-red-100': item.isUnremovable,
              }">
                {{ item.label }}
              </div>
            </template>
            <template #item-blank="{ dragging, hover }" class="bg-red-100 h-6" />
          </DraggableItem>
        </DropZone>  
      </div>
    </section>
  `
    });
const Custom = CustomTemplate.bind({});
Custom.args = deafaulArgs;
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    DraggableItem,\n    DropZone\n  },\n  setup() {\n    const groupMain = ref({\n      lists: [args.lists[1]]\n    });\n    return {\n      ...args,\n      groupMain\n    };\n  },\n  template: `\n    <section>\n      <DropZone v-model:group=\"groupMain\">\n        <DraggableItem\n          v-for=\"(item, itemIndex) in lists[1]\"\n          :key=\"itemIndex\"\n          :value=\"item\"\n        >\n          {{ item.label }}\n        </DraggableItem>\n      </DropZone>\n    </section>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
Custom.parameters = _object_spread_props(_object_spread({}, Custom.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Custom_parameters = Custom.parameters) === null || _Custom_parameters === void 0 ? void 0 : _Custom_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    DraggableItem,\n    DropZone\n  },\n  setup() {\n    const groupMain = ref({\n      ...args\n    });\n    return {\n      ...args,\n      groupMain\n    };\n  },\n  template: `\n    <section>\n      <div class=\"flex gap-2\">\n        <DropZone\n          class=\"h-[calc(24px*5)]\"\n          v-for=\"(listItems, index) in groupMain.lists\"\n          :key=\"index\"\n          v-model:group=\"groupMain\"\n          :sort=\"index === 0\"\n        >\n          <DraggableItem\n            v-for=\"(item, itemIndex) in listItems\"\n            :key=\"itemIndex\"\n            :value=\"item\"\n          >\n            <template #=\"{ dragging, hover }\">\n              <div\n                class=\"flex items-center relative text-xs bg-gray-100 px-3 h-6\"\n                :class=\"{\n                'bg-green-100': hover,\n                'opacity-50': dragging,\n                'bg-red-100': item.isUnremovable,\n              }\">\n                {{ item.label }}\n              </div>\n            </template>\n            <template #item-blank=\"{ dragging, hover }\" class=\"bg-red-100 h-6\" />\n          </DraggableItem>\n        </DropZone>  \n      </div>\n    </section>\n  `\n})"
        }, (_Custom_parameters1 = Custom.parameters) === null || _Custom_parameters1 === void 0 ? void 0 : (_Custom_parameters_docs = _Custom_parameters1.docs) === null || _Custom_parameters_docs === void 0 ? void 0 : _Custom_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default","Custom"];

export { Custom, Default, __namedExportsOrder, DropZone_stories as default };
