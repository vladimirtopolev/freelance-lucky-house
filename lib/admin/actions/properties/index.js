"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changePropertyValue = exports.fetchProperties = void 0;

var api = _interopRequireWildcard(require("../../api"));

var _type = require("./type");

var fetchProperties = function fetchProperties() {
  return function (dispatch) {
    return api.getProperties().then(function (res) {
      dispatch({
        type: _type.FETCH_PROPERTIES,
        payload: res.data
      });
    });
  };
};

exports.fetchProperties = fetchProperties;

var changePropertyValue = function changePropertyValue(propName, value) {
  return function (dispatch) {
    return api.changePropertyValue(propName, value).then(function (res) {
      dispatch({
        type: _type.CHANGE_PROPERTY_VALUE,
        payload: res.data
      });
    });
  };
};

exports.changePropertyValue = changePropertyValue;