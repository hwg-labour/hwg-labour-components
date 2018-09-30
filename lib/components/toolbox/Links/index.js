"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MaybeLink = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// --------------------------------------------------

var MaybeLink = function MaybeLink(props) {
	return props.to ? _react2.default.createElement(_gatsbyLink2.default, {
		to: props.to,
		children: props.children,
		className: props.className
	}) : _react2.default.createElement("a", {
		href: props.href,
		children: props.children,
		target: props.target,
		className: props.className
	});
};

MaybeLink.propTypes = {
	children: _propTypes2.default.any,
	className: _propTypes2.default.any,
	href: _propTypes2.default.any,
	target: _propTypes2.default.any,
	theme: _propTypes2.default.object,
	to: _propTypes2.default.any
};

exports.MaybeLink = MaybeLink;