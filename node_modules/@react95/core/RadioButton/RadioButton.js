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

var _radioButtonStates = require("./radioButtonStates");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n      text-shadow: 0.5px 0.5px ", ";\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin-bottom: 10;\n  display: block;\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  opacity: 0;\n\n  &:focus ~ ", ", &:active + ", " {\n    border-width: 1;\n    border-style: dotted;\n    padding: 0;\n  }\n\n  &:checked + ", " {\n    background-image: url(", ");\n  }\n\n  &:disabled + ", " {\n    background-image: url(", ");\n  }\n\n  &:checked:disabled + ", " {\n    background-image: url(", ");\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 1;\n  user-select: none;\n\n  position: absolute;\n  top: 0;\n  left: 18px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 12px;\n\n  content: '';\n  display: inline-block;\n\n  position: absolute;\n  left: 0;\n  top: 0;\n\n  background-image: url(", ");\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Icon = _styledComponents["default"].span(_templateObject(), _radioButtonStates.radioUnchecked);

var Text = _styledComponents["default"].span(_templateObject2());

var Field = _styledComponents["default"].input.attrs({
  type: 'radio'
})(_templateObject3(), Text, Text, Icon, _radioButtonStates.radioChecked, Icon, _radioButtonStates.radioUncheckedDisabled, Icon, _radioButtonStates.radioCheckedDisabled);

var Label = _styledComponents["default"].label(_templateObject4(), function (props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject5(), (0, _system.th)('colors.grays.3'), (0, _system.th)('colors.grays.1'));
});

var RadioButton = function RadioButton(_ref) {
  var children = _ref.children,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["children", "onChange", "disabled"]);

  return /*#__PURE__*/_react["default"].createElement(Label, {
    disabled: disabled
  }, /*#__PURE__*/_react["default"].createElement(Field, _extends({
    onChange: onChange,
    disabled: disabled
  }, props)), /*#__PURE__*/_react["default"].createElement(Icon, null), /*#__PURE__*/_react["default"].createElement(Text, null, children));
};

RadioButton.propTypes = {
  children: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  disabled: _propTypes["default"].bool
};
RadioButton.defaultProps = {
  children: '',
  onChange: function onChange() {},
  disabled: false
};
var _default = RadioButton;
exports["default"] = _default;