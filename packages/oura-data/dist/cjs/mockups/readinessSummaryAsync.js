'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var readinessSummary = require('./readinessSummary.js');
var dataMockups = require('./dataMockups.js');

const ReadinessSummaryAsync = dataMockups.AsyncData(readinessSummary.ReadinessSummary);

exports.ReadinessSummaryAsync = ReadinessSummaryAsync;
