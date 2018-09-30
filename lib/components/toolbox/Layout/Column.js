"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Column = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\tflex-basis: 100% !important;\n\t\tpadding: 1em;\n\t\t\n\t"], ["\n\t\tflex-basis: 100% !important;\n\t\tpadding: 1em;\n\t\t\n\t"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n\t\t&:first-child {\n\t\t\tflex: 1;\n\t\t}\n\n\t\t&:last-child {\n\t\t\tflex: 1;\n\t\t}\n\n\t\t> img,\n\t\t> a > img {\n\t\t\tpadding: 2em;\n\t\t}\n\t"], ["\n\t\t&:first-child {\n\t\t\tflex: 1;\n\t\t}\n\n\t\t&:last-child {\n\t\t\tflex: 1;\n\t\t}\n\n\t\t> img,\n\t\t> a > img {\n\t\t\tpadding: 2em;\n\t\t}\n\t"]);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

// --------------------------------------------------

var Column = _styledComponents2.default.div.withConfig({
	displayName: "Column",
	componentId: "gi12iw-0"
})(["align-items:flex-start;display:flex;flex-direction:column;flex:1;&:not(:last-child){padding-left:0.5em;}&:not(:first-child){padding-right:0.5em;}", ";", " ", ";"], mixins.bp.sm.max(_templateObject), mixins.bp.sm.min(_templateObject2), function (props) {
	return props.center && "align-items: center; text-align: center;";
});

exports.Column = Column;