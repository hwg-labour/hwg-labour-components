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

var _components = require("../../components");

var _GenericPage = require("../GenericPage");

var _GenericPage2 = _interopRequireDefault(_GenericPage);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _slugify = require("slugify");

var _slugify2 = _interopRequireDefault(_slugify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------


// --------------------------------------------------

var ContentPage = function (_React$Component) {
	(0, _inherits3.default)(ContentPage, _React$Component);

	function ContentPage() {
		(0, _classCallCheck3.default)(this, ContentPage);
		return (0, _possibleConstructorReturn3.default)(this, (ContentPage.__proto__ || Object.getPrototypeOf(ContentPage)).apply(this, arguments));
	}

	(0, _createClass3.default)(ContentPage, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    children = _props.children,
			    content = _props.content,
			    description = _props.description,
			    image = _props.image,
			    introduction = _props.introduction,
			    partners = _props.partners,
			    secondaryImage = _props.secondaryImage,
			    slider = _props.slider,
			    subtitle = _props.subtitle,
			    title = _props.title;


			return _react2.default.createElement(
				_GenericPage2.default,
				{
					description: description,
					image: image,
					introduction: introduction,
					secondaryImage: secondaryImage,
					slider: slider,
					subtitle: subtitle,
					title: title
				},
				console.log(content),
				content && content.map(function (section, i) {
					var link = section.ctaUrl && section.ctaUrl || section.ctaTarget && section.ctaTarget.title;
					var cta = {
						link: "/" + (link && (0, _slugify2.default)(link, { lower: true })),
						text: section.ctaText
					};

					return _react2.default.createElement(_components.Point, {
						bgImage: section.backgroundImage && (section.backgroundImage.file.url || section.backgroundImage),
						cta: cta,
						image: section.image,
						key: "point-" + (0, _slugify2.default)(section.title, { lower: true }),
						reverse: i % 2 === 0,
						text: section.content && section.content.content,
						title: section.title,
						videoUrl: section.videoUrl
					});
				}),
				children,
				partners && _react2.default.createElement(
					_components.Section,
					null,
					_react2.default.createElement(
						_components.Container,
						null,
						_react2.default.createElement(
							_components.Row,
							{ restrict: true },
							_react2.default.createElement(
								_components.Column,
								null,
								partners.map(function (category) {
									return category && _react2.default.createElement(_components.PartnerCategory, {
										category: category,
										key: category.title
									});
								})
							)
						)
					)
				)
			);
		}
	}]);
	return ContentPage;
}(_react2.default.Component);

ContentPage.displayName = "ContentPage";
;

ContentPage.propTypes = {
	children: _propTypes2.default.any,
	content: _propTypes2.default.any,
	description: _propTypes2.default.any,
	image: _propTypes2.default.string,
	introduction: _propTypes2.default.any,
	partners: _propTypes2.default.array,
	secondaryImage: _propTypes2.default.any,
	slider: _propTypes2.default.element,
	subtitle: _propTypes2.default.any,
	title: _propTypes2.default.string
};

exports.default = ContentPage;