import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
  randomHexString,
  getRandomName,
  randomCountry,
  pickRandomValue,
  getRandomString,
  getRandomLatLng,
  getRandomAddress,
  randomLanguage,
  randomIntPhone,
  getRandBool,
  getRandomTimeZone,
  getRandomDateTime,
  randomUUID,
  randomCurrency,
  getFurtherDateTime,
  parseSecondsToString,
  getRandomFloat
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/polar-data";

const ActivitySummaryModel = {
  id: () => {
    return getRandomInt(1000, 99999)
  },
  "polar-user": () => {
    return "https://www.polaraccesslink/v3/users/1"
  },
  "transaction-id": () => {
    return getRandomInt(100000, 9999999)
  },
  date: () => {
    return getRandomDateTime("YYYY-MM-DD")
  },
  created: () => {
    return getRandomDateTime('YYYY-MM-DDThh:mm:ss.000Z')
  },
  calories: () => {
    return getRandomInt(1500, 12000)
  },
  "active-calories": () => {
    return getRandomInt(50, 250)
  },
  duration: () => {
    const hour = getRandomInt(0,10)-1
    const minutes = getRandomInt(0,60)-1
    const seconds = getRandomInt(0,60)-1
    let string = "PT"
    switch (hour){
      case 0:
        break
      default:
        string += `${hour}H`
        break
    }
    switch (minutes){
      case 0:
        break
      default:
        string += `${minutes}M`
        break
    }
    switch (seconds){
      case 0:
        break
      default:
        string += `${seconds}S`
        break
    }
    return string
  },
  "active-steps": () => {
    return getRandomInt(50, 1000)
  }
};

const AvailableSamplesModel = {
  samples: () => {
    return `https://www.polaraccesslink.com/v3/users/${getRandomInt(0,99)}/exercise-transactions/${getRandomInt(0,99)}/exercises/${getRandomInt(0,99)}/samples/${getRandomInt(0,99)}`
  }
}

const AvailableSleepTimesModel = {
  date: () => {
    return getRandomDateTime("YYYY-MM-DD")
  },
  "start_time": () => {
    return `${getRandomDateTime("YYYY-MM-DDThh:mm:ss")}${getRandomTimeZone()["STD"]}`
  },
  "end_time": (start_time) => {
    let date = start_time.substring(0,start_time.length-6)
    let timezone = start_time.substring(start_time.length-6,start_time.length)
    const date2 = getFurtherDateTime(date,"YYYY-MM-DDThh:mm:ss")
    return `${date2}${timezone}`
  },
}

const ExerciseModel = {
  id: () => {
    return randomHexString({len: 7, upperCase: true})
  },
  upload_time: (start_time) => {
    return getFurtherDateTime(start_time,"YYYY-MM-DDThh:mm:ss")
  },
  "transaction-id": () => {
    return getRandomInt(100000, 9999999)
  },
  polar_user: () => {
    return "https://www.polaraccesslink/v3/users/1"
  },
  device: () => {
    return getRandomString(getRandomInt(5,15))
  },
  device_id: () => {
    return randomHexString({len: 8,upperCase: true})
  },
  start_time: () => {
    return getRandomDateTime('YYYY-MM-DDThh:mm:ss')
  },
  start_time_utc_offset: () => {
    const timezone = getRandomTimeZone()["OFFSET"]
    switch (typeof timezone){
      case "object":
        return timezone["STD"]
      case "number":
        return timezone
      default:
        return "ERROR! Timezone neither is a number or object"
    }
  },
  duration: () => {
    const hour = getRandomInt(0,10)-1
    const minutes = getRandomInt(0,60)-1
    const seconds = getRandomInt(0,60)-1
    let string = "PT"
    switch (hour){
      case 0:
        break
      default:
        string += `${hour}H`
        break
    }
    switch (minutes){
      case 0:
        break
      default:
        string += `${minutes}M`
        break
    }
    switch (seconds){
      case 0:
        break
      default:
        string += `${seconds}S`
        break
    }
    return string
  },
  calories: () => {
    return getRandomInt(300,1000)
  },
  distance: () => {
    return getRandomInt(500,2000)
  },
  heart_rate: () => {
    const average = getRandomInt(90,140)
    return {
      "average": average,
      "maximum": average+getRandomInt(0,50)
    }
  },
  training_load: () => {
    return (getRandomInt(0,99999)/100).toFixed(2)
  },
  sport: () => {
    return getRandomString(getRandomInt(5,15))
  },
  has_route: () => {
    return getRandBool()
  },
  club_id: () => {
    return getRandomInt(0,999999)
  },
  club_name: () => {
    return getRandomString(getRandomInt(5,15))
  },
  detailed_sport_info: () => {
    return getRandomString(getRandomInt(5,15))
  },
  fat_percentage: () => {
    return getRandomInt(10, 80)
  },
  carbohydrate_percentage: (fat) => {
    return getRandomInt(5, (100 - fat - 5))
  },
  protein_percentage: (fat, carb) => {
    return 100 - (fat + carb)
  },
}

const ZoneModel = {
  index: () => {
    return getRandomInt(0,9999)
  },
  "lower-limit": () => {
    return getRandomInt(90,110)
  },
  "upper-limit": () => {
    return getRandomInt(130,150)
  } ,
  "in-zone": () => {
    const hour = getRandomInt(0,10)-1
    const minutes = getRandomInt(0,60)-1
    const seconds = getRandomInt(0,60)-1
    let string = "PT"
    switch (hour){
      case 0:
        break
      default:
        string += `${hour}H`
        break
    }
    switch (minutes){
      case 0:
        break
      default:
        string += `${minutes}M`
        break
    }
    switch (seconds){
      case 0:
        break
      default:
        string += `${seconds}S`
        break
    }
    return string
  }
}

const NightlyRechargeModel = {
  "polar_user": () => {
    return  "https://www.polaraccesslink/v3/users/1"
  },
  date: () => {
    return getRandomDateTime('YYYY-MM-DD')
  },
  "heart_rate_avg": () => {
    return getRandomInt(90,150)
  },
  "beat_to_beat_avg":() => {
    return getRandomInt(700,1000)
  },
  "heart_rate_variability_avg": () => {
    return getRandomInt(10,30)
  },
  "breathing_rate_avg": () => {
    return (getRandomInt(50,300)/10).toFixed(1)
  },
  "nightly_recharge_status": () => {
    return getRandomInt(0,6)
  },
  "ans_charge": () => {
    return (getRandomInt(0,100)/10).toFixed(1)-10
  },
  "ans_charge_status": () => {
    return getRandomInt(0,5)
  },
  "hrv_samples": () => {
    let hrvSamples = {};
    let timeStart = 30;
    for (let j = 0; j < getRandomInt(3, 10); j++) {
      timeStart = timeStart + getRandomInt(1, 90);
      hrvSamples[parseSecondsToString(timeStart)] = getRandomInt(10, 30);
    }
    return hrvSamples
  },
  "breathing_samples": () => {
    let breathingSamples = {};
    var timeStart = 30;
    for (let j = 0; j < getRandomInt(3, 10); j++) {
      timeStart = timeStart + getRandomInt(1, 90);
      breathingSamples[parseSecondsToString(timeStart)] = getRandomFloat(10, 30);
    }
    return breathingSamples
  },
}

const PhysicalInfoModel = {
  id: () => {
    return getRandomInt(100, 99999)
  },
  "transaction-id": () => {
    return getRandomInt(100000, 9999999)
  },
  created: () => {
    return getRandomDateTime('YYYY-MM-DDThh:mm:ss.000Z')
  },
  "polar-user": () => {
    return "https://www.polaraccesslink/v3/users/1"
  },
  weight: () => {
    return getRandomInt(50, 100)
  },
  height: () => {
    return getRandomInt(140, 190)
  },
  "maximum-heart-rate": () => {
    return getRandomInt(110, 180)
  },
  "resting-heart-rate": () => {
    return getRandomInt(50, 90)
  },
  "aerobic-threshold": () => {
    return getRandomInt(100, 130)
  },
  "anaerobic-threshold": () => {
    return  getRandomInt(100, 130)
  },
  "vo2-max": () => {
    return getRandomInt(1, 50)
  },
  "weight-source": () => {
    return pickRandomValue(["SOURCE_MEASURED", "SOURCE_USER"])
  }
}

const SamplesModel = {
  "recording-rate": () => {
    return getRandomInt(0, 999)
  },
  "sample-type": () => {
    return getRandomInt(0, 99).toString()
  },
  data: () => {
    let sampleData = "";
    for (let i = 0; i < getRandomInt(1, 50); i++) {
      sampleData = sampleData + getRandomInt(0, 150).toString() + ",";
    }
    return sampleData.substring(0, sampleData.length - 1)
  },
}

const SleepModel = {
  "polar_user": () => {
    return "https://www.polaraccesslink/v3/users/1"
  },
  date: () => {
    return getRandomDateTime('YYYY-MM-DD')
  },
  "sleep_start_time": () => {
    return `${getRandomDateTime("YYYY-MM-DDThh:mm:ss")}${getRandomTimeZone()["STD"]}`
  },
  "sleep_end_time": (start_time) => {
    let date = start_time.substring(0,start_time.length-6)
    let timezone = start_time.substring(start_time.length-6,start_time.length)
    return `${getFurtherDateTime(date,"YYYY-MM-DDThh:mm:ss")}${timezone}`
  },
  "device_id": () => {
    return getRandomString(10).toUpperCase()
  },
  continuity: () => {
    return getRandomFloat(1, 5)
  },
  "continuity_class": () => {
    return getRandomInt(1, 5)
  },
  "light_sleep": () => {
    return getRandomInt(800, 1200)
  },
  "deep_sleep": () => {
    return getRandomInt(800, 1200)
  },
  "rem_sleep": () => {
    return getRandomInt(800, 1200)
  },
  "unrecognized_sleep_stage": () => {
    return getRandomInt(800, 1200)
  },
  "sleep_score": () => {
    return getRandomInt(50, 100)
  },
  "total_interruption_duration": () => {
    return  getRandomInt(800, 1200)
  },
  "sleep_charge": () => {
    return getRandomInt(1, 5)
  },
  "sleep_goal": () => {
    return getRandomInt(10000, 30000)
  },
  "sleep_rating": () => {
    return getRandomInt(1, 10)
  },
  "short_interruption_duration": () => {
    return getRandomInt(50, 200)
  },
  "long_interruption_duration": () => {
    return getRandomInt(300, 600)
  }, 
  "sleep_cycles": () => {
    return getRandomInt(1, 20)
  },
  "group_duration_score": () => {
    return getRandomInt(80, 100)
  },
  "group_solidity_score": () => {
    return getRandomInt(40, 100)
  },
  "group_regeneration_score": () => {
    return getRandomFloat(40, 100)
  },
  hypnogram: () => {
    let hypnogram = {};
    let timeStart = 30;
    let start = 1
    for (let j = 0; j < getRandomInt(3, 10); j++) {
      timeStart = timeStart + getRandomInt(1, 90);
      start = start + getRandomInt(1, 5);
      hypnogram[parseSecondsToString(timeStart)] = start;
    }
    return hypnogram
  },
  "heart_rate_samples": () => {
    let samples = {};
    let timeStart = 30;
    for (let j = 0; j < getRandomInt(3, 10); j++) {
      timeStart = timeStart + getRandomInt(1, 90);
      samples[parseSecondsToString(timeStart)] = getRandomInt(70, 100);
    }
    return samples
  }
}

const StepSampleModel ={
  steps:() => {
    return getRandomInt(0, 250)
  },
  time:() => {
    const hh = getRandomInt(0, 23);
    const mm = getRandomInt(0, 59);
    const ss = getRandomInt(0, 59);
    return `${hh < 10 ? '0' + hh.toString() : hh}:${mm < 10 ? '0' + mm.toString() : mm}:${ss < 10 ? '0' + ss.toString() : ss}.000`
  },

}

const UserInfoModel = {
  "polar-user-id": () => {
    return getRandomInt(1000000, 99999999)
  },
  "member-id": () => {
    return getRandomString(8)
  },
  "registration-date": () => {
    return getRandomDateTime('YYYY-MM-DDThh:mm:ss.000Z')
  },
  "first-name": () => {
    return getRandomName()
  },
  "last-name": () => {
    return getRandomName()
  },
  birthdate: () => {
    return getRandomDateTime("YYYY-MM-DD")
  },
  gender: () => {
    return pickRandomValue(["MALE", "FEMALE"])
  },
  weight: (gender) => {
    switch (gender){
      case "MALE":
        return getRandomInt(60, 100)
      default:
        return  getRandomInt(50, 90)
    }
  },
  height: (gender) => {
    switch (gender){
      case "MALE":
        return getRandomInt(150, 190)
      default:
        return  getRandomInt(140, 180)
    }
  },
  "extra-info": () => {
    return {
      value: getRandomInt(0, 6).toString(),
      index: 0,
      name: "number-of-children"
    }
  },
}

const WebhookModel = {
  id: () => {
    return getRandomString(8)
  },
  events: () => {
    return "EXERCISE, SLEEP"
  },
  url: () => {
    return "https://myapp.example.com/acl_webhook"    
  },
}

const ZoneSampleModel = {
  interval: () => {
    return 0
  },
  time: () => {
    return "string"
  },
  "activity-zones": () => {
    const hour = getRandomInt(0,10)-1
    const minutes = getRandomInt(0,60)-1
    const seconds = getRandomInt(0,60)-1
    let string = "PT"
    switch (hour){
      case 0:
        break
      default:
        string += `${hour}H`
        break
    }
    switch (minutes){
      case 0:
        break
      default:
        string += `${minutes}M`
        break
    }
    switch (seconds){
      case 0:
        break
      default:
        string += `${seconds}S`
        break
    }
    return {
      index: getRandomInt(0,9999),
      inzone: string
    }
  },
}

const ActivitiesListModel = {
  "activity-log": () => {
    return `https://www.polaraccesslink.com/v3/users/1${getRandomInt(0,100)-1}/activity-transactions/${getRandomInt(0,100)-1}/activities/${getRandomInt(0,100)-1}`
  }
}

const NotificationModel = {
  "user-id": () => {
    return getRandomInt(0,9999)
  },
  "data-type": () => {
    return pickRandomValue(["EXERCISE","ACTIVITY_SUMMARY","PHYSICAL_INFORMATION"])
  },
  url: () => {
    return `https://www.polaraccesslink.com/v3/users/${getRandomInt(0,1000)-1}/activity-transactions`
  },
}

const PhysicalInfoListModel = {
  "physical-informations": () => {
    return `https://www.polaraccesslink.com/v3/users/${getRandomInt(0,1000)-1}/physical-information-transactions/${getRandomInt(0,1000)-1}/physical-informations/${getRandomInt(0,1000)-1}`
  }
}

const TrainingExerciseModel = {
  exercises: () => {
    return `https://www.polaraccesslink.com/v3/users/${getRandomInt(0,1000)-1}/exercise-transactions/${getRandomInt(0,1000)-1}/exercises/${getRandomInt(0,1000)-1}`
  }
}

const dataModels = {
  ActivitySummary: {
    data: MOCK.getActivitySummary,
    mockup: ActivitySummaryModel
  },
  AvailableSamples: {
    data: MOCK.getAvailableSamples,
    mockup: AvailableSamplesModel
  },
  AvailableSleepTimes: {
    data: MOCK.getAvailableSleepTimes,
    mockup: AvailableSleepTimesModel
  },
  getExercise: {
    data: MOCK.getExercise,
    mockup: ExerciseModel
  },
  getExerciseSummary: {
    data: MOCK.getExerciseSummary,
    mockup: ExerciseModel
  },
  HeartRateZones: {
    data: MOCK.getHeartRateZones,
    mockup: ZoneModel
  },
  NightlyRecharge: {
    data: MOCK.getNightlyRecharge,
    mockup: NightlyRechargeModel
  },
  PhysicalInfo: {
    data: MOCK.getPhysicalInfo,
    mockup: PhysicalInfoModel
  },
  Samples: {
    data: MOCK.getSamples,
    mockup: SamplesModel
  },
  Sleep: {
    data: MOCK.getSleep,
    mockup: SleepModel
  },
  StepSample: {
    data: MOCK.getStepSample,
    mockup: StepSampleModel
  },
  UserInfo: {
    data: MOCK.getUserInfo,
    mockup: UserInfoModel
  },
  Webhook: {
    data: MOCK.getWebhook,
    mockup: WebhookModel
  },
  ZoneSample: {
    data: MOCK.getZoneSample,
    mockup: ZoneSampleModel
  },
  ActivitiesList: {
    data: MOCK.listActivities,
    mockup: ActivitiesListModel
  },
  ExerciseList: {
    data: MOCK.listExercises,
    mockup: ExerciseModel
  },
  NightlyRechargeList: {
    data: MOCK.listNightlyRecharge,
    mockup: NightlyRechargeModel
  },
  NotificationsList: {
    data: MOCK.listNotifications,
    mockup: NotificationModel
  },
  PhysicalInfoList: {
    data: MOCK.listPhysicalInfo,
    mockup: PhysicalInfoListModel
  },
  SleepList: {
    data: MOCK.listSleep,
    mockup: SleepModel
  },
  TrainingExerciseList: {
    data: MOCK.listTrainingExercises,
    mockup: TrainingExerciseModel
  }
};

export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getActivitySummaryMockupData(dataType, dataModel, dataDate) {
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
  [
    "id",
    "polar-user",
    "transaction-id",
    "date",
    "created",
    "calories",
    "active-calories",
    "duration",
    "active-steps"
  ].forEach((key, i)=>{
    switch(key){
      default:
        mockupData[key] = mockupModel[key]()
        break
    }
  })

  
  return mockupData;
}

export function getAvailableSamplesMockupData(dataType, dataModel, dataDate) {
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
  [
    "samples"
  ].forEach((key, i)=>{
    switch(key){
      case "samples":
        mockupData[key] = []
        mockupData[key].push(mockupModel[key]())
        break
      default:
        mockupData[key] = mockupModel[key]()
        break
    }
  })

  
  return mockupData;
}

export function getAvailableSleepTimesMockupData(dataType, dataModel, dataDate) {
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
  for (var index = 0; index<mockupData["available"].length;index++){
    [
      "date",
      "start_time",
      "end_time"
    ].forEach((key, i)=>{
      switch(key){
        case "end_time":
          mockupData["available"][index][key] = mockupModel[key](mockupData["available"][index]["start_time"])
          break
        default:
          mockupData["available"][index][key] = mockupModel[key]()
          break
      }
    })
  }


  
  return mockupData;
}

export function getExerciseMockupData(dataType, dataModel, dataDate) {
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
  [
    "id",
    "polar_user",
    "device",
    "device_id",
    "start_time",
    "start_time_utc_offset",
    "upload_time",
    "duration",
    "calories",
    "distance",
    "heart_rate",
    "training_load",
    "sport",
    "has_route",
    "club_id",
    "club_name",
    "detailed_sport_info",
    "fat_percentage",
    "carbohydrate_percentage",
    "protein_percentage"
  ].forEach((key, i)=>{
    switch(dataModel){
      case "ExerciseList":
        for (var index = 0; index<mockupData["data"].length; index++){
          switch(key){
            case "carbohydrate_percentage":
              mockupData["data"][index][key] = mockupModel[key](mockupData["data"][index]["fat_percentage"])
              break
            case "protein_percentage":
              mockupData["data"][index][key] = mockupModel[key](mockupData["data"][index]["fat_percentage"],mockupData["data"][index]["carbohydrate_percentage"])
              break
            case "upload_time":
              mockupData["data"][index][key] = mockupModel[key](mockupData["data"][index]["start_time"])
              break
            default:
              mockupData["data"][index][key] = mockupModel[key]()
              break
          }
        }
        break
      default:
        switch(key){
          case "carbohydrate_percentage":
            mockupData[key] = mockupModel[key](mockupData["fat_percentage"])
            break
          case "protein_percentage":
            mockupData[key] = mockupModel[key](mockupData["fat_percentage"],mockupData["carbohydrate_percentage"])
            break
          case "upload_time":
            mockupData[key] = mockupModel[key](mockupData["start_time"])
            break
          default:
            mockupData[key] = mockupModel[key]()
            break
        }
        break
    }
    
  })


  
  return mockupData;
}

export function getExerciseSummaryMockupData(dataType, dataModel, dataDate) {
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
  [
    "id",
    "polar_user",
    "transaction-id", 
    "device",
    "device_id",
    "start_time",
    "start_time_utc_offset",
    "upload_time",
    "duration",
    "calories",
    "distance",
    "heart_rate",
    "training_load",
    "sport",
    "has_route",
    "club_id",
    "club_name",
    "detailed_sport_info",
    "fat_percentage",
    "carbohydrate_percentage",
    "protein_percentage"
  ].forEach((key, i)=>{
    switch(key){
      case "carbohydrate_percentage":
        mockupData[key] = mockupModel[key](mockupData["fat_percentage"])
        break
      case "protein_percentage":
        mockupData[key] = mockupModel[key](mockupData["fat_percentage"],mockupData["carbohydrate_percentage"])
        break
      case "upload_time":
        mockupData[key] = mockupModel[key](mockupData["start_time"])
        break
      default:
        mockupData[key] = mockupModel[key]()
        break
    }
  })


  
  return mockupData;
}

export function getHeartRateZonesMockupData(dataType, dataModel, dataDate) {
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
  for (var index = 0; index< mockupData["zone"].length; index++){
    [
      "index",
      "lower-limit",
      "upper-limit",
      "in-zone"
    ].forEach((key, i)=>{
      switch(key){
        default:
          mockupData["zone"][index][key] = mockupModel[key]()
          break
      }
    })
  }



  
  return mockupData;
}

export function getNightlyRechargeMockupData(dataType, dataModel, dataDate) {
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

  [
    "polar_user",
    "date",
    "heart_rate_avg",
    "beat_to_beat_avg",
    "heart_rate_variability_avg",
    "breathing_rate_avg",
    "nightly_recharge_status",
    "ans_charge",
    "ans_charge_status",
    "hrv_samples",
    "breathing_samples"
  ].forEach((key, i)=>{
    switch(dataModel){
      case "NightlyRechargeList":
        for (var index=0; index<mockupData["recharges"].length;index++){
          switch(key){
            default:
              mockupData["recharges"][index][key] = mockupModel[key]()
              break
          }
          break
        }
      default:
        switch(key){
          default:
            mockupData[key] = mockupModel[key]()
            break
        }
        break
    }
  })


  
  return mockupData;
}

export function getPhysicalInfoMockupData(dataType, dataModel, dataDate) {
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

  [
    "id",
    "transaction-id",
    "created",
    "polar-user",
    "weight",
    "height",
    "maximum-heart-rate",
    "resting-heart-rate",
    "aerobic-threshold",
    "anaerobic-threshold",
    "vo2-max",
    "weight-source"
  ].forEach((key, i)=>{
    switch(key){
      default:
        mockupData[key] = mockupModel[key]()
        break
    }
  })


  
  return mockupData;
}

export function getSamplesMockupData(dataType, dataModel, dataDate) {
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

  [
    "recording-rate",
    "sample-type",
    "data"
  ].forEach((key, i)=>{
    switch(key){
      default:
        mockupData[key] = mockupModel[key]()
        break
    }
  })


  
  return mockupData;
}

export function getSleepMockupData(dataType, dataModel, dataDate) {
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

  [
    "polar_user",
    "date",
    "sleep_start_time",
    "sleep_end_time",
    "device_id",
    "continuity",
    "continuity_class",
    "light_sleep",
    "deep_sleep",
    "rem_sleep",
    "unrecognized_sleep_stage",
    "sleep_score",
    "total_interruption_duration",
    "sleep_charge",
    "sleep_goal",
    "sleep_rating",
    "short_interruption_duration",
    "long_interruption_duration", 
    "sleep_cycles",
    "group_duration_score",
    "group_solidity_score",
    "group_regeneration_score",
    "hypnogram",
    "heart_rate_samples"
  ].forEach((key, i)=>{
    switch(dataModel){
      case "SleepList":
        for (var index = 0; index< mockupData["nights"].length; index++){
          switch(key){
            case "sleep_end_time":
              mockupData["nights"][index][key] = mockupModel[key](mockupData["nights"][index]["sleep_start_time"])
              break
            default:
              mockupData["nights"][index][key] = mockupModel[key]()
              break
          }
        }
        break
      default:
        switch(key){
          case "sleep_end_time":
            mockupData[key] = mockupModel[key](mockupData["sleep_start_time"])
            break
          default:
            mockupData[key] = mockupModel[key]()
            break
        }
        break
    }
  })


  
  return mockupData;
}

export function getStepSampleMockupData(dataType, dataModel, dataDate) {
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

  for (var index=0; index<mockupData["samples"].length; index++){
    [
      "steps",
      "time"
    ].forEach((key, i)=>{
      switch(key){
        default:
          mockupData["samples"][index][key] = mockupModel[key]()
          break
      }
    })
  }




  
  return mockupData;
}

export function getUserInfoMockupData(dataType, dataModel, dataDate) {
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

  [
    "polar-user-id",
    "member-id",
    "registration-date",
    "first-name",
    "last-name",
    "birthdate",
    "gender",
    "weight",
    "height",
    "extra-info"
  ].forEach((key, i)=>{
    switch(key){
      case "height":
      case "weight":
        mockupData[key] = mockupModel[key](mockupData["gender"])
        break
      default:
        mockupData[key] = mockupModel[key]()
        break
    }
  })




  
  return mockupData;
}

export function getWebhookMockupData(dataType, dataModel, dataDate) {
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

  [
    "id",
    "events",
    "url"
  ].forEach((key, i)=>{
    switch(key){
      default:
        mockupData["data"][key] = mockupModel[key]()
        break
    }
  })




  
  return mockupData;
}

export function getZoneSampleMockupData(dataType, dataModel, dataDate) {
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
  mockupData["interval"] = mockupModel["interval"]()
  for (var index=0; index<mockupData["samples"].length;index++){
    mockupData["samples"][index]["activity-zones"] = [];
    [
      "activity-zones",
      "time"
    ].forEach((key, i)=>{
      switch(key){
        case "activity-zones":
          mockupData["samples"][index][key].push(mockupModel[key]())
          break
        default:
          mockupData["samples"][index][key] = mockupModel[key]()
          break
      }
    })
  }




  
  return mockupData;
}

export function getActivitiesListMockupData(dataType, dataModel, dataDate) {
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
  mockupData["activity-log"]  = [];
  [
    "activity-log"
  ].forEach((key, i)=>{
    switch(key){
      default:
        mockupData[key].push(mockupModel[key]())
        break
    }
  })




  
  return mockupData;
}

export function getNotificationsListMockupData(dataType, dataModel, dataDate) {
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
  for(var index = 0; index< mockupData["available-user-data"].length; index++){
    [
      "user-id",
      "data-type",
      "url"
    ].forEach((key, i)=>{
      switch(key){
        default:
          mockupData["available-user-data"][index][key] = mockupModel[key]()
          break
      }
    })
  }
  




  
  return mockupData;
}

export function getPhysicalInfoListMockupData(dataType, dataModel, dataDate) {
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
  mockupData["physical-informations"] = [mockupData["physical-informations"][0]]
  for(var index = 0; index< mockupData["physical-informations"].length; index++){
    [
      "physical-informations"
    ].forEach((key, i)=>{
      switch(key){
        default:
          mockupData[key][index] = (mockupModel[key]())
          break
      }
    })
  }
  return mockupData;
}

export function getTrainingExerciseListMockupData(dataType, dataModel, dataDate) {
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
  mockupData["exercises"] = [mockupData["exercises"][0]]
  for(var index = 0; index< mockupData["exercises"].length; index++){
    [
      "exercises"
    ].forEach((key, i)=>{
      switch(key){
        default:
          mockupData[key][index] = (mockupModel[key]())
          break
      }
    })
  }
  return mockupData;
}