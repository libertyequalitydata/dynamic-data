const utils = require('@dynamic-data/utils');

let sampleList = [];
for (let i = 0; i < utils.getRandomInt(1, 15); i++) {
  let activityList = [];
  for (let j = 0; j < utils.getRandomInt(5, 25); j++) {
    activityList.push({
      index: j+1,
      inzone: utils.getRandomString(7).toUpperCase()
    });
  }
  sampleList.push({
    "activity-zones": activityList,
    time: "string"
  });
}

export const getZoneSample = {
  interval: 0,
  samples: sampleList
};