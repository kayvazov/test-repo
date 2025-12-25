import { C as Card, a as CardToolbar, b as CardContent, c as CardBody } from './CardToolbar-CqVcfSP5.js';
import './iframe-B-YMhJRM.js';

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
const Card_stories = {
    title: "Components/Card",
    component: Card
};
const Template = (args)=>({
        components: {
            Card,
            CardToolbar,
            CardContent,
            CardBody
        },
        setup () {
            return _object_spread({}, args);
        },
        template: `
    <div class="space-y-6">
      <Card>
        <CardToolbar>
          <h1>&lt;CardBody /&gt; without background and padding</h1>
        </CardToolbar>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          excepturi similique autem velit voluptatum enim, cum dolore obcaecati
          recusandae odit laudantium omnis cupiditate natus quidem, dolorum optio
          illum maxime. Consequatur?
        </CardBody>
      </Card>
      <Card>
        <CardToolbar>
          <h1>&lt;CardContent /&gt; with background and padding</h1>
        </CardToolbar>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          excepturi similique autem velit voluptatum enim, cum dolore obcaecati
          recusandae odit laudantium omnis cupiditate natus quidem, dolorum optio
          illum maxime. Consequatur?
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          excepturi similique autem velit voluptatum enim, cum dolore obcaecati
          recusandae odit laudantium omnis cupiditate natus quidem, dolorum optio
          illum maxime. Consequatur?
        </CardContent>
      </Card>
    </div>
  `
    });
const Default = Template.bind({});
Default.args = {};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  components: {\n    Card,\n    CardToolbar,\n    CardContent,\n    CardBody\n  },\n  setup() {\n    return {\n      ...args\n    };\n  },\n  template: `\n    <div class=\"space-y-6\">\n      <Card>\n        <CardToolbar>\n          <h1>&lt;CardBody /&gt; without background and padding</h1>\n        </CardToolbar>\n        <CardBody>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt\n          excepturi similique autem velit voluptatum enim, cum dolore obcaecati\n          recusandae odit laudantium omnis cupiditate natus quidem, dolorum optio\n          illum maxime. Consequatur?\n        </CardBody>\n      </Card>\n      <Card>\n        <CardToolbar>\n          <h1>&lt;CardContent /&gt; with background and padding</h1>\n        </CardToolbar>\n        <CardContent>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt\n          excepturi similique autem velit voluptatum enim, cum dolore obcaecati\n          recusandae odit laudantium omnis cupiditate natus quidem, dolorum optio\n          illum maxime. Consequatur?\n        </CardContent>\n      </Card>\n      <Card>\n        <CardContent>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt\n          excepturi similique autem velit voluptatum enim, cum dolore obcaecati\n          recusandae odit laudantium omnis cupiditate natus quidem, dolorum optio\n          illum maxime. Consequatur?\n        </CardContent>\n      </Card>\n    </div>\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, Card_stories as default };
