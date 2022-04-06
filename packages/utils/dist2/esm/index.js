"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _randomUtils = require("./randomUtils.js");

Object.keys(_randomUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _randomUtils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _randomUtils[key];
    }
  });
});