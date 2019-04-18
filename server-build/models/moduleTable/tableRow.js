"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var tableRowSchema = Schema({
  cells: [{
    type: Schema.Types.ObjectId,
    ref: 'TableCell'
  }],
  table: {
    type: Schema.Types.ObjectId,
    ref: 'Table'
  }
});
module.exports = mongoose.model('TableRow', tableRowSchema);