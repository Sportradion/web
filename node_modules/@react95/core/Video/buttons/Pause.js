"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Pause = function Pause(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    height: "6",
    viewBox: "0 0 424.236 424.236",
    width: "6",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "pause"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M256.471 2h176.765v424.236H256.471zM2 2h176.765v424.236H2z"
  }));
};

var _default = Pause;
exports["default"] = _default;