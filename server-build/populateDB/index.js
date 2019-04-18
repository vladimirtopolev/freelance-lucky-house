"use strict";

var async = require('async');

var populateTable = require('./moduletable/populate');

var populateProperties = require('./properties/populate');

var populateUsers = require('./users/populate');

module.exports = function (endCallback) {
  return new Promise(function (resolve, reject) {
    async.series([function (cb) {
      return populateTable(cb);
    }, function (cb) {
      return populateProperties(cb);
    }, function (cb) {
      return populateUsers(cb);
    }], function (err, res) {
      if (endCallback) {
        endCallback(err, res);
        resolve();
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