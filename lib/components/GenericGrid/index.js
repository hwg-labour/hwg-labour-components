"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toolbox = require("../toolbox");

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _marked = require("marked");

var _marked2 = _interopRequireDefault(_marked);

var _slugify = require("slugify");

var _slugify2 = _interopRequireDefault(_slugify);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// --------------------------------------------------

var padding = 1;
var titleFontSize = 1.1;
var titleLineHeight = 1.3;
var textFontSize = 0.9;
var textLineHeight = 1.4;
var boxHeight = 2.5 * (padding + titleFontSize * titleLineHeight + textFontSize * textLineHeight);

var entryColumns = {
	xs: 1,
	sm: 2,
	md: 3,
	lg: 3
};

var gridColumns = _ramda2.default.map(function (n) {
	return "repeat(" + n + ", 1fr)";
})(entryColumns);

var EntryContainer = _styledComponents2.default.div.withConfig({
	displayName: "GenericGrid__EntryContainer",
	componentId: "sc-19gl5fj-0"
})(["display:grid;", ";grid-gap:2em;margin-bottom:2em;width:100%;"], mixins.bpEach("grid-template-columns", gridColumns));

var EntryWrapperLink = (0, _styledComponents2.default)(_toolbox.MaybeLink).withConfig({
	displayName: "GenericGrid__EntryWrapperLink",
	componentId: "sc-19gl5fj-1"
})(["display:flex;width:100%;position:relative;overflow:hidden;"]);

var EntryWrapper = function EntryWrapper(props) {
	return props.externalUrl ? _react2.default.createElement(
		EntryWrapperLink,
		{
			href: props.externalUrl
		},
		props.children
	) : _react2.default.createElement(
		EntryWrapperLink,
		{
			to: props.internalUrl
		},
		props.children
	);
};

EntryWrapper.propTypes = {
	children: _propTypes2.default.array,
	externalUrl: _propTypes2.default.string,
	internalUrl: _propTypes2.default.string
};

var EntryImage = _styledComponents2.default.img.withConfig({
	displayName: "GenericGrid__EntryImage",
	componentId: "sc-19gl5fj-2"
})(["width:100%;height:100%;object-fit:cover;padding-bottom:", "em;"], 2 * titleLineHeight);

var EntryInner = (0, _styledComponents2.default)(_toolbox.MaybeLink).withConfig({
	displayName: "GenericGrid__EntryInner",
	componentId: "sc-19gl5fj-3"
})(["background-color:", ";bottom:0;color:#fff;display:block;height:5em;left:0;padding:", "em;position:absolute;right:0;transition-duration:0.5s;&:hover{color:#eee;height:", "em;}&:visited{color:#fff !important;}"], function (props) {
	return props.theme.colors.background.dark;
}, padding, boxHeight);

var EntryTitle = _styledComponents2.default.div.withConfig({
	displayName: "GenericGrid__EntryTitle",
	componentId: "sc-19gl5fj-4"
})(["font-weight:bold;font-size:", "em;font-family:", ";display:block;line-height:", ";height:", "em;overflow:hidden;"], titleFontSize, function (props) {
	return props.theme.font.heading;
}, titleLineHeight, 2 * titleLineHeight);

var EntryText = _styledComponents2.default.div.withConfig({
	displayName: "GenericGrid__EntryText",
	componentId: "sc-19gl5fj-5"
})(["font-size:", "em;font-family:", ";padding-top:2em;& p{margin:0;&:last-child{line-height:", ";height:", "em;position:relative;overflow:hidden;&:after{content:\"\u25B6\";position:absolute;bottom:0;right:0;width:70%;height:", "em;text-align:right;background:linear-gradient( to right,transparent,", " 50% );}}}"], textFontSize, function (props) {
	return props.theme.font.paragraph;
}, textLineHeight, 2 * textLineHeight, textLineHeight, function (props) {
	return props.theme.colors.background.dark;
});

// --------------------------------------------------

var GenericGrid = function GenericGrid(props) {
	var entries = props.entries,
	    slug = props.slug;


	entries = entries.map(function (entry) {
		return entry.node || entry;
	});

	if (entries[0].publishingDate) {
		entries.sort(function (a, b) {
			return new Date(b.publishingDate) - new Date(a.publishingDate);
		});
	};

	return _react2.default.createElement(
		EntryContainer,
		null,
		entries.map(function (entry) {
			return _react2.default.createElement(
				EntryWrapper,
				{
					key: (0, _slugify2.default)(entry.title.toLowerCase()),
					internalUrl: "/" + slug + "/" + (0, _slugify2.default)(entry.title, { lower: true }),
					externalUrl: entry.externalUrl
				},
				entry.image && _react2.default.createElement(EntryImage, {
					src: "http://res.cloudinary.com/codogo/image/fetch/c_imagga_scale,w_800,h_600,c_fill,g_face,f_auto/https:" + entry.image.file.url,
					alt: entry.image.description
				}),
				_react2.default.createElement(
					EntryInner,
					null,
					entry.title && _react2.default.createElement(
						EntryTitle,
						null,
						entry.title
					),
					entry.description && _react2.default.createElement(EntryText, {
						dangerouslySetInnerHTML: {
							__html: (0, _marked2.default)(entry.description)
						}
					})
				)
			);
		})
	);
};

GenericGrid.displayName = "GenericGrid";
GenericGrid.propTypes = {
	entries: _propTypes2.default.array.isRequired,
	slug: _propTypes2.default.string
};

exports.default = GenericGrid;