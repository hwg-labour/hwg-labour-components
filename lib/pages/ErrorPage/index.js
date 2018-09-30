"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toolbox = require("../../components/toolbox");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------

var ErrorPage = function ErrorPage() {
	return _react2.default.createElement(
		_toolbox.Page,
		null,
		_react2.default.createElement(
			_toolbox.Section,
			null,
			_react2.default.createElement(
				_toolbox.Container,
				null,
				_react2.default.createElement(
					_toolbox.Row,
					null,
					_react2.default.createElement(
						_toolbox.Column,
						null,
						_react2.default.createElement(
							"h1",
							null,
							"404"
						),
						_react2.default.createElement(
							"p",
							null,
							"Whoops, this page doesn't exist."
						)
					)
				)
			)
		)
	);
};

ErrorPage.displayName = "ErrorPage";
exports.default = ErrorPage;