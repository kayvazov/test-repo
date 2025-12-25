import { r as ref } from './iframe-B-YMhJRM.js';

const TOGGLE_HIDE_DATA = "toggle-hide-data";
const isDataHidden = ref(true);
/**
 * @param {Function} callback
 */ function addListener(callback) {
    document.addEventListener(TOGGLE_HIDE_DATA, callback);
}
/**
 * @param {Function} callback
 */ function removeListener(callback) {
    document.removeEventListener(TOGGLE_HIDE_DATA, callback);
}
/**
 * @param {boolean} value
 */ function triggerToggle(value = !isDataHidden.value) {
    document.dispatchEvent(new CustomEvent(TOGGLE_HIDE_DATA, {
        detail: value
    }));
}
/**
 * @param {boolean} value
 */ function toggleDataVisibility(value = !isDataHidden.value) {
    isDataHidden.value = value;
}
function useHideData() {
    return {
        isDataHidden,
        addListener,
        removeListener,
        onToggle: triggerToggle,
        toggleDataVisibility
    };
}

export { useHideData as u };
