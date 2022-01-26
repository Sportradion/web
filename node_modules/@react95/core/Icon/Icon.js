"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _useIcon2 = _interopRequireDefault(require("./useIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var I = _styledComponents["default"].i.attrs(function (_ref) {
  var url = _ref.url;
  return {
    style: {
      backgroundImage: url ? "url('".concat(url, "')") : 'none'
    }
  };
}).withConfig({
  displayName: "Icon__I",
  componentId: "x4qr3b-0"
})(["display:block;background-repeat:no-repeat;background-position:center;background-size:contain;", ""], function (_ref2) {
  var width = _ref2.width,
      height = _ref2.height;
  return "\n    width: ".concat(width, "px;\n    height: ").concat(height, "px;\n  ");
});

var Icon = function Icon(_ref3) {
  var name = _ref3.name,
      width = _ref3.width,
      height = _ref3.height,
      size = _ref3.size,
      fallback = _ref3.fallback,
      bpp = _ref3.bpp,
      variant = _ref3.variant,
      rest = _objectWithoutProperties(_ref3, ["name", "width", "height", "size", "fallback", "bpp", "variant"]);

  var _useIcon = (0, _useIcon2["default"])({
    name: name,
    size: size,
    fallback: fallback,
    bpp: bpp,
    variant: variant
  }),
      iconUrl = _useIcon.iconUrl,
      changeIconUrl = _useIcon.changeIconUrl,
      availableIcons = _useIcon.availableIcons;

  (0, _react.useEffect)(function () {
    var icon = availableIcons.find(function (i) {
      return i.size === size;
    });
    changeIconUrl(icon ? icon.url : undefined);
  }, [size]);
  return /*#__PURE__*/_react["default"].createElement(I, _extends({
    name: name,
    width: width || size,
    height: height || size
  }, rest, {
    url: iconUrl
  }));
};

Icon.propTypes = {
  name: _propTypes["default"].string,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  fallback: _propTypes["default"].bool,
  size: _propTypes["default"].number,
  bpp: _propTypes["default"].number,
  variant: _propTypes["default"].number
};
Icon.defaultProps = {
  name: null,
  width: undefined,
  height: undefined,
  fallback: true,
  size: 32,

  /** Image color depth as bits per pixel. */
  bpp: 4,
  variant: 1
};
var _default = Icon;
exports["default"] = _default;