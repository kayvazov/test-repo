import { r as ref, c as computed } from './iframe-B-YMhJRM.js';
import { B as Button } from './Button-CtUqJ2yf.js';
import { F as FileInput, a as FileInputIcon, b as FileInputPreview } from './FileInputPreview-7p4lQs8r.js';
import './XMarkIcon-B0gCI5_N.js';

function useFileInput() {
    const preview = ref({});
    const filesMap = ref({});
    const files = computed(()=>Object.values(filesMap.value));
    let id = 1;
    function onChange(event) {
        const { files: fileList } = event.target;
        filesMap.value = {};
        preview.value = {};
        if (fileList && fileList.length) {
            for(let i = 0; i < fileList.length; i++){
                const reader = new FileReader();
                const currentFile = fileList[i];
                const fileId = id;
                reader.onload = function() {
                    preview.value[fileId] = {
                        size: currentFile.size,
                        type: currentFile.type,
                        name: currentFile.name,
                        link: URL.createObjectURL(currentFile)
                    };
                };
                reader.readAsDataURL(currentFile);
                filesMap.value[fileId] = currentFile;
                id += 1;
            }
        }
    }
    function remove(fileId) {
        delete filesMap.value[fileId];
        delete preview.value[fileId];
    }
    function removeAll() {
        Object.keys(filesMap.value).forEach(remove);
    }
    return {
        files,
        preview,
        onChange,
        remove,
        removeAll
    };
}

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
const FileInput_stories = {
    title: "Components/FileInput",
    component: FileInput
};
const Template = (props)=>({
        components: {
            FileInput,
            FileInputIcon,
            FileInputPreview,
            Button
        },
        setup () {
            const { remove, onChange, files, preview, removeAll } = useFileInput();
            return _object_spread_props(_object_spread({}, props), {
                files,
                preview,
                onChange,
                remove,
                removeAll
            });
        },
        template: `
    <Button class="mb-2" @click="removeAll">Remove all</Button>
    
    <FileInput multiple @change="onChange">
      <FileInputIcon />
      Upload file
    </FileInput>

    <FileInputPreview :preview="preview" @remove="remove($event)" />
  `
    });
const Default = Template.bind({});
Default.args = {};
Default.parameters = _object_spread_props(_object_spread({}, Default.parameters), {
    docs: _object_spread_props(_object_spread({}, (_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs), {
        source: _object_spread({
            originalSource: "props => ({\n  components: {\n    FileInput,\n    FileInputIcon,\n    FileInputPreview,\n    Button\n  },\n  setup() {\n    const {\n      remove,\n      onChange,\n      files,\n      preview,\n      removeAll\n    } = useFileInput();\n    return {\n      ...props,\n      files,\n      preview,\n      onChange,\n      remove,\n      removeAll\n    };\n  },\n  template: `\n    <Button class=\"mb-2\" @click=\"removeAll\">Remove all</Button>\n    \n    <FileInput multiple @change=\"onChange\">\n      <FileInputIcon />\n      Upload file\n    </FileInput>\n\n    <FileInputPreview :preview=\"preview\" @remove=\"remove($event)\" />\n  `\n})"
        }, (_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source)
    })
});
const __namedExportsOrder = ["Default"];

export { Default, __namedExportsOrder, FileInput_stories as default };
