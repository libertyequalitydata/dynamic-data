import MOCK from "@dynamic-data/withings-data";

import {Getactivity,
Getgoals,
Getintradayactivity,
Getmeas,
HeartList,
Heart,
Sleep,
SleepSummary,
getDevice,
getUser,
getWorkout,} from "@dynamic-data/withings-data/mockups";

describe("Withings", () => {
  //test.todo("needs tests");
  it("Mockup datamodel only", () => {
    console.log(JSON.stringify(MOCK, undefined, 2))

    expect(typeof MOCK).toBe("object");
  });
  it("Getactivity datamodel only", () => {
    console.log(JSON.stringify(Getactivity, undefined, 2))

    expect(typeof Getactivity).toBe("object");
  });
  it("Getgoals datamodel only", () => {
    console.log(JSON.stringify(Getgoals, undefined, 2))

    expect(typeof Getgoals).toBe("object");
  });
  it("Getintradayactivity datamodel only", () => {
    console.log(JSON.stringify(Getintradayactivity, undefined, 2))

    expect(typeof Getintradayactivity).toBe("object");
  });
  it("Getmeas datamodel only", () => {
    console.log(JSON.stringify(Getmeas, undefined, 2))

    expect(typeof Getmeas).toBe("object");
  });
  it("HeartList datamodel only", () => {
    console.log(JSON.stringify(HeartList, undefined, 2))

    expect(typeof HeartList).toBe("object");
  });
  it("Heart datamodel only", () => {
    console.log(JSON.stringify(Heart, undefined, 2))

    expect(typeof Heart).toBe("object");
  });
  it("Sleep datamodel only", () => {
    console.log(JSON.stringify(Sleep, undefined, 2))

    expect(typeof Sleep).toBe("object");
  });
  it("SleepSummary datamodel only", () => {
    console.log(JSON.stringify(SleepSummary, undefined, 2))

    expect(typeof SleepSummary).toBe("object");
  });
  it("getDevice datamodel only", () => {
    console.log(JSON.stringify(getDevice, undefined, 2))

    expect(typeof getDevice).toBe("object");
  });
  it("getUser datamodel only", () => {
    console.log(JSON.stringify(getUser, undefined, 2))

    expect(typeof getUser).toBe("object");
  });
  it("getWorkout datamodel only", () => {
    console.log(JSON.stringify(getWorkout, undefined, 2))

    expect(typeof getWorkout).toBe("object");
  });
  });
