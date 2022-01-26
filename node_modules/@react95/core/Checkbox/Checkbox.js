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

var _check = _interopRequireDefault(require("../shared/assets/pattern/check.svg"));

var _checkDisabled = _interopRequireDefault(require("../shared/assets/pattern/check-disabled.svg"));

var _dropdown = _interopRequireDefault(require("../shared/assets/pattern/dropdown.png"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      color: grays.3;\n      text-shadow: 0.5px 0.5px ", ";\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  height: 15px;\n\n  line-height: 1.5;\n\n  position: relative;\n\n  margin: 4 0;\n  padding-left: 20;\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 12px;\n\n  margin: 0;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  opacity: 0;\n\n  &:focus ~ ", ", &:active ~ ", " {\n    border-width: 1;\n    border-style: dotted;\n    padding: 0;\n  }\n\n  &:checked + ", " {\n    background-image: url('", "');\n  }\n\n  &:checked &:disabled + ", " {\n    background-image:  url('", "'), url('", "');\n    background-size: 7px 7px, 1.9px 1.9px;\n  }\n\n  &:disabled + ", " {\n    background-color: grays.1;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 1;\n  user-select: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 12px;\n\n  content: '';\n  display: inline-block;\n\n  position: absolute;\n  left: 0;\n\n  border-left: 1;\n  border-left-color: grays.3;\n  border-top: 1;\n  border-top-color: grays.3;\n\n  box-shadow: inset -1px -1px 0 0 ", ",\n    inset 1px 1px 0 0 ", ",\n    0.5px 0.5px 0 0.5px ", ";\n\n  background-color: white;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 7px 7px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Icon = _styledComponents["default"].span(_templateObject(), (0, _system.th)('colors.grays.2'), (0, _system.th)('colors.black'), (0, _system.th)('colors.white'));

var Text = _styledComponents["default"].span(_templateObject2());

var Field = _styledComponents["default"].input(_templateObject3(), Text, Text, Icon, _check["default"], Icon, _checkDisabled["default"], _dropdown["default"], Icon);

Field.displayName = 'Field';

var Label = _styledComponents["default"].label(_templateObject4(), function (_ref) {
  var disabled = _ref.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject5(), (0, _system.th)('colors.grays.1'));
});

var Checkbox = function Checkbox(_ref2) {
  var children = _ref2.children,
      label = _ref2.label,
      value = _ref2.value,
      style = _ref2.style,
      checked = _ref2.checked,
      disabled = _ref2.disabled,
      onChange = _ref2.onChange,
      rest = _objectWithoutProperties(_ref2, ["children", "label", "value", "style", "checked", "disabled", "onChange"]);

  return /*#__PURE__*/_react["default"].createElement(Label, {
    style: style,
    checked: checked,
    disabled: disabled
  }, /*#__PURE__*/_react["default"].createElement(Field, _extends({
    type: "checkbox",
    value: value,
    onChange: onChange,
    checked: checked,
    disabled: disabled
  }, rest)), /*#__PURE__*/_react["default"].createElement(Icon, null), /*#__PURE__*/_react["default"].createElement(Text, null, children || label));
};

Checkbox.propTypes = {
  value: _propTypes["default"].string,
  label: _propTypes["default"].string,
  children: _propTypes["default"].string,
  checked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  style: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array])
};
Checkbox.defaultProps = {
  value: undefined,
  label: 'Checkbox',
  children: '',
  checked: null,
  disabled: null,
  onChange: function onChange() {},
  style: undefined
};
var _default = Checkbox;
exports["default"] = _default;