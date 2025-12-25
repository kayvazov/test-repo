import { D as Dropdown, a as DropdownBody, _ as _sfc_main } from './DropdownBody-CawdB6hu.js';
import './iframe-B-YMhJRM.js';
import './portal-xOeomrXK.js';
import './focus-management-CfDY3olH.js';
import './keyboard-Y5Ohh0Ec.js';
import './open-closed-n-oNVJpd.js';
import './use-resolve-button-type-BRMzcgpv.js';

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
const Dropdown_stories = {
    title: "Components/Dropdown",
    component: {
        Dropdown
    }
};
const Template = (args)=>({
        components: {
            Dropdown,
            DropdownBody,
            DropdownButton: _sfc_main
        },
        setup () {
            return _object_spread({}, args);
        },
        template: `
    <Dropdown class="relative" #="{ open, close }">
      <DropdownButton
        class="inline-flex items-center px-4 py-2 bg-green-600 border border-green-600 text-sm font-medium text-white"
      >
        {{ open ? "Открыто" : "Закрыто" }}
      </DropdownButton>
      <DropdownBody
        class="absolute top-14 left-10 w-1/4"
        with-overlay
        with-scroll-lock
        :open="open"
        :close="close"
      >
        <div
          class="p-4 border border-gray-200 dark:border-gray-800 last:border-b-none"
        >
          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
        </div>
      </DropdownBody>
    </Dropdown>
  `
    });
const Default = Template.bind({});
Default.args = {};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Dropdown,\n    DropdownBody,\n    DropdownButton\n  },\n  setup() {\n    return {\n      ...args\n    };\n  },\n  template: `\n    <Dropdown class=\"relative\" #=\"{ open, close }\">\n      <DropdownButton\n        class=\"inline-flex items-center px-4 py-2 bg-green-600 border border-green-600 text-sm font-medium text-white\"\n      >\n        {{ open ? \"\u041E\u0442\u043A\u0440\u044B\u0442\u043E\" : \"\u0417\u0430\u043A\u0440\u044B\u0442\u043E\" }}\n      </DropdownButton>\n      <DropdownBody\n        class=\"absolute top-14 left-10 w-1/4\"\n        with-overlay\n        with-scroll-lock\n        :open=\"open\"\n        :close=\"close\"\n      >\n        <div\n          class=\"p-4 border border-gray-200 dark:border-gray-800 last:border-b-none\"\n        >\n          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit\n          amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip\n          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit\n          amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip\n        </div>\n      </DropdownBody>\n    </Dropdown>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, Dropdown_stories as default };
