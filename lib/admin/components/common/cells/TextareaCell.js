"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextareaCell;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Editor = _interopRequireDefault(require("../Editor"));

function TextareaCell(_ref) {
  var cell = _ref.cell,
      header = _ref.header,
      editMode = _ref.editMode,
      changeCell = _ref.changeCell;

  var onChange = function onChange(newValue) {
    changeCell(newValue);
  };

  return editMode ? _react.default.createElement("div", null, _react.default.createElement(_Editor.default, {
    value: cell.value,
    onChange: onChange
  })) : _react.default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: cell.value
    }
  });
}

;
TextareaCell.propTypes = {
  cell: _propTypes.default.shape({
    value: _propTypes.default.string
  }),
  header: _propTypes.default.shape({
    name: _propTypes.default.string
  }),
  editMode: _propTypes.default.bool.isRequired,
  changeCell: _propTypes.default.func.isRequired
};