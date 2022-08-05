const utils = require('@dynamic-data/utils');

const id = utils.getRandomInt(10, 99999);

export const listNotifications = {
  "available-user-data": [
    {
      "user-id": id,
      "data-type": "ACTIVITY_SUMMARY",
      url: `https://www.polaraccesslink.com/v3/users/${id}/activity-transactions`
    }
  ]
};