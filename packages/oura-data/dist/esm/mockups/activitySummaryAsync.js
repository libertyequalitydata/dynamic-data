"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActivitySummaryAsync = void 0;

var _activitySummary = require("./activitySummary");

var _dataMockups = require("./dataMockups");

const ActivitySummaryAsync = (0, _dataMockups.AsyncData)(_activitySummary.ActivitySummary);
exports.ActivitySummaryAsync = ActivitySummaryAsync;