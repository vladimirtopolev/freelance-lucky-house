"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _config = _interopRequireDefault(require("config"));

var _lodash = _interopRequireDefault(require("lodash"));

var _googleAnalitics = _interopRequireDefault(require("./googleAnalitics"));

var _requestTemplates = _interopRequireDefault(require("./requestTemplates"));

var _config$get = _config.default.get('googleAnalitics'),
    viewId = _config$get.viewId,
    privateKey = _config$get.privateKey,
    clientEmail = _config$get.clientEmail;

var googleAnalitics = new _googleAnalitics.default(clientEmail, privateKey, viewId);

function getReport(req, res) {
  var reportName = req.params.reportName;

  if (!_requestTemplates.default[reportName]) {
    return res.status(404).json({
      error: "Cannot fins template with name ".concat(reportName)
    });
  }

  var dateRanges = [{
    startDate: _lodash.default.get(req, 'query.startDate', '360daysAgo'),
    endDate: _lodash.default.get(req, 'query.endDate', 'today')
  }];
  var reportRequests = (0, _objectSpread2.default)({
    dateRanges: dateRanges
  }, _requestTemplates.default[reportName]);
  googleAnalitics.getData(reportRequests).then(function (result) {
    res.json(result);
  }).catch(function (err) {
    res.status(505).json(err);
  });
}

var _default = function _default(app) {
  app.route('/api/google-analytics/:reportName').get(getReport);
};

exports.default = _default;