import './Picture-CXbZeXjf.js';
import './ActionSheet-0aCLi6SO.js';
import './Alert-Cz2VvQwu.js';
import './Amount-CH7S0hrn.js';
import './AmountCombobox-C9ylVrxz.js';
import './AmountInput-B4GxmzhL.js';
import './Article-CwxEqUtA.js';
import './Badge-BEx1WZDd.js';
import { B as Button } from './Button-CtUqJ2yf.js';
import './ButtonGroup-D41YfLMb.js';
import './CardToolbar-CqVcfSP5.js';
import './CountryFlagIcon-CDE82R4S.js';
import './ClampText-pShlc9wm.js';
import './ComboboxOption-BiQzpX90.js';
import './CopyInput-Durcp8G_.js';
import { d as DismissButton } from './DrawerHeader-Dc_JcqTg.js';
import './DropdownBody-CawdB6hu.js';
import './DropZone-C9W-KNp2.js';
import './FormField-DC7p7h4Z.js';
import './FriendlyNumber-CfyrG48u.js';
import './InputText-CKbj8-5W.js';
import { f as openBlock, g as createElementBlock, h as createBaseVNode, _ as _export_sfc, r as ref, t as toRefs, c as computed, i as createBlock, j as withCtx, u as unref, k as inject, n as nextTick, p as provide, l as createVNode, m as normalizeClass, q as renderSlot, s as mergeProps } from './iframe-B-YMhJRM.js';
import { u as useTheme } from './useTheme-Cy0CkrhV.js';
import { h as he, q as qe, _ as _e, S as Se, u as useModalDialog } from './transition-BbYjgdWJ.js';
import './Pagination-CpQqROxt.js';
import './PhoneInput-BLkL-bbH.js';
import './ProgressBar-BqQIwWuq.js';
import './Radio-BPg1-YTu.js';
import './Select-BrvdAO34.js';
import './SelectOption-D8MCSwFb.js';
import './Skeleton-VdahnwcK.js';
import './Spinner-CAmBDD7O.js';
import './SvgIcon-CB4xQEt9.js';
import './Switcher-Bt8YX7H1.js';
import './SwitcherWithText-DGKNliJy.js';
import './Tabs-lgfu6fdG.js';
import './FormTextareaLabel-C-Ky4ZoC.js';
import './TextMark-DHD5g9tQ.js';
import './Ticker-BVIv48bh.js';
import './Tooltip-CW07EFtD.js';
import './Hint-DY9b0z9j.js';
import './ProgressField-D6jbIE0e.js';
import './FileInputPreview-7p4lQs8r.js';
import './constants-BNWoBBcu.js';
import './index-DHjp26mP.js';
import './useHideData-p5xj-pxn.js';
import './listbox-xfprdXMl.js';
import './form-B5TVLiQV.js';
import './keyboard-Y5Ohh0Ec.js';
import './open-closed-n-oNVJpd.js';
import './focus-management-CfDY3olH.js';
import './use-resolve-button-type-BRMzcgpv.js';
import './calculate-active-index-BtXYA8d0.js';
import './ChevronUpDownIcon-BNkXqcI5.js';
import './useMask-G9TE6bCD.js';
import './ChevronDownIcon-CrpolITG.js';
import './dynamic-import-helper-uMTE3ehW.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './CheckIcon-CfIKdVGN.js';
import './disposables-JZe9QuOV.js';
import './micro-task-DeZ0-2Kb.js';
import './useClipboard-D24cvHBF.js';
import './XMarkIcon-B0gCI5_N.js';
import './portal-xOeomrXK.js';
import './switch-DT6ond_T.js';
import './CheckCircleIcon-D4s67Pui.js';

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
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]))
}

const _sfc_main$2 = {
    __name: 'ModalDialog',
    props: {
        size: {
            type: String,
            default: "base",
            validator: (value)=>[
                    "base",
                    "l",
                    "xl",
                    "2xl",
                    "auto"
                ].includes(value)
        },
        isPersistence: {
            type: Boolean,
            default: false
        },
        isOverflowVisible: {
            type: Boolean,
            default: false
        },
        initialFocus: {
            type: Object,
            default: null
        },
        blurOverlay: {
            type: Boolean,
            default: true
        }
    },
    setup (__props, { expose: __expose }) {
        const props = __props;
        const rootSelector = inject("rootSelector");
        const dialogBodyRef = ref(null);
        const { isPersistence, isOverflowVisible } = toRefs(props);
        const isOpen = ref(false);
        const { isDark } = useTheme();
        let resolve;
        const initialFocusNode = computed(()=>{
            return props.initialFocus || dialogBodyRef.value;
        });
        function open() {
            const isFixScroll = document.documentElement.style.overflow !== "hidden";
            const { scrollX, scrollY } = window;
            isOpen.value = true;
            nextTick(()=>{
                if (isFixScroll) {
                    window.scrollTo(scrollX, scrollY);
                }
            });
            return new Promise((ok)=>{
                resolve = ok;
            });
        }
        function confirm() {
            isOpen.value = false;
            resolve(true);
        }
        function close() {
            isOpen.value = false;
            resolve(false);
        }
        function onClose() {
            if (isPersistence.value) {
                return;
            }
            close();
        }
        provide("api", {
            confirm,
            close
        });
        provide("state", {
            isPersistence
        });
        __expose({
            open,
            close,
            confirm,
            isOpen
        });
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(unref(Se), {
                show: isOpen.value,
                as: "template"
            }, {
                default: withCtx(()=>[
                        createVNode(unref(_e), mergeProps(_ctx.$attrs, {
                            "initial-focus": initialFocusNode.value,
                            as: "div",
                            onClose: onClose
                        }), {
                            default: withCtx(()=>[
                                    createBaseVNode("div", {
                                        class: normalizeClass(unref(rootSelector))
                                    }, [
                                        createBaseVNode("div", {
                                            class: normalizeClass([
                                                {
                                                    dark: unref(isDark)
                                                },
                                                "dialog"
                                            ])
                                        }, [
                                            createVNode(unref(he), {
                                                as: "template",
                                                enter: "dialog-overlay--enter",
                                                "enter-from": "dialog-overlay--enter-from",
                                                "enter-to": "dialog-overlay--enter-to",
                                                leave: "dialog-overlay--leave",
                                                "leave-from": "dialog-overlay--leave-from",
                                                "leave-to": "dialog-overlay--leave-to"
                                            }, {
                                                default: withCtx(()=>[
                                                        createVNode(unref(qe), {
                                                            class: normalizeClass([
                                                                {
                                                                    'is-blurred': __props.blurOverlay
                                                                },
                                                                "dialog-overlay"
                                                            ])
                                                        }, null, 8, [
                                                            "class"
                                                        ])
                                                    ]),
                                                _: 1
                                            }),
                                            _cache[0] || (_cache[0] = createBaseVNode("span", {
                                                "aria-hidden": "true",
                                                class: "trick"
                                            }, "​", -1)),
                                            createVNode(unref(he), {
                                                as: "template",
                                                enter: "dialog-body--enter",
                                                "enter-from": "dialog-body--enter-from",
                                                "enter-to": "dialog-body--enter-to",
                                                leave: "dialog-body--leave",
                                                "leave-from": "dialog-body--leave-from",
                                                "leave-to": "dialog-body--leave-to"
                                            }, {
                                                default: withCtx(()=>[
                                                        createBaseVNode("div", {
                                                            ref_key: "dialogBodyRef",
                                                            ref: dialogBodyRef,
                                                            class: normalizeClass([
                                                                [
                                                                    `modal-size-${__props.size}`,
                                                                    {
                                                                        'disable-overflow': unref(isOverflowVisible)
                                                                    }
                                                                ],
                                                                "dialog-body"
                                                            ]),
                                                            tabindex: "-1"
                                                        }, [
                                                            renderSlot(_ctx.$slots, "default", {}, undefined, true)
                                                        ], 2)
                                                    ]),
                                                _: 3
                                            })
                                        ], 2)
                                    ], 2)
                                ]),
                            _: 3
                        }, 16, [
                            "initial-focus"
                        ])
                    ]),
                _: 3
            }, 8, [
                "show"
            ]);
        };
    }
};
const ModalDialog = /*#__PURE__*/ _export_sfc(_sfc_main$2, [
    [
        '__scopeId',
        "data-v-d061c3f2"
    ]
]);
_sfc_main$2.__docgenInfo = {"exportName":"default","displayName":"ModalDialog","description":"","tags":{},"expose":[{"name":"open"},{"name":"close"},{"name":"confirm"},{"name":"isOpen"}],"props":[{"name":"size","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"base\""},"values":["base","l","xl","2xl","auto"]},{"name":"isPersistence","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"isOverflowVisible","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"initialFocus","type":{"name":"object"},"defaultValue":{"func":false,"value":"null"}},{"name":"blurOverlay","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"true"}}],"slots":[{"name":"default"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/modal-dialog/ModalDialog.vue"]};

const _hoisted_1$1 = {
    class: "body"
};
const _sfc_main$1 = {
    __name: 'ModalDialogBody',
    setup (__props) {
        const { confirm, close } = inject("api");
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", _hoisted_1$1, [
                renderSlot(_ctx.$slots, "default", {
                    close: unref(close),
                    confirm: unref(confirm)
                }, undefined, true)
            ]);
        };
    }
};
const ModalDialogBody = /*#__PURE__*/ _export_sfc(_sfc_main$1, [
    [
        '__scopeId',
        "data-v-7f9b9ea9"
    ]
]);
_sfc_main$1.__docgenInfo = {"exportName":"default","displayName":"ModalDialogBody","description":"","tags":{},"slots":[{"name":"default","scoped":true,"bindings":[{"name":"close","title":"binding"},{"name":"confirm","title":"binding"}]}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/modal-dialog/ModalDialogBody.vue"]};

const _hoisted_1 = {
    class: "footer"
};
const _sfc_main = {
    __name: 'ModalDialogFooter',
    setup (__props) {
        const { confirm, close } = inject("api");
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", _hoisted_1, [
                renderSlot(_ctx.$slots, "default", {
                    close: unref(close),
                    confirm: unref(confirm)
                }, undefined, true)
            ]);
        };
    }
};
const ModalDialogFooter = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-32873edf"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"ModalDialogFooter","description":"","tags":{},"slots":[{"name":"default","scoped":true,"bindings":[{"name":"close","title":"binding"},{"name":"confirm","title":"binding"}]}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/modal-dialog/ModalDialogFooter.vue"]};

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
var _Default_parameters, _Default_parameters_docs, _Default_parameters1, _SimpleAlert_parameters, _SimpleAlert_parameters_docs, _SimpleAlert_parameters1, _WithDismissButton_parameters, _WithDismissButton_parameters_docs, _WithDismissButton_parameters1, _WithGrayFooter_parameters, _WithGrayFooter_parameters_docs, _WithGrayFooter_parameters1, _WithPersistence_parameters, _WithPersistence_parameters_docs, _WithPersistence_parameters1;
const useOpenButton = function() {
    const { modalRef: nodeRef, open } = useModalDialog();
    return {
        nodeRef,
        onClick: ()=>open().then((isConfirmed)=>isConfirmed ? alert("Confirm") : alert("Cancel"))
    };
};
const ModalDialog_stories = {
    title: "Components/ModalDialog",
    component: ModalDialog,
    subcomponents: {
        ModalDialogBody,
        ModalDialogFooter,
        DismissButton
    }
};
const Template = (args)=>({
        components: {
            ModalDialog,
            ModalDialogBody,
            ModalDialogFooter,
            CheckIcon: render,
            Button,
            DismissButton
        },
        setup () {
            const { nodeRef, onClick } = useOpenButton();
            return _object_spread_props(_object_spread({}, args), {
                nodeRef,
                onClick
            });
        },
        template: `
    <Button @click="onClick">Open</Button>
    <ModalDialog ref="nodeRef">
      <ModalDialogBody #="{ close }">
        <div
            class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-500"
        >
          <CheckIcon class="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
            Payment successful
          </h3>
  
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            amet labore.
          </p>
        </div>
  
        <Button class="mt-5 sm:mt-6 w-full justify-center" @click="close">
          Go back to dashboard
        </Button>
      </ModalDialogBody>
    </ModalDialog>
  `
    });
const Default = Template.bind({});
Default.args = {};
const SimpleAlert = (args)=>({
        components: {
            ModalDialog,
            ModalDialogBody,
            Button
        },
        setup () {
            const { nodeRef, onClick } = useOpenButton();
            return _object_spread_props(_object_spread({}, args), {
                nodeRef,
                onClick
            });
        },
        template: `
    <Button @click="onClick">Open</Button>
    <ModalDialog ref="nodeRef">
      <ModalDialogBody #="{ confirm, close }">
        <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          Deactivate account
        </h3>

        <p class="mt-2 text-sm text-gray-500 dark:text-gray-200">
          Are you sure you want to deactivate your account? All of your data will
          be permanently removed from our servers forever. This action cannot be
          undone.
        </p>
  
        <div class="mt-5 sm:mt-4">
          <Button
              type="danger"
              class="w-full sm:w-auto mr-2 justify-center"
              @click="confirm"
          >
            Deactivate
          </Button>
          <Button
              type="white"
              class="mt-2 sm:mt-0 w-full sm:w-auto justify-center"
              @click="close"
          >
            Cancel
          </Button>
        </div>
      </ModalDialogBody>
    </ModalDialog>
  `
    });
const WithDismissButton = (args)=>({
        components: {
            ModalDialog,
            ModalDialogBody,
            Button,
            DismissButton
        },
        setup () {
            const { nodeRef, onClick } = useOpenButton();
            return _object_spread_props(_object_spread({}, args), {
                nodeRef,
                onClick
            });
        },
        template: `
    <Button @click="onClick">Open</Button>
    <ModalDialog ref="nodeRef">
      <ModalDialogBody #="{ close, confirm }">
        <DismissButton />

        <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          Deactivate account
        </h3>

        <p class="mt-2 text-sm text-gray-500 dark:text-gray-200">
          Are you sure you want to deactivate your account? All of your data will
          be permanently removed from our servers forever. This action cannot be
          undone.
        </p>

        <div class="mt-5 sm:mt-4">
          <Button
              type="danger"
              class="w-full sm:w-auto mr-2 justify-center"
              @click="confirm"
          >
            Deactivate
          </Button>
          <Button
              type="white"
              class="mt-2 sm:mt-0 w-full sm:w-auto justify-center"
              @click="close"
          >
            Cancel
          </Button>
        </div>
      </ModalDialogBody>
    </ModalDialog>
  `
    });
const WithGrayFooter = (args)=>({
        components: {
            ModalDialog,
            ModalDialogBody,
            ModalDialogFooter,
            Button
        },
        setup () {
            const { nodeRef, onClick } = useOpenButton();
            return _object_spread_props(_object_spread({}, args), {
                nodeRef,
                onClick
            });
        },
        template: `
    <Button @click="onClick">Open</Button>
    <ModalDialog ref="nodeRef">
      <ModalDialogBody>
        <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          Deactivate account
        </h3>
  
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-200">
          Are you sure you want to deactivate your account? All of your data will
          be permanently removed from our servers forever. This action cannot be
          undone.
        </p>
      </ModalDialogBody>
      <ModalDialogFooter
          class="bg-gray-50 dark:bg-gray-700"
          #="{ confirm, close }"
      >
        <Button
            type="danger"
            class="w-full sm:w-auto mr-2 justify-center"
            @click="confirm"
        >
          Deactivate
        </Button>
        <Button
            type="white"
            class="mt-2 sm:mt-0 w-full sm:w-auto justify-center"
            @click="close"
        >
          Cancel
        </Button>
      </ModalDialogFooter>
    </ModalDialog>
  `
    });
const WithPersistence = (args)=>({
        components: {
            ModalDialog,
            ModalDialogBody,
            Button,
            DismissButton
        },
        setup () {
            const { nodeRef, onClick } = useOpenButton();
            return _object_spread_props(_object_spread({}, args), {
                nodeRef,
                onClick
            });
        },
        template: `
    <Button @click="onClick">Open</Button>
    <ModalDialog ref="nodeRef" is-persistence>
    <ModalDialogBody #="{ close, confirm }">
      <DismissButton />

      <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
        Deactivate account
      </h3>

      <p class="mt-2 text-sm text-gray-500 dark:text-gray-200">
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed from our servers forever. This action cannot be
        undone.
      </p>

      <div class="mt-5 sm:mt-4">
        <Button
            type="danger"
            class="w-full sm:w-auto mr-2 justify-center"
            @click="confirm"
        >
          Deactivate
        </Button>
        <Button
            type="white"
            class="mt-2 sm:mt-0 w-full sm:w-auto justify-center"
            @click="close"
        >
          Cancel
        </Button>
      </div>
    </ModalDialogBody>
    </ModalDialog>
  `
    });
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    ModalDialog,\n    ModalDialogBody,\n    ModalDialogFooter,\n    CheckIcon,\n    Button,\n    DismissButton\n  },\n  setup() {\n    const {\n      nodeRef,\n      onClick\n    } = useOpenButton();\n    return {\n      ...args,\n      nodeRef,\n      onClick\n    };\n  },\n  template: `\n    <Button @click=\"onClick\">Open</Button>\n    <ModalDialog ref=\"nodeRef\">\n      <ModalDialogBody #=\"{ close }\">\n        <div\n            class=\"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-500\"\n        >\n          <CheckIcon class=\"h-6 w-6 text-white\" aria-hidden=\"true\" />\n        </div>\n        <div class=\"mt-3 text-center sm:mt-5\">\n          <h3 class=\"text-lg leading-6 font-medium text-gray-900 dark:text-white\">\n            Payment successful\n          </h3>\n  \n          <p class=\"mt-2 text-sm text-gray-500 dark:text-gray-200\">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur\n            amet labore.\n          </p>\n        </div>\n  \n        <Button class=\"mt-5 sm:mt-6 w-full justify-center\" @click=\"close\">\n          Go back to dashboard\n        </Button>\n      </ModalDialogBody>\n    </ModalDialog>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
SimpleAlert.parameters = _object_spread_props(_object_spread({}, SimpleAlert.parameters), {
    docs: _object_spread_props(_object_spread({}, (_SimpleAlert_parameters = SimpleAlert.parameters) === null || _SimpleAlert_parameters === void 0 ? void 0 : _SimpleAlert_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    ModalDialog,\n    ModalDialogBody,\n    Button\n  },\n  setup() {\n    const {\n      nodeRef,\n      onClick\n    } = useOpenButton();\n    return {\n      ...args,\n      nodeRef,\n      onClick\n    };\n  },\n  template: `\n    <Button @click=\"onClick\">Open</Button>\n    <ModalDialog ref=\"nodeRef\">\n      <ModalDialogBody #=\"{ confirm, close }\">\n        <h3 class=\"text-lg leading-6 font-medium text-gray-900 dark:text-white\">\n          Deactivate account\n        </h3>\n\n        <p class=\"mt-2 text-sm text-gray-500 dark:text-gray-200\">\n          Are you sure you want to deactivate your account? All of your data will\n          be permanently removed from our servers forever. This action cannot be\n          undone.\n        </p>\n  \n        <div class=\"mt-5 sm:mt-4\">\n          <Button\n              type=\"danger\"\n              class=\"w-full sm:w-auto mr-2 justify-center\"\n              @click=\"confirm\"\n          >\n            Deactivate\n          </Button>\n          <Button\n              type=\"white\"\n              class=\"mt-2 sm:mt-0 w-full sm:w-auto justify-center\"\n              @click=\"close\"\n          >\n            Cancel\n          </Button>\n        </div>\n      </ModalDialogBody>\n    </ModalDialog>\n  `\n})"
        }, (_SimpleAlert_parameters1 = SimpleAlert.parameters) === null || _SimpleAlert_parameters1 === void 0 ? void 0 : (_SimpleAlert_parameters_docs = _SimpleAlert_parameters1.docs) === null || _SimpleAlert_parameters_docs === void 0 ? void 0 : _SimpleAlert_parameters_docs.source)
    })
});
WithDismissButton.parameters = _object_spread_props(_object_spread({}, WithDismissButton.parameters), {
    docs: _object_spread_props(_object_spread({}, (_WithDismissButton_parameters = WithDismissButton.parameters) === null || _WithDismissButton_parameters === void 0 ? void 0 : _WithDismissButton_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    ModalDialog,\n    ModalDialogBody,\n    Button,\n    DismissButton\n  },\n  setup() {\n    const {\n      nodeRef,\n      onClick\n    } = useOpenButton();\n    return {\n      ...args,\n      nodeRef,\n      onClick\n    };\n  },\n  template: `\n    <Button @click=\"onClick\">Open</Button>\n    <ModalDialog ref=\"nodeRef\">\n      <ModalDialogBody #=\"{ close, confirm }\">\n        <DismissButton />\n\n        <h3 class=\"text-lg leading-6 font-medium text-gray-900 dark:text-white\">\n          Deactivate account\n        </h3>\n\n        <p class=\"mt-2 text-sm text-gray-500 dark:text-gray-200\">\n          Are you sure you want to deactivate your account? All of your data will\n          be permanently removed from our servers forever. This action cannot be\n          undone.\n        </p>\n\n        <div class=\"mt-5 sm:mt-4\">\n          <Button\n              type=\"danger\"\n              class=\"w-full sm:w-auto mr-2 justify-center\"\n              @click=\"confirm\"\n          >\n            Deactivate\n          </Button>\n          <Button\n              type=\"white\"\n              class=\"mt-2 sm:mt-0 w-full sm:w-auto justify-center\"\n              @click=\"close\"\n          >\n            Cancel\n          </Button>\n        </div>\n      </ModalDialogBody>\n    </ModalDialog>\n  `\n})"
        }, (_WithDismissButton_parameters1 = WithDismissButton.parameters) === null || _WithDismissButton_parameters1 === void 0 ? void 0 : (_WithDismissButton_parameters_docs = _WithDismissButton_parameters1.docs) === null || _WithDismissButton_parameters_docs === void 0 ? void 0 : _WithDismissButton_parameters_docs.source)
    })
});
WithGrayFooter.parameters = _object_spread_props(_object_spread({}, WithGrayFooter.parameters), {
    docs: _object_spread_props(_object_spread({}, (_WithGrayFooter_parameters = WithGrayFooter.parameters) === null || _WithGrayFooter_parameters === void 0 ? void 0 : _WithGrayFooter_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    ModalDialog,\n    ModalDialogBody,\n    ModalDialogFooter,\n    Button\n  },\n  setup() {\n    const {\n      nodeRef,\n      onClick\n    } = useOpenButton();\n    return {\n      ...args,\n      nodeRef,\n      onClick\n    };\n  },\n  template: `\n    <Button @click=\"onClick\">Open</Button>\n    <ModalDialog ref=\"nodeRef\">\n      <ModalDialogBody>\n        <h3 class=\"text-lg leading-6 font-medium text-gray-900 dark:text-white\">\n          Deactivate account\n        </h3>\n  \n        <p class=\"mt-2 text-sm text-gray-500 dark:text-gray-200\">\n          Are you sure you want to deactivate your account? All of your data will\n          be permanently removed from our servers forever. This action cannot be\n          undone.\n        </p>\n      </ModalDialogBody>\n      <ModalDialogFooter\n          class=\"bg-gray-50 dark:bg-gray-700\"\n          #=\"{ confirm, close }\"\n      >\n        <Button\n            type=\"danger\"\n            class=\"w-full sm:w-auto mr-2 justify-center\"\n            @click=\"confirm\"\n        >\n          Deactivate\n        </Button>\n        <Button\n            type=\"white\"\n            class=\"mt-2 sm:mt-0 w-full sm:w-auto justify-center\"\n            @click=\"close\"\n        >\n          Cancel\n        </Button>\n      </ModalDialogFooter>\n    </ModalDialog>\n  `\n})"
        }, (_WithGrayFooter_parameters1 = WithGrayFooter.parameters) === null || _WithGrayFooter_parameters1 === void 0 ? void 0 : (_WithGrayFooter_parameters_docs = _WithGrayFooter_parameters1.docs) === null || _WithGrayFooter_parameters_docs === void 0 ? void 0 : _WithGrayFooter_parameters_docs.source)
    })
});
WithPersistence.parameters = _object_spread_props(_object_spread({}, WithPersistence.parameters), {
    docs: _object_spread_props(_object_spread({}, (_WithPersistence_parameters = WithPersistence.parameters) === null || _WithPersistence_parameters === void 0 ? void 0 : _WithPersistence_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    ModalDialog,\n    ModalDialogBody,\n    Button,\n    DismissButton\n  },\n  setup() {\n    const {\n      nodeRef,\n      onClick\n    } = useOpenButton();\n    return {\n      ...args,\n      nodeRef,\n      onClick\n    };\n  },\n  template: `\n    <Button @click=\"onClick\">Open</Button>\n    <ModalDialog ref=\"nodeRef\" is-persistence>\n    <ModalDialogBody #=\"{ close, confirm }\">\n      <DismissButton />\n\n      <h3 class=\"text-lg leading-6 font-medium text-gray-900 dark:text-white\">\n        Deactivate account\n      </h3>\n\n      <p class=\"mt-2 text-sm text-gray-500 dark:text-gray-200\">\n        Are you sure you want to deactivate your account? All of your data will\n        be permanently removed from our servers forever. This action cannot be\n        undone.\n      </p>\n\n      <div class=\"mt-5 sm:mt-4\">\n        <Button\n            type=\"danger\"\n            class=\"w-full sm:w-auto mr-2 justify-center\"\n            @click=\"confirm\"\n        >\n          Deactivate\n        </Button>\n        <Button\n            type=\"white\"\n            class=\"mt-2 sm:mt-0 w-full sm:w-auto justify-center\"\n            @click=\"close\"\n        >\n          Cancel\n        </Button>\n      </div>\n    </ModalDialogBody>\n    </ModalDialog>\n  `\n})"
        }, (_WithPersistence_parameters1 = WithPersistence.parameters) === null || _WithPersistence_parameters1 === void 0 ? void 0 : (_WithPersistence_parameters_docs = _WithPersistence_parameters1.docs) === null || _WithPersistence_parameters_docs === void 0 ? void 0 : _WithPersistence_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default","SimpleAlert","WithDismissButton","WithGrayFooter","WithPersistence"];

export { Default, SimpleAlert, WithDismissButton, WithGrayFooter, WithPersistence, __namedExportsOrder, ModalDialog_stories as default };
