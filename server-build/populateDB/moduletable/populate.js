"use strict";

var mongoose = require('mongoose');

var async = require('async');

var ObjectId = mongoose.Types.ObjectId;

var populateTable = require('./populateTable');

var bestWorkTable = require('./bestwork/table');

module.exports = function (endCallback) {
  async.series([// custom tables
  function (cb) {
    return populateTable(bestWorkTable, cb);
  }], function (err, res) {
    endCallback(err);
  });
};