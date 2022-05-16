'use strict';

var dailies = require('./mockups/dailies.js');
var dailiesObject = require('./mockups/dailiesObject.js');
var epochs = require('./mockups/epochs.js');
var sleeps = require('./mockups/sleeps.js');
var pulseox = require('./mockups/pulseox.js');

//
const Data = {
  DailiesData: dailies.DailiesData,
  EpochsData: epochs.EpochsData,
  SleepsData: sleeps.SleepsData,
  PulseoxData: pulseox.PulseoxData,
  DailiesDataObject: dailiesObject.DailiesDataObject
};

module.exports = Data;
