"use strict";

const MOCK = require("@dynamic-data/ancestry-data");

const { RawDataObject } = require("@dynamic-data/ancestry-data/mockups");

describe("Ancestry", () => {
  //test.todo("needs tests");
  it("Mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded RawDataObject datamodel from default", () => {
    console.log("MOCK ", RawDataObject);
    console.log("MOCK ", JSON.stringify(RawDataObject, undefined, 2));
    expect(typeof MOCK).toBe("object");
  });
});
