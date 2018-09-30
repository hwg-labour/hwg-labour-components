"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _LogoGrid = require("../LogoGrid");

var _LogoGrid2 = _interopRequireDefault(_LogoGrid);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _slugify = require("slugify");

var _slugify2 = _interopRequireDefault(_slugify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var CategoryWrapper = _styledComponents2.default.div.withConfig({
	displayName: "PartnerCategory__CategoryWrapper",
	componentId: "sc-1v5mnkg-0"
})(["margin-bottom:1em;flex:1;width:100%;"]);

// --------------------------------------------------

var PartnerCategory = function PartnerCategory(_ref) {
	var category = _ref.category;

	return category && _react2.default.createElement(
		CategoryWrapper,
		null,
		_react2.default.createElement(
			"h2",
			null,
			category.title
		),
		category.partner && _react2.default.createElement(_LogoGrid2.default, {
			logos: category.partner.map(function (partner) {
				return {
					image: partner.image,
					link: "/partners/" + (0, _slugify2.default)(partner.name, { lower: true })
				};
			})
		})
	);
};

PartnerCategory.propTypes = {
	category: _propTypes2.default.any.isRequired
};

exports.default = PartnerCategory;