"use strict";

const { getRandomInt } = require("@dynamic-data/utils");

const MOCK = require("@dynamic-data/withings-data");

const {
  getSleepSummaryMockupData,
  getSleepMockupData,
  getHeartListMockupData,
  getHeartMockupData,
  getWorkoutMockupData,
  getIntradayActivityMockupData,
  getActivityMockupData,
  getMeasurementMockupData
} = require("@dynamic-data/withings-mockups");

describe("Withings", () => {
  //test.todo("needs tests");

  it("getSleepSummaryMockupData", () => {
    const result = getSleepSummaryMockupData("SYNC", "SleepSummary", "2022-04-03");
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getSleepMockupData", () => {
    const result = getSleepMockupData("SYNC", "Sleep", "2022-04-03");
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getHeartListMockupData", () => {
    const result = getHeartListMockupData("SYNC", "HeartList", "2022-04-03");
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getHeartMockupData", () => {
    const result = getHeartMockupData("SYNC", "Heart", "2022-04-03");
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getWorkoutMockupData", () => {
    const result = getWorkoutMockupData("SYNC", "Workout", "2022-04-03");
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getIntradayActivityMockupData", () => {
    const result = getIntradayActivityMockupData("SYNC", "IntradayActivity", "2022-04-03");
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getActivityMockupData", () => {
    const result = getActivityMockupData("SYNC", "Activity", "2022-04-03");
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getMeasurementMockupData", () => {
    const result = getMeasurementMockupData("SYNC", "Measurement", "2022-04-03");
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
});
