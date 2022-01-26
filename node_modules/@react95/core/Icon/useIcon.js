"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _icons = _interopRequireDefault(require("@react95/icons"));

var _icojs = _interopRequireDefault(require("icojs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MIME_TYPE = 'image/png';

function icoParse(file) {
  if (_icojs["default"].isICO(file)) {
    return _icojs["default"].parse(file);
  }

  return [];
}

var useIcon = function useIcon(_ref) {
  var name = _ref.name,
      size = _ref.size,
      fallback = _ref.fallback,
      _ref$bpp = _ref.bpp,
      bpp = _ref$bpp === void 0 ? 4 : _ref$bpp,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 1 : _ref$variant;

  var _useState = (0, _react.useState)({
    iconUrl: '',
    availableIcons: [{}]
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setAvailableIcons = _useState2[1];

  var changeIconUrl = function changeIconUrl(newUrl) {
    setAvailableIcons(function (iconData) {
      return _objectSpread({}, iconData, {
        iconUrl: newUrl
      });
    });
  };

  (0, _react.useEffect)(function () {
    function fetchIcon() {
      return _fetchIcon.apply(this, arguments);
    }

    function _fetchIcon() {
      _fetchIcon = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response, iconBuffer, allIcons, iconsToRender, url, match, finded;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(_icons["default"][name]);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.arrayBuffer();

              case 5:
                iconBuffer = _context.sent;
                _context.next = 8;
                return icoParse(iconBuffer);

              case 8:
                allIcons = _context.sent;
                iconsToRender = allIcons.map(function (i) {
                  return {
                    size: i.width,
                    url: URL.createObjectURL(new Blob([i.buffer], {
                      type: MIME_TYPE
                    })),
                    bpp: i.bpp
                  };
                });
                match = iconsToRender.filter(function (i) {
                  return i.size === size && i.bpp === bpp;
                });

                if (match.length > 0) {
                  finded = match[variant - 1];
                  url = finded.url;
                } else if (fallback) {
                  url = iconsToRender[0].url;
                }

                setAvailableIcons({
                  iconUrl: url,
                  availableIcons: iconsToRender
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchIcon.apply(this, arguments);
    }

    fetchIcon();
  }, []);
  return {
    changeIconUrl: changeIconUrl,
    iconUrl: data.iconUrl,
    availableIcons: data.availableIcons
  };
};

var _default = useIcon;
exports["default"] = _default;