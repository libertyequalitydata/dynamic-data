import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/huawei-data";
const ActivityRecordDataModel = {
  Running: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate",
    "com.huawei.instantaneous.speed",
    "com.huawei.instantaneous.steps.rate",
    "com.huawei.continuous.run.posture",
    "com.huawei.instantaneous.altitude",
    "com.huawei.instantaneous.location.sample",
    ]
  },
  Cycling: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate",
    "com.huawei.instantaneous.speed",
    "com.huawei.instantaneous.location.sample",
    "com.huawei.instantaneous.altitude",
    "com.huawei.resistance",
    ]
  },
  Walking: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate",
    "com.huawei.instantaneous.speed",
    "com.huawei.instantaneous.steps.rate",
    "com.huawei.instantaneous.location.sample",
    "com.huawei.instantaneous.altitude",
    ]
  },
  RopeJuming: () => {
    return ["com.huawei.instantaneous.skip_speed",
    "com.huawei.instantaneous.exercise_heart_rate",
    ]
  },
  Rowing: () => {
    return ["com.huawei.instantaneous.stroke_rate",
    "com.huawei.instantaneous.exercise_heart_rate",
    "com.huawei.resistance"
    ]
  },
  Swimming: () => {
      return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  OpenWaterSwimming: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate",
    "com.huawei.instantaneous.location.sample",
    "com.huawei.instantaneous.speed",
    "com.huawei.instantaneous.swimming.stroke_rate",
    "com.huawei.instantaneous.swimming.swolf"]
  },
  PoolSwimming: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate",
    "com.huawei.instantaneous.speed",
    "com.huawei.instantaneous.swimming.stroke_rate",
    "com.huawei.instantaneous.swimming.swolf"]
  },
  Basketball: () => {
    return ["com.huawei.continuous.jump",
    "com.huawei.instantaneous.exercise_heart_rate"]
  },
  MountainClimbing: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate",
    "com.huawei.instantaneous.speed",
    "com.huawei.instantaneous.location.sample",
    "com.huawei.instantaneous.altitude"]
  },
  BiathlonOrSled: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate",
    "com.huawei.instantaneous.speed"]
  },
  Skiing: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate",
    "com.huawei.instantaneous.location.sample",
    "com.huawei.instantaneous.speed",
    "com.huawei.instantaneous.altitude",]
  },
  Snowboarding: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate",
    "com.huawei.instantaneous.location.sample",
    "com.huawei.instantaneous.speed",
    "com.huawei.instantaneous.altitude",]
  },
  Elliptical: () => {
    return ["com.huawei.instantaneous.pedaling_rate",
    "com.huawei.instantaneous.exercise_heart_rate",
    "com.huawei.instantaneous.speed",
    "com.huawei.instantaneous.steps.rate",
    "com.huawei.instantaneous.power.sample",
    "com.huawei.resistance",]
  },
  StrengthTraining: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  Badminton: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  Aerobics: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  HIIT: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  Yoga: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  TableTennis: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  PhysicalTraining: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  CoreTraining: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  FunctionalTraining: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  Tennis: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  TaiChi: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  HulaHoop: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  Boxing: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  Pilates: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  Stepper: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
  Golf: () => {
    return ["com.huawei.instantaneous.exercise_heart_rate"]
  },
}
const types = [
  {
    activityType: "unknown",
    value: 0,
    atomic: [],
  },
  {
    activityType: "aerobics",
    value: 1,
    atomic: [],
  },
  {
    activityType: "archery",
    value: 2,
    atomic: [],
  },
  {
    activityType: "badminton",
    value: 3,
    atomic: ActivityRecordDataModel["Badminton"](),
  },
  {
    activityType: "baseball",
    value: 4,
    atomic: [],
  },
  {
    activityType: "basketball",
    value: 5,
    atomic: ActivityRecordDataModel["Basketball"](),
  },
  {
    activityType: "biathlon",
    value: 6,
    atomic: ActivityRecordDataModel["BiathlonOrSled"](),
  },
  {
    activityType: "boxing",
    value: 7,
    atomic: ActivityRecordDataModel["Boxing"](),
  },
  {
    activityType: "calisthenics",
    value: 8,
    atomic: ActivityRecordDataModel["Aerobics"](),
  },
  {
    activityType: "circuit_training",
    value: 9,
    atomic: [],
  },
  {
    activityType: "cricket",
    value: 10,
    atomic: [],
  },
  {
    activityType: "crossfit",
    value: 11,
    atomic: [],
  },
  {
    activityType: "curling",
    value: 12,
    atomic: [],
  },
  {
    activityType: "cycling",
    value: 13,
    atomic: ActivityRecordDataModel["Cycling"](),
  },
  {
    activityType: "dancing",
    value: 14,
    atomic: [],
  },
  {
    activityType: "diving",
    value: 15,
    atomic: [],
  },
  {
    activityType: "elevator",
    value: 16,
    atomic: [],
  },
  {
    activityType: "elliptical",
    value: 17,
    atomic: ActivityRecordDataModel["Elliptical"](),
  },
  {
    activityType: "ergometer",
    value: 18,
    atomic: [],
  },
  {
    activityType: "escalator",
    value: 19,
    atomic: [],
  },
  {
    activityType: "fencing",
    value: 20,
    atomic: [],
  },
  {
    activityType: "football.american",
    value: 21,
    atomic: [],
  },
  {
    activityType: "football.australian",
    value: 22,
    atomic: [],
  },
  {
    activityType: "football.soccer",
    value: 23,
    atomic: [],
  },
  {
    activityType: "flying_disc",
    value: 24,
    atomic: [],
  },
  {
    activityType: "gardening",
    value: 25,
    atomic: [],
  },
  {
    activityType: "golf",
    value: 26,
    atomic: ActivityRecordDataModel["Golf"](),
  },
  {
    activityType: "gymnastics",
    value: 27,
    atomic: [],
  },
  {
    activityType: "handball",
    value: 28,
    atomic: [],
  },
  {
    activityType: "interval_training.high_intensity",
    value: 29,
    atomic: ActivityRecordDataModel["HIIT"](),
  },
  {
    activityType: "hiking",
    value: 30,
    atomic: ActivityRecordDataModel["Walking"](),
  },
  {
    activityType: "hockey",
    value: 31,
    atomic: [],
  },
  {
    activityType: "horse_riding",
    value: 32,
    atomic: [],
  },
  {
    activityType: "housework",
    value: 33,
    atomic: [],
  },
  {
    activityType: "ice_skating",
    value: 34,
    atomic: [],
  },
  {
    activityType: "in_vehicle",
    value: 35,
    atomic: [],
  },
  {
    activityType: "interval_training",
    value: 36,
    atomic: [],
  },
  {
    activityType: "jumping_rope",
    value: 37,
    atomic: ActivityRecordDataModel["RopeJuming"](),
  },
  {
    activityType: "kayaking",
    value: 38,
    atomic: [],
  },
  {
    activityType: "kettlebell_training",
    value: 39,
    atomic: [],
  },
  {
    activityType: "kickboxing",
    value: 40,
    atomic: [],
  },
  {
    activityType: "kitesurfing",
    value: 41,
    atomic: [],
  },
  {
    activityType: "martial_arts",
    value: 42,
    atomic: [],
  },
  {
    activityType: "martial_arts.mixed",
    value: 43,
    atomic: [],
  },
  {
    activityType: "meditation",
    value: 44,
    atomic: [],
  },
  {
    activityType: "on_foot",
    value: 45,
    atomic: [],
  },
  {
    activityType: "other",
    value: 46,
    atomic: [],
  },
  {
    activityType: "p90x",
    value: 47,
    atomic: [],
  },
  {
    activityType: "paragliding",
    value: 48,
    atomic: [],
  },
  {
    activityType: "pilates",
    value: 49,
    atomic: ActivityRecordDataModel["Pilates"](),
  },
  {
    activityType: "polo",
    value: 50,
    atomic: [],
  },
  {
    activityType: "racquetball",
    value: 51,
    atomic: [],
  },
  {
    activityType: "rock_climbing",
    value: 52,
    atomic: [],
  },
  {
    activityType: "rowing",
    value: 53,
    atomic: ActivityRecordDataModel["Rowing"](),
  },
  {
    activityType: "rowing.machine",
    value: 54,
    atomic: ActivityRecordDataModel["Rowing"](),
  },
  {
    activityType: "rugby",
    value: 55,
    atomic: [],
  },
  {
    activityType: "running",
    value: 56,
    atomic: ActivityRecordDataModel["Running"](),
  },
  {
    activityType: "running.machine",
    value: 57,
    atomic: ActivityRecordDataModel["Running"](),
  },
  {
    activityType: "sailing",
    value: 58,
    atomic: [],
  },
  {
    activityType: "scuba_diving",
    value: 59,
    atomic: [],
  },
  {
    activityType: "scooter_riding",
    value: 60,
    atomic: [],
  },
  {
    activityType: "skateboarding",
    value: 61,
    atomic: [],
  },
  {
    activityType: "skating",
    value: 62,
    atomic: [],
  },
  {
    activityType: "skiing",
    value: 63,
    atomic: ActivityRecordDataModel["Skiing"](),
  },
  {
    activityType: "sledding",
    value: 64,
    atomic: [],
  },
  {
    activityType: "snowboarding",
    value: 70,
    atomic: ActivityRecordDataModel["Snowboarding"](),
  },
  {
    activityType: "snowmobile",
    value: 71,
    atomic: [],
  },
  {
    activityType: "snowshoeing",
    value: 72,
    atomic: [],
  },
  {
    activityType: "softball",
    value: 73,
    atomic: [],
  },
  {
    activityType: "squash",
    value: 74,
    atomic: [],
  },
  {
    activityType: "stair_climbing",
    value: 75,
    atomic: [],
  },
  {
    activityType: "stair_climbing.machine",
    value: 76,
    atomic: [],
  },
  {
    activityType: "standup_paddleboarding",
    value: 77,
    atomic: [],
  },
  {
    activityType: "still",
    value: 78,
    atomic: [],
  },
  {
    activityType: "strength_training",
    value: 79,
    atomic: ActivityRecordDataModel["StrengthTraining"](),
  },
  {
    activityType: "surfing",
    value: 80,
    atomic: [],
  },
  {
    activityType: "swimming",
    value: 81,
    atomic: ActivityRecordDataModel["Swimming"](),
  },
  {
    activityType: "swimming.open_water",
    value: 82,
    atomic: ActivityRecordDataModel["OpenWaterSwimming"](),
  },
  {
    activityType: "swimming.pool",
    value: 83,
    atomic: ActivityRecordDataModel["PoolSwimming"](),
  },
  {
    activityType: "table_tennis",
    value: 84,
    atomic: ActivityRecordDataModel["TableTennis"](),
  },
  {
    activityType: "team_sports",
    value: 85,
    atomic: [],
  },
  {
    activityType: "tennis",
    value: 86,
    atomic: ActivityRecordDataModel["Tennis"](),
  },
  {
    activityType: "tilting",
    value: 87,
    atomic: [],
  },
  {
    activityType: "volleyball",
    value: 88,
    atomic: [],
  },
  {
    activityType: "wakeboarding",
    value: 89,
    atomic: [],
  },
  {
    activityType: "walking",
    value: 90,
    atomic: ActivityRecordDataModel["Walking"](),
  },
  {
    activityType: "water_polo",
    value: 91,
    atomic: [],
  },
  {
    activityType: "weightlifting",
    value: 92,
    atomic: [],
  },
  {
    activityType: "wheelchair",
    value: 93,
    atomic: [],
  },
  {
    activityType: "windsurfing",
    value: 94,
    atomic: [],
  },
  {
    activityType: "yoga",
    value: 95,
    atomic: ActivityRecordDataModel["Yoga"](),
  },
  {
    activityType: "zumba",
    value: 96,
    atomic: [],
  },
  {
    activityType: "cycling_indoor",
    value: 97,
    atomic: ActivityRecordDataModel["Cycling"](),
  },
  {
    activityType: "darts",
    value: 98,
    atomic: [],
  },
  {
    activityType: "billiards",
    value: 99,
    atomic: [],
  },
  {
    activityType: "shuttlecock",
    value: 100,
    atomic: [],
  },
  {
    activityType: "bowling",
    value: 101,
    atomic: [],
  },
  {
    activityType: "group_calisthenics",
    value: 102,
    atomic: [],
  },
  {
    activityType: "tug_of_war",
    value: 103,
    atomic: [],
  },
  {
    activityType: "beach_soccer",
    value: 104,
    atomic: [],
  },
  {
    activityType: "beach_volleyball",
    value: 105,
    atomic: [],
  },
  {
    activityType: "gateball",
    value: 106,
    atomic: [],
  },
  {
    activityType: "sepaktakraw",
    value: 107,
    atomic: [],
  },
  {
    activityType: "dodge_ball",
    value: 108,
    atomic: [],
  },
  {
    activityType: "treadmill",
    value: 109,
    atomic: ActivityRecordDataModel["Stepper"](),
  },
  {
    activityType: "spinning",
    value: 110,
    atomic: ActivityRecordDataModel["Cycling"](),
  },
  {
    activityType: "stroll_machine",
    value: 111,
    atomic: [],
  },
  {
    activityType: "cross_fit",
    value: 112,
    atomic: [],
  },
  {
    activityType: "functional_training",
    value: 113,
    atomic: ActivityRecordDataModel["FunctionalTraining"](),
  },
  {
    activityType: "physical_training",
    value: 114,
    atomic: ActivityRecordDataModel["PhysicalTraining"](),
  },
  {
    activityType: "belly_dance",
    value: 115,
    atomic: [],
  },
  {
    activityType: "jazz",
    value: 116,
    atomic: [],
  },
  {
    activityType: "latin",
    value: 117,
    atomic: [],
  },
  {
    activityType: "ballet",
    value: 118,
    atomic: [],
  },
  {
    activityType: "core_training",
    value: 119,
    atomic: ActivityRecordDataModel["CoreTraining"](),
  },
  {
    activityType: "horizontal_bar",
    value: 120,
    atomic: [],
  },
  {
    activityType: "parallel_bars",
    value: 121,
    atomic: [],
  },
  {
    activityType: "hip_hop",
    value: 122,
    atomic: [],
  },
  {
    activityType: "square_dance",
    value: 123,
    atomic: [],
  },
  {
    activityType: "hu_la_hoop",
    value: 124,
    atomic: ActivityRecordDataModel["HulaHoop"](),
  },
  {
    activityType: "bmx",
    value: 125,
    atomic: ActivityRecordDataModel["Cycling"](),
  },
  {
    activityType: "orienteering",
    value: 126,
    atomic: [],
  },
  {
    activityType: "indoor_walk",
    value: 127,
    atomic: ActivityRecordDataModel["Walking"](),
  },
  {
    activityType: "indoor_running",
    value: 128,
    atomic: ActivityRecordDataModel["Running"](),
  },
  {
    activityType: "mountain_climbing",
    value: 129,
    atomic: ActivityRecordDataModel["MountainClimbing"](),
  },
  {
    activityType: "cross_country_race",
    value: 130,
    atomic: ActivityRecordDataModel["Running"](),
  },
  {
    activityType: "roller_skating",
    value: 131,
    atomic: [],
  },
  {
    activityType: "hunting",
    value: 132,
    atomic: [],
  },
  {
    activityType: "fly_a_kite",
    value: 133,
    atomic: [],
  },
  {
    activityType: "swing",
    value: 134,
    atomic: [],
  },
  {
    activityType: "obstacle_race",
    value: 135,
    atomic: [],
  },
  {
    activityType: "bungee_jumping",
    value: 136,
    atomic: [],
  },
  {
    activityType: "parkour",
    value: 137,
    atomic: [],
  },
  {
    activityType: "parachute",
    value: 138,
    atomic: [],
  },
  {
    activityType: "racing_car",
    value: 139,
    atomic: [],
  },
  {
    activityType: "triathlons",
    value: 140,
    atomic: [],
  },
  {
    activityType: "ice_hockey",
    value: 141,
    atomic: [],
  },
  {
    activityType: "crosscountry_skiing",
    value: 142,
    atomic: [],
  },
  {
    activityType: "sled",
    value: 143,
    atomic: ActivityRecordDataModel["BiathlonOrSled"](),
  },
  {
    activityType: "fishing",
    value: 144,
    atomic: [],
  },
  {
    activityType: "drifting",
    value: 145,
    atomic: [],
  },
  {
    activityType: "dragon_boat",
    value: 146,
    atomic: [],
  },
  {
    activityType: "motorboat",
    value: 147,
    atomic: [],
  },
  {
    activityType: "sup",
    value: 148,
    atomic: [],
  },
  {
    activityType: "free_sparring",
    value: 149,
    atomic: [],
  },
  {
    activityType: "karate",
    value: 150,
    atomic: [],
  },
  {
    activityType: "body_combat",
    value: 151,
    atomic: [],
  },
  {
    activityType: "kendo",
    value: 152,
    atomic: [],
  },
  {
    activityType: "tai_chi",
    value: 153,
    atomic: ActivityRecordDataModel["TaiChi"](),
  },
  ]
const HealthRecordModel = {
  id: () => {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < 116; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  },
  dataTypeName: () => {
    switch (getRandomInt(0,3)){
      case 1:
        return "com.huawei.continuous.ecg_record"
      case 2:
        return "com.huawei.health.record.sleep"
      case 3:
        return "com.huawei.health.record.tachycardia"
      case 4:
        return "com.huawei.health.record.bradycardia"
      case 5:
        return "com.huawei.health.record.menstrual_cycle"
    }
  },
  endTime: (startTime) => {
    // 86400000000000
    
    return startTime + getRandomInt(28800000000000,259200000000000)
  },
  startTime: () => {
    return 1609293600000000000
  },
  modifyTime: (endTime) => {
    switch (getRandomInt(0,3)){
      case 1:
        return Math.round(endTime/1000000) + getRandomInt(28800000,86400000)
      default:
        return Math.round(endTime/1000000)
    }
  },
  originalDataCollectorId: () => {

  },
  metadata: () => {

  },
  subData: () => {

  },  
  subDataRelation: (dataTypeName) => {
    switch (dataTypeName){
      case "com.huawei.continuous.ecg_record":
        return [{
          startTime: 1609293600000000000,
          endTime: 1609380000000000000,
          dataTypeName: "com.huawei.continuous.ecg_detail",
          dataCollectorId: "raw:com.huawei.continuous.ecg_detail:300013103:huawei:mp:1234567890"
      }]
      case "com.huawei.health.record.sleep":
        return [{
          startTime: 1609293600000000000,
          endTime: 1609380000000000000,
          dataTypeName: "com.huawei.continuous.sleep.fragment",
          dataCollectorId: "raw:com.huawei.continuous.sleep.fragment:uu.txt:huawei:mp:1234567890"
      }]
      case "com.huawei.health.record.tachycardia":
      case "com.huawei.health.record.bradycardia":        
        return [{
          startTime: 1609293600000000000,
          endTime: 1609380000000000000,
          dataTypeName: "com.huawei.instantaneous.heart_rate",
          dataCollectorId: "raw:com.huawei.instantaneous.heart_rate:300013102:huawei:mp:1234567890"
      }]
      case "com.huawei.health.record.menstrual_cycle":        
        return [{
          startTime: 1609293600000000000,
          endTime: 1609380000000000000,
          dataTypeName: "com.huawei.continuous.menstrual_flow",
          dataCollectorId: "raw:com.huawei.continuous.menstrual_flow:com.huawei.health:HUAWEI Health:HUAWEI Health:1000:300000000150011553"
        },{
          startTime: 1609293600000000000,
          endTime: 1609380000000000000,
          dataTypeName: "com.huawei.dysmenorrhoea",
          dataCollectorId: "raw:com.huawei.dysmenorrhoea:com.huawei.health:HUAWEI Health:HUAWEI Health:1000:300000000150011553"
        }]
    }
  }
}


const SampleSetModel = {
  dataCollectorId: () => {
    return ""
  },
  endTime: () => {
    return 1609380000000000000
  },
  startTime: () => {
    return 1609380000000000000
  },
  cursor: () => {
    return ""
  },
  samplePoints: (dataTypeName, DataCollectorId)=> {
    let obj = {}
    switch(dataTypeName){
      case "com.huawei.continuous.ecg_detail":
        obj = HealthSamplingModel["ECGDetail"](1,"[-635795.75,-635813.5,-636456.25,-637246.44,-637302.9,-637826.3,-638903.0,-640107.06,-639138.4,-636218.9,-631505.94,-626216.7,-621731.44]")
        break;
      case "com.huawei.continuous.sleep.fragment":
        obj = HealthSamplingModel["SleepFragment"](getRandomInt(0,5))
        break;
      case "com.huawei.instantaneous.heart_rate":
        obj = HealthSamplingModel["HeartRate"](getRandomInt(0,256)-1)
        break;
      case "com.huawei.health.record.menstrual_cycle":
        obj = HealthSamplingModel["MenstrualFlow"](getRandomInt(0,10)-1)
        break;
      case "com.huawei.dysmenorrhoea":
        obj = HealthSamplingModel["HeartRate"](getRandomInt(0,10)-1)
        break;
        
    }
    return {
      startTime: SamplePointModel["startTime"](),
      endTime: SamplePointModel["endTime"](),
      ...obj,
      modifyTime: SamplePointModel["modifyTime"](),
      originalDataCollectorId: SamplePointModel["modifyTime"](DataCollectorId),
      metadata: SamplePointModel["metadata"]()
      }
  }
}

function ActivityFunction(type) {
  switch(type){
    case 37:
      return {
        dataTypeName: "com.huawei.activity.feature.jumping_rope",
        value: [
          {
            fieldName: "skip_num",
            integerValue: 0
          },
          {
            fieldName: "stumbling_rope",
            integerValue: 0
          },
          {
            fieldName: "max_skipping_times",
            integerValue: 0
          },
          {
            fieldName: "double_shake",
            integerValue: 0
          },
          {
            fieldName: "triple_shake",
            integerValue: 0
          },
      ]
      }
    case 53:
    case 54:
      return {
        dataTypeName: "com.huawei.activity.feature.rowing",
        value: [
          {
            fieldName: "strokes_num",
            integerValue: 0
          }
      ]
      }
    case 82:
      return {
        dataTypeName: "com.huawei.activity.feature.swimming.open_water",
        value: [
          {
            fieldName: "pull_times",
            integerValue: 0
          },
          {
            fieldName: "swimming_stroke",
            integerValue: 0
          },
      ]
      }
    case 83:
      return {
        dataTypeName: "com.huawei.activity.feature.swimming.pool",
        value: [
          {
            fieldName: "pull_times",
            integerValue: 0
          },
          {
            fieldName: "swimming_stroke",
            integerValue: 0
          },
          {
            fieldName: "pool_length",
            integerValue: 0
          },
          {
            fieldName: "swimming_stroke",
            integerValue: 0
          },
      ]
      }
    case 5:
      return {
        dataTypeName: "com.huawei.activity.feature.basketball",
        value: [
          {
            fieldName: "overall_score",
            integerValue: 0
          },
          {
            fieldName: "burst_score",
            integerValue: 0
          },
          {
            fieldName: "jump_score",
            integerValue: 0
          },
          {
            fieldName: "run_score",
            integerValue: 0
          },
          {
            fieldName: "breakthrough_score",
            integerValue: 0
          },
          {
            fieldName: "sport_intensity_score",
            integerValue: 0
          },
        ]
        
      }
    case 63:
      return {
        dataTypeName: "com.huawei.activity.feature.skiing",
        value: [
          {
            fieldName: "trip_times",
            integerValue: 0
          },
          {
            fieldName: "max_slope_percent",
            floatValue: 0
          },
          {
            fieldName: "max_slope_degree",
            floatValue: 0
          },
        ]
          }
    case 70:
      return {
        dataTypeName: "com.huawei.activity.feature.snowboarding",
        value: [
          {
            fieldName: "trip_times",
            integerValue: 0
          },
          {
            fieldName: "max_slope_percent",
            floatValue: 0
          },
          {
            fieldName: "max_slope_degree",
            floatValue: 0
          },
        ]
          }
    case 26:
      return {
        dataTypeName: "com.huawei.activity.feature.golf",
        value: [
          {
            fieldName: "golf_swing_count",
            integerValue: 0
          },
          {
            fieldName: "golf_swing_speed",
            integerValue: 0
          },
          {
            fieldName: "golf_max_swing_speed",
            integerValue: 0
          },
          {
            fieldName: "golf_swing_tempo",
            floatValue: 0
          },
          {
            fieldName: "golf_down_swing_time",
            integerValue: 0
          },
          {
            fieldName: "golf_back_swing_time",
            integerValue: 0
          },
        ]
          }
  }
}

function DataSummary(type) {
  switch(type){
    //Cycling
    case 13:
    case 97:
    case 110:
    case 125:
      return [
        FitnessSamplingModel["DistanceTotal"](0),
        FitnessSamplingModel["SpeedStatistics"](0,0,0),
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
        FitnessSamplingModel["StepCadenceStatistics"](0,0,0),
        FitnessSamplingModel["RunPostureStatistics"](0,0,0,0,0,0,0,0,0,),
      ]
    // Running
    case 56:
    case 57:
    case 128:
    case 130:
      return [
        FitnessSamplingModel["DistanceTotal"](0),
        FitnessSamplingModel["SpeedStatistics"](0,0,0),
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
        FitnessSamplingModel["StepTotal"](0),
        FitnessSamplingModel["StepCadenceStatistics"](0,0,0),
        FitnessSamplingModel["RunPostureStatistics"](0,0,0,0,0,0,0,0,0,),
      ]
    //Walking
    case 90:
    case 30:
    case 127:
      return [
        FitnessSamplingModel["DistanceTotal"](0),
        FitnessSamplingModel["SpeedStatistics"](0,0,0),
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
        FitnessSamplingModel["StepTotal"](0),
        FitnessSamplingModel["StepCadenceStatistics"](0,0,0),
      ]
    // Rope Jumping
    case 37:
      return [
        FitnessSamplingModel["SkipSpeedStatistics"](0,0,0),
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]      
    // Rowing
    case 53:
    case 54:
      return [
        FitnessSamplingModel["DistanceTotal"](0),
        FitnessSamplingModel["StrokeRateStatistics"](0,0,0),
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
        FitnessSamplingModel["ResistanceStatistics"](0,0,0,0,0,0,0,0,0,0,0,0,0),
      ] 
    // Swimming
    case 81:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]   
    // Open Water Swimming
    case 82:
    // Pool Swimming
    case 83:
      return [
        FitnessSamplingModel["DistanceTotal"](0),
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
        FitnessSamplingModel["StrokeRateStatistics"](0,0,0),
        FitnessSamplingModel["SWOLFStatistics"](0,0,0),
      ]
    case 5:
      return [
        FitnessSamplingModel["JumpStatistics"](0,0,0,0,0,0,0),
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 129:
      return [
        FitnessSamplingModel["DistanceTotal"](0),
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
        FitnessSamplingModel["StepTotal"](0),
        FitnessSamplingModel["AltitudeStatistics"](0,0,0,0,0),
      ]
    case 6:
    case 143:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0)
      ]
    case 63:
    case 70:
      return [
        FitnessSamplingModel["DistanceTotal"](0),
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
        FitnessSamplingModel["AltitudeStatistics"](0,0,0,0,0),
      ]
    case 17:
      return [
        FitnessSamplingModel["PedalingRateStatistics"](0,0,0),
        FitnessSamplingModel["DistanceTotal"](0),
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
        FitnessSamplingModel["StepTotal"](0),
        FitnessSamplingModel["StepCadenceStatistics"](0,0,0),
        FitnessSamplingModel["PowerStatistics"](0,0,0),
        FitnessSamplingModel["ResistanceStatistics"](0,0,0,0,0,0,0,0,0,0,0,0,0),
      ]
    case 79:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 3:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 8:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 29:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 95:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 84:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 114:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 119:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 113:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 86:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 153:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 124:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 7:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 49:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 109:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
    case 26:
      return [
        FitnessSamplingModel["CaloriesBurntTotal"](0),
        HealthSamplingModel["ExerciseHeartRateStatistics"](0,0,0),
      ]
      }  
  }

function SamplePoint(name){
  switch (name){
    case "com.huawei.instantaneous.skip_speed":
      return [{
        
        startTime: 1624312598000000000,
        endTime: 1624312598000000000,
        ...FitnessSamplingModel["SkipSpeedInstantaneous"](0),
        modifyTime: 1642476171373,
      }
      ]
    case "com.huawei.instantaneous.exercise_heart_rate":
      return [{
        
        startTime: 1624312598000000000,
        endTime: 1624312598000000000,
        ...HealthSamplingModel["ExerciseHeartRate"](getRandomInt(0,10)-1),
        modifyTime: 1642476171373,
      }
      ]
    case "com.huawei.instantaneous.speed":
      return [{
        startTime: 1624312598000000000,
        endTime: 1624312598000000000,
        ...FitnessSamplingModel["SpeedInstantaneous"](getRandomInt(0,10)-1),
        modifyTime: 1642476171373,
      }
      ]
    case "com.huawei.instantaneous.steps.rate":
      return [{
        startTime: 1624312598000000000,
        endTime: 1624312598000000000,
        ...FitnessSamplingModel["StepCadenceInstantaneous"](getRandomInt(0,10)-1),
        modifyTime: 1642476171373,
      }
      ]
    case "com.huawei.continuous.run.posture":
      return [{
        startTime: 1624312598000000000,
        endTime: 1624312598000000000,
        ...FitnessSamplingModel["RunPostureContinuous"](0,0,0,0,0,0,0,0,0),
        modifyTime: 1642476171373,
      }
      ]  
    case "com.huawei.instantaneous.altitude":
      return [{
        startTime: 1624312598000000000,
        endTime: 1624312598000000000,
        ...FitnessSamplingModel["AltitudeInstantaneous"](0),
        modifyTime: 1642476171373,
      }
      ]  
    case "com.huawei.instantaneous.location.sample":
      return [{
        startTime: 1624312598000000000,
        endTime: 1624312598000000000,
        ...FitnessSamplingModel["LocationInstantaneous"](0,0,0,0),
        modifyTime: 1642476171373,
      }
      ]  
    case "com.huawei.instantaneous.stroke_rate":
      return [{
        startTime: 1624312598000000000,
        endTime: 1624312598000000000,
        ...FitnessSamplingModel["StrokeRate"](0),
        modifyTime: 1642476171373,
      }
      ]  
    case "com.huawei.resistance":
      return [{
        startTime: 1624312598000000000,
        endTime: 1624312598000000000,
        ...FitnessSamplingModel["Resistance"](0),
        modifyTime: 1642476171373,
      }
      ]
    case "com.huawei.instantaneous.swimming.stroke_rate":
      return [{
        startTime: 1624312598000000000,
        endTime: 1624312598000000000,
        ...FitnessSamplingModel["SwimmingStrokeRate"](0),
        modifyTime: 1642476171373,
      }
      ]
    case "com.huawei.instantaneous.swimming.swolf":
      return [{
        startTime: 1624312598000000000,
        endTime: 1624312598000000000,
        ...FitnessSamplingModel["SWOLF"](0),
        modifyTime: 1642476171373,
      }
      ]  
    case "com.huawei.continuous.jump":
      return [{
        startTime: 1624312598000000000,
        endTime: 1624312598000000000,
        ...FitnessSamplingModel["JumpContinuous"](0,0),
        modifyTime: 1642476171373,
      }
      ] 
    case "com.huawei.instantaneous.pedaling_rate":
      return [{
        startTime: 1624312598000000000,
        endTime: 1624312598000000000,
        ...FitnessSamplingModel["PedalingRate"](0),
        modifyTime: 1642476171373,
      }
      ] 
    case "com.huawei.instantaneous.power.sample":
      return [{
        startTime: 1624312598000000000,
        endTime: 1624312598000000000,
        ...FitnessSamplingModel["Power"](0),
        modifyTime: 1642476171373,
      }
      ] 
  }
}

const SamplePointModel = {
  endTime: () => {
    return 1613961734000000000
  },
  startTime: () => {
    return 1613961764000000000
  },
  modifyTime: () => {
    return 1609380000000
  },
  originalDataCollectorId: (DataCollectorId) => {
    return DataCollectorId
  },
  metadata: () => {
    return ""
  },
}
const ActivityRecordModel = {
  id: () => {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < 9; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result; 
  },
  endTime: (startTime) => {
    // 86400000000000
    return startTime + getRandomInt(0,79200000)
  },
  startTime: () => {
    return getRandomInt(1497965703,1813498503)
  },
  modifyTime: (endTime) => {
    switch (getRandomInt(0,3)){
      case 1:
        return endTime + getRandomInt(0,864000000)
      default:
        return endTime
    }
  },
  name: (value) => {
    let x = types.findIndex((type)=>{
      if (type["value"]===value){
        return true
      } else {
        return false
      }
    })
    return types[x]["activityType"]
  },
  activeTime: (startTime, endTime) => {
    let result = (endTime - startTime) - getRandomInt(0,3600000)
    if (result<=0){
      return 1
    } else {
      return result
    }
  },
  activityType: () => {
    return types[getRandomInt(0,types.length)-1]["value"]
    // return 26
  },
  cursor: () => {

  },
  desc: () => {

  },
  timeZone: () => {

  },
  metadata: () => {

  },
  activitySummary: (type) => {
    switch (type){
      //Cycling
      case 13:
      case 97:
      case 110:
      case 125:
        return {
          paceSummary: {
            paceMap: PaceSummaryModel["paceMap"](),
            partTimeMap: PaceSummaryModel["partTimeMap"](),
            avgPace: PaceSummaryModel["avgPace"](),
            bestPace: PaceSummaryModel["bestPace"](),
          },
          dataSummary: DataSummary(type)
        }
      //Running
      case 56:
      case 57:
      case 128:
      case 130:
        return {
          paceSummary: {
            paceMap: PaceSummaryModel["paceMap"](),
            partTimeMap: PaceSummaryModel["partTimeMap"](),
            avgPace: PaceSummaryModel["avgPace"](),
            bestPace: PaceSummaryModel["bestPace"](),
          },
          dataSummary: DataSummary(type)
        }
      //Walking
      case 90:
      case 30:
      case 127:
        return {
          paceSummary: {
            paceMap: PaceSummaryModel["paceMap"](),
            partTimeMap: PaceSummaryModel["partTimeMap"](),
            avgPace: PaceSummaryModel["avgPace"](),
            bestPace: PaceSummaryModel["bestPace"](),
          },
          dataSummary: DataSummary(type)
        }
      //Rope Jumping
      case 37:
        return {
          activityFeature: ActivityFunction(type),
          dataSummary: DataSummary(type)
        }
      // Rowing 
      case 53:
      case 54:
        return {
          activityFeature: ActivityFunction(type),
          dataSummary: DataSummary(type)
        }
      // Swimming
      case 81:
        return {
          paceSummary: {
            paceMap: PaceSummaryModel["paceMap"](),
            partTimeMap: PaceSummaryModel["partTimeMap"](),
            avgPace: PaceSummaryModel["avgPace"](),
            bestPace: PaceSummaryModel["bestPace"](),
          },
          dataSummary: DataSummary(type)
        }
      case 82:
        return {
          activityFeature: ActivityFunction(type),
          paceSummary: {
            paceMap: PaceSummaryModel["paceMap"](),
            partTimeMap: PaceSummaryModel["partTimeMap"](),
            avgPace: PaceSummaryModel["avgPace"](),
            bestPace: PaceSummaryModel["bestPace"](),
          },
          dataSummary: DataSummary(type)
        }
      case 83:
        return {
          activityFeature: ActivityFunction(type),
          paceSummary: {
            paceMap: PaceSummaryModel["paceMap"](),
            partTimeMap: PaceSummaryModel["partTimeMap"](),
            avgPace: PaceSummaryModel["avgPace"](),
            bestPace: PaceSummaryModel["bestPace"](),
          },
          dataSummary: DataSummary(type)
        }
      // Basketball
      case 5:
        return {
          activityFeature: ActivityFunction(type),
          dataSummary: DataSummary(type)
        }
      // Mountain Climbing
      case 129:
        return {
          dataSummary: DataSummary(type)
        }
      // Skiing
      case 6:
      case 143:
        return {
          dataSummary: DataSummary(type)
        }
      case 63:
        return {
          activityFeature: ActivityFunction(type),
          dataSummary: DataSummary(type)
        }
      case 70:
        return {
          activityFeature: ActivityFunction(type),
          dataSummary: DataSummary(type)
        }
      // Elliptical Machine
      case 17:
        return {
          paceSummary: {
            paceMap: PaceSummaryModel["paceMap"](),
            partTimeMap: PaceSummaryModel["partTimeMap"](),
            avgPace: PaceSummaryModel["avgPace"](),
            bestPace: PaceSummaryModel["bestPace"](),
          },
          dataSummary: DataSummary(type)
        }
      // Strength
      case 79:
        return {
          dataSummary: DataSummary(type)
        }
      // Badminton
      case 3:
        return {
          dataSummary: DataSummary(type)
        }
      // Aerobics
      case 8:
        return {
          dataSummary: DataSummary(type)
        }
      // HIIT
      case 29:
        return {
          dataSummary: DataSummary(type)
        }
      // Yoga
      case 95:
        return {
          dataSummary: DataSummary(type)
        }
      // Table Tennis
      case 84:
        return {
          dataSummary: DataSummary(type)
        }
      // Physical training
      case 114:
        return {
          dataSummary: DataSummary(type)
        }
      // Core Training
      case 119:
        return {
          dataSummary: DataSummary(type)
        }
      // Functional Training
      case 113:
        return {
          dataSummary: DataSummary(type)
        }
      // Tennis
      case 86:
        return {
          dataSummary: DataSummary(type)
        }
      // Tai Chi
      case 153:
        return {
          dataSummary: DataSummary(type)
        }
      // Hula Hoop
      case 124:
        return {
          dataSummary: DataSummary(type)
        }
      // Boxing
      case 7:
        return {
          dataSummary: DataSummary(type)
        }
      // Pilates
      case 49:
        return {
          dataSummary: DataSummary(type)
        }
      // Stepper 
      case 109:
        return {
          dataSummary: DataSummary(type)
        }
      // Golf 
      case 26:
        return {
          activityFeature: ActivityFunction(type),
          dataSummary: DataSummary(type)
        }
    }
  },
  details: (type) => {
    switch(type){
      case 37: 
        return [
          FitnessSamplingModel["SkipSpeedInstantaneous"](0),
          FitnessSamplingModel["SkipSpeedInstantaneous"](0),
        ]
    }
  }

}
const AppInfoModel = {
  appName: ()=> {
    return "app9"
  },
  appPackageName: ()=> {
    return "com.example.huaweitest"
  },
  appVersion: ()=> {
    return "1"
  },
  clientId: (appPackageName)=> {
    return appPackageName
  },
  desc: ()=> {
    return ""
  },

}

const PaceSummaryModel = {
  avgPace: () => {
    return 831.1475
  },
  bestPace: () => {
    return 0
  },
  paceMap: () => {
    return {}
  },
  partTimeMap: () => {
    return {}
  },
}




const PersonalInformationSamplingModel = {
  Height: (height) => {
    return {
      dataTypeName: "com.huawei.instantaneous.height",
      value: [
        {
          fieldName: "height",
          floatValue: height
        },
    ]
    }
  },
  Weight: (body_weight,
    bmi,
    body_fat,
    body_fat_rate,
    muscle_mass,
    basal_metabolism,
    moisture,
    moisture_rate,
    visceral_fat_level,
    bone_salt,
    protein_rate,
    body_age,
    body_score,
    skeletal_musclel_mass,
    impedance,) => {
    return {
      dataTypeName: "com.huawei.instantaneous.body_weight",
      value: [
        {
          fieldName: "body_weight",
          floatValue: body_weight
        },
        {
          fieldName: "bmi",
          floatValue: bmi
        },
        {
          fieldName: "body_fat",
          floatValue: body_fat
        },
        {
          fieldName: "body_fat_rate",
          floatValue: body_fat_rate
        },
        {
          fieldName: "muscle_mass",
          floatValue: muscle_mass
        },
        {
          fieldName: "basal_metabolism",
          floatValue: basal_metabolism
        },
        {
          fieldName: "moisture",
          floatValue: moisture
        },
        {
          fieldName: "moisture_rate",
          floatValue: moisture_rate
        },
        {
          fieldName: "visceral_fat_level",
          floatValue: visceral_fat_level
        },
        {
          fieldName: "bone_salt",
          floatValue: bone_salt
        },
        {
          fieldName: "protein_rate",
          floatValue: protein_rate
        },
        {
          fieldName: "body_age",
          integerValue: body_age
        },
        {
          fieldName: "body_score",
          floatValue: body_score
        },
        {
          fieldName: "skeletal_musclel_mass",
          floatValue: skeletal_musclel_mass
        },
        {
          fieldName: "impedance",
          floatValue: impedance
        },
    ]
    }
  },
  WeightStatistics: (avg,
    max,
    min,
    last,
    avg_body_fat_rate,
    max_body_fat_rate,
    min_body_fat_rate,
    avg_skeletal_musclel_mass,
    max_skeletal_musclel_mass,
    min_skeletal_musclel_mass,) => {
    return {
      dataTypeName: "com.huawei.continuous.body_weight.statistics",
      value: [
        {
          fieldName: "avg",
          floatValue: avg
        },
        {
          fieldName: "max",
          floatValue: max
        },
        {
          fieldName: "min",
          floatValue: min
        },
        {
          fieldName: "last",
          floatValue: last
        },
        {
          fieldName: "avg_body_fat_rate",
          floatValue: avg_body_fat_rate
        },
        {
          fieldName: "max_body_fat_rate",
          floatValue: max_body_fat_rate
        },
        {
          fieldName: "min_body_fat_rate",
          floatValue: min_body_fat_rate
        },
        {
          fieldName: "avg_skeletal_musclel_mass",
          floatValue: avg_skeletal_musclel_mass
        },
        {
          fieldName: "max_skeletal_musclel_mass",
          floatValue: max_skeletal_musclel_mass
        },
        {
          fieldName: "min_skeletal_musclel_mass",
          floatValue: min_skeletal_musclel_mass
        },
    ]
    }
  },
}

const FitnessSamplingModel = {
  StepDelta: (steps_delta) => {
    return {
      dataTypeName: "com.huawei.continuous.steps.delta",
      value: [
        {
          fieldName: "steps_delta",
          integerValue: steps_delta
        },
    ]
    }
  },
  StepTotal: (steps,duration) => {
    return {
      dataTypeName: "com.huawei.continuous.steps.total",
      value: [
        {
          fieldName: "steps",
          integerValue: steps
        },
        {
          fieldName: "duration",
          integerValue: duration
        },
    ]
    }
  },
  DistanceDelta: (distance_delta) => {
    return {
      dataTypeName: "com.huawei.continuous.distance.delta",
      value: [
        {
          fieldName: "distance_delta",
          floatValue: distance_delta
        },
    ]
    }
  },
  DistanceTotal: (distance) => {
    return {
      dataTypeName: "com.huawei.continuous.distance.total",
      value: [
        {
          fieldName: "distance",
          floatValue: distance
        },
    ]
    }
  },
  SpeedInstantaneous: (speed) => {
    return {
      dataTypeName: "com.huawei.instantaneous.speed",
      value: [
        {
          fieldName: "speed",
          floatValue: speed
        },
    ]
    }
  },
  SpeedStatistics: (avg,max,min) => {
    return {
      dataTypeName: "com.huawei.continuous.speed.statistics",
      value: [
        {
          fieldName: "avg",
          floatValue: avg
        },
        {
          fieldName: "max",
          floatValue: max
        },
        {
          fieldName: "min",
          floatValue: min
        },
    ]
    }
  },
  StepCadenceInstantaneous: (step_rate) => {
    return {
      dataTypeName: "com.huawei.instantaneous.steps.rate",
      value: [
        {
          fieldName: "step_rate",
          floatValue: step_rate
        },
    ]
    }
  },
  StepCadenceStatistics: (avg,max,min) => {
    return {
      dataTypeName: "com.huawei.continuous.steps.rate.statistics",
      value: [
        {
          fieldName: "avg",
          floatValue: avg
        },
        {
          fieldName: "max",
          floatValue: max
        },
        {
          fieldName: "min",
          floatValue: min
        },
    ]
    }
  },
  LocationInstantaneous: (latitude,longitude,precision,coordinate) => {
    return {
      dataTypeName: "com.huawei.instantaneous.location.sample",
      value: [
        {
          fieldName: "latitude",
          floatValue: latitude
        },
        {
          fieldName: "longitude",
          floatValue: longitude
        },
        {
          fieldName: "precision",
          floatValue: precision
        },
        {
          fieldName: "coordinate",
          integerValue: coordinate
        },
    ]
    }
  },
  AltitudeInstantaneous: (altitude) => {
    return {
      dataTypeName: "com.huawei.instantaneous.altitude",
      value: [
        {
          fieldName: "altitude",
          floatValue: altitude
        },
    ]
    }
  },
  AltitudeStatistics: (avg,max,min,ascent_total,descent_total) => {
    return {
      dataTypeName: "com.huawei.continuous.altitude.statistics",
      value: [
        {
          fieldName: "avg",
          floatValue: avg
        },
        {
          fieldName: "max",
          floatValue: max
        },
        {
          fieldName: "min",
          floatValue: min
        },
        {
          fieldName: "ascent_total",
          floatValue: ascent_total
        },
        {
          fieldName: "descent_total",
          floatValue: descent_total
        },
    ]
    }
  },
  JumpContinuous: (jump_height,passage_duration) => {
    return {
      dataTypeName: "com.huawei.continuous.jump",
      value: [
        {
          fieldName: "jump_height",
          floatValue: jump_height
        },
        {
          fieldName: "passage_duration",
          integerValue: passage_duration
        },
    ]
    }
  },
  JumpStatistics: (jump_times,avg_jump_height,max_jump_height,min_jump_height,avg_passage_duration,max_passage_duration,min_passage_duration) => {
    return {
      dataTypeName: "com.huawei.continuous.jump.statistics",
      value: [
        {
          fieldName: "jump_times",
          integerValue: jump_times
        },
        {
          fieldName: "avg_jump_height",
          floatValue: avg_jump_height
        },
        {
          fieldName: "max_jump_height",
          floatValue: max_jump_height
        },
        {
          fieldName: "min_jump_height",
          floatValue: min_jump_height
        },
        {
          fieldName: "avg_passage_duration",
          integerValue: avg_passage_duration
        },
        {
          fieldName: "max_passage_duration",
          integerValue: max_passage_duration
        },
        {
          fieldName: "min_passage_duration",
          integerValue: min_passage_duration
        },
    ]
    }
  },
  SkipSpeedInstantaneous: (skip_speed) => {
    return {
      dataTypeName: "com.huawei.instantaneous.steps.rate",
      value: [
        {
          fieldName: "skip_speed",
          integerValue: skip_speed
        },
    ]
    }
  },
  SkipSpeedStatistics: (avg,max,min) => {
    return {
      dataTypeName: "com.huawei.continuous.skip_speed.statistics",
      value: [
        {
          fieldName: "avg",
          integerValue: avg
        },
        {
          fieldName: "max",
          integerValue: max
        },
        {
          fieldName: "min",
          integerValue: min
        },
    ]
    }
  },
  RunPostureContinuous: (ground_contact_time,ground_impact_acceleration,swing_angle,eversion_excursion,hang_time,ground_hang_time_rate,fore_foot_strike_pattern,hind_foot_strike_pattern,whole_foot_strike_pattern) => {
    return {
      dataTypeName: "com.huawei.continuous.run.posture",
      value: [
        {
          fieldName: "ground_contact_time",
          integerValue: ground_contact_time
        },
        {
          fieldName: "ground_impact_acceleration",
          integerValue: ground_impact_acceleration
        },
        {
          fieldName: "swing_angle",
          integerValue: swing_angle
        },
        {
          fieldName: "eversion_excursion",
          integerValue: eversion_excursion
        },
        {
          fieldName: "hang_time",
          integerValue: hang_time
        },
        {
          fieldName: "ground_hang_time_rate",
          floatValue: ground_hang_time_rate
        },
        {
          fieldName: "fore_foot_strike_pattern",
          integerValue: fore_foot_strike_pattern
        },
        {
          fieldName: "hind_foot_strike_pattern",
          integerValue: hind_foot_strike_pattern
        },
        {
          fieldName: "whole_foot_strike_pattern",
          integerValue: whole_foot_strike_pattern
        },
    ]
    }
  },
  RunPostureStatistics: (avg_ground_contact_time,avg_ground_impact_acceleration,avg_swing_angle,avg_eversion_excursion,avg_hang_time,avg_ground_hang_time_rate,fore_foot_strike_pattern,hind_foot_strike_pattern,whole_foot_strike_pattern) => {
    return {
      dataTypeName: "com.huawei.continuous.run.posture.statistics",
      value: [
        {
          fieldName: "avg_ground_contact_time",
          integerValue: avg_ground_contact_time
        },
        {
          fieldName: "avg_ground_impact_acceleration",
          integerValue: avg_ground_impact_acceleration
        },
        {
          fieldName: "avg_swing_angle",
          integerValue: avg_swing_angle
        },
        {
          fieldName: "avg_eversion_excursion",
          integerValue: avg_eversion_excursion
        },
        {
          fieldName: "avg_hang_time",
          integerValue: avg_hang_time
        },
        {
          fieldName: "avg_ground_hang_time_rate",
          floatValue: avg_ground_hang_time_rate
        },
        {
          fieldName: "fore_foot_strike_pattern",
          integerValue: fore_foot_strike_pattern
        },
        {
          fieldName: "hind_foot_strike_pattern",
          integerValue: hind_foot_strike_pattern
        },
        {
          fieldName: "whole_foot_strike_pattern",
          integerValue: whole_foot_strike_pattern
        },
    ]
    }
  },
  CaloriesBurnt: (calories) => {
    return {
      dataTypeName: "com.huawei.continuous.calories.burnt",
      value: [
        {
          fieldName: "calories",
          floatValue: calories
        },
    ]
    }
  },
  CaloriesBurntTotal: (calories_total) => {
    return {
      dataTypeName: "com.huawei.continuous.calories.burnt.total",
      value: [
        {
          fieldName: "calories_total",
          floatValue: calories_total
        },
    ]
    }
  },
  ExerciseIntensity: (exercise_type) => {
    return {
      dataTypeName: "com.huawei.continuous.exercise_intensity.v2",
      value: [
        {
          fieldName: "exercise_type",
          integerValue: exercise_type
        },
    ]
    }
  },
  ExerciseIntensityStatistics: (key, value) => {
    return {
      dataTypeName: "com.huawei.continuous.exercise_intensity.v2.statistics",
      value: [
        {
          fieldName: "intensity_map",
          mapValue: [{
            key: {
              integerValue: key,
            },
            value: {
              integerValue: value,
            },
          }],
        },
    ]
    }
  },
  PedalingRate: (rpm) => {
    return {
      dataTypeName: "com.huawei.instantaneous.pedaling_rate",
      value: [
        {
          fieldName: "rpm",
          floatValue: rpm
        },
    ]
    }
  },
  PedalingRateStatistics: (avg,max,min) => {
    return {
      dataTypeName: "com.huawei.continuous.pedaling_rate.statistics",
      value: [
        {
          fieldName: "avg",
          floatValue: avg
        },
        {
          fieldName: "max",
          floatValue: max
        },
        {
          fieldName: "min",
          floatValue: min
        },
    ]
    }
  },
  WheelRotation: (rpm) => {
    return {
      dataTypeName: "com.huawei.instantaneous.wheel_rotation",
      value: [
        {
          fieldName: "rpm",
          floatValue: rpm
        },
    ]
    }
  },
  StrokeRate: (spm) => {
    return {
      dataTypeName: "com.huawei.instantaneous.stroke_rate",
      value: [
        {
          fieldName: "spm",
          floatValue: spm
        },
    ]
    }
  },
  StrokeRateStatistics: (avg,max,min) => {
    return {
      dataTypeName: "com.huawei.continuous.stroke_rate.statistics",
      value: [
        {
          fieldName: "avg",
          floatValue: avg
        },
        {
          fieldName: "max",
          floatValue: max
        },
        {
          fieldName: "min",
          floatValue: min
        },
    ]
    }
  },
  Power: (power) => {
    return {
      dataTypeName: "com.huawei.instantaneous.power.sample",
      value: [
        {
          fieldName: "power",
          floatValue: power
        },
    ]
    }
  },
  PowerStatistics: (avg,max,min) => {
    return {
      dataTypeName: "com.huawei.continuous.power.statistics",
      value: [
        {
          fieldName: "avg",
          floatValue: avg
        },
        {
          fieldName: "max",
          floatValue: max
        },
        {
          fieldName: "min",
          floatValue: min
        },
    ]
    }
  },
  SwimmingStrokeRate: (spm) => {
    return {
      dataTypeName: "com.huawei.instantaneous.swimming.stroke_rate",
      value: [
        {
          fieldName: "spm",
          floatValue: spm
        },
    ]
    }
  },
  SwimmingStrokeRateStatistics: (avg,max,min) => {
    return {
      dataTypeName: "com.huawei.continuous.swimming.stroke_rate.statistics",
      value: [
        {
          fieldName: "avg",
          floatValue: avg
        },
        {
          fieldName: "max",
          floatValue: max
        },
        {
          fieldName: "min",
          floatValue: min
        },
    ]
    }
  },
  SWOLF: (swolf) => {
    return {
      dataTypeName: "com.huawei.instantaneous.swimming.swolf",
      value: [
        {
          fieldName: "swolf",
          floatValue: swolf
        },
    ]
    }
  },
  SWOLFStatistics: (avg,max,min) => {
    return {
      dataTypeName: "com.huawei.continuous.swimming.swolf.statistics",
      value: [
        {
          fieldName: "avg",
          floatValue: avg
        },
        {
          fieldName: "max",
          floatValue: max
        },
        {
          fieldName: "min",
          floatValue: min
        },
    ]
    }
  },
  Resistance: (resistanceLevel) => {
    return {
      dataTypeName: "com.huawei.resistance",
      value: [
        {
          fieldName: "resistanceLevel",
          integerValue: resistanceLevel
        },
    ]
    }
  },
  ResistanceStatistics: (resistanceLevelOneLowerLimit,
    resistanceLevelTwoLowerLimit,
    resistanceLevelThreeLowerLimit,
    resistanceLevelFourLowerLimit,
    resistanceLevelFiveLowerLimit,
    resistanceLevelFiveUpperLimit,
    resistanceLevelOneTime,
    resistanceLevelTwoTime,
    resistanceLevelThreeTime,
    resistanceLevelFourTime,
    resistanceLevelFiveTime,
    maxRes,
    minRes,) => {
    return {
      dataTypeName: "com.huawei.resistance.statistics",
      value: [
        {
          fieldName: "resistanceLevelOneLowerLimit",
          integerValue: resistanceLevelOneLowerLimit
        },
        {
          fieldName: "resistanceLevelTwoLowerLimit",
          integerValue: resistanceLevelTwoLowerLimit
        },
        {
          fieldName: "resistanceLevelThreeLowerLimit",
          integerValue: resistanceLevelThreeLowerLimit
        },
        {
          fieldName: "resistanceLevelFourLowerLimit",
          integerValue: resistanceLevelFourLowerLimit
        },
        {
          fieldName: "resistanceLevelFiveLowerLimit",
          integerValue: resistanceLevelFiveLowerLimit
        },
        {
          fieldName: "resistanceLevelFiveUpperLimit",
          integerValue: resistanceLevelFiveUpperLimit
        },
        {
          fieldName: "resistanceLevelOneTime",
          integerValue: resistanceLevelOneTime
        },
        {
          fieldName: "resistanceLevelTwoTime",
          integerValue: resistanceLevelTwoTime
        },
        {
          fieldName: "resistanceLevelThreeTime",
          integerValue: resistanceLevelThreeTime
        },
        {
          fieldName: "resistanceLevelFourTime",
          integerValue: resistanceLevelFourTime
        },
        {
          fieldName: "resistanceLevelFiveTime",
          integerValue: resistanceLevelFiveTime
        },
        {
          fieldName: "maxRes",
          integerValue: maxRes
        },
        {
          fieldName: "minRes",
          integerValue: minRes
        },
        ]
      }
  },
}

const HealthSamplingModel = {
  SleepFragment: (sleep_state) => {
    return {
      dataTypeName: "com.huawei.continuous.sleep.fragment",
      value: [
        {
          fieldName: "sleep_state",
          integerValue: sleep_state
        },
    ]
    }
  },
  SleepStatistics: (fall_asleep_time,
    wakeup_time,
    light_sleep_time,
    deep_sleep_time,
    dream_time,
    awake_time,
    all_sleep_time,
    wakeup_count) => {
    return {
      dataTypeName: "com.huawei.continuous.sleep.statistics",
      value: [
        {
          fieldName: "fall_asleep_time",
          longValue: fall_asleep_time
        },
        {
          fieldName: "wakeup_time",
          longValue: wakeup_time
        },
        {
          fieldName: "light_sleep_time",
          integerValue: light_sleep_time
        },
        {
          fieldName: "deep_sleep_time",
          integerValue: deep_sleep_time
        },
        {
          fieldName: "dream_time",
          integerValue: dream_time
        },
        {
          fieldName: "awake_time",
          integerValue: awake_time
        },
        {
          fieldName: "all_sleep_time",
          integerValue: all_sleep_time
        },
        {
          fieldName: "wakeup_count",
          integerValue: wakeup_count
        },
    ]
    }
  },
  HeartRate: (bpm) => {
    return {
      dataTypeName: "com.huawei.instantaneous.heart_rate",
      value: [
        {
          fieldName: "bpm",
          floatValue: bpm
        },
    ]
    }
  },
  HeartRateStatistics: (avg,
    max,
    min,
    last) => {
    return {
      dataTypeName: "com.huawei.continuous.heart_rate.statistics",
      value: [
        {
          fieldName: "avg",
          floatValue: avg
        },
        {
          fieldName: "max",
          floatValue: max
        },
        {
          fieldName: "min",
          floatValue: min
        },
        {
          fieldName: "last",
          floatValue: last
        },
    ]
    }
  },
  ExerciseHeartRate: (bpm) => {
    return {
      dataTypeName: "com.huawei.instantaneous.exercise_heart_rate",
      value: [
        {
          fieldName: "bpm",
          floatValue: bpm
        },
    ]
    }
  },
  ExerciseHeartRateStatistics: (avg,
    max,
    min) => {
    return {
      dataTypeName: "com.huawei.continuous.exercise_heart_rate.statistics",
      value: [
        {
          fieldName: "avg",
          floatValue: avg
        },
        {
          fieldName: "max",
          floatValue: max
        },
        {
          fieldName: "min",
          floatValue: min
        },
    ]
    }
  },
  RestingHeartRate: (bpm) => {
    return {
      dataTypeName: "com.huawei.instantaneous.resting_heart_rate",
      value: [
        {
          fieldName: "bpm",
          floatValue: bpm
        },
    ]
    }
  },
  RestingHeartRateStatistics: (avg,
    max,
    min,
    last) => {
    return {
      dataTypeName: "com.huawei.continuous.resting_heart_rate.statistics",
      value: [
        {
          fieldName: "avg",
          floatValue: avg
        },
        {
          fieldName: "max",
          floatValue: max
        },
        {
          fieldName: "min",
          floatValue: min
        },
        {
          fieldName: "last",
          floatValue: last
        },
    ]
    }
  },
  Stress: (score,grade,measureType) => {
    return {
      dataTypeName: "com.huawei.instantaneous.stress",
      value: [
        {
          fieldName: "score",
          integerValue: score
        },
        {
          fieldName: "grade",
          integerValue: grade
        },
        {
          fieldName: "measureType",
          integerValue: measureType
        },
    ]
    }
  },
  StressStatistics: (avg,
    max,
    min,
    last,
    measureCount) => {
    return {
      dataTypeName: "com.huawei.instantaneous.stress.statistics",
      value: [
        {
          fieldName: "avg",
          integerValue: avg
        },
        {
          fieldName: "max",
          integerValue: max
        },
        {
          fieldName: "min",
          integerValue: min
        },
        {
          fieldName: "last",
          integerValue: last
        },
        {
          fieldName: "measureCount",
          integerValue: measureCount
        },
    ]
    }
  },
  BloodGlucose: (level,measure_time,sample_source) => {
    return {
      dataTypeName: "com.huawei.instantaneous.blood_glucose",
      value: [
        {
          fieldName: "level",
          floatValue: level
        },
        {
          fieldName: "measure_time",
          integerValue: measure_time
        },
        {
          fieldName: "sample_source",
          integerValue: sample_source
        },
    ]
    }
  },
  BloodPressure: (systolic_pressure,
    diastolic_pressure,
    body_posture,
    measure_body_part_of_blood_pressure,
    sphygmus,
    measurement_anomaly_flag,
    before_measure_activity,) => {
    return {
      dataTypeName: "com.huawei.instantaneous.blood_pressure",
      value: [
        {
          fieldName: "systolic_pressure",
          floatValue: systolic_pressure
        },
        {
          fieldName: "diastolic_pressure",
          floatValue: diastolic_pressure
        },
        {
          fieldName: "body_posture",
          integerValue: body_posture
        },
        {
          fieldName: "measure_body_part_of_blood_pressure",
          integerValue: measure_body_part_of_blood_pressure
        },
        {
          fieldName: "sphygmus",
          integerValue: sphygmus
        },
        {
          fieldName: "measurement_anomaly_flag",
          integerValue: measurement_anomaly_flag
        },
        {
          fieldName: "before_measure_activity",
          integerValue: before_measure_activity
        },
    ]
    }
  },
  BloodPressureStatistics: (systolic_pressure_avg,
    systolic_pressure_max,
    systolic_pressure_min,
    systolic_pressure_last,
    diastolic_pressure_avg,
    diastolic_pressure_max,
    diastolic_pressure_min,
    diastolic_pressure_last,
    sphygmus_avg,
    sphygmus_max,
    sphygmus_min,
    sphygmus_last) => {
    return {
      dataTypeName: "com.huawei.continuous.body.blood_pressure.statistics",
      value: [
        {
          fieldName: "systolic_pressure_avg",
          floatValue: systolic_pressure_avg
        },
        {
          fieldName: "systolic_pressure_max",
          integerValue: systolic_pressure_max
        },
        {
          fieldName: "systolic_pressure_min",
          integerValue: systolic_pressure_min
        },
        {
          fieldName: "systolic_pressure_last",
          floatValue: systolic_pressure_last
        },
        {
          fieldName: "diastolic_pressure_avg",
          floatValue: diastolic_pressure_avg
        },
        {
          fieldName: "diastolic_pressure_max",
          floatValue: diastolic_pressure_max
        },
        {
          fieldName: "diastolic_pressure_min",
          floatValue: diastolic_pressure_min
        },
        {
          fieldName: "diastolic_pressure_last",
          floatValue: diastolic_pressure_last
        },
        {
          fieldName: "sphygmus_avg",
          floatValue: sphygmus_avg
        },
        {
          fieldName: "sphygmus_max",
          floatValue: sphygmus_max
        },
        {
          fieldName: "sphygmus_min",
          floatValue: sphygmus_min
        },
        {
          fieldName: "sphygmus_last",
          floatValue: sphygmus_last
        },
    ]
    }
  },
  SPO2: (saturation,
    oxygen_supply_flow_rate,
    oxygen_therapy,
    spo2_measurement_mechanism,
    spo2_measurement_approach,) => {
    return {
      dataTypeName: "com.huawei.instantaneous.spo2",
      value: [
        {
          fieldName: "saturation",
          floatValue: saturation
        },
        {
          fieldName: "oxygen_supply_flow_rate",
          floatValue: oxygen_supply_flow_rate
        },
        {
          fieldName: "oxygen_therapy",
          integerValue: oxygen_therapy
        },
        {
          fieldName: "spo2_measurement_mechanism",
          integerValue: spo2_measurement_mechanism
        },
        {
          fieldName: "spo2_measurement_approach",
          integerValue: spo2_measurement_approach
        },
    ]
    }
  },
  SPO2Statistics: (saturation_avg,
    saturation_max,
    saturation_min,
    saturation_last,) => {
    return {
      dataTypeName: "com.huawei.continuous.spo2.statistics",
      value: [
        {
          fieldName: "saturation_avg",
          floatValue: saturation_avg
        },
        {
          fieldName: "saturation_max",
          floatValue: saturation_max
        },
        {
          fieldName: "saturation_min",
          floatValue: saturation_min
        },
        {
          fieldName: "saturation_last",
          floatValue: saturation_last
        },
    ]
    }
  },
  BodyTemperature: (temperature,measure_body_part_of_temperature) => {
    return {
      dataTypeName: "com.huawei.instantaneous.body.temperature",
      value: [
        {
          fieldName: "temperature",
          floatValue: temperature
        },
        {
          fieldName: "measure_body_part_of_temperature",
          integerValue: measure_body_part_of_temperature
        },
    ]
    }
  },
  BodyTemperatureStatistics: (avg,max,min,last) => {
    return {
      dataTypeName: "com.huawei.continuous.body.temperature.statistics",
      value: [
        {
          fieldName: "avg",
          floatValue: avg
        },
        {
          fieldName: "max",
          floatValue: max
        },
        {
          fieldName: "min",
          floatValue: min
        },
        {
          fieldName: "last",
          floatValue: last
        },
    ]
    }
  },
  SkinTemperature: (temperature) => {
    return {
      dataTypeName: "com.huawei.instantaneous.skin.temperature",
      value: [
        {
          fieldName: "temperature",
          floatValue: temperature
        },
    ]
    }
  },
  SkinTemperatureStatistics: (avg,max,min) => {
    return {
      dataTypeName: "com.huawei.continuous.skin.temperature.statistics",
      value: [
        {
          fieldName: "avg",
          floatValue: avg
        },
        {
          fieldName: "max",
          floatValue: max
        },
        {
          fieldName: "min",
          floatValue: min
        },
    ]
    }
  },
  RestingBodyTemperature: (temperature,measure_body_part_of_temperature) => {
    return {
      dataTypeName: "com.huawei.instantaneous.body.temperature.rest",
      value: [
        {
          fieldName: "temperature",
          floatValue: temperature
        },
        {
          fieldName: "measure_body_part_of_temperature",
          integerValue: measure_body_part_of_temperature
        },
    ]
    }
  },
  RestingBodyTemperatureStatistics: (avg,max,min) => {
    return {
      dataTypeName: "com.huawei.continuous.body.temperature.rest.statistics",
      value: [
        {
          fieldName: "avg",
          floatValue: avg
        },
        {
          fieldName: "max",
          floatValue: max
        },
        {
          fieldName: "min",
          floatValue: min
        },
    ]
    }
  },
  ECGDetail: (ecg_type,voltage_datas) => {
    return {
      dataTypeName: "com.huawei.continuous.ecg_detail",
      value: [
        {
          fieldName: "ecg_type",
          integerValue: ecg_type
        },
        {
          fieldName: "voltage_datas",
          stringValue: voltage_datas
        },
    ]
    }
  },
  MenstrualFlow: (volume) => {
    return {
      dataTypeName: "com.huawei.continuous.menstrual_flow",
      value: [
        {
          fieldName: "volume",
          integerValue: volume
        },
    ]
    }
  },
  PeriodPain : (level) => {
    return {
      dataTypeName: "com.huawei.dysmenorrhoea",
      value: [
        {
          fieldName: "level",
          integerValue: level
        },
    ]
    }
  },
}

const HealthRecordDataModel = {
  "com.huawei.continuous.ecg_record": () => {
    let types = [1,6,12,18];
    return [
      {
        fieldName: "ecg_type",
        integerValue: types[getRandomInt(0,types.length)-1]
      },
      {
        fieldName: "avg_heart_rate",
        integerValue: getRandomInt(0,256)-1
      },
      {
        fieldName: "ecg_arrhythmia_type",
        longValue: Math.pow(2,getRandomInt(0,7)-1)
      },
      {
        fieldName: "user_symptom",
        longValue: Math.pow(2,getRandomInt(0,10)-1)
      },
      {
        fieldName: "sampling_frequency",
        integerValue: getRandomInt(0,1001)-1
      },
      {
        fieldName: "ecg_algorithm_version",
        stringValue: "1.0"
      },
      {
        fieldName: "ecg_data_sources",
        stringValue: "1.0"
      },
      {
        fieldName: "ecg_data_length",
        integerValue: 10
      },
      {
        fieldName: "package_name",
        stringValue: "1.0"
      },
  ]
  },
  "com.huawei.health.record.sleep": () => {
    return [
      {
        fieldName: "fall_asleep_time",
        longValue: 0
      },
      {
        fieldName: "wakeup_time",
        longValue: 0
      },
      {
        fieldName: "all_sleep_time",
        integerValue: 0
      },
      {
        fieldName: "light_sleep_time",
        integerValue: 0
      },
      {
        fieldName: "deep_sleep_time",
        integerValue: 0
      },
      {
        fieldName: "dream_time",
        integerValue: 0
      },
      {
        fieldName: "awake_time",
        integerValue: 0
      },
      {
        fieldName: "wakeup_count",
        integerValue: 0
      },
      {
        fieldName: "deep_sleep_part",
        integerValue: 0
      },
      {
        fieldName: "sleep_score",
        integerValue: 0
      },
      {
        fieldName: "go_bed_time",
        integerValue: 0
      },
  ]
  },
  "com.huawei.health.record.tachycardia": () => {
    return [
      {
        fieldName: "threshold",
        floatValue: 0
      },
      {
        fieldName: "avg_heart_rate",
        floatValue: 0
      },
      {
        fieldName: "max_heart_rate",
        floatValue: 0
      },
      {
        fieldName: "min_heart_rate",
        floatValue: 0
      },
  ]
  },
  "com.huawei.health.record.bradycardia": () => {
    return [
      {
        fieldName: "threshold",
        floatValue: 40
      },
      {
        fieldName: "avg_heart_rate",
        floatValue: 0
      },
      {
        fieldName: "max_heart_rate",
        floatValue: 0
      },
      {
        fieldName: "min_heart_rate",
        floatValue: 0
      },
  ]
  },
  "com.huawei.health.record.menstrual_cycle": () => {
    return [
      {
        fieldName: "recordDay",
        integerValue: getRandomInt(20140100,29991231)
      },
      {
        fieldName: "status",
        integerValue: getRandomInt(0,5)-1
      },
      {
        fieldName: "subStatus",
        integerValue: getRandomInt(0,3)-1
      },
      {
        fieldName: "timeZone",
        stringValue: "+0800"
      },
      {
        fieldName: "remarks",
        stringValue: ""
      },
  ]
  }
}

const DataCollectorModel = {
  collectorDataType: () => {
    let name, field = ""
    let names = ["com.huawei.instantaneous.height",
    "com.huawei.instantaneous.body_weight",
    "com.huawei.continuous.body_weight.statistics",
    "com.huawei.continuous.steps.delta",
    "com.huawei.continuous.steps.total",
    "com.huawei.continuous.distance.delta",
    "com.huawei.continuous.distance.total",
    "com.huawei.instantaneous.speed",
    "com.huawei.continuous.speed.statistics",
    "com.huawei.instantaneous.steps.rate",
    "com.huawei.continuous.steps.rate.statistics",
    "com.huawei.instantaneous.altitude",
    "com.huawei.continuous.altitude.statistics",
    "com.huawei.continuous.jump",
    "com.huawei.continuous.jump.statistics",
    "com.huawei.instantaneous.skip_speed",
    "com.huawei.continuous.skip_speed.statistics",
    "com.huawei.continuous.run.posture",
    "com.huawei.continuous.run.posture.statistics",
    "com.huawei.continuous.calories.burnt",
    "com.huawei.continuous.calories.burnt.total",
    "com.huawei.continuous.exercise_intensity.v2",
    "com.huawei.continuous.exercise_intensity.v2.statistics",
    "com.huawei.instantaneous.pedaling_rate",
    "com.huawei.continuous.pedaling_rate.statistics",
    "com.huawei.instantaneous.biking.wheel_rotation",
    "com.huawei.resistance",
    "com.huawei.resistance.statistics",
    "com.huawei.continuous.sleep.fragment",
    "com.huawei.continuous.sleep.statistics",
    "com.huawei.instantaneous.heart_rate",
    "com.huawei.continuous.heart_rate.statistics",
    "com.huawei.instantaneous.exercise_heart_rate",
    "com.huawei.continuous.exercise_heart_rate.statistics",
    "com.huawei.instantaneous.resting_heart_rate",
    "com.huawei.continuous.resting_heart_rate.statistics",
    "com.huawei.instantaneous.stress",
    "com.huawei.instantaneous.stress.statistics",
    "com.huawei.instantaneous.blood_glucose",
    "com.huawei.continuous.body.blood_pressure.statistics",
    "com.huawei.instantaneous.spo2",
    "com.huawei.continuous.spo2.statistics",
    "com.huawei.instantaneous.body.temperature",
    "com.huawei.continuous.body.temperature.statistics",
    "com.huawei.instantaneous.skin.temperature",
    "com.huawei.continuous.skin.temperature.statistics",
    "com.huawei.instantaneous.body.temperature.rest",
    "com.huawei.continuous.body.temperature.rest.statistics",
    "com.huawei.activity.feature.jumping_rope",
    "com.huawei.activity.feature.basketball",
    "com.huawei.health.record.sleep",
    "com.huawei.health.record.tachycardia",
    "com.huawei.health.record.bradycardia"]
    name = names[getRandomInt(0,names.length)-1]
    switch (name) {
      case "com.huawei.instantaneous.height":
        field = [{
          format: "float",
          name: "height",
        }]
        break;
      case "com.huawei.instantaneous.body_weight":
        field = [{
          format: "float",
          name: "body_weight",
        },{
          format: "float",
          name: "bmi",
        },{
          format: "float",
          name: "body_fat",
        },{
          format: "float",
          name: "body_fat_rate",
        },{
          format: "float",
          name: "muscle_mass",
        },{
          format: "float",
          name: "basal_metabolism",
        },{
          format: "float",
          name: "moisture",
        },{
          format: "float",
          name: "moisture_rate",
        },{
          format: "float",
          name: "visceral_fat_level",
        },{
          format: "float",
          name: "bone_salt",
        },{
          format: "float",
          name: "protein_rate",
        },{
          format: "integer",
          name: "body_age",
        },{
          format: "float",
          name: "body_score",
        },{
          format: "float",
          name: "skeletal_musclel_mass",
        },{
          format: "float",
          name: "impedance",
        }]
        break;
      case "com.huawei.continuous.body_weight.statistics":
        field = [{
          format: "float",
          name: "avg",
        },{
          format: "float",
          name: "max",
        },{
          format: "float",
          name: "min",
        }]
        break;
      case "com.huawei.continuous.steps.delta":
        field = [{
          format: "integer",
          name: "steps_delta",
        }]
        break;
      case "com.huawei.continuous.steps.total":
        field = [{
          format: "integer",
          name: "steps",
        },{
          format: "integer",
          name: "duration",
        }]
        break;
      case "com.huawei.continuous.distance.delta":
        field = [{
          format: "float",
          name: "distance_delta",
        }]
        break;
      case "com.huawei.continuous.distance.total":
        field = [{
          format: "float",
          name: "distance",
        }]
        break;
      case "com.huawei.instantaneous.speed":
        field = [{
          format: "float",
          name: "speed",
        }]
        break;
      case "com.huawei.continuous.speed.statistics":
        field = [{
          format: "float",
          name: "avg",
        },{
          format: "float",
          name: "max",
        },{
          format: "float",
          name: "min",
        }]
        break;
      case "com.huawei.instantaneous.steps.rate":
        field = [{
          format: "float",
          name: "step_rate",
        }]
        break;
      case "com.huawei.continuous.steps.rate.statistics":
        field = [{
          format: "float",
          name: "avg",
        },{
          format: "float",
          name: "max",
        },{
          format: "float",
          name: "min",
        }]
        break;
      case "com.huawei.instantaneous.altitude":
        field = [{
          format: "double",
          name: "altitude",
        }]
        break;
      case "com.huawei.continuous.altitude.statistics":
        field = [{
          format: "float",
          name: "avg",
        },{
          format: "float",
          name: "max",
        },{
          format: "float",
          name: "min",
        },{
          format: "float",
          name: "ascent_total",
        },{
          format: "float",
          name: "descent_total",
        }]
        break;
      case "com.huawei.continuous.jump":
        field = [{
          format: "float",
          name: "jump_height",
        },{
          format: "integer",
          name: "passage_duration",
        }]
        break;
      case "com.huawei.continuous.jump.statistics":
        field = [{
          format: "float",
          name: "jump_times",
        },{
          format: "float",
          name: "avg_jump_height",
        },{
          format: "float",
          name: "max_jump_height",
        },{
          format: "float",
          name: "min_jump_height",
        },{
          format: "integer",
          name: "avg_passage_duration",
        },{
          format: "integer",
          name: "max_passage_duration",
        },{
          format: "integer",
          name: "min_passage_duration",
        }]
        break;
      case "com.huawei.instantaneous.skip_speed":
        field = [{
          format: "integer",
          name: "skip_speed",
        }]
        break;
      case "com.huawei.continuous.skip_speed.statistics":
        field = [{
          format: "integer",
          name: "avg",
        },{
          format: "integer",
          name: "max",
        },{
          format: "integer",
          name: "min",
        }]
        break;
      case "com.huawei.continuous.run.posture":
        field = [{
          format: "integer",
          name: "ground_contact_time",
        },{
          format: "integer",
          name: "ground_impact_acceleration",
        },{
          format: "integer",
          name: "swing_angle",
        },{
          format: "integer",
          name: "eversion_excursion",
        },{
          format: "integer",
          name: "hang_time",
        },{
          format: "double",
          name: "ground_hang_time_rate",
        },{
          format: "integer",
          name: "fore_foot_strike_pattern",
        },{
          format: "integer",
          name: "hind_foot_strike_pattern",
        },{
          format: "integer",
          name: "whole_foot_strike_pattern",
        }]
        break;
      case "com.huawei.continuous.run.posture.statistics":
        field = [{
          format: "integer",
          name: "avg_ground_contact_time",
        },{
          format: "integer",
          name: "avg_ground_impact_acceleration",
        },{
          format: "integer",
          name: "avg_swing_angle",
        },{
          format: "integer",
          name: "avg_eversion_excursion",
        },{
          format: "integer",
          name: "avg_hang_time",
        },{
          format: "double",
          name: "avg_ground_hang_time_rate",
        },{
          format: "integer",
          name: "fore_foot_strike_pattern",
        },{
          format: "integer",
          name: "hind_foot_strike_pattern",
        },{
          format: "integer",
          name: "whole_foot_strike_pattern",
        }]
        break;
      case "com.huawei.continuous.calories.burnt":
        field = [{
          format: "float",
          name: "calories",
        }]
        break;
      case "com.huawei.continuous.calories.burnt.total":
        field = [{
          format: "float",
          name: "calories_total",
        }]
        break;
      case "com.huawei.continuous.exercise_intensity.v2":
        field = [{
          format: "integer",
          name: "exercise_type",
        }]
        break;
      case "com.huawei.continuous.exercise_intensity.v2.statistics":
        field = [{
          format: "map<integer, integer>",//This may be incorrect but it is what is documented in the doucmentation
          name: "intensity_map",
        }]
        break;
      case "com.huawei.instantaneous.pedaling_rate":
        field = [{
          format: "float",
          name: "rpm",
        }]
        break;
      case "com.huawei.continuous.pedaling_rate.statistics":
        field = [{
          format: "float",
          name: "avg",
        },{
          format: "float",
          name: "max",
        },{
          format: "float",
          name: "min",
        },]
        break;
      case "com.huawei.instantaneous.biking.wheel_rotation":
        field = [{
          format: "float",
          name: "rpm",
        }]
        break;
      case "com.huawei.resistance":
        field = [{
          format: "integer",
          name: "resistanceLevel",
        }]
        break;
      case "com.huawei.resistance.statistics":
        field = [{
          format: "integer",
          name: "resistanceLevelOneLowerLimit",
        },{
          format: "integer",
          name: "resistanceLevelTwoLowerLimit",
        },{
          format: "integer",
          name: "resistanceLevelThreeLowerLimit",
        },{
          format: "integer",
          name: "resistanceLevelFourLowerLimit",
        },{
          format: "integer",
          name: "resistanceLevelFiveLowerLimit",
        },{
          format: "integer",
          name: "resistanceLevelFiveUpperLimit",
        },{
          format: "integer",
          name: "resistanceLevelOneTime",
        },{
          format: "integer",
          name: "resistanceLevelTwoTime",
        },{
          format: "integer",
          name: "resistanceLevelThreeTime",
        },{
          format: "integer",
          name: "resistanceLevelFourTime",
        },{
          format: "integer",
          name: "resistanceLevelFiveTime",
        },{
          format: "integer",
          name: "maxRes",
        },{
          format: "integer",
          name: "minRes",
        }]
        break;
      case "com.huawei.continuous.sleep.fragment":
        field = [{
          format: "integer",
          name: "sleep_state",
        }]
        break;
      case "com.huawei.continuous.sleep.statistics":
        field = [{
          format: "long",
          name: "fall_asleep_time",
        },{
          format: "long",
          name: "wakeup_time",
        },{
          format: "integer",
          name: "light_sleep_time",
        },{
          format: "integer",
          name: "deep_sleep_time",
        },{
          format: "integer",
          name: "dream_time",
        },{
          format: "integer",
          name: "awake_time",
        },{
          format: "integer",
          name: "all_sleep_time",
        },{
          format: "integer",
          name: "wakeup_count",
        },{
          format: "integer",
          name: "deep_sleep_part",
        },{
          format: "integer",
          name: "sleep_score",
        },{
          format: "long",
          name: "go_bed_time",
        }]
        break;  
      case "com.huawei.instantaneous.heart_rate":
        field = [{
          format: "float",
          name: "bpm",
        }]
        break;  
      case "com.huawei.continuous.heart_rate.statistics":
        field = [{
          format: "float",
          name: "avg",
        },{
          format: "float",
          name: "max",
        },{
          format: "float",
          name: "min",
        }]
        break;  
      case "com.huawei.instantaneous.exercise_heart_rate":
        field = [{
          format: "float",
          name: "bpm",
        }]
        break;  
      case "com.huawei.continuous.exercise_heart_rate.statistics":
        field = [{
          format: "float",
          name: "avg",
        },{
          format: "float",
          name: "max",
        },{
          format: "float",
          name: "min",
        }]
        break;  
      case "com.huawei.instantaneous.resting_heart_rate":
        field = [{
          format: "float",
          name: "bpm",
        }]
        break;  
      case "com.huawei.continuous.resting_heart_rate.statistics":
        field = [{
          format: "float",
          name: "avg",
        },{
          format: "float",
          name: "max",
        },{
          format: "float",
          name: "min",
        },{
          format: "float",
          name: "last",
        }]
        break;          
      case "com.huawei.instantaneous.stress":
        field = [{
          format: "integer",
          name: "score",
        },{
          format: "integer",
          name: "grade",
        },{
          format: "integer",
          name: "measureType",
        }]
        break;          
      case "com.huawei.instantaneous.stress.statistics":
      field = [{
        format: "integer",
        name: "avg",
      },{
        format: "integer",
        name: "max",
      },{
        format: "integer",
        name: "min",
      },{
        format: "integer",
        name: "last",
      },{
        format: "integer",
        name: "measureCount",
      }]
      break;          
      case "com.huawei.instantaneous.blood_glucose":
        field = [{
          format: "float",
          name: "systolic_pressure",
        },{
          format: "float",
          name: "diastolic_pressure",
        },{
          format: "integer",
          name: "body_posture",
        },{
          format: "integer",
          name: "measure_body_part_of_blood_pressure",
        },{
          format: "float",
          name: "sphygmus",
        },{
          format: "integer",
          name: "measurement_anomaly_flag",
        },{
          format: "integer",
          name: "before_measure_activity",
        }]
        break;          
      case "com.huawei.continuous.body.blood_pressure.statistics":
        field = [{
          format: "float",
          name: "systolic_pressure_avg",
        },{
          format: "float",
          name: "systolic_pressure_max",
        },{
          format: "float",
          name: "systolic_pressure_min",
        },{
          format: "float",
          name: "diastolic_pressure_avg",
        },{
          format: "float",
          name: "diastolic_pressure_max",
        },{
          format: "float",
          name: "diastolic_pressure_min",
        },{
          format: "float",
          name: "sphygmus_avg",
        },{
          format: "float",
          name: "sphygmus_max",
        },{
          format: "float",
          name: "sphygmus_min",
        },{
          format: "float",
          name: "sphygmus_last",
        }]
        break;          
      case "com.huawei.instantaneous.spo2":
        field = [{
          format: "float",
          name: "saturation",
        },{
          format: "float",
          name: "oxygen_supply_flow_rate",
        },{
          format: "integer",
          name: "oxygen_therapy",
        },{
          format: "integer",
          name: "spo2_measurement_mechanism",
        },{
          format: "integer",
          name: "spo2_measurement_approach",
        }]
        break;          
      case "com.huawei.continuous.spo2.statistics":
        field = [{
          format: "float",
          name: "saturation_avg",
        },{
          format: "float",
          name: "saturation_max",
        },{
          format: "float",
          name: "saturation_min",
        },{
          format: "float",
          name: "oxygen_supply_flow_rate_avg",
        },{
          format: "float",
          name: "oxygen_supply_flow_rate_max",
        },{
          format: "float",
          name: "coxygen_supply_flow_rate_min",
        },{
          format: "integer",
          name: "oxygen_therapy",
        },{
          format: "integer",
          name: "spo2_measurement_mechanism",
        },{
          format: "integer",
          name: "spo2_measurement_approach",
        }]
        break;   
      case "com.huawei.instantaneous.body.temperature":
        field = [{
          format: "float",
          name: "temperature",
        },{
          format: "integer",
          name: "measure_body_part_of_temperature",
        }]
        break;   
      case "com.huawei.continuous.body.temperature.statistics":
        field = [{
          format: "float",
          name: "avg",
        },{
          format: "float",
          name: "max",
        },{
          format: "float",
          name: "min",
        }]
        break;   
      case "com.huawei.instantaneous.skin.temperature":
        field = [{
          format: "float",
          name: "temperature",
        }]
        break;   
      case "com.huawei.continuous.skin.temperature.statistics":
        field = [{
          format: "float",
          name: "avg",
        },{
          format: "float",
          name: "max",
        },{
          format: "float",
          name: "min",
        }]
        break;   
      case "com.huawei.instantaneous.body.temperature.rest":
        field = [{
          format: "float",
          name: "temperature",
        },{
          format: "integer",
          name: "measure_body_part_of_temperature",
        }]
        break;   
      case "com.huawei.continuous.body.temperature.rest.statistics":
        field = [{
          format: "float",
          name: "avg",
        },{
          format: "float",
          name: "max",
        },{
          format: "float",
          name: "min",
        }]
        break;   
      case "com.huawei.activity.feature.jumping_rope":
        field = [{
          format: "integer",
          name: "skip_num",
        },{
          format: "integer",
          name: "stumbling_rope",
        },{
          format: "integer",
          name: "max_skipping_times",
        },{
          format: "integer",
          name: "double_shake",
        },{
          format: "integer",
          name: "triple_shake",
        }]
        break;   
      case "com.huawei.activity.feature.basketball":
        field = [{
          format: "integer",
          name: "overall_score",
        },{
          format: "integer",
          name: "burst_score",
        },{
          format: "integer",
          name: "jump_score",
        },{
          format: "integer",
          name: "run_score",
        },{
          format: "integer",
          name: "breakthrough_score",
        },{
          format: "integer",
          name: "sport_intensity_score",
        }]
        break;  
      case "com.huawei.health.record.sleep":
        field = [{
          format: "integer",
          name: "fall_asleep_time",
        },{
          format: "integer",
          name: "wake_up_time",
        },{
          format: "integer",
          name: "all_sleep_time",
        },{
          format: "integer",
          name: "light_sleep_time",
        },{
          format: "integer",
          name: "deep_sleep_time",
        },{
          format: "integer",
          name: "dream_time",
        },{
          format: "integer",
          name: "awake_time",
        },{
          format: "integer",
          name: "wake_up_count",
        },{
          format: "integer",
          name: "deep_sleep_part",
        },{
          format: "integer",
          name: "sleep_score",
        },{
          format: "integer",
          name: "go_bed_time",
        }]
        break;            
      case "com.huawei.health.record.tachycardia":
        field = [{
          format: "float",
          name: "threshold",
        },{
          format: "float",
          name: "avg_heart_rate",
        },{
          format: "float",
          name: "max_heart_rate",
        },{
          format: "float",
          name: "min_heart_rate",
        }]
        break;            
      case "com.huawei.health.record.bradycardia":
        field = [{
          format: "float",
          name: "threshold",
        },{
          format: "float",
          name: "avg_heart_rate",
        },{
          format: "float",
          name: "max_heart_rate",
        },{
          format: "float",
          name: "min_heart_rate",
        }]
        break;            
      default:
        break;
    }
    return {
      field: field,
      name: name
  }
  },
  collectorType: (name) => {
    if (name.includes("statistics")){
      return "derived"
    } else {
      return "raw"
    }
  },
  collectorId: (collectorType, typeName, packageName, modelNum, uniqueId, collectorName) => {
    return collectorType + ":" + typeName + ":" + packageName + ":"+ modelNum + ":" + uniqueId + ":" + collectorName ;
  },
  collectorName: () => {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;

    for (var i = 0; i < 15; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result; 
  },
  deviceInfo: () => {
    let types = [
      "Phone",
      "Smart watch",
      "Smart band",
      "Smart earphone",
      "Scales",
      "Blood glucose monitor",
      "Blood pressure monitor",
      "Ecg equipment",
      "Heart rate monitor",
      "Thermometers",
      "Oximeter",
      "Treadmill",
      "Elliptical machine",
      "Exercise bike ",
      "Rowing machine",
      "Walking machine",
      "Rope skipping ",
      "Third watch",
      "Unknown",
    ]
    let manufacturers = ["huawei", "apple", "samsung", "google"]
    var modelNum = '';
    var uniqueId = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var digits = '0123456789'
    var charactersLength = characters.length;
    var digitsLength = digits.length;

    for (var i = 0; i < 15; i++) {
      modelNum += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    for (var i = 0; i < 6; i++) {
      uniqueId += digits.charAt(Math.floor(Math.random() * digitsLength));
    }

    return {
      devType: types[getRandomInt(0,types.length)-1],
      manufacturer: manufacturers[getRandomInt(0,manufacturers.length)-1],
      modelNum: modelNum,
      uniqueId: uniqueId,
      version: getRandomInt(0,12)-1 + "." + getRandomInt(0,12)-1,
  }
  },
  name: () => {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;

    for (var i = 0; i < 15; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result; 
  },
  lastUpdateTime: () => {
    switch (getRandomInt(0,2)) {
      case 1:
        return 1604973600000 + getRandomInt(0,315360000000)
      default:
        return 1604973600000 - getRandomInt(0,315360000000)
    } 

  }
}

const dataModels = {
  HealthRecord: {
    data: MOCK.HealthRecord,
    mockup: HealthRecordModel
  },
  ActivityRecord: {
    data: MOCK.ActivityRecord,
    mockup: ActivityRecordModel
  },
  DataCollector: {
    data: MOCK.DataCollector,
    mockup: DataCollectorModel
  }

};

export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}
export function getActivityRecordMockupData(dataType, dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }
  if (dataType === "ASYNC") {
    const length = dataModels[dataModel].data.length
    const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    var final=[];
    
    for (var i = 1; i < length;i++){
      var mockupDataRow = dataModels[dataModel].data[1].split("\t");
      mockupDataHeader.forEach((k, i) => {
        mockupData[k] = mockupDataRow[i];
      });
      final.push(Object.assign({},mockupData))
    }
    mockupData = final
  }

  [    
    "appInfo",
    "id",
    "startTime",
    "endTime",
    "modifyTime",
    "activeTime",
    "activityType",
    "activitySummary",
    "name",
    "deviceInfo",
    "cursor",
    "desc",
    "subDataRelation",
    "details",
    "timeZone",
    "metadata"
  ].forEach((key, i) => {
    switch (key) {
      case "appInfo":
        [
          "appName",
          "appPackageName",
          "appVersion",
          "clientId",
          "desc",
        ].forEach((key2, i) => {
          switch(key2){
            case "clientId":
              mockupData[key][key2] = AppInfoModel[key2](mockupData[key]["appPackageName"]);
              break;
            default:
              mockupData[key][key2] = AppInfoModel[key2]();
              break;
          }
        })
        break;
      
      // default:
      case "endTime":
        mockupData[key] = mockupModel[key](mockupData["startTime"]);
        break;
      case "modifyTime":
        mockupData[key] = mockupModel[key](mockupData["endTime"]);
        break;
      case "activeTime":
        mockupData[key] = mockupModel[key](mockupData["startTime"],mockupData["endTime"]);
        break;
      case "name":
      
        mockupData[key] = mockupModel[key](mockupData["activityType"]);
        break;
      case "activitySummary":
        mockupData[key] = mockupModel[key](mockupData["activityType"]);
        break;
        case "details":
          mockupData[key] = []
          // let samplePoints = SampleSetModel["samplePoints"](mockupData["activityType"])
          let samplePoints = []
          let x = types.findIndex((type)=>{
            if (type["value"]===mockupData["activityType"]){
              return true
            } else {
              return false
            }
          })
          let final = []
          types[x]["atomic"].forEach((atomic)=>{
            final.push({
              dataCollectorId: "raw:com.huawei.instantaneous.skip_speed:101278501:huawei:mp:1234567890",
              endTime: SampleSetModel["endTime"](),
              samplePoints: SamplePoint(atomic),
              startTime: SampleSetModel["startTime"](),
              cursor: SampleSetModel["cursor"]()
              })
          })
          mockupData[key] = final
  
          break;
      case "id":
      case "startTime":
      case "activityType":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });



  
  return mockupData;
}

export function getHealthRecordMockupData(dataType, dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }
  if (dataType === "ASYNC") {
    const length = dataModels[dataModel].data.length
    const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    var final=[];
    
    for (var i = 1; i < length;i++){
      var mockupDataRow = dataModels[dataModel].data[1].split("\t");
      mockupDataHeader.forEach((k, i) => {
        mockupData[k] = mockupDataRow[i];
      });
      final.push(Object.assign({},mockupData))
    }
    mockupData = final
  }
  [    
    "startTime",
    "endTime",
    "dataTypeName",
    "value",
    "id",
    "subDataRelation",
    "subdata"
  ].forEach((key, i) => {
    switch (key) {
      case "subDataRelation":
        mockupData[key] = mockupModel[key](mockupData["dataTypeName"]);
        break;
      case "subdata":
        mockupData[key] = {}
        mockupData["subDataRelation"].forEach((subData)=>{
          let samplePoints = []
          samplePoints.push(SampleSetModel["samplePoints"](subData["dataTypeName"],subData["dataCollectorId"]))
          mockupData[key][subData["dataTypeName"]] = {
            dataCollectorId: subData["dataCollectorId"],
            endTime: SampleSetModel["endTime"](),
            samplePoints: samplePoints,
            startTime: SampleSetModel["startTime"](),
            cursor: SampleSetModel["cursor"]()
          }
        })

        break;
      case "value":
        mockupData[key] = HealthRecordDataModel[mockupData["dataTypeName"]]();
        break;
      case "endTime":
        mockupData[key] = mockupModel[key](mockupData["startTime"]);
        break;
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });


  
  return mockupData;
}

export function getDataCollectorMockupData(dataType, dataModel, dataDate) {
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
    "appInfo",
    "collectorDataType",
    "collectorType",
    "collectorName",
    "deviceInfo",
    "name",
    "lastUpdateTime",
    "collectorId",
  ].forEach((key, i) => {
    switch (key) {
      case "appInfo":
        [
          "appName",
          "appPackageName",
          "appVersion",
          "clientId",
          "desc",
        ].forEach((key2, i) => {
          switch(key2){
            case "clientId":
              mockupData[key][key2] = AppInfoModel[key2](mockupData[key]["appPackageName"]);
              break;
            default:
              mockupData[key][key2] = AppInfoModel[key2]();
              break;
          }
        })
        break;
      case "collectorType":
        mockupData[key] = mockupModel[key](mockupData["collectorDataType"].name);
        break;
      case "collectorId":
        mockupData[key] = mockupModel[key](mockupData["collectorType"],mockupData["collectorDataType"].name,mockupData["appInfo"].appPackageName,mockupData["deviceInfo"].modelNum,mockupData["deviceInfo"].uniqueId,mockupData["collectorName"]);
        break;
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });


  
  return mockupData;
}
