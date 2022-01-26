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

var _Icon = _interopRequireDefault(require("../Icon"));

var _List = _interopRequireDefault(require("./List"));

var _rightcaret = _interopRequireDefault(require("../shared/assets/pattern/rightcaret.svg"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      &:after {\n        position: absolute;\n        width: 5px;\n        height: 8px;\n        right: 8px;\n\n        content: '';\n        background-color: ", ";\n        mask-image: url('", "');\n        mask-position: center center;\n        mask-size: 5px 8px;\n        mask-repeat: no-repeat;\n      }\n\n      &:hover {\n        &:after {\n          background-color: ", ";\n        }\n\n        ul {\n          display: block;\n        }\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 2 6;\n\n  i {\n    margin-right: 10;\n  }\n\n  &:hover {\n    background-color: primary;\n    color: ", ";\n  }\n\n  ul {\n    display: none;\n    position: absolute;\n    top: -2px;\n    left: 97%;\n    color: ", ";\n\n    i {\n      width: 18px;\n      height: 20px;\n      margin-right: 6;\n    }\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _styledComponents["default"].li(_templateObject(), (0, _system.th)('colors.white'), (0, _system.th)('colors.black'), (0, _system.th)('colors.white'), function (_ref) {
  var icon = _ref.icon;
  return !icon && 'padding-left: 26px;';
}, function (_ref2) {
  var hasList = _ref2.hasList;
  return hasList && (0, _styledComponents.css)(_templateObject2(), (0, _system.th)('colors.black'), _rightcaret["default"], (0, _system.th)('colors.white'));
});

var ListItem = function ListItem(_ref3) {
  var icon = _ref3.icon,
      children = _ref3.children,
      onClick = _ref3.onClick,
      rest = _objectWithoutProperties(_ref3, ["icon", "children", "onClick"]);

  return /*#__PURE__*/_react["default"].createElement(Item, _extends({}, rest, {
    onClick: onClick,
    icon: icon,
    hasList: _react["default"].Children.map(children, function (child) {
      return child.type === _List["default"];
    }).some(function (child) {
      return child;
    })
  }), icon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: icon
  }), children);
};

ListItem.propTypes = {
  icon: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  onClick: _propTypes["default"].func
};
ListItem.defaultProps = {
  icon: '',
  onClick: function onClick() {}
};
var _default = ListItem;
exports["default"] = _default;