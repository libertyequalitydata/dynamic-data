const utils = require('@dynamic-data/utils');

let sampleList = [];
for (let i = 0; i < utils.getRandomInt(10, 50); i++) {
  const hh = utils.getRandomInt(0, 23);
  const mm = utils.getRandomInt(0, 59);
  const ss = utils.getRandomInt(0, 59);
  sampleList.push({
    steps: utils.getRandomInt(0, 250),
    time: `${hh < 10 ? '0' + hh.toString() : hh}:${mm < 10 ? '0' + mm.toString() : mm}:${ss < 10 ? '0' + ss.toString() : ss}.000`
  })
}

export const getStepSample = {
  interval: 0,
  samples: sampleList
};