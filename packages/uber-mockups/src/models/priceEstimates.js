const utils = require('@dynamic-data/utils');
import { products } from "./products";

const distance = utils.getRandomFloat(1, 10);
const duration = distance*utils.getRandomInt(120, 240);
let price_list = [];

for (let val of products.products) {
  let low = Math.ceil(val.price_details.base + (distance * val.price_details.cost_per_distance));
  if (low < val.price_details.minimum) {
    low = val.price_details.minimum;
  }
  const high = low + utils.getRandomInt(1, 3);

  price_list.push({
    localized_display_name: val.display_name,
    distance: distance,
    display_name: val.display_name,
    product_id: val.product_id,
    high_estimate: high,
    low_estimate: low,
    duration: duration,
    estimate: `$${low}-${high}`,
    currency_code: val.price_details.currency_code
  });
}

export const priceEstimates = {
  prices: price_list
};