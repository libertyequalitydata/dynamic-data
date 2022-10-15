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
    console.log(result);
    expect(Array.isArray(result)).toBe(true);
  });
  it("getActivityMockupData", () => {
    const result = getActivityMockupData(

      "ActivitySummary",
      "2022-04-03"
    );
    console.log("ActivitySummary ", result);
    expect(typeof result).toBe("object");
  });

  it("getReadinessMockupData", () => {
    const result = getReadinessMockupData(

      "ReadinessSummary",
      "2022-04-03"
    );
    console.log("ReadinessSummary ", result);
    expect(typeof result).toBe("object");
  });

  it("getSleepSummaryMockupData", () => {
    const result = getSleepMockupData("SleepSummary", "2022-04-03");
    console.log("SLEEP RESULT ", result);
    expect(typeof result).toBe("object");
  });
  it("getSleepDataMockupData", () => {
    const result = getSleepMockupData("SleepData", "2022-04-03");
    console.log("SLEEP RESULT ", result);
    expect(typeof result).toBe("object");
  });
});
