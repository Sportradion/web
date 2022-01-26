"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("@xstyled/styled-components"));

var _system = require("@xstyled/system");

var _Frame = _interopRequireDefault(require("../Frame"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          outline: ", "px dotted ", ";\n          outline-offset: -", "px;\n          padding-top: 4;\n          padding-right: 2;\n          padding-bottom: 0;\n          padding-left: 4;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 2 3;\n  margin-right: 2;\n  max-width: 150px;\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = (0, _styledComponents["default"])(_Frame["default"])(_templateObject(), function (_ref) {
  var small = _ref.small;
  return !small ? "\n    width: 100%;\n  " : '';
}, function (_ref2) {
  var active = _ref2.active,
      small = _ref2.small;
  return active && small ? (0, _styledComponents.css)(_templateObject2(), (0, _system.th)('space.1'), (0, _system.th)('colors.black'), (0, _system.th)('space.4')) : '';
});

var WindowButton = function WindowButton(_ref3) {
  var children = _ref3.children,
      small = _ref3.small,
      icon = _ref3.icon,
      active = _ref3.active,
      props = _objectWithoutProperties(_ref3, ["children", "small", "icon", "active"]);

  return /*#__PURE__*/_react["default"].createElement(Button, _extends({
    active: active,
    small: small
  }, active ? {
    boxShadow: 'in',
    bg: small ? undefined : 'grays.0'
  } : {
    boxShadow: 'out'
  }, props), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: icon,
    style: {
      marginRight: 4
    },
    width: 20,
    height: 20
  }), children);
};

WindowButton.propTypes = {
  children: _propTypes["default"].node,
  small: _propTypes["default"].bool,
  icon: _propTypes["default"].string,
  active: _propTypes["default"].bool
};
WindowButton.defaultProps = {
  children: '',
  small: false,
  icon: '',
  active: false
};
var _default = WindowButton;
exports["default"] = _default;