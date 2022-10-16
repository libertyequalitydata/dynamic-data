'use strict';

import {
  getActivitySummaryMockupData,
  getAvailableSamplesMockupData,
  getAvailableSleepTimesMockupData,
  getExerciseMockupData,
  getExerciseSummaryMockupData,
  getHeartRateZonesMockupData,
  getNightlyRechargeMockupData,
  getPhysicalInfoMockupData,
  getSamplesMockupData,
  getSleepMockupData,
  getStepSampleMockupData,
  getUserInfoMockupData,
  getWebhookMockupData,
  getZoneSampleMockupData,
  getActivitiesListMockupData,
  getNotificationsListMockupData,
  getPhysicalInfoListMockupData,
  getTrainingExerciseListMockupData
} from '@dynamic-data/polar-mockups';

describe('@dynamic-data/polar-mockups', () => {
  it("getActivitySummaryMockupData", () => {
    const result = getActivitySummaryMockupData (
      "SYNC",
      "ActivitySummary",
      "2022-04-03"
    );
    // console.log("getActivitySummaryMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getAvailableSamplesMockupData", () => {
    const result = getAvailableSamplesMockupData (
      "SYNC",
      "AvailableSamples",
      "2022-04-03"
    );
    // console.log("getAvailableSamplesMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getAvailableSleepTimesMockupData", () => {
    const result = getAvailableSleepTimesMockupData (
      "SYNC",
      "AvailableSleepTimes",
      "2022-04-03"
    );
    // console.log("getAvailableSleepTimesMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getAvailableSleepTimesMockupData", () => {
    const result = getAvailableSleepTimesMockupData (
      "SYNC",
      "AvailableSleepTimes",
      "2022-04-03"
    );
    // console.log("getAvailableSleepTimesMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getExerciseMockupData", () => {
    const result = getExerciseMockupData (
      "SYNC",
      "getExercise",
      "2022-04-03"
    );
    // console.log("getExerciseMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getExerciseSummaryMockupData", () => {
    const result = getExerciseSummaryMockupData (
      "SYNC",
      "getExerciseSummary",
      "2022-04-03"
    );
    // console.log("getExerciseSummaryMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getHeartRateZonesMockupData", () => {
    const result = getHeartRateZonesMockupData (
      "SYNC",
      "HeartRateZones",
      "2022-04-03"
    );
    // console.log("getHeartRateZonesMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getNightlyRechargeMockupData", () => {
    const result = getNightlyRechargeMockupData (
      "SYNC",
      "NightlyRecharge",
      "2022-04-03"
    );
    // console.log("getNightlyRechargeMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getPhysicalInfoMockupData", () => {
    const result = getPhysicalInfoMockupData (
      "SYNC",
      "PhysicalInfo",
      "2022-04-03"
    );
    // console.log("getPhysicalInfoMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getSamplesMockupData", () => {
    const result = getSamplesMockupData (
      "SYNC",
      "Samples",
      "2022-04-03"
    );
    // console.log("getSamplesMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getSleepMockupData", () => {
    const result = getSleepMockupData (
      "SYNC",
      "Sleep",
      "2022-04-03"
    );
    // console.log("getSleepMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getStepSampleMockupData", () => {
    const result = getStepSampleMockupData (
      "SYNC",
      "StepSample",
      "2022-04-03"
    );
    // console.log("getStepSampleMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getUserInfoMockupData", () => {
    const result = getUserInfoMockupData (
      "SYNC",
      "UserInfo",
      "2022-04-03"
    );
    // console.log("getUserInfoMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getWebhookMockupData", () => {
    const result = getWebhookMockupData (
      "SYNC",
      "Webhook",
      "2022-04-03"
    );
    // console.log("getWebhookMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getZoneSampleMockupData", () => {
    const result = getZoneSampleMockupData (
      "SYNC",
      "ZoneSample",
      "2022-04-03"
    );
    // console.log("getZoneSampleMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getActivitiesListMockupData", () => {
    const result = getActivitiesListMockupData (
      "SYNC",
      "ActivitiesList",
      "2022-04-03"
    );
    // console.log("getActivitiesListMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getExerciseMockupData", () => {
    const result = getExerciseMockupData (
      "SYNC",
      "ExerciseList",
      "2022-04-03"
    );
    // console.log("getExerciseMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getNightlyRechargeMockupData", () => {
    const result = getNightlyRechargeMockupData (
      "SYNC",
      "NightlyRechargeList",
      "2022-04-03"
    );
    // console.log("getNightlyRechargeMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getNotificationsListMockupData", () => {
    const result = getNotificationsListMockupData (
      "SYNC",
      "NotificationsList",
      "2022-04-03"
    );
    // console.log("getNotificationsListMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getPhysicalInfoListMockupData", () => {
    const result = getPhysicalInfoListMockupData (
      "SYNC",
      "PhysicalInfoList",
      "2022-04-03"
    );
    // console.log("getPhysicalInfoListMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getSleepMockupData", () => {
    const result = getSleepMockupData (
      "SYNC",
      "SleepList",
      "2022-04-03"
    );
    // console.log("getSleepMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
  it("getTrainingExerciseListMockupData", () => {
    const result = getTrainingExerciseListMockupData (
      "SYNC",
      "TrainingExerciseList",
      "2022-04-03"
    );
    // console.log("getTrainingExerciseListMockupData ", JSON.stringify(result, undefined, 2));
    // console.log(MOCK)
    // const result = {}
    expect(typeof result).toBe("object");
  });
});