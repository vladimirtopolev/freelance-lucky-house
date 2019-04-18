"use strict";

var async = require('async');

var _require = require('../../utilities/db'),
    dropTables = _require.dropTables,
    saveItems = _require.saveItems;

var Property = require('../../models/properties/property');

var PROPERTIES = require('./constants');

module.exports = function (endCallback) {
  async.series([function (cb) {
    return dropTables([Property], cb);
  }, function (cb) {
    return saveItems(Property, PROPERTIES, cb);
  }], function (err, res) {
    endCallback(err);
  });
};