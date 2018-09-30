"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Container = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\tflex-basis: 100%;\n\t"], ["\n\t\tflex-basis: 100%;\n\t"]);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Links = require("../Links");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

// --------------------------------------------------

var Container = _styledComponents2.default.div.withConfig({
	displayName: "Container",
	componentId: "sc-16jdgo4-0"
})(["align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;width:100%;", ";", ";", ";"], function (props) {
	return props.restrict && "max-width: 1000px";
}, function (props) {
	return props.narrow && "max-width: 750px";
}, mixins.bp.sm.max(_templateObject));

exports.Container = Container;