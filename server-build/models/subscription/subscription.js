"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var subscriptionSchema = Schema({
  email: String,
  isDeleted: Boolean
});
module.exports = mongoose.model('Subscription', subscriptionSchema);