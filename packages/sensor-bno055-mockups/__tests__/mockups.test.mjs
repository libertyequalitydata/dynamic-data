
import {
  getRawData,
} from "@dynamic-data/sensor-bno055-mockups";

describe("Sensor BNO055", () => {
  //test.todo("needs tests");
  it("getRawDataSync", () => {
    const result = getRawData(
      "SYNC",
      "RawDataSync",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe("object");
  });
  it("getRawDataAsync", () => {
    const result = getRawData(
      "ASYNC",
      "RawDataAsync",
      "2022-04-03"
    );
    console.log(result);
    expect(typeof result).toBe("object");
  });

  
});
