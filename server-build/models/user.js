"use strict";

var mongoose = require('mongoose');

var uniqueValidator = require('mongoose-unique-validator');

var bcrypt = require('bcrypt-nodejs');

var config = require('config');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: {
      validator: function validator(val) {
        return true;
      },
      message: 'Email is invalid'
    }
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    required: true
  }
});
UserSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, config.get('salt'));
  next();
});

UserSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  return obj;
};

UserSchema.plugin(uniqueValidator, {
  message: 'Path `{PATH}` must be unique'
});
module.exports = mongoose.model('User', UserSchema);