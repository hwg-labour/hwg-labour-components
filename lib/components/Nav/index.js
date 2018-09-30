"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["", ""], ["", ""]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["display: none;"], ["display: none;"]);

var _recompose = require("recompose");

var _styles = require("../../styles");

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _Links = require("./Links");

var _Links2 = _interopRequireDefault(_Links);

var _Logo = require("./Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var _Burger = require("./Burger");

var _Burger2 = _interopRequireDefault(_Burger);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var NavWrapper = _styledComponents2.default.nav.withConfig({
	displayName: "Nav__NavWrapper",
	componentId: "sc-171dq4u-0"
})(["background-color:", ";color:white;left:0;right:0;top:0;z-index:10;position:relative;", "  ", ""], function (props) {
	return props.theme.colors.nav.background;
}, mixins.bp.xs.min(_templateObject, mixins.shadow(0)), function (props) {
	return mixins.bpEither("height", props.theme.dimensions.nav.height);
});

var MobileStuff = _styledComponents2.default.div.withConfig({
	displayName: "Nav__MobileStuff",
	componentId: "sc-171dq4u-1"
})(["", ";", ";"], mixins.bp.sm.min(_templateObject2), mixins.contained());

var Overlay = _styledComponents2.default.div.withConfig({
	displayName: "Nav__Overlay",
	componentId: "sc-171dq4u-2"
})(["", ";", ";transition:0.3s all ease-out;background-color:", ";"], mixins.contained(), function (_ref) {
	var open = _ref.open;
	return open || true ? mixins.shadow(1) : "";
}, function (props) {
	return props.theme.colors.background.medium;
});

var BurgerWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Nav__BurgerWrapper",
	componentId: "sc-171dq4u-3"
})(["position:absolute;right:0;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;z-index:1;"]);

// --------------------------------------------------

var enhance = (0, _recompose.compose)((0, _recompose.withState)("open", "setOpen", false), (0, _recompose.withHandlers)({
	openMenu: function openMenu(_ref2) {
		var setOpen = _ref2.setOpen;
		return function () {
			return setOpen(true);
		};
	},
	closeMenu: function closeMenu(_ref3) {
		var setOpen = _ref3.setOpen;
		return function () {
			return setOpen(false);
		};
	},
	toggleMenu: function toggleMenu(_ref4) {
		var setOpen = _ref4.setOpen,
		    open = _ref4.open;
		return function () {
			return setOpen(!open);
		};
	}
}));

var Nav = function Nav(_ref5) {
	var links = _ref5.links,
	    logo = _ref5.logo,
	    open = _ref5.open,
	    closeMenu = _ref5.closeMenu,
	    toggleMenu = _ref5.toggleMenu;
	return _react2.default.createElement(
		NavWrapper,
		null,
		_react2.default.createElement(_Links2.default, {
			close: closeMenu,
			open: open,
			links: links
		}),
		_react2.default.createElement(
			MobileStuff,
			null,
			_react2.default.createElement(Overlay, { open: open }),
			_react2.default.createElement(
				BurgerWrapper,
				{ onClick: toggleMenu },
				_react2.default.createElement(_Burger2.default, {
					open: open,
					padding: mixins.num(_styles.theme.dimensions.nav.margin.xs),
					color: _styles.theme.colors.nav.background
				})
			)
		),
		_react2.default.createElement(_Logo2.default, { logo: logo })
	);
};

Nav.displayName = "Nav";
Nav.propTypes = {
	closeMenu: _propTypes2.default.func,
	links: _propTypes2.default.array,
	logo: _propTypes2.default.object,
	open: _propTypes2.default.bool,
	toggleMenu: _propTypes2.default.func
};

exports.default = enhance(Nav);