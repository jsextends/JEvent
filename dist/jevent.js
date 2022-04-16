(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/JEventTarget.js":
/*!*****************************!*\
  !*** ./src/JEventTarget.js ***!
  \*****************************/
/*! exports provided: JEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JEventTarget\", function() { return JEventTarget; });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ \"./src/event.js\");\nfunction _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError(\"Cannot instantiate an arrow function\"); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n/**\r\n * Class JEventTarget.\r\n */\n\nvar JEventTarget = /*#__PURE__*/function () {\n  /**\r\n   * 普通事件监听组\r\n   * @protected\r\n   * @property _listeners\r\n   * @type Object\r\n   **/\n  function JEventTarget() {\n    _classCallCheck(this, JEventTarget);\n\n    this._listeners = null;\n    this._listeners = {};\n  }\n  /**\r\n   * 将指定的监听器注册到target上\r\n   * @param {String} type \r\n   * @param {Function} listener\r\n   * @param {Object} [option] 指定需要移除的 EventListener 函数是否为捕获监听器\r\n   **/\n\n\n  _createClass(JEventTarget, [{\n    key: \"addEventListener\",\n    value: function addEventListener(type, listener, option) {\n      var _option$once, _option$capture;\n\n      if (!this._listeners[type] && !Array.isArray(this._listeners[type])) {\n        this._listeners[type] = [];\n      }\n\n      this._listeners[type].push({\n        once: (_option$once = option === null || option === void 0 ? void 0 : option.once) !== null && _option$once !== void 0 ? _option$once : false,\n        handler: listener,\n        capture: (_option$capture = option === null || option === void 0 ? void 0 : option.capture) !== null && _option$capture !== void 0 ? _option$capture : false\n      });\n    }\n    /**\r\n     * 将指定的监听器从EventTarget上移除\r\n     * @param {String} type\r\n     * @param {Function} listener \r\n     * @param {Boolean} [useCapture] \r\n     **/\n\n  }, {\n    key: \"removeEventListener\",\n    value: function removeEventListener(type, listener) {\n      var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      var listeners = this._listeners;\n\n      if (listeners) {\n        var handlers = listeners[type];\n\n        if (handlers && Array.isArray(handlers)) {\n          for (var i = 0, l = handlers.length; i < l; i++) {\n            if (handlers[i].handler == listener && handlers[i].capture === useCapture) {\n              if (l == 1) {\n                delete listeners[type];\n              } else {\n                handlers.splice(i, 1);\n              }\n\n              break;\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"removeAllEventListeners\",\n    value:\n    /**\r\n     * 将所有指定类型的监听器从EventTarget上移除\r\n     * @param {String} type\r\n     **/\n    function removeAllEventListeners(type) {\n      if (!type) {\n        this._listeners = null;\n      } else {\n        if (this._listeners) {\n          delete this._listeners[type];\n        }\n      }\n    }\n    /**\r\n     * 将指定的监听器注册到eventTarget上 可注册一次 可指定参数和作用域\r\n     * @param {String} type \r\n     * @param {Function} listener \r\n     * @param {Object} [scope] \r\n     * @param {*} [data]\r\n     * @param {Object} [option] \r\n     * @return {Function | Object}\r\n     **/\n\n  }, {\n    key: \"on\",\n    value: function on(type, listener, scope) {\n      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n      var option = arguments.length > 4 ? arguments[4] : undefined;\n      scope = scope || this;\n      return this.addEventListener(type, function (evt) {\n        listener.call(scope, evt, data);\n      }, option);\n    }\n  }, {\n    key: \"dispatchEvent\",\n    value:\n    /**\r\n     * 事件分发\r\n     * @param {JEvent | Event} eventObj\r\n     * @return {Boolean}\r\n     **/\n    function dispatchEvent(eventObj) {\n      try {\n        eventObj.target = this;\n      } catch (e) {}\n\n      if (!eventObj.bubbles) {\n        this._dispatchEvent(eventObj, 2);\n      } else {\n        var top = this,\n            list = [top];\n\n        while (top.parent) {\n          list.push(top = top.parent);\n        }\n\n        var i,\n            l = list.length;\n\n        for (i = l - 1; i >= 0 && !eventObj.propagationStopped; i--) {\n          list[i]._dispatchEvent(eventObj, 1 + (i == 0));\n        }\n\n        for (i = 1; i < l && !eventObj.propagationStopped; i++) {\n          list[i]._dispatchEvent(eventObj, 3);\n        }\n      }\n    }\n    /**\r\n     * 事件分发\r\n     * @param {JEvent | Event} eventObj\r\n     * @param {Object} eventPhase\r\n     * @protected\r\n     **/\n\n  }, {\n    key: \"_dispatchEvent\",\n    value: function _dispatchEvent(eventObj, eventPhase) {\n      var _this = this;\n\n      var handlers;\n\n      if (eventPhase <= _constant__WEBPACK_IMPORTED_MODULE_0__[\"AT_TARGET\"]) {\n        var _this$_listeners$even, _this$_listeners$even2;\n\n        handlers = (_this$_listeners$even = (_this$_listeners$even2 = this._listeners[eventObj.type]) === null || _this$_listeners$even2 === void 0 ? void 0 : _this$_listeners$even2.filter(function (el) {\n          _newArrowCheck(this, _this);\n\n          return !el.capture;\n        }.bind(this))) !== null && _this$_listeners$even !== void 0 ? _this$_listeners$even : [];\n      } else {\n        var _this$_listeners$even3, _this$_listeners$even4;\n\n        handlers = (_this$_listeners$even3 = (_this$_listeners$even4 = this._listeners[eventObj.type]) === null || _this$_listeners$even4 === void 0 ? void 0 : _this$_listeners$even4.filter(function (el) {\n          _newArrowCheck(this, _this);\n\n          return el.capture;\n        }.bind(this))) !== null && _this$_listeners$even3 !== void 0 ? _this$_listeners$even3 : [];\n      }\n\n      var size = handlers.length;\n\n      try {\n        eventObj.currentTarget = this;\n        eventObj.eventPhase = eventPhase | 0;\n      } catch (e) {}\n\n      for (var i = 0; i < size && !eventObj.immediatePropagationStopped; i++) {\n        handlers[i].handler(eventObj);\n\n        if (handlers[i].once) {\n          this.removeEventListener(eventObj.type, handlers[i].handler, handlers[i].capture);\n        }\n      }\n    }\n  }]);\n\n  return JEventTarget;\n}();\n\n//# sourceURL=webpack:///./src/JEventTarget.js?");

/***/ }),

/***/ "./src/constant.js":
/*!*************************!*\
  !*** ./src/constant.js ***!
  \*************************/
/*! exports provided: EVENT_NONE, CAPTURING_PHASE, AT_TARGET, BUBBLING_PHASE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EVENT_NONE\", function() { return EVENT_NONE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CAPTURING_PHASE\", function() { return CAPTURING_PHASE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AT_TARGET\", function() { return AT_TARGET; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BUBBLING_PHASE\", function() { return BUBBLING_PHASE; });\nvar EVENT_NONE = 0;\nvar CAPTURING_PHASE = 1;\nvar AT_TARGET = 2;\nvar BUBBLING_PHASE = 3;\n\n//# sourceURL=webpack:///./src/constant.js?");

/***/ }),

/***/ "./src/errorEvent.js":
/*!***************************!*\
  !*** ./src/errorEvent.js ***!
  \***************************/
/*! exports provided: JErrorEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JErrorEvent\", function() { return JErrorEvent; });\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ \"./src/event.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n/**\r\n * Class JErrorEvent.\r\n * @extends JEvent\r\n */\n\nvar JErrorEvent = /*#__PURE__*/function (_JEvent) {\n  _inherits(JErrorEvent, _JEvent);\n\n  var _super = _createSuper(JErrorEvent);\n\n  /**\r\n   * 错误标题\r\n   * @property title\r\n   * @type String\r\n   * @readonly\r\n   */\n\n  /**\r\n   * 错误信息\r\n   * @property message\r\n   * @type String\r\n   * @readonly\r\n   */\n\n  /**\r\n   * 其他可能需要的数据 可能和错误有关可能和错误无关\r\n   * @property data\r\n   * @type {Object}\r\n   */\n\n  /**\r\n   * 构造函数\r\n   * @param title {string}\r\n   * @param message {string}\r\n   * @param data {object}\r\n   */\n  function JErrorEvent(title) {\n    var _this;\n\n    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n    _classCallCheck(this, JErrorEvent);\n\n    _this = _super.call(this, \"JError\");\n    _this.title = null;\n    _this.message = null;\n    _this.data = null;\n    _this.title = title;\n    _this.message = message || title;\n    _this.data = data;\n    return _this;\n  }\n  /**\r\n   *\r\n   * @return {String}\r\n   **/\n\n\n  _createClass(JErrorEvent, [{\n    key: \"toString\",\n    value: function toString() {\n      return \"[JEvent] type=\".concat(this.type, \" title=\").concat(this.title, \";message=\").concat(this.message);\n    }\n  }]);\n\n  return JErrorEvent;\n}(_event__WEBPACK_IMPORTED_MODULE_0__[\"JEvent\"]);\n\n//# sourceURL=webpack:///./src/errorEvent.js?");

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/*! exports provided: JEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JEvent\", function() { return JEvent; });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n/**\r\n * Class JEvent.\r\n */\n\nvar JEvent = /*#__PURE__*/function () {\n  /**\r\n   * 表明当前事件是否会向DOM树上层元素冒泡\r\n   * @property bubbles\r\n   * @type Boolean\r\n   * @default false\r\n   */\n\n  /**\r\n   * 表示该事件能否被取消,\r\n   * @property cancelable\r\n   * @type Boolean\r\n   * @default false\r\n   */\n\n  /**\r\n   * 标识是当事件沿着DOM触发时事件的当前目标\r\n   * @property currentTarget\r\n   * @type EventTarget \r\n   * @default null\r\n   */\n\n  /**\r\n   * 表明当前事件是否调用了preventDefault()方法。\r\n   * @property defaultPrevented\r\n   * @type Boolean\r\n   * @default false\r\n   */\n\n  /**\r\n   * 表示事件流当前处于哪一个阶段\r\n   * @property eventPhase\r\n   * @type Number\r\n   * @default 0\r\n   */\n\n  /**\r\n   * 生成事件的对象\r\n   * @property target\r\n   * @type Object\r\n   * @default null\r\n   * @readonly\r\n   */\n\n  /**\r\n   * 时间的创建时间\r\n   * @property timeStamp\r\n   * @type Number\r\n   * @default Date.now\r\n   */\n\n  /**\r\n   * 事件类型\r\n   * @property type\r\n   * @type String\r\n   **/\n\n  /**\r\n   * 返回事件是否允许捕获或者冒泡\r\n   * @property propagationStopped\r\n   * @type Boolean\r\n   * @default false\r\n   * @readonly\r\n   */\n\n  /**\r\n   * 返回是否阻止事件冒泡并且阻止相同事件的其他侦听器被调用。\r\n   * on this event.\r\n   * @property immediatePropagationStopped\r\n   * @type Boolean\r\n   * @default false\r\n   * @readonly\r\n   */\n\n  /**\r\n   * 构造方法\r\n   * @param { String } type 表示所创建事件的名称\r\n   * @param { EventInit } eventInit\r\n   */\n  function JEvent(type, eventInit) {\n    var _eventInit$bubbles, _eventInit$cancelable, _eventInit$composed;\n\n    _classCallCheck(this, JEvent);\n\n    this.bubbles = false;\n    this.cancelable = false;\n    this.currentTarget = null;\n    this.defaultPrevented = false;\n    this.eventPhase = _constant__WEBPACK_IMPORTED_MODULE_0__[\"EVENT_NONE\"];\n    this.target = null;\n    this.timeStamp = Date.now();\n    this.type = null;\n    this.propagationStopped = false;\n    this.immediatePropagationStopped = false;\n    this.type = type;\n    this.bubbles = (_eventInit$bubbles = eventInit === null || eventInit === void 0 ? void 0 : eventInit.bubbles) !== null && _eventInit$bubbles !== void 0 ? _eventInit$bubbles : this.bubbles;\n    this.cancelable = (_eventInit$cancelable = eventInit === null || eventInit === void 0 ? void 0 : eventInit.cancelable) !== null && _eventInit$cancelable !== void 0 ? _eventInit$cancelable : this.cancelable;\n    this.composed = (_eventInit$composed = eventInit === null || eventInit === void 0 ? void 0 : eventInit.composed) !== null && _eventInit$composed !== void 0 ? _eventInit$composed : this.composed;\n  }\n  /**\r\n   * 如果事件的默认行为可以被取消则取消 并设置defaultPrevented为true\r\n   **/\n\n\n  _createClass(JEvent, [{\n    key: \"preventDefault\",\n    value: function preventDefault() {\n      this.defaultPrevented = this.cancelable && true;\n    }\n    /**\r\n     * 阻止捕获和冒泡阶段中当前事件的进一步传播。\r\n     **/\n\n  }, {\n    key: \"stopPropagation\",\n    value: function stopPropagation() {\n      this.propagationStopped = true;\n    }\n    /**\r\n     * 设置阻止事件被其他侦听器被调用并且设置事件不允许被捕获或者冒泡。\r\n     **/\n\n  }, {\n    key: \"stopImmediatePropagation\",\n    value: function stopImmediatePropagation() {\n      this.stopPropagation();\n      this.immediatePropagationStopped = true;\n    }\n  }, {\n    key: \"toString\",\n    value:\n    /**\r\n     * \r\n     * @return {String}\r\n     **/\n    function toString() {\n      return \"[JEvent (type=\" + this.type + \")]\";\n    }\n  }]);\n\n  return JEvent;\n}();\n\n//# sourceURL=webpack:///./src/event.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: JEvent, JErrorEvent, JEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ \"./src/event.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"JEvent\", function() { return _event__WEBPACK_IMPORTED_MODULE_0__[\"JEvent\"]; });\n\n/* harmony import */ var _errorEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorEvent */ \"./src/errorEvent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"JErrorEvent\", function() { return _errorEvent__WEBPACK_IMPORTED_MODULE_1__[\"JErrorEvent\"]; });\n\n/* harmony import */ var _JEventTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JEventTarget */ \"./src/JEventTarget.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"JEventTarget\", function() { return _JEventTarget__WEBPACK_IMPORTED_MODULE_2__[\"JEventTarget\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
});