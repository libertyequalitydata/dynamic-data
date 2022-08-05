const utils = require('@dynamic-data/utils');

let sleepList = [];
for (let i = 0; i < utils.getRandomInt(1, 50); i++) {
  let hypnogram = {};
  let timeStart = 30;
  let start = 1
  for (let j = 0; j < utils.getRandomInt(3, 10); j++) {
    timeStart = timeStart + utils.getRandomInt(1, 90);
    start = start + utils.getRandomInt(1, 5);
    hypnogram[utils.parseSecondsToString(timeStart)] = start;
  }
  let samples = {};
  timeStart = 30;
  for (let j = 0; j < utils.getRandomInt(3, 10); j++) {
    timeStart = timeStart + utils.getRandomInt(1, 90);
    samples[utils.parseSecondsToString(timeStart)] = utils.getRandomInt(70, 100);
  }

  sleepList.push({
    "polar_user": "https://www.polaraccesslink/v3/users/1",
    date: utils.getRandomDateTime('YYYY-MM-DD'),
    "sleep_start_time": utils.getRandomDateTime('YYYY-MM-DDThh:mm:ss.000'),
    "sleep_end_time": utils.getRandomDateTime('YYYY-MM-DDThh:mm:ss.000'),
    "device_id": utils.getRandomString(10).toUpperCase(),
    continuity: utils.getRandomFloat(1, 5),
    "continuity_class": utils.getRandomInt(1, 5),
    "light_sleep": utils.getRandomInt(800, 1200),
    "deep_sleep": utils.getRandomInt(800, 1200),
    "rem_sleep": utils.getRandomInt(800, 1200),
    "unrecognized_sleep_stage": utils.getRandomInt(800, 1200),
    "sleep_score": utils.getRandomInt(50, 100),
    "total_interruption_duration": utils.getRandomInt(800, 1200),
    "sleep_charge": utils.getRandomInt(1, 5),
    "sleep_goal": utils.getRandomInt(10000, 30000),
    "sleep_rating": utils.getRandomInt(1, 10),
    "short_interruption_duration": utils.getRandomInt(50, 200),
    "long_interruption_duration": utils.getRandomInt(300, 600),
    "sleep_cycles": utils.getRandomInt(1, 20),
    "group_duration_score": utils.getRandomInt(80, 100),
    "group_solidity_score": utils.getRandomInt(40, 100),
    "group_regeneration_score": utils.getRandomFloat(40, 100),
    hypnogram: hypnogram,
    "heart_rate_samples": samples
  })
}

export const listSleep = {
  nights: sleepList
};