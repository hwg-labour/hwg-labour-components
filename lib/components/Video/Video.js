"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Video = undefined;

var _parseVideoUrl = require("./parseVideoUrl");

var _videoReact = require("video-react");

var _ReactVideoWrapper = require("./ReactVideoWrapper");

var _VimeoWrapper = require("./VimeoWrapper");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactVimeo = require("react-vimeo");

var _reactVimeo2 = _interopRequireDefault(_reactVimeo);

var _reactYoutube = require("react-youtube");

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var ResponsiveYouTubeWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Video__ResponsiveYouTubeWrapper",
	componentId: "sc-1n2719i-0"
})(["position:relative;padding-bottom:56.25%;padding-top:25px;height:0;width:100%;span{position:absolute;top:0;left:0;width:100%;height:100%;}"]);

// --------------------------------------------------

var Video = exports.Video = function Video(_ref) {
	var videoUrl = _ref.videoUrl,
	    video = _ref.video;

	var parsedVideoUrl = videoUrl ? (0, _parseVideoUrl.parseVideoUrl)(videoUrl) : undefined;

	if (videoUrl && parsedVideoUrl) {
		return parsedVideoUrl.platform === "vimeo" ? _react2.default.createElement(
			_VimeoWrapper.VimeoWrapper,
			null,
			_react2.default.createElement(_reactVimeo2.default, { videoId: parsedVideoUrl.id })
		) : _react2.default.createElement(
			ResponsiveYouTubeWrapper,
			null,
			_react2.default.createElement(_reactYoutube2.default, {
				videoId: parsedVideoUrl.id,
				opts: { height: "100%", width: "100%" }
			})
		);
	} else {
		return _react2.default.createElement(
			_ReactVideoWrapper.ReactVideoWrapper,
			null,
			_react2.default.createElement(_videoReact.Player, { playsInline: true, src: video })
		);
	}
};