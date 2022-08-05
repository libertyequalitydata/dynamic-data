const utils = require('@dynamic-data/utils');
import { products } from "./products"

export function productDetails(id){
  for (let val of products.products) {
    if(val.product_id == id) {
      return val;
    }
  }
  return null;
}