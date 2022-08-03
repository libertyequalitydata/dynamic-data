const utils = require('@dynamic-data/utils');

let hrvSamples = {};
let timeStart = 30;
for (let j = 0; j < utils.getRandomInt(3, 10); j++) {
  timeStart = timeStart + utils.getRandomInt(1, 90);
  hrvSamples[utils.parseSecondsToString(timeStart)] = utils.getRandomInt(10, 30);
}
let breathingSamples = {};
timeStart = 30;
for (let j = 0; j < utils.getRandomInt(3, 10); j++) {
  timeStart = timeStart + utils.getRandomInt(1, 90);
  breathingSamples[utils.parseSecondsToString(timeStart)] = utils.getRandomFloat(10, 30);
}

export const getNightlyRecharge = {
  "polar_user": "https://www.polaraccesslink/v3/users/1",
  date: utils.getRandomDateTime('YYYY-MM-DD'),
  "heart_rate_avg": utils.getRandomInt(70, 120),
  "beat_to_beat_avg": utils.getRandomInt(700, 1000),
  "heart_rate_variability_avg": utils.getRandomInt(5, 30),
  "breathing_rate_avg": utils.getRandomFloat(5, 25),
  "nightly_recharge_status": utils.getRandomInt(1, 10),
  "ans_charge": utils.getRandomInt(0, 10),
  "ans_charge_status": utils.getRandomInt(1, 10),
  "hrv_samples": hrvSamples,
  "breathing_samples": breathingSamples
};