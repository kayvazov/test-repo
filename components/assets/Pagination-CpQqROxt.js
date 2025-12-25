import { f as openBlock, g as createElementBlock, h as createBaseVNode, _ as _export_sfc, c as computed, P as withModifiers, l as createVNode, u as unref, F as Fragment, z as renderList, m as normalizeClass, A as toDisplayString } from './iframe-B-YMhJRM.js';

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z",
      "clip-rule": "evenodd"
    })
  ]))
}

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",
      "clip-rule": "evenodd"
    })
  ]))
}

const _hoisted_1 = {
    class: "pagination"
};
const _hoisted_2 = {
    "aria-label": "Pagination",
    class: "pagination-nav"
};
const _hoisted_3 = [
    "onClick"
];
const _hoisted_4 = {
    key: 1,
    class: "pagination-nav-dots"
};
const _sfc_main = {
    __name: 'Pagination',
    props: {
        total: {
            type: Number,
            default: 0
        },
        totalPages: {
            type: Number,
            default: 0
        },
        size: {
            type: Number,
            require: true,
            default: 1
        },
        page: {
            type: Number,
            default: 1
        },
        setPage: {
            type: Function,
            require: true,
            default: ()=>{}
        }
    },
    setup (__props) {
        const props = __props;
        function generatePagesArray(current = 1, quantity) {
            const arr = Array.from(Array(quantity + 1).keys()).slice(1);
            if (quantity <= 7) {
                return arr;
            }
            const index = arr.indexOf(current);
            const leftLength = arr.slice(0, index).length;
            const rightLength = arr.slice(index).length;
            const dots = "...";
            if (rightLength - leftLength > 0) {
                if (index - 2 < 1) {
                    return [
                        ...arr.slice(0, 4),
                        dots,
                        arr[arr.length - 1]
                    ];
                }
                return [
                    arr[0],
                    dots,
                    ...arr.slice(index - 1, index + 2),
                    dots,
                    arr[arr.length - 1]
                ];
            }
            if (arr.length - 1 - index - 2 < 1) {
                return [
                    arr[0],
                    dots,
                    ...arr.slice(arr.length - 4)
                ];
            }
            return [
                arr[0],
                dots,
                ...arr.slice(index - 1, index + 2),
                dots,
                arr[arr.length - 1]
            ];
        }
        const numbers = computed(()=>{
            const quantity = props.totalPages || Math.ceil(props.total / props.size);
            return generatePagesArray(props.page, quantity);
        });
        function onChange(page) {
            props.setPage(page);
        }
        function onNext() {
            if (props.page === numbers.value[numbers.value.length - 1]) {
                return;
            }
            props.setPage(props.page + 1);
        }
        function onPrev() {
            if (props.page === numbers.value[0]) {
                return;
            }
            props.setPage(props.page - 1);
        }
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", _hoisted_1, [
                createBaseVNode("nav", _hoisted_2, [
                    createBaseVNode("a", {
                        class: "pagination-nav-prev",
                        href: "#",
                        onClick: withModifiers(onPrev, [
                            "prevent"
                        ])
                    }, [
                        _cache[0] || (_cache[0] = createBaseVNode("span", {
                            class: "unexposed"
                        }, "Previous", -1)),
                        createVNode(unref(render$1), {
                            "aria-hidden": "true",
                            class: "pagination-icon"
                        })
                    ]),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(numbers.value, (item)=>{
                        return openBlock(), createElementBlock(Fragment, {
                            key: item
                        }, [
                            !isNaN(item) ? (openBlock(), createElementBlock("a", {
                                key: 0,
                                class: normalizeClass([
                                    {
                                        'pagination-nav-current-page': __props.page === item
                                    },
                                    "pagination-nav-page"
                                ]),
                                "aria-current": "page",
                                href: "#",
                                onClick: withModifiers(($event)=>onChange(item), [
                                    "prevent"
                                ])
                            }, toDisplayString(item), 11, _hoisted_3)) : (openBlock(), createElementBlock("span", _hoisted_4, "..."))
                        ], 64);
                    }), 128)),
                    createBaseVNode("a", {
                        class: "pagination-nav-next",
                        href: "#",
                        onClick: withModifiers(onNext, [
                            "prevent"
                        ])
                    }, [
                        _cache[1] || (_cache[1] = createBaseVNode("span", {
                            class: "unexposed"
                        }, "Next", -1)),
                        createVNode(unref(render), {
                            "aria-hidden": "true",
                            class: "pagination-icon"
                        })
                    ])
                ])
            ]);
        };
    }
};
const Pagination = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-53a3406b"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"Pagination","description":"","tags":{},"props":[{"name":"total","type":{"name":"number"},"defaultValue":{"func":false,"value":"0"}},{"name":"totalPages","type":{"name":"number"},"defaultValue":{"func":false,"value":"0"}},{"name":"size","type":{"name":"number"},"defaultValue":{"func":false,"value":"1"}},{"name":"page","type":{"name":"number"},"defaultValue":{"func":false,"value":"1"}},{"name":"setPage","type":{"name":"func"},"defaultValue":{"func":true,"value":"() => {}"}}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/pagination/Pagination.vue"]};

export { Pagination as P };
