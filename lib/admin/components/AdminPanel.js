"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _constants = require("../constants");

var _SignIn = _interopRequireDefault(require("./auth/SignIn"));

var _AuthenticatedUser = _interopRequireDefault(require("./common/AuthenticatedUser"));

var _Layout = _interopRequireDefault(require("./layout/Layout"));

var _default = function _default() {
  return _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    path: "/".concat(_constants.ADMIN_URL, "/signin"),
    component: _SignIn.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/".concat(_constants.ADMIN_URL),
    component: (0, _AuthenticatedUser.default)(_Layout.default)
  }));
};

exports.default = _default;