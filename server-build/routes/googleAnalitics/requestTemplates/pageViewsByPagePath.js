"use strict";

module.exports = {
  metrics: [{
    expression: 'ga:pageviews'
  }, {
    expression: 'ga:uniquePageviews'
  }, {
    expression: 'ga:avgTimeOnPage'
  }, {
    expression: 'ga:entrances'
  }, {
    expression: 'ga:exits'
  }, {
    expression: 'ga:pageviewsPerSession'
  }],
  dimensions: [{
    name: 'ga:pagePath'
  }]
};