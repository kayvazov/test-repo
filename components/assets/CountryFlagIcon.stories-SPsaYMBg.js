import { C as COUNTRY_GB, a as COUNTRY_CZ, b as COUNTRY_LT, c as COUNTRY_RO, d as COUNTRY_ES, e as COUNTRY_FR, f as COUNTRY_PT, g as COUNTRY_GR, h as COUNTRY_IT, i as COUNTRY_RU, j as COUNTRY_DE, k as COUNTRY_PL, l as COUNTRY_KZ, m as COUNTRY_NL, n as COUNTRY_UA, o as COUNTRY_EE, p as COUNTRY_DK, q as COUNTRY_BG, r as COUNTRY_AM, s as COUNTRY_BY, t as COUNTRY_MIDDLE_EAST, u as COUNTRY_DEFAULT, v as COUNTRY_AR, w as COUNTRY_TG, x as COUNTRY_TR, y as COUNTRY_ZH, z as CountryFlagIcon } from './CountryFlagIcon-CDE82R4S.js';
import './iframe-B-YMhJRM.js';
import './dynamic-import-helper-uMTE3ehW.js';

const flagIconNameByLangShortCode = {
    en: COUNTRY_GB,
    cs: COUNTRY_CZ,
    lt: COUNTRY_LT,
    ro: COUNTRY_RO,
    es: COUNTRY_ES,
    fr: COUNTRY_FR,
    pt: COUNTRY_PT,
    el: COUNTRY_GR,
    it: COUNTRY_IT,
    ru: COUNTRY_RU,
    de: COUNTRY_DE,
    pl: COUNTRY_PL,
    kk: COUNTRY_KZ,
    nl: COUNTRY_NL,
    uk: COUNTRY_UA,
    et: COUNTRY_EE,
    da: COUNTRY_DK,
    bg: COUNTRY_BG,
    hy: COUNTRY_AM,
    by: COUNTRY_BY,
    middleEast: COUNTRY_MIDDLE_EAST,
    default: COUNTRY_DEFAULT,
    ar: COUNTRY_AR,
    tg: COUNTRY_TG,
    tr: COUNTRY_TR,
    zh: COUNTRY_ZH
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
const CountryFlagIcon_stories = {
    title: "Components/CountryFlagIcon",
    component: CountryFlagIcon
};
const Template = (args)=>({
        components: {
            CountryFlagIcon
        },
        setup () {
            return _object_spread({}, args);
        },
        template: `
    <div class="flex flex-col gap-8">
      <CountryFlagIcon
          v-for="country in list"
          :country="country"
          :size="size"
      />
    </div>
  `
    });
const Default = Template.bind({});
Default.args = {
    list: Object.values(flagIconNameByLangShortCode),
    size: "20"
};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    CountryFlagIcon\n  },\n  setup() {\n    return {\n      ...args\n    };\n  },\n  template: `\n    <div class=\"flex flex-col gap-8\">\n      <CountryFlagIcon\n          v-for=\"country in list\"\n          :country=\"country\"\n          :size=\"size\"\n      />\n    </div>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, CountryFlagIcon_stories as default };
