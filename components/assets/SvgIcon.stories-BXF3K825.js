import { E as defineComponent, H as h } from './iframe-B-YMhJRM.js';
import { u as useClipboard } from './useClipboard-D24cvHBF.js';
import { S as SvgIcon } from './SvgIcon-CB4xQEt9.js';
import { a as ChevronDownIcon, C as ChevronUpIcon, b as CloseMarketIcon, F as FacebookIcon, G as GPTChatIcon, I as InstagramIcon, P as PostMarketIcon, c as PreMarketIcon, T as TechMarketIcon, d as TelegramIcon, e as TikTokIcon, f as TwitterIcon, W as WebIcon, Y as YouTubeIcon } from './ChevronDownIcon-CrpolITG.js';
import './dynamic-import-helper-uMTE3ehW.js';

const icons = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ChevronDownIcon,
  ChevronUpIcon,
  CloseMarketIcon,
  FacebookIcon,
  GPTChatIcon,
  InstagramIcon,
  PostMarketIcon,
  PreMarketIcon,
  TechMarketIcon,
  TelegramIcon,
  TikTokIcon,
  TwitterIcon,
  WebIcon,
  YouTubeIcon
}, Symbol.toStringTag, { value: 'Module' }));

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
function mapIconName(icon) {
    // eslint-disable-next-line no-underscore-dangle
    const path = icon.__file || icon.__docgenInfo.displayName;
    return path.substring(path.lastIndexOf("/") + 1).replace(".vue", "").replace("Icon", "");
}
const Icon = defineComponent({
    props: _object_spread({}, SvgIcon.props),
    setup (props) {
        const { copy, isCopied } = useClipboard({
            source: props.name
        });
        return ()=>h("div", {
                class: [
                    "inline-flex flex-col items-center p-2 overflow-hidden bg-white rounded-lg shadow cursor-pointer",
                    isCopied.value && "bg-green-200"
                ],
                onClick: copy
            }, [
                h(SvgIcon, _object_spread({
                    class: "w-6 h-6"
                }, props)),
                props.name
            ]);
    }
});
const SvgIcon_stories = {
    title: "Components/SvgIcon",
    component: SvgIcon
};
const Template = (args)=>({
        components: {
            SvgIcon,
            Icon
        },
        setup () {
            return _object_spread({}, args);
        },
        template: `
    <div
        class="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-x-6 gap-y-8"
    >
      <Icon v-for="icon in icons" :name="icon" />
    </div>
  `
    });
const Default = Template.bind({});
Default.args = {
    icons: Object.values(icons).map(mapIconName)
};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    SvgIcon,\n    Icon\n  },\n  setup() {\n    return {\n      ...args\n    };\n  },\n  template: `\n    <div\n        class=\"grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-x-6 gap-y-8\"\n    >\n      <Icon v-for=\"icon in icons\" :name=\"icon\" />\n    </div>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, SvgIcon_stories as default };
