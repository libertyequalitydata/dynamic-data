const utils = require('@dynamic-data/utils');

let sampleData = "";
for (let i = 0; i < utils.getRandomInt(1, 50); i++) {
  sampleData = sampleData + utils.getRandomInt(0, 150).toString() + ",";
}

export const getSamples = {
  "recording-rate": utils.getRandomInt(0, 999),
  "sample-type": utils.getRandomInt(0, 99).toString(),
  data: sampleData.substring(0, sampleData.length - 1)
};