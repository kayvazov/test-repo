import { r as ref, c as computed } from './iframe-B-YMhJRM.js';

const themes = {
    DARK: "dark",
    LIGHT: "light"
};
const theme = ref(themes.LIGHT);
const setTheme = (value)=>{
    theme.value = value;
};
const changeTheme = (targetTheme)=>{
};
const getTheme = ()=>{
    return theme.value;
};
setTheme(themes.LIGHT);
function useTheme() {
    const isDark = computed(()=>theme.value === themes.DARK);
    return {
        theme,
        isDark,
        setTheme,
        getTheme,
        changeTheme
    };
}

export { useTheme as u };
