"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Icon = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconMap = {
	linkedin: _freeBrandsSvgIcons.faLinkedin,
	facebook: _freeBrandsSvgIcons.faFacebook,
	twitter: _freeBrandsSvgIcons.faTwitter,
	youtube: _freeBrandsSvgIcons.faYoutube,
	link: _freeSolidSvgIcons.faLink,
	envelope: _freeSolidSvgIcons.faEnvelope
};

var AwesomeIcon = (0, _styledComponents2.default)(_reactFontawesome.FontAwesomeIcon).withConfig({
	displayName: "Icons__AwesomeIcon",
	componentId: "eiv0a-0"
})(["margin:0.5em;"]);

var Icon = function Icon(props) {
	return iconMap[props.icon] && _react2.default.createElement(AwesomeIcon, {
		icon: iconMap[props.icon]
	});
};

exports.Icon = Icon;