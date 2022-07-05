const utils = require('@dynamic-data/utils');
import { rideTypes } from "./rideTypes";

let items = [];

for (let val of rideTypes.ride_types) {
  const duration = utils.getRandomInt(2, 10);
  
  items.push({
    display_name: val.display_name,
    ride_type: val.ride_type,
    eta_seconds: duration * 60,
    is_valid_estimate: true
  });
}

export const driverETA = {
  eta_estimates: items
};