"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Page = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\tdisplay: flex;\n\t"], ["\n\t\tdisplay: flex;\n\t"]);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var Page = _styledComponents2.default.div.withConfig({
	displayName: "Page",
	componentId: "sc-1gvhupq-0"
})(["display:flex;margin:0;padding:0;flex-direction:column;", ";"], mixins.bp.sm.max(_templateObject));

exports.Page = Page;