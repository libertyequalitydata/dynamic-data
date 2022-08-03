const utils = require('@dynamic-data/utils');

export const getPhysicalInfo = {
  id: utils.getRandomInt(100, 99999),
  "transaction-id": utils.getRandomInt(100000, 9999999),
  created: utils.getRandomDateTime('YYYY-MM-DDThh:mm:ss.000'),
  "polar-user": "https://www.polaraccesslink/v3/users/1",
  weight: utils.getRandomInt(50, 100),
  height: utils.getRandomInt(140, 190),
  "maximum-heart-rate": utils.getRandomInt(110, 180),
  "resting-heart-rate": utils.getRandomInt(50, 90),
  "aerobic-threshold": utils.getRandomInt(100, 130),
  "anaerobic-threshold": utils.getRandomInt(100, 130),
  "vo2-max": utils.getRandomInt(1, 50),
  "weight-source": "SOURCE_MEASURED"
};