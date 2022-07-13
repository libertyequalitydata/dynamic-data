//import MOCK from "../src";
//import { Activity } from "../src/mockups";
import MOCK from "@dynamic-data/movesense-data";


describe("Movesense", () => {
  //test.todo("needs tests");
  it("Mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded Mockup datamodel from default", () => {
    console.log("MOCK ", JSON.stringify(MOCK, undefined, 2));
    expect(typeof RawDataObject).toBe("object");
  });
});

