"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\tflex-direction: column;\n\t"], ["\n\t\tflex-direction: column;\n\t"]);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _toolbox = require("../toolbox");

var _marked = require("marked");

var _marked2 = _interopRequireDefault(_marked);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var TeamMemberWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Member__TeamMemberWrapper",
	componentId: "sc-1wb2xjk-0"
})(["display:flex;flex-direction:column;width:100%;", ";"], mixins.xs(_templateObject));

var Name = _styledComponents2.default.h3.withConfig({
	displayName: "Member__Name",
	componentId: "sc-1wb2xjk-1"
})(["display:block;margin-top:0;"]);

var Role = _styledComponents2.default.p.withConfig({
	displayName: "Member__Role",
	componentId: "sc-1wb2xjk-2"
})(["font-weight:bold;"]);

var Links = _styledComponents2.default.div.withConfig({
	displayName: "Member__Links",
	componentId: "sc-1wb2xjk-3"
})(["font-size:1.2em;a{margin-right:0.25em;}"]);

var Description = _styledComponents2.default.div.withConfig({
	displayName: "Member__Description",
	componentId: "sc-1wb2xjk-4"
})([""]);

var PrimaryDetails = _styledComponents2.default.div.withConfig({
	displayName: "Member__PrimaryDetails",
	componentId: "sc-1wb2xjk-5"
})(["display:grid;grid-template-columns:1fr 1fr;padding-bottom:0.5em;grid-column-gap:1em;grid-row-gap:1em;> div{flex-basis:50%;display:flex;flex:1;flex-direction:column;}"]);

var MemberImage = (0, _styledComponents2.default)(_toolbox.Image).withConfig({
	displayName: "Member__MemberImage",
	componentId: "sc-1wb2xjk-6"
})(["max-width:250px;max-height:250px;flex-basis:50%;display:flex;flex:1;object-position:top left;"]);

var Toggle = _styledComponents2.default.div.withConfig({
	displayName: "Member__Toggle",
	componentId: "sc-1wb2xjk-7"
})(["font-weight:bold;margin:0.5em 0;cursor:pointer;"]);

// --------------------------------------------------

var TeamMember = function (_React$Component) {
	(0, _inherits3.default)(TeamMember, _React$Component);

	function TeamMember(props) {
		(0, _classCallCheck3.default)(this, TeamMember);

		var _this = (0, _possibleConstructorReturn3.default)(this, (TeamMember.__proto__ || Object.getPrototypeOf(TeamMember)).call(this, props));

		_this.state = {
			showDescription: false
		};

		_this.toggleDescription = _this.toggleDescription.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(TeamMember, [{
		key: "toggleDescription",
		value: function toggleDescription() {
			this.setState({ showDescription: !this.state.showDescription });
		}
	}, {
		key: "render",
		value: function render() {
			var _props$member = this.props.member,
			    description = _props$member.description,
			    extendedDescription = _props$member.extendedDescription,
			    email = _props$member.email,
			    image = _props$member.image,
			    linkedIn = _props$member.linkedIn,
			    name = _props$member.name,
			    role = _props$member.role,
			    twitter = _props$member.twitter,
			    website = _props$member.website;


			return this.props.member && _react2.default.createElement(
				TeamMemberWrapper,
				null,
				_react2.default.createElement(
					PrimaryDetails,
					null,
					image && _react2.default.createElement(MemberImage, { src: "http://res.cloudinary.com/codogo/image/fetch/c_imagga_scale,w_600,h_800,c_fill,g_face,f_auto/https:" + image.file.url }),
					_react2.default.createElement(
						"div",
						null,
						name && _react2.default.createElement(
							Name,
							null,
							name
						),
						role && _react2.default.createElement(
							Role,
							null,
							role
						),
						(email || linkedIn || website || twitter) && _react2.default.createElement(
							Links,
							null,
							email && _react2.default.createElement(
								"a",
								{ href: "mailto:" + email },
								_react2.default.createElement(_toolbox.Icon, { icon: "envelope" })
							),
							linkedIn && _react2.default.createElement(
								"a",
								{ href: "" + linkedIn },
								_react2.default.createElement(_toolbox.Icon, { icon: "linkedin" })
							),
							website && _react2.default.createElement(
								"a",
								{ href: website },
								_react2.default.createElement(_toolbox.Icon, { icon: "link" })
							),
							twitter && _react2.default.createElement(
								"a",
								{ href: "https://www.twitter.com/" + twitter },
								_react2.default.createElement(_toolbox.Icon, { icon: "twitter" })
							)
						),
						description && _react2.default.createElement(
							"div",
							null,
							description.description
						),
						extendedDescription && _react2.default.createElement(
							Toggle,
							{ onClick: this.toggleDescription },
							this.state.showDescription ? "Read less..." : "Read more..."
						)
					)
				),
				extendedDescription && this.state.showDescription && _react2.default.createElement(Description, {
					dangerouslySetInnerHTML: {
						__html: (0, _marked2.default)(extendedDescription.extendedDescription)
					}
				})
			);
		}
	}]);
	return TeamMember;
}(_react2.default.Component);

TeamMember.displayName = "TeamMember";
;

TeamMember.propTypes = {
	member: _propTypes2.default.shape({
		description: _propTypes2.default.string,
		email: _propTypes2.default.any,
		extendedDescription: _propTypes2.default.string,
		image: _propTypes2.default.any,
		linkedIn: _propTypes2.default.any,
		name: _propTypes2.default.any,
		role: _propTypes2.default.any,
		twitter: _propTypes2.default.any,
		website: _propTypes2.default.any
	}).isRequired
};

exports.default = TeamMember;