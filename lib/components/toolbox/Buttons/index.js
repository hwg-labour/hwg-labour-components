"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.IconButton = exports.Button = exports.ButtonWrapper = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["border-width: 1px;"], ["border-width: 1px;"]);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Links = require("../Links");

var _Images = require("../Images");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var ButtonWrapper = exports.ButtonWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Buttons__ButtonWrapper",
	componentId: "hwknuh-0"
})(["margin-top:0.5em;align-items:center;cursor:pointer;display:inline-flex;flex-direction:row;justify-content:center;line-height:1;padding:1em;transition:0.1s linear background;", ";&:hover,&:visited,&:active{color:", ";}", ";"], function (props) {
	return props.margin && "margin: 0.3em;";
}, function (props) {
	return props.color;
}, function (_ref) {
	var outline = _ref.outline,
	    color = _ref.color,
	    hoverColor = _ref.hoverColor;
	return outline ? (0, _styledComponents.css)(["color:", ";border:1.5px solid ", ";", " background:transparent;&:hover,&:visited,&:active{color:", ";}&:hover{opacity:0.7;}"], color, color, mixins.xs(_templateObject), color) : "\n\t\t\t\tcolor: white;\n\t\t\t\tbackground: " + color + ";\n\n\t\t\t\t&:hover,\n\t\t\t\t&:visited,\n\t\t\t\t&:active {\n\t\t\t\t\tcolor: white;\n\t\t\t\t}\n\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground: " + hoverColor + ";\n\t\t\t\t}\n\t\t\t";
});

var Button = function Button(_ref2) {
	var children = _ref2.children,
	    href = _ref2.href,
	    target = _ref2.target,
	    text = _ref2.text,
	    to = _ref2.to,
	    props = (0, _objectWithoutProperties3.default)(_ref2, ["children", "href", "target", "text", "to"]);
	return _react2.default.createElement(
		_Links.MaybeLink,
		(0, _extends3.default)({ to: to, href: href, target: target }, props),
		_react2.default.createElement(
			ButtonWrapper,
			props,
			text || children
		)
	);
};

Button.displayName = "Button";
Button.propTypes = {
	children: _propTypes2.default.any,
	href: _propTypes2.default.any,
	icon: _propTypes2.default.any,
	target: _propTypes2.default.any,
	text: _propTypes2.default.any,
	to: _propTypes2.default.any
};

var IconButton = function IconButton(_ref3) {
	var children = _ref3.children,
	    href = _ref3.href,
	    icon = _ref3.icon,
	    target = _ref3.target,
	    text = _ref3.text,
	    to = _ref3.to,
	    props = (0, _objectWithoutProperties3.default)(_ref3, ["children", "href", "icon", "target", "text", "to"]);
	return _react2.default.createElement(
		_Links.MaybeLink,
		(0, _extends3.default)({ to: to, href: href, target: target }, props),
		_react2.default.createElement(
			ButtonWrapper,
			props,
			icon ? _react2.default.createElement(_Images.Icon, { type: icon, size: "1.2em", marginRight: "0.4em" }) : null,
			_react2.default.createElement(
				"span",
				null,
				text || children
			)
		)
	);
};

IconButton.displayName = "IconButton";
IconButton.propTypes = {
	children: _propTypes2.default.any,
	href: _propTypes2.default.any,
	icon: _propTypes2.default.any,
	target: _propTypes2.default.any,
	text: _propTypes2.default.any,
	to: _propTypes2.default.any
};

exports.Button = Button;
exports.IconButton = IconButton;