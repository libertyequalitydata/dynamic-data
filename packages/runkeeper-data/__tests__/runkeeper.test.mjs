import MOCK from "@dynamic-data/runkeeper-data";
import { cardioActivity } from "@dynamic-data/runkeeper-data/mockups";

describe("runkeeper-data", () => {
  it("Mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded cardioActivity datamodel from default", () => {
    console.log("cardioActivity ", JSON.stringify(cardioActivity, undefined, 2));
    expect(typeof cardioActivity).toBe("object");
  });
  it('check if cardioActivity of type object', () => {
    expect(typeof cardioActivity).toBe('object');
    expect(!Array.isArray(cardioActivity)).toBeTruthy();
    expect(Object.keys(cardioActivity).length).not.toBe(0);
  });
});

