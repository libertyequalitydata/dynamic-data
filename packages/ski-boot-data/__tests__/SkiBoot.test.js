"use strict";

const MOCK = require("@dynamic-data/ski-boot-data");

const { RawAsync, RawSync } = require("@dynamic-data/ski-boot-data");

describe("Ski Boot", () => {
  //test.todo("needs tests");
  it("Mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded RawSync datamodel from default", () => {
    console.log("MOCK ", JSON.stringify(RawSync, undefined, 2));
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded RawAsync datamodel from default", () => {
    console.log("MOCK ", JSON.stringify(RawAsync, undefined, 2));
    expect(typeof MOCK).toBe("object");
  });
});
