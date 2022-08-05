const utils = require('@dynamic-data/utils');
import { rideTypes } from "./rideTypes";

const distance = utils.getRandomFloat(1, 10);
const duration = Math.ceil(distance*utils.getRandomInt(120, 240));
let items = [];

for (let val of rideTypes.ride_types) {
  let low = Math.ceil(val.pricing_details.base_charge + (distance * val.pricing_details.cost_per_mile));
  if (low < val.pricing_details.cost_minimum) {
    low = val.pricing_details.cost_minimum;
  }
  const high = low + (utils.getRandomInt(1, 3) * 100);

  items.push({
    display_name: val.display_name,
    ride_type: val.ride_type,
    estimated_cost_cents_max: low,
    estimated_cost_cents_min: high,
    estimated_distance_miles: distance,
    estimated_duration_seconds: duration,
    cost_token: utils.getRandomString(18),
    is_valid_estimate: true
  });
}

export const rideEstimates = {
  cost_estimates: items
};