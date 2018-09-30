"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require("styled-components");

var _codogoUtilityFunctions = require("codogo-utility-functions");

var mixins = _interopRequireWildcard(_codogoUtilityFunctions);

var _theme = require("./theme");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// --------------------------------------------------

var defaultGlobalStyles = function defaultGlobalStyles(customTheme) {
	var activeTheme = customTheme || _theme2.default;

	return (0, _styledComponents.css)(["*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;}html{min-height:100%;position:relative;}body{background-color:", ";font-family:", ";", " color:", ";margin:0;", " line-height:1.5;text-rendering:optimizeLegibility;}a,a:hover,a:visited,a:active{color:black;color:currentColor;font-weight:bold;text-decoration:none;}h1,h2,h3,h4{", " ", "}img{vertical-align:bottom;}@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Lora:400,700|Montserrat:400,600');p,ul,ol{font-family:\"Lora\",serif;font-size:1.0em;}p{", " a{&,&:hover,&:visited,&:active{text-decoration:underline;font-weight:bold;color:", ";}&:hover,&:active{color:", ";opacity:0.7;}}img{max-width:100%;}}ul,ol,li{", ";}ul,ol,li{margin-left:1.5em;}h1,h2,h3{display:inline-block;:after{padding:0.1em 0;content:'';display:block;width:5em;border-bottom:0.4em solid ", ";}}hr{border:0;border-top:0.4em solid ", ";margin:2em 0;}"], activeTheme.colors.background.medium, activeTheme.font.family, mixins.bpEach("font-size", activeTheme.font.size), activeTheme.colors.text, mixins.bpEither("margin-bottom", activeTheme.dimensions.footer.height), mixins.bpEach("margin-top", activeTheme.font.size), mixins.bpEach("margin-bottom", activeTheme.font.size), mixins.bpEach("margin-bottom", activeTheme.font.size), activeTheme.colors.link, activeTheme.colors.linkHover, mixins.bpEach("margin-bottom", activeTheme.font.size), activeTheme.colors.background.medium, activeTheme.colors.background.medium);
};

exports.default = defaultGlobalStyles;