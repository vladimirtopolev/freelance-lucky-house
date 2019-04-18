"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _property = _interopRequireDefault(require("../../models/properties/property"));

function getProperties(req, response) {
  _property.default.find({}).exec(function (error, res) {
    return response.json(res);
  });
}

function changePropertyValue(req, response) {
  var propName = req.params.propName;
  var value = req.body.value;

  _property.default.findOneAndUpdate({
    internalName: propName
  }, {
    $set: {
      value: value
    }
  }, {
    new: true
  }).exec(function (err, res) {
    console.log(err);
    response.json(res);
  });
}

var _default = function _default(app) {
  app.route('/api/properties').get(getProperties);
  app.route('/api/properties/:propName').post(changePropertyValue);
};

exports.default = _default;