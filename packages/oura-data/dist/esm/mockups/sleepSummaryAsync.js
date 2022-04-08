"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SleepSummaryAsync = void 0;

var _sleepSummary = require("./sleepSummary");

var _dataMockups = require("./dataMockups");

const SleepSummaryAsync = (0, _dataMockups.AsyncData)(_sleepSummary.SleepSummary);
exports.SleepSummaryAsync = SleepSummaryAsync;