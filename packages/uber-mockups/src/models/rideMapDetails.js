const utils = require('@dynamic-data/utils');

const generateId = () => {return `${utils.getRandomString(8)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(12)}`};

export const rideMapDetails = {
  request_id: generateId(),
  href: `https://trip.uber.com/${utils.getRandomString(6)}`
};