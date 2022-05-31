const utils = require('@dynamic-data/utils');

const activityType = ['Running', 'Hiking'];
const startDate = utils.getRandomDateTime('YYYY-MM-DD HH:MM:SS');
const totalDistance = utils.getRandomFloat(20, 1);
const averagePace = utils.getRandomInt(336, 720);
const totalDuration = totalDistance * averagePace;

function getRandomTitle() {
  const firstTitle = ['daily', 'favourite', 'country', 'scenic'];
  const secondTitle = ['hike', 'trail', 'track', 'street'];
  return `${utils.getRandomInt(9999, 1)} ${utils.pickRandomValue(firstTitle)} ${utils.pickRandomValue(secondTitle)}`;
}

const cardioActivity = {
  activityId: `${utils.getRandomString(8)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(12)}`,
  date: startDate,
  type: utils.pickRandomValue(activityType),
  routeName: utils.getRandBool() ? getRandomTitle() : null,
  distance: totalDistance,
  duration: utils.parseSecondsToString(totalDuration),
  averagePace: utils.parseSecondsToString(averagePace),
  averageSpeed: parseFloat((totalDistance / (totalDuration / 3600)).toFixed(2)),
  caloriesBurned: Math.ceil(utils.getRandomInt(60, 110) * totalDistance),
  climb: utils.getRandomInt(0, 40),
  averageHeartRate: utils.getRandomInt(100, 180),
  friendsTagged: null,
  Notes: utils.getRandomString(25),
  GPXFile: `${startDate.split(' ')[0]}-${startDate.split(' ')[1].split(':').join('')}.gpx`
};

export { cardioActivity };
