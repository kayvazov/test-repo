import { r as ref, k as inject, c as computed, b as onMounted, f as openBlock, g as createElementBlock, L as withDirectives, M as vShow, h as createBaseVNode, q as renderSlot, N as normalizeProps, O as guardReactiveProps, A as toDisplayString, m as normalizeClass, P as withModifiers, _ as _export_sfc, a as reactive, e as watch, o as onUnmounted, p as provide } from './iframe-B-YMhJRM.js';
import { u as useTheme } from './useTheme-Cy0CkrhV.js';

function useCounter(initialValue = 0) {
    const count = ref(initialValue);
    const inc = (delta = 1)=>count.value += delta;
    const dec = (delta = 1)=>count.value -= delta;
    const get = ()=>count.value;
    const set = (val)=>count.value = val;
    const reset = ()=>count.value = initialValue;
    return {
        count,
        inc,
        dec,
        get,
        set,
        reset
    };
}

function useGhostNode(wrapperSelector = "") {
    const { theme } = useTheme();
    const img = new Image();
    let offsetX = 0;
    let offsetY = 0;
    let clonedElement;
    // transparent image
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    function set(event) {
        const targetElement = event.target;
        const clonedNode = targetElement.cloneNode(true);
        const wrapper = document.createElement("div");
        const themeWrapper = document.createElement("div");
        if (wrapperSelector) {
            wrapper.classList.add(wrapperSelector);
        }
        themeWrapper.classList.add(theme.value);
        wrapper.appendChild(themeWrapper);
        themeWrapper.appendChild(clonedNode);
        event.dataTransfer.setDragImage(img, 0, 0);
        offsetX = event.offsetX;
        offsetY = event.offsetY;
        const styles = {
            pointerEvents: "none",
            width: `${targetElement.offsetWidth}px`,
            position: "absolute",
            left: `${event.pageX - offsetX}px`,
            top: `${event.pageY - offsetY}px`,
            zIndex: 10000
        };
        Object.assign(wrapper.style, styles);
        document.body.appendChild(wrapper);
        clonedElement = wrapper;
    }
    function remove() {
        clonedElement.remove();
    }
    function update(event) {
        clonedElement.style.left = `${event.pageX - offsetX}px`;
        clonedElement.style.top = `${event.pageY - offsetY}px`;
    }
    return {
        set,
        remove,
        update
    };
}

const _hoisted_1 = {
    class: "item-inner"
};
const _sfc_main$1 = {
    __name: 'DraggableItem',
    props: {
        value: {
            type: Object,
            default: ()=>({})
        }
    },
    setup (__props) {
        const props = __props;
        const { dragStartHandler, dragEndHandler, onDropOnItem, setListIndex, listIndex, isCurrentDragAvailable, sort, nextItemIdAfterDraggable, rootSelector, isDraggingUnremovableOnSelfList } = inject("list");
        const isDragging = ref(false);
        const isHover = ref(false);
        const dragDepth = useCounter(0);
        const ghostNode = useGhostNode(rootSelector);
        const isDragOverItem = computed(()=>{
            return dragDepth.get() === 1 && !isDragging.value;
        });
        const isNextItemAfterDraggable = computed(()=>{
            return nextItemIdAfterDraggable.value === props.value.id;
        });
        const isShowBlank = computed(()=>{
            return isDragOverItem.value && isCurrentDragAvailable.value && !sort.value && !isNextItemAfterDraggable.value && isDraggingUnremovableOnSelfList.value;
        });
        const state = computed(()=>({
                dragging: isDragging.value,
                hover: isHover.value
            }));
        function onMouseOut() {
            offHover();
        }
        function offHover() {
            isHover.value = false;
        }
        function toggleDrag() {
            isDragging.value = !isDragging.value;
        }
        function onDragStart(event) {
            toggleDrag();
            offHover();
            ghostNode.set(event);
            dragStartHandler(props.value);
        }
        function onDrag(event) {
            if (isHover.value) {
                offHover();
            }
            ghostNode.update(event);
        }
        function onDragEnter() {
            dragDepth.inc();
        }
        function onDragLeave() {
            dragDepth.dec();
        }
        function onDrop() {
            dragDepth.reset();
            offHover();
            onDropOnItem(props.value);
        }
        function onDragEnd() {
            toggleDrag();
            ghostNode.remove();
            dragEndHandler();
        }
        function onMouseOver(e) {
            // true, if the event is triggered by the user
            isHover.value = !e.buttons;
        }
        onMounted(()=>{
            if (listIndex.value === null) {
                setListIndex(props.value);
            }
        });
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", {
                ref: "itemNode",
                class: normalizeClass([
                    state.value,
                    "item"
                ]),
                draggable: "true",
                onDrag: onDrag,
                onDragend: onDragEnd,
                onDragenter: onDragEnter,
                onDragleave: onDragLeave,
                onDragstart: onDragStart,
                onDrop: withModifiers(onDrop, [
                    "prevent",
                    "stop"
                ]),
                onMouseout: onMouseOut,
                onMouseover: onMouseOver
            }, [
                withDirectives(createBaseVNode("div", null, [
                    renderSlot(_ctx.$slots, "item-blank", normalizeProps(guardReactiveProps(state.value)), ()=>[
                            _cache[0] || (_cache[0] = createBaseVNode("div", {
                                class: "blank-inner"
                            }, null, -1))
                        ], true)
                ], 512), [
                    [
                        vShow,
                        isShowBlank.value
                    ]
                ]),
                renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(state.value)), ()=>[
                        createBaseVNode("div", _hoisted_1, [
                            createBaseVNode("span", null, toDisplayString(__props.value.label), 1)
                        ])
                    ], true)
            ], 34);
        };
    }
};
const DraggableItem = /*#__PURE__*/ _export_sfc(_sfc_main$1, [
    [
        '__scopeId',
        "data-v-db09e7a9"
    ]
]);
_sfc_main$1.__docgenInfo = {"exportName":"default","displayName":"DraggableItem","description":"","tags":{},"props":[{"name":"value","type":{"name":"object"},"defaultValue":{"func":false,"value":"{}"}}],"slots":[{"name":"item-blank","scoped":true,"bindings":[]},{"name":"default","scoped":true,"bindings":[]}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/drop-zone/DraggableItem.vue"]};

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
const _sfc_main = {
    __name: 'DropZone',
    props: {
        group: {
            type: Object,
            default: ()=>({})
        }
    },
    emits: {
        "update:group": null,
        start: null,
        moved: null
    },
    setup (__props, { emit: __emit }) {
        const props = __props;
        const emit = __emit;
        const rootSelector = inject("rootSelector");
        const lists = ref(props.group.lists ? JSON.parse(JSON.stringify(props.group.lists)) : []);
        const currentDrag = reactive({
            item: null,
            listIndex: null
        });
        const listIndex = ref(null);
        const zoneNode = ref(null);
        const blankNode = ref(null);
        const isEqualNode = ref(false);
        const dragDepth = useCounter(0);
        const sort = computed(()=>{
            var _props_group_listsConfig_listIndex_value, _props_group_listsConfig;
            if (listIndex.value === null || listIndex.value === undefined) {
                return false;
            }
            return (_props_group_listsConfig = props.group.listsConfig) === null || _props_group_listsConfig === void 0 ? void 0 : (_props_group_listsConfig_listIndex_value = _props_group_listsConfig[listIndex.value]) === null || _props_group_listsConfig_listIndex_value === void 0 ? void 0 : _props_group_listsConfig_listIndex_value.sort;
        });
        // Check if the dragging item is unremovable and dragging on the same list it is in.
        const isDraggingUnremovableOnSelfList = computed(()=>{
            var _currentDrag_item;
            return !((_currentDrag_item = currentDrag.item) === null || _currentDrag_item === void 0 ? void 0 : _currentDrag_item.isUnremovable) || isDraggingInCurrentList.value;
        });
        const isPreventDropUnremovableItemOnOtherList = computed(()=>{
            var _currentDrag_item;
            return ((_currentDrag_item = currentDrag.item) === null || _currentDrag_item === void 0 ? void 0 : _currentDrag_item.isUnremovable) && !isDraggingInCurrentList.value;
        });
        const isCurrentDragAvailable = computed(()=>{
            return currentDrag.item !== null && currentDrag.listIndex !== null && isDraggingUnremovableOnSelfList.value;
        });
        const isDraggingInCurrentList = computed(()=>{
            return currentDrag.listIndex === listIndex.value;
        });
        const isShowBlank = computed(()=>{
            const hasItemAfterDraggableOnCurrentList = !isDraggingInCurrentList.value || isDraggingInCurrentList.value && nextItemIdAfterDraggable.value.id !== null;
            return isEqualNode.value && dragDepth.get() === 1 && !sort.value && hasItemAfterDraggableOnCurrentList && isDraggingUnremovableOnSelfList.value;
        });
        const nextItemIdAfterDraggable = computed(()=>{
            const emptyItem = {
                id: null
            };
            if (currentDrag.listIndex === undefined || !currentDrag.item) {
                return emptyItem;
            }
            const currentList = lists.value[currentDrag.listIndex];
            const currentItemIndex = currentList.findIndex((item)=>item.id === currentDrag.item.id);
            const nextItemIndex = currentItemIndex + 1;
            if (nextItemIndex === currentList.length) {
                return emptyItem;
            }
            return currentList[nextItemIndex].id;
        });
        function checkZoneNode(event) {
            return event.target === zoneNode.value || event.composedPath().includes(blankNode.value);
        }
        function dragStartHandler(item) {
            updateCurrentDrag(item);
            emit("start", item);
            emitGroupUpdate();
        }
        function onDragEnter(event) {
            dragDepth.inc();
            isEqualNode.value = checkZoneNode(event);
        }
        function onDragLeave() {
            dragDepth.dec();
        }
        function dragEndHandler() {
            updateCurrentDrag();
            emitGroupUpdate();
        }
        function getListIndexByItem(item) {
            if (currentDrag.listIndex && item.id === currentDrag.item.id) {
                return currentDrag.listIndex;
            }
            return lists.value.findIndex((list)=>{
                return list.some((itemList)=>itemList.id === item.id);
            });
        }
        function setListIndex(item) {
            listIndex.value = getListIndexByItem(item);
        }
        function updateCurrentDrag(item = null) {
            currentDrag.item = item;
            currentDrag.listIndex = item ? getListIndexByItem(item) : null;
        }
        function arrangeInOrder(listIndex) {
            lists.value[listIndex].sort((a, b)=>a.order - b.order);
        }
        function sortItems(listIndex) {
            const isListConfigExists = props.group.listsConfig[listIndex];
            const isListSortable = isListConfigExists === null || isListConfigExists === void 0 ? void 0 : isListConfigExists.sort;
            if (!isListConfigExists || !isListSortable) {
                return;
            }
            arrangeInOrder(listIndex);
        }
        function removeItem(item, listIndex) {
            const indexItem = lists.value[listIndex].findIndex((listItem)=>listItem.id === item.id);
            lists.value[listIndex].splice(indexItem, 1);
        }
        function appendItem(item, listIndex, toItem = null) {
            if (toItem) {
                const indexToItem = lists.value[listIndex].findIndex((listItem)=>listItem.id === toItem.id);
                lists.value[listIndex].splice(indexToItem, 0, item);
            } else {
                lists.value[listIndex].push(item);
            }
        }
        function emitGroupUpdate() {
            const groupData = {
                lists: lists.value,
                listsConfig: props.group.listsConfig || []
            };
            if (currentDrag.item) {
                groupData.currentDragItem = currentDrag.item;
                groupData.currentDragInListIndex = currentDrag.listIndex;
            }
            emit("update:group", groupData);
        }
        function onDropOnZone() {
            dragDepth.reset();
            if (isPreventDropUnremovableItemOnOtherList.value) {
                return;
            }
            moveItemToList({
                item: currentDrag.item,
                fromListIndex: currentDrag.listIndex,
                toListIndex: listIndex.value
            });
        }
        function onDropOnItem(item) {
            dragDepth.reset();
            if (currentDrag.item.id === item.id || isPreventDropUnremovableItemOnOtherList.value) {
                return;
            }
            moveItemToList({
                item: currentDrag.item,
                fromListIndex: currentDrag.listIndex,
                toListIndex: listIndex.value,
                toItem: item
            });
        }
        function moveItemToList({ item, fromListIndex, toListIndex, toItem = null }) {
            removeItem(item, fromListIndex);
            appendItem(item, toListIndex, toItem);
            updateCurrentDrag(currentDrag.item);
            sortItems(toListIndex);
            emitGroupUpdate();
            emit("moved", {
                item: _object_spread({}, item),
                fromListIndex,
                toListIndex,
                toItem: toItem ? _object_spread({}, toItem) : null
            });
        }
        watch(()=>props.group, (newValue)=>{
            if (newValue.lists) {
                lists.value = JSON.parse(JSON.stringify(newValue.lists));
            }
            currentDrag.item = newValue.currentDragItem;
            currentDrag.listIndex = newValue.currentDragInListIndex;
        }, {
            deep: true
        });
        provide("list", {
            dragStartHandler,
            dragEndHandler,
            onDropOnItem,
            setListIndex,
            listIndex,
            isCurrentDragAvailable,
            sort,
            nextItemIdAfterDraggable,
            rootSelector,
            isDraggingUnremovableOnSelfList
        });
        // need for disable default dragover animation
        // to prevent the item from delaying displaying after it is dropped
        function onDefaultDragOver(event) {
            event.preventDefault();
        }
        onMounted(()=>{
            document.addEventListener("dragover", onDefaultDragOver);
        });
        onUnmounted(()=>{
            document.removeEventListener("dragover", onDefaultDragOver);
        });
        return (_ctx, _cache)=>{
            return openBlock(), createElementBlock("div", {
                ref_key: "zoneNode",
                ref: zoneNode,
                class: "list-items",
                onDragenter: onDragEnter,
                onDragleave: onDragLeave,
                onDrop: withModifiers(onDropOnZone, [
                    "prevent",
                    "stop"
                ])
            }, [
                renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({
                    moveItemToList: moveItemToList
                })), undefined, true),
                withDirectives(createBaseVNode("div", {
                    ref_key: "blankNode",
                    ref: blankNode
                }, [
                    renderSlot(_ctx.$slots, "blank", {}, ()=>[
                            _cache[0] || (_cache[0] = createBaseVNode("div", {
                                class: "blank-inner"
                            }, null, -1))
                        ], true)
                ], 512), [
                    [
                        vShow,
                        isShowBlank.value
                    ]
                ])
            ], 544);
        };
    }
};
const DropZone = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-7437a4a5"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"DropZone","description":"","tags":{},"props":[{"name":"group","type":{"name":"object"},"defaultValue":{"func":false,"value":"{}"}}],"events":[{"name":"update:group"},{"name":"start"},{"name":"moved"}],"slots":[{"name":"default","scoped":true,"bindings":[{"name":"moveItemToList","title":"binding"}]},{"name":"blank"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/drop-zone/DropZone.vue"]};

export { DropZone as D, DraggableItem as a };
