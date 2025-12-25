import { _ as _export_sfc, a as reactive, c as computed, o as onUnmounted, e as watch, f as openBlock, i as createBlock, j as withCtx, s as mergeProps, u as unref, x as resolveDynamicComponent, S as createTextVNode, A as toDisplayString, h as createBaseVNode, g as createElementBlock, m as normalizeClass, y as createCommentVNode } from './iframe-B-YMhJRM.js';
import './useTheme-Cy0CkrhV.js';
import { D as DASH_SYMBOL, H as HIDDEN_DATA_TEXT, N as NBSP_SYMBOL } from './constants-BNWoBBcu.js';
import './index-DHjp26mP.js';
import { u as useHideData } from './useHideData-p5xj-pxn.js';

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
const FRACTIONAL_SEPARATOR = ".";
const MAX_FRACTIONAL_DIGITS = 8;
const allowedValueTypes = [
    "number",
    "string"
];
/**
 * @param {number | string} number
 * @returns {number}
 */ function getCountFractionalDigits(number) {
    const string = String(number);
    // Parse exponential notation
    if (string.includes("e")) {
        const [significand, exp] = string.split("e");
        const absExp = Math.abs(parseInt(exp));
        var _significand_split_;
        return exp.startsWith("-") ? absExp + ((_significand_split_ = significand.split(FRACTIONAL_SEPARATOR)[1]) !== null && _significand_split_ !== void 0 ? _significand_split_ : "").length : 0;
    }
    var _string_split_;
    return ((_string_split_ = string.split(FRACTIONAL_SEPARATOR)[1]) !== null && _string_split_ !== void 0 ? _string_split_ : "").length;
}
function isValidValue(value) {
    return value !== null && allowedValueTypes.includes(typeof value) && isFinite(value);
}
function getRoundedValue(value, scale) {
    return isValidValue(value) ? Number(Number(value || 0).toFixed(scale)) : 0;
}
function format(number, scale = null, options = {}) {
    if (!isValidValue(number)) {
        return DASH_SYMBOL;
    }
    // Auto scale
    if (scale === null) {
        scale = getCountFractionalDigits(number);
    }
    const { minimumFractionDigits } = options;
    if (minimumFractionDigits !== undefined && minimumFractionDigits > scale) {
        scale = minimumFractionDigits;
    }
    const params = _object_spread$1({
        minimumFractionDigits: scale,
        maximumFractionDigits: scale
    }, options);
    if (options.isAbsolute) {
        number = Math.abs(number);
    }
    return new Intl.NumberFormat("ru-RU", params).format(number).replace(",", FRACTIONAL_SEPARATOR);
}
function formatFractionalDigits(value) {
    const [whole, fractional] = String(value).split(FRACTIONAL_SEPARATOR);
    let result = whole;
    if (fractional) {
        result += `${FRACTIONAL_SEPARATOR}${fractional.slice(0, MAX_FRACTIONAL_DIGITS)}`;
    }
    return Number(result);
}
function getChangedParts(prevStr, curStr) {
    let currSymbol;
    let stable = "";
    let fresh = "";
    let i = 0;
    if (!prevStr || prevStr.length !== curStr.length) {
        stable = curStr;
        return [
            stable,
            fresh
        ];
    }
    while(i < prevStr.length){
        currSymbol = curStr[i];
        if (currSymbol === prevStr[i]) {
            stable = stable + currSymbol;
        } else {
            fresh = curStr.slice(i);
            break;
        }
        i++;
    }
    return [
        stable,
        fresh
    ];
}

function useNumberFormat() {
    return {
        getCountFractionalDigits,
        formatFractionalDigits,
        format,
        isValidValue,
        getRoundedValue,
        getChangedParts
    };
}

// Fiat
const CURRENCY_RUR = "RUR";
const CURRENCY_RUB = "RUB";
const CURRENCY_UAH = "UAH";
const CURRENCY_USD = "USD";
const CURRENCY_EUR = "EUR";
const CURRENCY_GBP = "GBP";
const CURRENCY_KZT = "KZT";
const CURRENCY_HKD = "HKD";
const CURRENCY_CNY = "CNY";
const CURRENCY_CHF = "CHF";
const CURRENCY_TRY = "TRY";
const CURRENCY_AMD = "AMD";
// Crypto
const CURRENCY_BTC = "BTC";
const CURRENCY_ZAR = "ZAR";
// Labels
const CURRENCY_LABEL_EUR = "€";
const CURRENCY_LABEL_RUR = "₽";
const CURRENCY_LABEL_USD = "$";
const CURRENCY_LABEL_KZT = "₸";
const CURRENCY_LABEL_UAH = "₴";
const CURRENCY_LABEL_GBP = "£";
const CURRENCY_LABEL_BTC = "฿";
const CURRENCY_LABEL_CHF = "₣";
const CURRENCY_LABEL_HKD = "HK$";
const CURRENCY_LABEL_TRY = "₺";
const CURRENCY_LABEL_AMD = "֏";
const CURRENCY_LABEL_ZAR = "R";
const CURRENCY_LABEL_CNY = "¥";
// Map
const CURRENCY_LABELS = {
    [CURRENCY_EUR]: CURRENCY_LABEL_EUR,
    [CURRENCY_RUR]: CURRENCY_LABEL_RUR,
    [CURRENCY_RUB]: CURRENCY_LABEL_RUR,
    [CURRENCY_USD]: CURRENCY_LABEL_USD,
    [CURRENCY_KZT]: CURRENCY_LABEL_KZT,
    [CURRENCY_UAH]: CURRENCY_LABEL_UAH,
    [CURRENCY_GBP]: CURRENCY_LABEL_GBP,
    [CURRENCY_BTC]: CURRENCY_LABEL_BTC,
    [CURRENCY_CHF]: CURRENCY_LABEL_CHF,
    [CURRENCY_HKD]: CURRENCY_LABEL_HKD,
    [CURRENCY_TRY]: CURRENCY_LABEL_TRY,
    [CURRENCY_AMD]: CURRENCY_LABEL_AMD,
    [CURRENCY_ZAR]: CURRENCY_LABEL_ZAR,
    [CURRENCY_CNY]: CURRENCY_LABEL_CNY
};

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
const _hoisted_1 = [
    "textContent"
];
const _hoisted_2 = [
    "textContent"
];
const CURRENCY_POSITION_BEFORE = "before";
const CURRENCY_POSITION_AFTER = "after";
const NOT_AVAILABLE_VALUE = "n/a";
const _sfc_main = {
    __name: 'Amount',
    props: {
        as: {
            type: String,
            default: "span"
        },
        value: {
            type: [
                Number,
                String
            ],
            default: "-"
        },
        blinkDuration: {
            type: Number,
            default: 700
        },
        scale: {
            type: Number,
            default: 2
        },
        minScale: {
            type: Number,
            default: null
        },
        maxScale: {
            type: Number,
            default: null
        },
        currency: {
            type: String,
            default: ""
        },
        disabled: {
            type: Boolean,
            default: false
        },
        isPercent: {
            type: Boolean,
            default: false
        },
        partialColorize: {
            type: Boolean,
            default: false
        },
        isBlinked: {
            type: Boolean,
            default: false
        },
        showPlus: {
            type: Boolean,
            default: false
        },
        compareValue: {
            type: Number,
            default: 0
        },
        wrapInBrackets: {
            type: Boolean,
            default: false
        },
        currencyPosition: {
            type: String,
            default: CURRENCY_POSITION_AFTER,
            validator: (value)=>[
                    CURRENCY_POSITION_BEFORE,
                    CURRENCY_POSITION_AFTER
                ].includes(value)
        },
        isColorized: {
            type: Boolean,
            default: false
        },
        padFractionalZeros: {
            type: Boolean,
            default: false
        },
        hideData: {
            type: Boolean,
            default: false
        },
        showNotAvailable: {
            type: Boolean,
            default: false
        }
    },
    setup (__props) {
        const props = __props;
        const TEXT_GREEN = "text-color-green";
        const TEXT_RED = "text-color-red";
        const TEXT_WHITE = "text-color-white";
        const BG_GREEN = "background-green";
        const BG_RED = "background-red";
        const classNames = reactive({
            backgroundBlinkClass: "",
            partialColorize: ""
        });
        const { isValidValue, getRoundedValue, format, getCountFractionalDigits, getChangedParts } = useNumberFormat();
        const { isDataHidden, onToggle } = useHideData();
        let timeoutID = null;
        let previousString = "";
        const scale = computed(()=>{
            let result = props.scale;
            if (result === null) {
                result = getCountFractionalDigits(props.value);
            }
            if (props.maxScale !== null && result > props.maxScale) {
                result = props.maxScale;
            }
            if (props.minScale !== null && result < props.minScale) {
                result = props.minScale;
            }
            return result;
        });
        const roundedValue = computed(()=>{
            return getRoundedValue(props.value, scale.value);
        });
        const isHidden = computed(()=>{
            return props.hideData && isDataHidden.value;
        });
        const hasCurrencyLabel = computed(()=>Boolean(CURRENCY_LABELS[props.currency]));
        const currencyLabel = computed(()=>{
            return CURRENCY_LABELS[props.currency] || props.currency;
        });
        let hasRoundedValueSign = false;
        const after = computed(()=>{
            const afterResult = [];
            if (!isValidValue(props.value)) {
                return "";
            }
            if (currencyLabel.value && props.currencyPosition === CURRENCY_POSITION_AFTER) {
                afterResult.push(NBSP_SYMBOL);
                afterResult.push(`${currencyLabel.value}`);
            }
            if (props.isPercent) {
                afterResult.push("%");
            }
            if (props.wrapInBrackets) {
                afterResult.push(`)`);
            }
            return afterResult.join("");
        });
        const before = computed(()=>{
            const beforeResult = [];
            if (!isValidValue(props.value)) {
                return "";
            }
            if (currencyLabel.value && props.currencyPosition === CURRENCY_POSITION_BEFORE) {
                if (!hasCurrencyLabel.value) {
                    beforeResult.unshift(NBSP_SYMBOL);
                }
                beforeResult.unshift(`${currencyLabel.value}`);
            }
            if (!isHidden.value) {
                if (roundedValue.value < 0) {
                    beforeResult.unshift(`-${NBSP_SYMBOL}`);
                    hasRoundedValueSign = true;
                } else if (props.showPlus && roundedValue.value > 0) {
                    beforeResult.unshift(`+${NBSP_SYMBOL}`);
                    hasRoundedValueSign = true;
                }
            }
            if (props.wrapInBrackets) {
                beforeResult.unshift("(");
            }
            if (hasCurrencyLabel.value || hasRoundedValueSign) {
                return beforeResult.join("").trim();
            }
            return beforeResult.join("");
        });
        const result = computed(()=>{
            if (!isValidValue(props.value)) {
                if (props.showNotAvailable) {
                    return NOT_AVAILABLE_VALUE;
                }
                return DASH_SYMBOL;
            }
            const minimumFractionDigits = props.padFractionalZeros ? scale.value : 0;
            const options = {
                minimumFractionDigits,
                isAbsolute: true
            };
            return format(roundedValue.value, scale.value, options);
        });
        const colorizeClasses = computed(()=>{
            const classes = [];
            let className = "";
            if (props.isColorized) {
                className = getClassNameByValue(roundedValue.value);
                if (isValidValue(props.compareValue) && props.compareValue) {
                    className = getClassNameByValue(props.compareValue);
                }
                if (className) {
                    classes.push(className);
                }
            }
            return classes;
        });
        const partials = computed(()=>{
            if (props.partialColorize) {
                return getChangedParts(previousString, result.value);
            }
            return [
                result.value
            ];
        });
        const classList = computed(()=>{
            if (classNames.backgroundBlinkClass) {
                return [
                    TEXT_WHITE,
                    classNames.backgroundBlinkClass
                ];
            }
            return colorizeClasses.value;
        });
        function toggleBlinkClass(backgroundBlinkClass) {
            classNames.backgroundBlinkClass = backgroundBlinkClass;
            /**
   * убираем цвет части, которая подкрашивается отдельно
   */ classNames.partialColorize = "";
            if (timeoutID) {
                clearTimeout(timeoutID);
            }
            return new Promise((res)=>{
                timeoutID = setTimeout(()=>{
                    classNames.backgroundBlinkClass = "";
                    res();
                }, props.blinkDuration);
            });
        }
        function getClassNameByValue(value) {
            return Number(value) > 0 ? TEXT_GREEN : Number(value) < 0 ? TEXT_RED : "";
        }
        onUnmounted(()=>{
            if (timeoutID) {
                clearTimeout(timeoutID);
            }
        });
        watch(()=>result.value, (curr, prev)=>{
            previousString = prev;
        });
        watch(()=>props.value, (value, prevValue)=>{
            if (isHidden.value || props.disabled || props.showNotAvailable || !props.isBlinked || !isValidValue(value) || !isValidValue(prevValue)) {
                return;
            }
            const prevRounded = Number(prevValue).toFixed(scale.value);
            const valueRounded = Number(value).toFixed(scale.value);
            if (prevRounded < valueRounded) {
                toggleBlinkClass(BG_GREEN).finally(()=>{
                    classNames.partialColorize = TEXT_GREEN;
                });
            } else if (prevRounded > valueRounded) {
                toggleBlinkClass(BG_RED).finally(()=>{
                    classNames.partialColorize = TEXT_RED;
                });
            }
        });
        return (_ctx, _cache)=>{
            return isHidden.value ? (openBlock(), createBlock(resolveDynamicComponent(__props.as), mergeProps({
                key: 0
            }, _object_spread({}, _ctx.$attrs), {
                class: [
                    {
                        'is-clickable': !_ctx.$attrs.onClick
                    },
                    "amount"
                ],
                "data-after": after.value,
                "data-before": before.value,
                onClick: _cache[0] || (_cache[0] = ($event)=>{
                    var _ctx_$attrs_onClick;
                    return (_ctx_$attrs_onClick = _ctx.$attrs.onClick) !== null && _ctx_$attrs_onClick !== void 0 ? _ctx_$attrs_onClick : unref(onToggle)(false);
                })
            }), {
                default: withCtx(()=>[
                        createTextVNode(toDisplayString(unref(HIDDEN_DATA_TEXT)), 1)
                    ]),
                _: 1
            }, 16, [
                "class",
                "data-after",
                "data-before"
            ])) : (openBlock(), createBlock(resolveDynamicComponent(__props.as), mergeProps({
                key: 1
            }, _object_spread({}, _ctx.$attrs), {
                class: [
                    [
                        ...classList.value,
                        {
                            'amount-is-blinked': __props.isBlinked
                        }
                    ],
                    "amount"
                ],
                "data-after": after.value,
                "data-before": before.value
            }), {
                default: withCtx(()=>[
                        createBaseVNode("span", {
                            textContent: toDisplayString(partials.value[0])
                        }, null, 8, _hoisted_1),
                        partials.value.length > 1 ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            class: normalizeClass([
                                classNames.partialColorize
                            ]),
                            textContent: toDisplayString(partials.value[1])
                        }, null, 10, _hoisted_2)) : createCommentVNode("", true)
                    ]),
                _: 1
            }, 16, [
                "class",
                "data-after",
                "data-before"
            ]));
        };
    }
};
const Amount = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-a7410716"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"Amount","description":"","tags":{},"props":[{"name":"as","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"span\""}},{"name":"value","type":{"name":"number|string"},"defaultValue":{"func":false,"value":"\"-\""}},{"name":"blinkDuration","type":{"name":"number"},"defaultValue":{"func":false,"value":"700"}},{"name":"scale","type":{"name":"number"},"defaultValue":{"func":false,"value":"2"}},{"name":"minScale","type":{"name":"number"},"defaultValue":{"func":false,"value":"null"}},{"name":"maxScale","type":{"name":"number"},"defaultValue":{"func":false,"value":"null"}},{"name":"currency","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"disabled","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"isPercent","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"partialColorize","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"isBlinked","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"showPlus","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"compareValue","type":{"name":"number"},"defaultValue":{"func":false,"value":"0"}},{"name":"wrapInBrackets","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"currencyPosition","type":{"name":"string"},"defaultValue":{"func":false,"value":"CURRENCY_POSITION_AFTER"},"values":[]},{"name":"isColorized","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"padFractionalZeros","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"hideData","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"showNotAvailable","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/amount/Amount.vue"]};

export { Amount as A, CURRENCY_LABELS as C };
