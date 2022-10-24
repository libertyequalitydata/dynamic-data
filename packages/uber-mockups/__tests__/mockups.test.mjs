'use strict';

import {
  getPriceEstimatesMockupData,
  getProductDetails,
  getProducts,
  getRideDetails,
  getRideMapDetails,
  getRideReceiptDetails,
  getSavedPlaces,
  getTimeEstimates,
  getPaymentMethods,
  getUserInfo
} from '@dynamic-data/uber-mockups';

describe('@dynamic-data/uber-mockups', () => {
  it("getPriceEstimatesMockupData", () => {
    const result = getPriceEstimatesMockupData (
      "SYNC",
      "PriceEstimates",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getProductDetails", () => {
    const result = getProductDetails (
      "SYNC",
      "ProductDetails",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getProducts", () => {
    const result = getProducts (
      "SYNC",
      "Products",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getRideDetails", () => {
    const result = getRideDetails (
      "SYNC",
      "RideDetails",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getRideMapDetails", () => {
    const result = getRideMapDetails (
      "SYNC",
      "RideMapDetails",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getRideReceiptDetails", () => {
    const result = getRideReceiptDetails (
      "SYNC",
      "RideReceiptDetails",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getSavedPlaces", () => {
    const result = getSavedPlaces (
      "SYNC",
      "SavedPlaces",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getTimeEstimates", () => {
    const result = getTimeEstimates (
      "SYNC",
      "TimeEstimates",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getPaymentMethods", () => {
    const result = getPaymentMethods (
      "SYNC",
      "PaymentMethods",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getUserInfo", () => {
    const result = getUserInfo (
      "SYNC",
      "UserInfo",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
});