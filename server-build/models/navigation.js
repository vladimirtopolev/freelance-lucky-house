"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose.default.Schema;
var NavigationSchema = new Schema({
  level: Number,
  leftKey: Number,
  rightKey: Number,
  name: String,
  url: String
});

var _default = _mongoose.default.model('Navigation', NavigationSchema);

exports.default = _default;