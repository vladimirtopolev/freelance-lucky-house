"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputCell = _interopRequireDefault(require("./cells/InputCell"));

var _TextAreaCell = _interopRequireDefault(require("./cells/TextAreaCell"));

var _SingleImage = _interopRequireDefault(require("./cells/SingleImage"));

var _default = function _default(props) {
  var header = props.header;

  switch (header.type) {
    case 'IMAGE':
      {
        return _react.default.createElement(_SingleImage.default, props);
      }

    case 'TEXTAREA':
      {
        return _react.default.createElement(_TextAreaCell.default, props);
      }

    default:
      {
        return _react.default.createElement(_InputCell.default, props);
      }
  }
};

exports.default = _default;