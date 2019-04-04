"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("config"));

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _properties = _interopRequireDefault(require("./properties"));

var _moduleTable = _interopRequireDefault(require("./moduleTable"));

var _auth = _interopRequireDefault(require("./auth"));

var _navigation = _interopRequireDefault(require("./navigation"));

var _orderedCalls = _interopRequireDefault(require("./orderedCalls"));

var _subscription = _interopRequireDefault(require("./subscription"));

var cloudinaryConfig = _config.default.get('cloudinary');

_cloudinary.default.config({
  cloud_name: cloudinaryConfig.cloudName,
  api_key: cloudinaryConfig.apiKey,
  api_secret: cloudinaryConfig.apiSecret
});

function saveCloudinaryImage(req, res) {
  var values = Object.values(req.files);
  var promises = values.map(function (image) {
    return _cloudinary.default.uploader.upload(image.path);
  });
  Promise.all(promises).then(function (results) {
    return res.json(results);
  }).catch(function (err) {
    res.status(500).json({
      error: err
    });
  });
}

var _default = function _default(app) {
  (0, _properties.default)(app);
  (0, _moduleTable.default)(app);
  (0, _auth.default)(app);
  (0, _navigation.default)(app);
  (0, _orderedCalls.default)(app);
  (0, _subscription.default)(app);
  app.route('/api/image-upload').post(saveCloudinaryImage);
};

exports.default = _default;