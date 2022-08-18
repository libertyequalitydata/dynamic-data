//import MOCK from "../src";
//import { Activity } from "../src/mockups";
import MOCK from "@dynamic-data/google-data";
import { Activity, 
  ActivityObject,
  Location,
  LocationObject,
  Places,
  Routes } from "@dynamic-data/google-data/mockups";

  describe("Google", () => {
    //test.todo("needs tests");
    it("Mockup datamodels from default", () => {
      // console.log("MOCK ", MOCK);
      expect(typeof MOCK).toBe("object");
    });
    it("Expanded Mockup datamodels from default", () => {
      // console.log("MOCK ", JSON.stringify(MOCK, undefined, 2));
      expect(typeof MOCK).toBe("object");
    });
    it("Expanded Activity datamodel from default", () => {
      // console.log("Activity ", JSON.stringify(Activity, undefined, 2));
      expect(typeof Activity).toBe("object");
    });
    it("Expanded ActivityObject datamodel from default", () => {
      // console.log("ActivityObject ", JSON.stringify(ActivityObject, undefined, 2));
      expect(typeof ActivityObject).toBe("object");
    });
    it("Expanded Location datamodel from default", () => {
      // console.log("Location ", JSON.stringify(Location, undefined, 2));
      expect(typeof Location).toBe("object");
    });
    it("Expanded LocationObject datamodel from default", () => {
      // console.log("LocationObject ", JSON.stringify(LocationObject, undefined, 2));
      expect(typeof LocationObject).toBe("object");
    });
    it("Expanded Places datamodel from default", () => {
      // console.log("Places ", JSON.stringify(Places, undefined, 2));
      expect(typeof Places).toBe("object");
    });
    it("Expanded Routes datamodel from default", () => {
      // console.log("Routes ", JSON.stringify(Routes, undefined, 2));
      expect(typeof Routes).toBe("object");
    });
   
  });
  
  