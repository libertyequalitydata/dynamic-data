import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/garmin-data";

const DailiesDataModel = {
  starttimeinseconds: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1,23),getRandomInt(1,59),getRandomInt(1,59),getRandomInt(1,999))
    console.log(finalDate.getFullYear() + "-" + finalDate.getMonth() + "-" + finalDate.getDate())
    return (finalDate.getTime())
  },

  calendardate: (timestamp) => {
    let finalDate = new Date(timestamp);
    return (finalDate.getFullYear() + "-" + (finalDate.getMonth()+1) + "-" + finalDate.getDate())
  },

  reststressdurationinseconds: () => {
    
    return getRandomInt(20000,35000);
  },
  restingheartrateinbeatsperminute: () => {
    return getRandomInt(49,82);
  },

  minheartrateinbeatsperminute: (resting) => {
    return resting - getRandomInt(1,10);
  },

  maxheartrateinbeatsperminute: (resting) => {
    return resting + getRandomInt(10,50);
  },
  averageheartrateinbeatsperminute: (resting) => {
    return resting + getRandomInt(-10,10);
  }, 
  timeoffsetheartratesamples: (min, max) => {
    let finalReturn = {}
    let counter = 0;
    let runOn = getRandomInt(1,5);
    let number = Math.round((max + min)/2);
    while ((counter * 15 )< 55920){
      counter += 1;
      if (runOn === 0){
        runOn = getRandomInt(1,10);
        let x = getRandomInt(-10,10)
        while (number + x < min || number + x > max){
          x = getRandomInt(-10,10)
        }
        number = (number + x)

        
      }
      finalReturn = {
        ...finalReturn,
        [counter*15]: number
      }
      runOn -= 1;
    }
    return finalReturn;

  },
  durationinseconds: () => {
    return getRandomInt(43200, 72000)
  },
  distanceinmeters: (steps) => {
    let avgDist = ((3410) + getRandomInt(-200,200))/6200

    return (avgDist*steps).toFixed(1)
  },

  activekilocalories: (steps) => {
    let avgCalories = ((404) + Math.round(-50,50))/10000;
    return Math.round(steps*avgCalories)
  },

  steps: () => {
    return getRandomInt(2000,13000)
  },

  starttimeoffsetinseconds: () => {
    let timezones = [-12, -11, -10, -9.5, -9,-8,-7,-6,-5,-4,-3.5,-3,-2,-1, 0,1,2,3,3.5,4,4.5,5,5.5,5.75,6,6.5,7,8,8.75,9,9.5,10,10.5,11,12,12.75,13,14]
    return timezones[getRandomInt(0,timezones.length - 1)] * 60 * 60;
  },
  bmrkilocalories: () => {
    return getRandomInt(700,2500)
  },
  activitytype: () => {
    let text = ["WALKING", "RUNNING", "CYCLING", "SWIMMING", "HIKING", "BMX"]
    return text[getRandomInt(0,text.length - 1)]
  },
  floorsclimbed: () => {
    return getRandomInt(1,15);
  },

  floorsclimbedgoal: () => {
    return getRandomInt(1,15);
  },

  stepsgoal: () => {
    return getRandomInt(2000,13000)
  }


}

const dataModels = {
  DailiesDataObject: {
    data: MOCK.DailiesDataObject,
    mockup: DailiesDataModel
  },
  // // ActivitiesDataAsync: {
  // //   data: MOCK.ActivitiesDataAsync,
  // //   mockup: ActivitiesDataAsyncModel
  // // },
  // ActivitiesSummary: {
  //   data: MOCK.ActivitiesSummary,
  //   mockup: ActivitiesSummaryModel
  // },
  // // ActivitiesSummaryAsync: {
  // //   data: MOCK.ActivitiesSummaryAsync,
  // //   mockup: ActivitiesSummaryAsyncModel
  // // },
  // // HeartRateDataAsync: {
  // //   data: MOCK.HeartRateDataAsync,
  // //   mockup: HeartRateDataAsyncModel
  // // },
  // HeartRateSummary: {
  //   data: MOCK.HeartRateSummary,
  //   mockup: HeartRateSummaryModel
  // },
  // // HeartRateSummaryAsync: {
  // //   data: MOCK.HeartRateSummaryAsync,
  // //   mockup: HeartRateSummaryAsyncModel
  // // },
  // // SleepDataAsync: {
  // //   data: MOCK.SleepDataAsync,
  // //   mockup: SleepDataAsyncModel
  // // },
  // SleepSummary: {
  //   data: MOCK.SleepSummary,
  //   mockup: SleepSummaryModel
  // },
  // // SleepSummaryAsync: {
  // //   data: MOCK.SleepSummaryAsync
  // // },
  // // SleepQualityAsync: {
  // //   data: MOCK.SleepQualityAsync,
  // //   mockup: SleepQualityAsyncModel
  // // },
};

export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getDailiesMockupData(dataType, dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }
  if (dataType === "ASYNC") {
    const mockupDataRow = dataModels[dataModel].data[1].split("\t");
    const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    mockupDataHeader.forEach((k, i) => {
      mockupData[k] = mockupDataRow[i];
    });
  }
  let n1 = null;
  let n2  = null;
  let n3 = null;
  let n4 = null;
  n1 = getRandomInt(1,104);
  while (n2 === null||n2===n1){
    n2 = getRandomInt(1,104);
  }
  while (n3 === null||n3===n1||n3===n2){
    n3 = getRandomInt(1,104);
  }
  while (n4 === null||n4===n1||n4===n2||n4===n3){
    n4 = getRandomInt(1,104);
  }
  let allValues = [n1,n2,n3,n4]
  let ordered = [Math.max(n1,n2,n3,n4),Math.min(n1,n2,n3,n4)]
  allValues = allValues.filter(x => !ordered.includes(x)) 
  if (allValues[0] > allValues[1]){
    ordered.push(allValues[0]);
    ordered.push(allValues[1]);
  }  else {
    ordered.push(allValues[1]);
    ordered.push(allValues[0]);
  }
  //orders = [Max, Min, 2ndMax, 2ndMin]
  let a = (ordered[1] - 1)/100;
  let b = (ordered[3] - ordered[1] - 1)/100;
  let c = (ordered[2] - ordered[3] - 1)/100;
  let d = (ordered[0] - ordered[2] - 1)/100;
  let e = (104 - ordered[0])/100;
  [    
    "starttimeinseconds",
    "reststressdurationinseconds",
    "calendardate",
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
    "stepsgoal"
    
  ].forEach((key, i) => {
    switch (key) {
      case "calendardate":
        mockupData[key] = mockupModel[key](mockupData["starttimeinseconds"]);
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
        mockupData[key] = mockupModel[key](mockupData["minheartrateinbeatsperminute"],mockupData["maxheartrateinbeatsperminute"]);
        break;
      case "distanceinmeters":
      case "activekilocalories":
        mockupData[key] = mockupModel[key](mockupData["steps"]);
        break;
      case "starttimeinseconds":
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
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}
