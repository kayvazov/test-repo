import { r as ref, b as onMounted } from './iframe-B-YMhJRM.js';
import { I as IMask } from './index-DHjp26mP.js';

const AMOUNT_OPTIONS = {
    mask: Number,
    scale: 2,
    signed: true,
    thousandsSeparator: " ",
    padFractionalZeros: false,
    normalizeZeros: true,
    radix: ".",
    mapToRadix: [
        ".",
        ","
    ]
};
function generateAreaCodes(iso2, defaultAreaCodes) {
    const areaCodesMap = {
        kz: [
            "7"
        ]
    };
    var _areaCodesMap_iso2;
    return (_areaCodesMap_iso2 = areaCodesMap[iso2]) !== null && _areaCodesMap_iso2 !== void 0 ? _areaCodesMap_iso2 : defaultAreaCodes;
}
function generateTelMask(countryData, phoneMatch) {
    const dialCode = countryData.dialCode;
    let splitDialCode = phoneMatch[1].replace(/\d/g, "0").trim();
    let mask = [
        splitDialCode,
        " ",
        phoneMatch[2].replace(/\d/g, "0")
    ].join("");
    const maskAfterRules = {
        359: "[0]",
        43: "[00]",
        49: "[0]",
        60: "[0]",
        62: "[00]",
        372: "[0]",
        64: "[0]"
    };
    const notRequiredDigits = {
        49: 1,
        423: 2,
        372: 1
    };
    if (notRequiredDigits[dialCode]) {
        mask = mask.slice(0, mask.length - notRequiredDigits[dialCode]);
    }
    if (maskAfterRules[dialCode]) {
        mask += maskAfterRules[dialCode];
    }
    return mask.trim();
}
function roundByStep(value, step) {
    return Math.round(value / step) * step;
}
function useMask(inputNodeRef, options, defaultValue = "") {
    const value = ref("");
    const maskedValue = ref("");
    const isComplete = ref(false);
    let step = options.step || 0;
    let mask = null;
    const update = ()=>{
        value.value = mask.unmaskedValue;
        maskedValue.value = mask.value;
        isComplete.value = mask.masked.isComplete;
    };
    const setValue = (val)=>{
        if (mask === null) {
            return;
        }
        if (step) {
            mask.value = roundByStep(val, step).toString();
        } else {
            mask.value = val.toString();
        }
        update();
        mask.updateValue();
    };
    const updateOptions = (options)=>{
        mask === null || mask === void 0 ? void 0 : mask.updateOptions(options);
        step = options.step || 0;
    };
    onMounted(()=>{
        if (!(inputNodeRef === null || inputNodeRef === void 0 ? void 0 : inputNodeRef.value)) {
            return;
        }
        let el = inputNodeRef.value.$el || inputNodeRef.value;
        if (el.tagName !== "INPUT") {
            el = el.querySelector("input");
        }
        mask = IMask(el, options);
        setValue(defaultValue);
        mask.on("accept", update);
        mask.on("complete", update);
    });
    return {
        value,
        maskedValue,
        isComplete,
        setValue,
        updateOptions
    };
}

export { AMOUNT_OPTIONS as A, generateTelMask as a, generateAreaCodes as g, useMask as u };
