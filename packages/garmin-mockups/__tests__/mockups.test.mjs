import {
  getDailiesMockupData,
  getSleepMockupData,
  getPulseoxMockupData,
  getEpochsMockupData
} from "@dynamic-data/garmin-mockups";

describe("Garmin", () => {
  //test.todo("needs tests");

  it("getSleepMockupData", () => {
    const result = getSleepMockupData(
      "SleepsData",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });

  it("getPulseoxMockupData", () => {
    const result = getPulseoxMockupData(
      "PulseoxData",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });

  it("getEpochsMockupData", () => {
    const result = getEpochsMockupData(
      "EpochsData",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });

  it("getDailiesMockupData", () => {
    const result = getDailiesMockupData(
      "DailiesData",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });

});
