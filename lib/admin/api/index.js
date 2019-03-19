"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadImage = uploadImage;
exports.getProperties = getProperties;
exports.changePropertyValue = changePropertyValue;
exports.getTable = getTable;
exports.getTableHeaders = getTableHeaders;
exports.getTableRows = getTableRows;
exports.getTableRow = getTableRow;
exports.updateCells = updateCells;
exports.saveTableRow = saveTableRow;
exports.updateTableRow = updateTableRow;
exports.deleteTableRow = deleteTableRow;

var _axios = _interopRequireDefault(require("axios"));

var API_URL_PREFIX = '/api';

var clientApi = _axios.default.create({
  baseURL: 'http://localhost:5000'
}); // UPLOAD IMAGE


function uploadImage(body) {
  return clientApi.post("/api/image-upload", body);
} // PROPERTIES


function getProperties() {
  return clientApi.get("".concat(API_URL_PREFIX, "/properties"));
}

function changePropertyValue(propName, value) {
  return clientApi.post("".concat(API_URL_PREFIX, "/properties/").concat(propName), {
    value: value
  });
} // MODULE TABLE


var MODULE_TABLE_DOMAIN = 'moduletable';

function getTable(tableName) {
  return clientApi.get("/api/".concat(MODULE_TABLE_DOMAIN, "/").concat(tableName));
}

function getTableHeaders(tableName) {
  return clientApi.get("/api/".concat(MODULE_TABLE_DOMAIN, "/").concat(tableName, "/headers"));
}

function getTableRows(tableName) {
  return clientApi.get("/api/".concat(MODULE_TABLE_DOMAIN, "/").concat(tableName, "/rows"));
}

function getTableRow(tableName, rowId) {
  return clientApi.get("/api/".concat(MODULE_TABLE_DOMAIN, "/").concat(tableName, "/rows/").concat(rowId));
}

function updateCells(tableName, cells) {
  return clientApi.put("/api/".concat(MODULE_TABLE_DOMAIN, "/").concat(tableName, "/cells"), cells);
}

function saveTableRow(tableName, row) {
  return clientApi.post("/api/".concat(MODULE_TABLE_DOMAIN, "/").concat(tableName, "/rows"), row);
}

function updateTableRow(tableName, idRow, row) {
  return clientApi.put("/api/".concat(MODULE_TABLE_DOMAIN, "/").concat(tableName, "/rows/").concat(idRow), row);
}

function deleteTableRow(tableName, idRow) {
  return clientApi.delete("/api/".concat(MODULE_TABLE_DOMAIN, "/").concat(tableName, "/rows/").concat(idRow));
}