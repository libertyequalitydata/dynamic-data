"use strict";

const { getRandomInt } = require("@dynamic-data/utils");

const MOCK = require("@dynamic-data/fitbit-data");

const {
  getModelCSVHeader,
  getActivitiesMockupData,
  getSleepSummaryData,
  getHeartRateSummary,
  getActivitiesSummaryData,
  getSleepQualityData,
  getHeartRateData,
  getSleepData,


} = require("@dynamic-data/fitbit-mockups");



describe("Fitbit", () => {
  //test.todo("needs tests");
  it("getActivitiesMockupData", () => {
    const result = getActivitiesMockupData(

      "ActivitiesData",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getActivitiesSummaryData", () => {
    const result = getActivitiesSummaryData(

      "ActivitiesSummary",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getHeartRateData", () => {
    const result = getHeartRateData(

      "HeartRateData",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getHeartRateSummary", () => {
    const result = getHeartRateSummary(

      "HeartRateSummary",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getSleepData", () => {
    const result = getSleepData(

      "SleepData",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getSleepQualityData", () => {
    const result = getSleepQualityData(

      "SleepQuality",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getSleepSummaryData", () => {
    const result = getSleepSummaryData(

      "SleepSummary",
      "2022-04-03"
    );
    // console.log("getSleepSummaryData ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });

});
