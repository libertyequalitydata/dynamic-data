//import MOCK from "../src";
//import { Activity } from "../src/mockups";
import MOCK from "@dynamic-data/whoop-data";

import { 
  ActivityType,
  AggregateData,
  Event,
  Membership,
  Metric,
  Report,
  SleepDetails,
  SurveryResponse,
  User,
  VoiceOfWhoop,
  VoiceOfWhoopCycle,
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
  it("ActivityType datamodels from default", () => {
    // console.log("ActivityType ", JSON.stringify(ActivityType, undefined, 2));

    expect(typeof ActivityType).toBe("object");
  });
  it("AggregateData, datamodels from default", () => {
    // console.log("AggregateData ", JSON.stringify(AggregateData, undefined, 2));

    expect(typeof AggregateData).toBe("object");
  });
  it("Event datamodels from default", () => {
    // console.log("Event ", JSON.stringify(Event, undefined, 2));

    expect(typeof Event).toBe("object");
  });
  it("Membership datamodels from default", () => {
    // console.log("Membership ", JSON.stringify(Membership, undefined, 2));

    expect(typeof Membership).toBe("object");
  });
  it("Metric datamodels from default", () => {
    // console.log("Metric ", JSON.stringify(Metric, undefined, 2));

    expect(typeof Metric).toBe("object");
  });
  it("Report datamodels from default", () => {
    // console.log("Report ", JSON.stringify(Report, undefined, 2));

    expect(typeof Report).toBe("object");
  });
  it("SleepDetails datamodels from default", () => {
    // console.log("SleepDetails ", JSON.stringify(SleepDetails, undefined, 2));

    expect(typeof SleepDetails).toBe("object");
  });
  it("SurveryResponse datamodels from default", () => {
    // console.log("SurveryResponse ", JSON.stringify(SurveryResponse, undefined, 2));

    expect(typeof SurveryResponse).toBe("object");
  });
  it("User datamodels from default", () => {
    // console.log("User ", JSON.stringify(User, undefined, 2));

    expect(typeof User).toBe("object");
  });
  it("VoiceOfWhoop datamodels from default", () => {
    // console.log("VoiceOfWhoop ", JSON.stringify(VoiceOfWhoop, undefined, 2));

    expect(typeof VoiceOfWhoop).toBe("object");
  });
  it("VoiceOfWhoopCycle datamodels from default", () => {
    // console.log("VoiceOfWhoopCycle ", JSON.stringify(VoiceOfWhoopCycle, undefined, 2));

    expect(typeof VoiceOfWhoopCycle).toBe("object");
  });
  it("Workout datamodels from default", () => {
    // console.log("Workout ", JSON.stringify(Workout, undefined, 2));

    expect(typeof Workout).toBe("object");
  });
});