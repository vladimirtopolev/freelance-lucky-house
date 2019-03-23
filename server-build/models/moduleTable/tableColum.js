"use strict";

var mongoose = require('mongoose');

var tableColumnSchema = mongoose.Schema({
  type: String,
  name: String,
  internalName: String,
  properties: Object,
  order: Number
});
module.exports = mongoose.model('TableColumn', tableColumnSchema);