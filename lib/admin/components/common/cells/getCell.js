"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCell;

var _react = _interopRequireDefault(require("react"));

var _InputCell = _interopRequireDefault(require("./InputCell"));

var _TextareaCell = _interopRequireDefault(require("./TextareaCell"));

function getCell(props) {
  var header = props.header;

  switch (header.type) {
    case 'INPUT':
      {
        return _react.default.createElement(_InputCell.default, props);
      }

    case 'TEXTAREA':
      {
        return _react.default.createElement(_TextareaCell.default, props);
      }

    default:
      {
        throw new Error('Unavailable cell type');
      }
  }
}