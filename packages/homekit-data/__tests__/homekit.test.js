"use strict";

const MOCK = require("@dynamic-data/homekit-data");

const {HMAccessory,
  HMActionSet,
  HMCharacteristic,
  HMEventTrigger,
  HMHomeManager,
  HMMatterHome,
  HMMatterRoom,
  HMMatterTopology,
  HMService,
  HMTimerTrigger} = require("@dynamic-data/homekit-data/mockups")

describe("Homekit", () => {
  test.todo("needs tests");
  it("Mockup datamodels datamodel from default", () => {
    // console.log("MOCK ", JSON.stringify(MOCK, undefined, 2));
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded HMAccessory datamodel from default", () => {
    // console.log("HMAccessory ", JSON.stringify(HMAccessory, undefined, 2));
    expect(typeof HMAccessory).toBe("object");
  });
  it("Expanded HMAction datamodel from default", () => {
    // console.log("MOCK ", JSON.stringify(HMAction, undefined, 2));
    expect(typeof HMActionSet).toBe("object");
  });
  it("Expanded HMCharacteristic datamodel from default", () => {
    // console.log("MOCK ", JSON.stringify(HMCharacteristic, undefined, 2));
    expect(typeof HMCharacteristic).toBe("object");
  });
  it("Expanded HMEventTrigger datamodel from default", () => {
    // console.log("MOCK ", JSON.stringify(HMEventTrigger, undefined, 2));
    expect(typeof HMEventTrigger).toBe("object");
  });
  it("Expanded HMHomeManager datamodel from default", () => {
    // console.log("MOCK ", JSON.stringify(HMHomeManager, undefined, 2));
    expect(typeof HMHomeManager).toBe("object");
  });
  it("Expanded HMMatterHome datamodel from default", () => {
    // console.log("MOCK ", JSON.stringify(HMMatterHome, undefined, 2));
    expect(typeof HMMatterHome).toBe("object");
  });
  it("Expanded HMMatterRoom datamodel from default", () => {
    // console.log("MOCK ", JSON.stringify(HMMatterRoom, undefined, 2));
    expect(typeof HMMatterRoom).toBe("object");
  });
  it("Expanded HMMatterTopology datamodel from default", () => {
    // console.log("MOCK ", JSON.stringify(HMMatterTopology, undefined, 2));
    expect(typeof HMMatterTopology).toBe("object");
  });
  it("Expanded HMService datamodel from default", () => {
    // console.log("MOCK ", JSON.stringify(HMService, undefined, 2));
    expect(typeof HMService).toBe("object");
  });
  it("Expanded HMTimerTrigger datamodel from default", () => {
    // console.log("MOCK ", JSON.stringify(HMTimerTrigger, undefined, 2));
    expect(typeof HMTimerTrigger).toBe("object");
  });
});
