import {
  toIsoString,
  getNewDate,
  getSleepDate,
  pickRandomValue,
  getAverage,
  MersenneTwister,
  convertToInt
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/oura-data";


var randGen = new MersenneTwister()


const ActivitySummaryModel = {
  summary_date: (d, i) => {
    return getNewDate(d, i, "DATE");
  },

  day_end: (d, i) => {
    return getNewDate(d, i, "DATE");
    //return '2016-09-04T03:59:59+03:00';
  },
  daily_movement: () => {
    return convertToInt(randGen.random(),1000, 15000)
  },

  steps: (m) => {
    const steps = convertToInt(randGen.random(),20, 60);
    return Math.ceil((m * steps) / 100);
  },
  cal_total: () => {
    return convertToInt(randGen.random(),2000, 3500)
  },
  cal_active: (m) => {
    const cals = convertToInt(randGen.random(),20, 60);
    return Math.ceil((m * cals) / 100);
  },
};

const ReadinessSummaryModel = {
  summary_date: (d, i) => {
    return getNewDate(d, i, "DATE");
  },
  period_id: () => {
    return convertToInt(randGen.random(),0, 100)
  },
  score: (score_previous_night, score_sleep_balance, score_previous_day, score_activity_balance, score_resting_hr, score_hrv_balance, score_recovery_index, score_temperature) => {
    return Math.round((score_previous_night + score_sleep_balance + score_previous_day + score_activity_balance + score_resting_hr + score_hrv_balance + score_recovery_index + score_temperature) / 8);
  },
  score_previous_night: () => {
    return convertToInt(randGen.random(),0, 100)
  },
  score_sleep_balance: () => {
    return convertToInt(randGen.random(),0, 100)
  },
  score_previous_day: () => {
    return convertToInt(randGen.random(),0, 100)
  },
  score_activity_balance: () => {
    return convertToInt(randGen.random(),0, 100)
  },
  score_resting_hr: () => {
    return convertToInt(randGen.random(),0, 100)
  },
  score_hrv_balance: () => {
    return convertToInt(randGen.random(),0, 100)
  },
  score_recovery_index: () => {
    return convertToInt(randGen.random(),0, 100)
  },
  score_temperature: () => {
    return convertToInt(randGen.random(),0, 100)
  },
  rest_mode_state: () => {
    return pickRandomValue([0, 1, 2, 3, 4], randGen);
  },
};

const SleepSummaryModel = {
  summary_date: (d, i) => {
    return getNewDate(d, i, "DATE");
  },

  bedtime_start: (d, start, range) => {
    return getSleepDate(d, start, range);
  },
  bedtime_end: (d, sleepTimeRangeInMins) => {
    const sleepTime = convertToInt(
      randGen.random(),
      sleepTimeRangeInMins[0],
      sleepTimeRangeInMins[1]
    );
    const startTime = new Date(d).getTime();
    const endTime = startTime + sleepTime * 60 * 1000;
    return toIsoString(new Date(endTime));
  },
  score: (score_alignment, score_deep, score_rem, score_latency, score_efficiency, score_disturbances, score_total) => {
    return Math.round((0.1 * score_alignment) + (0.1 * score_deep) + (0.1 * score_rem) + (0.1 * score_latency) + (0.1 * score_efficiency) + (0.15 * score_disturbances) + (0.35 * score_total))
  },
  score_alignment: () => {
    return convertToInt(randGen.random(),60, 90)
  },
  score_deep: () => {
    return convertToInt(randGen.random(),60, 90)
  },
  score_rem: () => {
    return convertToInt(randGen.random(),60, 90)
  },
  score_latency: () => {
    return convertToInt(randGen.random(),60, 90)
  },
  score_efficiency: () => {
    return convertToInt(randGen.random(),60, 90)
  },
  score_disturbances: () => {
    return convertToInt(randGen.random(),60, 90)
  },
  score_total: () => {
    return convertToInt(randGen.random(),60, 90)
  },
  restless: () => {
    return convertToInt(randGen.random(),60, 90)
  },
  efficiency: (duration, total) => {
    return Math.round((total / duration) * 100)
  },
  duration: (startTime, endTime) => {
    const startTimeTS = new Date(startTime).getTime();
    const endTimeTS = new Date(endTime).getTime();
    return Math.ceil((endTimeTS - startTimeTS) / 1000); // secs
  },
  total: (duration) => {
    return duration - convertToInt(randGen.random(),500, 2000)
  },
  deep: (total, light, rem) => {
    return total - light - rem
  },
  awake: (duration, total) => {
    return duration - total
  },
  light: (totalSleep) => {
    const p = convertToInt(randGen.random(),40, 70) / 100;
    return Math.ceil(totalSleep * p);
  },
  rem: (sleepSecs) => {
    const p = convertToInt(randGen.random(),40, 70) / 100;
    return Math.ceil(sleepSecs * p);
  },
  hr_lowest: (hr_5min) => {
    //console.log("HR 5min ARG ", hr_5min)
    //let hr = hr_5min.filter(hr => hr !== 0);
    var hrs = hr_5min.slice() //Avoids Sorting original array
    const hr = hrs.sort(function(a, b){return a-b}); //Sorts lowest to highest number instead of digits (e.g. without the function, the array would show [100,20] instead of [20,100]) 
    return hr[0];
    //console.log("LOWEST HR", hr);
  },
  hr_average: (hr_5min) => {

    return getAverage(hr_5min)
  },
  temperature_delta: () => {
    return (convertToInt(randGen.random(),0, 5000) / 1000) - 2.5
  },
  hypnogram_5min: (bedtime_start, bedtime_end) => {
    const bedtimeStart = new Date(bedtime_start)
    const bedtimeEnd = new Date(bedtime_end)
    let timeIntervals = bedtimeEnd - bedtimeStart
    timeIntervals = Math.floor(timeIntervals / 300000)

    let hypnogramString = ""
    for (var i = 0; i < timeIntervals; i++) {
      hypnogramString += convertToInt(randGen.random(),0, 4).toString()
    }
    return hypnogramString

  },
  hr_5min: (bedtime_start, bedtime_end) => {
    const bedtimeStart = new Date(bedtime_start)
    const bedtimeEnd = new Date(bedtime_end)
    let timeIntervals = bedtimeEnd - bedtimeStart
    timeIntervals = Math.floor(timeIntervals / 300000)

    let hrArr = []
    // otherwise the heart rate list values are always same and hr_lowest/average is always same too
    const startValue = convertToInt(randGen.random(),40, 60);
    for (var i = 0; i < timeIntervals; i++) {
      hrArr.push(convertToInt(randGen.random(),startValue, 90))
    }
    //console.log("HR_5min ", timeIntervals, hrArr);
    return hrArr

  },
  rmssd_5min: (bedtime_start, bedtime_end) => {
    const bedtimeStart = new Date(bedtime_start)
    const bedtimeEnd = new Date(bedtime_end)
    let timeIntervals = bedtimeEnd - bedtimeStart
    timeIntervals = Math.floor(timeIntervals / 300000)

    let rmssdArr = []
    for (var i = 0; i < timeIntervals; i++) {
      rmssdArr.push(convertToInt(randGen.random(),0, 100))
    }
    return rmssdArr

  }
};

const dataModels = {
  ActivitySummary: {
    data: MOCK.ActivitySummary,
    mockup: ActivitySummaryModel,
  },
  ActivitySummaryAsync: {
    data: MOCK.ActivitySummaryAsync,
    mockup: ActivitySummaryModel,
  }, // CSV header is same as JSON attributes
  ReadinessSummary: {
    data: MOCK.ReadinessSummary,
    mockup: ReadinessSummaryModel,
  },
  ReadinessSummaryAsync: {
    data: MOCK.ReadinessSummaryAsync,
    mockup: ReadinessSummaryModel,
  },
  SleepSummary: { data: MOCK.SleepSummary, mockup: SleepSummaryModel },
  SleepSummaryAsync: {
    data: MOCK.SleepSummaryAsync,
    mockup: SleepSummaryModel,
  },
  SleepData: { data: MOCK.SleepData, mockup: SleepSummaryModel },
  SleepDataAsync: {
    data: MOCK.SleepDataAsync,
    mockup: SleepSummaryModel,
  },
};

export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getActivityMockupData(dataModel, dataDate, seed) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;
  if (seed === null) {
    randGen = new MersenneTwister()
  } else {
    randGen = new MersenneTwister(seed)
  }

  [
    "summary_date",
    "daily_movement",
    "cal_total",
    "day_start",
    "day_end",
    "steps",
    "cal_active",
  ].forEach((key, i) => {
    switch (key) {
      case "summary_date":
        var date = new Date(dataDate)
        mockupData[key] = `${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
        break;
      case "daily_movement":
        mockupData[key] = mockupModel[key]();
        break;
      case "cal_total":
        mockupData[key] = mockupModel[key]();
        break;

      case "day_start":
        const dayStartTime = mockupData[key].split("T")[1];
        mockupData[key] = mockupData["summary_date"] + "T" + dayStartTime;
        break;
      case "day_end":
        const dayEndTime = mockupData[key].split("T")[1];
        const dayEndDate = mockupModel[key](mockupData["summary_date"], 1);
        mockupData[key] = dayEndDate + "T" + dayEndTime;
        break;

      case "steps":
        mockupData[key] = mockupModel[key](mockupData["daily_movement"]);
        break;

      case "cal_active":
        mockupData[key] = mockupModel[key](mockupData["cal_total"]);
        break;
    }
  });

  return mockupData;
}

export function getReadinessMockupData(dataModel, dataDate,seed = null) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;
  if (seed === null) {
    randGen = new MersenneTwister()
  } else {
    randGen = new MersenneTwister(seed)
  }

  ["summary_date",
    "period_id",
    "score_previous_night",
    "score_sleep_balance",
    "score_previous_day",
    "score_activity_balance",
    "score_resting_hr",
    "score_hrv_balance",
    "score_recovery_index",
    "score_temperature",
    "score",
    "rest_mode_state"].forEach((key, i) => {
      switch (key) {
        case "summary_date":
          var date = new Date(dataDate)
          mockupData[key] = `${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
          break;
        case "score":
          mockupData[key] = mockupModel[key](mockupData["score_previous_night"], mockupData["score_sleep_balance"], mockupData["score_previous_day"], mockupData["score_activity_balance"], mockupData["score_resting_hr"], mockupData["score_hrv_balance"], mockupData["score_recovery_index"], mockupData["score_temperature"]);
          break;
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

  return mockupData;
}

export function getSleepMockupData(dataModel, dataDate, seed = null) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;
  if (seed === null) {
    randGen = new MersenneTwister()
  } else {
    randGen = new MersenneTwister(seed)
  }

  [
    "summary_date",
    "bedtime_start",
    "timestamp",
    "timezone",
    "bedtime_end",
    "duration",
    "total",
    "awake",
    "light",
    "rem",
    "deep",
    "score_alignment",
    "score_deep",
    "score_rem",
    "score_latency",
    "score_efficiency",
    "score_disturbances",
    "score_total",
    "restless",
    "efficiency",
    "score",
    "temperature_delta",
    "hypnogram_5min",
    "hr_5min",
    "rmssd_5min",
    "hr_lowest",
    "hr_average"
  ].forEach((key, i) => {
    switch (key) {
      case "summary_date":
        var date = new Date(dataDate)
        mockupData[key] = `${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
        break;
      case "timezone":
        mockupData[key] = 0; // all dates are utc
        break;
      case "score":
        mockupData[key] = mockupModel[key](mockupData["score_alignment"], mockupData["score_deep"], mockupData["score_rem"], mockupData["score_latency"], mockupData["score_efficiency"], mockupData["score_disturbances"], mockupData["score_total"]);
        break;
      case "bedtime_start":
        mockupData[key] = mockupModel[key](mockupData["summary_date"], 22, 3);
        break;
      // sleepData model has this attribute...   
      case "timestamp":
        mockupData[key] = mockupData["bedtime_start"];
        break;
      case "bedtime_end":
        // sleep time 5-9h
        mockupData[key] = mockupModel[key](mockupData["bedtime_start"], [
          5 * 60,
          9 * 60,
        ]);
        break;
      case "duration":
        mockupData[key] = mockupModel[key](
          mockupData["bedtime_start"],
          mockupData["bedtime_end"]
        );
        break;
      case "awake":
      case "efficiency":
        mockupData[key] = mockupModel[key](mockupData["duration"], mockupData["total"]);
        break;
      case "total":
        mockupData[key] = mockupModel[key](mockupData["duration"]);
        break;
      case "light":
        mockupData[key] = mockupModel[key](mockupData["total"]);
        break;
      case "rem":
        mockupData[key] = mockupModel[key](
          mockupData["total"] - mockupData["light"]
        );
        break;
      
      case "deep":
        mockupData[key] = mockupModel[key](mockupData["total"], mockupData["light"], mockupData["rem"])
        break;
      case "hr_lowest":
      case "hr_average":
        mockupData[key] = mockupModel[key](mockupData["hr_5min"])
        break
      case "hypnogram_5min":
      case "hr_5min":
      case "rmssd_5min":
        mockupData[key] = mockupModel[key](
          mockupData["bedtime_start"], mockupData["bedtime_end"]
        );
        break;
      case "rmssd_5min":
        mockupData[key] = mockupModel[key](
          mockupData["duration"], mockupData["total"]
        );
        break;
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}
