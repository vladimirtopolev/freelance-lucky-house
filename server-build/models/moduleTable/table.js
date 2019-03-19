"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var tableSchema = Schema({
  name: String,
  title: String,
  headers: [{
    type: Schema.Types.ObjectId,
    ref: 'TableColumn'
  }],
  rows: [{
    type: Schema.Types.ObjectId,
    ref: 'TableRow'
  }],
  uiConfig: mongoose.Mixed,
  adminConfig: mongoose.Mixed
});
module.exports = mongoose.model('Table', tableSchema);