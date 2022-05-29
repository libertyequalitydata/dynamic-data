const dg = require('../utils/dataGenerator');

const activityType = ['Running', 'Hiking'];
const startDate = dg.getRandomDateTime('YYYY-MM-DD HH:MM:SS');
const totalDistance = dg.getRandomFloat(20, 1);
const averagePace = dg.getRandomInt(336, 720);
const totalDuration = totalDistance * averagePace;

getRandomTitle = () => {
  const firstTitle = ['daily', 'favourite', 'country', 'scenic'];
  const secondTitle = ['hike', 'trail', 'track', 'street'];
  return `${dg.getRandomInt(9999, 1)} ${dg.pickRandomValue(firstTitle)} ${dg.pickRandomValue(secondTitle)}`;
}

exports.cardioActivity = {
  activityId: `${dg.getRandomString(8)}-${dg.getRandomString(4)}-${dg.getRandomString(4)}-${dg.getRandomString(4)}-${dg.getRandomString(12)}`,
  date: startDate,
  type: dg.pickRandomValue(activityType),
  routeName: dg.getRandBool()? getRandomTitle() : null,
  distance: totalDistance,
  duration: dg.parseSecondsToString(totalDuration),
  averagePace: dg.parseSecondsToString(averagePace),
  averageSpeed: parseFloat((totalDistance/(totalDuration/3600)).toFixed(2)),
  caloriesBurned: Math.ceil(dg.getRandomInt(60, 110) * totalDistance),
  climb: dg.getRandomInt(0, 40),
  averageHeartRate: dg.getRandomInt(100, 180),
  friendsTagged: null,
  Notes: dg.getRandomString(25),
  GPXFile: `${startDate.split(' ')[0]}-${startDate.split(' ')[1].split(':').join('')}.gpx`
};