"use strict";


const MOCK = require("@dynamic-data/ancestry-data");

const {
  getRawData
} = require("@dynamic-data/ancestry-mockups");


describe("Ancestry", () => {
  //test.todo("needs tests");
  it("getRawData", () => {
    const result = getRawData (
      "SYNC",
      "RawData",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe("object");
  });

  
});
