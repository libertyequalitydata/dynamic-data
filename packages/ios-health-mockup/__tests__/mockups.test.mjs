import { getRandomInt } from "@dynamic-data/utils";

import MOCK from "@dynamic-data/ios-health-data";

import {
  getCharacteristics,
  getHKActivitySummary,
  getHKAudiogramSample,
  getHKClinicalRecord,
  getHKElectrocardiogram,
  getHKWorkoutConfiguration,
  getHKWorkoutSession,
  getHKWorkoutRoute,
  getHKWorkout
} from "@dynamic-data/ios-health-mockups";

describe("IOS Health", () => {
  //test.todo("needs tests");
  it("getCharacteristics", () => {
    const result = getCharacteristics (
      "SYNC",
      "Characteristics",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getHKActivitySummary", () => {
    const result = getHKActivitySummary (
      "SYNC",
      "HKActivitySummary",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getHKAudiogramSample", () => {
    const result = getHKAudiogramSample (
      "SYNC",
      "HKAudiogramSample",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getHKClinicalRecord", () => {
    const result = getHKClinicalRecord (
      "SYNC",
      "HKClinicalRecord",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getHKElectrocardiogram", () => {
    const result = getHKElectrocardiogram (
      "SYNC",
      "HKElectrocardiogram",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getHKWorkoutConfiguration", () => {
    const result = getHKWorkoutConfiguration (
      "SYNC",
      "HKWorkoutConfiguration",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getHKWorkoutSession", () => {
    const result = getHKWorkoutSession (
      "SYNC",
      "HKWorkoutSession",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getHKWorkoutRoute", () => {
    const result = getHKWorkoutRoute (
      "SYNC",
      "HKWorkoutRoute",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getHKWorkout", () => {
    const result = getHKWorkout (
      "SYNC",
      "HKWorkout",
      "2022-04-03"
    );
    console.log(JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
});
