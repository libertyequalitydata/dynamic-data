import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/fitbit-data";

//https://dev.fitbit.com/build/reference/web-api/activity/get-activity-log-list/
const ActivitiesDataModel = {
  activeDuration: () => {
    return getRandomInt(30000, 3600000);
    // return 0;
  },
  //https://math.stackexchange.com/questions/1276206/method-of-generating-random-numbers-that-sum-to-100-is-this-truly-random
  activityLevel: (max) => {
    let n1 = null;
    let n2 = null;
    let n3 = null;
    n1 = getRandomInt(1, 103);
    while (n2 === null || n2 === n1) {
      n2 = getRandomInt(1, 103);
    }
    while (n3 === null || n3 === n1 || n3 === n2) {
      n3 = getRandomInt(1, 103);
    }
    let ordered = [Math.max(n1, n2, n3), Math.min(n1, n2, n3)]
    if (!ordered.includes(n1)) {
      ordered.push(n1);
    } else if (!ordered.includes(n2)) {
      ordered.push(n2);
    } else {
      ordered.push(n3);
    }
    let a = (ordered[1] - 1) / 100;
    let b = (ordered[2] - ordered[1] - 1) / 100;
    let c = (ordered[0] - ordered[2] - 1) / 100;
    let d = (103 - ordered[0]) / 100;
    return [
      {
        minutes: Math.round((a * max) / 60000),
        name: "sedentary",
      },
      {
        minutes: Math.round((b * max) / 60000),
        name: "lightly",
      },
      {
        minutes: Math.round((c * max) / 60000),
        name: "fairly",
      },
      {
        minutes: Math.round((d * max) / 60000),
        name: "very",
      },
    ];
  },
  activityName: () => {
    const example = ["Walk", "Run", "Swimming", "Cycling"]
    return example[getRandomInt(0, example.length) - 1];
  },
  activityTypeId: () => {
    return getRandomInt(8000, 9999)
  },
  averageHeartRate: () => {
    function randomG(v) {
      var r = 0;
      for (var i = v; i > 0; i--) {
        r += getRandomInt(80, 180);
      }
      return r / v;
    }
    return Math.round(randomG(6));
  },
  calories: () => {
    return getRandomInt(0, 2000)
  },
  caloriesLink: (time, duration) => {
    let date = time.split("T")[0]
    // let timeEdit = time.split("T")[1].split(":")[0] + ":" + time.split("T")[1].split(":")[1]
    let timeEdit = new Date(0);
    timeEdit.setHours(time.split("T")[1].split(":")[0])
    timeEdit.setMinutes(time.split("T")[1].split(":")[1])
    timeEdit.setSeconds(parseInt(time.split("T")[1].split(":")[2].split(".")[0]) + (duration / 1000))

    return "https://api.fitbit.com/1/user/-/activities/calories/date/" + date + "/" + date + "/1min/time/" + time.split("T")[1].split(":")[0] + ":" + time.split("T")[1].split(":")[1] + "/" + timeEdit.getHours() + ":" + timeEdit.getMinutes() + ".json"
  },
  heartRateLink: (time, duration) => {
    let date = time.split("T")[0]
    // let timeEdit = time.split("T")[1].split(":")[0] + ":" + time.split("T")[1].split(":")[1]
    let timeEdit = new Date(0);
    timeEdit.setHours(time.split("T")[1].split(":")[0])
    timeEdit.setMinutes(time.split("T")[1].split(":")[1])
    timeEdit.setSeconds(parseInt(time.split("T")[1].split(":")[2].split(".")[0]) + (duration / 1000))

    return "https://api.fitbit.com/1/user/-/activities/heart/date/" + date + "/" + date + "/1sec/time/" + time.split("T")[1].split(":")[0] + ":" + time.split("T")[1].split(":")[1] + ":" + time.split("T")[1].split(":")[2].split(".")[0] + "/" + timeEdit.getHours() + ":" + timeEdit.getMinutes() + ":" + timeEdit.getSeconds() + ".json"
  },

  activeZoneMinutes: (hasActiveZoneMinutes) => {
    if (hasActiveZoneMinutes) {
      let cardio = getRandomInt(0, 20)
      let fatBurn = getRandomInt(0, 20)
      let outOfZone = getRandomInt(0, 20)
      let peak = getRandomInt(0, 20)
      return {
        minutesInHeartRateZones: [
          {
            minuteMultiplier: 2,
            minutes: cardio,
            order: 2,
            type: 'CARDIO',
            zoneName: 'Cardio'
          },
          {
            minuteMultiplier: 1,
            minutes: fatBurn,
            order: 1,
            type: 'FAT_BURN',
            zoneName: 'Fat Burn'
          },
          {
            minuteMultiplier: 0,
            minutes: outOfZone,
            order: 0,
            type: 'OUT_OF_ZONE',
            zoneName: 'Out of Range'
          },
          {
            minuteMultiplier: 2,
            minutes: peak,
            order: 3,
            type: 'PEAK',
            zoneName: 'Peak'
          }

        ],
        totalMinutes: peak + outOfZone + fatBurn + cardio
      }
    } else {
      return {}
    }
  },

  hasActiveZoneMinutes: () => {
    let x = getRandomInt(1, 2);
    switch (x) {
      case 1:
        return true;
      case 2:
        return false;
    }
  },

  duration: (activeDuration) => {
    return activeDuration + getRandomInt(0, 3600000);
    // return 0;
  },
  elevationGain: (type) => {
    if (["Swimming"].includes(type)) {
      return 0.0000;
    } else {
      return (getRandomInt(0, 100000) / 1000);
    }

    // return 0;
  },
  originalStartTime: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999))
    const timezones = ["-12:00", "-11:00", "-10:00", "-9:30", "-9:00", "-08:00", "-07:00", "-06:00", "-05:00", "-04:00", "-03:30", "-03:00", "-02:00", "-01:00", "+00:00", "+01:00", "+02:00", "+03:00", "+03:30", "+04:00", "+04:30", "+05:00", "+05:30", "+05:45", "+06:00", "+06:30", "+07:00", "+08:00", "+08:45", "+09:00", "+09:30", "+10:00", "+10:30", "+11:00", "+12:00", "+12:45", "+13:00", "+14:00"]
    let finalDateStr = finalDate.toISOString();
    return finalDateStr.split("Z")[0] + timezones[getRandomInt(0, timezones.length) - 1];
    // return 0;
  },
  lastModified: (originalStartTime) => {
    let x;
    let timezone;
    // return x.toIsoString();
    if (originalStartTime.includes("+")) {
      x = originalStartTime.split("+")[0];
      timezone = "+" + originalStartTime.split("+")[1];
    } else {
      x = originalStartTime.split("-")[0];
      timezone = "-" + originalStartTime.split("-")[3];
    }
    let date = new Date(x);
    //7 days
    date.setTime(date.getTime() + getRandomInt(1, 604800000))
    return date.toISOString();

  },
  logType: () => {
    const values = ["auto_detected", "manual", "tracker", "mobile_run"]
    return values[getRandomInt(0, values.length) - 1]
  },

  steps: (type, duration) => {
    // const example = ["Walk", "Run", "Swimming", "Cycling"]
    //https://www.verywellfit.com/pedometer-step-equivalents-for-exercises-and-activities-3435742
    switch (type) {
      case "Walk":
        // 2200 every 20 minutes
        return Math.floor((2200) * (duration / 1200000))
      case "Run":
        // 1600 every 10 minutes
        return Math.floor((1600) * (duration / 600000))
      case "Swimming":
        // 138 every minute
        return Math.floor((138) * (duration / 60000))
      case "Cycling":
        // 147 every minute
        return Math.floor((147) * (duration / 60000))
      default:
        return getRandomInt(0, 9999)
    }
  },

  tcxLink: (logID) => {
    return "https://api.fitbit.com/1/user/-/activities/" + logID + ".tcx"
  },

  logType: () => {
    let values = ["mobile_run", "example_2", "example_3"]
    return values[getRandomInt(0, values.length) - 1]
  },
  logId: () => {
    return getRandomInt(10000000000, 99999999999)
  },

  manualValuesSpecified: () => {
    function trueOrFalse() {
      let x = getRandomInt(0, 1);
      switch (x) {
        case 0:
          return true;
        case 1:
          return false;
      }
    }
    return {
      calories: trueOrFalse(),
      distance: trueOrFalse(),
      steps: trueOrFalse()
    }
  },




}

//https://dev.fitbit.com/build/reference/web-api/activity/get-daily-activity-summary/
const ActivitiesSummaryModel = {
  //Inspiration for data ranges:
  //https://community.fitbit.com/t5/Web-API-Development/Cannot-get-activities-from-Get-Daily-Activity-Summary/m-p/1548614#M6260
  activeScore: () => {
    return getRandomInt(-1, 10)
  },
  activityCalories: () => {
    return getRandomInt(1000, 2000)
  },
  caloriesBMR: () => {
    let sex = getRandomInt(0, 1);

    switch (sex) {
      case 0: //Male
        return getRandomInt(1200, 2440);
      case 1: //Female
        return getRandomInt(1120, 1685);
    }
  },
  caloriesOut: (heartRates) => {
    let calories = 0;
    heartRates.forEach(heartRate => {
      calories += heartRate.caloriesOut
    })
    return Math.round(calories + getRandomInt(0, 100));
  },
  distances: () => {
    return [
      {
        activity: "total",
        distance: getRandomInt(0, 1000) / 100,
      },
      {
        activity: "tracker",
        distance: getRandomInt(0, 1000) / 100,
      },
      {
        activity: "loggedActivities",
        distance: getRandomInt(0, 1000) / 100,
      },
      {
        activity: "veryActive",
        distance: getRandomInt(0, 1000) / 100,
      },
      {
        activity: "moderatelyActive",
        distance: getRandomInt(0, 1000) / 100,
      },
      {
        activity: "lightlyActive",
        distance: getRandomInt(0, 1000) / 100,
      },
      {
        activity: "sedentaryActive",
        distance: getRandomInt(0, 1000) / 100,
      },
    ]
  },
  elevation: () => {
    return getRandomInt(0, 1000) / 100;
  },
  fairlyActiveMinutes: () => {
    return getRandomInt(0, 1000);
  },
  floors: () => {
    return getRandomInt(0, 20);
  },
  heartRateZones: () => {
    let heartRate1 = getRandomInt(85, 100);
    let heartRate2 = getRandomInt(115, 125);
    let heartRate3 = getRandomInt(145, 155);
    let heartRate4 = getRandomInt(215, 225);
    let minutes1 = getRandomInt(800, 1000)
    let minutes2 = getRandomInt(400, 799)
    let minutes3 = getRandomInt(0, 399)
    let minutes4;
    if (minutes3 > 1) {
      minutes4 = getRandomInt(0, minutes3 - 1)
    } else {
      minutes4 = 0
    }

    return [
      {
        caloriesOut: minutes1 * (1200.33336 / 812),
        max: heartRate1,
        min: 30,
        minutes: minutes1,
        name: "Out of Range",
      },
      {
        caloriesOut: minutes2 * (1409.4564 / 619),
        max: heartRate2,
        min: heartRate1,
        minutes: minutes2,
        name: "Fat Burn",
      },
      {
        caloriesOut: minutes3 * (6.98904),
        max: heartRate3,
        min: heartRate2,
        minutes: minutes3,
        name: "Cardio",
      },
      {
        caloriesOut: minutes3 * (10),
        max: heartRate4,
        min: heartRate3,
        minutes: minutes4,
        name: "Peak",
      },
    ]
  },
  lightlyActiveMinutes: () => {
    return getRandomInt(0, 250);
  },
  marginalCalories: () => {
    return getRandomInt(0, 2000);
  },
  restingHeartRate: () => {
    function randomG(v) {
      var r = 0;
      for (var i = v; i > 0; i--) {
        //https://i1.wp.com/agelessinvesting.com/wp-content/uploads/2018/10/What-is-a-good-resting-heart-rate-for-my-age.-resting-heart-rate-chart-by-age-min.png?fit=800%2C800&ssl=1
        r += getRandomInt(49, 85);
      }
      return r / v;
    }
    return Math.floor(randomG(6));
  },
  sedentaryMinutes: () => {
    return getRandomInt(0, 1000);
  },
  steps: () => {
    return getRandomInt(100, 30000);

  },
  veryActiveMinutes: () => {
    return getRandomInt(0, 200);
  },



}

const SleepSummaryModel = {
  deep: (sleepTime, lightTime, remTime) => {
    //Prevents issue where there is a difference of 1 from sleepTime and summation of minutes in each sleep type (deep, light, rem) when rounding
    var avg;
    var deepTime = sleepTime - lightTime - remTime;
    if (deepTime >= 10) {
      avg = deepTime + getRandomInt(-10, 10)
    } else {
      avg = deepTime + getRandomInt(-deepTime, 10)
    }
    return {
      count: getRandomInt(1, 20),
      minutes: deepTime,
      thirtyDayAvgMinutes: avg,
    }
  },
  light: (timeSlept, percentage) => {
    var avg;
    var lightTime = Math.round(timeSlept * percentage);
    if (lightTime >= 10) {
      avg = lightTime + getRandomInt(-10, 10)
    } else {
      avg = lightTime + getRandomInt(-lightTime, 10)
    }
    return {
      count: getRandomInt(1, 20),
      minutes: lightTime,
      thirtyDayAvgMinutes: avg,
    }

  },
  rem: (timeSlept, percentage) => {
    var avg;
    var remTime = Math.round(timeSlept * percentage);
    if (remTime >= 10) {
      avg = remTime + getRandomInt(-10, 10)
    } else {
      avg = remTime + getRandomInt(-remTime, 10)
    }
    return {
      count: getRandomInt(1, 20),
      minutes: remTime,
      thirtyDayAvgMinutes: avg,
    }

  },
  wake: (minutesAwake) => {
    var avg;
    if (minutesAwake >= 10) {
      avg = minutesAwake + getRandomInt(-10, 10)
    } else {
      avg = minutesAwake + getRandomInt(-minutesAwake, 10)
    }
    return {
      count: getRandomInt(1, 20),
      minutes: minutesAwake,
      thirtyDayAvgMinutes: avg,
    }

  },
  startTimeTS: (ddate) => {
    let finalDate = new Date(ddate);
    /*
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    */

    if (getRandomInt(1, 2) === 1) {
      finalDate.setHours(getRandomInt(20, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999))
    } else {
      finalDate.setHours(getRandomInt(0, 2), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999))
    }
    return finalDate.getTime();

  },
  endTimeTS: (timestamp, timeInBed) => {
    let x = new Date(timestamp)
    x.setMinutes(x.getMinutes() + timeInBed);


    return x.getTime();

  },
  startTime: (timestamp) => {
    let x = new Date(timestamp)
    return x.toISOString();
  },
  endTime: (timestamp) => {
    let x = new Date(timestamp)
    return x.toISOString();
  },
  minutesAfterWakeup: () => {
    return getRandomInt(0, 30);
  },
  minutesAsleep: () => {
    return getRandomInt(240, 600);

  },
  minutesAwake: () => {
    return getRandomInt(1, 100);

  },
  minutesToFallAsleep: () => {
    return getRandomInt(0, 30);
  },

}

const HeartRateSummaryModel = {
  out_of_zone: () => {
    const calPerMin = 1960 / 1420;
    const minutes = getRandomInt(0, 2000);

    return {
      cals: Math.round(calPerMin * minutes),
      mins: minutes,
    }
  },
  fat_burn: () => {
    const calPerMin = 156 / 20;
    const minutes = getRandomInt(0, 2000);

    return {
      cals: Math.round(calPerMin * minutes),
      mins: minutes,
    }
  },
  cardio: () => {
    const calPerMin = 10;
    const minutes = getRandomInt(0, 2000);

    return {
      cals: Math.round(calPerMin * minutes),
      mins: minutes,
    }
  },
  peak: () => {
    const calPerMin = 15;
    const minutes = getRandomInt(0, 2000);

    return {
      cals: Math.round(calPerMin * minutes),
      mins: minutes,
    }
  }
}

const SleepQualityModel = {
  p_timestamp: (date) => {
    let x = new Date(date)
    return x.getTime();
  },
  p_datetime: () => {

    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999))
    return finalDate.toISOString();
  },
  p_value: () => {
    return getRandomInt(0, 100)
  },
  p_level: () => {
    let values = ['wake', 'light', 'rem', 'deep']
    return values[getRandomInt(0, values.length) - 1]
  }
}

const SleepDataModel = {
  p_timestamp: (date) => {
    let x = new Date(date)
    return x.getTime();
  },
  p_datetime: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999))
    return finalDate.toISOString();
  },
  p_level: () => {
    let values = ['wake', 'example2', 'example3']
    return values[getRandomInt(0, values.length) - 1]
  },
  p_seconds: () => {
    return getRandomInt(0, 600)
  },
}

const HeartRateDataModel = {
  p_date: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    return finalDate.getFullYear() + "-" + finalDate.getMonth() + "-" + finalDate.getDate();


  },
  p_time: () => {
    let hour = getRandomInt(0, 23)
    let minute = getRandomInt(0, 59)
    let second = getRandomInt(0, 59)
    let string = ""
    if (hour < 10) {
      string += "0"
    }
    string += hour + ":"
    if (minute < 10) {
      string += "0"
    }
    string += minute + ":"
    if (second < 10) {
      string += "0"
    }
    string += second
    return string

  },
  p_value: () => {
    return getRandomInt(30, 80)
  },
}

const dataModels = {
  ActivitiesData: {
    data: MOCK.ActivitiesData,
    mockup: ActivitiesDataModel
  },
  ActivitiesDataAsync: {
    data: MOCK.ActivitiesDataAsync,
    mockup: ActivitiesDataModel
  },
  ActivitiesSummary: {
    data: MOCK.ActivitiesSummary,
    mockup: ActivitiesSummaryModel
  },
  ActivitiesSummaryAsync: {
    data: MOCK.ActivitiesSummaryAsync,
    mockup: ActivitiesSummaryModel
  },
  HeartRateData: {
    data: MOCK.HeartRateData,
    mockup: HeartRateDataModel
  },
  HeartRateDataAsync: {
    data: MOCK.HeartRateDataAsync,
    mockup: HeartRateDataModel
  },
  HeartRateSummary: {
    data: MOCK.HeartRateSummary,
    mockup: HeartRateSummaryModel
  },

  HeartRateSummaryAsync: {
    data: MOCK.HeartRateSummaryAsync,
    mockup: HeartRateSummaryModel
  },

  SleepData: {
    data: MOCK.SleepData,
    mockup: SleepDataModel
  },
  SleepDataAsync: {
    data: MOCK.SleepDataAsync,
    mockup: SleepDataModel
  },
  SleepSummary: {
    data: MOCK.SleepSummary,
    mockup: SleepSummaryModel
  },
  SleepSummaryAsync: {
    data: MOCK.SleepSummary,
    mockup: SleepSummaryModel
  },
  SleepQuality: {
    data: MOCK.SleepQuality,
    mockup: SleepQualityModel
  },
  SleepQualityAsync: {
    data: MOCK.SleepQualityAsync,
    mockup: SleepQualityModel
  },
};



export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getActivitiesMockupData(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;

  [
    "hasActiveZoneMinutes",
    "activeDuration",
    "activityLevel",
    "activityName",
    "averageHeartRate",
    "elevationGain",
    "duration",
    "originalDuration",
    "originalStartTime",
    "startTime",
    "lastModified",
    "logType",
    "steps",
    "caloriesLink",
    "heartRateLink",
    "calories",
    "activeZoneMinutes",
    "manualValuesSpecified",
    "logType",
    "logId",
    "tcxLink"
  ].forEach((key, i) => {
    switch (key) {
      case "activityLevel":
      case "duration":
        mockupData[key] = mockupModel[key](mockupData["activeDuration"]);
        break;
      case "elevationGain":
        mockupData[key] = mockupModel[key](mockupData["activityName"]);
        break;
      case "originalDuration":
        mockupData[key] = mockupData["duration"];
        break;

      case "originalStartTime":
        const randomDateTime = mockupModel[key]();
        const timePart = randomDateTime.split("T")[1];
        mockupData[key] = dataDate + "T" + timePart;
        break;
      case "startTime":
        mockupData[key] = mockupData["originalStartTime"];
        break;
      case "lastModified":
        mockupData[key] = mockupModel[key](mockupData["originalStartTime"]);
        break;
      case "steps":
        mockupData[key] = mockupModel[key](mockupData["activityName"], mockupData["activeDuration"]);
        break;
      case "caloriesLink":
        mockupData[key] = mockupModel[key](mockupData["originalStartTime"], mockupData["originalDuration"]);
        break;
      case "heartRateLink":
        mockupData[key] = mockupModel[key](mockupData["originalStartTime"], mockupData["originalDuration"]);
        break;
      case "activeZoneMinutes":
        mockupData[key] = mockupModel[key](mockupData["hasActiveZoneMinutes"]);
        break;
      case "tcxLink":
        mockupData[key] = mockupModel[key](mockupData["logId"]);
        break;
      case "activeDuration":
      case "activityName":
      case "averageHeartRate":

      case "logType":
      case "calories":
      case "hasActiveZoneMinutes":
      case "manualValuesSpecified":
      case "logType":
      case "logId":
        mockupData[key] = mockupModel[key]();
        break;

    }
  });


  return mockupData;
}

export function getActivitiesSummaryData(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;

  [
    "day",
    "activeScore",
    "activityCalories",
    "caloriesBMR",
    "heartRateZones",
    "caloriesOut",
    "distances",
    "elevation",
    "fairlyActiveMinutes",
    "floors",
    "lightlyActiveMinutes",
    "marginalCalories",
    "restingHeartRate",
    "sedentaryMinutes",
    "steps",
    "veryActiveMinutes",
  ].forEach((key, i) => {
    switch (key) {
      case "day":
        mockupData[key] = dataDate;
        break;
      case "caloriesOut":
        mockupData[key] = mockupModel[key](mockupData["heartRateZones"]);
        break;
      case "activeScore":
      case "activityCalories":
      case "caloriesBMR":
      case "heartRateZones":
      case "distances":
      case "elevation":
      case "fairlyActiveMinutes":
      case "floors":
      case "lightlyActiveMinutes":
      case "marginalCalories":
      case "restingHeartRate":
      case "sedentaryMinutes":
      case "steps":
      case "veryActiveMinutes":
      case "logType":
        mockupData[key] = mockupModel[key]();
        break;

    }
  });

  return mockupData;
}

export function getSleepSummaryData(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;

  let n1 = null;
  let n2 = null;
  n1 = getRandomInt(1, 102);
  while (n2 === null || n2 === n1) {
    n2 = getRandomInt(1, 102);
  }
  let ordered = [Math.max(n1, n2), Math.min(n1, n2)]
  let highest, lowest, middle;
  let percent1 = (ordered[1] - 1) / 100;
  let percent2 = (ordered[0] - ordered[1] - 1) / 100;
  let percent3 = (102 - ordered[0]) / 100;
  highest = Math.max(percent1, percent2, percent3);
  lowest = Math.min(percent1, percent2, percent3);
  if (percent1 !== highest && percent1 !== lowest) {
    middle = percent1;
  } else if (percent2 !== highest && percent2 !== lowest) {
    middle = percent2;
  } else {
    middle = percent3;
  }
  [
    "minutesAfterWakeup",
    "minutesAsleep",
    "minutesAwake",
    "minutesToFallAsleep",
    "timeInBed",
    "startTimeTS",
    "endTimeTS",
    "startTime",
    "endTime",
    "light",
    "wake",
    "rem",
    "deep",

  ].forEach((key, i) => {
    switch (key) {
      case "wake":
        mockupData[key] = mockupModel[key](mockupData["minutesAwake"]);
        break;
      case "timeInBed":
        mockupData[key] = mockupData["minutesAwake"] + mockupData["minutesAsleep"] + mockupData["minutesAfterWakeup"] + mockupData["minutesToFallAsleep"];
        break;
      case "deep":
        mockupData[key] = mockupModel[key](mockupData["minutesAsleep"], mockupData["light"].minutes, mockupData["rem"].minutes);
        break;
      case "light":
        mockupData[key] = mockupModel[key](mockupData["minutesAsleep"], highest);
        break;
      case "rem":
        mockupData[key] = mockupModel[key](mockupData["minutesAsleep"], middle);
        break;
      case "startTimeTS":
        mockupData[key] = mockupModel[key](dataDate);
        break;
      case "endTimeTS":
        mockupData[key] = mockupModel[key](mockupData["startTimeTS"], mockupData["timeInBed"]);
        break;
      case "startTime":
        mockupData[key] = mockupModel[key](mockupData["startTimeTS"]);
        break;
      case "endTime":
        mockupData[key] = mockupModel[key](mockupData["endTimeTS"]);
        break;
      case "minutesAsleep":
      case "minutesAwake":
      case "minutesAfterWakeup":
      case "minutesToFallAsleep":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });



  return mockupData;
}


export function getHeartRateSummary(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;

  [
    "day",
    "out_of_zone",
    "fat_burn",
    "cardio",
    "peak"
  ].forEach((key, i) => {
    switch (key) {
      case "day":
        mockupData[key] = dataDate;
        break;
      case "out_of_zone":
      case "fat_burn":
      case "cardio":
      case "peak":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}

export function getSleepQualityData(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;

  [
    "p_datetime",
    "p_value",
    "p_level",
    "p_timestamp",
  ].forEach((key, i) => {
    switch (key) {
      case "p_datetime":
        mockupData[key] = getSleepDate(dataDate, 22, 3)
        break;

      case "p_timestamp":
        mockupData[key] = mockupModel[key](mockupData["p_datetime"]);
        break;
      case "p_level":
      case "p_value":

        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}

export function getSleepData(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;

  [
    "p_datetime",
    "p_level",
    "p_seconds",
    "p_timestamp",
  ].forEach((key, i) => {
    switch (key) {
      case "p_datetime":
        mockupData[key] = getSleepDate(dataDate, 22, 3)
        break;
      case "p_timestamp":
        mockupData[key] = mockupModel[key](mockupData["p_datetime"]);
        break;
      case "p_level":
      case "p_seconds":

        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}

export function getHeartRateData(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;

  [
    "p_date",
    "p_time",
    "p_value",
  ].forEach((key, i) => {
    switch (key) {
      case "p_date":
        mockupData[key] = dataDate;
        break;
      case "p_time":
      case "p_value":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}
