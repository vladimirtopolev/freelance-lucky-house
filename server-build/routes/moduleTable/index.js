"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _table = _interopRequireDefault(require("../../models/moduleTable/table"));

var _tableRow = _interopRequireDefault(require("../../models/moduleTable/tableRow"));

var _tableCell = _interopRequireDefault(require("../../models/moduleTable/tableCell"));

var _async = _interopRequireDefault(require("async"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var ObjectId = _mongoose.default.Types.ObjectId;

function findTableByName(tableName) {
  return _table.default.findOne({
    name: tableName
  });
}

function getHeaders(req, res) {
  var tableName = req.params.tableName;

  _table.default.findOne({
    name: tableName
  }).populate('headers').exec(function (err, item) {
    if (!item) {
      return res.status(404).json({
        error: "Table ".concat(tableName, " does not exist")
      });
    }

    return res.json(item.headers);
  });
}

function getRows(req, res) {
  var tableName = req.params.tableName;

  _table.default.findOne({
    name: tableName
  }).populate({
    path: 'rows',
    model: 'TableRow',
    populate: {
      path: 'cells',
      model: 'TableCell',
      populate: {
        path: 'type',
        model: 'TableColumn'
      }
    }
  }).exec(function (err, item) {
    if (!item) {
      return res.status(404).json({
        error: "Table ".concat(tableName, " does not exist")
      });
    }

    return res.json(item.rows);
  });
}

function getRow(req, res) {
  var _req$params = req.params,
      tableName = _req$params.tableName,
      rowId = _req$params.rowId;

  _table.default.findOne({
    name: tableName,
    rows: {
      $elemMatch: {
        $eq: rowId
      }
    }
  }, {
    'rows.$': 1
  }).populate({
    path: 'rows',
    model: 'TableRow',
    populate: {
      path: 'cells',
      model: 'TableCell',
      populate: {
        path: 'type',
        model: 'TableColumn'
      }
    }
  }).exec(function (err, item) {
    if (err || !item) {
      return res.status(404).json({
        error: "Wrong table name \"".concat(tableName, "\" or row id \"").concat(rowId, "\"")
      });
    }

    res.json(item.rows[0]);
  });
}

function getTable(req, res) {
  var tableName = req.params.tableName;

  _table.default.findOne({
    name: tableName
  }).populate({
    path: 'rows',
    model: 'TableRow',
    populate: {
      path: 'cells',
      model: 'TableCell',
      populate: {
        path: 'type',
        model: 'TableColumn'
      }
    }
  }).populate('headers').exec(function (err, item) {
    if (!item) {
      return res.status(404).json({
        error: "Table ".concat(tableName, " does not exist")
      });
    }

    return res.json(item);
  });
}

function createRow(_x, _x2) {
  return _createRow.apply(this, arguments);
}

function _createRow() {
  _createRow = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res) {
    var _ref, table, cells, savedCells, tableRow, savedTableRow;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return findTableByName(req.params.tableName);

          case 2:
            _ref = _context.sent;
            table = _ref._doc;
            cells = req.body.cells.map(function (cell) {
              return (0, _objectSpread2.default)({}, cell, {
                type: ObjectId(cell.type),
                table: table._id
              });
            });
            _context.next = 7;
            return _tableCell.default.create(cells);

          case 7:
            savedCells = _context.sent;
            tableRow = new _tableRow.default({
              cells: savedCells,
              table: table._id
            });
            _context.next = 11;
            return tableRow.save();

          case 11:
            savedTableRow = _context.sent;
            _context.next = 14;
            return _table.default.update({
              _id: table._id
            }, {
              rows: table.rows.concat(savedTableRow._doc._id)
            });

          case 14:
            res.json(savedTableRow._doc);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createRow.apply(this, arguments);
}

function updateRow(_x3, _x4) {
  return _updateRow.apply(this, arguments);
}

function _updateRow() {
  _updateRow = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(req, res) {
    var rowId, bulkOpts, tableRow;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            rowId = req.params.rowId;
            bulkOpts = req.body.cells.reduce(function (memo, cell) {
              return memo.concat({
                updateOne: {
                  filter: {
                    '_id': cell._id
                  },
                  update: {
                    '$set': {
                      value: cell.value
                    }
                  }
                }
              });
            }, []);
            _context2.next = 5;
            return _tableCell.default.bulkWrite(bulkOpts);

          case 5:
            _context2.next = 7;
            return _tableRow.default.findById(rowId).populate('cells');

          case 7:
            tableRow = _context2.sent;
            res.json(tableRow._doc);
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            res.status(404).json({
              error: _context2.t0
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return _updateRow.apply(this, arguments);
}

function deleteRow(_x5, _x6) {
  return _deleteRow.apply(this, arguments);
}

function _deleteRow() {
  _deleteRow = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(req, res) {
    var _req$params2, rowId, tableName, _ref2, table;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$params2 = req.params, rowId = _req$params2.rowId, tableName = _req$params2.tableName;
            _context3.next = 3;
            return findTableByName(tableName);

          case 3:
            _ref2 = _context3.sent;
            table = _ref2._doc;
            _context3.next = 7;
            return _table.default.update({
              _id: table._id
            }, {
              rows: table.rows.filter(function (row) {
                return row._id.toString() !== rowId;
              })
            });

          case 7:
            res.json({
              test: 'test'
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _deleteRow.apply(this, arguments);
}

var _default = function _default(app) {
  app.route('/api/moduletable/:tableName/headers').get(getHeaders);
  app.route('/api/moduletable/:tableName/rows/:rowId').get(getRow).put(updateRow).delete(deleteRow);
  app.route('/api/moduletable/:tableName/rows').get(getRows).post(createRow);
  app.route('/api/moduletable/:tableName').get(getTable);
};

exports.default = _default;