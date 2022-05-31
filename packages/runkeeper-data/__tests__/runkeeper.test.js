'use strict';

const { cardioActivity } = require('@dynamic-data/runkeeper-data');

describe('@dynamic-data/runkeeper-data', () => {
  it('check if cardioActivity of type object', () => {
    expect(typeof cardioActivity).toBe('object');
    expect(!Array.isArray(cardioActivity)).toBeTruthy();
    expect(Object.keys(cardioActivity).length).not.toBe(0);
  });
});