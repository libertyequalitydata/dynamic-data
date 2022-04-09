'use strict';

var activity = require('./mockups/activity.js');
var location = require('./mockups/location.js');
var places = require('./mockups/places.js');
var routes = require('./mockups/routes.js');

//
var Data = {
  Activity: activity.Activity,
  Location: location.Location,
  Places: places.Places,
  Routes: routes.Routes
};

module.exports = Data;
