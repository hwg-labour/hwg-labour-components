"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var truncate = exports.truncate = function truncate() {
	return "\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n";
};

var bgImage = exports.bgImage = function bgImage(url) {
	return "\n\tbackground-size: cover;\n\tbackground-position: center center;\n\tbackground-image: url(" + url + ");\n";
};

var clearfix = exports.clearfix = {
	general: "\n\t\t&:before,\n\t\t&:after {\n\t\t\tcontent: \"\";\n\t\t\tdisplay: table;\n\t\t}\n\n\t\t&:after {\n\t\t\tclear: both;\n\t\t}\n\t",
	link: "\n\t\ttext-decoration: none;\n\t\tcolor: currentColor;\n\t"
};