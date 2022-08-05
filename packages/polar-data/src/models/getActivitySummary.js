const utils = require('@dynamic-data/utils');

export const getActivitySummary = {
  id: utils.getRandomInt(1000, 99999),
  "polar-user": "https://www.polaraccesslink/v3/users/1",
  "transaction-id": utils.getRandomInt(100000, 9999999),
  date: utils.getRandomDateTime("YYYY-MM-DD"),
  created: utils.getRandomDateTime('YYYY-MM-DDThh:mm:ss.000'),
  calories: utils.getRandomInt(1500, 12000),
  "active-calories": utils.getRandomInt(50, 250),
  duration: utils.getRandomString(7).toUpperCase(),
  "active-steps": utils.getRandomInt(50, 1000)
};