'use strict';

var dailies = require('./mockups/dailies.js');
var dailiesObject = require('./mockups/dailiesObject.js');
var epochs = require('./mockups/epochs.js');
var epochsObject = require('./mockups/epochsObject.js');
var sleeps = require('./mockups/sleeps.js');
var sleepsObject = require('./mockups/sleepsObject.js');
var pulseox = require('./mockups/pulseox.js');
var pulseoxObject = require('./mockups/pulseoxObject.js');

const Data = {
  DailiesData: dailies.DailiesData,
  EpochsData: epochs.EpochsData,
  SleepsData: sleeps.SleepsData,
  PulseoxData: pulseox.PulseoxData,
  DailiesDataObject: dailiesObject.DailiesDataObject,
  EpochsDataObject: epochsObject.EpochsDataObject,
  SleepsDataObject: sleepsObject.SleepsDataObject,
  PulseoxObject: pulseoxObject.PulseoxObject
};

module.exports = Data;
