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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _SignInForm = _interopRequireDefault(require("./SignInForm"));

var _actions = require("../../actions/auth/actions");

var _SignInModule = _interopRequireDefault(require("./SignIn.module.scss"));

var _constants = require("../../constants");

var SignIn =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SignIn, _Component);

  function SignIn() {
    (0, _classCallCheck2.default)(this, SignIn);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SignIn).apply(this, arguments));
  }

  (0, _createClass2.default)(SignIn, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.auth) {
        this.context.router.history.push("/".concat(_constants.ADMIN_URL));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: _SignInModule.default.signin
      }, _react.default.createElement("div", {
        className: _SignInModule.default.signin__container
      }, _react.default.createElement("div", {
        className: _SignInModule.default.signin__logo
      }, _react.default.createElement("img", {
        src: require('../../../img/logo.png')
      })), _react.default.createElement("div", {
        className: _SignInModule.default.signin__form
      }, _react.default.createElement(_SignInForm.default, {
        signIn: this.props.signIn
      }))));
    }
  }]);
  return SignIn;
}(_react.Component);

SignIn.contextTypes = {
  router: _propTypes.default.shape({
    history: _propTypes.default.object.isRequired
  })
};

var _default = (0, _reactRedux.connect)(function (state) {
  return {
    auth: state.auth
  };
}, {
  signIn: _actions.signIn
})(SignIn);

exports.default = _default;