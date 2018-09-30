"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\tbottom: ", ";\n\t"], ["\n\t\tbottom: ", ";\n\t"]);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _gatsbyLink = require("gatsby-link");

var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

var _styles = require("../../styles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var LogoWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Logo__LogoWrapper",
	componentId: "sc-9lzhe8-0"
})(["background:white;bottom:0;display:flex;left:0;position:absolute;right:0;top:0;align-items:center;justify-content:center;", ";"], mixins.bp.sm.min(_templateObject, function (props) {
	return props.theme.dimensions.nav.linksHeight;
}));

var LogoContainer = _styledComponents2.default.div.withConfig({
	displayName: "Logo__LogoContainer",
	componentId: "sc-9lzhe8-1"
})(["display:flex;width:100%;height:100%;max-width:", "px;padding:0 ", ";"], function (props) {
	return props.theme.breakpoints.lg.min;
}, function (props) {
	return props.theme.dimensions.nav.margin.xs;
});

var IndexLink = function IndexLink(props) {
	return _react2.default.createElement(_gatsbyLink2.default, (0, _extends3.default)({ to: "/" }, props));
};

IndexLink.displayName = "IndexLink";
var LogoLink = (0, _styledComponents2.default)(IndexLink).withConfig({
	displayName: "Logo__LogoLink",
	componentId: "sc-9lzhe8-2"
})(["display:flex;flex-direction:row;align-items:center;flex:1;"]);

var LogoText = _styledComponents2.default.div.withConfig({
	displayName: "Logo__LogoText",
	componentId: "sc-9lzhe8-3"
})(["font-size:2em;font-family:", ";text-transform:uppercase;"], function (props) {
	return props.theme.font.title.family;
});

var LogoImage = _styledComponents2.default.img.withConfig({
	displayName: "Logo__LogoImage",
	componentId: "sc-9lzhe8-4"
})(["height:80%;width:auto;object-fit:contain;object-position:left;"]);

// --------------------------------------------------

var Logo = function Logo(_ref) {
	var logo = _ref.logo;
	return _react2.default.createElement(
		LogoWrapper,
		null,
		_react2.default.createElement(
			LogoContainer,
			null,
			_react2.default.createElement(
				LogoLink,
				{ to: "/" },
				logo.url ? _react2.default.createElement(LogoImage, { src: logo.url }) : _react2.default.createElement(
					LogoText,
					null,
					logo.text
				)
			)
		)
	);
};

Logo.displayName = "Logo";
Logo.propTypes = {
	logo: _propTypes2.default.shape({
		url: _propTypes2.default.string,
		text: _propTypes2.default.string
	})
};

exports.default = Logo;