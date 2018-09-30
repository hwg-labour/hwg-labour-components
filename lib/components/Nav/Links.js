"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\tbackground-color: ", ";\n\t\ttop: ", ";\n\t\ttransform: translateY(", "%);\n\t\ttransition: 0.3s all ease-out;\n\n\t\t", ";\n\t"], ["\n\t\tbackground-color: ", ";\n\t\ttop: ", ";\n\t\ttransform: translateY(", "%);\n\t\ttransition: 0.3s all ease-out;\n\n\t\t", ";\n\t"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n\t\tdisplay: flex;\n\t\tbottom: 0;\n\t\theight: ", ";\n\t"], ["\n\t\tdisplay: flex;\n\t\tbottom: 0;\n\t\theight: ", ";\n\t"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n\t\tflex-direction: row;\n\t\tpadding: 0 ", ";\n\t"], ["\n\t\tflex-direction: row;\n\t\tpadding: 0 ", ";\n\t"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n\t\tcolor: ", ";\n\t\tborder-top: 1px solid;\n\t"], ["\n\t\tcolor: ", ";\n\t\tborder-top: 1px solid;\n\t"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n\t\tcolor: ", ";\n\n\t\t&:hover {\n\t\t\t> div {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t"], ["\n\t\tcolor: ", ";\n\n\t\t&:hover {\n\t\t\t> div {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n\t\tdisplay: block;\n\t\tpadding: 0.9em ", ";\n\t\tfont-size: 0.9em;\n\t\tline-height: 1;\n\n\t\t&.active {\n\t\t\tfont-weight: bold;\n\t\t\tbackground-color: ", ";\n\t\t}\n\t"], ["\n\t\tdisplay: block;\n\t\tpadding: 0.9em ", ";\n\t\tfont-size: 0.9em;\n\t\tline-height: 1;\n\n\t\t&.active {\n\t\t\tfont-weight: bold;\n\t\t\tbackground-color: ", ";\n\t\t}\n\t"]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(["\n\t\tdisplay: inline-block;\n\t\theight: ", ";\n\t\tline-height: ", ";\n\t\tpadding: 0 0.75em;\n\t\tfont-size: 0.8em;\n\t\ttext-transform: uppercase;\n\n\t\t&.active {\n\t\t\tbackground-color: ", ";\n\t\t}\n\n\t\t&:not(.active):hover {\n\t\t\tbackground-color: ", ";\n\t\t}\n\t"], ["\n\t\tdisplay: inline-block;\n\t\theight: ", ";\n\t\tline-height: ", ";\n\t\tpadding: 0 0.75em;\n\t\tfont-size: 0.8em;\n\t\ttext-transform: uppercase;\n\n\t\t&.active {\n\t\t\tbackground-color: ", ";\n\t\t}\n\n\t\t&:not(.active):hover {\n\t\t\tbackground-color: ", ";\n\t\t}\n\t"]),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(["\n\t\tdisplay: none;\n\t"], ["\n\t\tdisplay: none;\n\t"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _styles = require("../../styles");

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _gatsbyLink = require("gatsby-link");

var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

var _Dropdown = require("./Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var LinksWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Links__LinksWrapper",
	componentId: "sc-1mlb408-0"
})(["align-items:center;color:", ";justify-content:center;left:0;margin:auto;position:absolute;right:0;", ";", ";"], function (props) {
	return props.theme.colors.link;
}, mixins.xs(_templateObject, function (props) {
	return props.theme.colors.nav.background;
}, function (props) {
	return _styles.theme.dimensions.nav.height.xs;
}, function (props) {
	return props.open ? 0 : -110;
}, mixins.shadow(2)), mixins.bp.sm.min(_templateObject2, function (props) {
	return props.theme.dimensions.nav.linksHeight;
}));

var LinksContainer = _styledComponents2.default.div.withConfig({
	displayName: "Links__LinksContainer",
	componentId: "sc-1mlb408-1"
})(["display:flex;bottom:0;width:100%;max-width:", "px;flex-direction:column;", ";"], function (props) {
	return props.theme.breakpoints.lg.min;
}, mixins.bp.sm.min(_templateObject3, function (props) {
	return props.theme.dimensions.nav.margin.xs;
}));

var LinkWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Links__LinkWrapper",
	componentId: "sc-1mlb408-2"
})(["position:relative;", ";", ";"], mixins.xs(_templateObject4, function (props) {
	return props.theme.colors.background.white;
}), mixins.bp.sm.min(_templateObject5, function (props) {
	return props.theme.colors.nav.alt;
}));

var StyledLink = (0, _styledComponents2.default)(_gatsbyLink2.default).withConfig({
	displayName: "Links__StyledLink",
	componentId: "sc-1mlb408-3"
})(["", " ", ""], mixins.xs(_templateObject6, function (props) {
	return props.theme.dimensions.nav.margin.xs;
}, function (props) {
	return mixins.lightenColor(props.theme.colors.nav.background);
}), mixins.bp.sm.min(_templateObject7, function (props) {
	return props.theme.dimensions.nav.linksHeight;
}, function (props) {
	return props.theme.dimensions.nav.linksHeight;
}, function (props) {
	return mixins.lightenColor(props.theme.colors.nav.background);
}, function (props) {
	return mixins.lightenColor(props.theme.colors.nav.background, 0.1);
}));

var DropdownArrow = _styledComponents2.default.span.withConfig({
	displayName: "Links__DropdownArrow",
	componentId: "sc-1mlb408-4"
})(["margin-left:0.5em;font-size:0.8em;", ";"], mixins.xs(_templateObject8));

// --------------------------------------------------

var Links = function Links(_ref) {
	var links = _ref.links,
	    close = _ref.close,
	    open = _ref.open;
	return _react2.default.createElement(
		LinksWrapper,
		{ open: open },
		_react2.default.createElement(
			LinksContainer,
			null,
			links && links.map(function (link) {
				return _react2.default.createElement(
					LinkWrapper,
					{ key: link.to, onClick: close },
					_react2.default.createElement(
						StyledLink,
						{ to: link.to, activeClassName: "active", exact: true },
						link.content,
						link.dropdown && _react2.default.createElement(
							DropdownArrow,
							null,
							"\u25BC"
						)
					),
					link.dropdown && _react2.default.createElement(_Dropdown2.default, { links: link.dropdown })
				);
			})
		)
	);
};

Links.displayName = "Links";
Links.propTypes = {
	close: _propTypes2.default.func,
	links: _propTypes2.default.array,
	open: _propTypes2.default.bool
};

exports.default = Links;