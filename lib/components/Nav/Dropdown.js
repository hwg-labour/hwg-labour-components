"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\tborder-top: 1px solid;\n\t\t", ";\n\t"], ["\n\t\tborder-top: 1px solid;\n\t\t", ";\n\t"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n\t\t&:hover {\n\t\t\t> div {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t"], ["\n\t\t&:hover {\n\t\t\t> div {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n\t\tdisplay: block;\n\t\tpadding: 0.9em ", ";\n\t\tfont-size: 0.9em;\n\t\tline-height: 1;\n\n\t\t&.active {\n\t\t\tfont-weight: bold;\n\t\t\tbackground-color: ", ";\n\t\t}\n\t"], ["\n\t\tdisplay: block;\n\t\tpadding: 0.9em ", ";\n\t\tfont-size: 0.9em;\n\t\tline-height: 1;\n\n\t\t&.active {\n\t\t\tfont-weight: bold;\n\t\t\tbackground-color: ", ";\n\t\t}\n\t"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n\t\tdisplay: inline-block;\n\t\theight: ", ";\n\t\tline-height: ", ";\n\t\tpadding: 0 0.75em;\n\t\tfont-size: 0.8em;\n\t\ttext-transform: uppercase;\n\n\t\t&.active {\n\t\t\tbackground-color: ", ";\n\t\t}\n\n\t\t&:not(.active):hover {\n\t\t\tbackground-color: ", ";\n\t\t}\n\t"], ["\n\t\tdisplay: inline-block;\n\t\theight: ", ";\n\t\tline-height: ", ";\n\t\tpadding: 0 0.75em;\n\t\tfont-size: 0.8em;\n\t\ttext-transform: uppercase;\n\n\t\t&.active {\n\t\t\tbackground-color: ", ";\n\t\t}\n\n\t\t&:not(.active):hover {\n\t\t\tbackground-color: ", ";\n\t\t}\n\t"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n\t\tbackground: ", ";\n\n\t\t&,\n\t\ta {\n\t\t\tcolor: ", " !important;\n\n\t\t\t&:hover {\n\t\t\t\tcolor: ", " !important;\n\t\t\t}\n\t\t}\n\t"], ["\n\t\tbackground: ", ";\n\n\t\t&,\n\t\ta {\n\t\t\tcolor: ", " !important;\n\n\t\t\t&:hover {\n\t\t\t\tcolor: ", " !important;\n\t\t\t}\n\t\t}\n\t"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n\t\tpadding-left: 2em;\n\t"], ["\n\t\tpadding-left: 2em;\n\t"]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(["\n\t\tfont-size: 0.9em;\n\t\topacity: 0.67;\n\t"], ["\n\t\tfont-size: 0.9em;\n\t\topacity: 0.67;\n\t"]),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(["\n\t\tdisplay: none;\n\t\tbackground: ", ";\n\t\tposition: absolute;\n\t\ttop: ", ";\n\t\tleft: 0;\n\t\twidth: 22em;\n\n\t\ta {\n\t\t\tdisplay: block;\n\t\t\tborder: 0;\n\t\t}\n\t"], ["\n\t\tdisplay: none;\n\t\tbackground: ", ";\n\t\tposition: absolute;\n\t\ttop: ", ";\n\t\tleft: 0;\n\t\twidth: 22em;\n\n\t\ta {\n\t\t\tdisplay: block;\n\t\t\tborder: 0;\n\t\t}\n\t"]);

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var LinkWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Dropdown__LinkWrapper",
	componentId: "hg6lep-0"
})(["position:relative;", ";", ";"], mixins.xs(_templateObject, _ramda2.default.pipe(_ramda2.default.path(["theme", "nav"]), function (color) {
	return mixins.darkenColor(color, 0.2);
})), mixins.bp.sm.min(_templateObject2));

var StyledLink = (0, _styledComponents2.default)(_gatsbyLink2.default).withConfig({
	displayName: "Dropdown__StyledLink",
	componentId: "hg6lep-1"
})(["color:", ";", ";", ";"], function (props) {
	return props.theme.colors.link;
}, mixins.xs(_templateObject3, function (props) {
	return props.theme.dimensions.nav.margin.xs;
}, function (props) {
	return mixins.lightenColor(props.theme.colors.nav.background, 0.8);
}), mixins.bp.sm.min(_templateObject4, function (props) {
	return props.theme.dimensions.nav.linksHeight;
}, function (props) {
	return props.theme.dimensions.nav.linksHeight;
}, function (props) {
	return mixins.lightenColor(props.theme.colors.nav.background, 0.8);
}, function (props) {
	return mixins.lightenColor(props.theme.colors.nav.background, 0.8);
}));

var StyledDropdownLink = (0, _styledComponents2.default)(StyledLink).withConfig({
	displayName: "Dropdown__StyledDropdownLink",
	componentId: "hg6lep-2"
})(["", ";", ""], mixins.bp.md.min(_templateObject5, function (props) {
	return props.theme.colors.background.light;
}, function (props) {
	return props.theme.colors.link;
}, function (props) {
	return props.theme.colors.linkHover;
}), mixins.xs(_templateObject6));

var DropdownLinks = _styledComponents2.default.div.withConfig({
	displayName: "Dropdown__DropdownLinks",
	componentId: "hg6lep-3"
})(["", ";", ";"], mixins.xs(_templateObject7), mixins.bp.sm.min(_templateObject8, _ramda2.default.pipe(_ramda2.default.path(["theme", "nav"]), mixins.lightenColor), function (props) {
	return props.theme.dimensions.nav.linksHeight;
}));

// --------------------------------------------------

var Dropdown = function Dropdown(_ref) {
	var links = _ref.links;
	return _react2.default.createElement(
		DropdownLinks,
		null,
		links.map(function (_ref2) {
			var content = _ref2.content,
			    to = _ref2.to;
			return _react2.default.createElement(
				LinkWrapper,
				{ key: to },
				_react2.default.createElement(
					StyledDropdownLink,
					{
						to: to,
						activeClassName: "active",
						exact: true
					},
					content
				)
			);
		})
	);
};

Dropdown.displayName = "Dropdown";
Dropdown.propTypes = {
	links: _propTypes2.default.array
};

exports.default = Dropdown;