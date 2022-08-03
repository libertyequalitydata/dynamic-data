const utils = require('@dynamic-data/utils');

let src = utils.getRandomLatLng( 40.730610, -73.935242, 1000)
let src_lat= src[0];
let src_lng= src[1];
let items = [];

for (let i = 0; i < utils.getRandomInt(3, 10); i++) {
  let locations = [];

  for (let j = 0; j < 4; j++) {
    let destination_address = utils.getRandomLatLng( src_lat, src_lng, 30);
    locations.push({
      lat: destination_address[0],
      lng: destination_address[1]
    })
  }

  items.push({
    locations: locations
  })
}

export const nearby_drivers = {
  nearby_drivers: [
    {
      drivers: items,
      ride_type: utils.pickRandomValue(['lyft_line', 'lyft', 'lyft', 'lyft', 'lyft', 'lyft_plus', 'lyft_premier', 'lyft_lux', 'lyft_luxsuv'])
    }
  ]
};