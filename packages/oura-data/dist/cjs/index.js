'use strict';

var activitySummary = require('./mockups/activitySummary.js');
var readinessSummary = require('./mockups/readinessSummary.js');
var sleepSummary = require('./mockups/sleepSummary.js');
var activitySummaryAsync = require('./mockups/activitySummaryAsync.js');
var readinessSummaryAsync = require('./mockups/readinessSummaryAsync.js');
var sleepSummaryAsync = require('./mockups/sleepSummaryAsync.js');

//
const Data = {
  SleepSummary: sleepSummary.SleepSummary,
  SleepSummaryAsync: sleepSummaryAsync.SleepSummaryAsync,
  ActivitySummary: activitySummary.ActivitySummary,
  ActivitySummaryAsync: activitySummaryAsync.ActivitySummaryAsync,
  ReadinessSummary: readinessSummary.ReadinessSummary,
  ReadinessSummaryAsync: readinessSummaryAsync.ReadinessSummaryAsync
};

module.exports = Data;
