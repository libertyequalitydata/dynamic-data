"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dataMockups = require("./dataMockups.js");

Object.keys(_dataMockups).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dataMockups[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dataMockups[key];
    }
  });
});