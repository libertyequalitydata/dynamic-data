'use strict';

var Activity = require('./mockups/Activity.js');
var ActivityComments = require('./mockups/ActivityComments.js');
var ActivityKudoers = require('./mockups/ActivityKudoers.js');
var ActivityLaps = require('./mockups/ActivityLaps.js');
var ActivityStream = require('./mockups/ActivityStream.js');
var ActivityZones = require('./mockups/ActivityZones.js');
var AthleteActivities = require('./mockups/AthleteActivities.js');
var AthleteClubs = require('./mockups/AthleteClubs.js');
var AthleteRoute = require('./mockups/AthleteRoute.js');
var AthleteStats = require('./mockups/AthleteStats.js');
var AuthenticatedAthlete = require('./mockups/AuthenticatedAthlete.js');
var Club = require('./mockups/Club.js');
var ClubActivities = require('./mockups/ClubActivities.js');
var ClubAdministrators = require('./mockups/ClubAdministrators.js');
var ClubMembers = require('./mockups/ClubMembers.js');
var Equipment = require('./mockups/Equipment.js');
var Route = require('./mockups/Route.js');
var RouteStream = require('./mockups/RouteStream.js');
var SegmentEfforts = require('./mockups/SegmentEfforts.js');
var SegmentEffortsStream = require('./mockups/SegmentEffortsStream.js');
var Segments = require('./mockups/Segments.js');
var SegmentsStreams = require('./mockups/SegmentsStreams.js');
var StarredSegments = require('./mockups/StarredSegments.js');
var Upload = require('./mockups/Upload.js');
var Zones = require('./mockups/Zones.js');

//
const Data = {
  Activity: Activity.Activity,
  ActivityComments: ActivityComments.ActivityComments,
  ActivityKudoers: ActivityKudoers.ActivityKudoers,
  ActivityLaps: ActivityLaps.ActivityLaps,
  ActivityStream: ActivityStream.ActivityStream,
  ActivityZone: ActivityZones.ActivityZone,
  AthleteActivities: AthleteActivities.AthleteActivities,
  AthleteClubs: AthleteClubs.AthleteClubs,
  AthleteRoute: AthleteRoute.AthleteRoute,
  AthleteStats: AthleteStats.AthleteStats,
  AuthenticatedAthlete: AuthenticatedAthlete.AuthenticatedAthlete,
  Club: Club.Club,
  ClubActivities: ClubActivities.ClubActivities,
  ClubAdministrators: ClubAdministrators.ClubAdministrators,
  ClubMembers: ClubMembers.ClubMembers,
  Equipment: Equipment.Equipment,
  Route: Route.Route,
  RouteStream: RouteStream.RouteStream,
  SegmentEfforts: SegmentEfforts.SegmentEfforts,
  SegmentEffortsStream: SegmentEffortsStream.SegmentEffortsStream,
  Segments: Segments.Segments,
  SegmentsStreams: SegmentsStreams.SegmentsStreams,
  StarredSegments: StarredSegments.StarredSegments,
  Upload: Upload.Upload,
  Zones: Zones.Zones
};

module.exports = Data;
