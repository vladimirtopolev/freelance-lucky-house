"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ordedCallSchema = Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  clientDescriptions: String,
  ownDescriptions: String,
  statusDates: Object,
  status: String,
  isDeleted: Boolean
});
module.exports = mongoose.model('OrderedCall', ordedCallSchema);