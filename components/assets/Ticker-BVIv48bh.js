import { _ as _export_sfc, f as openBlock, g as createElementBlock, A as toDisplayString, r as ref, t as toRefs, c as computed, e as watch, m as normalizeClass, q as renderSlot, l as createVNode, v as normalizeStyle, y as createCommentVNode } from './iframe-B-YMhJRM.js';

const _hoisted_1$2 = {
    class: "stub"
};
const _sfc_main$2 = {
    __name: 'TickerLogoStub',
    props: {
        stubLogo: {
            type: String,
            default: ""
        }
    },
    setup (__props) {
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(__props.stubLogo), 1);
        };
    }
};
const TickerLogoStub = /*#__PURE__*/ _export_sfc(_sfc_main$2, [
    [
        '__scopeId',
        "data-v-97b12676"
    ]
]);
_sfc_main$2.__docgenInfo = {"exportName":"default","displayName":"TickerLogoStub","description":"","tags":{},"props":[{"name":"stubLogo","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/ticker/TickerLogoStub.vue"]};

const wrapper$1 = "uc_wrapper_7c2753";
const image = "uc_image_78805a";
const style0$1 = {
	wrapper: wrapper$1,
	image: image
};

const _hoisted_1$1 = [
    "alt",
    "src"
];
const DOMAIN_NAME_COM = "tradernet.com";
const DOMAIN_NAME_LOCALHOST = "localhost";
const _sfc_main$1 = {
    __name: 'TickerLogo',
    props: {
        ticker: {
            type: String,
            required: true
        },
        baseContractCode: {
            type: String,
            default: ""
        },
        size: {
            type: Array,
            default: ()=>[
                    30,
                    30
                ]
        }
    },
    setup (__props) {
        const props = __props;
        const hasImage = ref(true);
        const imageRef = ref(null);
        const { ticker: tickerRef, baseContractCode: baseContractCodeRef } = toRefs(props);
        const domain = location.hostname === DOMAIN_NAME_LOCALHOST ? `https://${DOMAIN_NAME_COM}` : "";
        const logoPath = `${domain}/logos/get-logo-by-ticker?ticker=`;
        const path = computed(()=>{
            let ticker = props.baseContractCode || props.ticker;
            [
                "_IPO",
                "_IPO_FWD",
                ".BLOCKED"
            ].forEach((part)=>{
                ticker = ticker.replace(part, "");
            });
            ticker = ticker.toLowerCase();
            return logoPath + ticker.replace("/", "_");
        });
        watch([
            baseContractCodeRef,
            tickerRef
        ], ()=>{
            hasImage.value = true;
        });
        function onLoad() {
            hasImage.value = imageRef.value && imageRef.value.naturalWidth !== 1;
        }
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.wrapper),
                style: normalizeStyle(`width: ${__props.size[0]}px; height: ${__props.size[1]}px;`)
            }, [
                hasImage.value ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    ref_key: "imageRef",
                    ref: imageRef,
                    alt: __props.ticker,
                    class: normalizeClass(_ctx.$style.image),
                    src: path.value,
                    onLoad: onLoad
                }, null, 42, _hoisted_1$1)) : renderSlot(_ctx.$slots, "default", {
                    key: 1
                }, ()=>[
                        createVNode(TickerLogoStub, {
                            "stub-logo": __props.ticker[0]
                        }, null, 8, [
                            "stub-logo"
                        ])
                    ], true)
            ], 6);
        };
    }
};
const cssModules$1 = {
    "$style": style0$1
};
const TickerLogo = /*#__PURE__*/ _export_sfc(_sfc_main$1, [
    [
        '__cssModules',
        cssModules$1
    ],
    [
        '__scopeId',
        "data-v-cf02c997"
    ]
]);
_sfc_main$1.__docgenInfo = {"exportName":"default","displayName":"TickerLogo","description":"","tags":{},"props":[{"name":"ticker","type":{"name":"string"},"required":true},{"name":"baseContractCode","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"size","type":{"name":"array"},"defaultValue":{"func":false,"value":"[30, 30]"}}],"slots":[{"name":"default"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/ticker/TickerLogo.vue"]};

const wrapper = "uc_wrapper_7c2753";
const tickerLogo = "uc_ticker-logo_5ce3ea";
const style0 = {
	wrapper: wrapper,
	"ticker-logo": "uc_ticker-logo_5ce3ea",
	tickerLogo: tickerLogo
};

const _hoisted_1 = {
    key: 0
};
const _sfc_main = {
    __name: 'Ticker',
    props: {
        ticker: {
            type: String,
            required: true
        },
        size: {
            type: Array,
            default: ()=>[
                    30,
                    30
                ]
        },
        onlyLogo: {
            type: Boolean,
            default: false
        },
        isAbsolute: {
            type: Boolean,
            default: false
        }
    },
    setup (__props) {
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.wrapper),
                style: normalizeStyle({
                    paddingLeft: __props.isAbsolute ? `${__props.size[0]}px` : null
                })
            }, [
                renderSlot(_ctx.$slots, "default", {}, ()=>[
                        createVNode(TickerLogo, {
                            class: normalizeClass({
                                [_ctx.$style.tickerLogo]: __props.isAbsolute
                            }),
                            size: __props.size,
                            ticker: __props.ticker
                        }, null, 8, [
                            "class",
                            "size",
                            "ticker"
                        ])
                    ], true),
                !__props.onlyLogo ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(__props.ticker), 1)) : createCommentVNode("", true)
            ], 6);
        };
    }
};
const cssModules = {
    "$style": style0
};
const Ticker = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__cssModules',
        cssModules
    ],
    [
        '__scopeId',
        "data-v-5cda3577"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"Ticker","description":"","tags":{},"props":[{"name":"ticker","type":{"name":"string"},"required":true},{"name":"size","type":{"name":"array"},"defaultValue":{"func":false,"value":"[30, 30]"}},{"name":"onlyLogo","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"isAbsolute","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}}],"slots":[{"name":"default"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/ticker/Ticker.vue"]};

export { TickerLogoStub as T, TickerLogo as a, Ticker as b };
