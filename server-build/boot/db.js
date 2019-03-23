"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("config"));

var _constants = require("../constants");

var _populateDB = _interopRequireDefault(require("../populateDB"));

var dbConfig = _config.default.get('dbConfig');

function open() {
  return new Promise(function (resolve, reject) {
    _mongoose.default.connect(dbConfig.host, {
      dbName: dbConfig.dbName
    }, function (err, res) {
      if (err) return reject(err);
      console.log("Connection to DB is successful: ".concat(dbConfig.host));
      resolve();
    });
  });
}

module.exports.open = open;