"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.bpEither = exports.bpEach = exports.lg = exports.md = exports.sm = exports.xs = exports.bp = exports.defaultBps = exports.defaultBreakpoints = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["", ": ", ";"], ["", ": ", ";"]);

var _styledComponents = require("styled-components");

var _utility = require("./utility");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var defaultSm = 768;
var defaultMd = 992;
var defaultLg = 1200;

var defaultBreakpoints = exports.defaultBreakpoints = {
	xs: { min: 0, max: defaultSm - 1 },
	sm: { min: defaultSm, max: defaultMd - 1 },
	md: { min: defaultMd, max: defaultLg - 1 },
	lg: { min: defaultLg, max: 100000 }
};
var defaultBps = exports.defaultBps = defaultBreakpoints;

var bp = exports.bp = (0, _utility.objectMap)(defaultBps, function (key, val) {
	return {
		min: function min() {
			return (0, _styledComponents.css)(["@media (min-width:", "px){", ";}"], val.min, _styledComponents.css.apply(undefined, arguments));
		},
		max: function max() {
			return (0, _styledComponents.css)(["@media (max-width:", "px){", ";}"], val.max, _styledComponents.css.apply(undefined, arguments));
		},
		only: function only() {
			return (0, _styledComponents.css)(["@media (min-width:", "px) and (max-width:", "px){", ";}"], val.min, val.max, _styledComponents.css.apply(undefined, arguments));
		}
	};
});

var xs = exports.xs = bp.xs.only;
var sm = exports.sm = bp.sm.only;
var md = exports.md = bp.md.only;
var lg = exports.lg = bp.lg.only;

var bpEach = exports.bpEach = function bpEach(prop, vals) {
	return (0, _styledComponents.css)(["", ";"], Object.keys(vals).map(function (key) {
		return bp[key].only(_templateObject, prop, vals[key]);
	}));
};

var bpEither = exports.bpEither = function bpEither(prop, vals) {
	return (0, _styledComponents.css)(["", " ", ";"], xs(_templateObject, prop, vals.xs), bp.sm.min(_templateObject, prop, vals.other));
};