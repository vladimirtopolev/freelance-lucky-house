"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _constants = require("../../constants");

var _LayoutModule = _interopRequireDefault(require("./Layout.module.scss"));

var _Sidebar = _interopRequireDefault(require("./sidebar/Sidebar"));

var _Properties = _interopRequireDefault(require("../pages/properties/Properties"));

var _ModuleTable = _interopRequireDefault(require("../pages/moduleTable/ModuleTable"));

var _default = function _default() {
  return _react.default.createElement("div", {
    className: _LayoutModule.default.layout
  }, _react.default.createElement("div", {
    className: _LayoutModule.default.layout__header
  }), _react.default.createElement("div", {
    className: _LayoutModule.default.layout__content
  }, _react.default.createElement(_Sidebar.default, null), _react.default.createElement("div", {
    className: _LayoutModule.default.layout__pages
  }, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    path: "/".concat(_constants.ADMIN_URL, "/properties"),
    component: _Properties.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/".concat(_constants.ADMIN_URL, "/").concat(_constants.ADMIN_TABLE_MODULE_URL),
    component: _ModuleTable.default
  })))));
};

exports.default = _default;