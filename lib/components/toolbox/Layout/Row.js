"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Row = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\tflex-wrap: wrap;\n\t"], ["\n\t\tflex-wrap: wrap;\n\t"]);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

// --------------------------------------------------

var Row = _styledComponents2.default.div.withConfig({
	displayName: "Row",
	componentId: "sc-1thkhtj-0"
})(["display:flex;flex-direction:row;justify-content:center;width:100%;align-items:center;padding:3em;&:not(:last-child){padding-bottom:1em;}&:not(:first-child){padding-top:1em;}", ";", ";", ";"], function (props) {
	return props.reverse && "flex-direction: row-reverse;";
}, function (props) {
	return props.noPadding && "padding: 0 !important;";
}, mixins.bp.sm.max(_templateObject));

exports.Row = Row;