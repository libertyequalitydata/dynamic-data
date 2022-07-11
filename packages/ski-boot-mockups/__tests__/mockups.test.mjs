import { getRandomInt } from "@dynamic-data/utils";

import MOCK from "@dynamic-data/ski-boot-data";

import {
  getRawData,
} from "@dynamic-data/ski-boot-mockups";

describe("Ski Boot", () => {
  //test.todo("needs tests");
  it("getRawDataSync", () => {
    const result = getRawData(
      "SYNC",
      "RawDataSync",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getRawDataAsync", () => {
    const result = getRawData(
      "ASYNC",
      "RawDataAsync",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe("object");
  });

  
});
