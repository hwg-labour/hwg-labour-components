"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["grid-template-columns: 1fr 1fr 1fr;"], ["grid-template-columns: 1fr 1fr 1fr;"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["grid-template-columns: 1fr;"], ["grid-template-columns: 1fr;"]);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _toolbox = require("../toolbox");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Member = require("./Member");

var _Member2 = _interopRequireDefault(_Member);

var _slugify = require("slugify");

var _slugify2 = _interopRequireDefault(_slugify);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var TeamMembersWrapper = _styledComponents2.default.div.withConfig({
	displayName: "TeamMembers__TeamMembersWrapper",
	componentId: "sc-18nu2om-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:2em;grid-row-gap:2em;", " ", ""], mixins.bp.lg.only(_templateObject), mixins.bp.xs.only(_templateObject2));

// --------------------------------------------------

var TeamMembers = function TeamMembers(_ref) {
	var members = _ref.members;

	return members && _react2.default.createElement(
		_toolbox.Section,
		null,
		_react2.default.createElement(
			_toolbox.Container,
			null,
			_react2.default.createElement(
				_toolbox.Row,
				null,
				_react2.default.createElement(
					_toolbox.Column,
					null,
					_react2.default.createElement(
						TeamMembersWrapper,
						null,
						members.map(function (member) {
							return _react2.default.createElement(_Member2.default, {
								key: (0, _slugify2.default)(member.name || member.node.name, { lower: true }),
								member: member.node || member
							});
						})
					)
				)
			)
		)
	);
};

TeamMembers.propTypes = {
	members: _propTypes2.default.array
};

exports.default = TeamMembers;