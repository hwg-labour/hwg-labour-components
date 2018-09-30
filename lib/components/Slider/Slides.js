"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _nukaCarousel = require("nuka-carousel");

var _nukaCarousel2 = _interopRequireDefault(_nukaCarousel);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Slide = require("./Slide");

var _Slide2 = _interopRequireDefault(_Slide);

var _slugify = require("slugify");

var _slugify2 = _interopRequireDefault(_slugify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------


var colorMap = function colorMap(i, colors) {
	if (i % 3 === 0) {
		return colors.tertiary;
	} else if (i % 2 === 0) {
		return colors.secondary;
	} else {
		return colors.primary;
	}
};

// --------------------------------------------------

var Slides = function Slides(_ref) {
	var sliderContents = _ref.sliderContents,
	    mobile = _ref.mobile;

	return _react2.default.createElement(
		_nukaCarousel2.default,
		{
			autoplay: true,
			renderBottomCenterControls: null,
			slidesToShow: mobile ? 1 : 3
		},
		sliderContents.map(function (slide, i) {
			return _react2.default.createElement(_Slide2.default, {
				key: "slider-slide-" + (0, _slugify2.default)(slide.title, { lower: true }),
				colorCount: i + 1,
				slide: slide
			});
		})
	);
};

Slides.displayName = "Slides";
Slides.propTypes = {
	mobile: _propTypes2.default.bool,
	sliderContents: _propTypes2.default.array,
	sliderSettings: _propTypes2.default.object
};

exports.default = Slides;