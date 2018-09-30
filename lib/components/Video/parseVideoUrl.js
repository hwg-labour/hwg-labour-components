"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.parseVideoThumbnail = exports.parseVideoUrl = undefined;

var _ramda = require("ramda");

var R = _interopRequireWildcard(_ramda);

var _nodeFetch = require("node-fetch");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _urlParse = require("url-parse");

var _urlParse2 = _interopRequireDefault(_urlParse);

var _xmlParser = require("xml-parser");

var _xmlParser2 = _interopRequireDefault(_xmlParser);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var parseVideoUrl = exports.parseVideoUrl = function parseVideoUrl(videoUrl) {
	return R.contains("vimeo", videoUrl) ? {
		platform: "vimeo",
		id: (0, _urlParse2.default)(videoUrl, true).pathname.split("/")[1]
	} : {
		platform: "youtube",
		id: (0, _urlParse2.default)(videoUrl, true).query.v
	};
};

var extractVimeoThumbnail = R.pipe(_xmlParser2.default, R.path(["root", "children", 0, "children"]), R.find(R.propEq("name", "thumbnail_large")), R.prop("content"), R.replace(/https?:/, ""));

var parseVimeoThumbnail = function parseVimeoThumbnail(videoId, callback) {
	return (0, _nodeFetch2.default)("http://vimeo.com/api/v2/video/" + videoId + ".xml").then(function (response) {
		return response.text();
	}).then(extractVimeoThumbnail).then(callback);
};

var parseYouTubeThumbnail = function parseYouTubeThumbnail(videoId, callback) {
	callback("//img.youtube.com/vi/" + videoId + "/hqdefault.jpg");
};

var parseVideoThumbnail = exports.parseVideoThumbnail = function parseVideoThumbnail(videoUrl, callback) {
	var video = parseVideoUrl(videoUrl);

	video.platform === "vimeo" ? parseVimeoThumbnail(video.id, callback) : parseYouTubeThumbnail(video.id, callback);
};