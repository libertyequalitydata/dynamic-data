const ActivitiesData = {
  activeDuration: 1332000,
  activeZoneMinutes: {
    minutesInHeartRateZones: [{
      minuteMultiplier: 2,
      minutes: 0,
      order: 2,
      type: "CARDIO",
      zoneName: "Cardio"
    }, {
      minuteMultiplier: 1,
      minutes: 0,
      order: 1,
      type: "FAT_BURN",
      zoneName: "Fat Burn"
    }, {
      minuteMultiplier: 0,
      minutes: 0,
      order: 0,
      type: "OUT_OF_ZONE",
      zoneName: "Out of Range"
    }, {
      minuteMultiplier: 2,
      minutes: 0,
      order: 3,
      type: "PEAK",
      zoneName: "Peak"
    }],
    totalMinutes: 0
  },
  activityLevel: [{
    minutes: 0,
    name: "sedentary"
  }, {
    minutes: 6,
    name: "lightly"
  }, {
    minutes: 6,
    name: "fairly"
  }, {
    minutes: 11,
    name: "very"
  }],
  activityName: "Walk",
  activityTypeId: 90013,
  averageHeartRate: 83,
  calories: 160,
  caloriesLink: "https://api.fitbit.com/1/user/-/activities/calories/date/2021-12-29/2021-12-29/1min/time/17:11/17:34.json",
  duration: 1332000,
  elevationGain: 6.096,
  hasActiveZoneMinutes: true,
  heartRateLink: "https://api.fitbit.com/1/user/-/activities/heart/date/2021-12-29/2021-12-29/1sec/time/17:11:50/17:34:02.json",
  heartRateZones: [{
    caloriesOut: 160.4715,
    max: 96,
    min: 30,
    minutes: 22,
    name: "Out of Range"
  }, {
    caloriesOut: 0,
    max: 118,
    min: 96,
    minutes: 0,
    name: "Fat Burn"
  }, {
    caloriesOut: 0,
    max: 146,
    min: 118,
    minutes: 0,
    name: "Cardio"
  }, {
    caloriesOut: 0,
    max: 220,
    min: 146,
    minutes: 0,
    name: "Peak"
  }],
  lastModified: "2021-12-29T15:57:42.080Z",
  logId: 45050781089,
  logType: "auto_detected",
  manualValuesSpecified: {
    calories: false,
    distance: false,
    steps: false
  },
  originalDuration: 1332000,
  originalStartTime: "2021-12-29T17:11:50.000+02:00",
  startTime: "2021-12-29T17:11:50.000+02:00",
  steps: 1789,
  tcxLink: "https://api.fitbit.com/1/user/-/activities/45050781089.tcx"
};

export { ActivitiesData };
