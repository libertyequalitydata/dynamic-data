import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/ios-health-data";

const CharacteristicsModel = {
  biologicalSex: () => {
    // switch(getRandomInt(1,4)-1){
    //   case 0:
    //     return "notSet"
    //   case 1:
    //     return "female"
    //   case 2:
    //     return "male"
    //   case 3:
    //     return "other"
    // }
    return getRandomInt(0,4)-1
  },
  bloodType: () => {
    // switch(getRandomInt(1,9)-1){
    //   case 0:
    //     return "notSet"
    //   case 1:
    //     return "aPositive"
    //   case 2:
    //     return "aNegative"
    //   case 3:
    //     return "bPositive"
    //   case 4:
    //     return "bNegative"
    //   case 5:
    //     return "abPositive"
    //   case 6:
    //     return "abNegative"
    //   case 7:
    //     return "oPositive"
    //   case 8:
    //     return "oNegative"    
    // }
    return getRandomInt(0,9)-1
  },
  dateOfBirthComponents: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 24)-1, getRandomInt(0, 60)-1, getRandomInt(0, 60)-1, getRandomInt(0, 999)-1);
    function isLeapYear() {
      if (finalDate.getMonth()===1){
        let x = new Date(finalDate.getFullYear(), finalDate.getMonth()+1,0)
        if (x.getDate()===29){
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    }
    function getQuarter(){
      let x = finalDate.getMonth()/4
      // console.log(x)
      return (Math.ceil(finalDate.getMonth()/4));
    }
    return {
      era: 0,
      year: finalDate.getFullYear(),
      yearForWeekOfYear: finalDate.getFullYear(),
      quarter: getQuarter(),
      month: finalDate.getMonth() + 1,
      isLeapMonth: isLeapYear(),
      weekday: 0,
      weekdayOrdinal: 0,
      weekOfMonth: 0,
      weekOfYear: 0,
      day: 0,
      hour: finalDate.getHours(),
      minute: finalDate.getMinutes(),
      second: finalDate.getSeconds(),
      nanosecond: (finalDate.getMilliseconds()*1000000)+getRandomInt(0,1000000)-1,
    }
  },
  fitzpatrickSkinType: () => {
    // switch(getRandomInt(1,7)-1){
    //   case 0:
    //     return "notSet"
    //   case 1:
    //     return "I"
    //   case 2:
    //     return "II"
    //   case 3:
    //     return "III"
    //   case 4:
    //     return "IV"
    //   case 5:
    //     return "V"
    //   case 6:
    //     return "VI"
    // }
    return getRandomInt(0,7)-1
  },
  wheelchairUse: () => {
    // switch(getRandomInt(1,3)-1){
    //   case 0:
    //     return "notSet"
    //   case 1:
    //     return "no"
    //   case 2:
    //     return "yes"
    // }
    return getRandomInt(0,3)-1
  },
}

const HKActivitySummaryModel = {
  activityMoveMode: () => {
    // switch(getRandomInt(1,2)){
    //   case 1:
    //     return "activeEnergy"
    //   case 2:
    //     return "appleMoveTime"    
    // }
    return getRandomInt(0,2)
  },
  activeEnergyBurned: () => {
    function energyUnits() {
      let energyUnits = ["joule","jouleUnit","kilocalorie","largeCalorie","smallCalorie","calorie"]
      let prefix = ["none","femto","pico","nano","micro","milli","centi","deci","deca","hecto","kilo","mega","giga","tera"]
      let x = getRandomInt(0,energyUnits.length)
      switch(energyUnits[x]){
        case "jouleUnit":
          let y = getRandomInt(0,prefix.length)
          switch (prefix[y]){
            case "none":
              return energyUnits[x]
            default:
              return prefix[y]+"joule"
          }
        default:
          return energyUnits[x]
      }
    }
    return {
      unit: energyUnits(),
      doubleValue: (getRandomInt(0,9999999999999999999999)-1)/10000
    }
  },
  activeEnergyBurnedGoal: () => {
    function energyUnits() {
      let energyUnits = ["joule","jouleUnit","kilocalorie","largeCalorie","smallCalorie","calorie"]
      let prefix = ["none","femto","pico","nano","micro","milli","centi","deci","deca","hecto","kilo","mega","giga","tera"]
      let x = getRandomInt(0,energyUnits.length)
      switch(energyUnits[x]){
        case "jouleUnit":
          let y = getRandomInt(0,prefix.length)
          switch (prefix[y]){
            case "none":
              return energyUnits[x]
            default:
              return prefix[y]+"joule"
          }
        default:
          return energyUnits[x]
      }
    }
    return {
      unit: energyUnits(),
      doubleValue: (getRandomInt(0,9999999999999999999999)-1)/10000
    }
  },
  appleMoveTime: () => {
    function timeUnits() {
      let timeUnits = ["day","hour","minute","second","secondUnit"]
      let prefix = ["none","femto","pico","nano","micro","milli","centi","deci","deca","hecto","kilo","mega","giga","tera"]
      let x = getRandomInt(0,timeUnits.length)
      switch(timeUnits[x]){
        case "jouleUnit":
          let y = getRandomInt(0,prefix.length)
          switch (prefix[y]){
            case "none":
              return energyUnits[x]
            default:
              return prefix[y]+"second"
          }
        default:
          return timeUnits[x]
      }
    }
    return {
      unit: timeUnits(),
      doubleValue: (getRandomInt(0,999999)-1)
    }
  },
  appleMoveTimeGoal: () => {
    function timeUnits() {
      let timeUnits = ["day","hour","minute","second","secondUnit"]
      let prefix = ["none","femto","pico","nano","micro","milli","centi","deci","deca","hecto","kilo","mega","giga","tera"]
      let x = getRandomInt(0,timeUnits.length)
      switch(timeUnits[x]){
        case "jouleUnit":
          let y = getRandomInt(0,prefix.length)
          switch (prefix[y]){
            case "none":
              return energyUnits[x]
            default:
              return prefix[y]+"second"
          }
        default:
          return timeUnits[x]
      }
    }
    return {
      unit: timeUnits(),
      doubleValue: (getRandomInt(0,999999)-1)
    }
  },
  appleExerciseTime: () => {
    function timeUnits() {
      let timeUnits = ["day","hour","minute","second","secondUnit"]
      let prefix = ["none","femto","pico","nano","micro","milli","centi","deci","deca","hecto","kilo","mega","giga","tera"]
      let x = getRandomInt(0,timeUnits.length)
      switch(timeUnits[x]){
        case "jouleUnit":
          let y = getRandomInt(0,prefix.length)
          switch (prefix[y]){
            case "none":
              return energyUnits[x]
            default:
              return prefix[y]+"second"
          }
        default:
          return timeUnits[x]
      }
    }
    return {
      unit: timeUnits(),
      doubleValue: (getRandomInt(0,999999)-1)
    }
  },
  appleExerciseTimeGoal: () => {
    function timeUnits() {
      let timeUnits = ["day","hour","minute","second","secondUnit"]
      let prefix = ["none","femto","pico","nano","micro","milli","centi","deci","deca","hecto","kilo","mega","giga","tera"]
      let x = getRandomInt(0,timeUnits.length)
      switch(timeUnits[x]){
        case "jouleUnit":
          let y = getRandomInt(0,prefix.length)
          switch (prefix[y]){
            case "none":
              return energyUnits[x]
            default:
              return prefix[y]+"second"
          }
        default:
          return timeUnits[x]
      }
    }
    return {
      unit: timeUnits(),
      doubleValue: (getRandomInt(0,999999)-1)
    }
  },
  appleStandHours: () => {
    return {
      unit: "count",
      doubleValue: (getRandomInt(0,999999)-1)
    }
  },
  appleStandHoursGoal: () => {
    return {
      unit: "count",
      doubleValue: (getRandomInt(0,999999)-1)
    }
  },
}

const HKAudiogramSampleModel = {
  frequency: () => {
    return {
      unit: "hertz",
      doubleValue: (getRandomInt(0,9999999999999999999999)-1)/10000
    }
  },
  leftEarSensitivity: () => {
    return {
      unit: "dB",
      doubleValue: (getRandomInt(0,9999999999999999999999)-1)/10000
    }
  },
  rightEarSensitivity: () => {
    return {
      unit: "dB",
      doubleValue: (getRandomInt(0,9999999999999999999999)-1)/10000
    }
  },
}

const HKClinicalRecordModel = {
  uuid: () => {
    let characters = "0123456789ABCDEF"
    let string = ""
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      if (i==7||i==11||i==15||i==19){
        string+="-"
      }
    }
    return string
  },
  metadata: () => {
    return []
  },
  device: () => {
    return {
      udiDeviceIdentifier: "",
      firmwareVersion: "",
      hardwareVersion: "",
      localIdentifier: "",
      manufacturer: "",
      model: "",
      name: "",
      softwareVersion: "",
    }
  },
  sourceRevision: () => {
    return {
      source: {
        bundleIdentifier: "E621E1F8-C36C-495A-93FC-0C247A3E6E5F",
        name: "Dylan's iPhone"
      },
      version: "9.0",
      operatingSystemVersion: {
        majorVersion : 10,
        minorVersion : 9,
        patchVersion : 3
      },
      productType: "watch2,4",
    }
  },
  startDate: () => {
    return "2017-07-03T12:47:53+02:00"
  },
  endDate: () => {
    return "2017-07-03T12:47:53+02:00"
  },
  hasUndeterminedDuration: () => {
    return false
  },
  sampleType: () => {
    return {
      aggregationStyle: "cumulative"
    }
  },
  clinicalType: () => {
    let records = ["allergyRecord","conditionRecord","immunizationRecord","labResultRecord","medicationRecord","procedureRecord","vitalSignRecord"]
    return records[getRandomInt(0,records.length)]
  },
  displayName: () => {
    return ""
  },
  fhirResource: () => {
    return {
      identifier: "",
      fhirVersion: "",
      resourceType: "",
      sourceURL: "",
      data: {
        "asserter": {
            "display": "Juan Chavez",
            "reference": "Practitioner/20"
        },
        "category": {
            "coding": [
                {
                    "code": "diagnosis",
                    "system": "http://hl7.org/fhir/condition-category"
                }
            ]
        },
        "clinicalStatus": "active",
        "code": {
            "coding": [
                {
                    "code": "367498001",
                    "display": "Seasonal allergic rhinitis",
                    "system": "http://snomed.info/sct"
                }
            ],
            "text": "Seasonal Allergic Rhinitis"
        },
        "dateRecorded": "2012-01-02",
        "id": "2",
        "notes": "Worse when visiting family in NC during the spring",
        "onsetDateTime": "1994-05-12",
        "resourceType": "Condition",
        "verificationStatus": "confirmed"
    }
    }
  },
}

const HKElectrocardiogramModel = {
  classification:() =>{
    // switch (getRandomInt(0,8)-1){
    //   case 0:
    //     return "sinusRhythm"
    //   case 1:
    //     return "atrialFibrillation"
    //   case 2:
    //     return "inconclusiveHighHeartRate"
    //   case 3:
    //     return "inconclusiveLowHeartRate"
    //   case 4:
    //     return "inconclusivePoorReading"
    //   case 5:
    //     return "inconclusiveOther"
    //   case 6:
    //     return "unrecognized"
    //   case 7:
    //     return "notSet"
    // }
    let x = getRandomInt(0,8)-1
    switch (x){
      case 7:
        x = 100
        break
    }
    return x
  },
  averageHeartRate:() =>{
    return {
      unit: "bpm",
      doubleValue: (getRandomInt(0,9999999999999999999999)-1)/10000
    }
  },
  symptomsStatus:() =>{
    // switch(getRandomInt(1,3)){
    //   case 1:
    //     return "none"
    //   case 2: 
    //     return "present"
    //   case 3:
    //     return "notSet"
    // }
    return getRandomInt(0,3)-1
  },
  numberOfVoltageMeasurements:() =>{
    return 0
  },
  samplingFrequncy:() =>{
    return {
      unit: "hz",
      doubleValue: (getRandomInt(0,9999999999999999999999)-1)/10000
    }
  },
}

const HKWorkoutConfigurationModel = {
  activityType: () => {
    let intArray = [2,7,18,22,49,1,3,5,6,10,75,23,25,27,36,41,42,51,33,62,80,52,37,70,71,13,74,59,16,20,50,11,73,63,64,44,68,69,76,58,77,78,57,29,66,4,79,34,43,47,48,9,17,19,21,24,26,32,60,12,61,40,67,39,31,35,38,45,46,53,54,55,8,65,28,72,56,3000]
    return intArray[getRandomInt(0,intArray.length-1)]
  },
  locationType: () => {
    return getRandomInt(0,3)
  },
  swimmingLocationType: () => {
    return getRandomInt(0,3)-1
  },
  lapLength: () => {
    return {
      unit: "count",
      doubleValue: (getRandomInt(0,999999)-1)
    }
  },
}

const HKWorkoutSessionModel = {
  endDate: () => {
    return "2017-07-03T12:47:53+02:00"
  },
  startDate: () => {
    return "2017-07-03T12:47:53+02:00"
  },
  state: () => {
    return getRandomInt(0,6)
  },
}

const HKWorkoutRouteModel = {
  uuid: () => {
    let characters = "0123456789ABCDEF"
    let string = ""
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      if (i==7||i==11||i==15||i==19){
        string+="-"
      }
    }
    return string
  },
  metadata: () => {
    return []
  },
  device: () => {
    return {
      udiDeviceIdentifier: "",
      firmwareVersion: "",
      hardwareVersion: "",
      localIdentifier: "",
      manufacturer: "",
      model: "",
      name: "",
      softwareVersion: "",
    }
  },
  sourceRevision: () => {
    return {
      source: {
        bundleIdentifier: "E621E1F8-C36C-495A-93FC-0C247A3E6E5F",
        name: "Dylan's iPhone"
      },
      version: "9.0",
      operatingSystemVersion: {
        majorVersion : 10,
        minorVersion : 9,
        patchVersion : 3
      },
      productType: "watch2,4",
    }
  },
  startDate: () => {
    return "2017-07-03T12:47:53+02:00"
  },
  endDate: () => {
    return "2017-07-03T12:47:53+02:00"
  },
  hasUndeterminedDuration: () => {
    return false
  },
  sampleType: () => {
    return {
      aggregationStyle: "cumulative"
    }
  },
  count: () => {
    return 0
  },
}

const LocationsModel = {
  coordinate: ()=>{
    return {
      latitude: 0.0,
      longitude: 0.0,
    }
  },
  altitude: ()=>{
    return 0.0
  },
  ellipsoidalAltitude: ()=>{
    return 0.0
  },
  floor: ()=>{
    return {
      level: 0
    }
  },
  horizontalAccuracy: ()=>{
    return 0.0
  },
  verticalAccuracy: ()=>{
    return 0.0
  },
  timestamp: ()=>{
    return "2017-07-03T12:47:53+02:00"
  },
  sourceInformation: ()=>{
    return {
      isProuducedByAccessory: false,
      isSimulatedBySoftware: false,
    }
  },
}

const HKWorkoutModel = {
  uuid: () => {
    let characters = "0123456789ABCDEF"
    let string = ""
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      if (i==7||i==11||i==15||i==19){
        string+="-"
      }
    }
    return string
  },
  metadata: () => {
    return []
  },
  device: () => {
    return {
      udiDeviceIdentifier: "",
      firmwareVersion: "",
      hardwareVersion: "",
      localIdentifier: "",
      manufacturer: "",
      model: "",
      name: "",
      softwareVersion: "",
    }
  },
  sourceRevision: () => {
    return {
      source: {
        bundleIdentifier: "E621E1F8-C36C-495A-93FC-0C247A3E6E5F",
        name: "Dylan's iPhone"
      },
      version: "9.0",
      operatingSystemVersion: {
        majorVersion : 10,
        minorVersion : 9,
        patchVersion : 3
      },
      productType: "watch2,4",
    }
  },
  startDate: () => {
    return "2017-07-03T12:47:53+02:00"
  },
  endDate: () => {
    return "2017-07-03T12:47:53+02:00"
  },
  hasUndeterminedDuration: () => {
    return false
  },
  sampleType: () => {
    return {
      aggregationStyle: "cumulative"
    }
  },
  duration: () => {
    return 0.0
  },
  totalDistance: () => {
    return {
      unit: "km",
      doubleValue: 0.0
    }
  },
  totalEnergyBurned: () => {
    return {
      unit: "kcal",
      doubleValue: 0.0
    }
  },
  workoutActivityType: () => {
    let intArray = [2,7,18,22,49,1,3,5,6,10,75,23,25,27,36,41,42,51,33,62,80,52,37,70,71,13,74,59,16,20,50,11,73,63,64,44,68,69,76,58,77,78,57,29,66,4,79,34,43,47,48,9,17,19,21,24,26,32,60,12,61,40,67,39,31,35,38,45,46,53,54,55,8,65,28,72,56,3000]
    return intArray[getRandomInt(0,intArray.length-1)]
  },
  totalFlightsClimbed: () => {
    return null
  },
  totalSwimmingStrokeCount: () => {
    return null
  },
}

const WorkoutEventsModel = {
  dateInterval : () => {
    return {
      start: "2017-07-03T12:47:53+02:00",
      end: "2017-07-03T12:47:53+02:00",
      duration: 0.0,
    }
  },
  type : () => {
    return getRandomInt(0,8)
  },
  metadata : () => {
    return []
  }
}

const dataModels = {
  Characteristics: {
    data: MOCK.Characteristics,
    mockup: CharacteristicsModel
  },
  HKActivitySummary: {
    data: MOCK.HKActivitySummary,
    mockup: HKActivitySummaryModel
  },
  HKAudiogramSample: {
    data: MOCK.HKAudiogramSample,
    mockup: HKAudiogramSampleModel
  },
  HKClinicalRecord: {
    data: MOCK.HKClinicalRecord,
    mockup: HKClinicalRecordModel
  },
  HKElectrocardiogram: {
    data: MOCK.HKElectrocardiogram,
    mockup: HKElectrocardiogramModel
  },
  HKWorkoutConfiguration: {
    data: MOCK.HKWorkoutConfiguration,
    mockup: HKWorkoutConfigurationModel
  },
  HKWorkoutSession: {
    data: MOCK.HKWorkoutSession,
    mockup: HKWorkoutSessionModel
  },
  HKWorkoutRoute : {
    data: MOCK.HKWorkoutRoute,
    mockup: HKWorkoutRouteModel
  },
  HKWorkout : {
    data: MOCK.HKWorkout,
    mockup: HKWorkoutModel
  }
};




export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getCharacteristics(dataType, dataModel, dataDate) {
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
      "biologicalSex",
      "bloodType",
      "dateOfBirthComponents",
      "fitzpatrickSkinType",
      "wheelchairUse",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
  return mockupData;
}

export function getHKActivitySummary(dataType, dataModel, dataDate) {
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
      "activityMoveMode",
      "activeEnergyBurned",
      "activeEnergyBurnedGoal",
      "appleMoveTime",
      "appleMoveTimeGoal",
      "appleExerciseTime",
      "appleExerciseTimeGoal",
      "appleStandHours",
      "appleStandHoursGoal"
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
  return mockupData;
}

export function getHKAudiogramSample(dataType, dataModel, dataDate) {
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
  mockupData["sensitivityPoints"].forEach((obj)=>{
    [
      "frequency",
      "leftEarSensitivity",
      "rightEarSensitivity",
    ].forEach((key, i) => {
      switch (key) {
        default:
          obj[key] = mockupModel[key]();
          break;
      }
    });
  })

  return mockupData;
}

export function getHKClinicalRecord(dataType, dataModel, dataDate) {
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
      "uuid",
      "metadata",
      "device",
      "sourceRevision",
      "startDate",
      "endDate",
      "hasUndeterminedDuration",
      "sampleType",
      "clinicalType",
      "displayName",
      "fhirResource",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
  return mockupData;
}

export function getHKElectrocardiogram(dataType, dataModel, dataDate) {
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
      "classification",
      "averageHeartRate",
      "symptomsStatus",
      "numberOfVoltageMeasurements",
      "samplingFrequncy",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
  return mockupData;
}

export function getHKWorkoutConfiguration(dataType, dataModel, dataDate) {
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
      "activityType",
      "locationType",
      "swimmingLocationType",
      "lapLength",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
  return mockupData;
}

export function getHKWorkoutSession(dataType, dataModel, dataDate) {
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
      "endDate",
      "startDate",
      "state",
      "workoutConfiguration",
    ].forEach((key, i) => {
      switch (key) {
        case "workoutConfiguration":
          mockupData[key] = getHKWorkoutConfiguration(
            "SYNC",
            "HKWorkoutConfiguration",
            "2022-04-03"
          )
          break;
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
  return mockupData;
}

export function getHKWorkoutRoute(dataType, dataModel, dataDate) {
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
      "uuid",
      "metadata",
      "device",
      "sourceRevision",
      "endDate",
      "startDate",
      "hasUndeterminedDuration",
      "sampleType",
      "count",
      "locationsOrNil",
    ].forEach((key, i) => {
      switch (key) {
        case "locationsOrNil":
          mockupData["locationsOrNil"].forEach((location)=>{
            [
              "coordinate",
              "altitude",
              "ellipsoidalAltitude",
              "floor",
              "horizontalAccuracy",
              "verticalAccuracy",
              "timestamp",
              "sourceInformation",
            ].forEach((key2, i) => {
              switch(key2){
                default:
                  location[key2] = LocationsModel[key2]();
                  break;
              }
            })
          })
          break;
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
  return mockupData;
}

export function getHKWorkout(dataType, dataModel, dataDate) {
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
      "uuid",
      "metadata",
      "device",
      "sourceRevision",
      "endDate",
      "startDate",
      "hasUndeterminedDuration",
      "sampleType",
      "duration",
      "totalDistance",
      "totalEnergyBurned",
      "workoutActivityType",
      "workoutEvents",
      "totalFlightsClimbed",
      "totalSwimmingStrokeCount",
    ].forEach((key, i) => {
      switch (key) {
        case "workoutEvents":
          mockupData[key].forEach((workoutEvent)=>{
            [
              "dateInterval",
              "type",
              "metadata",
            ].forEach((key2, i) => {
              workoutEvent[key2] = WorkoutEventsModel[key2]()
            })
          })
          break;
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
  return mockupData;
}