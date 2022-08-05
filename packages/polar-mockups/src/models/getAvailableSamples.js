const utils = require('@dynamic-data/utils');

const id = utils.getRandomInt(10, 99999);
let samplesList = [];
for (let i = 0; i < utils.getRandomInt(1, 50); i++) {
  samplesList.push(`https://www.polaraccesslink.com/v3/users/${id}/exercise-transactions/${utils.getRandomInt(10, 99)}/exercises/${utils.getRandomInt(10, 999)}/samples/${utils.getRandomInt(0, 99)}`)
}

export const getAvailableSamples = {
  samples: samplesList
};