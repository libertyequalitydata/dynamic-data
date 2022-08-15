"use strict";


import MOCK from "@dynamic-data/homekit-data";

import {
  getHMHomeManager,
  getHMAccessory,
  getHMActionSet,
  getHMCharacteristic,
  getHMEventTrigger,
  getHMMatterHome,
  getHMMatterRoom,
  getHMMatterTopology,
  getHMService,
  getHMTimerTrigger
} from "@dynamic-data/homekit-mockups";


describe("homekit ", () => {
  test.todo("needs tests");
    it("getHMHomeManager", () => {
    const result = getHMHomeManager (
      "SYNC",
      "HMHomeManager",
      "2022-04-03"
    );
    // console.log("getHMHomeManager ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getHMHomeManager", () => {
    const result = getHMHomeManager (
      "SYNC",
      "HMHomeManager",
      "2022-04-03"
    );
    // console.log("getHMHomeManager ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getHMAccessory", () => {
    const result = getHMAccessory (
      "SYNC",
      "HMAccessory",
      "2022-04-03"
    );
    // console.log("getHMAccessory ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getHMActionSet", () => {
    const result = getHMActionSet (
      "SYNC",
      "HMActionSet",
      "2022-04-03"
    );
    // console.log("getHMActionSet ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });  
  
  it("getHMCharacteristic", () => {
    const result = getHMCharacteristic (
      "SYNC",
      "HMCharacteristic",
      "2022-04-03"
    );
    // console.log("getHMCharacteristic ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");  
  });

  it("getHMEventTrigger", () => {
    const result = getHMEventTrigger (
      "SYNC",
      "HMEventTrigger",
      "2022-04-03"
    );
    // console.log("getHMCharacteristic ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");  
  });

  it("getHMMatterHome", () => {
    const result = getHMMatterHome (
      "SYNC",
      "HMMatterHome",
      "2022-04-03"
    );
    // console.log("getHMCharacteristic ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");  
  });

  it("getHMMatterRoom", () => {
    const result = getHMMatterRoom (
      "SYNC",
      "HMMatterRoom",
      "2022-04-03"
    );
    // console.log("getHMCharacteristic ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");  
  });

  it("getHMMatterTopology", () => {
    const result = getHMMatterTopology (
      "SYNC",
      "HMMatterTopology",
      "2022-04-03"
    );
    // console.log("getHMCharacteristic ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");  
  });

  it("getHMService", () => {
    const result = getHMService (
      "SYNC",
      "HMService",
      "2022-04-03"
    );
    // console.log("getHMCharacteristic ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");  
  });

  it("getHMTimerTrigger", () => {
    const result = getHMTimerTrigger (
      "SYNC",
      "HMTimerTrigger",
      "2022-04-03"
    );
    // console.log("getHMCharacteristic ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");  
  });
});
