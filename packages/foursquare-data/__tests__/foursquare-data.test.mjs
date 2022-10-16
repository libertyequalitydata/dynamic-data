'use strict';

import {
  photos_details,
  tips_details,
  venues_categories,
  venues_details,
  venues_getRecommendations,
  venues_getVenueList,
  venues_hours,
  venues_likes,
  venues_nextVenues,
  venues_photos,
  venues_search,
  venues_similarVenues,
  venues_suggestSearch,
  venues_tips,
  venues_trending,
  } from '@dynamic-data/foursquare-data/mockups';

describe('@dynamic-data/foursquare-data', () => {
  it('check if venues_categories of type object', () => {
    //console.log("TEST ",Venues)
    expect(typeof  venues_categories).toBe('object');
    expect(!Array.isArray(venues_categories)).toBeTruthy();
    expect(Object.keys(venues_categories).length).not.toBe(0);
  });
  
  it('check if venues_details of type object', () => {
    expect(typeof venues_details).toBe('object');
    expect(!Array.isArray(venues_details)).toBeTruthy();
    expect(Object.keys(venues_details).length).not.toBe(0);
  });
  it('check if venues_getRecommendations of type object', () => {
    expect(typeof venues_getRecommendations).toBe('object');
    expect(!Array.isArray(venues_getRecommendations)).toBeTruthy();
    expect(Object.keys(venues_getRecommendations).length).not.toBe(0);
  });
  it('check if venues_getVenueList of type object', () => {
    expect(typeof venues_getVenueList).toBe('object');
    expect(!Array.isArray(venues_getVenueList)).toBeTruthy();
    expect(Object.keys(venues_getVenueList).length).not.toBe(0);
  });
  it('check if venues_hours of type object', () => {
    expect(typeof venues_hours).toBe('object');
    expect(!Array.isArray(venues_hours)).toBeTruthy();
    expect(Object.keys(venues_hours).length).not.toBe(0);
  });
  it('check if venues_likes of type object', () => {
    expect(typeof venues_likes).toBe('object');
    expect(!Array.isArray(venues_likes)).toBeTruthy();
    expect(Object.keys(venues_likes).length).not.toBe(0);
  });
  it('check if venues_nextVenues of type object', () => {
    expect(typeof venues_nextVenues).toBe('object');
    expect(!Array.isArray(venues_nextVenues)).toBeTruthy();
    expect(Object.keys(venues_nextVenues).length).not.toBe(0);
  });
  it('check if venues_photos of type object', () => {
    expect(typeof venues_photos).toBe('object');
    expect(!Array.isArray(venues_photos)).toBeTruthy();
    expect(Object.keys(venues_photos).length).not.toBe(0);
  });
  it('check if venues_search of type object', () => {
    expect(typeof venues_search).toBe('object');
    expect(!Array.isArray(venues_search)).toBeTruthy();
    expect(Object.keys(venues_search).length).not.toBe(0);
  });
  it('check if venues_similarVenues of type object', () => {
    expect(typeof venues_similarVenues).toBe('object');
    expect(!Array.isArray(venues_similarVenues)).toBeTruthy();
    expect(Object.keys(venues_similarVenues).length).not.toBe(0);
  });
  it('check if venues_suggestSearch of type object', () => {
    expect(typeof venues_suggestSearch).toBe('object');
    expect(!Array.isArray(venues_suggestSearch)).toBeTruthy();
    expect(Object.keys(venues_suggestSearch).length).not.toBe(0);
  });
  it('check if venues_tips of type object', () => {
    expect(typeof venues_tips).toBe('object');
    expect(!Array.isArray(venues_tips)).toBeTruthy();
    expect(Object.keys(venues_tips).length).not.toBe(0);
  });
  it('check if venues_trending of type object', () => {
    expect(typeof venues_trending).toBe('object');
    expect(!Array.isArray(venues_trending)).toBeTruthy();
    expect(Object.keys(venues_trending).length).not.toBe(0);
  });
  it('check if tips_details of type object', () => {
    expect(typeof tips_details).toBe('object');
    expect(!Array.isArray(tips_details)).toBeTruthy();
    expect(Object.keys(tips_details).length).not.toBe(0);
  });
  it('check if photos_details of type object', () => {
    expect(typeof photos_details).toBe('object');
    expect(!Array.isArray(photos_details)).toBeTruthy();
    expect(Object.keys(photos_details).length).not.toBe(0);
  });
  
});