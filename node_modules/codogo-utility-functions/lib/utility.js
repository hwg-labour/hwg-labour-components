"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.em = exports.addEm = exports.px = exports.addPx = exports.num = exports.removePx = exports.path = exports.bindMethods = exports.sentenceCase = exports.printObj = exports.objectMap = undefined;

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var objectMap = exports.objectMap = function objectMap(object, something) {
	return Object.keys(object).reduce(function (accumulator, key) {
		return Object.assign({}, accumulator, (0, _defineProperty3.default)({}, key, something(key, object[key])));
	}, {});
};

var printObj = exports.printObj = function printObj(obj) {
	return JSON.stringify(obj, null, "  ");
};

var sentenceCase = exports.sentenceCase = function sentenceCase(str) {
	return str.slice(0, 1).toUpperCase() + str.slice(1);
};

var bindMethods = exports.bindMethods = function bindMethods(that, methods) {
	methods.forEach(function (name) {
		that[name] = that[name].bind(that);
	});
};

var path = exports.path = function path(pathStr) {
	return _ramda2.default.path(pathStr.split(".").map(function (key) {
		var num = parseInt(key, 10);
		return isNaN(num) ? key : num;
	}));
};

var removePx = exports.removePx = function removePx(npx) {
	return +npx.replace("px", "");
};
var num = exports.num = removePx;

var addPx = exports.addPx = function addPx(n) {
	return n + "px";
};
var px = exports.px = addPx;

var addEm = exports.addEm = function addEm(n) {
	return n + "em";
};
var em = exports.em = addEm;