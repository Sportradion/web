"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("@xstyled/styled-components"));

var _system = require("@xstyled/system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: bg;\n  padding: 7 20 5;\n  border: none;\n\n  font-size: 12px;\n\n  box-shadow: inset 1px 1px 0px 1px ", ",\n    inset 0 0 0 1px ", ", 1px 1px 0 0px ", ";\n\n  &:disabled {\n    color: grays.3;\n  }\n\n  &:focus {\n    outline: ", "px dotted ", ";\n    outline-offset: -", "px;\n\n    box-shadow: inset 1px 1px 0px 1px ", ",\n      inset -0.5px -0.5px 0px 1px ", ",\n      1px 1px 0 1px ", ";\n  }\n\n  &:active {\n    padding: 8 20 4;\n\n    outline: ", "px dotted ", ";\n    outline-offset: -", "px;\n\n    box-shadow: inset 0 0 0 1px ", ",\n      0 0 0 1px ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _styledComponents["default"].button(_templateObject(), (0, _system.th)('colors.white'), (0, _system.th)('colors.grays.3'), (0, _system.th)('colors.black'), (0, _system.th)('space.1'), (0, _system.th)('colors.black'), (0, _system.th)('space.5'), (0, _system.th)('colors.white'), (0, _system.th)('colors.grays.3'), (0, _system.th)('colors.black'), (0, _system.th)('space.1'), (0, _system.th)('colors.black'), (0, _system.th)('space.5'), (0, _system.th)('colors.grays.3'), (0, _system.th)('colors.black'));

exports["default"] = _default;