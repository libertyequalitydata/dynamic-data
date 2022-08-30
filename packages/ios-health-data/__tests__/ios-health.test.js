"use strict";

const MOCK = require("@dynamic-data/ios-health-data");

const {Characteristics,HKActivitySummary,HKAudiogramSample,HKClinicalRecord,HKElectrocardiogram,HKWorkout,HKWorkoutConfiguration,HKWorkoutRoute,HKWorkoutSession,} = require("@dynamic-data/ios-health-data/mockups"); 


describe("IOS Health", () => {
  //test.todo("needs tests");
  it("Mockup datamodels from default", () => {
    // console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
  });
  
  it("Characteristics datamodel from default", () => {
    // console.log("Characteristics ", JSON.stringify(Characteristics, undefined, 2));
    expect(typeof Characteristics).toBe("object");
  });
  it("HKActivitySummary datamodel from default", () => {
    // console.log("HKActivitySummary ", JSON.stringify(HKActivitySummary, undefined, 2));
    expect(typeof HKActivitySummary).toBe("object");
  });
  it("HKAudiogramSample datamodel from default", () => {
    // console.log("HKAudiogramSample ", JSON.stringify(HKAudiogramSample, undefined, 2));
    expect(typeof HKAudiogramSample).toBe("object");
  });
  it("HKClinicalRecord datamodel from default", () => {
    // console.log("HKClinicalRecord ", JSON.stringify(HKClinicalRecord, undefined, 2));
    expect(typeof HKClinicalRecord).toBe("object");
  });
  it("HKElectrocardiogram datamodel from default", () => {
    // console.log("HKElectrocardiogram ", JSON.stringify(HKElectrocardiogram, undefined, 2));
    expect(typeof HKElectrocardiogram).toBe("object");
  });
  it("HKWorkout datamodel from default", () => {
    // console.log("HKWorkout ", JSON.stringify(HKWorkout, undefined, 2));
    expect(typeof HKWorkout).toBe("object");
  });
  it("HKWorkoutConfiguration datamodel from default", () => {
    // console.log("HKWorkoutConfiguration ", JSON.stringify(HKWorkoutConfiguration, undefined, 2));
    expect(typeof HKWorkoutConfiguration).toBe("object");
  });
  it("HKWorkoutRoute datamodel from default", () => {
    // console.log("HKWorkoutRoute ", JSON.stringify(HKWorkoutRoute, undefined, 2));
    expect(typeof HKWorkoutRoute).toBe("object");
  });
  it("HKWorkoutSession datamodel from default", () => {
    // console.log("HKWorkoutSession ", JSON.stringify(HKWorkoutSession, undefined, 2));
    expect(typeof HKWorkoutSession).toBe("object");
  });
});
