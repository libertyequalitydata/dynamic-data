"use strict";

const { getRandomInt } = require("@dynamic-data/utils");

const MOCK = require("@dynamic-data/garmin-data");

const {
  getDailiesMockupData,
  getSleepsMockupData,
  getPulseoxMockupData,
  getEpochsMockupData
} = require("@dynamic-data/garmin-mockups");

describe("Garmin", () => {
  //test.todo("needs tests");
  it("getDailiesMockupData", () => {
    const result = getDailiesMockupData(

      "DailiesData",
      "2022-04-03"
    );
    console.log("getDailiesMockupData ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });

  it.only("getSleepMockupData", () => {
    const result = getSleepsMockupData(

      "SleepsData",
      "2022-04-03"
    );
    console.log("getSleepMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(result.sleeplevelsmap);
    expect(typeof result).toBe("object");
  });

  it("getPulseoxMockupData", () => {
    const result = getPulseoxMockupData(

      "PulseoxData",
      "2022-04-03"
    );
    console.log("getPulseoxMockupData ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });

  it("getEpochsMockupData", () => {
    const result = getEpochsMockupData(

      "EpochsData",
      "2022-04-03"
    );
    console.log("getEpochsMockupData ", JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });


});
