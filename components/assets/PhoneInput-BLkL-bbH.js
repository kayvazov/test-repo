const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./intlTelInput-BmjxE_jU.js","./_commonjsHelpers-BFTU3MAI.js"])))=>i.map(i=>d[i]);
import { f as openBlock, g as createElementBlock, h as createBaseVNode, _ as _export_sfc, r as ref, a as reactive, c as computed, b as onMounted, e as watch, o as onUnmounted, m as normalizeClass, q as renderSlot, y as createCommentVNode, s as mergeProps, l as createVNode, u as unref, A as toDisplayString, n as nextTick, K as __vitePreload } from './iframe-B-YMhJRM.js';
import { u as useMask, g as generateAreaCodes, a as generateTelMask } from './useMask-G9TE6bCD.js';

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
      d: "M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
    })
  ]))
}

const dropdownContainer = "uc_dropdown-container_650e95";
const phoneInputWrapper = "uc_phone-input-wrapper_1bb8fe";
const label = "uc_label_d304ba";
const dark = "dark";
const inputWrapper = "uc_input-wrapper_ae9bf2";
const hiddenInput = "uc_hidden-input_d25783";
const buttonWrapper = "uc_button-wrapper_1a631c";
const button = "uc_button_ce50a0";
const icon = "uc_icon_baec64";
const error = "uc_error_cb5e10";
const phoneInput = "uc_phone-input_fe0150";
const phoneInputClearButton = "uc_phone-input-clear-button_f0281c";
const isError = "uc_is-error_e79f9b";
const itiSelectedCountry = "uc_iti__selected-country_ae4431";
const style0 = {
	"dropdown-container": "uc_dropdown-container_650e95",
	dropdownContainer: dropdownContainer,
	"phone-input-wrapper": "uc_phone-input-wrapper_1bb8fe",
	phoneInputWrapper: phoneInputWrapper,
	label: label,
	dark: dark,
	"input-wrapper": "uc_input-wrapper_ae9bf2",
	inputWrapper: inputWrapper,
	"hidden-input": "uc_hidden-input_d25783",
	hiddenInput: hiddenInput,
	"button-wrapper": "uc_button-wrapper_1a631c",
	buttonWrapper: buttonWrapper,
	button: button,
	icon: icon,
	error: error,
	"phone-input": "uc_phone-input_fe0150",
	phoneInput: phoneInput,
	"phone-input-clear-button": "uc_phone-input-clear-button_f0281c",
	phoneInputClearButton: phoneInputClearButton,
	"is-error": "uc_is-error_e79f9b",
	isError: isError,
	"iti__selected-country": "uc_iti__selected-country_ae4431",
	itiSelectedCountry: itiSelectedCountry
};

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
const _hoisted_1 = [
    "placeholder"
];
const _hoisted_2 = [
    "innerHTML"
];
const MAX_MASK_RETRIES = 1;
const _sfc_main = {
    __name: 'PhoneInput',
    props: {
        modelValue: {
            type: String,
            default: ""
        },
        isError: {
            type: Boolean,
            default: false
        },
        errorText: {
            type: String,
            default: ""
        },
        excludeCountries: {
            type: Array,
            default: ()=>[]
        },
        preferredCountries: {
            type: Array,
            default: ()=>[
                    "ru",
                    "ua",
                    "by",
                    "kz",
                    "cy",
                    "de"
                ]
        },
        isComplete: {
            type: Boolean,
            default: false
        },
        wrapperClasses: {
            type: String,
            default: ""
        },
        showResetBtn: {
            type: Boolean,
            default: false
        },
        initialCountry: {
            type: String,
            required: true
        },
        errors: {
            type: Object,
            required: true,
            validator (obj) {
                return obj && typeof obj.phoneMoreLength === "function";
            }
        }
    },
    emits: {
        "update:modelValue": null,
        "update:maskedValue": null,
        countryChange: null,
        "update:isComplete": null,
        "update:isError": null
    },
    setup (__props, { emit: __emit }) {
        const props = __props;
        const emit = __emit;
        const TEL_INPUT_CONFIG = {
            autoInsertDialCode: false,
            autoPlaceholder: "aggressive",
            nationalMode: false,
            formatOnDisplay: false
        };
        const IGNORE_KEYS = [
            "Enter"
        ];
        const intlPhoneNode = ref(null);
        const showMaskNotice = ref(false);
        const hasInitValue = ref(Boolean(props.modelValue));
        const maxMaskAttempts = ref(0);
        const resetMaskHtml = ref("");
        const initialCountry = ref(props.initialCountry);
        const dropdownContainer = ref(null);
        const state = reactive({
            iti: null,
            utils: null,
            countryData: null,
            isComplete: true,
            isShowClearButton: false
        });
        const maskIsSkipped = ref(false);
        const placeholder = computed(()=>{
            var _state_utils, _state_utils1;
            // return example number from utils function
            return state.countryData && ((_state_utils1 = state.utils) === null || _state_utils1 === void 0 ? void 0 : _state_utils1.getExampleNumber(state.countryData.iso2, false, (_state_utils = state.utils) === null || _state_utils === void 0 ? void 0 : _state_utils.numberFormat.INTERNATIONAL));
        });
        const clearedPlaceholder = computed(()=>{
            return getPhoneDigits(placeholder.value);
        });
        const mask = computed(()=>{
            const phoneMatch = placeholder.value && placeholder.value.match(new RegExp(`(\\+${state.countryData.dialCode} )(.*)`));
            return phoneMatch ? generateTelMask(state.countryData, phoneMatch) : "";
        });
        const { value, maskedValue, updateOptions, setValue } = useMask(intlPhoneNode, {
            mask: mask.value
        }, props.modelValue);
        function getPhoneDigits(phone) {
            return phone.replaceAll(/\D/g, "");
        }
        function onCountryChange() {
            maskIsSkipped.value = false;
            const countryData = state.iti.getSelectedCountryData();
            if (countryData.dialCode) {
                state.countryData = countryData;
            }
            onFocusInput();
        }
        function setDialCodeWithAreaCode() {
            var _state_countryData_areaCodes, _state_countryData;
            updateValue(state.countryData.dialCode);
            if (((_state_countryData = state.countryData) === null || _state_countryData === void 0 ? void 0 : (_state_countryData_areaCodes = _state_countryData.areaCodes) === null || _state_countryData_areaCodes === void 0 ? void 0 : _state_countryData_areaCodes.length) === 1) {
                updateValue(state.countryData.dialCode + state.countryData.areaCodes[0]);
            }
        }
        function updateValue(value) {
            var _state_utils;
            setValue(value);
            // need for correct validate phone number (for example validate Russia numbers when we write +7 and +8)
            // in value argument we have number without plus sign that why we need to validate masked value.
            state.isComplete = maskIsSkipped.value ? Boolean(value.length) : (_state_utils = state.utils) === null || _state_utils === void 0 ? void 0 : _state_utils.isValidNumber(maskedValue.value, state.countryData.iso2);
            state.isShowClearButton = value.length > 0;
            emit("update:modelValue", value);
            emit("update:maskedValue", maskedValue);
            emit("update:isComplete", state.isComplete);
        }
        function onCloseDropdown() {
            var _state_countryData;
            state.countryData = state.iti.getSelectedCountryData();
            state.countryData.areaCodes = generateAreaCodes(state.countryData.iso2, (_state_countryData = state.countryData) === null || _state_countryData === void 0 ? void 0 : _state_countryData.areaCodes);
            if (!hasInitValue.value) {
                setDialCodeWithAreaCode();
            }
            initialCountry.value = state.countryData.iso2;
            emit("countryChange", state.countryData);
            if (!hasInitValue.value) {
                updateValue(state.countryData.dialCode);
            }
        }
        function onSkipMask() {
            maskIsSkipped.value = true;
            updateOptions({
                mask: function(value) {
                    return /^\+\d*$/.test(value);
                }
            });
            resetMaskLengthErrors();
            onFocusInput();
        }
        function onFocusInput() {
            nextTick(()=>{
                intlPhoneNode.value.focus();
            });
        }
        function resetMaskLengthErrors() {
            showMaskNotice.value = false;
            maxMaskAttempts.value = 0;
            resetMaskHtml.value = "";
            emit("update:isError", false);
        }
        function setMaskLengthError(text) {
            showMaskNotice.value = true;
            resetMaskHtml.value = text;
            emit("update:isError", true);
        }
        function onClearInput() {
            updateValue(state.countryData.dialCode);
            resetMaskLengthErrors();
            onFocusInput();
        }
        function onKeyUp(e) {
            if (maskIsSkipped.value || IGNORE_KEYS.includes(e.key)) {
                return;
            }
            const clearedMaskedValue = getPhoneDigits(value.value);
            const isSameLength = clearedMaskedValue.length >= clearedPlaceholder.value.length;
            if (!isSameLength && showMaskNotice.value) {
                resetMaskLengthErrors();
                return;
            }
            if (isSameLength) {
                maxMaskAttempts.value++;
            }
            if (isSameLength && maxMaskAttempts.value > MAX_MASK_RETRIES) {
                setMaskLengthError(props.errors.phoneMoreLength(clearedPlaceholder.value));
            }
        }
        onMounted(/*#__PURE__*/ _async_to_generator(function*() {
            const [responseIntlTelInput, utils] = yield Promise.all([
                __vitePreload(() => import('./intlTelInput-BmjxE_jU.js').then(n => n.i),true?__vite__mapDeps([0,1]):void 0,import.meta.url),
                __vitePreload(() => import('./utils-CNIHbJ5h.js'),true?[]:void 0,import.meta.url)
            ]);
            const intlTelInput = responseIntlTelInput.default;
            state.utils = utils.default;
            state.iti = intlTelInput(intlPhoneNode.value, _object_spread_props(_object_spread({}, TEL_INPUT_CONFIG), {
                utils: state.utils,
                excludeCountries: props.excludeCountries,
                initialCountry: initialCountry.value,
                preferredCountries: props.preferredCountries,
                dropdownContainer: dropdownContainer.value
            }));
            yield state.iti.promise;
            if (hasInitValue.value) {
                state.countryData = state.iti.getSelectedCountryData();
                state.iti.setNumber(props.modelValue);
                onCloseDropdown();
                value.value = props.modelValue;
                hasInitValue.value = false;
                return;
            }
            onCloseDropdown();
        }));
        watch(value, updateValue);
        watch(mask, (value)=>{
            updateOptions({
                mask: value
            });
        });
        onUnmounted(()=>{
            state.iti && state.iti.destroy();
        });
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", {
                class: normalizeClass([
                    _ctx.$style.phoneInputWrapper,
                    {
                        [_ctx.$style.isError]: __props.isError
                    }
                ])
            }, [
                _ctx.$slots.label ? (openBlock(), createElementBlock("label", {
                    key: 0,
                    class: normalizeClass(_ctx.$style.label)
                }, [
                    renderSlot(_ctx.$slots, "label", {}, undefined, true)
                ], 2)) : createCommentVNode("", true),
                createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.inputWrapper)
                }, [
                    createBaseVNode("input", mergeProps({
                        ref_key: "intlPhoneNode",
                        ref: intlPhoneNode,
                        class: _ctx.$style.phoneInput,
                        placeholder: placeholder.value
                    }, _ctx.$attrs, {
                        inputmode: "tel",
                        "onClose:countrydropdown": onCloseDropdown,
                        onCountrychange: onCountryChange,
                        onInput: onKeyUp
                    }), null, 16, _hoisted_1),
                    createBaseVNode("div", {
                        class: normalizeClass(_ctx.$style.buttonWrapper)
                    }, [
                        state.isShowClearButton ? (openBlock(), createElementBlock("button", {
                            key: 0,
                            class: normalizeClass(_ctx.$style.button),
                            type: "button",
                            onClick: onClearInput
                        }, [
                            createVNode(unref(render), {
                                class: normalizeClass(_ctx.$style.icon)
                            }, null, 8, [
                                "class"
                            ])
                        ], 2)) : createCommentVNode("", true)
                    ], 2)
                ], 2),
                createBaseVNode("div", {
                    ref_key: "dropdownContainer",
                    ref: dropdownContainer,
                    class: normalizeClass(_ctx.$style.dropdownContainer)
                }, null, 2),
                __props.showResetBtn && showMaskNotice.value ? (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: normalizeClass(_ctx.$style.error),
                    onClick: onSkipMask,
                    innerHTML: resetMaskHtml.value
                }, null, 10, _hoisted_2)) : createCommentVNode("", true),
                __props.isError && __props.errorText ? (openBlock(), createElementBlock("span", {
                    key: 2,
                    class: normalizeClass(_ctx.$style.error)
                }, toDisplayString(__props.errorText), 3)) : createCommentVNode("", true)
            ], 2);
        };
    }
};
const cssModules = {
    "$style": style0
};
const PhoneInput = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__cssModules',
        cssModules
    ],
    [
        '__scopeId',
        "data-v-2b9e37b3"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"PhoneInput","description":"","tags":{},"props":[{"name":"modelValue","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"isError","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"errorText","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"excludeCountries","type":{"name":"array"},"defaultValue":{"func":false,"value":"[]"}},{"name":"preferredCountries","type":{"name":"array"},"defaultValue":{"func":false,"value":"[\"ru\", \"ua\", \"by\", \"kz\", \"cy\", \"de\"]"}},{"name":"isComplete","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"wrapperClasses","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"showResetBtn","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"initialCountry","type":{"name":"string"},"required":true},{"name":"errors","type":{"name":"object"},"required":true}],"events":[{"name":"update:modelValue"},{"name":"update:maskedValue"},{"name":"countryChange"},{"name":"update:isComplete"},{"name":"update:isError"}],"slots":[{"name":"label"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/phone-input/PhoneInput.vue"]};

export { PhoneInput as P };
