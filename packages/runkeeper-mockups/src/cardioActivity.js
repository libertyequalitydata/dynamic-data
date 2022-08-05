const utils = require('@dynamic-data/utils');

const activityTypes = ['Running', 'Walking', 'Cycling', 'Swimming', 'Elliptical', 'Strength Training', 'Circuit Training', 'Core Strength', 'Arc Trainer', 'Rowing', 'Hiking', 'Mountain Biking', 'Skating', 'Nordic Walking', 'Cross-Country Skiing', 'Downhill Skiing', 'Snowboarding', 'Wheelchair', 'Yoga', 'Pilates', 'CrossFit', 'Spinning', 'Zumba', 'Barre', 'Group Workout', 'Dance', 'Bootcamp', 'Boxing / MMA', 'Meditation', 'Stairmaster / Stepwell', 'Sports', 'Other'];
const activityChoice = utils.pickRandomValue(activityTypes);
const startDate = utils.getRandomDateTime('YYYY-MM-DD HH:MM:SS');
var nullFlag = false;
var totalDuration = utils.getRandomInt(600, 9000);
var totalDistance = 0;
var averagePace = null;
if(['Running', 'Walking', 'Cycling', 'Swimming', 'Elliptical', 'Rowing', 'Hiking', 'Mountain Biking', 'Skating', 'Nordic Walking', 'Cross-Country Skiing', 'Downhill Skiing', 'Snowboarding', 'Wheelchair', 'Other'].includes(activityChoice)) {
  totalDistance = utils.getRandomFloat(1, 20);
  averagePace = utils.getRandomInt(336, 720);
  totalDuration = totalDistance * averagePace;
} else {
  nullFlag = true;
}

function getRandomTitle() {
  const firstTitle = ['daily', 'favourite', 'country', 'scenic'];
  const secondTitle = ['hike', 'trail', 'track', 'street'];
  return `${utils.getRandomInt(1, 9999)} ${utils.pickRandomValue(firstTitle)} ${utils.pickRandomValue(secondTitle)}`;
}

export const cardioActivity = {
  activityId: `${utils.getRandomString(8)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(12)}`,
  date: startDate,
  type: activityChoice,
  routeName: utils.getRandBool()? getRandomTitle() : null,
  distance: totalDistance,
  duration: utils.parseSecondsToString(totalDuration),
  averagePace: nullFlag? null: utils.parseSecondsToString(averagePace),
  averageSpeed: nullFlag? null: parseFloat((totalDistance/(totalDuration/3600)).toFixed(2)),
  caloriesBurned: nullFlag? Math.ceil(utils.getRandomInt(60, 110) * (totalDuration/1800)): Math.ceil(utils.getRandomInt(60, 110) * totalDistance),
  climb: nullFlag? 0: utils.getRandomInt(0, 40),
  averageHeartRate: utils.getRandomInt(100, 180),
  friendsTagged: null,
  Notes: utils.getRandomString(25),
  GPXFile: nullFlag? null: `${startDate.split(' ')[0]}-${startDate.split(' ')[1].split(':').join('')}.gpx`
};