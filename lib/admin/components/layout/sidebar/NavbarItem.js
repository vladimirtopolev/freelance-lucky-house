"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _classnames = _interopRequireDefault(require("classnames"));

var _CommonUserViewModule = _interopRequireDefault(require("./CommonUserView.module.scss"));

var _reactRouterDom = require("react-router-dom");

function NavbarItem(_ref) {
  var _cn;

  var item = _ref.item;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpenSubNav = _useState2[0],
      toggleSubNav = _useState2[1];

  var iconClassName = item.iconClassName,
      title = item.title,
      links = item.links,
      href = item.href;
  var existsSubNav = _lodash.default.isArray(links) && links.length > 0;

  var onClickEvent = function onClickEvent(ev) {
    if (existsSubNav) {
      ev.preventDefault();
      toggleSubNav(!isOpenSubNav);
    }
  };

  return _react.default.createElement("li", {
    className: (0, _classnames.default)(_CommonUserViewModule.default.navbar__item, (_cn = {}, (0, _defineProperty2.default)(_cn, _CommonUserViewModule.default.navbar__item_chevron, existsSubNav), (0, _defineProperty2.default)(_cn, _CommonUserViewModule.default.navbar__item_open, isOpenSubNav), _cn))
  }, _react.default.createElement(_reactRouterDom.Link, {
    to: href,
    className: _CommonUserViewModule.default.navbar__link,
    onClick: onClickEvent
  }, _react.default.createElement("span", {
    className: (0, _classnames.default)(_CommonUserViewModule.default.navbar__icon, iconClassName)
  }), title), existsSubNav && _react.default.createElement("ul", {
    className: (0, _classnames.default)(_CommonUserViewModule.default.navbar, _CommonUserViewModule.default.navbar_secondary, (0, _defineProperty2.default)({}, _CommonUserViewModule.default.navbar_open, isOpenSubNav))
  }, links.map(function (item, i) {
    return _react.default.createElement(NavbarItem, {
      item: item,
      key: i
    });
  })));
}

var _default = NavbarItem;
exports.default = _default;