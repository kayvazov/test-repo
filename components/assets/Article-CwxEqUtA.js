import { f as openBlock, g as createElementBlock, m as normalizeClass } from './iframe-B-YMhJRM.js';

const _hoisted_1 = [
    "innerHTML"
];
const _sfc_main = {
    __name: 'Article',
    props: {
        content: {
            type: String,
            default: ""
        },
        color: {
            type: String,
            default: "green"
        },
        size: {
            type: String,
            default: "lg"
        }
    },
    setup (__props) {
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("article", {
                class: normalizeClass([
                    [
                        `prose-${__props.color} prose-${__props.size}`
                    ],
                    "prose article"
                ]),
                innerHTML: __props.content
            }, null, 10, _hoisted_1);
        };
    }
};
const Article = _sfc_main;
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"Article","description":"","tags":{},"props":[{"name":"content","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"\""}},{"name":"color","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"green\""}},{"name":"size","type":{"name":"string"},"defaultValue":{"func":false,"value":"\"lg\""}}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/article/Article.vue"]};

export { Article as A };
