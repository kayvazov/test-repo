import { b as onMounted, d as onBeforeUnmount, r as ref } from './iframe-B-YMhJRM.js';
import { B as Button } from './Button-CtUqJ2yf.js';

const getNode = (nodeRef)=>{
    if (!nodeRef.value) {
        return null;
    }
    return nodeRef.value.$el || nodeRef.value;
};
const withNodeChecking = (fn, nodeRef)=>(...props)=>{
        const node = getNode(nodeRef);
        if (!node) {
            return;
        }
        fn(node, ...props);
    };
const useAnimation = (nodeRef, animationName = "shake")=>{
    let resolve = null;
    const onAnimationEnd = withNodeChecking((node)=>{
        node.classList.remove(`animate-${animationName}`);
        resolve && resolve();
        resolve = null;
    }, nodeRef);
    const animate = withNodeChecking((node)=>{
        const promise = new Promise((ok)=>{
            resolve = ok;
        });
        node.classList.add(`animate-${animationName}`);
        return promise;
    }, nodeRef);
    onMounted(withNodeChecking((node)=>{
        node.addEventListener("animationend", onAnimationEnd);
    }, nodeRef));
    onBeforeUnmount(withNodeChecking((node)=>{
        node.removeEventListener("animationend", onAnimationEnd);
        resolve = null;
    }, nodeRef));
    return {
        animate
    };
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
var _Primary_parameters, _Primary_parameters_docs, _Primary_parameters1;
const Animation_stories = {
    title: "Components/Animation Button",
    component: Button
};
const Template = (props)=>({
        components: {
            Button
        },
        setup () {
            const nodeRef = ref(null);
            const { animate } = useAnimation(nodeRef);
            return _object_spread({
                nodeRef,
                animate
            }, props);
        },
        template: "<Button ref='nodeRef' @click='animate'>Shake</Button>"
    });
const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = _object_spread_props(_object_spread({}, Primary.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Primary_parameters = Primary.parameters) === null || _Primary_parameters === void 0 ? void 0 : _Primary_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    const nodeRef = ref(null);\n    const {\n      animate\n    } = useAnimation(nodeRef);\n    return {\n      nodeRef,\n      animate,\n      ...props\n    };\n  },\n  template: \"<Button ref='nodeRef' @click='animate'>Shake</Button>\"\n})"
        }, (_Primary_parameters1 = Primary.parameters) === null || _Primary_parameters1 === void 0 ? void 0 : (_Primary_parameters_docs = _Primary_parameters1.docs) === null || _Primary_parameters_docs === void 0 ? void 0 : _Primary_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Primary"];

export { Primary, __namedExportsOrder, Animation_stories as default };
