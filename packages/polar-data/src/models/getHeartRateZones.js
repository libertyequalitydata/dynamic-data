const utils = require('@dynamic-data/utils');

let zoneList = [];
for (let i = 0; i < utils.getRandomInt(1, 50); i++) {
  zoneList.push({
    index: i+1,
    "lower-limit": utils.getRandomInt(95, 115),
    "upper-limit": utils.getRandomInt(130, 180),
    "in-zone": utils.getRandomString(4).toUpperCase()
  });
}

export const getHeartRateZones = {
  zone: zoneList
};