"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _RowCell = _interopRequireDefault(require("./RowCell"));

var _reactRouter = require("react-router");

var Row =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Row, _Component);

  function Row() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Row);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Row)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      editMode: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "goBack", function () {
      _this.props.history.goBack();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggleEditMode", function () {
      _this.setState({
        editMode: !_this.state.editMode
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Row, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          headers = _this$props.headers,
          cells = _this$props.cells,
          changeCell = _this$props.changeCell,
          saveRow = _this$props.saveRow;
      var row = headers.map(function (header) {
        var cell = cells.find(function (cell) {
          return header._id === cell.type._id;
        });
        return _react.default.createElement(_RowCell.default, {
          header: header,
          cell: cell,
          editMode: _this2.state.editMode,
          changeCell: changeCell.bind(null, cell.type)
        });
      });
      return _react.default.createElement("div", null, row, _react.default.createElement("button", {
        onClick: this.toggleEditMode
      }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"), _react.default.createElement("button", {
        onClick: this.goBack
      }, "\u041D\u0430\u0437\u0430\u0434"), _react.default.createElement("button", {
        onClick: saveRow
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"));
    }
  }]);
  return Row;
}(_react.Component);

var _default = (0, _reactRouter.withRouter)(Row);

exports.default = _default;