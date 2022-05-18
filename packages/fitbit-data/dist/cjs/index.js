'use strict';

var activitiesData = require('./mockups/activitiesData.js');
var activitiesDataAsync = require('./mockups/activitiesDataAsync.js');
var activitiesSummary = require('./mockups/activitiesSummary.js');
var activitiesSummaryAsync = require('./mockups/activitiesSummaryAsync.js');
var HeartRateData = require('./mockups/HeartRateData.js');
var heartRateDataAsync = require('./mockups/heartRateDataAsync.js');
var heartRateSummary = require('./mockups/heartRateSummary.js');
var heartRateSummaryAsync = require('./mockups/heartRateSummaryAsync.js');
var SleepData = require('./mockups/SleepData.js');
var sleepDataAsync = require('./mockups/sleepDataAsync.js');
var sleepSummary = require('./mockups/sleepSummary.js');
var sleepSummaryAsync = require('./mockups/sleepSummaryAsync.js');
var SleepQuality = require('./mockups/SleepQuality.js');
var sleepQualityAsync = require('./mockups/sleepQualityAsync.js');

//
const Data = {
  ActivitiesData: activitiesData.ActivitiesData,
  ActivitiesDataAsync: activitiesDataAsync.ActivitiesDataAsync,
  ActivitiesSummary: activitiesSummary.ActivitiesSummary,
  ActivitiesSummaryAsync: activitiesSummaryAsync.ActivitiesSummaryAsync,
  HeartRateData: HeartRateData.HeartRateData,
  HeartRateDataAsync: heartRateDataAsync.HeartRateDataAsync,
  HeartRateSummary: heartRateSummary.HeartRateSummary,
  HeartRateSummaryAsync: heartRateSummaryAsync.HeartRateSummaryAsync,
  SleepData: SleepData.SleepData,
  SleepDataAsync: sleepDataAsync.SleepDataAsync,
  SleepSummary: sleepSummary.SleepSummary,
  SleepSummaryAsync: sleepSummaryAsync.SleepSummaryAsync,
  SleepQuality: SleepQuality.SleepQuality,
  SleepQualityAsync: sleepQualityAsync.SleepQualityAsync
};

module.exports = Data;
