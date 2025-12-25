import { c as computed, f as openBlock, i as createBlock, s as mergeProps, x as resolveDynamicComponent, k as inject, g as createElementBlock, F as Fragment, z as renderList, l as createVNode, m as normalizeClass } from './iframe-B-YMhJRM.js';

const _sfc_main$1 = {
    __name: 'Source',
    props: {
        as: {
            type: String,
            default: "source"
        },
        withoutSrcset: {
            type: Boolean,
            default: false
        },
        withoutSrc: {
            type: Boolean,
            default: false
        },
        src: {
            type: String,
            required: true
        },
        themes: {
            type: Array,
            default: ()=>[]
        },
        sizes: {
            type: Array,
            default: ()=>[]
        },
        activeTheme: {
            type: String,
            default: null
        },
        media: {
            type: String,
            default: null
        }
    },
    setup (__props) {
        const props = __props;
        const activeTheme = computed(()=>{
            var _props_activeTheme;
            return (_props_activeTheme = props.activeTheme) !== null && _props_activeTheme !== void 0 ? _props_activeTheme : inject("activeTheme");
        });
        const theme = computed(()=>{
            return props.themes.length === 1 ? props.themes[0] : props.themes.find((value)=>value === activeTheme.value);
        });
        function buildPathWithParts(src, ...parts) {
            const splittedName = src.split(".");
            const insertIndex = Math.max(0, splittedName.length - 1);
            const filteredParts = parts.filter(Boolean);
            if (filteredParts.length) {
                splittedName.splice(insertIndex, 0, ...filteredParts);
            }
            return splittedName.join(".");
        }
        const preparedSrc = computed(()=>{
            if (props.withoutSrc) {
                return null;
            }
            return buildPathWithParts(props.src, theme.value, props.sizes[0]);
        });
        const preparedSrcset = computed(()=>{
            if (props.sizes.length < 2 && !props.media) {
                return null;
            }
            if (props.withoutSrcset) {
                return null;
            }
            if (!props.sizes.length) {
                return buildPathWithParts(props.src, theme.value);
            }
            return props.sizes.map((size)=>{
                const path = buildPathWithParts(props.src, theme.value, size);
                return `${path} ${size}`;
            }).join(",");
        });
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(resolveDynamicComponent(__props.as), mergeProps(_ctx.$attrs, {
                media: __props.media,
                src: preparedSrc.value,
                srcset: preparedSrcset.value
            }), null, 16, [
                "media",
                "src",
                "srcset"
            ]);
        };
    }
};
_sfc_main$1.__docgenInfo = {"exportName":"default","displayName":"Source","description":"","tags":{},"props":[{"name":"as","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"source\""}},{"name":"withoutSrcset","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"withoutSrc","type":{"name":"boolean"},"defaultValue":{"func":false,"value":"false"}},{"name":"src","type":{"name":"string"},"required":true},{"name":"themes","type":{"name":"array"},"defaultValue":{"func":false,"value":"[]"}},{"name":"sizes","type":{"name":"array"},"defaultValue":{"func":false,"value":"[]"}},{"name":"activeTheme","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"media","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/picture/Source.vue"]};

const _sfc_main = /*@__PURE__*/ Object.assign({
    inheritAttrs: false
}, {
    __name: 'Picture',
    props: {
        src: {
            type: String,
            default: null
        },
        mediaSrc: {
            type: String,
            default: null
        },
        themes: {
            type: Array,
            default: ()=>[]
        },
        sizes: {
            type: Array,
            default: ()=>[]
        },
        activeTheme: {
            type: String,
            default: null
        }
    },
    setup (__props) {
        return (_ctx, _cache)=>{
            var __props_src;
            return __props.mediaSrc ? (openBlock(), createElementBlock("picture", {
                key: 0,
                class: normalizeClass(_ctx.$attrs.class)
            }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.mediaSrc, (url, media)=>{
                    return openBlock(), createBlock(_sfc_main$1, {
                        key: url,
                        "active-theme": __props.activeTheme,
                        media: media,
                        sizes: __props.sizes,
                        src: url,
                        themes: __props.themes,
                        "without-src": ""
                    }, null, 8, [
                        "active-theme",
                        "media",
                        "sizes",
                        "src",
                        "themes"
                    ]);
                }), 128)),
                createVNode(_sfc_main$1, mergeProps(_ctx.$attrs, {
                    "active-theme": __props.activeTheme,
                    sizes: __props.sizes,
                    src: (__props_src = __props.src) !== null && __props_src !== void 0 ? __props_src : __props.mediaSrc[Object.keys(__props.mediaSrc)[0]],
                    themes: __props.themes,
                    as: "img",
                    "without-srcset": ""
                }), null, 16, [
                    "active-theme",
                    "sizes",
                    "src",
                    "themes"
                ])
            ], 2)) : (openBlock(), createBlock(_sfc_main$1, mergeProps({
                key: 1
            }, _ctx.$attrs, {
                "active-theme": __props.activeTheme,
                sizes: __props.sizes,
                src: __props.src,
                themes: __props.themes,
                as: "img"
            }), null, 16, [
                "active-theme",
                "sizes",
                "src",
                "themes"
            ]));
        };
    }
});
const Picture = _sfc_main;
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"Picture","description":"","tags":{},"props":[{"name":"src","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"mediaSrc","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}},{"name":"themes","type":{"name":"array"},"defaultValue":{"func":false,"value":"[]"}},{"name":"sizes","type":{"name":"array"},"defaultValue":{"func":false,"value":"[]"}},{"name":"activeTheme","type":{"name":"string"},"defaultValue":{"func":false,"value":"null"}}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/picture/Picture.vue"]};

export { Picture as P };
