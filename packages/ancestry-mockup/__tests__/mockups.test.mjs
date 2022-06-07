import { getRandomInt } from "@dynamic-data/utils";

import MOCK from "@dynamic-data/ancestry-data";

import {
  getRawData,
} from "@dynamic-data/ancestry-mockups";

describe("Ancestry", () => {
  //test.todo("needs tests");
  it("getRawData", () => {
    const result = getRawData (
      "SYNC",
      "RawData",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe("object");
  });

  
});