//import MOCK from "../src";
//import { Activity } from "../src/mockups";
import MOCK from "@dynamic-data/whoop-data";

import { 
  Cycle,
  Recovery,
  Sleep,
  User,
  Workout
 } from "@dynamic-data/whoop-data/mockups";

 describe("Whoop", () => {
  //test.todo("needs tests");
  it("All mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    //console.log("MOCK DATA", data);

    expect(typeof MOCK).toBe("object");
  });
  it("Expanded mockup datamodels from default", () => {
    // console.log("MOCK ", JSON.stringify(MOCK, undefined, 2));

    expect(typeof MOCK).toBe("object");
  });
  it("Cycle datamodels from default", () => {
    // console.log("Cycle ", JSON.stringify(Cycle, undefined, 2));

    expect(typeof Cycle).toBe("object");
  });
  it("Recovery, datamodels from default", () => {
    // console.log("Recovery ", JSON.stringify(Recovery, undefined, 2));

    expect(typeof Recovery).toBe("object");
  });
  it("Sleep datamodels from default", () => {
    // console.log("Sleep ", JSON.stringify(Sleep, undefined, 2));

    expect(typeof Sleep).toBe("object");
  });
  it("User datamodels from default", () => {
    // console.log("User ", JSON.stringify(User, undefined, 2));

    expect(typeof User).toBe("object");
  });
  it("Workout datamodels from default", () => {
    // console.log("Workout ", JSON.stringify(Workout, undefined, 2));

    expect(typeof Workout).toBe("object");
  });
});
