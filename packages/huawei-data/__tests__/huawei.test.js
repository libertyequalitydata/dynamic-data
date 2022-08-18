"use strict";



const MOCK = require("@dynamic-data/huawei-data");
const { ActivityRecord,
DataCollector,
HealthRecord } = require("@dynamic-data/huawei-data/mockups");


describe("Huawei", () => {
  // test.todo("needs tests");
  it("Mockup datamodel only", () => {
    // console.log(JSON.stringify(MOCK, undefined, 2))

    expect(typeof MOCK).toBe("object");
  });
  it("ActivityRecord datamodel only", () => {
    // console.log(JSON.stringify(ActivityRecord, undefined, 2))

    expect(typeof ActivityRecord).toBe("object");
  });
  it("DataCollector datamodel only", () => {
    // console.log(JSON.stringify(DataCollector, undefined, 2))

    expect(typeof DataCollector).toBe("object");
  });
  it("HealthRecord datamodel only", () => {
    // console.log(JSON.stringify(HealthRecord, undefined, 2))

    expect(typeof HealthRecord).toBe("object");
  });
});
