"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var defaultColor = [255, 255, 255, 1]; // white

var hexToColor = exports.hexToColor = function hexToColor(hex) {
	var regex = new RegExp();

	if (hex.length === 7) {
		regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
	} else if (hex.length === 4) {
		regex = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i;
	} else {
		return "MIXIN_ERROR";
	}

	var result = regex.exec(hex);
	if (result) {
		return result.filter(function (s, i) {
			return i > 0;
		}).map(function (hexnum) {
			return parseInt(hexnum, 16) * (hexnum.length < 2 ? 17 : 1);
		}).concat(1);
	} else {
		return defaultColor;
	}
};

// returns [ r, g, b, a, ]
var getColor = exports.getColor = function getColor(color) {
	if (!color) {
		return defaultColor;
	} else if (color.constructor === Array) {
		return color.length === 4 ? color : color.concat(1);
	} else if (color.indexOf("#") > -1) {
		return hexToColor(color);
	} else if (color.indexOf("rgb") > -1 || color.indexOf("rgba") > -1) {
		return color.replace(/ /g, "").replace("rgb(", "").replace("rgba(", "").replace(")", "").split(",");
	} else {
		return defaultColor;
	}
};

var rgba = exports.rgba = function rgba() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var r = "";

	if (args.length === 1) {
		r = args[0].join(",");
	} else if (args.length === 2) {
		r = getColor(args[0]).slice(0, 3).concat(args[1]);
	} else if (args.length === 3) {
		r = args.concat(1).join(",");
	} else if (args.length === 4) {
		r = args.join(",");
	} else {
		r = getColor().join(",");
	}

	return "rgba(" + r + ")";
};

var mixColors = exports.mixColors = function mixColors(c1, c2) {
	var num = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
	return rgba(getColor(c1).map(function (h, i) {
		return Math.round(num * h + (1 - num) * getColor(c2)[i]);
	}));
};

var darkenColor = exports.darkenColor = function darkenColor(color) {
	var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
	return mixColors("#000", color, num);
};

var lightenColor = exports.lightenColor = function lightenColor(color) {
	var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
	return mixColors("#fff", color, num);
};

var transparent = exports.transparent = function transparent() {
	var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
	var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var g = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	var b = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	return "rgba(" + r + "," + g + "," + b + "," + num + ")";
};