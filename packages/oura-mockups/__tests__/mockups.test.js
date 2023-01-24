"use strict";

const { getRandomInt } = require("@dynamic-data/utils");

const MOCK = require("@dynamic-data/oura-data");

const {
  getModelCSVHeader,
  getActivityMockupData,
  getReadinessMockupData,
  getSleepMockupData,
} = require("@dynamic-data/oura-mockups");

describe("Oura", () => {
  //test.todo("needs tests");
  it("ActivitySummary mockup datamodel from default", () => {
    const data = MOCK.default.ActivitySummary;
    //console.log("MOCK ", MOCK);
    //console.log("MOCK DATA", data);

    expect(typeof data).toBe("object");
  });

  it("getModelCSVHeader", () => {
    const result = getModelCSVHeader("ActivitySummaryAsync");
    // console.log(result);
    expect(Array.isArray(result)).toBe(true);
  });
  it("getActivityMockupData", () => {
    const result = getActivityMockupData(

      "ActivitySummary",
      "2022-04-03",
    );
    const resultSeed = getActivityMockupData(

      "ActivitySummary",
      "2022-04-03",
      1
    );
    console.log("ActivitySummary ", result);
    // console.log("ActivitySummary Seeded", resultSeed);
    expect(typeof result).toBe("object");
    expect(typeof resultSeed).toBe("object");

  });

  it("getReadinessMockupData", () => {
    const result = getReadinessMockupData(

      "ReadinessSummary",
      "2022-04-03"
    );
    const resultSeed = getReadinessMockupData(

      "ReadinessSummary",
      "2022-04-03",
      1
    );
    console.log("ReadinessSummary ", result);
    // console.log("ReadinessSummary Seeded", resultSeed);
    expect(typeof result).toBe("object");
    expect(typeof resultSeed).toBe("object");
  });

  it("getSleepSummaryMockupData", () => {
    const result = getSleepMockupData("SleepSummary", "2022-04-03");
    const resultSeed = getSleepMockupData("SleepSummary", "2022-04-03",1);
    console.log("SLEEP RESULT ", result);
    // console.log("SLEEP RESULT Seeded", resultSeed);
    expect(typeof result).toBe("object");
    expect(typeof resultSeed).toBe("object");
  });
  it("getSleepDataMockupData", () => {
    const result = getSleepMockupData("SleepData", "2022-04-03");
    const resultSeed = getSleepMockupData("SleepData", "2022-04-03",1);
    console.log("SLEEP RESULT ", result);
    // console.log("SLEEP RESULT Seeded", resultSeed);
    expect(typeof result).toBe("object");
    expect(typeof resultSeed).toBe("object");
  });
});
