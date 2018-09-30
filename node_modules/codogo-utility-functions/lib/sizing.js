"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var wh = exports.wh = function wh(size) {
	return "\n\twidth: " + size + ";\n\theight: " + size + ";\n";
};

var contained = exports.contained = function contained() {
	var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	return "\n\tposition: absolute;\n\ttop: " + offset + ";\n\tright: " + offset + ";\n\tbottom: " + offset + ";\n\tleft: " + offset + ";\n";
};