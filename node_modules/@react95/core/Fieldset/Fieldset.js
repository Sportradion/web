"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Field = _styledComponents["default"].fieldset.withConfig({
  displayName: "Fieldset__Field",
  componentId: "y25f0c-0"
})(["border-top-style:groove;border-top-width:2px;border-top-color:#e6e6e6;border-left-style:groove;border-left-width:2px;border-left-color:#e6e6e6;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#848284;border-right-style:solid;border-right-width:1px;border-right-color:#848284;box-shadow:1px 1px 0 0 #e6e6e6;"]);

var Legend = _styledComponents["default"].legend.withConfig({
  displayName: "Fieldset__Legend",
  componentId: "y25f0c-1"
})(["padding-left:4px;padding-right:1px;"]);

var Fieldset = function Fieldset(_ref) {
  var legend = _ref.legend,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["legend", "children"]);

  return /*#__PURE__*/_react["default"].createElement(Field, rest, legend && /*#__PURE__*/_react["default"].createElement(Legend, null, legend), children);
};

Fieldset.propTypes = {
  legend: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node.isRequired
};
var _default = Fieldset;
exports["default"] = _default;