'use strict';

var activity = require('./mockups/activity.js');
var location = require('./mockups/location.js');
var places = require('./mockups/places.js');
var routes = require('./mockups/routes.js');
var activityObject = require('./mockups/activity-object.js');
var locationObject = require('./mockups/location-object.js');

//
const Data = {
  Activity: activity.Activity,
  Location: location.Location,
  Places: places.Places,
  Routes: routes.Routes,
  ActivityObject: activityObject.ActivityObject,
  LocationObject: locationObject.LocationObject
};

module.exports = Data;
