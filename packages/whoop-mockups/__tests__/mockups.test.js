"use strict";

const { getRandomInt } = require("@dynamic-data/utils");

const MOCK = require("@dynamic-data/whoop-data");

const {
  getUserMockupData,
  getWorkoutMockupData,
  getActivityTypeMockupData,
  getAggregateDataMockupData,
  getMembershipMockupData,
  getEventMockupData,
  getReportMockupData,
  getSleepDetailsMockupData,
  getSurveryResponseMockupData,
  getVoiceOfWhoopMockupData,
  getVoiceOfWhoopCycleMockupData,
  getMetricMockupData
  } = require("@dynamic-data/whoop-mockups");

describe("Whoop", () => {
  //test.todo("needs tests");
    it("getUserMockupData", () => {
    const result = getUserMockupData(
      "SYNC",
      "User",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getWorkoutMockupData", () => {
    const result = getWorkoutMockupData(
      "SYNC",
      "Workout",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getActivityTypeMockupData", () => {
    const result = getActivityTypeMockupData(
      "SYNC",
      "ActivityType",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getAggregateDataMockupData", () => {
    const result = getAggregateDataMockupData(
      "SYNC",
      "AggregateData",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });

  it("getMembershipMockupData", () => {
    const result = getMembershipMockupData(
      "SYNC",
      "Membership",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getMembershipMockupData", () => {
    const result = getMembershipMockupData(
      "SYNC",
      "Membership",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getEventMockupData", () => {
    const result = getEventMockupData(
      "SYNC",
      "Event",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getReportMockupData", () => {
    const result = getReportMockupData(
      "SYNC",
      "Report",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getSleepDetailsMockupData", () => {
    const result = getSleepDetailsMockupData(
      "SYNC",
      "SleepDetails",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getSurveryResponseMockupData", () => {
    const result = getSurveryResponseMockupData(
      "SYNC",
      "SurveryResponse",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getVoiceOfWhoopMockupData", () => {
    const result = getVoiceOfWhoopMockupData(
      "SYNC",
      "VoiceOfWhoop",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getVoiceOfWhoopCycleMockupData", () => {
    const result = getVoiceOfWhoopCycleMockupData(
      "SYNC",
      "VoiceOfWhoopCycle",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getMetricMockupData", () => {
    const result = getMetricMockupData(
      "SYNC",
      "Metric",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
});
