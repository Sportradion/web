"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("@xstyled/styled-components"));

var _system = require("@xstyled/system");

var _propTypes = require("prop-types");

var _Btn = _interopRequireDefault(require("../shared-style/Btn"));

var _ = require("..");

var _buttons = require("./buttons");

var _ListDivider = _interopRequireDefault(require("../List/ListDivider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  &::-webkit-slider-thumb {\n    height: 18px;\n    margin-top: -7px;\n    width: 10px;\n  }\n\n  &[value='0']::-webkit-slider-thumb {\n    margin-left: -2px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent;\n  box-shadow: none;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'React95Video-Numbers';\n  text-transform: uppercase;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 6;\n  margin-bottom: 4;\n\n  box-shadow: in;\n  background-color: ", ";\n  height: 50px;\n\n  color: white;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 2 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: 18px;\n  margin-bottom: 2;\n\n  color: ", ";\n  padding: 0 2;\n\n  display: flex;\n  align-items: center;\n  background-color: primary;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        padding: 4;\n        svg {\n          fill: ", ";\n          border-bottom: 1px solid white;\n          border-right: 1px solid white;\n        }\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  &&,\n  &:active,\n  &:focus {\n    width: 20px;\n    height: 20px;\n    padding: 7;\n\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 2;\n\n  display: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var VideoTag = _styledComponents["default"].video(_templateObject(), function (_ref) {
  var visible = _ref.visible;
  return visible ? 'block' : 'none';
});

var Source = function Source(_ref2) {
  var src = _ref2.src;
  return /*#__PURE__*/_react["default"].createElement("source", {
    src: src,
    type: "video/".concat(src.substring(src.length - 3))
  });
};

Source.propTypes = {
  src: _propTypes.string.isRequired
};
var ControlBtn = (0, _styledComponents["default"])(_Btn["default"])(_templateObject2(), function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject3(), (0, _system.th)('colors.grays.3'));
});

var TitleBar = _styledComponents["default"].div(_templateObject4(), (0, _system.th)('colors.white'));

var Controls = _styledComponents["default"].div(_templateObject5());

var CountDownContainer = (0, _styledComponents["default"])(_.Frame)(_templateObject6(), (0, _system.th)('colors.black'));

var VideoFont = _styledComponents["default"].span(_templateObject7());

var ResetFrame = (0, _styledComponents["default"])(_.Frame)(_templateObject8());
var VideoRange = (0, _styledComponents["default"])(_.Range)(_templateObject9());

var PlayOrPause = function PlayOrPause(_ref4) {
  var playing = _ref4.playing;
  return playing ? /*#__PURE__*/_react["default"].createElement(_buttons.Pause, null) : /*#__PURE__*/_react["default"].createElement(_buttons.Play, null);
};

PlayOrPause.propTypes = {
  playing: _propTypes.bool.isRequired
};

var arrayFy = function arrayFy(str) {
  return [].concat(str);
};

function updateProgressBar(player, updateProgress) {
  var percentage = Math.floor(100 / player.duration * player.currentTime);
  updateProgress(percentage);
}

function parseCurrentTime(secs) {
  if (!secs) {
    return '00:00';
  }

  var sec = parseInt(secs, 10);
  var hours = Math.floor(sec / 3600);
  var minutes = Math.floor(sec / 60) % 60;
  var seconds = sec % 60;
  return [hours, minutes, seconds].map(function (v) {
    return v < 10 ? "0".concat(v) : v;
  }).filter(function (v, i) {
    return v !== '00' || i > 0;
  }).join(':');
}

var Video = function Video(_ref5) {
  var _player$current, _player$current2;

  var src = _ref5.src,
      name = _ref5.name,
      videoProps = _ref5.videoProps,
      style = _ref5.style,
      props = _objectWithoutProperties(_ref5, ["src", "name", "videoProps", "style"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      playing = _useState2[0],
      setPlaying = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loadeddata = _useState4[0],
      setLoadeddata = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      progress = _useState6[0],
      setProgress = _useState6[1];

  var player = (0, _react.useRef)(null);
  var progressRef = (0, _react.useRef)(null);
  var paths = arrayFy(src);

  var _paths = _slicedToArray(paths, 1),
      pathname = _paths[0];

  (0, _react.useEffect)(function () {
    player.current.addEventListener('ended', function () {
      setPlaying(false);
      setProgress(0);
    }, false);
    player.current.addEventListener('timeupdate', function () {
      updateProgressBar(player.current || {}, setProgress);
    }, false);
    player.current.addEventListener('loadeddata', function () {
      setLoadeddata(true);
    }, false);
    player.current.addEventListener('playing', function () {
      setPlaying(true);
    }, false);
  }, [player.current]);
  return /*#__PURE__*/_react["default"].createElement(_.Frame, _extends({
    p: 2
  }, props, {
    style: _objectSpread({
      width: !loadeddata ? 260 : undefined
    }, style)
  }), /*#__PURE__*/_react["default"].createElement(TitleBar, null, /*#__PURE__*/_react["default"].createElement(_.Icon, {
    name: "mplayer_1_13",
    size: 16,
    style: {
      marginRight: 4
    }
  }), name || pathname.replace(/^.*[\\/]/, ''), !loadeddata && ' (Openning)'), /*#__PURE__*/_react["default"].createElement(VideoTag, _extends({}, videoProps, {
    ref: player,
    visible: loadeddata
  }), paths.map(function (s) {
    return /*#__PURE__*/_react["default"].createElement(Source, {
      key: s,
      src: s
    });
  })), loadeddata && /*#__PURE__*/_react["default"].createElement(_ListDivider["default"], {
    as: "span",
    style: {
      display: 'block',
      marginBottom: 2
    }
  }), /*#__PURE__*/_react["default"].createElement(ResetFrame, {
    maxWidth: 250,
    mx: "auto",
    mb: 4
  }, /*#__PURE__*/_react["default"].createElement(CountDownContainer, null, /*#__PURE__*/_react["default"].createElement(ResetFrame, {
    display: "flex",
    flexDirection: "column",
    width: "40%"
  }, /*#__PURE__*/_react["default"].createElement(VideoFont, {
    style: {
      marginTop: 'auto'
    }
  }, parseCurrentTime((_player$current = player.current) === null || _player$current === void 0 ? void 0 : _player$current.duration)), /*#__PURE__*/_react["default"].createElement(VideoFont, {
    style: {
      height: 12
    }
  }, !loadeddata && 'Openning')), /*#__PURE__*/_react["default"].createElement(ResetFrame, {
    display: "flex",
    flexDirection: "column",
    width: "40%"
  }, /*#__PURE__*/_react["default"].createElement(VideoFont, {
    style: {
      marginTop: 'auto',
      fontSize: 22
    }
  }, parseCurrentTime((_player$current2 = player.current) === null || _player$current2 === void 0 ? void 0 : _player$current2.currentTime)), /*#__PURE__*/_react["default"].createElement(VideoFont, {
    style: {
      height: 12
    }
  }, "time"))), /*#__PURE__*/_react["default"].createElement(Controls, null, /*#__PURE__*/_react["default"].createElement(ControlBtn, {
    disabled: !loadeddata,
    onClick: function onClick() {
      if (!playing) {
        player.current.play();
      } else {
        player.current.pause();
      }

      setPlaying(!playing);
    }
  }, loadeddata ? /*#__PURE__*/_react["default"].createElement(PlayOrPause, {
    playing: playing
  }) : /*#__PURE__*/_react["default"].createElement(_.Icon, {
    name: "user_4",
    width: 16,
    height: 16,
    style: {
      marginTop: -2
    }
  })), /*#__PURE__*/_react["default"].createElement(ControlBtn, {
    disabled: !loadeddata,
    onClick: function onClick() {
      player.current.pause();

      if (player.current.currentTime) {
        player.current.currentTime = 0;
      }

      setPlaying(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(_buttons.Stop, null)), /*#__PURE__*/_react["default"].createElement(VideoRange, {
    ref: progressRef,
    min: "0",
    max: "100",
    step: "1",
    value: progress,
    style: {
      width: '70%',
      marginLeft: 20
    },
    onClick: function onClick(e) {
      var el = progressRef.current;
      var video = player.current;
      var percent = e.nativeEvent.offsetX / el.offsetWidth;
      video.currentTime = percent * video.duration;
      setProgress(Math.floor(percent / 100));
    }
  }))));
};

Video.propTypes = {
  name: _propTypes.string,
  src: _propTypes.string.isRequired,
  videoProps: (0, _propTypes.shape)({}),
  style: (0, _propTypes.shape)({})
};
Video.defaultProps = {
  name: '',
  videoProps: {},
  style: {}
};
var _default = Video;
exports["default"] = _default;