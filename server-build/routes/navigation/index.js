"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _navigation = _interopRequireDefault(require("../../models/navigation"));

function sendNavigation(response) {
  _navigation.default.find({}).sort('leftKey').exec(function (error, res) {
    return response.json(res);
  });
}

function fetchNavigation(_x, _x2) {
  return _fetchNavigation.apply(this, arguments);
}

function _fetchNavigation() {
  _fetchNavigation = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", sendNavigation(res));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchNavigation.apply(this, arguments);
}

function insertNavigationItem(_x3, _x4) {
  return _insertNavigationItem.apply(this, arguments);
}

function _insertNavigationItem() {
  _insertNavigationItem = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(req, res) {
    var _req$body, item, parentRightKey, parentLevel;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, item = _req$body.item, parentRightKey = _req$body.parentRightKey, parentLevel = _req$body.parentLevel;
            _context2.next = 3;
            return _navigation.default.bulkWrite([{
              updateMany: {
                filter: {
                  leftKey: {
                    $gt: parentRightKey
                  }
                },
                update: {
                  $inc: {
                    leftKey: 2,
                    rightKey: 2
                  }
                }
              }
            }, {
              updateMany: {
                filter: {
                  leftKey: {
                    $lt: parentRightKey
                  },
                  rightKey: {
                    $gte: parentRightKey
                  }
                },
                update: {
                  $inc: {
                    rightKey: 2
                  }
                }
              }
            }, {
              insertOne: {
                document: Object.assign(item, {
                  leftKey: parentRightKey,
                  rightKey: parentRightKey + 1,
                  level: parentLevel + 1
                })
              }
            }]);

          case 3:
            return _context2.abrupt("return", sendNavigation(res));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _insertNavigationItem.apply(this, arguments);
}

function deleteNavigationItem(_x5, _x6) {
  return _deleteNavigationItem.apply(this, arguments);
}

function _deleteNavigationItem() {
  _deleteNavigationItem = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(req, res) {
    var deletedItem, _deletedItem$_doc, leftKey, rightKey, level, result;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _navigation.default.findById(req.params.navigationId);

          case 2:
            deletedItem = _context3.sent;

            if (!deletedItem._doc) {
              _context3.next = 8;
              break;
            }

            _deletedItem$_doc = deletedItem._doc, leftKey = _deletedItem$_doc.leftKey, rightKey = _deletedItem$_doc.rightKey, level = _deletedItem$_doc.level;
            _context3.next = 7;
            return _navigation.default.bulkWrite([{
              deleteMany: {
                filter: {
                  leftKey: {
                    $gte: leftKey
                  },
                  rightKey: {
                    $lte: rightKey
                  }
                }
              }
            }, {
              updateMany: {
                filter: {
                  leftKey: {
                    $lt: leftKey
                  },
                  rightKey: {
                    $gt: rightKey
                  }
                },
                update: {
                  $inc: {
                    rightKey: leftKey - rightKey - 1
                  }
                }
              }
            }, {
              updateMany: {
                filter: {
                  leftKey: {
                    $gt: rightKey
                  }
                },
                update: {
                  $inc: {
                    leftKey: leftKey - rightKey - 1,
                    rightKey: leftKey - rightKey - 1
                  }
                }
              }
            }]);

          case 7:
            result = _context3.sent;

          case 8:
            return _context3.abrupt("return", sendNavigation(res));

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _deleteNavigationItem.apply(this, arguments);
}

function updateNavigationItem(_x7, _x8) {
  return _updateNavigationItem.apply(this, arguments);
}

function _updateNavigationItem() {
  _updateNavigationItem = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(req, res) {
    var itemId, item;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            itemId = req.params.navigationId;
            item = req.body;
            _context4.next = 4;
            return _navigation.default.findByIdAndUpdate(itemId, item);

          case 4:
            return _context4.abrupt("return", sendNavigation(res));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateNavigationItem.apply(this, arguments);
}

function upNavItem(_x9, _x10) {
  return _upNavItem.apply(this, arguments);
}

function _upNavItem() {
  _upNavItem = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(req, res) {
    var itemId, movingItemResult, movingItem, nearestLeftItemResult, nearestLeftItem, offsetRight, offsetLeft;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            itemId = req.params.navigationId;
            _context5.next = 3;
            return _navigation.default.findById(itemId);

          case 3:
            movingItemResult = _context5.sent;

            if (movingItemResult) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", sendNavigation(res));

          case 6:
            movingItem = movingItemResult._doc;
            _context5.next = 9;
            return _navigation.default.findOne({
              rightKey: movingItem.leftKey - 1
            });

          case 9:
            nearestLeftItemResult = _context5.sent;

            if (nearestLeftItemResult) {
              _context5.next = 12;
              break;
            }

            return _context5.abrupt("return", sendNavigation(res));

          case 12:
            nearestLeftItem = nearestLeftItemResult._doc;
            offsetRight = movingItem.rightKey - movingItem.leftKey + 1;
            offsetLeft = nearestLeftItem.rightKey - nearestLeftItem.leftKey + 1;
            _context5.next = 17;
            return _navigation.default.bulkWrite([{
              updateMany: {
                filter: {
                  $and: [{
                    leftKey: {
                      $gte: nearestLeftItem.leftKey
                    }
                  }, {
                    leftKey: {
                      $lte: nearestLeftItem.rightKey
                    }
                  }]
                },
                update: {
                  $inc: {
                    leftKey: offsetRight
                  }
                }
              }
            }, {
              updateMany: {
                filter: {
                  $and: [{
                    rightKey: {
                      $gte: movingItem.leftKey
                    }
                  }, {
                    rightKey: {
                      $lte: movingItem.rightKey
                    }
                  }]
                },
                update: {
                  $inc: {
                    leftKey: -offsetLeft
                  }
                }
              }
            }, {
              updateMany: {
                filter: {
                  $and: [{
                    rightKey: {
                      $gte: nearestLeftItem.leftKey
                    }
                  }, {
                    rightKey: {
                      $lte: nearestLeftItem.rightKey
                    }
                  }]
                },
                update: {
                  $inc: {
                    rightKey: offsetRight
                  }
                }
              }
            }, {
              updateMany: {
                filter: {
                  $and: [{
                    leftKey: {
                      $gte: movingItem.leftKey - offsetLeft
                    }
                  }, {
                    leftKey: {
                      $lte: nearestLeftItem.rightKey - offsetLeft + offsetRight
                    }
                  }]
                },
                update: {
                  $inc: {
                    rightKey: -offsetLeft
                  }
                }
              }
            }]);

          case 17:
            return _context5.abrupt("return", sendNavigation(res));

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _upNavItem.apply(this, arguments);
}

function downNavItem(_x11, _x12) {
  return _downNavItem.apply(this, arguments);
}

function _downNavItem() {
  _downNavItem = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(req, res) {
    var itemId, movingItemResult, movingItem, nearestRightItemResult, nearestRightItem, offsetLeft, offsetRight;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            itemId = req.params.navigationId;
            _context6.next = 3;
            return _navigation.default.findById(itemId);

          case 3:
            movingItemResult = _context6.sent;

            if (movingItemResult) {
              _context6.next = 6;
              break;
            }

            return _context6.abrupt("return", sendNavigation(res));

          case 6:
            movingItem = movingItemResult._doc;
            _context6.next = 9;
            return _navigation.default.findOne({
              leftKey: movingItem.rightKey + 1
            });

          case 9:
            nearestRightItemResult = _context6.sent;

            if (nearestRightItemResult) {
              _context6.next = 12;
              break;
            }

            return _context6.abrupt("return", sendNavigation(res));

          case 12:
            nearestRightItem = nearestRightItemResult._doc;
            offsetLeft = movingItem.rightKey - movingItem.leftKey + 1;
            offsetRight = nearestRightItem.rightKey - nearestRightItem.leftKey + 1;
            _context6.next = 17;
            return _navigation.default.bulkWrite([{
              updateMany: {
                filter: {
                  $and: [{
                    leftKey: {
                      $gte: movingItem.leftKey
                    }
                  }, {
                    leftKey: {
                      $lte: movingItem.rightKey
                    }
                  }]
                },
                update: {
                  $inc: {
                    leftKey: offsetRight
                  }
                }
              }
            }, {
              updateMany: {
                filter: {
                  $and: [{
                    rightKey: {
                      $gte: nearestRightItem.leftKey
                    }
                  }, {
                    rightKey: {
                      $lte: nearestRightItem.rightKey
                    }
                  }]
                },
                update: {
                  $inc: {
                    leftKey: -offsetLeft
                  }
                }
              }
            }, {
              updateMany: {
                filter: {
                  $and: [{
                    rightKey: {
                      $gte: movingItem.leftKey
                    }
                  }, {
                    rightKey: {
                      $lte: movingItem.rightKey
                    }
                  }]
                },
                update: {
                  $inc: {
                    rightKey: offsetRight
                  }
                }
              }
            }, {
              updateMany: {
                filter: {
                  $and: [{
                    leftKey: {
                      $gte: nearestRightItem.leftKey - offsetLeft
                    }
                  }, {
                    leftKey: {
                      $lte: movingItem.rightKey - offsetLeft + offsetRight
                    }
                  }]
                },
                update: {
                  $inc: {
                    rightKey: -offsetLeft
                  }
                }
              }
            }]);

          case 17:
            return _context6.abrupt("return", sendNavigation(res));

          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _downNavItem.apply(this, arguments);
}

var _default = function _default(app) {
  app.route('/api/navigation').get(fetchNavigation).post(insertNavigationItem);
  app.route('/api/navigation/:navigationId').delete(deleteNavigationItem).put(updateNavigationItem);
  app.route('/api/navigation/:navigationId/up').put(upNavItem);
  app.route('/api/navigation/:navigationId/down').put(downNavItem);
};

exports.default = _default;