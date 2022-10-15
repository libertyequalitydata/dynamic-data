'use strict';

const {
    getDriverETAMockupData,
    getNearbyDriversMockupData,
    getRideEstimatesMockupData,
    getRideTypesMockupData
} = require('@dynamic-data/lyft-mockups');

describe('@dynamic-data/lyft-mockups', () => {
  it("getDriverETAMockupData", () => {
    const result = getDriverETAMockupData (
      "SYNC",
      "DriverETA",
      "2022-04-03"
    );
    console.log("getDriverETAMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getNearbyDriversMockupData", () => {
    const result = getNearbyDriversMockupData (
      "SYNC",
      "NearbyDrivers",
      "2022-04-03"
    );
    console.log("getNearbyDriversMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getRideEstimatesMockupData", () => {
    const result = getRideEstimatesMockupData (
      "SYNC",
      "RideEstimates",
      "2022-04-03"
    );
    console.log("getRideEstimatesMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getRideTypesMockupData", () => {
    const result = getRideTypesMockupData (
      "SYNC",
      "RideTypes",
      "2022-04-03"
    );
    console.log("getRideTypesMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
});