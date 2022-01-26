"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("@xstyled/styled-components"));

var _system = require("@xstyled/system");

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _Btn = _interopRequireDefault(require("../shared-style/Btn"));

var _Button = _interopRequireDefault(require("../Button"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _ModalContext = _interopRequireDefault(require("./ModalContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      background-color: primary;\n      color: ", ";\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding-left: 6;\n  padding-right: 6;\n\n  user-select: none;\n\n  ul {\n    position: absolute;\n    left: 0;\n    color: ", ";\n  }\n\n  ", ";\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n\n  list-style: none;\n  margin: 0;\n  padding-left: 0;\n  padding-bottom: 3;\n\n  border-bottom-style: solid;\n  border-width: 1;\n  border-bottom-color: grays.3;\n\n  box-shadow: 0 1px 0 0 ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: ", ";\n\n  padding: 0 6 6 6;\n\n  & ", " {\n    margin-right: 6;\n    min-width: 70px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n\n  padding: 6;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 2;\n  padding: 0;\n\n  width: 17px;\n  height: 14px;\n  min-width: 0;\n\n  font-size: 10;\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  &:active {\n    padding: 1 0 0 1;\n\n    outline: none;\n  }\n\n  &:focus {\n    box-shadow: inset 1px 1px 0px 1px ", ",\n      inset -1px -1px 0px 1px ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n\n  display: flex;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  font-weight: bold;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 18px;\n  margin-bottom: 2;\n\n  color: ", ";\n  padding: 2 2 0;\n\n  display: flex;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          z-index: modal;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  position: fixed;\n\n  padding: 2 2 8;\n\n  top: 50px;\n\n  background-color: bg;\n\n  box-shadow: inset 1px 1px 0px 1px ", ",\n    inset 0 0 0 1px ", ", 1px 1px 0 1px ", ";\n\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalWrapper = _styledComponents["default"].div(_templateObject(), (0, _system.th)('colors.white'), (0, _system.th)('colors.grays.3'), (0, _system.th)('colors.black'), function (_ref) {
  var width = _ref.width,
      height = _ref.height;
  return "\n    width: ".concat(width ? "".concat(width, "px") : 'auto', ";\n    height: ").concat(height ? "".concat(height, "px") : 'auto', ";\n  ");
}, function (_ref2) {
  var active = _ref2.active;
  return active ? (0, _styledComponents.css)(_templateObject2()) : '';
});

var TitleBar = _styledComponents["default"].div(_templateObject3(), (0, _system.th)('colors.white'), _system.backgroundColor);

var Title = _styledComponents["default"].div(_templateObject4());

var OptionsBox = _styledComponents["default"].ul(_templateObject5());

var Option = (0, _styledComponents["default"])(_Btn["default"])(_templateObject6(), (0, _system.th)('colors.white'), (0, _system.th)('colors.grays.3'));
Option.displayName = 'Option';

var Content = _styledComponents["default"].div(_templateObject7());

var ButtonWrapper = _styledComponents["default"].div(_templateObject8(), function (props) {
  return props.buttonsAlignment;
}, _Btn["default"]);

var MenuWrapper = _styledComponents["default"].ul(_templateObject9(), (0, _system.th)('colors.grays.0'));

var MenuItem = _styledComponents["default"].li(_templateObject10(), (0, _system.th)('colors.black'), function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject11(), (0, _system.th)('colors.white'));
});

MenuItem.displayName = 'MenuItem';
var Modal = (0, _react.forwardRef)(function (_ref4, ref) {
  var closeModal = _ref4.closeModal,
      title = _ref4.title,
      children = _ref4.children,
      buttons = _ref4.buttons,
      icon = _ref4.icon,
      menu = _ref4.menu,
      buttonsAlignment = _ref4.buttonsAlignment,
      defaultPosition = _ref4.defaultPosition,
      width = _ref4.width,
      height = _ref4.height,
      rest = _objectWithoutProperties(_ref4, ["closeModal", "title", "children", "buttons", "icon", "menu", "buttonsAlignment", "defaultPosition", "width", "height"]);

  var _useContext = (0, _react.useContext)(_ModalContext["default"]),
      addWindows = _useContext.addWindows,
      removeWindows = _useContext.removeWindows,
      setActiveWindow = _useContext.setActiveWindow,
      activeWindow = _useContext.activeWindow;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      menuOpened = _useState2[0],
      setMenuOpened = _useState2[1];

  (0, _react.useEffect)(function () {
    addWindows({
      icon: icon,
      title: title
    });
    setActiveWindow(title);
    return function () {
      return removeWindows(title);
    };
  }, []);
  var iconStyle = {
    width: 15,
    height: 13,
    style: {
      marginRight: '4px'
    }
  };
  var isActive = title === activeWindow;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactDraggable["default"], {
    handle: ".draggable",
    defaultPosition: defaultPosition
  }, /*#__PURE__*/_react["default"].createElement(ModalWrapper, _extends({
    width: width,
    height: height
  }, rest, {
    onClick: function onClick() {
      return setActiveWindow(title);
    },
    active: isActive,
    ref: ref
  }), /*#__PURE__*/_react["default"].createElement(TitleBar, {
    className: "draggable",
    backgroundColor: isActive ? 'primary' : 'grays.3'
  }, icon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], _extends({
    name: icon
  }, iconStyle)), /*#__PURE__*/_react["default"].createElement(Title, null, title), /*#__PURE__*/_react["default"].createElement(OptionsBox, null, /*#__PURE__*/_react["default"].createElement(Option, null, "?"), /*#__PURE__*/_react["default"].createElement(Option, {
    onClick: closeModal
  }, "x"))), menu.length > 0 && /*#__PURE__*/_react["default"].createElement(MenuWrapper, null, menu.map(function (_ref5) {
    var name = _ref5.name,
        list = _ref5.list;
    var active = menuOpened === name;
    return /*#__PURE__*/_react["default"].createElement(MenuItem, {
      key: name,
      onMouseDown: function onMouseDown() {
        return setMenuOpened(name);
      },
      active: active
    }, name, active && list);
  })), /*#__PURE__*/_react["default"].createElement(Content, {
    onClick: function onClick() {
      return setMenuOpened('');
    }
  }, children), buttons.length > 0 && /*#__PURE__*/_react["default"].createElement(ButtonWrapper, {
    buttonsAlignment: buttonsAlignment
  }, buttons.map(function (button) {
    return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      key: button.value,
      onClick: button.onClick,
      value: button.value
    });
  })))));
});
Modal.displayName = 'Modal';
Modal.propTypes = {
  icon: _propTypes["default"].string,
  closeModal: _propTypes["default"].func,
  title: _propTypes["default"].string,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]),
  buttons: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].string.isRequired,
    onClick: _propTypes["default"].func
  })),
  menu: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string.isRequired,
    list: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired
  })),
  buttonsAlignment: _propTypes["default"].oneOf(['center', 'flex-start', 'flex-end']),
  defaultPosition: _propTypes["default"].shape({
    x: _propTypes["default"].number.isRequired,
    y: _propTypes["default"].number.isRequired
  }),
  width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
};
Modal.defaultProps = {
  icon: '',
  title: 'Modal',
  buttonsAlignment: 'flex-end',
  children: null,
  defaultPosition: {
    x: 0,
    y: 0
  },
  buttons: [],
  menu: [],
  width: undefined,
  height: undefined,
  closeModal: function closeModal() {}
};
var _default = Modal;
exports["default"] = _default;