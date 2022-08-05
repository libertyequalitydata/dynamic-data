const utils = require('@dynamic-data/utils');

const id = utils.getRandomInt(10, 99999);
let activityList = [];
for (let i = 0; i < utils.getRandomInt(1, 50); i++) {
  activityList.push(`https://www.polaraccesslink.com/v3/users/${id}/activity-transactions/${utils.getRandomInt(10, 99)}/activities/${utils.getRandomInt(10, 999)}`)
}

export const listActivities = {
  "activity-log": activityList
};