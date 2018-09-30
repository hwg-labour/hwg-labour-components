"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// --------------------------------------------------

var gridColumns = function gridColumns(logosPerRow) {
	return _ramda2.default.map(function (n) {
		return "repeat(" + n + ", 1fr)";
	})(logosPerRow);
};

var LogoGridWrapper = _styledComponents2.default.div.withConfig({
	displayName: "LogoGrid__LogoGridWrapper",
	componentId: "u8yrca-0"
})(["display:grid;", " grid-gap:2em;margin-bottom:2em;"], function (props) {
	return mixins.bpEach("grid-template-columns", gridColumns(props.logosPerRow));
});

var LogoWrapper = _styledComponents2.default.a.withConfig({
	displayName: "LogoGrid__LogoWrapper",
	componentId: "u8yrca-1"
})(["display:block;width:100%;"]);

var LogoInner = _styledComponents2.default.div.withConfig({
	displayName: "LogoGrid__LogoInner",
	componentId: "u8yrca-2"
})(["width:100%;padding-top:88%;position:relative;"]);

var LogoImage = _styledComponents2.default.div.withConfig({
	displayName: "LogoGrid__LogoImage",
	componentId: "u8yrca-3"
})(["", " background-image:url(", ");background-size:contain;background-repeat:no-repeat;background-position:center center;"], mixins.contained(), _ramda2.default.prop("src"));

// --------------------------------------------------

var LogoGrid = function LogoGrid(_ref) {
	var logos = _ref.logos,
	    logosPerRow = _ref.logosPerRow;

	return logos && _react2.default.createElement(
		LogoGridWrapper,
		{ logosPerRow: logosPerRow },
		logos.map(function (_ref2) {
			var image = _ref2.image,
			    link = _ref2.link;
			return image && _react2.default.createElement(
				LogoWrapper,
				{ key: "logo-" + image.file.url, href: link },
				_react2.default.createElement(
					LogoInner,
					null,
					_react2.default.createElement(LogoImage, {
						src: "http://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:" + (image && image.file.url)
					})
				)
			);
		})
	);
};

LogoGrid.defaultProps = {
	logosPerRow: {
		xs: 2,
		sm: 3,
		md: 4,
		lg: 4
	}
};

LogoGrid.propTypes = {
	logos: _propTypes2.default.array.isRequired,
	logosPerRow: _propTypes2.default.object.isRequired
};

exports.default = LogoGrid;