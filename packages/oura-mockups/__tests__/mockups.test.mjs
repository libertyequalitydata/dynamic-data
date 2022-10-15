import { getRandomInt } from "@dynamic-data/utils";

import MOCK from "@dynamic-data/oura-data";

import {
  getModelCSVHeader,
  getActivityMockupData,
  getReadinessMockupData,
  getSleepMockupData,
} from "@dynamic-data/oura-mockups";

describe("Oura", () => {
  //test.todo("needs tests");
  it("ActivitySummary mockup datamodel from default", () => {
    const data = MOCK.ActivitySummary;
    //console.log("MOCK ", MOCK);
    //console.log("MOCK DATA", data);

    expect(typeof data).toBe("object");
  });

  it("RandomInt", () => {
    const result = getRandomInt(1, 10);
    //console.log(typeof result);
    expect(typeof result).toEqual("number");
  });

  it("getModelCSVHeader", () => {
    const result = getModelCSVHeader("ActivitySummaryAsync");
    //console.log(result);
    expect(Array.isArray(result)).toBe(true);
  });
  it("getActivityMockupData", () => {
    const result = getActivityMockupData(

      "ActivitySummary",
      "2022-04-03T04:00:00+03:00"
    );
    //console.log(result);
    expect(typeof result).toBe("object");
  });

  it("getReadinessMockupData", () => {
    const result = getReadinessMockupData(

      "ReadinessSummary",
      "2022-04-03T04:00:00+03:00"
    );
    //console.log(result);
    expect(typeof result).toBe("object");
  });

  it("getSleepMockupData", () => {
    const result = getSleepMockupData(

      "SleepSummary",
      "2022-04-03T04:00:00+03:00"
    );
    //console.log(result);
    expect(typeof result).toBe("object");
  });
});
