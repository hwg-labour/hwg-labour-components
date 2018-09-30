"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Grid = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\tflex-basis: 100%;\n\t\tpadding: 1em;\n\t"], ["\n\t\tflex-basis: 100%;\n\t\tpadding: 1em;\n\t"]);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

// --------------------------------------------------

var Grid = _styledComponents2.default.div.withConfig({
	displayName: "Grid",
	componentId: "tg9l6n-0"
})(["align-items:flex-start;display:flex;flex-direction:column;padding:3em;flex:1;", ";"], mixins.bp.sm.max(_templateObject));

exports.Grid = Grid;