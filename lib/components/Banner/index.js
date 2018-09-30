"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toolbox = require("../../components/toolbox");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var BannerText = _styledComponents2.default.h2.withConfig({
	displayName: "Banner__BannerText",
	componentId: "qknnzx-0"
})(["&:after{display:none;}"]);

var Banner = function Banner(_ref) {
	var text = _ref.text;

	return _react2.default.createElement(
		_toolbox.Section,
		null,
		_react2.default.createElement(
			_toolbox.Container,
			{ narrow: true },
			_react2.default.createElement(
				_toolbox.Row,
				null,
				_react2.default.createElement(
					_toolbox.Column,
					{ center: true },
					_react2.default.createElement(
						BannerText,
						null,
						text
					)
				)
			)
		)
	);
};

Banner.displayName = "Banner";
Banner.propTypes = {
	text: _propTypes2.default.string
};

exports.default = Banner;