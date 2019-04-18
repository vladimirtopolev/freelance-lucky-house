"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _subscription = _interopRequireDefault(require("../../models/subscription/subscription"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _status = _interopRequireDefault(require("../../models/orderedCalls/status"));

function getSubscriptions(req, res) {
  _subscription.default.find({
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

function subscribe(req, res) {
  var subscription = new _subscription.default();
  subscription.email = req.body.email || '';
  subscription.isDeleted = false;
  subscription.save(function (err, item) {
    if (err) {
      return res.status(500).json({
        error: 'Internal issue'
      });
    }

    return res.json(item);
  });
}

function unsubscribe(req, res) {
  _subscription.default.findOne({
    email: req.params.email
  }, function (err, subscription) {
    if (err) {
      return res.status(500).json({
        error: 'Internal issue'
      });
    }

    if (!subscription) {
      res.status(404).json({
        error: 'Could not find call this email'
      });
    }

    subscription.isDeleted = true;
    subscription.save(function (err) {
      if (err) {
        return res.status(500).json({
          error: 'Internal issue'
        });
      }

      res.json(subscription);
    });
  });
}

var _default = function _default(app) {
  app.route('/api/subscriptions').get(getSubscriptions);
  app.route('/api/subscribe').post(subscribe);
  app.route('/api/unsubscribe/:email').get(unsubscribe);
};

exports.default = _default;