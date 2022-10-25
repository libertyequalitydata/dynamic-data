'use strict';

const MOCK = require("@dynamic-data/veri-data");
const { mealActivity } = require('@dynamic-data/veri-data/mockups');

describe('veri-data', () => {
  it("Mockup datamodels from default", () => {
    // console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
    expect(!Array.isArray(MOCK)).toBeTruthy();
    expect(Object.keys(MOCK).length).not.toBe(0);
  });
  it("Expanded mealActivity datamodel from default", () => {
    // console.log("MOCK ", JSON.stringify(mealActivity, undefined, 2));
    expect(typeof MOCK).toBe("object");
  });
  it('check if mealActivity of type object', () => {
    expect(typeof mealActivity).toBe('object');
    expect(!Array.isArray(mealActivity)).toBeTruthy();
    expect(Object.keys(mealActivity).length).not.toBe(0);
  });
});
