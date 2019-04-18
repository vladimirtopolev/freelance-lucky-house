"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _db = _interopRequireDefault(require("./boot/db"));

var _app = _interopRequireDefault(require("./app"));

var PORT = process.env.PORT || 4000;

_db.default.open().then(function () {
  _app.default.listen(PORT, function () {
    return console.log("Listening on ".concat(PORT));
  });
}).catch(function (err) {
  return console.log(err);
});