"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Background = exports.SecondaryImage = exports.SmartImage = exports.Image = undefined;

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// --------------------------------------------------

var Image = _styledComponents2.default.img.withConfig({
	displayName: "Images__Image",
	componentId: "sc-1v3vnbl-0"
})(["width:100%;height:auto;object-fit:contain;"]);

// --------------------------------------------------

var SecondaryImage = _styledComponents2.default.img.withConfig({
	displayName: "Images__SecondaryImage",
	componentId: "sc-1v3vnbl-1"
})(["width:100%;object-fix:contain;"]);

// --------------------------------------------------

var SmartImage = _styledComponents2.default.div.withConfig({
	displayName: "Images__SmartImage",
	componentId: "sc-1v3vnbl-2"
})(["", ";background-color:rgba(0,0,0,0.2);background-image:url(", ");background-size:cover;background-position:center center;background-repeat:norepeat;margin-left:auto;"], function (props) {
	return props.height && props.width ? props.height <= props.width || props.unlimitedHeight ? "\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding-top: " + 100 * (props.height / props.width) + "%;\n\t\t\t" : "\n\t\t\t\twidth: " + 100 * (props.width / props.height) + "%;\n\t\t\t\tpadding-top: 100%;\n\t\t\t" : "\n\t\t\twidth: 100%;\n\t\t\tpadding-top: 100%;\n\t\t";
}, _ramda2.default.prop("url"));

// --------------------------------------------------

var bgTint = 0.3;

var Background = _styledComponents2.default.div.withConfig({
	displayName: "Images__Background",
	componentId: "sc-1v3vnbl-3"
})(["", ";", ";"], function (props) {
	return props.image ? "\n\t\t\t\tbackground-image:\n\t\t\t\tlinear-gradient( rgba(0,0,0," + (props.tint || bgTint) + "), rgba(0,0,0," + (props.tint || bgTint) + ") ),\n\t\t\t\turl(" + props.image + ");\n\t\t\t\tbackground-size: cover;\n\t\t\t\tbackground-position: center center;\n\t\t\t" : "";
}, function (props) {
	return props.color ? "background-color: " + props.color + ";" : "";
});

exports.Image = Image;
exports.SmartImage = SmartImage;
exports.SecondaryImage = SecondaryImage;
exports.Background = Background;