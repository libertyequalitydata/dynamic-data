'use strict';

const {
    rideTypes,
    driverETA,
    rideEstimates,
    nearby_drivers
} = require('@dynamic-data/lyft-data/mockups');

describe('@dynamic-data/lyft-data', () => {
  it('check if rideTypes of type object', () => {
    expect(typeof rideTypes).toBe('object');
    expect(!Array.isArray(rideTypes)).toBeTruthy();
    expect(Object.keys(rideTypes).length).not.toBe(0);
  });
  it('check if driverETA of type object', () => {
    expect(typeof driverETA).toBe('object');
    expect(!Array.isArray(driverETA)).toBeTruthy();
    expect(Object.keys(driverETA).length).not.toBe(0);
  });
  it('check if rideEstimates of type object', () => {
    expect(typeof rideEstimates).toBe('object');
    expect(!Array.isArray(rideEstimates)).toBeTruthy();
    expect(Object.keys(rideEstimates).length).not.toBe(0);
  });
  it('check if nearby_drivers of type object', () => {
    expect(typeof nearby_drivers).toBe('object');
    expect(!Array.isArray(nearby_drivers)).toBeTruthy();
    expect(Object.keys(nearby_drivers).length).not.toBe(0);
  });
});