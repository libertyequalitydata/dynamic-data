'use strict';

const { cardioActivityMockup } = require('@dynamic-data/runkeeper-data/mockups');

describe('@dynamic-data/runkeeper-mockups', () => {
  it('check if cardioActivityMockup of type object', () => {
    expect(typeof cardioActivityMockup).toBe('object');
    expect(!Array.isArray(cardioActivityMockup)).toBeTruthy();
    expect(Object.keys(cardioActivityMockup).length).not.toBe(0);
  });
});