//import MOCK from "../src";
//import { Activity } from "../src/mockups";
import MOCK from "@dynamic-data/sensor-bno055-data";
import { RawAsync, RawSync } from "@dynamic-data/sensor-bno055-data/mockups";


describe("Sensor BNO055", () => {
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
