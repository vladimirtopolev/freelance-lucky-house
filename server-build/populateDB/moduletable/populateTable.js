"use strict";

var Table = require('../../models/moduleTable/table');

var TableColumn = require('../../models/moduleTable/tableColum');

var TableRow = require('../../models/moduleTable/tableRow');

var TableCell = require('../../models/moduleTable/tableCell');

var async = require('async');

var _require = require('../../utilities/db'),
    saveItem = _require.saveItem,
    saveItems = _require.saveItems;

module.exports = function (tableInfo, endCallback) {
  return new Promise(function (resolve, reject) {
    var table = tableInfo.TABLE;
    var columns = tableInfo.TABLE_COLUMNS;
    var rows = tableInfo.TABLE_ROWS;
    var cells = rows.reduce(function (cells, row) {
      return cells.concat(row.cells);
    }, []);
    async.series([function (cb) {
      return saveItems(TableColumn, columns, cb);
    }, function (cb) {
      return saveItems(TableCell, cells, cb);
    }, function (cb) {
      return saveItems(TableRow, rows, cb);
    }, function (cb) {
      var tableItem = {
        _id: table.id,
        name: table.name,
        title: table.title,
        headers: columns.map(function (col) {
          return col._id;
        }),
        rows: rows.map(function (raw) {
          return raw._id;
        }),
        uiConfig: table.uiConfig,
        adminConfig: table.adminConfig
      };
      saveItem(Table, tableItem, cb);
    }], function (err, res) {
      if (endCallback) {
        endCallback(err);
        resolve();
      } else {
        if (err) {
          reject(err);
        } else {
          console.log('Script applied succesfully');
          resolve(res);
        }
      }
    });
  });
};