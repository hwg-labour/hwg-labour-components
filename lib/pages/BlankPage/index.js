"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _toolbox = require("../../components/toolbox");

var _components = require("../../components");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

// --------------------------------------------------

var BlankPage = function (_React$Component) {
	(0, _inherits3.default)(BlankPage, _React$Component);

	function BlankPage() {
		(0, _classCallCheck3.default)(this, BlankPage);
		return (0, _possibleConstructorReturn3.default)(this, (BlankPage.__proto__ || Object.getPrototypeOf(BlankPage)).apply(this, arguments));
	}

	(0, _createClass3.default)(BlankPage, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    children = _props.children,
			    sliderContents = _props.sliderContents,
			    banner = _props.banner;


			return _react2.default.createElement(
				_toolbox.Page,
				null,
				banner && _react2.default.createElement(_components.Banner, { text: banner.text }),
				sliderContents && _react2.default.createElement(_components.Slider, { sliderContents: sliderContents }),
				children
			);
		}
	}]);
	return BlankPage;
}(_react2.default.Component);

BlankPage.displayName = "BlankPage";
;

BlankPage.propTypes = {
	banner: _propTypes2.default.object,
	children: _propTypes2.default.array,
	sliderContents: _propTypes2.default.array
};

exports.default = BlankPage;