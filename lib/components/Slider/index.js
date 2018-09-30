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

var _recompose = require("recompose");

var _Slides = require("./Slides");

var _Slides2 = _interopRequireDefault(_Slides);

var _toolbox = require("../toolbox");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var Slider = function (_React$Component) {
	(0, _inherits3.default)(Slider, _React$Component);

	function Slider(props) {
		(0, _classCallCheck3.default)(this, Slider);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

		_this.state = {
			mobile: undefined
		};

		_this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Slider, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.updateWindowDimensions();
			window.addEventListener("resize", this.updateWindowDimensions);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			window.removeEventListener("resize", this.updateWindowDimensions);
		}
	}, {
		key: "updateWindowDimensions",
		value: function updateWindowDimensions() {
			this.setState({ mobile: window.innerWidth <= 788 });
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				_toolbox.Section,
				null,
				_react2.default.createElement(
					_toolbox.Container,
					null,
					_react2.default.createElement(
						_toolbox.Row,
						{ noPadding: true },
						_react2.default.createElement(_Slides2.default, {
							sliderContents: this.props.sliderContents,
							mobile: this.state.mobile
						})
					)
				)
			);
		}
	}]);
	return Slider;
}(_react2.default.Component);

Slider.displayName = "Slider";
;

var enhance = (0, _recompose.compose)();

Slider.propTypes = {
	sliderContents: _propTypes2.default.any
};

exports.default = enhance(Slider);