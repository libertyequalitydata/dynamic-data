"use strict";

const MOCK = require("@dynamic-data/23andme-data");

const { RawDataObject } = require("@dynamic-data/23andme-data/mockups");

describe("23andme", () => {
  //test.todo("needs tests");
  it("Mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded RawDataObject datamodel from default", () => {
    console.log("MOCK ", JSON.stringify(RawDataObject, undefined, 2));
    expect(typeof MOCK).toBe("object");
  });
});
