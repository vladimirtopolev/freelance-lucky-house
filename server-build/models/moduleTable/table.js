"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TableColumn = require('./tableColum');

var TableRow = require('./tableRow');

var tableSchema = Schema({
  name: String,
  title: String,
  headers: [{
    type: Schema.Types.ObjectId,
    ref: TableColumn.modelName
  }],
  rows: [{
    type: Schema.Types.ObjectId,
    ref: TableRow.modelName
  }],
  uiConfig: mongoose.Mixed,
  adminConfig: mongoose.Mixed
});
module.exports = mongoose.model('Table', tableSchema);