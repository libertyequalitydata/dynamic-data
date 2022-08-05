"use strict";

const { getRandomInt } = require("@dynamic-data/utils");

const MOCK = require("@dynamic-data/huawei-data");
const {
  getHealthRecordMockupData,
  getActivityRecordMockupData,
  getDataCollectorMockupData
} = require("@dynamic-data/huawei-mockups");

describe("Huawei", () => {
  //test.todo("needs tests");
  it("getHealthRecordMockupData", () => {
    const result = getHealthRecordMockupData(
      "SYNC",
      "HealthRecord",
      "2022-04-03"
    );
    console.log("HealthRecord ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getActivityRecordMockupData", () => {
    const result = getActivityRecordMockupData(
      "SYNC",
      "ActivityRecord",
      "2022-04-03"
    );
    console.log("ActivityRecord ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getDataCollectorMockupData", () => {
    const result = getDataCollectorMockupData(
      "SYNC",
      "DataCollector",
      "2022-04-03"
    );
    console.log("DataCollector ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
});
