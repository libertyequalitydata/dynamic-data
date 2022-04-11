'use strict';

var activitiesData = require('./mockups/activitiesData.js');
var activitiesDataAsync = require('./mockups/activitiesDataAsync.js');
var activitiesSummary = require('./mockups/activitiesSummary.js');
var activitiesSummaryAsync = require('./mockups/activitiesSummaryAsync.js');
var heartRateDataAsync = require('./mockups/heartRateDataAsync.js');
var heartRateSummary = require('./mockups/heartRateSummary.js');
var heartRateSummaryAsync = require('./mockups/heartRateSummaryAsync.js');
var sleepDataAsync = require('./mockups/sleepDataAsync.js');
var sleepSummary = require('./mockups/sleepSummary.js');
var sleepSummaryAsync = require('./mockups/sleepSummaryAsync.js');
var sleepQualityAsync = require('./mockups/sleepQualityAsync.js');

//
const Data = {
  ActivitiesData: activitiesData.ActivitiesData,
  ActivitiesDataAsync: activitiesDataAsync.ActivitiesDataAsync,
  ActivitiesSummary: activitiesSummary.ActivitiesSummary,
  ActivitiesSummaryAsync: activitiesSummaryAsync.ActivitiesSummaryAsync,
  HeartRateDataAsync: heartRateDataAsync.HeartRateDataAsync,
  HeartRateSummary: heartRateSummary.HeartRateSummary,
  HeartRateSummaryAsync: heartRateSummaryAsync.HeartRateSummaryAsync,
  SleepDataAsync: sleepDataAsync.SleepDataAsync,
  SleepSummary: sleepSummary.SleepSummary,
  SleepSummaryAsync: sleepSummaryAsync.SleepSummaryAsync,
  SleepQualityAsync: sleepQualityAsync.SleepQualityAsync
};

module.exports = Data;
