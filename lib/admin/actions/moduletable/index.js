"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchTable = fetchTable;
exports.fetchTableHeaders = fetchTableHeaders;
exports.fetchTableRows = fetchTableRows;
exports.fetchTableRow = fetchTableRow;
exports.saveTableRow = saveTableRow;
exports.updateTableRow = updateTableRow;
exports.deleteTableRow = deleteTableRow;

var _normalizr = require("normalizr");

var _adminTable = require("../../schema/adminTable");

var _type = require("./type");

var api = _interopRequireWildcard(require("../../api"));

function fetchTable(tableName) {
  return function (dispatch) {
    return api.getTable(tableName).then(function (res) {
      console.log(res.data);
      dispatch({
        type: _type.FETCH_ADMIN_TABLE,
        payload: {
          tableName: tableName,
          response: (0, _normalizr.normalize)(res.data, _adminTable.table)
        }
      });
    });
  };
}

function fetchTableHeaders(tableName) {
  return function (dispatch) {
    return api.getTableHeaders(tableName).then(function (res) {
      dispatch({
        type: _type.FETCH_ADMIN_TABLE_HEADERS,
        payload: {
          tableName: tableName,
          response: (0, _normalizr.normalize)(res.data, _adminTable.headers)
        }
      });
    });
  };
}

function fetchTableRows(tableName) {
  return function (dispatch) {
    return api.getTableRows(tableName).then(function (res) {
      dispatch({
        type: _type.FETCH_ADMIN_TABLE_ROWS,
        payload: {
          tableName: tableName,
          response: (0, _normalizr.normalize)(res.data, _adminTable.rows)
        }
      });
    });
  };
}

function fetchTableRow(tableName, rowId) {
  return function (dispatch) {
    api.getTableRow(tableName, rowId).then(function (res) {
      dispatch({
        type: _type.FETCH_ADMIN_TABLE_ROW,
        payload: {
          tableName: tableName,
          response: (0, _normalizr.normalize)(res.data, _adminTable.row)
        }
      });
    });
  };
}

function saveTableRow(tableName, newRow) {
  return function (dispatch) {
    api.saveTableRow(tableName, newRow).then(function (res) {
      dispatch({
        type: _type.NEW_ADMIN_TABLE_ROW,
        payload: {
          tableName: tableName,
          response: (0, _normalizr.normalize)(res.data, _adminTable.row)
        }
      });
    });
  };
}

function updateTableRow(tableName, idRow, newRow) {
  return function (dispatch) {
    api.updateTableRow(tableName, idRow, newRow).then(function (res) {
      dispatch({
        type: _type.UPDATE_ADMIN_TABLE_ROW,
        payload: {
          tableName: tableName,
          response: (0, _normalizr.normalize)(res.data, _adminTable.row)
        }
      });
    });
  };
}

function deleteTableRow(tableName, idRow) {
  return function (dispatch) {
    api.deleteTableRow(tableName, idRow).then(function (res) {
      dispatch({
        type: _type.DELETE_ADMIN_TABLE_ROW,
        payload: {
          tableName: tableName,
          idRow: idRow
        }
      });
    });
  };
}