'use strict';

const {
    Venues,
    Photos,
    Tips
  } = require('@dynamic-data/foursquare-mockups');

describe('@dynamic-data/foursquare-mockups', () => {
  it('check if venues_categories of type object', () => {
    expect(typeof  Venues.venues_categories).toBe('object');
    expect(!Array.isArray(Venues.venues_categories)).toBeTruthy();
    expect(Object.keys(Venues.venues_categories).length).not.toBe(0);
  });
  it('check if venues_details of type object', () => {
    expect(typeof Venues.venues_details).toBe('object');
    expect(!Array.isArray(Venues.venues_details)).toBeTruthy();
    expect(Object.keys(Venues.venues_details).length).not.toBe(0);
  });
  it('check if venues_getRecommendations of type object', () => {
    expect(typeof Venues.venues_getRecommendations).toBe('object');
    expect(!Array.isArray(Venues.venues_getRecommendations)).toBeTruthy();
    expect(Object.keys(Venues.venues_getRecommendations).length).not.toBe(0);
  });
  it('check if venues_getVenueList of type object', () => {
    expect(typeof Venues.venues_getVenueList).toBe('object');
    expect(!Array.isArray(Venues.venues_getVenueList)).toBeTruthy();
    expect(Object.keys(Venues.venues_getVenueList).length).not.toBe(0);
  });
  it('check if venues_hours of type object', () => {
    expect(typeof Venues.venues_hours).toBe('object');
    expect(!Array.isArray(Venues.venues_hours)).toBeTruthy();
    expect(Object.keys(Venues.venues_hours).length).not.toBe(0);
  });
  it('check if venues_likes of type object', () => {
    expect(typeof Venues.venues_likes).toBe('object');
    expect(!Array.isArray(Venues.venues_likes)).toBeTruthy();
    expect(Object.keys(Venues.venues_likes).length).not.toBe(0);
  });
  it('check if venues_nextVenues of type object', () => {
    expect(typeof Venues.venues_nextVenues).toBe('object');
    expect(!Array.isArray(Venues.venues_nextVenues)).toBeTruthy();
    expect(Object.keys(Venues.venues_nextVenues).length).not.toBe(0);
  });
  it('check if venues_photos of type object', () => {
    expect(typeof Venues.venues_photos).toBe('object');
    expect(!Array.isArray(Venues.venues_photos)).toBeTruthy();
    expect(Object.keys(Venues.venues_photos).length).not.toBe(0);
  });
  it('check if venues_search of type object', () => {
    expect(typeof Venues.venues_search).toBe('object');
    expect(!Array.isArray(Venues.venues_search)).toBeTruthy();
    expect(Object.keys(Venues.venues_search).length).not.toBe(0);
  });
  it('check if venues_similarVenues of type object', () => {
    expect(typeof Venues.venues_similarVenues).toBe('object');
    expect(!Array.isArray(Venues.venues_similarVenues)).toBeTruthy();
    expect(Object.keys(Venues.venues_similarVenues).length).not.toBe(0);
  });
  it('check if venues_suggestSearch of type object', () => {
    expect(typeof Venues.venues_suggestSearch).toBe('object');
    expect(!Array.isArray(Venues.venues_suggestSearch)).toBeTruthy();
    expect(Object.keys(Venues.venues_suggestSearch).length).not.toBe(0);
  });
  it('check if venues_tips of type object', () => {
    expect(typeof Venues.venues_tips).toBe('object');
    expect(!Array.isArray(Venues.venues_tips)).toBeTruthy();
    expect(Object.keys(Venues.venues_tips).length).not.toBe(0);
  });
  it('check if venues_trending of type object', () => {
    expect(typeof Venues.venues_trending).toBe('object');
    expect(!Array.isArray(Venues.venues_trending)).toBeTruthy();
    expect(Object.keys(Venues.venues_trending).length).not.toBe(0);
  });
  it('check if tips_details of type object', () => {
    expect(typeof Tips.tips_details).toBe('object');
    expect(!Array.isArray(Tips.tips_details)).toBeTruthy();
    expect(Object.keys(Tips.tips_details).length).not.toBe(0);
  });
  it('check if photos_details of type object', () => {
    expect(typeof Photos.photos_details).toBe('object');
    expect(!Array.isArray(Photos.photos_details)).toBeTruthy();
    expect(Object.keys(Photos.photos_details).length).not.toBe(0);
  });
});