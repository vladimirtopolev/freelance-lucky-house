"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _express2 = _interopRequireDefault(require("./boot/express"));

var app = (0, _express.default)();
(0, _express2.default)(app, __dirname);
var _default = app;
exports.default = _default;