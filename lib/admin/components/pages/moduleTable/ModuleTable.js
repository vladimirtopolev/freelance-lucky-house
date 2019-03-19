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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _constants = require("../../../constants");

var _TableContainer = _interopRequireDefault(require("./table/TableContainer"));

var _RowContainer = _interopRequireDefault(require("./row/RowContainer"));

var ModuleTable =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ModuleTable, _Component);

  function ModuleTable() {
    (0, _classCallCheck2.default)(this, ModuleTable);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ModuleTable).apply(this, arguments));
  }

  (0, _createClass2.default)(ModuleTable, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/".concat(_constants.ADMIN_URL, "/").concat(_constants.ADMIN_TABLE_MODULE_URL, "/:tableName"),
        component: _TableContainer.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/".concat(_constants.ADMIN_URL, "/").concat(_constants.ADMIN_TABLE_MODULE_URL, "/:tableName/rows/:rowId"),
        component: _RowContainer.default
      }));
    }
  }]);
  return ModuleTable;
}(_react.Component);

exports.default = ModuleTable;