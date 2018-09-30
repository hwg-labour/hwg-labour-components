"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toolbox = require("../toolbox");

var _Video = require("../Video");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _slugify = require("slugify");

var _slugify2 = _interopRequireDefault(_slugify);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _marked = require("marked");

var _marked2 = _interopRequireDefault(_marked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PointImage = (0, _styledComponents2.default)(_toolbox.Image).withConfig({
	displayName: "Point__PointImage",
	componentId: "ytl7wc-0"
})(["max-height:40vh;"]);

var PointContent = _styledComponents2.default.div.withConfig({
	displayName: "Point__PointContent",
	componentId: "ytl7wc-1"
})(["font-size:0.9em;"]);

var Point = function Point(_ref) {
	var title = _ref.title,
	    text = _ref.text,
	    image = _ref.image,
	    cta = _ref.cta,
	    reverse = _ref.reverse,
	    bgImage = _ref.bgImage,
	    videoUrl = _ref.videoUrl;

	return _react2.default.createElement(
		_toolbox.Section,
		{ image: bgImage, id: (0, _slugify2.default)(title, { lower: true }) },
		_react2.default.createElement(
			_toolbox.Container,
			{ restrict: true },
			_react2.default.createElement(
				_toolbox.Row,
				{ reverse: reverse },
				_react2.default.createElement(
					_toolbox.Column,
					null,
					title && _react2.default.createElement(
						"h3",
						null,
						title
					),
					text && _react2.default.createElement(PointContent, {
						dangerouslySetInnerHTML: {
							__html: (0, _marked2.default)(text)
						}
					}),
					cta && cta.link && cta.text && _react2.default.createElement(_toolbox.Button, {
						to: cta.link,
						text: cta.text,
						outline: "black"
					})
				),
				_react2.default.createElement(
					_toolbox.Column,
					null,
					image && String(image.file.contentType).match("video\/.*") !== null && _react2.default.createElement(_Video.Video, { video: image.file.url }),
					image && String(image.file.contentType).match("video\/.*") === null && (cta.link ? _react2.default.createElement(
						_toolbox.MaybeLink,
						{ to: cta.link },
						_react2.default.createElement(PointImage, { src: image.file.url, alt: image.description })
					) : _react2.default.createElement(PointImage, { src: image.file.url, alt: image.description })),
					!image && videoUrl && _react2.default.createElement(_Video.Video, { videoUrl: videoUrl })
				)
			)
		)
	);
};

Point.displayName = "Point";
Point.propTypes = {
	bgImage: _propTypes2.default.string,
	cta: _propTypes2.default.shape({
		text: _propTypes2.default.string,
		link: _propTypes2.default.string
	}),
	image: _propTypes2.default.shape({
		file: _propTypes2.default.object,
		description: _propTypes2.default.string
	}),
	reverse: _propTypes2.default.bool,
	text: _propTypes2.default.string,
	title: _propTypes2.default.string,
	videoUrl: _propTypes2.default.string
};

exports.default = Point;