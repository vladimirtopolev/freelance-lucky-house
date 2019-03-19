"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserToken = createUserToken;
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _user = _interopRequireDefault(require("../../models/user"));

var _config = _interopRequireDefault(require("config"));

function createUserToken(user) {
  return _jsonwebtoken.default.sign({
    user: user
  }, _config.default.get('authentication.token.secret'));
}

function signIn(req, res) {
  var _req$body = req.body,
      identifier = _req$body.identifier,
      password = _req$body.password;

  _user.default.findOne({
    $or: [{
      username: identifier
    }, {
      email: identifier
    }]
  }, function (err, user) {
    if (err) {
      return res.status(500).json({
        error: 'Server error'
      });
    }

    if (!user) {
      return res.status(401).json({
        error: 'There is no user with such username'
      });
    }

    if (user.checkPassword(password)) {
      return res.json({
        token: createUserToken(user)
      });
    }

    return res.status(401).json({
      error: 'Password is incorrect'
    });
  });
}

var _default = function _default(app) {
  app.route('/api/signin').post(signIn);
};

exports.default = _default;