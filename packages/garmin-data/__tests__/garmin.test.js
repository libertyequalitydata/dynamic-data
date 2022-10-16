"use strict";

const MOCK = require("@dynamic-data/garmin-data");

const { DailiesData,
  DailiesDataAsync,
  EpochsData,
  EpochsDataAsync,
  PulseoxData,
  PulseoxDataAsync,
  SleepsData,
  SleepsDataAsync } = require("@dynamic-data/garmin-data/mockups");

describe("Garmin", () => {
  //test.todo("needs tests");
  it("Mockup datamodels from default", () => {
    //console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
  });
  /*
  it("Expanded Mockup datamodels from default", () => {
    console.log("MOCK ", JSON.stringify(MOCK, undefined, 2));
    expect(typeof MOCK).toBe("object");
  });
  */
  it("Expanded DailiesData datamodel from default", () => {

    // console.log("DailiesData ", JSON.stringify(DailiesData, undefined, 2));
    expect(typeof DailiesData).toBe("object");
  });
  it("Expanded DailiesDataAsync datamodel from default", () => {
    // console.log("DailiesDataObject ", JSON.stringify(DailiesDataObject, undefined, 2));
    expect(typeof DailiesDataAsync).toBe("object");
  });
  it("Expanded EpochsData datamodel from default", () => {
    // console.log("EpochsData ", JSON.stringify(EpochsData, undefined, 2));
    expect(typeof EpochsData).toBe("object");
  });
  it("Expanded EpochsDataAsync datamodel from default", () => {
    // console.log("EpochsDataObject ", JSON.stringify(EpochsDataObject, undefined, 2));
    expect(typeof EpochsDataAsync).toBe("object");
  });
  it("Expanded PulseoxData datamodel from default", () => {
    // console.log("PulseoxData ", JSON.stringify(PulseoxData, undefined, 2));
    expect(typeof PulseoxData).toBe("object");
  });
  it("Expanded PulseoxDataAsync datamodel from default", () => {
    // console.log("PulseoxObject ", JSON.stringify(PulseoxObject, undefined, 2));
    expect(typeof PulseoxDataAsync).toBe("object");
  });
  it("Expanded SleepsData datamodel from default", () => {
    // console.log("SleepsData ", JSON.stringify(SleepsData, undefined, 2));
    expect(typeof SleepsData).toBe("object");
  });
  it("Expanded SleepsDataAsync datamodel from default", () => {
    // console.log("SleepsDataObject ", JSON.stringify(SleepsDataObject, undefined, 2));
    expect(typeof SleepsDataAsync).toBe("object");
  });
});

