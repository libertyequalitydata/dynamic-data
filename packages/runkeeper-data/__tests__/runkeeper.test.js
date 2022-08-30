'use strict';

const MOCK = require("@dynamic-data/runkeeper-data");
const { cardioActivity } = require('@dynamic-data/runkeeper-data/mockups');

describe('runkeeper-data', () => {
  it("Mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
    expect(!Array.isArray(MOCK)).toBeTruthy();
    expect(Object.keys(MOCK).length).not.toBe(0);
  });
  it("Expanded cardioActivity datamodel from default", () => {
    console.log("MOCK ", JSON.stringify(cardioActivity, undefined, 2));
    expect(typeof MOCK).toBe("object");
  });
  it('check if cardioActivity of type object', () => {
    expect(typeof cardioActivity).toBe('object');
    expect(!Array.isArray(cardioActivity)).toBeTruthy();
    expect(Object.keys(cardioActivity).length).not.toBe(0);
  });
});