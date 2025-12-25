import { f as openBlock, g as createElementBlock, h as createBaseVNode, a as reactive, c as computed, r as ref, e as watch, b as onMounted, o as onUnmounted, l as createVNode, j as withCtx, T as Transition, q as renderSlot, y as createCommentVNode, m as normalizeClass, v as normalizeStyle, u as unref, _ as _export_sfc, n as nextTick, s as mergeProps, i as createBlock, N as normalizeProps, O as guardReactiveProps } from './iframe-B-YMhJRM.js';
import { C as CURRENCY_LABELS, A as Amount } from './Amount-CH7S0hrn.js';
import { A as AmountInput } from './AmountInput-B4GxmzhL.js';
import './useTheme-Cy0CkrhV.js';
import './constants-BNWoBBcu.js';
import './index-DHjp26mP.js';
import './useHideData-p5xj-pxn.js';
import './useMask-G9TE6bCD.js';
import './FormField-DC7p7h4Z.js';
import './ChevronDownIcon-CrpolITG.js';

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
      d: "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
    })
  ]))
}

const MODE = {
    FRONT: "FRONT",
    BACK: "BACK"
};
const SAFETY_BUFFER = 0.9;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property$2(obj, key, value) {
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
function _object_spread$2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property$2(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props$1(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys$1(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
const _hoisted_1 = {
    key: 0,
    class: "mode-wrapper"
};
const _hoisted_2 = [
    "innerHTML"
];
const _hoisted_3 = {
    key: 1,
    class: "mode-wrapper"
};
const _hoisted_4 = [
    "innerHTML"
];
const _hoisted_5 = [
    "innerHTML"
];
const _hoisted_6 = [
    "innerHTML"
];
const _hoisted_7 = {
    key: 2,
    class: "toggle-button"
};
const _hoisted_8 = {
    key: 0,
    class: "caption"
};
const _sfc_main$1 = {
    __name: 'QuantityField',
    props: _object_spread_props$1(_object_spread$2({}, AmountInput.props), {
        mode: {
            type: String,
            default: MODE.FRONT,
            validator: (value)=>Object.values(MODE).includes(value)
        },
        leading: {
            type: String,
            default: ""
        },
        trailing: {
            type: String,
            default: ""
        },
        value: {
            type: [
                Object,
                String
            ],
            default: ()=>({
                    [MODE.FRONT]: "0",
                    [MODE.BACK]: "0"
                })
        },
        placeholder: {
            type: String,
            default: ""
        },
        settings: {
            type: Object,
            default: ()=>({
                    maxFontSize: 48,
                    minFontSize: 10,
                    containerPadding: 16
                })
        }
    }),
    emits: {
        "update:mode": null,
        "update:value": null
    },
    setup (__props, { emit: __emit }) {
        const props = __props;
        const emit = __emit;
        const fontSizes = reactive({
            [MODE.FRONT]: props.settings.maxFontSize,
            [MODE.BACK]: props.settings.maxFontSize
        });
        const currentFontSize = computed({
            get () {
                return fontSizes[props.mode];
            },
            set (value) {
                fontSizes[props.mode] = value;
            }
        });
        const containerRef = ref(null);
        const inputWrapperRef = ref(null);
        const ghostRef = ref(null);
        const isModeChanged = ref(false);
        const localValue = computed(()=>{
            var _props_value_props_mode;
            return (_props_value_props_mode = props.value[props.mode]) !== null && _props_value_props_mode !== void 0 ? _props_value_props_mode : props.value;
        });
        const isEmpty = computed(()=>{
            return !localValue.value;
        });
        const transitionName = computed(()=>props.mode === MODE.FRONT ? "slide-right" : "slide-left");
        function toggleMode() {
            return _toggleMode.apply(this, arguments);
        }
        function _toggleMode() {
            _toggleMode = _async_to_generator(function*() {
                const newMode = props.mode === MODE.FRONT ? MODE.BACK : MODE.FRONT;
                emit("update:mode", newMode);
                isModeChanged.value = true;
            });
            return _toggleMode.apply(this, arguments);
        }
        function updateValue(value) {
            if (typeof props.value === "string") {
                emit("update:value", value);
            }
            if (typeof props.value === "object") {
                emit("update:value", _object_spread_props$1(_object_spread$2({}, props.value), {
                    [props.mode]: value
                }));
            }
        }
        function calculateFontSize() {
            if (!containerRef.value || !ghostRef.value) {
                return;
            }
            // Width of available space
            const containerWidth = containerRef.value.offsetWidth - props.settings.containerPadding;
            // 2. Ширина контента, ЕСЛИ БЫ он был максимального размера
            const ghostWidth = ghostRef.value.offsetWidth;
            // 3. Считаем коэффициент
            if (ghostWidth > containerWidth) {
                const scaleRatio = containerWidth / ghostWidth * SAFETY_BUFFER;
                const newSize = props.settings.maxFontSize * scaleRatio;
                currentFontSize.value = Math.max(newSize, props.settings.minFontSize);
            } else {
                // Если влезает с запасом - возвращаем макс. размер
                currentFontSize.value = props.settings.maxFontSize;
            }
        }
        watch(localValue, /*#__PURE__*/ _async_to_generator(function*() {
            if (isModeChanged.value) {
                isModeChanged.value = false;
                return;
            }
            yield nextTick();
            calculateFontSize();
        }), {
            flush: "post"
        });
        onMounted(/*#__PURE__*/ _async_to_generator(function*() {
            yield nextTick();
            calculateFontSize();
            window.addEventListener("resize", calculateFontSize);
        }));
        onUnmounted(()=>{
            window.removeEventListener("resize", calculateFontSize);
        });
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", {
                ref_key: "containerRef",
                ref: containerRef,
                class: "field"
            }, [
                createBaseVNode("div", {
                    ref_key: "inputWrapperRef",
                    ref: inputWrapperRef,
                    class: normalizeClass([
                        {
                            'is-empty': isEmpty.value
                        },
                        "input-wrapper"
                    ]),
                    style: normalizeStyle({
                        fontSize: `${currentFontSize.value}px`
                    })
                }, [
                    createVNode(Transition, {
                        name: transitionName.value,
                        mode: "out-in"
                    }, {
                        default: withCtx(()=>[
                                __props.mode === unref(MODE).FRONT ? (openBlock(), createElementBlock("div", _hoisted_1, [
                                    __props.leading ? (openBlock(), createElementBlock("span", {
                                        key: 0,
                                        class: "leading",
                                        innerHTML: unref(CURRENCY_LABELS)[__props.leading] || __props.leading
                                    }, null, 8, _hoisted_2)) : createCommentVNode("", true),
                                    createVNode(unref(AmountInput), mergeProps(_ctx.$attrs, {
                                        "model-value": localValue.value,
                                        options: _ctx.options,
                                        placeholder: __props.placeholder,
                                        "onUpdate:modelValue": updateValue
                                    }), {
                                        default: withCtx(()=>[
                                                createVNode(unref(Amount), {
                                                    value: localValue.value,
                                                    class: "filler"
                                                }, null, 8, [
                                                    "value"
                                                ])
                                            ]),
                                        _: 1
                                    }, 16, [
                                        "model-value",
                                        "options",
                                        "placeholder"
                                    ])
                                ])) : __props.mode === unref(MODE).BACK ? (openBlock(), createElementBlock("div", _hoisted_3, [
                                    createVNode(unref(AmountInput), mergeProps(_ctx.$attrs, {
                                        "model-value": localValue.value,
                                        options: _ctx.options,
                                        placeholder: __props.placeholder,
                                        "onUpdate:modelValue": updateValue
                                    }), {
                                        default: withCtx(()=>[
                                                createVNode(unref(Amount), {
                                                    value: localValue.value,
                                                    class: "filler"
                                                }, null, 8, [
                                                    "value"
                                                ])
                                            ]),
                                        _: 1
                                    }, 16, [
                                        "model-value",
                                        "options",
                                        "placeholder"
                                    ]),
                                    __props.trailing ? (openBlock(), createElementBlock("span", {
                                        key: 0,
                                        class: "trailing",
                                        innerHTML: unref(CURRENCY_LABELS)[__props.trailing] || __props.trailing
                                    }, null, 8, _hoisted_4)) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true)
                            ]),
                        _: 1
                    }, 8, [
                        "name"
                    ]),
                    _ctx.$slots['toggle-icon'] && typeof __props.value === 'object' ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        class: "toggle-button",
                        type: "button",
                        onClick: toggleMode
                    }, [
                        renderSlot(_ctx.$slots, "toggle-icon", {}, undefined, true)
                    ])) : createCommentVNode("", true)
                ], 6),
                createBaseVNode("div", {
                    ref_key: "ghostRef",
                    ref: ghostRef,
                    class: "ghost-measurer"
                }, [
                    __props.mode === unref(MODE).FRONT && __props.leading ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        class: "leading",
                        innerHTML: unref(CURRENCY_LABELS)[__props.leading] || __props.leading
                    }, null, 8, _hoisted_5)) : createCommentVNode("", true),
                    createVNode(unref(Amount), {
                        value: localValue.value || __props.placeholder || '0'
                    }, null, 8, [
                        "value"
                    ]),
                    __props.mode === unref(MODE).BACK && __props.trailing ? (openBlock(), createElementBlock("span", {
                        key: 1,
                        class: "trailing",
                        innerHTML: unref(CURRENCY_LABELS)[__props.trailing] || __props.trailing
                    }, null, 8, _hoisted_6)) : createCommentVNode("", true),
                    _ctx.$slots['toggle-icon'] && typeof __props.value === 'object' ? (openBlock(), createElementBlock("div", _hoisted_7, [
                        renderSlot(_ctx.$slots, "toggle-icon", {}, undefined, true)
                    ])) : createCommentVNode("", true)
                ], 512),
                _ctx.$slots.caption ? (openBlock(), createElementBlock("div", _hoisted_8, [
                    createVNode(Transition, {
                        name: transitionName.value,
                        mode: "out-in"
                    }, {
                        default: withCtx(()=>[
                                renderSlot(_ctx.$slots, "caption", {}, undefined, true)
                            ]),
                        _: 3
                    }, 8, [
                        "name"
                    ])
                ])) : createCommentVNode("", true)
            ], 512);
        };
    }
};
const QuantityField$1 = /*#__PURE__*/ _export_sfc(_sfc_main$1, [
    [
        '__scopeId',
        "data-v-179aa739"
    ]
]);
_sfc_main$1.__docgenInfo = {"exportName":"default","displayName":"QuantityField","description":"","tags":{},"props":[{"name":"mode","type":{"name":"string"},"defaultValue":{"func":false,"value":"MODE.FRONT"}},{"name":"leading","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"trailing","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"value","type":{"name":"object|string"},"defaultValue":{"func":true,"value":"() => ({\n  [MODE.FRONT]: \"0\",\n  [MODE.BACK]: \"0\",\n})"}},{"name":"placeholder","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"settings","type":{"name":"object"},"defaultValue":{"func":false,"value":"{\n  maxFontSize: 48,\n  minFontSize: 10,\n  containerPadding: 16\n}"}}],"events":[{"name":"update:mode"},{"name":"update:value"}],"slots":[{"name":"toggle-icon"},{"name":"caption"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/quantity-field/QuantityField.vue"]};

function _define_property$1(obj, key, value) {
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
function _object_spread$1(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property$1(target, key, source[key]);
        });
    }
    return target;
}
const _sfc_main = {
    __name: 'QuantityField.vue2',
    props: QuantityField$1.props,
    setup (__props) {
        const props = __props;
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(QuantityField$1, normalizeProps(guardReactiveProps(_object_spread$1({}, props, _ctx.$attrs))), {
                "toggle-icon": withCtx(()=>[
                        renderSlot(_ctx.$slots, "toggle-icon")
                    ]),
                caption: withCtx(()=>[
                        renderSlot(_ctx.$slots, "caption")
                    ]),
                _: 3
            }, 16);
        };
    }
};
const QuantityField = _sfc_main;
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"QuantityField.vue2","description":"","tags":{},"slots":[{"name":"toggle-icon"},{"name":"caption"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/quantity-field/QuantityField.vue2.vue"]};

QuantityField.MODE = MODE;

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
var _Default_parameters, _Default_parameters_docs, _Default_parameters1, _NoToggleIcon_parameters, _NoToggleIcon_parameters_docs, _NoToggleIcon_parameters1, _NoCaption_parameters, _NoCaption_parameters_docs, _NoCaption_parameters1, _NoLeadingAndTrailing_parameters, _NoLeadingAndTrailing_parameters_docs, _NoLeadingAndTrailing_parameters1, _SingleMode_parameters, _SingleMode_parameters_docs, _SingleMode_parameters1, _Empty_parameters, _Empty_parameters_docs, _Empty_parameters1;
const QuantityField_stories = {
    title: "Components/QuantityField",
    component: QuantityField
};
const DefaultTemplate = (args)=>({
        components: {
            QuantityField,
            ArrowsUpDownIcon: render,
            Amount
        },
        setup () {
            const value = ref({
                [MODE.FRONT]: "1234",
                [MODE.BACK]: "25"
            });
            const balance = ref({
                [MODE.FRONT]: "50",
                [MODE.BACK]: "100"
            });
            const mode = ref(args.mode);
            return {
                MODE,
                args,
                value,
                mode,
                balance
            };
        },
        template: `
    <div class="w-full">
      <QuantityField
        :value="value"
        :mode="mode"
        placeholder="0"
        :placeholder="args.placeholder"
        :leading="args.leading"
        :trailing="args.trailing"
        @update:mode="mode = $event"
        @update:value="value = $event"
      >
        <template #toggle-icon>
          <ArrowsUpDownIcon class="w-3 h-3 text-gray-400" />
        </template>
        <template #caption>
          <div v-if="mode === MODE.FRONT" class="flex items-center gap-1">
            <Amount 
              :currency="args.leading"
              :value="balance[mode]"
              currency-position="before"
            />
            <span>доступно</span>
          </div>
          <div v-else-if="mode === MODE.BACK" class="flex items-center gap-1">
            <Amount
              :currency="args.trailing"
              :value="balance[mode]"
            />
            <span>доступно</span>
          </div>
        </template>
      </QuantityField>
    </div>
  `
    });
const Default = DefaultTemplate.bind({});
Default.args = {
    mode: MODE.FRONT,
    leading: "USD",
    trailing: "шт.",
    placeholder: "0"
};
const NoToggleIconTemplate = (args)=>({
        components: {
            QuantityField,
            Amount
        },
        setup () {
            const value = ref({
                [MODE.FRONT]: "1234"
            });
            const balance = ref({
                [MODE.FRONT]: "50"
            });
            const mode = ref(args.mode);
            return {
                MODE,
                args,
                value,
                mode,
                balance
            };
        },
        template: `
    <div class="max-w-xs">
      <QuantityField
        :value="value"
        :mode="mode"
        :placeholder="args.placeholder"
        :leading="args.leading"
        :trailing="args.trailing"
        @update:mode="mode = $event"
        @update:value="value = $event"
      >
        <template #caption>
          <Amount
            v-if="mode === MODE.FRONT"
            :currency="args.leading"
            :value="balance[mode]"
            currency-position="before"
          />
          <Amount
            v-if="mode === MODE.BACK"
            :currency="args.trailing"
            :value="balance[mode]"
          />
          <span>доступно</span>
        </template>
      </QuantityField>
    </div>
  `
    });
const NoToggleIcon = NoToggleIconTemplate.bind({});
NoToggleIcon.args = _object_spread({}, Default.args);
const NoCaptionTemplate = (args)=>({
        components: {
            QuantityField,
            Amount,
            ArrowsUpDownIcon: render
        },
        setup () {
            const value = ref({
                [MODE.FRONT]: "1234",
                [MODE.BACK]: "25"
            });
            const balance = ref({
                [MODE.FRONT]: "50",
                [MODE.BACK]: "100"
            });
            const mode = ref(args.mode);
            return {
                MODE,
                args,
                value,
                mode,
                balance
            };
        },
        template: `
    <div class="max-w-xs">
      <QuantityField
        :value="value"
        :mode="mode"
        :placeholder="args.placeholder"
        :leading="args.leading"
        :trailing="args.trailing"
        @update:mode="mode = $event"
        @update:value="value = $event"
      >
        <template #toggle-icon>
          <ArrowsUpDownIcon class="w-3 h-3 text-gray-400" />
        </template>
      </QuantityField>
    </div>
  `
    });
const NoCaption = NoCaptionTemplate.bind({});
NoCaption.args = _object_spread({}, Default.args);
const NoLeadingAndTrailingTemplate = (args)=>({
        components: {
            QuantityField,
            ArrowsUpDownIcon: render,
            Amount
        },
        setup () {
            const value = ref({
                [MODE.FRONT]: "1234",
                [MODE.BACK]: "25"
            });
            const balance = ref({
                [MODE.FRONT]: "50",
                [MODE.BACK]: "100"
            });
            const mode = ref(args.mode);
            return {
                MODE,
                args,
                value,
                mode,
                balance
            };
        },
        template: `
    <div class="max-w-xs">
      <QuantityField
        :value="value"
        :mode="mode"
        :placeholder="args.placeholder"
        @update:mode="mode = $event"
        @update:value="value = $event"
      >
        <template #toggle-icon>
          <ArrowsUpDownIcon class="w-3 h-3 text-gray-400" />
        </template>
        <template #caption>
          <Amount
            v-if="mode === MODE.FRONT"
            :value="balance[mode]"
          />
          <Amount
            v-if="mode === MODE.BACK"
            :value="balance[mode]"
          />
          <span>доступно</span>
        </template>
      </QuantityField>
    </div>
  `
    });
const NoLeadingAndTrailing = NoLeadingAndTrailingTemplate.bind({});
NoLeadingAndTrailing.args = {
    mode: MODE.FRONT,
    placeholder: "0"
};
const SingleModeTemplate = (args)=>({
        components: {
            QuantityField,
            ArrowsUpDownIcon: render,
            Amount
        },
        setup () {
            const value = ref("1234");
            const balance = ref("50");
            return {
                args,
                value,
                balance
            };
        },
        template: `
    <div class="max-w-xs">
      <QuantityField
        :value="value"
        :placeholder="args.placeholder"
        :leading="args.leading"
        @update:value="value = $event"
      />
    </div>
  `
    });
const SingleMode = SingleModeTemplate.bind({});
SingleMode.args = {
    leading: "USD",
    placeholder: "0"
};
const EmptyTemplate = (args)=>({
        components: {
            QuantityField,
            Amount
        },
        setup () {
            const value = ref("");
            const mode = ref(args.mode);
            return {
                MODE,
                value,
                mode,
                args
            };
        },
        template: `
    <div class="max-w-xs">
      <QuantityField :value="value" :mode="mode" :placeholder="args.placeholder" @update:mode="mode = $event" @update:value="value = $event" />
    </div>
  `
    });
const Empty = EmptyTemplate.bind({});
Empty.args = _object_spread({}, Default.args);
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    QuantityField,\n    ArrowsUpDownIcon,\n    Amount\n  },\n  setup() {\n    const value = ref({\n      [MODE.FRONT]: \"1234\",\n      [MODE.BACK]: \"25\"\n    });\n    const balance = ref({\n      [MODE.FRONT]: \"50\",\n      [MODE.BACK]: \"100\"\n    });\n    const mode = ref(args.mode);\n    return {\n      MODE,\n      args,\n      value,\n      mode,\n      balance\n    };\n  },\n  template: `\n    <div class=\"w-full\">\n      <QuantityField\n        :value=\"value\"\n        :mode=\"mode\"\n        placeholder=\"0\"\n        :placeholder=\"args.placeholder\"\n        :leading=\"args.leading\"\n        :trailing=\"args.trailing\"\n        @update:mode=\"mode = $event\"\n        @update:value=\"value = $event\"\n      >\n        <template #toggle-icon>\n          <ArrowsUpDownIcon class=\"w-3 h-3 text-gray-400\" />\n        </template>\n        <template #caption>\n          <div v-if=\"mode === MODE.FRONT\" class=\"flex items-center gap-1\">\n            <Amount \n              :currency=\"args.leading\"\n              :value=\"balance[mode]\"\n              currency-position=\"before\"\n            />\n            <span>\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E</span>\n          </div>\n          <div v-else-if=\"mode === MODE.BACK\" class=\"flex items-center gap-1\">\n            <Amount\n              :currency=\"args.trailing\"\n              :value=\"balance[mode]\"\n            />\n            <span>\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E</span>\n          </div>\n        </template>\n      </QuantityField>\n    </div>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
NoToggleIcon.parameters = _object_spread_props(_object_spread({}, NoToggleIcon.parameters), {
    docs: _object_spread_props(_object_spread({}, (_NoToggleIcon_parameters = NoToggleIcon.parameters) === null || _NoToggleIcon_parameters === void 0 ? void 0 : _NoToggleIcon_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    QuantityField,\n    Amount\n  },\n  setup() {\n    const value = ref({\n      [MODE.FRONT]: \"1234\"\n    });\n    const balance = ref({\n      [MODE.FRONT]: \"50\"\n    });\n    const mode = ref(args.mode);\n    return {\n      MODE,\n      args,\n      value,\n      mode,\n      balance\n    };\n  },\n  template: `\n    <div class=\"max-w-xs\">\n      <QuantityField\n        :value=\"value\"\n        :mode=\"mode\"\n        :placeholder=\"args.placeholder\"\n        :leading=\"args.leading\"\n        :trailing=\"args.trailing\"\n        @update:mode=\"mode = $event\"\n        @update:value=\"value = $event\"\n      >\n        <template #caption>\n          <Amount\n            v-if=\"mode === MODE.FRONT\"\n            :currency=\"args.leading\"\n            :value=\"balance[mode]\"\n            currency-position=\"before\"\n          />\n          <Amount\n            v-if=\"mode === MODE.BACK\"\n            :currency=\"args.trailing\"\n            :value=\"balance[mode]\"\n          />\n          <span>\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E</span>\n        </template>\n      </QuantityField>\n    </div>\n  `\n})"
        }, (_NoToggleIcon_parameters1 = NoToggleIcon.parameters) === null || _NoToggleIcon_parameters1 === void 0 ? void 0 : (_NoToggleIcon_parameters_docs = _NoToggleIcon_parameters1.docs) === null || _NoToggleIcon_parameters_docs === void 0 ? void 0 : _NoToggleIcon_parameters_docs.source)
    })
});
NoCaption.parameters = _object_spread_props(_object_spread({}, NoCaption.parameters), {
    docs: _object_spread_props(_object_spread({}, (_NoCaption_parameters = NoCaption.parameters) === null || _NoCaption_parameters === void 0 ? void 0 : _NoCaption_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    QuantityField,\n    Amount,\n    ArrowsUpDownIcon\n  },\n  setup() {\n    const value = ref({\n      [MODE.FRONT]: \"1234\",\n      [MODE.BACK]: \"25\"\n    });\n    const balance = ref({\n      [MODE.FRONT]: \"50\",\n      [MODE.BACK]: \"100\"\n    });\n    const mode = ref(args.mode);\n    return {\n      MODE,\n      args,\n      value,\n      mode,\n      balance\n    };\n  },\n  template: `\n    <div class=\"max-w-xs\">\n      <QuantityField\n        :value=\"value\"\n        :mode=\"mode\"\n        :placeholder=\"args.placeholder\"\n        :leading=\"args.leading\"\n        :trailing=\"args.trailing\"\n        @update:mode=\"mode = $event\"\n        @update:value=\"value = $event\"\n      >\n        <template #toggle-icon>\n          <ArrowsUpDownIcon class=\"w-3 h-3 text-gray-400\" />\n        </template>\n      </QuantityField>\n    </div>\n  `\n})"
        }, (_NoCaption_parameters1 = NoCaption.parameters) === null || _NoCaption_parameters1 === void 0 ? void 0 : (_NoCaption_parameters_docs = _NoCaption_parameters1.docs) === null || _NoCaption_parameters_docs === void 0 ? void 0 : _NoCaption_parameters_docs.source)
    })
});
NoLeadingAndTrailing.parameters = _object_spread_props(_object_spread({}, NoLeadingAndTrailing.parameters), {
    docs: _object_spread_props(_object_spread({}, (_NoLeadingAndTrailing_parameters = NoLeadingAndTrailing.parameters) === null || _NoLeadingAndTrailing_parameters === void 0 ? void 0 : _NoLeadingAndTrailing_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    QuantityField,\n    ArrowsUpDownIcon,\n    Amount\n  },\n  setup() {\n    const value = ref({\n      [MODE.FRONT]: \"1234\",\n      [MODE.BACK]: \"25\"\n    });\n    const balance = ref({\n      [MODE.FRONT]: \"50\",\n      [MODE.BACK]: \"100\"\n    });\n    const mode = ref(args.mode);\n    return {\n      MODE,\n      args,\n      value,\n      mode,\n      balance\n    };\n  },\n  template: `\n    <div class=\"max-w-xs\">\n      <QuantityField\n        :value=\"value\"\n        :mode=\"mode\"\n        :placeholder=\"args.placeholder\"\n        @update:mode=\"mode = $event\"\n        @update:value=\"value = $event\"\n      >\n        <template #toggle-icon>\n          <ArrowsUpDownIcon class=\"w-3 h-3 text-gray-400\" />\n        </template>\n        <template #caption>\n          <Amount\n            v-if=\"mode === MODE.FRONT\"\n            :value=\"balance[mode]\"\n          />\n          <Amount\n            v-if=\"mode === MODE.BACK\"\n            :value=\"balance[mode]\"\n          />\n          <span>\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E</span>\n        </template>\n      </QuantityField>\n    </div>\n  `\n})"
        }, (_NoLeadingAndTrailing_parameters1 = NoLeadingAndTrailing.parameters) === null || _NoLeadingAndTrailing_parameters1 === void 0 ? void 0 : (_NoLeadingAndTrailing_parameters_docs = _NoLeadingAndTrailing_parameters1.docs) === null || _NoLeadingAndTrailing_parameters_docs === void 0 ? void 0 : _NoLeadingAndTrailing_parameters_docs.source)
    })
});
SingleMode.parameters = _object_spread_props(_object_spread({}, SingleMode.parameters), {
    docs: _object_spread_props(_object_spread({}, (_SingleMode_parameters = SingleMode.parameters) === null || _SingleMode_parameters === void 0 ? void 0 : _SingleMode_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    QuantityField,\n    ArrowsUpDownIcon,\n    Amount\n  },\n  setup() {\n    const value = ref(\"1234\");\n    const balance = ref(\"50\");\n    return {\n      args,\n      value,\n      balance\n    };\n  },\n  template: `\n    <div class=\"max-w-xs\">\n      <QuantityField\n        :value=\"value\"\n        :placeholder=\"args.placeholder\"\n        :leading=\"args.leading\"\n        @update:value=\"value = $event\"\n      />\n    </div>\n  `\n})"
        }, (_SingleMode_parameters1 = SingleMode.parameters) === null || _SingleMode_parameters1 === void 0 ? void 0 : (_SingleMode_parameters_docs = _SingleMode_parameters1.docs) === null || _SingleMode_parameters_docs === void 0 ? void 0 : _SingleMode_parameters_docs.source)
    })
});
Empty.parameters = _object_spread_props(_object_spread({}, Empty.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Empty_parameters = Empty.parameters) === null || _Empty_parameters === void 0 ? void 0 : _Empty_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    QuantityField,\n    Amount\n  },\n  setup() {\n    const value = ref(\"\");\n    const mode = ref(args.mode);\n    return {\n      MODE,\n      value,\n      mode,\n      args\n    };\n  },\n  template: `\n    <div class=\"max-w-xs\">\n      <QuantityField :value=\"value\" :mode=\"mode\" :placeholder=\"args.placeholder\" @update:mode=\"mode = $event\" @update:value=\"value = $event\" />\n    </div>\n  `\n})"
        }, (_Empty_parameters1 = Empty.parameters) === null || _Empty_parameters1 === void 0 ? void 0 : (_Empty_parameters_docs = _Empty_parameters1.docs) === null || _Empty_parameters_docs === void 0 ? void 0 : _Empty_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default","NoToggleIcon","NoCaption","NoLeadingAndTrailing","SingleMode","Empty"];

export { Default, Empty, NoCaption, NoLeadingAndTrailing, NoToggleIcon, SingleMode, __namedExportsOrder, QuantityField_stories as default };
