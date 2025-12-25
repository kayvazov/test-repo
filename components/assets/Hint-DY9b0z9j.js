import { f as openBlock, g as createElementBlock, h as createBaseVNode, _ as _export_sfc, i as createBlock, j as withCtx, u as unref, q as renderSlot, l as createVNode, m as normalizeClass } from './iframe-B-YMhJRM.js';
import { T as Tooltip, a as TYPES } from './Tooltip-CW07EFtD.js';

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    })
  ]))
}

const icon = "uc_icon_baec64";
const dark = "dark";
const text = "uc_text_1cb251";
const style0 = {
	icon: icon,
	dark: dark,
	text: text
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
const _sfc_main = {
    __name: 'Hint',
    props: _object_spread_props(_object_spread({}, Tooltip.props), {
        triggers: {
            type: Array,
            default: ()=>[
                    "hover"
                ]
        },
        type: {
            type: String,
            default: TYPES[1],
            validator: (val)=>TYPES.includes(val)
        }
    }),
    setup (__props) {
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(unref(Tooltip), {
                container: _ctx.container,
                placement: _ctx.placement,
                triggers: __props.triggers,
                type: __props.type
            }, {
                trigger: withCtx(()=>[
                        renderSlot(_ctx.$slots, "trigger", {}, ()=>[
                                createVNode(unref(render), {
                                    class: normalizeClass(_ctx.$style.icon)
                                }, null, 8, [
                                    "class"
                                ])
                            ], true)
                    ]),
                default: withCtx(()=>[
                        createBaseVNode("div", {
                            class: normalizeClass(_ctx.$style.text)
                        }, [
                            renderSlot(_ctx.$slots, "default", {}, undefined, true)
                        ], 2)
                    ]),
                _: 3
            }, 8, [
                "container",
                "placement",
                "triggers",
                "type"
            ]);
        };
    }
};
const cssModules = {
    "$style": style0
};
const Hint = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__cssModules',
        cssModules
    ],
    [
        '__scopeId',
        "data-v-8f62f73c"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"Hint","description":"","tags":{},"props":[{"name":"triggers","type":{"name":"array"},"defaultValue":{"func":false,"value":"[\"hover\"]"}},{"name":"type","type":{"name":"string"},"defaultValue":{"func":false,"value":"TYPES[1]"},"values":["success","regular"]}],"slots":[{"name":"trigger"},{"name":"default"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/hint/Hint.vue"]};

export { Hint as H };
