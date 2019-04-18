"use strict";

var async = require('async');

function saveItem(SchemaConstructor, item, cb) {
  var newItem = new SchemaConstructor(item);
  newItem.save(function (err, savedItem) {
    return cb(err, savedItem);
  });
}

function saveItems(SchemaConstructor, items, endCallback) {
  async.map(items, function (item, cb) {
    return saveItem(SchemaConstructor, item, cb);
  }, function (err, results) {
    return endCallback(err, results);
  });
}

function dropTable(SchemaConstructor, endCallback) {
  SchemaConstructor.deleteMany({}, function (err) {
    return endCallback(err);
  });
}

function dropTables(SchemaConstructors, endCallback) {
  async.each(SchemaConstructors, function (SchemaConstructor, cb) {
    return dropTable(SchemaConstructor, cb);
  }, function (err) {
    endCallback(err);
  });
}

module.exports = {
  saveItem: saveItem,
  saveItems: saveItems,
  dropTable: dropTable,
  dropTables: dropTables
};