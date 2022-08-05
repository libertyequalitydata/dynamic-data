//import MOCK from "../src";
//import { Activity } from "../src/mockups";
import MOCK from "@dynamic-data/ancestry-data";
import { RawDataObject } from "@dynamic-data/ancestry-data/mockups";


describe("Ancestry", () => {
  //test.todo("needs tests");
  it("Mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded RawDataObject datamodel from default", () => {
    console.log("RawDataObject ", JSON.stringify(RawDataObject, undefined, 2));
    expect(typeof RawDataObject).toBe("object");
  });
});

