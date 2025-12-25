import { T as TickerLogoStub, a as TickerLogo, b as Ticker } from './Ticker-BVIv48bh.js';
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
var _Default_parameters, _Default_parameters_docs, _Default_parameters1, _OnlyLogo_parameters, _OnlyLogo_parameters_docs, _OnlyLogo_parameters1, _LogoStub_parameters, _LogoStub_parameters_docs, _LogoStub_parameters1, _CustomStub_parameters, _CustomStub_parameters_docs, _CustomStub_parameters1, _CustomSize_parameters, _CustomSize_parameters_docs, _CustomSize_parameters1, _NotAvailableTicker_parameters, _NotAvailableTicker_parameters_docs, _NotAvailableTicker_parameters1;
const Ticker_stories = {
    components: {
        TickerLogoStub,
        TickerLogo,
        Ticker
    },
    title: "Components/Ticker",
    component: Ticker
};
const Template = (props)=>({
        components: {
            Ticker
        },
        setup () {
            return _object_spread({}, props);
        },
        template: `<Ticker :ticker="ticker" :only-logo="onlyLogo" :size="size" :is-absolute="isAbsolute"/>`
    });
const Default = Template.bind({});
Default.args = {
    ticker: "RIVN_IPO.US.BLOCKED"
};
const OnlyLogo = Template.bind({});
OnlyLogo.args = {
    ticker: "RIVN_IPO.US.BLOCKED",
    onlyLogo: true
};
const LogoStub = Template.bind({});
LogoStub.args = {
    ticker: "TICKER"
};
const CustomStub = (args)=>({
        setup () {
            return _object_spread({}, args);
        },
        components: {
            Ticker,
            TickerLogo,
            TickerLogoStub
        },
        template: `
    <Ticker :ticker="ticker">
      <TickerLogo :ticker="ticker" :size="[40, 40]">
        <TickerLogoStub :stub-logo="ticker[0]" class="!bg-gray-100 dark:!bg-gray-700" />
      </TickerLogo>
    </Ticker>
  `
    });
CustomStub.args = {
    ticker: "TICKER"
};
const CustomSize = Template.bind({});
CustomSize.args = {
    ticker: "RIVN_IPO.US.BLOCKED",
    size: [
        80,
        80
    ]
};
const NotAvailableTicker = Template.bind({});
NotAvailableTicker.args = {
    ticker: "NOT_AVAILABLE_TICKER"
};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Ticker\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Ticker :ticker=\"ticker\" :only-logo=\"onlyLogo\" :size=\"size\" :is-absolute=\"isAbsolute\"/>`\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
OnlyLogo.parameters = _object_spread_props(_object_spread({}, OnlyLogo.parameters), {
    docs: _object_spread_props(_object_spread({}, (_OnlyLogo_parameters = OnlyLogo.parameters) === null || _OnlyLogo_parameters === void 0 ? void 0 : _OnlyLogo_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Ticker\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Ticker :ticker=\"ticker\" :only-logo=\"onlyLogo\" :size=\"size\" :is-absolute=\"isAbsolute\"/>`\n})"
        }, (_OnlyLogo_parameters1 = OnlyLogo.parameters) === null || _OnlyLogo_parameters1 === void 0 ? void 0 : (_OnlyLogo_parameters_docs = _OnlyLogo_parameters1.docs) === null || _OnlyLogo_parameters_docs === void 0 ? void 0 : _OnlyLogo_parameters_docs.source)
    })
});
LogoStub.parameters = _object_spread_props(_object_spread({}, LogoStub.parameters), {
    docs: _object_spread_props(_object_spread({}, (_LogoStub_parameters = LogoStub.parameters) === null || _LogoStub_parameters === void 0 ? void 0 : _LogoStub_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Ticker\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Ticker :ticker=\"ticker\" :only-logo=\"onlyLogo\" :size=\"size\" :is-absolute=\"isAbsolute\"/>`\n})"
        }, (_LogoStub_parameters1 = LogoStub.parameters) === null || _LogoStub_parameters1 === void 0 ? void 0 : (_LogoStub_parameters_docs = _LogoStub_parameters1.docs) === null || _LogoStub_parameters_docs === void 0 ? void 0 : _LogoStub_parameters_docs.source)
    })
});
CustomStub.parameters = _object_spread_props(_object_spread({}, CustomStub.parameters), {
    docs: _object_spread_props(_object_spread({}, (_CustomStub_parameters = CustomStub.parameters) === null || _CustomStub_parameters === void 0 ? void 0 : _CustomStub_parameters.docs), {
        source: _object_spread({
            originalSource: "args => ({\n  setup() {\n    return {\n      ...args\n    };\n  },\n  components: {\n    Ticker,\n    TickerLogo,\n    TickerLogoStub\n  },\n  template: `\n    <Ticker :ticker=\"ticker\">\n      <TickerLogo :ticker=\"ticker\" :size=\"[40, 40]\">\n        <TickerLogoStub :stub-logo=\"ticker[0]\" class=\"!bg-gray-100 dark:!bg-gray-700\" />\n      </TickerLogo>\n    </Ticker>\n  `\n})"
        }, (_CustomStub_parameters1 = CustomStub.parameters) === null || _CustomStub_parameters1 === void 0 ? void 0 : (_CustomStub_parameters_docs = _CustomStub_parameters1.docs) === null || _CustomStub_parameters_docs === void 0 ? void 0 : _CustomStub_parameters_docs.source)
    })
});
CustomSize.parameters = _object_spread_props(_object_spread({}, CustomSize.parameters), {
    docs: _object_spread_props(_object_spread({}, (_CustomSize_parameters = CustomSize.parameters) === null || _CustomSize_parameters === void 0 ? void 0 : _CustomSize_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Ticker\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Ticker :ticker=\"ticker\" :only-logo=\"onlyLogo\" :size=\"size\" :is-absolute=\"isAbsolute\"/>`\n})"
        }, (_CustomSize_parameters1 = CustomSize.parameters) === null || _CustomSize_parameters1 === void 0 ? void 0 : (_CustomSize_parameters_docs = _CustomSize_parameters1.docs) === null || _CustomSize_parameters_docs === void 0 ? void 0 : _CustomSize_parameters_docs.source)
    })
});
NotAvailableTicker.parameters = _object_spread_props(_object_spread({}, NotAvailableTicker.parameters), {
    docs: _object_spread_props(_object_spread({}, (_NotAvailableTicker_parameters = NotAvailableTicker.parameters) === null || _NotAvailableTicker_parameters === void 0 ? void 0 : _NotAvailableTicker_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    Ticker\n  },\n  setup() {\n    return {\n      ...props\n    };\n  },\n  template: `<Ticker :ticker=\"ticker\" :only-logo=\"onlyLogo\" :size=\"size\" :is-absolute=\"isAbsolute\"/>`\n})"
        }, (_NotAvailableTicker_parameters1 = NotAvailableTicker.parameters) === null || _NotAvailableTicker_parameters1 === void 0 ? void 0 : (_NotAvailableTicker_parameters_docs = _NotAvailableTicker_parameters1.docs) === null || _NotAvailableTicker_parameters_docs === void 0 ? void 0 : _NotAvailableTicker_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default","OnlyLogo","LogoStub","CustomStub","CustomSize","NotAvailableTicker"];

export { CustomSize, CustomStub, Default, LogoStub, NotAvailableTicker, OnlyLogo, __namedExportsOrder, Ticker_stories as default };
