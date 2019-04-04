"use strict";

var async = require('async');

var _require = require('../../utilities/db'),
    dropTables = _require.dropTables,
    saveItem = _require.saveItem,
    saveItems = _require.saveItems;

var User = require('../../models/user');

var USERS = require('../users/constants');

module.exports = function (endCallback) {
  async.series([function (cb) {
    return dropTables([User], cb);
  }, function (cb) {
    return saveItems(User, USERS, cb);
  }], function (err, res) {
    endCallback(err);
  });
};