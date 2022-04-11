//import MOCK from "../src";
//import { Activity } from "../src/mockups";
import MOCK from "@dynamic-data/google-data";
import { Activity } from "@dynamic-data/google-data/mockups";

describe("google", () => {
  //test.todo("needs tests");

  it("Activity mockup datamodel from default", () => {
    const data = MOCK.Activity;
    //console.log("MOCK ", MOCK);
    //console.log("MOCK DATA", data);

    expect(typeof data).toBe("object");
  });

  it("Activity mockup datamodel only", () => {
    const data = Activity;
    //console.log("MOCK DATA", data);

    expect(typeof data).toBe("object");
  });
});
