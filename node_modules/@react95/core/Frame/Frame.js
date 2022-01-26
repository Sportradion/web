"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("@styled-system/prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Frame = _styledComponents["default"].div.withConfig({
  displayName: "Frame",
  componentId: "sc-1eyf5rz-0"
})(["", " ", " ", " ", " ", " ", ""], _styledSystem.space, _styledSystem.layout, _styledSystem.color, _styledSystem.flexbox, _styledSystem.shadow, _styledSystem.position);

Frame.propTypes = _objectSpread({}, _propTypes["default"].space, {}, _propTypes["default"].color, {}, _propTypes["default"].layout, {}, _propTypes["default"].flexbox, {}, _propTypes["default"].shadow);
Frame.defaultProps = {
  w: 'auto',
  h: 'auto',
  bg: 'bg',
  boxShadow: 'out'
};
var _default = Frame;
exports["default"] = _default;