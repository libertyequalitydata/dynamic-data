import  {
  getDailiesMockupData,  
  getSleepMockupData,
  getPulseoxMockupData,
  getEpochsMockupData
}  from "@dynamic-data/garmin-mockups";

describe("Garmin", () => {
  //test.todo("needs tests");
  it("getDailiesMockupData", () => {
    const result = getDailiesMockupData(
      "ASYNC",
      "DailiesDataAsync",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });

  it("getSleepMockupData", () => {
    const result = getSleepMockupData(
      "ASYNC",
      "SleepsDataAsync",
      "2022-04-03"
    );
    // console.log(result);
    // console.log(result.sleeplevelsmap);
    expect(typeof result).toBe("object");
  });

  it("getPulseoxMockupData", () => {
    const result = getPulseoxMockupData(
      "ASYNC",
      "PulseoxAsync",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });

  it("getEpochsMockupData", () => {
    const result = getEpochsMockupData(
      "ASYNC",
      "EpochsDataAsync",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });

  it("getSleepMockupData", () => {
    const result = getSleepMockupData(
      "SYNC",
      "SleepsDataObject",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });

  it("getPulseoxMockupData", () => {
    const result = getPulseoxMockupData(
      "SYNC",
      "PulseoxObject",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });

  it("getEpochsMockupData", () => {
    const result = getEpochsMockupData(
      "SYNC",
      "EpochsDataObject",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });

  it("getDailiesMockupData", () => {
    const result = getDailiesMockupData(
      "SYNC",
      "DailiesDataObject",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });

});
