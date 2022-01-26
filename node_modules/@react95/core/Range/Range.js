"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("@xstyled/styled-components"));

var _system = require("@xstyled/system");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  -webkit-appearance: none;\n  width: 100%;\n\n  &:hover,\n  &:focus,\n  &:active {\n    outline: none;\n  }\n\n  &::-webkit-slider-runnable-track {\n    ", "\n  }\n\n  &::-webkit-slider-thumb {\n    ", "\n  }\n\n  &:focus::-webkit-slider-runnable-track {\n    background: ", ";\n  }\n\n  &::-moz-range-track {\n    ", "\n  }\n\n  &::-moz-range-thumb {\n    ", "\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 20px;\n\n  background-color: bg;\n\n  cursor: pointer;\n\n  margin-top: -", "px;\n\n  border-top: 1;\n  border-top-color: ", ";\n  border-right: 1;\n  border-right-color: ", ";\n  border-bottom: 1;\n  border-bottom-color: ", ";\n  border-left: 1;\n  border-left-color: ", ";\n\n  box-shadow: inset 0px -1px 0px ", ",\n    inset -1px 0px 0px ", ",\n    inset 0px 1px 0px ", ",\n    inset 1px 0px 0px ", ";\n\n  -webkit-appearance: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 4px;\n\n  background: ", ";\n\n  cursor: pointer;\n\n  border-top: 1;\n  border-top-color: grays.1;\n  border-right: 2;\n  border-right-color: ", ";\n  border-bottom: 1;\n  border-bottom-color: grays.0;\n  border-left: 2;\n  border-left-color: ", ";\n\n  box-shadow: 0px 1px 0px 0px ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var trackStyle = (0, _styledComponents.css)(_templateObject(), (0, _system.th)('colors.black'), (0, _system.th)('colors.white'), (0, _system.th)('colors.white'), (0, _system.th)('colors.white'));
var thumbStyle = (0, _styledComponents.css)(_templateObject2(), (0, _system.th)('space.8'), (0, _system.th)('colors.white'), (0, _system.th)('colors.black'), (0, _system.th)('colors.black'), (0, _system.th)('colors.white'), (0, _system.th)('colors.grays.3'), (0, _system.th)('colors.grays.3'), (0, _system.th)('colors.grays.0'), (0, _system.th)('colors.grays.0'));

var Range = _styledComponents["default"].input.attrs({
  type: 'range'
})(_templateObject3(), trackStyle, thumbStyle, (0, _system.th)('colors.black'), trackStyle, thumbStyle);

var _default = Range;
exports["default"] = _default;