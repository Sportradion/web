"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("@xstyled/styled-components"));

var _system = require("@xstyled/system");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: ", "px;\n  height: 17px;\n  line-height: 18px;\n\n  margin-left: 2;\n  margin-top: 2;\n\n  background-color: primary;\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: ", "%;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  overflow: hidden;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    box-shadow: inset -1px -1px 0 0 ", ",\n      inset 1px 1px 0 0 ", ",\n      0.5px 0.5px 0 0.5px ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: ", "px;\n  height: 20px;\n  line-height: 20px;\n\n  border-left: 1;\n  border-left-color: grays.3;\n\n  border-top: 1;\n  border-top-color: grays.3;\n\n  background: ", ";\n  color: ", ";\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", "px;\n  height: 20px;\n\n  position: relative;\n\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.width;
});

var WhiteBar = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.width;
}, (0, _system.th)('colors.white'), (0, _system.th)('colors.black'), (0, _styledComponents.css)(_templateObject3(), (0, _system.th)('colors.grays.2'), (0, _system.th)('colors.black'), (0, _system.th)('colors.white')));

var Container = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.percent;
});

var Progress = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.width;
}, (0, _system.th)('colors.white'));

var ProgressBar = function ProgressBar(_ref) {
  var width = _ref.width,
      percent = _ref.percent,
      rest = _objectWithoutProperties(_ref, ["width", "percent"]);

  return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({
    width: width
  }, rest), /*#__PURE__*/_react["default"].createElement(WhiteBar, {
    width: width
  }, "".concat(percent, "%")), /*#__PURE__*/_react["default"].createElement(Container, {
    percent: percent
  }, /*#__PURE__*/_react["default"].createElement(Progress, {
    width: width
  }, "".concat(percent, "%"))));
};

ProgressBar.propTypes = {
  width: _propTypes["default"].number,
  percent: _propTypes["default"].number
};
ProgressBar.defaultProps = {
  width: 150,
  percent: 0
};
var _default = ProgressBar;
exports["default"] = _default;