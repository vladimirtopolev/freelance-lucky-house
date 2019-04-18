"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _orderedCall = _interopRequireDefault(require("../../models/orderedCalls/orderedCall"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _status = _interopRequireDefault(require("../../models/orderedCalls/status"));

function getOrderedCalls(req, res) {
  _orderedCall.default.find({
    isDeleted: {
      $eq: false
    }
  }).exec(function (err, items) {
    if (err) {
      return res.status(500).json({
        error: 'Internal issue'
      });
    }

    return res.json(items);
  });
}

function orderCall(req, res) {
  var orderedCall = new _orderedCall.default();
  orderedCall.firstName = req.body.firstName || '';
  orderedCall.lastName = req.body.lastName || '';
  orderedCall.phone = req.body.phone || '';
  orderedCall.email = req.body.email || '';
  orderedCall.clientDescriptions = req.body.clientDescriptions || '';
  orderedCall.ownDescriptions = '';
  orderedCall.statusDates = (0, _defineProperty2.default)({}, _status.default.CREATED, new Date());
  orderedCall.status = _status.default.CREATED;
  orderedCall.isDeleted = false;
  orderedCall.save(function (err, item) {
    if (err) {
      return res.status(500).json({
        error: 'Internal issue'
      });
    }

    return res.json(item);
  });
}

function deleteOrderedCall(req, res) {
  _orderedCall.default.findById(req.params.callId, function (err, orderedCall) {
    if (err) {
      return res.status(500).json({
        error: 'Internal issue'
      });
    }

    if (!orderedCall) {
      res.status(404).json({
        error: 'Could not fil call with this id'
      });
    }

    orderedCall.isDeleted = true;
    orderedCall.save(function (err) {
      if (err) {
        return res.status(500).json({
          error: 'Internal issue'
        });
      }

      res.json(orderedCall);
    });
  });
}

function updateOrderedCall(req, res) {
  _orderedCall.default.findById(req.params.callId, function (err, orderedCall) {
    if (err) {
      return res.status(500).json({
        error: 'Internal issue'
      });
    }

    if (!orderedCall) {
      res.status(404).json({
        error: 'Could not fil call with this id'
      });
    }

    var changedFields = req.body;

    if (changedFields.status !== orderedCall.status) {
      changedFields.statusDates = Object.assign({}, orderedCall.statusDates, (0, _defineProperty2.default)({}, changedFields.status, new Date()));
    }

    orderedCall.set(changedFields);
    orderedCall.save(function (err) {
      if (err) {
        return res.status(500).json({
          error: 'Internal issue'
        });
      }

      res.json(orderedCall);
    });
  });
}

var _default = function _default(app) {
  app.route('/api/orderCall').get(getOrderedCalls).post(orderCall);
  app.route('/api/orderCall/:callId').put(updateOrderedCall).delete(deleteOrderedCall);
};

exports.default = _default;