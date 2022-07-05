import { getRandomInt } from "@dynamic-data/utils";

import MOCK from "@dynamic-data/23andme-data";

import {
  getRawData,
} from "@dynamic-data/23andme-mockups";

describe("23andme", () => {
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