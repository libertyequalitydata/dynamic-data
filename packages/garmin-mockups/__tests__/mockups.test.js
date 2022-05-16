"use strict";

const { getRandomInt } = require("@dynamic-data/utils");

const MOCK = require("@dynamic-data/garmin-data");
const {
  getDailiesMockupData  
} = require("@dynamic-data/garmin-mockups");

describe("Garmin", () => {
  //test.todo("needs tests");
  it("ActivitySummary mockup datamodel from default", () => {
    const data = MOCK.DailiesDataObject;
    console.log("MOCK ", data);
    // console.log("MOCK DATA", data);


    // expect(typeof data).toBe("object");
  });

  it("ActivitySummary mockup datamodel from default", () => {
    const data = MOCK.DailiesDataObject;
    console.log("MOCK ", data);
    // console.log("MOCK DATA", data);


    // expect(typeof data).toBe("object");
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

  it("getReadinessMockupData", () => {
    const result = getDailiesMockupData(
      "SYNC",
      "DailiesDataObject",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe("object");
  });

  // it("getSleepMockupData", () => {
  //   const result = getSleepMockupData("SYNC", "SleepSummary", "2022-04-03");
  //   console.log("SLEEP RESULT ", result);
  //   expect(typeof result).toBe("object");
  // });
});
