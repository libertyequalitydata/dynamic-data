'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sleepSummary = require('./sleepSummary.js');
var dataMockups = require('./dataMockups.js');

const SleepSummaryAsync = dataMockups.AsyncData(sleepSummary.SleepSummary);

exports.SleepSummaryAsync = SleepSummaryAsync;
