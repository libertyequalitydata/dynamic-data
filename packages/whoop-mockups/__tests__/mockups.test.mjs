import { getRandomInt } from "@dynamic-data/utils";

import MOCK from "@dynamic-data/whoop-data";

import {
  getWorkoutMockupData,
  getUserMockupData,
  getSleepMockupData,
  getRecoveryMockupData,
  getCycleMockupData
  } from "@dynamic-data/whoop-mockups";

  describe("Whoop", () => {
    //test.todo("needs tests");
      it("getWorkoutMockupData", () => {
      const result = getWorkoutMockupData(
        "Workout",
        "2022-04-03"
      );
      // console.log(JSON.stringify(result, undefined, 2))
      expect(typeof result).toBe("object");
    });
    it("getUserMockupData", () => {
      const result = getUserMockupData(
        "User",
        "2022-04-03"
      );
      // console.log(JSON.stringify(result, undefined, 2))
      expect(typeof result).toBe("object");
    });
    it("getSleepMockupData", () => {
      const result = getSleepMockupData(
        "Sleep",
        "2022-04-03"
      );
      // console.log(JSON.stringify(result, undefined, 2))
      expect(typeof result).toBe("object");
    });
    it("getRecoveryMockupData", () => {
      const result = getRecoveryMockupData(
        "Recovery",
        "2022-04-03"
      );
      // console.log(JSON.stringify(result, undefined, 2))
      expect(typeof result).toBe("object");
    });
    it("getCycleMockupData", () => {
      const result = getCycleMockupData(
        "Cycle",
        "2022-04-03"
      );
      // console.log(JSON.stringify(result, undefined, 2))
      expect(typeof result).toBe("object");
    });
  });