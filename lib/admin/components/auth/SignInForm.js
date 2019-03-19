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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactForm = require("react-form");

var _reactRouter = require("react-router");

var SignInForm =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SignInForm, _Component);

  function SignInForm() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, SignInForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SignInForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSubmit", function (user) {
      _this.props.signIn(user).then(function () {
        _this.props.history.goBack();
      });
    });
    return _this;
  }

  (0, _createClass2.default)(SignInForm, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactForm.Form, {
        onSubmit: this.onSubmit
      }, function (formApi) {
        return _react.default.createElement("form", {
          onSubmit: formApi.submitForm
        }, _react.default.createElement("div", {
          className: "form-group"
        }, _react.default.createElement("label", null, "\u041B\u043E\u0433\u0438\u043D"), _react.default.createElement(_reactForm.Text, {
          className: "form-control",
          name: "identifier",
          field: "identifier"
        })), _react.default.createElement("div", {
          className: "form-group"
        }, _react.default.createElement("label", null, "\u041F\u0430\u0440\u043E\u043B\u044C"), _react.default.createElement(_reactForm.Text, {
          className: "form-control",
          name: "password",
          field: "password",
          type: "password"
        })), _react.default.createElement("button", {
          className: "btn btn-primary"
        }, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F"));
      });
    }
  }]);
  return SignInForm;
}(_react.Component);

SignInForm.propTypes = {
  signIn: _propTypes.default.func.isRequired
};

var _default = (0, _reactRouter.withRouter)(SignInForm);

exports.default = _default;