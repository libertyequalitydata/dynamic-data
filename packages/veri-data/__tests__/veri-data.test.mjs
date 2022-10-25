import MOCK from "@dynamic-data/veri-data";
import { mealActivity } from "@dynamic-data/veri-data/mockups";

describe("veri-data", () => {
  it("Mockup datamodels from default", () => {
    // console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded mealActivity datamodel from default", () => {
    // console.log("mealActivity ", JSON.stringify(mealActivity, undefined, 2));
    expect(typeof mealActivity).toBe("object");
  });
  it('check if mealActivity of type object', () => {
    expect(typeof mealActivity).toBe('object');
    expect(!Array.isArray(mealActivity)).toBeTruthy();
    expect(Object.keys(mealActivity).length).not.toBe(0);
  });
});
