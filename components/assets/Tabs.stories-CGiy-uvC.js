import { T as Tabs, a as Tab, _ as _sfc_main } from './Tabs-lgfu6fdG.js';
import './iframe-B-YMhJRM.js';
import './constants-BNWoBBcu.js';
import './keyboard-Y5Ohh0Ec.js';
import './use-resolve-button-type-BRMzcgpv.js';
import './focus-management-CfDY3olH.js';
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
var _UnderlinedTabs_parameters, _UnderlinedTabs_parameters_docs, _UnderlinedTabs_parameters1, _PillTabs_parameters, _PillTabs_parameters_docs, _PillTabs_parameters1, _ButtonTabs_parameters, _ButtonTabs_parameters_docs, _ButtonTabs_parameters1;
const Tabs_stories = {
    title: "Components/Tabs",
    component: Tabs
};
const Template = (args)=>({
        components: {
            Tab,
            TabPanel: _sfc_main,
            Tabs
        },
        props: _object_spread({}, Tabs.props),
        setup () {
            return _object_spread({}, args);
        },
        template: `
    <Tabs :type="type">
      <template #tabs="{ selectedIndex }">
        <Tab v-slot="{ selected }" v-for="(tab, idx) in tabs" :key="idx" 
            :class="{ active: selectedIndex === idx }"
        >
          {{ tab.title }}
        </Tab>
      </template>
      <template #panels>
        <TabPanel class="dark:text-white" v-for="tab in tabs">
          {{ tab.title }}
        </TabPanel>
      </template>
    </Tabs>
  `
    });
const UnderlinedTabs = Template.bind({});
UnderlinedTabs.args = {
    type: "underlined",
    tabs: [
        {
            title: "Общие условия"
        },
        {
            title: "Привлеченные вами клиенты"
        },
        {
            title: "История начисления баллов"
        }
    ]
};
const PillTabs = Template.bind({});
PillTabs.args = {
    type: "pill",
    tabs: [
        {
            title: "Обзор"
        },
        {
            title: "Аналитика"
        },
        {
            title: "Отчеты"
        }
    ]
};
const ButtonTabs = Template.bind({});
ButtonTabs.args = {
    type: "button",
    tabs: [
        {
            title: "Обзор"
        },
        {
            title: "Аналитика"
        },
        {
            title: "Отчеты"
        }
    ]
};
UnderlinedTabs.parameters = _object_spread_props(_object_spread({}, UnderlinedTabs.parameters), {
    docs: _object_spread_props(_object_spread({}, (_UnderlinedTabs_parameters = UnderlinedTabs.parameters) === null || _UnderlinedTabs_parameters === void 0 ? void 0 : _UnderlinedTabs_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Tab,\n    TabPanel,\n    Tabs\n  },\n  props: {\n    ...Tabs.props\n  },\n  setup() {\n    return {\n      ...args\n    };\n  },\n  template: `\n    <Tabs :type=\"type\">\n      <template #tabs=\"{ selectedIndex }\">\n        <Tab v-slot=\"{ selected }\" v-for=\"(tab, idx) in tabs\" :key=\"idx\" \n            :class=\"{ active: selectedIndex === idx }\"\n        >\n          {{ tab.title }}\n        </Tab>\n      </template>\n      <template #panels>\n        <TabPanel class=\"dark:text-white\" v-for=\"tab in tabs\">\n          {{ tab.title }}\n        </TabPanel>\n      </template>\n    </Tabs>\n  `\n})"
        }, (_UnderlinedTabs_parameters1 = UnderlinedTabs.parameters) === null || _UnderlinedTabs_parameters1 === void 0 ? void 0 : (_UnderlinedTabs_parameters_docs = _UnderlinedTabs_parameters1.docs) === null || _UnderlinedTabs_parameters_docs === void 0 ? void 0 : _UnderlinedTabs_parameters_docs.source)
    })
});
PillTabs.parameters = _object_spread_props(_object_spread({}, PillTabs.parameters), {
    docs: _object_spread_props(_object_spread({}, (_PillTabs_parameters = PillTabs.parameters) === null || _PillTabs_parameters === void 0 ? void 0 : _PillTabs_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Tab,\n    TabPanel,\n    Tabs\n  },\n  props: {\n    ...Tabs.props\n  },\n  setup() {\n    return {\n      ...args\n    };\n  },\n  template: `\n    <Tabs :type=\"type\">\n      <template #tabs=\"{ selectedIndex }\">\n        <Tab v-slot=\"{ selected }\" v-for=\"(tab, idx) in tabs\" :key=\"idx\" \n            :class=\"{ active: selectedIndex === idx }\"\n        >\n          {{ tab.title }}\n        </Tab>\n      </template>\n      <template #panels>\n        <TabPanel class=\"dark:text-white\" v-for=\"tab in tabs\">\n          {{ tab.title }}\n        </TabPanel>\n      </template>\n    </Tabs>\n  `\n})"
        }, (_PillTabs_parameters1 = PillTabs.parameters) === null || _PillTabs_parameters1 === void 0 ? void 0 : (_PillTabs_parameters_docs = _PillTabs_parameters1.docs) === null || _PillTabs_parameters_docs === void 0 ? void 0 : _PillTabs_parameters_docs.source)
    })
});
ButtonTabs.parameters = _object_spread_props(_object_spread({}, ButtonTabs.parameters), {
    docs: _object_spread_props(_object_spread({}, (_ButtonTabs_parameters = ButtonTabs.parameters) === null || _ButtonTabs_parameters === void 0 ? void 0 : _ButtonTabs_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Tab,\n    TabPanel,\n    Tabs\n  },\n  props: {\n    ...Tabs.props\n  },\n  setup() {\n    return {\n      ...args\n    };\n  },\n  template: `\n    <Tabs :type=\"type\">\n      <template #tabs=\"{ selectedIndex }\">\n        <Tab v-slot=\"{ selected }\" v-for=\"(tab, idx) in tabs\" :key=\"idx\" \n            :class=\"{ active: selectedIndex === idx }\"\n        >\n          {{ tab.title }}\n        </Tab>\n      </template>\n      <template #panels>\n        <TabPanel class=\"dark:text-white\" v-for=\"tab in tabs\">\n          {{ tab.title }}\n        </TabPanel>\n      </template>\n    </Tabs>\n  `\n})"
        }, (_ButtonTabs_parameters1 = ButtonTabs.parameters) === null || _ButtonTabs_parameters1 === void 0 ? void 0 : (_ButtonTabs_parameters_docs = _ButtonTabs_parameters1.docs) === null || _ButtonTabs_parameters_docs === void 0 ? void 0 : _ButtonTabs_parameters_docs.source)
    })
});
const __namedExportsOrder = ["UnderlinedTabs","PillTabs","ButtonTabs"];

export { ButtonTabs, PillTabs, UnderlinedTabs, __namedExportsOrder, Tabs_stories as default };
