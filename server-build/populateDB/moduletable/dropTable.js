"use strict";

var Table = require('../../models/moduleTable/table');

var TableColumn = require('../../models/moduleTable/tableColum');

var TableRow = require('../../models/moduleTable/tableRow');

var TableCell = require('../../models/moduleTable/tableCell');

module.exports = function (tableName) {
  return new Promise(function (resolve, reject) {
    Table.deleteOne({
      name: tableName
    }).exec(function (err) {
      if (err) {
        return reject(err);
      }

      resolve();
    });
  });
};