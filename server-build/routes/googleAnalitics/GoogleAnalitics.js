"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _require = require('googleapis'),
    google = _require.google;

var GoogleAnalitycs =
/*#__PURE__*/
function () {
  function GoogleAnalitycs(clientEmail, privateKey, viewId) {
    var scopes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ['https://www.googleapis.com/auth/analytics.readonly'];
    (0, _classCallCheck2.default)(this, GoogleAnalitycs);
    this.viewId = viewId;
    this.jwtClient = new google.auth.JWT(clientEmail, null, privateKey, scopes, null);
    this.authorizedClient = this.jwtClient.authorize();
    this.analitics = google.analyticsreporting('v4');
  }
  /**
   * @param reportRequest {Array<Object>} -
   * Each object should have the following shape:
   * {
   *     dateRanges:     <Object>       (Ex.: {startDate: 'today', endDate: 'today'})
   *     metrics:  Array<Object>  (Ex.: [{expression: 'ga:users'}])
   *     dimensions: Array<Object>  (Ex.: [{name: 'ga:country'}])
   * }
   * */


  (0, _createClass2.default)(GoogleAnalitycs, [{
    key: "getData",
    value: function getData(reportRequests) {
      var _this = this;

      var requests = reportRequests.map(function (_ref) {
        var dateRanges = _ref.dateRanges,
            metrics = _ref.metrics,
            dimensions = _ref.dimensions;
        return {
          viewId: _this.viewId,
          dateRanges: dateRanges,
          metrics: metrics,
          dimensions: dimensions
        };
      });
      var resource = {
        reportRequests: requests
      };
      return this.authorizedClient.then(function () {
        return _this.analitics.reports.batchGet({
          auth: _this.jwtClient,
          resource: resource
        });
      });
    }
  }]);
  return GoogleAnalitycs;
}();

exports.default = GoogleAnalitycs;