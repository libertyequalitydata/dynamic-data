import {getRideDetails,
  getUserSettings,
  getAchievementTemplate,
  getUserProfile,
  getUserData,
  getAuthDetails,
  getFacebookUserProfile,
  getInstructor,
  getRelationship,
  getReservation,
  getRideFilter,
  getRideSorts,
  getUserOverview,
  getWorkoutDetails} from "@dynamic-data/peloton-mockups";

describe("Peloton", () => {
  //test.todo("needs tests");
  it("getRideDetails", () => {
    const result = getRideDetails (
      "SYNC",
      "RideDetails",
      "2022-04-03"
    );
    console.log("RideDetails",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  
  it("getUserSettings", () => {
    const result = getUserSettings (
      "SYNC",
      "UserSettings",
      "2022-04-03"
    );
    console.log("UserSettings",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getAchievementTemplate", () => {
    const result = getAchievementTemplate (
      "SYNC",
      "AchievementTemplate",
      "2022-04-03"
    );
    console.log("AchievementTemplate",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getUserProfile", () => {
    const result = getUserProfile (
      "SYNC",
      "UserProfile",
      "2022-04-03"
    );
    console.log("UserProfile",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getUserData", () => {
    const result = getUserData (
      "SYNC",
      "UserData",
      "2022-04-03"
    );
    console.log("UserData",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getAuthDetails", () => {
    const result = getAuthDetails (
      "SYNC",
      "AuthDetails",
      "2022-04-03"
    );
    console.log("AuthDetails",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getFacebookUserProfile", () => {
    const result = getFacebookUserProfile (
      "SYNC",
      "FacebookUserProfile",
      "2022-04-03"
    );
    console.log("FacebookUserProfile",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getInstructor", () => {
    const result = getInstructor (
      "SYNC",
      "Instructor",
      "2022-04-03"
    );
    console.log("Instructor",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getRelationship", () => {
    const result = getRelationship (
      "SYNC",
      "Relationship",
      "2022-04-03"
    );
    console.log("Relationship",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getReservation", () => {
    const result = getReservation (
      "SYNC",
      "Reservation",
      "2022-04-03"
    );
    console.log("Reservation",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getRideFilter", () => {
    const result = getRideFilter (
      "SYNC",
      "RideFilter",
      "2022-04-03"
    );
    console.log("RideFilter",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getRideSorts", () => {
    const result = getRideSorts (
      "SYNC",
      "RideSorts",
      "2022-04-03"
    );
    console.log("RideSorts",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getUserOverview", () => {
    const result = getUserOverview (
      "SYNC",
      "UserOverview",
      "2022-04-03"
    );
    console.log("UserOverview",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getWorkoutDetails", () => {
    const result = getWorkoutDetails (
      "SYNC",
      "WorkoutDetails",
      "2022-04-03"
    );
    console.log("WorkoutDetails",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  
});
