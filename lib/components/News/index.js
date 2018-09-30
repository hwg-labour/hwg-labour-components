"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GenericGrid = require("../GenericGrid");

var _GenericGrid2 = _interopRequireDefault(_GenericGrid);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var News = function News(_ref) {
	var news = _ref.news;
	return _react2.default.createElement(_GenericGrid2.default, { entries: news, slug: "news" });
};

News.displayName = "News";
News.propTypes = {
	news: _propTypes2.default.array.isRequired
};

exports.default = News;