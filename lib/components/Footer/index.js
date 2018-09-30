"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\tflex-wrap: wrap;\n\t\theight: auto;\n\t"], ["\n\t\tflex-wrap: wrap;\n\t\theight: auto;\n\t"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n\t\tpadding-top: 0;\n\t\tpadding-bottom: 0;\n\t\tfont-size: 0.9em;\n\t"], ["\n\t\tpadding-top: 0;\n\t\tpadding-bottom: 0;\n\t\tfont-size: 0.9em;\n\t"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n\t\twidth: 100%;\n\t\tpadding: 4px;\n\t"], ["\n\t\twidth: 100%;\n\t\tpadding: 4px;\n\t"]);

// --------------------------------------------------

var _toolbox = require("../toolbox");

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _gatsbyLink = require("gatsby-link");

var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _slugify = require("slugify");

var _slugify2 = _interopRequireDefault(_slugify);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require("../../styles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterWrapper = _styledComponents2.default.footer.withConfig({
	displayName: "Footer__FooterWrapper",
	componentId: "choxbu-0"
})(["background-color:", ";position:absolute;right:0;left:0;bottom:0;overflow:hidden;"], function (props) {
	return props.theme.colors.footer;
});

var Inner = _styledComponents2.default.div.withConfig({
	displayName: "Footer__Inner",
	componentId: "choxbu-1"
})(["", ";", ";align-items:center;display:flex;justify-content:space-between;color:white;max-width:", "px;margin:0 auto;", ";", ";"], mixins.bpEither("height", _styles.theme.dimensions.footer.height), mixins.bpEither("padding", _styles.theme.dimensions.nav.margin), function (props) {
	return props.theme.breakpoints.lg.min;
}, mixins.xs(_templateObject), mixins.bp.sm.min(_templateObject2));

var FooterSection = _styledComponents2.default.div.withConfig({
	displayName: "Footer__FooterSection",
	componentId: "choxbu-2"
})(["text-align:center;", ";"], mixins.xs(_templateObject3));

var FooterLinks = _styledComponents2.default.div.withConfig({
	displayName: "Footer__FooterLinks",
	componentId: "choxbu-3"
})(["text-align:center;", ";> a{margin:0 0.5em;}"], mixins.xs(_templateObject3));

var Contact = (0, _styledComponents2.default)(FooterSection).withConfig({
	displayName: "Footer__Contact",
	componentId: "choxbu-4"
})(["order:0;a{color:white;&:hover{color:#ddd;text-decoration:underline;}}"]);

var Social = (0, _styledComponents2.default)(FooterSection).withConfig({
	displayName: "Footer__Social",
	componentId: "choxbu-5"
})(["display:flex;flex-direction:row;justify-content:center;font-size:1.5em;margin:0 -0.25em;order:1;> a{&:hover{opacity:0.7;}}"]);

var Footer = function Footer(_ref) {
	var footerText = _ref.footerText,
	    footerLinks = _ref.footerLinks,
	    socialLinks = _ref.socialLinks;

	return _react2.default.createElement(
		FooterWrapper,
		null,
		_react2.default.createElement(
			Inner,
			null,
			_react2.default.createElement(
				Contact,
				null,
				footerText
			),
			_react2.default.createElement(
				FooterLinks,
				null,
				footerLinks.map(function (link) {
					return _react2.default.createElement(
						_gatsbyLink2.default,
						{ key: (0, _slugify2.default)(link.title, { lower: true }), to: (0, _slugify2.default)(link.title.toLowerCase()) },
						link.title
					);
				})
			),
			_react2.default.createElement(
				Social,
				null,
				socialLinks && socialLinks.map(function (link) {
					return _react2.default.createElement(
						"a",
						{
							key: "footer-" + link.type + "-" + link.link,
							href: link.link,
							style: link.type === "phone" ? {
								marginRight: "0.5em",
								paddingRight: "0.75em",
								borderRight: "1px solid white"
							} : undefined
						},
						_react2.default.createElement(_toolbox.Icon, { icon: link.type })
					);
				})
			)
		)
	);
};

Footer.displayName = "Footer";
Footer.propTypes = {
	footerLinks: _propTypes2.default.array,
	footerText: _propTypes2.default.string,
	socialLinks: _propTypes2.default.array
};

exports.default = Footer;