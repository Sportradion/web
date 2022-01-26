"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.icons = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("@xstyled/styled-components"));

var _system = require("@xstyled/system");

var _Icon = _interopRequireDefault(require("../Icon"));

var _treeMid = _interopRequireDefault(require("../shared/assets/tree-mid.png"));

var _treeLast = _interopRequireDefault(require("../shared/assets/tree-last.png"));

var _treeNodeChildren = _interopRequireDefault(require("../shared/assets/tree-node-children.png"));

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

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  padding: 1;\n\n  :focus {\n    border-width: 1;\n    border-style: dotted;\n    padding: 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 0 0 22;\n  background-image: url(", ");\n  background-repeat: repeat-y;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  margin-right: 6;\n  margin-left: ", "px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 10px;\n  height: 10px;\n  border: 1;\n  border-color: ", ";\n  background-color: ", ";\n  font-size: 11px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  list-style-type: none;\n  background-repeat: no-repeat;\n  background-image: url(", ");\n\n  &:last-child {\n    background-image: url(", ");\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FOLDER_CLOSED = 'folder';
var FOLDER_OPENED = 'folder_open';
var icons = {
  FILE_MEDIA: 'media_cd',
  FILE_TEXT: 'file_text',
  FILE_UNKNOWN: 'bat',
  FILE_FONT: 'file_font_2',
  FILE_PEN: 'file_pen',
  FILE_SETTINGS: 'file_settings',
  FILE_TEXT_SETTINGS: 'file_text_settings',
  FILE_EXECUTABLE: 'bat_exec'
};
exports.icons = icons;

var NodeItem = _styledComponents["default"].div(_templateObject(), _treeMid["default"], function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? _treeMid["default"] : _treeLast["default"];
});

var NodeInfo = _styledComponents["default"].div(_templateObject2());

var FolderStatus = _styledComponents["default"].div(_templateObject3(), (0, _system.th)('colors.black'), (0, _system.th)('colors.white'));

var IconContainer = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.hasChildren ? 8 : 18;
});

var NodeChildren = _styledComponents["default"].ul(_templateObject5(), _treeNodeChildren["default"]);

var Label = _styledComponents["default"].span(_templateObject6());

var Node = function Node(_ref2) {
  var children = _ref2.children,
      id = _ref2.id,
      iconName = _ref2.iconName,
      label = _ref2.label,
      onClick = _ref2.onClick,
      rest = _objectWithoutProperties(_ref2, ["children", "id", "iconName", "label", "onClick"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var hasChildren = children.length > 0;

  function getIconName() {
    if (!hasChildren) {
      return iconName || icons.FILE_UNKNOWN;
    }

    if (isOpen) {
      return FOLDER_OPENED;
    }

    return FOLDER_CLOSED;
  }

  var onClickHandler = function onClickHandler(event) {
    onClick(event, {
      id: id,
      iconName: iconName,
      label: label,
      children: children
    });
  };

  var onKeyDownHandler = function onKeyDownHandler(event) {
    if (event.key === ' ') {
      setIsOpen(!isOpen);
      onClickHandler(event);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(NodeItem, _extends({
    isOpen: isOpen
  }, rest), /*#__PURE__*/_react["default"].createElement(NodeInfo, null, hasChildren && /*#__PURE__*/_react["default"].createElement(FolderStatus, {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }, isOpen ? '-' : '+'), /*#__PURE__*/_react["default"].createElement(IconContainer, {
    hasChildren: hasChildren
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: getIconName(),
    width: 14,
    height: 14
  })), /*#__PURE__*/_react["default"].createElement(Label, {
    tabIndex: 0,
    onDoubleClick: function onDoubleClick() {
      return setIsOpen(!isOpen);
    },
    onClick: onClickHandler,
    onKeyDown: onKeyDownHandler
  }, label)), hasChildren && isOpen && /*#__PURE__*/_react["default"].createElement(NodeChildren, null, children.map(function (dataNode) {
    return /*#__PURE__*/_react["default"].createElement(Node, _extends({
      key: dataNode.id
    }, dataNode));
  })));
};

Node.defaultProps = {
  label: '',
  iconName: null,
  children: [],
  id: null,
  onClick: function onClick() {}
};
Node.propTypes = {
  label: _propTypes["default"].string,
  iconName: _propTypes["default"].string,
  children: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    iconName: _propTypes["default"].string,
    id: _propTypes["default"].number,
    onClick: _propTypes["default"].func
  })),
  id: _propTypes["default"].number,
  onClick: _propTypes["default"].func
};
var _default = Node;
exports["default"] = _default;