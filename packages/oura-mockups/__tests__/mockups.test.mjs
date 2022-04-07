"use strict";

//const { getRandomInt } = require("@dynamic-data/utils");

import * as TEST from "@dynamic-data/oura-data/mockups";

describe("Oura", () => {
  //test.todo("needs tests");
  it("ActivitySummary mockup datamodel from mockups", () => {
    //const data = ActivitySummary;
    //console.log("MOCK ", MOCK);
    // console.log("MOCK DATA", data);
    console.log("MOCK DATA", TEST);

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
