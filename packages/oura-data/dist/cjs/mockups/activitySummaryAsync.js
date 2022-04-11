'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var activitySummary = require('./activitySummary.js');
var dataMockups = require('./dataMockups.js');

const ActivitySummaryAsync = dataMockups.AsyncData(activitySummary.ActivitySummary);

exports.ActivitySummaryAsync = ActivitySummaryAsync;
