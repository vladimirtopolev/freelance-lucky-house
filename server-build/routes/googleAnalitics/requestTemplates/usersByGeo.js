"use strict";

module.exports = {
  metrics: [{
    expression: 'ga:users'
  }],
  dimensions: [{
    name: 'ga:country'
  }, {
    name: 'ga:city'
  }, {
    name: 'ga:region'
  }]
};