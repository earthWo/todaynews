// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/uc/project/todaynews/src/components/HomeItem.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b918387c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "item": {
    "height": "300",
    "flex": 1
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//


exports.default = {

    props: ["data"],

    data: function data() {
        return {};
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.data.title))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/uc/project/todaynews/src/components/MainComponent.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-22f94d78"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "refresh": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "refresh_text": {
    "fontSize": "30",
    "textAlign": "center",
    "marginTop": "30",
    "marginBottom": "30",
    "marginLeft": "20"
  },
  "indicator": {
    "color": "#FF0000",
    "width": "40",
    "height": "40"
  },
  "item": {
    "height": "300"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _HomeItem = __webpack_require__(0);

var _HomeItem2 = _interopRequireDefault(_HomeItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    data: function data() {
        return {
            itemdata: [],
            lists: [0, 1, 2, 3, 4, 5],
            refreshing: false,
            loadMore: false
        };
    },


    components: {
        HomeItem: _HomeItem2.default
    },

    methods: {
        setData: function setData(d) {
            this.itemdata = d.data;
            this.refreshing = false;
        },
        addData: function addData(d) {
            this.lists.push(this.lists.length);
        },
        onrefresh: function onrefresh(event) {
            this.refreshing = true;
            this.$parent.$emit('refresh', '');
        },
        loadmore: function loadmore(event) {
            modal.toast({ message: '加载', duration: 0.3 });
            this.loadmore = true;
            this.$parent.$emit('loadmore', '');
        }
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"],
    attrs: {
      "loadmoreoffset": "10"
    },
    on: {
      "loadmore": _vm.loadmore
    }
  }, [_c('refresh', {
    staticClass: ["refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh
    }
  }, [_c('loading-indicator', {
    staticClass: ["indicator"]
  }), _c('text', {
    staticClass: ["refresh_text"]
  }, [_vm._v(_vm._s(_vm.refreshing ? '刷新中' : '下拉刷新'))])]), _vm._l((_vm.lists), function(item, i) {
    return _c('cell', {
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('text', {
      staticClass: ["item"]
    }, [_vm._v(_vm._s(item))])])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(11)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/uc/project/todaynews/src/components/TabComponent.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b3afd5d0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "tab_bar": {
    "flexDirection": "row",
    "height": "80",
    "width": "1000"
  },
  "scroller": {
    "flexDirection": "row"
  },
  "tab": {
    "backgroundColor": "#DC143C",
    "width": "120",
    "height": "80",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "tab_text": {
    "color": "#ffffff",
    "fontSize": "28"
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    name: 'App',
    components: {},

    data: function data() {

        return {
            tabs: [{ name: '热点', value: 'news_hot' }, { name: '视频', value: 'video' }, { name: '社会', value: 'news_society' }, { name: '娱乐', value: 'news_entertainment' }, { name: '问答', value: 'question_and_answer' }, { name: '图片', value: '组图' }, { name: '科技', value: 'news_tech' }, { name: '汽车', value: 'news_car' }, { name: '体育', value: 'news_sport' }, { name: '财经', value: 'news_finance' }, { name: '军事', value: 'news_military' }, { name: '国际', value: 'news_world' }, { name: '段子', value: "essay_joke'" }, { name: '趣图', value: 'image_funny' }]
        };
    },


    methods: {
        getCategory: function getCategory() {
            return this.tabs[0].value;
        }
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tab_bar"]
  }, [_c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "scrollDirection": "horizontal"
    }
  }, _vm._l((_vm.tabs), function(position) {
    return _c('div', {
      staticClass: ["tab"]
    }, [_c('text', {
      staticClass: ["tab_text"]
    }, [_vm._v(_vm._s(position.name))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(16);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(20)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/uc/project/todaynews/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "main": {
    "flex": 1
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TabComponent = __webpack_require__(8);

var _TabComponent2 = _interopRequireDefault(_TabComponent);

var _MainComponent = __webpack_require__(4);

var _MainComponent2 = _interopRequireDefault(_MainComponent);

var _index = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');

exports.default = {

    components: { Tab: _TabComponent2.default, MainContain: _MainComponent2.default },

    data: {
        category: ''
    },

    mounted: function mounted() {
        this.onrefresh();
    },

    created: function created() {
        this.$on('refresh', function (e) {
            this.onrefresh();
        });
        this.$on('loadmore', function (e) {
            this.loadmore(e);
        });
    },

    methods: {
        onrefresh: function onrefresh() {
            var _this = this;

            var $tab = this.$refs.tab;
            if ($tab) {
                (0, _index.get)((0, _index.getHomeUrl)($tab.getCategory()), function (res) {
                    _this.$refs.contain.setData(res.data);
                });
            } else {
                modal.toast({ message: '加载数据失败', duration: 0.3 });
            }
        },
        loadmore: function loadmore() {
            var $tab = this.$refs.tab;
            this.$refs.contain.addData('');
        }
    }

};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get = get;
exports.getHomeUrl = getHomeUrl;

var stream = weex.requireModule('stream');

function get(url, callback) {
    stream.fetch({
        method: 'GET',
        type: 'json',
        url: url
    }, callback);
}

function getHomeUrl(category) {

    return 'http://is.snssdk.com/api/news/feed/v51/?category=' + category;
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["main"]
  }, [_c('tab', {
    ref: "tab"
  }), _c('MainContain', {
    ref: "contain"
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);