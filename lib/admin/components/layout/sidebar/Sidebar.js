"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _UserView = _interopRequireDefault(require("./UserView"));

var _Navbar = _interopRequireDefault(require("./Navbar"));

var _SidebarModule = _interopRequireDefault(require("./Sidebar.module.scss"));

var _default = function _default() {
  return _react.default.createElement("nav", {
    className: _SidebarModule.default.Sidebar
  }, _react.default.createElement(_UserView.default, null), _react.default.createElement(_Navbar.default, null));
};

exports.default = _default;