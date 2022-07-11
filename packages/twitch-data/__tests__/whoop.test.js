"use strict";

const MOCK = require("@dynamic-data/whoop-data");


describe("Whoop", () => {
  //test.todo("needs tests");
  it("All mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    //console.log("MOCK DATA", data);

    expect(typeof MOCK).toBe("object");
  });
  it("Expanded mockup datamodels from default", () => {
    console.log("MOCK ", JSON.stringify(MOCK, undefined, 2));

    expect(typeof MOCK).toBe("object");
  });
});
