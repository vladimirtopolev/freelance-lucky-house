"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressFormData = _interopRequireDefault(require("express-form-data"));

var _expressBootDev = _interopRequireDefault(require("./expressBootDev"));

var _routes = _interopRequireDefault(require("../routes"));

var _constants = require("../constants");

var _default = function _default(app, dirname) {
  app.use(_express.default.static(_path.default.join(dirname, '..', 'build'))); // parse application/json and look for raw text

  app.use(_bodyParser.default.json());
  app.use(_bodyParser.default.urlencoded({
    extended: true
  }));
  app.use(_bodyParser.default.text());
  app.use(_bodyParser.default.json({
    type: 'application/json'
  }));
  app.use(_expressFormData.default.parse()); // initialize routers

  (0, _routes.default)(app);

  if (process.env.NODE_ENV === _constants.AVAILABLE_ENVIROMENTS.DEVELOPMENT) {
    (0, _expressBootDev.default)(app, dirname);
  } else {
    app.get('/*', function (req, res) {
      console.log(req.originalUrl);
      res.sendFile(_path.default.join(dirname, '..', 'build', 'index.html'));
    });
  }
};

exports.default = _default;