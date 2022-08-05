const utils = require('@dynamic-data/utils');
import { products } from "./products";

const rideDetails = utils.pickRandomValue(products.products);
const distance = utils.getRandomFloat(1, 10);
const duration = distance*utils.getRandomInt(120, 240);

let low = Math.ceil(rideDetails.price_details.base + (distance * rideDetails.price_details.cost_per_distance));
if (low < rideDetails.price_details.minimum) {
  low = rideDetails.price_details.minimum;
}
const high = low + utils.getRandomInt(1, 3);
const cost = utils.getRandomFloat(low, high);

export const rideReceiptDetails = {
  request_id: `${utils.getRandomString(8)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(12)}`,
  subtotal: `$${cost}`,
  total_charged: `$${cost}`,
  total_owed: null,
  total_fare: `$${cost}`,
  currency_code: rideDetails.price_details.currency_code,
  charge_adjustments: [],
  duration: utils.parseSecondsToString(duration),
  distance: distance.toString(),
  distance_label: rideDetails.price_details.distance_unit
};