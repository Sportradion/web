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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      margin-top: -", "px;\n      margin-left: -", "px;\n      margin-bottom: 1;\n\n      &:first-child {\n        margin-left: 2;\n      }\n\n      box-shadow: inset 0 1px 0 0 ", ",\n        -2px 1px 0 -1px ", ",\n        -0.5px 3px 0 0.5px ", ",\n        -2px 2px 0 0 ", ", -2px 0 0 -1px ", ",\n        1px 2px 0 0 ", ", 2px 0 0 -1px ", ",\n        2px 2px 0 0 ", ";\n\n      & + li {\n        margin-left: 0;\n        box-shadow: inset 0 1px 0 0 ", ",\n          2px 1px 0 -1px ", ",\n          2px 0 0 -1px ", ",\n          3px 1px 0 -1px ", ";\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  padding: 3 6;\n  background-color: bg;\n  box-shadow: inset 0 1px 0 0 ", ",\n    -2px 1px 0 -1px ", ",\n    -3px 1px 0 -1px ", ", -2px 0 0 -1px ", ",\n    2px 1px 0 -1px ", ", 2px 0 0 -1px ", ",\n    3px 1px 0 -1px ", ";\n  margin-right: 2;\n  margin-left: 2;\n\n  &:first-child {\n    margin-left: 4;\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavItem = _styledComponents["default"].li(_templateObject(), (0, _system.th)('colors.white'), (0, _system.th)('colors.grays.2'), (0, _system.th)('colors.white'), (0, _system.th)('colors.white'), (0, _system.th)('colors.grays.3'), (0, _system.th)('colors.black'), (0, _system.th)('colors.black'), function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject2(), (0, _system.th)('space.2'), (0, _system.th)('space.2'), (0, _system.th)('colors.white'), (0, _system.th)('colors.grays.2'), (0, _system.th)('colors.grays.2'), (0, _system.th)('colors.white'), (0, _system.th)('colors.white'), (0, _system.th)('colors.grays.3'), (0, _system.th)('colors.black'), (0, _system.th)('colors.black'), (0, _system.th)('colors.white'), (0, _system.th)('colors.grays.3'), (0, _system.th)('colors.black'), (0, _system.th)('colors.black'));
});

var Tab = function Tab(_ref) {
  var activeTab = _ref.activeTab,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, ["activeTab", "title"]);

  return /*#__PURE__*/_react["default"].createElement(NavItem, _extends({}, rest, {
    active: activeTab === title
  }), title);
};

Tab.propTypes = {
  activeTab: _propTypes["default"].string,
  title: _propTypes["default"].string.isRequired
};
Tab.defaultProps = {
  activeTab: undefined
};
var _default = Tab;
exports["default"] = _default;