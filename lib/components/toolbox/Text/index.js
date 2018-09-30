"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TextCell = exports.TextBox = exports.Paragraph = exports.LineCell = exports.Line = undefined;

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

var Line = exports.Line = _styledComponents2.default.div.withConfig({
	displayName: "Text__Line",
	componentId: "sc-1f9gex0-0"
})(["height:1.5px;width:100%;background-color:", ";"], _ramda2.default.path(["theme", "text"]));

var LineCellWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Text__LineCellWrapper",
	componentId: "sc-1f9gex0-1"
})(["padding-left:0;padding-right:0;"]);

var LineCell = exports.LineCell = function LineCell() {
	return _react2.default.createElement(
		LineCellWrapper,
		null,
		_react2.default.createElement(Line, null)
	);
};

LineCell.displayName = "LineCell";
var Paragraph = exports.Paragraph = function Paragraph(props) {
	return _react2.default.createElement(
		"div",
		null,
		props.children.split("\n").map(function (p, i) {
			return _react2.default.createElement(
				"p",
				{ key: p.slice(0, 5) + "/" + i },
				p
			);
		})
	);
};

Paragraph.displayName = "Paragraph";
var textBoxMargins = mixins.objectMap(16, function (key, val) {
	return "-" + val + " auto";
});

var TextBox = exports.TextBox = _styledComponents2.default.div.withConfig({
	displayName: "Text__TextBox",
	componentId: "sc-1f9gex0-2"
})(["", "  ", "  ", ";"], mixins.bpEach("margin", textBoxMargins), function (p) {
	return p.bold ? "font-weight: bold;" : "";
}, function (p) {
	return p.align ? "text-align: " + p.align + ";" : "";
});

var GridCell = _styledComponents2.default.div.withConfig({
	displayName: "Text__GridCell",
	componentId: "sc-1f9gex0-3"
})(["font-weight:bold;"]);

var TextCell = exports.TextCell = function TextCell(props) {
	return _react2.default.createElement(
		GridCell,
		props,
		_react2.default.createElement(
			TextBox,
			_ramda2.default.pick(["bold", "align"])(props),
			props.children
		)
	);
};
TextCell.displayName = "TextCell";