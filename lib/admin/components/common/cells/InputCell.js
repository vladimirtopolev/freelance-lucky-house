"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputCell;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function InputCell(_ref) {
  var cell = _ref.cell,
      header = _ref.header,
      editMode = _ref.editMode,
      changeCell = _ref.changeCell;

  var onChange = function onChange(ev) {
    changeCell(ev.target.value);
  };

  return editMode ? _react.default.createElement("input", {
    value: cell.value,
    onChange: onChange
  }) : cell.value;
}

InputCell.propTypes = {
  cell: _propTypes.default.shape({
    value: _propTypes.default.any
  }),
  header: _propTypes.default.shape({
    name: _propTypes.default.string
  }),
  editMode: _propTypes.default.bool.isRequired,
  changeCell: _propTypes.default.func.isRequired
};