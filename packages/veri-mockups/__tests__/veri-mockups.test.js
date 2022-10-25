'use strict';

const MOCK = require("@dynamic-data/veri-mockups");

const {
    getMealActivityMockupData
} = require("@dynamic-data/veri-mockups");

describe('veri-mockups', () => {
  it('getMealActivityMockupData', () => {
    const result = getMealActivityMockupData(
      "SYNC",
      "MealActivity",
      "2022-10-11"
    );
    // console.log(result);
    expect(typeof result).toBe('object');
    expect(!Array.isArray(result)).toBeTruthy();
    expect(Object.keys(result).length).not.toBe(0);
  });
}); 
