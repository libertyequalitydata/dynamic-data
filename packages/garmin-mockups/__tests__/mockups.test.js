"use strict";

const { getRandomInt } = require("@dynamic-data/utils");

const MOCK = require("@dynamic-data/garmin-data");

const {
  getDailiesMockupData,
  getSleepMockupData,
  getPulseoxMockupData,
  getEpochsMockupData
} = require("@dynamic-data/garmin-mockups");

describe("Garmin", () => {
  //test.todo("needs tests");
  it("getDailiesMockupData", () => {
    const result = getDailiesMockupData(
      "ASYNC",
      "DailiesDataAsync",
      "2022-04-03"
    );
    console.log("getDailiesMockupData ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });

  it("getSleepMockupData", () => {
    const result = getSleepMockupData(
      "ASYNC",
      "SleepsDataAsync",
      "2022-04-03"
    );
    console.log("getSleepMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(result.sleeplevelsmap);
    expect(typeof result).toBe("object");
  });

  it("getPulseoxMockupData", () => {
    const result = getPulseoxMockupData(
      "ASYNC",
      "PulseoxAsync",
      "2022-04-03"
    );
    console.log("getPulseoxMockupData ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });

  it("getEpochsMockupData", () => {
    const result = getEpochsMockupData(
      "ASYNC",
      "EpochsDataAsync",
      "2022-04-03"
    );
    console.log("getEpochsMockupData ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });

  it("getSleepMockupData", () => {
    const result = getSleepMockupData(
      "SYNC",
      "SleepsDataObject",
      "2022-04-03"
    );
    console.log("getSleepMockupData ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });

  it("getPulseoxMockupData", () => {
    const result = getPulseoxMockupData(
      "SYNC",
      "PulseoxObject",
      "2022-04-03"
    );
    console.log("getPulseoxMockupData ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });

  it("getEpochsMockupData", () => {
    const result = getEpochsMockupData(
      "SYNC",
      "EpochsDataObject",
      "2022-04-03"
    );
    console.log("getEpochsMockupData ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });

  it("getDailiesMockupData", () => {
    const result = getDailiesMockupData(
      "SYNC",
      "DailiesDataObject",
      "2022-04-03"
    );
    console.log("getDailiesMockupData ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });

});
