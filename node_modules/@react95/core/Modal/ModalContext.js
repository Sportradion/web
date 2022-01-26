"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

/* eslint-disable no-unused-vars */
var ModalContext = (0, _react.createContext)({
  windows: [],
  addWindows: function addWindows(_ref) {
    var icon = _ref.icon,
        title = _ref.title;
  },
  removeWindows: function removeWindows(title) {},
  setActiveWindow: function setActiveWindow(title) {},
  activeWindow: ''
});
var _default = ModalContext;
exports["default"] = _default;