"use strict";

const MOCK = require("@dynamic-data/fitbit-data");

const { ActivitiesData,
ActivitiesDataAsync,
ActivitiesSummary,
ActivitiesSummaryAsync,
HeartRateData,
HeartRateDataAsync,
HeartRateSummary,
HeartRateSummaryAsync,
SleepData,
SleepDataAsync,
SleepQuality,
SleepQualityAsync,
SleepSummary,
SleepSummaryAsync } = require("@dynamic-data/fitbit-data");

describe("FitBit", () => {
  //test.todo("needs tests");
  it("Mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded Mockup datamodels from default", () => {
    console.log("MOCK ", JSON.stringify(MOCK, undefined, 2));
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded ActivitiesData datamodel from default", () => {
    console.log("ActivitiesData ", JSON.stringify(ActivitiesData, undefined, 2));
    expect(typeof ActivitiesData).toBe("object");
  });
  it("Expanded ActivitiesDataAsync datamodel from default", () => {
    console.log("ActivitiesDataAsync ", JSON.stringify(ActivitiesDataAsync, undefined, 2));
    expect(typeof ActivitiesDataAsync).toBe("object");
  });
  it("Expanded ActivitiesSummary datamodel from default", () => {
    console.log("ActivitiesSummary ", JSON.stringify(ActivitiesSummary, undefined, 2));
    expect(typeof ActivitiesSummary).toBe("object");
  });
  it("Expanded ActivitiesSummaryAsync datamodel from default", () => {
    console.log("ActivitiesSummaryAsync ", JSON.stringify(ActivitiesSummaryAsync, undefined, 2));
    expect(typeof ActivitiesSummaryAsync).toBe("object");
  });
  it("Expanded HeartRateData datamodel from default", () => {
    console.log("HeartRateData ", JSON.stringify(HeartRateData, undefined, 2));
    expect(typeof HeartRateData).toBe("object");
  });
  it("Expanded HeartRateDataAsync datamodel from default", () => {
    console.log("HeartRateDataAsync ", JSON.stringify(HeartRateDataAsync, undefined, 2));
    expect(typeof HeartRateDataAsync).toBe("object");
  });
  it("Expanded HeartRateSummary datamodel from default", () => {
    console.log("HeartRateSummary ", JSON.stringify(HeartRateSummary, undefined, 2));
    expect(typeof HeartRateSummary).toBe("object");
  });
  it("Expanded HeartRateSummaryAsync datamodel from default", () => {
    console.log("HeartRateSummaryAsync ", JSON.stringify(HeartRateSummaryAsync, undefined, 2));
    expect(typeof HeartRateSummaryAsync).toBe("object");
  }); 
  it("Expanded SleepData datamodel from default", () => {
    console.log("SleepData ", JSON.stringify(SleepData, undefined, 2));
    expect(typeof SleepData).toBe("object");
  }); 
  it("Expanded SleepDataAsync datamodel from default", () => {
    console.log("SleepDataAsync ", JSON.stringify(SleepDataAsync, undefined, 2));
    expect(typeof SleepDataAsync).toBe("object");
  }); 
  it("Expanded SleepQuality datamodel from default", () => {
    console.log("SleepQuality ", JSON.stringify(SleepQuality, undefined, 2));
    expect(typeof SleepQuality).toBe("object");
  }); 
  it("Expanded SleepQualityAsync datamodel from default", () => {
    console.log("SleepQualityAsync ", JSON.stringify(SleepQualityAsync, undefined, 2));
    expect(typeof SleepQualityAsync).toBe("object");
  }); 
  it("Expanded SleepSummary datamodel from default", () => {
    console.log("SleepSummary ", JSON.stringify(SleepSummary, undefined, 2));
    expect(typeof SleepSummary).toBe("object");
  }); 
  it("Expanded SleepSummaryAsync datamodel from default", () => {
    console.log("SleepSummaryAsync ", JSON.stringify(SleepSummaryAsync, undefined, 2));
    expect(typeof SleepSummaryAsync).toBe("object");
  }); 
});

