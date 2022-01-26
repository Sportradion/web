"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("@xstyled/styled-components"));

var _Modal = require("../Modal");

var _alertImages = require("./alertImages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  background-repeat: no-repeat;\n  background-size: 70%;\n  height: 45px;\n  width: 45px;\n  background-position: center;\n  margin-right: 10;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Dialog = _styledComponents["default"].div(_templateObject());

function imageDialog(_ref) {
  var type = _ref.type;
  var images = {
    error: _alertImages.dialogError,
    info: _alertImages.dialogInfo,
    question: _alertImages.dialogQuestion,
    warning: _alertImages.dialogWarning
  };
  return "background-image: url(".concat(images[type] || images.error, ");");
}

Dialog.Image = _styledComponents["default"].div(_templateObject2(), imageDialog);
Dialog.Message = _styledComponents["default"].div(_templateObject3());

var Alert = function Alert(_ref2) {
  var type = _ref2.type,
      title = _ref2.title,
      message = _ref2.message,
      onCloseModal = _ref2.onCloseModal,
      closeAlert = _ref2.closeAlert,
      rest = _objectWithoutProperties(_ref2, ["type", "title", "message", "onCloseModal", "closeAlert"]);

  var defaultPosition = {
    x: Math.floor(window.innerWidth / 2) - 150,
    y: Math.floor(window.innerHeight / 2) - 80
  };
  return /*#__PURE__*/_react["default"].createElement(_Modal.Modal, _extends({
    title: title,
    closeModal: onCloseModal,
    buttonsAlignment: "center",
    buttons: [{
      value: 'OK',
      onClick: closeAlert
    }],
    defaultPosition: defaultPosition,
    height: 120
  }, rest), /*#__PURE__*/_react["default"].createElement(Dialog, null, /*#__PURE__*/_react["default"].createElement(Dialog.Image, {
    type: type
  }), /*#__PURE__*/_react["default"].createElement(Dialog.Message, null, message)));
};

Alert.displayName = 'Alert';
Alert.propTypes = {
  title: _propTypes["default"].string.isRequired,
  message: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].oneOf(['info', 'error', 'question', 'warning']),
  closeAlert: _propTypes["default"].func,
  onCloseModal: _propTypes["default"].func
};
Alert.defaultProps = {
  type: 'error',
  closeAlert: function closeAlert() {},
  onCloseModal: function onCloseModal() {}
};
var _default = Alert;
exports["default"] = _default;