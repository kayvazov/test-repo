import { u as useModalDialog } from './transition-BbYjgdWJ.js';
import './useTheme-Cy0CkrhV.js';
import './iframe-B-YMhJRM.js';
import './index-DHjp26mP.js';
import './useHideData-p5xj-pxn.js';
import { B as Button } from './Button-CtUqJ2yf.js';
import { A as ActionSheet } from './ActionSheet-0aCLi6SO.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './portal-xOeomrXK.js';
import './focus-management-CfDY3olH.js';
import './keyboard-Y5Ohh0Ec.js';
import './open-closed-n-oNVJpd.js';
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
const ActionSheet_stories = {
    title: "Components/ActionSheet",
    component: ActionSheet
};
const Template = (args)=>({
        components: {
            ActionSheet,
            Button
        },
        setup () {
            const { modalRef, open, close } = useModalDialog();
            function onOpen() {
                setTimeout(()=>{
                    close();
                }, 5000);
                open().then((value)=>{
                    value ? alert("Confirmed") : alert("Closed");
                });
            }
            return _object_spread_props(_object_spread({}, args), {
                modalRef,
                onOpen
            });
        },
        template: `
    <Button @click="onOpen">
      Open
    </Button>
    
    <ActionSheet ref="modalRef" :is-dark="isDark">
      <template #title>
        <p class="text-lg font-medium">
          Lorem ipsum dolor sit amet
        </p>
      </template>
      <template #="{ close, confirm }">
        <div class="space-y-3 text-gray-900 dark:text-white">
          <div class="grid grid-cols-2 gap-4">
            <Button @click="close" class="w-full justify-center">
              Close
            </Button>
            <Button @click="confirm" class="w-full justify-center">
              Confirm
            </Button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus. Explicabo facilis illo nisi numquam voluptatem voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus. Explicabo facilis illo nisi numquam voluptatem voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus. Explicabo facilis illo nisi numquam voluptatem voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus. Explicabo facilis illo nisi numquam voluptatem voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus. Explicabo facilis illo nisi numquam voluptatem voluptatum.
          </p>
        </div>
      </template>
    </ActionSheet>
  `
    });
const Default = Template.bind({});
Default.args = {
    isDark: false
};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    ActionSheet,\n    Button\n  },\n  setup() {\n    const {\n      modalRef,\n      open,\n      close\n    } = useModalDialog();\n    function onOpen() {\n      setTimeout(() => {\n        close();\n      }, 5000);\n      open().then(value => {\n        value ? alert(\"Confirmed\") : alert(\"Closed\");\n      });\n    }\n    return {\n      ...args,\n      modalRef,\n      onOpen\n    };\n  },\n  template: `\n    <Button @click=\"onOpen\">\n      Open\n    </Button>\n    \n    <ActionSheet ref=\"modalRef\" :is-dark=\"isDark\">\n      <template #title>\n        <p class=\"text-lg font-medium\">\n          Lorem ipsum dolor sit amet\n        </p>\n      </template>\n      <template #=\"{ close, confirm }\">\n        <div class=\"space-y-3 text-gray-900 dark:text-white\">\n          <div class=\"grid grid-cols-2 gap-4\">\n            <Button @click=\"close\" class=\"w-full justify-center\">\n              Close\n            </Button>\n            <Button @click=\"confirm\" class=\"w-full justify-center\">\n              Confirm\n            </Button>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus. Explicabo facilis illo nisi numquam voluptatem voluptatum.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus. Explicabo facilis illo nisi numquam voluptatem voluptatum.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus. Explicabo facilis illo nisi numquam voluptatem voluptatum.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus. Explicabo facilis illo nisi numquam voluptatem voluptatum.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus. Explicabo facilis illo nisi numquam voluptatem voluptatum.\n          </p>\n        </div>\n      </template>\n    </ActionSheet>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, ActionSheet_stories as default };
