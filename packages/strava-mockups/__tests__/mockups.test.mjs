"use strict";

const { getRandomInt } = require("@dynamic-data/utils");

import MOCK from "@dynamic-data/strava-data";

import {
  getEquipmentMockupData,
  getClubMockupData,
  getSegmentEffortMockupData,
  getActivityMockupData,
  getAthleteStatsMockupData,
  getActivityZoneMockupData,
  getActivityCommentsMockupData,
  getSegmentsMockupData,
  getActivityLapMockupData,
  getAthleteMockupData,
  getActivityStreamData,
  getRouteMockupData,
  getAthleteActivitesData
  } from "@dynamic-data/strava-mockups";

describe("Strava", () => {
  //test.todo("needs tests");
  it("MOCK datamodel", () => {
    // console.log(JSON.stringify(MOCK, undefined, 2));
    expect(typeof MOCK).toBe("object");
  });
  it("getEquipmentMockupData", () => {
    const result = getEquipmentMockupData(
      "SYNC",
      "Equipment",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getClubMockupData", () => {
    const result = getClubMockupData(
      "SYNC",
      "Club",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getSegmentEffortMockupData", () => {
    const result = getSegmentEffortMockupData(
      "SYNC",
      "SegmentEfforts",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getActivityMockupData", () => {
    const result = getActivityMockupData(
      "SYNC",
      "Activity",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getAthleteStatsMockupData", () => {
    const result = getAthleteStatsMockupData(
      "SYNC",
      "AthleteStats",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getActivityZoneMockupData", () => {
    const result = getActivityZoneMockupData(
      "SYNC",
      "ActivityZone",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getActivityCommentsMockupData", () => {
    const result = getActivityCommentsMockupData(
      "SYNC",
      "ActivityComments",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getSegmentsMockupData", () => {
    const result = getSegmentsMockupData(
      "SYNC",
      "Segments",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getActivityLapMockupData", () => {
    const result = getActivityLapMockupData(
      "SYNC",
      "ActivityLap",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getAthleteMockupData", () => {
    const result = getAthleteMockupData(
      "SYNC",
      "Athlete",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getActivityStreamData", () => {
    const result = getActivityStreamData(
      "SYNC",
      "ActivityStream",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getRouteMockupData", () => {
    const result = getRouteMockupData(
      "SYNC",
      "Route",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getAthleteActivitesData", () => {
    const result = getAthleteActivitesData(
      "SYNC",
      "AthleteActivities",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
  it("getAthleteActivitesData", () => {
    const result = getAthleteActivitesData(
      "SYNC",
      "AthleteActivities",
      "2022-04-03"
    );
    // console.log(JSON.stringify(result, undefined, 2))
    expect(typeof result).toBe("object");
  });
});
