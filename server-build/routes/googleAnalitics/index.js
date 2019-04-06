"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("config"));

var _GoogleAnalitics = _interopRequireDefault(require("./GoogleAnalitics"));

var _config$get = _config.default.get('googleAnalitics'),
    viewId = _config$get.viewId,
    privateKey = _config$get.privateKey,
    clientEmail = _config$get.clientEmail;

var googleAnalitics = new _GoogleAnalitics.default(clientEmail, privateKey, viewId);

function getAnalitics(req, res) {
  var newUsersRequest = {};
  googleAnalitics.getData([{
    dateRanges: [{
      startDate: '30daysAgo',
      endDate: 'today'
    }],
    metrics: [{
      expression: 'ga:users'
    }],
    dimensions: [{
      name: 'ga:userType'
    }, {
      name: 'ga:country'
    }]
  }]).then(function (result) {
    console.log('SUCCESS');
    res.json(result);
  }).catch(function (err) {
    console.log('ERROR');
    res.json(err);
  });
}

var _default = function _default(app) {
  app.route('/api/googleanalitics').get(getAnalitics);
};

exports.default = _default;