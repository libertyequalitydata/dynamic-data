"use strict";

const { getRandomInt, getSleepDate } = require("@dynamic-data/utils");

describe("utils", () => {
  //test.todo("needs tests");
  it("RandomInt", () => {
    const result = getRandomInt(1, 10);
    //console.log(typeof result);
    expect(typeof result).toEqual("number");
  });
  it("getSleepDate", () => {
    const result = getSleepDate("2022-04-03", 22, 3);
    console.log(typeof result);
    //expect(typeof result).toEqual("number");
  });
});
