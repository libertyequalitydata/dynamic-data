//import MOCK from "../src";
//import { Activity } from "../src/mockups";
import MOCK from "@dynamic-data/whoop-data";

describe("Whoop", () => {
  //test.todo("needs tests");
  it("All mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    //console.log("MOCK DATA", data);

    expect(typeof data).toBe("object");
  });
  it("Expanded mockup datamodels from default", () => {
    console.log("MOCK ", JSON.stringify(MOCK, undefined, 2));

    expect(typeof data).toBe("object");
  });
});
