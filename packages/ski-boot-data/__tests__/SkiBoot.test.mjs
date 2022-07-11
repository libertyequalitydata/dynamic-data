//import MOCK from "../src";
//import { Activity } from "../src/mockups";
import MOCK from "@dynamic-data/ski-boot-data";
import { RawAsync, RawSync } from "@dynamic-data/ski-boot-data";


describe("Ski Boot", () => {
  //test.todo("needs tests");
  it("Mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded RawSync datamodel from default", () => {
    console.log("MOCK ", JSON.stringify(RawSync, undefined, 2));
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded RawAsync datamodel from default", () => {
    console.log("MOCK ", JSON.stringify(RawAsync, undefined, 2));
    expect(typeof MOCK).toBe("object");
  });
});
