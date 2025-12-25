import { c as computed, u as unref, B as shallowRef, e as watch, C as triggerRef, D as onScopeDispose, w as watchEffect, E as defineComponent, r as ref, a as reactive, G as toRaw, p as provide, b as onMounted, H as h, F as Fragment, k as inject, o as onUnmounted, n as nextTick, I as cloneVNode, _ as _export_sfc, f as openBlock, i as createBlock, j as withCtx, q as renderSlot, y as createCommentVNode, h as createBaseVNode, l as createVNode, m as normalizeClass, A as toDisplayString, g as createElementBlock } from './iframe-B-YMhJRM.js';
import { r as render } from './ChevronUpDownIcon-BNkXqcI5.js';
import { r as render$1 } from './CheckIcon-CfIKdVGN.js';
import { d, e } from './form-B5TVLiQV.js';
import { u, o, f as f$1, E, s, A, T, t as t$1, N as N$1, a as o$1 } from './keyboard-Y5Ohh0Ec.js';
import { w, t, i as i$2, l, n } from './open-closed-n-oNVJpd.js';
import { s as s$1 } from './use-resolve-button-type-BRMzcgpv.js';
import { c, f, u as u$1 } from './calculate-active-index-BtXYA8d0.js';
import { i as i$1, O } from './focus-management-CfDY3olH.js';
import { o as o$2, t as t$2 } from './disposables-JZe9QuOV.js';

/**
 * vue-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}

/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function memo(getDeps, fn, opts) {
  var _opts$initialDeps;
  var deps = (_opts$initialDeps = opts.initialDeps) != null ? _opts$initialDeps : [];
  var result;
  return function () {
    var depTime;
    if (opts.key && opts.debug != null && opts.debug()) depTime = Date.now();
    var newDeps = getDeps();
    var depsChanged = newDeps.length !== deps.length || newDeps.some(function (dep, index) {
      return deps[index] !== dep;
    });
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    var resultTime;
    if (opts.key && opts.debug != null && opts.debug()) resultTime = Date.now();
    result = fn.apply(void 0, newDeps);
    if (opts.key && opts.debug != null && opts.debug()) {
      var depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      var resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      var resultFpsPercentage = resultEndTime / 16;
      var pad = function pad(str, num) {
        str = String(str);
        while (str.length < num) {
          str = ' ' + str;
        }
        return str;
      };
      console.info("%c\u23F1 " + pad(resultEndTime, 5) + " /" + pad(depEndTime, 5) + " ms", "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(" + Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120)) + "deg 100% 31%);", opts == null ? void 0 : opts.key);
    }
    opts == null || opts.onChange == null || opts.onChange(result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === undefined) {
    throw new Error("Unexpected undefined" + (''));
  } else {
    return value;
  }
}
var approxEqual = function approxEqual(a, b) {
  return Math.abs(a - b) < 1;
};

/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var defaultKeyExtractor = function defaultKeyExtractor2(index) {
  return index;
};
var defaultRangeExtractor = function defaultRangeExtractor2(range) {
  var start = Math.max(range.startIndex - range.overscan, 0);
  var end = Math.min(range.endIndex + range.overscan, range.count - 1);
  var arr = [];
  for (var _i = start; _i <= end; _i++) {
    arr.push(_i);
  }
  return arr;
};
var observeElementRect = function observeElementRect2(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler2(rect) {
    var width = rect.width, height = rect.height;
    cb({
      width: Math.round(width),
      height: Math.round(height)
    });
  };
  handler(element.getBoundingClientRect());
  var observer = new ResizeObserver(function(entries) {
    var entry = entries[0];
    if (entry != null && entry.borderBoxSize) {
      var box = entry.borderBoxSize[0];
      if (box) {
        handler({
          width: box.inlineSize,
          height: box.blockSize
        });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, {
    box: "border-box"
  });
  return function() {
    observer.unobserve(element);
  };
};
var observeElementOffset = function observeElementOffset2(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler2() {
    cb(element[instance.options.horizontal ? "scrollLeft" : "scrollTop"]);
  };
  handler();
  element.addEventListener("scroll", handler, {
    passive: true
  });
  return function() {
    element.removeEventListener("scroll", handler);
  };
};
var measureElement = function measureElement2(element, entry, instance) {
  if (entry != null && entry.borderBoxSize) {
    var box = entry.borderBoxSize[0];
    if (box) {
      var size = Math.round(box[instance.options.horizontal ? "inlineSize" : "blockSize"]);
      return size;
    }
  }
  return Math.round(element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]);
};
var elementScroll = function elementScroll2(offset, _ref2, instance) {
  var _instance$scrollEleme3, _instance$scrollEleme4;
  var _ref2$adjustments = _ref2.adjustments, adjustments = _ref2$adjustments === void 0 ? 0 : _ref2$adjustments, behavior = _ref2.behavior;
  var toOffset = offset + adjustments;
  (_instance$scrollEleme3 = instance.scrollElement) == null || _instance$scrollEleme3.scrollTo == null || _instance$scrollEleme3.scrollTo((_instance$scrollEleme4 = {}, _instance$scrollEleme4[instance.options.horizontal ? "left" : "top"] = toOffset, _instance$scrollEleme4.behavior = behavior, _instance$scrollEleme4));
};
var Virtualizer = function Virtualizer2(_opts) {
  var _this = this;
  this.unsubs = [];
  this.scrollElement = null;
  this.isScrolling = false;
  this.isScrollingTimeoutId = null;
  this.scrollToIndexTimeoutId = null;
  this.measurementsCache = [];
  this.itemSizeCache = /* @__PURE__ */ new Map();
  this.pendingMeasuredCacheIndexes = [];
  this.scrollDirection = null;
  this.scrollAdjustments = 0;
  this.measureElementCache = /* @__PURE__ */ new Map();
  this.observer = /* @__PURE__ */ function() {
    var _ro = null;
    var get = function get2() {
      if (_ro) {
        return _ro;
      } else if (typeof ResizeObserver !== "undefined") {
        return _ro = new ResizeObserver(function(entries) {
          entries.forEach(function(entry) {
            _this._measureElement(entry.target, entry);
          });
        });
      } else {
        return null;
      }
    };
    return {
      disconnect: function disconnect() {
        var _get;
        return (_get = get()) == null ? void 0 : _get.disconnect();
      },
      observe: function observe(target) {
        var _get2;
        return (_get2 = get()) == null ? void 0 : _get2.observe(target, {
          box: "border-box"
        });
      },
      unobserve: function unobserve(target) {
        var _get3;
        return (_get3 = get()) == null ? void 0 : _get3.unobserve(target);
      }
    };
  }();
  this.range = null;
  this.setOptions = function(opts) {
    Object.entries(opts).forEach(function(_ref3) {
      var key = _ref3[0], value = _ref3[1];
      if (typeof value === "undefined") delete opts[key];
    });
    _this.options = _extends({
      debug: false,
      initialOffset: 0,
      overscan: 1,
      paddingStart: 0,
      paddingEnd: 0,
      scrollPaddingStart: 0,
      scrollPaddingEnd: 0,
      horizontal: false,
      getItemKey: defaultKeyExtractor,
      rangeExtractor: defaultRangeExtractor,
      onChange: function onChange() {
      },
      measureElement,
      initialRect: {
        width: 0,
        height: 0
      },
      scrollMargin: 0,
      scrollingDelay: 150,
      indexAttribute: "data-index",
      initialMeasurementsCache: [],
      lanes: 1
    }, opts);
  };
  this.notify = function(sync) {
    _this.options.onChange == null || _this.options.onChange(_this, sync);
  };
  this.maybeNotify = memo(function() {
    _this.calculateRange();
    return [_this.isScrolling, _this.range ? _this.range.startIndex : null, _this.range ? _this.range.endIndex : null];
  }, function(isScrolling) {
    _this.notify(isScrolling);
  }, {
    key: false,
    debug: function debug() {
      return _this.options.debug;
    },
    initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]
  });
  this.cleanup = function() {
    _this.unsubs.filter(Boolean).forEach(function(d) {
      return d();
    });
    _this.unsubs = [];
    _this.scrollElement = null;
  };
  this._didMount = function() {
    _this.measureElementCache.forEach(_this.observer.observe);
    return function() {
      _this.observer.disconnect();
      _this.cleanup();
    };
  };
  this._willUpdate = function() {
    var scrollElement = _this.options.getScrollElement();
    if (_this.scrollElement !== scrollElement) {
      _this.cleanup();
      _this.scrollElement = scrollElement;
      _this._scrollToOffset(_this.scrollOffset, {
        adjustments: void 0,
        behavior: void 0
      });
      _this.unsubs.push(_this.options.observeElementRect(_this, function(rect) {
        _this.scrollRect = rect;
        _this.maybeNotify();
      }));
      _this.unsubs.push(_this.options.observeElementOffset(_this, function(offset) {
        _this.scrollAdjustments = 0;
        if (_this.scrollOffset === offset) {
          return;
        }
        if (_this.isScrollingTimeoutId !== null) {
          clearTimeout(_this.isScrollingTimeoutId);
          _this.isScrollingTimeoutId = null;
        }
        _this.isScrolling = true;
        _this.scrollDirection = _this.scrollOffset < offset ? "forward" : "backward";
        _this.scrollOffset = offset;
        _this.maybeNotify();
        _this.isScrollingTimeoutId = setTimeout(function() {
          _this.isScrollingTimeoutId = null;
          _this.isScrolling = false;
          _this.scrollDirection = null;
          _this.maybeNotify();
        }, _this.options.scrollingDelay);
      }));
    }
  };
  this.getSize = function() {
    return _this.scrollRect[_this.options.horizontal ? "width" : "height"];
  };
  this.memoOptions = memo(function() {
    return [_this.options.count, _this.options.paddingStart, _this.options.scrollMargin, _this.options.getItemKey];
  }, function(count, paddingStart, scrollMargin, getItemKey) {
    _this.pendingMeasuredCacheIndexes = [];
    return {
      count,
      paddingStart,
      scrollMargin,
      getItemKey
    };
  }, {
    key: false
  });
  this.getFurthestMeasurement = function(measurements, index) {
    var furthestMeasurementsFound = /* @__PURE__ */ new Map();
    var furthestMeasurements = /* @__PURE__ */ new Map();
    for (var m = index - 1; m >= 0; m--) {
      var measurement = measurements[m];
      if (furthestMeasurementsFound.has(measurement.lane)) {
        continue;
      }
      var previousFurthestMeasurement = furthestMeasurements.get(measurement.lane);
      if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
        furthestMeasurements.set(measurement.lane, measurement);
      } else if (measurement.end < previousFurthestMeasurement.end) {
        furthestMeasurementsFound.set(measurement.lane, true);
      }
      if (furthestMeasurementsFound.size === _this.options.lanes) {
        break;
      }
    }
    return furthestMeasurements.size === _this.options.lanes ? Array.from(furthestMeasurements.values()).sort(function(a, b) {
      return a.end - b.end;
    })[0] : void 0;
  };
  this.getMeasurements = memo(function() {
    return [_this.memoOptions(), _this.itemSizeCache];
  }, function(_ref4, itemSizeCache) {
    var count = _ref4.count, paddingStart = _ref4.paddingStart, scrollMargin = _ref4.scrollMargin, getItemKey = _ref4.getItemKey;
    var min = _this.pendingMeasuredCacheIndexes.length > 0 ? Math.min.apply(Math, _this.pendingMeasuredCacheIndexes) : 0;
    _this.pendingMeasuredCacheIndexes = [];
    var measurements = _this.measurementsCache.slice(0, min);
    for (var _i2 = min; _i2 < count; _i2++) {
      var key = getItemKey(_i2);
      var furthestMeasurement = _this.options.lanes === 1 ? measurements[_i2 - 1] : _this.getFurthestMeasurement(measurements, _i2);
      var start = furthestMeasurement ? furthestMeasurement.end : paddingStart + scrollMargin;
      var measuredSize = itemSizeCache.get(key);
      var size = typeof measuredSize === "number" ? measuredSize : _this.options.estimateSize(_i2);
      var end = start + size;
      var lane = furthestMeasurement ? furthestMeasurement.lane : _i2 % _this.options.lanes;
      measurements[_i2] = {
        index: _i2,
        start,
        size,
        end,
        key,
        lane
      };
    }
    _this.measurementsCache = measurements;
    return measurements;
  }, {
    key: false,
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.calculateRange = memo(function() {
    return [_this.getMeasurements(), _this.getSize(), _this.scrollOffset];
  }, function(measurements, outerSize, scrollOffset) {
    return _this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
      measurements,
      outerSize,
      scrollOffset
    }) : null;
  }, {
    key: false,
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.getIndexes = memo(function() {
    return [_this.options.rangeExtractor, _this.calculateRange(), _this.options.overscan, _this.options.count];
  }, function(rangeExtractor, range, overscan, count) {
    return range === null ? [] : rangeExtractor(_extends({}, range, {
      overscan,
      count
    }));
  }, {
    key: false,
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.indexFromElement = function(node) {
    var attributeName = _this.options.indexAttribute;
    var indexStr = node.getAttribute(attributeName);
    if (!indexStr) {
      console.warn("Missing attribute name '" + attributeName + "={index}' on measured element.");
      return -1;
    }
    return parseInt(indexStr, 10);
  };
  this._measureElement = function(node, entry) {
    var item = _this.measurementsCache[_this.indexFromElement(node)];
    if (!item || !node.isConnected) {
      _this.measureElementCache.forEach(function(cached, key) {
        if (cached === node) {
          _this.observer.unobserve(node);
          _this.measureElementCache["delete"](key);
        }
      });
      return;
    }
    var prevNode = _this.measureElementCache.get(item.key);
    if (prevNode !== node) {
      if (prevNode) {
        _this.observer.unobserve(prevNode);
      }
      _this.observer.observe(node);
      _this.measureElementCache.set(item.key, node);
    }
    var measuredItemSize = _this.options.measureElement(node, entry, _this);
    _this.resizeItem(item, measuredItemSize);
  };
  this.resizeItem = function(item, size) {
    var _this$itemSizeCache$g;
    var itemSize = (_this$itemSizeCache$g = _this.itemSizeCache.get(item.key)) != null ? _this$itemSizeCache$g : item.size;
    var delta = size - itemSize;
    if (delta !== 0) {
      if (item.start < _this.scrollOffset) {
        _this._scrollToOffset(_this.scrollOffset, {
          adjustments: _this.scrollAdjustments += delta,
          behavior: void 0
        });
      }
      _this.pendingMeasuredCacheIndexes.push(item.index);
      _this.itemSizeCache = new Map(_this.itemSizeCache.set(item.key, size));
      _this.notify(false);
    }
  };
  this.measureElement = function(node) {
    if (!node) {
      return;
    }
    _this._measureElement(node, void 0);
  };
  this.getVirtualItems = memo(function() {
    return [_this.getIndexes(), _this.getMeasurements()];
  }, function(indexes, measurements) {
    var virtualItems = [];
    for (var k = 0, len = indexes.length; k < len; k++) {
      var _i3 = indexes[k];
      var measurement = measurements[_i3];
      virtualItems.push(measurement);
    }
    return virtualItems;
  }, {
    key: false,
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.getVirtualItemForOffset = function(offset) {
    var measurements = _this.getMeasurements();
    return notUndefined(measurements[findNearestBinarySearch(0, measurements.length - 1, function(index) {
      return notUndefined(measurements[index]).start;
    }, offset)]);
  };
  this.getOffsetForAlignment = function(toOffset, align) {
    var size = _this.getSize();
    if (align === "auto") {
      if (toOffset <= _this.scrollOffset) {
        align = "start";
      } else if (toOffset >= _this.scrollOffset + size) {
        align = "end";
      } else {
        align = "start";
      }
    }
    if (align === "start") {
      toOffset = toOffset;
    } else if (align === "end") {
      toOffset = toOffset - size;
    } else if (align === "center") {
      toOffset = toOffset - size / 2;
    }
    var scrollSizeProp = _this.options.horizontal ? "scrollWidth" : "scrollHeight";
    var scrollSize = _this.scrollElement ? "document" in _this.scrollElement ? _this.scrollElement.document.documentElement[scrollSizeProp] : _this.scrollElement[scrollSizeProp] : 0;
    var maxOffset = scrollSize - _this.getSize();
    return Math.max(Math.min(maxOffset, toOffset), 0);
  };
  this.getOffsetForIndex = function(index, align) {
    if (align === void 0) {
      align = "auto";
    }
    index = Math.max(0, Math.min(index, _this.options.count - 1));
    var measurement = notUndefined(_this.getMeasurements()[index]);
    if (align === "auto") {
      if (measurement.end >= _this.scrollOffset + _this.getSize() - _this.options.scrollPaddingEnd) {
        align = "end";
      } else if (measurement.start <= _this.scrollOffset + _this.options.scrollPaddingStart) {
        align = "start";
      } else {
        return [_this.scrollOffset, align];
      }
    }
    var toOffset = align === "end" ? measurement.end + _this.options.scrollPaddingEnd : measurement.start - _this.options.scrollPaddingStart;
    return [_this.getOffsetForAlignment(toOffset, align), align];
  };
  this.isDynamicMode = function() {
    return _this.measureElementCache.size > 0;
  };
  this.cancelScrollToIndex = function() {
    if (_this.scrollToIndexTimeoutId !== null) {
      clearTimeout(_this.scrollToIndexTimeoutId);
      _this.scrollToIndexTimeoutId = null;
    }
  };
  this.scrollToOffset = function(toOffset, _temp) {
    var _ref5 = _temp === void 0 ? {} : _temp, _ref5$align = _ref5.align, align = _ref5$align === void 0 ? "start" : _ref5$align, behavior = _ref5.behavior;
    _this.cancelScrollToIndex();
    if (behavior === "smooth" && _this.isDynamicMode()) {
      console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
    }
    _this._scrollToOffset(_this.getOffsetForAlignment(toOffset, align), {
      adjustments: void 0,
      behavior
    });
  };
  this.scrollToIndex = function(index, _temp2) {
    var _ref6 = _temp2 === void 0 ? {} : _temp2, _ref6$align = _ref6.align, initialAlign = _ref6$align === void 0 ? "auto" : _ref6$align, behavior = _ref6.behavior;
    index = Math.max(0, Math.min(index, _this.options.count - 1));
    _this.cancelScrollToIndex();
    if (behavior === "smooth" && _this.isDynamicMode()) {
      console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
    }
    var _this$getOffsetForInd = _this.getOffsetForIndex(index, initialAlign), toOffset = _this$getOffsetForInd[0], align = _this$getOffsetForInd[1];
    _this._scrollToOffset(toOffset, {
      adjustments: void 0,
      behavior
    });
    if (behavior !== "smooth" && _this.isDynamicMode()) {
      _this.scrollToIndexTimeoutId = setTimeout(function() {
        _this.scrollToIndexTimeoutId = null;
        var elementInDOM = _this.measureElementCache.has(_this.options.getItemKey(index));
        if (elementInDOM) {
          var _this$getOffsetForInd2 = _this.getOffsetForIndex(index, align), _toOffset = _this$getOffsetForInd2[0];
          if (!approxEqual(_toOffset, _this.scrollOffset)) {
            _this.scrollToIndex(index, {
              align,
              behavior
            });
          }
        } else {
          _this.scrollToIndex(index, {
            align,
            behavior
          });
        }
      });
    }
  };
  this.scrollBy = function(delta, _temp3) {
    var _ref7 = _temp3 === void 0 ? {} : _temp3, behavior = _ref7.behavior;
    _this.cancelScrollToIndex();
    if (behavior === "smooth" && _this.isDynamicMode()) {
      console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
    }
    _this._scrollToOffset(_this.scrollOffset + delta, {
      adjustments: void 0,
      behavior
    });
  };
  this.getTotalSize = function() {
    var _this$getMeasurements;
    return (((_this$getMeasurements = _this.getMeasurements()[_this.options.count - 1]) == null ? void 0 : _this$getMeasurements.end) || _this.options.paddingStart) - _this.options.scrollMargin + _this.options.paddingEnd;
  };
  this._scrollToOffset = function(offset, _ref8) {
    var adjustments = _ref8.adjustments, behavior = _ref8.behavior;
    _this.options.scrollToFn(offset, {
      behavior,
      adjustments
    }, _this);
  };
  this.measure = function() {
    _this.itemSizeCache = /* @__PURE__ */ new Map();
    _this.notify(false);
  };
  this.setOptions(_opts);
  this.scrollRect = this.options.initialRect;
  this.scrollOffset = this.options.initialOffset;
  this.measurementsCache = this.options.initialMeasurementsCache;
  this.measurementsCache.forEach(function(item) {
    _this.itemSizeCache.set(item.key, item.size);
  });
  this.maybeNotify();
};
var findNearestBinarySearch = function findNearestBinarySearch2(low, high, getCurrentValue, value) {
  while (low <= high) {
    var middle = (low + high) / 2 | 0;
    var currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange(_ref9) {
  var measurements = _ref9.measurements, outerSize = _ref9.outerSize, scrollOffset = _ref9.scrollOffset;
  var count = measurements.length - 1;
  var getOffset = function getOffset2(index) {
    return measurements[index].start;
  };
  var startIndex = findNearestBinarySearch(0, count, getOffset, scrollOffset);
  var endIndex = startIndex;
  while (endIndex < count && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return {
    startIndex,
    endIndex
  };
}

/**
 * vue-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function useVirtualizerBase(options) {
  var virtualizer = new Virtualizer(unref(options));
  var state = shallowRef(virtualizer);
  var cleanup = virtualizer._didMount();
  watch(function () {
    return unref(options).getScrollElement();
  }, function (el) {
    if (el) {
      virtualizer._willUpdate();
    }
  }, {
    immediate: true
  });
  watch(function () {
    return unref(options);
  }, function (options) {
    virtualizer.setOptions(_extends$1({}, options, {
      onChange: function onChange(instance, sync) {
        triggerRef(state);
        options.onChange == null || options.onChange(instance, sync);
      }
    }));
    virtualizer._willUpdate();
    triggerRef(state);
  }, {
    immediate: true
  });
  onScopeDispose(cleanup);
  return state;
}
function useVirtualizer(options) {
  return useVirtualizerBase(computed(function () {
    return _extends$1({
      observeElementRect: observeElementRect,
      observeElementOffset: observeElementOffset,
      scrollToFn: elementScroll
    }, unref(options));
  }));
}

function i({container:e,accept:t,walk:d,enabled:o}){watchEffect(()=>{let r=e.value;if(!r||o!==void 0&&!o.value)return;let l=i$1(e);if(!l)return;let c=Object.assign(f=>t(f),{acceptNode:t}),n=l.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,c,!1);for(;n.nextNode();)d(n.currentNode);});}

var define_process_env_default = {};
function Pe(a, I) {
  return a === I;
}
var we = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(we || {}), Ee = ((r) => (r[r.Single = 0] = "Single", r[r.Multi = 1] = "Multi", r))(Ee || {}), Ve = ((O) => (O[O.Pointer = 0] = "Pointer", O[O.Focus = 1] = "Focus", O[O.Other = 2] = "Other", O))(Ve || {});
let ne = Symbol("ComboboxContext");
function N(a) {
  let I = inject(ne, null);
  if (I === null) {
    let r = new Error(`<${a} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, N), r;
  }
  return I;
}
let ie = Symbol("VirtualContext"), ke = defineComponent({ name: "VirtualProvider", setup(a, { slots: I }) {
  let r = N("VirtualProvider"), O = computed(() => {
    let u = o(r.optionsRef);
    if (!u) return { start: 0, end: 0 };
    let d = window.getComputedStyle(u);
    return { start: parseFloat(d.paddingBlockStart || d.paddingTop), end: parseFloat(d.paddingBlockEnd || d.paddingBottom) };
  }), t = useVirtualizer(computed(() => ({ scrollPaddingStart: O.value.start, scrollPaddingEnd: O.value.end, count: r.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return o(r.optionsRef);
  }, overscan: 12 }))), e = computed(() => {
    var u;
    return (u = r.virtual.value) == null ? void 0 : u.options;
  }), R = ref(0);
  return watch([e], () => {
    R.value += 1;
  }), provide(ie, r.virtual.value ? t : null), () => [h("div", { style: { position: "relative", width: "100%", height: `${t.value.getTotalSize()}px` }, ref: (u) => {
    if (u) {
      if (typeof process != "undefined" && define_process_env_default.JEST_WORKER_ID !== void 0 || r.activationTrigger.value === 0) return;
      r.activeOptionIndex.value !== null && r.virtual.value.options.length > r.activeOptionIndex.value && t.value.scrollToIndex(r.activeOptionIndex.value);
    }
  } }, t.value.getVirtualItems().map((u) => cloneVNode(I.default({ option: r.virtual.value.options[u.index], open: r.comboboxState.value === 0 })[0], { key: `${R.value}-${u.index}`, "data-index": u.index, "aria-setsize": r.virtual.value.options.length, "aria-posinset": u.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${u.start}px)`, overflowAnchor: "none" } })))];
} }), Ze = defineComponent({ name: "Combobox", emits: { "update:modelValue": (a) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], nullable: true, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false }, immediate: { type: [Boolean], default: false }, virtual: { type: Object, default: null } }, inheritAttrs: false, setup(a, { slots: I, attrs: r, emit: O$1 }) {
  let t$1 = ref(1), e$1 = ref(null), R = ref(null), u$1 = ref(null), d$1 = ref(null), g = ref({ static: false, hold: false }), S = ref([]), m = ref(null), w$1 = ref(2), h$1 = ref(false);
  function F(l = (i) => i) {
    let i = m.value !== null ? S.value[m.value] : null, s = l(S.value.slice()), f = s.length > 0 && s[0].dataRef.order.value !== null ? s.sort((T, L) => T.dataRef.order.value - L.dataRef.order.value) : O(s, (T) => o(T.dataRef.domRef)), y = i ? f.indexOf(i) : null;
    return y === -1 && (y = null), { options: f, activeOptionIndex: y };
  }
  let M = computed(() => a.multiple ? 1 : 0), K = computed(() => a.nullable), [p, o$1] = d(computed(() => a.modelValue), (l) => O$1("update:modelValue", l), computed(() => a.defaultValue)), v = computed(() => p.value === void 0 ? u(M.value, { [1]: [], [0]: void 0 }) : p.value), c$1 = null, P = null;
  function C(l) {
    return u(M.value, { [0]() {
      return o$1 == null ? void 0 : o$1(l);
    }, [1]: () => {
      let i = toRaw(n.value.value).slice(), s = toRaw(l), f = i.findIndex((y) => n.compare(s, toRaw(y)));
      return f === -1 ? i.push(s) : i.splice(f, 1), o$1 == null ? void 0 : o$1(i);
    } });
  }
  let V = computed(() => {
  });
  watch([V], ([l], [i]) => {
    if (n.virtual.value && l && i && m.value !== null) {
      let s = l.indexOf(i[m.value]);
      s !== -1 ? m.value = s : m.value = null;
    }
  });
  let n = { comboboxState: t$1, value: v, mode: M, compare(l, i) {
    if (typeof a.by == "string") {
      let s = a.by;
      return (l == null ? void 0 : l[s]) === (i == null ? void 0 : i[s]);
    }
    return a.by === null ? Pe(l, i) : a.by(l, i);
  }, calculateIndex(l) {
    return n.virtual.value ? a.by === null ? n.virtual.value.options.indexOf(l) : n.virtual.value.options.findIndex((i) => n.compare(i, l)) : S.value.findIndex((i) => n.compare(i.dataRef.value, l));
  }, defaultValue: computed(() => a.defaultValue), nullable: K, immediate: computed(() => false), virtual: computed(() => null), inputRef: R, labelRef: e$1, buttonRef: u$1, optionsRef: d$1, disabled: computed(() => a.disabled), options: S, change(l) {
    o$1(l);
  }, activeOptionIndex: computed(() => {
    if (h$1.value && m.value === null && (n.virtual.value ? n.virtual.value.options.length > 0 : S.value.length > 0)) {
      if (n.virtual.value) {
        let i = n.virtual.value.options.findIndex((s) => {
          var f;
          return !((f = n.virtual.value) != null && f.disabled(s));
        });
        if (i !== -1) return i;
      }
      let l = S.value.findIndex((i) => !i.dataRef.disabled);
      if (l !== -1) return l;
    }
    return m.value;
  }), activationTrigger: w$1, optionsPropsRef: g, closeCombobox() {
    h$1.value = false, !a.disabled && t$1.value !== 1 && (t$1.value = 1, m.value = null);
  }, openCombobox() {
    if (h$1.value = true, !a.disabled && t$1.value !== 0) {
      if (n.value.value) {
        let l = n.calculateIndex(n.value.value);
        l !== -1 && (m.value = l);
      }
      t$1.value = 0;
    }
  }, setActivationTrigger(l) {
    w$1.value = l;
  }, goToOption(l, i, s) {
    h$1.value = false, c$1 !== null && cancelAnimationFrame(c$1), c$1 = requestAnimationFrame(() => {
      if (a.disabled || d$1.value && !g.value.static && t$1.value === 1) return;
      if (n.virtual.value) {
        m.value = l === c.Specific ? i : f({ focus: l }, { resolveItems: () => n.virtual.value.options, resolveActiveIndex: () => {
          var T, L;
          return (L = (T = n.activeOptionIndex.value) != null ? T : n.virtual.value.options.findIndex((W) => {
            var U;
            return !((U = n.virtual.value) != null && U.disabled(W));
          })) != null ? L : null;
        }, resolveDisabled: (T) => n.virtual.value.disabled(T), resolveId() {
          throw new Error("Function not implemented.");
        } }), w$1.value = s != null ? s : 2;
        return;
      }
      let f$1 = F();
      if (f$1.activeOptionIndex === null) {
        let T = f$1.options.findIndex((L) => !L.dataRef.disabled);
        T !== -1 && (f$1.activeOptionIndex = T);
      }
      let y = l === c.Specific ? i : f({ focus: l }, { resolveItems: () => f$1.options, resolveActiveIndex: () => f$1.activeOptionIndex, resolveId: (T) => T.id, resolveDisabled: (T) => T.dataRef.disabled });
      m.value = y, w$1.value = s != null ? s : 2, S.value = f$1.options;
    });
  }, selectOption(l) {
    let i = S.value.find((f) => f.id === l);
    if (!i) return;
    let { dataRef: s } = i;
    C(s.value);
  }, selectActiveOption() {
    if (n.activeOptionIndex.value !== null) {
      if (n.virtual.value) C(n.virtual.value.options[n.activeOptionIndex.value]);
      else {
        let { dataRef: l } = S.value[n.activeOptionIndex.value];
        C(l.value);
      }
      n.goToOption(c.Specific, n.activeOptionIndex.value);
    }
  }, registerOption(l, i) {
    let s = reactive({ id: l, dataRef: i });
    if (n.virtual.value) {
      S.value.push(s);
      return;
    }
    P && cancelAnimationFrame(P);
    let f = F((y) => (y.push(s), y));
    m.value === null && n.isSelected(i.value.value) && (f.activeOptionIndex = f.options.indexOf(s)), S.value = f.options, m.value = f.activeOptionIndex, w$1.value = 2, f.options.some((y) => !o(y.dataRef.domRef)) && (P = requestAnimationFrame(() => {
      let y = F();
      S.value = y.options, m.value = y.activeOptionIndex;
    }));
  }, unregisterOption(l, i) {
    if (c$1 !== null && cancelAnimationFrame(c$1), i && (h$1.value = true), n.virtual.value) {
      S.value = S.value.filter((f) => f.id !== l);
      return;
    }
    let s = F((f) => {
      let y = f.findIndex((T) => T.id === l);
      return y !== -1 && f.splice(y, 1), f;
    });
    S.value = s.options, m.value = s.activeOptionIndex, w$1.value = 2;
  }, isSelected(l) {
    return u(M.value, { [0]: () => n.compare(toRaw(n.value.value), toRaw(l)), [1]: () => toRaw(n.value.value).some((i) => n.compare(toRaw(i), toRaw(l))) });
  }, isActive(l) {
    return m.value === n.calculateIndex(l);
  } };
  w([R, u$1, d$1], () => n.closeCombobox(), computed(() => t$1.value === 0)), provide(ne, n), t(computed(() => u(t$1.value, { [0]: i$2.Open, [1]: i$2.Closed })));
  let D = computed(() => {
    var l;
    return (l = o(R)) == null ? void 0 : l.closest("form");
  });
  return onMounted(() => {
    watch([D], () => {
      if (!D.value || a.defaultValue === void 0) return;
      function l() {
        n.change(a.defaultValue);
      }
      return D.value.addEventListener("reset", l), () => {
        var i;
        (i = D.value) == null || i.removeEventListener("reset", l);
      };
    }, { immediate: true });
  }), () => {
    var T$1, L, W;
    let { name: l, disabled: i, form: s$1, ...f } = a, y = { open: t$1.value === 0, disabled: i, activeIndex: n.activeOptionIndex.value, activeOption: n.activeOptionIndex.value === null ? null : n.virtual.value ? n.virtual.value.options[(T$1 = n.activeOptionIndex.value) != null ? T$1 : 0] : (W = (L = n.options.value[n.activeOptionIndex.value]) == null ? void 0 : L.dataRef.value.value) != null ? W : null, value: v.value };
    return h(Fragment, [...l != null && v.value != null ? e({ [l]: v.value }).map(([U, ue]) => h(f$1, E({ features: s.Hidden, key: U, as: "input", type: "hidden", hidden: true, readOnly: true, form: s$1, name: U, value: ue }))) : [], A({ theirProps: { ...r, ...T(f, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: y, slots: I, attrs: r, name: "Combobox" })]);
  };
} }), et = defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${t$1()}` } }, setup(a, { attrs: I, slots: r }) {
  let O = N("ComboboxLabel");
  function t() {
    var e;
    (e = o(O.inputRef)) == null || e.focus({ preventScroll: true });
  }
  return () => {
    let e = { open: O.comboboxState.value === 0, disabled: O.disabled.value }, { id: R, ...u } = a, d = { id: R, ref: O.labelRef, onClick: t };
    return A({ ourProps: d, theirProps: u, slot: e, attrs: I, slots: r, name: "ComboboxLabel" });
  };
} }), tt = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${t$1()}` } }, setup(a, { attrs: I, slots: r, expose: O }) {
  let t = N("ComboboxButton");
  O({ el: t.buttonRef, $el: t.buttonRef });
  function e(d) {
    t.disabled.value || (t.comboboxState.value === 0 ? t.closeCombobox() : (d.preventDefault(), t.openCombobox()), nextTick(() => {
      var g;
      return (g = o(t.inputRef)) == null ? void 0 : g.focus({ preventScroll: true });
    }));
  }
  function R(d) {
    switch (d.key) {
      case o$1.ArrowDown:
        d.preventDefault(), d.stopPropagation(), t.comboboxState.value === 1 && t.openCombobox(), nextTick(() => {
          var g;
          return (g = t.inputRef.value) == null ? void 0 : g.focus({ preventScroll: true });
        });
        return;
      case o$1.ArrowUp:
        d.preventDefault(), d.stopPropagation(), t.comboboxState.value === 1 && (t.openCombobox(), nextTick(() => {
          t.value.value || t.goToOption(c.Last);
        })), nextTick(() => {
          var g;
          return (g = t.inputRef.value) == null ? void 0 : g.focus({ preventScroll: true });
        });
        return;
      case o$1.Escape:
        if (t.comboboxState.value !== 0) return;
        d.preventDefault(), t.optionsRef.value && !t.optionsPropsRef.value.static && d.stopPropagation(), t.closeCombobox(), nextTick(() => {
          var g;
          return (g = t.inputRef.value) == null ? void 0 : g.focus({ preventScroll: true });
        });
        return;
    }
  }
  let u = s$1(computed(() => ({ as: a.as, type: I.type })), t.buttonRef);
  return () => {
    var w, h;
    let d = { open: t.comboboxState.value === 0, disabled: t.disabled.value, value: t.value.value }, { id: g, ...S } = a, m = { ref: t.buttonRef, id: g, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (w = o(t.optionsRef)) == null ? void 0 : w.id, "aria-expanded": t.comboboxState.value === 0, "aria-labelledby": t.labelRef.value ? [(h = o(t.labelRef)) == null ? void 0 : h.id, g].join(" ") : void 0, disabled: t.disabled.value === true ? true : void 0, onKeydown: R, onClick: e };
    return A({ ourProps: m, theirProps: S, slot: d, attrs: I, slots: r, name: "ComboboxButton" });
  };
} }), ot = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${t$1()}` } }, emits: { change: (a) => true }, setup(a, { emit: I, attrs: r, slots: O, expose: t }) {
  let e = N("ComboboxInput"), R = computed(() => i$1(o(e.inputRef))), u$1 = { value: false };
  t({ el: e.inputRef, $el: e.inputRef });
  function d() {
    e.change(null);
    let o$1 = o(e.optionsRef);
    o$1 && (o$1.scrollTop = 0), e.goToOption(c.Nothing);
  }
  let g = computed(() => {
    var v;
    let o$1 = e.value.value;
    return o(e.inputRef) ? typeof a.displayValue != "undefined" && o$1 !== void 0 ? (v = a.displayValue(o$1)) != null ? v : "" : typeof o$1 == "string" ? o$1 : "" : "";
  });
  onMounted(() => {
    watch([g, e.comboboxState, R], ([o$1, v], [c, P]) => {
      if (u$1.value) return;
      let C = o(e.inputRef);
      C && ((P === 0 && v === 1 || o$1 !== c) && (C.value = o$1), requestAnimationFrame(() => {
        var D;
        if (u$1.value || !C || ((D = R.value) == null ? void 0 : D.activeElement) !== C) return;
        let { selectionStart: V, selectionEnd: n } = C;
        Math.abs((n != null ? n : 0) - (V != null ? V : 0)) === 0 && V === 0 && C.setSelectionRange(C.value.length, C.value.length);
      }));
    }, { immediate: true }), watch([e.comboboxState], ([o$1], [v]) => {
      if (o$1 === 0 && v === 1) {
        if (u$1.value) return;
        let c = o(e.inputRef);
        if (!c) return;
        let P = c.value, { selectionStart: C, selectionEnd: V, selectionDirection: n } = c;
        c.value = "", c.value = P, n !== null ? c.setSelectionRange(C, V, n) : c.setSelectionRange(C, V);
      }
    });
  });
  let S = ref(false);
  function m() {
    S.value = true;
  }
  function w() {
    o$2().nextFrame(() => {
      S.value = false;
    });
  }
  function h(o) {
    switch (u$1.value = true, o.key) {
      case o$1.Enter:
        if (u$1.value = false, e.comboboxState.value !== 0 || S.value) return;
        if (o.preventDefault(), o.stopPropagation(), e.activeOptionIndex.value === null) {
          e.closeCombobox();
          return;
        }
        e.selectActiveOption(), e.mode.value === 0 && e.closeCombobox();
        break;
      case o$1.ArrowDown:
        return u$1.value = false, o.preventDefault(), o.stopPropagation(), u(e.comboboxState.value, { [0]: () => e.goToOption(c.Next), [1]: () => e.openCombobox() });
      case o$1.ArrowUp:
        return u$1.value = false, o.preventDefault(), o.stopPropagation(), u(e.comboboxState.value, { [0]: () => e.goToOption(c.Previous), [1]: () => {
          e.openCombobox(), nextTick(() => {
            e.value.value || e.goToOption(c.Last);
          });
        } });
      case o$1.Home:
        if (o.shiftKey) break;
        return u$1.value = false, o.preventDefault(), o.stopPropagation(), e.goToOption(c.First);
      case o$1.PageUp:
        return u$1.value = false, o.preventDefault(), o.stopPropagation(), e.goToOption(c.First);
      case o$1.End:
        if (o.shiftKey) break;
        return u$1.value = false, o.preventDefault(), o.stopPropagation(), e.goToOption(c.Last);
      case o$1.PageDown:
        return u$1.value = false, o.preventDefault(), o.stopPropagation(), e.goToOption(c.Last);
      case o$1.Escape:
        if (u$1.value = false, e.comboboxState.value !== 0) return;
        o.preventDefault(), e.optionsRef.value && !e.optionsPropsRef.value.static && o.stopPropagation(), e.nullable.value && e.mode.value === 0 && e.value.value === null && d(), e.closeCombobox();
        break;
      case o$1.Tab:
        if (u$1.value = false, e.comboboxState.value !== 0) return;
        e.mode.value === 0 && e.activationTrigger.value !== 1 && e.selectActiveOption(), e.closeCombobox();
        break;
    }
  }
  function F(o) {
    I("change", o), e.nullable.value && e.mode.value === 0 && o.target.value === "" && d(), e.openCombobox();
  }
  function M(o$1) {
    var c, P, C;
    let v = (c = o$1.relatedTarget) != null ? c : t$2.find((V) => V !== o$1.currentTarget);
    if (u$1.value = false, !((P = o(e.optionsRef)) != null && P.contains(v)) && !((C = o(e.buttonRef)) != null && C.contains(v)) && e.comboboxState.value === 0) return o$1.preventDefault(), e.mode.value === 0 && (e.nullable.value && e.value.value === null ? d() : e.activationTrigger.value !== 1 && e.selectActiveOption()), e.closeCombobox();
  }
  function K(o$1) {
    var c, P, C;
    let v = (c = o$1.relatedTarget) != null ? c : t$2.find((V) => V !== o$1.currentTarget);
    (P = o(e.buttonRef)) != null && P.contains(v) || (C = o(e.optionsRef)) != null && C.contains(v) || e.disabled.value || e.immediate.value && e.comboboxState.value !== 0 && (e.openCombobox(), o$2().nextFrame(() => {
      e.setActivationTrigger(1);
    }));
  }
  let p = computed(() => {
    var o, v, c, P;
    return (P = (c = (v = a.defaultValue) != null ? v : e.defaultValue.value !== void 0 ? (o = a.displayValue) == null ? void 0 : o.call(a, e.defaultValue.value) : null) != null ? c : e.defaultValue.value) != null ? P : "";
  });
  return () => {
    var n, D, l, i, s, f, y;
    let o$1 = { open: e.comboboxState.value === 0 }, { id: v, displayValue: c, onChange: P, ...C } = a, V = { "aria-controls": (n = e.optionsRef.value) == null ? void 0 : n.id, "aria-expanded": e.comboboxState.value === 0, "aria-activedescendant": e.activeOptionIndex.value === null ? void 0 : e.virtual.value ? (D = e.options.value.find((T) => !e.virtual.value.disabled(T.dataRef.value) && e.compare(T.dataRef.value, e.virtual.value.options[e.activeOptionIndex.value]))) == null ? void 0 : D.id : (l = e.options.value[e.activeOptionIndex.value]) == null ? void 0 : l.id, "aria-labelledby": (f = (i = o(e.labelRef)) == null ? void 0 : i.id) != null ? f : (s = o(e.buttonRef)) == null ? void 0 : s.id, "aria-autocomplete": "list", id: v, onCompositionstart: m, onCompositionend: w, onKeydown: h, onInput: F, onFocus: K, onBlur: M, role: "combobox", type: (y = r.type) != null ? y : "text", tabIndex: 0, ref: e.inputRef, defaultValue: p.value, disabled: e.disabled.value === true ? true : void 0 };
    return A({ ourProps: V, theirProps: C, slot: o$1, attrs: r, slots: O, features: N$1.RenderStrategy | N$1.Static, name: "ComboboxInput" });
  };
} }), lt = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(a, { attrs: I, slots: r, expose: O }) {
  let t = N("ComboboxOptions"), e = `headlessui-combobox-options-${t$1()}`;
  O({ el: t.optionsRef, $el: t.optionsRef }), watchEffect(() => {
    t.optionsPropsRef.value.static = a.static;
  }), watchEffect(() => {
    t.optionsPropsRef.value.hold = a.hold;
  });
  let R = l(), u = computed(() => R !== null ? (R.value & i$2.Open) === i$2.Open : t.comboboxState.value === 0);
  return i({ container: computed(() => o(t.optionsRef)), enabled: computed(() => t.comboboxState.value === 0), accept(d) {
    return d.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } }), () => {
    var m, w, h$1;
    let d = { open: t.comboboxState.value === 0 }, g = { "aria-labelledby": (h$1 = (m = o(t.labelRef)) == null ? void 0 : m.id) != null ? h$1 : (w = o(t.buttonRef)) == null ? void 0 : w.id, id: e, ref: t.optionsRef, role: "listbox", "aria-multiselectable": t.mode.value === 1 ? true : void 0 }, S = T(a, ["hold"]);
    return A({ ourProps: g, theirProps: S, slot: d, attrs: I, slots: t.virtual.value && t.comboboxState.value === 0 ? { ...r, default: () => [h(ke, {}, r.default)] } : r, features: N$1.RenderStrategy | N$1.Static, visible: u.value, name: "ComboboxOptions" });
  };
} }), at = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, order: { type: [Number], default: null } }, setup(a, { slots: I, attrs: r, expose: O }) {
  let t = N("ComboboxOption"), e = `headlessui-combobox-option-${t$1()}`, R = ref(null);
  O({ el: R, $el: R });
  let u = computed(() => {
    var p;
    return t.virtual.value ? t.activeOptionIndex.value === t.calculateIndex(a.value) : t.activeOptionIndex.value === null ? false : ((p = t.options.value[t.activeOptionIndex.value]) == null ? void 0 : p.id) === e;
  }), d = computed(() => t.isSelected(a.value)), g = inject(ie, null), S = computed(() => ({ disabled: a.disabled, value: a.value, domRef: R, order: computed(() => a.order) }));
  onMounted(() => t.registerOption(e, S)), onUnmounted(() => t.unregisterOption(e, u.value)), watchEffect(() => {
    let p = o(R);
    p && (g == null || g.value.measureElement(p));
  }), watchEffect(() => {
    t.comboboxState.value === 0 && u.value && (t.virtual.value || t.activationTrigger.value !== 0 && nextTick(() => {
      var p, o$1;
      return (o$1 = (p = o(R)) == null ? void 0 : p.scrollIntoView) == null ? void 0 : o$1.call(p, { block: "nearest" });
    }));
  });
  function m(p) {
    var o$1;
    if (a.disabled || (o$1 = t.virtual.value) != null && o$1.disabled(a.value)) return p.preventDefault();
    t.selectOption(e), n() || requestAnimationFrame(() => {
      var v;
      return (v = o(t.inputRef)) == null ? void 0 : v.focus({ preventScroll: true });
    }), t.mode.value === 0 && requestAnimationFrame(() => t.closeCombobox());
  }
  function w() {
    var o;
    if (a.disabled || (o = t.virtual.value) != null && o.disabled(a.value)) return t.goToOption(c.Nothing);
    let p = t.calculateIndex(a.value);
    t.goToOption(c.Specific, p);
  }
  let h = u$1();
  function F(p) {
    h.update(p);
  }
  function M(p) {
    var v;
    if (!h.wasMoved(p) || a.disabled || (v = t.virtual.value) != null && v.disabled(a.value) || u.value) return;
    let o = t.calculateIndex(a.value);
    t.goToOption(c.Specific, o, 0);
  }
  function K(p) {
    var o;
    h.wasMoved(p) && (a.disabled || (o = t.virtual.value) != null && o.disabled(a.value) || u.value && (t.optionsPropsRef.value.hold || t.goToOption(c.Nothing)));
  }
  return () => {
    let { disabled: p } = a, o = { active: u.value, selected: d.value, disabled: p }, v = { id: e, ref: R, role: "option", tabIndex: p === true ? void 0 : -1, "aria-disabled": p === true ? true : void 0, "aria-selected": d.value, disabled: void 0, onClick: m, onFocus: w, onPointerenter: F, onMouseenter: F, onPointermove: M, onMousemove: M, onPointerleave: K, onMouseleave: K }, c = T(a, ["order", "value"]);
    return A({ ourProps: v, theirProps: c, slot: o, attrs: r, slots: I, name: "ComboboxOption" });
  };
} });

const _hoisted_1 = {
    class: "combobox-wrapper"
};
const defaultOption = {
    id: 1,
    label: "Default label"
};
const _sfc_main$1 = {
    __name: 'Combobox',
    props: {
        modelValue: {
            type: Object,
            default: ()=>defaultOption
        },
        options: {
            type: Array,
            default: ()=>[
                    defaultOption
                ]
        }
    },
    emits: {
        "update:modelValue": null
    },
    setup (__props, { emit: __emit }) {
        const props = __props;
        const emit = __emit;
        const query = ref("");
        const selected = computed({
            get () {
                return props.modelValue;
            },
            set (value) {
                emit("update:modelValue", value);
            }
        });
        const filteredOptions = computed(()=>query.value === "" ? props.options : props.options.filter((option)=>option.label.toLowerCase().includes(query.value.toLowerCase())));
        function onChange({ target: { value } }) {
            query.value = value;
        }
        function displayValue(option) {
            return option.label;
        }
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(unref(Ze), {
                modelValue: selected.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event)=>selected.value = $event),
                as: "div"
            }, {
                default: withCtx(()=>[
                        _ctx.$slots.label ? (openBlock(), createBlock(unref(et), {
                            key: 0,
                            class: "combobox-label"
                        }, {
                            default: withCtx(()=>[
                                    renderSlot(_ctx.$slots, "label", {
                                        selected: selected.value
                                    }, undefined, true)
                                ]),
                            _: 3
                        })) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_1, [
                            createVNode(unref(ot), {
                                "display-value": displayValue,
                                class: "combobox-input",
                                onChange: onChange
                            }),
                            createVNode(unref(tt), {
                                class: "combobox-button"
                            }, {
                                default: withCtx(()=>[
                                        createVNode(unref(render), {
                                            "aria-hidden": "true",
                                            class: "combobox-button-icon"
                                        })
                                    ]),
                                _: 1
                            }),
                            filteredOptions.value.length > 0 && _ctx.$slots.options ? (openBlock(), createBlock(unref(lt), {
                                key: 0,
                                as: "div",
                                class: "combobox-options"
                            }, {
                                default: withCtx(()=>[
                                        renderSlot(_ctx.$slots, "options", {
                                            options: filteredOptions.value
                                        }, undefined, true)
                                    ]),
                                _: 3
                            })) : createCommentVNode("", true)
                        ])
                    ]),
                _: 3
            }, 8, [
                "modelValue"
            ]);
        };
    }
};
const Combobox = /*#__PURE__*/ _export_sfc(_sfc_main$1, [
    [
        '__scopeId',
        "data-v-f611c810"
    ]
]);
_sfc_main$1.__docgenInfo = {"exportName":"default","displayName":"Combobox","description":"","tags":{},"props":[{"name":"modelValue","type":{"name":"object"},"defaultValue":{"func":true,"value":"() => defaultOption"}},{"name":"options","type":{"name":"array"},"defaultValue":{"func":false,"value":"[defaultOption]"}}],"events":[{"name":"update:modelValue"}],"slots":[{"name":"label","scoped":true,"bindings":[{"name":"selected","title":"binding"}]},{"name":"options","scoped":true,"bindings":[{"name":"options","title":"binding"}]}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/combobox/Combobox.vue"]};

const _sfc_main = {
    __name: 'ComboboxOption',
    props: {
        value: {
            type: Object,
            default: ()=>({
                    id: 1,
                    label: ""
                })
        }
    },
    setup (__props) {
        return (_ctx, _cache)=>{
            return openBlock(), createBlock(unref(at), {
                value: __props.value,
                as: "div"
            }, {
                default: withCtx(({ active, selected })=>[
                        createBaseVNode("div", {
                            class: normalizeClass([
                                [
                                    active ? 'combobox-option-active' : 'combobox-option-not-active'
                                ],
                                "combobox-option"
                            ])
                        }, [
                            renderSlot(_ctx.$slots, "label", {}, ()=>[
                                    createBaseVNode("span", {
                                        class: normalizeClass([
                                            [
                                                selected && 'label-selected'
                                            ],
                                            "label"
                                        ])
                                    }, toDisplayString(__props.value.label), 3)
                                ], true),
                            selected ? (openBlock(), createElementBlock("span", {
                                key: 0,
                                class: normalizeClass([
                                    [
                                        active ? 'option-icon-active' : 'option-icon-not-active'
                                    ],
                                    "option-icon"
                                ])
                            }, [
                                renderSlot(_ctx.$slots, "trailing", {}, ()=>[
                                        createVNode(unref(render$1), {
                                            "aria-hidden": "true",
                                            class: "icon"
                                        })
                                    ], true)
                            ], 2)) : createCommentVNode("", true)
                        ], 2)
                    ]),
                _: 3
            }, 8, [
                "value"
            ]);
        };
    }
};
const ComboboxOption = /*#__PURE__*/ _export_sfc(_sfc_main, [
    [
        '__scopeId',
        "data-v-4ec70518"
    ]
]);
_sfc_main.__docgenInfo = {"exportName":"default","displayName":"ComboboxOption","description":"","tags":{},"props":[{"name":"value","type":{"name":"object"},"defaultValue":{"func":false,"value":"{\n  id: 1,\n  label: \"\"\n}"}}],"slots":[{"name":"label"},{"name":"trailing"}],"sourceFiles":["/Users/k.ayvazov/Desktop/Projects/ui-components/src/components/combobox/ComboboxOption.vue"]};

export { Combobox as C, ComboboxOption as a };
