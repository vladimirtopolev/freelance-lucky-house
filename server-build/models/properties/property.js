"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var property = Schema({
  type: String,
  name: String,
  internalName: String,
  order: Number,
  value: Schema.Types.Mixed
});
module.exports = mongoose.model('Property', property);