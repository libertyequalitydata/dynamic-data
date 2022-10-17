import MOCK from "@dynamic-data/veri-data";

import {
    getMealActivityMockupData
} from "../../veri-mockups/src";

describe('veri-data', () => {
  it('getMealActivityMockupData', () => {
    const result = getMealActivityMockupData(
      "SYNC",
      "MealActivity",
      "2022-04-03" //YYYY-MM-DD
    );
    console.log(result);
    expect(typeof result).toBe('object');
    expect(!Array.isArray(result)).toBeTruthy();
    expect(Object.keys(result).length).not.toBe(0);
  });
});