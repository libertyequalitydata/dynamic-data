"use strict";

const { getRandomInt } = require("@led/utils");

describe("utils", () => {
  //test.todo("needs tests");
  it("RandomInt", () => {
    const result = getRandomInt(1, 10);
    //console.log(typeof result);
    expect(typeof result).toEqual("number");
  });
});
