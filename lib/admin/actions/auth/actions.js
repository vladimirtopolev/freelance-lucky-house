"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.signIn = exports.setCurrentUser = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _type = require("./type");

var _setAuthToken = _interopRequireDefault(require("../../utilities/setAuthToken"));

var setCurrentUser = function setCurrentUser(token) {
  return {
    type: _type.SET_CURRENT_USER,
    token: token
  };
};

exports.setCurrentUser = setCurrentUser;

var signIn = function signIn(user) {
  return function (dispatch) {
    return _axios.default.post('/api/signin', user).then(function (res) {
      var token = res.data.token;
      localStorage.setItem('jwtToken', token);
      (0, _setAuthToken.default)(token);
      dispatch(setCurrentUser(token));
      return token;
    });
  };
};

exports.signIn = signIn;

var logout = function logout() {
  localStorage.removeItem('jwtToken');
  (0, _setAuthToken.default)();
  return {
    type: _type.LOGOUT
  };
};

exports.logout = logout;