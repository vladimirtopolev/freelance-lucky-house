"use strict";

var async = require('async');

var User = require('../models/user');

var Property = require('../models/properties/property');

var Table = require('../models/moduleTable/table');

var TableColumn = require('../models/moduleTable/tableColum');

var TableRow = require('../models/moduleTable/tableRow');

var TableCell = require('../models/moduleTable/tableCell');

var _require = require('../utilities/db'),
    dropTables = _require.dropTables;

module.exports = function (endCallback) {
  return new Promise(function (resolve, reject) {
    async.series([function (cb) {
      return dropTables([User, Property, Table, TableColumn, TableRow, TableCell], cb);
    }], function (err, res) {
      if (endCallback) {
        endCallback(err, res);
      }

      if (err) {
        reject(err);
      } else {
        console.log('Script applied succesfully');
        resolve(res);
      }
    });
  });
};