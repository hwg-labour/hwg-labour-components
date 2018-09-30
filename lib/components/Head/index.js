"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactHelmet = require("react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Head = function Head(_ref) {
	var site = _ref.site,
	    page = _ref.page;

	return site || page ? _react2.default.createElement(
		_reactHelmet2.default,
		null,
		_react2.default.createElement("meta", { charSet: "utf-8" }),
		_react2.default.createElement("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
		_react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
		console.log(site, page),
		_react2.default.createElement("link", {
			rel: "canonical",
			href: site.url + "/" + (page.slug ? page.slug : "")
		}),
		_react2.default.createElement(
			"title",
			null,
			page && page.title ? page.title + " | " + site.siteTitle : site.siteTitle + " | " + site.siteDescription
		),
		_react2.default.createElement("meta", {
			name: "description",
			content: page && page.description ? page.description : site.siteDescription
		}),
		_react2.default.createElement("meta", {
			property: "og:url",
			content: "http://www.thebusinessofcities.com/" + (page && page.slug ? page.slug : "")
		}),
		_react2.default.createElement("meta", { property: "og:type", content: "website" }),
		_react2.default.createElement("meta", {
			property: "og:title",
			content: page && page.title ? page.title + " | " + site.siteTitle : site.siteTitle + " | " + site.siteDescription
		}),
		_react2.default.createElement("meta", { property: "og:site_name", content: site.sitetitle }),
		_react2.default.createElement("meta", {
			property: "og:description",
			content: page && page.description ? page.description : site.siteDescription
		}),
		_react2.default.createElement("link", {
			rel: "image_src",
			type: "image/jpeg",
			href: page && page.image ? page.image.url : site.homeImage.url
		}),
		_react2.default.createElement("meta", {
			property: "og:image",
			content: page && page.image ? page.image.url : site.homeImage.url
		}),
		_react2.default.createElement("meta", { property: "og:image:width", content: "180" }),
		_react2.default.createElement("meta", { property: "og:image:height", content: "110" }),
		_react2.default.createElement("meta", {
			property: "og:image",
			content: page && page.image ? page.image.url : site.homeImage.url
		}),
		_react2.default.createElement("meta", { property: "og:image:width", content: "600" }),
		_react2.default.createElement("meta", { property: "og:image:height", content: "315" }),
		_react2.default.createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
		_react2.default.createElement("meta", { name: "twitter:site", content: _styles.theme.meta.twitterUsername }),
		_react2.default.createElement("meta", { name: "twitter:creator", content: _styles.theme.meta.twitterCreator }),
		page && page.title ? "<meta name = \"twitter:title\" content = " + page.title + " />\n\t\t\t\t" : "<meta name = \"twitter:title\" content = " + site.siteTitle + " />\n\t\t\t\t",
		_react2.default.createElement("meta", {
			name: "twitter:url",
			content: "http://www.thebusinessofcities.com/" + (page && page.slug ? page.slug : "")
		}),
		_react2.default.createElement("meta", {
			name: "twitter:description",
			content: page && page.description ? page.description : site.siteDescription
		}),
		_react2.default.createElement("meta", {
			name: "twitter:image:src",
			content: page && page.image ? page.image.url : site.homeImage.url
		}),
		_react2.default.createElement("meta", {
			name: "google-site-verification",
			content: _styles.theme.meta.googleSearch
		})
	) : _react2.default.createElement(
		_reactHelmet2.default,
		null,
		_react2.default.createElement("meta", { charSet: "utf-8" }),
		_react2.default.createElement("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
		_react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" })
	);
};

// --------------------------------------------------

Head.propTypes = {
	page: _propTypes2.default.object,
	site: _propTypes2.default.object
};

exports.default = Head;