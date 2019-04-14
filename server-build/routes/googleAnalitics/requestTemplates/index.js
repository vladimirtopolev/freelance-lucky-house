"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _usersByType = _interopRequireDefault(require("./usersByType"));

var _usersByCountry = _interopRequireDefault(require("./usersByCountry"));

var _usersByCity = _interopRequireDefault(require("./usersByCity"));

var _usersByAge = _interopRequireDefault(require("./usersByAge"));

var _usersByGeo = _interopRequireDefault(require("./usersByGeo"));

var _usersByBrowserSize = _interopRequireDefault(require("./usersByBrowserSize"));

var _pageViewsByPagePath = _interopRequireDefault(require("./pageViewsByPagePath"));

var _sessionsByDeviceCategory = _interopRequireDefault(require("./sessionsByDeviceCategory"));

var _sessionsByBrowserSize = _interopRequireDefault(require("./sessionsByBrowserSize"));

var _sessionsByBrowserType = _interopRequireDefault(require("./sessionsByBrowserType"));

var _sessionsByCountry = _interopRequireDefault(require("./sessionsByCountry"));

var _sessionsByUser = _interopRequireDefault(require("./sessionsByUser"));

var _sessionDurationByUser = _interopRequireDefault(require("./sessionDurationByUser"));

var _bouncesByUser = _interopRequireDefault(require("./bouncesByUser"));

var _commonOverview = _interopRequireDefault(require("./commonOverview"));

module.exports = {
  usersByType: _usersByType.default,
  usersByCountry: _usersByCountry.default,
  usersByCity: _usersByCity.default,
  usersByAge: _usersByAge.default,
  usersByGeo: _usersByGeo.default,
  usersByBrowserSize: _usersByBrowserSize.default,
  pageViewsByPagePath: _pageViewsByPagePath.default,
  sessionsByDeviceCategory: _sessionsByDeviceCategory.default,
  sessionsByBrowserSize: _sessionsByBrowserSize.default,
  sessionsByBrowserType: _sessionsByBrowserType.default,
  sessionsByCountry: _sessionsByCountry.default,
  sessionsByUser: _sessionsByUser.default,
  sessionDurationByUser: _sessionDurationByUser.default,
  bouncesByUser: _bouncesByUser.default,
  commonOverview: _commonOverview.default
};