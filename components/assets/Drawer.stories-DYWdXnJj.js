import { b as onMounted } from './iframe-B-YMhJRM.js';
import { u as useModalDialog } from './transition-BbYjgdWJ.js';
import './useTheme-Cy0CkrhV.js';
import './index-DHjp26mP.js';
import './useHideData-p5xj-pxn.js';
import { B as Button } from './Button-CtUqJ2yf.js';
import { D as Drawer, a as DrawerHeader, b as DrawerContent, c as DrawerFooter } from './DrawerHeader-Dc_JcqTg.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './portal-xOeomrXK.js';
import './focus-management-CfDY3olH.js';
import './keyboard-Y5Ohh0Ec.js';
import './open-closed-n-oNVJpd.js';
import './disposables-JZe9QuOV.js';
import './micro-task-DeZ0-2Kb.js';
import './XMarkIcon-B0gCI5_N.js';

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
var _Adaptive_parameters, _Adaptive_parameters_docs, _Adaptive_parameters1, _RightDrawer_parameters, _RightDrawer_parameters_docs, _RightDrawer_parameters1, _LeftDrawer_parameters, _LeftDrawer_parameters_docs, _LeftDrawer_parameters1, _TopDrawer_parameters, _TopDrawer_parameters_docs, _TopDrawer_parameters1, _BottomDrawer_parameters, _BottomDrawer_parameters_docs, _BottomDrawer_parameters1, _WithGestures_parameters, _WithGestures_parameters_docs, _WithGestures_parameters1, _FullSize_parameters, _FullSize_parameters_docs, _FullSize_parameters1, _Persistent_parameters, _Persistent_parameters_docs, _Persistent_parameters1;
const Drawer_stories = {
    title: "Components/Drawer",
    component: Drawer,
    argTypes: {
        position: {
            control: {
                type: "select"
            },
            options: [
                "left",
                "right",
                "top",
                "bottom"
            ]
        }
    }
};
const Template = (args)=>({
        components: {
            Drawer,
            DrawerHeader,
            DrawerContent,
            DrawerFooter,
            Button
        },
        setup () {
            const { modalRef, open } = useModalDialog();
            onMounted(()=>{
                open();
            });
            return _object_spread_props(_object_spread({}, args), {
                modalRef,
                open
            });
        },
        template: `
    <Button @click="open">
      Open Drawer
    </Button>

    <Drawer
      ref="modalRef"
      :position="position"
      :full="full"
      :rounded="rounded"
      :persistence="persistence"
      :enable-gestures="enableGestures"
      :adaptive="adaptive"
    >
      <template #default="{ close, confirm }">
        <DrawerHeader
          title="Drawer Title"
          subtitle="This is an optional subtitle text"
        />

        <DrawerContent>
          <div class="space-y-4 text-gray-900 dark:text-white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.
            </p>
            <p>
              Explicabo facilis illo nisi numquam voluptatem voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.
            </p>
          </div>
        </DrawerContent>

        <DrawerFooter>
          <div class="flex items-center justify-end gap-3">
            <Button @click="close">
              Cancel
            </Button>
            <Button @click="confirm">
              Confirm
            </Button>
          </div>
        </DrawerFooter>
      </template>
    </Drawer>
  `
    });
const Adaptive = Template.bind({});
Adaptive.args = {
    position: "right",
    full: false,
    rounded: false,
    persistence: false,
    enableGestures: false,
    adaptive: true
};
const RightDrawer = Template.bind({});
RightDrawer.args = {
    position: "right",
    full: false,
    rounded: false,
    persistence: false,
    enableGestures: false,
    adaptive: false
};
const LeftDrawer = Template.bind({});
LeftDrawer.args = {
    position: "left",
    full: false,
    rounded: true,
    persistence: false,
    enableGestures: false,
    adaptive: false
};
const TopDrawer = Template.bind({});
TopDrawer.args = {
    position: "top",
    full: false,
    rounded: true,
    persistence: false,
    enableGestures: false,
    adaptive: false
};
const BottomDrawer = Template.bind({});
BottomDrawer.args = {
    position: "bottom",
    full: false,
    rounded: true,
    persistence: false,
    enableGestures: false,
    adaptive: false
};
const WithGestures = Template.bind({});
WithGestures.args = {
    position: "bottom",
    full: false,
    rounded: true,
    persistence: false,
    enableGestures: true,
    adaptive: false
};
const FullSize = Template.bind({});
FullSize.args = {
    position: "right",
    full: true,
    rounded: false,
    persistence: false,
    enableGestures: false,
    adaptive: false
};
const Persistent = Template.bind({});
Persistent.args = {
    position: "right",
    full: false,
    rounded: false,
    persistence: true,
    enableGestures: false,
    adaptive: false
};
Adaptive.parameters = _object_spread_props(_object_spread({}, Adaptive.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Adaptive_parameters = Adaptive.parameters) === null || _Adaptive_parameters === void 0 ? void 0 : _Adaptive_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Drawer,\n    DrawerHeader,\n    DrawerContent,\n    DrawerFooter,\n    Button\n  },\n  setup() {\n    const {\n      modalRef,\n      open\n    } = useModalDialog();\n    onMounted(() => {\n      open();\n    });\n    return {\n      ...args,\n      modalRef,\n      open\n    };\n  },\n  template: `\n    <Button @click=\"open\">\n      Open Drawer\n    </Button>\n\n    <Drawer\n      ref=\"modalRef\"\n      :position=\"position\"\n      :full=\"full\"\n      :rounded=\"rounded\"\n      :persistence=\"persistence\"\n      :enable-gestures=\"enableGestures\"\n      :adaptive=\"adaptive\"\n    >\n      <template #default=\"{ close, confirm }\">\n        <DrawerHeader\n          title=\"Drawer Title\"\n          subtitle=\"This is an optional subtitle text\"\n        />\n\n        <DrawerContent>\n          <div class=\"space-y-4 text-gray-900 dark:text-white\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n            <p>\n              Explicabo facilis illo nisi numquam voluptatem voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n          </div>\n        </DrawerContent>\n\n        <DrawerFooter>\n          <div class=\"flex items-center justify-end gap-3\">\n            <Button @click=\"close\">\n              Cancel\n            </Button>\n            <Button @click=\"confirm\">\n              Confirm\n            </Button>\n          </div>\n        </DrawerFooter>\n      </template>\n    </Drawer>\n  `\n})"
        }, (_Adaptive_parameters1 = Adaptive.parameters) === null || _Adaptive_parameters1 === void 0 ? void 0 : (_Adaptive_parameters_docs = _Adaptive_parameters1.docs) === null || _Adaptive_parameters_docs === void 0 ? void 0 : _Adaptive_parameters_docs.source)
    })
});
RightDrawer.parameters = _object_spread_props(_object_spread({}, RightDrawer.parameters), {
    docs: _object_spread_props(_object_spread({}, (_RightDrawer_parameters = RightDrawer.parameters) === null || _RightDrawer_parameters === void 0 ? void 0 : _RightDrawer_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Drawer,\n    DrawerHeader,\n    DrawerContent,\n    DrawerFooter,\n    Button\n  },\n  setup() {\n    const {\n      modalRef,\n      open\n    } = useModalDialog();\n    onMounted(() => {\n      open();\n    });\n    return {\n      ...args,\n      modalRef,\n      open\n    };\n  },\n  template: `\n    <Button @click=\"open\">\n      Open Drawer\n    </Button>\n\n    <Drawer\n      ref=\"modalRef\"\n      :position=\"position\"\n      :full=\"full\"\n      :rounded=\"rounded\"\n      :persistence=\"persistence\"\n      :enable-gestures=\"enableGestures\"\n      :adaptive=\"adaptive\"\n    >\n      <template #default=\"{ close, confirm }\">\n        <DrawerHeader\n          title=\"Drawer Title\"\n          subtitle=\"This is an optional subtitle text\"\n        />\n\n        <DrawerContent>\n          <div class=\"space-y-4 text-gray-900 dark:text-white\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n            <p>\n              Explicabo facilis illo nisi numquam voluptatem voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n          </div>\n        </DrawerContent>\n\n        <DrawerFooter>\n          <div class=\"flex items-center justify-end gap-3\">\n            <Button @click=\"close\">\n              Cancel\n            </Button>\n            <Button @click=\"confirm\">\n              Confirm\n            </Button>\n          </div>\n        </DrawerFooter>\n      </template>\n    </Drawer>\n  `\n})"
        }, (_RightDrawer_parameters1 = RightDrawer.parameters) === null || _RightDrawer_parameters1 === void 0 ? void 0 : (_RightDrawer_parameters_docs = _RightDrawer_parameters1.docs) === null || _RightDrawer_parameters_docs === void 0 ? void 0 : _RightDrawer_parameters_docs.source)
    })
});
LeftDrawer.parameters = _object_spread_props(_object_spread({}, LeftDrawer.parameters), {
    docs: _object_spread_props(_object_spread({}, (_LeftDrawer_parameters = LeftDrawer.parameters) === null || _LeftDrawer_parameters === void 0 ? void 0 : _LeftDrawer_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Drawer,\n    DrawerHeader,\n    DrawerContent,\n    DrawerFooter,\n    Button\n  },\n  setup() {\n    const {\n      modalRef,\n      open\n    } = useModalDialog();\n    onMounted(() => {\n      open();\n    });\n    return {\n      ...args,\n      modalRef,\n      open\n    };\n  },\n  template: `\n    <Button @click=\"open\">\n      Open Drawer\n    </Button>\n\n    <Drawer\n      ref=\"modalRef\"\n      :position=\"position\"\n      :full=\"full\"\n      :rounded=\"rounded\"\n      :persistence=\"persistence\"\n      :enable-gestures=\"enableGestures\"\n      :adaptive=\"adaptive\"\n    >\n      <template #default=\"{ close, confirm }\">\n        <DrawerHeader\n          title=\"Drawer Title\"\n          subtitle=\"This is an optional subtitle text\"\n        />\n\n        <DrawerContent>\n          <div class=\"space-y-4 text-gray-900 dark:text-white\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n            <p>\n              Explicabo facilis illo nisi numquam voluptatem voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n          </div>\n        </DrawerContent>\n\n        <DrawerFooter>\n          <div class=\"flex items-center justify-end gap-3\">\n            <Button @click=\"close\">\n              Cancel\n            </Button>\n            <Button @click=\"confirm\">\n              Confirm\n            </Button>\n          </div>\n        </DrawerFooter>\n      </template>\n    </Drawer>\n  `\n})"
        }, (_LeftDrawer_parameters1 = LeftDrawer.parameters) === null || _LeftDrawer_parameters1 === void 0 ? void 0 : (_LeftDrawer_parameters_docs = _LeftDrawer_parameters1.docs) === null || _LeftDrawer_parameters_docs === void 0 ? void 0 : _LeftDrawer_parameters_docs.source)
    })
});
TopDrawer.parameters = _object_spread_props(_object_spread({}, TopDrawer.parameters), {
    docs: _object_spread_props(_object_spread({}, (_TopDrawer_parameters = TopDrawer.parameters) === null || _TopDrawer_parameters === void 0 ? void 0 : _TopDrawer_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Drawer,\n    DrawerHeader,\n    DrawerContent,\n    DrawerFooter,\n    Button\n  },\n  setup() {\n    const {\n      modalRef,\n      open\n    } = useModalDialog();\n    onMounted(() => {\n      open();\n    });\n    return {\n      ...args,\n      modalRef,\n      open\n    };\n  },\n  template: `\n    <Button @click=\"open\">\n      Open Drawer\n    </Button>\n\n    <Drawer\n      ref=\"modalRef\"\n      :position=\"position\"\n      :full=\"full\"\n      :rounded=\"rounded\"\n      :persistence=\"persistence\"\n      :enable-gestures=\"enableGestures\"\n      :adaptive=\"adaptive\"\n    >\n      <template #default=\"{ close, confirm }\">\n        <DrawerHeader\n          title=\"Drawer Title\"\n          subtitle=\"This is an optional subtitle text\"\n        />\n\n        <DrawerContent>\n          <div class=\"space-y-4 text-gray-900 dark:text-white\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n            <p>\n              Explicabo facilis illo nisi numquam voluptatem voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n          </div>\n        </DrawerContent>\n\n        <DrawerFooter>\n          <div class=\"flex items-center justify-end gap-3\">\n            <Button @click=\"close\">\n              Cancel\n            </Button>\n            <Button @click=\"confirm\">\n              Confirm\n            </Button>\n          </div>\n        </DrawerFooter>\n      </template>\n    </Drawer>\n  `\n})"
        }, (_TopDrawer_parameters1 = TopDrawer.parameters) === null || _TopDrawer_parameters1 === void 0 ? void 0 : (_TopDrawer_parameters_docs = _TopDrawer_parameters1.docs) === null || _TopDrawer_parameters_docs === void 0 ? void 0 : _TopDrawer_parameters_docs.source)
    })
});
BottomDrawer.parameters = _object_spread_props(_object_spread({}, BottomDrawer.parameters), {
    docs: _object_spread_props(_object_spread({}, (_BottomDrawer_parameters = BottomDrawer.parameters) === null || _BottomDrawer_parameters === void 0 ? void 0 : _BottomDrawer_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Drawer,\n    DrawerHeader,\n    DrawerContent,\n    DrawerFooter,\n    Button\n  },\n  setup() {\n    const {\n      modalRef,\n      open\n    } = useModalDialog();\n    onMounted(() => {\n      open();\n    });\n    return {\n      ...args,\n      modalRef,\n      open\n    };\n  },\n  template: `\n    <Button @click=\"open\">\n      Open Drawer\n    </Button>\n\n    <Drawer\n      ref=\"modalRef\"\n      :position=\"position\"\n      :full=\"full\"\n      :rounded=\"rounded\"\n      :persistence=\"persistence\"\n      :enable-gestures=\"enableGestures\"\n      :adaptive=\"adaptive\"\n    >\n      <template #default=\"{ close, confirm }\">\n        <DrawerHeader\n          title=\"Drawer Title\"\n          subtitle=\"This is an optional subtitle text\"\n        />\n\n        <DrawerContent>\n          <div class=\"space-y-4 text-gray-900 dark:text-white\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n            <p>\n              Explicabo facilis illo nisi numquam voluptatem voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n          </div>\n        </DrawerContent>\n\n        <DrawerFooter>\n          <div class=\"flex items-center justify-end gap-3\">\n            <Button @click=\"close\">\n              Cancel\n            </Button>\n            <Button @click=\"confirm\">\n              Confirm\n            </Button>\n          </div>\n        </DrawerFooter>\n      </template>\n    </Drawer>\n  `\n})"
        }, (_BottomDrawer_parameters1 = BottomDrawer.parameters) === null || _BottomDrawer_parameters1 === void 0 ? void 0 : (_BottomDrawer_parameters_docs = _BottomDrawer_parameters1.docs) === null || _BottomDrawer_parameters_docs === void 0 ? void 0 : _BottomDrawer_parameters_docs.source)
    })
});
WithGestures.parameters = _object_spread_props(_object_spread({}, WithGestures.parameters), {
    docs: _object_spread_props(_object_spread({}, (_WithGestures_parameters = WithGestures.parameters) === null || _WithGestures_parameters === void 0 ? void 0 : _WithGestures_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Drawer,\n    DrawerHeader,\n    DrawerContent,\n    DrawerFooter,\n    Button\n  },\n  setup() {\n    const {\n      modalRef,\n      open\n    } = useModalDialog();\n    onMounted(() => {\n      open();\n    });\n    return {\n      ...args,\n      modalRef,\n      open\n    };\n  },\n  template: `\n    <Button @click=\"open\">\n      Open Drawer\n    </Button>\n\n    <Drawer\n      ref=\"modalRef\"\n      :position=\"position\"\n      :full=\"full\"\n      :rounded=\"rounded\"\n      :persistence=\"persistence\"\n      :enable-gestures=\"enableGestures\"\n      :adaptive=\"adaptive\"\n    >\n      <template #default=\"{ close, confirm }\">\n        <DrawerHeader\n          title=\"Drawer Title\"\n          subtitle=\"This is an optional subtitle text\"\n        />\n\n        <DrawerContent>\n          <div class=\"space-y-4 text-gray-900 dark:text-white\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n            <p>\n              Explicabo facilis illo nisi numquam voluptatem voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n          </div>\n        </DrawerContent>\n\n        <DrawerFooter>\n          <div class=\"flex items-center justify-end gap-3\">\n            <Button @click=\"close\">\n              Cancel\n            </Button>\n            <Button @click=\"confirm\">\n              Confirm\n            </Button>\n          </div>\n        </DrawerFooter>\n      </template>\n    </Drawer>\n  `\n})"
        }, (_WithGestures_parameters1 = WithGestures.parameters) === null || _WithGestures_parameters1 === void 0 ? void 0 : (_WithGestures_parameters_docs = _WithGestures_parameters1.docs) === null || _WithGestures_parameters_docs === void 0 ? void 0 : _WithGestures_parameters_docs.source)
    })
});
FullSize.parameters = _object_spread_props(_object_spread({}, FullSize.parameters), {
    docs: _object_spread_props(_object_spread({}, (_FullSize_parameters = FullSize.parameters) === null || _FullSize_parameters === void 0 ? void 0 : _FullSize_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Drawer,\n    DrawerHeader,\n    DrawerContent,\n    DrawerFooter,\n    Button\n  },\n  setup() {\n    const {\n      modalRef,\n      open\n    } = useModalDialog();\n    onMounted(() => {\n      open();\n    });\n    return {\n      ...args,\n      modalRef,\n      open\n    };\n  },\n  template: `\n    <Button @click=\"open\">\n      Open Drawer\n    </Button>\n\n    <Drawer\n      ref=\"modalRef\"\n      :position=\"position\"\n      :full=\"full\"\n      :rounded=\"rounded\"\n      :persistence=\"persistence\"\n      :enable-gestures=\"enableGestures\"\n      :adaptive=\"adaptive\"\n    >\n      <template #default=\"{ close, confirm }\">\n        <DrawerHeader\n          title=\"Drawer Title\"\n          subtitle=\"This is an optional subtitle text\"\n        />\n\n        <DrawerContent>\n          <div class=\"space-y-4 text-gray-900 dark:text-white\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n            <p>\n              Explicabo facilis illo nisi numquam voluptatem voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n          </div>\n        </DrawerContent>\n\n        <DrawerFooter>\n          <div class=\"flex items-center justify-end gap-3\">\n            <Button @click=\"close\">\n              Cancel\n            </Button>\n            <Button @click=\"confirm\">\n              Confirm\n            </Button>\n          </div>\n        </DrawerFooter>\n      </template>\n    </Drawer>\n  `\n})"
        }, (_FullSize_parameters1 = FullSize.parameters) === null || _FullSize_parameters1 === void 0 ? void 0 : (_FullSize_parameters_docs = _FullSize_parameters1.docs) === null || _FullSize_parameters_docs === void 0 ? void 0 : _FullSize_parameters_docs.source)
    })
});
Persistent.parameters = _object_spread_props(_object_spread({}, Persistent.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Persistent_parameters = Persistent.parameters) === null || _Persistent_parameters === void 0 ? void 0 : _Persistent_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Drawer,\n    DrawerHeader,\n    DrawerContent,\n    DrawerFooter,\n    Button\n  },\n  setup() {\n    const {\n      modalRef,\n      open\n    } = useModalDialog();\n    onMounted(() => {\n      open();\n    });\n    return {\n      ...args,\n      modalRef,\n      open\n    };\n  },\n  template: `\n    <Button @click=\"open\">\n      Open Drawer\n    </Button>\n\n    <Drawer\n      ref=\"modalRef\"\n      :position=\"position\"\n      :full=\"full\"\n      :rounded=\"rounded\"\n      :persistence=\"persistence\"\n      :enable-gestures=\"enableGestures\"\n      :adaptive=\"adaptive\"\n    >\n      <template #default=\"{ close, confirm }\">\n        <DrawerHeader\n          title=\"Drawer Title\"\n          subtitle=\"This is an optional subtitle text\"\n        />\n\n        <DrawerContent>\n          <div class=\"space-y-4 text-gray-900 dark:text-white\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n            <p>\n              Explicabo facilis illo nisi numquam voluptatem voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aspernatur assumenda aut deserunt enim, itaque laborum minus natus neque numquam officia possimus.\n            </p>\n          </div>\n        </DrawerContent>\n\n        <DrawerFooter>\n          <div class=\"flex items-center justify-end gap-3\">\n            <Button @click=\"close\">\n              Cancel\n            </Button>\n            <Button @click=\"confirm\">\n              Confirm\n            </Button>\n          </div>\n        </DrawerFooter>\n      </template>\n    </Drawer>\n  `\n})"
        }, (_Persistent_parameters1 = Persistent.parameters) === null || _Persistent_parameters1 === void 0 ? void 0 : (_Persistent_parameters_docs = _Persistent_parameters1.docs) === null || _Persistent_parameters_docs === void 0 ? void 0 : _Persistent_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Adaptive","RightDrawer","LeftDrawer","TopDrawer","BottomDrawer","WithGestures","FullSize","Persistent"];

export { Adaptive, BottomDrawer, FullSize, LeftDrawer, Persistent, RightDrawer, TopDrawer, WithGestures, __namedExportsOrder, Drawer_stories as default };
