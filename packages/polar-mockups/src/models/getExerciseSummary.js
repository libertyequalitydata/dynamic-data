const utils = require('@dynamic-data/utils');

const fat = utils.getRandomInt(10, 80);
const carb = utils.getRandomInt(5, (100 - fat - 5));

export const getExerciseSummary = {
  id: utils.getRandomInt(1000000000, 9999999999),
  "upload-time": utils.getRandomDateTime('YYYY-MM-DDThh:mm:ss.000'),
  "polar-user": "https://www.polaraccesslink/v3/users/1",
  "transaction-id": utils.getRandomInt(100000, 9999999),
  device: "Polar M400",
  "device-id": utils.getRandomString(8).toUpperCase(),
  "start-time": utils.getRandomDateTime('YYYY-MM-DDThh:mm:ss.000'),
  "start-time-utc-offset": utils.getRandomInt(50, 180),
  duration: utils.getRandomString(7).toUpperCase(),
  calories: utils.getRandomInt(200, 700),
  distance: utils.getRandomInt(1000, 5000),
  "heart-rate": {
    average: utils.getRandomInt(80, 120),
    maximum: utils.getRandomInt(120, 180)
  },
  "training-load": utils.getRandomFloat(80, 200),
  sport: "OTHER",
  "has-route": utils.getRandBool(),
  "club-id": utils.getRandomInt(10, 9999),
  "club-name": utils.getRandomWord(1) + " Club",
  "detailed-sport-info": utils.getRandomWord(1) + "_" + utils.getRandomWord(1),
  "fat-percentage": fat,
  "carbohydrate-percentage": carb,
  "protein-percentage": 100 - (fat + carb)
};