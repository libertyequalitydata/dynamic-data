"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReadinessSummaryAsync = void 0;

var _readinessSummary = require("./readinessSummary");

var _dataMockups = require("./dataMockups");

const ReadinessSummaryAsync = (0, _dataMockups.AsyncData)(_readinessSummary.ReadinessSummary);
exports.ReadinessSummaryAsync = ReadinessSummaryAsync;