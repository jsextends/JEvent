(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["J19"] = factory();
	else
		root["J19"] = factory();
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

/***/ "./src/errorEvent.js":
/*!***************************!*\
  !*** ./src/errorEvent.js ***!
  \***************************/
/*! exports provided: J19ErrorEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"J19ErrorEvent\", function() { return J19ErrorEvent; });\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ \"./src/event.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar J19ErrorEvent =\n/*#__PURE__*/\nfunction (_J19Event) {\n  _inherits(J19ErrorEvent, _J19Event);\n\n  /**\r\n   * 错误标题\r\n   * @property title\r\n   * @type String\r\n   */\n\n  /**\r\n   * 错误信息\r\n   * @property message\r\n   * @type String\r\n   */\n\n  /**\r\n   * 错误的其他属性\r\n   * @property data\r\n   * @type {Object}\r\n   */\n\n  /**\r\n   * 构造函数\r\n   * @param title {string}\r\n   * @param message {string}\r\n   * @param data {object}\r\n   */\n  function J19ErrorEvent(title, message) {\n    var _this;\n\n    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n    _classCallCheck(this, J19ErrorEvent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(J19ErrorEvent).call(this, \"error\"));\n    _this.title = null;\n    _this.message = null;\n    _this.data = null;\n    _this.title = title;\n    _this.message = message;\n    _this.data = data;\n    return _this;\n  }\n  /**\r\n  * 复制一个相同类型的事件\r\n  * @method clone\r\n  * @return {J19ErrorEvent}\r\n  **/\n\n\n  _createClass(J19ErrorEvent, [{\n    key: \"clone\",\n    value: function clone() {\n      return new J19ErrorEvent(this.title, this.message, this.data);\n    }\n    /**\r\n    * \r\n    * @method toString\r\n    * @return {String}\r\n    **/\n\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return \"[Event (type=error)] \".concat(this.title, \" \").concat(this.message);\n    }\n  }]);\n\n  return J19ErrorEvent;\n}(_event__WEBPACK_IMPORTED_MODULE_0__[\"J19Event\"]);\n\n//# sourceURL=webpack://J19/./src/errorEvent.js?");

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/*! exports provided: J19Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"J19Event\", function() { return J19Event; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar J19Event =\n/*#__PURE__*/\nfunction () {\n  /**\r\n   * 事件类型\r\n   * @property type\r\n   * @type String\r\n   **/\n\n  /**\r\n   * 生成事件的对象\r\n   * @property target\r\n   * @type Object\r\n   * @default null\r\n   * @readonly\r\n  */\n\n  /**\r\n   * 正在从中分派冒泡事件的当前目标\r\n   * @property currentTarget\r\n   * @type Object\r\n   * @default null\r\n   * @readonly\r\n  */\n\n  /**\r\n   * 对于冒泡事件，这表示当前事件阶段\r\n   * @property eventPhase\r\n   * @type Number\r\n   * @default 0\r\n   * @readonly\r\n  */\n\n  /**\r\n   * 指示事件是否通过可以冒泡\r\n   * @property bubbles\r\n   * @type Boolean\r\n   * @default false\r\n   * @readonly\r\n  */\n\n  /**\r\n   * 事件的默认行为是否可以被取消,\r\n   * @property cancelable\r\n   * @type Boolean\r\n   * @default false\r\n   * @readonly\r\n  */\n\n  /**\r\n   * 时间的创建时间\r\n   * @property timeStamp\r\n   * @type Number\r\n   * @default 0\r\n   * @readonly\r\n  */\n\n  /**\r\n   * 表明当前事件是否调用了preventDefault()方法。\r\n   * @property defaultPrevented\r\n   * @type Boolean\r\n   * @default false\r\n   * @readonly\r\n  */\n\n  /**\r\n   * 返回事件是否允许捕获或者冒泡\r\n   * @property propagationStopped\r\n   * @type Boolean\r\n   * @default false\r\n   * @readonly\r\n  */\n\n  /**\r\n      * 返回是否阻止事件冒泡并且阻止相同事件的其他侦听器被调用。\r\n      * on this event.\r\n      * @property immediatePropagationStopped\r\n      * @type Boolean\r\n      * @default false\r\n      * @readonly\r\n     */\n\n  /**\r\n   *事件是否被移除\r\n   * @property removed\r\n   * @type Boolean\r\n   * @default false\r\n   * @readonly\r\n  */\n\n  /**\r\n   * 构造方法\r\n   * @param type {string}\r\n   * @param bubbles {boolean}\r\n   * @param cancelable {boolean}\r\n   */\n  function J19Event(type) {\n    var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    var cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n    _classCallCheck(this, J19Event);\n\n    this.type = null;\n    this.target = null;\n    this.currentTarget = null;\n    this.eventPhase = 0;\n    this.bubbles = false;\n    this.cancelable = false;\n    this.timeStamp = Date.now();\n    this.defaultPrevented = false;\n    this.propagationStopped = false;\n    this.immediatePropagationStopped = false;\n    this.removed = false;\n    this.type = type;\n    this.bubbles = bubbles;\n    this.cancelable = cancelable;\n  }\n  /**\r\n  * 如果事件的默认行为可以被取消则取消 并设置defaultPrevented为true\r\n   * \r\n  * @method preventDefault\r\n  **/\n\n\n  _createClass(J19Event, [{\n    key: \"preventDefault\",\n    value: function preventDefault() {\n      this.defaultPrevented = this.cancelable && true;\n    }\n    /**\r\n    * 设置事件不允许被捕获或者冒泡\r\n     * \r\n    * @method stopPropagation\r\n    **/\n\n  }, {\n    key: \"stopPropagation\",\n    value: function stopPropagation() {\n      this.propagationStopped = true;\n    }\n    /**\r\n     * \r\n     * 设置阻止事件被其他侦听器被调用并且设置事件不允许被捕获或者冒泡。\r\n    * @method stopImmediatePropagation\r\n    **/\n\n  }, {\n    key: \"stopImmediatePropagation\",\n    value: function stopImmediatePropagation() {\n      this.immediatePropagationStopped = this.propagationStopped = true;\n    }\n  }, {\n    key: \"remove\",\n\n    /**\r\n    * 移除事件\r\n     * \r\n    * @method remove\r\n    **/\n    value: function remove() {\n      this.removed = true;\n    }\n  }, {\n    key: \"clone\",\n\n    /**\r\n    * 复制一个相同类型的事件\r\n    * @method clone\r\n    * @return {J19vent}\r\n    **/\n    value: function clone() {\n      return new J19Event(this.type, this.bubbles, this.cancelable);\n    }\n  }, {\n    key: \"set\",\n\n    /**\r\n    * 给事件添加属性\r\n    *\r\n    * @method set\r\n    * @param {Object} props \r\n    * @return {J19vent}\r\n    */\n    value: function set(props) {\n      for (var n in props) {\n        this[n] = props[n];\n      }\n    }\n  }, {\n    key: \"toString\",\n\n    /**\r\n    * \r\n    * @method toString\r\n    * @return {String}\r\n    **/\n    value: function toString() {\n      return \"[Event (type=\" + this.type + \")]\";\n    }\n  }]);\n\n  return J19Event;\n}();\n\n//# sourceURL=webpack://J19/./src/event.js?");

/***/ }),

/***/ "./src/eventDispatch.js":
/*!******************************!*\
  !*** ./src/eventDispatch.js ***!
  \******************************/
/*! exports provided: J19DispatchEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"J19DispatchEvent\", function() { return J19DispatchEvent; });\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ \"./src/event.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar J19DispatchEvent =\n/*#__PURE__*/\nfunction () {\n  function J19DispatchEvent() {\n    _classCallCheck(this, J19DispatchEvent);\n\n    this._listeners = null;\n    this._captureListeners = null;\n  }\n\n  _createClass(J19DispatchEvent, [{\n    key: \"addEventListener\",\n\n    /**\r\n    * 将指定的监听器注册到target上\r\n    * @method addEventListener\r\n    * @param {String} type \r\n    * @param {Function | Object} listener\r\n    * the event is dispatched.\r\n    * @param {Boolean} [useCapture] 指定需要移除的 EventListener 函数是否为捕获监听器\r\n    * @return {Function | Object} \r\n    **/\n    value: function addEventListener(type, listener, useCapture) {\n      var listeners;\n\n      if (useCapture) {\n        listeners = this._captureListeners = this._captureListeners || {};\n      } else {\n        listeners = this._listeners = this._listeners || {};\n      }\n\n      var arr = listeners[type];\n\n      if (arr) {\n        this.removeEventListener(type, listener, useCapture);\n      }\n\n      arr = listeners[type];\n\n      if (!arr) {\n        listeners[type] = [listener];\n      } else {\n        arr.push(listener);\n      }\n\n      return listener;\n    }\n    /**\r\n    * 将指定的监听器注册到eventTarget上 可注册一次 可指定参数和作用域\r\n     * @method on\r\n    * @param {String} type \r\n    * @param {Function | Object} listener \r\n    * @param {Object} [scope] \r\n    * @param {Boolean} [once=false] \r\n    * @param {*} [data]\r\n    * @param {Boolean} [useCapture=false] \r\n    * @return {Function | Object}\r\n    **/\n\n  }, {\n    key: \"on\",\n    value: function on(type, listener, scope) {\n      var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n      var data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n      var useCapture = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;\n\n      if (listener.handleEvent) {\n        scope = scope || listener;\n        listener = listener.handleEvent;\n      }\n\n      scope = scope || this;\n      return this.addEventListener(type, function (evt) {\n        listener.call(scope, evt, data);\n        once && evt.remove();\n      }, useCapture);\n    }\n  }, {\n    key: \"removeEventListener\",\n\n    /**\r\n    * 将指定的监听器从EventTarget上移除\r\n     * @method removeEventListener\r\n    * @param {String} type\r\n    * @param {Function | Object} listener \r\n    * @param {Boolean} [useCapture] \r\n    **/\n    value: function removeEventListener(type, listener) {\n      var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      var listeners = useCapture ? this._captureListeners : this._listeners;\n\n      if (!listeners) {\n        return;\n      }\n\n      var arr = listeners[type];\n\n      if (!arr) {\n        return;\n      }\n\n      for (var i = 0, l = arr.length; i < l; i++) {\n        if (arr[i] == listener) {\n          if (l == 1) {\n            delete listeners[type];\n          } else {\n            arr.splice(i, 1);\n          }\n\n          break;\n        }\n      }\n    }\n  }, {\n    key: \"removeAllEventListeners\",\n\n    /**\r\n    * 将所有指定类型的监听器从EventTarget上移除\r\n     * @method removeAllEventListeners\r\n    * @param {String} type\r\n     * \r\n    **/\n    value: function removeAllEventListeners(type) {\n      if (!type) {\n        this._listeners = this._captureListeners = null;\n      } else {\n        if (this._listeners) {\n          delete this._listeners[type];\n        }\n\n        if (this._captureListeners) {\n          delete this._captureListeners[type];\n        }\n      }\n    }\n    /**\r\n     * 事件分发\r\n    * @method dispatchEvent\r\n    * @param {Object | String | EL_Event} eventObj\r\n    * @param {Boolean} [bubbles] \r\n    * @param {Boolean} [cancelable] \r\n    * @return {Boolean}\r\n    **/\n\n  }, {\n    key: \"dispatchEvent\",\n    value: function dispatchEvent(eventObj) {\n      var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      var cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n      if (typeof eventObj == \"string\") {\n        var listeners = this._listeners;\n\n        if (!bubbles && (!listeners || !listeners[eventObj])) {\n          return true;\n        }\n\n        eventObj = new _event__WEBPACK_IMPORTED_MODULE_0__[\"J19Event\"](eventObj, bubbles, cancelable);\n      } else if (eventObj.target && eventObj.clone) {\n        eventObj = eventObj.clone();\n      }\n\n      try {\n        eventObj.target = this;\n      } catch (e) {}\n\n      if (!eventObj.bubbles || !this.parent) {\n        this._dispatchEvent(eventObj, 2);\n      } else {\n        var top = this,\n            list = [top];\n\n        while (top.parent) {\n          list.push(top = top.parent);\n        }\n\n        var i,\n            l = list.length;\n\n        for (i = l - 1; i >= 0 && !eventObj.propagationStopped; i--) {\n          list[i]._dispatchEvent(eventObj, 1 + (i == 0));\n        }\n\n        for (i = 1; i < l && !eventObj.propagationStopped; i++) {\n          list[i]._dispatchEvent(eventObj, 3);\n        }\n      }\n\n      return !eventObj.defaultPrevented;\n    }\n    /**\r\n    * 是否存在指定type的事件\r\n    * @method hasEventListener\r\n    * @param {String} type\r\n    * @return {Boolean}\r\n    **/\n\n  }, {\n    key: \"hasEventListener\",\n    value: function hasEventListener(type) {\n      var listeners = this._listeners,\n          captureListeners = this._captureListeners;\n      return !!(listeners && listeners[type] || captureListeners && captureListeners[type]);\n    }\n    /**\r\n     * 判断指定事件类型是否至少有一个侦听器\r\n    * @method willTrigger\r\n    * @param {String} type\r\n    * @return {Boolean}\r\n    **/\n\n  }, {\n    key: \"willTrigger\",\n    value: function willTrigger(type) {\n      var self = this;\n\n      while (self) {\n        if (self.hasEventListener(type)) {\n          return true;\n        }\n\n        self = self.parent;\n      }\n\n      return false;\n    }\n    /**\r\n    * 事件分发\r\n    * @method _dispatchEvent\r\n    * @param {Object | J19Event} eventObj\r\n    * @param {Object} eventPhase\r\n    * @protected\r\n    **/\n    //eventPhase 属性返回事件传播的当前阶段。{1:'捕获阶段',2:'派发阶段',3:'冒泡阶段'}\n\n    /*\r\n    |----------|----------------------------------------------------------------------------------|\r\n    |     0    | 没有事件正在被处理                                                                 |\r\n    |----------|----------------------------------------------------------------------------------|\r\n    |     1    | 事件正在被目标元素的祖先对象处理. 逐级 直到目标元素的父元素。                          |\r\n    |----------|----------------------------------------------------------------------------------|\r\n    |     2    | 事件已经到达了目标对象并且被调用,如果bubbles为false,事件到此为止                     |\r\n    |----------|----------------------------------------------------------------------------------|\r\n    |     3    | 事件从父亲元素开始逐级到目标元素的祖先元素                                           |\r\n    |----------|----------------------------------------------------------------------------------|\r\n     */\n\n  }, {\n    key: \"_dispatchEvent\",\n    value: function _dispatchEvent(eventObj, eventPhase) {\n      var l,\n          arr,\n          listeners = eventPhase <= 2 ? this._captureListeners : this._listeners;\n\n      if (eventObj && listeners && (arr = listeners[eventObj.type]) && (l = arr.length)) {\n        try {\n          eventObj.currentTarget = this;\n        } catch (e) {}\n\n        try {\n          eventObj.eventPhase = eventPhase | 0;\n        } catch (e) {}\n\n        eventObj.removed = false;\n        arr = arr.slice();\n\n        for (var i = 0; i < l && !eventObj.immediatePropagationStopped; i++) {\n          var o = arr[i];\n          o(eventObj);\n\n          if (eventObj.removed) {\n            this.removeEventListener(eventObj.type, o, eventPhase == 1);\n            eventObj.removed = false;\n          }\n        }\n      }\n\n      if (eventPhase === 2) {\n        this._dispatchEvent(eventObj, 2.1);\n      }\n    }\n  }], [{\n    key: \"init\",\n\n    /**\r\n    * 事件初始化\r\n    * @method init\r\n    * @static\r\n    * @param {J19Event|Event} target\r\n    **/\n    value: function init(target) {\n      var o = new J19DispatchEvent();\n      target.addListener = o.addEventListener;\n      target.on = o.on;\n      target.removeListener = target.off = o.removeEventListener;\n      target.removeAllListeners = o.removeAllEventListeners;\n      target.hasListener = o.hasEventListener;\n      target.assignEvent = o.dispatchEvent;\n      target._assignEvent = o._dispatchEvent;\n      target.hasTrigger = o.willTrigger;\n    }\n  }]);\n\n  return J19DispatchEvent;\n}();\n\n//# sourceURL=webpack://J19/./src/eventDispatch.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: J19Event, J19ErrorEvent, J19DispatchEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ \"./src/event.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"J19Event\", function() { return _event__WEBPACK_IMPORTED_MODULE_0__[\"J19Event\"]; });\n\n/* harmony import */ var _errorEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorEvent */ \"./src/errorEvent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"J19ErrorEvent\", function() { return _errorEvent__WEBPACK_IMPORTED_MODULE_1__[\"J19ErrorEvent\"]; });\n\n/* harmony import */ var _eventDispatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventDispatch */ \"./src/eventDispatch.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"J19DispatchEvent\", function() { return _eventDispatch__WEBPACK_IMPORTED_MODULE_2__[\"J19DispatchEvent\"]; });\n\n\n\n\n\n//# sourceURL=webpack://J19/./src/index.js?");

/***/ })

/******/ });
});