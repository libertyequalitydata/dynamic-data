'use strict';

const MOCK = require("@dynamic-data/runkeeper-data");

const {
  getCardioActivityMockupData
} = require("../../runkeeper-mockups/src");

describe('runkeeper-data', () => {
  it('getCardioActivityMockupData', () => {
    const result = getCardioActivityMockupData(
      "SYNC",
      "CardioActivity",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe('object');
    expect(!Array.isArray(result)).toBeTruthy();
    expect(Object.keys(result).length).not.toBe(0);
  });
});