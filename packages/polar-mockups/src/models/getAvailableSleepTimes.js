const utils = require('@dynamic-data/utils');

export const getAvailableSleepTimes = {
  available: [
    {
      date: utils.getRandomDateTime('YYYY-MM-DD'),
      "start_time": utils.getRandomDateTime('YYYY-MM-DDThh:mm:ss.000'),
      "end_time": utils.getRandomDateTime('YYYY-MM-DDThh:mm:ss.000')
    }
  ]
};