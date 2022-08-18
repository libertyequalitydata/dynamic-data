import {
  getModelCSVHeader,
  getActivitiesMockupData,
  getSleepSummaryData,
  getHeartRateSummary,
  getActivitiesSummaryData,
  getSleepQualityData,
  getHeartRateDataData,
  getSleepDataData,
} from "@dynamic-data/fitbit-mockups";

describe("Fitbit", () => {
  //test.todo("needs tests");
  it("getActivitiesMockupData", () => {
    const result = getActivitiesMockupData(
      "SYNC",
      "ActivitiesData",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getActivitiesSummaryData", () => {
    const result = getActivitiesSummaryData(
      "SYNC",
      "ActivitiesSummary",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getHeartRateDataData", () => {
    const result = getHeartRateDataData(
      "SYNC",
      "HeartRateData",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getHeartRateSummary", () => {
    const result = getHeartRateSummary(
      "SYNC",
      "HeartRateSummary",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getSleepDataData", () => {
    const result = getSleepDataData(
      "SYNC",
      "SleepData",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getSleepQualityData", () => {
    const result = getSleepQualityData(
      "SYNC",
      "SleepQuality",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getSleepSummaryData", () => {
    const result = getSleepSummaryData(
      "SYNC",
      "SleepSummary",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });

  
});
