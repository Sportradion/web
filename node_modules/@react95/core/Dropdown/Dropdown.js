"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("@xstyled/styled-components"));

var _system = require("@xstyled/system");

var _downcaret = _interopRequireDefault(require("../shared/assets/pattern/downcaret.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  outline: none;\n  border: none;\n  border-radius: 0;\n  width: 100%;\n  height: 20px;\n\n  padding: 3;\n\n  background-color: white;\n\n  border-left: 1;\n  border-left-color: grays.3;\n  border-top: 1;\n  border-top-color: grays.3;\n\n  box-shadow: inset -1px -1px 0 0 ", ",\n    inset 1px 1px 0 0 ", ",\n    0.5px 0.5px 0 0.5px ", ";\n\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 200px;\n  height: 20px;\n\n  &:after {\n    display: flex;\n    justify-content: center;\n    width: 17px;\n    height: 17px;\n    font-size: 14px;\n    line-height: 1.1;\n    content: '';\n    pointer-events: none;\n    position: absolute;\n    right: 1px;\n    top: 2px;\n\n    background-color: bg;\n    box-shadow: inset 0.5px 0.7px 0px 0.7px ", ",\n      inset -1px 0px 0 1px ", ", inset 1.5px 1.5px 0px 1.5px ", ";\n\n    border-right: 1;\n    border-bottom: 1;\n\n    background-image: url('", "');\n    background-position: center center;\n    background-repeat: no-repeat;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject(), (0, _system.th)('colors.grays.2'), (0, _system.th)('colors.grays.3'), (0, _system.th)('colors.white'), _downcaret["default"]);

var Select = _styledComponents["default"].select(_templateObject2(), (0, _system.th)('colors.grays.2'), (0, _system.th)('colors.black'), (0, _system.th)('colors.white'));

var Dropdown = function Dropdown(_ref) {
  var options = _ref.options,
      rest = _objectWithoutProperties(_ref, ["options"]);

  return /*#__PURE__*/_react["default"].createElement(Wrapper, null, /*#__PURE__*/_react["default"].createElement(Select, rest, options.length && options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: option,
      value: option
    }, option);
  })));
};

Dropdown.propTypes = {
  options: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]))
};
Dropdown.defaultProps = {
  options: ['', 'C:\\Documents and Settings', 'C:\\Documents and Settings\\Documents', 'iexplorer.exe']
};
var _default = Dropdown;
exports["default"] = _default;