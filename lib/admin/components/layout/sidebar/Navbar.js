"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavbarModule = _interopRequireDefault(require("./Navbar.module.scss"));

var _CommonUserViewModule = _interopRequireDefault(require("./CommonUserView.module.scss"));

var _NavbarItem = _interopRequireDefault(require("./NavbarItem"));

var _constants = require("../../../constants");

var links = [{
  iconClassName: 'fa fa-table link__icon',
  title: 'Администрирование',
  href: '/admin'
}, {
  iconClassName: 'fa fa-table link__icon',
  title: 'Общая информация',
  href: "/".concat(_constants.ADMIN_URL, "/properties")
}, {
  iconClassName: 'fa fa-table link__icon',
  title: 'Таблицы',
  href: '#',
  links: [{
    iconClassName: 'fa fa-table link__icon',
    title: 'Лучшие работы',
    href: "/".concat(_constants.ADMIN_URL, "/").concat(_constants.ADMIN_TABLE_MODULE_URL, "/bestwork")
  }, {
    iconClassName: 'fa fa-table link__icon',
    title: 'Партнеры',
    href: "/".concat(_constants.ADMIN_URL, "/").concat(_constants.ADMIN_TABLE_MODULE_URL, "/partners")
  }]
}];

var _default = function _default() {
  return _react.default.createElement("div", {
    className: _NavbarModule.default.Navbar
  }, _react.default.createElement("div", {
    className: _NavbarModule.default.Navbar__title
  }, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E"), _react.default.createElement("div", {
    className: _NavbarModule.default.MainNavbar__menu
  }, _react.default.createElement("ul", {
    className: _CommonUserViewModule.default.navbar
  }, links.map(function (item, i) {
    return _react.default.createElement(_NavbarItem.default, {
      item: item,
      key: i
    });
  }))));
};

exports.default = _default;