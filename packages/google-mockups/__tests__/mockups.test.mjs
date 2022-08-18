
import {
  getActivityMockupData,
  getLocationMockupData,
  getPlacesMockupData,
  getRoutesMockupData
} from "@dynamic-data/google-mockups";


describe("Google", () => {
  test.todo("needs tests");
  it("getActivityMockupData", () => {
    const result = getActivityMockupData(
      "SYNC",
      "ActivityObject",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getActivityMockupData", () => {
    const result = getActivityMockupData(
      "ASYNC",
      "Activity",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getLocationMockupData", () => {
    const result = getLocationMockupData(
      "ASYNC",
      "Location",
      "2022-04-03"
    );
    // console.log("a",result);
    expect(typeof result).toBe("object");
  });
  it("getPlacesMockupData", () => {
    const result = getPlacesMockupData(
      "SYNC",
      "Places",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getRoutesMockupData", () => {
    const result = getRoutesMockupData(
      "SYNC",
      "Routes",
      "2022-04-03"
    );
    // console.log(result);
    expect(typeof result).toBe("object");
  });


});
