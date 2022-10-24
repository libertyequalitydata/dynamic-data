import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
  pickRandomValue,
  getRandomTimeZone,
  getFurtherDateTime,
  getRandomDateTime,
  getRandomName,
  getRandBool
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/whoop-data";
// https://app.swaggerhub.com/apis/DovOps/whoop-unofficial-api/2.0.1#/auth

const SportsIDs = [
  {
    id: -1,
    sport: "Activity"
  },
  {
    id: 0,
    sport: "Running"
  },
  {
    id: 1,
    sport: "Cycling"
  },
  {
    id: 16,
    sport: "Baseball"
  },
  {
    id: 17,
    sport: "Basketball"
  },
  {
    id: 18,
    sport: "Rowing"
  },
  {
    id: 19,
    sport: "Fencing"
  },
  {
    id: 20,
    sport: "Field Hockey"
  },
  {
    id: 21,
    sport: "Football"
  },
  {
    id: 22,
    sport: "Golf"
  },
  {
    id: 24,
    sport: "Ice Hockey"
  },
  {
    id: 25,
    sport: "Lacrosse"
  },
  {
    id: 27,
    sport: "Rugby"
  },
  {
    id: 28,
    sport: "Sailing"
  },
  {
    id: 29,
    sport: "Skiing"
  },
  {
    id: 30,
    sport: "Soccer"
  },
  {
    id: 31,
    sport: "Softball"
  },
  {
    id: 32,
    sport: "Squash"
  },
  {
    id: 33,
    sport: "Swimming"
  },
  {
    id: 34,
    sport: "Tennis"
  },
  {
    id: 35,
    sport: "Track & Field"
  },
  {
    id: 36,
    sport: "Volleyball"
  },
  {
    id: 37,
    sport: "Water Polo"
  },
  {
    id: 38,
    sport: "Wrestling"
  },
  {
    id: 39,
    sport: "Boxing"
  },
  {
    id: 42,
    sport: "Dance"
  },
  {
    id: 43,
    sport: "Pilates"
  },
  {
    id: 44,
    sport: "Yoga"
  },
  {
    id: 45,
    sport: "Weightlifting"
  },
  {
    id: 47,
    sport: "Cross Country Skiing"
  },
  {
    id: 48,
    sport: "Functional Fitness"
  },
  {
    id: 49,
    sport: "Duathlon"
  },
  {
    id: 51,
    sport: "Gymnastics"
  },
  {
    id: 52,
    sport: "Hiking/Rucking"
  },
  {
    id: 53,
    sport: "Horseback Riding"
  },
  {
    id: 55,
    sport: "Kayaking"
  },
  {
    id: 56,
    sport: "Martial Arts"
  },
  {
    id: 57,
    sport: "Mountain Biking"
  },
  {
    id: 59,
    sport: "Powerlifting"
  },
  {
    id: 60,
    sport: "Rock Climbing"
  },
  {
    id: 61,
    sport: "Paddleboarding"
  },
  {
    id: 62,
    sport: "Triathlon"
  },
  {
    id: 63,
    sport: "Walking"
  },
  {
    id: 64,
    sport: "Surfing"
  },
  {
    id: 65,
    sport: "Elliptical"
  },
  {
    id: 66,
    sport: "Stairmaster"
  },
  {
    id: 70,
    sport: "Meditation"
  },
  {
    id: 71,
    sport: "Other"
  },
  {
    id: 73,
    sport: "Diving"
  },
  {
    id: 74,
    sport: "Operations - Tactical"
  },
  {
    id: 75,
    sport: "Operations - Medical"
  },
  {
    id: 76,
    sport: "Operations - Flying"
  },
  {
    id: 77,
    sport: "Operations - Water"
  },
  {
    id: 82,
    sport: "Ultimate"
  },
  {
    id: 83,
    sport: "Climber"
  },
  {
    id: 84,
    sport: "Jumping Rope"
  },
  {
    id: 85,
    sport: "Australian Football"
  },
  {
    id: 86,
    sport: "Skateboarding"
  },
  {
    id: 87,
    sport: "Coaching"
  },
  {
    id: 88,
    sport: "Ice Bath"
  },
  {
    id: 89,
    sport: "Commuting"
  },
  {
    id: 90,
    sport: "Gaming"
  },
  {
    id: 91,
    sport: "Snowboarding"
  },
  {
    id: 92,
    sport: "Motocross"
  },
  {
    id: 93,
    sport: "Caddying"
  },
  {
    id: 94,
    sport: "Obstacle Course Racing"
  },
  {
    id: 95,
    sport: "Motor Racing"
  },
  {
    id: 96,
    sport: "HIIT"
  },
  {
    id: 97,
    sport: "Spin"
  },
  {
    id: 98,
    sport: "Jiu Jitsu"
  },
  {
    id: 99,
    sport: "Manual Labor"
  },
  {
    id: 100,
    sport: "Cricket"
  },
  {
    id: 101,
    sport: "Pickleball"
  },
  {
    id: 102,
    sport: "Inline Skating"
  },
  {
    id: 103,
    sport: "Box Fitness"
  },
  {
    id: 104,
    sport: "Spikeball"
  },
  {
    id: 105,
    sport: "Wheelchair Pushing"
  },
  {
    id: 106,
    sport: "Paddle Tennis"
  },
  {
    id: 107,
    sport: "Barre"
  },
  {
    id: 108,
    sport: "Stage Performance"
  },
  {
    id: 109,
    sport: "High Stress Work"
  },
  {
    id: 110,
    sport: "Parkour"
  },
  {
    id: 111,
    sport: "Gaelic Football"
  },
  {
    id: 112,
    sport: "Hurling/Camogie"
  },
  {
    id: 113,
    sport: "Circus Arts"
  },
  {
    id: 121,
    sport: "Massage Therapy"
  },
  {
    id: 125,
    sport: "Watching Sports"
  },
  {
    id: 126,
    sport: "Assault Bike"
  },
  {
    id: 127,
    sport: "Kickboxing"
  },
  {
    id: 128,
    sport: "Stretching"
  },
  
]

const CycleModel = {
  "id": () => {
    return getRandomInt(0,9999)
  },
  "user_id": () => {
    return getRandomInt(0,9999)

  },
  "created_at": (end) => {
    return getFurtherDateTime(end,"YYYY-MM-DDThh:mm:ss.000Z")
  },
  "updated_at": (created_at) => {
    return getFurtherDateTime(created_at,"YYYY-MM-DDThh:mm:ss.000Z")
  },
  "start": () => {
    return getRandomDateTime("YYYY-MM-DDThh:mm:ss.000Z")
  },
  "end":(start) => {
    return getFurtherDateTime(start,"YYYY-MM-DDThh:mm:ss.000Z")
  },
  "timezone_offset": () => {
    return getRandomTimeZone().STD
  },
  "score_state": () => {
    return pickRandomValue(["SCORED","PENDING_SCORE","UNSCORABLE"])
  },
  "strain": () => {
    return (getRandomInt(0,210000)/1000).toFixed(4)
  },
  "kilojoule": () => {
    let string = ""
    let number = getRandomInt(0,4)
    let decimal = getRandomInt(0,11)
    for (var x = 0; x<number; x++){
      string += getRandomInt(0,9).toString()
    }
    string+="."
    for (var x = 0; x<decimal; x++){
      string += getRandomInt(0,9).toString()
    }
    return parseFloat(string)
  },
  "average_heart_rate": () => {
    return 123 + getRandomInt(-10,10)
  },
  "max_heart_rate": () => {
    return 146 + getRandomInt(-10,10)
  }
}

const RecoveryModel = {
  "cycle_id": () => {
    return getRandomInt(0,99999)
  },
  "sleep_id": () => {
    return getRandomInt(0,99999)
  },
  "user_id": () => {
    return getRandomInt(0,99999)
  },
  "created_at": () => {
    return getRandomDateTime("YYYY-MM-DDThh:mm:ss.000Z")
  },
  "updated_at": (created_at) => {
    return getFurtherDateTime(created_at,"YYYY-MM-DDThh:mm:ss.000Z")
  },
  "score_state": () => {
    return pickRandomValue(["SCORED","PENDING_SCORE","UNSCORABLE"])
  },
  "user_calibrating": () => {
    return getRandBool()
  },
  "recovery_score": () => {
    return getRandomInt(0,100)
  },
  "resting_heart_rate": () => {
    return getRandomInt(50,80)
  },
  "hrv_rmssd_milli": () => {
    let string = ""
    let number = 2
    let decimal = getRandomInt(0,11)
    for (var x = 0; x<number; x++){
      string += getRandomInt(0,9).toString()
    }
    string+="."
    for (var x = 0; x<decimal; x++){
      string += getRandomInt(0,9).toString()
    }
    return parseFloat(string)
  },
  "spo2_percentage": () => {
    let string = ""
    let number = 2
    let decimal = getRandomInt(0,11)
    for (var x = 0; x<number; x++){
      string += getRandomInt(0,9).toString()
    }
    string+="."
    for (var x = 0; x<decimal; x++){
      string += getRandomInt(0,9).toString()
    }
    return parseFloat(string)
  },
  "skin_temp_celsius": () => {
    return getRandomInt(2700000,3500000)/100000
  },
}

const SleepModel = {
  "id": () => {
    return getRandomInt(0,9999)
  },
  "user_id": () => {
    return getRandomInt(0,9999)

  },
  "created_at": (end) => {
    return getFurtherDateTime(end,"YYYY-MM-DDThh:mm:ss.000Z")
  },
  "updated_at": (created_at) => {
    return getFurtherDateTime(created_at,"YYYY-MM-DDThh:mm:ss.000Z")
  },
  "start": () => {
    return getRandomDateTime("YYYY-MM-DDThh:mm:ss.000Z")
  },
  "end":(start) => {
    return getFurtherDateTime(start,"YYYY-MM-DDThh:mm:ss.000Z")
  },
  "timezone_offset": () => {
    return getRandomTimeZone().STD
  },
  "nap": () => {
    return getRandBool()
  },
  "score_state": () => {
    return pickRandomValue(["SCORED","PENDING_SCORE","UNSCORABLE"])
  },
  "total_in_bed_time_milli": () => {
    return getRandomInt(0,99999999)
  },
  "total_awake_time_milli": () => {
    return getRandomInt(0,99999999)
  },
  "total_no_data_time_milli": () => {
    return getRandomInt(0,99999999)
  },
  "total_light_sleep_time_milli": () => {
    return getRandomInt(0,99999999)
  },
  "total_slow_wave_sleep_time_milli": () => {
    return getRandomInt(0,99999999)
  },
  "total_rem_sleep_time_milli": () => {
    return getRandomInt(0,99999999)
  },
  "sleep_cycle_count": () => {
    return getRandomInt(1,5)
  },
  "disturbance_count": () => {
    return getRandomInt(0,20)
  },
  "baseline_milli": () => {
    return getRandomInt(0,99999999)
  },
  "need_from_sleep_debt_milli": () => {
    return getRandomInt(0,99999999)
  },
  "need_from_recent_strain_milli": () => {
    return getRandomInt(0,99999999)
  },
  "need_from_recent_nap_milli": () => {
    return -getRandomInt(0,99999999)
  },
  "respiratory_rate": () => {
    let string = ""
    let number = getRandomInt(1,2)
    let decimal = getRandomInt(0,11)
    for (var x = 0; x<number; x++){
      string += getRandomInt(0,9).toString()
    }
    string+="."
    for (var x = 0; x<decimal; x++){
      string += getRandomInt(0,9).toString()
    }
    return parseFloat(string)
  },
  "sleep_performance_percentage": () => {
    return getRandomInt(0,100)
  },
  "sleep_consistency_percentage": () => {
    return getRandomInt(0,100)
  },
  "sleep_efficiency_percentage": () => {
    return getRandomInt(0,100)
  },
}

const UserModel = {
  "user_id": () => {
    return getRandomInt(0,9999)
  },
  "email": () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let length1 = getRandomInt(5,12)
    let length2 = getRandomInt(5,12)
    let endings = [".com", ".co.uk"]
    for (var i = 0; i<length1; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    string+="@"
    for (var i = 0; i<length2; i++){
      string += alphabet.charAt(Math.floor(Math.random() * 
      alphabet.length));
    }
    string+=endings[getRandomInt(0,endings.length-1)]
    return string
  },
  "first_name": () => {
    return getRandomName()
  },
  "last_name": () => {
    return getRandomName()
  }
}

const WorkoutModel = {
  "id": () => {
    return getRandomInt(0,9999)
  },
  "user_id": () => {
    return getRandomInt(0,9999)

  },
  "created_at": (end) => {
    return getFurtherDateTime(end,"YYYY-MM-DDThh:mm:ss.000Z")
  },
  "updated_at": (created_at) => {
    return getFurtherDateTime(created_at,"YYYY-MM-DDThh:mm:ss.000Z")
  },
  "start": () => {
    return getRandomDateTime("YYYY-MM-DDThh:mm:ss.000Z")
  },
  "end":(start) => {
    return getFurtherDateTime(start,"YYYY-MM-DDThh:mm:ss.000Z")
  },
  "timezone_offset": () => {
    return getRandomTimeZone().STD
  },
  "sport_id": () => {
    return pickRandomValue(SportsIDs)["id"]
  },
  "score_state": () => {
    return pickRandomValue(["SCORED","PENDING_SCORE","UNSCORABLE"])
  },
  "strain": () => {
    return (getRandomInt(0,210000)/1000).toFixed(4)
  },
  "average_heart_rate": () => {
    return 123 + getRandomInt(-10,10)
  },
  "max_heart_rate": () => {
    return 146 + getRandomInt(-10,10)
  },
  "kilojoule": () => {
    let string = ""
    let number = getRandomInt(0,4)
    let decimal = getRandomInt(0,11)
    for (var x = 0; x<number; x++){
      string += getRandomInt(0,9).toString()
    }
    string+="."
    for (var x = 0; x<decimal; x++){
      string += getRandomInt(0,9).toString()
    }
    return parseFloat(string)
  },
  "percent_recorded": () => {
    return getRandomInt(0,100)
  },
  "distance_meter": () => {
    let string = ""
    let number = getRandomInt(0,4)
    let decimal = getRandomInt(0,11)
    for (var x = 0; x<number; x++){
      string += getRandomInt(0,9).toString()
    }
    string+="."
    for (var x = 0; x<decimal; x++){
      string += getRandomInt(0,9).toString()
    }
    return parseFloat(string)
  },
  "altitude_gain_meter": () => {
    let string = ""
    let number = getRandomInt(0,4)
    let decimal = getRandomInt(0,11)
    for (var x = 0; x<number; x++){
      string += getRandomInt(0,9).toString()
    }
    string+="."
    for (var x = 0; x<decimal; x++){
      string += getRandomInt(0,9).toString()
    }
    return parseFloat(string)
  },
  "altitude_change_meter": () => {
    let string = ""
    let number = getRandomInt(0,4)
    let decimal = getRandomInt(0,11)
    for (var x = 0; x<number; x++){
      string += getRandomInt(0,9).toString()
    }
    string+="."
    for (var x = 0; x<decimal; x++){
      string += getRandomInt(0,9).toString()
    }
    return parseFloat(string)
  },
  "zone_duration": () => {
    let values = []
    for (var i = 0; i < 6; i++) {
      values.push(getRandomInt(1, 100))
    }
    var sum = values.reduce((a, b) => a + b);
    let a = values[0] / sum;
    let b = values[1] / sum;
    let c = values[2] / sum;
    let d = values[3] / sum;
    let e = values[4] / sum;
    let f = values[5] / sum;
    let total = getRandomInt(100000,999999)
    return {
      "zone_zero_milli": Math.round(total*a),
      "zone_one_milli": Math.round(total*b),
      "zone_two_milli": Math.round(total*c),
      "zone_three_milli": Math.round(total*d),
      "zone_four_milli": Math.round(total*e),
      "zone_five_milli": Math.round(total*f)
    }

  }
}

const dataModels = {
  Cycle: {
    data: MOCK.Cycle,
    mockup: CycleModel,
  },
  Sleep: {
    data: MOCK.Sleep,
    mockup: SleepModel,
  },
  Recovery: {
    data: MOCK.Recovery,
    mockup: RecoveryModel,
  },
  Workout: {
    data: MOCK.Workout,
    mockup: WorkoutModel,
  },
  User: {
    data: MOCK.User,
    mockup: UserModel,
  },
};

export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getWorkoutMockupData(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;
  [
    "id",
    "user_id",
    "start",
    "end",
    "created_at",
    "updated_at",
    "timezone_offset",
    "sport_id",
    "score_state",
    "score",
  ].forEach((key, i) => {
    switch (key) {
      case "score":
        [
          "strain",
          "average_heart_rate",
          "max_heart_rate",
          "kilojoule",
          "percent_recorded",
          "distance_meter",
          "altitude_gain_meter",
          "altitude_change_meter",
          "zone_duration"
        ].forEach((key2, i) => {
          switch(key2){
            default:
              mockupData[key][key2] = mockupModel[key2]();
              break
          }
        })
        break
      case "end":
        mockupData[key] = mockupModel[key](mockupData["start"]);
        break;
      case "created_at":
        mockupData[key] = mockupModel[key](mockupData["end"]);
        break;
      case "updated_at":
        mockupData[key] = mockupModel[key](mockupData["created_at"]);
        break;
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

 

  return mockupData;
}

export function getUserMockupData(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;
  [
    "user_id",
    "email",
    "first_name",
    "last_name"
  ].forEach((key, i) => {
    switch (key) {
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

 

  return mockupData;
}

export function getSleepMockupData(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;
  [
    "id",
    "user_id",
    "start",
    "end",
    "created_at",
    "updated_at",
    "timezone_offset",
    "nap",
    "score_state",
    "score",
  ].forEach((key, i) => {
    switch (key) {
      case "score":
        [
          "stage_summary",
          "sleep_needed",
          "respiratory_rate",
          "sleep_performance_percentage",
          "sleep_consistency_percentage",
          "sleep_efficiency_percentage"
        ].forEach((key2, i) => {
          switch(key2){
            case "stage_summary":
              [
                "total_in_bed_time_milli",
                "total_awake_time_milli",
                "total_no_data_time_milli",
                "total_light_sleep_time_milli",
                "total_slow_wave_sleep_time_milli",
                "total_rem_sleep_time_milli",
                "sleep_cycle_count",
                "disturbance_count"
              ].forEach((key3, i) => {
                switch(key3){
                  default:
                    mockupData[key][key2][key3] = mockupModel[key3]();
                    break
                }
              })
              break
            case "sleep_needed":
              [
                "baseline_milli",
                "need_from_sleep_debt_milli",
                "need_from_recent_strain_milli",
                "need_from_recent_nap_milli"
              ].forEach((key3, i) => {
                switch(key3){
                  default:
                    mockupData[key][key2][key3] = mockupModel[key3]();
                    break
                }
              })
              break
            default:
              mockupData[key][key2] = mockupModel[key2]();
              break
          }
        })
        break
      case "end":
        mockupData[key] = mockupModel[key](mockupData["start"]);
        break;
      case "created_at":
        mockupData[key] = mockupModel[key](mockupData["end"]);
        break;
      case "updated_at":
        mockupData[key] = mockupModel[key](mockupData["created_at"]);
        break;
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

 

  return mockupData;
}

export function getRecoveryMockupData(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;
  [
    "cycle_id",
    "sleep_id",
    "user_id",
    "created_at",
    "updated_at",
    "score_state",
    "score"
  ].forEach((key, i) => {
    switch (key) {
      case "score":
        [
          "user_calibrating",
          "recovery_score",
          "resting_heart_rate",
          "hrv_rmssd_milli",
          "spo2_percentage",
          "skin_temp_celsius"
        ].forEach((key2, i) => {
          switch(key2){
            default:
              mockupData[key][key2] = mockupModel[key2]();
              break
          }
        })
        break
      case "updated_at":
        mockupData[key] = mockupModel[key](mockupData["created_at"]);
        break;
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

 

  return mockupData;
}

export function getCycleMockupData(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;
  [
    "id",
    "user_id",
    "start",
    "end",
    "created_at",
    "updated_at",
    "timezone_offset",
    "score_state",
    "score"
  ].forEach((key, i) => {
    switch (key) {
      case "score":
        [
          "strain",
          "kilojoule",
          "average_heart_rate",
          "max_heart_rate"
        ].forEach((key2, i) => {
          switch(key2){
            default:
              mockupData[key][key2] = mockupModel[key2]();
              break
          }
        })
        break
      case "end":
        mockupData[key] = mockupModel[key](mockupData["start"]);
        break;
      case "created_at":
        mockupData[key] = mockupModel[key](mockupData["end"]);
        break;
      case "updated_at":
        mockupData[key] = mockupModel[key](mockupData["created_at"]);
        break;
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

 

  return mockupData;
}