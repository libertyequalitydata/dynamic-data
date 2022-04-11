"use strict";

//const { default: MOCK } = require("../dist/cjs");

//const { Activity } = require("../dist/cjs/mockups");

const MOCK = require("@dynamic-data/oura-data");

const { ActivitySummary } = require("@dynamic-data/oura-data/mockups");

describe("oura", () => {
  //test.todo("needs tests");
  it("ActivitySummary mockup datamodel from default", () => {
    const data = MOCK.ActivitySummary;
    //console.log("MOCK ", MOCK);
    //console.log("MOCK DATA", data);

    expect(typeof data).toBe("object");
  });
  it("ActivitySummaryAsync mockup datamodel from default", () => {
    const data = MOCK.ActivitySummaryAsync;
    //console.log("MOCK ", MOCK);
    //console.log("MOCK ASYNC DATA", data);

    //expect(typeof data).toBe("object");
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(2);
  });
  it("ActivitySummary mockup datamodel only", () => {
    const data = ActivitySummary;
    //console.log("MOCK DATA", data);

    expect(typeof data).toBe("object");
  });
});
