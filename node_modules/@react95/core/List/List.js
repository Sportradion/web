"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("@xstyled/styled-components"));

var _system = require("@xstyled/system");

var _ListItem = _interopRequireDefault(require("./ListItem"));

var _ListDivider = _interopRequireDefault(require("./ListDivider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: bg;\n  padding: 5 20 6;\n  border: none;\n\n  margin: 0;\n  padding: 2;\n  list-style: none;\n\n  box-shadow: inset 1px 1px 0px 1px ", ",\n    inset 0 0 0 1px ", ", 1px 1px 0 1px ", ";\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var List = _styledComponents["default"].ul(_templateObject(), (0, _system.th)('colors.white'), (0, _system.th)('colors.grays.3'), (0, _system.th)('colors.black'), function (_ref) {
  var width = _ref.width;
  return "\n    width: ".concat(width, "px;\n  ");
});

List.propTypes = {
  width: _propTypes["default"].number
};
List.defaultProps = {
  width: 200
};
List.Item = _ListItem["default"];
List.Divider = _ListDivider["default"];
var _default = List;
exports["default"] = _default;