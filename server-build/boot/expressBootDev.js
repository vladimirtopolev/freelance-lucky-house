"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));

var _webpackHotMiddleware = _interopRequireDefault(require("webpack-hot-middleware"));

var _webpack2 = _interopRequireDefault(require("react-scripts/config/webpack.config"));

var _constants = require("../constants");

var _path = _interopRequireDefault(require("path"));

var _default = function _default(app, dirname) {
  // compile client-side on the fly and detect changes
  var webpackConfig = (0, _webpack2.default)(_constants.AVAILABLE_ENVIROMENTS.DEVELOPMENT);

  _lodash.default.set(webpackConfig, 'output.path', dirname);

  var compiler = (0, _webpack.default)(webpackConfig);
  app.use((0, _webpackDevMiddleware.default)(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }));
  app.use((0, _webpackHotMiddleware.default)(compiler));
  app.get('/*', function (req, res, next) {
    compiler.outputFileSystem.readFile(_path.default.join(dirname, 'index.html'), function (err, result) {
      if (err) {
        return next(err);
      }

      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
};

exports.default = _default;