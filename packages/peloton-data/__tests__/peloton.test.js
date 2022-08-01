"use strict";

const MOCK = require("@dynamic-data/peloton-data");

const { AchievementTemplate,
  AuthDetails,
  FacebookUserProfile,
  Instructor,
  Relationship,
  Reservation,
  RideDetails,
  RideFilter,
  RideSorts,
  UserData,
  UserOverview,
  UserProfile,
  UserSettings,
  WorkoutDetails } = require("@dynamic-data/peloton-data");

describe("Peloton", () => {
  //test.todo("needs tests");
  it("Mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded MOCK datamodel from default", () => {
    console.log("MOCK ", JSON.stringify(MOCK, undefined, 2));
    expect(typeof MOCK).toBe("object");
  });
  it("AchievementTemplate datamodel from default", () => {
    console.log("AchievementTemplate ", JSON.stringify(AchievementTemplate, undefined, 2));
    expect(typeof AchievementTemplate).toBe("object");
  });
  it("AuthDetails datamodel from default", () => {
    console.log("AuthDetails ", JSON.stringify(AuthDetails, undefined, 2));
    expect(typeof AuthDetails).toBe("object");
  });
  it("FacebookUserProfile datamodel from default", () => {
    console.log("FacebookUserProfile ", JSON.stringify(FacebookUserProfile, undefined, 2));
    expect(typeof FacebookUserProfile).toBe("object");
  });
  it("Instructor datamodel from default", () => {
    console.log("Instructor ", JSON.stringify(Instructor, undefined, 2));
    expect(typeof Instructor).toBe("object");
  });
  it("Relationship datamodel from default", () => {
    console.log("Relationship ", JSON.stringify(Relationship, undefined, 2));
    expect(typeof Relationship).toBe("object");
  });
  it("Reservation datamodel from default", () => {
    console.log("Reservation ", JSON.stringify(Reservation, undefined, 2));
    expect(typeof Reservation).toBe("object");
  });
  it("RideDetails datamodel from default", () => {
    console.log("RideDetails ", JSON.stringify(RideDetails, undefined, 2));
    expect(typeof RideDetails).toBe("object");
  });
  it("RideFilter datamodel from default", () => {
    console.log("RideFilter ", JSON.stringify(RideFilter, undefined, 2));
    expect(typeof RideFilter).toBe("object");
  });
  it("RideSorts datamodel from default", () => {
    console.log("RideSorts ", JSON.stringify(RideSorts, undefined, 2));
    expect(typeof RideSorts).toBe("object");
  });
  it("UserData datamodel from default", () => {
    console.log("UserData ", JSON.stringify(UserData, undefined, 2));
    expect(typeof UserData).toBe("object");
  });
  it("UserOverview datamodel from default", () => {
    console.log("UserOverview ", JSON.stringify(UserOverview, undefined, 2));
    expect(typeof UserOverview).toBe("object");
  });
  it("UserProfile datamodel from default", () => {
    console.log("UserProfile ", JSON.stringify(UserProfile, undefined, 2));
    expect(typeof UserProfile).toBe("object");
  });
  it("UserSettings datamodel from default", () => {
    console.log("UserSettings ", JSON.stringify(UserSettings, undefined, 2));
    expect(typeof UserSettings).toBe("object");
  });
  it("WorkoutDetails datamodel from default", () => {
    console.log("WorkoutDetails ", JSON.stringify(WorkoutDetails, undefined, 2));
    expect(typeof WorkoutDetails).toBe("object");
  });
});
