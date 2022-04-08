"use strict";

//const { getRandomInt } = require("@dynamic-data/utils");

const MOCK = require("@dynamic-data/oura-data");

describe("Oura", () => {
  //test.todo("needs tests");
  it("ActivitySummary mockup datamodel from default", () => {
    const data = MOCK.ActivitySummary;
    //console.log("MOCK ", MOCK);
    //console.log("MOCK DATA", data);

    expect(typeof data).toBe("object");
  });

  /*
  it("RandomInt", () => {
    const result = getRandomInt(1, 10);
    //console.log(typeof result);
    expect(typeof result).toEqual("number");
  });
  */
});
