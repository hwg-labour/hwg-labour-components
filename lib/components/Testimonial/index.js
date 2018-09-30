"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toolbox = require("../toolbox");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _marked = require("marked");

var _marked2 = _interopRequireDefault(_marked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var MemberImage = (0, _styledComponents2.default)(_toolbox.Image).withConfig({
	displayName: "Testimonial__MemberImage",
	componentId: "sc-1azbacg-0"
})(["max-width:250px;max-height:250px;flex-basis:50%;display:flex;flex:1;object-position:top left;align-self:flex-end;"]);

// --------------------------------------------------

var Testimonial = function Testimonial(_ref) {
	var image = _ref.image,
	    quote = _ref.quote,
	    quotee = _ref.quotee;

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
					null,
					quote && _react2.default.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: (0, _marked2.default)(quote.quote)
						}
					}),
					quotee
				),
				_react2.default.createElement(
					_toolbox.Column,
					null,
					image && _react2.default.createElement(MemberImage, { src: "http://res.cloudinary.com/codogo/image/fetch/c_imagga_scale,w_600,h_800,c_fill,g_face,f_auto/https:" + image.file.url })
				)
			)
		)
	);
};

Testimonial.displayName = "Testimonial";
Testimonial.propTypes = {
	image: _propTypes2.default.object,
	quote: _propTypes2.default.object,
	quotee: _propTypes2.default.any
};

exports.default = Testimonial;