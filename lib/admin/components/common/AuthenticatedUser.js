"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _constants = require("../../constants");

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var _default = function _default(OriginComponent) {
  var AuthenticatedUser =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(AuthenticatedUser, _Component);

    function AuthenticatedUser() {
      (0, _classCallCheck2.default)(this, AuthenticatedUser);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AuthenticatedUser).apply(this, arguments));
    }

    (0, _createClass2.default)(AuthenticatedUser, [{
      key: "render",
      value: function render() {
        if (this.props.auth) {
          return _react.default.createElement(OriginComponent, null);
        } else {
          this.props.history.push("/".concat(_constants.ADMIN_URL, "/signin"));
          return _react.default.createElement("div", null, "\u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");
        }
      }
    }]);
    return AuthenticatedUser;
  }(_react.Component);

  return (0, _reactRedux.connect)(mapStateToProps)(AuthenticatedUser);
};

exports.default = _default;