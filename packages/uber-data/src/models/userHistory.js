const utils = require('@dynamic-data/utils');

const generateId = () => {return `${utils.getRandomString(8)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(12)}`};
const count = utils.getRandomInt(1, 50);

let items = [];

for(let i = 0; i < count; i++) {
  const distance = utils.getRandomFloat(1, 10);
  const duration = distance*utils.getRandomInt(120, 240);
  const start_time = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));

  items.push({
    status: utils.pickRandomValue(["completed", "completed", "completed", "cancelled"]),
    distance: distance,
    product_id: generateId(),
    start_time: start_time.getTime(),
    start_city: {
      latitude: 40.7128,
      display_name: "New York",
      longitude: -73.9352
    },
    end_time: start_time.getTime() + duration,
    request_id: generateId(),
    request_time: start_time
  })
}

export const userHistory = {
  count: count,
  history: items,
  limit: 10,
  offset: 0
};