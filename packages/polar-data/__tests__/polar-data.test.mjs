'use strict';

import {
    getUserInfo,
    listNotifications,
    listActivities,
    getActivitySummary,
    getStepSample,
    getZoneSample,
    listTrainingExercises,
    getExerciseSummary,
    getHeartRateZones,
    getAvailableSamples,
    getSamples,
    listPhysicalInfo,
    getPhysicalInfo,
    getWebhook,
    listExercises,
    getExercise,
    listSleep,
    getSleep,
    getAvailableSleepTimes,
    listNightlyRecharge,
    getNightlyRecharge
} from '@dynamic-data/polar-data/mockups';

describe('@dynamic-data/polar-data', () => {
  it('check if getUserInfo of type object', () => {
    expect(typeof getUserInfo).toBe('object');
    expect(!Array.isArray(getUserInfo)).toBeTruthy();
    expect(Object.keys(getUserInfo).length).not.toBe(0);
  });
  it('check if listNotifications of type object', () => {
    expect(typeof listNotifications).toBe('object');
    expect(!Array.isArray(listNotifications)).toBeTruthy();
    expect(Object.keys(listNotifications).length).not.toBe(0);
  });
  it('check if listActivities of type object', () => {
    expect(typeof listActivities).toBe('object');
    expect(!Array.isArray(listActivities)).toBeTruthy();
    expect(Object.keys(listActivities).length).not.toBe(0);
  });
  it('check if getActivitySummary of type object', () => {
    expect(typeof getActivitySummary).toBe('object');
    expect(!Array.isArray(getActivitySummary)).toBeTruthy();
    expect(Object.keys(getActivitySummary).length).not.toBe(0);
  });
  it('check if getStepSample of type object', () => {
    expect(typeof getStepSample).toBe('object');
    expect(!Array.isArray(getStepSample)).toBeTruthy();
    expect(Object.keys(getStepSample).length).not.toBe(0);
  });
  it('check if getZoneSample of type object', () => {
    expect(typeof getZoneSample).toBe('object');
    expect(!Array.isArray(getZoneSample)).toBeTruthy();
    expect(Object.keys(getZoneSample).length).not.toBe(0);
  });
  it('check if listTrainingExercises of type object', () => {
    expect(typeof listTrainingExercises).toBe('object');
    expect(!Array.isArray(listTrainingExercises)).toBeTruthy();
    expect(Object.keys(listTrainingExercises).length).not.toBe(0);
  });
  it('check if getExerciseSummary of type object', () => {
    expect(typeof getExerciseSummary).toBe('object');
    expect(!Array.isArray(getExerciseSummary)).toBeTruthy();
    expect(Object.keys(getExerciseSummary).length).not.toBe(0);
  });
  it('check if getHeartRateZones of type object', () => {
    expect(typeof getHeartRateZones).toBe('object');
    expect(!Array.isArray(getHeartRateZones)).toBeTruthy();
    expect(Object.keys(getHeartRateZones).length).not.toBe(0);
  });
  it('check if getAvailableSamples of type object', () => {
    expect(typeof getAvailableSamples).toBe('object');
    expect(!Array.isArray(getAvailableSamples)).toBeTruthy();
    expect(Object.keys(getAvailableSamples).length).not.toBe(0);
  });
  it('check if getSamples of type object', () => {
    expect(typeof getSamples).toBe('object');
    expect(!Array.isArray(getSamples)).toBeTruthy();
    expect(Object.keys(getSamples).length).not.toBe(0);
  });
  it('check if listPhysicalInfo of type object', () => {
    expect(typeof listPhysicalInfo).toBe('object');
    expect(!Array.isArray(listPhysicalInfo)).toBeTruthy();
    expect(Object.keys(listPhysicalInfo).length).not.toBe(0);
  });
  it('check if getPhysicalInfo of type object', () => {
    expect(typeof getPhysicalInfo).toBe('object');
    expect(!Array.isArray(getPhysicalInfo)).toBeTruthy();
    expect(Object.keys(getPhysicalInfo).length).not.toBe(0);
  });
  it('check if getWebhook of type object', () => {
    expect(typeof getWebhook).toBe('object');
    expect(!Array.isArray(getWebhook)).toBeTruthy();
    expect(Object.keys(getWebhook).length).not.toBe(0);
  });
  it('check if listExercises of type object', () => {
    expect(typeof listExercises).toBe('object');
    expect(!Array.isArray(listExercises)).toBeTruthy();
    expect(Object.keys(listExercises).length).not.toBe(0);
  });
  it('check if getExercise of type object', () => {
    expect(typeof getExercise).toBe('object');
    expect(!Array.isArray(getExercise)).toBeTruthy();
    expect(Object.keys(getExercise).length).not.toBe(0);
  });
  it('check if listSleep of type object', () => {
    expect(typeof listSleep).toBe('object');
    expect(!Array.isArray(listSleep)).toBeTruthy();
    expect(Object.keys(listSleep).length).not.toBe(0);
  });
  it('check if getSleep of type object', () => {
    expect(typeof getSleep).toBe('object');
    expect(!Array.isArray(getSleep)).toBeTruthy();
    expect(Object.keys(getSleep).length).not.toBe(0);
  });
  it('check if getAvailableSleepTimes of type object', () => {
    expect(typeof getAvailableSleepTimes).toBe('object');
    expect(!Array.isArray(getAvailableSleepTimes)).toBeTruthy();
    expect(Object.keys(getAvailableSleepTimes).length).not.toBe(0);
  });
  it('check if listNightlyRecharge of type object', () => {
    expect(typeof listNightlyRecharge).toBe('object');
    expect(!Array.isArray(listNightlyRecharge)).toBeTruthy();
    expect(Object.keys(listNightlyRecharge).length).not.toBe(0);
  });
  it('check if getNightlyRecharge of type object', () => {
    expect(typeof getNightlyRecharge).toBe('object');
    expect(!Array.isArray(getNightlyRecharge)).toBeTruthy();
    expect(Object.keys(getNightlyRecharge).length).not.toBe(0);
  });
});