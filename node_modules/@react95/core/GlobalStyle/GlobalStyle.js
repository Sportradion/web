"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _MSSansSerif = _interopRequireDefault(require("../shared/assets/font/MS-Sans-Serif.woff2"));

var _MSSansSerif2 = _interopRequireDefault(require("../shared/assets/font/MS-Sans-Serif.woff"));

var _MSSansSerif3 = _interopRequireDefault(require("../shared/assets/font/MS-Sans-Serif.ttf"));

var _MSSansSerif4 = _interopRequireDefault(require("../shared/assets/font/MS-Sans-Serif.eot"));

var _React95VideoNumbers = _interopRequireDefault(require("../shared/assets/font/React95Video-Numbers.woff2"));

var _React95VideoNumbers2 = _interopRequireDefault(require("../shared/assets/font/React95Video-Numbers.woff"));

var _React95VideoNumbers3 = _interopRequireDefault(require("../shared/assets/font/React95Video-Numbers.ttf"));

var _React95VideoNumbers4 = _interopRequireDefault(require("../shared/assets/font/React95Video-Numbers.eot"));

var _dropdown = _interopRequireDefault(require("../shared/assets/pattern/dropdown.png"));

var _upcaret = _interopRequireDefault(require("../shared/assets/pattern/upcaret.svg"));

var _downcaret = _interopRequireDefault(require("../shared/assets/pattern/downcaret.svg"));

var _leftcaret = _interopRequireDefault(require("../shared/assets/pattern/leftcaret.svg"));

var _rightcaret = _interopRequireDefault(require("../shared/assets/pattern/rightcaret.svg"));

var _Arrow = _interopRequireDefault(require("../shared/assets/cursors/Arrow.png"));

var _Text = _interopRequireDefault(require("../shared/assets/cursors/Text.png"));

var _VText = _interopRequireDefault(require("../shared/assets/cursors/VText.png"));

var _Help = _interopRequireDefault(require("../shared/assets/cursors/Help.png"));

var _Cross = _interopRequireDefault(require("../shared/assets/cursors/Cross.png"));

var _HandPointer = _interopRequireDefault(require("../shared/assets/cursors/HandPointer.png"));

var _AppStarting = _interopRequireDefault(require("../shared/assets/cursors/AppStarting.png"));

var _Wait = _interopRequireDefault(require("../shared/assets/cursors/Wait.png"));

var _Link = _interopRequireDefault(require("../shared/assets/cursors/Link.png"));

var _Copy = _interopRequireDefault(require("../shared/assets/cursors/Copy.png"));

var _Move = _interopRequireDefault(require("../shared/assets/cursors/Move.png"));

var _Circle = _interopRequireDefault(require("../shared/assets/cursors/Circle.png"));

var _NO = _interopRequireDefault(require("../shared/assets/cursors/NO.png"));

var _Hand = _interopRequireDefault(require("../shared/assets/cursors/Hand.png"));

var _Handsqueezed = _interopRequireDefault(require("../shared/assets/cursors/Handsqueezed.png"));

var _ColRezise = _interopRequireDefault(require("../shared/assets/cursors/ColRezise.png"));

var _RowResize = _interopRequireDefault(require("../shared/assets/cursors/RowResize.png"));

var _UpArrow = _interopRequireDefault(require("../shared/assets/cursors/UpArrow.png"));

var _RightArrow = _interopRequireDefault(require("../shared/assets/cursors/RightArrow.png"));

var _DownArrow = _interopRequireDefault(require("../shared/assets/cursors/DownArrow.png"));

var _LeftArrow = _interopRequireDefault(require("../shared/assets/cursors/LeftArrow.png"));

var _UpDownArrow = _interopRequireDefault(require("../shared/assets/cursors/UpDownArrow.png"));

var _LeftRight = _interopRequireDefault(require("../shared/assets/cursors/LeftRight.png"));

var _UpRightArrow = _interopRequireDefault(require("../shared/assets/cursors/UpRightArrow.png"));

var _UpLeftArrow = _interopRequireDefault(require("../shared/assets/cursors/UpLeftArrow.png"));

var _DownRightArrow = _interopRequireDefault(require("../shared/assets/cursors/DownRightArrow.png"));

var _DownLeftArrow = _interopRequireDefault(require("../shared/assets/cursors/DownLeftArrow.png"));

var _AngleUpRight = _interopRequireDefault(require("../shared/assets/cursors/AngleUpRight.png"));

var _AngleUpLeft = _interopRequireDefault(require("../shared/assets/cursors/AngleUpLeft.png"));

var _ZoomIn = _interopRequireDefault(require("../shared/assets/cursors/ZoomIn.png"));

var _ZoomOut = _interopRequireDefault(require("../shared/assets/cursors/ZoomOut.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: 'MS Sans Serif';\n    src: url('", "');\n    src: url('", "') format('woff2'),\n         url('", "') format('woff'),\n         url('", "') format('truetype'),\n         url('", ".eot?#iefix') format('embedded-opentype');\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'React95Video-Numbers';\n    src: url('", "');\n    src: url('", "') format('woff2'),\n         url('", "') format('woff'),\n         url('", "') format('truetype'),\n         url('", ".eot?#iefix') format('embedded-opentype');\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  body {\n    background-color: #5aa;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    font-size: 12px;\n  }\n\n  * {\n    font-family: 'MS Sans Serif';\n    box-sizing: border-box;\n  }\n\n  ::-webkit-scrollbar {\n    width: 15px;\n    height: 15px;\n    background: url('", "');\n    background-size: 3px 3px;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background-color: transparent;\n  }\n\n  ::-webkit-scrollbar-button {\n    width: 15px;\n    height: 15px;\n    background-color: #c3c7cb;\n    box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e;\n    border-right: 2px solid black;\n    border-bottom: 2px solid black;\n\n    background-size: 10px 10px;\n    background-repeat: no-repeat;\n    background-position: center center;\n  }\n\n  ::-webkit-scrollbar-button:end:decrement,\n  ::-webkit-scrollbar-button:start:increment {\n    display: none;\n  }\n\n  ::-webkit-scrollbar-button:vertical {\n    background-size: 6px 3px;\n  }\n\n  ::-webkit-scrollbar-button:horizontal {\n    background-size: 3px 6px;\n  }\n\n  ::-webkit-scrollbar-button:vertical:start:decrement {\n    background-image: url('", "');\n  }\n\n  ::-webkit-scrollbar-button:vertical:end:increment {\n    background-image: url('", "');\n  }\n\n  ::-webkit-scrollbar-button:horizontal:start:decrement {\n    background-image: url('", "');\n  }\n\n  ::-webkit-scrollbar-button:horizontal:end:increment {\n    background-image: url('", "');\n  }\n\n  ::-webkit-resizer {\n    /* TODO? */\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #c3c7cb;\n    box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e;\n    border-right: 2px solid black;\n    border-bottom: 2px solid black;\n  }\n\n  html, .auto, *       { cursor: url('", "'), auto; }\n  .default             { cursor: url('", "'), default; }\n  .none                { cursor: none; }\n  .help                { cursor: url('", "'), help; }\n  .pointer, :any-link  { cursor: url('", "'), pointer; }\n  .progress            { cursor: url('", "'), progress; }\n  .wait                { cursor: url('", "'), wait; }\n  .crosshair           { cursor: url('", "'), crosshair; }\n  .text                { cursor: url('", "'), text; }\n  .vertical-text       { cursor: url('", "'), vertical-text; }\n  .alias               { cursor: url('", "'), alias; }\n  .copy                { cursor: url('", "'), copy; }\n  .move                { cursor: url('", "'), move; }\n  .no-drop             { cursor: url('", "'), no-drop; }\n  .not-allowed         { cursor: url('", "'), not-allowed; }\n  .grab                { cursor: url('", "'), grab; }\n  .grabbing            { cursor: url('", "'), grabbing; }\n  .col-resize          { cursor: url('", "'), col-resize; }\n  .row-resize          { cursor: url('", "'), row-resize; }\n  .n-resize            { cursor: url('", "'), n-resize; }\n  .e-resize            { cursor: url('", "'), e-resize; }\n  .s-resize            { cursor: url('", "'), s-resize; }\n  .w-resize            { cursor: url('", "'), w-resize; }\n  .ns-resize           { cursor: url('", "'), ns-resize; }\n  .ew-resize           { cursor: url('", "'), ew-resize; }\n  .ne-resize           { cursor: url('", "'), ne-resize; }\n  .nw-resize           { cursor: url('", "'), nw-resize; }\n  .se-resize           { cursor: url('", "'), se-resize; }\n  .sw-resize           { cursor: url('", "'), sw-resize; }\n  .nesw-resize         { cursor: url('", "'), nesw-resize; }\n  .nwse-resize         { cursor: url('", "'), nwse-resize; }\n  .zoom-in             { cursor: url('", "'), zoom-in; }\n  .zoom-out            { cursor: url('", "'), zoom-out; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), _MSSansSerif4["default"], _MSSansSerif["default"], _MSSansSerif2["default"], _MSSansSerif3["default"], _MSSansSerif4["default"], _React95VideoNumbers4["default"], _React95VideoNumbers["default"], _React95VideoNumbers2["default"], _React95VideoNumbers3["default"], _React95VideoNumbers4["default"], _dropdown["default"], _upcaret["default"], _downcaret["default"], _leftcaret["default"], _rightcaret["default"], _Arrow["default"], _Arrow["default"], _Help["default"], _HandPointer["default"], _AppStarting["default"], _Wait["default"], _Cross["default"], _Text["default"], _VText["default"], _Link["default"], _Copy["default"], _Move["default"], _Circle["default"], _NO["default"], _Hand["default"], _Handsqueezed["default"], _ColRezise["default"], _RowResize["default"], _UpArrow["default"], _RightArrow["default"], _DownArrow["default"], _LeftArrow["default"], _UpDownArrow["default"], _LeftRight["default"], _UpRightArrow["default"], _UpLeftArrow["default"], _DownRightArrow["default"], _DownLeftArrow["default"], _AngleUpRight["default"], _AngleUpLeft["default"], _ZoomIn["default"], _ZoomOut["default"]);
var _default = GlobalStyle;
exports["default"] = _default;