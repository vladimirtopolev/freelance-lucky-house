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

var _reactRedux = require("react-redux");

var _classnames = _interopRequireDefault(require("classnames"));

var _UserViewModule = _interopRequireDefault(require("./UserView.module.scss"));

var _CommonUserViewModule = _interopRequireDefault(require("./CommonUserView.module.scss"));

var _Image = _interopRequireDefault(require("../../common/Image"));

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

var UserView = function UserView(_ref) {
  var auth = _ref.auth;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpenNavbar = _useState2[0],
      toggleNavbar = _useState2[1];

  return _react.default.createElement("div", {
    className: _UserViewModule.default.UserView
  }, _react.default.createElement("div", {
    className: _UserViewModule.default.UserView__header
  }, _react.default.createElement("div", {
    className: _UserViewModule.default.UserView__img
  }, _react.default.createElement(_Image.default, {
    src: auth.logo,
    alt: "User Photo",
    fallbackSrc: require('../../../../img/no-user.png')
  })), _react.default.createElement("div", {
    className: _UserViewModule.default.UserView__description
  }, _react.default.createElement("div", {
    className: _UserViewModule.default.UserView__greeting
  }, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C,"), _react.default.createElement("div", {
    className: _UserViewModule.default.UserView__name
  }, "".concat(auth.firstName, " ").concat(auth.lastName))), _react.default.createElement("div", {
    className: _UserViewModule.default.UserView__chevron
  }, _react.default.createElement("i", {
    className: (0, _classnames.default)('fa', {
      'fa-chevron-right': !isOpenNavbar,
      'fa-chevron-down': isOpenNavbar
    }),
    onClick: function onClick() {
      return toggleNavbar(!isOpenNavbar);
    }
  }))), _react.default.createElement("div", {
    className: (0, _classnames.default)(_UserViewModule.default.UserView__navbar, (0, _defineProperty2.default)({}, _UserViewModule.default.UserView__navbar_open, isOpenNavbar))
  }, _react.default.createElement("ul", {
    className: _CommonUserViewModule.default.navbar
  }, _react.default.createElement("li", {
    className: _CommonUserViewModule.default.navbar__item
  }, _react.default.createElement("a", {
    href: "#",
    className: _CommonUserViewModule.default.navbar__link
  }, _react.default.createElement("i", {
    className: (0, _classnames.default)(_CommonUserViewModule.default.navbar__icon, 'fas fa-edit')
  }), "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")), _react.default.createElement("li", {
    className: _CommonUserViewModule.default.navbar__item
  }, _react.default.createElement("a", {
    href: "#",
    className: _CommonUserViewModule.default.navbar__link
  }, _react.default.createElement("i", {
    className: (0, _classnames.default)(_CommonUserViewModule.default.navbar__icon, 'fas fa-sign-out-alt')
  }), "\u0412\u044B\u0439\u0442\u0438")))));
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(UserView);

exports.default = _default;