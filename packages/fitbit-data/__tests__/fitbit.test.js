"use strict";

const MOCK = require("@dynamic-data/fitbit-data");

const { ActivitiesData } = require("@dynamic-data/fitbit-data/mockups");

describe("fitbit", () => {
  //test.todo("needs tests");
  it("ActivitiesData mockup datamodel from default", () => {
    const data = MOCK.ActivitiesData;
    //console.log("MOCK ", MOCK);
    console.log("MOCK DATA", data);

    expect(typeof data).toBe("object");
  });

  it("ActivitiesData mockup datamodel only", () => {
    const data = ActivitiesData;

    expect(typeof data).toBe("object");
  });
});
