"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Section = undefined;

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

var Section = _styledComponents2.default.div.withConfig({
	displayName: "Section",
	componentId: "datgza-0"
})(["align-items:center;background-color:", ";display:flex;flex-basis:100%;flex-direction:row;justify-content:center;width:100%;background-image:", ";background-size:cover;&:nth-child(2n){background-color:", ";}", ";"], function (props) {
	return props.theme.colors.background.white;
}, function (props) {
	return props.image && "url(http://res.cloudinary.com/codogo/image/fetch/w_1500,c_fill,g_face,f_auto,o_20/https:" + props.image + ")";
}, function (props) {
	return props.theme.colors.background.lighter;
}, mixins.bp.sm.max(_templateObject));

exports.Section = Section;