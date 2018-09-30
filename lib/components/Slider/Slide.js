"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toolbox = require("../toolbox");

var _marked = require("marked");

var _marked2 = _interopRequireDefault(_marked);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _slugify = require("slugify");

var _slugify2 = _interopRequireDefault(_slugify);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var padding = 1;
var titleFontSize = 1.1;
var titleLineHeight = 1.3;
var textFontSize = 0.9;
var textLineHeight = 1.4;
var boxHeight = 2.5 * (padding + titleFontSize * titleLineHeight + textFontSize * textLineHeight);
var slideInnerHeight = 2 * (padding + titleLineHeight) + 0.4;

// --------------------------------------------------

var SlideWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Slide__SlideWrapper",
	componentId: "sc-153a39r-0"
})(["width:100%;height:40vh;"]);

var SlideInner = (0, _styledComponents2.default)(_toolbox.MaybeLink).withConfig({
	displayName: "Slide__SlideInner",
	componentId: "sc-153a39r-1"
})(["background-color:", ";bottom:0;color:#fff;display:block;height:", "em;left:0;padding:", "em;position:absolute;right:0;transition-duration:0.5s;background-color:", ";&:hover{color:#eee;height:", "em;}&:visited{color:#fff !important;}"], function (props) {
	return props.theme.colors.background.dark;
}, slideInnerHeight, padding, function (props) {
	return props.colorCount % 3 === 0 ? props.theme.colors.tertiary : (props.colorCount + 1) % 3 === 0 ? props.theme.colors.secondary : props.theme.colors.primary;
}, boxHeight);

var SlideTitle = _styledComponents2.default.div.withConfig({
	displayName: "Slide__SlideTitle",
	componentId: "sc-153a39r-2"
})(["font-weight:bold;font-size:", "em;font-family:", ";display:block;line-height:", ";height:", "em;overflow:hidden;", ":hover{text-decoration:underline;}"], titleFontSize, function (props) {
	return props.theme.font.heading;
}, titleLineHeight, 2 * titleLineHeight, SlideInner);

var SlideText = _styledComponents2.default.div.withConfig({
	displayName: "Slide__SlideText",
	componentId: "sc-153a39r-3"
})(["font-size:", "em;font-family:", ";padding-top:2em;& p{margin:0;&:last-child{line-height:", ";height:", "em;position:relative;overflow:hidden;&:after{content:\"\u25B6\";position:absolute;bottom:0;right:0;width:70%;height:", "em;text-align:right;background:linear-gradient( to right,transparent,", " 50% );}}}"], textFontSize, function (props) {
	return props.theme.font.paragraph;
}, textLineHeight, 2 * textLineHeight, textLineHeight, function (props) {
	return props.colorCount % 3 === 0 ? props.theme.colors.tertiary : (props.colorCount + 1) % 3 === 0 ? props.theme.colors.secondary : props.theme.colors.primary;
});

var SlideImage = _styledComponents2.default.img.withConfig({
	displayName: "Slide__SlideImage",
	componentId: "sc-153a39r-4"
})(["width:100%;height:100%;object-fit:cover;position:absolute;padding-bottom:", ";"], slideInnerHeight);

// --------------------------------------------------

var Slide = function Slide(_ref) {
	var colorCount = _ref.colorCount,
	    slide = _ref.slide;
	var title = slide.title,
	    image = slide.image,
	    description = slide.description,
	    externalUrl = slide.externalUrl,
	    __typename = slide.__typename;


	var slug = __typename.toLowerCase().split("contentful")[1];
	slug = slug.endsWith("s") ? slug : slug + "s";

	var internalUrl = "/" + slug + "/" + (0, _slugify2.default)(slide.title, { lower: true });

	return _react2.default.createElement(
		SlideWrapper,
		null,
		image && _react2.default.createElement(
			_toolbox.MaybeLink,
			{
				href: externalUrl,
				to: internalUrl
			},
			_react2.default.createElement(SlideImage, {
				src: "http://res.cloudinary.com/codogo/image/fetch/c_imagga_scale,w_800,h_600,c_fill,g_face,f_auto/https:" + image.file.url,
				alt: image.description
			})
		),
		_react2.default.createElement(
			SlideInner,
			{
				href: externalUrl,
				to: internalUrl,
				colorCount: colorCount
			},
			_react2.default.createElement(
				SlideTitle,
				null,
				title
			),
			description && _react2.default.createElement(SlideText, {
				colorCount: colorCount,
				dangerouslySetInnerHTML: {
					__html: (0, _marked2.default)(description)
				}
			})
		)
	);
};

Slide.displayName = "Slide";
Slide.propTypes = {
	colorCount: _propTypes2.default.any,
	slide: _propTypes2.default.object
};

exports.default = Slide;