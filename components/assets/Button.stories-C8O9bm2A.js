import { B as Button } from './Button-CtUqJ2yf.js';
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
var _Primary_parameters, _Primary_parameters_docs, _Primary_parameters1, _Regular_parameters, _Regular_parameters_docs, _Regular_parameters1, _Secondary_parameters, _Secondary_parameters_docs, _Secondary_parameters1, _White_parameters, _White_parameters_docs, _White_parameters1, _Danger_parameters, _Danger_parameters_docs, _Danger_parameters1, _LeadingIcon_parameters, _LeadingIcon_parameters_docs, _LeadingIcon_parameters1, _Link_parameters, _Link_parameters_docs, _Link_parameters1, _Ghost_parameters, _Ghost_parameters_docs, _Ghost_parameters1, _GhostAccent_parameters, _GhostAccent_parameters_docs, _GhostAccent_parameters1, _Disabled_parameters, _Disabled_parameters_docs, _Disabled_parameters1, _DisabledLinks_parameters, _DisabledLinks_parameters_docs, _DisabledLinks_parameters1, _DangerText_parameters, _DangerText_parameters_docs, _DangerText_parameters1, _PrimaryText_parameters, _PrimaryText_parameters_docs, _PrimaryText_parameters1, _SecondaryText_parameters, _SecondaryText_parameters_docs, _SecondaryText_parameters1;
const Button_stories = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        size: {
            control: {
                type: "radio"
            },
            options: [
                "default",
                "small",
                "large"
            ]
        },
        theme: {
            control: {
                type: "radio"
            },
            options: [
                "default"
            ]
        },
        as: {
            control: {
                type: "radio"
            },
            options: [
                "button",
                "a"
            ]
        }
    }
};
const Template = (props)=>({
        components: {
            Button
        },
        setup () {
            return _object_spread({}, props);
        },
        template: `<Button 
      v-for="size in sizes"
      v-bind="attrs"
      :as="as"
      :size="size" 
      :type="type" 
      :is-progress="isProgress" 
      :disabled="disabled"
      class="m-4"
    > 
      {{ label }} 
    </Button>`
    });
const Primary = Template.bind({});
Primary.args = {
    label: "Primary button",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ],
    as: "button"
};
const Regular = Template.bind({});
Regular.args = {
    label: "Regular button",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ],
    type: "regular",
    as: "button"
};
const Secondary = Template.bind({});
Secondary.args = {
    label: "Secondary button",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ],
    type: "secondary",
    as: "button"
};
const White = Template.bind({});
White.args = {
    label: "White button",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ],
    type: "white",
    as: "button"
};
const Danger = Template.bind({});
Danger.args = {
    label: "Danger button",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ],
    type: "danger",
    as: "button"
};
const LeadingIcon = Template.bind({});
LeadingIcon.args = {
    label: "Button with leading icon",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ],
    isProgress: true,
    as: "button"
};
const Link = Template.bind({});
Link.args = {
    label: "Link button",
    as: "a",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ],
    attrs: {
        href: "https://freedom24.com",
        target: "_blank"
    }
};
const Ghost = Template.bind({});
Ghost.args = {
    label: "Ghost button",
    as: "button",
    type: "ghost",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ]
};
const GhostAccent = Template.bind({});
GhostAccent.args = {
    label: "Ghost accent button",
    as: "button",
    type: "ghost-accent",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ]
};
const Disabled = Template.bind({});
Disabled.args = {
    label: "Disabled button",
    as: "button",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ],
    disabled: true
};
const DisabledLinks = Template.bind({});
DisabledLinks.args = {
    label: "Disabled link button",
    as: "a",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ],
    disabled: true
};
const DangerText = Template.bind({});
DangerText.args = {
    label: "Danger text button",
    as: "button",
    type: "text-danger",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ]
};
const PrimaryText = Template.bind({});
PrimaryText.args = {
    label: "Primary text button",
    as: "button",
    type: "text-primary",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ]
};
const SecondaryText = Template.bind({});
SecondaryText.args = {
    label: "Secondary text button",
    as: "button",
    type: "text-secondary",
    sizes: [
        "xs",
        "sm",
        "base",
        "l",
        "xl"
    ]
};
Primary.parameters = _object_spread_props(_object_spread({}, Primary.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Primary_parameters = Primary.parameters) === null || _Primary_parameters === void 0 ? void 0 : _Primary_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_Primary_parameters1 = Primary.parameters) === null || _Primary_parameters1 === void 0 ? void 0 : (_Primary_parameters_docs = _Primary_parameters1.docs) === null || _Primary_parameters_docs === void 0 ? void 0 : _Primary_parameters_docs.source)
    })
});
Regular.parameters = _object_spread_props(_object_spread({}, Regular.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Regular_parameters = Regular.parameters) === null || _Regular_parameters === void 0 ? void 0 : _Regular_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_Regular_parameters1 = Regular.parameters) === null || _Regular_parameters1 === void 0 ? void 0 : (_Regular_parameters_docs = _Regular_parameters1.docs) === null || _Regular_parameters_docs === void 0 ? void 0 : _Regular_parameters_docs.source)
    })
});
Secondary.parameters = _object_spread_props(_object_spread({}, Secondary.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Secondary_parameters = Secondary.parameters) === null || _Secondary_parameters === void 0 ? void 0 : _Secondary_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_Secondary_parameters1 = Secondary.parameters) === null || _Secondary_parameters1 === void 0 ? void 0 : (_Secondary_parameters_docs = _Secondary_parameters1.docs) === null || _Secondary_parameters_docs === void 0 ? void 0 : _Secondary_parameters_docs.source)
    })
});
White.parameters = _object_spread_props(_object_spread({}, White.parameters), {
    docs: _object_spread_props(_object_spread({}, (_White_parameters = White.parameters) === null || _White_parameters === void 0 ? void 0 : _White_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_White_parameters1 = White.parameters) === null || _White_parameters1 === void 0 ? void 0 : (_White_parameters_docs = _White_parameters1.docs) === null || _White_parameters_docs === void 0 ? void 0 : _White_parameters_docs.source)
    })
});
Danger.parameters = _object_spread_props(_object_spread({}, Danger.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Danger_parameters = Danger.parameters) === null || _Danger_parameters === void 0 ? void 0 : _Danger_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_Danger_parameters1 = Danger.parameters) === null || _Danger_parameters1 === void 0 ? void 0 : (_Danger_parameters_docs = _Danger_parameters1.docs) === null || _Danger_parameters_docs === void 0 ? void 0 : _Danger_parameters_docs.source)
    })
});
LeadingIcon.parameters = _object_spread_props(_object_spread({}, LeadingIcon.parameters), {
    docs: _object_spread_props(_object_spread({}, (_LeadingIcon_parameters = LeadingIcon.parameters) === null || _LeadingIcon_parameters === void 0 ? void 0 : _LeadingIcon_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_LeadingIcon_parameters1 = LeadingIcon.parameters) === null || _LeadingIcon_parameters1 === void 0 ? void 0 : (_LeadingIcon_parameters_docs = _LeadingIcon_parameters1.docs) === null || _LeadingIcon_parameters_docs === void 0 ? void 0 : _LeadingIcon_parameters_docs.source)
    })
});
Link.parameters = _object_spread_props(_object_spread({}, Link.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Link_parameters = Link.parameters) === null || _Link_parameters === void 0 ? void 0 : _Link_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_Link_parameters1 = Link.parameters) === null || _Link_parameters1 === void 0 ? void 0 : (_Link_parameters_docs = _Link_parameters1.docs) === null || _Link_parameters_docs === void 0 ? void 0 : _Link_parameters_docs.source)
    })
});
Ghost.parameters = _object_spread_props(_object_spread({}, Ghost.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Ghost_parameters = Ghost.parameters) === null || _Ghost_parameters === void 0 ? void 0 : _Ghost_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_Ghost_parameters1 = Ghost.parameters) === null || _Ghost_parameters1 === void 0 ? void 0 : (_Ghost_parameters_docs = _Ghost_parameters1.docs) === null || _Ghost_parameters_docs === void 0 ? void 0 : _Ghost_parameters_docs.source)
    })
});
GhostAccent.parameters = _object_spread_props(_object_spread({}, GhostAccent.parameters), {
    docs: _object_spread_props(_object_spread({}, (_GhostAccent_parameters = GhostAccent.parameters) === null || _GhostAccent_parameters === void 0 ? void 0 : _GhostAccent_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_GhostAccent_parameters1 = GhostAccent.parameters) === null || _GhostAccent_parameters1 === void 0 ? void 0 : (_GhostAccent_parameters_docs = _GhostAccent_parameters1.docs) === null || _GhostAccent_parameters_docs === void 0 ? void 0 : _GhostAccent_parameters_docs.source)
    })
});
Disabled.parameters = _object_spread_props(_object_spread({}, Disabled.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Disabled_parameters = Disabled.parameters) === null || _Disabled_parameters === void 0 ? void 0 : _Disabled_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_Disabled_parameters1 = Disabled.parameters) === null || _Disabled_parameters1 === void 0 ? void 0 : (_Disabled_parameters_docs = _Disabled_parameters1.docs) === null || _Disabled_parameters_docs === void 0 ? void 0 : _Disabled_parameters_docs.source)
    })
});
DisabledLinks.parameters = _object_spread_props(_object_spread({}, DisabledLinks.parameters), {
    docs: _object_spread_props(_object_spread({}, (_DisabledLinks_parameters = DisabledLinks.parameters) === null || _DisabledLinks_parameters === void 0 ? void 0 : _DisabledLinks_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_DisabledLinks_parameters1 = DisabledLinks.parameters) === null || _DisabledLinks_parameters1 === void 0 ? void 0 : (_DisabledLinks_parameters_docs = _DisabledLinks_parameters1.docs) === null || _DisabledLinks_parameters_docs === void 0 ? void 0 : _DisabledLinks_parameters_docs.source)
    })
});
DangerText.parameters = _object_spread_props(_object_spread({}, DangerText.parameters), {
    docs: _object_spread_props(_object_spread({}, (_DangerText_parameters = DangerText.parameters) === null || _DangerText_parameters === void 0 ? void 0 : _DangerText_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_DangerText_parameters1 = DangerText.parameters) === null || _DangerText_parameters1 === void 0 ? void 0 : (_DangerText_parameters_docs = _DangerText_parameters1.docs) === null || _DangerText_parameters_docs === void 0 ? void 0 : _DangerText_parameters_docs.source)
    })
});
PrimaryText.parameters = _object_spread_props(_object_spread({}, PrimaryText.parameters), {
    docs: _object_spread_props(_object_spread({}, (_PrimaryText_parameters = PrimaryText.parameters) === null || _PrimaryText_parameters === void 0 ? void 0 : _PrimaryText_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_PrimaryText_parameters1 = PrimaryText.parameters) === null || _PrimaryText_parameters1 === void 0 ? void 0 : (_PrimaryText_parameters_docs = _PrimaryText_parameters1.docs) === null || _PrimaryText_parameters_docs === void 0 ? void 0 : _PrimaryText_parameters_docs.source)
    })
});
SecondaryText.parameters = _object_spread_props(_object_spread({}, SecondaryText.parameters), {
    docs: _object_spread_props(_object_spread({}, (_SecondaryText_parameters = SecondaryText.parameters) === null || _SecondaryText_parameters === void 0 ? void 0 : _SecondaryText_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Button\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Button \n      v-for=\"size in sizes\"\n      v-bind=\"attrs\"\n      :as=\"as\"\n      :size=\"size\" \n      :type=\"type\" \n      :is-progress=\"isProgress\" \n      :disabled=\"disabled\"\n      class=\"m-4\"\n    > \n      {{ label }} \n    </Button>`\n})"
        }, (_SecondaryText_parameters1 = SecondaryText.parameters) === null || _SecondaryText_parameters1 === void 0 ? void 0 : (_SecondaryText_parameters_docs = _SecondaryText_parameters1.docs) === null || _SecondaryText_parameters_docs === void 0 ? void 0 : _SecondaryText_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Primary","Regular","Secondary","White","Danger","LeadingIcon","Link","Ghost","GhostAccent","Disabled","DisabledLinks","DangerText","PrimaryText","SecondaryText"];

export { Danger, DangerText, Disabled, DisabledLinks, Ghost, GhostAccent, LeadingIcon, Link, Primary, PrimaryText, Regular, Secondary, SecondaryText, White, __namedExportsOrder, Button_stories as default };
