"use strict";

const { getRandomInt } = require("@dynamic-data/utils");

const MOCK = require("@dynamic-data/fitbit-data");

const {
  getModelCSVHeader,
  getActivitiesMockupData,
  getReadinessMockupData,
  getSleepMockupData,
  getHeartRateSummary,
  getActivitiesSummaryData
  
} = require("@dynamic-data/fitbit-mockups");

describe("Fitbit", () => {
  //test.todo("needs tests");
  it("ActivitySummary mockup datamodel from default", () => {
    const data = MOCK.ActivitiesData;
    // console.log("MOCK ", MOCK);
    //console.log("MOCK DATA", data);


    expect(typeof data).toBe("object");
  });

  // it("RandomInt", () => {
  //   const result = getRandomInt(1, 10);
  //   //console.log(typeof result);
  //   expect(typeof result).toEqual("number");
  // });

  // it("getModelCSVHeader", () => {
  //   const result = getModelCSVHeader("ActivitySummaryAsync");
  //   //console.log(result);
  //   expect(Array.isArray(result)).toBe(true);
  // });

  it("getActivityMockupData", () => {
    const result = getActivitiesMockupData(
      "SYNC",
      "ActivitiesData",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getActivitiesSummaryData", () => {
    const result = getActivitiesSummaryData(
      "SYNC",
      "ActivitiesSummary",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe("object");
  });

  it("getSleepMockupData", () => {
    const result = getSleepMockupData(
      "SYNC",
      "SleepSummary",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe("object");
  });

  it("getHeartRateSummary", () => {
    const result = getHeartRateSummary(
      "SYNC",
      "HeartRateSummary",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe("object");
  });

  // it("getReadinessMockupData", () => {
  //   const result = getReadinessMockupData(
  //     "SYNC",
  //     "ReadinessSummary",
  //     "2022-04-03"
  //   );
  //   //console.log(result);
  //   expect(typeof result).toBe("object");
  // });

  // it("getSleepMockupData", () => {
  //   const result = getSleepMockupData("SYNC", "SleepSummary", "2022-04-03");
  //   console.log("SLEEP RESULT ", result);
  //   expect(typeof result).toBe("object");
  // });
});
