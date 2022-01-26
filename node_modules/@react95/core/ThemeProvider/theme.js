"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var colors = {
  grays: ['#e6e6e6', '#d2d2d2', '#c3c7cb', '#868a8e'],
  black: '#000000',
  white: '#ffffff',
  primary: '#000e7a',
  secondary: '#55aaaa',

  get bg() {
    return this.grays[2];
  }

};
var space = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var borderWidths = [0, 1];
var borderStyles = ['none', 'solid'];
var shadows = {
  out: "inset 0.5px 0.5px 0px 0.5px ".concat(colors.white, ",\n        inset 0 0 0 1px ").concat(colors.grays[3], ",\n        1px 0px 0 0px ").concat(colors.black, ",\n        0px 1px 0 0px ").concat(colors.black, ",\n        1px 1px 0 0px ").concat(colors.black),
  "in": "inset 0px 0px 0px 0px,\n      inset 1px 1px 0px 0px ".concat(colors.grays[3], ",\n      0.5px 0.5px 0px 0.5px ").concat(colors.white),
  input: "inset -1px -1px 0 0 ".concat(colors.grays[2], ",\n          inset 1px 1px 0 0 ").concat(colors.black, ",\n          0.5px 0.5px 0 0.5px ").concat(colors.white)
};
var zIndices = [0, 1, 2];
zIndices.modal = zIndices[1];
zIndices.taskbar = zIndices[2];
var _default = {
  colors: colors,
  space: space,
  shadows: shadows,
  borderWidths: borderWidths,
  borderStyles: borderStyles,
  zIndices: zIndices
};
exports["default"] = _default;