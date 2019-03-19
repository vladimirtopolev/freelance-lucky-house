"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var Image =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Image, _Component);

  function Image() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Image);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Image)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      src: ''
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onError", function () {
      console.log('ssss');

      _this.setState(function (state, props) {
        return (0, _objectSpread2.default)({}, state, {
          src: props.fallbackSrc
        });
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Image, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("img", {
        src: this.state.src,
        alt: this.props.alt,
        onError: this.onError
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props !== state.prevProps) {
        return {
          src: props.src || '',
          prevProps: props
        };
      }
    }
  }]);
  return Image;
}(_react.Component);

exports.default = Image;
(0, _defineProperty2.default)(Image, "defaultProps", {
  fallbackSrc: require('../../../img/noimagefound.jpg')
});