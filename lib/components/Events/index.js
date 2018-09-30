"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toolbox = require("../toolbox");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _slugify = require("slugify");

var _slugify2 = _interopRequireDefault(_slugify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var EventTable = _styledComponents2.default.table.withConfig({
	displayName: "Events__EventTable",
	componentId: "jkowhw-0"
})(["border-collapse:collapse;width:100%;font-size:0.7em;thead{border-bottom:", " 2px solid;}thead td{font-size:1.1em;}tr{border-bottom:", " 1px solid;}tr:hover,tr:active{cursor:pointer;background-color:", ";}td{padding:0.5em 0.25em 0;}a{display:block;}"], function (props) {
	return props.theme.colors.grey;
}, function (props) {
	return props.theme.colors.grey;
}, function (props) {
	return props.theme.colors.background.medium;
});

// --------------------------------------------------

var Event = function Event(_ref) {
	var condensed = _ref.condensed,
	    event = (0, _objectWithoutProperties3.default)(_ref, ["condensed"]);

	var Cell = function Cell(_ref2) {
		var children = _ref2.children;
		return _react2.default.createElement(
			"td",
			null,
			_react2.default.createElement(
				_toolbox.MaybeLink,
				{ href: event.link, to: !event.link && "/events/" + (0, _slugify2.default)(event.title, { lower: true }) },
				children
			)
		);
	};

	return _react2.default.createElement(
		"tr",
		null,
		_react2.default.createElement(
			Cell,
			null,
			event.title
		),
		_react2.default.createElement(
			Cell,
			null,
			event.role
		),
		_react2.default.createElement(
			Cell,
			null,
			event.location
		),
		_react2.default.createElement(
			Cell,
			null,
			(0, _moment2.default)(event.date).format("Do MMMM YYYY")
		)
	);
};

Event.displayName = "Event";
Event.propTypes = {
	event: _propTypes2.default.object
};

// --------------------------------------------------

var Events = function Events(_ref3) {
	var events = _ref3.events;

	events.sort(function (a, b) {
		return (0, _moment2.default)(a.node.date).diff((0, _moment2.default)(b.node.date)) < 0 ? 1 : -1;
	});

	var pastEvents = events.filter(function (event) {
		return (0, _moment2.default)(event.node.date).diff((0, _moment2.default)()) < 0;
	}).map(function (event) {
		return _react2.default.createElement(Event, (0, _extends3.default)({}, event.node, { key: (0, _slugify2.default)(event.node.title, { lower: true }) + "-" + event.node.date, condensed: true }));
	});

	var upcomingEvents = events.filter(function (event) {
		return (0, _moment2.default)(event.node.date).diff((0, _moment2.default)()) >= 0;
	}).reverse().map(function (event) {
		return _react2.default.createElement(Event, (0, _extends3.default)({}, event.node, { key: (0, _slugify2.default)(event.node.title, { lower: true }) + "-" + event.node.date }));
	});

	return _react2.default.createElement(
		_toolbox.Section,
		null,
		_react2.default.createElement(
			_toolbox.Container,
			{ narrow: true },
			upcomingEvents && _react2.default.createElement(
				_toolbox.Row,
				null,
				_react2.default.createElement(
					_toolbox.Column,
					null,
					_react2.default.createElement(
						"h2",
						null,
						"Upcoming events"
					),
					_react2.default.createElement(
						EventTable,
						null,
						_react2.default.createElement(
							"tbody",
							null,
							_react2.default.createElement(
								"tr",
								null,
								_react2.default.createElement(
									"th",
									null,
									"Event"
								),
								_react2.default.createElement(
									"th",
									null,
									"Role"
								),
								_react2.default.createElement(
									"th",
									null,
									"Where"
								),
								_react2.default.createElement(
									"th",
									null,
									"When"
								)
							),
							upcomingEvents
						)
					)
				)
			),
			pastEvents && _react2.default.createElement(
				_toolbox.Row,
				null,
				_react2.default.createElement(
					_toolbox.Column,
					null,
					_react2.default.createElement(
						"h2",
						null,
						"Past events"
					),
					_react2.default.createElement(
						EventTable,
						null,
						_react2.default.createElement(
							"tbody",
							null,
							_react2.default.createElement(
								"tr",
								null,
								_react2.default.createElement(
									"th",
									null,
									"Event"
								),
								_react2.default.createElement(
									"th",
									null,
									"Role"
								),
								_react2.default.createElement(
									"th",
									null,
									"Where"
								),
								_react2.default.createElement(
									"th",
									null,
									"When"
								)
							),
							pastEvents
						)
					)
				)
			)
		)
	);
};

Events.displayName = "Events";
Events.propTypes = {
	events: _propTypes2.default.array
};

exports.default = Events;