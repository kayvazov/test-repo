import { c as computed, f as openBlock, i as createBlock, j as withCtx, x as resolveDynamicComponent, g as createElementBlock, z as renderList, F as Fragment, A as toDisplayString, S as createTextVNode } from './iframe-B-YMhJRM.js';

const _hoisted_1 = {
    key: 0
};
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function brokeStringBySubstring(text, searchText = "") {
    if (!searchText) {
        return [
            {
                text,
                highlight: false
            }
        ];
    }
    return text.split(new RegExp(`(${escapeRegExp(searchText)})`, "ig")).reduce((parts, textChunk)=>{
        if (textChunk) {
            parts.push({
                text: textChunk,
                highlight: textChunk.toLowerCase() === searchText.toLowerCase()
            });
        }
        return parts;
    }, []);
}
const _sfc_main = {
    __name: 'TextMark',
    props: {
        matchFn: {
            type: Function,
            default: brokeStringBySubstring
        },
        searchText: {
            type: String,
            default: ""
        },
        text: {
            type: String,
            default: ""
        },
        as: {
            type: String,
            default: "span"
        }
    },
    setup (__props) {
        const props = __props;
        const resultText = computed(()=>{
            return props.matchFn(props.text, props.searchText);
        });
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(resolveDynamicComponent(__props.as), null, {
                default: withCtx(()=>[
                        (openBlock(true), createElementBlock(Fragment, null, renderList(resultText.value, (part)=>{
                            return openBlock(), createElementBlock(Fragment, {
                                key: part.text
                            }, [
                                part.highlight ? (openBlock(), createElementBlock("mark", _hoisted_1, toDisplayString(part.text), 1)) : (openBlock(), createElementBlock(Fragment, {
                                    key: 1
                                }, [
                                    createTextVNode(toDisplayString(part.text), 1)
                                ], 64))
                            ], 64);
                        }), 128))
                    ]),
                _: 1
            });
        };
    }
};
const TextMark = _sfc_main;
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"TextMark","description":"","tags":{},"props":[{"name":"matchFn","type":{"name":"func"},"defaultValue":{"func":false,"value":"brokeStringBySubstring"}},{"name":"searchText","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"text","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"as","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"span\""}}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/text-mark/TextMark.vue"]};

export { TextMark as T };
