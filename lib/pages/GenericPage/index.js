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

var _BlankPage = require("../BlankPage");

var _BlankPage2 = _interopRequireDefault(_BlankPage);

var _marked = require("marked");

var _marked2 = _interopRequireDefault(_marked);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

// --------------------------------------------------

var GenericPage = function (_React$Component) {
	(0, _inherits3.default)(GenericPage, _React$Component);

	function GenericPage() {
		(0, _classCallCheck3.default)(this, GenericPage);
		return (0, _possibleConstructorReturn3.default)(this, (GenericPage.__proto__ || Object.getPrototypeOf(GenericPage)).apply(this, arguments));
	}

	(0, _createClass3.default)(GenericPage, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    children = _props.children,
			    description = _props.description,
			    image = _props.image,
			    introduction = _props.introduction,
			    secondaryImage = _props.secondaryImage,
			    slider = _props.slider,
			    subtitle = _props.subtitle,
			    title = _props.title;


			return _react2.default.createElement(
				_BlankPage2.default,
				{
					slider: slider,
					image: image
				},
				title && _react2.default.createElement(
					_toolbox.Section,
					{
						image: image
					},
					_react2.default.createElement(
						_toolbox.Container,
						{ narrow: true },
						_react2.default.createElement(
							_toolbox.Row,
							null,
							_react2.default.createElement(
								_toolbox.Column,
								null,
								title && _react2.default.createElement(
									"h1",
									null,
									title
								),
								subtitle && _react2.default.createElement(
									"p",
									null,
									subtitle
								)
							)
						)
					)
				),
				secondaryImage && _react2.default.createElement(
					_toolbox.Section,
					null,
					_react2.default.createElement(
						_toolbox.Container,
						null,
						_react2.default.createElement(
							_toolbox.Row,
							null,
							_react2.default.createElement(
								_toolbox.Column,
								null,
								_react2.default.createElement(_toolbox.SecondaryImage, { alt: secondaryImage.description, src: secondaryImage.file.url })
							)
						)
					)
				),
				description && _react2.default.createElement(
					_toolbox.Section,
					null,
					_react2.default.createElement(
						_toolbox.Container,
						{ narrow: true },
						_react2.default.createElement(
							_toolbox.Row,
							null,
							_react2.default.createElement(
								_toolbox.Column,
								null,
								_react2.default.createElement(
									"div",
									null,
									_react2.default.createElement(
										"em",
										null,
										description
									)
								)
							)
						)
					)
				),
				introduction && _react2.default.createElement(
					_toolbox.Section,
					null,
					_react2.default.createElement(
						_toolbox.Container,
						{ narrow: true },
						_react2.default.createElement(
							_toolbox.Row,
							null,
							_react2.default.createElement(
								_toolbox.Column,
								null,
								_react2.default.createElement("div", {
									dangerouslySetInnerHTML: {
										__html: (0, _marked2.default)(introduction)
									}
								})
							)
						)
					)
				),
				children
			);
		}
	}]);
	return GenericPage;
}(_react2.default.Component);

GenericPage.displayName = "GenericPage";
;

GenericPage.propTypes = {
	children: _propTypes2.default.any,
	description: _propTypes2.default.any,
	image: _propTypes2.default.string,
	introduction: _propTypes2.default.any,
	secondaryImage: _propTypes2.default.object,
	slider: _propTypes2.default.element,
	subtitle: _propTypes2.default.any,
	title: _propTypes2.default.any
};

exports.default = GenericPage;