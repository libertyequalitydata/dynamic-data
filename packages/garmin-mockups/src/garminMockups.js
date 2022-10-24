import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getRandomTime,
  getSleepDate,
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/garmin-data";

const DailiesDataModel = {

  summaryid: () => {
    function makeid(length) {
      var result = 'x';
      var characters = 'abcdef0123456789';
      var charactersLength = characters.length;
      for (var i = 1; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
        if ((i + 1) % 8 === 0) {
          result += "-";
        } else if ((i + 2) === length) {
          result += "-";
        }
      }
      return result;
    }
    return makeid(21)

  },

  /*
  starttimeinseconds: () => {
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
    return (Math.floor(finalDate.getTime() / 1000))
  },

  calendardate: (timestamp) => {
    let finalDate = new Date(timestamp * 1000);
    return (finalDate.getFullYear() + "-" + (finalDate.getMonth() + 1) + "-" + finalDate.getDate())
  },
  */

  reststressdurationinseconds: () => {

    return getRandomInt(20, 35) * 1000;
  },

  restingheartrateinbeatsperminute: () => {
    return getRandomInt(49, 82);
  },

  minheartrateinbeatsperminute: (resting) => {
    return resting - getRandomInt(1, 10);
  },

  maxheartrateinbeatsperminute: (resting) => {
    return resting + getRandomInt(10, 50);
  },
  averageheartrateinbeatsperminute: (resting) => {
    return resting + getRandomInt(-10, 10);
  },
  timeoffsetheartratesamples: (min, max) => {
    let arr = []
    let runOn = getRandomInt(1, 5);
    let number = Math.round((max + min) / 2);
    for (var i = 0; i < 3728; i++) {
      if (runOn === 0) {
        runOn = getRandomInt(1, 10);
        let x = getRandomInt(-10, 10)
        while (number + x < min || number + x > max) {
          x = getRandomInt(-10, 10)
        }
        number = (number + x)
      }
      arr.push(number)

      runOn -= 1
    }
    const obj = {}
    arr.forEach((elem, i) => {
      obj[i * 15] = elem
    })

    // let finalReturn = {}
    return obj;

  },
  durationinseconds: () => {
    return getRandomInt(432, 720) * 100;
  },
  distanceinmeters: (steps) => {
    let avgDist = ((3410) + getRandomInt(-200, 200)) / 6200

    return (avgDist * steps).toFixed(1)
  },

  activekilocalories: (steps) => {
    let avgCalories = ((404) + Math.round(-50, 50)) / 10000;
    return Math.round(steps * avgCalories)
  },

  steps: () => {
    return getRandomInt(20, 130) * 100;
  },

  starttimeoffsetinseconds: () => {
    let timezones = [-12, -11, -10, -9.5, -9, -8, -7, -6, -5, -4, -3.5, -3, -2, -1, 0, 1, 2, 3, 3.5, 4, 4.5, 5, 5.5, 5.75, 6, 6.5, 7, 8, 8.75, 9, 9.5, 10, 10.5, 11, 12, 12.75, 13, 14]
    return timezones[getRandomInt(0, timezones.length-1)] * 60 * 60;
  },
  bmrkilocalories: () => {
    return getRandomInt(7, 25) * 100;
  },
  activitytype: () => {
    let text = ["WALKING", "RUNNING", "CYCLING", "SWIMMING", "HIKING", "BMX"]
    return text[getRandomInt(0, text.length - 1)]
  },
  floorsclimbed: () => {
    return getRandomInt(1, 15);
  },

  floorsclimbedgoal: () => {
    return getRandomInt(1, 15);
  },

  stepsgoal: () => {
    return getRandomInt(2, 13) * 1000;
  },

  intensitydurationgoalinseconds: (steps) => {
    const ratio = Math.round((6200 + getRandomInt(-10, 10) * 100) / 9000)
    return ratio * steps
  },
  maxstresslevel: () => {
    return getRandomInt(80, 100)
  },

  stressqualifier: () => {
    let qualifier = ["unknown", "high", "low", "medium"]; //NB: high, low and medium are not offical values (just placeholder). Please replace as neccessary.
    return qualifier[getRandomInt(0, qualifier.length-1)]
  },

  averagestresslevel: () => {
    return getRandomInt(1, 20)
  },

  vigorousintensitydurationinseconds: () => {
    return getRandomInt(12, 50) * 100;
  },
  moderateintensitydurationinseconds: () => {
    return getRandomInt(12, 50) * 100;
  },


}

const EpochsDataModel = {
  summaryid: () => {
    function makeid(length) {
      var result = 'x';
      var characters = 'abcdef0123456789';
      var charactersLength = characters.length;
      for (var i = 1; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
        if ((i + 1) % 8 === 0) {
          result += "-";
        }
      }
      return result;
    }
    return makeid(17)

  },
  activitytype: () => {
    let activities = ["SEDENTARY", "EXAMPLE2", "EXAMPLE3", "EXAMPLE4"];
    return activities[getRandomInt(0, activities.length-1)]
  },
  activekilocalories: () => {
    return getRandomInt(0, 999)
  },
  steps: () => {
    return getRandomInt(0, 9999)
  },
  distanceinmeters: () => {
    return getRandomInt(0, 9999) / 10
  },
  durationinseconds: () => {
    return getRandomInt(0, 999)
  },
  activetimeinseconds: () => {
    return getRandomInt(0, 999)
  },
  starttimeinseconds: () => {
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
    return (Math.floor(finalDate.getTime() / 1000))
  },
  starttimeoffsetinseconds: () => {
    let timezones = [-12, -11, -10, -9.5, -9, -8, -7, -6, -5, -4, -3.5, -3, -2, -1, 0, 1, 2, 3, 3.5, 4, 4.5, 5, 5.5, 5.75, 6, 6.5, 7, 8, 8.75, 9, 9.5, 10, 10.5, 11, 12, 12.75, 13, 14]
    return timezones[getRandomInt(0, timezones.length-1)] * 60 * 60;
  },
  met: () => {
    //https://golf.procon.org/met-values-for-800-activities/
    return getRandomInt(10, 198) / 10

  },
  intensity: () => {
    let intensities = ["SEDENTARY", "EXAMPLE2", "EXAMPLE3", "EXAMPLE4"];
    return intensities[getRandomInt(0, intensities.length-1)]

  },
  meanmotionintensity: () => {
    return getRandomInt(0, 999) / 10
  },
  maxmotionintensity: () => {
    return getRandomInt(0, 999) / 10
  },


}
let remNum = getRandomInt(6, 10);
let awakeNum = getRandomInt(1, 3);
let deepNum = getRandomInt(5, 8);
let lightNum = deepNum + awakeNum + remNum + 1;
let unmeasurableNum = getRandomInt(0, 2);
const SleepsDataModel = {
  summaryid: () => {
    function makeid(length) {
      var result = 'x';
      var characters = 'abcdef0123456789';
      var charactersLength = characters.length;
      for (var i = 1; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
        if ((i + 1) % 8 === 0) {
          result += "-";
        }
      }
      return result;
    }
    return makeid(20)

  },

  starttimeinseconds: () => {
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
    return (Math.floor(finalDate.getTime() / 1000))
  },

  calendardate: (timestamp) => {
    let finalDate = new Date(timestamp * 1000);
    return (finalDate.getFullYear() + "-" + (finalDate.getMonth() + 1) + "-" + finalDate.getDate())
  },
  starttimeoffsetinseconds: () => {
    let timezones = [-12, -11, -10, -9.5, -9, -8, -7, -6, -5, -4, -3.5, -3, -2, -1, 0, 1, 2, 3, 3.5, 4, 4.5, 5, 5.5, 5.75, 6, 6.5, 7, 8, 8.75, 9, 9.5, 10, 10.5, 11, 12, 12.75, 13, 14]
    return timezones[getRandomInt(0, timezones.length-1)] * 60 * 60;
  },
  lightsleepdurationinseconds: () => {
    return (3140 + getRandomInt(-500, 500)) * lightNum
  },
  remsleepinseconds: () => {
    return (762 + getRandomInt(-50, 50)) * remNum
  },
  deepsleepdurationinseconds: () => {
    return (762 + getRandomInt(-50, 50)) * deepNum
  },
  awakedurationinseconds: () => {
    return (60 + getRandomInt(-10, 10)) * awakeNum
  },


  durationinseconds: (light, rem, awake, deep, unmeasurable) => {
    return light + rem + awake + deep + unmeasurable
  },

  sleeplevelsmap: (start, light, rem, awake, deep, unmeasurable) => {
    let deepObj = []
    let lightObj = []
    let remObj = []
    let awakeObj = []
    let deepCounter = deepNum;
    let lightCounter = lightNum;
    let remCounter = remNum;
    let awakeCounter = awakeNum
    let unmeasurableCounter = unmeasurableNum;
    let positionsForUnmeasurable = [];
    let indexUnmeasureable = 0;
    let up = true;
    let ready = false;



    while (positionsForUnmeasurable.length !== unmeasurableCounter) {
      let x = getRandomInt(1, lightCounter)
      if (!positionsForUnmeasurable.includes(x)) {
        positionsForUnmeasurable.push(x)

      }

    }
    positionsForUnmeasurable.sort(function (a, b) { return b - a });



    let avgLight = light / lightCounter;
    let avgAwake = awake / awakeCounter;
    let avgDeep = deep / deepCounter;
    let avgRem = rem / remCounter;
    let avgUnmeasureable = unmeasurable / unmeasurableCounter

    let currentTime = start
    let nextTime = 0
    while (lightCounter > 0) {
      if (unmeasurableCounter > 0 && positionsForUnmeasurable[indexUnmeasureable] === lightCounter) {
        currentTime = currentTime + avgUnmeasureable;
        indexUnmeasureable += 1
        unmeasurableCounter -= 1
      }
      if (lightCounter > 0) {
        nextTime = currentTime + avgLight
        lightObj.push({ starttimeinseconds: currentTime, endtimeinseconds: nextTime })
        currentTime = nextTime;
        lightCounter -= 1
        up = !up
      }
      if (Math.round((awakeCounter * (lightNum)) / (awakeNum + 1)) === lightCounter && awakeCounter > 0) {
        ready = true;
      }
      if (ready && up) {
        nextTime = currentTime + avgAwake
        awakeObj.push({ starttimeinseconds: currentTime, endtimeinseconds: nextTime })
        currentTime = nextTime;
        awakeCounter -= 1
        ready = false;
      }
      else if (remCounter > 0 && deepCounter > 0) {
        if (up) {
          nextTime = currentTime + avgRem
          remObj.push({ starttimeinseconds: currentTime, endtimeinseconds: nextTime })
          currentTime = nextTime;
          remCounter -= 1
        } else {
          nextTime = currentTime + avgDeep
          deepObj.push({ starttimeinseconds: currentTime, endtimeinseconds: nextTime })
          currentTime = nextTime;
          deepCounter -= 1
        }
      } else if (remCounter > 0) {
        nextTime = currentTime + avgRem
        remObj.push({ starttimeinseconds: currentTime, endtimeinseconds: nextTime })
        currentTime = nextTime;
        remCounter -= 1

      } else if (deepCounter > 0) {
        nextTime = currentTime + avgDeep
        deepObj.push({ starttimeinseconds: currentTime, endtimeinseconds: nextTime })
        currentTime = nextTime;
        deepCounter -= 1

      }
    }


    if (deepObj.length === 0) {
      deepObj = null;
    }
    if (lightObj.length === 0) {
      lightObj = null;
    }
    if (remObj.length === 0) {
      remObj = null;
    }
    if (awakeObj.length === 0) {
      awakeObj = null;
    }

    return {
      deep: deepObj,
      light: lightObj,
      rem: remObj,
      awake: awakeObj
    }
  },
  timeoffsetsleepspo2: () => {
    let finalReturn = {}
    let counter = 0;
    let max = 100;
    let min = 80;
    let runOn = getRandomInt(1, 5);
    let number = 93
    while (10740 + (counter * 60) < 25080) {
      counter += 1;
      if (runOn === 0) {
        runOn = getRandomInt(1, 10);
        let x = getRandomInt(-10, 10)
        while (number + x < min || number + x > max) {
          x = getRandomInt(-10, 10)
        }
        number = (number + x)


      }
      finalReturn = {
        ...finalReturn,
        [10740 + (counter * 60)]: number
      }
      runOn -= 1;
    }
    return finalReturn;

  },
  unmeasurablesleepinseconds: () => {
    return (60 + getRandomInt(-10, 10)) * unmeasurableNum
  },

  validation: () => {
    let values = ["ENHANCED_TENTATIVE", "EXAMPLE2", "EXAMPLE3"]
    return values[getRandomInt(0, values.length-1)]
  }

}

const PulseoxModel = {
  summaryid: () => {
    function makeid(length) {
      var result = 'x';
      var characters = 'abcdef0123456789';
      var charactersLength = characters.length;
      for (var i = 1; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
        if ((i + 1) % 8 === 0 && i + 1 !== length) {
          result += "-";
        }
      }
      return result;
    }
    return makeid(16)

  },
  starttimeinseconds: () => {
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
    return (Math.floor(finalDate.getTime() / 1000))
  },

  calendardate: (timestamp) => {
    let finalDate = new Date(timestamp * 1000);
    return (finalDate.getFullYear() + "-" + (finalDate.getMonth() + 1) + "-" + finalDate.getDate())
  },
  starttimeoffsetinseconds: () => {
    let timezones = [-12, -11, -10, -9.5, -9, -8, -7, -6, -5, -4, -3.5, -3, -2, -1, 0, 1, 2, 3, 3.5, 4, 4.5, 5, 5.5, 5.75, 6, 6.5, 7, 8, 8.75, 9, 9.5, 10, 10.5, 11, 12, 12.75, 13, 14]
    return timezones[getRandomInt(0, timezones.length-1)] * 60 * 60;
  },
  durationinseconds: () => {
    return getRandomInt(15000, 25000)
  },

  timeoffsetspo2values: () => {
    let finalReturn = {}
    let counter = 0;
    let max = 100;
    let min = 80;
    let runOn = getRandomInt(1, 3);
    let number = 93
    while (3600 + (counter * 60) < 17940) {
      counter += 1;
      if (runOn === 0) {
        runOn = getRandomInt(1, 10);
        let x = getRandomInt(-10, 10)
        while (number + x < min || number + x > max) {
          x = getRandomInt(-10, 10)
        }
        number = (number + x)


      }
      finalReturn = {
        ...finalReturn,
        [3600 + (counter * 60)]: number
      }
      runOn -= 1;
    }
    return finalReturn;


  },
  ondemand: () => {
    let x = getRandomInt(0, 1);
    switch (x) {
      case 0:
        return false;
      case 1:
        return true;
    }
  }
}

const dataModels = {
  DailiesData: {
    data: MOCK.DailiesData,
    mockup: DailiesDataModel
  },
  DailiesDataAsync: {
    data: MOCK.DailiesDataAsync,
    mockup: DailiesDataModel
  },
  EpochsData: {
    data: MOCK.EpochsData,
    mockup: EpochsDataModel
  },
  EpochsDataAsync: {
    data: MOCK.EpochsDataAsync,
    mockup: EpochsDataModel
  },
  SleepsData: {
    data: MOCK.SleepsData,
    mockup: SleepsDataModel
  },
  SleepsDataAsync: {
    data: MOCK.SleepsDataAsync,
    mockup: SleepsDataModel
  },
  PulseoxData: {
    data: MOCK.PulseoxData,
    mockup: PulseoxModel
  },
  PulseoxDataAsync: {
    data: MOCK.PulseoxDataAsync,
    mockup: PulseoxModel
  },
};

export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getDailiesMockupData(dataModel, dataDate) {
  let mockupData = {};

  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;


  let values = []
  for (var i = 0; i < 5; i++) {
    values.push(getRandomInt(1, 100))
  }
  var sum = values.reduce((a, b) => a + b);
  let a = values[0] / sum;
  let b = values[1] / sum;
  let c = values[2] / sum;
  let d = values[3] / sum;
  let e = values[4] / sum;


  [
    "summaryid",
    "calendardate",
    "starttimeinseconds",
    "reststressdurationinseconds",
    "restingheartrateinbeatsperminute",
    "activitystressdurationinseconds",
    "stressdurationinseconds",
    "lowstressdurationinseconds",
    "mediumstressdurationinseconds",
    "highstressdurationinseconds",
    "minheartrateinbeatsperminute",
    "maxheartrateinbeatsperminute",
    "averageheartrateinbeatsperminute",
    "timeoffsetheartratesamples",
    "durationinseconds",
    "steps",
    "distanceinmeters",
    "activekilocalories",
    "starttimeoffsetinseconds",
    "activitytype",
    "floorsclimbed",
    "floorsclimbedgoal",
    "stepsgoal",
    "intensitydurationgoalinseconds",
    "maxstresslevel",
    "stressqualifier",
    "averagestresslevel",
    "vigorousintensitydurationinseconds",
    "moderateintensitydurationinseconds",
    "bmrkilocalories",
    "summaryid"
  ].forEach((key, i) => {
    switch (key) {
      case "calendardate":
        mockupData[key] = dataDate;
        break;
      case "starttimeinseconds":
        mockupData[key] = new Date(dataDate).getTime() / 1000;
        break;
      case "activitystressdurationinseconds":
        mockupData[key] = Math.round(mockupData["reststressdurationinseconds"] * (a));
        break;
      case "stressdurationinseconds":
        mockupData[key] = Math.round(mockupData["reststressdurationinseconds"] * (b));
        break;
      case "lowstressdurationinseconds":
        mockupData[key] = Math.round(mockupData["reststressdurationinseconds"] * (c));
        break;
      case "mediumstressdurationinseconds":
        mockupData[key] = Math.round(mockupData["reststressdurationinseconds"] * (d));
        break;
      case "highstressdurationinseconds":
        mockupData[key] = Math.round(mockupData["reststressdurationinseconds"] * (e));
        break;
      case "minheartrateinbeatsperminute":
      case "maxheartrateinbeatsperminute":
      case "averageheartrateinbeatsperminute":
        mockupData[key] = mockupModel[key](mockupData["restingheartrateinbeatsperminute"]);
        break;
      case "timeoffsetheartratesamples":
        mockupData[key] = mockupModel[key](mockupData["minheartrateinbeatsperminute"], mockupData["maxheartrateinbeatsperminute"]);
        break;
      case "distanceinmeters":
      case "activekilocalories":
      case "intensitydurationgoalinseconds":
        mockupData[key] = mockupModel[key](mockupData["steps"]);
        break;

      case "reststressdurationinseconds":
      case "restingheartrateinbeatsperminute":
      case "durationinseconds":
      case "steps":
      case "starttimeoffsetinseconds":
      case "bmrkilocalories":
      case "activitytype":
      case "floorsclimbed":
      case "floorsclimbedgoal":
      case "stepsgoal":
      case "maxstresslevel":
      case "stressqualifier":
      case "averagestresslevel":
      case "vigorousintensitydurationinseconds":
      case "moderateintensitydurationinseconds":
      case "summaryid":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}

export function getSleepsMockupData(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;

  [
    "calendardate",
    "starttimeinseconds",

    "starttimeoffsetinseconds",

    "lightsleepdurationinseconds",
    "remsleepinseconds",
    "deepsleepdurationinseconds",
    "unmeasurablesleepinseconds",
    "awakedurationinseconds",

    "durationinseconds",

    "timeoffsetsleepspo2",

    "sleeplevelsmap",
    "summaryid",
    "validation"

  ].forEach((key, i) => {
    switch (key) {
      case "calendardate":
        mockupData[key] = dataDate;
        break;
      case "starttimeinseconds":
        const sleepStart = getSleepDate(dataDate, 22, 3);
        // this startime should be used for sleepLevelsMap...
        // check logic of these... deepsleepdurationinseconds,lightsleepdurationinseconds,remsleepinseconds,awakedurationinseconds,
        mockupData[key] = new Date(sleepStart).getTime() / 1000;
        break;
      case "durationinseconds":
        mockupData[key] = mockupModel[key](mockupData["lightsleepdurationinseconds"], mockupData["remsleepinseconds"], mockupData["awakedurationinseconds"], mockupData["deepsleepdurationinseconds"], mockupData["unmeasurablesleepinseconds"]);
        break;
      case "sleeplevelsmap":
        mockupData[key] = mockupModel[key](mockupData["starttimeinseconds"], mockupData["lightsleepdurationinseconds"], mockupData["remsleepinseconds"], mockupData["awakedurationinseconds"], mockupData["deepsleepdurationinseconds"], mockupData["unmeasurablesleepinseconds"]);
        break;

      case "lightsleepdurationinseconds":
      case "remsleepinseconds":
      case "unmeasurablesleepinseconds":
      case "deepsleepdurationinseconds":
      case "awakedurationinseconds":

        mockupData[key] = mockupModel[key]();
        break;
      case "starttimeoffsetinseconds":
      //case "lightsleepdurationinseconds":
      //case "remsleepinseconds":
      case "timeoffsetsleepspo2":
      case "summaryid":
      //case "unmeasurablesleepinseconds":
      //case "deepsleepdurationinseconds":
      //case "awakedurationinseconds":
      case "validation":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });


  return mockupData;
}

export function getPulseoxMockupData(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;

  [
    "calendardate",
    "starttimeinseconds",

    "durationinseconds",
    "starttimeoffsetinseconds",
    "timeoffsetspo2values",
    "ondemand",
    "summaryid"
  ].forEach((key, i) => {
    switch (key) {
      case "calendardate":
        mockupData[key] = dataDate;
        break;
      case "starttimeinseconds":
        mockupData[key] = new Date(dataDate).getTime() / 1000;
        break;

      case "durationinseconds":
      case "starttimeoffsetinseconds":
      case "timeoffsetspo2values":
      case "ondemand":
      case "summaryid":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });


  return mockupData;
}
export function getEpochsMockupData(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;

  [
    "starttimeinseconds",
    "summaryid",
    "activitytype",
    "activekilocalories",
    "steps",
    "distanceinmeters",
    "durationinseconds",
    "activetimeinseconds",

    "starttimeoffsetinseconds",
    "met",
    "intensity",
    "meanmotionintensity",
    "maxmotionintensity",
  ].forEach((key, i) => {
    switch (key) {
      case "starttimeinseconds":
        // activity time 6-19
        const startDateTime = dataDate + "T" + getRandomTime(6, 13);
        mockupData[key] = new Date(startDateTime).getTime() / 1000;
        break;
      case "summaryid":
      case "activitytype":
      case "activekilocalories":
      case "steps":
      case "distanceinmeters":
      case "durationinseconds":
      case "activetimeinseconds":

      case "starttimeoffsetinseconds":
      case "met":
      case "intensity":
      case "meanmotionintensity":
      case "maxmotionintensity":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });


  return mockupData;
}