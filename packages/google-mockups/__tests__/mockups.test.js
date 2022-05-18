"use strict";

const { getRandomInt } = require("@dynamic-data/utils");

const MOCK = require("@dynamic-data/google-data");
const {
  getActivityMockupData,
  getLocationMockupData,
  getPlacesMockupData,
  getRoutesMockupData
} = require("@dynamic-data/google-mockups");

describe("Google", () => {
  //test.todo("needs tests");
  it("getActivityMockupData", () => {
    const result = getActivityMockupData(
      "SYNC",
      "ActivityObject",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getLocationMockupData", () => {
    const result = getLocationMockupData(
      "SYNC",
      "LocationObject",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getPlacesMockupData", () => {
    const result = getPlacesMockupData(
      "SYNC",
      "Places",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getRoutesMockupData", () => {
    const result = getRoutesMockupData(
      "SYNC",
      "Routes",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe("object");
  });


});
