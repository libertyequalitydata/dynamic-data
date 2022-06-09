// Endpoint => GET => /v1.2/products/{product_id}
// Parameters:
// =========================================================================================================================
// | Name       | Type   | Description                                                                                     |
// =========================================================================================================================
// | product_id | string | Unique identifier representing a specific product for a given latitude & longitude.             |
// |            |        | For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles. |
// =========================================================================================================================

const utils = require('@dynamic-data/utils');
import { products } from "./products"

export const productDetails = utils.pickRandomValue(products.products);