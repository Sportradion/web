"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Input = _styledComponents["default"].input.withConfig({
  displayName: "Input",
  componentId: "z7soac-0"
})(["outline:none;border:none;cursor:text;", " ", " ", ""], _styledSystem.padding, _styledSystem.borders, _styledSystem.shadow);

Input.defaultProps = {
  pt: 3,
  pr: 3,
  pb: 5,
  pl: 3,
  borderBottom: 0,
  borderRight: 0,
  borderTopWidth: 1,
  borderTopStyle: 1,
  borderTopColor: "grays.3",
  borderLeftWidth: 1,
  borderLeftStyle: 1,
  borderLeftColor: "grays.3",
  boxShadow: "input"
};
var _default = Input;
exports["default"] = _default;