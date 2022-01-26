"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("@xstyled/styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Modal = require("../Modal");

var _Frame = _interopRequireDefault(require("../Frame"));

var _Clock = _interopRequireDefault(require("./Clock"));

var _WindowButton = _interopRequireDefault(require("./WindowButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Truncate = _styledComponents["default"].span(_templateObject());

var TaskBar = function TaskBar(_ref) {
  var list = _ref.list;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showList = _useState2[0],
      toggleShowList = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      activeStart = _useState4[0],
      toggleActiveStart = _useState4[1];

  var _useContext = (0, _react.useContext)(_Modal.ModalContext),
      windows = _useContext.windows,
      activeWindow = _useContext.activeWindow,
      setActiveWindow = _useContext.setActiveWindow;

  return /*#__PURE__*/_react["default"].createElement(_Frame["default"], {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    height: "28",
    width: "100%",
    padding: 2,
    zIndex: "taskbar"
  }, showList && /*#__PURE__*/_react["default"].createElement(_Frame["default"], {
    position: "absolute",
    bottom: 28,
    onClick: function onClick() {
      toggleActiveStart(false);
      toggleShowList(false);
    }
  }, list), /*#__PURE__*/_react["default"].createElement(_WindowButton["default"], {
    small: true,
    icon: "logo",
    active: activeStart,
    onClick: function onClick() {
      toggleActiveStart(!activeStart);
      toggleShowList(!showList);
    }
  }, "Start"), /*#__PURE__*/_react["default"].createElement(_Frame["default"], {
    boxShadow: "none",
    width: "100%",
    paddingLeft: 0,
    ml: 2,
    display: "flex"
  }, windows && windows.map(function (_ref2, index) {
    var icon = _ref2.icon,
        title = _ref2.title;
    return /*#__PURE__*/_react["default"].createElement(_WindowButton["default"], {
      key: "".concat(title, "-").concat(index),
      icon: icon,
      active: title === activeWindow,
      onClick: function onClick() {
        return setActiveWindow(title);
      },
      small: false
    }, /*#__PURE__*/_react["default"].createElement(Truncate, null, title));
  })), /*#__PURE__*/_react["default"].createElement(_Clock["default"], null));
};

TaskBar.propTypes = {
  list: _propTypes["default"].node
};
TaskBar.defaultProps = {
  list: undefined
};
var _default = TaskBar;
exports["default"] = _default;